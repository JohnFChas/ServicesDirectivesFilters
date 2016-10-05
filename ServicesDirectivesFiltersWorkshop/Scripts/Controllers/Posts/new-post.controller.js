angular.module("mainModule")
    .controller("NewPostController", [
        "$scope",
        function ($scope) {
            $scope.title = "New post";
        }
    ]);