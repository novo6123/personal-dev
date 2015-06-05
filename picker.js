/*
 * @desc still not doing what I want!
 */
var temp = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
    temp2 = [1,2,3,4,5,6,7,8,9],

    picker = function (inputArray, numOfPoints) {
        var i = 1,
            tempArray = [],
            subArray = [],
            dataLength = 0,
            point = 0,
            pointsToDistribute = 0;

        // first item
        subArray.push(inputArray[0]);

        tempArray = inputArray.slice(1,this.length - 1);
        dataLength = tempArray.length;

        console.log("tempArray", tempArray);

        // numOfPoints - firstItem - lastItem
        pointsToDistribute = numOfPoints - 2;
        console.log("pointsToDistribute", pointsToDistribute);

        var interval = Math.floor(dataLength / pointsToDistribute);

        console.log("interval", interval);


        for (; i <= pointsToDistribute; i+=1) {

            point = tempArray[i*interval-1];
            console.log("point",point);

            subArray.push(point);
        }

        // last item
        subArray.push(inputArray[inputArray.length-1]);

        return subArray;
    };


picker(temp, 5);
