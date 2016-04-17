/**
 * Created by Jaclyn on 2/25/16.
 */
(function() {
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("MainController", MainController);

    function MainController($scope, $location, UserService){
        $scope.location = $location;

        $scope.currentUser = function () {
            var user = UserService.getCurrentUser();
            return user;
        }

        $scope.isAdmin = function() {
            var user = UserService.getCurrentUser();
            if(!user) {
                return false;
            } else {
                return user.roles.indexOf("admin") > -1;
            }
            return false;
        }
    }
})();