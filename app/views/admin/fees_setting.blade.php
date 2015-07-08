@extends('admin.pageshell')


@section('content')



<div class="row-fluid sortable">
				<div class="box span12">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon white edit"></i><span class="break"></span>Transaction Fees</h2>
						
					</div>

					@if(Session::has('updated'))
			
						<div class="alert alert-success">
							<button type="button" class="close" data-dismiss="alert">×</button>
							Settings have been updated
						</div>
					@endif

					<div class="box-content">
						<form class="form-horizontal" action="{{URL::to('/admin/feessettings')}}" method="post">
							<fieldset>
							  <div class="control-group">
								<label class="control-label" for="focusedInput">Payment Fees</label>
								<div class="controls">
									<input type="text" class="input-xlarge focused" name="payment_fees" id="payment_fees" value="{{$payment_fees}}">
								</div>
							  </div>
							 
							  <div class="control-group">
								<label class="control-label" for="focusedInput">Booking Base Fees</label>
								<div class="controls">
									<input type="text" class="input-xlarge focused" name="booking_fees_base" id="booking_fees_base"  value="{{$booking_fees_base}}">
								</div>
							  </div>

							  <div class="control-group">
								<label class="control-label" for="focusedInput">Booking Fees</label>
								<div class="controls">
									<input type="text" class="input-xlarge focused" name="booking_fees" id="booking_fees"  value="{{$booking_fees}}">
								</div>
							  </div>
							  
							  
							  <div class="form-actions">
								<button type="submit" class="btn btn-primary">Save changes</button>
							  </div>
							</fieldset>
						  </form>
					
					</div>
				</div><!--/span-->
			
			</div><!--/row-->



@stop
