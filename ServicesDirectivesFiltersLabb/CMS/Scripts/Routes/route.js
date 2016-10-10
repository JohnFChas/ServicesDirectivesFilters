/// <reference path="../angular.js" />
/// <reference path="../angular-route.js" />

angular.module("mainModule")
    .config([
        "$routeProvider",
        "$locationProvider",
        function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider

                .when("/", {
                    templateUrl: "Views/Home.html",
                    controller: "HomeController",
                    caseInsensitiveMatch: true,
                    activeTab: "Home"
                })

                .when("/Posts/New", {
                    templateUrl: "Views/Posts/NewPost.html",
                    controller: "PostController",
                    caseInsensitiveMatch: true,
                    activeTab: "Home"
                })

                .when("/Posts/Edit/:id", {
                    templateUrl: "Views/Posts/EditPost.html",
                    controller: "PostController",
                    caseInsensitiveMatch: true,
                    activeTab: "Home"
                });
        }
    ]);