
  // <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCRrvQjKR1XrKXYWYj-7IBOpVYab--uYxc&libraries=places&callback=initMap"
      // This example requires the Places library. Include the libraries=places
      // parameter when you first load the API. For example:
      // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

/*
=======
alert("working")

>>>>>>> 4db0878e4d107434975b83f7692a8755b26ab983
var lat = 29.7885595;
var lng = -95.9143899;
      var map;
      function initialize() {
        var mapOptions = {
          zoom: 8,
          center: {lat, lng}
        };
        map = new google.maps.Map(document.getElementById('map'),
            mapOptions);

        var marker = new google.maps.Marker({
          // The below line is equivalent to writing:
          // position: new google.maps.LatLng(-34.397, 150.644)
          position: {lat, lng},
          map: map
        });

        // You can use a LatLng literal in place of a google.maps.LatLng object when
        // creating the Marker object. Once the Marker object is instantiated, its
        // position will be available as a google.maps.LatLng object. In this case,
        // we retrieve the marker's position using the
        // google.maps.LatLng.getPosition() method.
        // var infowindow = new google.maps.InfoWindow({
        //   content: '<p>Marker Location:' + marker.getPosition() + '</p>'
        // });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map, marker);
        });
      }
<<<<<<< HEAD
 
      */

$("document").ready(function(){

   
   var search = "taco";

//write a search function that will activate the api request
  $(document).on("click", '#searchBtn', function(event){
    
    search = $("#search").val().toUpperCase();
    console.log(search);
    getRequest(search);
    clear();

  });


  function getRequest(x){

    clearList();
    event.preventDefault();
    var apiKey = "ed87a106cc8297101a6fc11e750e7a8b";
    var queryURL = "https://developers.zomato.com/api/v2.1/search?q=truck&location=houston";

       $.ajax({
          url: queryURL,
          headers: { 'user-key': apiKey },
          method: 'GET'
        }).done(function(response) {
  
        console.log(response);

      for(var i=0; i< response.restaurants.length; i++)
        {
          var type = response.restaurants[i].restaurant.cuisines.toUpperCase().split(" ");

          for(var x=0; x< type.length; x++)
          {
            



            if(search === type[x])
            {

               console.log(type[x]);

               /*
              $(".list").addClass("fTruck");
              var n = $("<p>");
              n.text(response.restaurants[i].restaurant.name);
              $(".list").append(n);

              */  
            }
          
          }
        }  

     });

  }


  function clear(){
    $("#search").val('');
  }

  function clearList(){
    $(".list").empty();
  }

});
  /*.location
//firebase initialization
var config = {
    apiKey: "AIzaSyCivOGHXHXHGLcYTXw9rLB95cFjM5XHUdc",
    authDomain: "rollrater.firebaseapp.com",
    databaseURL: "https://rollrater.firebaseio.com",
    projectId: "rollrater",
    storageBucket: "rollrater.appspot.com",
    messagingSenderId: "110397318950"
  };
  firebase.initializeApp(config);


  var database = firebase.database();

  var UserName = "";
  var UserMail = "";
  var UserAddress = "";

  $("#submitBtn").on("click", function(event)
    {
        event.preventDefault();

        UserName = $("#name").val().trim();
        UserMail = $("#email-address").val().trim();
        UserAddress = $("#address").val().trim();

        database.ref().push({
          UserName: UserName,
          UserEmail: UserEmail,
          UserAddress: UserAddress,
        });

    });
    */
