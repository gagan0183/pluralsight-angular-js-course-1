var app = angular.module("app");

app.controller("MainController", function($scope, $interval, $location) {
  
  var countdowninterval = null;
  
  $scope.search = function(username) {
    if(countdowninterval) {
      $interval.cancel(countdowninterval);    
    }
    $location.path("/user/" + username);
  }
  
  var startCounter = function() {
    countdowninterval = $interval(decrementCountdown, 1000, $scope.countdown);
  };
  
  var decrementCountdown = function() {
    $scope.countdown -= 1;  
    if($scope.countdown < 1) {
      $scope.search($scope.username);
    }    
  };
  
  $scope.countdown = 5;
  $scope.username="angular";
  startCounter();
});