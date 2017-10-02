angular.module('taskApp', [])
  .controller('TasksController', function() {
    var taskList = this;
    taskList.tasks = [
      {text:'learn AngularJS', done:true},
      {text:'build an AngularJS app', done:false}];

    taskList.addTask = function() {
      taskList.tasks.push({text:taskList.taskText, done:false});
      taskList.taskText = '';
    };

    taskList.remaining = function() {
      var count = 0;
      angular.forEach(taskList.tasks, function(task) {
        count += task.done ? 0 : 1;
      });
      return count;
    };

    taskList.archive = function() {
      var oldTasks = taskList.tasks;
      taskList.tasks = [];
      angular.forEach(oldTasks, function(task) {
        if (!task.done) taskList.tasks.push(task);
      });
    };
  });
