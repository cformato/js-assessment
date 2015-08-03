exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
  var promise = new Promise(function(resolve, reject) {
    var request = new XMLHttpRequest();
 
    request.open('GET', 'http://api.icndb.com/jokes/random');
    request.onload = function() {
      if (request.status == 200) {
        resolve(request.response); // we got data here, so resolve the Promise
      } else {
        reject(Error(request.statusText)); // status is not 200 OK, so reject
      }
    };
 
    request.onerror = function() {
      reject(Error('Error fetching data.')); // error occurred, reject the  Promise
    };
 
    request.send(); //send the request
  });
 
  console.log('Asynchronous request made.');
 
  promise.then(function(data) {
    console.log('Got data! Promise fulfilled.');
    document.getElementsByTagName('body')[0].textContent = JSON.parse(data).value.joke;
  }, function(error) {
    console.log('Promise rejected.');
    console.log(error.message);
  });
  },

  manipulateRemoteData : function(url) {

    $.ajax({
      url: url,
      type: "GET",
      dataType: "json",
      success: function (data) {
        alert(data);
      }
    });







    // javascript
    // var xmlHttp = new XMLHttpRequest();
    // xmlHttp.open( "GET", theUrl, false );
    // xmlHttp.send( null );
    // // return xmlHttp.responseText;
    // var answer= xmlHttp.responseText;
    // var str = JSON.stringify(answer);
    // console.log(str);
    // var jsonResponse = JSON.parse(str);
    // console.log(jsonResponse);

  }
};


  //   var xmlHttp = null;
  //   xmlHttp = new XMLHttpRequest();
  //   xmlHttp.open("GET", theUrl, true ); // I tried with true and with false
  //   xmlHttp.send();
  //   var answer= xmlHttp.responseText;
  //   var str = JSON.stringify(answer);
  //   console.log(str);
  //   var jsonResponse = JSON.parse(str);
  //   console.log(jsonResponse);

  //     http.get(url, function(res) {
  //     // var body = '';
  //     var names = [];

  //     res.on('data', function(chunk) {
  //         // body += chunk;
  //         names.push(chunk);
  //     });
  //     return names;
  //     // res.on('end', function() {
  //     //     var fbResponse = JSON.parse(body)
  //     //     console.log("Got response: ", fbResponse.picture);
  //     // });
  // }).on('error', function(e) {
  //       console.log("Got error: ", e);

  //       // var names = [];
  //       // //iterate over the array at data.results
  //       // var results = data.results;
  //       // //refactor for speed later
  //       // for(var i = 0; i < results.length; i++) {

  //       //   names.push(results[i]);

  //       // }
  //       // return names;


  // });




//--------------------------------------------------------------------------------------
  // var promise = new Promise(function(resolve, reject) {
  //   var request = new XMLHttpRequest();
 
  //   request.open('GET', 'http://api.icndb.com/jokes/random');
  //   request.onload = function() {
  //     if (request.status == 200) {
  //       resolve(request.response); // we got data here, so resolve the Promise
  //     } else {
  //       reject(Error(request.statusText)); // status is not 200 OK, so reject
  //     }
  //   };
 
  //   request.onerror = function() {
  //     reject(Error('Error fetching data.')); // error occurred, reject the  Promise
  //   };
 
  //   request.send(); //send the request
  // });
 
  // console.log('Asynchronous request made.');
 
  // promise.then(function(data) {
  //   console.log('Got data! Promise fulfilled.');
  //   document.getElementsByTagName('body')[0].textContent = JSON.parse(data).value.joke;
  // }, function(error) {
  //   console.log('Promise rejected.');
  //   console.log(error.message);
  // });