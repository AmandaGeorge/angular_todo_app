angular.module('todoApp', ['ngRoute', 'starter.controllers'])
	.config(["$routeProvider", "$locationProvider", 
		function($routeProvider, $locationProvider) {
			$routeProvider.
				when("/", {
					templateUrl: "templates/todos.html",
					controller: "TodoIndexCtrl"
				}).
				when("/about-us", {
					templateUrl: "templates/about-us.html"
				}).
				when("/lists", {
					templateUrl: "templates/list-index.html",
					controller: "ListIndexCtrl"
				}).
				otherwise({
					redirectTo: "/"
				});
			// use the HTML5 History API
			$locationProvider.html5Mode({
				enabled: true,
				requireBase: false
			});
		}])

	.directive('currentWeather', function() {
	  return {
	    restrict: 'E',
	    scope: {
	      city: '@'
	    },
	    template: '<div class="current-weather"><h4>Weather for {{city}}</h4><h2>{{weather.main.temp}} degrees</h2></div>',
	    //tempalteUrl: 'templates/current-weather-template.html',
	    //transclude: true,
	    controller: ['$scope', '$http',
	      function ($scope, $http) {
	        var url = "http://api.openweathermap.org/data/2.5/weather?mode=json&cnt=7&units=imperial&callback=JSON_CALLBACK&q="
	        $scope.getWeather = function(city) {
	          $http({ method: 'JSONP', url: url + city })
	            .success(function(data) {
	              $scope.weather = data;
	            });
	        }
	    }],
	    link: function (scope, element, attrs) {
	      scope.weather = scope.getWeather(attrs.city);
	    }
	  }
});