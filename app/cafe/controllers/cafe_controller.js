angular.module('cafehopApp.controllers').controller('CafeController', ['$scope', '$http', '$routeParams', '$sce', 'CafeService', 'GMapCredentials',
    function($scope, $http, $routeParams, $sce, CafeService, GMapCredentials){
    
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
            $scope.cafe.src = $sce.trustAsResourceUrl($scope.getEmbedMapSrc($scope.cafe));
        }
    });

    $scope.getEmbedMapSrc = function(cafe){
        var clean = cafe.name+','+cafe.address1+','+cafe.city
        clean = encodeURIComponent(clean);
        console.log(clean)
        return "https://www.google.com/maps/embed/v1/search"
            + '?key=' + GMapCredentials.apiKey
            + '&q=' + clean
    }
}]);