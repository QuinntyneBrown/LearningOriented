module app.userManagement {

    "use strict";

    class Account {
        constructor() {
            
        }

        public _currentInstance: IAccount;

        public get currentInstance() {
            return this._currentInstance;
        }

        public set currentInstance(value) {
            this._currentInstance = value;
        }

        public instance = (data?:any) => {
            
        }

        public profiles: IProfile[];
    }
} 