modMain = angular.module('modMain');

modMain.controller('ctrlMain', ['Storage',
    function(Storage) {
        let vm = this;

		// Assign required items to view model
		vm.toggleCollapsible = toggleCollapsible;
		vm.ui = {
			isContactsCollapsed: false
		};

		let mockJson = [
			{ 'type': 'Executive', 'name': 'Ann Brown', 'title': 'CEO', 'phone': '(512) 456-5555', 'ext': '', 'fax': '(512) 456-5555', 'email': 'Executive'},
			{ 'type': 'Inmar AR', 'name': 'Mary Smith', 'title': 'Lorem Ipsum', 'phone': '(512) 456-5555', 'ext': '', 'fax': '(512) 456-5555', 'email': 'Inmar AR'},
			{ 'type': 'Executive', 'name': 'John Doe', 'title': 'Dolor Sit', 'phone': '(512) 456-5555', 'ext': '', 'fax': '(512) 456-5555', 'email': 'Executive'},
			{ 'type': 'Daily', 'name': 'John Doe', 'title': 'Dolor sit amet', 'phone': '(512) 456-5555', 'ext': '', 'fax': '(512) 456-5555', 'email': 'Daily'},
			{ 'type': 'Other', 'name': 'John Doe', 'title': 'Lorem ipsum', 'phone': '(512) 456-5555', 'ext': '', 'fax': '(512) 456-5555', 'email': 'Other'}
		];

        _init();

		/**
         * Called when module is initialized
         * @private
         */
        function _init() {
            let contacts = Storage.get('contacts');

			// Load our contact list with either saved or default data
			vm.contacts = contacts ? contacts : mockJson;
        }

		function toggleCollapsible() {
			vm.ui.isContactsCollapsed = !vm.ui.isContactsCollapsed;
		}
    }
]);