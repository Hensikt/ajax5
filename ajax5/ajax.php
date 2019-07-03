<?php
/**
 * Created by PhpStorm.
 * User: hensikt
 * Date: 2019-06-17
 * Time: 09:13
 */
?>
<?php
include 'config.php';
$resultArray = array();
$search = $_GET['q'];
$type = $_GET['type'];
$con = mysqli_connect($servername, $uid, $pwd, $database);
mysqli_select_db($con, "world");
$sql = "SELECT * FROM country WHERE name LIKE '$search%'";
$sql2 = "SELECT * FROM country WHERE id='$search'";
if ($type == "list") {
    $result = mysqli_query($con, $sql);
    while ($row = mysqli_fetch_array($result)) {
        $resultArray[] = $row['Name'];
        $resultArray[] = $row['id'];
    }
    echo json_encode($resultArray);
};
if ($type == "answer") {
    $result = mysqli_query($con, $sql2);
    while ($row = mysqli_fetch_array($result)) {
        $resultArray[] = $row['Code'];
        $resultArray[] = $row['Name'];
        $resultArray[] = $row['Region'];
        $resultArray[] = $row['SurfaceArea'];
        $resultArray[] = $row['IndepYear'];
        $resultArray[] = $row['Population'];
        $resultArray[] = $row['LifeExpectancy'];
        $resultArray[] = $row['GNP'];
        $resultArray[] = $row['GNPOld'];
        $resultArray[] = $row['LocalName'];
        $resultArray[] = $row['GovernmentForm'];
        $resultArray[] = $row['HeadOfState'];
        $resultArray[] = $row['Capital'];
        $resultArray[] = $row['Code2'];
    }
    echo json_encode($resultArray);
};

mysqli_close($con);

?>
