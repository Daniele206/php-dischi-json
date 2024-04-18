<?php

$json_string = file_get_contents('dischi.json');

$play_list = json_decode($json_string, true);

if(isset($_POST['newSongTitle'])){
  $new_song = [
    "title" => $_POST['newSongTitle'],
    "author" => $_POST['newSongAuthor'],
    "year" => $_POST['newSongYear'],
    "poster" => $_POST['newSongPoster'],
    "genre" => $_POST['newSongGenre'],
    "like" => false
  ];

  $play_list[] = $new_song;
  file_put_contents('dischi.json', json_encode($play_list));
}

if(isset($_POST['removeSongId'])){
  $i = $_POST['removeSongId'];

  array_splice($play_list, $i, 1);
  file_put_contents('dischi.json', json_encode($play_list));
}

header('Content-Type: application/json');

echo json_encode($play_list);

?>