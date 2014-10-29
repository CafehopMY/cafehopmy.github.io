angular.module('cafehopApp.controllers').controller('CafeController', ['$scope', '$http', '$routeParams', 'CafeService',
    function($scope, $http, $routeParams, CafeService){
    
    CafeService.init();

    $scope.loading = true;

    var cafeId = $routeParams.cafe_id;
    $scope.cafe = CafeService.cafe;
    $scope.cafe.name = $routeParams.cafe_name;


    // Set title
    window.document.title = $routeParams.cafe_name;


    CafeService.getCafe({
        id: cafeId,
        success: function(data){
            $scope.cafe = CafeService.cafe;
            $scope.loading = false;
            window.document.title = $scope.cafe.name + " | Cafehop KL";
        }
    });
}]);