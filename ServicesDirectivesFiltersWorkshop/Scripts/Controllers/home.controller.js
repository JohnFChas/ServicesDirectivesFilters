/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("HomeController", [
        "$scope",
        "postsApi",
        function ($scope, postsApi) {
            $scope.title = "Home";
            $scope.posts = [];

            postsApi.getPosts()
                .then(function (data) {
                    $scope.posts = data;
                });

        }
    ]);