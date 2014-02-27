'use strict';


// Declare app level module which depends on filters, and services
angular.module('profilerApp', [
  'ngRoute',
  'profilerApp.filters',
  'profilerApp.services',
  'profilerApp.directives',
  'profilerApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/user/:username', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl1'});
  $routeProvider.when('/', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
