<?php
	define("BASE_URL", "http://nvo.rtc.anz/prototypes");
	define("BASE_CSS_PATH", "styles/css/builds/");
?>
<head>
	<title><?php
	if ($page_title)
	  echo $page_title;
	else
		echo "prototype page";
	?></title>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="apple-touch-icon" href="apple-touch-icon.png">

    <link rel="stylesheet" media="all" href="<?php
    if ($page_css)
    	echo $page_css;
    else
    	echo BASE_CSS_PATH."demo-grid.css";
    ?>">

    <script src="../js/vendor/modernizr-2.8.3.min.js" async></script>
</head>
