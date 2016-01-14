'use strict';

angular.module('myApp.todos', ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/todos', {
			templateUrl: 'todos/todos.html',
			controller: 'TodosCtrl'
		});
	}])

	.controller('TodosCtrl', ['$scope', '$http', 'todoService', function ($scope, $http, todoService) {
		todoService.getTodos().then(function (data) {
			$scope.todos = data;
		});
	}])

	.directive('oneTodo', ['userService', function (userService) {
		return {
			restrict: 'E',
			scope: {
				todo: '=todo',
				user: '=user'
			},
			link: function (scope) {
				if (!scope.user) {
					userService.getUser(scope.todo.userId).then(function (data) {
						scope.user = data;
					});
				}
			},
			templateUrl: 'todos/todo.html'
		};
	}]);

