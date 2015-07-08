
  @extends('pageshell') 

  @section('head')
<style>
  #signInPopUp
  {
     background-color:white;
  }
  #eventSaved
  {
    background-color:white;
  }

  #city-map {
    height:100%;
    width: 100%;
  }

#bookmark-success-popup
{
  display: inline-block;
left: 50%;

z-index: 1002;
position: fixed;
top: 50%;

background-color:white;
}

#city {
  padding: 12px 29px;
font-size: 37px;
font-weight: 500;
}

  
  .ico--largeSaved {
font-size: 32px;
line-height: 1;
baackground-color: blue;
color: blue;
}

.saved {
  color: blue ;
  font-size: 14px;
position: relative;
bottom: 4px
}


  
  </style>
  @stop

  @section('content') 

  <a class="is-hidden-accessible" id="skip-heading" tabindex="-1">Page Content</a>

  <div class="global-mask">
  </div>


  <div class="clrfix" id="content">
    <div class="g-group--full-width js-location-picker hero-banner-form responsive-form">
      <section class="js-map-canvas" id="city-map">
      </section>


      <section class="hero-banner-form__content l-block-2">
        <div class="g-grid">
          <div class="g-cell g-cell-12-12">
            <div class="l-block-4">
              <span class="subtitle">Find experiences in</span>
            </div>


            <div class="l-block-1" onclick="changeLocation()" id="cityEntered" style="z-index:3">
              <a class="title text--truncated"><span id="location">#location</span> <i class="ico-circle-cross"></i></a>
            </div>


            <div class="l-block-1 enterCity" id="enterCity" style="display:none">
              <div class="responsive-form__input--icon" style="z-index:3">
                <div class="responsive-form__input--icon__container ico-location ico--color-brand-blue" style="font-style: italic">
                </div>
                <input class="hero-banner-form__input" placeholder="Enter location" spellcheck="false" type="text" id="city">
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>


    <section class="g-group--full-width featured-events">
      <div class="g-grid omnes">
        <div class="js-featured-events-container l-padded-v-bottom-5 is-hidden">
        </div>
      </div>
    </section>


    <section class="g-grid omnes l-padded-v-bottom-5">
     
     <div id="events"> 
      
      <section class="js-module-container">
        <div class="g-cell g-cell-1-1 l-block-4">
          <h2 class="text-heading-primary">Popular Events</h2>
        </div>


        
          <div class="g-group js-event-cards event-cards" id="events">

          @if($events)
          @foreach($events['this_month'] as $event)

          <div class="g-cell g-cell-1-1 g-cell-md-1-2 g-cell-lg-1-3 l-padded-v-bottom-3">
            <div class="event-card event-card--poster js-event-link l-block-2 js-d-poster" data-type="popular">
              <div class="event-card--poster__header l-padded-h-2">
                <div class="event-card__image img-90">
                  @if($event->image_url != null)
                    <img alt="event logo" class="js-poster-image js-d-retina" data-d-retina-src="{{URL::to('uploads/event_logos/' .$event->image_url) }}" src="{{URL::to('uploads/event_logos/' .$event->image_url) }}">
                  @else
                    <img alt="event logo" class="js-poster-image js-d-retina" src="{{URL::to('uploads/event_logos/' .$event->default_event.jpg) }}">
                  @endif  
                </div>


                <div class="js-poster-decoration event-card--poster__decoration event-card--poster__decoration__top-left">
                </div>


                <div class="js-poster-decoration event-card--poster__decoration event-card--poster__decoration__top-right">
                </div>


                <div class="js-poster-decoration event-card--poster__decoration event-card--poster__decoration__bottom-left">
                </div>


                <div class="js-poster-decoration event-card--poster__decoration event-card--poster__decoration__bottom-right">
                </div>
              </div>


              <div class="event-card__description l-padded-h-2">
                <h3 class="text-body-large"><a class="event-card__description--title" href="e/hr-expo2014-tickets-117531168893add.html?aff=ehomecard"><span class=
                "js-xd-preferred-link l-block-3 text--truncated-two-line">{{$event->title}}</span></a>
                </h3>


                <ul class="l-block-2">
                  <li><span class="text-body--faint text--truncated">{{$event->d_start_date}}, {{$event->startTime}}</span>
                  </li>


                  <li class="l-block-1"><span class="text-body--faint text--truncated">{{$event->location['address']}}</span>
                  </li>
                </ul>
              </div>


              <div class="event-card__footer l-padded-v-3 clrfix">
                <div class="l-padded-h-2">
                  <section class="left" id="saveEvent">
                    <a class="bookmark"  data-bookmarked="false" data-eid="11753116889"><i class="ico-bookmark ico--large"></i> <span class=
                    "bookmark__tip">Save</span></a>
                  </section>
                </div>
              </div>
            </div>
          </div>

          @endforeach


          <div class="g-cell g-cell-1-1 text--centered js-see-more-events-btn">
            <div class="text-body-large">
              <a class="js-search-click-action btn btn--secondary" data-source="homePage:moreResultsLink" href="" onclick="event_dir('page=1')">See More</a>
            </div>
          </div>

          @else 

           <div class="g-cell g-cell-1-1 text--centered js-see-more-events-btn" id="events-nolocation">
            <div class="text-body-large">
              Enter a location to see events in that location
            </div>
          </div>

           @endif
          </div>
      </section>
     
     </div> 

      <div class="g-group l-padded-v-bottom-3">
        <div class="g-cell g-cell-1-1 l-block-4">
          <h2 class="text-heading-primary">Top Categories</h2>
        </div>


        @foreach($cats as $cat)

        <div class="g-cell g-cell-1-1 g-cell-lg-1-4 l-padded-v-2">
          <a class="category-card js-category-link" data-category="Arts" href="#" onclick="event_dir('&category={{$cat->id}}')">
            @if($cat->image_url != null)
            <div class="category-card__image" style="background-image: url({{ URL::to('/uploads/category_images/'.$cat->image_url) }})">
            @else  
            <div class="category-card__image" style="background-image: url({{ URL::to('/uploads/event_logos/default_event.jpg') }})">
              @endif
            <div class="category-card__description-wrapper l-align-center">
              <div class="category-card__description l-padded-v-1 l-padded-h-1">
               {{ $cat->name}}
              </div>
            </div>
          </div></a>
        </div>

        @endforeach

      </div>  

    <section class="omnes g-group--full-width l-padded-v-4 organizer-callout" style="background-image:url(../cdn.evbuc.com/eventlogos/24254820/bgicnsorganizercta-6.png);">
      <div class="g-grid">
        <div class="g-cell g-cell-12-12 l-align-center">
          <h3 class="text-heading-primary l-block-3">Create your own event</h3>


          <p class="text-body-medium l-block-2">Bring people together, or turn your passion into a business.<br class="hide-small">
          You get everything you need to host your best event yet.</p>


          <div class="l-block-3 l-padded-v-bottom-4">
            <a class="js-organizer-cta-btn btn" href="{{URL::to('user/createevent')}}">Get Started</a>
          </div>
        </div>
      </div>
    </section>
  
  </div>



