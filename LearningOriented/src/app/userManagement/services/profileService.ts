module app.userManagement {

    "use strict";

    class ProfileService extends common.DataService implements IProfileService {
        constructor(
            public $http: ng.IHttpService,
            public $q: ng.IQService,
            public apiEndpoint: common.IApiEndpointConfig,
            public storage: common.IStorage) {
            super($http, $q, apiEndpoint.getBaseUrl(), "profile", storage);

        }

    }

    angular.module("app.userManagement").service("profileService", ["$http", "$q", "apiEndpoint", "storage", ProfileService]);


} 