
@extends('installer.pageshell')

@section('content')
<span>
    <img src="{{ URL::to('uploads/app/provenlogic.png') }}" style="background-color: #F5F5F5;height: 50px;width: 200px;"/>
</span>
<div class="panel panel-default">
<div class="panel-heading" style="text-align:center">
<div class="btn-group">
                                            <button type="button" class="btn btn-cyanide disabled">Step 1</button>
                                        </div>
                    <div class="btn-group">
                                            <button type="button" class="btn btn-cyanide disabled">Step 2</button>
                                        </div>
                                        
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-cyanide">Step 3</button>
                                        </div>
                                        <p class="lead" style="margin-top:10px;">
                                        	Setup Web Application
                                        </p>
</div>

<div class="panel-body">
						{{ Form::open(array('url'=>'/installer/step1', 'method' =>'POST', "id"=>"appForm")) }}
                            
                <div class="form-group">
                    <label for="exampleInputEmail1">Application Title</label>
                    <input type="text" class="form-control" id="applicationTitle">
                </div>
                
                               <div class="form-group">
                    <label for="exampleInputEmail1">Admin Username</label>
                    <input type="text" class="form-control" id="adminUsername">
                </div>
                
                               <div class="form-group">
                    <label for="exampleInputEmail1">Admin Password</label>
                    <input type="password" class="form-control" id="adminPassword">
                </div>
                
                               <div class="form-group">
                    <label for="exampleInputEmail1">Admin Confirm Password</label>
                    <input type="password" class="form-control" id="confirmPassword">
                </div>
                                
                
                            
                        <div class="pull-right">
                        	<div class="btn-group">
                                            <button type="button" id="done-btn" class="btn btn-success btn-xs">Done</button>
                                        </div>
                        </div>
                        
                        {{ Form::close() }}
</div>


@stop



@section('scripts')
<script>
$(function(){


$("#done-btn").click(function(e){

e.preventDefault();

$("#done-btn").prepend('<i class="fa fa-spinner fa-spin"></i> ');

var flag = 0;

if($("#applicationTitle").val() == "")
{

flag = 1;
alert("Application Title cannot be empty");
}

else if($("#adminUsername").val() == "")
{

flag = 1;
alert("Admin Username cannot be empty");

}

else if($("#adminPassword").val() == "")
{

flag = 1;
alert("Admin Password cannot be empty");

}

else if($("#confirmPassword").val() != $("#adminPassword").val())
{

flag = 1;
alert("Passwords donot match");

}

if(flag == 0)
{

	$.post("{{ url('installer/step3') }}", { title: $("#applicationTitle").val() , username: $("#adminUsername").val(),
		password: $("#adminPassword").val() }, function(data){
		
					if(data.success)
					{
					
						$("#done-btn").find(':first-child').remove();
						$("#white_screen").show();
					
					}
		
					if(data.error){
					
						alert("There was an error processing this request, please try again later");
					
					}
		
		});


}


});







});

</script>

@stop
