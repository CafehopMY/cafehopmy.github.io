angular.module('cafehopApp.controllers').controller('CafeController', ['$scope', '$http', 'CafeService', function($scope, $http, CafeService){
    $scope.cafe = CafeService.getCafe();
}]);