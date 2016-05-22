modMain.controller('ctrlMain', ['$scope', 'Storage',
    ($scope, Storage) => {
        let vm = this;

		// Assign required items to view model
		vm.toggleCollapsible = toggleCollapsible;
		vm.showDeleteButton = showDeleteButton;
		vm.deleteSelected = deleteSelected;
		vm.addNew = addNew;
		vm.reloadData = reloadData;

		vm.isContactsCollapsed = false;

		let mockJson = [
			{ 'type': 'Executive', 'name': 'Ann Brown', 'title': 'CEO', 'phone': '(512) 456-5555', 'ext': '', 'fax': '(512) 456-5555', 'email': 'Executive'},
			{ 'type': 'Inmar AR', 'name': 'Mary Smith', 'title': 'Lorem Ipsum', 'phone': '(512) 456-5555', 'ext': '', 'fax': '(512) 456-5555', 'email': 'Inmar AR'},
			{ 'type': 'Executive', 'name': 'John Doe', 'title': 'Dolor Sit', 'phone': '(512) 456-5555', 'ext': '', 'fax': '(512) 456-5555', 'email': 'Executive'},
			{ 'type': 'Daily', 'name': 'John Doe', 'title': 'Dolor sit amet', 'phone': '(512) 456-5555', 'ext': '', 'fax': '(512) 456-5555', 'email': 'Daily'},
			{ 'type': 'Other', 'name': 'John Doe', 'title': 'Lorem ipsum', 'phone': '(512) 456-5555', 'ext': '', 'fax': '(512) 456-5555', 'email': 'Other'}
		];

		// Every time the contacts array changes, save it to storage
		$scope.$watch(() => vm.contacts, newVal => Storage.set('contacts', JSON.stringify(newVal)), true);

        _init();

		/**
         * Called when module is initialized
         * @private
         */
        function _init() {
            let contacts = Storage.get('contacts');

			// Load our contact list with either saved or default data
			vm.contacts = !contacts || contacts.length === 0 ? angular.copy(mockJson) : JSON.parse(contacts);
        }

		/**
		 * Hides or shows the collapsible area
		 * @public
		 */
		function toggleCollapsible() {
			vm.isContactsCollapsed = !vm.isContactsCollapsed;
		}

		/**
		 * Determines if the delete button should be hidden or not
		 * @public
		 */
		function showDeleteButton() {
			return vm.contacts.filter((c) => {
				return !!c.checked;
			}).length > 0;
		}

		/**
		 * Deletes all the checked contacts
		 * @public
		 */
		function deleteSelected() {
			vm.contacts = vm.contacts.filter((c) => {
				return !c.checked;
			});
			Storage.set('contacts', JSON.stringify(vm.contacts));
		}

		/**
		 * Adds a new object to the contacts array
		 */
		function addNew() {
			let row = {
				'type': '',
				'name': '',
				'title': '',
				'phone': '',
				'ext': '',
				'fax': '',
				'email': ''
			};

			vm.contacts.push(row);
		}

		/**
		 * Reloads the contact list with the mock data
		 */
		function reloadData() {
			vm.contacts = angular.copy(mockJson);
		}
	}
]);