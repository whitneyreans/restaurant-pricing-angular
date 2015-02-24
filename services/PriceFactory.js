cashRegister.factory('PriceFactory', function PriceFactory() {
  var factory = {};


  factory.total = function(quantity, price) {
    return quantity * price;
  };

  return factory;
});
