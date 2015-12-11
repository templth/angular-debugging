'use strict';

angular.module('debugHttp', [])
  .controller('MainCtrl', function($scope, $http) {
    $scope.getQuestions = function() {
      $http.get('http://localhost:3000/questions')
      .then(function(response) {
        $scope.questions = response.data;
      })
      .catch(function(err) {
        console.log(err);
      });
    };
  });