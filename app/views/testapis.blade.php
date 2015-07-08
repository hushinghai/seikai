<!doctype html>
<html lang="en">
<head>
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="{{ asset('bootstrap/css/bootstrap.min.css') }}">

<!-- Optional theme -->
<link rel="stylesheet" href="{{ asset('bootstrap/css/bootstrap-theme.min.css') }}">

<!-- Latest compiled and minified JavaScript -->
<script src="{{ asset('bootstrap/js/jquery.min.js') }}"></script>

<script src="{{ asset('bootstrap/js/bootstrap.min.js') }}"></script>



	<meta charset="UTF-8">
	<title>Laravel PHP Framework</title>
	<style>
		@import url(//fonts.googleapis.com/css?family=Lato:700);

		body {
			margin:0;
			font-family:'Lato', sans-serif;
			text-align:center;
			color: #999;
		}

		.welcome {
			width: 300px;
			height: 200px;
			position: absolute;
			left: 50%;
			top: 50%;
			margin-left: -150px;
			margin-top: -100px;
		}

		a, a:visited {
			text-decoration:none;
		}

		h1 {
			font-size: 32px;
			margin: 16px 0 0 0;
		}
	</style>
</head>
<body>
	<div class="container">

        <h2 class="form-signin-heading">Test apis</h2>
        

        <div style="margin:30px">Event List based on city</div>
      {{ Form::open(array('url' => URL::to("/api/events"))) }}


        {{ Form::text('city', '', array(
            'placeholder' => 'city')) }}

         </br>   

        {{ Form::text('user_id', '', array(
            'placeholder' => 'user id')) }}

             </br>   

        {{ Form::text('search', '', array(
            'placeholder' => 'Search Term')) }}
        
        {{ Form::submit('search', array('name' => 'send')) }}

        {{ Form::close() }}


         <div style="margin:30px">Given Event Category id</div>
      {{ Form::open(array('url' => URL::to("/api/category"))) }}

        {{ Form::text('id', '', array(
            'placeholder' => 'category id')) }}
        </br> 

        {{ Form::text('city', '', array(
            'placeholder' => 'city')) }}

         </br>   

        {{ Form::text('user_id', '', array(
            'placeholder' => 'user id')) }}
        
        {{ Form::submit('search', array('name' => 'send')) }}

        {{ Form::close() }}

        <div style="margin:30px">User Events </div>
      {{ Form::open(array('url' => URL::to("/api/savedevents"))) }}

        

        {{ Form::text('user_id', '', array(
            'placeholder' => 'user id')) }}
        
        {{ Form::submit('search', array('name' => 'send')) }}

        {{ Form::close() }}


        <div style="margin:30px">Save Event for user </div>
      {{ Form::open(array('url' => URL::to("/api/saveuserevent"))) }}

        

        {{ Form::text('user_id', '', array(
            'placeholder' => 'user id')) }}

        </br>
        

        {{ Form::text('event_id', '', array(
            'placeholder' => 'event id')) }}  

        </br>      
        
        {{ Form::submit('save event', array('name' => 'send')) }}

        {{ Form::close() }}


         <div style="margin:30px">Event details given event id </div>
      {{ Form::open(array('url' => URL::to("/api/eventdetails"))) }}

        

        {{ Form::text('user_id', '', array(
            'placeholder' => 'user id')) }}

        </br>
        

        {{ Form::text('event_id', '', array(
            'placeholder' => 'event id')) }}  

        </br>      
        
        {{ Form::submit('get details', array('name' => 'send')) }}

        {{ Form::close() }}

        <div style="margin:30px">Organiser Details </div>
      {{ Form::open(array('url' => URL::to("/api/organiserdetails"))) }}

        

        {{ Form::text('id', '', array(
            'placeholder' => 'Organiser id')) }}
        
        {{ Form::submit('search', array('name' => 'send')) }}

        {{ Form::close() }}

         <div style="margin:30px">Tickets purchased by given user</div>
      {{ Form::open(array('url' => URL::to("/api/mytickets"))) }}

        

        {{ Form::text('id', '', array(
            'placeholder' => 'User id')) }}
        
        {{ Form::submit('search', array('name' => 'send')) }}

        {{ Form::close() }}


         <div style="margin:30px"> Login </div>
      {{ Form::open(array('url' => URL::to("/api/login"))) }}

        

        {{ Form::text('email', '', array(
            'placeholder' => 'email')) }}

        </br>
        

        {{ Form::text('password', '', array(
            'placeholder' => 'password')) }}  

        </br>      
        
        {{ Form::submit('login', array('name' => 'send')) }}

        {{ Form::close() }}

    </div>



    


</body>
</html>
