angular.module('app.homeModule')
.controller('homeController', ['$scope', '$state', 'Storage', 'userService', function($scope, $state, Storage, userService) {
	
	$scope.loginError = null;	

	$scope.user = {
		username: Storage.getUsername(),
		greetings: ""
	}

	userService.profile()
		.then(function(response) {
			$scope.user.greetings = response.data.message
		}, function(err) {

	});
}]);