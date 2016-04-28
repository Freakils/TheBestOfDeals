module.exports = function(string) {

  var newAvosString = string.split(",");
  var avoDealsList = [];
  newAvosString.forEach(function(string) {
    avoDealsList.push(string.split(" for R"));
  });
  // console.log(avoDealsList);
  return avoDealsList;
}
