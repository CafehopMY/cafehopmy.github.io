'use strict';

var controllers = angular.module('cafehopApp.controllers', ["google-maps".ns()]);
var services = angular.module('cafehopApp.services', []);
var factories = angular.module('cafehopApp.factories', []);
var directives = angular.module('cafehopApp.directives', []);

var cafehop = angular.module('cafehopApp', 
	['cafehopApp.controllers', 'cafehopApp.services', 'cafehopApp.factories', 'cafehopApp.directives', 'ngRoute', 'ngSanitize']);	

angular.module('cafehopApp').config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'app/map/views/map.html',
			title: 'Cafehop KL - Mapping unique cafes around Malaysia',
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
		});

		// Enable CORS
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

}]);

angular.module('cafehopApp').run(['$rootScope', function($rootScope){
    // Set title based on route
    $rootScope.$on("$routeChangeSuccess", function(event, currentRoute, previousRoute) {
 		window.document.title = currentRoute.title + ' | Cafehop KL';
 		console.log(currentRoute.title)
 	});
}]);


