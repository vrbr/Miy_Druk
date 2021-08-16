<?php

$name = $_POST['name-calculate'];
$phone = $_POST['phone-calculate'];
$theme = $_POST['themeMaket'];
$details = $_POST['details'];
$token = "1830383635:AAFOODPt7hqyQTgr-nQLpIxHzOZ-fPvS6Hs";
// $token = "1099190779:AAFGMtmKbijlPZWrW352VnJ_gY_2vA0Ug_Y"; мой
$chat_id = "-1001559198447";
// $chat_id = "369989967"; мой

$arr = array(
  'Тема: ' => $theme,
  'Имя: ' => $name,
  'Телефон: ' => $phone,
  'Детали: ' => $details
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header("Location: thanks-ua.html");
  } else {
  header("Location: error-ua.html");
}
?>