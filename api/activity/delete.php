<?php

// delete.php
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
    header('Access-Control-Allow-Headers: token, Content-Type');
    header('Access-Control-Max-Age: 1728000');
    header('Content-Length: 0');
    header('Content-Type: text/plain');
    die();
}
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

// INCLUDING DATABASE AND MAKING OBJECT
include_once '../config/database.php';
$db_connection = new Database();
$conn = $db_connection->dbConnection();

// get posted data json_decode
$data = json_decode(file_get_contents("php://input"));

// create.php
// make sure data is not empty
if (!empty($data->Actid)) {
  $sql = "DELETE FROM `react_category_list` WHERE Actid=?";

  $stmt = $conn->prepare($sql);
  
  $stmt->execute($data->Actid);
  // set response code - 201 created
  http_response_code(201);
  // tell the user
  echo json_encode(['message'=>'ok', 'results' => "ActivityDelete"]);
}
// tell the user data is incomplete
else {

  // set response code - 400 bad request
  http_response_code(400);
  echo json_encode(['message'=>'error', 'results' => "Unable to create product. Data is incomplete.", 'data' => $data]);
}

?>
