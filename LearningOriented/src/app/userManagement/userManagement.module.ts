module app.userManagement {

    angular.module("app.userManagement", [
        "app.common"
    ]).config([
        "$componentLoaderProvider",
        "apiEndpointProvider",
        "featureComponentsMappingsProvider",
        "routesProvider",
        config
    ]);

    function config($componentLoaderProvider: any,
        apiEndpointProvider: common.IApiEndpointProvider,
        featureComponentsMappingsProvider: common.IFeatureComponentsMappingsProvider,
        routesProvider: common.IRoutesProvider) {


        featureComponentsMappingsProvider.mappings.push(
            {
                feature: "userManagement",
                components: [
                    "createAccount",
                    "myAccount",
                    "myProfile",
                    "personalization",
                    "profile"]
            });

        routesProvider.configure([
            { path: '/', redirectTo: '/login' },
            { path: '/createAccount', component: 'createAccount' },
            { path: '/myAccount', component: 'myAccount' },
            { path: '/myProfile', component: 'myProfile' },
            { path: '/personalization', component: 'personalization' }
        ]);

        apiEndpointProvider.configure("/api","userManagement");

    }

} 