<div id="signInPopUp" class="omnes g-cell g-cell--no-gutters g-cell-1-1 g-cell-md-6-12 g-cell-lg-4-12" style="display:none">
    <h3 class="modal__heading">Save This Event</h3>
    <div class="modal__body l-align-center">
        <div>Log in or sign up to save events you're interested in.</div>
        <div class="l-padded-v-2">
            <a href="{{URL::to('login?view=user-signin')}}" class="js-bookmark-signup btn btn--block l-padded-v-2" style="color:#fff;">
                Sign Up
            </a>
        </div>
        <div class="text-body-small">Already have an account? <a class="js-bookmark-login" href="{{URL::to('login?view=user-loginin')}}">Log in</a></div>
    </div>
<i class="mfp-close default-mfp-close ico-circle-cross ico--medium"></i></div>


<div id="eventSaved" class="omnes g-cell g-cell--no-gutters g-cell-1-1 g-cell-md-6-12 g-cell-lg-4-12" style="display:none">
    <h3 class="modal__heading">Event Saved</h3>
</div>


<div id="locationInfo" style="display:none;">
  <p>Accept and give us the browser permissions to access your location. It will be below address bar</p>
</div>

  @stop


  @section('js')


  <script>



  

  function getLocation()
  {

   if($.cookie('lat') && $.cookie('lng')) {

       $("#cityEntered").show();

    $("#enterCity").hide();

    codeLatLngforMap($.cookie('lat'),$.cookie('lng'));

   } else {

       if (navigator.geolocation)
    {
      $( "#locationInfo" ).dialog('close');
      navigator.geolocation.getCurrentPosition(setUserPosition);

       $("#cityEntered").show();

    $("#enterCity").hide();
    }
    else{
        
       $("#cityEntered").hide();

    $("#enterCity").show();
    }

   }
 
  }

  function setUserPosition(position)
  {
    //$("#lat").val(position.coords.latitude);
    //$("#lng").val(position.coords.longitude);
    codeLatLngforMap(position.coords.latitude, position.coords.longitude);
    $( "#locationInfo" ).dialog('close');
  }

  

  function codeLatLngforMap(lat, lng) { 

    $.cookie('lat', lat);
     $.cookie('lng', lng);

    var latlng = new google.maps.LatLng(lat, lng);
    geocoder.geocode({'latLng': latlng}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {

        if (results[1]) {
         
             for (var i=0; i < results[0].address_components.length; i++) {

            for (var b=0; b < results[0].address_components[i].types.length;b++) {

            //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
                if (results[0].address_components[i].types[b] == "locality") {
                    //this is the object you are looking for
                    city= results[0].address_components[i];

                   
                }

                 if (results[0].address_components[i].types[b] == "country") {
                    //this is the object you are looking for
                    country= results[0].address_components[i];

                   
                }

                if (results[0].address_components[i].types[b] == "administrative_area_level_1")
                {
                    state = results[0].address_components[i];
                }
            }
        }
        //city data
        var fullname = city.long_name + ' ,'+state.long_name+' ,' +country.long_name;
        $("#location").text(city.long_name);
         $.cookie('city', fullname);

        var mapOptions = {
          center: latlng,
          zoom: 12
        };
        var map = new google.maps.Map(document.getElementById('city-map'),mapOptions);
      

        $.ajax(
          {
            // The link we are accessing.
            url: "{{URL::to('/events/eventslist')}}",
            
            // The type of request.
            type: "post",
            
            // The type of data that is getting returned.
            dataType: "html",
            
            data: { 
               'city': city.long_name + ', ' + state.long_name + ', ' + country.long_name,
               'lat': lat,
               'lng':lng,
            },

            error: function(){
              alert( "AJAX - error()" );
              
            },
           
            success: function( strData ){
              $("#events").html(strData);
              $("#events-nolocation").hide();
              
            }
          }             
          );

        } else {
          alert("No results found");
        }
      } else {
        alert("Geocoder failed due to: " + status);
   

  }

});

}

