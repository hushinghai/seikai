<?php

class Ticket extends Eloquent {

	protected $fillable = array('event_id', 'tickettype_id','seatno','transaction_id','user_id');

	public static function free_tickets_count() {

		$free_type_ids = TicketType::where('type','0')->get(array('id'))->toArray();

		if($free_type_ids) {
	
			$count = Ticket::whereIn('tickettype_id', $free_type_ids)->count();

		} else {
			$count = 0;
		}


		return $count;
	}

	public static function paid_tickets_count() {

		$paid_type_ids = TicketType::where('type','1')->get(array('id'))->toArray();

		if($paid_type_ids) {
	
			$count = Ticket::whereIn('tickettype_id', $paid_type_ids)->count();

		} else {

			$count = 0;
		}


		return $count;
	}

	public function transaction()
	{
		return $this->belongsTo('Transaction','transaction_id');
	}

	public function ticketType()
	{
		return $this->belongsTo('TicketType','tickettype_id');
	}
}