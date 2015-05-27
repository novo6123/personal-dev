<?php

    $ul_class= "ul-list";
    $li_class= "list-item";
    $a_class= "list-item-link";

    if ($handle = opendir('.')) {

        echo '<ul class="' . $ul_class . '">';

        while (false !== ($entry = readdir($handle))) {
            if ($entry != "." && $entry != "..") {

                echo '<li class="' . $li_class . '"><a class="' . $a_class . '" href="' . $entry . '">' . $entry . '</a></li>';
            }

        }

        echo '</ul>';

        closedir($handle);
    }

?>
