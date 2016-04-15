/**
 * Created by Jaclyn on 3/4/16.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .factory("FormService", FormService);

    function FormService() {
        var model = {
            forms : [
                {"_id": "000", "title": "Contacts", "userId": 123},
                {"_id": "010", "title": "ToDo", "userId": 123},
                {"_id": "020", "title": "CDs", "userId": 234}
            ],
            createFormForUser : createFormForUser,
            findAllFormsForUser: findAllFormsForUser,
            deleteFormById : deleteFormById,
            updateFormById: updateFormById
        };
        return model;

        function createFormForUser(userId, form) {
            model.form._id = (new Date).getTime();
            model.form.userId = userId;
            model.forms.push(form);
        }

        function findAllFormsForUser(userId) {
            var userForms = [];
            for (var i = 0; i < model.forms.length; i++) {
                if (model.forms[i].userId == userId) {
                    userForms.push(model.forms[i]);

                }
            }
            return userForms;
        }

        function deleteFormById(formId) {
            for (var i = 0; i < model.forms.length; i++) {
                if (model.forms[i].formId == formId) {
                    model.forms.splice(i, 1);
                    break;
                }
            }
            return forms;
        }

        function updateFormById(formId, newForm) {
            for (var i = 0; i < model.forms.length; i++) {
                if (model.forms[i].formId == formId) {
                    model.forms[i] = newForm;
                    return model.forms[i];
                }
            }
            return null;
        }
    }
})();