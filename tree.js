angular.module('treeApp', [])
	.controller('TreeController', function($scope) {
		$scope.data = [{
				name: 'Vitaly',
				phone: 4159927028,
				friends: [{
					name: 'Nested 1',
					phone: 6507712795,
					friends: [{
						name: 'Test2',
						phone: 6507712795,
					}]
				}, {
					name: 'Nested 2',
					phone: 6507712795,
					friends: [{
						name: 'Test2',
						phone: 6507712795,
					}]
				}]
			}, {
				name: 'Test1',
				phone: 6507712795,
			}];

		}).filter('typeof', function() {
			return function(obj) {
				return typeof obj
			};
		})
	.component('nodeComponent', {
			templateUrl: 'treeNode.html',
			bindings: {
				data: '<'
			}
		})
