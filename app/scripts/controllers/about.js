'use strict';

/**
 * @ngdoc function
 * @name burnRedoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the burnRedoApp
 */
angular.module('burnRedoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
