'use strict';

/**
 * @ngdoc function
 * @name burnApp.controller:InfoCtrl
 * @description
 * # InfoCtrl
 * Controller of the burnApp
 */
var app = angular.module('burnRedoApp');

app.controller('InfoCtrl', function ($scope) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
});