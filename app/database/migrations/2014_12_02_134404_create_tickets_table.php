<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTicketsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('tickets', function($t) {
              // auto increment id (primary key)
              $t->increments('id');

			  $t->integer('event_id');
			  $t->integer('user_id');
			  $t->integer('tickettype_id');
			  $t->integer('transaction_id');
			  $t->string('seat_no');

              // created_at, updated_at DATETIME
              $t->timestamps();
          });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		//
	}

}
