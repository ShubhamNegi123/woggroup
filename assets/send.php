<?php
$to = "shubhumnegi734@gmail.com";
$name = $_REQUEST['name'] ;
$phone = $_REQUEST['phone'] ;
$email = $_REQUEST['email'] ;
$quan = $_REQUEST['quan'];
$subject = "Message from: $name";
$headers = "shubhmnegi734@gmail.com";
$body = "From: $name \n\n Email: $email \n\n Phone: $phone \n\n message : $quan ";
$sent = mail($to, $subject, $body, $headers) ;
if($sent)
{echo "<script language=javascript>window.location = 'index.html';</script>";}
else
{echo "<script language=javascript>window.location = 'index.html';</script>";}

 $retval = mail ($to,$subject,$message,$header);
 if( $retval == true ) {
            echo "Message sent successfully...";
    }else {
        echo "Message could not be sent...";
         }

?>