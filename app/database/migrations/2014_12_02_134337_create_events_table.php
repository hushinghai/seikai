<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEventsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('events', function($t) {
              // auto increment id (primary key)
              $t->increments('id');

              $t->string('name');
              $t->string('image_url');
              $t->string('city');

              $t->text('description');
			  $t->integer('category');
			  $t->integer('event_type');
			  $t->integer('user_created');
			  $t->string('venue');
			  $t->date('start_date');
			  $t->date('end_date');

			  $t->string('start_time');
			  $t->string('end_time');


			  $t->float('lat');
			  $t->float('lng');

			  $t->float('payment_fees');
			  $t->float('booking_fees_base');

			   $t->float('booking_fees');
			  $t->integer('status');

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
