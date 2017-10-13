angular.
  module('list').
  component('list', {
    templateUrl: 'list/list.template.html',
    controller: [ '$http', function ListController($http) {

      var self = this;

      self.getLists = function(){
        $http.get('//172.16.1.70:5000/lists').then(function(response) {
          console.log('web api /lists called');
          self.lists = response.data;
        }, function(response){
          console.log('Error occurred on GET /lists: ' + response.toString())
          }
        );
      };

      self.getLists();

      self.addList = function (){

        var newList = {
          name : this.listText
        };

        $http.post('//172.16.1.70:5000/lists', JSON.stringify(newList)).then(function(response){
          self.getLists();
          self.listText = '';
        }, function(response){
          alert('There was an error');
        });
      };

      self.deleteList = function(listId, listName){

        if(confirm('Are you sure you want to delete your ' + listName + " list?")){

          $http.delete('//172.16.1.70:5000/lists/' + listId).then(function(response){
              self.getLists();
            }, function(response){
              alert('error');
          });

        }

      };

    }]

});
