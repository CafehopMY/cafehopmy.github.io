angular.module('cafehopApp.factories').factory('MapDefaults', function() {
    var defaults = {
        center: {
            latitude: 3.136402,
            longitude: 101.66394
        },
        marker: {
            windowOptions: {
                maxWidth: 250,
                maxHeight: 500,
                pixelOffset: new google.maps.Size(0, -20)
            }
        }
    };

    return defaults;
});