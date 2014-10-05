'use strict';

var controllers = angular.module('cafehopApp.controllers', ['google-maps']);
var services = angular.module('cafehopApp.services', []);
var cafehop = angular.module('cafehopApp', ['cafehopApp.controllers', 'cafehopApp.services', 'ngRoute']);	
cafehop.config(['$routeProvider', function($routeProvider){
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
		.when('/cafe/:cafe_id', {
			templateUrl: 'app/cafe/views/cafe.html',
			controller: 'CafeController'
		})
}]);

