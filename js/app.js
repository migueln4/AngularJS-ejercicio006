(function(){

var app = angular.module('universidadApp',[ ]);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){

	$scope.menu = 'parciales/menu.html';
  

}]);

})();