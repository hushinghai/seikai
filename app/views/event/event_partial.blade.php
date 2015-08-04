 @if($saved_events_count == 0 && $events_count == 0) 

<section class="l-block-3 js-search-content g-vertical-group g-cell-1-1 g-cell-lg-9-12">
        <div class="g-cell g-cell-1-1 g-cell-md-5-9 l-align-center-sm l-padded-v-4 ">
            <h1 class="search-header text-heading-primary js-title-container">
                Sorry, no  events found. Try another search or adjust your filters.
            </h1>
        </div> 
 </section>
         
 @else

 @if($saved_events)
 <section class="js-module-container">
        <div class="g-cell g-cell-1-1 l-block-4">
          <h2 class="text-heading-primary">Saved Events</h2>
        </div>


        
          <div class="g-group js-event-cards event-cards" id="events">

          
            @foreach($saved_events as $event)

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
              </a>
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
                       <a class="saved" data-bookmarked="false" data-eid="{{$event->id}}" id="saveEvent" onclick="#"><i class="ico-bookmark ico--largeSaved"></i> <span class=
                      "bookmark__tip">Saved</span></a>

                  </section>
                </div>
              </div>
            </div>
          </div>

           @endforeach    

          <div class="g-cell g-cell-1-1 text--centered js-see-more-events-btn">
            <div class="text-body-large">
              <a class="js-search-click-action btn btn--secondary" data-source="homePage:moreResultsLink" href="{{URL::to('user/mysavedevents')}}" >See More</a>
            </div>
          </div>

          </div>
      </section>
@endif







 <section class="js-module-container">
        <div class="g-cell g-cell-1-1 l-block-4">
          <h2 class="text-heading-primary">Popular Events</h2>
        </div>


        
          <div class="g-group js-event-cards event-cards">

          @if($events)
            @foreach($events as $event)

          <div class="g-cell g-cell-1-1 g-cell-md-1-2 g-cell-lg-1-3 l-padded-v-bottom-3">
            <div class="event-card event-card--poster js-event-link l-block-2 js-d-poster" data-type="popular">
              <div class="event-card--poster__header l-padded-h-2">
                @if($event->image_url != null)
                <div class="event-card__image img-90"><img alt="event logo" class="js-poster-image js-d-retina" data-d-retina-src="{{URL::to('uploads/event_logos/' .$event->image_url) }}" src="{{URL::to('uploads/event_logos/' .$event->image_url) }}">
                </div>
                @else 
                <div class="event-card__image img-90"><img alt="event logo" class="js-poster-image js-d-retina" src="{{URL::to('/uploads/event_logos/default_event.jpg')}}">
                </div>
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


                <ul class="l-block-2 bullet-list-ico">
                  <li><i class="ico-calendar ico--color-understated"></i><span class="text-body--faint text--truncated">{{$event->d_start_date}}, {{$event->start_time}}</span>
                  </li>


                  <li class="l-block-1"><i class="ico-location ico--color-understated"></i>
                  </li><span class="text-body--faint text--truncated">{{$event->venue}}</span>
                  </li>
                </ul>
   
                           
              </div>
              


              <div class="event-card__footer l-padded-v-3 clrfix">
                <div class="l-padded-h-2">
                  <section class="left">
                    @if(Auth::user())

                      @if(!$event->user_bookmarked)
                      <a class="bookmark save_event" data-bookmarked="false" data-eid="{{$event->id}}" id="saveEvent"><i class="ico-bookmark ico--large"></i> <span class=
                      "bookmark__tip">Save</span></a>
                      @else
                       <a class="saved" data-bookmarked="false" data-eid="{{$event->id}}" id="saveEvent" onclick="#"><i class="ico-bookmark ico--largeSaved"></i> <span class=
                      "bookmark__tip">Saved</span></a>

                      @endif
                    @else
                     <a class="bookmark" data-bookmarked="false" data-eid="{{$event->id}}" id="saveEvent" onclick="saveevent()"><i class="ico-bookmark ico--large"></i> <span class=
                    "bookmark__tip">Save</span></a>
                    @endif
                  </section>
                </div>
              </div>
            
            </div>
          </div>

          @endforeach          




          <div class="g-cell g-cell-1-1 text--centered js-see-more-events-btn">
            <div class="text-body-large">
              <a class="js-search-click-action btn btn--secondary" data-source="homePage:moreResultsLink" href="#" onclick="event_dir('&page=1')">See More</a>
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
 @endif     
