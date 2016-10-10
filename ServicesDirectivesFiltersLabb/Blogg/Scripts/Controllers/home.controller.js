/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("HomeController", [
        "$scope",
        function ($scope) {
            $scope.title = "Home";

            $scope.subscribe = function (author) {
                if ($scope.models.subscribedAuthors.indexOf(author) == -1) {
                    $scope.models.subscribedAuthors.push(author);
                }

                $scope.save();
                $scope.getFeed();
            }
        }
    ]);