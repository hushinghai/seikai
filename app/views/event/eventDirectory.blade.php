 @extends('pageshell') 

 @section('head')

 <style>

 .newStyle
{
   background-color:rgb(208, 228, 245);
}


 #eventDesList
 {
 	width:142%;
 }

 .omnes
 {
 	width:60%;
 }

 #cssmenu,
#cssmenu ul,
#cssmenu li,
#cssmenu a {
  margin: 0;
  padding: 0;
  border: 0;
  list-style: none;
  font-weight: normal;
  text-decoration: none;
  line-height: 1;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  position: relative;
}
#cssmenu a {
  line-height: 1.3;
}

#cssmenu {
  width: 242px;
}
#cssmenu > ul > li > a {
  padding-right: 40px;
  font-size: 25px;
  font-weight: bold;
  display: block;
  background: #0D607B;
  color: #ffffff;
  border-bottom: 1px solid #5e071b;
  text-transform: uppercase;
  position: relative;
}
#cssmenu > ul > li > a > span {
  background: #0f90ba;
  padding: 10px;
  display: block;
  font-size: 13px;
  font-weight: 300;
}
#cssmenu > ul > li > a:hover {
  text-decoration: none;
}
#cssmenu > ul > li.active {
  border-bottom: none;
}
#cssmenu > ul > li.active > a {
  color: #fff;
}
#cssmenu > ul > li.active > a span {
  background: #0f90ba;
}
#cssmenu span.cnt {
  position: absolute;
  top: 8px;
  right: 15px;
  padding: 0;
  margin: 0;
  background: none;
}

#cssmenu ul ul {
  display: none;
}
#cssmenu ul ul li {
  border: 1px solid #e0e0e0;
  border-top: 0;
}
#cssmenu ul ul a {
  padding: 10px;
  display: block;
  color: #0D607B;
  font-size: 13px;
}
#cssmenu ul ul a:hover {
  color: #bd0e36;
}
#cssmenu ul ul li.odd {
  background: #f4f4f4;
}
#cssmenu ul ul li.even {
  background: #fff;
}

#cssmenu ul ul a:active { 
    background-color: yellow;
}

.location-container 
{
	margin: 0px 4px 0px -7px;
	padding: 0;
}

 #city-map {
    height:240px;
    width: 240px;
  }

.pagination li {
	display: inline;
margin: 9px;
text-align: center;
float: initial;
font-size: 20px;
}

.pagination{
	margin : 15px !important;
}

 </style>

 @stop

  @section('content') 

  <div class="g-grid js-search l-padded-v-bottom-5">
    <section class="l-block-3 map-filter-container g-vertical-group g-cell-1-1 g-cell-lg-3-12">
      <div class="js-sticky-helper show-large">
      </div>


      <div class="js-sticky-wrapper">

        <div class="map-container js-map-container g-cell g-cell-1-1" id="city-map">
          
        </div>

        <div class="js-filter-container">
          <!-- KEEP THIS FILE IN SYNC WITH templates/search/search_discovery_filters.html -->
          <div class="js-accordion show-large">

          </div>

<div id='cssmenu'>
<ul>
   <li><a href='#'><span class="spanCategorydown">CATEGORY</span></a>
      <ul @if($category != 'all') style="display:block" @endif>
      	<li @if($category == 'all') class="newStyle" @endif><a href='#' onclick="filter('category','all')"><span>All Categories</span></a></li>
      	@foreach($cats as $cat)

      		<li @if($category == $cat->id) class="newStyle" @endif><a href='#' onclick="filter('category',{{$cat->id}})"><span>{{$cat->name}}</span></a></li>
      	@endforeach
      </ul> 


   </li>
   <li><a href='#'><span class="spanCategorydown">EVENT TYPE</span></a>
      <ul @if($event_type != 'all') style="display:block" @endif>
      	<li @if($event_type == 'all') class="newStyle" @endif><a href='#' onclick="filter('event_type','all')"><span>All Types</span></a></li>

      	@foreach($types as $type)
         	<li @if($event_type == $type->id) class="newStyle" @endif><a href='#' onclick="filter('event_type',{{$type->id}})"><span>{{$type->name}}</span></a></li>
        @endforeach 	
      </ul>
   </li>
   <li><a href='#'><span class="spanCategorydown">DATE</span></a>
      <ul @if($date != 'all') style="display:block" @endif>
      	<li  @if($date == 'all') class="newStyle" @endif ><a href='#' onclick="filter('date','all')"><span>All Dates</span></a></li>
         <li @if($date == 'today') class="newStyle" @endif ><a href='#' onclick="filter('date','today')"><span>Today</span></a></li>
         <li @if($date == 'tomorrow') class="newStyle" @endif ><a href='#' onclick="filter('date','tomorrow')"><span>Tomorrow</span></a></li>
         <li @if($date == 'week') class="newStyle" @endif ><a href='#' onclick="filter('date','week')"><span>This Week</span></a></li>
         <li @if($date == 'month') class="newStyle" @endif><a href='#' onclick="filter('date','month')"><span>This month</span></a></li>
         <li @if($date == 'later') class="newStyle" @endif><a href='#' onclick="filter('date','later')"><span>Later</span></a></li>
      </ul>
   </li>
   <li><a href='#'><span class="spanCategorydown">PRICE</span></a>
   	<ul @if($price != 'all') style="display:block" @endif>
   		<li @if($price == 'all') class="newStyle" @endif><a href='#' onclick="filter('price','all')"><span>All Prices</span></a></li>
         <li @if($price == 'free') class="newStyle" @endif><a href='#' onclick="filter('price','free')"><span>Free</span></a></li>
         <li @if($price == 'paid') class="newStyle" @endif><a href='#' onclick="filter('price','paid')"><span>Paid</span></a></li>
         
      </ul>

   </li>
