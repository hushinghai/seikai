<?php

class ApiController_old_2 extends BaseController {


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

	public function getTestapis() {
		return View::make('testapis');
	}

	public static function getLat($lat,$bearing)
	{
	    $deg= $bearing * pi() / 180;
	    $lat1=($lat)*pi()/180;
	    $dist=25/6371;
	    $lat2= asin( sin($lat1)*cos($dist) +
	                      cos($lat1)*sin($dist)*cos($deg) );
	    $lat_final= $lat2 * 180 / pi();
	    return $lat_final;
	}

	public static function getLong($lng,$lat,$bearing)
	{
	    $deg= $bearing * pi() / 180;
	    $long1=($lng)*pi()/180;
	    $lat1=($lat)*pi()/180;
	    $dist=25/6371;
	    $lat2=EventsController::getLat($lat,$bearing);
	    $long2 = $long1 + atan2(sin($deg)*sin($dist)*cos($lat1),
	                          cos($dist)-sin($lat1)*sin($lat2));        
	    $long_final= $long2 * 180 / pi();
	    return $long_final;
	}

	public function postEvents()
	{
		$input = Input::all();
		$error_flag = 0;
		if(!$input['city']) { // Bitch!
			$error = "City not present";
			$error_flag = 1;
		} else {
			try{
				if(Input::has('lat') && Input::has('lng')) {
					$lat = Input::get('lat');
					$lng = Input::get('lng');
					$min_lat=self::getLat($lat,180);
				    $max_lat=self::getLat($lat,0);
				    $min_lng=self::getLong($lng,$lat,270);
				    $max_lng=self::getLong($lng,$lat,90);
					$events = EventB::where('lat','<=',$max_lat)->where('lat','>=',$min_lat)->where('lng','>=',$min_lng)->where('lat','<=',$max_lat)->where('status',0);
				} else  {
					$events = EventB::where('city',$input['city'])->where('status',0);
				}
				$searchterm = $input['search'];
				if($events->first()){
					if( $searchterm != null) {
						$events = $events->where('name', 'LIKE', "%$searchterm%")->where('start_date', '>=', date('Y-m-d H:i:s',time()-(24*60*60)))->get();
					} else  {
						$events = $events->where('start_date', '>=', date('Y-m-d H:i:s',time()-(24*60*60)))->get();
					}
					if($input['user_id']) {
						$events = User::check_users_going_to_event($events,$input['user_id']);
					}
				}
			}
			catch(Exception $e) {
				$error_flag = 1;
				$error = "Invalid inputs. ".$e;
			}
		}
		if($error_flag == 1) {
			return array('success' => '0','error' => 1 , 'error_msg' => $error);
		} else {
			return EventB::create_event_list_obj($events);
		}
	}

	public function postSaveuserevent() {

		$input = Input::all();

		$user_id = $input['user_id'];

		$error_flag = 0;

		if($user_id == null) {
			$error = "User id not given";
			$error_flag = 1;
		} else {

			$event_id = $input['event_id'];
			if($event_id == null) {
				$error = "Event id not given";
				$error_flag = 1;
			} else {

				$bookmark = Bookmark::where('event_id',$event_id)->where('user_id',$user_id)->first();

				if($bookmark != null) {
					return array('success' => '1');
				}

				$vars['event_id'] = $event_id;
				$vars['user_id'] = $user_id;

				$bookmark = Bookmark::create($vars);
				if($bookmark != null){
					return array('success' => '1');
				} else {
					return array('success' => '0');
				}
			}
		}
		return array('success' => '0','error' => 1 , 'error_msg' => $error);
	}

	public function postUnsaveuserevent() {

		$input = Input::all();

		$user_id = $input['user_id'];

		$error_flag = 0;

		if($user_id == null) {
			$error = "User id not given";
			$error_flag = 1;
		} else {

			$event_id = $input['event_id'];
			if($event_id == null) {
				$error = "Event id not given";
				$error_flag = 1;
			} else {

				$bookmark = Bookmark::where('event_id',$event_id)->where('user_id',$user_id)->get();

				if($bookmark != null) {
					$bookmark->delete();
					return array('success' => '1');
				} else {
					return array('success' => '0');
				}
			}
		}
		return array('success' => '0','error' => 1 , 'error_msg' => $error);
	}


