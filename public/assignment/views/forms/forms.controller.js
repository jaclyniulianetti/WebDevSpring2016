/**
 * Created by Jaclyn on 2/24/16.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("FormController", FormController);

    function FormController($scope, $location, $rootScope, FormService){
        var currentUser = $scope.currentUser();
        $scope.currentForms = FormService.findAllFormsForUser(currentUser._id);


        $scope.addForm = function () {
            var newForm = {title: $scope.newFormName};
            FormService.createFormForUser(currentUser._id, newForm);
        }

        $scope.updateForm = function () {
            FormService.updateFormById(myForm._id, {title: $scope.newFormName});
        }

        $scope.deleteForm = function (index) {
            var selectedForm = $rootScope.forms[index];
            FormService.deleteFormById(selectedForm._id);
        }

        $scope.selectForm = function (index) {
            var selectedForm = $rootScope.forms[index];
            FormService.updateFormById(selectedForm._id, {});
        }
    }
})();
