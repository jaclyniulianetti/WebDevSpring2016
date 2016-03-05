/**
 * Created by Jaclyn on 2/24/16.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("SidebarController", SidebarController);

    function SidebarController($scope, $location){
        $scope.location = $location;
    }
})();