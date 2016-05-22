modMain = angular.module('modMain');

modMain.factory('Storage', [
    () => {
        let service = {};

        service.get = get;
        service.set = set;

        return service;

		/**
		 * Gets existing data from local storage
		 * @param key
		 * @public
		 */
        function get(key) {
            return localStorage.getItem(key);
        }

		/**
		 * Sets a local storage key to the specified value
		 * @param key
		 * @param value
		 * @public
		 */
        function set(key, value) {
            return localStorage.setItem(key, value);
        }
    }]
);