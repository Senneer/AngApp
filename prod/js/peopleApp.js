var peopleApp = angular.module('peopleApp', ['ngRoute']);

peopleApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'peopleHome-ctrl',
      templateUrl: '../views/home.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});