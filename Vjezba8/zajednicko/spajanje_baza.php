<?php
$mysqli = new mysqli("localhost", "NovokmetM", "NovokmetM_2022", "NovokmetM");
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
?>