var peopleApp = angular.module('peopleApp', ['ngRoute']);

peopleApp.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      controller: 'peopleHome-ctrl',
      templateUrl: 'views/home.html'
    })
    .when('/person/:id', {
      controller: 'person-ctrl',
      templateUrl: 'views/person.html'
    })
    .otherwise({
      redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
});