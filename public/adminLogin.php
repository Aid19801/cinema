<?php

include 'mysql_connect.php';

$AdminUsername = $_POST["username"];
$AdminPassword = $_POST["password"];
echo $AdminUsername;
echo $AdminPassword;
    
$sql = "SELECT `id` FROM `myAdmins` WHERE `AdminUsername`='$AdminUsername' AND `AdminPassword`='$AdminPassword'";
    
$result = mysqli_query($conn,$sql);

if (mysqli_num_rows($result) == 1) {
    
    echo "You are now logged in!";
    header("location: adminControls.html");
}  else {
    echo "Your username or password is incorrect!";
    header("location: loginFail.html");
    }



//    $AdminUsername = mysqli_fetch_assoc($result);
//    $name = mysqli_fetch_assoc($result2);
//    
//    echo $id['id'];
//    echo $name['Name'];
//    echo "<br>";
//
//
//    session_start();
//    $_SESSION["id"] = $id['id'];
//    $_SESSION["name"] = $name['Name'];


//    header(location: ../../);
//}
//
//else {
//    header (location: Loginwrong.html);
//

    
?>
