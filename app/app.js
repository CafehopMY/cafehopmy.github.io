'use strict';

var invoice = angular.module('cafehopApp', ['ngRoute']);	
invoice.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'app/home/views/home.html',
		});
}]);