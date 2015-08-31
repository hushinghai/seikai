<?php

class AdminController extends BaseController {


	 protected static $restful = true;
	/*
	|--------------------------------------------------------------------------
	| Default Home Controller
	|--------------------------------------------------------------------------
	|
	| You may wish to use controllers instead of, or in addition to, Closure
	| based routes. That's great! Here is an example controller method to
	| get you started. To route to this controller, just add the route:
	|
	|	Route::get('/', 'HomeController@showWelcome');
	|
	*/

	 


	public function getIndex() {
		 
 		return View::make('admin.login');
	}


	public function loginadmin(){
	
	
		return View::make('admin.login');
	
	}

	 
	// public function admin(){
	
	
	// 	return View::make('admin.login');
	
	// }

	public function login(){
	
		$credentials = Input::all();

		if(AdminAuth::attempt($credentials))
		{
			
			return Redirect::to('/admin/dashboard');
		}
		else
		{
			Session::flash('login_error', "Invalid Username/Password");
			return Redirect::to('/admin/login');
			
		}
		
	
	}
	
	
	public function getLogout(){
	
		AdminAuth::logout();
		
		return Redirect::to('/admin/login');
	
	
	}



	public function getDashboard() {

		
		$vars['users_total'] = User::count();
		$vars['users_today'] = User::where('created_at', '>=', date('Y-m-d H:i:s',time()-(24*60*60)))->count();
		$vars['users_week'] = User::where('created_at', '>=', date('Y-m-d H:i:s',time()-(7*24*60*60)))->count();
		$vars['users_month'] = User::where('created_at', '>=', date('Y-m-d H:i:s',time()-(30*24*60*60)))->count();

		$vars['events_total'] = EventB::count();
		$vars['events_today'] = EventB::where('created_at', '>=', date('Y-m-d H:i:s',time()-(24*60*60)))->count();
		$vars['events_week'] = EventB::where('created_at', '>=', date('Y-m-d H:i:s',time()-(14*24*60*60)))->count();
		$vars['events_month'] = EventB::where('created_at', '>=', date('Y-m-d H:i:s',time()-(30*24*60*60)))->count();

		
		$vars['tickets_total'] = Ticket::count();
		$vars['tickets_today'] = Ticket::where('created_at', '>=', date('Y-m-d H:i:s',time()-(24*60*60)))->count();
		$vars['tickets_week'] = Ticket::where('created_at', '>=', date('Y-m-d H:i:s',time()-(7*24*60*60)))->count();
		$vars['tickets_month'] = Ticket::where('created_at', '>=', date('Y-m-d H:i:s',time()-(30*24*60*60)))->count();

		$vars['free_tickets'] = Ticket::free_tickets_count();
		$vars['paid_tickets'] = Ticket::paid_tickets_count();

		$vars['revenue'] = Transaction::where('status',1)->sum('amount');

		$all_tickets = Ticket::all();

		$profit = 0;
		$booking_fees = 0;

		foreach($all_tickets as $ticket) {


			$type =TicketType::find($ticket->tickettype_id);

			$profit = $profit + $type->payment_fees;
			$booking_fees += $type->booking_fees;
		}
		
		$tickets_today = Ticket::where('created_at', '>=', date('Y-m-d H:i:s',time()-(24*60*60)))->get();
		$profit_today = 0;

		foreach($tickets_today as $ticket) {

			$type = TicketType::find($ticket->tickettype_id);
			$profit_today += $type->payment_fees;
		}

		$tickets_week = Ticket::where('created_at', '>=', date('Y-m-d H:i:s',time()-(7*24*60*60)))->get();
		$profit_week = 0;

		foreach($tickets_week as $ticket) {
			$type =TicketType::find($ticket->tickettype_id);
			$profit_week += $type->payment_fees;
		}

		$tickets_month = Ticket::where('created_at', '>=', date('Y-m-d H:i:s',time()-(30*24*60*60)))->get();
		$profit_month = 0;

		foreach($tickets_month as $ticket) {
			$type =TicketType::find($ticket->tickettype_id);
			$profit_month += $type->payment_fees;
		}


		$vars['profit'] = $profit;
		$vars['profit_today'] = $profit_today;
		$vars['profit_week'] = $profit_week;
		$vars['profit_month'] = $profit_month;
		$vars['payout_left'] = $vars['revenue'] - ($profit + $booking_fees + Payout::sum('amount'));

		$vars['page'] = "Dashboard";

		return View::make('admin/dashboard',$vars); 
		
	}

	
	public function get_users() {
		
		$vars['page'] = "User Management";

		$email = Input::get('email');
		$city = Input::get('city');
		
		
		$users = User::orderBy('id','DESC')->get();

		


		foreach($users as $user) {

			$profile = Profile::where('user_id',$user->id)->first();

			if($profile) {

				$user->name = $profile->name;
				$user->city = $profile->city;
				$user->image_url = $profile->image_url;
			} else {

				$user->name = "";
				$user->city = "";
				$user->image_url = "";
			}

		}
		
		
		$vars['users'] = $users;

		return View::make('admin/user', $vars);
	}

