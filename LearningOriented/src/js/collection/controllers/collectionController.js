var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var app;
(function (app) {
    var collection;
    (function (collection) {
        "use strict";
        var CollectionService = (function (_super) {
            __extends(CollectionService, _super);
            function CollectionService() {
                _super.apply(this, arguments);
            }
            return CollectionService;
        })(app.common.DataService);
        angular.module("app.collection").service("collectionService", [CollectionService]);
    })(collection = app.collection || (app.collection = {}));
})(app || (app = {}));

//# sourceMappingURL=../../collection/controllers/collectionController.js.map