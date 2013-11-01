/*
    Sum square difference
    ---
    http://projecteuler.net/problem=6

    Problem 6
    The sum of the squares of the first ten natural numbers is,

    12 + 22 + ... + 102 = 385
    The square of the sum of the first ten natural numbers is,

    (1 + 2 + ... + 10)2 = 552 = 3025
    Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

    Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/


// My soln
//---
var myFunct = {
    sumSq : function(lim) {
        var i = 0,
            sum = 0;

        for (; i <= lim; i+=1) {
            sum += i*i;
        }
        return sum;
    },
    sqSum : function(lim) {
        var i = 0,
            sum = 0;

        for (; i <= lim; i+=1) {
            sum += i;
        }
        sum = sum*sum;
        return sum;
    }
};

myFunct.sqSum(100) - myFunct.sumSq(100); // 25164150