</ul>
</div>


          <div class="hide-large js-see-more">
            <div class="g-cell g-cell-1-1">
              <a class="accordion__toggle" href="#"><i class="ico-filter ico--bullet"></i> <span class="js-see-more-label">filter results</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    @if($events_count == 0) 

      <section class="l-block-3 js-search-content g-vertical-group g-cell-1-1 g-cell-lg-9-12">
              <div class="g-cell g-cell-1-1 g-cell-md-5-9 l-align-center-sm l-padded-v-4 ">
                  <h1 class="search-header text-heading-primary js-title-container">
                      Sorry, no  events found. Try another search or adjust your filters.
                  </h1>
              </div> 
       </section>
               
       @else

    <section class="l-block-3 js-search-content g-vertical-group g-cell-1-1 g-cell-lg-9-12">
      <div class="js-top-match-container l-block-stack g-cell g-cell-9-9">
      </div>


      <div class="g-cell g-cell-1-1 g-cell-md-5-9 l-align-center-sm">
        <h1 class="search-header text-heading-primary js-title-container">{{$city}} Events</h1>


        <div class="js-filters-selected-container">
          <noscript></noscript>

          <div class="search-tag l-padded-v-1">
          </div>


          <div class="search-tag l-padded-v-1">
          </div>


          <div class="search-tag l-padded-v-1">
          </div>


          <div class="search-tag l-padded-v-1">
          </div>
        </div>
      </div>


      <div class="g-cell g-cell-9-9">
        <div class="js-event-list-container l-block-stack" id="eventDesList">
          


          @foreach($events as $event)

          <a href="{{ URL::to('events/eventdetails/'.$event->id) }}">

          <div class="l-block-2" style="position:relative;">
          	<div  style="width: 100%; height: 100%; position:absolute;z-index: 999;"></div>
            <div class="js-search-result-click-action event-card l-media clrfix">
            <div class="img-110 img-md-150 event-card__image">
              <div class="event-card__image-display">
                @if($event->image_url != null)
                  <img alt="$event->name" class=" eventimages js-d-retina" data-xd-wired="retina" src="{{URL::to('uploads/event_logos/' .$event->image_url) }}">
                @else
                  <img alt="$event->name" class="eventimages js-d-retina" data-xd-wired="retina" src="{{URL::to('uploads/event_logos/default_event.jpg') }}">
                @endif
              </div>
            </div>


            <div class="event-card__description l-gutter-left-2 l-gutter-right-2">
              <h3 class="omnes text-body-large event-card__header l-block-3">{{$event->name}}</h3>


             <!--  <p class="event-card__organizer text-body--faint text--truncated l-block-1">
                <span class="event-card__format hide-small">{{$event->type}}</span> 
                @if($event->organizer['profile'] == 1)
                <span class="hide-small event-card__organizer">by {{$event->organizer['name']}}</span>
                @endif
              </p> -->


              <ul class="bullet-list-ico l-block-1">
                <li><i class="ico-calendar ico--color-understated"></i> <span class="event-card__details text--truncated">{{$event->d_start_date}}, {{$event->start_time}}</span></li>


                <li><i class="ico-location ico--color-understated"></i> <span class="event-card__details text--truncated">{{$event->venue}}</span></li>
              </ul>
            </div></div>
          </div>
        </a>

          @endforeach

          {{$events->links()}}
        </div>


       
      </div>
    </section>
    @endif
  </div>

  @stop

  @section('js')

 <script type="text/javascript">
$('#cssmenu > ul > li > a').click(function() {

  var checkElement = $(this).next();

  $('#cssmenu li').removeClass('active');
  $(this).closest('li').addClass('active'); 

  if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
    $(this).closest('li').removeClass('active');
    checkElement.slideUp('normal');
  }
  if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
    $('#cssmenu ul ul:visible').slideUp('normal');
    checkElement.slideDown('normal');
  }

  if($(this).closest('li').find('ul').children().length == 0) {
    return true;
  } else {
    return false; 
  }

});


$(function(){ 

	var mapOptions = {
        center: { lat: {{$clat}}, lng: {{$clng}}},
        zoom: 10
    };
     
    var map = new google.maps.Map(document.getElementById('city-map'),mapOptions);


    @foreach($latlng as $l)

	var marker = new google.maps.Marker({
	    position:  new google.maps.LatLng({{$l->lat}},{{$l->lng}}),
	    map: map,
	    title:"{{$l->title}}"
	});


	@endforeach

})

$('#cssmenu > ul > li > ul> li').click(function(){
        $('#cssmenu > ul > li > ul> li').removeClass('newStyle');
$(this).addClass('newStyle');

    });

 </script>

 <script type="text/javascript">
 function filter(type,value1) 
 {
    var params= '';
    var found= false;

    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if(sParameterName[0] != "" && sParameterName[0] != 'page') {
          if (sParameterName[0] == type) 
        {
          if(value1 != 'all') {
            params = params + '&' + type+'='+value1;
          }
            
            found = true;
        } else {
          params = params + '&' + sParameterName[0]+'='+sParameterName[1];
        }
        }
        
    }
    if(found == false && value1 != 'all') {
      params = params + '&' + type+'='+value1;
    }


    window.location.href = "{{URL::to('events/eventdirectory?')}}"+params;
 } 



</script>
  

  @stop

