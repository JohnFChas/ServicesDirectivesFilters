angular.module("mainModule")
    .component("postVote", {
        templateUrl: "Scripts/Components/PostVote/PostVote.html",
        bindings: {
            post: "="
        },
        controller: function (postsApi) {
            var scope = this;

            scope.vote = function (upVote) {        // Takes a bool argument
                postsApi.vote(scope.post, upVote)
                    .then(function (post) {
                        scope.post = post;
                        console.log(scope.post)
                    });
            }
        },
        controllerAs: "scope"
    })