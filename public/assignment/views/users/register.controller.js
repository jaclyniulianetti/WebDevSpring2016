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
            var newUser = UserService.createUser($scope.user);
            $rootScope = newUser;
            $location.url("/profile");
        }
    }
})();
