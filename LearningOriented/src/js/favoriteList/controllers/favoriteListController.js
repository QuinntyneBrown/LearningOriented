var app;
(function (app) {
    var favoriteList;
    (function (favoriteList) {
        "use strict";
        var FavoriteListController = (function () {
            function FavoriteListController() {
                this.activate = function () {
                };
            }
            return FavoriteListController;
        })();
        angular.module("app.favoriteList").controller("favoriteListController", [FavoriteListController]);
    })(favoriteList = app.favoriteList || (app.favoriteList = {}));
})(app || (app = {}));

//# sourceMappingURL=../../favoriteList/controllers/favoriteListController.js.map