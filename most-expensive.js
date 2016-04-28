module.exports = function(deals) {

  var min = 0;

  deals.forEach(function(deal) {
    if (deal > min) {
      min = deal;
    }
  })
  return min;
}
