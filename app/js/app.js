'use strict';

angular.module('profilerApp', [
  'ngRoute',
  'profilerApp.filters',
  'profilerApp.services',
  'profilerApp.directives',
  'profilerApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/user/:username', {templateUrl: 'partials/user.html', controller: 'profilerCtrl'});
  $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'profilerCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
