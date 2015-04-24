var app;
(function (app) {
    var userManagement;
    (function (userManagement) {
        "use strict";
        var Profile = (function () {
            function Profile() {
                this.instance = function (data) {
                };
            }
            Object.defineProperty(Profile.prototype, "currentInstance", {
                get: function () {
                    return this._currentInstance;
                },
                set: function (value) {
                    this._currentInstance = value;
                },
                enumerable: true,
                configurable: true
            });
            return Profile;
        })();
    })(userManagement = app.userManagement || (app.userManagement = {}));
})(app || (app = {}));

//# sourceMappingURL=../../userManagement/services/profile.js.map