@extends('admin.pageshell')


@section('content')

			<div class="row-fluid sortable">		
				<div class="box span12">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon white user"></i><span class="break"></span>Organiser Management</h2>
						
					</div>
					<div class="box-content">
						<table class="table table-striped table-bordered bootstrap-datatable datatable">
						  <thead>
							  <tr>

							  	<th>Organiser</th>
								<th>No of Events</th>
								<th>No of Tickets sold</th>
								<th>Amount Paid</th>
								<th>Amount to be paid</th>
								<th>Action</th>
							  </tr>
						  </thead>   
						  <tbody>
						  	@foreach($organisers as $organiser)
							<tr>
								<td><a href="{{ URL::to('events/organizerprofile/'.$organiser->user_id)}}" target="_blank">{{$organiser->user_name}}</a></td>
								<td>{{$organiser->no_events}} </td>
								<td>{{$organiser->no_tickets}} </td>
								<td>{{$organiser->amount_paid}} </td>
								<td>{{$organiser->amount_due}}</td>
								<td class="center" data-id='{{$organiser->user_id}}'>
									<a class="btn btn-success pay_user" href="#">Pay</a>
								</td>
								
							</tr>
							@endforeach
   						</tbody>

					</table>  
						    
				</div>
			</div><!--/span-->
		</div><!--/row-->






<div class="modal fade" id="pay">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">×</button>
				<h3>Pay</h3>
			</div>
			
			<form action="{{URL::to('/admin/payorganiser')}}" id="pay-form" class="form-horizontal" method="post">
				<input type="text" class="hide" name="id" id="id" />
				<div class="control-group">
					<label class="control-label" for="focusedInput">Amount</label>
					<div class="controls">
						<input type="text" class="input-xlarge focused" name="amount" id="amount">

					</div>
					<span id="amount_error" class="hide">Amount should be a number </span>
					

				</div>

				<div class="modal-footer">
				<a href="#" class="btn" data-dismiss="modal">Cancel</a>
				<input type="submit" class="btn btn-primary" id="pay_btn" value="Pay"/>
			</div>

			</form>
		</div>

@stop

@section('js')

<script type="text/javascript">


		
		$(".pay_user").click(function(e){
			var id = $($(e.target).parent()).data('id');
		 	$("#id").val(id);
		 	$('#pay').modal('show');
		})

		$('#pay_btn').click(function(e) {
			e.preventDefault();
			if(isNaN($("#amount").val())) {
				$('#amount_error').show();
			} else {
				$('#pay-form').submit();
				$('#amount_error').hide();
			}
		})

</script>
@stop	


