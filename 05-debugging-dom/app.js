'use strict';

angular.module('debugDom', [])
  .controller('MainCtrl', function($scope) {
    $scope.question = { title: '', content: '' };

    $scope.saveQuestion = function() {
      console.log('saving question...');
    };
  });