module app.userManagement {

    "use strict";

    class Profile implements IProfile {
        constructor() {

        }

        public _currentInstance: IProfile;

        public get currentInstance() {
            return this._currentInstance;
        }

        public set currentInstance(value) {
            this._currentInstance = value;
        }

        public instance = (data?: any) => {

        }

        
    }
} 