@extends('admin.pageshell')


@section('content')


			<div class="row-fluid sortable">		
				<div class="box span12">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon white user"></i><span class="break"></span>Payouts</h2>
						
					</div>
					<div class="box-content">
						<table class="table table-striped table-bordered bootstrap-datatable datatable">
						  <thead>
							  <tr>

							  	<th>Id</th>
								<th> Organiser</th>
								<th>Paid by</th>
								<th>Amount</th>
								<th>Date</th>
								<th>Currency</th>
							  </tr>
						  </thead>   
						  <tbody>
						  	@foreach($payouts as $payout)
							<tr>

								<td>{{$payout->id}} </td>
								
								<td><a href="{{ URL::to('/profile/'.$payout->organiser_id)}}" target="_blank">{{$payout->organiser_name}}</a></td>
								<td>{{$payout->admin}} </td>
								<td>{{$payout->amount}} </td>
								<td>{{$payout->created_at}}</td>
								<td>{{$payout->currency}} </td>
								
							</tr>
							@endforeach
   						</tbody>

					</table>  
						    
				</div>
			</div><!--/span-->
		</div><!--/row-->

@stop

