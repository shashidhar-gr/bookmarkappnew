angular.module('app.signupModule')
.controller('signupController', ['$scope', 'userService', '$state', function($scope, userService, $state) {
	
	$scope.signupError = null;	

	$scope.user = {
		username: "",
		email: "",
		password: ""
	}

	$scope.signup = function() {

		userService.signup($scope.user).then(function(response) {
			console.log("signup success.");

			setTimeout(function() {
				$state.go('login');
			}, 2000);

		}, function(err) {
			console.log("signup not success.");
			$scope.signupError = "Cant signup!"
		});
	}
}]);