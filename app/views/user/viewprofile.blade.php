@extends('pageshell')


@section('head')

 <style>
.organizer-header {
            background-color: #5b5f68;
        }

        .organizer-header, .organizer-header a, .organizer-header .g-cell {
            color: #ffffff;
        }

        h1 {
          font-size: 36px;
font-weight: 300;
line-height: 1.2;
        }
        #eventList {
margin-bottom: 250px;
}
.tab a {
font-size: 14px;
}

.no-events {
  font-size: 16px;
padding-top: 40px;
padding-bottom: 40px;
padding-left: 10px;
}

.event-card__description {
width: 90%;
background-color: white;
margin: 6px auto;
margin-left:9%;
}


#viewProfile > div.g-group.js-logo-containter.logo-containter > div > img{width:100%;}

  </style>

@stop


@section('content')



 <section class="l-align-center organizer-header">
    <div class="g-grid" id="viewProfile">
      <div class="g-group js-logo-containter logo-containter">
        <div class="g-cell g-cell-4-12 g-cell-md-2-12 g-cell-lg-2-12 l-padded-v-3">
          @if($organizer != null && $organizer->image_url != null)
            <img
              src="{{ URL::to('uploads/profile_images/' . $organizer->image_url) }}" />
          @endif                    
        </div>
      </div>


      <div class="g-group">
        <div class="g-cell g-cell-12-12">
          <div class="l-padded-v-1">
            <h1>
            
              @if($organizer != null && $organizer->name != "")
            
                {{$organizer->name}}
              @else
                Anonymous organizer
              @endif
                
            </h1>
          </div>

          @if($organizer != null)
            <div class="l-padded-v-1 organizer-website">
              <a href="{{$organizer->website}}" rel="nofollow" target="_blank">{{$organizer->website}}</a>
            </div>
          @endif  
        </div>
      </div>

      @if($organizer != null)
      <div class="g-group">
        <div class="g-cell g-cell-12-12 g-cell-lg-8-12 l-padded-v-3">
          <div class="js-organizer-description">
            <div class="js-long-text" data-automation="organizer-long-description">
              {{$organizer->description}}
              </p>
            </div>


            <div class="l-block-2">
              <a class="js-see-more is-hidden" href="#">See More</a> <a class="js-see-less is-hidden" href="#">See Less</a>
            </div>
          </div>
        </div>
      </div>
      @endif
    </div>
  </section>

