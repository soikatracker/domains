<?php

require_once('db.php');

$username = $_POST['username'];
$tel = $_POST['tel'];
$person = $_POST['person'];
$date = $_POST['date'];
$time = $_POST['time'];
$mesto = $_POST['mesto'];


$sql = "INSERT INTO `reserv` (username, tel, person, date, time, mesto) 
        VALUES ('$username', '$tel', '$person', '$date', '$time', '$mesto')";


if (mysqli_query($conn, $sql)) {
    echo "Бронирование успешно добавлено!";
} else {
    echo "Ошибка: " . mysqli_error($conn);
}

$conn->query($sql);
mysqli_close($conn);
?>
