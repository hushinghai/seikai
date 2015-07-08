
@extends('pageshell')

@section('head')
<style>
.no-events {
  font-size: 16px;
padding-top: 40px;
padding-bottom: 40px;
padding-left: 10px;
margin-bottom: 200px;
}

.event-card__description {
width: 90%;
background-color: white;
margin: 6px auto;
margin-left:9%;
}

</style>
@stop

@section('content')
 <div class="global-sub-header l-padded-v-4">
    <div class="g-group">
            <div class="g-cell g-cell-12-12 g-cell-md-6-12 g-cell-lg-6-12">
                <h1 class="text-heading-primary">My Events</h1>
            </div>
    </div>
</div>

 
 <div class="g-cell g-cell-12-12 g-cell--no-gutters l-align-center-sm l-block-2">
                        <section class="hide-small">
                            
                            <div id="tab-container">
                              <ul class='etabs'>
    <li class='tab'><a href="#tab-live">LIVE({{$upcoming_count}})</a></li>
    <li class='tab'><a href="#tab-past">PAST({{$past_count}})</a></li>
    
  </ul>
  <div id="tab-live">
    <div id="eventList" class="js-event-list-block">
    
    <div class="g-cell g-cell-12-12 js-event-list-container">
      <div class="js-event-list-loading loading-spinner is-hidden"></div>
      @if($upcoming_count == 0)

                <div class="event-card__description">
                  <div class="event-card no-events">
                    Sorry there are no upcoming events!
                  </div>  
                </div>
              @else


      @foreach($upcoming as $event)
      <div class="event-card__description" style="margin-bottom:20px">

      		
            <div class="g-group">
                <div class="g-cell g-cell-12-12 g-cell-md-9-12 l-block-2 l-padded-h-2">
                    <h3 class="text-body-large event-card__header">
                        <a href="{{URL::to('events/eventdetails/'.$event->id)}}" style="text-decoration: none;" >{{$event->title}} </a>
                       
                    </h3>
                    <div class="cal-header" >
                        <i class="ico-calendar bullet-list-ico-new ico--color-understated"></i>

                        <span class="text-body--faint text--truncated">
                                    {{$event->d_start_date}} {{$event->startTime}}
                        </span>
                    
                    </div>
                    <ul class="l-block-2 show-large action-menu grouped-ico">
                        
                         <li><a href="{{URL::to('user/editevent/'.$event->id)}}">
                            <i class="ico-write ico--small ico--color-understated"></i>
                        </a></li>


                        
                       <li class="item-text"><a href="{{URL::to('user/editevent/'.$event->id)}}" class="text-body-small text-body--faint">Edit</a></li>
                       

                       <li><a href="{{URL::to('events/eventdetails/'.$event->id)}}">
                            <i class="ico-settings ico--small ico--color-understated"></i></i>
                        </a></li>

                        
                        <li><a href="{{URL::to('events/eventdetails/'.$event->id)}}" class="text-body-small text-body--faint">View</a></li>

                    </ul>
                </div>
                
                <div class="sales-block g-cell g-cell-no-gutters g-cell-12-12 g-cell-md-3-12 l-padded-v-2 l-padded-h-2">
                
                <div class="tickets-graph-block">
                        <div class="progress-bar hide-small">
                            <div class="progress-bar__progress" style="width: {{$event->tickets_sold}}%"></div>
                            <div class="progress-bar__total"></div>
                        </div>
                        <div class="l-align-right-md l-align-right-lg">
                        	@if($event->tickets_sold == $event->total_tickets)
                        	<span class="text-body-medium ">sold </span>
                           
                            @else
                             <span class="text-body-medium text-color--green">{{$event->tickets_sold}} </span>
                            <span class="text-body-medium text-body--faint">/ {{$event->total_tickets}}</span>
                            @endif
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="hide-small l-padded-v-bottom-2"></div>
        </div>
      @endforeach
      @endif
      
    </div>
    
  </div>
  </div>
  <div id="tab-past">
   <div id="eventList" class="js-event-list-block">
    
    <div class="g-cell g-cell-12-12 js-event-list-container">
      <div class="js-event-list-loading loading-spinner is-hidden"></div>
      @if($past_count == 0)

                <div class="event-card__description">
                  <div class="event-card no-events">
                    Sorry there are no past events!
                  </div>  
                </div>
              @else

      @foreach($past as $event)
      <div class="event-card__description" style="margin-bottom:20px">
      		
            <div class="g-group">
                <div class="g-cell g-cell-12-12 g-cell-md-9-12 l-block-2 l-padded-h-2">
                    <h3 class="text-body-large event-card__header">
                        <a href="{{URL::to('events/eventdetails/'.$event->id)}}" style="text-decoration: none;" >{{$event->title}} </a>
                       
                    </h3>
                    <div>
                    
                        <span class="text-body--faint text--truncated">
                                     {{$event->d_start_date}} {{$event->startTime}}
                        </span>
                    
                    </div>
                    <ul class="l-block-2 show-large action-menu grouped-ico">
                        
                        <!--<li><a href="#">
                            <i class="ico-write ico--small ico--color-understated"></i>
                        </a></li>
                        
                        <li class="item-text"><a href="{{URL::to('user/editevent')}}" class="text-body-small text-body--faint">Edit</a></li>-->
                        <li><a href="/edit?eid=14832176439&amp;preview=1#preview">
                            <i class="ico-view-event-page ico--small ico--color-understated"></i>
                        </a></li>
                        <li><a href="{{URL::to('events/eventdetails/'.$event->id)}}" class="text-body-small text-body--faint">View</a></li>
                    </ul>
                </div>
                
                <div class="sales-block g-cell g-cell-no-gutters g-cell-12-12 g-cell-md-3-12 l-padded-v-2 l-padded-h-2">
                
                <div class="tickets-graph-block">
                        <div class="progress-bar hide-small">
                            <div class="progress-bar__progress" style="width: {{$event->tickets_sold}}%"></div>
                            <div class="progress-bar__total"></div>
                        </div>
                        <div class="l-align-right-md l-align-right-lg">
                        	@if($event->tickets_sold == $event->total_tickets)
                        	<span class="text-body-medium ">sold </span>
                           
                            @else
                             <span class="text-body-medium text-color--green">{{$event->tickets_sold}} </span>
                            <span class="text-body-medium text-body--faint">/ {{$event->total_tickets}}</span>
                            @endif
                        </div>
                    </div>
                    
                </div>
            </div>
         <div class="hide-small l-padded-v-bottom-2"></div>
        </div>
            @endforeach
      @endif
    </div>
    
  </div>v
  </div>

  </div>

</section>
                       
                    
  

  </div>

@stop



@section('js')

  <script src="{{ URL::asset('web/js/jquery.hashchange.min.js')}}"  type="text/javascript"></script>
  <script src="{{ URL::asset('web/js/jquery.easytabs.min.js')}}" type="text/javascript"></script> 
  <script>
     $('#tab-container').easytabs(); 
  </script>

@stop

