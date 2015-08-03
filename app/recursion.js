exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var resultsArray = [];
    var currentData = data;
    // var currentDirName = dirName || true;

    var recurse = function(currentData, dirName) {

      // base case - if files property does not contain an object
      // for(var i = 0; i < currentData.length; i++) {

      //   if(typeof currentData[i] === 'object') {
      //     break;
      //   }
        
      //   return ;
      // }

      // if(currentData.dir === dirName) {

      for(var i = 0; i < currentData.files.length; i++) {

        // if a directory name is passed in
        if(dirName !== undefined) {

          // if a file name is encountered
          if((typeof currentData.files[i] === 'string') && ((currentData.dir === dirName) || (currentData.topDir === dirName))) {
            resultsArray.push(currentData.files[i]);
          }

          // if an object is encountered in the directory that was passed in,
          // dive to the next level and push its files to the array
          // else if(typeof currentData.files[i] === 'object' && (currentData.dir === dirName)) {
          //   for (var k = 0; k < currentData.files[i].files.length; k++) {
          //     if(typeof currentData.files[i].files[k] === 'string') {
          //       resultsArray.push(currentData.files[i].files[k]);
          //     }
          //   }
          // }  


          // if an object is encountered in the directory that was passed in,
          // tag it with the directory name, make it the new current data and recurse
          else if(typeof currentData.files[i] === 'object' && ((currentData.dir === dirName) || (currentData.topDir === dirName))) {
            currentData.files[i]['topDir'] = dirName;
            newCurrentData = currentData.files[i];
            recurse(newCurrentData, dirName);
          }          

          // if an object is encountered in a sub-directory of the directory
          // that was passed in, tag it with the directory name, make it the 
          // new current data and recurse
          else if(typeof currentData.files[i] === 'object') {
            newCurrentData = currentData.files[i];
            recurse(newCurrentData, dirName);
          }          
        }

        // if no directory name is passed in
        if(dirName === undefined) {

          // if a file name is encountered, push to the array
          if((typeof currentData.files[i] === 'string')) {
            resultsArray.push(currentData.files[i]);
          }

          // if an object is encountered, dive to the next level
          else if(typeof currentData.files[i] === 'object') {
            newCurrentData = currentData.files[i];
            recurse(newCurrentData, dirName);
          }
        }
      }
    };

    recurse(currentData, dirName);
    return resultsArray;
  },

  permute: function(arr) {
    var resultsArray = [];
    var currentSolution = [];
    var remainingValues = arr.slice(0);

    var recurse = function(currentSolution, remainingValues) {
        
      if(currentSolution.length === arr.length) {
        resultsArray.push(currentSolution);
        return;
      }

      for (var i = 0; i < remainingValues.length; i++) {
        newCurrentSolution = currentSolution.slice(0); 
        newCurrentSolution.push(remainingValues[i]);
        newRemainingValues = remainingValues.slice(0);
        newRemainingValues.splice(i, 1);
        recurse(newCurrentSolution, newRemainingValues);
      }
    };
    
    recurse(currentSolution, remainingValues);

    return resultsArray;
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
    var resultsArray = [];

    // build array of n pairs of parens
    var nPairsArray = [];
    for (var i = 0; i < n; i++) {
      nPairsArray.push('(');
      nPairsArray.push(')');
    };

    // build array of all permutations
    var allPermutations = recursionAnswers.permute(nPairsArray);

    // verify each permutation and push valid one to return array
    function isBalanced (string) {

      var nestLevel = 0;
      for (var i = 0; i < string.length; ++i)
      {
        var myChar = string[i];
        
        if(myChar === '(') {
            nestLevel++;
        }
        
        else if(myChar === ')') {
            nestLevel--;
        }
        
        if (nestLevel < 0) {
          return false;
        }
      }
      return nestLevel === 0;
    }

    for (var i = 0; i < allPermutations.length; i++) {
      if(isBalanced(allPermutations[i].toString().replace(/,/g, ''))) {
        resultsArray.push(allPermutations[i].toString().replace(/,/g, ''))
      }
    };


    // base case - when a set of n pairs of matching parens have been assembled
    return resultsArray;
  }
};
