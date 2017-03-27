var personalSite = angular.module('personalSite', ['ngRoute']);

personalSite.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
});

//CONTROLLERS

personalSite.controller('mainController', ['$scope', function($scope) {

}]);
