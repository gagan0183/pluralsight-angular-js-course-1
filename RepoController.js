var app = angular.module("app");

app.controller("RepoController", function($scope, github, $routeParams) {
  
  var onRepoComplete = function(data) {
    $scope.repo = data;  
  };
  
  var onError = function(res) {
    $scope.error = "error is there";
  };
  
  github.getRepodata($routeParams.username, $routeParams.reponame).then(onRepoComplete, onError);
  
});