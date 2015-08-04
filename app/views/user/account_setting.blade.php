@extends('pageshell')

@section('css')

<style>

 .newStyle
{
   background-color:rgb(208, 228, 245);
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
  width: 250px;
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

 

.responsive-form__select select
 {
width: 100%;
cursor: pointer;
position: relative;
top: -1px;
z-index: 1;
height: 44px;
display: block;
font-size: 17px;
background: #fff;
overflow: hidden;
display: block;
zoom: 1;
border-right: -2px solid transparent;
-webkit-appearance: menulist-button;
border-color:rgba(128, 128, 128, 0.3);
}

.label {text-align: right; }
        .hide{ display: none;}

        #fieldform_addressform label {
            min-width: 135px;
        }


.g-group
{
 padding: 7px 17px 5px 1px;;
}

.g-cell
{
padding: 0px 5px 5px 2px;
}

.js-d-toggle {

  margin-bottom:190px;
}

</style>

@stop



@section('content')

<div class="clrfix" id="content">
    <div class="global-sub-header l-padded-v-4">
      <div class="g-group">
        <div class="g-cell g-cell-12-12 g-cell-md-6-12 g-cell-lg-6-12">
          <h1 class="text-heading-primary">My Account</h1>
        </div>


        <div class="g-cell g-cell-6-12 hide-small">
          <p class="sub-text">Eventbolt account since {{ $user->act_since }}</p>
        </div>
      </div>
    </div>


    <div id="content">
      
      <div class="l-padded-v-bottom-5 g-grid g-group">
        <div class="g-vertical-group g-cell-12-12 g-cell-lg-3-12 l-block-4">
          <div class="g-cell g-cell-3-3">
            <div class="js-d-toggle" data-xd-wired="toggle">


              <div class="side-nav side-nav__toggle-view js-xd-toggle-view js-d-accordion" data-xd-wired="accordion">
              
                
                <div id="cssmenu">
<ul>
   <li><a href="#"><span  class="spanCategoryup">SETTINGS</span></a>
      <ul>
        <li @if(Session::has('contact'))class="newStyle" @endif><a id="contactInfoAcc" href="#" ><span>Contact Info</span></a></li>
        
          <li @if(Session::has('password'))class="newStyle" @endif><a id="passwordAcc" href="#"><span>Password</span></a></li>
          
          <!--<li @if(Session::has('social'))class="newStyle" @endif><a id="socialSettingsAcc" href="#"><span>Social Settings</span></a></li>
        
          <li @if(Session::has('close'))class="newStyle" @endif><a id="closeAccountAcc" href="#"><span>Close Account</span></a></li>-->
        
        
              </ul> 


   </li>
   <li><a href="#"><span  class="spanCategoryup">PAYOUTS</span></a>
      <ul>
        <li @if(Session::has('payouts'))class="newStyle" @endif><a id="payOutSummaryAcc" href="#"><span>PayOut Summary</span></a></li>

                
      </ul>
   </li>
