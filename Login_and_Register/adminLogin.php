<?php

session_start();

include 'mysql_connect.php';

$Admin_ID = $_POST["admin_ID"];
$Admin_Password = $_POST["password"];

 

$stmt = $mysqli->prepare("SELECT * FROM myAdmins WHERE id=? AND password=?");
$stmt->bind_param($Admin_ID, $Admin_Password);
$stmt->execute();

$result = mysqli_query($conn,$sql);

if (!$row = mysqli_fetch_assoc($result)) {
    echo "Your username or password is incorrect!";
}  else {
    echo "You are now logged in!";
    }
        

    

//header("location: registerForm.html");
    
?>