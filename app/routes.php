<?php


//define('STDIN',fopen("php://stdin","r"));
/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/
function s($s){

	return Setting::get_setting($s);
}

function set_setting($key, $value){

	Setting::set_setting($key, $value);

}



function isInstalled(){

$host = Config::get('database.connections.mysql.host');

	if($host == ''){
	 	return FALSE;
	 }
	 else{

	 if(Schema::hasTable('settings')){
	 		return TRUE;
	 	}
	 	else{
	 		return FALSE;
	 	}

	}
}


include "composer.php";

include "facebook.php";

Route::filter('only_admin', function()
{

	
	if (!AdminAuth::admin()) return Redirect::to('/admin/login');
});

 

Route::filter('admin_loggedIn', function()
{
	
	if (AdminAuth::admin()) return Redirect::to('/admin/dashboard');
}); 



Route::group(array('before' => array('installed','admin_loggedIn')), function()
{

	Route::get('/admin/login',"AdminController@loginadmin");
	Route::post('/admin/login',"AdminController@login");

	 
}); 

 
 

Route::group(array('before' => array('installed','only_admin')), function()
{  

 Route::controller('admin','AdminController');

});

 

// Route::get('adminl', function() {
// 	return Redirect::to('/admin/login'); });

App::missing(function($exception)
{
	$vars['pageTitle'] = "Error";
    return Response::view('errorpage', $vars, 404);
});
/*
App::fatal(function($exception)
{
   $vars['pageTitle'] = "Error";
    return Response::view('errorpage', $vars, 500);
});*/

Route::controller('/installer','InstallerController');

Route::group(array('before' => array('installed')), function(){

	 
	Route::controller('api','ApiController');

	


 

	Route::controller('events','EventsController');

	Route::controller('tickets','TicketController');

	Route::post('register','LoginController@register');
	Route::post('login','LoginController@loginPost');
	Route::get('login','LoginController@login');
	Route::get('logout','LoginController@logout');
   

	Route::post('forgotpassword','LoginController@postForgotpassword');
	Route::post('resetpassword','LoginController@postResetpassword');
	Route::get('forgotpassword','LoginController@getForgotpassword');
	Route::get('resetpassword','LoginController@getResetpassword');
	Route::get('verifyuser','LoginController@verifyuser');
	Route::get('/', "EventsController@events");
	

});



Route::group(array('before' => array('installed','auth')), function()
{
    Route::controller('/user','UserController');

});