</ul>
</div>


              </div>
            </div>
          </div>
        </div>



        <div class="g-vertical-group g-cell-12-12 g-cell-lg-9-12 l-block-4" id="accountInfoDiv" >
        
        <!-- accountInfo-->
        <div class="g-cell g-cell-1-1" id="accountInfo">
          <header class="show-large">
          <h2 class="text-heading-primary change_password">Account Information</h2>
        </header>

        <div class="g-cell g-cell-1-1 l-padded-v-2"><hr></div>

        @if(Session::has('success_contact'))
            <section class="g-cell g-cell-12-12 l-padded-v-bottom-3">
                <div class="l-block-2 notification notification--success">
                    <i class="ico-success"></i>
                    {{Session::get('success_contact')}}
                </div>
            </section>
            @endif

             @if(Session::has('errors_contact'))
            <section class="g-cell g-cell-12-12 l-padded-v-bottom-3">
                <div class="l-block-2 notification notification--error">
                    <i class="ico-success"></i>
                     {{Session::get('errors_contact')}}
                </div>
            </section>
            @endif

          <div class="g-cell g-cell-1-1">
            <h3 class="text-heading-secondary">Account email address</h3>
          </div>


          <div class="g-cell g-cell-1-1 l-block-2">
            {{ $user->email}}
          </div>


          <div class="js-d-credentials" data-xd-wired="credentials">
            <div class="g-cell g-cell-1-1">
              <button class="btn btn--secondary btn--small"  id="change_email"  >Change</button>
            </div>


            <div id="emailDiv" style="display: none;">
              <form action="{{ URL::to('user/changeemail') }}" class="fieldsform responsive-form js-d-submitControl" data-xd-wired="submitControl" id="emailform" method="post" name="emailform">

                <div class="g-cell g-cell-1-1">
                  <label class="text-body-significant" for="new_email_address">New email address:</label>
                </div>


                <div class="g-cell g-cell-1-1 g-cell-md-6-9">
                  <input id="new_email" name="newemail" type="text" value="{{ $user->email}}">
                </div>


                <div class="g-cell g-cell-1-1">
                  <label class="text-body-significant" for="confirm_password">Your current password:</label>
                </div>


                <div class="g-cell g-cell-1-1 g-cell-md-6-9">
                  <input id="confirm_password" name="password" type="password" value="">
                </div>


                <div class="g-cell g-cell-1-1 l-block-2">
                   <button class="btn btn--small"  id="save_email_changes" type="submit" >Save</button>
                </div>
              </form>
            </div>
          </div>
       </div>


          <div class="g-cell g-cell-1-1 l-block-4">
            <h3 class="text-heading-secondary">Contact Information</h3>
          </div>


          <div>
            <form action="{{ URL::to('user/settings')}}"  class="responsive-form fieldsform js-d-submitControl" data-xd-wired="submitControl" id="fieldform_addressform" method="post" name="addressform">
              <input name="t" type="hidden" value="4+S05eGx4rO547i0uOSzteTm47bhubnh5bLktra55rff37Gysq6xtreusriuuLTfsbSysbC4uLa2tN+xs7C1srays7U="> <input name="changeaddress" type=
              "hidden" value="1">

              <div class="g-group">
                <div class="g-cell g-cell-1-1 g-cell-md-3-9">
                  <div>
                    <label for="contactinfo_firstname">First Name</label>
                  </div>


                  <div>
                    <input id="contactinfo_firstname" maxlength="50" name="first_name" type="text" value="{{$user->first_name}}">
                  </div>
                </div>

                <div class="g-cell g-cell-1-1 g-cell-md-3-9">
                  <div>
                    <label for="contactinfo_firstname">Second Name</label>
                  </div>


                  <div>
                    <input id="contactinfo_firstname" maxlength="50" name="last_name" type="text" value="{{$user->last_name}}">
                  </div>
                </div>
              </div>


              <div class="g-group">
                <div class="g-cell g-cell-1-1 g-cell-md-3-9">
                  <div>
                    <label for="contactinfo_homephone">Phone</label>
                  </div>


                  <div>
                    <input id="phone" maxlength="20" name="phone" type="text" value="{{$user->phone}}">
                  </div>
                </div>
              </div>


              <div class="g-group l-block-4">
                <div class="g-cell g-cell-1-1">
                  <h3 class="text-heading-secondary"> Address</h3>
                </div>
              </div>

              <div class="js-d-cep" data-xd-wired="cep">
                <div class="js-d-provinces" data-xd-wired="provinces">
                  <div class="g-group">
                    <div class="g-cell g-cell-1-1">
                      <label for="city">City</label>
                    </div>

                     <div class="l-block-1 g-cell g-cell-1-1">
                        <input id="city" name="city" type="text" value="{{$user->city}}">
                    </div>
                  <input id="lat" name="lat" type="hidden" value=""> 
                  <input id="lng" name="lng" type="hidden" value="">
                </div>
                <!--End js-d-provinces -->


                <div class="g-group">
                  <div class="g-cell g-cell-1-1">
                    <label for="home_address">Address</label>
                  </div>


                  <div class="g-cell g-cell-1-1 g-cell-md-6-9">
                    <input class="js-xd-cep-street" id="home_address" name="address" type="text" value="{{ $user->address}}">
                  </div>
                </div>
              </div>


              <div class="g-group l-block-4">
                <div class="g-cell g-cell-1-1">
                  <h3 class="text-heading-secondary">Other Information</h3>
                </div>
              </div>


              <div class="g-group">
                <div class="g-cell g-cell-1-1">
                  <label for="sex">Gender</label>
                </div>


                <div class="g-cell g-cell-1-1 g-cell-md-6-9">
                  <div class="responsive-form__select js-d-select-box custom-select-container clrfix">

                    {{ Form::select('gender', array('0'=>'--','male'=>'Male','female'=>'Female'), $user->gender) }}
                    <div class="custom-select-arrow">
                    </div>
                  </div>
                </div>
              </div>


              <div class="g-group">
                <div class="g-cell g-cell-1-1">
                  Birth Date
                </div>

                <div class="g-cell g-cell-1-1 g-cell-md-6-9">
                  <div id="demo" ></div>
                </div>
                
              </div>


              <div class="g-group l-block-2">
                <div class="g-cell g-cell-1-1">
                  <input type="submit" class="btn l-block-3" data-automation="save-account-info" value="Save">
                </div>
              </div>
            </form>
          </div>
        </div>

      </div> 
        
        <div class="g-vertical-group g-cell-12-12 g-cell-lg-9-12 l-block-4" id="passwordDiv" style="display:none">

