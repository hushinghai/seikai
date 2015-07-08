@extends('admin.pageshell')


@section('content')


<div class="row-fluid sortable">
				<div class="box span12">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon white edit"></i><span class="break"></span>Paypal</h2>
						
					</div>

					@if(Session::has('updated'))
			
						<div class="alert alert-success">
							<button type="button" class="close" data-dismiss="alert">×</button>
							Settings have been updated
						</div>
					@endif

                    @if(Session::has('errors'))
                            <div class="alert alert-error">
							<button type="button" class="close" data-dismiss="alert">×</button>
							Enter Valid UserName
						</div>
					@endif     

					<div class="box-content">
						<form class="form-horizontal" action="{{URL::to('/admin/paypalsettings')}}" method="post">
							<fieldset>
							  <div class="control-group">
								<label class="control-label" for="focusedInput">Paypal Business Account UserName</label>
								<div class="controls">
									<input type="text" class="input-xlarge focused" name="paypalusername" id="username1_input" value="{{$paypalusername}}">
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

	
