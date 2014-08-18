'use strict';

/**
 * @ngdoc function
 * @name angTodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angTodoApp
 */
angular.module('angTodoApp')
  .controller('MainCtrl', function ($scope, localStorageService) {

    var todosInStore = localStorageService.get('todos');

    $scope.todos = todosInStore && todosInStore.split('\n') || [];

    $scope.$watch('todos', function () {
        localStorageService.add('todos', $scope.todos.join('\n'));
    }, true);

    $scope.addTodo = function () {
        if($scope.todos.indexOf($scope.todo) > -1){
            console.log('Todo exists!');
            $scope.todo = '';
        } else{
            $scope.todos.push($scope.todo);
            $scope.todo = '';
        }
    };
    $scope.removeTodo = function(index){
        $scope.todos.splice(index, 1);
    };
  });
