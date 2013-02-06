<?php

	if( isset($_POST['name']) && isset($_POST['email']) ) {
		echo "VALID";
	} else {
		echo "INVALID";
	}

?>