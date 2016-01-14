'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
		'ngRoute',
		'myApp.todos',
		'myApp.users',
		'myApp.userTodos'
	])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.otherwise({redirectTo: '/todos'});
	}])
	.factory('todoService', function ($q, $rootScope, $http) {
		var todoService = {};

		todoService.data = {};

		//Gets the list of nuclear weapons
		todoService.getTodos = function () {
			var defer = $q.defer();
			$http.get('http://jsonplaceholder.typicode.com/todos', {cache: true})
				.success(function (data) {
					defer.resolve(data);
				});

			return defer.promise;
		};

		return todoService;
	})

	.factory('userService', function ($q, $rootScope, $http) {
		var userService = {};

		userService.data = {};

		userService.getUsers = function () {
			var defer = $q.defer();
			$http.get('http://jsonplaceholder.typicode.com/users', {cache: true})
				.success(function (data) {
					defer.resolve(data);
				});

			return defer.promise;
		};

		//Gets the list of nuclear weapons
		userService.getUser = function (userId) {
			var defer = $q.defer();
			$http.get('http://jsonplaceholder.typicode.com/users/' + userId, {cache: true})
				.success(function (data) {
					defer.resolve(data);
				});

			return defer.promise;
		};

		//Gets the list of nuclear weapons
		userService.getUserTodos = function (userId) {
			var defer = $q.defer();
			$http.get('http://jsonplaceholder.typicode.com/users/' + userId + '/todos', {cache: true})
				.success(function (data) {
					defer.resolve(data);
				});

			return defer.promise;
		};

		return userService;
	});
