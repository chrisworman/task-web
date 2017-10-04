angular.module('taskApp',[])
  .controller('ListIndexController', function($http){
      var controller = this;

      controller.lists = [{id: 1,
                             name: 'Shopping List'},
                             {id: 2,
                            name: 'Camping List'},
                            {id: 3,
                              name: 'Travel List'}
                           ];

        /*$http({ method: 'GET', url: 'PUT GET LISTS ENDPOINT HERE'})
          success(function(data){
            controller.lists = data;
          });
        */

  });
