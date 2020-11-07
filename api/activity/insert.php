<?php
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

$sql = "SELECT * FROM `react_activity_list`"; // for Actid count
$stmt = $conn->prepare($sql);
$stmt->execute();
$Actid= sprintf("asd%03d",$stmt->rowCount() + 1);
// make sure data is not empty
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
  //insert activity
  $sql = "INSERT INTO `react_activity_list` (Actid,Clubid, Actname, Actdate, Actlocate, Srcurl,Descript, 
            Ta, Fee,Deadline) VALUES (?,?,?,?,?,?,?,?,?,?)";
  $stmt = $conn->prepare($sql);
  $stmt->execute([$Actid,$data->Clubid, $data->Actname, $data->Actdate, $data->Actlocate, $data->Srcurl,
                    $data->Descript, $data->Ta, $data->Fee, $data->Deadline]);

  //insert activity's category to list
  $sql = "INSERT INTO `react_category_list` (Actid,Cateid) VALUES (?,?)";
  $stmt = $conn->prepare($sql);
  $stmt->execute([$Actid,$data->category]);

  // set response code - 201 created
  http_response_code(201);
  // tell the user
  echo json_encode(['message'=>'ok', 'results' => "InsertSccuess"]);
}
// tell the user data is incomplete
else {
  // set response code - 400 bad request
  http_response_code(400);
  echo json_encode(['message'=>'error', 'results' => "Unable to create activity. Data is incomplete.", 'data' => $data]);
}
?>