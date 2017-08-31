<?php

$db_host = "localhost";
$db_root = "root" ;
$db_pass = "" ;
$db_name = "skyVideo";

$conn = mysqli_connect( $db_host, $db_root, $db_pass, $db_name);

if (!$conn) {
    die("Connection failed " . mysqli_connect_error());
}

else {
    echo "Successful Connection"."<br>";
}

?>
