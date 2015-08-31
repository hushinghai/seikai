@extends('pageshell')

@section('head')
<link  href="{{ URL::asset('web/Content/eventDetails.css') }}"   rel="stylesheet" type="text/css">
<link  rel="stylesheet"  href="{{ URL::asset('web/Content/eventDetails2.css') }}" type="text/css">

<style>
#signInPopUp
  {
     background-color:white;
  }

#eventSaved
  {
    background-color:white;
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

.saved {
  color: blue ;
  font-size: 14px;
position: relative;
bottom: 4px
}
 .ico--largeSaved {
font-size: 32px;
line-height: 1;
baackground-color: blue;
color: blue;
}
#organizer_image {
  max-height: 150px;
max-width: 150px;
}

.notification-ended {
  margin-top: 0;
width: 100%;
padding: 3px 0 6px;
text-align: center;
background: #30a1a6;
color: #fff;
margin-bottom: 10px;
}

</style>

<style>
#OrderReg
{
padding: 23px !important;
background-color: white;
}


#event_header > h2:nth-child(2) > a:link
{
 text-decoration: none;
}

#event_header > h2:nth-child(2) > a:active
{

text-decoration: underline;
}

#event_header > h2:nth-child(2) > a:hover
  color: #0000FF;
text-decoration: underline;
}

.summary
{
font-size: 26px;
line-height: 28px;
font-weight: bold;
margin: 0;
padding-bottom: 5px;
}


#hostedByDiv
{
float: right;
margin-top: 5%;
-webkit-margin-end: 6%;
}

#track_event_container {
    padding: 18px 0;
    margin-bottom: 26px;
    text-align: center;
    position:relative;
}
#track_event {
    display: inline-block;
    height: auto;
    line-

height: 27px;
    padding: 9px 9px 9px 54px;
    *padding: 9px;
    min-width: 180px;
    position: relative;
    font-size: 13px;
}
.lang-en #track_event {
    font-size: 20px;
}
#track_event:before

 {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 45px;
    height: 100%;
    background: transparent url(../Images/icons/bookmark-default.png) no-repeat center 

center;
    border-right: 1px solid #b5b5b5;
}
#track_event.saved:before {
    background-image: url(../images/icons/bookmark-on.png);
}
#track_event_container .view_list_link

 {
    display: block;
    margin: 0 0 -6px 0;
}
#track_event_container .count_subview {
    color: #404040;
    margin-bottom: 2px;
    margin-top: 12px;
}
#track_event_container 

.count_subview, #track_event_container .summary_subview {
    padding: 0 20px;
}
#track_event_container .count_subview.hidden+.summary_subview {
    margin-

top: 12px;
}

body
{
color: #000;
font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
text-align: left;
vertical-align: top;
background-color: #fff;
margin: 0;
padding: 0;
}

.summary
{
font-size: 26px;
line-height: 28px;
font-weight: bold;
margin: 0;
padding-bottom: 5px;

}

#event_header h2 {
font-size: 17px;
text-align: left;
line-height: 21px;
color: ;
margin: 0;
padding: 0;
font-weight: 300;
}

.event_title_image {
float: right;
padding: 10px 0 0 10px;
margin-right: -20px;
_margin-right: 0;
margin-bottom: 10px;
}

#subheader {
border-bottom: 1px dotted;
margin-bottom: 18px;
padding-bottom: 14px;
}

#subheader_info_cell
{
padding: 3% 0px;
}

.common_box {
border: 1px #d5d5d3 solid;
-webkit-border-radius: 5px;
-moz-border-radius: 5px;
padding: 18px;
}

.panel_head2 {
width: auto;
font-size: 16px;
line-height: 22px;
font-weight: 500;
background-color: #efefef;
color: #005580;
border-color: #d5d5d3;
border-width: 1px 1px 0;
padding: 6px 11px 7px 14px;
-moz-border-radius: 5px 5px 0 0;
-webkit-border-radius: 5px 5px 0 0;
border-radius: 5px 5px 0 0;
}

