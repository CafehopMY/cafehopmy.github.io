angular.module('cafehopApp.controllers').controller('FaqController', ['$scope', '$http', function($scope, $http){
    var filename ='app/faq/models/faq.txt';
    $scope.faq = "Loading FAQ..."; 

    $http.get(filename)
        .success(function(data){
            $scope.faq = data;
            console.log(data);
        })
        .error(function(){
            console.error(filename + ' not found.')
        })
}]);