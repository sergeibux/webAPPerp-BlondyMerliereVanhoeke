<?php
$inter = $_GET["inters"];
$inter = str_replace("\\", "", $inter);
$file = $_SERVER["DOCUMENT_ROOT"] . "/ERP-webAPP/datas/inter.json";
$fstream = fopen($file, "r");
while($line = fgets($fstream)){
    $jsonInTxt .= $line;
}
echo '--' . $jsonInTxt . '--\n';
fclose ($fstream);

$json[] = json_decode($jsonInTxt, true);
$fstream = fopen($file, "w+");
$json[] = json_decode($inter, true);
echo json_encode($json[""], true);

$encodedJson = json_encode($json);

fwrite ($fstream, $encodedJson);

fclose ($fstream);