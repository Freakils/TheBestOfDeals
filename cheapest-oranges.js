module.exports = function(lists) {

  var myArray = [];
  for (var key in lists) {

    if (lists[key].hasOwnProperty("oranges")) {
      myArray.push({
        shops: key,
        price: lists[key].oranges
      });
    }
  }
  console.log(myArray);

  var total = 1000;
  var shopName = "";
  myArray.forEach(function(part) {
    if (part.price < total) {
      total = part.price;
      shopName = part.shops;
    }
  });
  //  console.log(total);
  console.log(shopName);
  return shopName;
}
