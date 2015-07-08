<?php

class InstallerController extends BaseController {
	 		
	public function getIndex(){

		if(Input::get('new_install'))
		{
			
			setcookie("installed", "", time() - 3600);
			setcookie("step3", "", time() - 3600);
			setcookie("step2", "", time() - 3600);
			setcookie("step1", "", time() - 3600);
		}
		
		if($this->check_permissions())
		{
			if(isset($_COOKIE['installed'])){
			
				return Redirect::to('/');
			}
			else if(isset($_COOKIE['step3'])){
			
				return $this->step3();
			}
			else if( isset($_COOKIE['step2'])){
			 
				return $this->step2();
			}
			else if(isset($_COOKIE['step1']))
			{
			
				return $this->step1();
			}
			else{
			
				return $this->writePermissionsCheck();
			}
		}
		else{
		
			return $this->writePermissionsCheck();
		}
	}
		
		
	function writePermissionsCheck(){
		
		$vars = array();

		$vars["storage"] = is_writable(storage_path());
			
		$vars["uploads"] = is_writable(base_path().'/uploads');
			
		$vars['database'] = is_writable(app_path().'/config/database.php');
			
		$vars['session'] = is_writable(app_path().'/config/session.php');

		$vars['allclear'] = $this->check_permissions();
			
		return View::make("installer.installer", $vars);
	}
		
		
	function check_permissions(){
		
		if(is_writable(storage_path()) && is_writable(base_path().'/uploads') && is_writable(app_path().'/config/database.php') && is_writable(app_path().'/config/session.php'))
		{
		
			return TRUE;
		}
		else{
		
			return FALSE;
		}
	}
		
		
	public function postWritepermissionscheck(){

		$forever = 2000000000;
		setcookie(
		  "step1",
		  "1",
		  $forever
		);

		return Redirect::to('/installer');
	}
		
		
	function step1($db_error = null){
		
		$vars['db_error'] = $db_error;
		
		return View::make('installer.step1', $vars);
	}
		
		
	public function postStep1(){
		
		$credentials = Input::get();

		//dd($credentials);
		
		unset($credentials['tbl_prefix']);
		unset($credentials['_token']);

		$credentials['driver'] = 'mysql';
		$credentials['collation'] = "utf8_unicode_ci";
		$credentials['charset'] = 'utf8';
		$credentials['prefix'] = '';


		$driver = new \Illuminate\Database\Connectors\MySqlConnector;

		$error = null;
		
		try{
			$connection = $driver->connect($credentials);
		}
		catch(Exception $e)
		{
			$error = $e;
		}
			
		if($error){

			return $this->step1(true);
		}
		else{
			
			$this->generate_database_file($credentials['host'], $credentials['username'], $credentials['password'], $credentials['database'], Input::get('tbl_prefix'));
			
			$forever = 2000000000;
				setcookie(
				  "step2",
				  "1",
				  $forever
				);
			
			return Redirect::to('/installer');
		} 
	}
		
		
	function generate_database_file($host, $username, $password, $database, $prefix){
		
		$stub = File::get(storage_path()."/installer/database.stub");

		$stub = str_replace("{{HOST}}", $host, $stub);

		$stub = str_replace("{{USERNAME}}", $username, $stub);

		$stub = str_replace("{{PASSWORD}}", $password, $stub);

		$stub = str_replace("{{DATABASE}}", $database, $stub);

		$stub = str_replace("{{PREFIX}}", $prefix, $stub);

		File::put(app_path()."/config/database.php", $stub);
	}
		
		
	function generate_session_file(){
		
		$stub = File::get(storage_path()."/installer/session.stub");
		
		$stub = str_replace("{{DRIVER}}", "database", $stub);
		
		File::put(app_path()."/config/session.php", $stub);
	}
		
	function step2(){
		
		return View::make('installer.step2');
	}
		
		
	public function postStep2(){

		$forever = 2000000000;
				setcookie(
				  "step3",
				  "1",
				  $forever
				);
			
		$this->generate_session_file();
			
		return Redirect::to('/installer');
	}
		
		
	function step3(){

		return View::make('installer.step3');
	}
		
		
	function postStep3(){
		
		$username = Input::get('username');
		$password = Hash::make(Input::get('password'));
		$title = Input::get('title');
			
		set_setting('title', $title);
			
		$admin = new Admin;
		$admin->username = $username;
		$admin->password = $password;
		$admin->save();
			
		$forever = 2000000000;
				setcookie(
				  "installed",
				  "1",
				  $forever
				);
			
		return(array("success"=>"1"));
	}
		
		
	public function postInstalldb(){

			Artisan::call('migrate:install');
        
        Artisan::call('migrate', ['--quiet' => true, '--force' => true]);
	}
}