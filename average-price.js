module.exports = function(avoDlsLst) {
  var total = 0;

  avoDlsLst.forEach(function(avoDls) {
    var quantity = avoDls[0];
    var price = avoDls[1];

    total = total + (quantity * price) / 4;
    // total = total / 4;

  })
  return total;
}
