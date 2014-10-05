angular.module('cafehopApp.controllers').controller('MapController', ['$scope', '$http', 'CafeService', function($scope, $http, CafeService){
    $scope.markers = [];
    $scope.initialized = false;
    $scope.mapDefaults = {
        center: {
            latitude: 3.136402,
            longitude: 101.66394
        },
        marker: {
            windowOptions: {
                maxWidth: 250,
                maxHeight: 500,
                pixelOffset: new google.maps.Size(0, -20)
            }
        }
    }

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

    $scope.getCafes = function(){
        // $scope.api_url = "https://api.cafehop.my/v2/browse/stores";
        $scope.api_url = "app/map/models/cafes.json";
        var id = "";
        var secret = "";
        // Get cafes 
        $http({
            url: $scope.api_url,
            method: 'GET',
            params:{
                client_id: id,
                client_secret: secret,
                ll: $scope.map.center.latitude + "," + $scope.map.center.longitude,
                radius: 1000,
                offset: 0,
                limit: 50
            }
        }).success(function(data){
            $scope.cafes = data.response.groups[0].items;

            // Create markers for each cafe
            angular.forEach($scope.cafes, function(cafe, index){
                $scope.markers.push({
                    idKey: $scope.markers.length,
                    coords: {
                        latitude: cafe.venue.location.lat,
                        longitude: cafe.venue.location.lng
                    },
                    icon: cafe.venue.hours.isOpen? $scope.icons.cafe : $scope.icons.cafeClosed,
                    options:{
                        title: cafe.venue.name
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
        }).error(function(){
            console.error($scope.api_url + " cannot be accessed.");
        });
    }

    // When current location marker is moved
    $scope.currentMarkerDragEnd = function(marker){
        $scope.instance.panTo(marker.getPosition())
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

            $scope.getCafes();
            $scope.fitMarkerBounds();
            $scope.initialized = true;
        });
    }

    $scope.map = {
        center: angular.copy($scope.mapDefaults.center),
        zoom: 11,
        events: {
            tilesloaded: $scope.ready
        },
        options: {
            scrollwheel: false
        }
    };

    $scope.goToCafe = function(cafe){
        console.log('yo')
        CafeService.setCafe(cafe);
        $location.path('/cafe')
    }
}]);