	public function postDeleteuser() {
		$id = Input::get("delete_userid");
		$user = User::find($id);
			
		$user->delete();
		return Redirect::to('/admin/users');
	}

	public function postVerifyuser() {
		$id = Input::get("verify_userid");
		$user = User::find($id);
		$user->verified = 1;		
		$user->save();
		return Redirect::to('/admin/users');
	}


	public function postDisableuser() {
		$id = Input::get("disable_userid");
		$user = User::find($id);

		$events = EventB::where('user_created',$id)->get();

		foreach($events as $event) {
			$event->status = 1;
			$event->save();
		}

		$user->role = 1;		
		$user->save();

		Event::fire('user.disabled', array($user));

		return Redirect::to('/admin/users');
	}

	public function postEnableuser() {
		$id = Input::get("enable_userid");
		$user = User::find($id);

		$events = EventB::where('user_created',$id)->get();

		foreach($events as $event) {
			$event->status = 0;
			$event->save();
		}

		$user->role = 0;		
		$user->save();

		Event::fire('user.enabled', array($user));

		return Redirect::to('/admin/users');
	}



	public function get_events() {
		
		$vars['page'] = "Event Management";

		$events = EventB::orderBy('id','DESC')->get();

		foreach($events as $event) {

			$event->location = $event->venue . $event->city;

			$organiser = User::find($event->user_created);

			if($organiser) {

				$event->username = $organiser->email;
			} else {
				$event->username = "";
			}

			$category = EventCategory::find($event->category);

			if($category)

				$event->cat = $category->name;

			else
				$event->cat = "UNDEFINED";

			$type = EventType::find($event->event_type);

			if($type)
				$event->type = $type->name;
			else 
				$event->type = "UNDEFINED";
			
			$event->sold_count = Ticket::where('event_id',$event->id)->count();

			$tickettypes = TicketType::where('event_id',$event->id)->get();

			foreach($tickettypes as $tickettype) {
				if($tickettype->type == 0) {
					$tickettype->typename = "Free";
				} else if($tickettype->type == 1) {
					$tickettype->typename = "Paid";
				} else if($tickettype->type == 2) {
					$tickettype->typename = "Donation";
				}
			}

			$event->tickets = $tickettypes;


		}
		
		$vars['events'] = $events;

		return View::make('admin/events', $vars);
	}


	public function get_transactions() {
		
		$vars['page'] = "Transaction Management";

		$transactions = Transaction::orderBy('created_at','desc')->get();

		foreach($transactions as $transaction) {

			if($transaction->status == 1) {

				$tickets = $transaction->tickets;

				if(!$tickets->isEmpty()) {

					$event = EventB::find($tickets[0]->event_id);

					$transaction->event_id = $event->id;
					$transaction->event_name = $event->name;
				}

				$amout_to_be_paid = 0;
				$payment_fees = 0;
				$booking_fees = 0;

				if($transaction->amount > 0) {


					foreach ($tickets as $ticket) {
						
						$tickettype = TicketType::find($ticket->tickettype_id);
						if($tickettype->type == 1) {
							//dd($tickettype->id);
			        		$payment_fees += $tickettype->payment_fees;
			        		$booking_fees += $tickettype->booking_fees;
			        		$amout_to_be_paid += ($tickettype->total_price - $tickettype->fees_actual) ;

			        	}
					}
				}
			} else {
				
				$payment_fees = "N/A";
				$booking_fees = "N/A";
				$amout_to_be_paid = "N/A";
			}

			$transaction->payment_fees = $payment_fees;
			$transaction->booking_fees = $booking_fees;
			$transaction->amount_to_be_paid = $amout_to_be_paid;
		}
		
		$vars['transactions'] = $transactions;

		return View::make('admin/transactions', $vars);
	}

