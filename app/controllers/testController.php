<?php

class TestController extends BaseController {

	/*
	|--------------------------------------------------------------------------
	| Default Home Controller
	|--------------------------------------------------------------------------
	|
	| You may wish to use controllers instead of, or in addition to, Closure
	| based routes. That's great! Here is an example controller method to
	| get you started. To route to this controller, just add the route:
	|
	|	Route::get('/', 'HomeController@showWelcome');
	|
	*/


	public function getCreateevent() {

		$vars['eventcat'] = EventCategory::lists('name', 'id');


		$vars['eventtypes'] = EventType::lists('name', 'id');

		return View::make('createevent',$vars);
	}

	public function getCreateprofile() {
		return View::make('createprofile');
	}

	public function getEventtypecat() {
		
		return View::make('createtypecat');
	}

	public function postCreateeventtype() {
		$input = Input::all();

		$vars['name'] = $input['name'];
		$vars['description'] = $input['description'];

		$image = Input::file('file');

		if($image != null) {

			// This is the original uploaded client name of the image
	        $filename = $image->getClientOriginalName();
	        // Because Symfony API does not provide filename
	        // without extension, we will be using raw PHP here



	        $filename = pathinfo($filename, PATHINFO_FILENAME);


	        // We should salt and make an url-friendly version of the file
	        $fullname = Str::slug(Str::random(8) . $filename) . '.' .
	            $image->getClientOriginalExtension();

	        // We upload the image first to the upload folder, then
	        // get make a thumbnail from the uploaded image
	        $upload = $image->move
	            ('uploads/type_images', $fullname);

	        $vars['image_url'] =  $fullname; 

	        echo "image is there";  
		} else {
			die(print_r($image));
			$vars['image_url'] = "";
		}
        

		 EventType::create($vars);

		 echo "type created";

	}

	public function postCreateeventcategory() {
		$input = Input::all();

		$vars['name'] = $input['name'];
		$vars['description'] = $input['description'];

		$image = Input::file('file');

		if($image != null) {
			// This is the original uploaded client name of the image
	        $filename = $image->getClientOriginalName();
	        // Because Symfony API does not provide filename
	        // without extension, we will be using raw PHP here



	        $filename = pathinfo($filename, PATHINFO_FILENAME);


	        // We should salt and make an url-friendly version of the file
	        $fullname = Str::slug(Str::random(8) . $filename) . '.' .
	            $image->getClientOriginalExtension();

	        // We upload the image first to the upload folder, then
	        // get make a thumbnail from the uploaded image
	        $upload = $image->move
	            ('uploads/category_images', $fullname);

	        $vars['image_url'] =  $fullname;   
		} else {
			$vars['image_url'] = "";
		}
        

		EventCategory::create($vars);

		echo "category created";
	}

	public function postCreateprofile() {
		 $input = Input::all();


		$image = Input::file('file');

        // This is the original uploaded client name of the image
        $filename = $image->getClientOriginalName();
        // Because Symfony API does not provide filename
        // without extension, we will be using raw PHP here



        $filename = pathinfo($filename, PATHINFO_FILENAME);


        // We should salt and make an url-friendly version of the file
        $fullname = Str::slug(Str::random(8) . $filename) . '.' .
            $image->getClientOriginalExtension();

        // We upload the image first to the upload folder, then
        // get make a thumbnail from the uploaded image
        $upload = $image->move
            ('uploads/profile_images', $fullname);


        $vars['name'] = $input['name'];

        $vars['description'] = $input['description'];

        $vars['address'] = $input['address'];

        $vars['image_url'] = $fullname;

         $vars['no'] = $input['no'];


        $vars['user_id'] = Auth::user()->id;


        $profile = Profile::create($vars);

        echo "profile created";
	}

	public function postCreateevent() {
		 $input = Input::all();


		 $image = Input::file('file');

        // This is the original uploaded client name of the image
        $filename = $image->getClientOriginalName();
        // Because Symfony API does not provide filename
        // without extension, we will be using raw PHP here



        $filename = pathinfo($filename, PATHINFO_FILENAME);


        // We should salt and make an url-friendly version of the file
        $fullname = Str::slug(Str::random(8) . $filename) . '.' .
            $image->getClientOriginalExtension();

        // We upload the image first to the upload folder, then
        // get make a thumbnail from the uploaded image
        $upload = $image->move
            ('uploads/event_logos', $fullname);


        $vars['name'] = $input['name'];

        $vars['description'] = $input['description'];

        $vars['city'] = $input['location'];

        $vars['image_url'] = $fullname;

         $vars['category'] = $input['eventcat'];

        $vars['event_type'] = $input['eventtype'];

        $vars['user_created'] = Auth::user()->id;

        $vars['payment_fees'] = s('payment_fees');

        $vars['booking_fees_base'] = s('booking_fees_base');

        $vars['booking_fees'] = s('booking_fees');

       

        $event = EventB::create($vars);

        $t_vars['noseats'] = $input['seats'];

        $t_vars['type'] = $input['type'];

        $t_vars['event_id'] = $event->id;

        $t_vars['price'] = $input['price'];

        $t_vars['title'] = $input['ticket_title'];

        if($input['type'] == 0 || $t_vars['amount'] == 0) {

        	$t_vars['fees_show'] = 0;
        	$t_vars['fees_actual'] = 0;
        	$t_vars['total_price'] = 0;
 
        } else {

        	$price = $input['price'];

        	$p_fees = $price * s('payment_fees');
        	$b_fees = ($price * s('booking_fees') ) + s('booking_fees_base');
        	$fees = $p_fees + $b_fees;

        	$t_vars['fees_type'] = $input['fees_type'];
        	$t_vars['fees_actual'] = $fees;

        	$t_vars['total_price'] = $input['price'] + $fees;

        	if($input['fees_type'] == 0) {

        		$t_vars['fees_show'] = $fees;

        	} else if($input['fees_type'] == 1) {

        		$t_vars['fees_show'] = 0;

        	} else {

        		$t_vars['fees_show'] = $b_fees;
        	}

        }
           

        $ticket_type = TicketType::create($t_vars);

        echo "event created";
	}
}
