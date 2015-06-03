/*
 * @desc anonymous debounce function
 * source: http://davidwalsh.name/javascript-debounce-function
 */
(function () {
    "use strict";

    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    var RESIZE_INT = 250,
    
        resizeApp = debounce(function() {
            if (console) {
                console.log("run fn with debouncing applied");
                console.log(window.innerWidth);
            }

        }, RESIZE_INT);

    window.addEventListener('resize', resizeApp);

}());
