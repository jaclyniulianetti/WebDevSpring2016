/**
 * Created by Jaclyn on 3/4/16.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService);

    function UserService($rootScope) {
        var model ={
            currentUsers: [
            {	"_id":123, "firstName":"Alice",            "lastName":"Wonderland",
                "username":"alice",  "password":"alice",   "roles": ["student"]		},
            {	"_id":234, "firstName":"Bob",              "lastName":"Hope",
                "username":"bob",    "password":"bob",     "roles": ["admin"]		},
            {	"_id":345, "firstName":"Charlie",          "lastName":"Brown",
                "username":"charlie","password":"charlie", "roles": ["faculty"]		},
            {	"_id":456, "firstName":"Dan",              "lastName":"Craig",
                "username":"dan",    "password":"dan",     "roles": ["faculty", "admin"]},
            {	"_id":567, "firstName":"Edward",           "lastName":"Norton",
                "username":"ed",     "password":"ed",      "roles": ["student"]		}
            ],
            currentUser: null,
            setCurrentUser: setCurrentUser,
            getCurrentUser: getCurrentUser,
            findUserByCredentials: findUserByCredentials,
            findAllUsers: findAllUsers,
            createUser: createUser,
            deleteUserById: deleteUserById,
            updateUser: updateUser
        };
        return model;

        function setCurrentUser(user) {
            model.currentUser = user;
            $rootScope.currentUser = user;
        }

        function getCurrentUser() {
            return model.currentUser;
        }

        function findUserByCredentials(credentials) {
            for (var u in model.currentUsers) {
                if (model.currentUsers[u].username === credentials.username &&
                    model.currentUsers[u].password === credentials.password) {
                    return model.currentUsers[u];
                }
            }
            return null;
        }

        function findAllUsers() {
            return model.currentUsers;
        }

        function createUser(credentials) {
            var user = {
                _id : (new Date).getTime(),
                username : credentials.username,
                password : credentials.password,
                email: credentials.password,
                roles: []
            }
            model.currentUsers.push(user);
            return user;
        }

        function deleteUserById(userId) {
            for (var i = 0; i < model.currentUsers.length; i++) {
                if (model.currentUsers[i]._id == userId) {
                    model.currentUsers.splice(i, 1);
                    break;
                }
            }
            return currentUsers;
        }

        function updateUser(currentUser) {
            var user = model.findUserByCredentials(currentUser.username, currentUser.password);
            if (user != null) {
                user.firstName = currentUser.firstName;
                user.lastName = currentUser.lastName;
                user.email = currentUser.email;
                return user;
            }
            else {
                return null;
            }
        }
    }
})();