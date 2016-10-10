angular.module("mainModule")
    .controller("PostController", [
        "$scope",
        "$routeParams",
        "postsApi",
        function ($scope, $routeParams, postsApi) {
            $scope.post = {};
            $scope.newPost = {};

            $scope.$watch("models.posts", function (posts) {
                $scope.post = posts.filter(function (post) {
                    return post.id == $routeParams.id;
                })[0];
            });

            $scope.addPost = function () {
                postsApi.addPost($scope.newPost)
                    .then(function (post) {
                        $scope.models.posts.push(post);
                        $scope.go("/");
                    });
            }

            $scope.updatePost = function () {
                postsApi.updatePost($scope.post)
                    .then(function (post) {
                        $scope.post = post;
                        $scope.go("/");
                    });
            }
        }
    ]);