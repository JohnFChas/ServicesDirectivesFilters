/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("MainController", [
        "$scope",
        "$location",
        "$route",
        function ($scope, $location, $route) {
            $scope.$route = $route;
            $scope.posts = [];

            $scope.go = function (url) {
                $location.path(url);
            };
        }
    ]);