<?php


class TicketController extends BaseController {


	

	public function getPayment(){

		
		
		$input = Input::all();
		$buying = unserialize(Session::get('buying'));
		if($input['st']) {

			try {
				
				
				
				//die(print_r($buying['tickets']));
				//$tickets = json_decode($buying['tickets'], true);
				$tickets = $buying['tickets'];

				//die(print_r($input['tickets']));

				$vars['transaction_id'] = $input['tx'];

				$vars['amount'] = $input['amt'];
				$vars['status'] = 1;

				$vars['first_name'] = $buying['first_name'];
				$vars['last_name'] = $buying['last_name'];
				$vars['email'] = $buying['email'];
				$vars['contact_no'] = $buying['contact_no'];
				

				$vars['currency'] = $input['cc'];
				$vars['type'] = "PayPal";
				if(Auth::user()){ 
				$vars['user_id'] = Auth::user()->id;
				}
				else{
					$vars['user_id'] = "";
				}

				do{

					$booking_id = Str::random(10);
				} while (Transaction::where('booking_id',$booking_id)->first());

				$vars['booking_id'] = $booking_id;

				$transaction = Transaction::create($vars);

				$no_tickets = 0;
				
				foreach($tickets as $key => $quantity) {

					$no_tickets = $no_tickets + $quantity;

					for($count = 0 ; $count < $quantity ; $count++) {

						$t_vars = array();

						$t_vars['transaction_id'] = $transaction->id;
						$t_vars['event_id'] = $buying['event_id'];

						if(Auth::user()){ 
							$t_vars['user_id'] = Auth::user()->id;
						}
						else{
							$t_vars['user_id'] = "";
						}
						
						$t_vars['tickettype_id'] = $key;

						Ticket::create($t_vars);
					}
				}

				$email = $buying['email'];
				$username = $buying['first_name'] . ' ' .  $buying['last_name'];
				$event = EventB::find($buying['event_id']);
				$user = User::find($event->user_created);

				$profile = Profile::where('user_id',$event->user_created)->first();
				if(!empty($profile)) {
					$event->username = $profile->name;
				} else {
					
					$event->username = $user->first_name . ' ' . $user->last_name;
				}
				$event->email = $user->email;

				Event::fire('user.ticket_buy', array($username,$email,$event,$no_tickets,$transaction));
			} 



			catch (Exception $e) {
			die(print_r($e));

		}



		if(Auth::user()){
			return Redirect::to('user/mytickets');
		}
		else{
				
			Session::flash('ticket_registered', 'true');
			return Redirect::to('events/eventdetails/'.$buying['event_id']);
		}
			

	
	}

	

}



	public function postBuytickets(){
		
		
		$arr = Input::all();
		
		
		Session::put('buying', serialize($arr));
		
		
		return Response::json($arr);
		
		
		
	}
	
	
	public function postBuyfreetickets(){
		
			$input = Input::all();
		
		
				$vars['transaction_id'] = "";
				
				$vars['amount'] = 0;
				$vars['status'] = 1;

				$vars['first_name'] = $input['first_name'];
				$vars['last_name'] = $input['last_name'];
				$vars['email'] = $input['email'];
				$vars['contact_no'] = $input['contact_no'];
				

				$vars['currency'] = "USD";
				$vars['type'] = "Free";
				if(Auth::user()){ 
				$vars['user_id'] = Auth::user()->id;
				}
				else{
					$vars['user_id'] = "";
				}
				do{

					$booking_id = Str::random(10);
				} while (Transaction::where('booking_id',$booking_id)->first());

				$vars['booking_id'] = $booking_id;

				

				$transaction = Transaction::create($vars);
				
				$tickets = $input['tickets'];

				$no_tickets = 0;
						
				foreach($tickets as $key => $quantity) {

					$no_tickets = $no_tickets + $quantity;

					for($count = 0 ; $count < $quantity ; $count++) {

						$t_vars = array();

						$t_vars['transaction_id'] = $transaction->id;
						$t_vars['event_id'] = $input['event_id'];

						if(Auth::user()){ 
							$t_vars['user_id'] = Auth::user()->id;
						}
						else{
							$t_vars['user_id'] = "";
						}
								
						$t_vars['tickettype_id'] = $key;

						Ticket::create($t_vars);
					}
				} 

				$email = $input['email'];
				$username = $input['first_name'] . ' ' .  $input['last_name'];
				$event = EventB::find($input['event_id']);
				$user = User::find($event->user_created);

				$profile = Profile::where('user_id',$event->user_created)->first();
				if(!empty($profile)) {
					$event->username = $profile->name;
				} else {
					
					$event->username = $user->first_name . ' ' . $user->last_name;
				}
				$event->email = $user->email;

				Event::fire('user.ticket_buy', array($username,$email,$event,$no_tickets,$transaction));
				
				
				return Response::json($transaction);
		
	}
	
	
	public function getTickettest(){
		
		
		//$arr = Input::all();
		
		
		//Session::put('buying', serialize($arr));
		
		
		return Response::json(Session::get('buying'));
		
		
		
	}






}
