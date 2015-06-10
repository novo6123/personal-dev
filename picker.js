/*
 * @auth twitter.com/mrnovo6123 (norman.vo@gmail.com)
 * @desc for any passed in array, picked an evenly distributed set of points
 * @example picker.pick(picker.makeArray(100),20);
 *
 * TODO: add offset to first point depending on subdivisions
 */
var picker = {

        /*
         * @desc generate array of numbers up to limit
         */
        "makeArray": function (lim) {
            var i = 0,
                sub = [];

            for (; i<lim; i+=1) {
                sub.push(i);
            }
            return sub;
        },


        /*
         * @desc output debug message
         */
        "debugMsg": function (debug, arguments) {
            if (!!debug) {
                if (console) {
                    console.log(arguments);
                }
            }
        },


        "pick": function(inputArray, num, debug) {
            "use strict";

            var len = inputArray.length,
                subArray = [],
                i = 1;

            picker.debugMsg(debug, "array length: ", len);

            for (; i <= num; i+=1) {
                var iter = i - 1,
                    subdiv = Math.floor(len / (num - 1)),
                    ptIndex = 0;


                // TO DO: add first point offset??
                ptIndex = subdiv * iter;


                picker.debugMsg(debug, "iter", iter);
                picker.debugMsg(debug, "subdiv", subdiv);
                picker.debugMsg(debug, "inputArray[subdiv * iter]", inputArray[ptIndex]);


                if (ptIndex >= len) {

                    if (!!debug) {
                        console.log("ptIndex >= array length, ptIndex = ", ptIndex);
                    }

                    ptIndex = len - 1;
                }

                subArray.push(inputArray[ptIndex]);
            }
            return subArray;
        }
    };

// picker.pick(picker.makeArray(100),30,true);
