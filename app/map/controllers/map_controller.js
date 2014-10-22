angular.module('cafehopApp.controllers').controller('MapController', 
    ['$scope', '$http', 'CafeService', 'MapCafes', 'MapDefaults', 
    function($scope, $http, CafeService, MapCafes, MapDefaults){
    
    $scope.markers = [];
    $scope.markersControl = {};
    $scope.mapCafes = MapCafes;
    $scope.cafes = $scope.mapCafes.cafes;
    $scope.initialized = false;
    $scope.mapDefaults = MapDefaults;
    $scope.legend = MapDefaults.legend;
    $scope.currMarkerHover = -1;
    $scope.idKeyCounter = 0;

    $scope.infoWindow = {
        marker: null,
        model: null,
        coords: {},
        options: $scope.mapDefaults.marker.windowOptions
    }


    $scope.icons = {
        current: "assets/images/map-icons/chkl-pin-me.png",
        cafe: "assets/images/map-icons/chkl-pin-03.png",
        cafeClosed: "assets/images/map-icons/chkl-pin-01.png",
        active: "assets/images/map-icons/chkl-pin-02.png",
    }

    $scope.fitMarkerBounds = function(){
        var bounds = new google.maps.LatLngBounds();

        angular.forEach($scope.markers, function(marker, index){
            var coords = marker.coords;
            bounds.extend(new google.maps.LatLng(coords.latitude, coords.longitude));
        });

        $scope.instance.fitBounds(bounds);
    }

    $scope.currentMarkerDragStart = function(marker, e, model){
        $scope.hideWindowMarker();
    }

    // When current location marker is moved
    $scope.currentMarkerDragEnd = function(marker, e, model){

        var latlng = marker.getPosition();
        $scope.instance.panTo(latlng);
        
        $scope.getCafes(latlng.lat() + "," + latlng.lng());

        model.coords = {
            latitude: marker.getPosition().lat(),
            longitude: marker.getPosition().lng(),
        }
    }

    $scope.onMarkerMouseover = function(marker, event, model){
        if(model.isNotUser()){
            marker.setIcon($scope.icons.active);
            marker.setZIndex(google.maps.Marker.MAX_ZINDEX);
        }

        $scope.currMarkerHover = model.idKey;

        $scope.setWindowMarker(model)
    }

    $scope.onMarkerMouseout = function(marker, event, model){
        if(model.isNotUser()){
            marker.setIcon(model.icon);
        }
    }

    $scope.onMarkerClick = function(marker, event, model){
        // If already opened
        if(model.idKey == $scope.userMarker.idKey){
            $scope.hideWindowMarker();
            return;
        }
        $scope.setWindowMarker(model);
    }


    $scope.placeDefaultUser = function(marker){
        marker.coords = $scope.mapDefaults.center;
        var latlng = new google.maps.LatLng($scope.mapDefaults.center.latitude, $scope.mapDefaults.center.longitude);
        $scope.instance.panTo(latlng);
    }

    $scope.ready = function(map){
        if($scope.initialized){
            return;
        }

        $scope.instance = map;
        $scope.$apply(function(){
            $scope.userMarker = {
                idKey: $scope.idKeyCounter++, 
                icon: $scope.icons.current,
                options:{
                    draggable: true
                },
                window: {
                    options: $scope.mapDefaults.marker.windowOptions,
                }
            };

            // Set KL as center if no user's location
            $scope.placeDefaultUser($scope.userMarker)
            
            // Get current user location
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(function(pos){
                    $scope.userMarker.coords = pos.coords;
                    var latlng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
                    $scope.instance.panTo(latlng);
                    $scope.getCafes(latlng.lat() + "," + latlng.lng());
               });
            }

            // $scope.setWindowMarker($scope.userMarker);
            $scope.markers.push($scope.userMarker);
            $scope.setWindowMarker($scope.userMarker);

            $scope.getCafes();
            $scope.initialized = true;
        });
    }


    $scope.getCafes = function(ll){
        $scope.mapCafes.getCafes({
            before: function(){
                $scope.loadingCafes = true;
            },
            success: $scope.addMarkers,
            ll: ll
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

    $scope.markerEvents = {
        dragend: $scope.currentMarkerDragEnd,
        dragstart: $scope.currentMarkerDragStart,
        mouseover: $scope.onMarkerMouseover,
        mouseout: $scope.onMarkerMouseout

    }

    $scope.addMarkers = function(cafes){
        $scope.markers = [];
        $scope.markers.push($scope.userMarker);
        // Create markers for each cafe
        angular.forEach(cafes, function(cafe, index){
            var m = {
                idKey: $scope.idKeyCounter++,
                icon: cafe.venue.hours && cafe.venue.hours.isOpen? $scope.icons.cafe : $scope.icons.cafeClosed,
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

    $scope.goToCafe = function(cafe){
        $location.path('/cafe')
    }

    $scope.setWindowMarker = function(model){
        $scope.infoWindow.model = model;

        $scope.map.showWindow = true;
        $scope.infoWindow.coords = model.coords;
    }
    $scope.hideWindowMarker = function(){
        $scope.map.showWindow = false;
    }

    $scope.mouseoutMarker = function(idKey){
        var m = $scope.findMarker(idKey);
        if(m){
            google.maps.event.trigger(m, 'mouseout')
        }
        
    }

    $scope.mouseoverMarker = function(idKey){
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
}]);
