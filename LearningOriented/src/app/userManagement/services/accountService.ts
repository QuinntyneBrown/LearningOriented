module app.userManagement {

    "use strict";

    class AccountService extends common.DataService implements IAccountService {
        constructor(
            public $http: ng.IHttpService,
            public $q: ng.IQService,
            public apiEndpoint: common.IApiEndpointConfig,
            public storage: common.IStorage) {
            super($http, $q, apiEndpoint.getBaseUrl(), "account", storage);

        }

    }

    angular.module("app.userManagement").service("accountService", ["$http", "$q", "apiEndpoint", "storage", AccountService]);


} 