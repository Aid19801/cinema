<?php

function connect(){
    include 'mysql_connect.php';

    $firstname = $_POST['firstname'];
    $lastname = $_POST["lastname"];
    $email = $_POST["email-address"];
    $password = $_POST["password"];

    echo $firstname."<br>";

    $sql = "INSERT INTO myusers (firstname,lastname,email,password)
    VALUES ('$firstname', '$lastname', '$email', '$password')";

    if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
    } else {
    echo "Error: " . $sql . " <br>" . $conn->error;
    }
    
    
    session_start();
    $_SESSION["firstname"] = $firstname;
    $_SESSION["lastnamename"] = $lastname;
    $_SESSION["email-address"] = $email;
    $_SESSION["password"] = $password;

    
}



connect();
$user = new user();
$user -> getFirstname ($_POST["firstname"]);
$user -> getLastname ($_POST["lastname"]);

?>