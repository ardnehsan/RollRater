  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCivOGHXHXHGLcYTXw9rLB95cFjM5XHUdc",
    authDomain: "rollrater.firebaseapp.com",
    databaseURL: "https://rollrater.firebaseio.com",
    projectId: "rollrater",
    storageBucket: "rollrater.appspot.com",
    messagingSenderId: "110397318950"
  };
  firebase.initializeApp(config);


    var apikey = "AIzaSyB3n_QH-VP9-_7G5iLhnhrL3P6X-ISVnwk";
    var myUrl = "https://maps.googleapis.com/maps/api/js?key="+ apikey+"&libraries=places";
    var queryURL = "https://cors-anywhere.herokuapp.com/" + myUrl;

    
 $.ajax({
          url: queryURL,
          method: 'GET'
        }).done(function(response) {
        
           $("<div>").text(JSON.stringify(response));


              });