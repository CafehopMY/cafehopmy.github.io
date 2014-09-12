'use strict';

var invoice = angular.module('cafehopApp', ['ngRoute']);	
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
		.when('/map', {
			templateUrl: 'app/map/views/map.html',
		})
}]);