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
		})
		.when('/about', {
			templateUrl: 'app/about/views/about.html',
			controller: 'AboutController'
		})
		.when('/contact', {
			templateUrl: 'app/contact/views/contact.html',
		})
		.when('/faq', {
			templateUrl: 'app/faq/views/faq.html',
			controller: 'FaqController'
		})
		.when('/map', {
			templateUrl: 'app/map/views/map.html',
			controller: 'MapController'
		})
		.when('/cafe/:cafe_id/:cafe_name?', {
			templateUrl: 'app/cafe/views/cafe.html',
			controller: 'CafeController'
		});

        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);


