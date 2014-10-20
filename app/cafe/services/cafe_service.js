angular.module('cafehopApp.services').service('CafeService', function () {
    var cafe = null;

    return {
        getCafe: function () {
            return cafe;
        },
        setCafe: function(value) {
            cafe = value;
        }
    };
});