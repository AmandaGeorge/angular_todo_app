angular.module('starter.controllers', [])
	.controller("MainCtrl", ["$scope", "$rootScope", function ($scope, $rootScope) {
		// to make sure the controller is working...
		$scope.term = "Main Controller is alive!";

		$scope.showAlert = function() {
			alert($scope.term);
		}
	}])
	.controller("TodoIndexCtrl", ["$scope", function ($scope) {
		// make sure this controller works
		console.log("Todo Controller");

		$scope.todos = [
			{title: "walk dog", created_at: "123445656468", completed: false},
			{title: "laundry", created_at: "123445656468", completed: false},
			{title: "wash car", created_at: "123445656468", completed: false}
		];

		$scope.appendList = function() {
			$scope.todos.push($scope.todo);
			$scope.todo.created_at = new Date();
			$scope.todo.completed = false;
			$scope.todo = {};
		};

		$scope.delete = function(todo) {
			// console.log(this);
			var index = $scope.todos.indexOf(todo);
			$scope.todos.splice(index, 1);
		}
	}])
	.controller("ListIndexCtrl", ["$scope", function ($scope) {
		console.log("List Controller");

		$scope.lists = [
			{title: "household chores", created_at: "123445656468"},
			{title: "school", created_at: "123445656468"},
			{title: "errands", created_at: "123445656468"}
		];

	}])