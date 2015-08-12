<?php


class Email {



public static function config_set(){


    if(s('email_host') && s('email_port') && s('email_username') && s('email_password') && s('email_encryption'))
    {
        return TRUE;
    }
    else{
        
        return FALSE;
    }




}



public static function replace_text($content, $kv = array())
{

    foreach($kv as $k => $v)
    {
    
        $content = str_replace($k,$v,$content);
    
    }
    
    
    return $content;


}


public static function make($content, $kv = array())
{

    $content = self::replace_text($content, $kv);
    
    
    return "<html><body>".$content."</body></html>";



}

public static function send($emailid,$subject,$content)
{

    $vars['body'] = $content;
    if(is_array($emailid))
    {

        foreach($emailid as $email)
         {
    $validator= Validator::make(
        array(
            'emailid' => $email),
        array(
            'emailid' => 'required|email')
        );

    if($validator->fails())
    {
        Log::info("Invalid emailid");
    }
    else
    {

    Mail::send('user.email', $vars, function($message) use ($email,$subject)
    {
      $message->to($email, s('title'))->subject( $subject);
    });
  }
}

}
else
{
    Mail::send('user.email', $vars, function($message) use ($emailid,$subject)
    {
      $message->to($emailid, s('title'))->subject( $subject);
    });
}
}


}
