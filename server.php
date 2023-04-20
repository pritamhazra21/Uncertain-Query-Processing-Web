
<?php
// Connect to the MySQL database

$membership_value = $_GET['membership_value'];
$membership_col = $_GET['membership_col'];

$conn = mysqli_connect("localhost:3306", "root", "password", "test");


if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Execute SQL query to fetch data from the database
$result = mysqli_query($conn, "SELECT * FROM project_db;");

// Create a PHP array to store the data
$data = array();

// Fetch the data using the mysqli_fetch_assoc() function
while ($row = mysqli_fetch_assoc($result)) {
    if($row[$membership_col] >= $membership_value){
        $data[] = $row;

    }
}

// Encode the PHP array into a JSON object
$json_data = json_encode($data);

// Send the JSON object to the client-side
header("Content-Type: application/json");
echo $json_data;
?>

        
