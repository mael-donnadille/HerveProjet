angular.module('herveApp').service('UserService', function($http) {
    this.registerUser = function(user) {
      return $http.post('http://localhost:3000/api/users/register', user);
    };
  });
  