modMain = angular.module('modMain');

modMain.directive('checkbox', [function () {
    return {
        restrict: 'EA',
        scope: {},
        bindToController: {
            bind: '='
        },
        controller: controller,
        controllerAs: 'vm',
        replace: true,
        template: `
            <div class="checkbox" ng-click="vm.toggleChecked()" ng-class="{'checked': vm.bind.checked}"></div>
        `
    };

	function controller($scope) {
        let vm = this;

		vm.toggleChecked = toggleChecked;

		function toggleChecked() {
			console.log('hit');
			vm.bind.checked = !vm.bind.checked;
		}
    }
}]);

// <div debug="vm.campaign"></div>