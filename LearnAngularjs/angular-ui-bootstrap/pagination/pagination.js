/**
 * Created by w1036_000 on 2016/10/27.
 */
angular.module("myApp",['ui.bootstrap']).controller('PaginationDemoCtrl', function ($scope) {
    $scope.totalItems = 200;
    $scope.currentPage = 1;

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function() {
        $log.log('Page changed to: ' + $scope.currentPage);
    };

    $scope.maxSize = 8;
    $scope.bigTotalItems = 175;
    $scope.bigCurrentPage = 1;
});