<div class="">
<div class="g-group l-block-3">
    <div class=" js-d-tabs g-cell g-cell-12-12 g-cell-lg-8-12 " style="margin-left:11%;width:55.66667%">


    <section class="hide-small">
      <div id="tab-container">
        <ul class='etabs'>
          <li class='tab'>
            <a href="#Live">LIVE EVENTS({{$live_count}})</a>
          </li>


          <li class='tab'>
            <a href="#Past">PAST EVENTS({{$past_count}})</a>
          </li>
        </ul>


        <div id="Live">
          <div class="js-event-list-block" id="eventList">
            <div class="g-cell g-cell-12-12 js-event-list-container">
              <div class="js-event-list-loading loading-spinner is-hidden">
              </div>


              @if($live_count == 0)

                <div class="event-card__description">
                  <div class="event-card no-events">
                    Sorry there are no upcoming events!
                  </div>  
                </div>
              @else

                @foreach($live_events as $event)

                   <div class="event-card__description">
                      <a href="{{ URL::to('events/eventdetails/'.$event->id)}}" class="event-card l-media clrfix">
                        <div class="img-110 img-md-150 event-card__image">
                            <div class="event-card__image-display">
                               @if($event->image_url != null)
                                  <img alt="$event->name" class="eventimages js-d-retina" data-xd-wired="retina" src="{{URL::to('uploads/event_logos/' .$event->image_url) }}">
                                @else
                                  <img alt="$event->name" class="eventimages js-d-retina" data-xd-wired="retina" src="{{URL::to('uploads/event_logos/default_event.jpg') }}">
                                @endif
                            </div>
                        </div>

                        <div class=" l-gutter-left-2 l-gutter-right-2" style="margin-top:0px">
                            <h3 class="text-medium event-card__header text--truncated l-block-3">
                                {{$event->title}}
                            </h3>
                            <p class="event-card__organizer text-body--faint text--truncated l-block-1">
                                <span class="event-card__format hide-small">
                                    {{$event->type}} {{$event->category}}
                                </span>
                            </p>
                            <ul class="bullet-list-ico l-block-1">
                                <li>
                                    <i class="ico-calendar ico--color-understated"></i>
                                    <span class="event-card__details text--truncated">
                                        {{$event->d_start_date}} at {{$event->startTime}} - 
                                        @if($event->startDate != $event->endDate)
                                          {{$event->d_end_date}} at
                                        @endif
                                        {{$event->endTime}}
                                    </span>
                                </li>
                                <li>
                                    <i class="ico-location ico--color-understated"></i>
                                    <span class="event-card__details text--truncated">
                                        {{$event->location}}
                                    </span>
                                </li>
                            </ul>
                        </div>
                      </a>
                    </div>
                @endforeach
              @endif

             
            </div>
          </div>
        </div>


        <div id="Past">
          <div class="js-event-list-block" id="eventList">
            <div class="g-cell g-cell-12-12 js-event-list-container">
              <div class="js-event-list-loading loading-spinner is-hidden">
              </div>

              @if($past_count == 0)

                <div class="event-card__description">
                  <div class="event-card no-events">
                    Sorry there are no past events!
                  </div>  
                </div>
              @else

                @foreach($past_events as $event)

                   <div class="event-card__description">
                      <a href="{{ URL::to('events/eventdetails/'.$event->id)}}" class="event-card l-media clrfix">
                        <div class="img-110 img-md-150 event-card__image">
                            <div class="event-card__image-display">
                                @if($event->image_url != null)
                                  <img alt="$event->name" class="js-d-retina eventimages" data-xd-wired="retina" src="{{URL::to('uploads/event_logos/' .$event->image_url) }}">
                                @else
                                  <img alt="$event->name" class="js-d-retina eventimages" data-xd-wired="retina" src="{{URL::to('uploads/event_logos/default_event.jpg') }}">
                                @endif
                            </div>
                        </div>

                        <div class=" l-gutter-left-2 l-gutter-right-2" style="margin-top:0px">
                            <h3 class="text-medium event-card__header text--truncated l-block-3">
                                {{$event->title}}
                            </h3>
                           <p class="event-card__organizer text-body--faint text--truncated l-block-1">
                                <span class="event-card__format hide-small">
                                    {{$event->type}} {{$event->category}}
                                </span>
                            </p>
                            <ul class="bullet-list-ico l-block-1">
                                <li>
                                    <i class="ico-calendar ico--color-understated"></i>
                                    <span class="event-card__details text--truncated">
                                        {{$event->d_start_date}} at {{$event->startTime}} - 
                                        @if($event->startDate != $event->endDate)
                                          {{$event->d_end_date}} at
                                        @endif
                                        {{$event->endTime}}
                                    </span>
                                </li>
                                <li>
                                    <i class="ico-location ico--color-understated"></i>
                                    <span class="event-card__details text--truncated">
                                        {{$event->location}}
                                    </span>
                                </li>
                            </ul>
                        </div>
                      </a>
                    </div>
                @endforeach



              @endif

                <div class="hide-small l-padded-v-bottom-2">
                </div>
              </div>
            </div>
          </div>
          
        </div>
      
    </section>

  </div>
    <div class="g-cell g-cell-12-12 g-cell-lg-4-12">
        <aside class="js-organizer-social organizer-social column">
    
    @if($organizer != null and $organizer->facebook_link !=NULL)
    <div class="fb-like-box" data-href="http://www.facebook.com/{{$organizer->facebook_link}}" data-colorscheme="light" data-show-faces="true" data-header="true" data-stream="true" data-show-border="true"></div>
    @endif

        

</aside>

<div class="clear"></div>

    </div>

<div id="fb-root"></div>

    </div>

</div>
</div>

@stop



@section('js')
  <script src="{{ URL::asset('web/js/jquery.hashchange.min.js')}}"  type="text/javascript"></script>
  <script src="{{ URL::asset('web/js/jquery.easytabs.min.js')}}" type="text/javascript"></script> 
  <script>
     $('#tab-container').easytabs(); 
  </script>

<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&appId=1559634080915755&version=v2.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>

@stop