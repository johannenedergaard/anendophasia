<?php
// take the uploaded data
$json = file_get_contents('php://input');
// treat it as json
$obj = json_decode($json, true);
//echo $obj
// open "filename" in the data folder
$outfile = fopen('/var/www/server_data/madison/'.date("Y-m-d")."_".basename($obj["filename"]), 'w');
// write the "filedata" to that file
fwrite($outfile, $obj["filedata"]);
fclose($outfile);
?>