<div class="g-cell g-cell-1-1">
                    <header class="show-large">
                        <h2 class="text-heading-primary change_password">Your Password</h2>
                    </header>
                    <div class="g-cell g-cell-1-1 l-padded-v-2"><hr></div>

                    @if(Session::has('success_pwd'))
            <section class="g-cell g-cell-12-12 l-padded-v-bottom-3">
                <div class="l-block-2 notification notification--success">
                    <i class="ico-success"></i>
                    {{Session::get('success_pwd')}}
                </div>
            </section>
            @endif

             @if(Session::has('errors_pwd'))
            <section class="g-cell g-cell-12-12 l-padded-v-bottom-3">
                <div class="l-block-2 notification notification--error">
                    <i class="ico-success"></i>
                     {{Session::get('errors_pwd')}}
                </div>
            </section>
            @endif

                    <div class="g-group l-block-2">
                        <form name="changepassform" action="{{ URL::to('user/password')}}" method="post" class="responsive-form fieldsform">
                           
                            <div class="g-group">
                                <div class="g-cell-1-1 l-block-4">
                                    <label class="responsive-form__label--primary" for="oldpassword">Current Password</label>
                                </div>
                                <div class="g-cell-1-1 g-cell-md-4-9">
                                    <input type="password" id="oldpassword" name="oldpassword" size="20" data-automation="current-password">
                                </div>
                            </div>
                            <div class="g-group">
                                <div class="g-cell-1-1 l-block-4">
                                    <label class="responsive-form__label--primary" for="newpassword1">New Password</label>
                                </div>
                                <div class="g-cell-1-1 g-cell-md-4-9">
                                    <input type="password" id="newpassword1" name="newpassword1" size="20" data-automation="new-password">
                                </div>
                            </div>
                            <div class="g-group">
                                <div class="g-cell-1-1 l-block-4">
                                    <label class="responsive-form__label--primary" for="newpassword2">Repeat Password</label>
                                </div>
                                <div class="g-cell-1-1 g-cell-md-4-9">
                                    <input type="password" id="newpassword2" name="newpassword2" size="20" data-automation="new-password-confirm">
                                </div>
                            </div>
                            <div class="g-cell-1-1 g-cell-md-3-4 l-block-4">
                                    <a href="javascript: document.changepassform.submit();" class="btn" data-automation="save-change-password">Save</a>
                            </div>
                        </form>
                    </div><!-- end panel_body -->

                </div>


            </div>
         
            
        <div class="g-vertical-group g-cell-12-12 g-cell-lg-9-12 l-block-4" id="payOutSummaryDiv" style="display:none">
