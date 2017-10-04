angular.module('taskApp')
  .controller('ShowTasksController', ['$http', '$routeParams', function($http, $routeParams){
     var controller = this;

     alert("url id is: " + $routeParams.id);
     /*$http({ method: 'GET', url: '/tasks?list_id=' + $routeParams.id })
      .success(function(data){
        controller.tasks = data;
      });
      */
  }]);
