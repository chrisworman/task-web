angular.
  module('taskApp').
  config(['$locationProvider', '$routeProvider',
      function config($locationProvider, $routeProvider){
        $locationProvider.hashPrefix('!');

        $routeProvider.
          when('/lists',{
            template: '<list></list>'
          }).
          when('/lists/:id',{
            template: '<tasks></tasks>'
          }).
          otherwise('/lists');

      }
    ]);