<div class="g-cell g-cell-1-1">
<header class="show-large">
    <h1 class="text-heading-primary">Payouts Summary</h1>
</header>
</div>
<div class="g-cell g-cell-1-1 l-padded-v-2"><hr></div>
<div class="g-cell g-cell-1-1">

  <h2>

    Revenue : {{$revenue_amount}} <br>
    Payouts : {{$payout_amount}}
  </h2>  
    <div class="text-body-medium l-padded-v-2">
        Payouts are initiated 5 days after your event ends; it can take a few days to reach you.
    </div>
    
    @if($payout_amount == 0)
      <div class="notification notification--info" data-automation="no-payout-info">
          <i class="ico-info"></i>
          You have not received any payouts

      </div>
      <div class="dashed-table">
          <div class="l-block-2 no_payouts_block">
                  You could save money and sell more tickets and registrations, if you switch to EventBolt's payment processing for all of your events.
          </div>
      </div>
    @else

    <div class="l-block-stack">
              <div class="panel_head2 l-block-3" id="ticketInfo">
                <h3>Payout Information</h3>
              </div>
            </div>


            <div class="panel_body" id="TicketReg">
              <table border="0" cellpadding="0" cellspacing="0" class="ticket_table" id="ticket_table" width="100%">
                <tbody>
                  <tr class="ticket_table_head">
                    <td nowrap="nowrap" width="40%">When</td>
                    <td>Amount</td>
                  </tr>

                  @foreach($payouts as $payout)
                  <tr class="ticket_row">

                    <td nowrap="nowrap">{{$payout->created_at}}</td>

                    <td nowrap="nowrap">{{$payout->amount}}</td>
                  </tr>
                  @endforeach

                </tbody>
              </table>
            </div>
    @endif

    @if(!$revenues)
      <div class="notification notification--info" data-automation="no-payout-info">
          <i class="ico-info"></i>
          You have not created any events yet!

      </div>
   @else

    <div class="l-block-stack">
              <div class="panel_head2 l-block-3" id="ticketInfo">
                <h3>Event Revenues</h3>
              </div>
            </div>


            <div class="panel_body" id="TicketReg">
              <table border="0" cellpadding="0" cellspacing="0" class="ticket_table" id="ticket_table" width="100%">
                <tbody>
                  <tr class="ticket_table_head">
                    <td nowrap="nowrap" width="40%">Name</td>
                    <td>Tickets Sold</td>
                    <td>Revenue</td>
                  </tr>

                  @foreach($revenues as $revenue)
                  <tr class="ticket_row">

                    <td nowrap="nowrap">{{$revenue->event}}</td>

                    <td nowrap="nowrap">{{$revenue->tickets_sold}}</td>

                    <td nowrap="nowrap">{{$revenue->amount}}</td>
                  </tr>
                  @endforeach

                </tbody>
              </table>
            </div>

 @endif

</div><!-- end panel_body -->

</div>


            </div>
        
        
      </div>
    </div>


    <div class="clearfloat">
    </div>
  </div>


@stop



@section('js')

   <script type="text/javascript">
    
$("#change_email").click(function(){

$("#emailDiv").show();
$('#homecountry')[0].selectedIndex=0;
});


   </script>
   
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
</script>

 <script type="text/javascript">
    
$("#passwordAcc").click(function(e){
    e.preventDefault();
    $("#passwordDiv").show();
    $("#accountInfoDiv").hide();
    $("#socialSettingsDiv").hide();
     $("#payOutSummaryDiv").hide();
    
});

