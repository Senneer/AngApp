peopleApp.factory('people', ['$http', function($http) {
  return $http
  .get('js/people.json')
  .then(
    function(response) {
      return response;
    },
    function(err) {
      return err;
    }
    );
}]);