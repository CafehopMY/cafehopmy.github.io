angular.module('cafehopApp.services').service('MapCafes', ['$http', 'MapDefaults', function($http, MapDefaults) {
    var defaults = MapDefaults;
    var api_url  = "http://cafehop.my/api/sherminn/featured.php";

    var self = {
        getCount: 0, // getCafes() counter
        cafes: [],
        getCafes: function(options){
            var currCount = ++this.getCount;

            options.before();
            options = options || {};
            options.radius = options.radius || 3000;
            options.offset = options.offset || 0;
            options.limit = options.limit || 30;

            var id          = "";
            var secret      = "";
            var params = {
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
            }).success((function(currCount){
                return function(data){
                    // Only do success for latest call
                    if(currCount != self.getCount){
                        return;
                    }

                    var cafes = data.response.venues;
                    // Empty array
                    while(self.cafes.length > 0) {
                        self.cafes.pop();
                    }
                    self.cafes.push.apply(self.cafes, cafes)

                    if(options.success){
                        options.success(self.cafes);
                    }
                }
            })(currCount)).error(function(){
                console.error(api_url + " cannot be accessed.");
            });
        },

        setCafe: function(value) {
            cafe = value;
        }
    }

    return self;
}]);
