var app;
(function (app) {
    var userManagement;
    (function (userManagement) {
        "use strict";
        var Profile = (function () {
            function Profile() {
            }
            Profile.instance = function () {
            };
            return Profile;
        })();
        angular.module("app.userManagement").directive("profile", [Profile.instance]);
    })(userManagement = app.userManagement || (app.userManagement = {}));
})(app || (app = {}));

//# sourceMappingURL=../../../userManagement/directives/profile/profile.js.map