<?php
    // $script_URL = "";
    if ($debug_mode == true)
        echo '<script src="../js/vendor/Chart.js" async></script>';
    else
        echo '<script src="../js/vendor/Chart.min.js" async></script>';
?>

<script>
(function () {
    "use strict";

    var chartJSElem = document.createElement("script"),
        scriptElem = document.createElement("script"),
        // CDNURL = "https://code.jquery.com/jquery-2.1.3.min.js",
        scriptURL = "<?php echo $script_URL; ?>";


    if (!!window.Chart) {
        if (console) {
            console.log("Chart JS not found, fallback to CDN");
        }

        // currently no CDN for Chart JS

        // chartJSElem.src = CDNURL;
        // chartJSElem.async = true;

        // document.body.appendChild(jQElem);
    }


    // console.log("Chart JS found, do things");
    // insert other script onto page
    scriptElem.src = scriptURL;
    scriptElem.async = true;

    document.body.appendChild(scriptElem);

}());
</script>
