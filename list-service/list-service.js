
angular.module('taskApp').factory('listService', function() {
  var callbacks = [];
  var getTasks = function(listId) {
    //notify if there are any listeners
    var i = 0;
    for (i = 0; i < callbacks.length; i++)
      callbacks[i](listId);
  }
  //register listener
  var onListClicked = function(callback) {
    callbacks.push(callback);
  }
  return {
    onListClicked: onListClicked,
    getTasks: getTasks
  };
});