	public function get_financials() {
		
		$vars['page'] = "Financials Management";

		$events = EventB::all();



		$organisers = array();

		foreach($events as $event) {

			if(array_key_exists($event->user_created, $organisers)) {

				$organiser = $organisers[$event->user_created];
				$organiser->no_events++;

			} else {
				$organiser = new stdClass();

				$organiser->no_events = 1;
				$organiser->no_tickets = 0;
				$organiser->amount = 0;
				$organiser->user_id = $event->user_created;

				$organiser->user_name = User::find($event->user_created)->email;
			}

			$tickets = Ticket::where('event_id',$event->id)->get();

			$ticket_count = 0;

			foreach($tickets as $ticket) {

				$ticket_count++;

				$type = $ticket->ticketType->first();
				$organiser->amount += $type->total_price - $type->fees_actual;
			}

			$organiser->no_tickets = $organiser->no_tickets + $ticket_count;

			$organisers[$event->user_created] =  $organiser;

		}

		foreach($organisers as $organiser) {

			$organiser->amount_paid = Payout::where('organiser_id',$organiser->user_id)->sum('amount');

			$organiser->amount_due = $organiser->amount - $organiser->amount_paid;

		}

		$vars['organisers'] = $organisers;


		return View::make('admin/financials', $vars);
	}


	public function postPayorganiser() {

		$amount =  Input::get('amount');
		$user = User::find(Input::get('id'));

		$vars['organiser_id'] = $user->id;
		
		$vars['amount'] = $amount;
		$vars['admin_id'] = 1;
		$vars['currency'] = "USD";

		Payout::create($vars);

		Event::fire('admin.payout', array($user,$amount));

		return Redirect::to('/admin/financials');
	}

	public function get_payouts() {
		
		$vars['page'] = "Payout Management";

		$payouts = Payout::orderBy('id','DESC')->get();

		foreach($payouts as $payout) {
			
			$user = User::find($payout->organiser_id);
			if($user) {

				$payout->user_name = $user->email;
			} else {
				$payout->user_name = "";
			}

			$admin = Admin::find($payout->admin_id);
			$payout->admin = $admin->username;
		}
		
		$vars['payouts'] = $payouts;

		return View::make('admin/payouts', $vars);
	}

	public function getCreateuser() {

		$vars['page'] = "Create New User";

		return View::make('admin/createuser',$vars);
	}

	public function postCreateuser() {

		$user_vars = array();

		 $vars['password'] = Hash::make(Input::get('password'));
		 $vars['email'] = Input::get('email');

		 $user = User::where('email','=',Input::get('email'))->first();
		 
		 if( $user == null ) {
		 	
		 	$user = User::create($vars);

		 	$profile_vars = array();
		 	$profile_vars['name'] = Input::get('name');
		 	$profile_vars['description'] = Input::get('description');
		 	$profile_vars['city'] = Input::get('city');
		 	$profile_vars['lat'] = Input::get('lat');
		 	$profile_vars['lng'] = Input::get('lng');
		 	$profile_vars['no'] = Input::get('no');
		 	$profile_vars['user_id'] = $user->id;


		 	$image = Input::file('file');

		 	if($image) {

		 		// This is the original uploaded client name of the image
		        $filename = $image->getClientOriginalName();
		        // Because Symfony API does not provide filename
		        // without extension, we will be using raw PHP here



		        $filename = pathinfo($filename, PATHINFO_FILENAME);


		        // We should salt and make an url-friendly version of the file
		        $fullname = Str::slug(Str::random(8) . $filename) . '.' .
		            $image->getClientOriginalExtension();

		        // We upload the image first to the upload folder, then
		        // get make a thumbnail from the uploaded image
		        $upload = $image->move
		            ('uploads/profile_images', $fullname);


			 	$profile_vars['image_url'] = $fullname;

		 	} else {
		 		$profile_vars['image_url'] ="";
		 	}

	        

		 	$profile = Profile::create($profile_vars);

		 	Session::flash('successful', "user created successfully");

		 } else {
		 	Session::flash('user_exists', "Error email already registered");
		 }

		 return Redirect::to('/admin/createuser');
	}


	public function getCreateevent() {

		$vars['page'] = "Create New Event";

		
		$vars['eventcat'] = EventCategory::lists('name', 'id');

		$vars['eventtypes'] = EventType::lists('name', 'id');

		return View::make('admin/createevent',$vars);

	}

