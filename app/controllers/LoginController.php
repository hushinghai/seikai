<?php

class LoginController extends BaseController {


	public function register()
	{
		

		 $vars = array();

		 $vars['password'] = Hash::make(Input::get('password'));
		 $vars['email'] = Input::get('email');

		 $user = User::where('email','=',Input::get('email'))->first();
		 if( $user == null ) {
		 	$user = User::create($vars);

		 	$transactions = Transaction::where('email',$user->email)->get();
		 	foreach($transactions as $transaction) {
		 			$transaction->user_id = $user->id;
		 			$transaction->save();
		 	}

		 	Event::fire('user.created', array($user));

			if(Email::config_set())
			{
			
			Session::flash("user_success","Verification email has been sent");
			 return Redirect::to('/login');
			
			}
			else{
			
			$user->verified = 1;
			$user->save();

			Auth::loginUsingId($user->id);
			return Redirect::to('/');
			}

		 	
		 } else {
		 	return Redirect::back()->with('invalid_email', "invalidcredentials");
		 }
		 
	}

	public function logout()
	{
		Auth::logout();
		return Redirect::to("/");
	}

	public function  login(){
 
		$vars['pageTitle']=s('title');

		if(Input::has('view') && Input::get('view') == 'user-signin') {
			$vars['signin'] = 1;
		} else {
			$vars['signin'] = 0;
		}

		return View::make("user/login",$vars);
	}

	public function admin(){

		return View::make('admin.login');
	
	}

	public function loginPost()
	{

		$credentials = array('email'=>Input::get('email'), 'password'=> Input::get('password'));
		$remember = Input::get('remember_me');

		if (Auth::attempt($credentials))
		{
		
			if(Auth::user()->verified == 0)
			{
			
				Auth::logout();
				
			Session::flash('notverified', "User is not verified");
			
			return Redirect::to('/login');		
			
			}

			if(Auth::user()->role == 1)
			{
				Auth::logout();
				
				Session::flash('disabled', "User is disabled..Contact admin");
			
				return Redirect::to('/login');		
			}
		
		
			if(!empty($remember))
			{
			
				Auth::loginUsingId(Auth::user()->id);
				
			}
			
			return Redirect::to('/');
			
		}

		else {

			return Redirect::back()->with('invalid_login', "invalidcredentials");

		}
			
	}



	public function getForgotpassword(){

		$vars['pageTitle']=s('title');
	
		return View::make("user.forgotpassword",$vars);
	}
	
	public function postForgotpassword(){
	
		$user = User::where('email','=',Input::get('email'))->first();
		
		if(!empty($user))
		{
		
			Event::fire('user.send_reset_password', array($user));
			Session::flash('password_reset_mail', "Forgot password email has been sent.");
		
		} else {
			Session::flash('invalid_email', "The email id entered is incorrect");
		}
		return Redirect::to('/forgotpassword');
	}
	
	
	public function getResetpassword(){

		$vno = Input::get('vno');

		if($vno) {
			$vars['pageTitle']=s('title');
	
			$user = User::where("verification_no","=","$vno")->first();
			
			if(!empty($user))
			{
				$user->verification_no = "";
				$user->save();
				Session::put('pwd_user_id', $user->id);
				return View::make('user.resetpassword',$vars);
			}  
		}
		return Redirect::to('error');
	}
	
	
	public function postResetpassword(){
	
		$user = User::find(Session::get('pwd_user_id'));
		
		if($user)
		{
		
			$user->password = Hash::make(Input::get('password'));
			$user->save();
			Session::forget('pwd_user_id');
		
		}
	
		Session::flash('user_success', "Password has been reset.");
		return Redirect::to('/login');
	
	}
	
	public function verifyuser(){

		$vno = Input::get('vno');

		if($vno) {
	
			$user = User::where("verification_no","=","$vno")->first();
			
			if(!empty($user))
			{
				$user->verified = 1;
				$user->verification_no = "";
				$user->save();

				Session::flash("user_success","User verified");
			
				return Redirect::to('/login');
			} 
		}	
		return Redirect::to('error');
	
	}
}
