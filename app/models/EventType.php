<?php

class EventType extends Eloquent {

	 protected $table = 'event_types';

	 protected $fillable = array('name', 'description', 'image_url');
}