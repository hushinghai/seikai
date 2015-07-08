@extends('admin.pageshell')


@section('content')

<div class="row-fluid sortable">
				<div class="box span12">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon white edit"></i><span class="break"></span>Event List based on city</h2>
						
					</div>

					<div class="box-content">	

			      {{ Form::open(array('url' => URL::to("/api/events") ,'class'=>"form-horizontal") )}}


			        {{ Form::text('city', '', array(
			            'placeholder' => 'city','id'=>'city1')) }}

			         </br>   

			        {{ Form::text('user_id', '', array(
			            'placeholder' => 'user id')) }}

			             </br>  

			        <input type="hidden" id="lat1" name="lat">
			        <input type="hidden" id="lng1" name="lng">

			        {{ Form::text('search', '', array(
			            'placeholder' => 'Search Term')) }}
			        </br>
			        {{ Form::submit('Search', array('name' => 'send')) }}

			        {{ Form::close() }}

					</div>
				</div><!--/span-->
			
			</div><!--/row-->

			<div class="row-fluid sortable">
				<div class="box span12">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon white edit"></i><span class="break"></span>Given Event Category id</h2>
						
					</div>

					<div class="box-content">	

					      {{ Form::open(array('url' => URL::to("/api/category"))) }}

					        {{ Form::text('id', '', array(
					            'placeholder' => 'category id')) }}
					        </br> 

					        {{ Form::text('city', '', array(
					            'placeholder' => 'city','id'=>'city2')) }}

					        <input type="hidden" id="lat2" name="lat">
			        		<input type="hidden" id="lng2" name="lng">    
					         </br>   

					        {{ Form::text('user_id', '', array(
					            'placeholder' => 'user id')) }}
					        </br>
					        {{ Form::submit('Search', array('name' => 'send')) }}

					        {{ Form::close() }}
					</div>
				</div><!--/span-->
			
			</div><!--/row-->


			<div class="row-fluid sortable">
				<div class="box span12">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon white edit"></i><span class="break"></span>User Events</h2>
						
					</div>

					<div class="box-content">	

					      {{ Form::open(array('url' => URL::to("/api/savedevents"))) }}

					        {{ Form::text('user_id', '', array(
					            'placeholder' => 'user id')) }}
					        </br>
					        {{ Form::submit('Search', array('name' => 'send')) }}

					        {{ Form::close() }}
					</div>
				</div><!--/span-->
			
			</div><!--/row-->




			<div class="row-fluid sortable">
				<div class="box span12">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon white edit"></i><span class="break"></span>Save Event for user</h2>
						
					</div>

					<div class="box-content">	

					      {{ Form::open(array('url' => URL::to("/api/saveuserevent"))) }}

					        {{ Form::text('user_id', '', array(
					            'placeholder' => 'user id')) }}

					        </br>
					        

					        {{ Form::text('event_id', '', array(
					            'placeholder' => 'event id')) }}  

					        </br>      
					        
					        {{ Form::submit('Save Event', array('name' => 'send')) }}

					        {{ Form::close() }}
					</div>
				</div><!--/span-->
			
			</div><!--/row-->



			<div class="row-fluid sortable">
				<div class="box span12">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon white edit"></i><span class="break"></span>Event details given event id </h2>
						
					</div>

					<div class="box-content">	

					      {{ Form::open(array('url' => URL::to("/api/eventdetails"))) }}

					        {{ Form::text('user_id', '', array(
					            'placeholder' => 'user id')) }}

					        </br>
					        

					        {{ Form::text('event_id', '', array(
					            'placeholder' => 'event id')) }}  

					        </br>      
					        
					        {{ Form::submit('Get Details', array('name' => 'send')) }}

					        {{ Form::close() }}
					</div>
				</div><!--/span-->
			
			</div><!--/row-->

			


			<div class="row-fluid sortable">
				<div class="box span12">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon white edit"></i><span class="break"></span>Organiser Details</h2>
						
					</div>

					<div class="box-content">	

					      {{ Form::open(array('url' => URL::to("/api/organiserdetails"))) }}

				        {{ Form::text('id', '', array(
				            'placeholder' => 'Organiser id')) }}
				        </br>
				        {{ Form::submit('Search', array('name' => 'send')) }}

				        {{ Form::close() }}
					</div>
				</div><!--/span-->
			
			</div><!--/row-->


			<div class="row-fluid sortable">
				<div class="box span12">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon white edit"></i><span class="break"></span>Tickets purchased by given user</h2>
						
					</div>

					<div class="box-content">	

					      {{ Form::open(array('url' => URL::to("/api/mytickets"))) }}

					        {{ Form::text('id', '', array(
					            'placeholder' => 'User id')) }}
					        </br>
					        {{ Form::submit('Search', array('name' => 'send')) }}

					        {{ Form::close() }}
					</div>
				</div><!--/span-->
			
			</div><!--/row-->


      
			<div class="row-fluid sortable">
				<div class="box span12">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon white edit"></i><span class="break"></span>Login</h2>
						
					</div>

					<div class="box-content">	

					      {{ Form::open(array('url' => URL::to("/api/login"))) }}

					        {{ Form::text('email', '', array(
					            'placeholder' => 'email')) }}

					        </br>
					        

					        {{ Form::text('password', '', array(
					            'placeholder' => 'password')) }}  

					        </br>      
					        
					        {{ Form::submit('Login', array('name' => 'send')) }}

					        {{ Form::close() }}
					</div>
				</div><!--/span-->
			
			</div><!--/row-->
      


         <div style="margin:30px">  </div>
      


@stop

	@section('js')

 <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places"></script>

<script>
  
var input = $("#city1").get(0);
 var autocomplete = new google.maps.places.Autocomplete(input);
 
var input = document.getElementById('city1');
  google.maps.event.addDomListener(input, 'keydown', function(e) { 
    if (e.keyCode == 13) { 
        e.preventDefault(); 
    }
  }); 

google.maps.event.addListener(autocomplete, 'place_changed', function() {
    
    var place = autocomplete.getPlace();
    
    $("#lat1").val(place.geometry.location.lat());

    $("#lng1").val(place.geometry.location.lng());

    });

var input2 = $("#city2").get(0);
 var autocomplete2 = new google.maps.places.Autocomplete(input2);
 
var input2 = document.getElementById('city2');
  google.maps.event.addDomListener(input2, 'keydown', function(e) { 
    if (e.keyCode == 13) { 
        e.preventDefault(); 
    }
  }); 

google.maps.event.addListener(autocomplete2, 'place_changed', function() {
    
    var place = autocomplete2.getPlace();
    
    $("#lat2").val(place.geometry.location.lat());

    $("#lng2").val(place.geometry.location.lng());

    });

</script>
@stop
