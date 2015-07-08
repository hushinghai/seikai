<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePayoutsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('payouts', function($t) {
              // auto increment id (primary key)
              $t->increments('id');

			  $t->integer('organiser_id');
			  $t->integer('admin_id');
			  $t->integer('amount');
			  $t->string('currency');

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