	public function postCreateevent() {

		$input = Input::all();


		 $image = Input::file('file');

		 if($image) {

		 	// This is the original uploaded client name of the image
	        $filename = $image->getClientOriginalName();
	        // Because Symfony API does not provide filename
	        // without extension, we will be using raw PHP here



	        $filename = pathinfo($filename, PATHINFO_FILENAME);


	        // We should salt and make an url-friendly version of the file
	        $fullname = Str::slug(Str::random(8) . $filename) . '.' .
	            $image->getClientOriginalExtension();

	        // We upload the image first to the upload folder, then
	        // get make a thumbnail from the uploaded image
	        $upload = $image->move
	            ('uploads/event_logos', $fullname);

		 } else {
		 	$fullname = "";
		 }

        

        $vars['name'] = $input['name'];

        $vars['description'] = $input['description'];

        $vars['city'] = $input['city'];
        $vars['lat'] = $input['lat'];
        $vars['lng'] = $input['lng'];

        $vars['venue'] = $input['venue'];

        $timestamp_start = strtotime($input['start_date']);
        $vars['start_date'] = date("Y-m-d H:i:s", $timestamp_start);
        $vars['start_time'] = $input['start_time'];

        $timestamp_end = strtotime($input['end_date']);
        $vars['end_date'] = date("Y-m-d H:i:s", $timestamp_end);
        $vars['end_time'] = $input['end_time'];

        $vars['image_url'] = $fullname;

         $vars['category'] = $input['eventcat'];

        $vars['event_type'] = $input['eventtype'];

        $vars['user_created'] =$input['user_id'];

       $vars['payment_fees'] = s('payment_fees');
        $vars['booking_fees'] = s('booking_fees');
        $vars['booking_fees_base'] = s('booking_fees_base');

        
        
        $ticket_titles = Input::get('ticket_title');
        $prices = Input::get('price');
        $seats = Input::get('seats');
        $fee_types = Input::get('fees_type');
        /*
       print_r($ticket_titles);
       echo "<br/>";
       print_r($prices);
       echo "<br/>";
       print_r($seats);
       echo "<br/>";
       die(print_r($fee_types)); */
        
        
        
        $event = EventB::create($vars);
        
        
        for($i = 0; $i<count($event); $i++){
	        
	       
	        
	     $t_vars = array();
	     
	        
	         $t_vars["noseats"] = $seats[$i];

        $t_vars['event_id'] = $event->id;

        $t_vars['price'] = $prices[$i];
        
        
        
        
        if($input['price'] == 0) {
        	$t_vars['type'] = 0;

        	$t_vars['fees_show'] = 0;
        	$t_vars['fees_actual'] = 0;
        	$t_vars['total_price'] = 0;
        	$t_vars['booking_fees'] = 0;
        	$t_vars['payment_fees'] = 0;

        } else {
        	$t_vars['type'] =1;

        	$price = $prices[$i];

        	$p_fees = $price * s('payment_fees');
        	$b_fees = ($price * s('booking_fees') ) + s('booking_fees_base');
        	$fees = $p_fees + $b_fees;
        	$t_vars['fees_actual'] = $fees;
        	$t_vars['booking_fees'] = $b_fees;
        	$t_vars['payment_fees'] = $p_fees;

        	$t_vars['fees_type'] = $fee_types[$i];

        	

        	if($fee_types[$i] == 0) {

        		$t_vars['fees_show'] = $fees;

        	} else if($fee_types[$i] == 1) {

        		$t_vars['fees_show'] = 0;

        	} else {
        		
        		$t_vars['fees_show'] = $b_fees;
        	}

        	$t_vars['total_price'] = $price + $t_vars['fees_show'];
        }


        $t_vars['title'] = $ticket_titles[$i];
           

        $ticket_type = TicketType::create($t_vars);
	        
	        
	        
	        
        }
        

        Session::flash('successful', "user created successfully");

		return Redirect::to('/admin/createevent');
	}


	public function get_eventcategory() {
		
		$vars['page'] = "Event Categories";

		$categories = EventCategory::orderBy('id','DESC')->get();

		foreach($categories as $category) {
			
			$category->no_events = EventB::where('category',$category->id)->count();
			$category->test = "Test";
		}
		
		$vars['categories1'] = $categories;

		return View::make('admin/eventcategory', $vars);
	}

	public function postEditeventtype() {
		$input = Input::all();

		$event_type = EventType::find($input['edit_id']);
		$event_type->name = $input['name'];
		$event_type->description = $input['description'];

		$image = Input::file('file');

		if($image != null) {

	        $filename = $image->getClientOriginalName();

	        $filename = pathinfo($filename, PATHINFO_FILENAME);

	        $fullname = Str::slug(Str::random(8) . $filename) . '.' .
	            $image->getClientOriginalExtension();

	        $upload = $image->move
	            ('uploads/type_images', $fullname);

	        $event_type->image_url =  $fullname;   
		} 
        
		$event_type->save();

		return Redirect::to('/admin/eventtype');
	}

	public function postDeleteeventtype() {

		$id = Input::get('delete_id');
		EventType::find($id)->delete();

		$events = EventB::where('event_type',$id)->get();

		foreach($events as $event) {

			$event->status = 2;
			$event->save();

			$user = User::find($event->user_created);

			$profile = Profile::where('user_id',$event->user_created)->first();
			if(!empty($profile)) {
				$event->username = $profile->name;
			} else {
				
				$event->username = $user->first_name . ' ' . $user->last_name;
			}
			$event->email = $user->email;

			Event::fire('event.disabled', array($event));
		}

		return Redirect::to('/admin/eventtype');
	}

