cashRegister.controller('PizzasCtrl', function PizzasCtrl($scope, PriceFactory) {
  $scope.price = 3.25;
  $scope.amount = null;

  $scope.getTotal = function() {
    $scope.results = PriceFactory.total($scope.price, $scope.amount);
    $scope.amount = null;
  };
});
