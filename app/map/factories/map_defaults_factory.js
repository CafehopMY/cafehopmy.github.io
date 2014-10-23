angular.module('cafehopApp.factories').factory('MapDefaults', function() {
    var defaults = {
        center: {
            latitude: 3.1537569458852315, 
            longitude: 101.71610355377197
        },
        marker: {
            windowOptions: {
                maxWidth: 150,
                maxHeight: 500,
                pixelOffset: new google.maps.Size(0, -32)
            }
        },
        legend: [
            {
                img: "assets/images/map-icons/chkl-pin-03.png",
                text: "Open"
            }, {
                img: "assets/images/map-icons/chkl-pin-01.png",
                text: "Closed"
            }
        ]
    };

    return defaults;
});