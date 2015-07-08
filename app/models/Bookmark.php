<?php

class Bookmark extends Eloquent {

	 protected $table = 'bookmarks';

	 protected $fillable = array('event_id', 'user_id');
}