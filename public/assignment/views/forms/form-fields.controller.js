/**
 * Created by Jaclyn on 2/24/16.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("FormFieldController", FormFieldController);

    function FormFieldController($scope, $location) {
        $scope.$location = $location;
    }
})();