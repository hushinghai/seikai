<?php

View::composer(Paginator::getViewName(), function($view) {
	$queryString = array_except(Input::query(), Paginator::getPageName());
	$view->paginator->appends($queryString);
});

View::composer('*', function($view)
{
	if(isInstalled()){

    $view->with('categories', EventCategory::all());

	}
});