@extends('pageshell')

@section('head')
<link  href="{{ URL::asset('web/Content/eventDetails.css') }}"   rel="stylesheet" type="text/css">
<link   href="{{ URL::asset('web/Content/main_accordion.css') }}"  rel="stylesheet" type="text/css">
  <link  href="{{ URL::asset('web/Content/demo_accordion.css') }}"   rel="stylesheet" type="text/css">
  <link href="{{ URL::asset('web/Content/jquery.simple-dtpicker.css') }}"    rel="stylesheet" type="text/css">
  <link href="{{ URL::asset('web/Content/jquery-te-1.4.0.css') }}" rel="stylesheet"   type="text/css">

  <link href="{{ URL::asset('web/Content/create2.css') }}"  type="text/css">
  <link href="{{ URL::asset('web/Content/eb.persistent_header.css') }}"   rel="stylesheet" type="text/css">
  <link href="{{ URL::asset('web/Content/settings.css') }}" rel="stylesheet" type="text/css" /> 
<link href="{{ asset('/timepicker/jquery.timepicker.css') }}" rel="stylesheet">
   <style>

  #id_group-tickets-0-order_limit
  {
    margin-left:-10px;
    width:50%;
    width: initial;
  }

  #starburst
  {
  background:none;
  }

  #id_group-tickets-0-order_minimum
  {
   
    width:50%;
    width: initial;
  }

  .ticketSalesEnd, .ticketSalesStart
  {
     font-size:13.6px;
     font-family:arial;
  }


#create
  {
    display: inline-block;
  vertical-align: baseline;
  zoom: 1;
  color: #fff;
  background-color: #7ad108;
  vertical-align: middle;
  position: relative;
  width: auto;
  height: auto;
  border: 0;
  padding: 11px 20px;
  text-align: center;
  text-decoration: none;
  line-height: 22px;
  font-weight: 400;
  font-size: 17px;
  border-radius: 3px;
  margin-left:45%;
  }


  #start_date, #end_date,#end_time, #start_time
  {
    width:200px;
  }

  #inputField
  {
     width: 96%;
  margin-left: 3%;
  margin-top: -40px;
  margin-bottom: 7%;
  }



  .sf-menu ul {
min-width: 14.78em !important; /* allow long menu items to determine submenu width */
}



#search-location
{
width: 242px !important;
}



  label
{
font-size: 17px !important;
line-height: 24px  !important;
font-weight: 300  !important;
}

.text-heading-epic
{
margin-left:215px;
}
hr
{
border: 0;
border-top: 1px solid #dedede;
height: 0;
margin: 2px 0px 0px 130px;
width: 1000px;

}

.custom-select-value
{
font-size: 17px;
line-height: 24px;
font-weight: 300;
}


  </style>
  <style>

  #logo {

  font-size: medium;
  margin: 10px 0 0 15px;

  }

  </style>
  

  <title>Create Event</title>

@stop


