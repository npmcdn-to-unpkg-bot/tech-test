let app = angular.module('app', [
	'modTemplates',
	'modMain'
]);

app.config(['$routeProvider', '$locationProvider', '$httpProvider',
	function($routeProvider, $locationProvider, $httpProvider) {
		$routeProvider
			.when('/contacts', {
				templateUrl: '/main/controllers/main.html',
				controller: 'ctrlMain',
				controllerAs: 'vm'
			})
			.otherwise({
                redirectTo: '/contacts'
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