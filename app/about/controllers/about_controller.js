angular.module('cafehopApp.controllers').controller('AboutController', ['$scope', '$http', function($scope, $http){
    var filename ='app/about/models/team.json';
    $http.get(filename)
        .success(function(data){
            $scope.team = data.team;
        })
        .error(function(){
            console.error(filename + ' not found.')
        })
}]);