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
  // console.log(myArray);

  var total = Infinity;
  var shopName = "";
  myArray.forEach(function(part) {
    if (part.price < total) {
      total = part.price;
      shopName = part.shops;
    }
  });
  //  console.log(total);
  // console.log(shopName);
  return shopName;
}



var animalRatingsData = [
    {
      animal: "fish",
      rating: 5
    },
    {
      animal: "dog",
      rating: 4
    },
  {
    animal: "cheetah",
    rating: 5
  }
];

// var findRate = function(animalRatingsInput, rating){
//
//   var result = [];
//
//   animalRatingsInput.forEach(function(obj){
//     if(obj.rating === rating) {
//       result.push(obj);
//       }
//
//
//   });
// //       console.log(result);
//       return result;
//
// };
// console.log(findRate(animalRatingsData, 4));
//
// // want to see
// // ["fish", "cheetah"]
//
// // module.exports = function(tripList, RegNumber) {
// //   var data = [];
// //   tripList.forEach(function(reg) {
// //     if (reg.RegistrationNumber === RegNumber) {
// //       data.push(reg);
// //     }
// //   });
// //   console.log(data);
// //   return data;
// // };
