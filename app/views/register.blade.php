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
        @if(Session::has('verification_email_sent'))
            
                        <div class="alert alert-success">
                            <button type="button" class="close" data-dismiss="alert">×</button>
                            Verification email has been sent
                        </div>
                    @endif
                    @if(Session::has('notverified'))
            
                        <div class="alert alert-error">
                            <button type="button" class="close" data-dismiss="alert">×</button>
                            User account not verified yet.
                        </div>
                    @endif
                    @if(Session::has('disabled'))
            
                        <div class="alert alert-error">
                            <button type="button" class="close" data-dismiss="alert">×</button>
                            User is diabled
                        </div>
                    @endif
      <form class="form-signin" style="max-width: 330px;margin: 0 auto;"role="form" id="signup-form"
            method="POST" action={{URL::to("/register")}}>
        <h2 class="form-signin-heading">Sign up</h2>
        <span>Already have an account ? <a id="login-link" href=""> Log in </a></span>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" id="email" name="email" class="form-control" placeholder="Email address" required autofocus/>
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="password" name="password" class="form-control" placeholder="Password" required/>
       
        <button class="btn btn-lg btn-primary btn-block" style="margin-top:20px"type="submit">Sign up</button>
      </form>


      <form class="form-signin hidden " style="max-width: 330px;margin: 0 auto;" role="form" id="login-form" 
       method="POST" action={{URL::to("/login")}}>
        <h2 class="form-signin-heading">Log in</h2>
        <a id="signup-link" href=""> Or sign up</a>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" name="email" class="form-control" placeholder="Email address" required autofocus>
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" name="password" class="form-control" placeholder="Password" required>
       
        <button class="btn btn-lg btn-primary btn-block" style="margin-top:20px"type="submit">Log in</button>
        <a href='{{URL::to("/fbauth")}}' class="btn btn-lg btn-primary btn-block" style="margin-top:20px;background-color:#3b5998;">Sign In with Facebook</a>
        <div class="checkbox">
          <label class="pull-left">
            <input type="checkbox" value="remember-me"> Remember me
          </label>
          <a class="pull-right"> Forgot password?</a>
        </div>

      </form>

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