$(function(){ 



      geoCoderInitialize();
      getLocation();

      var input = $("#city").get(0);

      var options = {   types: ['(cities)'] }
      var autocomplete = new google.maps.places.Autocomplete(input, options);
 
      var input = document.getElementById('city');
      google.maps.event.addDomListener(input, 'keydown', function(e) { 
        if (e.keyCode == 13) { 
            e.preventDefault(); 
        }
      }); 

    google.maps.event.addListener(autocomplete, 'place_changed', function() {
        
        var place = autocomplete.getPlace();

        codeLatLngforMap(place.geometry.location.lat(),place.geometry.location.lng());

        $("#cityEntered").show();

    $("#enterCity").hide();

        $("#city").val("");

        });
})

</script>



<script async="" defer  src="{{ URL::asset('web/js/jquery.lightbox_me.js')}}"></script>
<script type="text/javascript">

function saveevent() {

  $('#signInPopUp').lightbox_me({
        centered: true, 
        onLoad: function() { 
            $('#signInPopUp').find('input:first').focus()
            }
        });
    e.preventDefault();
}

var flag =0;

function changeLocation() {

    $("#cityEntered").hide();

    $("#enterCity").show();


}


</script>

  

 <script type="text/javascript">
    
    function saveEventLoggedIn(e)
    {      
      console.log(e);
      


      $.ajax(
          {
            // The link we are accessing.
            url: "{{URL::to('/user/saveevent')}}",
            
            // The type of request.
            type: "post",
            
            // The type of data that is getting returned.
            dataType: "html",
            
            data: { 
               'event_id': $(e).data('eid'),
            },

            error: function(){
              alert( "AJAX - error()" );
              
            },
           
            success: function( strData ){
              var c= document.getElementsByClassName("ico-bookmark  ico--large");
              e.firstChild.className= "ico-bookmark ico--largeSaved";
              e.lastChild.innerHTML="Saved";
              e.className = "saved";
              
            }
          }             
          );
    }
    
    $(document).on('click', '.saved', function (e) {  
      
        
      
	    $.ajax(
          {
            // The link we are accessing.
            url: "{{URL::to('/user/unsaveevent')}}",
            
            // The type of request.
            type: "post",
            
            // The type of data that is getting returned.
            dataType: "html",
            
            data: { 
               'event_id': $(e).data('eid'),
            },

            error: function(){
              alert( "AJAX - error()" );
              
            },
           
            success: function( strData ){
              var c= document.getElementsByClassName("ico-bookmark  ico--largeSaved");
              e.firstChild.className= "ico-bookmark ico--large";
              e.lastChild.innerHTML="Save";
              e.className = "bookmark";
              
            }
          } 
          );     
    });
          

    
  </script>
<script type="text/javascript">


$('body').click(function(e){
    if(!($(e.target).hasClass('enterCity') || $(e.target).parents('.enterCity').length) && $("#enterCity").is(":visible")) {

      if(flag == 0) {
        flag = 1;
      } else {

      $("#cityEntered").show();

      $("#enterCity").hide();
      flag = 0;
      }

    }
  }); 




</script>

  @stop
