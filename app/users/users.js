'use strict';

angular.module('myApp.users', ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/users', {
			templateUrl: 'users/users.html',
			controller: 'UsersCtrl'
		});
	}])

	.controller('UsersCtrl', ['$scope', '$http', 'userService', function ($scope, $http, userService) {
		userService.getUsers().then(function (data) {
			$scope.users = data;
		});
	}]);