.panel_head2 h3 {
font-size: 16px;
line-height: 22px;
font-weight: 500;
color: ;
padding: 0;
}

#new_organizer_module>#organizer_content {
margin: 0 14px;
}

#new_organizer_module>.button_css, #new_organizer_module>#organizer_content {
margin: 0 14px;
}

.panel_border {
border-color: #d5d5d3;
}
.panel_border {
border-color: ;
}
.panel_border {
border-color: #d5d5d3;
}

#organizer_header {
padding: 0 14px 10px;
margin-bottom: 13px;
border-bottom-width: 1px;
border-bottom-style: solid;
}

#organizer_content>.organizer_link {
margin: 10px 0;
padding-left: 27px;
}

.panel_section {
padding: 13px 14px;
border: 1px solid 
 
 #dedede;
border-bottom: 0;
background: #fff;
}

.panel_body {
width: auto;
background-color: #fff;
border-color: #d5d5d3;
border-style: solid;
border-width: 1px;
padding: 13px 14px;
word-wrap: break-word;
-webkit-border-radius: 0 0 5px 5px;
border-radius: 0 0 5px 5px;
font-size: 13px;
line-height: 1.6em;
}

p {
margin: 0;
padding: 0 0 8px;
}

#primary_cta a {
font-size: 20px;
padding: 9px 26px;
color: #fff;
background: url(https://ebmedia.eventbrite.com/s3-
 
 s3/static/images/background/glass_light-trans.png) 0 50% repeat-x #90C833;
border: 1px solid #8BAE42;
-moz-box-shadow: 0 1px 0 #B7DB81 inset, 0 -1px 0 #B7DB81 inset;
box-shadow: 0 1px 0 #B7DB81 inset, 0 -1px 0 #B7DB81 inset;
text-shadow: 0 1px #63852B;
}

#primary_cta, #primary_cta_disabled {
margin: 0px 
 
 0 20px 5px;
display: block;
}

#panel_when h2 {
font-family: Helvetica, Arial, sans-serif;
font-size: 1.0em;
line-height: normal;
font-weight: normal;
color: ;
margin: 0;
padding: 0;
text-align: left;
}

.panel_body h2 {
 font-size: 16px; 
 line-height: 1.2em; 
 font-weight: bold;

 margin: 2px 0 0; 
 padding: 0; 
}

#social_module {
    height: 14px;
    float: left;
    position: absolute;
    bottom: 10px;
}

#see_whos_going .headline {
 position: relative; 
padding: 8px 10px 8px 40px; 
 border-bottom-width: 1px; 
 border-bottom-style: solid; 
}

#see_whos_going .notice {
padding: 18px 0;
text-align: center;
}

</style>
@stop


@section('content')

 @if(Session::has('successful'))
<div class="alert alert-success">
              <button type="button" class="close" data-dismiss="alert">×</button>
              Event cancelled successfully
            </div>

 @elseif(Session::has('unsuccessful'))
<div class="alert alert-success">
              <button type="button" class="close" data-dismiss="alert">×</button>
              User do not have access to cancel event
            </div>
         
  @elseif(Session::has('noevent'))
