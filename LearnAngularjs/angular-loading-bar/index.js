/**
 * Created by w1036_000 on 2016/10/26.
 */
(function () {
    var app = angular.module("myApp",['angular-loading-bar', 'ngAnimate']);

    app.controller("myController",function ($scope, $http) {
        $scope.doGet=function () {
            $http.get("https://www.baidu.com").success(function (response) {
                console.log("成功");
            }).error(function (response) {
                console.log("失败");
            });
        }
    });

    app.config(["cfpLoadingBarProvider",function (cfpLoadingBarProvider) {
        // cfpLoadingBarProvider.includeSpinner=false;//开关旋转
    }])
})();


