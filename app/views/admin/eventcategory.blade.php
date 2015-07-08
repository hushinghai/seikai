@extends('admin.pageshell')


@section('content')


			<div class="row-fluid sortable">		
				<div class="box span12">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon white user"></i><span class="break"></span>Current Event Categories</h2>
						
					</div>
					<div class="box-content">
						<table class="table table-striped table-bordered bootstrap-datatable datatable">
						  <thead>
							  <tr>

							  	<th>Id</th>
							  	<th>Image</th>
								<th>Name</th>
								<th>Description</th>
								<th>No of events</th>
								<th>Date Created</th>
								<th>Action</th>
							  </tr>
						  </thead>   
						  <tbody>
						  	@foreach($categories1 as $category)
						  	
							<tr>
								<td>{{$category->id}} </td>
								<td>
									@if($category->image_url)
										<img src="{{URL::to('uploads/category_images/'.$category->image_url)}}" alt="" height="64px" width="64px" />
									@endif
								</td>	
								<td>{{$category->name}} </td>
								<td>{{$category->description}} </td>
								<td>{{$category->no_events}} </td>
								<td>{{$category->created_at}}</td>
								<td class="center" data-id='{{$category->id}}' data-name="{{$category->name}}" data-description="{{$category->description}}" data-img="{{URL::to('uploads/category_images/'.$category->image_url)}}" >

									<a class="btn btn-danger delete_icon" href="#">Delete</a>
									<a class="btn btn-success edit_icon" href="#">Edit</a>
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
						<h2><i class="halflings-icon white edit"></i><span class="break"></span>Create New Category</h2>
						
					</div>


					<div class="box-content">
					    {{ Form::open(array('url' => URL::to("/admin/createeventcategory"), 'files' => true)) }}
							<fieldset>
							  <div class="control-group">
								<label class="control-label" for="focusedInput">Title</label>
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
								<label class="control-label" for="focusedInput">Choose a Category Logo</label>
								<div class="controls">
									{{ Form::file('file', array("title"=>'Choose a file', "id"=>"catlogo")) }}
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

		<div class="modal hide fade" id="delete">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">×</button>
				<h3>Delete</h3>
			</div>
			<div class="modal-body">
				<p>Deleting the category will disable all the events in the category. Are you sure you want to delete this event category?</p>
			</div>
			<form action="{{URL::to('/admin/deleteeventcategory')}}" id="delete-form" class="form-horizontal" method="post">
				<input type="text" class="hide" name="delete_id" id="delete_id" />
				<div class="modal-footer">
				<a href="#" class="btn" data-dismiss="modal">Cancel</a>
				<input type="submit" class="btn btn-danger" value="Delete"/>
			</div>

			</form>
		</div>

		<div class="modal fade" id="edit">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">×</button>
				<h3>Edit</h3>
			</div>
			<div class="modal-body">
				{{ Form::open(array('url' => URL::to("/admin/editeventcategory"), 'files' => true)) }}
							<fieldset>
							  <div class="control-group">
								<label class="control-label" for="focusedInput">Title</label>
								<div class="controls">
									<input type="text" class="input-xlarge focused" name="name" id="cat_name" value="">
								</div>
							  </div>

							  <div class="control-group">
								<label class="control-label" for="focusedInput">Description</label>
								<div class="controls">
									<textarea class="span8 input-xlarge focused" rows="3" id="cat_description" name="description"></textarea>
								</div>
							  </div>
							  
							  <div class="control-group">
								<label class="control-label" for="focusedInput">Current Logo</label>
								<div class="controls">
									<img src="" height="64px" width="64px" id="cat_img">
								</div>
							  </div>
							  

							  <div class="control-group">
								<label class="control-label" for="focusedInput">To change Category Logo choose a new image</label>
								<div class="controls">
									{{ Form::file('file', array("title"=>'Choose a file', "id"=>"catlogo")) }}
								</div>
							  </div>
					<input type="hidden" name="edit_id" id="edit_id" />
					
			</div>	
			<div class="modal-footer">

				<a href="#" class="btn" data-dismiss="modal">Cancel</a>
				<input type="submit" class="btn btn-primary" value="Edit"/>
			</div>

			</form>
		</div>

@stop

@section('js')

<script type="text/javascript">


		
		$(".delete_icon").click(function(e){
			var id = $($(e.target).parent()).data('id');
		 	$("#delete_id").val(id);
		 	$('#delete').modal('show');
		 	$('#edit').css("display", "none");
		});

		$(".edit_icon").click(function(e){
			var id = $($(e.target).parent()).data('id');
			var name = $($(e.target).parent()).data('name');
			var desc = $($(e.target).parent()).data('description');
			var img = $($(e.target).parent()).data('img');
		 	$("#edit_id").val(id);
		 	$("#cat_name").val(name);
		 	$("#cat_description").val(desc);
		 	$("#cat_img").attr("src",img);
		 	$('#edit').modal('show');
		});


</script>
@stop	