@section('content')

  @if(Session::has('type'))
           <div class="alert alert-success" style="font-size:14px;color: red";>
              {{ Session::get('message') }}
          </div>
            
  @endif

  <div class="with-persistent-nav" id="main_content">
    <nav class="btn-group g-grid g-group">
      <div class="g-cell g-cell-1-1 g-cell-md-6-12 l-block-2 l-align-center-sm">
        <span class="text-heading-epic main-heading" data-automation="event-name-display">Create An Event</span>
      </div>

      <div class="g-cell g-cell-1-1 g-cell-lg-10-12 g-offset-lg-1-12">
                      <hr>
                    </div>


      <div class="g-cell g-cell-1-1 g-cell-md-6-12 l-align-center-sm l-align-right-md l-align-right-lg">
        <div class="l-block-1 hide-small text-body-medium text-body--faint" id="last_saved">
        </div>
      </div>
    </nav>


    <nav class="persistent-header clrfix l-block-2" id="event_details_bar">
      <nav class="pages g-grid g-group">
        <div class="g-cell g-cell-12-12">
          <a class="page edit persistent-header__button active persistent-header__button--active" href="#" id="tab_details">Edit</a>
        </div>
      </nav>
    </nav>


    <div class="g-grid" id="event_summary_bar">
      <div class="g-cell g-cell-1-1 g-cell-lg-10-12 g-offset-lg-1-12">
        <div class="l-block-3 notification notification--alert hidden">
        </div>


        <div id="js_form_errors">
        </div>


        <div class="js-error-not-saved l-block-3 notification notification--error is-hidden">
          <i class="ico-error"></i> Your event was not saved. Please review the highlighted fields below.
        </div>
        <!-- ERRORS: [] -->
        <!-- GROUP ERRORS:  -->
      </div>
    </div>


    <div class="clrfix" id="content">
      <form accept-charset="utf-8" action="{{ URL::to('user/createevent')}}" class="responsive-form g-grid g-group" enctype="multipart/form-data" id=
      "event_form" method="post" name="event_form">

        <div class="g-group">
          <div class="clrfix page visible active" id="main_page">
            <div id="main_wrapper">
              <input id="id_source" name="source" type="hidden" value="create_2.0"> <input id="id_eid" name="eid" type="hidden" value="0">

              <div id="event_details_wrapper">
                <div class="g-group" id="event_details_header">
                  <div class="l-block-3">
                    <div class="g-cell g-cell-1-1 g-cell-lg-7-12 g-cell-md-8-12 g-offset-lg-1-12">
                      <div class="l-media-v-center">
                        <div class="l-media-v-center__row">
                          <span class="ico-box ico--small ico--color-teal ico--color-brand-white">1</span> <span class="text-heading-primary l-padded-h-1">Event Details</span>
                        </div>
                      </div>
                    </div>

                    <div class="g-cell g-cell-12-12 g-cell-lg-10-12 g-offset-lg-1-12">
                      <hr>
                    </div>
                    
                  </div>
                </div>


                <div class="g-vertical-group g-cell-md-1-1 g-cell-lg-8-12 g-offset-lg-1-12 module_content l-block-2" id="event_details_content">
                  <div id="event_details_title">
                    <div class="g-cell g-cell-1-1">
                      <label class="responsive-form__label--primary" for="id_group-details-name">Event title <span class="required">*</span></label>
                    </div>


                    <div class="l-block-1 g-cell g-cell-1-1">
                      <div class="inputtext">
                        <input data-check="{&quot;max_length&quot;:{&quot;args&quot;:[255],&quot;when&quot;:&quot;submit&quot;}}" id="id_group-details-name" maxlength="255" name=
                        "name" placeholder="Give it a short distinct name" type="text">

                        <div class="" id="id_group-details-name_errors">
                        </div>
                      </div>
                      <input data-check="{}" id="id_group-details-make_live" name="group-details-make_live" type="hidden">
                    </div>


                    <aside class="message js-charlimit text-body--faint g-cell g-cell-1-1">
                    </aside>
                  </div>

                  <div class="g-cell g-cell-1-1 l-block-3">
                    <label class="responsive-form__label--primary" for="location-name-input">City</label>
                  </div>
                  <div class="l-block-1 g-cell g-cell-1-1">
                        <input id="city_autocomplete" name="city" type="text" placeholder="Enter City">
                    </div>
                  <input id="lat" name="lat" type="hidden" value=""> 
                  <input id="lng" name="lng" type="hidden" value="">

                  <div class="g-cell g-cell-1-1 l-block-3">
                    <label class="responsive-form__label--primary" for="location-name-input">Venue</label>
                  </div>  
                <div class="l-block-1 g-cell g-cell-1-1">
                  <textarea class="span8 input-xlarge focused" rows="3" name="venue"></textarea>
                </div>


                  <div class="l-block-3" id="event_details_date">
                    <div>

                      <div class="datetime_input start_date g-cell l-block-1">
                        <label class="responsive-form__label--primary">Start Date</label>

                        <div class="l-block-1">
                          <input type="text" class="input-xlarge focused" name="start_date" id="start_date" value="">
                        </div>
                      </div>

                      <div class="datetime_input start_date g-cell l-block-1">
                        <label class="responsive-form__label--primary">Start Time</label>

                        <div class="l-block-1">
                          <input type="text" class="input-xlarge focused" name="start_time" id="start_time" value="">
                        </div>
                      </div>


                      <div class="datetime_input end_date g-cell l-block-1">
                        <label class="responsive-form__label--primary">End Date</label>

                        <div class="l-block-1">
                          <input type="text" class="input-xlarge focused" name="end_date" id="end_date" value="">
                        </div>
                      </div>

                      <div class="datetime_input end_date g-cell l-block-1">
                        <label class="responsive-form__label--primary">End Time</label>

                        <div class="l-block-1">
                          <input type="text" class="input-xlarge focused" name="end_time" id="end_time" value="">
                        </div>
                      </div>                    
                    </div>
                  </div>


                  <div class="l-block-3" id="event_details_logo">
                    <div class="g-cell g-cell-1-1">
                      <label class="responsive-form__label--primary">Event logo</label>
                    </div>


                    <div class="js-event-logo-uploader" id="event-logo-uploader">
                      <div class="form__logo-upload js-image-upload__form">
                        <input id="logo" name="file" title="Choose a file" type="file">
                      </div>
                    </div>
                  </div>


                  <div class="l-block-3" id="event_details_details">
                    <div class="g-cell g-cell-1-1">
                      <label class="responsive-form__label--primary">Event description</label>
                    </div>


                    <div class="l-block-1">
                      <div class="g-cell g-cell-1-1">
                        <textarea class="jqte-test" cols="40" data-check="{}" id="id_group-details-description" name="description" placeholder=
                        "Tell people what&#39;s special about this event" rows="10">
