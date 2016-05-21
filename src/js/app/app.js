let app = angular.module('app', [
	'modTemplates',
	'modCommon',
	'modContacts'
]);

app.config(['$routeProvider', '$locationProvider', '$httpProvider',
	function($routeProvider, $locationProvider, $httpProvider) {
		$routeProvider
			.when('/contacts', {
				templateUrl: '/contacts/controllers/contacts.html',
				controller: 'ctrlContacts',
				controllerAs: 'vm'
			});

		$locationProvider.html5Mode(true).hashPrefix('!');
		$httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
		$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

		// IE AJAX caching fix
		if (!$httpProvider.defaults.headers.get) {
			$httpProvider.defaults.headers.get = {};
		}

		// Disable IE ajax request caching
		$httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
	}
]);