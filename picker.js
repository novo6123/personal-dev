// var temp = [1,2,3,4,5,6,7,8,9];
// pick(3) // expect [1,5,9]
// pick(4) // expect [1,3,6,9]
// pick(5) // expect [1,3,5,7,9]

var temp = [1,2,3,4,5,6,7,8,9],

    picker = function (inputArray, numOfPoints) {
        var i = 0,
            subArray = [],
            dataLength = inputArray.length;

        // first item
        subArray.push(inputArray[0]);

        // other points distributed
        for (; i < dataLength; i+=1) {
            // unfinished
            // subArray.push
        }

        // last item
        subArray.push(inputArray[dataLength-1]);

        return subArray;
    };


picker(temp, 3);
