peopleApp.controller('peopleHome-ctrl', ['$scope', 'people', function($scope, people) {

  people
  .then(
    function(response) {
      if (response.status != 200) {
        $scope.error = true;
        return false;
      }

      $scope.people = response.data;

      $scope.cities = [];
      $scope.positions = [];

      $scope.people.forEach(function(el, i) {
        $scope.cities.push(el.city);
      });
      $scope.people.forEach(function(el, i) {
        $scope.positions.push(el.position);
      });

      $scope.formCities = $scope.cities[0];
      $scope.formPos = $scope.positions[0];

      $scope.changePos = function(city) {
        var result = [];

        for (var i = 0; i < $scope.people.length; i++) {
          if ($scope.people[i].city == city) {
            result.push($scope.people[i].position);
          }
        }
        $scope.positions = result;
        $scope.formPos = $scope.positions[0];
      };
      $scope.changePos($scope.formCities);

      $scope.filterPeople = {};

      $scope.filterList = function() {
        $scope.filterPeople.city = $scope.formCities;
        $scope.filterPeople.position = $scope.formPos;
      };
    });

  $scope.sortField = undefined;
  $scope.reverse = false;

  $scope.sort = function(fieldName) {
    if ($scope.sortField === fieldName) {
      $scope.reverse = !$scope.reverse;
    } else {
      $scope.sortField = fieldName;
      $scope.reverse = false;
    }
  };
  $scope.isSortUp = function(fieldName) {
    return $scope.sortField === fieldName && !$scope.reverse;
  };
  $scope.isSortDown = function(fieldName) {
    return $scope.sortField === fieldName && $scope.reverse;
  };
}]);