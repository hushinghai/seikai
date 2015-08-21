<!DOCTYPE html>

<html lang="en-us">
<head>
  <meta charset="utf-8">
  <meta content="en" http-equiv="Content-Language">
  <link href={{URL::to('uploads/app/'.s('favicon'))}} rel="shortcut icon">
  <meta content=
  
  name="keywords">
  <meta content="index, follow" name="robots">
  <meta content=
 
  name="description">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <meta name="description" content="'.{{s('description')}}.'">
  <meta name="keywords" content="'.{{s('meta_keywords')}}.'">

    @if(s('search_engine_access'))
      <meta name="robots" content="noindex">
    @endif


      @if(s("google_ua"))
    <script type="text/javascript">
      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', '{{ s("google_ua") }}']);
      _gaq.push(['_trackPageview']);
      (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      })();
    </script>
    @endif





  <link href="#" rel="canonical">
  


  <link id="base-style-responsive" href="{{ URL::asset('web/Content/base_styles.css') }}" rel="stylesheet">
  <link id="base-style-responsive" href="{{ URL::asset('web/Content/home.css') }}" rel="stylesheet">
  <link rel="stylesheet"  href="{{ URL::asset('web/Content/superfish.css') }}"   media="screen">
  <link rel="apple-touch-icon-precomposed" sizes="144x144" href="{{asset('uploads/app/apple-touch-icon-144-precomposed.png')}}">
  <link rel="apple-touch-icon-precomposed" sizes="114x114" href="{{asset('uploads/app/apple-touch-icon-114-precomposed.png')}}">
  <link rel="apple-touch-icon-precomposed" sizes="72x72" href="{{asset('uploads/app/apple-touch-icon-72-precomposed.png')}}">
  <link rel="apple-touch-icon-precomposed" href="{{asset('uploads/app/apple-touch-icon-57-precomposed.png')}}">
  <link rel="shortcut icon" href="{{asset('uploads/app/favicon.png')}}">
  <link rel="shortcut icon" href="{{asset('uploads/app/favicon.ico')}}">

  
<!--[if IE ]> 
<style>
.global-header, .global-sub-header .g-group {
    margin: 0 auto;
    position: relative;
    width: 100%;
    max-width: 1080px;
    min-width: 220px;
    height:60px;
}

#search-location {
width: 251px;
box-shadow: 0px -3px 0px #fff;
font-size: 16px;
font-weight: 300;
height: 46px;
line-height: 1.2em;
box-shadow: none;
-webkit-appearance: none;
margin-top: 6px;
}

#autocomplete
{
width: 251px;
height: 46px;
margin-left: 1px;
}
#search
{
  position: relative;
display: inline;
width: 30px;
height: 30px;
margin: 3px -37px -3px 0px;
left: -40px;
top: 8px;
}

#example
{

  background-color: #0f90ba;
}

ul, menu, dir {
display: block;
list-style-type: disc;
-ms-margin-before: 1em;
-ms-margin-after: 1em;
-ms-margin-start: 0px;
-ms-margin-end: 0px;
-ms-start: 40px;
}

li {
display: list-item;
text-align: -ms-match-parent;
}

#header-search
{
width: 251px;
 margin-top: -60px; 
margin-right: 0px;
 margin-bottom: 10px;
 margin-left: 150px;

}