</textarea>
                      </div>
                    </div>
                  </div>


                  <div class="l-block-3" id="event_details_organizer">
                    <div class="g-cell g-cell-1-1">
                      <label class="responsive-form__label--primary">Organizer name</label>
                    </div>
                      <label id="organizerName" style="padding-left:20px" >{{ $org_name }}</label>
                      <span class="add-edit g-cell g-cell-1-1"><a class="edit" id="editOrganizer" onclick='showcancel()'>Edit this organizer</a></span>
                      <span id="cancel_show" class="cancel-edit g-cell g-cell-1-1" style="display:none"><a class="cancel" id="canceleditOrganizer">Cancel</a></span>
                   <div>

                   
                   
                   <div id="editOrg" style="display:none;padding-left:20px">
                     <input class="l-block-1"  id="org_name" name="org_name" placeholder="Who's organizing this event?" type="text" value="{{ $org_name }}">
                     <div id="edit-organizer-warning" class="notification notification--alert l-block-2 visible">
                        <i class="ico-alert"></i>
                        Modifying this organizer will apply to all events
                    </div>
                    <br/>
                    <br/>
                       <label class="responsive-form__label--primary">
                                    Organizer description
                                </label>
                       <textarea class="jqte-test" id="org_description" name="org_decription">
                        {{ $org_description }}
