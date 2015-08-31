<?php

class UserController extends BaseController {

	public function getCreateevent() {

		$vars['pageTitle'] = 'Create Event';

		$vars['category'] = EventCategory::lists('name', 'id');


		$vars['types'] = EventType::lists('name', 'id');

		$profile = Profile::where('user_id',Auth::user()->id)->first();

		if($profile) {

			$vars['org_name'] = $profile->name;
			$vars['org_description'] = $profile->description;
		} else {

			$vars['org_name'] = "Anonymous organizer";
			$vars['org_description'] ="";
		}

		return View::make('event.createevent',$vars);
	}

   public function getIndex() {
 		
  
	}

	public function getEditevent($event_id) {

		$vars['pageTitle'] = 'Edit Event';

			$event = EventB::find($event_id);

			if($event && $event->user_created == Auth::user()->id) {

				$vars['category'] = EventCategory::lists('name', 'id');
				$vars['types'] = EventType::lists('name', 'id');

				$profile = Profile::where('user_id',Auth::user()->id)->first();

				if($profile) {

					$vars['org_name'] = $profile->name;
					$vars['org_description'] = $profile->description;
				} else {

					$vars['org_name'] = "Anonymous organizer";
					$vars['org_description'] ="";
				}

				$vars['event'] = $event;

				$tickettypes = TicketType::where('event_id',$event_id)->get();

			$types = array();

			foreach($tickettypes as $tickettype) {
				$type = new stdClass;
				$type->type = $tickettype->type;
				$type->title = $tickettype->title;
				$type->noseats = $tickettype->noseats;

				
				if($type->type == 0){
					$type->dprice = 'Free';
					$type->fees = '--';
					$type->total_price = 0;
					$type->dfees_type = "--";
				} else {
					$type->dprice = round($tickettype->price,2);
					$type->fees = round($tickettype->fees_show,2);
					$type->total_price = round($tickettype->total_price,2);
					if($tickettype->fees_type == 0) {

						$type->dfees_type = "Pass Fees";
					} elseif($tickettype->fees_type == 1) {

						$type->dfees_type = "Split Fees";
					}else {

						$type->dfees_type = "Absorb Fees";
					}
				}
				
				$count = $tickettype->noseats - Ticket::where('event_id',$event_id)->where('tickettype_id',$tickettype->id)->count();

				$type->seats_left = $count;


				array_push($types,$type);
			}
			$vars['tickets'] = $types;

				return View::make('event.editevent',$vars);
			} else {
				dd($event);
				return View::make('errorpage',$vars);
			}
		
	}

	public function postEditevent() {

		$input = Input::all();

		$event = EventB::find(Input::get('id'));
		
		$image = Input::file('file');
		if($image) {

	        $filename = $image->getClientOriginalName();
	        $filename = pathinfo($filename, PATHINFO_FILENAME);
	        $fullname = Str::slug(Str::random(8) . $filename) . '.' .$image->getClientOriginalExtension();
	        $upload = $image->move('uploads/event_logos', $fullname);

	        $event->image_url = $fullname;
		} 

		$event->name = $input['name'];

        $event->description = $input['description'];

        $event->venue = $input['venue'];

        

        $event->category = $input['eventcat'];

        $event->event_type = $input['eventtype'];

        $free_ticket_titles = Input::get('ticketType');
        $free_seats = Input::get('qnty');

        $prices = Input::get('pricePaid');
        $ticketTypes = Input::get('ticketTypePaid');
        $seats = Input::get('qntyPaid');
        $ticketfeestype = Input::get('ticketfeesHidden');
       
        for($i = 0; $i<count($free_ticket_titles)-1; $i++){
	        
	   		$t_vars = array();
	        
	    	$t_vars["noseats"] = $free_seats[$i];

        	$t_vars['event_id'] = $event->id;

        	$t_vars['price'] = 0;
        
        	$t_vars['type'] = 0;

        	$t_vars['fees_show'] = 0;
        	$t_vars['fees_actual'] = 0;
        	$t_vars['total_price'] = 0;
        	$t_vars['booking_fees'] = 0;
        	$t_vars['payment_fees'] = 0;

        	$t_vars['title'] = $free_ticket_titles[$i];

        	$ticket_type = TicketType::create($t_vars);
        }


       	for($i = 0; $i<count($ticketTypes)-1; $i++){
	        
	   		$t_vars = array();
	        
	    	$t_vars["noseats"] = $seats[$i];

        	$t_vars['event_id'] = $event->id;

        	$t_vars['price'] = $prices[$i];
        
        	$t_vars['type'] =1;

        	$price = $prices[$i];

        	$p_fees = $price * s('payment_fees');
        	$b_fees = ($price * s('booking_fees') ) + s('booking_fees_base');
        	$fees = $p_fees + $b_fees;
        	$t_vars['fees_actual'] = $fees;
        	$t_vars['booking_fees'] = $b_fees;
        	$t_vars['payment_fees'] = $p_fees;

        	$t_vars['fees_type'] = $ticketfeestype[$i];

        	if($ticketfeestype[$i] == 0) {

        		$t_vars['fees_show'] = $fees;

        	} else if($ticketfeestype[$i] == 2) {

        		$t_vars['fees_show'] = 0;

        	} else {
        		
        		$t_vars['fees_show'] = $b_fees;
        	}

        	$t_vars['total_price'] = $price + $t_vars['fees_show'];

        	$t_vars['title'] = $ticketTypes[$i];

        	$ticket_type = TicketType::create($t_vars);
        }

        $event->save();

        return Redirect::to('/events/eventdetails/'.$event->id);
	}


