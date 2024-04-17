<?php

$json_string = file_get_contents('dischi.json');

$play_list = json_decode($json_string);



header('Content-Type: application/json');

echo json_encode($play_list);

?>