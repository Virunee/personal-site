var personalSite = angular.module('personalSite', ['ngRoute']);

personalSite.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
  })

    .when('/about', {
      templateUrl: 'pages/about.html'
    })

    .when('/developer', {
      templateUrl: 'pages/developer.html'
    })

    .when('/art', {
      templateUrl: 'pages/art.html'
    })

    .when('/videos', {
      templateUrl: 'pages/videos.html'
    })

    .when('/podcasts', {
      templateUrl: 'pages/podcasts.html'
    })
});

//CONTROLLERS

personalSite.controller('mainController', ['$scope', function($scope) {

}]);
