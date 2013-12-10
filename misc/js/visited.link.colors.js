/*
    @author:    twitter.com/mrnovo6123
    @date:      2013.Dec.10

    In a post 2010 browser, this script will return NO links, as THE BROWSER WILL LIE to the selector and report that all links are unvisited

    If the condition were changed to
        if  (linkCol.toString() === col.normal) {

    It should return all links.

    For further reading:
    http://dbaron.org/mozilla/visited-privacy
    https://developer.mozilla.org/en-US/docs/Web/CSS/Privacy_and_the_:visited_selector
    http://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/
*/

(function() {
    var i = 0,
        links = document.links,
        col = {
            visited : "rgb(85, 26, 139)", // true visited color,
            normal : "rgb(0, 0, 238)"
        },
        linkCol = '',
        count = 0;

    for (var i = 0; i < links.length; ++i) {
        linkCol = window.getComputedStyle(links[i], 'visited').color;

        if  (linkCol.toString() === col.visited) {
            console.log(links[i]);
            count+=1;
        }
    }
    return count;
}());
