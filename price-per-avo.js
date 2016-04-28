module.exports = function(lists) {

  var prices = [];
  lists.forEach(function(list) {

    var quantity = list[0];
      var price = list[1];

    var pricePerAvo = price / quantity;
    prices.push(pricePerAvo.toFixed(2));
  });
  // console.log(prices);
  return prices;

}
