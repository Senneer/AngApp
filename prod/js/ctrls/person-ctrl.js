peopleApp.controller('person-ctrl', ['$scope', '$routeParams', 'people', '$rootScope', function($scope, $routeParams, people, $rootScope) {

  $scope.person = $rootScope.people[$routeParams.id - 1];
}]);