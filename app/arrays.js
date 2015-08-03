exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] === item) {
        return i;
      }
    }

    return -1;
  },

  sum : function(arr) {
    var count = arr[0];
    for(var i = 1; i < arr.length; i++) {
      count += arr[i];
    }

    return count;
  },

  remove : function(arr, item) {
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] === item) {
          arr.splice(i,1);
      }
    }

    return arr;
  },

  removeWithoutCopy : function(arr, item) {
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] === item) {
        arr.splice(i,1);
        i--;
      }
    }

    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    return arr.splice(0, index).concat(item).concat(arr);
  },

  count : function(arr, item) {
    var itemCount = 0;
    for (var i = 0; i < arr.length; i++) {
      if(arr[i] === item) {
        itemCount++;
      }
    };

    return itemCount;
  },

  duplicates : function(arr) {
    var dupArray = [];
    // for(var i = 1; i< arr.length; i++) {
    //     var a = arr.slice(0,i);
    //     console.log(arr[i], a, a.indexOf(arr[i]));
    //     if(a.indexOf(arr[i]) > -1 && dupArray.indexOf(arr[i]) === -1) {
    //         dupArray.push(arr[i]);
    //     }    
    // }
    //isDup.hello --> looks for a property called 'hello' in isDup.
    //If you are going to set or get a property with a hardcoded name, you can use dot notation
    //even if you put a real variable after the dot, the nam eof the variable is just treated as a string

    //isDup[hello] --> evaluates the hello variable and will attempt to find a property with the name
    //of whatever value hello is assigned to
    //isDup['hello'] will look for a property with the name 'hello'

    /*
      var hello = 'greeting';
      var obj = {
        hello: false; 
      }
      obj.hello --> returns false;
      obj[hello] --> undefined (this looks for a property called 'greeting')
      obj['hello'] --> false
    */
    
    var isDup = {};
    for(var i = 0; i < arr.length; i++) {
      if(!(arr[i] in isDup)) {
        isDup[arr[i]] = 1;        
      }

      else if(isDup[arr[i]] < 2) {
        isDup[arr[i]] = 2;
        dupArray.push(arr[i]);
      }
    }

    return dupArray.sort();
  },

  square : function(arr) {
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i] * arr[i];
    };

    return arr;
  },

  findAllOccurrences : function(arr, target) {
    resultArray = [];
    for (var i = 0; i < arr.length; i++) {
      if(arr[i] === target) {
        resultArray.push(i);
      }
    }

    return resultArray;
  }
};


// arrays(done), count(done), logicalOperators(done), numbers(done), 
// flowControl(done), objects(done), functions(started), recursion(started), 
// modules(not started), bestPractices(done), aSync(not started), regex(done)