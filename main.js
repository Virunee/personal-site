window.$ = require('jquery');

var personalSite = angular.module('personalSite', ['ngRoute']);

personalSite.config(function ($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
        templateUrl: 'src/pages/main.html',
        controller: 'mainController'
  })

    .when('/about', {
      templateUrl: 'src/pages/about.html'
    })

    .when('/developer', {
      templateUrl: 'src/pages/developer.html'
    })

    .when('/art', {
      templateUrl: 'src/pages/art.html'
    })

    .when('/videos', {
      templateUrl: 'src/pages/videos.html'
    })

    .when('/podcasts', {
      templateUrl: 'src/pages/podcasts.html'
    });

    // use the HTML5 History API
        $locationProvider.html5Mode(true);

});

//CONTROLLERS

personalSite.controller('mainController', ['$scope', function($scope) {

}]);
