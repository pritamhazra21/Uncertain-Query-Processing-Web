
<?php
// Connect to the MySQL database
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
    $id = $row['id'];
    $c_membership = $row['temp_c_membership'];
    $p_membership = $row['precipitation_membership'];
    if($c_membership < $p_membership){
        $comb_membership = $c_membership; 
    }else{
        $comb_membership = $p_membership;
    } 
    $update_sql = "UPDATE project_db SET combined_membership = $comb_membership WHERE id = $id";
    mysqli_query($conn, $update_sql);
}

// Encode the PHP array into a JSON object
// $json_data = json_encode($data);

// // Send the JSON object to the client-side
// header("Content-Type: application/json");
// echo $json_data;

echo '[{"status": "membership value for temp and prec generated"}]';
?>

        
