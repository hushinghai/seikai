

@extends('pageshell')


@section('content')

                    

<div class="l-padded-v-4 l-padded-h-2 pod js-authentication-layout"  id="logInPage" style="margin-bottom:18%">
    @if(Session::has('user_success'))
            
                        <div class="alert alert-success">
                            <button type="button" class="close" data-dismiss="alert">×</button>
                            {{Session::get('user_success')}}
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
    <div class="text--centered">
        <h1 class="text-heading-primary">Log in</h1>
        <p class="l-block-1">
            <a id="signUp" class="js-switch-to-signup"   onclick="javascript:showSignUp();" href="#">Or, sign up.</a>


        </p>
    </div>
    <form class="l-block-3 responsive-form" method="post" action="{{URL::to('/login')}}"  name="loginForm"  onsubmit="return validateForm()">
        
        @if(Session::has('invalid_login'))
            
                        <div class="alert alert-success">
                            <button type="button btn-danger">×</button>
                            Invalid login
                        </div>
                    @endif
        <div style="display:none"><input type="hidden" name="csrfmiddlewaretoken" value="R0SqTQmiL2P3tm7CfWP25uWo06gWK9N7"></div>
        <input type="hidden" name="auth_backend" value="user_password">
        <input type="hidden" name="referrer" value="/?show_onboarding=1">
        <input type="hidden" name="forward" value="">
        <input type="hidden" name="skip_splash" value="">
        <input type="hidden" name="signup_page" value="">
        <input type="hidden" name="user_type" value="">
        <input type="hidden" name="user_type_sig" value="">
        <div class="js-notification l-block-3"></div>
        <div class="js-current-component">
            <div class="l-block-3">
    <label class="is-hidden-accessible" for="login-email">Email address</label>
    <input value="" name="email" type="email" placeholder="Email" tabindex="1" id="login-email">
    <div class="js-error-for-email form__field-error is-hidden"></div>
</div>
<div class="l-block-3">
    <label class="is-hidden-accessible" for="login-password">Password</label>
    <input value="" name="password" type="password" placeholder="Password" tabindex="2" id="login-password">
    <div class="js-error-for-passwd form__field-error is-hidden"></div>
</div>
<div class="js-captcha-form-row l-block-3 form__row is-hidden">
    <div class="js-captcha-field"></div>
    <div class="js-error-for-captcha form__field-error is-hidden"></div>
</div>
<div class="l-block-3">
	
    <input type="submit" class="btn btn--block" tabindex="3" value="Log in">
	 <a href='{{URL::to("/fbauth")}}' class="btn btn--block" style="margin-top:20px;background-color:#3b5998;">Sign In with Facebook</a>
</div>
<div class="l-block-3 form__row">
    <input id="remember_me" name="remember_me" type="checkbox" checked="true" tabindex="4">
    <label for="remember_me">Remember me</label>
    <a class="authentication__forgot-password layout-stackable__aside" href="{{URL::to('/forgotpassword')}}">Forgot password?</a>
</div>

        </div>
    </form>
</div>

    </div>
    
    
<div class="l-padded-v-4 l-padded-h-2 pod" id="signUpPage"  style="display:none;margin-bottom:18%">
    <div class="text--centered">
        <h3 class="text-heading-primary">Sign up</h3>
        <p class="l-block-1">
            Already have an account? <a class="js-switch-to-login mfp-prevent-close" href="#"  onclick="javascript:showLogin();">Log in.</a>
        </p>
    </div>
    <form class="responsive-form l-block-3" action="{{URL::to('/register')}}"  name="signupForm" method="post" onsubmit="return validateSignUpForm()">

        @if(Session::has('invalid_email'))
            
                        <div class="alert alert-success">
                            <button type="button btn-danger">×</button>
                            Invalid or already registered Email Id
                        </div>
                    @endif
        <div class="js-notification l-block-3"></div>
        <div class="js-current-component"><div><div class="l-block-3">
    <label class="is-hidden-accessible" for="signup-email">Email address</label>
    <input name="email" type="email" value="" placeholder="Email" tabindex="1" id="signup-email">
    <div class="js-error-for-email form__field-error is-hidden"></div>
</div>
<div class="l-block-3">
    <label class="is-hidden-accessible" for="signup-password">Password</label>
    <input name="password" type="password" placeholder="Password" tabindex="2" id="signup-password">
    <div class="js-error-for-passwd form__field-error is-hidden"></div>
</div>
<div class="js-captcha-form-row l-block-3 is-hidden">
    <div class="js-captcha-field"></div>
    <div class="js-error-for-captcha form__field-error is-hidden"></div>
</div>
<div class="l-block-3">
    <input type="submit" class="btn btn--block" tabindex="3" value="Sign up">
</div>
</div></div>
    </form>


    </div>


@stop


@section('js')

<script>

    jQuery(document).ready(function() {
        
        if({{$signin}}) {

            document.getElementById("signUpPage").style.display="block";      
            document.getElementById("logInPage").style.display="none";  

        }

    });

  function showSignUp()
  {
        
    document.getElementById("signUpPage").style.display="block";      
    document.getElementById("logInPage").style.display="none";   
  }


  function showLogin()
  {
        
    document.getElementById("signUpPage").style.display="none";      
    document.getElementById("logInPage").style.display="block"; 
  }


function validateForm() {
    var x = document.forms["loginForm"]["email"].value;
    if (x == null || x == "") {
        
       document.getElementById("login-email").focus(); 

     

document.getElementById("login-email").style.borderColor = "red";
        return false;
    }
document.getElementById("login-email").style.borderColor = "none";

}

function validateSignUpForm() {
    var x = document.forms["signupForm"]["email"].value;
    if (x == null || x == "") {
        
       document.getElementById("signup-email").focus(); 
        document.getElementById("signup-email").style.borderColor = "red";
        return false;
    }

    if( ! /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(x)  ) {  
         document.getElementById("signup-email").focus(); 
        document.getElementById("signup-email").style.borderColor = "red";
        return false;
    }


document.getElementById("signup-email").style.borderColor = "none";

}
</script>

@stop
