@extends('admin.pageshell')


@section('content')

<div class="row-fluid sortable">
				<div class="box span12">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon white edit"></i><span class="break"></span>New User</h2>
						
					</div>

					@if(Session::has('successful'))
			
						<div class="alert alert-success">
							<button type="button" class="close" data-dismiss="alert">×</button>
							User created successfully
						</div>
					@endif

					@if(Session::has('user_exists'))
			
						<div class="alert alert-error">
							<button type="button" class="close" data-dismiss="alert">×</button>
							Email ID already registered.. Try another
						</div>
					@endif

					<div class="alert alert-error hide" id="error">
							<button type="button" class="close" data-dismiss="alert">×</button>
							Email and password required.
					</div>

					<div class="box-content">
					    {{ Form::open(array('url' => URL::to("/admin/createuser"), 'files' => true, 'id' => 'create_user_form' )) }}
							<fieldset>
							  <div class="control-group">
								<label class="control-label" for="focusedInput">Email</label>
								<div class="controls">
									<input type="text" class="input-xlarge focused" name="email" id="email" value="">
								</div>
							  </div>
							 
							  <div class="control-group">
								<label class="control-label" for="selectError3">Password</label>
								<div class="controls">
									<input type="password" class="input-xlarge focused" name="password" id="password" value="">
								</div>
							  </div>
							  

							  <h3> Profile (optional) </h3>

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
								<div class="controls">
									<input type="text" class="input-xlarge focused" name="city" id="city" value="">
								</div>
							  </div>
							  <input type="hidden" id="lat" value="" name="lat"/>
							  <input type="hidden" id="lng" value="" name="lng"/>

							  <div class="control-group">
								<label class="control-label" for="focusedInput">Contact Number</label>
								<div class="controls">
									<input type="text" class="input-xlarge focused" name="no" id="no" value="">
								</div>
							  </div>

							  <div class="control-group">
								<label class="control-label" for="focusedInput">Choose a Profile Picture</label>
								<div class="controls">
									{{ Form::file('photo', array("title"=>'Choose a file', "id"=>"profilepic")) }}
								</div>
							  </div>

							  <div class="form-actions">
								<button type="submit" class="btn btn-primary" id="create_user">Create</button>
							  </div>
							</fieldset>
						  </form>
					
					</div>
				</div><!--/span-->
			
			</div><!--/row-->

@stop

	

@section('js')

 <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places"></script>

<script>


	$('#create_user').click(function(e) {
			e.preventDefault();
			
			if($("#email").val() == "" || $("#password").val() == "") {
				$("#error").show();
			
			} else {
				$("#create_user_form").submit();
			}

		})

var input = $("#city").get(0);
 var autocomplete = new google.maps.places.Autocomplete(input);


google.maps.event.addListener(autocomplete, 'place_changed', function() {
    
    var place = autocomplete.getPlace();
    
    $("#lat").val(place.geometry.location.lat());

    $("#lng").val(place.geometry.location.lng());


    });


</script>

@stop
