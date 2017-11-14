

var xx = 29.7885595;
var xy = -95.9143899;




$("document").ready(function(){



   var search = "taco";

//write a search function that will activate the api request
  $(document).on("click", '#searchBtn', function(event){
    
    search = $("#search").val().toUpperCase();
    console.log(search);
    getRequest(search);

  });


  function getRequest(x){

    event.preventDefault();
    var apiKey = "ed87a106cc8297101a6fc11e750e7a8b";
    var queryURL = "https://developers.zomato.com/api/v2.1/search?q=truck&location=houston";

       $.ajax({
          url: queryURL,
          headers: { 'user-key': apiKey },
          method: 'GET'
        }).done(function(response) {
  

      clearList();

      console.log(response);
      for(var i=0; i< response.restaurants.length; i++)
        {

          var type = response.restaurants[i].restaurant.cuisines.toUpperCase().split(" ");

          for(var x=0; x< type.length; x++)
          {
            



            if(search === type[x])
            {
               console.log(type[x]);
              $(".list").addClass("fTruck");
              var n = $("<p>");
              var r = $("<p>");
              n.text(response.restaurants[i].restaurant.name);
              r.text(response.restaurants[i].restaurant.user_rating);
              n.attr("data-lat", response.restaurants[i].restaurant.location.latitude);
              n.attr("data-lng",response.restaurants[i].restaurant.location.longitude);
              $(".fTruck").append(n);
              
              $(".list").append($(".fTruck"));
            
            }
          
          }
        }

     });

  }
    $(document).on("click", ".fTruck > p", function(){
        getMap($(this).attr("data-lat"),$(this).attr("data-lng"));
        clearList();
                });


  function clear(){
    $("#search").val('');
  }

  function clearList(){
    $(".list").empty();
  }

  function getMap(lat, lng){
    lat = parseInt(lat);
    lng = parseInt(lng);
      var map;
     
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
          UserAddress: UserAddress
        });

       });

});

