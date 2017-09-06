peopleApp.controller('peopleHome-ctrl', ['$scope', 'people', function($scope, people) {

  people
  .then(
    function(data) {
      if (data.status != 200) {
        $scope.error = true;
        return false;
      }

      $scope.people = data.data;
    });

  $scope.sortField = undefined;
  $scope.reverse = false;

  $scope.sort= function(fieldName) {
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