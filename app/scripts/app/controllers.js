'use strict';

/* Controllers */
angular.module('app.controllers').controller('AppCtrl', [
  '$scope', '$location', '$resource', '$rootScope', function($scope, $location, $resource, $rootScope) {
    $scope.$location = $location;
    $scope.$watch('$location.path()', function(path) {
      return $scope.activeNavId = path || '/';
    });
    return $scope.getClass = function(id) {
      if ($scope.activeNavId.substring(0, id.length) === id) {
        return 'active';
      } else {
        return '';
      }
    };
  }
])
.controller('TestCtrl', ['$scope', '$interval', function($scope, $interval) {
    $scope.date = {
        startDate: moment().subtract("days", 1),
        endDate: moment()
    };
 
}])
.controller('MainCtrl', ['$scope', function ($scope) {
    $scope.val = 'B';
    $scope.states = ['California', 'Arizona', 'Nevada', 'Florida'];
    $scope.slides = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg'];

}]
).controller('TodoCtrl', [
  '$scope', function($scope) {
    $scope.todos = [
      {
        text: "learn angular",
        done: true
      }, {
        text: "build an angular app",
        done: false
      }
    ];
    $scope.addTodo = function() {
      $scope.todos.push({
        text: $scope.todoText,
        done: false
      });
      return $scope.todoText = "";
    };
    $scope.remaining = function() {
      var count;
      count = 0;
      angular.forEach($scope.todos, function(todo) {
        return count += (todo.done ? 0 : 1);
      });
      return count;
    };
    return $scope.archive = function() {
      var oldTodos;
      oldTodos = $scope.todos;
      $scope.todos = [];
      return angular.forEach(oldTodos, function(todo) {
        if (!todo.done) {
          return $scope.todos.push(todo);
        }
      });
    };
  }
]);