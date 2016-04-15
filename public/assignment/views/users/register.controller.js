/**
 * Created by Jaclyn on 2/24/16.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("RegisterController", RegisterController);

    function RegisterController($location, $scope, UserService, $rootScope) {
        $scope.register = register;

        function register(user) {
            if (user != null && user.username && user.password &&
                user.verifyPassword && user.password == user.verifyPassword) {
                var newUser = UserService.createUser($scope.user);
                UserService.setCurrentUser(newUser);
                $location.url("/profile");
                var newUser = UserService.createUser({
                    username: user.username,
                    password: user.password,
                    email: user.email
                });
                $rootScope = newUser;
                UserService.setCurrentUser(newUser);
                $location.url("/profile");
            }
        }
    }
})();

