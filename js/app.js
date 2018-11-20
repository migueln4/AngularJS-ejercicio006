var app = angular.module('universidadApp',['ngRoute']);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){

  $scope.menuSuperior = "parciales/menu.html";

  $scope.setActive = function(opcionMenu) {
  		$scope.menuInicio = "";
		$scope.menuProfesores= "";
		$scope.menuAlumnos= "";

		$scope[opcionMenu] = "active";
  }

}]);