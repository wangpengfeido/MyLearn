/**
 * Created by w1036_000 on 2016/12/5.
 */
var app = angular.module("myApp", ['ngAnimate']);
app.controller('myController', function ($scope) {

    /*
     * CSS基础动画
     * 适用于ngIf
     * 定义css：.ng-enter定义进入的开始状态和过渡；.ng-enter.ng-enter-active定义进入的结束状态；.ng-leave定义离开的开始状态和过渡；.ng-leave.ng-leave-active定义离开的结束状态
     * 可以在开始状态中定义动画
     * 也可以过渡和动画混合使用
     * */

    /**
     * CSS类基础动画
     * ngHide,ngShow自带动画类：.ng-hide定义隐藏的起始状态和过度
     * ngClass使用添加的类名定义动画：.xxx-add定义添加时的起始状态 .xxx-remove定义移除时的起始状态
     * 动画定义方式与上面类似
     */

    /*
    * CSS延迟动画
    * */


});
