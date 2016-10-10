/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("HomeController", [
        "$scope",
        "postsApi",
        function ($scope, postsApi) {
            $scope.title = "Home";
            $scope.sort = {
                string: "title",
                descending: false
            };

            $scope.setSorting = function (string) {
                if ($scope.sort.string == string)
                    $scope.sort.descending = !$scope.sort.descending;
                else {
                    $scope.sort.string = string;
                    $scope.sort.descending = false;
                }
            }

            $scope.deletePost = function (id) {
                postsApi.deletePost(id)
                    .then(function () {
                        var index = $scope.models.posts.map(function (post) {
                            return post.id;
                        }).indexOf(id);

                        $scope.models.posts.splice(index, 1);
                    });
            }
        }
    ]);