.global-header {
    -ms-font-smoothing: antialiased;
    -ms-osx-font-smoothing: grayscale;
    height: 60px;
}

    .global-header .btn.btn--action {
        font-size: 16px;
        height: auto;
        margin-top: 8px;
        margin-left: 8px;
        vertical-align: top;
        color: #fff;
        letter-spacing: .8px;
        line-height: 1;
        padding: 14px 19px;
    }

    .global-header .major {
        float: left;
        width: 460px;
        margin-left: 15px;
    }

        .global-header .major .header-link {
            -ms-transition: opacity .2s ease-in-out;

            transition: opacity .2s ease-in-out;
            float: left;
        }

    .global-header .minor {
        position: absolute;
        right: 0;
        top: 0;
        background-color: #fff;
        margin-right: 15px;
        font-size: 0;
  height:inherit;
    }

    .global-header .mobile-action-a, .global-header .mobile-action-b {
        line-height: 1;
        font-size: 23px;
        position: absolute;
        padding: 16px 20px;
        top: 0;
        color: #ccc;
        text-decoration: none;
    }

        .global-header .mobile-action-a.active, .global-header .mobile-action-b.active {
            color: #0f90ba;
        }

    .global-header .mobile-action-a, .global-header .mobile-action-a-menu {
        left: 0;
    }

    .global-header .mobile-action-b, .global-header .mobile-action-b-menu {
        left: auto;
        right: 0;
        top: -2.5em;
    }

    .global-header .mobile-action-a-menu, .global-header .mobile-action-b-menu {
        width: 220px;
    }

    .global-header .user-avatar {
        padding-left: 38px;
    }

        .global-header .user-avatar .name, .global-header .user-avatar .email {
            line-height: 1;
        }

        .global-header .user-avatar .user-name {
            vertical-align: top;
            max-width: 110px;
        }

        .global-header .user-avatar .user-avatar-icon {
            top: 18px;
            left: 10px;
        }

    .global-header .list .user-avatar {
        padding: 13px 13px 13px 38px;
        line-height: normal;
        background-color: #f8f8f8;
    }

        .global-header .list .user-avatar .user-avatar-icon {
            top: 8px;
        }

#global-header {
    z-index: 10;
}

.text--normal {
    text-align: left;
}

.text--truncated {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    display: block;
float: right; margin-top: -60px;
}

.text--truncated-two-line {
    display: -webkit-box;
    max-height: 42px;
    -ms-line-clamp: 2;
    -ms-box-orient: vertical;
    white-space: normal;
    overflow: hidden;
    position: relative;
}

    .text--truncated-two-line.text-heading-epic, .text--truncated-two-line.modal__heading {
        display: inherit;
        max-height: 72px;
    }

    .text--truncated-two-line.text-heading-primary {
        display: inherit;
        max-height: 60px;
    }

    .text--truncated-two-line.text-heading-secondary, .text--truncated-two-line.category-card__description {
        display: inherit;
        max-height: 54px;
    }

.text--truncated-two-line__truncation {
    background-color: rgba(255,255,255,0);
    background-image: -webkit-linear-gradient(-360deg,rgba(255,255,255,0) 0,#fff 30%);
    background-image: linear-gradient(90deg,rgba(255,255,255,0) 0,#fff 30%);
    position: absolute;
    right: 0;
    padding-left: 10px;
}

.text-heading-epic .text--truncated-two-line__truncation, .modal__heading .text--truncated-two-line__truncation {
    top: 36px;
    height: 36px;
}

.text-heading-primary .text--truncated-two-line__truncation {
    top: 30px;
    height: 30px;
}

.text-heading-secondary .text--truncated-two-line__truncation, .category-card__description .text--truncated-two-line__truncation {
    top: 27px;
    height: 27px;
}

.text--truncated-two-line__truncation:before {
    content: '\2026';
}

.high-visibility-alert {
    color: #ff8000;
    text-transform: uppercase;
    font-weight: 500;
    text-decoration: none;
}

.category-card__image {
    position: relative;
    background-color: transparent;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    min-height: 240px;
}

.header-link {
display: inline-block;
font-size: 16px;
font-weight: 300;
line-height: 19px;
vertical-align: top;
padding: 22px 13px 19px;
color: #666;
}

.global-header .major .header-link {
-webkit-transition: opacity .2s ease-in-out;
-moz-transition: opacity .2s ease-in-out;
transition: opacity .2s ease-in-out;
float: left;
}

</style>
 <![endif]-->

  <style>
   #search-location {

width: 251px;

box-shadow: 0px -3px 0px #fff;
font-size: 16px;
font-weight: 300;
height: 46px;
line-height: 1.2em;
box-shadow: none;
-webkit-appearance: none;
margin-top: 6px;
}

#autocomplete
{
width: 251px;
height: 46px;
margin-left: 1px;
}
#search
{
  position: relative;
display: inline;
width: 30px;
height: 30px;
margin: 3px -37px -3px 0px;
left: -40px;
top: 8px;
}

#example
{

  background-color: #0f90ba;
}

.sf-menu ul li{


  background-color: #0f90ba;
  white-space: nowrap; /* no need for Supersubs plugin */
  *white-space: normal; /* ...unless you support IE7 (let it wrap) */
  -webkit-transition: background .2s;
  transition: background .2s;
}

.sf-menu ul li a{
  
  font-size: 16px;

color: #fff;
letter-spacing: .8px;
line-height: 1;

}

#cat_head {
  background: grey;
padding: 4px;
text-align: center;
color: white;
}



