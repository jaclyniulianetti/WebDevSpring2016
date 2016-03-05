/**
 * Created by Jaclyn on 2/25/16.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("MainController", MainController);

    function MainController($scope, $location){
        $scope.location = $location;
    }
})();