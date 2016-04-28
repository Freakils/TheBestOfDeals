module.exports = function(deals) {
  var max = Infinity;
  deals.forEach(function(avo_deal) {
    if (avo_deal < max) {
      max = avo_deal;
    }
  })
  return max;
}
