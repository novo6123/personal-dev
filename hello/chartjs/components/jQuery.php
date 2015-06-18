<?php
    // $script_URL = "";
?>
<script src="../js/vendor/jquery-2.1.3.min.js" async></script>

<script>
(function () {
    "use strict";

    var jQElem = document.createElement("script"),
        scriptElem = document.createElement("script"),
        CDNURL = "https://code.jquery.com/jquery-2.1.3.min.js",
        scriptURL = "<?php echo $script_URL; ?>";


    if (!!window.jQuery) {
        // console.log("JQ not found, fallback to CDN");

        jQElem.src = CDNURL;
        // jQElem.async = true;

        document.body.appendChild(jQElem);
    }


    if (scriptURL.length > 0) {

        // script specified, insert onto page
        scriptElem.src = scriptURL;
        scriptElem.async = true;

        document.body.appendChild(scriptElem);
    }

}());
</script>
