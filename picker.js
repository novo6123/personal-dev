/*
 * @auth twitter.com/mrnovo6123 (norman.vo@gmail.com)
 * @desc for any passed in array, picked an evenly distributed set of points
 * @example picker.pick(picker.makeArray(100),20);
 */
var picker = {

        /*
         * @desc generate array of numbers up to limit
         */
        "makeArray": function (lim) {
            "use strict";

            var i = 0,
                sub = [];

            for (; i < lim; i+=1) {
                sub.push(i);
            }
            return sub;
        },


        /*
         * @desc output debug message
         */
        "debugMsg": function () {
            "use strict";

            if (console) {
                console.log(arguments);
            }
        },


        /*
         * @desc pick evenly distributed points, allow for debugging to be toggled on/off
         * @desc to do: add first point offset
         */
        "pick": function (inputArray, num, debug) {
            "use strict";

            var len = inputArray.length,
                subArray = [],
                i = 1;

            if (debug === Boolean(true)) {
                picker.debugMsg(debug, "array length: ", len);
            }

            for (; i <= num; i+=1) {
                var iter = i - 1,
                    subdiv = Math.floor(len / (num - 1)),
                    ptIndex = 0;


                // add if-condition: first point offset??
                ptIndex = subdiv * iter;


                if (debug === Boolean(true)) {
                    picker.debugMsg(debug, "iter", iter);
                    picker.debugMsg(debug, "subdiv", subdiv);
                    picker.debugMsg(debug, "inputArray[subdiv * iter]", inputArray[ptIndex]);
                }


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
