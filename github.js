var module9 = angular.module('app');

module9.factory('github', function($http) {
  var getUser = function(username) {
    return $http.get("https://api.github.com/users/" + username)
                .then(function(response) {
                  return response.data;
                });
  };
  
  var getRepo = function(user) {
    return $http.get(user.repos_url)
                .then(function(response) {
                  return response.data;
                });
  };
  
  var getRepodata = function(username, reponame) {
    var repo;
    var repoUrl = "https://api.github.com/repos/" + username + "/" + reponame;
    return $http.get(repoUrl)
                    .then(function(response) {
                      repo = response.data;
                      return $http.get(repoUrl + "/contributors");
                    })
                    .then(function(response) {
                      repo.contributors = response.data;
                      return repo;
                    });
  };
  
  return {
    getUser: getUser,
    getRepo: getRepo,
    getRepodata: getRepodata
  };
});