<div class="alert alert-success">
              <button type="button" class="close" data-dismiss="alert">×</button>
              Event not present
            </div>
          @endif

  <div class="global-mask">
  </div>

  <div class="panel_628" id="registerationCompleted" style="display:none">
    <div style="background-color:white;padding:50px">
      <div style="background-color:white">You are going to Event</div>
      <br/><br/>
      You will receive a mail shortly with ticket details
      <br/><br/>
      @if(Auth::user())
      <a href="{{URL::to('user/mytickets/' . Auth::user()->id)}}" >Go to My Tickets</a>
      @endif
    </div>

  </div>


  <div class="panel_628" id="contactPopUp"  style="display:none">

    <div class="panel_body" id="contactDiv" style="padding: 15px;" data-automation="contact_div">
      <a name="loginbox"></a>
      
      <section class="g-group l-block-2">
            <div class="g-cell g-cell-12-12">
                <div id="lightbox_contact_heading" class="text-heading-primary">
                    Contact Host
                </div>
                <hr class="l-block-2" />
            </div>
        </section>


        <section id="lightbox_contact_main_form" class="g-group">

            <div class="g-cell g-cell-12-12">
                <span id="error_messages" class="responsive-form__field-error"></span>
            </div>

            <form id="contact_form" action="{{URL::to('events/contactorg')}}" method="post" name="contactForm" class="responsive-form">

                <input type="hidden" name="contact_event" value="{{$event->id}}">
                <div class="g-cell g-cell-12-12">
                    <label for="contact_name" class="responsive-form__label--primary">
                        Your Name
                    </label>
                </div>

                <div class="g-cell g-cell-12-12 g-cell-lg-12-12">
                    <input type="text" id="contact_name" name="contact_name" value="" />
                </div>

                <div class="g-cell g-cell-12-12 l-block-2">
                    <label for="contact_email" class="responsive-form__label--primary">
                        Your Email Address
                    </label>
                </div>

                <div class="g-cell g-cell-12-12 g-cell-lg-12-12">
                    <input type="text" id="contact_email" name="contact_email" disabled="true" @if(Auth::user()) value="{{Auth::user()->email}}" @endif/>
                </div>

                <div class="g-cell g-cell-12-12 l-block-2">
                    <label for="contact_message" class="responsive-form__label--primary">
                        Your Message
                    </label>
                </div>

                <div class="g-cell g-cell-12-12 g-cell-lg-12-12">
                    <textarea id="contact_message" name="contact_message" rows="7"></textarea>
                </div>

                <div class="g-cell g-cell-12-12">
                    <div id="contact_disclaimer">
                        <p class="text-body--understated">
                            Your email will only be seen by the event organizer.
                        </p>
                    </div>
                </div>

            
        </section>

        <section id="lightbox_contact_buttons_row" class="g-group l-padded-v-2">
            <div class="g-cell g-cell-12-12">
                <input id="send_msg" name="send_msg" class="btn" value="Send Message" type="button">
            </div>
        </section>
        
        </form>

      <div class="clearfloat"></div>
    </div>
  </div>




  <div class="panel_628" id="registerPopUp"  style="display:none">
    
    <div class="panel_head2">

      <div>
        <nobr><span>Registration Information</span></nobr>
      </div>

      <div class="clearfloat"></div>
    </div>

    <div class="panel_body" id="registrationDiv" style="padding: 15px;" data-automation="registration_div">
      <a name="loginbox"></a>
      
      <table cellpadding="2" cellspacing="0" border="0" width="100%" align="left">
        <tbody>
          <tr>
            <td>
              
              <div class="error" style="float: right;">* Required Field</div>
              <b style="float: left; width: 450px;"></b><br><br>

              <div class="clear"></div>
              <br>
              <!-- DISPLAY THE SURVEY QUESTIONS -->

              <table class="registrationTable" cellpadding="2" cellspacing="0" border="0" width="100%">
                <tbody>
                  <tr>
                    <td><h3>Your Information</h3></td>
                  </tr>

                  <tr>
                    <td>
                           @if(Auth::user())
                            <div id="loggedInAs" style="">
                           
                              <font style="font-size: 14px">Hi, <span id="loggedInEmail" style="font-style: italic;">{{Auth::user()->email}}.</span>&nbsp;&nbsp;&nbsp;</font>
                              <font style="font-size: 12px; font-weight: normal;">Not you? <a href="{{URL::to('logout')}}">Sign Out</a></font>
                            </div>
                          @endif
                      </td>
                  </tr>

                </tbody>
              </table>

              <form id="registrationForm" name="registrationForm" method="post" action="https://sandbox.paypal.com/cgi-bin/webscr">
                  <input type="hidden" name="submitted" value="1">
                  <input type="hidden" name="ismanual" value="">
                  <input type="hidden" name="payment_type" value="free">
                  <input type="hidden" name="crumb" value="69109f0415945c">
                  <input type="hidden" name="w" value="">
                  <input type="hidden" name="_nomo" value="">
                  <input type="hidden" name="return" id="return" value="{{URL::to('/tickets/buytickets')}}" >
                  <input type="hidden" name="rm" id="rm" value="2" >




                  <input type="hidden" name="cmd" value="_xclick">
                                                       <input type="hidden" name="business" value="{{s('paypalusername')}}">
                                                       <input type="hidden" name="currency_code" value="USD">
                                                       <input type="hidden" name="item_name" value="{{$event->title}}">
                                                       <input type="hidden" name="item_number" value="{{$event->id}}">
                                                       <input type="hidden" name="amount" id="total_cost" value="">

                <table class="registrationTable" cellpadding="2" cellspacing="0" border="0" width="100%">
                  <tbody>
                    
                    <tr>
                      <td align="right"><label for="first_name">First Name:</label></td>
                      <td><span class="error">*</span></td>
                      <td><input value="" type="text" id="first_name" name="first_name" style="width: 270px;" onblur="setField(this);" class="required"></td>
                    </tr>
                    <tr>
                      <td align="right"><label for="last_name">Last Name:</label></td>
                      <td><span class="error">*</span></td>
                      <td><input value="" type="text" id="last_name" name="last_name" style="width: 270px;" onblur="setField(this);" class="required"></td>
                    </tr>
                    <tr>
                      <td align="right"><nobr><label for="email_address">Email Address:</label></nobr></td>
                      <td><span class="error">*</span></td>
                      
                          <td><input type="text" id="email_address" name="email_address" style="width: 270px;" onblur="setField(this);" class="required"  @if(Auth::user()) value="{{Auth::user()->email}}" @endif></td>

                    </tr>

                    <tr>
                      <td align="right"><label for="address">Address:</label></td>
                      <td><span class="error">*</span></td>
                      <td><input value="" type="text" id="address" name="first_name" style="width: 270px;" onblur="setField(this);" class="required"></td>
                    </tr>


                    <tr>
                      <td align="right"><label for="contact">Contact:</label></td>
                      <td><span class="error">*</span></td>
                      <td><input value="" type="text" id="contact_no" name="first_name" style="width: 270px;" onblur="setField(this);" class="required"></td>
                    </tr>
                    
                  </tbody>
                </table>
                
                <br> <br>
                <!-- DISPLAY THE PAYMENT OPTIONS -->

                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                  <tbody>
                    <tr>
                      <td colspan="2" style="padding: 0 0 10px 230px; font-size: 11px; line-height: 14px;">
                        By clicking "Complete Registration", I acknowledge that I have read and agree with the {{s('title')}} terms of service, privacy policy, and cookie policy.
                      </td>
                    </tr>
                                              
                    <tr>
                      <td></td>
                      <td align="right">
                        <span id="primary_cta" class="button_css "><input id="completeRegisteration" type="button" style="text-decoration:none; color:#FFFFFF;background-color:#90C833;border:0px" value="Complete Registration" /></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="clearfloat"></div>
    </div>
  </div>


  <div id="contentpub">
    <div class="main">

      @if($event->pastevent =='true')
      <div class="notification-ended text-body-large">
        <i class="ico-clock"></i> This event has ended
      </div>
      @elseif($event->status == '1')
       <div class="notification-ended text-body-large">
        <i class="ico-clock"></i> This event is disabled
      </div>

      @endif
      <div class="deprecated-notification2 error_notification hidden" id="ticket_error_message_container">
        <div class="error_notification_msg">
          <span id="ticket_error_message" style="display:none;">None</span>
        </div>
      </div>

       @if(Session::has('ticket_registered'))
          <section class="g-cell g-cell-12-12 l-padded-v-bottom-3" style="padding:0px">
            <div class="l-block-2 notification notification--success">
              <i class="ico-success"></i>
              Tickets successfully purchased!
            </div>
          </section>
        @endif

        @if(Session::has('contact_organizer'))
          <section class="g-cell g-cell-12-12 l-padded-v-bottom-3" style="padding:0px">
            <div class="l-block-2 notification notification--success">
              <i class="ico-success"></i>
              Your message has been sent!
            </div>
          </section>
        @endif


      <div id="subheader">
        <table id="subheader_table">
          <tbody>
            <tr>
              <td id="subheader_info_cell" style="">
                <div id="event_header">
                  <h1><span class="summary">{{$event->title}}</span>
                  </h1>

                  @if($event->organizer['profile'] == 1)
                  <h2>
                    @if($event->organizer['disabled'] == 'false')
                    <a href="{{ URL::to('events/organizerprofile/'.$event->organizer['id'])}}" target="_blank">{{$event->organizer['name']}}</a>
                    @else
                    {{$event->organizer['name']}}
                    @endif
                  </h2>
                  @endif

                  <h2>

                    From {{$start_date}} {{$event->startTime}} to 

                    @if($event->startDate != $event->endDate) 
                      {{$end_date}} 
                    @endif  
                  
                    {{$event->endTime}}

                  </h2>


                  <div id="event_network">
                    <h2>{{$event->location['city']}}</h2>
                  </div>
                </div>
              </td>

              <td id="subheader_logo_cell">
                @if($event->image_url != null)
                    <img id="organizer_image" class="photo" src="{{URL::to('uploads/event_logos/' .$event->image_url) }}">
                @else
                    <img alt="{{$event->name}}" id="organizer_image" class="photo" src="{{URL::to('uploads/event_logos/default_event.jpg') }}">
                @endif
              </td>
            </tr>
          </tbody>
        </table>
      </div>


      <div id="col_628">
        <div class="panel_628" id="ticket_information_wrapper" style="position: relative;">
          <form action="{{ URL::to('events/buytickets')}}" id="mgform" method="post" name="mgform" onsubmit="return validateform();" style="margin: 0px;" 

