angular.module('userProfiles').controller('MainController', function($scope, mainService){

  $scope.thisAppIsBroken = "This angular app is working and below are my friends";

  $scope.users = mainService.getUsers();

  $scope.toggleFavorite = mainService.toggleFavorite;

});