</style>


@yield('head')
  
@yield('css')

  <title>
    {{$pageTitle}}
  </title>
  
 
   



</head>

<body class="lang-en en-us" data-automation='home-desktop' style="position:relative;">
  
  <header>
    <a class="skip-links js-d-skip-links" href="#skip-heading">Skip Main
    Navigation</a>

    <div class="sill global-header-container logged-out" data-id="main-header"
    data-role="header" id="global-header">
      <div class="global-header js-global-header">
        <div class="major">
          <a class="eb-logo js-mx-track-click" data-mixpanel-action=
          "Global Header Interaction" data-mixpanel-interaction-type="Click"
          data-mixpanel-internal-click="1" data-mixpanel-logged-in-status=
          "Logged Out" href="{{URL::to('/')}}"><img src="{{asset('uploads/app/event.png')}}"  style="width:108px;max-height:40px;margin:7px auto"></a>

          <div class="gh-dd header-search">
          

              <ul class="sf-menu" id="header-search" style="width: 251px;">
      <li class="current">
        <input type="text" id="search-location"/>
        <ul id="header-search-list" style="display:none">
          <li >                        
            <input type="text" id="autocomplete" placeHolder="Search for Location"/>
                
                         <input type="hidden" id="search-top-city"> </input>
                      <input type="hidden" id="search-top-lat"> </input>
                      <input type="hidden" id="search-top-lng"> </input>
          </li>
          <li id="cat_head">CATEGORIES</li>
          @foreach($categories as $cat)
          <li class="current">
            <a href="#" onclick="top_search('{{$cat->id}}')">{{$cat->name}}</a>           
          </li>
          @endforeach
        </ul>
      </li>
      
    </ul>
        
   
          </div>


          <div class="show-large text--truncated">
            <a class="js-mx-track-click header-link gh-discover" id="event_dir_search"
             href="#" onclick="event_dir()">Discover</a>
          </div>
        </div>


        <div class="minor hide-medium hide-small">

          @if(Auth::user())

          <div class="gh-dd gh-profile-box js-gh-dd">
                <a class="header-link useraccount user-avatar js-gh-action js-mx-track-click"  href="{{URL::to('user/account')}}" alt="My account">
                    <span class="username icondown">{{Auth::user()->email}}</span>
                    
                </a>
                <div class="gh-dd-menu on-right sill sill--with-borders js-gh-dd-menu" id="js-global-nav-account-menu">
                    <ul class="list">
                        
    <li><a href="{{URL::to('user/mytickets/'. Auth::user()->id)}}" class="js-mx-track-click">My Tickets</a></li>
    <li><a href="{{URL::to('user/myevents/'. Auth::user()->id)}}" class="js-mx-track-click">My Events</a></li>
    <li><a href="{{URL::to('user/mysavedevents/')}}" class="js-mx-track-click">My Saved Events</a></li>
    
            <li><a href="{{URL::to('user/orgprofile')}}"  class="js-mx-track-click" >My Organizer Profile</a></li>


                        <li class="list--with-divider-top"><a href="{{URL::to('user/accountsettings')}}" class="js-mx-track-click" >Account</a></li>
                        <li><a href="{{URL::to('/logout')}}" class="js-mx-track-click"  >Log out</a></li>
                    </ul>
                </div>
            </div>

            @else
          <a class="header-link js-mx-track-click" href="{{URL::to('/login?view=user-signin')}}">Sign up</a> 
          <a class="header-link js-mx-track-click" href="{{URL::to('/login?view=user-loginin')}}">Log in</a>

          @endif

          @if($pageTitle != 'Create Event')
          <a class="btn btn--action js-mx-track-click" href="{{URL::to('user/createevent')}}">Create Event</a>

          @endif
        </div>


       
        </div>
      </div>
    </div>


    <div id="pixels">
    </div>
  </header>


