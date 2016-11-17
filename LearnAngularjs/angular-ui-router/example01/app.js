/**
 * Created by w1036_000 on 2016/10/26.
 */
var myApp = angular.module("myApp", ["ui.router"]);
myApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("", "/PageTab");
    $stateProvider
        .state("PageTab", {
            url: "/PageTab",
            templateUrl: "pagetab.html"
            // views:{
            //     "": {
            //         templateUrl: "pagetab.html"
            //     }
            // }
        })
        .state("PageTab.Page1", {
            url: "/Page1",
            templateUrl: "page1.html",
            controller: "page1Controller"
            // views: {
            //     "": {
            //         templateUrl: "page1.html",
            //         controller: "page1Controller"
            //     }
            // }
        })
        .state("PageTab.Page2", {
            url: "/Page2",
            // templateUrl: "page2.html",
            // controller: ["$scope", function ($scope) {
            //     $scope.a = "aaa";
            // }],
            views: {
                "": {
                    templateUrl: "page2.html",
                    controller: ["$scope", function ($scope) {
                        $scope.a = "aaa";
                    }]
                }
            }
        })
        .state("PageTab.Page3", {
            url: "/Page3",
            // templateUrl:"page3.html",
            views: {
                "": {
                    templateUrl: "page3.html"
                }
            }
        });

});
myApp.controller("page1Controller", function ($scope) {
    $scope.a = "aaa";
})