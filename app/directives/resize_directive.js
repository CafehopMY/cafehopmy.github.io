angular.module('cafehopApp.directives').directive('resize', ['$window', function($window){
    return function(scope, element){
        var w = angular.element($window);

        scope.getWindowSize = function(){
            return {
                h: w.height(),
                w: w.width()
            }
        };

        scope.$watch(scope.getWindowSize, function(newV, oldV){
            scope.style = function(){
                var headerHeight = $('header').height();
                var mobileControls =  $('.mobile-controls');
                var mobileControlsHeight = mobileControls.is(':visible')? mobileControls.height() : 0;
                var h = (newV.h - headerHeight - mobileControlsHeight -1);
                $('.angular-google-map-container').height(h);
                return {
                    height: h + 'px',
                    maxHeight: (newV.h - headerHeight - 1) + 'px',
                }
            }
        }, true);
    }
}]);
