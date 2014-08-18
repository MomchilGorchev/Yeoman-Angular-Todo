'use strict';

/**
 * @ngdoc function
 * @name angTodoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angTodoApp
 */
angular.module('angTodoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
