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
								<th>Transaction Id</th>
								<th>Event</th>
								<th>User Email ID</th>
								<th>Type</th>
								<th>Amount User Paid</th>
								<th>Payment Fees</th>
								<th>Booking Fees</th>
								<th>Amout To Be Paid</th>
								<th>Currency</th>
								<th>Transaction Date</th>
								<th>Status</th>
							  </tr>
						  </thead>   
						  <tbody>
						  	@foreach($transactions as $transaction)
							<tr>
								<td>{{$transaction->id}} </td>
								
								<td>{{$transaction->transaction_id}} </td>
								<td><a href="{{ URL::to('/event/'.$transaction->event_id)}}" target="_blank">{{$transaction->event_name}}</a></td>
								<td><a href="{{ URL::to('/profile/'.$transaction->user_id)}}" target="_blank">{{$transaction->email}}</a></td>
								<td>{{$transaction->type}} </td>
								<td>{{$transaction->amount}} </td>
								<td>{{$transaction->payment_fees}} </td>
								<td>{{$transaction->booking_fees}} </td>
								<td>{{$transaction->amount_to_be_paid}} </td>
								<td>{{$transaction->currency}} </td>
								<td>{{$transaction->created_at}}</td>
								<td class="center">

									@if($transaction->status == 0)
										<span class="label label-important">Failed</span>
									@else
										<span class="label label-success">Success</span>

									@endif
								</td>
								
							</tr>
							@endforeach
   						</tbody>

					</table>  
						    
				</div>
			</div><!--/span-->
		</div><!--/row-->

@stop

