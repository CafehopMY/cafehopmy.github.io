angular.module('cafehopApp.controllers').controller('MapController', ['$scope', '$http', function($scope, $http){
    $scope.markers = [];

    $scope.ready = function(map){
        $scope.instance = map;
        $scope.$apply(function(){
            // Get current user location
            if(navigator.geolocation){
               navigator.geolocation.getCurrentPosition(function(pos){
                var latlng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
                $scope.instance.panTo(latlng);
                $scope.markers.push({
                    idKey: $scope.markers.length,
                    coords: pos.coords
                });
               });
            }
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
