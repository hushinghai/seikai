@extends('installer.pageshell')

@section('content')
<span>
    <img src="{{ URL::to('uploads/app/provenlogic.png') }}" style="background-color: #F5F5F5;height: 50px;width: 200px;"/>
</span>

<div class="panel panel-default">
    <div class="panel-heading" style="text-align:center">
        <div class="btn-group">
            <button type="button" class="btn btn-cyanide">Step 1</button>
        </div>
        
        <div class="btn-group">
            <button type="button" class="btn btn-cyanide disabled">Step 2</button>
        </div>
                                        
        <div class="btn-group">
            <button type="button" class="btn btn-cyanide disabled">Step 3</button>
        </div>
        <p class="lead" style="margin-top:10px;">
            Setup Database
        </p>
    </div>

    <div class="panel-body">

        @if($db_error)
            <div class="alert alert-danger fade in">
                <p>
                    <i class="fa fa-times-circle"></i> Unable to connect to the database with the credentials provided.
                </p>
            </div>
        @endif
		
        {{ Form::open(array('url' =>'/installer/step1', 'method' => 'POST','id'=>'databaseForm')) }}
                            
            <div class="form-group">
                <label for="host">Database Host</label>
                <input type="text" class="form-control" id="databaseHost" name="host" value="localhost" placeholder="Enter the database host">
            </div>
                
            <div class="form-group">
                <label for="username">Database Username</label>
                <input type="text" class="form-control" id="databaseUsername" name="username" placeholder="Enter Database Username">
            </div>
                
            <div class="form-group">
                <label for="password">Database Password</label>
                <input type="password" class="form-control" name="password" placeholder="Enter Database Password">
           </div>
            
            <div class="form-group">
                <label for="database">Database Name</label>
               <input type="text" class="form-control" id="databaseName" name="database" placeholder="Enter Database Name">
            </div>
                
            <div class="form-group">
                <label for="port">Database Port</label>
                <input type="text" class="form-control" name="port" placeholder="Enter Database Port (Optional)">
            </div>
                
            <div class="form-group">
                <label for="tbl_prefix">Table Prefix</label>
                <input type="text" class="form-control" name="tbl_prefix" placeholder="Table Prefix (Optional)">
            </div>
                            
            <div class="pull-right">
                <div class="btn-group">
                    <button id="done-btn" type="button" class="btn btn-success btn-xs">Done</button>
                </div>
            </div>
                        
        {{ Form::close() }}
    </div>


@stop


@section('scripts')

<script>

$(function(){


$('#done-btn').click(function(){

var flag = 0;

if($("#databaseHost").val() == '')
{
flag = 1;
alert("Database Host cannot be empty");
}

else if($("#databaseUsername").val() == '')
{
flag = 1;
alert("Database Username cannot be empty");
}

else if($("#databaseName").val() == '')
{
flag = 1;
alert("Database Name cannot be empty");
}


if(flag == 0)
{

$("#databaseForm").submit();

}


});




});


</script>


@stop
