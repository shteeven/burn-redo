'use strict';

/**
 * @ngdoc function
 * @name burnApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the burnApp
 */
var app = angular.module('burnRedoApp');

app.controller('MainCtrl', function ($scope) {
  $scope.myInterval = 50000;
  var slides = $scope.slides = [];

  slides.push({
    image: 'http://placekitten.com/' + 601 + '/300',
    text: 'More Cutes'
  });
  slides.push({
    image: 'http://placekitten.com/' + 602 + '/300',
    text: 'More cats'
  });
});
