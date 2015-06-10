// learnyounode
/*
    MY FIRST I/O!
    Exercise 3 of 13

    Write a program that uses a single synchronous filesystem operation to read a file and print the number of newlines (\n) it contains to the console (stdout), similar to running cat file | wc -l.

    The full path to the file to read will be provided as the first command-line argument. You do not need to make your own test file.

*/

// console.log(process.argv);

// my solution:
var fs = require("fs"),
    str = fs.readFileSync(process.argv[2]).toString();

//console.log(str); // <Buffer...
console.log(str.split("\n").length - 1);



// official solution
/*
    var fs = require('fs')

    var contents = fs.readFileSync(process.argv[2])
    var lines = contents.toString().split('\n').length - 1
    console.log(lines)

    // note you can avoid the .toString() by passing 'utf8' as the
    // second argument to readFileSync, then you'll get a String!
    //
    // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
*/
