angular.module('boldApp')
.controller('mainCtrl', function($scope){
	$scope.test = 'This is a test!'
	$scope.date = new Date();
})