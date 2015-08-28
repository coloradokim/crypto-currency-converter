app.controller('CurrencyController', function($scope, $firebaseObject) {
  var bitcoinRef = new Firebase("https://publicdata-cryptocurrency.firebaseio.com/bitcoin");
  $scope.bitcoinData = $firebaseObject(bitcoinRef);

  var dogecoinRef = new Firebase("https://publicdata-cryptocurrency.firebaseio.com/dogecoin");
  $scope.dogecoinData = $firebaseObject(dogecoinRef);
  
  var litecoinRef = new Firebase("https://publicdata-cryptocurrency.firebaseio.com/litecoin");
  $scope.litecoinData = $firebaseObject(litecoinRef);
})