	public function postCreateevent() {

        $input = Input::all();


		$image = Input::file('file');

		 $validator_image = Validator::make(
				array(
					'picture' => $image,
				),
				array(
					'picture' => 'required|mimes:jpeg,bmp,png,jpg',
				)
		);
		
		if ($validator_image->fails()) {
				$error_messages = $validator_image->messages()->all();
				$type='failed';
	         	$message='Please select Correct Image type';
	            return Redirect::to('user/createevent')->with('message',$message)->with('type',$type);
		}else
		{
			if (Input::hasFile('file'))
			{
			   $filename = $image->getClientOriginalName();
				   $filename = pathinfo($filename, PATHINFO_FILENAME);
			   $fullname = Str::slug(Str::random(8) . $filename) . '.' .$image->getClientOriginalExtension();
			   $upload   = $image->move('uploads/event_logos', $fullname);
			}
			else
			{
			$fullname = "";	
			}	
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

        $strttime=$this->timeconv($vars['start_time']);
        $endtime=$this->timeconv($vars['end_time']);

        //return $vars['start_date'].":::".$strt_time."::::".$vars['end_date']."::::".$endtime;

        if($vars['start_date']>$vars['end_date'])
         {
         	 $type='failed';
         	 $message='Start date cannot be later than end date';
             return Redirect::to('user/createevent')->with('message',$message)->with('type',$type);
         }
        elseif($vars['start_date']==$vars['end_date'])
         {
         	if($strttime>$endtime)
         	{
         	  $type='failed';
         	  $message='Start time cannot be later than end time';
              return Redirect::to('user/createevent')->with('message',$message)->with('type',$type);
         	}
         }

        $vars['image_url'] = $fullname;

        $vars['category'] = $input['eventcat'];

        $vars['event_type'] = $input['eventtype'];

        $vars['user_created'] =Auth::user()->id;

        $vars['payment_fees'] = s('payment_fees');
        $vars['booking_fees'] = s('booking_fees');
        $vars['booking_fees_base'] = s('booking_fees_base');

        $event = EventB::create($vars);
        //return $event->user_created;
        $user=User::find($event->user_created);

        //return $user->id;

        $free_ticket_titles = Input::get('ticketType');
        $free_seats = Input::get('qnty');

        $prices = Input::get('pricePaid');
        $ticketTypes = Input::get('ticketTypePaid');
        $seats = Input::get('qntyPaid');
        $ticketfeestype = Input::get('ticketfeesHidden');
       
        for($i = 0; $i<count($free_ticket_titles)-1; $i++){
	        
	   		$t_vars = array();
	        
	    	$t_vars["noseats"] = $free_seats[$i];

        	$t_vars['event_id'] = $event->id;

        	$t_vars['price'] = 0;
        
        	$t_vars['type'] = 0;

        	$t_vars['fees_show'] = 0;
        	$t_vars['fees_actual'] = 0;
        	$t_vars['total_price'] = 0;
        	$t_vars['booking_fees'] = 0;
        	$t_vars['payment_fees'] = 0;

        	$t_vars['title'] = $free_ticket_titles[$i];

        	$ticket_type = TicketType::create($t_vars);
        }


       	for($i = 0; $i<count($ticketTypes)-1; $i++){
	        
	   		$t_vars = array();
	        
	    	$t_vars["noseats"] = $seats[$i];

        	$t_vars['event_id'] = $event->id;

        	$t_vars['price'] = $prices[$i];
        
        	$t_vars['type'] =1;

        	$price = $prices[$i];

        	$p_fees = $price * s('payment_fees');
        	$b_fees = ($price * s('booking_fees') ) + s('booking_fees_base');
        	$fees = $p_fees + $b_fees;
        	$t_vars['fees_actual'] = $fees;
        	$t_vars['booking_fees'] = $b_fees;
        	$t_vars['payment_fees'] = $p_fees;

        	$t_vars['fees_type'] = $ticketfeestype[$i];

        	if($ticketfeestype[$i] == 0) {

        		$t_vars['fees_show'] = $fees;

        	} else if($ticketfeestype[$i] == 2) {

        		$t_vars['fees_show'] = 0;

        	} else {
        		
        		$t_vars['fees_show'] = $b_fees;
        	}

        	$t_vars['total_price'] = $price + $t_vars['fees_show'];

        	$t_vars['title'] = $ticketTypes[$i];

        	$ticket_type = TicketType::create($t_vars);
        }

        Event::fire('user.createevent',array($user,$event));
        return Redirect::to('/events/eventdetails/'.$event->id);

	}

	public function getOrgprofile()
	{
		$vars['pageTitle']="OrganizerProfile";

		$profile = Profile::where('user_id',Auth::user()->id)->first();

		if($profile) {

			$vars['name'] = $profile->name;
			$vars['description'] = $profile->description;
			$vars['website'] = $profile->website;
			$vars['facebook_link'] = $profile->facebook_link;
			$vars['image_url'] = $profile->image_url;
			$vars['use_description'] = $profile->use_description;
		
		} else {
			$vars['name'] ="";
			$vars['description'] = "";
			$vars['website'] = "";
			$vars['facebook_link'] = "";
			$vars['image_url'] = null;
			$vars['use_description'] = null;
		
		}

		return View::make('event.organizerProfile',$vars);
	}

	public function postRemoveimage() {
		$profile = Profile::where('user_id',Auth::user()->id)->first();

		if($profile) {
			$profile->image_url = null;
			$profile->save();
		}
		return Redirect::back();
	}

	public function postOrgprofile() {

		$profile = Profile::where('user_id',Auth::user()->id)->first();
        //dd(Auth::user()->id);
		$image = Input::file('file');

		if($image) {

	        $filename = $image->getClientOriginalName();

	        $filename = pathinfo($filename, PATHINFO_FILENAME);

	        $fullname = Str::slug(Str::random(8) . $filename) . '.' .$image->getClientOriginalExtension();

	        $upload = $image->move('uploads/profile_images', $fullname);

		 } else {
		 	$fullname = null;
		 }

		if(!$profile) {

			$profile = new Profile;
			$profile->user_id = Auth::user()->id;
			$profile->save();
		}

		$profile->name = Input::get('name');
		$profile->description = Input::get('description');
		$profile->website = Input::get('website');
		//dd(Input::get('facebook_link'));
		$profile->facebook_link = Input::get('facebook_link');
		$profile->image_url = $fullname;
		if(Input::has('use_description')) {
			$profile->use_description = 1;
		}
			
			$profile->save();

		return Redirect::back()->with('success','Changes saved successfully');
	}

	public function getAccountsettings() {

		$vars['pageTitle'] = "Account Settings";

		$user = Auth::user();

		$user->birthday =  date("m-d-Y",strtotime($user->dob));

		$user->act_since = date("F j Y",strtotime($user->created_at));

		$vars['user'] = $user;

		$payouts = Payout::where('organiser_id',$user->id)->get();

		$vars['payouts'] = $payouts;

		$payout_amount = 0;

		foreach($payouts as $payout) {

			$payout_amount = $payout_amount + $payout->amount;
		}

		$vars['payout_amount'] = $payout_amount;

		$events = EventB::where('user_created',Auth::user()->id)->get();

		$revenue_amount = 0;
		$revenues = array();

		foreach($events as $event) {

			$revenue = new stdClass();

			$revenue->event = $event->name;

			$tickettypes = TicketType::where('event_id',$event->id)->get();

			$revenue->tickets_sold = 0;
			$revenue->amount = 0;


			$ticket_count = 0;

			foreach($tickettypes as $type) {

				$tickets_sold = Ticket::where('tickettype_id',$type->id)->count();

				$revenue->tickets_sold += $tickets_sold;

				$amount = $tickets_sold*($type->total_price - $type->fees_actual);

				$revenue->amount += $amount;

				
			}
			array_push($revenues,$revenue);

			$revenue_amount = $revenue_amount + $revenue->amount;

		}

		$vars['revenues'] = $revenues;
		$vars['revenue_amount'] = $revenue_amount;

        
		if(!Session::has('password') && !Session::has('social') && !Session::has('close') && !Session::has('payouts'))


		Session::flash('contact',"Contact settings");

		return View::make('user.account_setting',$vars);

	}

	public function postCloseaccount() {


	}

	public function postSettings() {

		$user = Auth::user();

		$user->first_name = Input::get('first_name');

		$user->last_name = Input::get('last_name');

		$user->city = Input::get('city');

		$user->gender = Input::get('gender');

		$user->address = Input::get('address');

		$user->phone = Input::get('phone');

		if(Input::get('birthDay') != null) {
	
			$user->dob = Input::get('birthDay');

		}


		Session::flash('contact',"Contact settings");

		$user->save();

		return Redirect::back()->with('success_contact','Your account settings have been saved');
	}

	public function postChangeemail() {

		Session::flash('contact',"Contact settings");

		$rules = ['password' => 'required',
				  'newemail' => 'required',
					];
		$validator = Validator::make(Input::all(),$rules);
		if($validator->fails()) return Redirect::back()->with('errors_contact','Please enter correct data');

		$user = Auth::user();

		if (Hash::check(Input::get('password'), $user->password)) {

			if(User::where('email',Input::get('newemail'))->first() == null){

				$user->email = Input::get('newemail');

				$user->save();

			} else {
				return Redirect::back()->with('errors_contact','Email already exists..Please enter another email');
			}

			
		} else {
			return Redirect::back()->with('errors_contact','Please enter the correct password');
		}
		return Redirect::back()->with('success_contact','Your email has been changed');
		
	}


	public function postPassword() {

		Session::flash('password',"Password settings");

		$rules = ['oldpassword' => 'required',
				  'newpassword1' => 'required',
				  'newpassword2' => 'required|same:newpassword1',

					];
		$validator = Validator::make(Input::all(),$rules);
		if($validator->fails()) return Redirect::back()->with('errors_pwd','Please enter correct data');

		$user = Auth::user();

		if (Hash::check(Input::get('oldpassword'), $user->password)) {

			$user->password = Hash::make(Input::get('newpassword1'));

			$user->save();
		} else {
			return Redirect::back()->with('errors_pwd','Please enter the correct password');
		}

		

		return Redirect::back()->with('success_pwd','Your password has been changed');
	}

    public function getEventcancel($event_id)
    {
        $user_id=Auth::user()->id;
		$events=EventB::find($event_id);
		$user=User::find($user_id);
		//return $user->email;
		if($events!=NULL)
		{	
		$event_usrid=$events->user_created;
		if($event_usrid==$user_id)
		{
			$events->delete();
			Event::fire('user.cancelevent', array($user,$events));
			Session::flash('successful', "xxx");
			return Redirect::to('/');

		}else {

            Session::flash('unsuccessful', "yyy");
			return Redirect::to('events/eventdetails/' . $events->id);
		}
	}
		else
		{   
			Session::flash('noevent', "zzz");
			return Redirect::to('/' );
		}

       
    }

    public function getTicketcancel($transaction_id)
    {
    		$transactions=Transaction::find($transaction_id);
    		$user_id=Auth::user()->id;
    		$user=User::find($user_id);
    		$count_tkt=0;
    		if($transactions!=NULL and $transactions->is_cancelled==0)
    		{
    		$refund_amount=$transactions->amount;
    		$admi = Admin::get();
			$adarray = array();
			foreach ($admi as $key) {
				$adarray[] = $key->username;
			}
    			
    		Ticket::where('transaction_id',$transaction_id)->delete();
    		$transactions->is_cancelled=1;
    		$transactions->save();
    		Event::fire('user.cancelticket', array($user,$transactions));
    		Event::fire('admin.cancelticket', array($user,$transactions,$adarray));
    		return Redirect::to('user/mytickets/' . Auth::user()->id);
 			 
    		
    	   }else{
    			 return Redirect::to('user/mytickets/' . Auth::user()->id);  
    		 }

    }

	public function getMytickets()
	{

		$vars['pageTitle'] = "My Tickets";

		$user_id = Auth::user()->id;

		//return $user_id;

		$transactions = Transaction::where('user_id',$user_id)->where('is_cancelled',0)->get();

		//return $transactions;

		$past = array();
		$upcoming = array();

		foreach($transactions as $transaction) {

			$tickets = Ticket::where('transaction_id',$transaction->id)->get();

            //return $tickets;

			$type_quantity = array();

			foreach($tickets as $ticket) {

              // Log::info($ticket);
				if(array_key_exists($ticket->tickettype_id, $type_quantity)) {
					$quantity = $type_quantity[$ticket->tickettype_id] + 1;
					$type_quantity[$ticket->tickettype_id] = $quantity;
				} else {

					$type_quantity[$ticket->tickettype_id] = 1;
				}

			}
            
            
			$name_quantity = array();

			foreach($type_quantity as $id => $quantity) {
				//Log::info("inside fail");

              //Log::info("$id");
				$name = TicketType::find($id)->title;



				$name_quantity[$name] = $quantity;
			}


			$event = EventB::find($tickets->first()['event_id']);

			if($event) {
				$nobj = EventB::create_event_obj($event);

				$nobj->transaction = array('id'=>$transaction->id,'amount' => $transaction->amount, 'type' => $transaction->type, 'address' => $transaction->address); 
				
				$nobj->tickets = $name_quantity;

				if($nobj->startDate >= date('Y-m-d',time())) {

					array_push($upcoming, $nobj);
				} else {
					array_push($past, $nobj);
				}
					
			}
		}

		$vars['past_count'] = sizeof($past);
		$vars['upcoming_count'] = sizeof($upcoming);

		$vars['past'] = $past;
		$vars['upcoming'] = $upcoming;



		return View::make('user.myTickets',$vars);
	}

	public function getMyevents() {

		$vars['pageTitle'] = 'My Event';

		$result = array();

		$past = array();
		$upcoming = array();

		$events = EventB::where('user_created',Auth::user()->id)->get();

		foreach ($events as $event) {

			$nobj = new stdClass;

			$nobj->id = $event->id;
			$nobj->title = $event->name;

			$nobj->d_start_date = date("F j",strtotime($event->start_date));
			$nobj->startDate = $event->start_date;
			$nobj->startTime = $event->start_time;

			$nobj->total_tickets = TicketType::where('event_id',$event->id)->sum('noseats');

			$nobj->tickets_sold = Ticket::where('event_id',$event->id)->count();


			if($nobj->startDate >= date('Y-m-d',time())) {

				array_push($upcoming, $nobj);
			} else {
				array_push($past, $nobj);
			}
		}

		$vars['past_count'] = sizeof($past);

		$vars['past'] = $past;

		$vars['upcoming_count'] = sizeof($upcoming);
			
		$vars['upcoming'] = $upcoming;	

		return View::make('event.myevents',$vars);
	}

	public function postSaveevent() {

		$vars['event_id'] = Input::get('event_id');

		$vars['user_id'] = Auth::user()->id;

		Bookmark::create($vars);


	}

	public function postUnsaveevent() {

		$event_id = Input::get('event_id');

		$user_id = Auth::user()->id;

		Bookmark::where('event_id',$event_id)->where('user_id',$user_id)->delete();


	}

	public function getMysavedevents() {

		$vars['pageTitle'] = 'My Saved Events';

		$event_ids = Bookmark::where('user_id',Auth::user()->id)->lists('event_id');

		$events = EventB::whereIn('id',$event_ids)->get();

		$c = new \Illuminate\Database\Eloquent\Collection;

		
		foreach($events as $event) {

			$event->d_start_date = date("F j",strtotime($event->start_date));
			$event->d_end_date = date("F j",strtotime($event->end_date));
			$event->type = EventType::find($event->event_type)->name;

			$event->user_bookmarked = false;
			$event->user_visiting = false;

			$user_id = $event->user_created;

			$event->type = EventType::find($event->event_type)->name;

			$profile = Profile::where('user_id',$user_id)->first();
			$user = User::find($user_id);

			if($profile != null) {

				$event->organizer = array('id' => $user_id, 'profile' => "1", 'name' => $profile->name, 'email' =>$user->email, 'no' => $profile->no,'details' => $profile->description,'image_url' => $profile->image_url, 'address' => $profile->city);
			
			} else {
				$event->organizer = array('id' => $user_id, 'profile' => "0", 'email' =>$user->email );
			}

			$c->add($event);

				
		}
			
		$events = $c->all();
		


		$perPage = 9;
		if( Input::get('page')) {
			$currentPage = Input::get('page') - 1;

		} else {
			$currentPage = 0;
		}
		$pagedData = array_slice($events, $currentPage * $perPage, $perPage);
		$vars['events'] = Paginator::make($pagedData, count($events), $perPage);

		return View::make('user.saved_events',$vars);
	}
}