</textarea>
                   </div>
                   
                    </div>
                  </div>
                </div>
              </div>


              <div id="create_tickets_wrapper">
                <div class="g-group" id="create_tickets_header">
                  <div class="l-block-6" id="createTicketsllock">
                    <div class="g-cell g-cell-1-1 g-cell-lg-7-12 g-cell-md-8-12 g-offset-lg-1-12">
                      <div class="l-media-v-center" id="createTicketsl-media-v-center">
                        <div class="l-media-v-center__row" id="createTicketsspan">
                          <span class="ico-box ico--small ico--color-teal ico--color-brand-white">2</span> <span class="text-heading-primary l-padded-h-1">Create Tickets</span>
                        </div>

                        <div class="g-cell g-cell-12-12 g-cell-lg-10-12 g-offset-lg-1-12">
                      <hr>
                    </div>

                      <div id="accContainer">
                          <div class="accordion-section-content" id="addedTickets">
                            <p id="ticketsContents"><input type="text" id="ticketType" name="ticketType[]">
                            <input type="text" id="qnty" name="qnty[]">
                            <label>Free</label>
                            <input type="hidden" name="free" value="free">
                            <input class="btn l-block-3 removeTicket" type="button" value="Remove">
                            </p>
                          </div>


                          <div class="accordion-section-content" id="addedTicketsPaid">
                            <p id="paidticketsContents">
                            <input id="ticketTypePaid" name="ticketTypePaid[]">
                            <input id="qntyPaid" name="qntyPaid[]">
                            <input id="pricePaid" name="pricePaid[]">
                            <label id="ticketFeeslabel" name="ticketFees[]"></label>
                            <input type="hidden" id="ticketfeesHidden" name="ticketfeesHidden[]">
                            <input class="btn l-block-3 removeTicket" type="button" value="Remove"> 
                            </p>
                          </div>

                          <div class="main">
                            <div class="accordion">
                              <div class="accordion-section">
                                <a class="accordion-section-title" href="#accordion-1">Free Tickets</a>

                                <div class="accordion-section-content" id="accordion-1">
                                  <p class="ticketsPara">
                                    <input class="tickets" id="ticketTypeAcc" placeholder="Ticket Type" type="text" value="">
                                     <input class="tickets" id="quantityAcc" placeholder="Quanity Available" type="number" value=""> 
                                     <label class="tickets">Free</label> 
                                     <input class="btn l-block-3" id="addTicket" type="button" value="Add"></p>
                                </div>
                                <!--end .accordion-section-content-->
                              </div>
                              <!--end .accordion-section-->


                              <div class="accordion-section">
                                <a class="accordion-section-title" href="#accordion-2">Paid Tickets</a>

                                <div class="accordion-section-content" id="accordion-2">
                                  <p class="ticketsPara">
                                    <input class="tickets" id="ticketTypePaidAcc" placeholder="Ticket Type" type="text" value=""> 
                                    <input class="tickets" id="quantityPaidAcc" placeholder="Quanity Available" type="number" value=""> 
                                    <input class="tickets" id="pricePaidAcc" placeholder="Price" type="number" value="">
                                    {{ Form::select('ticketfees', array(0=>"Pass Fees",1=>"Split Fees",2=>"Absorb Fees"), "",array('class' => 'span3 select2 fees-type','id'=>'ticketfeesAcc')) }}
                                    <input class="btn l-block-3"  id=addTicketPaid type="button" value="Add"></p>
                                </div>
                                <!--end .accordion-section-content-->
                              </div>
                              <!--end .accordion-section-->
                            </div>
                            <!--end .accordion-->
                          </div>
                        </div>

                      </div>
                    </div>


                    <div class="g-cell g-cell-12-12 g-cell-lg-10-12 g-offset-lg-1-12" id="ticketsdescAfter">
                      <hr>
                    </div>
                  </div>
                </div>
              </div>


              <div class="g-group" id="privacy_and_promotion_wrapper">
                <div class="" id="privacy_header">
                  <div class="l-block-6">
                    <div class="g-cell g-cell-1-1 g-cell-lg-7-12 g-cell-md-8-12 g-offset-lg-1-12">
                      <div class="l-media-v-center">
                        <div class="l-media-v-center__row">
                          <span class="ico-box ico--small ico--color-teal ico--color-brand-white">3</span> <span class="text-heading-primary l-padded-h-1">Additional
                          Settings</span>
                        </div>
                      </div>
                    </div>


                    <div class="g-cell g-cell-12-12 g-cell-lg-10-12 g-offset-lg-1-12">
                      <hr>
                    </div>
                  </div>
                </div>


                <div class="" id="privacy_and_promotion_content">
                  <div class="promotion g-group" id="privacy_and_promotion_categories">
                    <div class="g-cell g-cell-12-12 g-cell-md-10-12 g-cell-lg-8-12 g-offset-lg-1-12 l-block-2 select">
                      <label class="responsive-form__label--primary" for="id_group-privacy_and_promotion-primary_category">Event Type<span class=
                      "required is-hidden">*</span></label>
                    </div>


                    <div class="g-cell g-cell-12-12 g-cell-md-10-12 g-cell-lg-8-12 g-offset-lg-1-12 l-block-1">
                      <div class="create_select_time_field custom-select-container clrfix">
                        <span class="custom-select-value">Select the type of event</span>

                        <div class="custom-select-arrow">
                        </div>
                        {{ Form::select('eventcat', $category, "",array('class' => 'span3 select2 ticketfees')) }}
                      </div>


                      <div class="form__field-error is-hidden">
                        None
                      </div>


                      <p class="js-create-format-error is-hidden l-padded-2 form__field-error">Please select an event type.</p>
                    </div>


                    <div class="g-cell g-cell-12-12 g-cell-md-10-12 g-cell-lg-8-12 g-offset-lg-1-12 l-block-2 select l-block-2">
                      <label class="responsive-form__label--primary" for="id_group-privacy_and_promotion-primary_category">Event Topic<span class=
                      "required is-hidden">*</span></label>
                    </div>


                    <div class="g-cell g-cell-12-12 g-cell-md-5-12 g-cell-lg-4-12 g-offset-lg-1-12">
                      <div class="l-block-1">
                        <div class=" create_select_time_field custom-select-container clrfix">
                          <span class="custom-select-value">Select a topic</span>

                          <div class="custom-select-arrow">
                          </div>
                          {{ Form::select('eventtype', $types, "",array('class' => 'span3 select2 ticketfees')) }}
                        </div>
                      </div>


                      <p class="js-create-category-error is-hidden l-padded-2 form__field-error">Please select an event topic.</p>


                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div class="l-padded-v-5 g-cell btn-group btn-group--responsive" id="footer_buttons">
          </div>
        </div>


        <div class="js-publish-callout l-align-center l-block-4 responsive-form">
          <div class="l-padded-h-2 l-padded-v-4" id="starburst">
            <div class="text-heading-primary l-padded-v-2">
              Nice job! You&#39;re almost done.
            </div>
          
            <div class="g-cell g-cell-1-1 btn-group btn-group--responsive" id="next_step_buttons">
              <button class="btn btn--secondary" id="create" type="submit" value="Create">Create</button>
            </div>
           
          </div>
        </div>
      </form>


      <div>
      </div>
    </div>
    <div id="disp" style="display:none;position: fixed;width: 100%;height: 100%;background-color: #eee;  top: 1px;opacity: 0.2;"> 
    </div> 


