<?php

session_start();


use \Facebook\FacebookSession as FacebookSession;
use \Facebook\FacebookRedirectLoginHelper as FacebookRedirectLoginHelper;
use \Facebook\FacebookRequestException as FacebookRequestException;
use \Facebook\FacebookRequest as FacebookRequest;

//FacebookSession::setDefaultApplication('753957394681286', 'af9a3c945d151740c9fe3e68f984030e');


//FacebookSession::setDefaultApplication('919392211459412', 'ed0bc7c933dd1873b070a5c028875066');

FacebookSession::setDefaultApplication('463479817162709', '5233f5d719a9cae57b75aed40334f3ab');


Route::get('fbauth', function(){


$helper = new FacebookRedirectLoginHelper(URL::to('/').'/fbregister');
$scope = array('email');
$loginUrl = $helper->getLoginUrl($scope);

return Redirect::to($loginUrl);


});


Route::get('fbregister', function(){


$helper = new FacebookRedirectLoginHelper(URL::to('/').'/fbregister');
try {
  $session = $helper->getSessionFromRedirect();
  //dd($session);

} catch(FacebookRequestException $ex) {
  // When Facebook returns an error
} catch(\Exception $ex) {
  // When validation fails or other local issues
}
if ($session) {

	$request = new FacebookRequest($session, 'GET', '/me?fields=id,name,email');
$response = $request->execute();
$graphObject = $response->getGraphObject();

//dd($graphObject);

$create_user = true;

if(Auth::user()){


	$cuser = Auth::user();

	if($cuser->facebook_id){

		if($cuser->facebook_id != $graphObject->getProperty('id')){

			Auth::logout();

		}
		else{

			$create_user = false;
		}


	}
}
else{

	//dd($graphObject);

	$user = User::where('email',"=",$graphObject->getProperty('email'))->first();
    
	

	if($user){ 
		if($user->facebook_id==0)
	     {
		$user->facebook_id = $graphObject->getProperty('id');
		$user->save();	
	      }
	Auth::login($user);
	$create_user = false;
	}
}



if($create_user){



	$new_user = User::create(array('email'=>$graphObject->getProperty('email'), 'password' => Hash::make($graphObject->getProperty('id'))));

	$new_user->facebook_id = $graphObject->getProperty('id');

	$new_user->save();

	Auth::login($new_user);

}


return Redirect::to('/');

 
}


});


Route::get('testfb', function(){

die(print_r(FacebookUser()));


});


function FacebookUser(){



	$app_token = file_get_contents('https://graph.facebook.com/oauth/access_token?client_id=753957394681286&client_secret=af9a3c945d151740c9fe3e68f984030e&grant_type=client_credentials');
		$app_token = explode("=", $app_token);

		//die("https://graph.facebook.com/1351444134?fields=first_name,last_name&access_token=$app_token[1]");

$fb_user_info = file_get_contents("https://graph.facebook.com/1351444134?fields=first_name,last_name&access_token=$app_token[1]");
die($fb_user_info);
	$cuser = Auth::user();

	if($cuser && $cuser->facebook_id){

			//$session = FacebookSession::newAppSession('753957394681286', 'af9a3c945d151740c9fe3e68f984030e');
			//$helper = new FacebookRedirectLoginHelper(URL::to('/').'/fbregister');
			 //$session = $helper->getSessionFromRedirect();


		$app_token = file_get_contents('https://graph.facebook.com/oauth/access_token?client_id=753957394681286&client_secret=af9a3c945d151740c9fe3e68f984030e&grant_type=client_credentials');
		$app_token = explode("=", $app_token);
		die("https://graph.facebook.com/$cuser->facebook_id?fields=first_name,last_name&access_token=$app_token[1]");
		$fb_user_info = file_get_contents("https://graph.facebook.com/$cuser->facebook_id?fields=first_name,last_name&access_token=$app_token[1]");

		/*
			if ($session) {

	$request = new FacebookRequest($session, 'GET', "/100002291845322");
$response = $request->execute();
$graphObject = $response->getGraphObject();


			


			if($cuser->facebook_id == $graphObject->getProperty('id')){


				return array('id' => $graphObject->getProperty('id'), 'name' => $graphObject->getProperty('name'), 'picture' => getProperty('picture')->data->url);
			}
			else{
				return null;
			}

		}
		else{
			die("blah");
		}

	}
	else{
		return null;
	} */


	die($fb_user_info);

}


}