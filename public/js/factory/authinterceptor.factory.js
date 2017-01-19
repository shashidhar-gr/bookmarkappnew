angular.module('app.factory')
.factory('AuthInterceptor', ['$window', 'AuthTokenFactory', function($window, AuthTokenFactory) {
	
	var store = $window.localStorage;
	var key = "auth-token";

	return {
		request: addToken
	}

	function addToken(config) {
		var token = AuthTokenFactory.getToken();

		if(token) {
			config.headers = config.headers || {};
			config.headers.Authorization = 'Bearer '+token;
		}

		return config;
	}

}]);