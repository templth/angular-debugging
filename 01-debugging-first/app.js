'use strict';

angular.module('debug', [])
  .controller('MainCtrl', function($scope) {
    $scope.countries = [
      { name: 'France' },
      { name: 'US' }
    ];
    console.print(countries);
  });