target="_top">
            
            <input name="eid" type="hidden" value="{{$event->id}}">
            <input name="payment_type" type="hidden" value="free"> 

            <div class="l-block-stack">
              <div class="panel_head2 l-block-3" id="ticketInfo">
                <h3>Ticket Information</h3>
              </div>
            </div>


            <div class="panel_body" id="TicketReg">
              <table border="0" cellpadding="0" cellspacing="0" class="ticket_table" id="ticket_table" width="100%">
                <tbody>
                  <tr class="ticket_table_head">
                    <td nowrap="nowrap" width="40%">Type</td>

                    <td>Remaining</td>

                    <td>End</td>

                    <td>Price</td>

                    <td>Fees</td>

                    <td align="right" width="70">Quantity</td>
                  </tr>

                  @foreach($tickettypes as $tickettype)
                  <tr class="ticket_row">
                    <td class="ticket_type_name">

                      {{$tickettype->title}}
                      <div id="descriptionDiv32234881" style="font-size: 11px; line-height: 12px; margin: 5px 0 0 0;">
                         {{$tickettype->details}}
                      </div>
                      <input type="hidden" id="ticket_id" name="ticket_id" value="{{$tickettype->id}}">

                    </td>

                    <td id="remaining_quant_32484745_None" nowrap="nowrap">
                     {{$tickettype->seats_left}}
                    </td>

                    @if($tickettype->ended == 'true'|| $event->status == '1')
                      <td nowrap="nowrap">ENDED</td>
                      <td class="price_td" nowrap="nowrap"><input name="cost_32484745_None" type="hidden" value="0.00">{{$tickettype->dprice}}</td>

                      <td class="fee_td" nowrap="nowrap">{{$tickettype->fees}}</td>
                      <td nowrap="nowrap">N/A</td>
                    @else  
                      <td nowrap="nowrap">{{$end_date}}</td>
                      <td class="price_td" nowrap="nowrap"><input name="cost_32484745_None" type="hidden" value="0.00">{{$tickettype->dprice}}</td>

                      <td class="fee_td" nowrap="nowrap">{{$tickettype->fees}}</td>
                      @if($tickettype->seats_left == 0)
                        <td>N/A</td>
                      @else
                      <td align="right" nowrap="nowrap"><label class="is-hidden-accessible" for="quant_32484745_None">Ticket Quantity Select</label> 
                      
                    <input type="hidden" class="ticket_total" value="{{$tickettype->total_price}}" data-quantity="ticket_quant_{{$tickettype->id}}" data-ticketid="{{$tickettype->id}}">  
                      {{ Form::select('ticket_quant_'.$tickettype->id, $tickettype->max_quant, 0) }}
                   </td>
                   @endif
                    @endif
                    

                    
                  </tr>
                  @endforeach

                </tbody>
              </table>
            </div>
            <!-- end panel_body -->


            @if(!($event->pastevent =='true' || $event->status == '1' || $event->tickets_available == '0' ))
            <div class="panel_footer" id="OrderReg" style="text-align: right; padding: 10px;">
              <table align="right" id="freeButton" style="display: block;">
                <tbody>
                  <tr>
                    <td>&nbsp;</td>
                    @if(Auth::user())
                    <?php if($flag==1)  {?>
                    <td><span class="button_css" id="primary_cta"><a class="js-checkout-button" id="registerFree" href="#" style=
                    "text-decoration:none;color:#FFFFFF;">Register</a>  <?php } else {?> 
                    <td><span  ><a  href="#" style=
                    "text-decoration:none; color:red ;">Registration Closed</a> <?php }?> 
                    @endif      


                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            @endif
            <!-- OrderReg end panel_footer -->
          </form>


          <div class="clearfloat">
          </div>
        </div>
        <!-- end panel_628 -->

        <div class="panel_628">
          <div class="panel_head2">
            <h3>Event Details</h3>
          </div>


          <div class="panel_section">
            {{$event->details}}
            @if(Auth::user())
                   @if(Auth::user()->id == $organizer_id)
                      <div class="l-block-2">
                      <button type="button" ><a href="{{URL::to('user/eventcancel/' . $event->id)}}" style="text-decoration: none !important ; color:#050606">Cancel Event</a> </button>
                      </div> 
                   @endif
            @endif
   
                            

          </div>

          <!-- end panel_body -->

         @if(Auth::user())
                   @if(Auth::user()->id != $organizer_id)
            <div class="panel_body">
              Have questions about {{$event->title}} Event? 
              <a class="contact_organizer_link js-d-modal contactOrg">
              Contact Event Organizer {{$organizer_name}}</a>
            </div>
          @else
             <div class="panel_body"> 
             </div> 
          @endif
          @endif
          
        </div>
        <!-- end panel_628 -->
      </div>
      <!-- end col_628 -->


      <div id="col_280">
        

        @if($event->pastevent !='true' && $event->status == '0')
        <div class="common_box panel_280" id="track_event_container">
           @if(Auth::user())

            @if($event->bookmarked)
              <a class="eb_button default large unsaved bookmark" data-bookmarked="false" data-eid="{{$event->id}}" data-issaved="" id="saveEvent" onclick="saveEventLoggedIn(this)">Save This Event</a>
             @else
              <a class="eb_button default large saved" data-bookmarked="false" data-eid="{{$event->id}}" id="saveEvent" onclick="#">Event Saved</a>

          @endif
        @else
          <a class="eb_button default large unsaved bookmark" data-bookmarked="false" data-eid="{{$event->id}}" id="saveEvent" onclick="saveevent(this)">Save This Event</a>
        @endif
          
        </div>
        @endif

        <div class="panel_280">
          <div class="panel_head2">
            <h3>When &amp; Where</h3>
          </div>


          <div class="panel_body" id="panel_when">
            <div id="map_canvas" style=" height: 260px; position: relative; overflow: hidden; transform: translateZ(0px); background-color: rgb(229, 227, 223);">
              
            </div>
           

            <h2 class="location vcard" style="margin-top: 3px;"><br>
            <b><span class="fn org">{{ $event->location['address'] }}</span></b><br>
           <span class="locality">{{ $event->location['city'] }}</span>
            </h2>


            <h2 style="padding-bottom: 0;"><span class="dtstart">From {{$start_date}} {{$event->startTime}} to 

                    @if($event->startDate != $event->endDate) 
                      {{$end_date}} 
                    @endif  
                  
                    {{$event->endTime}}</span>
            </h2>
            <br>
           


             
            </div>
          </div>
          <!-- end panel_body -->
        <!-- end panel_280 -->


        <div class="panel_280 vcard" id="hostedByDiv">
          <div class="panel_head2">
            <h3>Organizer</h3>
          </div>


          <div class="panel_body" id="new_organizer_module">
            <div class="fn panel_border" id="organizer_header">
              @if($event->organizer['profile'] == 1)
                <h2>{{ $event->organizer['name'] }}</h2>

              <div class="note">
                {{ $event->organizer['details'] }}
              </div>

              @else

                <h2> Anonymous organizer </h2>

              @endif  
            </div>

            
         @if(Auth::user())
            @if(Auth::user()->id != $organizer_id)
            <span class="button_css"><a class="contact_organizer_link js-d-modal contactOrg"><span class="icon contact_host_icon ">&nbsp;</span> Contact the Organizer</a></span>

            <div id="organizer_content">
              <div class="organizer_link" id="organizer_profile">
                <a class="url" href="{{ URL::to('events/organizerprofile/'.$event->organizer['id'])}}" id="profile_link" target="_blank">View organizer profile</a>
              </div>

              @if($event->organizer['profile'] == 1)
                <div class="organizer_link" id="organizer_website">
                  <a class="url" href="{{ $event->organizer['website'] }}" rel="nofollow" target="_blank">{{ $event->organizer['website']}}</a>
                </div>


              @if($event->organizer['fb_link'] != "")
              <div class="organizer_link" id="organizer_facebook">
                <a class="url" href="http://www.facebook.com/ .{{$event->organizer['fb_link']}}" rel="nofollow" target="_blank">facebook.com/{{$event->organizer['fb_link']}}</a>
              </div>
              @endif
              
              @endif
            </div>
            <!-- end organizer_context -->
            @endif
         @endif

            
          </div>
          <!-- end panel_body -->
        </div>
        <!-- end panel_280 -->
      </div>
      <!-- end col_280 -->
      <!-- end right_column block -->

      <div class="clearfloat">
      </div>
    </div>
    <!-- end main -->
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

