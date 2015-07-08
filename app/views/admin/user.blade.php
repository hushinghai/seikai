@extends('admin.pageshell')


@section('content')


			<div class="row-fluid sortable">		
				<div class="box span12">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon white user"></i><span class="break"></span>Users</h2>
						
					</div>
					<div class="box-content">
						<table class="table table-striped table-bordered bootstrap-datatable datatable">
						  <thead>
							  <tr>

							  	<th>Id</th>
								<th>Photo</th>
								<th>Email</th>
								<th>City</th>
								  <th>Username</th>
								  <th>Date registered</th>
								  <th>Status</th>
								  <th>Actions</th>
							  </tr>
						  </thead>   
						  <tbody>
						  	@foreach($users as $user)
							<tr>
								<td>{{$user->id}} </td>
								<td>
									@if($user->image_url)
										<img src="{{URL::to('uploads/profile_images/'.$user->image_url)}}" alt="" height="45px" width="45px" /></td>
									@endif
								<td>{{$user->email}} </td>
								<td >{{$user->city}}</td>
								<td><a href="{{ URL::to('/profile/'.$user->id)}}" target="_blank">{{$user->name}}</a></td>
								<td>{{$user->created_at}}</td>
								<td class="center">

									@if($user->role == 1)
										<span class="label">Disabled</span>
									@else

									@if($user->verified == 0)
										<span class="label label-warning">Not verified</span>
									@elseif($user->verified == 1)
										<span class="label label-success">Active</span>
									
									@endif

									@endif
								</td>
								<td class="center" >

									@if($user->role == 1)
										<a class="btn btn-success enable_user_icon" href="#" data-userid='{{$user->id}}'>
											<i class="halflings-icon white trash"></i> 
										</a>
									@else
									
										@if($user->verified == 0)
											<a class="btn btn-success verify_user_icon" href="#" data-userid='{{$user->id}}' >
												<i class="halflings-icon white zoom-in"></i>
											</a>
										@else
											<a class="btn btn-danger disable_user_icon" href="#" data-userid="{{ $user->id }}">
												<i class="halflings-icon white trash"></i>
											</a>
										@endif
									@endif
									
								</td>
							</tr>
							@endforeach
   						</tbody>

					</table>  
						    
				</div>
			</div><!--/span-->
		</div><!--/row-->

		<div class="modal hide fade" id="deleteuser">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">×</button>
				<h3>Delete</h3>
			</div>
			<div class="modal-body">
				<p>Are you sure you want to delete this user?</p>
			</div>
			<form action="{{URL::to('/admin/deleteuser')}}" id="delete-form" class="form-horizontal" method="post">
				<input type="text" class="hide" name="delete_userid" id="delete_userid" />
				<div class="modal-footer">
				<a href="#" class="btn" data-dismiss="modal">Cancel</a>
				<input type="submit" class="btn btn-primary" value="Delete"/>
			</div>

			</form>


			
		</div>

		<div class="modal hide fade" id="verifyuser">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">×</button>
				<h3>Verify</h3>
			</div>
			<div class="modal-body">
				<p>Are you sure you want to verify this user?</p>
			</div>
			<form action="{{URL::to('/admin/verifyuser')}}" id="delete-form" class="form-horizontal" method="post">
				<input type="text" class="hide" name="verify_userid" id="verify_userid" />
				<div class="modal-footer">
				<a href="#" class="btn" data-dismiss="modal">Cancel</a>
				<input type="submit" class="btn btn-primary" value="Verify"/>
			</div>

			</form>
		</div>

		<div class="modal hide fade" id="disableuser">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">×</button>
				<h3>Disable</h3>
			</div>
			<div class="modal-body">
				<p>Are you sure you want to disable this user?</p>
			</div>
			<form action="{{URL::to('/admin/disableuser')}}" id="delete-form" class="form-horizontal" method="post">
				<input type="text" class="hide" name="disable_userid" id="disable_userid" />
				<div class="modal-footer">
				<a href="#" class="btn" data-dismiss="modal">Cancel</a>
				<input type="submit" class="btn btn-primary" value="Disable"/>
			</div>

			</form>
		</div>

		<div class="modal fade" id="enableuser">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">×</button>
				<h3>Enable</h3>
			</div>
			<div class="modal-body">
				<p>Are you sure you want to enable this user?</p>
			</div>
			<form action="{{URL::to('/admin/enableuser')}}" id="delete-form" class="form-horizontal" method="post">
				<input type="text" class="hide" name="enable_userid" id="enable_userid" />
				<div class="modal-footer">
				<a href="#" class="btn" data-dismiss="modal">Cancel</a>
				<input type="submit" class="btn btn-primary" value="Enable"/>
			</div>

			</form>
		</div>



@stop


@section('js')

<script type="text/javascript">


		$(".delete_user_icon").click(function(e){
			var user_id =  $(this).data('userid');
		 	$("#delete_userid").val(user_id);
		 	$('#deleteuser').modal('show');
		})

		$(".disable_user_icon").click(function(e){
			var user_id = $(this).data('userid');
		 	$("#disable_userid").val(user_id);
		 	$('#disableuser').modal('show');
		})

		$(".verify_user_icon").click(function(e){
			var user_id =  $(this).data('userid');
		 	$("#verify_userid").val(user_id);
		 	$('#verifyuser').modal('show');
		})

		$(".enable_user_icon").click(function(e){
			var user_id =  $(this).data('userid');
		 	$("#enable_userid").val(user_id);
		 	$('#enableuser').modal('show');
		})

	/*function delete1()
	{
		var user_id = $($(e.target).parent()).data('userid');
		alert(userid);
		$('#deleteuser').modal('show');
	}*/



</script>
@stop	
