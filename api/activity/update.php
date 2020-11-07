<?php

// update.php
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

if (
    !empty($data->Clubid) &&
    !empty($data->Actname) &&
    !empty($data->Actdate) &&
    !empty($data->Actlocate) &&
    !empty($data->Srcurl) &&
    !empty($data->Descript) &&
    !empty($data->Ta) &&
    !empty($data->Fee) &&
    !empty($data->Deadline) &&
    !empty($data->category)
) {
  $sql = "UPDATE `react_activity_list` SET Clubid=?, Actname=?, Actdate=?, Actlocate=?, Srcurl=?, Descript=?, Ta=?, Fee=? , Deadline=? WHERE Actid=?";
  $stmt = $conn->prepare($sql);
  $stmt->execute([$data->Clubid, $data->Actname, $data->Actdate, $data->Actlocate, $data->Srcurl,
                    $data->Descript, $data->Ta, $data->Fee, $data->Deadline,$data->Actid]);
  
  http_response_code(201);
  
  echo json_encode(['message'=>'ok', 'results' => "UpdateSccuess"]);
}
// tell the user data is incomplete
else {
  http_response_code(400);
  echo json_encode(['message'=>'error', 'results' => "Unable to create product. Data is incomplete.", 'data' => $data]);
}

?>