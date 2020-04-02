<?php
$inter = $_GET["inters"];
$inter = str_replace("\\", "", $inter);
$file = $_SERVER["DOCUMENT_ROOT"] . "/ERP-webAPP/datas/inter.json";
$fstream = fopen($file, "a+");
foreach($fstream as  $line){
    
    $jsonInTxt .= $line;
    
}

$json[] = json_decode($jsonInTxt);
$json["interventions"] = $inter;

$encodedJson = json_encode($json);

fwrite ($fstream, $encodedJson);

fclose ($fstream);