angular.module('cafehopApp.services').service('MapCafes', ['$http', 'MapDefaults', function($http, MapDefaults) {
    var defaults = MapDefaults;
    var api_url  = "http://cafehopkl.com/api/browse.php";
    var self = {
        cafes: [],
        getCafes: function(options){
            options = options || {};
            options.radius = options.radius || 1000;
            options.offset = options.offset || 0;
            options.limit = options.limit || 30;

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
                var cafes = data.response.groups[0].items;
                // Empty array
                while(self.cafes.length > 0) {
                    self.cafes.pop();
                }
                self.cafes.push.apply(self.cafes, cafes)
                options.success(self.cafes);
                
            }).error(function(){
                console.error(api_url + " cannot be accessed.");
            });
        },

        setCafe: function(value) {
            cafe = value;
        }
    }

    return self;
}]);
