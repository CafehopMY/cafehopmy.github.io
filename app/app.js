'use strict';

var controllers = angular.module('cafehopApp.controllers', ["google-maps".ns()]);
var services = angular.module('cafehopApp.services', []);
var factories = angular.module('cafehopApp.factories', []);
var directives = angular.module('cafehopApp.directives', []);

var cafehop = angular.module('cafehopApp', 
	['cafehopApp.controllers', 'cafehopApp.services', 'cafehopApp.factories', 'cafehopApp.directives', 'ngRoute', 'ngSanitize', 'ngAutocomplete']);	

angular.module('cafehopApp').config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'app/map/views/map.html',
			title: 'Cafehop MY - Mapping unique cafes around Malaysia',
		})
		.when('/about', {
			templateUrl: 'app/about/views/about.html',
			controller: 'AboutController',
			title: 'About',
		})
		.when('/contact', {
			templateUrl: 'app/contact/views/contact.html',
			title: 'Contact',
		})
		.when('/faq', {
			templateUrl: 'app/faq/views/faq.html',
			controller: 'FaqController',
			title: 'FAQ',
		})
		.when('/map', {
			templateUrl: 'app/map/views/map.html',
			controller: 'MapController',
			title: 'Map',
		})
		.when('/cafe/:cafe_id/:cafe_name?', {
			templateUrl: 'app/cafe/views/cafe.html',
			controller: 'CafeController',
			title: 'Cafe',
		})
		.when('/tnc', {
			templateUrl: 'app/misc/views/tnc.html',
			title: 'Terms & Conditions',
		})
		.when('/404', {
			templateUrl: 'app/misc/views/404.html',
			title: '404 Page not found',
		})
		.otherwise({
			redirectTo: '/404',
			title: '404 Page not found',
		});

		// Enable CORS
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

}]);

angular.module('cafehopApp').run(['$rootScope', function($rootScope){
    // Set title based on route
    $rootScope.$on("$routeChangeSuccess", function(event, currentRoute, previousRoute) {

    if(currentRoute && currentRoute.title){
 			window.document.title = (currentRoute.title) + ' | Cafehop MY';
    }
    else{
 			window.document.title = 'Cafehop MY';
    }
    // If landed from within app (not new page load) and is not redirect from original / to /# link
    if(previousRoute && previousRoute.redirectTo != "/"){
	    // Log GA event
	    gaSendSPAPageview();
    }
 	});
}]);