	public function postCategory() {

		$input = Input::all();

		$id = $input['id'];

		$error_flag = 0;
		if($id == null) {

			$error = "Category id not present";
			$error_flag = 1;
		} else {
			

			if($input['city'] == null) {
				$error = "City not present";
				$error_flag = 1;
			} else {
				if(Input::has('lat') && Input::has('lng')) {

					$lat = Input::get('lat');
					$lng = Input::get('lng');	

					$min_lat=EventsController::getLat($lat,180);
				    $max_lat=EventsController::getLat($lat,0);
				    $min_lng=EventsController::getLong($lng,$lat,270);
				    $max_lng=EventsController::getLong($lng,$lat,90);

					$cat_events = EventB::where('lat','<=',$max_lat)->where('lat','>=',$min_lat)->where('lng','>=',$min_lng)->where('lat','<=',$max_lat)->where('category',$id)->where('start_date', '>=', date('Y-m-d H:i:s',time()-(24*60*60)))->where('status',0)->get();

				} else  {
					$cat_events = EventB::where('city',$input['city'])->where('category',$id)->where('start_date', '>=', date('Y-m-d H:i:s',time()-(24*60*60)))->where('status',0)->get();
				}


				if($input['user_id'] != null) {

					$cat_events = User::check_users_going_to_event($cat_events,$input['user_id']);
				}
			}

			
		}

		if($error_flag == 1) {
			
			return array('success' => '0','error' => 1 , 'error_msg' => $error);
		
		} else {

			return EventB::create_event_list_obj($cat_events);
			
		}
	}


	public function postSavedevents() {

		$input = Input::all();

		$id = $input['user_id'];

		$error_flag = 0;
		if($id == null) {

			$error = "User id not present";
			$error_flag = 1;
		} else {

			$user_event_ids = User::get_book_marked_events($id);

			$result = array();

			$past = array();
			$upcoming = array();

			foreach ($user_event_ids as $id) {

				$event = EventB::find($id);

				if($event != null) {

					$nobj = EventB::create_event_obj($event);

					$nobj->ticket = TicketType::cheapest_ticket_for_event($id);

					if($nobj->startDate >= date('Y-m-d',time())) {

						array_push($upcoming, $nobj);
					} else {
						array_push($past, $nobj);
					}
				}
			}

			$result['past'] = $past;
			
			$result['upcoming'] = $upcoming;
			
		}

		if($error_flag == 1) {
			
			return array('success' => '0','error' => 1 , 'error_msg' => $error);
		
		} else {

			return $result;
			
		}
	}


	public function postEventdetails() {

		$input = Input::all();

		$event_id = $input['event_id'];

		if($event_id == null) {

			return array('success' => '0','error' => 1 , 'error_msg' => "Event id not given");
		} else {

			$event = EventB::find($event_id);
			if($event != null) {

				$nobj = EventB::create_event_obj($event);

				$tickettypes = TicketType::where('event_id',$event_id)->get();

				$types = array();

				foreach($tickettypes as $tickettype) {
					$type = new stdClass;
					$type->type = $tickettype->type;
					$type->title = $tickettype->title;
					$type->details = $tickettype->description;
					$type->currency = $tickettype->currency;
					$type->price = $tickettype->price;
					$type->fees = $tickettype->fees_show;
					$type->total_price = $tickettype->total_price;
					$type->id = $tickettype->id;

					$count = $tickettype->noseats - Ticket::where('event_id',$event_id)->where('tickettype_id',$tickettype->id)->count();

					$type->seats_left = $count;
					array_push($types,$type);
				}

				$nobj->ticket_types = $types;

				$result = array();

				array_push($result,$nobj);

				return $result;

			} else {
				return array('success' => '0','error' => 1 , 'error_msg' => "Invalid event id");
			}

		}

	}

