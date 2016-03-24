'use strict';

/**
 * @ngdoc overview
 * @name guacApp
 * @description
 * # guacApp
 *
 * Main module of the application.
 */
angular
  .module('guacApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider, $httpProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
