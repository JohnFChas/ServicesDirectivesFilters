/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("MainController", [
        "$scope",
        "$location",
        "$route",
        "postsApi",
        function ($scope, $location, $route, postsApi) {
            $scope.$route = $route;
            $scope.models = {
                posts: []
            };

            postsApi.getPosts()
                .then(function (posts) {
                    $scope.models.posts = posts;
                })

            $scope.go = function (url) {
                $location.path(url);
            };
        }
    ]);