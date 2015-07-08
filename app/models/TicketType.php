<?php

class TicketType extends Eloquent {

	 protected $table = 'ticket_types';

	 protected $fillable = array('event_id','price','title','noseats','type','fees_show','fees_actual','fees_type','total_price','booking_fees','payment_fees');

	 public static function cheapest_ticket_for_event($event_id) {

		$tickettypes = TicketType::where('event_id',$event_id)->get();
		
		$ticket = new stdClass;
		
		$tickettypes = $tickettypes->toArray();
		
		if(!empty($tickettypes)) {
			
			$ticket->min = $tickettypes[0]["price"];
			$ticket->type = $tickettypes[0]["type"];
			$ticket->currency = $tickettypes[0]["currency"];
			
			foreach($tickettypes as $type) {
				if($type["price"] < $ticket->min) {
					$ticket->min = $type["price"];
					$ticket->type = $type["type"];
					$ticket->currency = $type["currency"];
				}
			}
			
			
		}
		else{
			die("its $event_id");
		}

		return $ticket;
	}

	public function tickets()
	{
		return $this->hasMany('Ticket','tickettype_id');
	}
}