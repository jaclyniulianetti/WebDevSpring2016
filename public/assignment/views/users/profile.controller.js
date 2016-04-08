(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController);

    function ProfileController($scope, UserService, $location) {
        $scope.updateUser = updateUser;

        function updateUser(user) {
            $scope.currentUser = UserService.updateUser(user);
            $location.url("/profile");
        }
    }
})();