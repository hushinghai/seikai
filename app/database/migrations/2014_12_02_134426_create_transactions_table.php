<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTransactionsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('transactions', function($t) {
              // auto increment id (primary key)
              $t->increments('id');

              $t->string('transaction_id');
              $t->string('booking_id');
              $t->text('address');

			  $t->string('first_name');
			  $t->string('last_name');
			  $t->string('email');
			  $t->string('contact_no');

			  $t->integer('user_id');
			  $t->integer('amount');
			  $t->string('type');
			  $t->string('currency');
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
