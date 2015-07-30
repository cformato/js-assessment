exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects : function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate : function(obj) {
    var resultsArray = [];
    for (var key in obj) {
      if(obj.hasOwnProperty(key)) {
        var newString = key + ': ' + obj[key];
        resultsArray.push(newString);
      }
    };

    return resultsArray;
  }
};
