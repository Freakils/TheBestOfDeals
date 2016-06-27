module.exports = function(list){
  var myArray = [];
  for (var key in list) {
    if (list[key].hasOwnProperty("oranges")) {
      myArray.push({
        shop: key,

      });
    }
  }

  console.log(myArray);
  return myArray;
}
