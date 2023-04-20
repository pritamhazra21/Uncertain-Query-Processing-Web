
<?php
// Connect to the MySQL database

$fuzzy_data = $_GET['fuzzy'];
$fuzzy_col = $_GET['fuzzy_col'];
$data_col = $_GET['data_col'];
$membership_col = $_GET['membership_col'];

$conn = mysqli_connect("localhost:3306", "root", "password", "test");


if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}



// Execute SQL query to fetch data from the database
$result = mysqli_query($conn, "select min($data_col) as min from project_db;");
$row = mysqli_fetch_assoc($result);
$min = $row['min'];


$result = mysqli_query($conn, "select max($data_col) as max from project_db;");
$row = mysqli_fetch_assoc($result);
$max = $row['max'];


$range = $max - $min;

$result = mysqli_query($conn, "SELECT * FROM project_db;");



// Fetch the data using the mysqli_fetch_assoc() function
while ($row = mysqli_fetch_assoc($result)) {
    $id = $row['id'];
    $membershipValue = 1 - abs( $row[$data_col]- $fuzzy_data ) / $range;
    $membershipValue = ($membershipValue <= 0) ? 0 : $membershipValue;

    $update_sql = "UPDATE project_db SET $membership_col = $membershipValue, $fuzzy_col = $fuzzy_data WHERE id = $id";
    mysqli_query($conn, $update_sql);
}

echo '[{"status": "membership value on new algorithm generated"}]';


?>

        

