angular.module('cafehopApp.controllers').controller('CafeController', ['$scope', '$http', '$routeParams', 'CafeService',
    function($scope, $http, $routeParams, CafeService){
    var cafeId = $routeParams.cafe_id;
    $scope.cafe = CafeService.cafe,

    CafeService.getCafe({
        id: cafeId,
        success: function(data){
            $scope.cafe = CafeService.cafe;
        }
    });
}]);