if(isInstalled()){ 


	Config::set('mail.host', s('email_host'));
	Config::set('mail.port', s('email_port'));
	Config::set('mail.username', s('email_username'));
	Config::set('mail.password', s('email_password'));
	Config::set('mail.encryption', s('email_encryption'));

	Config::set('mail.from.address',s('from_email'));
	Config::set('mail.from.name',s('title'));




$email_user_verification = function($user){

	if($user->role != 3){ 
				
				$content = Email::make(s("email_content_email_verification"), array(
				
					"[username]" => $user->name,
					"[verification_no]" => $user->generate_verification_url(),
					"[site_link]" => URL::to('/')
				
				));

	Email::send($user->email, s("email_subject_email_verification"), $content);

}


};



if(Email::config_set())
{



Event::listen('user.created',$email_user_verification);

Event::listen('user.send_verification', $email_user_verification);

Event::listen('user.send_reset_password', function($user){

				
				$content = Email::make(s("email_content_forgot_password"), array(
				
					"[username]" => $user->name,
					"[password_link]" => $user->generate_reset_password_url(),
					"[site_link]" => URL::to('/')
				
				));

	Email::send($user->email, s("email_subject_forgot_password"), $content);

});

Event::listen('user.createevent', function($user,$event){
				
				$content = Email::make(s("email_content_create_event"), array(
				"[username]" => $user->email,
				"[eventname]" => $event->name,
				"[startdate]" => date("F j",strtotime($event->start_date)),
				"[starttime]" => $event->start_time,
				"[enddate]" => date("F j",strtotime($event->end_date)),
				"[endtime]" => $event->end_time
		));
				

	Email::send($user->email, s("email_subject_create_event"), $content);

});

Event::listen('user.cancelevent', function($user,$event){
				
				$content = Email::make(s("email_content_cancel_event"), array(
				"[username]" => $user->email,
				"[eventname]" => $event->name
			));	

	Email::send($user->email, s("email_subject_cancel_event"), $content);

});

Event::listen('user.cancelticket', function($user,$transactions){
				
				$content = Email::make(s("email_content_cancel_ticket"), array(
				"[username]" => $user->email,
				"[bookingid]" => $transactions->booking_id,
				"[refundamount]" => $transactions->amount,
				"[transactiontype]"=> $transactions->type
			));	

	Email::send($user->email, s("email_subject_cancel_ticket"), $content);

});

Event::listen('admin.cancelticket', function($user,$transactions,$adarray){
				
				$content = Email::make(s("email_content_cancel_ticket"), array(
				"[username]" => $user->email,
				"[bookingid]" => $transactions->booking_id,
				"[refundamount]" => $transactions->amount,
				"[transactiontype]"=> $transactions->type
			));	

	Email::send($adarray, s("email_subject_cancel_ticket"), $content);

});



Event::listen('user.disabled', function($user)
{
		$content = Email::make(s("email_content_disable_user"), array(
				
					"[username]" => $user->first_name . ' ' . $user->last_name,
					"[site_link]" => URL::to('/')
				
				));

		Email::send($user->email, s("email_subject_disable_user"), $content);
});

Event::listen('user.enabled', function($user)
{
		$content = Email::make(s("email_content_enable_user"), array(
				
					"[username]" => $user->first_name . ' ' . $user->last_name,
					"[site_link]" => URL::to('/')
				
				));

		Email::send($user->email, s("email_subject_enable_user"), $content);
});

Event::listen('event.contact_organizer', function($event,$name,$email,$msg){

				
				$content = Email::make(s("email_content_contact_organizer"), array(
				
					"[username]" => $name,
					"[message]" => $msg,
					"[user_email]" => $email,
					"[organizername]" => $event->username,
					"[site_link]" => URL::to('/')
				
				));

	Email::send($event->email, s("email_subject_contact_organizer"), $content);

});


Event::listen('event.disabled', function($event)
{
		$content = Email::make(s("email_content_disable_event"), array(
				
					"[username]" => $event->username,
					"[eventname]" => $event->name,
					"[site_link]" => URL::to('/')
				
				));

		Email::send($event->email, s("email_subject_disable_event"), $content);
});

Event::listen('event.enabled', function($event)
{
		$content = Email::make(s("email_content_enable_event"), array(
				
					"[username]" => $event->username,
					"[eventname]" => $event->name,
					"[site_link]" => URL::to('/')
				
				));

		Email::send($event->email, s("email_subject_enable_event"), $content);
});

Event::listen('user.ticket_buy', function($username,$email,$event,$no_tickets,$transaction)
{
		if(!$transaction->transaction_id) {
			$transaction->transaction_id = "N/A";
		}

		$content = Email::make(s("email_content_buy_ticket"), array(
				
					"[username]" => $username,
					"[eventname]" => $event->name,
					"[notickets]" => $no_tickets,
					"[transaction_id]" => $transaction->transaction_id,
					"[booking_id]" => $transaction->booking_id,
					"[site_link]" => URL::to('/')
				
				));

		Email::send($email, s("email_subject_buy_ticket"), $content);

		$content = Email::make(s("email_content_ticket_sold"), array(
				
					"[username]" => $event->username,
					"[buyer_name]" => $username,
					"[buyer_email]" => $email,
					"[eventname]" => $event->name,
					"[notickets]" => $no_tickets,
					"[transaction_id]" => $transaction->transaction_id,
					"[booking_id]" => $transaction->booking_id,
					"[site_link]" => URL::to('/')
				
				));

		Email::send($event->email, s("email_subject_ticket_sold"), $content);
});

Event::listen('admin.payout', function($user,$amount){

				
				$content = Email::make(s("email_content_admin_payout"), array(
				
					"[username]" =>  $user->first_name . ' ' . $user->last_name,
					"[amount]" => $amount,
					"[site_link]" => URL::to('/')
				
				));

	Email::send($user->email, s("email_subject_admin_payout"), $content);

});


}


}