	public function postOrganiserdetails(){

		$inputs = Input::all();

		$user_id = $inputs['id'];

		$profile = Profile::where('user_id',$user_id)->first();
		$user = User::find($user_id);

		$result = array();
		$past = array();
		$upcoming = array();

		if($profile != null) {

			$details = array('id' => $user_id, 'profile' => "1", 'name' => $profile->name, 'email' =>$user->email, 'no' => $profile->no,'details' => $profile->description, 'address' => $profile->city);
			if($profile->image_url) {
				$details['image_url'] = $profile->image_url;
			} else {
				$details['image_url'] = "default_profile.png";
			}
		
		} else {
			$details = array('id' => $user_id, 'profile' => "0", 'email' =>$user->email );
		}
		if($user->role == 0) {

			$details['disabled'] = 'false';

		} else {
			$details['disabled'] = 'true';
		}


		$events = EventB::where('user_created',$user_id)->where('status',0)->get();

		foreach($events as $event) {

			$nobj = new stdClass;

			$nobj->id = $event->id;
			$nobj->title = $event->name;
			if($event->image_url) {
				$nobj->image_url = $event->image_url;
			} else {
				$nobj->image_url = "default_event.jpg";
			}
			$nobj->details = $event->description;

			$nobj->d_start_date = date("F j",strtotime($event->start_date));
			$nobj->startDate = $event->start_date;
			$nobj->startTime = $event->start_time;

			$nobj->d_end_date = date("F j",strtotime($event->end_date));
			$nobj->endDate = $event->end_date;
			$nobj->endTime = $event->end_time;

			$nobj->cat_id = $event->category;
			$nobj->status = $event->status;

		if($event->category){

			$nobj->category = EventCategory::find($event->category)->name;
		}else{
			$nobj->category = "Uncategorized";
		}

			$nobj->location = array("lat"=> $event->lat, "lng" => $event->lng, "address" => $event->venue, "city" => $event->city);

			if($nobj->startDate >= date('Y-m-d',time())) {
				$nobj->pastevent = 'false';
				array_push($upcoming, $nobj);
			} else {
				$nobj->pastevent = 'true';
				array_push($past, $nobj);
			}	

		}

		$result['details'] = $details;
		$result['past'] = $past;
		$result['upcoming'] = $upcoming;

		return $result;
	}

	public function postMytickets() {

		$inputs = Input::all();

		$user_id = $inputs['id'];

		$transactions = Transaction::where('user_id',$user_id)->get();


		$result = array();
		$past = array();
		$upcoming = array();

		foreach($transactions as $transaction) {

			$tickets = Ticket::where('transaction_id',$transaction->id)->get();


			$type_quantity = array();

			foreach($tickets as $ticket) {

				if(array_key_exists($ticket->tickettype_id, $type_quantity)) {
					$quantity = $type_quantity[$ticket->tickettype_id] + 1;
					$type_quantity[$ticket->tickettype_id] = $quantity;
				} else {

					$type_quantity[$ticket->tickettype_id] = 1;
				}

			}

			$name_quantity = array();

			foreach($type_quantity as $id => $quantity) {

				$name = TicketType::find($id)->title;

				$name_quantity[$name] = $quantity;
			}


			$event = EventB::find($tickets->first()['event_id']);

			if($event) {
				$nobj = EventB::create_event_obj($event);

				$nobj->transaction = array('amount' => $transaction->amount, 'type' => $transaction->type, 'address' => $transaction->address); 
				
				$nobj->tickets = $name_quantity;

				if($nobj->startDate >= date('Y-m-d',time())) {

					array_push($upcoming, $nobj);
				} else {
					array_push($past, $nobj);
				}
					
			}
		}

		$result['past'] = $past;
		$result['upcoming'] = $upcoming;

		return $result;

	}

	public function postLogin()
	{

		if ( Input::get('email') && Input::get('password') )
		{

			$user = User::where('email',Input::get('email'))->first();
			if($user != null) {
				if(Hash::check( Input::get('password'),$user->password)) {

					return array('success' => '1', 'user_id' => $user->id, 'email' => $user->email);
				}

				return array('success' => '0','error' => '1' , 'message' => "email and password do not match");
			}
		}

		return array('success' => '0','error' => '1', "message" => 'email id or password missing');
	}


	public function postRegister()
	{
		

		 $vars = array();

		 $vars['password'] = Hash::make(Input::get('password'));
		 $vars['email'] = Input::get('email');

		 $user = User::where('email','=',Input::get('email'))->first();
		 if( $user == null ) {
		 	$user = User::create($vars);

			return array('success' => '1', 'user_id' => $user->id, 'email' => $user->email);
		 } else {
		 	return array('success' => '0','error' => '1', "message" => 'email already registered');
		 }
		 
	}


