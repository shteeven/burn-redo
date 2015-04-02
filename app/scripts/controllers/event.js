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

  $scope.expanded = true;

  function toggleSubcontent(){
    $scope.expanded = !$scope.expanded;
  }

  $scope.toggleSubcontent = toggleSubcontent;

});