angular.module('herveApp').controller('UserController', function($scope, UserService) {
    $scope.user = {};
    $scope.message = '';
  
    $scope.register = function() {
      UserService.registerUser($scope.user)
        .then(function(response) {
          $scope.message = "Inscription réussie !";
          $scope.user = {}; // reset
        })
        .catch(function(error) {
          $scope.message = "Erreur lors de l'inscription.";
          console.error(error);
        });
    };
  });
  