angular.module('cafehopApp.controllers').controller('MapController', ['$scope', '$http', function($scope, $http){
    $scope.map = {
        center: {
            latitude: 45,
            longitude: -73
        },
        zoom: 8
    };

}]);