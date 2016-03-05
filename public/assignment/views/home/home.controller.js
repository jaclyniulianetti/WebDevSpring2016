/**
 * Created by Jaclyn on 3/4/16.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("HomeController", HomeController);

    function HomeController($scope, $location) {
        $scope.$location = $location;
    }
})();