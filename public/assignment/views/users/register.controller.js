/**
 * Created by Jaclyn on 2/24/16.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("RegisterController", RegisterController);

    function RegisterController($scope, $location, $rootScope, UserService) {
        $scope.register = register;

        function register(newUser) {
            UserService.createUser(newUser, function(user) {
                $rootScope.user = user;
                $location.url("/profile");
            });
        }
    }
})();