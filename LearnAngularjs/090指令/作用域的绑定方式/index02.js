/**
 * Created by w1036_000 on 2017/8/23.
 */

var app = angular.module('myApp', []);

app.controller('ctrl', ['$scope', function ($scope) {
    $scope.data = {
        fn: function (a, b) {
            console.log('...this is fn...', 'a:', a, 'b:', b);
        }
    }
}]);

app.directive('dirOne', [function () {
    return {
        restrict: 'A',
        scope: {
            bindFnOne: '&',
            bindFnTwo: '&',
            bindFnThree: '&',
            bindFnFour: '&'
        },
        template: "<div>\
            <h3 ng-click='bindFnOne()'>内部</h3>\
            <h4 ng-click='innerFnOne()'>在内部函数中调用</h4>\
            <h4 ng-click='innerFnTwo()'>在内部调用时带一个参数(出现异常)</h4>\
            <h4 ng-click='innerFnThree()'>在外部绑定时带一个参数(预设原函数的参数值)</h4>\
            <h4 ng-click='innerFnFour()'>ttt</h4>\
        </div>",
        controller: ['$scope', function ($scope) {
            $scope.innerFnOne = function () {
                $scope.bindFnOne();
            };
            $scope.innerFnTwo = function () {
                $scope.bindFnOne('aaa');
            };
            $scope.innerFnThree = function () {
                $scope.bindFnTwo();
            };
            $scope.innerFnFour = function () {
                $scope.bindFnThree(1);
            };
        }]
    }
}]);


