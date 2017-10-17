angular.
  module('taskApp').
  config(['$locationProvider', '$routeProvider',
      function config($locationProvider, $routeProvider){
        //$locationProvider.hashPrefix('!');
        $locationProvider.html5Mode(true);

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
