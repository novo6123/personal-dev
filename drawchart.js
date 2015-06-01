(function() {
    "use strict";

    var w = this,
        randomScalingFactor = {},
        lineChartData = {};


    Chart.defaults.global.pointHitDetectionRadius = 1;

    // add tooltip
    Chart.defaults.global.customTooltips = function(tooltip) {
        // w.enableTooltip(tooltip);
    };

    var oscPt = Math.round(Math.random() * 100),
        RANGE = 6;

    randomScalingFactor = function() {
        return oscPt + Math.random() * RANGE - (RANGE*.5);
    };


    lineChartData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "dataset 1",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
        }, {
            label: "dataset 2",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
        }]
    };

    var canvasId = "myChart",
        ctx1 = document.getElementById(canvasId);

    console.log(ctx1);

    if (!!ctx1) {
        ctx1 = document.getElementById(canvasId).getContext("2d");
    }
    else {
        var canvasElem = document.createElement("canvas");
        canvasElem.id = canvasId;
        
        document.body.appendChild(canvasElem);

        ctx1 = document.getElementById(canvasId).getContext("2d");
    }
     


/*
    // why the f#$%# don't these params work?!?!
    // you lied to me, ChartJS !!!
    Chart.defaults.global = {
        animation: true,
        animationSteps: 60,
        animationEasing: "easeOutSine",
        showScale: true,
        scaleLineColor: "rgba(0,0,0,.1)",
        scaleLineWidth: 1,

        responsive: true
    }
*/
    window.myLine = new Chart(ctx1).Line(lineChartData, {
        bezierCurve : false,
        responsive: true
    });

//     var ctx2 = document.getElementById("scatterChart").getContext("2d");
//     window.myLine = new Chart(ctx2).Line(lineChartData, {
//         bezierCurve : false,
//         responsive: true
//     });

}());
