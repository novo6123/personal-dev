// 2013.October.11
// @mrnovo6123

// Remove all letters which aren't an uppercase or lowercase letter from this list: "L","O","E","H"

var temp = ['L','O','E','H'],

    myfunct = function(myval) {
        if (typeof(myval) !== 'string') {
            myval = myval.toString();
        }
        return myval.match(/[A-Z]|[a-z]+/g);
    };

myfunct(temp);
