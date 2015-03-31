'use strict';

/**
 * @ngdoc function
 * @name burnApp.controller:CultureCtrl
 * @description
 * # CultureCtrl
 * Controller of the burnApp
 */
var app = angular.module('burnRedoApp');

app.controller('CultureCtrl', function ($scope) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
});