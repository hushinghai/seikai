<?php

class Transaction extends Eloquent {

	protected $fillable = array('transaction_id', 'amount','status','first_name','last_name','email', 'contact_no','currency','type','user_id','booking_id');

	public function tickets()
	{
		return $this->hasMany('Ticket','transaction_id');
	}

}