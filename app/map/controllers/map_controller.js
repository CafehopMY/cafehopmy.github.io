angular.module('cafehopApp.controllers').controller('MapController', ['$scope', '$http', function($scope, $http){
    $scope.map = {
        center: {
            latitude: 3.136402,
            longitude: -101.66394
        },
        zoom: 8
    };

}]);
