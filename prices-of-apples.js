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
     myApple.sort(function(a,b) {
      return a.price - b.price;
  });
    // console.log(myApple);
    return myApple;
}
