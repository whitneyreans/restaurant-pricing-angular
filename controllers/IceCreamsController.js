cashRegister.controller('IceCreamsCtrl', function IceCreamsCtrl($scope, PriceFactory) {

  $scope.price = 2.5;
  $scope.amount = null;

  $scope.getTotal = function() {
    $scope.results = PriceFactory.total($scope.price, $scope.amount);
    $scope.amount = null;
  };

});
