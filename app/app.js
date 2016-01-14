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
	// service for getting todos
	.factory('todoService', function ($q, $rootScope, $http) {
		var todoService = {};

		todoService.data = {};

		// get all todos
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
	// service for getting users
	.factory('userService', function ($q, $rootScope, $http) {
		var userService = {};
		var baseUrl = 'http://jsonplaceholder.typicode.com';

		userService.data = {};

		// get all users
		userService.getUsers = function () {
			var defer = $q.defer();
			$http.get(baseUrl + '/users', {cache: true})
				.success(function (data) {
					defer.resolve(data);
				});

			return defer.promise;
		};

		// get one user
		userService.getUser = function (userId) {
			var defer = $q.defer();
			$http.get(baseUrl + '/users/' + userId, {cache: true})
				.success(function (data) {
					defer.resolve(data);
				});

			return defer.promise;
		};

		// get user todos
		userService.getUserTodos = function (userId) {
			var defer = $q.defer();
			$http.get(baseUrl + '/users/' + userId + '/todos', {cache: true})
				.success(function (data) {
					defer.resolve(data);
				});

			return defer.promise;
		};

		return userService;
	});
