<?php

class EventCategory extends Eloquent {

	 protected $table = 'event_categories';

	 protected $fillable = array('name', 'description', 'image_url');
}