@yield('content')
  


  <div class="global-footer">
    <div class="g-grid">



      <div class="g-group l-padded-v-3 text--centered show-large l-block-2">
        <div class="g-cell g-cell-12-12">
          <p class="footer-copyright text-body-medium l-block-4">Copyright &copy {{s('title')}} 2015
          </p>
        </div>
      </div>
    </div>
    <!-- end g-grid -->
  </div>




<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>


 <script  src="{{ URL::asset('web/js/jsi18n/jsi18n_en-us.js')}}"   type="text/javascript"></script> 

<script type="text/javascript" src="{{ URL::asset('web/js/jqueryui/1.8.18/jquery-ui-1.8.18.dialog-only.min.js')}}"></script>

<script type="text/javascript" src="{{ URL::asset('web/js/jquery-ui-1.9.2.custom.min.js')}}"></script>

 <script src="{{ URL::asset('web/js/apps/global_nav/app.js')}}" async defer></script>

 <script src="{{ URL::asset('web/js/apps/home_page/app.js')}}" async defer></script>

<script type="text/javascript" src="//maps.google.com/maps/api/js?sensor=true&libraries=places&language=en"></script>

<script src="{{ URL::asset('web/js/jquery.cookie.js')}}"></script>
<script>

var geocoder;

function geoCoderInitialize() {
    geocoder = new google.maps.Geocoder();

}

function codeLatLngdir(lat, lng) { 


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
        var fullname = city.long_name + ' ,'+state.long_name+' ,' +country.long_name;
         $.cookie('city', fullname);
          $.cookie('lat', lat);
           $.cookie('lng', lng);

      }
    }

    var params ='city=' + $.cookie('city')+ '&lat='+$.cookie('lat')+ '&lng='+ $.cookie('lng') ;
        if(glob_param) {
          params = params + "&" + glob_param;
        }
        window.location.href = "{{URL::to('events/eventdirectory?')}}" +params;
});

}


$("#header-search").click(function(e){

  $("#header-search-list").show();

});


  $(function(){ 

      geoCoderInitialize();

      var input = $("#autocomplete").get(0);

      var options = {   types: ['(cities)'] }
      var autocomplete = new google.maps.places.Autocomplete(input, options);
 

      google.maps.event.addDomListener(input, 'keydown', function(e) { 
        if (e.keyCode == 13) { 
            e.preventDefault(); 
        }
      }); 

    google.maps.event.addListener(autocomplete, 'place_changed', function() {
        
        var place = autocomplete.getPlace();

        codeLatLngdir(place.geometry.location.lat(),place.geometry.location.lng());


        });
})

  $('body').click(function(e){
    if(!($(e.target).hasClass('sf-menu') || $(e.target).parents('.sf-menu').length) && $("#header-search-list").is(":visible")) {

      $("#header-search-list").hide();
    }
  }); 



</script>

<script>
var glob_param;
  
