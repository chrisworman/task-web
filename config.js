angular.module('taskApp', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/lists',{
      templateUrl: '/lists/index.html'
    })
    .when('/lists/:id',{
      templateUrl: '/tasks/index.html',
      controller: 'ShowTasksController',
      controllerAs: showCtrl
    })
    .otherwise({ redirectTo: '/lists' });
  }]);
