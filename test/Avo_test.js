var assert = require("assert");
var avoDealsList = require("../avo-deals-list");
var pricePerAvo = require('../price-per-avo');
var cheapestDeal = require("../cheapest-deal");
var mostExpensive = require("../most-expensive");
var averagePrice = require("../average-price");


var avoString = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50";
var avo_deals_list = [
  ['1', '3'],
  [' 2', '7'],
  [' 3', '10'],
  [' 5', '14.50']
];
var avoDeals = ['3.00', '3.50', '3.33', '2.90'];

describe("best deal tests for avo", function() {
  it("should show the string as an array", function() {
    assert.deepEqual(avoDealsList(avoString), [
      [1, 3],
      [2, 7],
      [3, 10],
      [5, 14.50]
    ]);
  });

  it("should show the price of each avo", function() {
    assert.deepEqual(pricePerAvo(avo_deals_list), [3.00, 3.50, 3.33, 2.90]);
  });

  it("should calculate/show the cheapest deal", function() {
    assert.equal(cheapestDeal(avoDeals), 2.90);
  });

  it("should find the most expensive deal", function(){
    assert.equal(mostExpensive(avoDeals), 3.50);
  });
  //
  it("should find the average price across all the deals", function(){
    assert.equal(averagePrice(avo_deals_list), 29.875)
  });

});
