
@extends('pageshell')

@section('head')
<style>
.pagination li {
  display: inline;
margin: 9px;
text-align: center;
float: initial;
font-size: 20px;
}

.pagination{
  margin : 15px !important;
    text-align: center;
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

 #eventSaved
  {
    background-color:white;
  }


 </style>
</style>
@stop

@section('content')
 <div class="global-sub-header l-padded-v-4">
    <div class="g-group">
            <div class="g-cell g-cell-12-12 g-cell-md-6-12 g-cell-lg-6-12">
                <h1 class="text-heading-primary">My Saved Events</h1>
            </div>
    </div>
</div>

    <section class="g-grid omnes l-padded-v-bottom-5">
     
     <div id="events"> 
 <section class="js-module-container">
     <div class="g-group js-event-cards event-cards" id="events">

            @foreach($events as $event)

            <div class="g-cell g-cell-1-1 g-cell-md-1-2 g-cell-lg-1-3 l-padded-v-bottom-3">
            <div class="event-card event-card--poster js-event-link l-block-2 js-d-poster" data-type="popular">
              <div class="event-card--poster__header l-padded-h-2">
               
                @if($event->image_url != null)
                <div class="event-card__image img-90"> <a class="event-card__description--title" href="{{ URL::to('events/eventdetails/'.$event->id)}}"><img alt="event logo" class="js-poster-image js-d-retina" data-d-retina-src="{{URL::to('uploads/event_logos/' .$event->image_url) }}" src="{{URL::to('uploads/event_logos/' .$event->image_url) }}">
                </a></div>
                @else 
                <div class="event-card__image img-90"> <a class="event-card__description--title" href="{{ URL::to('events/eventdetails/'.$event->id)}}"><img alt="event logo" class="js-poster-image js-d-retina" src="{{URL::to('/uploads/event_logos/default_event.jpg')}}">
                </a></div>
                @endif
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
                <h3 class="text-body-large"><a class="event-card__description--title" href="{{ URL::to('events/eventdetails/'.$event->id)}}"><span class=
                "js-xd-preferred-link l-block-3 text--truncated-two-line">{{$event->name}}</span></a>
                </h3>


                <ul class="bullet-list-ico l-block-2">
                  <li><i class="ico-calendar ico--color-understated"></i><span class="text-body--faint text--truncated">{{$event->d_start_date}}, {{$event->start_time}}</span>
                  </li>


                  <li class="l-block-1"><i class="ico-location ico--color-understated"></i><span class="text-body--faint text--truncated">{{$event->venue}}</span>
                  </li>
                </ul>
              </div>


              <div class="event-card__footer l-padded-v-3 clrfix">
                <div class="l-padded-h-2">
                  <section class="left">
                       <a class="saved" data-bookmarked="false" data-eid="{{$event->id}}" id="saveEvent"><i class="ico-bookmark ico--largeSaved"></i> <span class=
                      "bookmark__tip">Saved</span></a>

                  </section>
                </div>
              </div>
            </div>
          </div>

           @endforeach 
           
           {{$events->links()}}

          </div>
      </section>
</div>
      </section>

@stop



@section('js')

@stop

