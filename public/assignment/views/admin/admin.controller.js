/**
 * Created by Jaclyn on 2/24/16.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("AdminController", AdminController);

    function AdminController($scope, $location) {
        $scope.$location = $location;
    }
})();