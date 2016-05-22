describe('Storage', () => {
	let Storage;

	beforeEach(module('app'));
	beforeEach(inject((_Storage_) => {
		Storage = _Storage_;
	}));

	it('stores and reads a value', () => {
		Storage.set('test', 'value');
		let store = Storage.get('test');

		expect(store).to.equal('value');
	});
});