@stop


@section('js')

<script async="" defer  src="{{ URL::asset('web/js/jquery.lightbox_me.js')}}"></script>
<script type="text/javascript">
$('#registerFree').click(function(e) {


    var total = 0;
var tickets = {};
  $('.ticket_total').each(function(i, e){

    var q = $(e).data('quantity');
    var ti = $(e).data('ticketid');
    var quantity = $("select[name='"+q+"']").val();
    
    total = parseInt(quantity) + total;

  });



  if(total > 0 ) { 
    $('#registerPopUp').lightbox_me({
        centered: true, 
        onLoad: function() { 
            $('#registerPopUp').find('input:first').focus()
            }
        });
    e.preventDefault();

  }
  else {
    alert("Quantity must be greater than zero");
     e.preventDefault();
  }
});

$('.contactOrg').click(function(e) {
    $('#contactPopUp').lightbox_me({
        centered: true, 
        onLoad: function() { 
            $('#contactPopUp').find('input:first').focus()
            }
        });
    e.preventDefault();
});

</script>

<script type="text/javascript">
$('#send_msg').click(function(e) {
  //$('#registerPopUp').trigger('close');

  e.preventDefault();

  if($("#contact_name").val() && $("#contact_email").val()) 
  {
     
      $("#contact_form").submit();
      
  }
  else{
    
    alert("Name And Email Are Required");
  }
});


