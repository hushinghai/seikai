@extends('admin.pageshell')


@section('content')


			<div class="row-fluid sortable">		
				<div class="box span12">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon white user"></i><span class="break"></span>Events</h2>
						
					</div>
					<div class="box-content">
						<table class="table table-striped table-bordered bootstrap-datatable datatable">
						  <thead>
							  <tr>

							  	<th>Id</th>
								<th>Photo</th>
								<th>Name</th>
								<th>Venue</th>
								<th>Organiser</th>
								<th>Date</th>
								<th>Date Created</th>
								<th>Tickets</th>
								<th>Category</th>
								<th>Type</th>
								<th>Tickets sold</th>
								<th>Actions</th>
							  </tr>
						  </thead>   
						  <tbody>
						  	@foreach($events as $event)
							<tr>
								<td>{{$event->id}} </td>
								<td>
									@if($event->image_url)
										<img src="{{URL::to('uploads/event_logos/'.$event->image_url)}}" alt="" height="45px" width="45px" /></td>
									@endif
								<td>{{$event->name}} </td>
								<td >{{$event->location}}</td>
								<td><a href="{{ URL::to('/profile/'.$event->user_created)}}" target="_blank">{{$event->username}}</a></td>
								<td>{{$event->start_time}} </td>
								<td>{{$event->created_at}}</td>
								<td>
									<ul>
										@foreach($event->tickets as $ticket)
											<li>
												{{$ticket->typename}} : {{$ticket->price}}

											</li>	
										@endforeach
									</ul>	
								</td>	
								<td >{{$event->cat}}</td>
								<td >{{$event->type}}</td>
								<td >{{$event->sold_count}}</td>
								
								<td class="center" data-eventid='{{$event->id}}'>

									@if($event->status == 0)
										<a class="btn btn-danger disable_icon" href="#">Disable</a>
									@else
										<a class="btn btn-success enable_icon" href="#">Enable</a>
									@endif
								</td>
								
							</tr>
							@endforeach
   						</tbody>

					</table>  
						    
				</div>
			</div><!--/span-->
		</div><!--/row-->


		<div class="modal hide fade" id="disableevent">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">×</button>
				<h3>Disable</h3>
			</div>
			<div class="modal-body">
				<p>Are you sure you want to disable this event?</p>
			</div>
			<form action="{{URL::to('/admin/disableevent')}}" id="delete-form" class="form-horizontal" method="post">
				<input type="text" class="hide" name="disable_eventid" id="disable_eventid" />
				<div class="modal-footer">
				<a href="#" class="btn" data-dismiss="modal">Cancel</a>
				<input type="submit" class="btn btn-danger" value="Disable"/>
			</div>

			</form>
		</div>

		<div class="modal fade" id="enableevent">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">×</button>
				<h3>Enable</h3>
			</div>
			<div class="modal-body">
				<p>Are you sure you want to enable this event?</p>
			</div>
			<form action="{{URL::to('/admin/enableevent')}}" id="delete-form" class="form-horizontal" method="post">
				<input type="text" class="hide" name="enable_eventid" id="enable_eventid" />
				<div class="modal-footer">
				<a href="#" class="btn" data-dismiss="modal">Cancel</a>
				<input type="submit" class="btn btn-primary" value="Enable"/>
			</div>

			</form>
		</div>



@stop


@section('js')

<script type="text/javascript">


		
		$(".disable_icon").click(function(e){
			var event_id = $($(e.target).parent()).data('eventid');
		 	$("#disable_eventid").val(event_id);
		 	$('#disableevent').modal('show');
		})

		$(".enable_icon").click(function(e){
			var event_id = $($(e.target).parent()).data('eventid');
		 	$("#enable_eventid").val(event_id);
		 	$('#enableevent').modal('show');
		})


</script>
@stop	
