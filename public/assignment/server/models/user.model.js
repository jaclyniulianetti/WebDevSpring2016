var mock = require("./user.mock.json");

// load q promise library
var q = require("q");

// pass db and mongoose reference to model
module.exports = function(app) {

    var api = {
        create: create,
        findAll: findAll,
        findById: findById,
        update: update,
        deleteU: delete
    };
    return api;

    function findAll () {
        var deferred = q.defer();

        return deferred.promise;
    }

    // use user model find by id
    function findById(userId) {
        var deferred = q.defer();
        UserModel.findById(userId, function (err, doc) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
    }

    function create(user) {

        // use q to defer the response
        var deferred = q.defer();

        // insert new user with mongoose user model's create()
        UserModel.create(user, function (err, doc) {

            if (err) {
                // reject promise if error
                deferred.reject(err);
            } else {
                // resolve promise
                deferred.resolve(doc);
            }

        });

        // return a promise
        return deferred.promise;
    }

}