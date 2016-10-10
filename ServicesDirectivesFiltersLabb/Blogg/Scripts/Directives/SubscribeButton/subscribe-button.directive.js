angular.module("mainModule")
    .directive("subscribeButton", [
        function () {
            return {
                restrict: "E",
                scope: {
                    subscribed: "=ngModel"
                },
                templateUrl: "Scripts/Directives/SubscribeButton/SubscribeButton.html"
            }
        }
    ]);