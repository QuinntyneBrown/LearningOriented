var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var app;
(function (app) {
    var userManagement;
    (function (userManagement) {
        "use strict";
        var AccountService = (function (_super) {
            __extends(AccountService, _super);
            function AccountService($http, $q, apiEndpoint, storage) {
                _super.call(this, $http, $q, apiEndpoint.getBaseUrl(), "account", storage);
                this.$http = $http;
                this.$q = $q;
                this.apiEndpoint = apiEndpoint;
                this.storage = storage;
            }
            return AccountService;
        })(app.common.DataService);
        angular.module("app.userManagement").service("accountService", ["$http", "$q", "apiEndpoint", "storage", AccountService]);
    })(userManagement = app.userManagement || (app.userManagement = {}));
})(app || (app = {}));

//# sourceMappingURL=../../userManagement/services/accountService.js.map