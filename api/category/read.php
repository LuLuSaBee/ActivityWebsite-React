<?php
// SET Response header
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");

// INCLUDING DATABASE AND MAKING OBJECT
require '../config/database.php';
$db_connection = new Database();
$conn = $db_connection->dbConnection();

// MAKE SQL QUERY

// 將所有分類查找出來
$sql = "SELECT * FROM `react_category_info`";

$stmt = $conn->prepare($sql);
$stmt->execute();

//CHECK WHETHER THERE IS ANY ACTIVITY IN OUR DATABASE
if($stmt->rowCount() > 0){
    // CREATE ACTIVITIES ARRAY
    $categories_array = [];

    while($row = $stmt->fetch(PDO::FETCH_ASSOC)){

        $category_data = [
            'Cateid' => $row['Cateid'],
            'Catename' => $row['Catename'],
        ];
        // PUSH ACTIVITY DATA IN OUR $category_data ARRAY
        array_push($categories_array, $category_data);
    }
    //SHOW IN JSON FORMAT
    echo json_encode(['message'=>'ok', 'results' => $categories_array]);
}
else{
    //IF THER IS NOTHING IN OUR DATABASE
    echo json_encode(['message'=>'No category found']);
}
?>