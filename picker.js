/*
 * @desc close to solution, slightly off
 */
var temp = (function() {
        var i = 0,
            sub = [];

            for (; i<40; i+=1) {
                sub.push(i);
            }
            return sub;
    }()),
    temp2 =  (function() {
        var i = 0,
            sub = [];

            for (; i<100; i+=1) {
                sub.push(i);
            }
            return sub;
    }()),

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
