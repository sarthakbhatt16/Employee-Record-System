myApp.controller('empController', function($scope,$route,$routeParams,$http){
	$scope.getEmployees = function(){
		$http.get('/api/employees/').then(function(response){
			$scope.employees = response.data;
		});
	};
	$scope.showEmployee = function(){
		var id = $routeParams.id;
		$http.get('/api/employees/'+ id).then(function(response){
			$scope.employee = response.data;
		});
	};
	$scope.addEmployee = function(){
		//var id = $routeParams.id;
		$http.post('/api/employees/', $scope.employee).then(function(response){
			//$scope.employee = response.data;
			window.location.href = '/';
		});
	};
	$scope.updateEmployee = function(){
		var id = $routeParams.id;
		$http.put('/api/employees/'+ id , $scope.employee).then(function(response){
			//$scope.employee = response.data;
			window.location.href = '/';
		});
	};
	$scope.deleteEmployee = function(id){
		var id = id;
		$http.delete('/api/employees/'+ id).then(function(response){
			$route.reload();
		});
	};
	
});