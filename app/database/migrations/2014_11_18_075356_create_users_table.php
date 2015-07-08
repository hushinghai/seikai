<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('users', function($t) {
              // auto increment id (primary key)
              $t->increments('id');

              $t->string('email');
              $t->enum('gender', array('male', 'female'));
              $t->date('dob');
              $t->string('password');
              $t->string('first_name',255);
              $t->string('last_name',255);
              $t->string('city',255);
              $t->text('address');
              $t->string('phone',20);
              $t->integer('role');
              $t->integer('verified');
              $t->string('verification_no');
              $t->integer('facebook_id');
              $t->rememberToken();

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
