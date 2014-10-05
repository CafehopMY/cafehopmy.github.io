angular.module('cafehopApp.services', []).service('CafeService', function () {
        var cafe = null;

        return {
            getCafe: function () {
                return cafe;
            },
            setProperty: function(value) {
                cafe = value;
            }
        };
    });