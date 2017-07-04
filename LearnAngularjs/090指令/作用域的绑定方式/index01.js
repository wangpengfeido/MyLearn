/**
 * Created by dell on 2017/2/20.
 */
var app = angular.module('myApp',[]);

app.controller('ctrl', ['$scope', function ($scope) {
    $scope.values={
        one:'one',
        two:'two',
        three:function () {
            console.log('..........three');
        },
        four:'four'
    }
}]);

//@绑定
app.directive('dirOne',[function () {
    return {
        restrict:'A',
        scope:{
            bindValue:'@'
        },
        template:"<div><div>{{bindValue}}</div><div><input type='text' ng-model='bindValue'></div></div><hr/>"
    }
}]);
//=绑定
app.directive('dirTwo',[function () {
    return {
        restrict:'A',
        scope:{
            bindValue:'='
        },
        template:"<div><div>{{bindValue}}</div><div><input type='text' ng-model='bindValue'></div></div><hr/>"
    }
}]);
//&绑定
app.directive('dirThree',[function () {
    return {
        restrict:'A',
        scope:{
            bindValue:'&'
        },
        template:"<div><div><button type='button' ng-click='bindValue()'>three</button></div></div><hr/>"
    }
}]);
//<绑定
app.directive('dirFour',[function () {
    return {
        restrict:'A',
        scope:{
            bindValue:'<'
        },
        template:"<div><div>{{bindValue}}</div><div><input type='text' ng-model='bindValue'></div></div><hr/>"
    }
}]);
