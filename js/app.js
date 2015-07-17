var app = angular.module('artmoApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'templates/home.html',
        controller: 'homeController',
        controllerAs: 'homeCtrl'
        })
    .when('/signup', {
        templateUrl: 'templates/signup.html',
        controller: 'signupController',
        controllerAs: 'signupCtrl'
        })
    .when('/signin', {
        templateUrl: 'templates/signin.html',
        controller: 'signinController',
        controllerAs: 'signinCtrl'
        });
    
}]);