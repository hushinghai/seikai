

@extends('pageshell')


@section('content')

                    

<div class="l-padded-v-4 l-padded-h-2 pod js-authentication-layout"  id="logInPage" style="margin-bottom:18%">
    @if(Session::has('password_reset_mail'))
            
        <div class="alert alert-success">
            <button type="button" class="close" data-dismiss="alert">×</button>
            We just sent you an email with a link to setup your new password.
        </div>
    @endif 
                    
     @if(Session::has('invalid_email'))
            
        <div class="alert alert-success">
            <button type="button" class="close" data-dismiss="alert">×</button>
            {{Session::get('invalid_email')}}
        </div>
    @endif                    
    <div class="text--centered">
        <h1 class="text-heading-primary">Reset Your Password</h1>
        <p class="l-block-1">
            Enter your email address and we'll send you a link to reset your password.
        </p>
    </div>
    <form class="l-block-3 responsive-form" method="post" action="{{URL::to('/forgotpassword')}}"  name="loginForm"  onsubmit="return validateForm()">
        <div style="display:none"><input type="hidden" name="csrfmiddlewaretoken" value="R0SqTQmiL2P3tm7CfWP25uWo06gWK9N7"></div>
        <div class="js-notification l-block-3"></div>
        <div class="js-current-component">
            <div class="l-block-3">
                <label class="is-hidden-accessible" for="login-email">Email address</label>
                <input value="" name="email" type="email" placeholder="Email" tabindex="1" id="login-email">
                <div class="js-error-for-email form__field-error is-hidden"></div>
            </div>
            <div class="l-block-3">
                <input type="submit" class="btn btn--block" tabindex="3" value="Reset Password">
            </div>
            <div class="l-block-3 form__row">
                <a class="authentication__forgot-password layout-stackable__aside" href="{{URL::to('/login')}}">Return to Login</a>
            </div>

        </div>
    </form>
</div>


@stop


@section('js')


<script>
  


function validateForm() {
    var x = document.forms["loginForm"]["email"].value;
    if (x == null || x == "") {
        
       document.getElementById("login-email").focus(); 

     

document.getElementById("login-email").style.borderColor = "red";
        return false;
    }
document.getElementById("login-email").style.borderColor = "none";

}

</script>
