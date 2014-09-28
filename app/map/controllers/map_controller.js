angular.module('cafehopApp.controllers').controller('MapController', ['$scope', '$http', function($scope, $http){
    $scope.markers = [];
    $scope.initialized = false;

    $scope.icons = {
        current: "assets/images/map-icons/chkl-pin-me.png",
        cafe: "assets/images/map-icons/chkl-pin-02.png",
    }

    $scope.fitMarkerBounds = function(){
        var bounds = new google.maps.LatLngBounds();

        angular.forEach($scope.markers, function(marker, index){
            var coords = marker.coords;
            bounds.extend(new google.maps.LatLng(coords.latitude, coords.longitude));
        });

        $scope.instance.fitBounds(bounds);
    }

    $scope.getCafes = function(){
        // $scope.api_url = "https://api.cafehop.my/v2/browse/stores";
        $scope.api_url = "app/map/models/cafes.json";

        // Get cafes
        $http({
            url: $scope.api_url,
            method: 'GET',
            params:{
                client_id: "",
                client_secret: "",
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
                    icon: $scope.icons.cafe
                })
            });
           
            // Fit bounds
            $scope.fitMarkerBounds();

        }).error(function(){
            console.error($scope.api_url + " cannot be accessed.");
        });
    }

    $scope.ready = function(map){
        if($scope.initialized){
            return;
        }

        $scope.instance = map;
        $scope.$apply(function(){
            // Get current user location
            if(navigator.geolocation){
               navigator.geolocation.getCurrentPosition(function(pos){
                var latlng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
                $scope.instance.panTo(latlng);
                $scope.markers.push({
                    idKey: $scope.markers.length,
                    coords: pos.coords,
                    icon: $scope.icons.current
                });

                $scope.fitMarkerBounds();
               });
            }

            // Get cafes
            $scope.getCafes();

            $scope.initialized = true;
        });
    }

    $scope.map = {
        center: {
            latitude: 3.136402,
            longitude: 101.66394
        },
        zoom: 11,
        events: {
            tilesloaded: $scope.ready
        }
    };
}]);
