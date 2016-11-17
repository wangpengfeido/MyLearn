/**
 * Created by w1036_000 on 2016/10/27.
 */
photoGallery.controller("HomeController", function ($scope) {
    $scope.message = "welcome to photo gallery";
});
photoGallery.controller("PhotoController", function ($scope) {
    $scope.photos = [
        {
            id: 0,
            title: "photo1",
            description: "description for photo1",
            comments: [{name: "user1", comment: "nice"}, {name: "user2", comment: "very good"}]
        },
        {
            id: 1,
            title: "photo2",
            description: "description for photo2",
            comments: [{name: "user1", comment: "nice"}, {name: "user2", comment: "very good"}]
        },
        {
            id: 2,
            title: "photo3",
            description: "description for photo3",
            comments: [{name: "user1", comment: "nice"}, {name: "user2", comment: "very good"}]
        },
        {
            id: 3,
            title: "photo4",
            description: "description for photo4",
            comments: [{name: "user1", comment: "nice"}, {name: "user2", comment: "very good"}]
        }
    ];
    $scope.pullData=function(){
        $scope.$$childTail.ctrPhotoList.photos=$scope.photos;//给子state下controller中的photos赋值
    }
});
photoGallery.controller("PhotoListController",function ($scope, $state) {
    $scope.reading=false;
    $scope.photos=[];
    $scope.init=function () {
        $scope.reading=true;
        setTimeout(function () {
            $scope.apply(function () {
                $scope.ctrPhotoList.getData();
            });
        },1500);
    }
    $state.getData=function () {
        $scope.$parent.ctrPhoto.pullData();//调用父state中controller的方法
        this.reading=false;
    }
});
photoGallery.controller("photoDetailController",function ($scope, $state) {

});