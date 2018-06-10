angular.
  module('list').
  component('list', {
    templateUrl: 'list/list.template.html',
    controller: [ '$http', 'listService', function ListController($http, listService) {

      var self = this;
      var listResourceURL = '//localhost:8081/lists';
      self.showTasks = listService.getTasks;

      self.getLists = function(){
        $http.get(listResourceURL).then(function(response) {
          console.log('web api /lists called');
          self.lists = response.data;
        }, function(response){
          console.log('Error occurred on GET /lists: ' + response.toString())
          }
        );
      };

      self.getLists();

      self.showAddListModal = function(){
        $('#addList').modal('show');
      };

      self.addList = function (){

        var newList = {
          name : self.listText
        };

        $http.post(listResourceURL, JSON.stringify(newList)).then(function(response){
          self.getLists();
          $('#addList').modal('hide');
          self.listText = '';
        }, function(response){
          alert('There was an error creating your list');
        });
      };

      self.deleteList = function(listId, listName){

        if(confirm('Are you sure you want to delete your ' + listName + " list?")){
          $http.delete(listResourceURL + '/' + listId).then(function(response){
              self.getLists();
            }, function(response){
              alert('error deleting list');
          });
        }

      };

      self.editList = function(listId, listName){
          self.listId = listId;
          //show modal
          $('#editList').modal('show');
      };

      self.saveList = function(){

        if(self.listEditText){

          var updatedList = {
            name : self.listEditText
          };

          $http.put(listResourceURL + self.listId, JSON.stringify(updatedList)).then(function(response){
            self.getLists();
            self.listEditText = '';
            $('#editList').modal('hide');
          }, function(response){
            alert('There was an error updating your list');
          });
        }
        else{
          alert('List Name cannot be empty');
        }
      };

    }]

});
