'use strict';

var invoice = angular.module('cafehopApp', ['cafehopApp.controllers', 'ngRoute', 'google-maps']);	
invoice.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'app/home/views/home.html',
		})
		.when('/about', {
			templateUrl: 'app/about/views/about.html',
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
}]);