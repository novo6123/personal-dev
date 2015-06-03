<!DOCTYPE html>
<html itemscope="" itemtype="http://schema.org/WebPage" lang="en">
<head>
	<title>file array</title>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="apple-touch-icon" href="apple-touch-icon.png">

    <link rel="stylesheet" media="all" href="">

    <style>
    .list-img {
        max-width: 200px;
        max-height: 200px;
        position: relative;
        display: inline-block;
    }
    .list-img:hover {
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
    }
    </style>

</head>
<body>
<?php

    $ul_class= "ul-list";
    $li_class= "list-item";
    $a_class= "list-item-link";
    $img_class= "list-img";

    if ($handle = opendir('.')) {

//        echo '<ul class="' . $ul_class . '">';


        while (false !== ($entry = readdir($handle))) {

            if ($entry != "." && $entry != "..") {

                //echo '<li class="' . $li_class . '"><a class="' . $a_class . '" href="' . $entry . '">' . $entry . '</a></li>';

                echo '<a class="' . $a_class . '" href="' . $entry . '"><img class="' . $img_class . '" src="' . $entry . '" /></a>';
            }

        }

//        echo '</ul>';

        closedir($handle);
    }


// echo "<script>" . json_encode(glob("*.{jpg,gif,png,gifv,mp4,flv}", GLOB_BRACE)) . "</script>";

/*
    // output PHP files in current directory as JSON
    // works
    echo "<script>files = " . json_encode(glob("*.{php}", GLOB_BRACE)) . "</script>";
*/



/*
    // output files onto page as JSON named 'dir'
    // works

    $files = array();

    $dir = opendir('../');
    while ($file = readdir($dir)) {
        if ($file == '.' || $file == '..') {
            continue;
        }

        $files[] = $file;
    }

    echo "<script>" . "dir = " . json_encode($files) . "</script>";
*/

?>

<script src="" async></script>
</body>
</html>
