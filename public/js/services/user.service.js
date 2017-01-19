angular.module('app.serives')
.service('userService', ['$http', 'CONSTANT', function($http, CONSTANT) {
	
	this.signup = function(user) {
		return $http.post(CONSTANT.API_URL+'/signup', user, {headers: {'Content-Type': 'application/json'}}); 
	}

	this.login = function(user) {
		return $http.post(CONSTANT.API_URL+'/login', user, {headers: {'Content-Type': 'application/json'}}); 
	}

	this.profile = function(user) {
		return $http.post(CONSTANT.API_URL+'/profile', user, {headers: {'Content-Type': 'application/json'}}); 
	}
}])