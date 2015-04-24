module app.collection {

    "use strict";

    class CollectionService extends common.DataService implements ICollectionService {
        
    }

    angular.module("app.collection").service("collectionService", [CollectionService]);
} 