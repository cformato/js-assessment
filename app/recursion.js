exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

  },

  permute: function(arr) {

  },

  fibonacci: function(n) {
  	if(n === 0) {
  		return 0;
  	}

  	if(n === 1) {
  		return 1;
  	}  	
  	
  	return recursionAnswers.fibonacci(n-1) + recursionAnswers.fibonacci(n-2);
  },

  validParentheses: function(n) {

  }
};
