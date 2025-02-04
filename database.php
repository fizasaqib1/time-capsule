<?php
$servername="localhost";
$username="root";
$password="";
$database="futureletter";

$con=mysqli_connect($servername,$username,$password,$database);
if(!$con){
    die("error". mysqli_error($con));
}
else{
    echo "connected";
}
?>