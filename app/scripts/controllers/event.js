'use strict';

/**
 * @ngdoc function
 * @name burnApp.controller:EventCtrl
 * @description
 * # EventCtrl
 * Controller of the burnApp
 */
var app = angular.module('burnRedoApp');

app.controller('EventCtrl', function ($scope) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
});