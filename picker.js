/*
 * @desc close to solution, slightly off
 */
var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
    arrayn = (function() {
        var i = 0,
            sub = [];

            for (; i<100; i+=1) {
                sub.push(i);
            }
            return sub;
    }());

    picker = {
        "pick": function(inputArray, num) {
            "use strict";

            var len = inputArray.length,
                subArray = [],
                i = 1;

            // console.log("array length: ", len);

            for (; i <= num; i+=1) {
                var iter = i - 1,
                    subdiv = Math.floor(len / (num - 1)),
                    ptIndex = 0;

                if (subdiv < 0) {
                    subdiv = 0;
                }

                ptIndex = subdiv * iter;

                // console.log("iter", iter);
                // console.log("subdiv", subdiv);
                // console.log("inputArray[subdiv * iter]", inputArray[ptIndex]);

                if (ptIndex >= len) {
                    // console.log("ptIndex >= array length, ptIndex = ", ptIndex);
                    ptIndex = len - 1;
                }

                subArray.push(inputArray[ptIndex]);
            }
            return subArray;
        }
    };


// picker.pick(arrayn, 3); // [0, 50, 99]; // correct
// picker.pick(arrayn, 4); // [0, 33, 66, 99]; // correct
