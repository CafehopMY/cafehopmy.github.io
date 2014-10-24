angular.module('cafehopApp.controllers').controller('MapController', 
    ['$scope', '$http', '$rootScope', 'CafeService', 'MapCafes', 'MapDefaults', 'MarkerCallbacks', 
    function($scope, $http, $rootScope, CafeService, MapCafes, MapDefaults, MarkerCallbacks){
    
    // Only hide footer for map view
    $rootScope.hideFooter = true;
    $rootScope.$on('$locationChangeStart', function(e, next, curr){
        $rootScope.hideFooter = false;
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

    $scope.sponsors = {
        0 : {
            name: 'Sponsor A'
        },
        1 : {
            name: 'Sponsor B'
        }
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
        var ll = $scope.findMarker($scope.userMarker.idKey).getPosition();
        $scope.instance.panTo(ll);
    }

    // Place marker in default center
    $scope.placeDefaultUser = function(marker){
        marker.coords = $scope.mapDefaults.center;
        var latlng = new google.maps.LatLng($scope.mapDefaults.center.latitude, $scope.mapDefaults.center.longitude);
        $scope.instance.panTo(latlng);
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
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(function(pos){
                    $scope.loadingCafes = true;
                    $scope.userMarker.coords = pos.coords;
                    var latlng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
                    $scope.instance.panTo(latlng);
                    $scope.getCafes(latlng);
               });
            }

            $scope.markers.push($scope.userMarker);

            $scope.setWindowMarker($scope.userMarker);

            if($scope.markers.length <= 1){
                $scope.addMarkers($scope.cafes);
            }

            // Initialize marker callbacks and events
            $scope.markerCallbacks = MarkerCallbacks.init({
                map: $scope.instance,
                llCallback: $scope.getCafes,
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

        var successCallback = $scope.addMarkers;

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
                icon: cafe.venue.hours && cafe.venue.hours.isOpen? MapDefaults.icons.cafe : MapDefaults.icons.cafeClosed,
                coords: {
                    latitude: cafe.venue.location.lat,
                    longitude: cafe.venue.location.lng
                },
                cafe: cafe.venue,
                window: {
                    iconVisible: true,
                    closeClick: true,
                    options: $scope.mapDefaults.marker.windowOptions
                },
                options:{
                    title: cafe.venue.name,
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
        $scope.loadingCafes = false;
    };

    $scope.getPhotoUrl = function(cafe){
        if(cafe.venue.photos.groups[0]){
            var c = cafe.venue.photos.groups[0].items[0];
            return c.prefix + '100x100' + c.suffix;
        }

        return;
    }

    $scope.goToCafe = function(cafe){
        $location.path('/cafe')
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

    $scope.init = function(){
        $scope.getCafes();
    }

    $scope.init();
}]);
