// console.log(process.argv);

// returns
// $ node 02-program.js 1 2 3
/*
    ['node',
     '/Users/.../02-program.js',
     '1',
     '2',
     '3']
*/

// first elem always 'node'
// args array = process.argv.splice(2)

var i = 0,
    subArray = process.argv.splice(2);
    len = subArray.length,
    total = 0;

for (; i < len; i+=1) {
    total += parseInt(subArray[i]);
}
console.log(total);
