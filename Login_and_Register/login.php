<?php

session_start();

include 'mysql_connect.php';

$email = $_POST["email-address"];
$password = $_POST["password"];

    
$sql = "SELECT * FROM myusers WHERE email='$email' AND password='$password'";
    
$result = mysqli_query($conn,$sql);

if (!$row = mysqli_fetch_assoc($result)) {
    echo "Your username or password is incorrect!";
}  else {
    echo "You are now logged in!";
    }
        

    

//header("location: registerForm.html");
    
?>