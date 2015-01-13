angular.module('cafehopApp.directives').directive('advertisements',['$http', function($http){
    return{
        restrict: 'E',
        templateUrl: 'app/templates/advertisements_template.html',
        controller: function($scope, $element){
          var filename ='app/about/models/sponsors.json';
          $http.get(filename)
            .success(function(data){
                $scope.sponsors = data.sponsors;
              console.log($scope.sponsors)
            })
            .error(function(){
                console.error(filename + ' not found.')
            });
        }
    }
}]);
