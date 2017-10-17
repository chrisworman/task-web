angular
  .module('tasks')
  .component('tasks', {
    templateUrl: 'tasks/tasks.template.html',
    controller: ['$http', '$routeParams', function TasksController($http, $routeParams){
      this.listId = $routeParams.id;

      //call rest api for list tasks
      var self = this;

      self.getTasks = function(){
        $http.get('//172.16.1.70:5000/tasks?list_id=' + this.listId).then(function(response) {
          console.log('web api /tasks?list_id= called');
          self.tasks = response.data;
        });
      };

      self.getTasks();

      self.addTask = function(){

        var newTask = {
          text : this.taskText,
          list_id : this.listId
        };

        $http.post('//172.16.1.70:5000/tasks', JSON.stringify(newTask)).then(function(response){
          self.getTasks();
          self.taskText = '';
        }, function(response){
          alert('There was an error adding a task');
        });
      };

      self.deleteTask = function(taskId){

        if(confirm('Are you sure you wish to delete this task?')){

          //proceed to delete task
          $http.delete('//172.16.1.70:5000/tasks/' + taskId).then(function(response){
            self.getTasks();
          }, function(response){
            //error
            alert('Error occurred trying to delete this task');
          });
        }

      };

      self.editTask = function(taskId, taskName){

          self.taskId = taskId;

          //show modal
          $('#editTask').modal('show');

      };

      self.saveTask = function(){

        if(self.taskEditText){

          var task = {
            list_id : self.listId,
            text: self.taskEditText
          };

          //proceed to delete task
          $http.put('//172.16.1.70:5000/tasks/' + self.taskId, JSON.stringify(task)).then(function(response){
            self.getTasks();
            self.taskEditText = '';
            $('#editTask').modal('hide');
          }, function(response){
            //error
            alert('Error occurred trying to update this task');
          });
        }
        else{
          alert('Task Name cannot be empty');
        }

      };

    }]
  });
