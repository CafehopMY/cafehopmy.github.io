angular.module('cafehopApp.controllers').controller('MapController', 
    ['$scope', '$http', 'CafeService', 'MapCafes', 'MapDefaults', 
    function($scope, $http, CafeService, MapCafes, MapDefaults){
    
    $scope.markers = [];
    $scope.initialized = false;
    $scope.mapDefaults = MapDefaults;
    $scope.cafes = [];

    $scope.legend = [
    {
        img: "assets/images/map-icons/chkl-pin-03.png",
        text: "Open"
    }, {
        img: "assets/images/map-icons/chkl-pin-01.png",
        text: "Closed"
    }
    ];

    $scope.icons = {
        current: "assets/images/map-icons/chkl-pin-me.png",
        cafe: "assets/images/map-icons/chkl-pin-03.png",
        cafeClosed: "assets/images/map-icons/chkl-pin-01.png",
    }

    $scope.fitMarkerBounds = function(){
        var bounds = new google.maps.LatLngBounds();

        angular.forEach($scope.markers, function(marker, index){
            var coords = marker.coords;
            bounds.extend(new google.maps.LatLng(coords.latitude, coords.longitude));
        });

        $scope.instance.panToBounds(bounds);
    }

    // When current location marker is moved
    $scope.currentMarkerDragEnd = function(marker){
        var latlng = marker.getPosition();
        $scope.instance.panTo(latlng);
        $scope.cafes = MapCafes.getCafes({
            ll: latlng.lat() + "," + latlng.lng(),
            success: $scope.addMarkers,
        });
    }

    $scope.placeDefaultUser = function(marker){
        marker.coords = $scope.mapDefaults.center;
        $scope.markers.push(marker);
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
                idKey: $scope.markers.length,
                icon: $scope.icons.current,
                options:{
                    draggable: true
                },
                events: {
                    dragend: $scope.currentMarkerDragEnd
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
               });
            }

            $scope.cafes = MapCafes.getCafes({success: $scope.addMarkers});
            $scope.fitMarkerBounds();
            $scope.initialized = true;
        });
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
        }
    };

    $scope.addMarkers = function(cafes){
        // Create markers for each cafe
        angular.forEach(cafes, function(cafe, index){
            $scope.markers.push({
                idKey: $scope.markers.length,
                coords: {
                    latitude: cafe.venue.location.lat,
                    longitude: cafe.venue.location.lng
                },
                icon: cafe.venue.hours.isOpen? $scope.icons.cafe : $scope.icons.cafeClosed,
                options:{
                    title: cafe.venue.name,
                },
                cafe: cafe.venue,
                click: function(){

                },
                window: {
                    iconVisible: true,
                    closeClick: true,
                    options: $scope.mapDefaults.marker.windowOptions
                }

            })
        });
    };

    $scope.goToCafe = function(cafe){
        $location.path('/cafe')
    }
}]);
