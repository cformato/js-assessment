exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
  	return parseInt('0'.repeat(8 - num.toString(2).length).concat(num.toString(2)).split('').reverse()[bit-1]);
  },

  base10: function(str) {
    var base10Sum = 0;
    for(var i = 0, j = str.length-1; i < str.length ; i++, j--) {
      base10Sum += parseInt(str[i]) * Math.pow(2,j);
    }
    
    return base10Sum;
  },

  convertToBinary: function(num) {
   	 return '0'.repeat(8 - num.toString(2).length).concat(num.toString(2));
  },

  multiply: function(a, b) {
  	return Number((a * b).toPrecision(b.toString().length - 2));
  }
};
