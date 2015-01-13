angular.module('cafehopApp.controllers').controller('MapController', 
    ['$scope', '$http', '$rootScope', 'CafeService', 'MapCafes', 'MapDefaults', 'MarkerCallbacks',
    function($scope, $http, $rootScope, CafeService, MapCafes, MapDefaults, MarkerCallbacks){
    
    // Only hide footer and span header for map view
    $rootScope.hideFooter = true;
    $rootScope.fullContainer = true;
    $rootScope.$on('$locationChangeStart', function(e, next, curr){
        $rootScope.hideFooter = false;
        $rootScope.fullContainer = false;
    });

    $scope.markers = [];
    $scope.markersControl = {};
    $scope.mapCafes = MapCafes;
    $scope.mapDefaults = MapDefaults;
    $scope.initialized = false;
    $scope.idKeyCounter = 0;

    $scope.cafes = $scope.mapCafes.cafes;
    $scope.legend = MapDefaults.legend;

    $scope.infoWindow = {
        marker: null,
        model: null,
        coords: {},
        options: $scope.mapDefaults.marker.windowOptions
    }

    $scope.user = {
        location: {
            name: "Kuala Lumpur",
            details: {},

            //set true if want to update on geolocation success 
            updateMarkerOnGeolocation: true, 
        },
    }

    $scope.userLocationInput = {
        live: false,
        options: {
            watchEnter: true,
        }
    }

    $scope.$watch('user.location.details', function(newValue, oldValue){
        // If user selects new location,
        if($scope.user.location.details.geometry){
            var ll =  $scope.user.location.details.geometry.location;

            if($scope.user.location.updateMarkerOnGeolocation){
                $scope.userMarker.coords = {
                    latitude: ll.lat(),
                    longitude: ll.lng()
                }
            }
            else{
                $scope.user.location.updateMarkerOnGeolocation = true;
            }
            $scope.onUserMarkerPlaced(ll);
        }
    }, true);

    $scope.showUserLocationInput = function(){
        $scope.userLocationInput.live = true;

        setTimeout(function(){
            var input = $('#search-location', '.location-input')
            input.focus();
            input.select();
        }, 100)
        return false;
    }
    $scope.hideUserLocationInput = function(){
        $scope.userLocationInput.live = false;
        return false;
    }

    // PAN AND FIT 
    $scope.fitMarkerBounds = function(){
        
        if(!$scope.instance){
            return;
        }

        var bounds = new google.maps.LatLngBounds();

        // Fit all markers
        angular.forEach($scope.markers, function(marker, index){
            var coords = marker.coords;
            bounds.extend(new google.maps.LatLng(coords.latitude, coords.longitude));
        });

        $scope.instance.panToBounds(bounds);
        $scope.instance.fitBounds(bounds);
    }

    $scope.panToUser = function(){
        var user =  $scope.findMarker($scope.userMarker.idKey);
        if(user){
            var ll = user.getPosition();
            $scope.instance.panTo(ll);
        }
    }

    // Place marker in default center
    $scope.placeDefaultUser = function(marker){
        marker.coords = $scope.mapDefaults.center;
        var latlng = new google.maps.LatLng($scope.mapDefaults.center.latitude, $scope.mapDefaults.center.longitude);
        $scope.geolocateUser(latlng);
        $scope.instance.panTo(latlng);
    }

    $scope.getUserLocation = function(){
        $scope.panToUser();

        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(function(pos){
                $scope.loadingCafes = true;
                $scope.userMarker.coords = pos.coords;
                var latlng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
                $scope.onUserMarkerPlaced(latlng);                 
                $scope.geolocateUser(latlng);
           });
        }
    }

    $scope.onUserMarkerPlaced = function(latlng){
        $scope.instance.panTo(latlng);
        $scope.getCafes(latlng);
    }

    // Geolocate address using Places API
    $scope.geolocateUser = function(ll){
        var service = new google.maps.places.PlacesService($scope.instance);
        service.nearbySearch({
            location: ll,
            radius: 1000
        }, function(results, status){
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                $scope.cannotFindUser = false;
                $scope.user.location.details = results[0];
                $scope.user.location.name = results[0].name;
            }
            else{
                $scope.cannotFindUser = true;
            }
        });
    }

    $scope.ready = function(map){
        if($scope.initialized){
            return;
        }
        $scope.initialized = true;

        $scope.instance = map;
        $scope.$apply(function(){
            // Create user marker
            $scope.userMarker = {
                idKey: $scope.idKeyCounter++, 
                icon: MapDefaults.icons.current,
                options:{
                    draggable: true
                },
                window: {
                    options: MapDefaults.marker.windowOptions,
                },
                isNotUser: function(){
                    return false;
                }
            };

            // Set KL as center if no user's location
            $scope.placeDefaultUser($scope.userMarker)
            
            // Get current user location
            $scope.getUserLocation();

            $scope.markers.push($scope.userMarker);
            $scope.setWindowMarker($scope.userMarker);

            if($scope.markers.length <= 1){
                $scope.addMarkers($scope.cafes);
            }

            // Initialize marker callbacks and events
            $scope.markerCallbacks = MarkerCallbacks.init({
                map: $scope.instance,
                llCallback: function(ll){
                    $scope.user.location.updateMarkerOnGeolocation = false;
                    $scope.geolocateUser(ll);
                    $scope.getCafes(ll);
                },
                showWindow: $scope.setWindowMarker,
                userMarker: $scope.userMarker
            }); 

            $scope.markerEvents = $scope.markerCallbacks.getEvents();

        });
    }

    $scope.getCafes = function(ll){
        var llString;

        if(ll){
            llString = ll.lat() + "," + ll.lng();
        }

        var successCallback = function(cafes){
            $scope.loadingCafes = false;
            $scope.addMarkers(cafes);
        }

        $scope.mapCafes.getCafes({
            before: function(){
                $scope.loadingCafes = true;
            },
            success: successCallback,
            ll: llString
        })
    }

    $scope.map = {
        center: angular.copy($scope.mapDefaults.center),
        zoom: 13,
        events: {
            tilesloaded: $scope.ready
        },
        options: {
            scrollwheel: false,
            mapTypeControl: false
        },
        showWindow: false
    };

    $scope.addMarkers = function(cafes){
        if(cafes.length < 1 || !$scope.initialized){
            return;
        }

        $scope.markers = [];
        $scope.markers.push($scope.userMarker);
        // Create markers for each cafe
        angular.forEach(cafes, function(cafe, index){
            var m = {
                idKey: $scope.idKeyCounter++,
                icon:  MapDefaults.icons.cafe,
                coords: {
                    latitude: cafe.lat,
                    longitude: cafe.lng
                },
                cafe: cafe,
                window: {
                    iconVisible: true,
                    closeClick: true,
                    options: $scope.mapDefaults.marker.windowOptions
                },
                options:{
                    title: cafe.name,
                    draggable: false
                },
                isNotUser: function(){
                    return this.idKey != $scope.userMarker.idKey
                }
            }
            cafe.idKey = m.idKey;
            $scope.markers.push(m)
        });

        $scope.fitMarkerBounds();
    };

    $scope.getPhotoUrl = function(cafe){
        var photos = cafe.photos;
        if(photos && photos.count > 0){
            var c = photos.items[0];
            return c.url;
        }

        return;
    }

    $scope.getPhotoStyle = function(cafe){
        return {
            'background-image' : 'url(' + $scope.getPhotoUrl(cafe) + ')'
        }
    }

    $scope.getCafeUrl = function(cafe){
        if(cafe){
            // Remove slashes from cafe name, browser address bars ignore encode %2F
            var clean = cafe.name.replace('/', '');
            return "#cafe/" + cafe.id + "/" + encodeURIComponent(clean);
        }
        return '#';
    }

    $scope.setWindowMarker = function(model){
        $scope.infoWindow.model = model;
        $scope.map.showWindow = true;
        $scope.infoWindow.coords = model.coords;
    }

    $scope.triggerMarkerMouseout = function(idKey){
        var m = $scope.findMarker(idKey);
        if(m){
            google.maps.event.trigger(m, 'mouseout')
        }
        
    }

    $scope.triggerMarkerMouseover = function(idKey){
        var m = $scope.findMarker(idKey);
        if(m){
            google.maps.event.trigger(m, 'mouseover')
        }
    }

    $scope.findMarker = function(idKey){
        var markers =  $scope.markersControl.getGMarkers();
        var m;

        for(var i in markers){
            if(markers[i].key == idKey){
                m = markers[i];
            }
        }
        return m;
    }

    $scope.activateMapView = function(){
        $('.map-view').removeClass('hide-view');
        $('.list-view').addClass('hide-view');
        $('.list-view-btn').removeClass('active');
        $('.map-view-btn').addClass('active');
    }

    $scope.activateListView = function(){
        $('.map-view').addClass('hide-view');
        $('.list-view').removeClass('hide-view');
        $('.list-view-btn').addClass('active');
        $('.map-view-btn').removeClass('active');

    }

    $scope.init = function(){
        $scope.getCafes();
    }

    $scope.init();
}]);
