angular.module('cafehopApp.controllers').controller('CafeController', ['$scope', '$http', '$routeParams', '$sce', 'CafeService', 'GMapCredentials', 'CafeConstants',
    function($scope, $http, $routeParams, $sce, CafeService, GMapCredentials, CafeConstants){
    
    CafeService.init();

    $scope.CafeService = CafeService;

    $scope.constants = CafeConstants;
    
    window.scrollTo(0, 0);
    $scope.loading = true;

    var cafeId = $routeParams.cafe_id;
    $scope.cafe = CafeService.cafe;
    $scope.cafe.name = $routeParams.cafe_name;


    // Set title
    window.document.title = $routeParams.cafe_name + " | Cafehop MY";;

    $scope.showHours = false;

    $scope.toggleShowHours = function(){
        $scope.showHours = !$scope.showHours;
    }

    $scope.getEmbedMapSrc = function(cafe){
        var clean = encodeURIComponent(CafeService.getCafeNameAddress($scope.cafe));
        return "https://www.google.com/maps/embed/v1/search"
            + '?key=' + GMapCredentials.apiKey
            + '&q=' + clean
    }

    $scope.todaysDay = function(cafe){
        var date = new Date();
        var today = date.getDay() + 1;
        return $scope.constants.daysInWeek[today];
    }
    
    $scope.todaysHours = function(cafe){
        var date = new Date();
        var today = date.getDay() + 1;
        var periods= cafe.openingHours.periods;
        for(var i = 0; i < periods.length; i++){
            var p = periods[i];
            if(p.day == today){
                return p.time;
            }
        }
    }


    CafeService.getCafe({
        id: cafeId,
        success: function(data){
            $scope.cafe = CafeService.cafe;
            $scope.loading = false;
            window.document.title = $scope.cafe.name + " | Cafehop MY";
            $scope.cafe.src = $sce.trustAsResourceUrl($scope.getEmbedMapSrc($scope.cafe));
            $scope.cafe.todaysHours = $scope.todaysHours($scope.cafe);
        }
    });

}]);