	public function postCreateeventtype() {
		$input = Input::all();

		$vars['name'] = $input['name'];
		$vars['description'] = $input['description'];

		$image = Input::file('file');

		if($image != null) {

			// This is the original uploaded client name of the image
	        $filename = $image->getClientOriginalName();
	        // Because Symfony API does not provide filename
	        // without extension, we will be using raw PHP here



	        $filename = pathinfo($filename, PATHINFO_FILENAME);


	        // We should salt and make an url-friendly version of the file
	        $fullname = Str::slug(Str::random(8) . $filename) . '.' .
	            $image->getClientOriginalExtension();

	        // We upload the image first to the upload folder, then
	        // get make a thumbnail from the uploaded image
	        $upload = $image->move
	            ('uploads/type_images', $fullname);

	        $vars['image_url'] =  $fullname; 

		} else {
			$vars['image_url'] = "";
		}
        

		 EventType::create($vars);

		 return Redirect::to('/admin/eventtype');

	}

	public function postCreateeventcategory() {
		$input = Input::all();

		$vars['name'] = $input['name'];
		$vars['description'] = $input['description'];

		$image = Input::file('file');

		if($image != null) {
			// This is the original uploaded client name of the image
	        $filename = $image->getClientOriginalName();
	        // Because Symfony API does not provide filename
	        // without extension, we will be using raw PHP here



	        $filename = pathinfo($filename, PATHINFO_FILENAME);


	        // We should salt and make an url-friendly version of the file
	        $fullname = Str::slug(Str::random(8) . $filename) . '.' .
	            $image->getClientOriginalExtension();

	        // We upload the image first to the upload folder, then
	        // get make a thumbnail from the uploaded image
	        $upload = $image->move
	            ('uploads/category_images', $fullname);

	        $vars['image_url'] =  $fullname;   
		} else {
			$vars['image_url'] = "";
		}
        

		EventCategory::create($vars);

		return Redirect::to('/admin/eventcategory');
	}

	public function postDeleteeventcategory() {

		$id = Input::get('delete_id');
		EventCategory::find($id)->delete();

		$events = EventB::where('category',$id)->get();

		foreach($events as $event) {

			$event->status = 2;
			$event->save();

			$user = User::find($event->user_created);

			$profile = Profile::where('user_id',$event->user_created)->first();
			if(!empty($profile)) {
				$event->username = $profile->name;
			} else {
				
				$event->username = $user->first_name . ' ' . $user->last_name;
			}
			$event->email = $user->email;

			Event::fire('event.disabled', array($event));
		}

		return Redirect::to('/admin/eventcategory');
	}

	public function postEditeventcategory() {
		$input = Input::all();

		$cat = EventCategory::find($input['edit_id']);
		$cat->name = $input['name'];
		$cat->description = $input['description'];

		$image = Input::file('file');

		if($image != null) {

	        $filename = $image->getClientOriginalName();

	        $filename = pathinfo($filename, PATHINFO_FILENAME);

	        $fullname = Str::slug(Str::random(8) . $filename) . '.' .
	            $image->getClientOriginalExtension();

	        $upload = $image->move
	            ('uploads/category_images', $fullname);

	        $cat->image_url =  $fullname;   
		} 
        
		$cat->save();

		return Redirect::to('/admin/eventcategory');
	}

	public function get_eventtype() {
		
		$vars['page'] = "Event Types";

		$types = EventType::orderBy('id','DESC')->get();

		foreach($types as $type) {
			
			$type->no_events = EventB::where('event_type',$type->id)->count();

		}
		
		$vars['types'] = $types;

		return View::make('admin/eventtype', $vars);
	}


	public function postDisableevent() {
		$id = Input::get("disable_eventid");
		$event = EventB::find($id);
		$event->status = 1;		
		$event->save();

		$user = User::find($event->user_created);

		$profile = Profile::where('user_id',$event->user_created)->first();
		if(!empty($profile)) {
			$event->username = $profile->name;
		} else {
			
			$event->username = $user->first_name . ' ' . $user->last_name;
		}
		$event->email = $user->email;

		Event::fire('event.disabled', array($event));

		return Redirect::to('/admin/events');
	}

	public function postEnableevent() {
		$id = Input::get("enable_eventid");
		$event = EventB::find($id);
		$event->status = 0;		
		$event->save();

		$user = User::find($event->user_created);

		$profile = Profile::where('user_id',$event->user_created)->first();
		if(!empty($profile)) {
			$event->username = $profile->name;
		} else {
			
			$event->username = $user->first_name . ' ' . $user->last_name;
		}
		$event->email = $user->email;

		Event::fire('event.enabled', array($event));

		return Redirect::to('/admin/events');
	}

	

