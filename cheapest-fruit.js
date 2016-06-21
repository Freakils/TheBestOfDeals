module.exports = function(list) {

  var min = Infinity;
  var cheapest = "";
  for (var key in list) {

    for (var key1 in list[key]) {
       
      var newShop = list[key];
      var shopPrice = newShop[key1];
      //  console.log(shopPrice);
      if (shopPrice < min) {
        cheapest = key1;
        //console.log(min)
      }

    }
  }
  // console.log(cheapest);
  return cheapest;
}
