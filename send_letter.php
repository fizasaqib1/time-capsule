<?php

$conn = new mysqli("localhost", "root", "", "futureletter");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$letter = $_POST["letter"];
$email = $_POST["email"];
$deliveryTime = intval($_POST["delivery"]) / 1000; // Convert ms to seconds

sleep($deliveryTime); // Wait for the selected time

$sql = "INSERT INTO letter (email, content) VALUES ('$email', '$letter')";

if ($conn->query($sql) === TRUE) {
    echo "<script>alert('✅ Letter inserted into the database!'); window.location.href='index.html';</script>";
} else {
    echo "<script>alert('❌ Error: " . $conn->error . "'); window.location.href='index.html';</script>";
}

$conn->close();
?>
