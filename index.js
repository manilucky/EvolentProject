'use strict';

angular.module('evolventSampleApp',['ngRoute','ui.bootstrap'])
.config(function($routeProvider,$locationProvider){
  $routeProvider
  .when('/', {
        templateUrl: 'views/home.html',
        controller: 'hmeCtrl',
      })
  .when('/contract/add', {
            templateUrl: '/views/contacts/addcontacts.html',
            controller: 'ctactCtrl',
            controllerAs:'ct',
          })
  .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });
});
