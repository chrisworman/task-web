angular
  .module('tasks')
  .component('tasks', {
    templateUrl: 'tasks/tasks.template.html',
    controller: ['$http', '$routeParams', function TasksController($http, $routeParams){
      this.listId = $routeParams.id;

      //call rest api for list tasks
      var self = this;

      $http.get('//172.16.1.70:5000/tasks?list_id=' + this.listId).then(function(response) {
        console.log('web api /tasks?list_id= called');
        self.tasks = response.data;
      });

    }]
  });
