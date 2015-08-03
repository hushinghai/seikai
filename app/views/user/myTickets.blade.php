@extends('pageshell')

@section('content')


<div id="myTicketDiv">
    <div class="clrfix" id="content">
      <section class="hidden" id="app_download_cta_template">
        <div class="cta_logo">
        </div>


        <div class="cta_content">
          <h2>Find great events and take your tickets with you.</h2>


          <p><span class="cta_download">VIEW</span>
          </p>
        </div>


        <div class="cta_close">
        </div>
      </section>


      <div class="g-grid">
        <div class="g-group l-padded-v-bottom-3">
          <div class="g-vertical-group g-cell-12-12 g-cell-lg-9-12 l-block-3">
            <section class="g-cell g-cell-12-12">
              <div class="js-order-list-container js-d-tabs" data-xd-wired="tabs">
                <ul class="tabs-header-list">
                  <li class="js-xd-tabs-header is-active tabs-header">
                    <a href="#">Current orders <span class="counter">{{$upcoming_count}}</span></a>
                  </li>
                </ul>


                <article class="is-active js-xd-tabs-content tabs-content js-current-orders-container">

                  <section>
                    @if($upcoming_count == 0)
                  <!--Based on the counter show either of the div  -->
                    <div class="l-padded-v-bottom-5 l-block-4 text-body-large has-centered-inline-content">
                      

                      <p class="text-heading-secondary l-block-2">You have no upcoming events.</p>


                      <div class="l-block-2">
                        <a class="btn" href="#" onclick="event_dir()">Discover Events</a>
                      </div>
                    </div>
                    @else

                    @foreach($upcoming as $event)
                    <div class="l-block-2 js-order-card order-card g-group ">
                      <section  id="ticketDetails"  class="g-cell g-cell-12-12 g-cell-md-8-12 g-cell-lg-9-12 g-cell--no-gutters order-card__info">
                          <div class="order-card__image img-60">
                              <div class="">
                                  @if($event->image_url)
                                  <img class="ticketimages" src="{{URL::to('uploads/event_logos/' .$event->image_url) }}" alt="{{$event->title}}">
                                  @else
                                     <img class="ticketimages"  src="{{URL::to('uploads/event_logos/default_event.jpg') }}" alt="{{$event->title}}">
                                  @endif
                              </div>
                          </div>
                          <div class="order-card__description l-gutter-left-2 l-gutter-right-2">
                              <h3 class="text-body-large order-card__header text--truncated l-block-4">
                                  <a href="{{URL::to('events/eventdetails/'.$event->id)}}">{{$event->title}}</a>
                              </h3>
                              <p class="text-body--faint text--truncated l-block-1">
                                <i class="ico-calendar ico--color-understated"></i>
                                  {{$event->d_start_date}} @ {{$event->startTime}}
                              </p>
                              
                          </div>
                      </section>




                        <section class="g-cell g-cell-12-12 g-cell-md-4-12 g-cell-lg-3-12 order-card__action hide-small" style="padding-top:4%">

                            @foreach($event->tickets as $name=>$quantity)
                            <div class="l-block-2">
                                {{$name}}  : {{$quantity }}
                            </div>
                            @endforeach
                            <div class="l-block-2">
                                
                              Total : {{$event->transaction['amount']}} USD

                            </div>
                            <div class="l-block-2">
                                

                             <button type="button"><a href="{{URL::to('user/ticketcancel/' . $event->transaction['id'])}}" style="color: #050606">Cancel Ticket</a></button>

                            </div>

                            
                        </section>
                    </div>
                    @endforeach
                    @endif
                  </section>
                </article>
              </div>
            </section>
          </div>


          <div class="g-vertical-group g-cell-12-12 g-cell-lg-3-12 l-block-3">
          

            <div class="l-padded-h-1" style="margin-bottom:250px">
              <div class="my-tickets-org-cta">
                <section class="g-cell g-cell-12-12 g-cell-md-8-12 g-cell-lg-12-12">
                  <i class="ico-tickets ico--color-brand-teal"></i>

                  <div class="cta-txt">
                    <h3>Create your own event!</h3>


                    <p>Set up an awesome event in a few simple steps.</p>
                  </div>
                </section>


                <section class="g-cell g-cell-12-12 g-cell-md-4-12 g-cell-lg-12-12">
                  <a class="btn btn--secondary js-mx-trackUserAction" data-mixpanel-element="Test" href="{{URL::to('user/createevent')}}">Get Started</a>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div> 




  @stop