angular.module('cafehopApp.services').service('MapCafes', ['$http', 'MapDefaults', function($http, MapDefaults) {
    var cafes = [];
    var defaults = MapDefaults;
    var api_url  = "http://cafehopkl.com/api/browse.php";
    return {
        getCafes: function(options){
            options = options || {};
            options.radius = options.radius || 10000;
            options.offset = options.offset || 0;
            options.limit = options.limit || 50;

            var id          = "";
            var secret      = "";
            var params = {
                client_id: id,
                client_secret: secret,
                ll: options.ll || defaults.center.latitude + "," + defaults.center.longitude,
                radius: options.radius,
                offset: options.offset,
                limit: options.limit
            }

            // Get cafes 
            $http({
                url: api_url,
                method: 'GET',
                params: params,
            }).success(function(data){
                cafes = data.response.groups[0].items;
                options.success(cafes);
                
            }).error(function(){
                console.error(api_url + " cannot be accessed.");
            });

            return cafes;
        },

        setCafe: function(value) {
            cafe = value;
        }
    };
}]);