$('#completeRegisteration').click(function(e) {
  //$('#registerPopUp').trigger('close');

  e.preventDefault();

  var tickets = {};


  var total = 0;

  $('.ticket_total').each(function(i, e){

    var q = $(e).data('quantity');
    var ti = $(e).data('ticketid');
    var quantity = $("select[name='"+q+"']").val();
    
    total = ( parseFloat($(e).val()) * quantity ) + total;
    
    if(parseFloat(quantity) > 0){
      
      tickets[ti] = parseFloat(quantity);
    }

  });

  $("#total_cost").val(total);
  
    var data = {};
    data['first_name'] = $("#first_name").val();
    data['last_name'] = $("#last_name").val();
    data['email'] = $("#email_address").val();
    data['address'] = $("#address").val();
    data['contact_no'] = $("#contact_no").val();
    data['ticket_id'] = $("#ticket_id").val();
    data['tickets'] = tickets;
    //alert(JSON.stringify(tickets));
    data['event_id'] = {{ $event->id }};
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    $.post('{{ URL::to("/tickets/addticketdetails") }}', data, function(){  
      
    });

if($("#first_name").val() && $("#last_name").val() && $("#email_address").val() &&  re.test($("#email_address").val()) && /^[a-zA-Z ]+$/.test( $("#last_name").val()) && /^[a-zA-Z ]+$/.test( $("#first_name").val()) && /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test($("#contact_no").val()) && $("#address").val() && $("#contact_no").val())  
{



  if(total == 0){
    
    
      $.post('{{ URL::to("/tickets/buyfreetickets") }}', data, function(){
     $('#registerPopUp').trigger('close');
      $('#registerationCompleted').lightbox_me({
        centered: true, 
        onLoad: function() { 
            $('#registerationCompleted').find('input:first').focus()
            }
        });
      
    });
    
    
  }
  else{ 
    

    
    // $.post('{{ URL::to("/tickets/buytickets") }}', data, function(){
     
     //   $("#registrationForm").submit();
      
    // });
    //$('#completeRegisteration').hide();
    $("#registrationForm").submit();
    
  

}

}
else{
  
  alert("All Fields Are Required & Valid");
  }
  /*
    $('#registerationCompleted').lightbox_me({
        centered: true, 
        onLoad: function() { 
            $('#registerationCompleted').find('input:first').focus()
            }
        });
    e.preventDefault(); */
});

$(function(){ 
  var mapOptions = {
        center: { lat: {{$event->location['lat']}}, lng: {{$event->location['lng']}}},
        zoom: 10
    };
     
    var map = new google.maps.Map(document.getElementById('map_canvas'),mapOptions);



    var marker = new google.maps.Marker({
      position:  new google.maps.LatLng({{$event->location['lat']}},{{$event->location['lng']}}),
      map: map,
      title:"{{$event->title}}"
  });



})

</script>

 <script type="text/javascript">
    
    function saveEventLoggedIn(e)
    {      
      //console.log(e);
      var is_saved=$('#saveEvent').attr('data-issaved');
      if(is_saved == '')
      {

      $('#saveEvent').attr('data-issaved','true');
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
              e.innerHTML="Event Saved";
              
            }
          }             
          );
    }
    }

    function saveevent() {

  $('#signInPopUp').lightbox_me({
        centered: true, 
        onLoad: function() { 
            $('#signInPopUp').find('input:first').focus()
            }
        });
}

    
  </script>

@stop