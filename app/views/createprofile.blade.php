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

        <h2 class="form-signin-heading">Create user profile</h2>
        <div style="margin:30px"> Details</div>
        


      {{ Form::open(array('url' => URL::to("/testing/createprofile"), 'files' => true )) }}

        {{ Form::text('name', '', array(
            'placeholder' => 'title')) }}
        </br>      

        {{ Form::text('description', '', array(
            'placeholder' => 'description')) }}
        </br>      

        {{ Form::text('address', '', array(
            'placeholder' => 'address')) }}
        </br>      

        {{ Form::text('no', '', array(
            'placeholder' => 'contact number')) }}  
         </br>   

        {{ Form::label('file','Profile picture',array('id'=>'','class'=>'')) }}      

        {{ Form::file('file','',array('id'=>'profilepic','class'=>'')) }}
        
        </br>

        {{ Form::submit('create', array('name' => 'send')) }}

        {{ Form::close() }}

    </div>



    <script type="text/javascript">
    	$("#login-link").click(function(e){
    		e.preventDefault()
    		$("#signup-form").attr('class', 'hidden');
    		$("#login-form").attr('class', 'visible');
    	});

    	$("#signup-link").click(function(){
    		e.preventDefault()
    		$("#signup-form").hide();
    		$("#login-form").show();
    	});

    	
    </script>
</body>
</html>
