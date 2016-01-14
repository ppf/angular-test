'use strict';

angular.module('myApp.userTodos', ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/user/:userId', {
			templateUrl: 'userTodos/userTodos.html',
			controller: 'UserTodosCtrl'
		});
	}])

	.controller('UserTodosCtrl', ['$scope', '$routeParams', 'userService', function ($scope, $routeParams, userService) {
		var userId = $routeParams.userId;

		userService.getUser(userId).then(function (data) {
			$scope.user = data;
		});

		userService.getUserTodos(userId).then(function (data) {
			$scope.todos = data;
		});

	}]);