<?php

include 'mysql_connect.php';

$AdminUsername = $_POST["username"];
$AdminPassword = $_POST["password"];

    
$sql = "SELECT * FROM myAdmins WHERE username=$AdminUsername AND password=$AdminPassword";
    
$result = mysqli_query($conn,$sql);

if (!$row = mysqli_fetch_assoc($result)) {
    echo "Your username or password is incorrect!";
}  else {
    echo "You are now logged in!";
    }
        
    

//header("location: registerForm.html");
    
?>