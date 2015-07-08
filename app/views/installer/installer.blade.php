@extends('installer.pageshell')



@section('content')
<span style="text-align:center">
    <img src="{{ URL::to('uploads/app/provenlogic.png') }}" style="background-color: #F5F5F5;height: 50px;width: 200px;"/>
</span>
<div class="panel panel-default">
<div class="panel-heading">
<h5 class="antagon-color-main">Welcome to Eventbolt Installer</h5>
</div>
<div class="panel-body">
    
    @if(!$storage)
       <div class="alert alert-danger fade in">
            <p>
                <i class="fa fa-times-circle"></i> {{ storage_path() }} should be made writable.
            </p>
        </div>
    @endif

    @if(!$uploads)
        <div class="alert alert-danger fade in">
            <p>
                <i class="fa fa-times-circle"></i> {{base_path().'/public/uploads'}} should be made writable.
            </p>
        </div>
    @endif
                        
    @if(!$database)
        <div class="alert alert-danger fade in"> 
            <p>
                <i class="fa fa-times-circle"></i> {{ app_path().'/config/database.php' }} should be made writable.
            </p>
        </div>
    @endif
                            
    @if(!$session)
        <div class="alert alert-danger fade in">
            <p>
                <i class="fa fa-times-circle"></i> {{ app_path().'/config/session.php' }} should be made writable.
            </p>
        </div>
    @endif
                            
    @if($allclear)
        {{ Form::open(array('url'=>'/installer/writepermissionscheck','method'=>'POST')) }}
            <div class="pull-right">
                <div class="btn-group">
                    <button type="submit" class="btn btn-success btn-xs"><i class="fa fa-check"></i>All Set! Click Here Continue</button>
                </div>
            </div>
        {{ Form::close() }}
    @else
    
        <div class="pull-right">
            <div class="btn-group">
                <button type="button" class="btn btn-warning btn-xs" onclick="window.location.reload()">Check Again</button>
            </div>
        </div>
    @endif
</div>


@stop
