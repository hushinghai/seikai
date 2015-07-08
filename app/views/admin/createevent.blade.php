@extends('admin.pageshell')


@section('content')

<div class="row-fluid sortable">
				<div class="box span12">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon white edit"></i><span class="break"></span>New Event</h2>
						
					</div>

					@if(Session::has('successful'))
			
						<div class="alert alert-success">
							<button type="button" class="close" data-dismiss="alert">×</button>
							Event created successfully
						</div>
					@endif


					<div class="box-content">
					    {{ Form::open(array('url' => URL::to("/admin/createevent"), 'files' => true)) }}
							<fieldset>
							  
							  <div class="control-group">
								<label class="control-label" for="focusedInput">Name</label>
								<div class="controls">
									<input type="text" class="input-xlarge focused" name="name" id="name" value="">
								</div>
							  </div>

							  <div class="control-group">
								<label class="control-label" for="focusedInput">Description</label>
								<div class="controls">
									<textarea class="span8 input-xlarge focused" rows="3" name="description"></textarea>
								</div>
							  </div>
							  
							  <div class="control-group">
								<label class="control-label" for="focusedInput">City</label>
								<div class="controls" id="city_div">
									<input type="text" class="input-xlarge focused" name="city" id="city" value="">
								</div>
							  </div>
							  <input type="hidden" id="lat" value="" name="lat"/>
							  <input type="hidden" id="lng" value="" name="lng"/>

							  <div class="control-group">
								<label class="control-label" for="focusedInput">Venue</label>
								<div class="controls">
									<textarea class="span8 input-xlarge focused" rows="3" name="venue"></textarea>
								</div>
							  </div>

							  <div class="control-group">
								<label class="control-label" for="focusedInput">Start Date</label>
								<div class="controls">
									<input type="text" class="input-xlarge focused" name="start_date" id="start_date" value="">
								</div>
							  </div>

							  <div class="control-group">
								<label class="control-label" for="focusedInput">Start Time</label>
								<div class="controls">
									<input type="text" class="input-xlarge focused" name="start_time" id="start_time" value="">
								</div>
							  </div>

							  <div class="control-group">
								<label class="control-label" for="focusedInput">End Date</label>
								<div class="controls">
									<input type="text" class="input-xlarge focused" name="end_date" id="end_date" value="">
								</div>
							  </div>

							  <div class="control-group">
								<label class="control-label" for="focusedInput">End Time</label>
								<div class="controls">
									<input type="text" class="input-xlarge focused" name="end_time" id="end_time" value="">
								</div>
							  </div>

							  <div class="control-group">
								<label class="control-label" for="focusedInput">Choose an event Logo</label>
								<div class="controls">
									{{ Form::file('file', array("title"=>'Choose a file', "id"=>"logo")) }}
								</div>
							  </div>

							  <div class="control-group">
								<label class="control-label" for="focusedInput">User ID</label>
								<div class="controls">
									<input type="text" class="input-xlarge focused" name="user_id" id="user_id" value="">
								</div>
							  </div>

							  <h3> Event Tickets </h3>

							  <div id="ticket_group">
							  <div class="control-group">
								<label class="control-label" for="focusedInput">Title</label>
								<div class="controls">
									<input type="text" class="input-xlarge focused" name="ticket_title[]" id="ticket_title" value="">
								</div>
							  </div>

							  <div class="control-group">
								<label class="control-label" for="focusedInput">Price</label>
								<div class="controls">
									<input type="text" class="input-xlarge focused" name="price[]" id="price" value="">
								</div>
							  </div>
							  
							  <div class="control-group">
								<label class="control-label" for="focusedInput">Seats</label>
								<div class="controls">
									<input type="text" class="input-xlarge focused" name="seats[]" id="seats" value="">
								</div>
							  </div>

							  <div class="control-group">
								<label class="control-label" for="selectError3">Fees type</label>
								<div class="controls">
									{{ Form::select('fees_type[]', array('0' => "Pass Fees", '1' => "Absorb Fees", "2" => "Split Fees"), "0",array('class' => 'span3 select2', 'id' => 'fees_type')) }}
								  
								</div>
							  </div>
							  </div>
							  
							    <div class="control-group">
				
								<div class="controls">
									<input type="button" class="btn btn-success" id="more_tickets" value="+ Add More Tickets" />
								  
								</div>
							  </div>

							  <h3> More Info</h3>

							   <div class="control-group">
								<label class="control-label" for="selectError3">Event Type</label>
								<div class="controls">
									{{ Form::select('eventtype', $eventtypes, "",array('class' => 'span3 select2')) }}
								  
								</div>
							  </div>

							   <div class="control-group">
								<label class="control-label" for="selectError3">Event Category</label>
								<div class="controls">
									{{ Form::select('eventcat', $eventcat, "",array('class' => 'span3 select2')) }}
								  
								</div>
							  </div>

							  <div class="form-actions">
								<button type="submit" class="btn btn-primary">Create</button>
							  </div>
							</fieldset>
						  </form>
					
					</div>
				</div><!--/span-->
			
			</div><!--/row-->


@stop

	

	
@section('css')

<link href="{{ asset('/timepicker/jquery.timepicker.css') }}" rel="stylesheet">

@stop

@section('js')

 <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places"></script>

  <script src="{{ URL::to('/timepicker/jquery.timepicker.min.js') }}"></script>

<script>

var ticket_counter = 0;

$(function() {
    $( "#start_date" ).datepicker({dateFormat : 'yy-mm-dd'});
    $('#start_time').timepicker();
     $( "#end_date" ).datepicker({dateFormat : 'yy-mm-dd'});
    $('#end_time').timepicker();
  });


	
var input = $("#city").get(0);
 var autocomplete = new google.maps.places.Autocomplete(input);
 
var input = document.getElementById('city');
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


$(function(){
	
	 
    $("#more_tickets").click(function(){
	    
	    
	    //ticket_counter = ticket_counter + 1;
	    
	   // for(var i=0;i<ticket_counter;i++){ 
	    $("#ticket_group").append('<div class="control-group"><label class="control-label" for="focusedInput">Title</label><div class="controls"><input type="text" class="input-xlarge focused" name="ticket_title[]" id="ticket_title" value=""></div></div><div class="control-group"><label class="control-label" for="focusedInput">Price</label><div class="controls"><input type="text" class="input-xlarge focused" name="price[]" id="price" value=""></div></div><div class="control-group"><label class="control-label" for="focusedInput">Seats</label><div class="controls"><input type="text" class="input-xlarge focused" name="seats[]" id="seats" value=""></div></div>');
	    
	    $("#ticket_group").append('<div class="control-group"><label class="control-label" for="selectError3">Fees type</label><div class="controls"><select class="span3 select2" id="fees_type" name="fees_type[]"><option value="0" selected="selected">Pass Fees</option><option value="1">Absorb Fees</option><option value="2">Split Fees</option></select></div></div>');
	   
	   
	   
	    
	    
	    
    });

	
	
	
})

</script>

@stop
