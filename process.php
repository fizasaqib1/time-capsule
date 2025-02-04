<?php
include 'database.php';
if(isset($_POST['submit'])){
    $username=$_POST['username'];
    $email=$_POST['email'];
    $password=$_POST['password'];
     
    $sql = "INSERT INTO futureletter (username, email, password) VALUES ('$username', '$email', '$password')";

    if(mysqli_query($con, $sql))
    {
        echo "NEW DATA INSERTED";
    }
    else{
        echo "error". mysqli_error($con);
    }
    mysqli_close($con);
}
?>