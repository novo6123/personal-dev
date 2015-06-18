<!DOCTYPE html>
<html itemscope="" itemtype="http://schema.org/WebPage" lang="en">
<?php
    $page_title = "chart prototype";
    $page_css = "../styles/css/builds/styles.css";

	$page_heading_class = "page-heading";

    include "../components/head.php";


    if ($_SERVER['QUERY_STRING']) {
        $get_string = $_SERVER['QUERY_STRING'];

        parse_str($get_string, $get_array);

        $graph_w = $get_array[w];
        $graph_h = $get_array[h];
    }
    else {
        $graph_w = 360;
        $graph_h = 120;
    }
?>
<body>
<!--
	<div class="modal-overlay"></div>

    <div id="nav" class="grid-container">

        <!~~ uniheader + dashboard proto ~~>
        <div id="" class="grid-content">
            <div class="grid grid-1-1">
            	<?php // include "../components/navigation.php"; ?>
            </div>
        </div>
    </div>
 -->

    <div id="main" class="grid-container">
        <div class="grid-content">
        	<div class="grid grid-1-1">
        	    <div class="graph-header">
                    <h1 class="<?php echo $page_heading_class; ?>">chart prototype</h1>
                    <h2 class="<?php echo $page_heading_class; ?>"><a href="../data/perf.json">data source</a> | <a href="../data/perf.min.json">source minified</a></h2>
                </div>



                <div id="canvas-holder1">
                    <canvas
                        id="awesomeChart"
                        width="<?php echo $graph_w; ?>"
                        height="<?php echo $graph_h; ?>" />
                </div>

                <div id="chartjs-tooltip"></div>

            </div>
        </div>
    </div>



<!-- include jQuery -->
<?php include "../components/jQuery.php"; ?>

<!-- include charts script -->
<?php
    // $debug_mode = true;

    $script_URL = "../js/charts/chart.min.js";

    include "../components/charts.php";
?>

</body>
</html>
