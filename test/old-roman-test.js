const assert = require('chai').assert
const convertToOldRoman = require('../old-roman')
pry = require('pryjs')

context('I', function() {
  it('1', function() {
    assert.deepEqual(convertToOldRoman(1), 'I');
  });

  it('4', function() {
    assert.deepEqual(convertToOldRoman(4), 'IIII');
  });
});

context('V', function() {
  it('6', function() {
    assert.deepEqual(convertToOldRoman(6), 'VI');
  });

  it('9', function() {
    assert.deepEqual(convertToOldRoman(9), 'VIIII');
  });
});

context('X', function() {
  it('11', function() {
    assert.deepEqual(convertToOldRoman(11), 'XI');
  });

  it('16', function() {
    assert.deepEqual(convertToOldRoman(16), 'XVI');
  });

  it('41', function() {
    assert.deepEqual(convertToOldRoman(41), 'XXXXI');
  });

  it('49', function() {
    assert.deepEqual(convertToOldRoman(49), 'XXXXVIIII');
  });
});

context('L', function() {
  it('61', function() {
    assert.deepEqual(convertToOldRoman(61), 'LXI');
  });

  it('66', function() {
    assert.deepEqual(convertToOldRoman(66), 'LXVI');
  });

  it('91', function() {
    assert.deepEqual(convertToOldRoman(91), 'LXXXXI');
  });

  it('99', function() {
    assert.deepEqual(convertToOldRoman(99), 'LXXXXVIIII');
  });
});