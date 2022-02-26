<?php
$to = "marketing@woggroup.com";
$name = $_REQUEST['name'] ;
$phone = $_REQUEST['phone'] ;
$email = $_REQUEST['email'] ;
$subject = "Message from: $name";
$headers = "marketing@woggroup.com";
$body = "From: $name \n\n Email: $email \n\n Phone: $phone \n\n ";
$sent = mail($to, $subject, $body, $headers) ;
if($sent)
{echo "<script language=javascript>window.location = 'https://www.woggroup.com/';</script>";}
else
{echo "<script language=javascript>window.location = 'https://www.woggroup.com/';</script>";}

 $retval = mail ($to,$subject,$message,$header);
 if( $retval == true ) {
            echo "Message sent successfully...";
    }else {
        echo "Message could not be sent...";
         }

?>