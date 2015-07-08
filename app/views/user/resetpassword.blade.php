

@extends('pageshell')


@section('content')

                    

<div class="l-padded-v-4 l-padded-h-2 pod js-authentication-layout"  id="logInPage" style="margin-bottom:18%">
    <div class="text--centered">
        <h1 class="text-heading-primary">Reset Your Password</h1>
    </div>
    <form class="l-block-3 responsive-form" method="post" action="{{URL::to('/resetpassword')}}"  name="loginForm"  onsubmit="return validateForm()">
        <div style="display:none"><input type="hidden" name="csrfmiddlewaretoken" value="R0SqTQmiL2P3tm7CfWP25uWo06gWK9N7"></div>
        <div class="js-notification l-block-3"></div>
        <div class="js-current-component">
            <div class="l-block-3">
                <label class="is-hidden-accessible" for="signup-password">New Password</label>
                <input name="password" type="password" placeholder="Password" tabindex="2" id="signup-password">
                <div class="js-error-for-passwd form__field-error is-hidden"></div>
            </div>
            <div class="l-block-3">
                <input type="submit" class="btn btn--block" tabindex="3" value="Reset Password">
            </div>
        </div>
    </form>
</div>


@stop

