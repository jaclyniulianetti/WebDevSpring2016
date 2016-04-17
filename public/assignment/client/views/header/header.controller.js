/**
 * Created by Jaclyn on 2/24/16.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("HeaderController", HeaderController);

    function HeaderController($scope, $location, UserService){
        $scope.$location = $location;

        $scope.logout = function () {
            UserService.setCurrentUser(null);
            $location.url('/home');
        };
    }
})();
