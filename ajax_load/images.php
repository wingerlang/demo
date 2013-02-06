<?php

$dir = (!empty($_GET['dir'])) ? $_GET['dir'] : 'ERROR';

function readDirectory($path) {
	if ($handle = opendir($path)) {
		while (false !== ($entry = readdir($handle))) {
			if($entry != '.' && $entry != '..')
				$files[] =  "$entry";
		}
	}
	return $files;
}
function printArray($arr){
	for($i=2, $len = count($arr); $i < $len; $i++){
		echo $i-1 . ". " . $arr[$i] . "<br>";
	}
}

if(is_dir($dir)) {
	echo json_encode(readDirectory($dir));
} else {
	echo "ERROR";
}

?>