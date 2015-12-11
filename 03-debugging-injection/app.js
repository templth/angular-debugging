'use strict';

angular.module('app', [ 'ngRoute' ])
  .config(function($routeProvider) {
    $routeProvider.when('/questions', {
      templateUrl: 'questions.html',
      controller: 'questionsCtrl',
      resolve: {
        questions: function(questionsFactory) {
          return questionsFactory.getQuestions();
        }
      }
    });
  })

  .controller('questionsCtrl', function($scope, questions) {
    $scope.questions = questions;
  })

  .factory('questionsFactory', function($q, timeout) {
    return {
      getQuestions: function() {
        return $q(function(resolve, reject) {
          timeout(function() {
            resolve([
              { id: '1', title: 'Question #1' },
              { id: '2', title: 'Question #2' }
            ]);
          }, 500);
        });
      }
    };
  });