@stop


@section('js')






    


  <script src="{{ URL::asset('web/js/accordion.js')}}"  type="text/javascript"></script> 
  <script src="{{ URL::asset('web/js/jquery.simple-dtpicker.js')}}"  type="text/javascript"></script> 


  <script type="text/javascript">
  
            jQuery('*[name=date]').appendDtpicker();
        
  </script> <script type="text/javascript">

  jQuery('.settings').click(function(e){  
    
            if(e.parent()=="paidticketsContents")
            {
              jQuery('.gticket_settings_service_fees').show();
            }
            else
            {
             jQuery('.gticket_settings_service_fees').hide();
            }
  });
        
  </script> 
  <script src="{{ asset('admin/js/jquery-ui-1.10.0.custom.min.js') }}"></script>
 
<script src="{{ URL::asset('web/js/jquery-te-1.4.0.min.js')}}"  type="text/javascript"></script> 

<script src="{{ URL::to('/timepicker/jquery.timepicker.min.js') }}"></script>
  <script>

function showcancel()
{
   $("#cancel_show").show();
}


  $('.jqte-test').jqte();
    
    // settings of status
    var jqteStatus = true;

    var IsplaceChange = false;

    $(".status").click(function()
    {
        jqteStatus = jqteStatus ? false : true;
        $('.jqte-test').jqte({"status" : jqteStatus})
    });
    
    $('#canceleditOrganizer').click(function(e){ 
      
      $("#editOrg").hide();
   $("#organizerName").show();
    });
    
     $('#editOrganizer').click(function(e){ 
      
      $("#editOrg").show();
      $("#organizerName").hide();
  
    });

     $(function() {
    $( "#start_date" ).datepicker({dateFormat : 'yy-mm-dd'});
    $('#start_time').timepicker();
     $( "#end_date" ).datepicker({dateFormat : 'yy-mm-dd'});
    $('#end_time').timepicker();
    $('#date_tickets-start_sales').datepicker({dateFormat : 'yy-mm-dd'});
    $('#date_tickets-end_sales').datepicker({dateFormat : 'yy-mm-dd'});
  });

     var input = $("#city_autocomplete").get(0);
 var autocomplete = new google.maps.places.Autocomplete(input);
 
  var input = document.getElementById('city_autocomplete');
    google.maps.event.addDomListener(input, 'keydown', function(e) { 
    if (e.keyCode == 13) { 
        e.preventDefault(); 
         IsplaceChange = false;
    }
  }); 

  google.maps.event.addListener(autocomplete, 'place_changed', function() {


    
    var place = autocomplete.getPlace();
    
    $("#lat").val(place.geometry.location.lat());

    $("#lng").val(place.geometry.location.lng());

    IsplaceChange = true;

    });

  </script>


<script type="text/javascript">
    $(document).ready(function () {
        $("#dialog").dialog({ autoOpen: false });
 
       
    });

    jQuery('#create').click(function(e) {
    var isValid = true;
    $('.inputtext input, #city ,#start_date,#start_time,#end_date,#end_time').each(function() {
      if ($.trim($(this).val()) == '') {
        isValid = false;
        $(this).css({
          "border": "1px solid red",
          "background": "#FFCECE"
        });
      } else {
        $(this).css({
          "border": "",
          "background": ""
        });
      }
    });
    if (isValid == false) {
 alert("Please fill in highlighted areas.");
      e.preventDefault();
    } 
    else
    {
      $('#disp').show();
    }
});
</script>

@stop