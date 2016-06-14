var assert = require("assert");
var cheapestOranges = require("../cheapest-oranges");
var pricesOfApples = require("../prices-of-apples");

var shops = {
  "woolingsworth": {
    "apples": 4,
    "bananas": 3,
    "oranges": 12
  },

  "chockers": {
    "bananas": 2,
    "apples": 5,
    "oranges": 4
  },

  "pickle pay": {
    "bananas": 4,
    "oranges": 7
  },

  "shopwrong": {
    "apples": 2,
    "bananas": 3
  },

  "kwakspar": {
    "oranges": 9,
    "apples": 4
  }
}


describe("best deal tests for fruition", function() {
  it("should show the shop w/ cheapest oranges", function() {
    assert.equal(cheapestOranges(shops), "chockers");
  })

  it("should return the prices and sellers of apples, order ascending by price", function() {
      assert.equal(pricesOfApples(shops), [{
        shop: 'shopwrong',
        price: 2
      }, {
        shop: 'woolingsworth',
        price: 4
      }, {
        shop: 'kwakspar',
        price: 4
      }, {
        shop: 'chockers',
        price: 5
      }]))
  })

});
