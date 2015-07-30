exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
  	var idArray = [];

  	for (var i = start, j = 0; i <= end; i++, j++) {
  		logIt(i, j);
  	}

		function logIt(i, j) {
		  idArray.push(setTimeout(function(){ console.log(i); }, 100 * j));
		}

		var counter = {"cancel":cancel};

		function cancel() {
			for (var k = 0; k < idArray.length; k++) {
				clearTimeout(idArray[k]);
			}
		}
		return counter;
	}
}



// var myFunc = function(message) {
// 	console.log(message);
// }


// function name () {

// } 


// for (key in objName) {
//   console.log(objName[key]);
// }