describe('ctrlMain', () => {
	var controller, scope, vm;

	beforeEach(module('app'));

	beforeEach(inject(($rootScope, $controller) => {
		scope = $rootScope.$new();
		controller = $controller;

		vm = controller("ctrlMain", {$scope: scope});
	}));

	it('should be pre-loaded with 5 mock contacts', () => {
		expect(vm.contacts).to.have.lengthOf(5);
	});

	it('can toggle the collapsible section', () => {
		expect(vm.isContactsCollapsed).to.be.false;
		vm.toggleCollapsible();
		expect(vm.isContactsCollapsed).to.be.true;
		vm.toggleCollapsible();
		expect(vm.isContactsCollapsed).to.be.false;
	});

	it('can show or hide the delete button', () => {
		expect(vm.showDeleteButton()).to.be.false;
		vm.contacts[0].checked = true;
		expect(vm.showDeleteButton()).to.be.true;
	});

	it('can delete the checked contacts', () => {
		expect(vm.contacts).to.have.lengthOf(5);
		vm.contacts[0].checked = true;
		vm.contacts[1].checked = true;
		vm.deleteSelected();
		expect(vm.contacts).to.have.lengthOf(3);
	});

	it('can load default values', () => {
		vm.reloadData();
		expect(vm.contacts).to.have.lengthOf(5);
	});

	it('can add a new blank contact', () => {
		vm.reloadData();
		expect(vm.contacts).to.have.lengthOf(5);
		vm.addNew();
		expect(vm.contacts).to.have.lengthOf(6);
	});
});