	public function getAppsetting(){
	
		if(s("logo")) {
			$vars['sitelogourl'] = s("logo");
		} else {
			$vars['sitelogourl'] = null;
		} if(s("favicon")) {
			$vars['sitefaviconurl'] = s("favicon");
		} else {
			$vars['sitefaviconurl'] = null;
		}
		$vars['siteTitle'] = s("title");
		$vars['mode'] = s("debug_mode");
		$vars['page'] = "Application Setting";
		return View::make('admin/app',$vars);
	
	}


	public function postGeneralsettings() {
		$title = Input::get("title");
		set_setting("title", $title);
		
		$mode = Input::get("mode");
		set_setting("debug_mode", $mode);
		Session::flash('general_updated', "Settings updated successfully");
		return Redirect::to("/admin/appsetting");
	}
	
	public function postUploadsitelogo(){
		
        $image = Input::file('photo');


		if($image != null) {

			// This is the original uploaded client name of the image
	        $filename = $image->getClientOriginalName();
	        // Because Symfony API does not provide filename
	        // without extension, we will be using raw PHP here

	        $filename = pathinfo($filename, PATHINFO_FILENAME);

	        // We should salt and make an url-friendly version of the file
	        $fullname = "event" . '.' .
	        $image->getClientOriginalExtension();

	        // We upload the image first to the upload folder, then
	        // get make a thumbnail from the uploaded image
	        $upload = $image->move
	            ('uploads/app', $fullname);

	        set_setting("logo",$fullname);

		
			Session::flash('logo_updated', "Settings updated successfully");
		}
		return Redirect::to("/admin/appsetting");
	}

	public function postDeletesitelogo() {
		$siteLogo = Setting::where("name","=","logo")->first();
		if($siteLogo != null) {
			$siteLogo->value = 0;
			$siteLogo->save();
		}
		Session::flash('logo_updated', "Settings updated successfully");
		return Redirect::to('/admin/appsetting');	
	}

	public function postUploadfavicon(){

		 $image = Input::file('photo');


		if($image != null) {

			// This is the original uploaded client name of the image
	        $filename = $image->getClientOriginalName();
	        // Because Symfony API does not provide filename
	        // without extension, we will be using raw PHP here

	        $filename = pathinfo($filename, PATHINFO_FILENAME);

	        // We should salt and make an url-friendly version of the file
	        $fullname = Str::slug(Str::random(8) . $filename) . '.ico';

	        // We upload the image first to the upload folder, then
	        // get make a thumbnail from the uploaded image
	        $upload = $image->move
	            ('uploads/app', $fullname);

	        set_setting("favicon",$fullname);

			Session::flash('favicon_updated', "Settings updated successfully");
		}	
		return Redirect::to("/admin/appsetting");
	}

	public function postDeletefavicon() {
		
		$faviconLogo = Setting::where("name","=","favicon")->first();
		if($faviconLogo != null) {
			$faviconLogo->value = 0;
			$faviconLogo->save();
		}
		
		Session::flash('favicon_updated', "Settings updated successfully");
		return Redirect::to('/admin/appsetting');	
	}
	
	public function postSeosettings() {
		
		$description = Input::get("description");
		$keywords = Input::get("keywords");
		$isSearchEngineAccess = Input::get("isSearchEngineAccess");
		
		set_setting("description",$description);
		set_setting("meta_keywords",$keywords);
		set_setting("search_engine_access",$isSearchEngineAccess);
		
		Session::flash('updated', "Settings updated successfully");
		
		return Redirect::to("/admin/seo");
	}
	
	public function getSeo() {
		$vars['description'] = s("description");
		$vars['keywords'] = s("meta_keywords");
		$vars['isSearchEngineAccess'] = s("search_engine_access");
		$vars['page'] = "SEO Setting"; 
		return View::make('admin/seo',$vars);
	}
	
	
	public function getFacebook() {
		$vars['fbid'] = s("fbid");
		$vars['fbsecret'] = s("fbsecret");
		$vars['page'] = "Facebook Setting";
		return View::make('admin/facebook',$vars);

	}
	
	public function postFacebooksettings() {
		
		set_setting("fbid",Input::get("facebookid"));
		set_setting("fbsecret",Input::get("facebooksecret"));
		Session::flash('updated', "Successful");
		return Redirect::to("admin/facebook");
	}

	public function getFeessettings() {
		$vars['payment_fees'] = s('payment_fees');
       	$vars['booking_fees'] =  s('booking_fees') ;
        $vars['booking_fees_base'] = s('booking_fees_base');

		$vars['page'] = "Transaction Fees Setting";
		return View::make('admin/fees_setting',$vars);

	}
	
