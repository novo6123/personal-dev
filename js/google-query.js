// query Google AU from the browser console!
// returned object needs to be parsed...
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest

// also https://developers.google.com/custom-search/json-api/v1/using_rest

var gq = {
    "getRequest": function (queryString) {
        "use strict";

        var req = new XMLHttpRequest(),
            target = "https://www.google.com.au/search?num=20&safe=off&q=";

        req.onload = (function (d) {
            console.log(d.currentTarget.responseText);
        });

        req.open("get", target+queryString, true);
        req.send();
    },

    "query": function (queryString) {
        "use strict";

        this.getRequest(queryString);
        return this;
    }
};

// gq.query("hello world");
// I dont know what to do with this...
