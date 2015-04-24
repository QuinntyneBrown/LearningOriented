var app;
(function (app) {
    var userManagement;
    (function (userManagement) {
        angular.module("app.userManagement", [
            "app.common"
        ]).config([
            "$componentLoaderProvider",
            "apiEndpointProvider",
            "featureComponentsMappingsProvider",
            "routesProvider",
            config
        ]);
        function config($componentLoaderProvider, apiEndpointProvider, featureComponentsMappingsProvider, routesProvider) {
            featureComponentsMappingsProvider.mappings.push({
                feature: "userManagement",
                components: [
                    "createAccount",
                    "myAccount",
                    "myProfile",
                    "personalization",
                    "profile"
                ]
            });
            routesProvider.configure([
                { path: '/', redirectTo: '/login' },
                { path: '/createAccount', component: 'createAccount' },
                { path: '/myAccount', component: 'myAccount' },
                { path: '/myProfile', component: 'myProfile' },
                { path: '/personalization', component: 'personalization' }
            ]);
            apiEndpointProvider.configure("/api", "userManagement");
        }
    })(userManagement = app.userManagement || (app.userManagement = {}));
})(app || (app = {}));

//# sourceMappingURL=../userManagement/userManagement.module.js.map