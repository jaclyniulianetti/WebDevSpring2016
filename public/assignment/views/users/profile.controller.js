/**
 * Created by Jaclyn on 2/24/16.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController);

    function ProfileController($scope, $location, $rootScope, UserService) {
        $scope.currentUser = $rootScope.user;
        $scope.update = update;

        function update(user) {
            UserService
                .updateUser($scope.currentUser._id, $scope.currentUser, function(user) {
                    $rootScope.user = user;
                    $location.url("/profile");
                });
        }
    }
})();