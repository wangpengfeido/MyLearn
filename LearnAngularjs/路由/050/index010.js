let app = angular.module('myApp', ['ui.router']);
app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.hashPrefix('');

    $stateProvider.state('one', {
        url: '/one',
        template: `<div>this is one</div>`,
    })
}]);
