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
                posts: [],
                subscribedAuthors: []
            };

            postsApi.getPosts()
                .then(function (posts) {
                    $scope.models.posts = posts;

                    $scope.getFeed();
                });

            $scope.getFeed = function () {
                angular.forEach($scope.models.posts, function (post) {
                    if ($scope.models.subscribedAuthors.indexOf(post.author) != -1)
                        post.subscribed = true;
                    else
                        post.subscribed = false;
                });

                console.log($scope.models.feed);
            }

            $scope.save = function () {
                localStorage.setItem("models", JSON.stringify($scope.models));
            }

            $scope.load = function () {
                var models = localStorage.getItem("models");
                if (models)
                    $scope.models = JSON.parse(models);
            }

            $scope.go = function (url) {
                $location.path(url);
            };

            $scope.load();
            $scope.getFeed();
        }
    ]);