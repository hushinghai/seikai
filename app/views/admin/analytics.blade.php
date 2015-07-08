@extends('admin.pageshell')


@section('content')


<div class="row-fluid sortable">
				<div class="box span12">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon white edit"></i><span class="break"></span>Google Analytics</h2>
						
					</div>

					@if(Session::has('updated'))
			
						<div class="alert alert-success">
							<button type="button" class="close" data-dismiss="alert">×</button>
							Settings have been updated
						</div>
					@endif

					<div class="box-content">
						<form class="form-horizontal" action="{{URL::to('/admin/analyticssettings')}}" method="post">
							<fieldset>
							  <div class="control-group">
								<label class="control-label" for="focusedInput">Account Number</label>
								<div class="controls">
									<input type="text" class="input-xlarge focused" name="account_no" id="username1_input" value="{{$account_no}}">
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

	
