angular.module('cafehopApp.factories').factory('CafeConstants', function() {
    var defaults = {
        daysInWeek: {
            '1': "Mon",
            '2': "Tue",
            '3': "Wed",
            '4': "Thu",
            '5': "Fri",
            '6': "Sat",
            '7': "Sun",
        }
    };

    return defaults;
});