/**
 * Created by dell on 2016/10/24.
 */
(function (){
    var app=angular.module("myApp",[]);
    app.directive("runoobDirective",function(){
        return {
            restrict:"ACE",
            template:"<h1>自定义指令</h1>"
        }
    });
    app.directive("newLine",function(){
        return {
            template:"<a href='#'>又一条指令</a>"
        }
    });
})();