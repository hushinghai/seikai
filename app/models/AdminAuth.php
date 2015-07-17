<?php

class AdminAuth {




		public static function attempt($credentials){
		
		$username = $credentials['username'];
		$password = $credentials['password'];
		
		
		$admin = Admin::where("username","=","$username")->first();
		
	 
		if($admin){
			

		
		if(Hash::check($password, $admin->password)){
		
			$admin->last_login = date("Y-m-d H:i:s");
			$admin->last_ip = Request::ip();
			$admin->save();
			Session::put('admin_session',$admin);
		
			
				
			
			return TRUE;
		
			}
			else{

		 
			
			
			return FALSE;
			
			}
			
		}
		else{
		;
			return FALSE;
			
			}
		
		
		}
		
		
		public static function admin(){
		
		
			if(Session::has('admin_session'))
			{
			
			
			return Session::get('admin_session');
			
			}
			else{
			
			
			return FALSE;
			
			}
		}
		
		
		
		public static function logout(){
		
			if(Session::has('admin_session'))
			{
			
				Session::forget('admin_session');
			
			}
		}

}