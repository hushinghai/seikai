<?php

class EventB_old extends Eloquent {

	 protected $table = 'events';

	protected $fillable = array('name', 'description','city','image_url','category','event_type','user_created','lat','lng','venue','start_date','start_time','end_date','end_time','payment_fees','booking_fees_base','booking_fees');


	public function scopeUsersGoingToEvent($query) {


		$c = User::usersGoingToEvents($query->get());

		return $c;

	}

	public static function create_event_obj($event){
		$nobj = new stdClass;
//		dd($event);
//		dd(gettype($event_obj));
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

		$nobj->location = array("lat"=> (float) $event->lat, "lng" => (float) $event->lng, "address" => $event->venue, "city" => $event->city);

		$nobj->type = EventType::find($event->event_type)->name;
		$nobj->type_id = $event->event_type;
		$nobj->cat_id = $event->category;
		$nobj->status = $event->status;

		$today_dt = new DateTime();

		$today_dt =$today_dt->format('Y-m-d');

		if($event->end_date < $today_dt) {
			$nobj->pastevent = 'true';
		} else {
			$nobj->pastevent = 'false';

		}


		if($event->category){

			$nobj->category = EventCategory::find($event->category)->name;
		}else{
			$nobj->category = "Uncategorized";
		}


		$user_id = $event->user_created;

		$user = User::find($user_id);

		$profile = Profile::where('user_id',$user_id)->first();
		

		if($profile != null) {

			$organizer = array('id' => "$user_id", 'profile' => "1", 'name' => $profile->name, 'email' =>$user->email, 'no' => $profile->no,'details' => $profile->description,'image_url' => $profile->image_url, 'address' => $profile->city, 'website' => $profile->website, 'fb_link'=>$profile->facebook_link);
			if($profile->image_url) {
				$organizer['image_url'] = $profile->image_url;
			} else {
				$organizer['image_url'] = "default_profile.png";
			}

		} else {
			$organizer = array('id' => "$user_id", 'profile' => "0", 'email' =>$user->email );
		}

		if($user->role == 0) {

			$organizer['disabled'] = 'false';

		} else {
			$organizer['disabled'] = 'true';
		}

		$nobj->organizer = $organizer;

		return $nobj;
	}

	public static function create_event_list_obj($events) {
//		dd($events);
		$result = array();

			$today = array();
			$thisweek = array();
			$nextweek = array();
			$thismonth = array();
			$later = array();
			 $events = unserialize($events);
			foreach($events as $event) {
//				dd($eventy);				
				$nobj = self::create_event_obj($event);

				if($event->user_visiting == true) {
					$nobj->user_visiting = "1";
					$nobj->no_tickets =$event->no_tickets;
				} else {
					$nobj->user_visiting = "0";
				}

				if($event->user_bookmarked == true) {
					$nobj->user_bookmarked = "1";
				} else {
					$nobj->user_bookmarked = "0";
				}

				$nobj->ticket = TicketType::cheapest_ticket_for_event($event->id);

				$today_dt = new DateTime(Date("Y-m-d"));
				$expire_dt = new DateTime($nobj->startDate);


				if($today_dt == $expire_dt) {

					array_push($today, $nobj);
				} else {

					$dayoftheweek = date("w",time());

					$daysleftinweek = 6 - $dayoftheweek;

					if($nobj->startDate  <= date('Y-m-d',  time()+(24*60*60*$daysleftinweek))) {
						array_push($thisweek,$nobj);
					} else {

						$dayofthemonth = date("d",time());

						$noofDays = date('t',time());

						$daysleftinmonth = $noofDays - $dayoftheweek;

						if($nobj->startDate <= date('Y-m-d', time()+(24*60*60*$daysleftinmonth))) {
							array_push($thismonth,$nobj);
						} else {

							array_push($later, $nobj);
						}	
					}
 				}
			}

			$result['today'] = $today;
			
			$result['this_week'] = $thisweek;
			
			$result['next_week'] = $nextweek;

			$result['this_month'] = $thismonth;

			$result['later'] = $later;

			$result['blah'] = "blah";


			return $result;
	}

}
