@extends('admin.pageshell')


@section('content')

<div class="row-fluid sortable">
				<div class="box span12">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon white edit"></i><span class="break"></span>General</h2>
						
					</div>

					@if(Session::has('general_updated'))
			
						<div class="alert alert-success">
							<button type="button" class="close" data-dismiss="alert">×</button>
							Settings have been updated
						</div>
					@endif

					<div class="box-content">
						<form class="form-horizontal" action="{{URL::to('/admin/generalsettings')}}" method="post">
							<fieldset>
							  <div class="control-group">
								<label class="control-label" for="focusedInput">Website Title</label>
								<div class="controls">
									<input type="text" class="input-xlarge focused" name="title" id="title" value="{{$siteTitle}}">
								</div>
							  </div>
							 
							  <div class="control-group">
								<label class="control-label" for="selectError3">Maintainance Mode</label>
								<div class="controls">
									{{ Form::select('mode', array('0' => "Disable", '1' => "Enable"), $mode ,array('class' => 'span3 select2')) }}

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


<div class="row-fluid sortable">
				<div class="box span12">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon white edit"></i><span class="break"></span>Site Logo</h2>
						
					</div>

					@if(Session::has('logo_updated'))
			
						<div class="alert alert-success">
							<button type="button" class="close" data-dismiss="alert">×</button>
							Settings have been updated
						</div>
					@endif

					<div class="box-content">

						@if($sitelogourl == null) 
							<p class="text-error">Application currently does not have any logo</p>
						@else
							<div class="span12">
								<div class="well span6"><p><strong>Current Logo </strong></p><br/>
									<img class="img"  src="{{URL::to('uploads/app/'.$sitelogourl)}}" /><br/><br/>
									<p>
										<form action="{{URL::to('/admin/deletesitelogo')}}" id="form-general" class="form-horizontal" method="post">
											<input type="submit" class="btn btn-large btn-danger" value="Delete"/>
										{{Form::close()}} 
									</p>
								</div>
							</div><br/><br/>
						@endif 
							{{ Form::open(array('url' => URL::to("/admin/uploadsitelogo"), 'files' => true )) }}
							<fieldset>
							  <div class="control-group">
								<label class="control-label" for="focusedInput">Change Logo</label>
								<div class="controls">
									{{ Form::file('photo', array("title"=>'Choose a file', "id"=>"sitePhoto")) }}
								</div>
							  </div>
							 
							  
							  <div class="form-actions">
								<input type="submit" class="btn btn-primary" value="Upload" id="siteLogoBtn" />
									{{ Form::close() }}
							   </div>
							  
							</fieldset>
					
					</div>
				</div><!--/span-->
			
			</div><!--/row-->


			<!-- <div class="row-fluid sortable">
				<div class="box span12">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon white edit"></i><span class="break"></span>Site Favicon</h2>
						
					</div>

					@if(Session::has('favicon_updated'))
			
						<div class="alert alert-success">
							<button type="button" class="close" data-dismiss="alert">×</button>
							Settings have been updated
						</div>
					@endif

					<div class="box-content">

						@if($sitefaviconurl == null) 
							<p class="text-error">Application currently does not have any favicon</p>
						@else
							<div class="span12">
								<div class="well span6"><p><strong>Current Favicon </strong></p><br/>
									<img class="img"  src="{{URL::to('uploads/app/'.$sitefaviconurl)}}" /><br/><br/>
									<p>
										<form action="{{URL::to('/admin/deletefavicon')}}" id="form-general" class="form-horizontal" method="post" >
											<input type="submit" class="btn btn-large btn-danger" value="Delete"/>
										{{Form::close()}} 
									</p>
								</div>
							</div><br/><br/>
						@endif 
							{{ Form::open(array('url' => URL::to("/admin/uploadfavicon"), 'files' => true )) }}
							<fieldset>
							  <div class="control-group">
								<label class="control-label" for="focusedInput">Change Favicon</label>
								<div class="controls">
									{{ Form::file('photo', array("title"=>'Choose a file', "id"=>"faviconPhoto")) }}
								</div>
							  </div>
							 
							  
							  <div class="form-actions">
								<input type="submit" class="btn btn-primary" value="Upload" id="siteLogoBtn" />
									{{ Form::close() }}
							   </div>
							  
							</fieldset>
					
					</div>
				</div> 
			
			</div> -->


@stop

	
