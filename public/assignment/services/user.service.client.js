/**
 * Created by Jaclyn on 3/4/16.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService);

    function UserService() {
        var currentUsers = [];
        currentUsers = [
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
        ];

        function findUserByCredentials(username, password, callback) {
            for (var i = 0; i < currentUsers.length; i++) {
                if (currentUsers[i].username == username && currentUSers[i].password == password) {
                    callback(currentUsers[i]);
                    break;
                }
            }
            callback(null);
        }

        function findAllUsers(callback) {
            callback(currentUsers);
        }

        function createUser(user, callback) {
            user._id = (new Date).getTime();
            currentUsers.push(user);
            callback(user);
        }

        function deleteUserById(userId, callback) {
            for (var i = 0; i < currentUsers.length; i++) {
                if (currentUsers[i]._id == userId) {
                    currentUsers.splice(i, 1);
                    break;
                }
            }
            callback(currentUsers);
        }

        function updateUser(userId, user, callback) {
            for (var i = 0; i < currentUsers.length; i++) {
                if (currentUsers[i]._id == userId) {
                    user._id = userId;
                    currentUsers[i] = user;
                    callback(currentUsers[i]);
                    break;
                }
            }
        }
    }
})();