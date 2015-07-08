<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProfilesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('profiles', function($t) {
              // auto increment id (primary key)
              $t->increments('id');

              $t->string('image_url');
              $t->string('name');
              $t->string('website');
              $t->string('facebook_link');
              $t->string('no'); 

              $t->text('city');
              $t->float('lat');
              $t->float('lng');
			  $t->text('description');
			  $t->integer('use_description');
			  $t->integer('user_id');

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
