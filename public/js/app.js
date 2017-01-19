var app = angular.module('myApp', ['ui.router', 'app.constants', 'app.serives', 'app.factory', 'app.signupModule', 'app.loginModule', 'app.homeModule']);

app.config(function($httpProvider) {
	$httpProvider.interceptors.push('AuthInterceptor');
});

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('index', {
			url: '/',
			templateUrl: 'templates/signup.html',
			controller: 'signupController'
		})
		.state('login', {
			url: '/login',
			templateUrl: 'templates/login.html',
			controller: 'loginController'
		})
		.state('home', {
			url: '/home',
			templateUrl: 'templates/home.html',
			controller: 'homeController'
		})
});