function event_dir(passed_params)
 {
    console.log("4444");
    if(!$.cookie('lat') || !$.cookie('lng') ) {

        if (navigator.geolocation)
      {
        navigator.geolocation.getCurrentPosition(getCurrentPositiondir);
        glob_param = passed_params;
      }

        
    } else {
      var params ='city=' + $.cookie('city')+ '&lat='+$.cookie('lat')+ '&lng='+ $.cookie('lng') ;
      console.log(params);
        if(passed_params) {
          params = params + passed_params;
          console.log(params);
        }
        console.log("{{URL::to('events/eventdirectory?')}}" + params);
        window.location.href = "{{URL::to('events/eventdirectory?')}}" + params;
    }
    
      
   
 } 
 function getCurrentPositiondir(position)
  {
    $.cookie('lat', position.coords.latitude);
     $.cookie('lng', position.coords.longitude);
     codeLatLngdir(position.coords.latitude,position.coords.longitude);

     
      
  }

  function top_search(cat_id) {

    var params = '';

    if($("#search-location").val()) {
      console.log("1");
        params = '&name=' + $("#search-location").val();
    } 
    if(cat_id) {
      params = params + '&category=' +cat_id;
    }

    if($("#search-top-city").val() && $("#search-top-lng")  && $('#search-top-lat') ) {
console.log("2");
      params = 'city=' + $("#search-top-city").val() + "&lat=" + $('search-top-lat')  + '&lng=' + $("search-top-lng") + params; 
      window.location.href = "{{URL::to('events/eventdirectory?')}}" +params;
    }
    else {
      console.log("3");
      event_dir(params);
    }

  }
function showSignUp()
  {
        
    document.getElementById("signUpPage").style.display="block";      
    document.getElementById("logInPage").style.display="none";   
  }
  
  function showLogin()
  {
        
    document.getElementById("signUpPage").style.display="none";      
    document.getElementById("logInPage").style.display="block"; 
  }


$(document).on('click', '.useraccount', function (e) {  

e.preventDefault(); 

if($(this).siblings('#js-global-nav-account-menu').hasClass('js-gh-dd-menu--show'))
{

$(this).siblings('#js-global-nav-account-menu').removeClass('js-gh-dd-menu--show');

$(this).children('.username').removeClass('iconup').addClass('icondown');

}else
{

$(this).siblings('#js-global-nav-account-menu').addClass('js-gh-dd-menu--show');

$(this).children('.ico-arrow-up').removeClass('ico-arrow-up').addClass('ico-arrow-down');

$(this).children('.username').removeClass('icondown').addClass('iconup');

}

});

$('#cssmenu > ul > li > a > span').click(function() {
  if($(this).hasClass('spanCategoryup'))
  {
  $(this).removeClass('spanCategoryup').addClass('spanCategorydown');
  }
  else if($(this).hasClass('spanCategorydown'))
  {
  $(this).removeClass('spanCategorydown').addClass('spanCategoryup');
  $('.active').children('a').children('span').removeClass('spanCategoryup').addClass('spanCategorydown');
  }
  else
  {
  $(this).addClass('spanCategorydown');
  }
  
  });

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


    $(document).on('click', '.save_event', function (e) {
      

e.preventDefault();
      $.ajax(
          {
            // The link we are accessing.
            url: "{{URL::to('/user/saveevent')}}",
            
            // The type of request.
            type: "post",
            
            // The type of data that is getting returned.
            dataType: "html",
            
            data: { 
               'event_id': $(this).data('eid'),
            },

            error: function(){
              alert( "AJAX - error()" );
              
            },
           
            success: function( strData ){
              var c= document.getElementsByClassName("ico-bookmark  ico--large");
              e.currentTarget.firstChild.className= "ico-bookmark ico--largeSaved";
              e.currentTarget.lastChild.innerHTML="Saved";
              e.currentTarget.className = "saved";
              e.preventDefault();
              
            }
          }             
          );
  });



    $(document).on('click', '.saved', function (e) {  
      
        e.preventDefault();
      
    $.ajax(
          {
            // The link we are accessing.
            url: "{{URL::to('/user/unsaveevent')}}",
            
            // The type of request.
            type: "post",
            
            // The type of data that is getting returned.
            dataType: "html",
            
            data: { 
              'event_id': $(this).data('eid'),
            },

            error: function(e, ts, et){
              alert(ts.responseText);
              e.preventDefault();
              
            },
           
            success: function( strData ){
              var c= document.getElementsByClassName("ico-bookmark  ico--largeSaved");
              e.currentTarget.firstChild.className= "ico-bookmark ico--large";
              e.currentTarget.lastChild.innerHTML="Save";
              e.currentTarget.className = "bookmark save_event";
              e.preventDefault();
              
            }
          } 
          );     
    });
    
  </script>

  @yield('js')
</body>
</html>