exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str1) {
    return function(str2) {
      return str1 + ", " + str2;
    }
  },

  // var newFunc = funcFunc("Hello") { // returns a function
  //   define here
  // };

  // var message = newFunc("Chris"); // returns a string
  // console.log(message); --> "Hello Chris"

  makeClosures : function(arr, fn) {
    // return arr.map(fn);
    var resultsArray = [];

    var thisFunction = function(elem) {
      return fn(elem);
    };

    for (var i = 0; i < arr.length; i++) {
      resultsArray.push(thisFunction(arr[i]));
      // resultsArray.push(fn(arr[i]));
      // var returnValue = fn(arr[i]);
      // resultsArray.push(function(){return returnValue;});

    }

    return resultsArray;
  },

  partial : function(fn, str1, str2) {
    return function(punctuation) {
      return fn(str1, str2, punctuation);
    }
  },

  useArguments : function() {
    resultSum = 0;
    for (var i = 0; i < arguments.length; i++) {
      resultSum += arguments[i];
    };

    return resultSum;
  },

  callIt : function(fn) {
    var callArgs = Array.prototype.slice.call(arguments);
    var funcArg = callArgs.shift();
    funcArg.apply(null, callArgs);
  },

  partialUsingArguments : function(fn) {
    fn[0](fn[1], fn[2], fn[3])
  },

  curryIt : function(fn) {

  }
};
