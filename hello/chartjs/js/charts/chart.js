/*
 * @author norman.vo@gmail.com
 * @author github.com/novo6123
 * @desc Chart JS attempt with controlled data size: less datapoints on smaller screens
 * @created: 2015.06.18
 */

(function () {
    "use strict";

    var currentDisplay = "",
        datasetEventName = "datasetEvent",
        displayEventName = {
            "small": "SMALL",
            "medium": "MEDIUM",
            "large": "LARGE"
        },
        displayEvt = {},
        dataEvt = {},
        chartId = "awesomeChart",
        chartElem = {},
        CHART_PRECISION = 5,
        ctx = {},
        screen = {
            "small": 320,
            "medium": 1024,
            "large": 1280
        },
        dataLimit = {
            "small": 18,
            "medium": 40,
            "large": 60
        },
        dataURL = "../data/perf.min.json",
        myCharts = {
            "animation": true,
            "animationSteps": 24,
            "animationEasing": "easeOutSine",
            "showScale": true,
            "scaleLineColor": "rgba(0,0,0,.2)",
            "scaleLineWidth": 1,
            "bezierCurve ": false,
            "responsive": true,

            "chart1": {
                "label": "standard",
                "fillColor": "rgba(4,43,82,0)",
                "strokeColor": "rgba(4,43,82,1)",
                "pointColor": "rgba(4,43,82,1)",
                "pointStrokeColor": "rgba(4,43,82,0)",
                "pointHighlightFill": "rgba(4,43,82,0)",
                "pointHighlightStroke": "rgba(4,43,82,1)"
            },
            "chart2": {
                "label": "ASX benchmark",
                "fillColor": "rgba(231,148,46,0)",
                "strokeColor": "rgba(231,148,46,1)",
                "pointColor": "rgba(231,148,46,1)",
                "pointStrokeColor": "rgba(231,148,46,0)",
                "pointHighlightFill": "rgba(231,148,46,0)",
                "pointHighlightStroke": "rgba(231,148,46,1)"
            },
            "chart3": {
                "label": "XYZ benchmark",
                "fillColor": "rgba(148,8,44,0)",
                "strokeColor": "rgba(148,8,44,1)",
                "pointColor": "rgba(148,8,44,1)",
                "pointStrokeColor": "rgba(255,255,255,0)",
                "pointHighlightFill": "rgba(255,255,255,0)",
                "pointHighlightStroke": "rgba(148,8,44,1)"
            }
        },
        myLineChart = {},
        data = {
            labels: [],
            subset: {},
            datasets: [{}]

        },


        chartApp = {

            "name": "third chartApp ",

            "init": function () {
                console.log(this.name + "init");

                this.bindUI();

                this.addResizeListener();

                this.drawChart();

                return this;
            },


            /*
             * @name bindUI
             * @desc get div node to inject chart
             */
            "bindUI": function () {
                console.log(this.name + "bindUI");

                chartElem = document.getElementById(chartId);
            },


            /*
             * @desc debounce function
             * source: http://davidwalsh.name/javascript-debounce-function
             */
            "debounce": function (func, wait, immediate) {
                console.log(this.name + "debounce");

                var timeout;

                return function () {
                    var context = this,
                        args = arguments,
                        callNow = {},

                        later = function () {
                            timeout = null;

                            if (!immediate) {
                                func.apply(context, args);
                            }
                        };

                    callNow = immediate && !timeout;

                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);

                    if (callNow) {
                        func.apply(context, args);
                    }
                };
            },


        /*
         * @name handleWindowSize
         * @desc dispatch specific events when window resizes
         */
        "handleWindowSize": function () {
            console.log(this.name + "handleWindowSize: ", window.innerWidth);

            if (window.innerWidth < screen.medium) {
                console.log("dispatch event to chartElem, screen size: small");

                displayEvt = new CustomEvent(displayEventName.small);
                chartElem.dispatchEvent(displayEvt);

            }
            else if (window.innerWidth >= screen.medium
                    && window.innerWidth < screen.large) {

                console.log("dispatch event to chartElem, screen size: medium");

                displayEvt = new CustomEvent(displayEventName.medium);
                chartElem.dispatchEvent(displayEvt);
            }
            else {
                // window.innerWidth >= screen.large
                console.log("dispatch event to chartElem, screen size: large");

                displayEvt = new CustomEvent(displayEventName.large);
                chartElem.dispatchEvent(displayEvt);
            }
        },


        /*
         * @name addResizeListener
         * @desc generate chart
         */
        "addResizeListener": function () {
            console.log(this.name + "addResizeListener");

            var w = this,
                RESIZE_INT = 250,

                resizeChart = this.debounce(function() {
                    // console.log("run fn with debouncing applied");

                    w.handleWindowSize();

                }, RESIZE_INT);

            window.addEventListener("resize", resizeChart);

        },


        /*
         * @name subsetSmall
         * @desc create small data subset
         */
        "subsetSmall": function (s) {
            console.log(this.name + "subsetSmall");
            console.log("create SMALL subset of data points");

            data.labels = data.subset.small.map(function(a) {
                return a.date;
            });

            data.subset.standard = data.subset.small.map(function(a) {
                return a.standard.toString().slice(0,6);
            });

            data.subset.case1 = data.subset.small.map(function(a) {
                return a.case1.toString().slice(0,6);
            });

            data.subset.case2 = data.subset.small.map(function(a) {
                return a.case2.toString().slice(0,6);
            });

        },



        /*
         * @name subsetMedium
         * @desc create medium data subset
         */
        "subsetMedium": function (s) {
            console.log(this.name + "subsetMedium");
            console.log("create MEDIUM subset of data points");

            data.labels = data.subset.medium.map(function(a) {
                return a.date;
            });

            data.subset.standard = data.subset.medium.map(function(a) {
                return a.standard.toString().slice(0,6);
            });

            data.subset.case1 = data.subset.medium.map(function(a) {
                return a.case1.toString().slice(0,6);
            });

            data.subset.case2 = data.subset.medium.map(function(a) {
                return a.case2.toString().slice(0,6);
            });

        },


        /*
         * @name subsetLarge
         * @desc create large data subset
         */
        "subsetLarge": function (s) {
            console.log(this.name + "subsetLarge");
            console.log("create LARGE subset of data points");

            // console.log("draw chart with large set of data points");

            data.labels = data.subset.large.map(function(a) {
                return a.date;
            });

            data.subset.standard = data.subset.large.map(function(a) {
                return a.standard.toString().slice(0,6);
            });

            data.subset.case1 = data.subset.large.map(function(a) {
                return a.case1.toString().slice(0,6);
            });

            data.subset.case2 = data.subset.large.map(function(a) {
                return a.case2.toString().slice(0,6);
            });

        },


        /*
         * @name formatNumbers
         * @desc apply custom number formatting (6 characters)
         */
        "formatNumbers": function (input) {
            console.log(this.name + "formatNumbers");
            return input.toString().slice(0,6);
        },


        /*
         * @name pickPoints
         * @desc pick evenly distributed points
         */
        "pickPoints": function (dataToSlice, numOfPoints) {
            console.log(this.name + "pickPoints");

            // return dataToSlice.slice(-numOfPoints);



        },


        /*
         * @name processData
         * @desc create data subsets depending on screen size
         */
        "processData": function (s) {
            // console.clear();
            console.log(this.name + "processData");

            var w = this;

            var temp = this.pickPoints(s.myJSON, dataLimit.large);

            console.log("temp", temp);

            data.subset.large = s.myJSON.slice(-(dataLimit.large));
            data.subset.medium = data.subset.large.slice(-(dataLimit.medium));
            data.subset.small = data.subset.medium.slice(-(dataLimit.small));


//             console.log(data.subset.small);
//             console.log(data.subset.medium);
//             console.log(data.subset.large);


            if (currentDisplay === "") {
                // console.log(this.name +"app first run");

                if (window.innerWidth < screen.medium) {
                    this.subsetSmall();
                    currentDisplay = displayEventName.small;
                }
                else if (window.innerWidth >= screen.medium
                        && window.innerWidth < screen.large) {

                    this.subsetMedium();
                    currentDisplay = displayEventName.medium;
                }
                else {
                    // window.innerWidth >= screen.large
                    this.subsetLarge();
                    currentDisplay = displayEventName.large;
                }


                // first chart draw
                // console.log("populateChart(data) currentDisplay: ", currentDisplay);
                w.populateChart(data);

            }


            // wait for display change EVENT 'SMALL'
            chartElem.addEventListener(displayEventName.small, function (e) {
                console.log("small event listened");
                console.log("currentDisplay: ",currentDisplay);

                if (currentDisplay !== displayEventName.small) {

                    console.log("display has passed breakpoint, update chart");

                    w.subsetSmall();

                    currentDisplay = displayEventName.small;

                    w.populateChart(data);
                }
            });


            chartElem.addEventListener(displayEventName.medium, function (e) {
                console.log("medium event listened");
                console.log("currentDisplay: ",currentDisplay);

                if (currentDisplay !== displayEventName.medium) {
                    // only update if not 'medium' display

                    console.log("display has passed breakpoint, update chart");

                    w.subsetMedium();

                    currentDisplay = displayEventName.medium;

                    w.populateChart(data);
                }

            });


            chartElem.addEventListener(displayEventName.large, function (e) {
                console.log("large event listened");
                console.log("currentDisplay: ",currentDisplay);

                if (currentDisplay !== displayEventName.large) {
                    // only update if not 'large display'

                    console.log("display has passed breakpoint, update chart");

                    w.subsetLarge();

                    currentDisplay = displayEventName.large;

                    w.populateChart(data);
                }

            });

        },


        /*
         * @name toolTips()
         * @desc add custom tooltips
         */
        "toolTips": function () {
            // console.log(this.name + "enableTooltip");

            Chart.defaults.global.pointHitDetectionRadius = 1;

            // add tooltip
            Chart.defaults.global.customTooltips = function(tooltip) {

                var i = 0,
                    innerHtml = "",
                    tooltipEl = $('#chartjs-tooltip'),
                    innerLabel = ["case2: ", "case1: ", "standard: "];

                if (!tooltip) {
                    tooltipEl.css({
                        opacity: 0
                    });
                    return;
                }

                tooltipEl.removeClass('above below');
                tooltipEl.addClass(tooltip.yAlign);

                for (i = tooltip.labels.length - 1; i >= 0; i--) {

                    innerHtml += [
                        '<div class="chartjs-tooltip-section">',
                        '	<span class="chartjs-tooltip-key" style="background-color:' + tooltip.legendColors[i].fill + '"></span>',
                        '	<span class="chartjs-tooltip-value">' + innerLabel[i] + tooltip.labels[i] + '</span>',
                        '</div>'
                    ].join('');

                }

                tooltipEl.html(innerHtml);


                tooltipEl.css({
                    opacity: 1,
                    left: tooltip.chart.canvas.offsetLeft + tooltip.x + 'px',
                    top: tooltip.chart.canvas.offsetTop + tooltip.y + 'px',
                    fontFamily: tooltip.fontFamily,
                    fontSize: tooltip.fontSize,
                    fontStyle: tooltip.fontStyle,
                });
            };

        },


        "populateChart": function (data) {
            console.log(this.name + "populateChart");


            if (!!myLineChart.chart) {
                // console.log("destroy existing charts");
                myLineChart.destroy();
            }


            this.toolTips();

            data.datasets = [
                {
                    label:                  myCharts.chart1.label,
                    fillColor:              myCharts.chart1.fillColor,
                    strokeColor:            myCharts.chart1.strokeColor,
                    pointColor:             myCharts.chart1.pointColor,
                    pointStrokeColor:       myCharts.chart1.pointStrokeColor,
                    pointHighlightFill:     myCharts.chart1.pointHighlightFill,
                    pointHighlightStroke:   myCharts.chart1.pointHighlightStroke,
                    data:                   data.subset.standard
                },
                {
                    label:                  myCharts.chart2.label,
                    fillColor:              myCharts.chart2.fillColor,
                    strokeColor:            myCharts.chart2.strokeColor,
                    pointColor:             myCharts.chart2.pointColor,
                    pointStrokeColor:       myCharts.chart2.pointStrokeColor,
                    pointHighlightFill:     myCharts.chart2.pointHighlightFill,
                    pointHighlightStroke:   myCharts.chart2.pointHighlightStroke,
                    data:                   data.subset.case1
                },
                {
                    label:                  myCharts.chart3.label,
                    fillColor:              myCharts.chart3.fillColor,
                    strokeColor:            myCharts.chart3.strokeColor,
                    pointColor:             myCharts.chart3.pointColor,
                    pointStrokeColor:       myCharts.chart3.pointStrokeColor,
                    pointHighlightFill:     myCharts.chart3.pointHighlightFill,
                    pointHighlightStroke:   myCharts.chart3.pointHighlightStroke,
                    data:                   data.subset.case2
                }
            ];

            // console.log(data.datasets);

            // Dispatch dataset event
            dataEvt = new CustomEvent(datasetEventName, {"detail": data});
            chartElem.dispatchEvent(dataEvt);

        },


        /*
         * @name drawChart
         * @desc configure chart
         */
        "drawChart": function () {
            console.log(this.name + "drawChart");

            var w = this,
                data = {};

            // Get the context of the canvas element we want to select
            ctx = chartElem.getContext("2d");

            // this.setChartDefaults();

            this.fetchData();


            // wait for data load EVENT
            chartElem.addEventListener(datasetEventName, function (e) {
                console.log("data load event:", datasetEventName);

                data = e.detail;

                // console.log(e);
                // console.log(data);

                myLineChart = new Chart(ctx).Line(data, {

                    animation: myCharts.animation,
                    animationSteps: myCharts.animationSteps,
                    animationEasing: myCharts.animationEasing,
                    showScale: myCharts.showScale,
                    scaleLineColor: myCharts.scaleLineColor,
                    scaleLineWidth: myCharts.scaleLineWidth,

                    // Boolean - Whether the line is curved between points
                    bezierCurve : myCharts.bezierCurve,
                    responsive: myCharts.responsive

                });

                console.log(w.name + "drawChart finished");
                // console.log("myLineChart",myLineChart);

            }, false);

        },


        /*
         * @name fetchData
         * @desc retrieve data to be charted
         */
        "fetchData": function() {
            console.log(this.name + "fetchData");

            var w = this;

            if (!!dataURL) {
                $.ajax({
                    url: dataURL
                })
                .fail(function() {
                    console.log( "data load error" );
                })
                .done(function(s) {
                    console.log("AJAX data load successful");

                    w.processData(s);
                });
            }
            else {
                console.log("error, no dataURL defined");
            }

        } // fetchData()

    };



    // run app if Chart library present
    if (!!window.Chart) {
        chartApp.init();
    }

}());
