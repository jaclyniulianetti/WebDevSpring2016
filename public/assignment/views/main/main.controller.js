/**
 * Created by Jaclyn on 2/25/16.
 */
(function()
{
    angular
        .module("FormBuilderApp")
        .controller("MainController", MainController);
    function MainController($scope) {
        $scope.$location = $location;
    }
})();