	public function getCategories() {
			$cat = EventCategory::lists('name', 'id');

			return $cat;
	}


	public function getTypes() {
			$type = EventType::lists('name', 'id');

			return $type;
	}

	public function postBooking() {

		$input = Input::all();

		if($input['status']) {

			try {

				$tickets = json_decode($input['tickets'], true);


				//die(print_r($input['tickets']));

				$vars['transaction_id'] = $input['transaction_id'];

				$vars['amount'] = $input['amount'];
				$vars['status'] = 1;

				$vars['first_name'] = $input['first_name'];
				$vars['last_name'] = $input['last_name'];
				$vars['email'] = $input['email'];
				$vars['contact_no'] = $input['contact_no'];

				$vars['currency'] = "USD";
				$vars['type'] = $input['transaction_type'];
				$vars['user_id'] = $input['user_id'];

				$transaction = Transaction::create($vars);

				foreach($tickets as $ticket) {

						$key = array_keys($ticket);

						$key = $key[0];

						$quantity = array_values($ticket);

						$quantity = $quantity[0];

					for($count = 0 ; $count < $quantity ; $count++) {

						$t_vars = array();

						$t_vars['transaction_id'] = $transaction->id;
						$t_vars['event_id'] = $input['event_id'];
						$t_vars['user_id'] = $input['user_id'];
						$t_vars['tickettype_id'] = $key;

						Ticket::create($t_vars);
					}
				}

			} 

			catch (Exception $e) {
				return (array('success' => '0','error' => 1,'error_msg' => "$e"));

			}

			

			return (array('success' => 1));
		}

		return (array('success' => '0','error' => 1,'error_msg' => "Transaction failed"));

	}
	
	
	public function postBookingfree(){
		
			$input = Input::all();
		
		
				$tickets = json_decode($input['tickets'], true);


				//die(print_r($input['tickets']));

				$vars['transaction_id'] = $input['transaction_id'];

				$vars['amount'] = $input['amount'];
				$vars['status'] = 1;

				$vars['first_name'] = $input['first_name'];
				$vars['last_name'] = $input['last_name'];
				$vars['email'] = $input['email'];
				$vars['contact_no'] = $input['contact_no'];

				$vars['currency'] = "USD";
				$vars['type'] = $input['transaction_type'];
				$vars['user_id'] = $input['user_id'];

				$transaction = Transaction::create($vars);

				foreach($tickets as $ticket) {

						$key = array_keys($ticket);

						$key = $key[0];

						$quantity = array_values($ticket);

						$quantity = $quantity[0];

					for($count = 0 ; $count < $quantity ; $count++) {

						$t_vars = array();

						$t_vars['transaction_id'] = $transaction->id;
						$t_vars['event_id'] = $input['event_id'];
						$t_vars['user_id'] = $input['user_id'];
						$t_vars['tickettype_id'] = $key;

						Ticket::create($t_vars);
					}
				}

				
				
				return Response::json($transaction);
		
	}

	public function postCreateevent() {

        $input = Input::all();


		$image = Input::file('image');

		 if($image) {

	        $filename = $image->getClientOriginalName();

	        $filename = pathinfo($filename, PATHINFO_FILENAME);

	        $fullname = Str::slug(Str::random(8) . $filename) . '.' .$image->getClientOriginalExtension();

	        $upload = $image->move('uploads/event_logos', $fullname);

		 } else {
		 	$fullname = "";
		 }

		$vars['name'] = $input['name'];

        $vars['description'] = $input['description'];

        $vars['city'] = $input['city'];
        $vars['lat'] = $input['lat'];
        $vars['lng'] = $input['lng'];

        $vars['venue'] = $input['venue'];

        $vars['start_time'] = $input['start_time'];

        $vars['end_time'] = $input['end_time'];

        $vars['image_url'] = $fullname;

        $vars['category'] = $input['eventcat'];

        $vars['event_type'] = $input['eventtype'];

        $vars['user_created'] =$input['user_id'];

        $event = EventB::create($vars);

        $response = array('success' => true ,'event_id'=>$event->id);

        return Response::json($response);

	}


}
