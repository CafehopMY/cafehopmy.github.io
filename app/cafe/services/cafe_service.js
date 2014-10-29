angular.module('cafehopApp.services').service('CafeService', ['$http', function ($http) {
    var cafe = {};

    var service = {
        cafe: {},
        getCafe: function (options) {
            // Get cafes 
            var url = "http://cafehop.my/api/sherminn/cafe.php";
            $http({
                url: url,
                method: 'GET',
                params: {
                    id: options.id,
                },
            }).success(function(data){
                service.cafe = data.response.store;
                if(options.success){
                    options.success(data);
                }
            }).error(function(){
                console.error(url + " cannot be accessed.");
            });
            return cafe;
        },

        setCafe: function(value) {
            cafe = value;
        }
    };

    return service;
}]);