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
        var ProfileService = (function (_super) {
            __extends(ProfileService, _super);
            function ProfileService($http, $q, apiEndpoint, storage) {
                _super.call(this, $http, $q, apiEndpoint.getBaseUrl(), "profile", storage);
                this.$http = $http;
                this.$q = $q;
                this.apiEndpoint = apiEndpoint;
                this.storage = storage;
            }
            return ProfileService;
        })(app.common.DataService);
        angular.module("app.userManagement").service("profileService", ["$http", "$q", "apiEndpoint", "storage", ProfileService]);
    })(userManagement = app.userManagement || (app.userManagement = {}));
})(app || (app = {}));

//# sourceMappingURL=../../userManagement/services/profileService.js.map