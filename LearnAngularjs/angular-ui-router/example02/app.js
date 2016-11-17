/**
 * Created by dell on 2016/10/26.
 */
var photoGallery = angular.module("photoGallery", ["ui.router"]);
photoGallery.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("","/home");
    $stateProvider
        .state("home", {
            url: "/home",
            templateUrl: "partials/home.html"
        })
        .state("photos", {
            url: "/photos",
            templateUrl: "partials/photos.html"
        })
        .state("about", {
            url: "/about",
            templateUrl: "partials/about.html"
        });
});