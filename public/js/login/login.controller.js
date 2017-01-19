angular.module('app.loginModule')
.controller('loginController', ['$scope', '$state', 'userService', 'AuthTokenFactory', 'Storage', function($scope, $state, userService, AuthTokenFactory, Storage) {
	
	$scope.loginError = null;	

	$scope.user = {
		username: "",
		password: ""
	}

	$scope.login = function() {

		userService.login($scope.user).then(function(response) {
			console.log("login success.");

			console.log(response.data);

			AuthTokenFactory.setToken(response.data.token);
			Storage.save('username', response.data.username);
			Storage.save('isLoggedIn', true);
			$state.go('home');

		}, function(err) {
			console.log("login not success.");
			$scope.loginError = "Cant login!"
		});
	}
}]);