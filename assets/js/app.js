  // <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCRrvQjKR1XrKXYWYj-7IBOpVYab--uYxc&libraries=places&callback=initMap"
      // This example requires the Places library. Include the libraries=places
      // parameter when you first load the API. For example:
      // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

/*
var lat = 29.7885595;
var lng = -95.9143899;
    var map;
      var infoWindow;
      var service;

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat, lng},
          zoom: 15,
          styles: [{
            stylers: [{ visibility: 'simplified' }]
          }, {
            elementType: 'labels',
            stylers: [{ visibility: 'on' }]
          }]
        });

        infoWindow = new google.maps.InfoWindow();
        service = new google.maps.places.PlacesService(map);

        // The idle event is a debounced event, so we can query & listen without
        // throwing too many requests at the server.
        map.addListener('idle', performSearch);
      }

      function performSearch() {
        var request = {
          bounds: map.getBounds(),
          keyword: 'truck',
          types: ["food"]
        };
        service.radarSearch(request, callback);
      }

      function callback(results, status) {
        if (status !== google.maps.places.PlacesServiceStatus.OK) {
          
          return;
        }
        for (var i = 0, result; result = results[i]; i++) {
          addMarker(result);
        }
      }

      function addMarker(place) {
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location,
          icon: {
            url: 'https://developers.google.com/maps/documentation/javascript/images/circle.png',
            anchor: new google.maps.Point(12, 12),
            scaledSize: new google.maps.Size(10, 17)
          }
        });

        google.maps.event.addListener(marker, 'click', function() {
          service.getDetails(place, function(result, status) {
            if (status !== google.maps.places.PlacesServiceStatus.OK) {
              console.error(status);
              return;
            }
            infoWindow.setContent(result.name);
            infoWindow.open(map, marker);
          });
        });
      }
 
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