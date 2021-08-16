<?php

$name = $_POST['name-connection'];
$phone = $_POST['phone-connection'];
$theme = $_POST['theme'];
$token = "1830383635:AAFOODPt7hqyQTgr-nQLpIxHzOZ-fPvS6Hs";
// $token = "1099190779:AAFGMtmKbijlPZWrW352VnJ_gY_2vA0Ug_Y"; мой
$chat_id = "-1001559198447";
// $chat_id = "369989967"; мой

$arr = array(
  'Тема: ' => $theme,
  'Имя: ' => $name,
  'Телефон: ' => $phone
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header("Location: thanks.html");
  } else {
  header("Location: error.html");
}
?>