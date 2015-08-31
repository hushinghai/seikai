<?php


class EventsController extends BaseController {


	public function events()
	{

			$vars['pageTitle'] = "Events";


			$vars['cats'] = EventCategory::all();

			$vars['events'] = null;

			return View::make('event.events',$vars);
			
		 
	}

	public function postEventslist(){


		if(Input::get('lat') && Input::get('lng')){

			$lat = Input::get('lat');
			$lng = Input::get('lng');	

			$min_lat=EventsController::getLat($lat,180);
		    $max_lat=EventsController::getLat($lat,0);
		    $min_lng=EventsController::getLong($lng,$lat,270);
		    $max_lng=EventsController::getLong($lng,$lat,90);

			$events = EventB::where('lat','<=',$max_lat)->where('lat','>=',$min_lat)->where('lng','>=',$min_lng)->where('lat','<=',$max_lat)->where('end_date', '>=', date('Y-m-d H:i:s',time()-(24*60*60)))->where('status',0)->take(11)->get();

			
			if($events->isEmpty())
			{
				$events = EventB::where('city',Input::get('city'))->where('end_date', '>=', date('Y-m-d H:i:s',time()-(24*60*60)))->where('status',0)->take(11)->get();
				
			}

			foreach($events as $event) {

			$event->d_start_date = date("F j",strtotime($event->start_date));
			$event->d_end_date = date("F j",strtotime($event->end_date));
			$event->type = EventType::find($event->event_type);

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

			$event->saved_count = Bookmark::where('event_id',$event->id)->count();
		}

				if(Auth::user()) {

					$vars = User::user_saved_events($events);
					$vars['saved_events_count'] = sizeof($vars['saved_events']);
					$vars['events_count'] = sizeof($vars['events']);

				} else {
					$vars['events'] = $events->sortBy('saved_count')->reverse()->take(9);
					$vars['saved_events'] = null;
					$vars['saved_events_count'] = 0;
					$vars['events_count'] = $events->count();
 				}
		}
		return View::make('event.event_partial',$vars);
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

	

	public function getEventdetails($event_id) {


		$vars['pageTitle'] = 'Event Details';
        $flag=0;
        $date = date('Y-m-d H:i:s',time());
        //return $date;
		$event = EventB::find($event_id);
		if($event != NULL)
		{
		$event_date=$event->start_date;

		$event_start_date=$event->start_date;
		$event_end_date=$event->end_date;

		$crrdate = date('Y-m-d', strtotime($date));
   		$crrtime = date('H:i:s', strtotime($date));
   		$mv=substr($event->start_time,-2);
   		$pos=strpos($event->start_time,':');
   		$mv_pos=strpos($event->start_time,$mv);
   		
   		$hour=substr($event->start_time,0,$pos);
    	$min=substr($event->start_time,$pos+1,($mv_pos-($pos+1)));
    	if($mv == 'pm')
    	 {
      		$hour=$hour+12;
      		if($hour==24)
      		 {
      			$hour=0;
      		 }
    	 }
    	$start_time=$hour.":".$min.":00";
    	$eventtime = date('H:i:s', strtotime($start_time));
    	$datewant = new DateTime($eventtime);
    	$event_time=$datewant->sub(new DateInterval('P0Y0M0DT2H0M0S'))->format('H:i:s');
    	//return $event_time."||".$crrtime."||".$event_time;
    	if($crrdate > $event_date)
    	 {
    	 	$flag=0;
    	 }
    	 elseif($crrdate==$event_date)
    	  {
    	 	if($crrtime > $event_time)
    	     {	
    			$flag=0;
    	 	 }
    	 	 else
    	 	 { 
    	 	// return "hello";
    	 	   $flag=1;
    	      }
    	  }
    	 else
    	 {
    	 	$flag=1;
    	 }

        //return $crrtime.":::".$crrdate."::::".$event_time."::::::".$event_date.":::::".$flag;
		if($event != null) {

			$event_obj= EventB::create_event_obj($event);


			if(Auth::user()) {

				$event_obj->bookmarked = User::check_user_goinng_to_event($event->id,Auth::user()->id)->isEmpty();
			}

			$event_obj->tickets_available = 0;

			$today_dt = new DateTime();

			$today_dt =$today_dt->format('Y-m-d');

			$tickettypes = TicketType::where('event_id',$event_id)->get();

			$types = array();

			foreach($tickettypes as $tickettype) {
				$type = new stdClass;
				$type->type = $tickettype->type;
				$type->title = $tickettype->title;
				$type->details = $tickettype->description;
				$type->currency = $tickettype->currency;

				if($type->type == 0){
					$type->dprice = 'Free';
					$type->fees = '--';
					$type->total_price = 0;
				} else {
					$type->dprice = round($tickettype->price,2);
					$type->fees = round($tickettype->fees_show,2);
					$type->total_price = round($tickettype->total_price,2);
				}
				
				$type->id = $tickettype->id;


				if($tickettype->endtime == '0000-00-00 00:00:00') {
					$type->end_date = $event->start_date;
				} else {
					$type->end_date = $tickettype->endtime;
				}

				if($type->end_date < $today_dt) {
					$type->ended = 'true';
				} else {
					$type->ended = 'false';
				}
				$type->d_end_date = date("F j, Y",strtotime($type->end_date));

				$count = $tickettype->noseats - Ticket::where('event_id',$event_id)->where('tickettype_id',$tickettype->id)->count();

				$type->seats_left = $count;

				Log::info($tickettype->id);
				Log::info($count);

				if($count > 0) {
					$event_obj->tickets_available = 1;
				}

				if($count > 10) {

					$max_count = 10;

				} else {
					$max_count = $count;
				}

				$type->max_quant = array();
				for($i=0; $i<=$max_count;$i++) {
					$type->max_quant[$i] = $i;
				}
				array_push($types,$type);
			}
			//dd($types);
			$vars['tickettypes'] = $types;

			$vars['event'] = $event_obj;

			$vars['flag']=$flag;
			$organizer_details=$event->user_created;
			$vars['organizer_id']=$organizer_details;
			$organizer_info=User::where('id',$organizer_details)->first();
			$organizer_name=$organizer_info->first_name.''.$organizer_info->last_name;
			$organizer_email=$organizer_info->email;
			$vars['organizer_name']=$organizer_name;
			$vars['organizer_email']=$organizer_email;
			

			$event_start_date=$event->start_date;
			$event_end_date=$event->end_date;
			$d_start_date = date("F j, Y",strtotime($event_start_date));
			$d_end_date = date("F j, Y",strtotime($event_end_date));

			$vars['start_date']=$d_start_date;
			$vars['end_date']=$d_end_date;
			 

		}
		//dd($vars['tickettypes'][0]->type);
		

		return View::make('event.eventdetails',$vars);
	  }
	  else
	  {
	  	return Redirect::to('/');
	  }

	}

	public function getOrganizerprofile($user_id) {

		$vars['pageTitle'] = 'Organizer Profile';

		$vars['organizer'] = Profile::where('user_id',$user_id)->first();
		//dd($vars['organizer']);

		$past = array();
		$upcoming = array();


		$events = EventB::where('user_created',$user_id)->get();

		foreach($events as $event) {

			$nobj = new stdClass;

			$nobj->id = $event->id;
			$nobj->title = $event->name;
			$nobj->image_url = $event->image_url;
			$nobj->details = $event->description;

			$nobj->d_start_date = date("F j",strtotime($event->start_date));
			$nobj->startDate = $event->start_date;
			$nobj->startTime = $event->start_time;

			$nobj->d_end_date = date("F j",strtotime($event->end_date));
			$nobj->endDate = $event->end_date;
			$nobj->endTime = $event->end_time;

			$nobj->cat_id = $event->category;

			if($event->category){

				$nobj->category = EventCategory::find($event->category)->name;
			}else{
				$nobj->category = "";
			}

			if($event->event_type){

				$nobj->type = EventType::find($event->event_type)->name;
			}else{
				$nobj->type = "";
			}



			$nobj->location = $event->venue . " , " . $event->city;

			if($nobj->startDate >= date('Y-m-d',time())) {

				array_push($upcoming, $nobj);
			} else {
				array_push($past, $nobj);
			}	

		}

		$vars['live_count'] = sizeof($upcoming);

		$vars['past_count'] = sizeof($past);

		$vars['live_events'] = $upcoming;

		$vars['past_events'] = $past;

		return View::make('user.viewprofile',$vars);
	}


	public function getEventdirectory() {

		$vars['pageTitle'] = 'Event directory';

		$vars['cats'] = EventCategory::all();

		$vars['types'] = EventType::all();

		$lat = Input::get('lat');
		$lng = Input::get('lng');	

		$vars['city'] = Input::get('city');
		$vars['clat'] = $lat;
		$vars['clng'] = $lng;


		$latlng = array();

		$min_lat=EventsController::getLat($lat,180);
	    $max_lat=EventsController::getLat($lat,0);
	    $min_lng=EventsController::getLong($lng,$lat,270);
	    $max_lng=EventsController::getLong($lng,$lat,90);

		$events = EventB::where('lat','<=',$max_lat)->where('lat','>=',$min_lat)->where('lng','>=',$min_lng)->where('lat','<=',$max_lat)->where('end_date', '>=', date('Y-m-d H:i:s',time()-(24*60*60)))->where('status',0);

		if(Input::has('name')) {
			$events = $events->where('name', 'LIKE', "%".Input::get('name').'%');
		}

		if(Input::has('category')) {

			$vars['category'] = Input::get('category');
			$events = $events->where('category',Input::get('category'));
		} else {
			$vars['category'] ="all";
		}
		if(Input::has('event_type')) {

			$vars['event_type'] = Input::get('event_type');
			$events = $events->where('event_type',Input::get('event_type'));
		}else {
			$vars['event_type'] ="all";
		}
		if(Input::has('date')) {

			$vars['date'] = Input::get('date');
			if(Input::get('date') == 'today') {
				$today_dt = new DateTime();

				$today_dt =$today_dt->format('Y-m-d');

				$events = $events->where('start_date',$today_dt);

			} else if(Input::get('date') == 'tomorrow') {
				$tmrw_dt = new DateTime('tomorrow');

				$tmrw_dt =$tmrw_dt->format('Y-m-d');

				$events = $events->where('start_date',$tmrw_dt);
			} else if(Input::get('date') == 'week') {

				$dayoftheweek = date("w",time());
				$daysleftinweek = 6 - $dayoftheweek;

				$date_till = date('Y-m-d',  time()+(24*60*60*$daysleftinweek));

				$events = $events->where('start_date',"<=",$date_till);

			} else if(Input::get('date') == 'month') {

				$dayofthemonth = date("d",time());

				$noofDays = date('t',time());

				$daysleftinmonth = $noofDays - $dayofthemonth;

				$date_till = date('Y-m-d', time()+(24*60*60*$daysleftinmonth));

				$events = $events->where('start_date',"<=",$date_till);
			} else if(Input::get('date') == 'later') {

				$dayofthemonth = date("d",time());

				$noofDays = date('t',time());

				$daysleftinmonth = $noofDays - $dayofthemonth;

				$date_till = date('Y-m-d', time()+(24*60*60*$daysleftinmonth));

				$events = $events->where('start_date',">",$date_till);
			}
		} else {
			$vars['date'] ="all";
		}

		if(Input::has('price')) {
			$vars['price'] = Input::get('price');
		} else {
			$vars['price'] = 'all';
 		}

		$events = $events->get();

		$c = new \Illuminate\Database\Eloquent\Collection;

		foreach($events as $event) {

			if(Input::has('price')) {

				if(Input::get('price') == 'free') {

					$tickettypes = TicketType::where('event_id',$event->id)->get();

					$freeticket = false;
					if(!empty($tickettypes)) {

						foreach($tickettypes as $type) {
							if($type->type == 0) {
								$freeticket = true;
							}
						}
					}
					if($freeticket == false) {
						continue;
					}

				} else if(Input::get('price') == 'paid') {
					$tickettypes = TicketType::where('event_id',$event->id)->get();

					$paidticket = false;
					if(!empty($tickettypes)) {

						foreach($tickettypes as $type) {
							if($type->type == 1) {
								$paidticket = true;
							}
						}
					}
					if($paidticket == false) {
						continue;
					}

				}
			}

				$event->d_start_date = date("F j",strtotime($event->start_date));
				$event->d_end_date = date("F j",strtotime($event->end_date));
				$event->type = EventType::find($event->event_type);

				$user_id = $event->user_created;

				$profile = Profile::where('user_id',$user_id)->first();
				$user = User::find($user_id);

				if($profile != null) {

					$event->organizer = array('id' => $user_id, 'profile' => "1", 'name' => $profile->name, 'email' =>$user->email, 'no' => $profile->no,'details' => $profile->description,'image_url' => $profile->image_url, 'address' => $profile->city);
				
				} else {
					$event->organizer = array('id' => $user_id, 'profile' => "0", 'email' =>$user->email );
				}

				$c->add($event);

				if($event->lat && $event->lng) {

					$obj =new stdClass;
					$obj->lat = $event->lat;
					$obj->lng = $event->lng;
					$obj->title = $event->name;


					array_push($latlng,$obj);
				}
			}	
			$events = $c->all();
		


			$perPage = 10;
			if( Input::get('page')) {
			$currentPage = Input::get('page') - 1;

		} else {
			$currentPage = 0;
		}
			$pagedData = array_slice($events, $currentPage * $perPage, $perPage);
			$vars['events'] = Paginator::make($pagedData, count($events), $perPage);	
		
			$vars['latlng'] = $latlng;	

			$vars['events_count'] = count($events);
		return View::make('event.eventDirectory',$vars);
	}

	public function postContactorg() {


		$event = EventB::find(Input::get('contact_event'));

		$name = Input::get('contact_name');

		$email = Input::get('contact_email');

		if(Input::has('contact_message')) {
		
			$msg = Input::get('contact_message');
		} else {
			$msg = "";
		}

		$user = User::find($event->user_created);

		$profile = Profile::where('user_id',$event->user_created)->first();
		if(!empty($profile)) {
			$event->username = $profile->name;
		} else {
			
			$event->username = $user->first_name . ' ' . $user->last_name;
		}
		$event->email = $user->email;
		

		Event::fire('event.contact_organizer', array($event,$name,$email,$msg));

		return Redirect::back()->with('contact_organizer','true');
	}
	
}


