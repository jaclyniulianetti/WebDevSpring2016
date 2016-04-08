(function() {
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);

    function LoginController($location, $scope, UserService, $rootScope){
        $scope.login = login;

        function login(user) {
            UserService.findUserByCredentials($scope.username, $scope.password);
            $rootScope.user = user;
            $location.url("/profile");
        }
    }
})();