$("#socialSettingsAcc").click(function(e){
    e.preventDefault();
    $("#passwordDiv").hide();
    $("#accountInfoDiv").hide();
    $("#socialSettingsDiv").show();
     $("#closeAccountDiv").hide();
     $("#payOutSummaryDiv").hide();
});

$("#contactInfoAcc").click(function(e){
    e.preventDefault();
    $("#passwordDiv").hide();
    $("#accountInfoDiv").show();
    $("#socialSettingsDiv").hide();
      $("#closeAccountDiv").hide();
      $("#payOutSummaryDiv").hide();
});


$("#closeAccountAcc").click(function(e){
    e.preventDefault();
    $("#passwordDiv").hide();
    $("#accountInfoDiv").hide();
    $("#socialSettingsDiv").hide();
     $("#closeAccountDiv").show();
     $("#payOutSummaryDiv").hide();
});

$("#payOutSummaryAcc").click(function(e){
    e.preventDefault();
    $("#passwordDiv").hide();
    $("#accountInfoDiv").hide();
    $("#socialSettingsDiv").hide();
     $("#closeAccountDiv").hide();
     $("#payOutSummaryDiv").show();
});


$( document ).ready(function() {
    var checkElement = $('#cssmenu > ul > li > a').next();

  $('#cssmenu li').removeClass('active');
  $('#cssmenu > ul > li > a').closest('li').addClass('active'); 

  if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
    $('#cssmenu > ul > li > a').closest('li').removeClass('active');
    checkElement.slideUp('normal');
  }
  if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
    $('#cssmenu ul ul:visible').slideUp('normal');
    checkElement.slideDown('normal');
  }

  if($('#cssmenu > ul > li > a').closest('li').find('ul').children().length == 0) {
    return true;
  } else {
    return false; 
  }
;
});

$('#cssmenu > ul > li > ul> li').click(function(){
        $('#cssmenu > ul > li > ul> li').removeClass('newStyle');
$(this).addClass('newStyle');

    });

</script>

<script type="text/javascript">

geoCoderInitialize();
      var input = $("#city").get(0);
  var autocomplete = new google.maps.places.Autocomplete(input);

  google.maps.event.addDomListener(input, 'keydown', function(e) { 
    if (e.keyCode == 13) { 
        e.preventDefault(); 
    }
  }); 

  google.maps.event.addListener(autocomplete, 'place_changed', function() {
    
    var place = autocomplete.getPlace();
    
    $("#lat").val(place.geometry.location.lat());

    $("#lng").val(place.geometry.location.lng());


  });
  </script>

  <script src="{{ URL::to('web/js/jquery-birthday-picker.min.js') }}"></script> 

<script type="text/javascript">

$(function(){ 
 



$(".birthDate").addClass("responsive-form__select js-d-select-box custom-select-container clrfix ");
$(".birthYear").addClass("responsive-form__select js-d-select-box custom-select-container clrfix ");
$(".birthMonth").addClass("responsive-form__select js-d-select-box custom-select-container clrfix ");

$("#passwordDiv").hide();
    $("#accountInfoDiv").hide();
    $("#socialSettingsDiv").hide();
     $("#closeAccountDiv").hide();
     $("#payOutSummaryDiv").hide();

@if(Session::has('contact')) {
   $("#accountInfoDiv").show();
} @elseif(Session::has('password')) {
   $("#passwordDiv").show();
} @elseif(Session::has('social')) {
   $("#socialSettingsDiv").show();
} @elseif(Session::has('close')) {
   $("#closeAccountDiv").show();
} @elseif(Session::has('payout')) {
   $("#payOutSummaryDiv").show();
}@endif

});

setTimeout(function(){ $("div.birthMonth").css("width","20%");
$("div.birthDate").css("width","20%");
$("div.birthYear").css("width","20%");
console.log("Yo!");
$("#demo").birthdayPicker({"defaultDate" : "{{$user->birthday}}"}); 
 }, 200);



</script>

@stop