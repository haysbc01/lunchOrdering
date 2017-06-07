
angular.module('lunch', ['ngRoute'])
  .config(Config);

Config.$inject = ['$routeProvider'];

function Config($routeProvider){

  $routeProvider
    .when('/', {
      templateUrl : '/html/home.html',
      controller : 'authController',
      controllerAs : 'auth'
    })

    .when('/lunch', {
      templateUrl : '/html/lunch.html',
      controller : 'lunchController',
      controllerAs : 'lunch'
    })

    .when('/admin', {
      templateUrl : '/html/admin.html',
      controller : 'adminController',
      controllerAs : 'admin'
    })
    
}