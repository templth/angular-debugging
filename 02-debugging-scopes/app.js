'use strict';

angular.module('debugScopeApp', [])
  .controller('MainCtrl', function($scope) {
    $scope.countries = [
      { name: 'France' },
      { name: 'US' }
    ];
    $scope.selectedCountryName =  'none';
  })
  .controller('CountryCtrl', function($scope) {
    $scope.selectCountry = function(country) {
      $scope.selectedCountryName = country.name;
    };
  });