	public function postFeessettings() {
		
		set_setting("payment_fees",Input::get("payment_fees"));
		set_setting("booking_fees",Input::get("booking_fees"));
		set_setting("booking_fees_base",Input::get("booking_fees_base"));

		Session::flash('updated', "Successful");
		return Redirect::to("admin/feessettings");
	}

	public function getPaypal() {
		$vars['paypalusername'] = s("paypalusername");
		$vars['page'] = "Paypal Setting";
		return View::make('admin/paypal',$vars);

	}
	
	public function postPaypalsettings() {

		$rules = [
			'paypalusername' => 'required|email',
		];
		$validator = Validator::make(Input::all(),$rules);
		if($validator->fails()) return Redirect::back()->withErrors($validator);

		set_setting("paypalusername", Input::get("paypalusername"));
		Session::flash('updated', "Successful");
		return Redirect::to("admin/paypal");
	}


	public function getAnalytics() {
		$vars['account_no'] = s("google_ua");
		$vars['page'] = "Analytics Setting";
		return View::make('admin/analytics',$vars);

	}

	public function postAnalyticssettings() {
		set_setting("google_ua", Input::get("account_no"));
		Session::flash('updated', "Successfully created a new Czar");
		return Redirect::to("admin/analytics");
	}

	public function getAdmins() {

		$vars['page'] = "Admin Management";

		$vars['admins'] = Admin::orderBy('id','DESC')->get();

		return View::make('admin/admin_management',$vars);

	}

	public function postCreateadmin() {

		$input = Input::all();

		Admin::create($input);

		return Redirect::to('admin/admins'); 
	}

	public function postDeleteadmin() {

		$id = Input::get("id");

		if(AdminAuth::admin()->id == $id) {
			Session::flash('errors','You cannot delete yourself'); 
		} else {
			$admin = Admin::find($id);
			$admin->delete();
		}
		return Redirect::to('admin/admins'); 
	}

	public function getMobileapi() {

		$vars['page'] = "Mobile Api Testing";

		return View::make('admin/mobileapis',$vars);

	}


	public function postEmailconfig(){

		$rules = [
			'host' => 'required',
			'port' => 'required',
			'from_username' => 'required',
			'password' => 'required',
			'encryption' => 'required',
			'from_email' => 'required'
		];
		$validator = Validator::make(Input::all(),$rules);
		if($validator->fails()) return Redirect::back()->withErrors($validator);

		set_setting("email_host", Input::get("host"));
		
		set_setting("email_port", Input::get("port"));
		
		set_setting("email_username", Input::get("from_username"));
		
		set_setting("email_password", Input::get("password"));
		
		set_setting("email_encryption", Input::get("encryption"));
		
		set_setting("from_email", Input::get("from_email"));



		
		return Redirect::to('admin/emailsettings')->with('email_config', "Email Config updated Successfully");
	}


	public function getEmailsettings(){

		$vars['page'] = "Email Management";
		
		$vars['host'] = s("email_host");
		
		$vars['port'] = s("email_port");
		
		//$vars['username'] = s("email_username");
		
		$vars['password'] = s("email_password");
		
		$vars['encryption'] = s("email_encryption");
		
		$vars['from_email'] = s("from_email");
		
		$vars['from_username'] = s("email_username");
		
		
		$vars['forgotpasswordemail'] = s("email_content_forgot_password");
		
		$vars['emailverificationemail'] = s("email_content_email_verification");
		
		$vars['disableuseremail'] = s("email_content_disable_user");
		$vars['enableuseremail'] = s("email_content_enable_user");

		$vars['ticketsoldemail'] = s("email_content_ticket_sold");
		
		$vars['buyticketemail'] = s("email_content_buy_ticket");
		
		$vars['disableeventemail'] = s("email_content_disable_event");
		$vars['enableeventemail'] = s("email_content_enable_event");

		$vars['contactorganizeremail'] = s("email_content_contact_organizer");
		
		$vars['adminpayoutemail'] = s("email_content_admin_payout");
		$vars['createeventemail'] = s("email_content_create_event");

		$vars['canceleventemail'] = s("email_content_cancel_event");
		
		$vars['cancelticketemail'] = s("email_content_cancel_ticket");

		
		
		$vars['forgotpasswordemailsubject'] = s("email_subject_forgot_password");
		$vars['emailverificationemailsubject'] = s("email_subject_email_verification");
		$vars['disableuseremailsubject'] =	s("email_subject_disable_user");
		$vars['enableuseremailsubject'] =	s("email_subject_enable_user");

		$vars['contactorganizeremailsubject'] = s("email_subject_contact_organizer");
		$vars['adminpayoutemailsubject'] = s("email_subject_admin_payout");
		$vars['disableeventemailsubject'] =	s("email_subject_disable_event");
		$vars['enableeventemailsubject'] =	s("email_subject_enable_event");

		$vars['ticketsoldemailsubject'] = s("email_subject_ticket_sold");
		$vars['buyticketemailsubject'] = s("email_subject_buy_ticket");
		$vars['createeventemailsubject'] = s("email_subject_create_event");
		$vars['canceleventemailsubject'] = s("email_subject_cancel_event");
		$vars['cancelticketemailsubject'] = s("email_subject_cancel_ticket");
		
		return View::make('admin/email', $vars);

	}

