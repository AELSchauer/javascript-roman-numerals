pry = require('pryjs')

function convertToOldRoman(n) {
  numeral = new RomanNumeral(n)
  numeral.addNs()
  return numeral.letters
}

function RomanNumeral(n) {
  this.conversion = { '50': 'L', '10': 'X', '5': 'V', '1': 'I'}
  this.letters = '',
  this.number = n
};

RomanNumeral.prototype.addNs = function () {
  var keys = this.getKeys()
  for (var i = keys.length - 1; i >= 0 ; i--) {
    number = keys[i]
    letter = this.conversion[number]
    this.addLetters(number, letter)
  };
};

RomanNumeral.prototype.getKeys = function () {
  keys = Object.keys(this.conversion).map(function (key) {
    return parseInt(key);
  });
  return keys
};

RomanNumeral.prototype.addLetters = function (number, letter) {
  for (var j = 0; j < Math.floor(this.number / number); j++) {
    this.letters += letter;
  };
  this.number = this.number % number
}

module.exports = convertToOldRoman