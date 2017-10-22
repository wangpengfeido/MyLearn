/**
 * Created by w1036_000 on 2016/12/5.
 */
var app = angular.module("myApp", []);
app.controller('myController', ['$scope','$animate','$compile','$rootElement', function ($scope,$animate,$compile,$rootElement) {

    $scope.outerTemplate = '<div>this is outer template!!!{{message}}</div>';

    $scope.addAngularDom = function () {
        $animate.enter($compile('<div my-directive template="'+$scope.outerTemplate+'"></div>')($scope),$rootElement);
    };
}]);

app.directive('myDirective', [function () {
    return {
        restrict: 'A',
        template: function (element, attrs) {
            var template;
            if (attrs.template == null || attrs.template == '') {
                template = '<div>this is inner template!!!{{message}}</div>'
            } else {
                template = attrs.template;
            }
            console.log(template);
            return template;
        },
        controller: ['$scope', function ($scope) {
            $scope.message = 'hello world';
        }]
    };
}]);
// app.directive('myDirectiveTwo', [function () {
//     return {
//         restrict: 'A',
//         template: '<div></div>',
//         scope:{
//           rowTemplate
//         },
//         controller: ['$scope', function ($scope) {
//             $scope.message = 'hello world';
//         }]
//     };
// }]);
