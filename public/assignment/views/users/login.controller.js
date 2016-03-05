/**
 * Created by Jaclyn on 2/24/16.
 */
(function() {
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);

    function LoginController($scope, $location, $rootScope, UserService){
        $scope.login = functon ()
        {
            UserService.findUserByCredentials($scope.username, $scope.password, function(user) {
                if (user != null) {
                    $rootScope.user = user;
                    $location.url("/profile");
                }
            });
        }
    }
})();