'use strict';

angular.module('debugDirective', [])
  .controller('MainCtrl', function($scope) {
    $scope.existingQuestions = [
      { title: 'What is Angular' },
      { title: 'Difference between Angular and React' }
    ];

    $scope.saveQuestion = function() {
      console.log('calling saveQuestion');
    };
  })

  .directive('field', function() {
    return {
      require: '^form',
      restrict: 'EA',
      replace: true,
      templateUrl: 'form-field-template.html',
      transclude: true,
      scope: {
        label: '@'
      },
      link: function(scope, element) {
        var id = element.find(':input').attr('name');
        if (!id) {
          id = element.find('textarea').attr('name');
        }
        if (!id) {
          id = element.find('select').attr('name');
        }
        scope.for = id;

      }
    };
  });
