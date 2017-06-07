var app = angular.module("app");

app.controller("UserController", function($scope, github, $routeParams, $location) {
  var countdowninterval = null;
  
  var onUserComplete = function(data) {
    $scope.user = data;
    github.getRepo($scope.user)
            .then(onRepos, onError);
  };
  
  var onRepos = function(data) {
    $scope.repos = data;
  };
  
  var onError = function(res) {
    $scope.error = "error is there";
  };
  
  var getrep = function(reponame) {
    console.log("in getrep");
    $location.path("/repo/" + $scope.username + "/" + reponame);    
  };
  
  $scope.getrep = getrep;
  $scope.reposSortOrder = "stargazers_count";
  $scope.username=$routeParams.username;
  github.getUser($scope.username).then(onUserComplete, onError);
});