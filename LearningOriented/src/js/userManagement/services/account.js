var app;
(function (app) {
    var userManagement;
    (function (userManagement) {
        "use strict";
        var Account = (function () {
            function Account() {
                this.instance = function (data) {
                };
            }
            Object.defineProperty(Account.prototype, "currentInstance", {
                get: function () {
                    return this._currentInstance;
                },
                set: function (value) {
                    this._currentInstance = value;
                },
                enumerable: true,
                configurable: true
            });
            return Account;
        })();
    })(userManagement = app.userManagement || (app.userManagement = {}));
})(app || (app = {}));

//# sourceMappingURL=../../userManagement/services/account.js.map