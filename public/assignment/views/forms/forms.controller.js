/**
 * Created by Jaclyn on 2/24/16.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("FormController", FormController);

    function FormController($scope, $location, $rootScope, FormService){
        var currentUser = $rootScope.user;
        FormService.findAllFormsForUser(currentUser._id, findAllFormsCallback);

        $scope.addForm = function () {
            var newForm = {title: $scope.newFormName};
            FormService.createFormForUser(currentUser._id, newForm, createFormCallback);
        }

        $scope.updateForm = function () {
            FormService.updateFormById(myForm._id, {title: $scope.newFormName}, updateFormCallback);
        }

        $scope.deleteForm = function (index) {
            var selectedForm = $rootScope.forms[index];
            FormService.deleteFormById(selectedForm._id, deleteFormCallback);
        }

        $scope.selectForm = function (index) {
            var selectedForm = $rootScope.forms[index];
            FormService.updateFormById(selectedForm._id, {}, selectFormCallback);
        }

        function deleteFormCallback(currentForms) {
            $rootScope.forms = currentForms;
        }

        function createFormCallback(newForm) {
            $rootScope.forms.push(newForm);
        }

        function findAllFormsCallback(forms) {
            $rootScope.forms = forms;
        }

        function updateFormCallback(form) {
            $rootScope.myForm = form;
        }

        function selectFormCallback(form) {
            $rootScope.myForm = form;
            $scope.newFormName = form.title;
        }
    }
})();