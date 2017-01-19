angular.module('app.factory')
.factory('AuthTokenFactory', ['$window', function($window) {
	
	var store = $window.localStorage;
	var key = "auth-token";

	return {
		setToken : setToken,
		getToken: getToken
	}

	function setToken(token) {
		if(token) {
			store.setItem(key, token);
		}
		else{
			store.removeItem(key);
		} 
	}

	function getToken() {
		return store.getItem(key);
	}

}]);