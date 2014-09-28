angular.module('cafehopApp.controllers').controller('FaqController', ['$scope', '$http', function($scope, $http){
    var filename ='app/faq/models/faq.json';
    $scope.faq = "Loading FAQ..."; 

    $http.get(filename)
        .success(function(data){
            $scope.faqs = data.faqs;
        })
        .error(function(){
            console.error(filename + ' not found.')
        })
}]);