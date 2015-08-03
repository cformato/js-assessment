exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    return /\d+/.test(str);
  },

  containsRepeatingLetter : function(str) {
    return /([a-z])\1/i.test(str);
  },

  endsWithVowel : function(str) {
    return /[aeiouAEIOU]$/.test(str);
  },

  captureThreeNumbers : function(str) {
    var matchResult = str.match(/\d{3}/);
    if(matchResult === null) {
      return false;
    }

    return matchResult['input'].slice(matchResult['index'], matchResult['index'] + 3);
  },

  matchesPattern : function(str) {
    return /^(\d{3})-(\d{3})-(\d{4})$/.test(str);
  },

  isUSD : function(str) {
    return /^(\$\d{1,3})(,\d{3})*(\.\d{2})?$/.test(str); 
  }
};
