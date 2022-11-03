<?php
  if(isset( $_POST['lname']))
  $name = $_POST['fname'];
  if(isset( $_POST['email']))
  $email = $_POST['email'];
  if(isset( $_POST['message']))
  $message = $_POST['message'];
  if(isset( $_POST['subject']))
  $subject = $_POST['subject'];

  $content="From: $name \n Email: $email \n Message: $message";
  $recipient = "amreshmishra67099@gmail.com";
  $mailheader = "From: $email \r\n";
  mail($recipient, $subject, $content, $mailheader) or die("Error!");
  echo "Successfull Email sent!";
?>