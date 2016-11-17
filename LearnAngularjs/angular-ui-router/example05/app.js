/**
 * Created by dell on 2016/10/26.
 */
var photoGallery = angular.module("photoGallery", ["ui.router"]);
photoGallery.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("", "/index");


    $stateProvider
        .state("content", {
            url: "/index",
            views: {
                "": {
                    templateUrl: "partials/content.html"
                },
                "header@content": {
                    templateUrl: "partials/header.html"
                }
            }
        })
        .state("content.home", {
            url: "/home",
            views: {
                "body@content": {
                    templateUrl: "partials/home.html",
                    controller:"homeController",
                    controllerAs:"ctrHome"
                }
            }
        })
        .state("content.photos", {
            url: "/photos",
            views: {
                "body@content": {
                    templateUrl: "partials/photos.html",
                    controller:"PhotoController",
                    controllerAs:"ctrPhoto"
                }
            }
        })
        .state("content.photos.list",{
            url:"/list",
            templateUrl:"partials/photos-list.html",
            controller:"PhotoListController",
            controllerAs:"ctrPhotoList"
        })
        .state("content.photos.detail",{    //list和detail是两个相邻状态
            url:"/detail",
            templateUrl:"partials/photos-detail.html",
            controller:"PhotoDetailController",
            controllerAs:"ctrPhotoDetail"
        })
        .state("content.photos.detail.comment",{
            url:"/comment",
            templateUrl:"partials/photos-detail-comment.html"
        })
        .state("content.about", {
            url: "/about",
            views: {
                "body@content": {
                    templateUrl: "partials/about.html"
                }
            }
        })
});














