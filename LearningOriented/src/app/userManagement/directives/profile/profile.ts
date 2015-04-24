module app.userManagement {

    "use strict";

    class Profile {
        constructor() {
            
        }

        public static instance = () => {
            
        }

    }

    angular.module("app.userManagement").directive("profile", [Profile.instance]);
} 