    public function postCancelticketemail() {

		set_setting("email_content_cancel_ticket", Input::get('cancelticketemail'));
		
		set_setting("email_subject_cancel_ticket", Input::get('cancelticketemailsubject'));
		
		return Redirect::to('admin/emailsettings')->with('cancel_ticket_content', "Email Content updated Successfully");
		
	}

   public function postCanceleventemail() {

		set_setting("email_content_cancel_event", Input::get('canceleventemail'));
		
		set_setting("email_subject_cancel_event", Input::get('canceleventemailsubject'));
		
		return Redirect::to('admin/emailsettings')->with('cancel_event_content', "Email Content updated Successfully");
		
	}

	 public function postCreateeventemail() {

		set_setting("email_content_create_event", Input::get('createeventemail'));
		
		set_setting("email_subject_create_event", Input::get('createeventemailsubject'));
		
		return Redirect::to('admin/emailsettings')->with('create_event_content', "Email Content updated Successfully");
		
	}
	public function postForgotpasswordemail() {

		set_setting("email_content_forgot_password", Input::get('forgotpasswordemail'));
		
		set_setting("email_subject_forgot_password", Input::get('forgotpasswordemailsubject'));
		
		return Redirect::to('admin/emailsettings')->with('forgot_pwd_content', "Email Content updated Successfully");
		
	}

	
	public function postEmailverificationemail() {

		set_setting("email_content_email_verification", Input::get('emailverificationemail'));
		
		set_setting("email_subject_email_verification", Input::get('emailverificationemailsubject'));
		
		return Redirect::to('admin/emailsettings')->with('email_verification_content', "Email Content updated Successfully");
		
	}
	
	public function postDisableuseremail() {

		set_setting("email_content_disable_user", Input::get('disableuseremail'));
		
		set_setting("email_subject_disable_user", Input::get('disableuseremailsubject'));
		
		return Redirect::to('admin/emailsettings')->with('disable_user_content', "Email Content updated Successfully");
		
	}

	public function postEnableuseremail() {

		set_setting("email_content_enable_user", Input::get('enableuseremail'));
		
		set_setting("email_subject_enable_user", Input::get('enableuseremailsubject'));
		
		return Redirect::to('admin/emailsettings')->with('enable_user_content', "Email Content updated Successfully");
		
	}
	  

	public function postAdminpayoutemail() {

		set_setting("email_content_admin_payout", Input::get('adminpayoutemail'));
		
		set_setting("email_subject_admin_payout", Input::get('adminpayoutemailsubject'));
		
		return Redirect::to('admin/emailsettings')->with('admin_payout_content', "Email Content updated Successfully");
		
	}

	
	public function postContactorganizeremail() {

		set_setting("email_content_contact_organizer", Input::get('contactorganizeremail'));
		
		set_setting("email_subject_contact_organizer", Input::get('contactorganizeremailsubject'));
		
		return Redirect::to('admin/emailsettings')->with('contact_organizer_content', "Email Content updated Successfully");
		
	}
	
	public function postDisableeventemail() {

		set_setting("email_content_disable_event", Input::get('disableeventemail'));
		
		set_setting("email_subject_disable_event", Input::get('disableeventemailsubject'));
		
		return Redirect::to('admin/emailsettings')->with('disable_event_content', "Email Content updated Successfully");
		
	}

	public function postEnableeventemail() {

		set_setting("email_content_enable_event", Input::get('enableeventemail'));
		
		set_setting("email_subject_enable_event", Input::get('enableeventemailsubject'));
		
		return Redirect::to('admin/emailsettings')->with('enable_event_content', "Email Content updated Successfully");
		
	}
	 

	public function postTicketsoldemail() {

		set_setting("email_content_ticket_sold", Input::get('ticketsoldemail'));
		
		set_setting("email_subject_ticket_sold", Input::get('ticketsoldemailsubject'));
		
		return Redirect::to('admin/emailsettings')->with('ticket_sold_content', "Email Content updated Successfully");
		
	}
	
	public function postBuyticketemail() {

		set_setting("email_content_buy_ticket", Input::get('buyticketemail'));
		
		set_setting("email_subject_buy_ticket", Input::get('buyticketemailsubject'));
		
		return Redirect::to('admin/emailsettings')->with('buy_ticket_content', "Email Content updated Successfully");
		
	}
}