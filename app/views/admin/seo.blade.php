@extends('admin.pageshell')


@section('content')

<div class="row-fluid sortable">
				<div class="box span12">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon white edit"></i><span class="break"></span>Metadata</h2>
						
					</div>

					@if(Session::has('updated'))
			
						<div class="alert alert-success">
							<button type="button" class="close" data-dismiss="alert">×</button>
							Settings have been updated
						</div>
					@endif

					<div class="box-content">
						<form class="form-horizontal" action="{{URL::to('/admin/seosettings')}}" method="post">
							<fieldset>
							  <div class="control-group">
								<label class="control-label" for="focusedInput">Description</label>
								<div class="controls">
									<textarea class="span8 input-xlarge focused" rows="3" name="description">{{$description}}</textarea>
								</div>
							  </div>
							 
							  <div class="control-group">
								<label class="control-label" for="focusedInput">Keywordss</label>
								<div class="controls">
									<textarea class="span8 input-xlarge focused" rows="3" name="keywords">{{$keywords}}</textarea>
								</div>
							  </div>

							   <div class="control-group">
								<label class="control-label" for="selectError3">Block content access to search engines</label>
								<div class="controls">
				{{ Form::select('isSearchEngineAccess', array('1' => "Yes", '0' => "NO"), "$isSearchEngineAccess",array('class' => 'span3 select2', 'id' => 'isSearchEngineAccess')) }}
								  
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

	
