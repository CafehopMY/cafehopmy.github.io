angular.module('cafehopApp.services').service('CafeService', function () {
    var cafe = {};

    return {
        getCafe: function () {
            // Get cafes 
            var url = "";
            $http({
                url: url,
                method: 'GET',
                params: params,
            }).success(function(data){
                cafes = data.response.groups[0].items;
                options.success(cafes);
                
            }).error(function(){
                console.error(api_url + " cannot be accessed.");
            });
            return cafe;
        },
        setCafe: function(value) {
            cafe = value;
        }
    };
});