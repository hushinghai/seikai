@extends('admin.pageshell')


@section('content')


			<div class="row-fluid sortable">		
				<div class="box span12">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon white user"></i><span class="break"></span>Admins</h2>
						
						

					</div>

					@if(Session::has('errors'))
                            <div class="alert alert-error">
							<button type="button" class="close" data-dismiss="alert">×</button>
							Logged in Admin cannot be deleted.
						</div>
						@endif 
					<div class="box-content">
						<table class="table table-striped table-bordered bootstrap-datatable datatable">
						  <thead>
							  <tr>

							  	<th>Id</th>
								 <th>Username</th>
								 <th>Last Login</th>
								  <th>Last IP Address</th>
								  <th>Actions</th>
							  </tr>
						  </thead>   
						  <tbody>
						  	@foreach($admins as $admin)
							<tr>
								<td>{{$admin->id}} </td>
								<td>{{$admin->username}} </td>
								<td>{{$admin->last_login}} </td>
								<td>{{$admin->last_ip}} </td>
								<td class="center" >
									<a class="btn btn-danger delete_icon"  href="#" data-id='{{$admin->id}}'>
										<i class="halflings-icon white trash"></i> 
									</a>
								</td>
							</tr>
							@endforeach
   						</tbody>

					</table>  
						    
				</div>
			</div><!--/span-->
		</div><!--/row-->


		<div class="row-fluid sortable">
				<div class="box span12">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon white edit"></i><span class="break"></span>Create New Admins</h2>
						
					</div>

					<div class="box-content">
						<form class="form-horizontal" action="{{URL::to('/admin/createadmin')}}" method="post">
							<fieldset>
							  <div class="control-group">
								<label class="control-label" for="focusedInput">Username</label>
								<div class="controls">
									<input type="text" class="input-xlarge focused" name="username" id="username" value="">
								</div>
							  </div>
							 
							  <div class="control-group">
								<label class="control-label" for="focusedInput">Password</label>
								<div class="controls">
									<input type="password" class="input-xlarge focused" name="password" id="password"  value="">
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



		<div class="modal hide fade" id="deleteadmin">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">×</button>
				<h3>Delete</h3>
			</div>
			<div class="modal-body">
				<p>Are you sure you want to delete this user?</p>
			</div>
			<form action="{{URL::to('/admin/deleteadmin')}}" id="delete-form" class="form-horizontal" method="post">
				<input type="text" class="hide" name="id" id="id" />
				<div class="modal-footer">
				<a href="#" class="btn" data-dismiss="modal">Cancel</a>
				<input type="submit" class="btn btn-primary" value="Delete"/>
			</div>

			</form>
		</div>




@stop


@section('js')

<script type="text/javascript">


		$(".delete_icon").click(function(e){
			var id = $(e.target).data('id');
		 	$("#id").val(id);
		 	$('#deleteadmin').modal('show');
		})

</script>
@stop	
