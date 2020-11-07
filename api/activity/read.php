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
// IF GET ACTIVITIES ID, THEN SHOW ACTIVITIES BY ID OTHERWISE SHOW ALL ACTIVITIES
$ActID = isset($_GET['Actid']) ? $_GET['Actid'] : 'all_activities';
$ClubID = isset($_GET['Clubid']) ? $_GET['Clubid'] : 'all_club';

if($ClubID == 'all_club'){
    $sql = ($ActID != 'all_activities') ? "SELECT * FROM `react_activity_list` WHERE Actid='$ActID'" : "SELECT * FROM `react_activity_list`";
}
else {
    $sql = "SELECT * FROM `react_activity_list` WHERE Clubid='$ClubID'";
}
$stmt = $conn->prepare($sql);
$stmt->execute();

//CHECK WHETHER THERE IS ANY ACTIVITY IN OUR DATABASE
if($stmt->rowCount() > 0){
    // CREATE ACTIVITIES ARRAY
    $activities_array = [];

    while($row = $stmt->fetch(PDO::FETCH_ASSOC)){

        $activity_data = [
            'Actid' => $row['Actid'],
            'Clubid' => $row['Clubid'],
            'Actname' => $row['Actname'],
            'Actdate' => $row['Actdate'],
            'Actlocate' => $row['Actlocate'],
            'Srcurl' => $row['Srcurl'],
            'Descript' => $row['Descript'],
            'Ta' => $row['Ta'],
            'Fee' => $row['Fee'],
            'Deadline' => $row['Deadline'],
        ];
        // PUSH ACTIVITY DATA IN OUR $activity_data ARRAY
        array_push($activities_array, $activity_data);
    }
    //SHOW ACTIVITY/ACTIVITIES IN JSON FORMAT
    echo json_encode(['message'=>'ok', 'results' => $activities_array]);
}
else{
    //IF THER IS NO ACTIVITY IN OUR DATABASE
    echo json_encode(['message'=>'No activity found']);
}
?>