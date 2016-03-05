/**
 * Created by Jaclyn on 2/25/16.
 */
(function()
{
    angular
        .module("FormBuilderApp")
        .config(function($routeProvider)
        {
            $routeProvider
                .when("/register", {
                    templateUrl: "views/users/register.view.html",
                    controller: 'RegisterController'
                })
                .when("/login", {
                    templateUrl: "views/users/login.view.html",
                    controller: 'LoginController'
                })
                .when("/home", {
                    templateUrl: "views/home/home.view.html",
                    controller: 'HomeController'
                })
                .when("/forms", {
                    templateUrl: "views/forms/forms.view.html",
                    controller: 'FormController'
                })
                .when("/form-fields", {
                    templateUrl: "views/forms/form-felds.view.html",
                    controller: 'FormFieldController'
                })
                .when("/profile", {
                    templateUrl: "views/users/profile.view.html",
                    controller: 'ProfileController'
                })
                .when("/admin", {
                    templateUrl: "views/users/admin.view.html",
                    controller: 'AdminController'
                });
        });
})();