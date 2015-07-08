@extends('admin.pageshell')


@section('content')
   
<div class="row-fluid sortable">	
				<div class="box span12">
					<div class="box-header">
						<h2><i class="halflings-icon white align-justify"></i><span class="break"></span>Dashboard</h2>
						<div class="box-icon">
							<a href="#" class="btn-setting"><i class="halflings-icon white wrench"></i></a>
							<a href="#" class="btn-minimize"><i class="halflings-icon white chevron-up"></i></a>
							<a href="#" class="btn-close"><i class="halflings-icon white remove"></i></a>
						</div>
					</div>
					<div class="box-content">
						<table class="table table-bordered table-striped table-condensed">
							  <thead>
								  <tr>
									  <th>UserData</th>
								  </tr>
							  </thead>   
							  <tbody>
								<tr>
									<td>Total Number of Users</td>
									<td> {{$users_total}}</td>
								</tr>
								<tr>
									<td>Users that registered today</td>
									<td> {{$users_today}}</td>
								</tr>
								<tr>
									<td>Users that registered in last 7 days</td>
									<td> {{$users_week}}</td>
								</tr>
								<tr>
									<td>Users that registered in last 30 days</td>
									<td> {{$users_month}}</td>
								</tr>                            
							  </tbody>

							  <thead>
									<tr>
										<th>Events Data</th>
									</tr>
								</thead>
								
								<tbody>
									<tr>
										<td>Total Number of Events</td>
										<td> {{$events_total}}</td>
									</tr>
									<tr>
										<td>Events created Today</td>
										<td> {{$events_today}}</td>
									</tr>
									<tr>
										<td>Events created in last 7 days</td>
										<td> {{$events_week}}</td>
									</tr>
									<tr>
										<td>Events created in last 30 days</td>
										<td> {{$events_month}}</td>
									</tr>
									
								</tbody>


								<thead>
									<tr>
										<th>Tickets Data</th>
									</tr>
								</thead>
								
								<tbody>
									<tr>
										<td>Total Number of Tickets sold</td>
										<td> {{$tickets_total}}</td>
									</tr>
									<tr>
										<td>Free Tickets sold</td>
										<td> {{$free_tickets}}</td>
									</tr>
									<tr>
										<td>Paid Tickets sold</td>
										<td> {{$paid_tickets}}</td>
									</tr>
									
									<tr>
										<td>Tickets sold Today</td>
										<td> {{$tickets_today}}</td>
									</tr>
									<tr>
										<td>Tickets sold in last 7 days</td>
										<td> {{$tickets_week}}</td>
									</tr>
									<tr>
										<td>Tickets sold in last 30 days</td>
										<td> {{$tickets_month}}</td>
									</tr>
									
								</tbody>

								<thead>
									<tr>
										<th>Financial Data</th>
									</tr>
								</thead>
								
								<tbody>
									<tr>
										<td>Total Revenue Generated</td>
										<td> {{$revenue}}</td>
									</tr>
									<tr>
										<td>Overall Profits</td>
										<td> {{$profit}}</td>
									</tr>

									<tr>
										<td>Profits Today</td>
										<td> {{$profit_today}}</td>
									</tr>

									<tr>
										<td>Profits in last 7 days</td>
										<td> {{$profit_week}}</td>
									</tr>

									<tr>
										<td>Profits in last 30 days</td>
										<td> {{$profit_month}}</td>
									</tr>

									<tr>
										<td>Payouts Left</td>
										<td> {{$payout_left}}</td>
									</tr>
								</tbody>
						 </table>  
						    
					</div>
				</div><!--/span-->
			</div><!--/row-->



@stop
