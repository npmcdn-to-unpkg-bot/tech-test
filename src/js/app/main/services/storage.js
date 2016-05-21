modMain = angular.module('modMain');

modMain.factory('Storage', [
    function() {
        let service = {};

        service.get = get;
        service.set = set;

        return service;

        function get(key) {
            return localStorage.getItem(key);
        }

        function set(key, value) {
            return localStorage.setItem(key, value);
        }
    }]
);