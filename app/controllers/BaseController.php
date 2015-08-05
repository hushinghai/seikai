<?php

class BaseController extends Controller {

	/**
	 * Setup the layout used by the controller.
	 *
	 * @return void
	 */
	protected function setupLayout()
	{
		if ( ! is_null($this->layout))
		{
			$this->layout = View::make($this->layout);
		}
	}

   public function timeconv($time)
   {
   		$mv=substr($time,-2);
   		$pos=strpos($time,':');
   		$mv_pos=strpos($time,$mv);
   		
   		$hour=substr($time,0,$pos);
    	$min=substr($time,$pos+1,($mv_pos-($pos+1)));
    	if($mv == 'pm')
    	 {
      		$hour=$hour+12;
      		if($hour==24)
      		 {
      			$hour=0;
      		 }
    	 }
    	$ret_time=$hour.":".$min.":00";
    	$con_time = date('H:i:s', strtotime($ret_time));
    	return $con_time;
   }
}
