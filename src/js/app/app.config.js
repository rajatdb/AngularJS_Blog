'use strict';

angular.module('try').
	config(
		function(
			$routeProvider,
			$locationProvider
			){
			$locationProvider.html5Mode({
				enabled:true
			})

			$routeProvider.
				when("/", {
					template: "<blog-list></blog-list>"
				}).
				when("/about", {
					templateUrl: "/templates/about.html"
				}).
				when("/blog", {
					template: "<blog-list></blog-list>"
				}).
				when("/blog/:id", {
					template: "<blog-detail></blog-detail>"
				}).
        //when("/blog/:id/:abc", {
				//	template:"<blog-list></blog-list>"
				//}).
				otherwise({
					template: "Not Found"
				})
});
