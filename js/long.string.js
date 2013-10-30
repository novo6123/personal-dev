function longestString(i) {

    // i will be an array.
    // return the longest string in the array
    var longest = '';
    for (var j = 0; j < i.length; j+=1) {
        if (i[j].length >= longest.length) {
            if (typeof(i[j]) === 'string') longest = i[j];
        }
    }
    return longest;
}




function arraySum(i) {
    var sum = 0;

    for (var j=0; j<i.length; j+=1) {
        if (typeof(i[j]) === 'number' && (i[j]%1===0)) {
            sum += i[j];
        }
        else if (typeof(i[j]) === 'object') {
            i = i.concat(i[j]);
            console.log( i );
        }
    }
    return sum;

}

arraySum([[1,2,3],4,5]);
