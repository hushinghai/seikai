<?php

use Illuminate\Auth\UserTrait;
use Illuminate\Auth\UserInterface;
use Illuminate\Auth\Reminders\RemindableTrait;
use Illuminate\Auth\Reminders\RemindableInterface;

class User extends Eloquent implements UserInterface, RemindableInterface {

	use UserTrait, RemindableTrait;


	protected $fillable = array('email', 'password');

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'users';

	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
	protected $hidden = array('password', 'remember_token');

	public static function get_user_events($id) {

		$event_ids = Ticket::where('user_id',$id)->lists('event_id');
		return $event_ids;
	} 

	public static function check_user_goinng_to_event($event_id,$user_id) {

		$bookmark = Bookmark::where('user_id',$user_id)->where('event_id',$event_id)->get();
		return $bookmark;
	}

	public static function get_book_marked_events($id) {

		$event_ids = Bookmark::where('user_id',$id)->lists('event_id');

		return $event_ids;
	}

	public static function check_users_going_to_event($events,$user_id) {

		$user_event_ids = self::get_user_events($user_id);

		$book_marked_event_ids = self::get_book_marked_events($user_id);

		foreach($user_event_ids as $user_event_id) {
			foreach($events as $event) {


				if($user_event_id == $event->id){

					$event->user_visiting = true;
					$event->no_tickets = Ticket::where('user_id',$user_id)->where('event_id',$event->id)->count();
					break;
				}
			}
		}

		foreach($book_marked_event_ids as $user_event_id) {
			foreach($events as $event) {


				if($user_event_id == $event->id){

					$event->user_bookmarked = true;
					break;
				}
			}
		}

		return $events;
	}

	public static function user_saved_events($events) {

		$user_event_ids = self::get_user_events(Auth::user()->id);

		$book_marked_event_ids = self::get_book_marked_events(Auth::user()->id);

		$saved_events = array();

		foreach($user_event_ids as $user_event_id) {
			foreach($events as $event) {


				if($user_event_id == $event->id){

					$event->user_visiting = true;
					$event->no_tickets = Ticket::where('user_id',Auth::user()->id)->where('event_id',$event->id)->count();
					break;
				}
			}
		}

		foreach($book_marked_event_ids as $user_event_id) {
			foreach($events as $event) {


				if($user_event_id == $event->id){

					$event->user_bookmarked = true;
					array_push($saved_events, $event);
					break;
				}
			}
		}

		 $vars['events'] = $events->sortBy('saved_count')->reverse()->take(9);
		 $vars['saved_events'] = array_slice($saved_events,0,3);
		 return $vars;

	}

	public static function usersGoingToEvents($events) {

		$user_event_ids = self::get_user_events(Auth::user()->id);

		$book_marked_event_ids = self::get_book_marked_events(Auth::user()->id);


		foreach($user_event_ids as $user_event_id) {
			foreach($events as $event) {


				if($user_event_id == $event->id){

					$event->user_visiting = true;
					$event->no_tickets = Ticket::where('user_id',Auth::user()->id)->where('event_id',$event->id)->count();
					break;
				}
			}
		}

		foreach($book_marked_event_ids as $user_event_id) {
			foreach($events as $event) {


				if($user_event_id == $event->id){

					$event->user_bookmarked = true;
					break;
				}
			}
		}
		
		$c = new \Illuminate\Database\Eloquent\Collection;


		foreach($events as $event) {

			$event->d_start_date = date("F j",strtotime($event->start_date));
				$event->d_end_date = date("F j",strtotime($event->end_date));
				$event->type = EventType::find($event->event_type)->name;

				$user_id = $event->user_created;

				$profile = Profile::where('user_id',$user_id)->first();
				$user = User::find($user_id);

				if($profile != null) {

					$event->organizer = array('id' => $user_id, 'profile' => "1", 'name' => $profile->name, 'email' =>$user->email, 'no' => $profile->no,'details' => $profile->description,'image_url' => $profile->image_url, 'address' => $profile->city);
				
				} else {
					$event->organizer = array('id' => $user_id, 'profile' => "0", 'email' =>$user->email );
				}

			$c->add($event);
		}

		return $c;
	}



	public function generate_verification_url(){
	 
	 	$this->verification_no = uniqid();
		$this->save();
		
		return URL::to("/verifyuser?vno=".$this->verification_no);
	 
	 }
	 
	 public function generate_reset_password_url(){
	 
	 	$this->verification_no = uniqid();
		$this->save();
		
		return URL::to("/resetpassword?vno=".$this->verification_no);	 
	 
	 }

}
