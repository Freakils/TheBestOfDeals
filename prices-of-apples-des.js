module.exports = function(list){

  var myArray = [];
  for (var key in list) {
    if (list[key].hasOwnProperty("apples")) {
      myArray.push({
        shop: key,
        price: list[key].apples
      });
    }
  }
// console.log(myArray)

  var myApple = myArray.slice(0);
     myApple.sort(function(b,a) {
      return b.price - a.price;
  });
    console.log(myApple);
    return myApple;
}
