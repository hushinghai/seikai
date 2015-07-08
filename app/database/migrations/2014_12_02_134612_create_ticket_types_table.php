<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTicketTypesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('ticket_types', function($t) {
              // auto increment id (primary key)
              $t->increments('id');

              $t->integer('event_id');
              $t->integer('type');
              $t->integer('price');

              $t->float('fees_show');
              $t->float('fees_actual');
              $t->float('booking_fees');
              $t->float('payment_fees');
              $t->integer('fees_type');
              $t->float('total_price');

              $t->char('currency', 4);
              $t->string('title');
			  $t->text('description');
			  $t->integer('noseats');
			  $t->datetime('start_time');
			  $t->datetime('endtime');

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
