/*
    Multiples of 3 and 5
    ---
    http://projecteuler.net/problem=1

    Problem 1
    If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

    Find the sum of all the multiples of 3 or 5 below 1000.
*/


// My (incorrect) soln
//---
var i = 0,
    j = 0,
    temp = 0,
    upperLim = 10,
    numsToCheck = [3,5],
    wholeNum = [],
    total = 0;

(function whole(){

    for (; j <= numsToCheck.length; j+=1) {
        for (i=0; i<upperLim; i+=1) {
            temp = i%numsToCheck[j];
            if (temp === 0 && i!== 0) { wholeNum.push(i); }

        }
    }
    total = wholeNum.reduce(function(a,b) { return a+b });
    return total; //266333 (incorrect, double counts 15, 30, 45, etc.)
}());




// soln mk.II
//---
function multAB(numA, numB, upperLim){
    var i = 0,
        total = 0;

    for (i=0; i<upperLim; i+=1) {
        if (i % numA === 0 || i % numB ===0) {
            total += i;
        }
    }
    return total;
};

multAB(3,5,1000); // 233168





