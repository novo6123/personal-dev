javascript:var s = document.createElement('script'); s.type='text/javascript'; document.body.appendChild(s); s.src='https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js'; void(0);



/* WORKING :) */
/* 
ʘ‿ʘ
ಠ ಠ
*/
// replace all instances of 'the' with googly eyes
var i = 0,
	NEW_STR = ' ಠ ಠ ',
	str = $('*'),
	strLen = str.length;
	
for ( ; i< strLen; i++ ) {
	str[i].innerHTML = str[i].innerHTML.replace(/ the /gi, NEW_STR );
}



// remove all 'filler' words like:
// of, the, a, to, is, it's, in...
var i = 0,
	NEW_STR = '\r',
	str = $('*'),
	strLen = str.length;
	
for ( ; i< strLen; i++ ) {
	str[i].innerHTML = str[i].innerHTML.replace(/ of /gi, NEW_STR );
	str[i].innerHTML = str[i].innerHTML.replace(/ the /gi, NEW_STR );
	str[i].innerHTML = str[i].innerHTML.replace(/ a /gi, NEW_STR );
	str[i].innerHTML = str[i].innerHTML.replace(/ to /gi, NEW_STR );
	str[i].innerHTML = str[i].innerHTML.replace(/ is /gi, NEW_STR );
	str[i].innerHTML = str[i].innerHTML.replace(/ it /gi, NEW_STR );
	str[i].innerHTML = str[i].innerHTML.replace(/ 's /gi, NEW_STR );
	str[i].innerHTML = str[i].innerHTML.replace(/ in /gi, NEW_STR );
	str[i].innerHTML = str[i].innerHTML.replace(/ as /gi, NEW_STR );
	str[i].innerHTML = str[i].innerHTML.replace(/ uh /gi, NEW_STR );
	str[i].innerHTML = str[i].innerHTML.replace(/ be /gi, NEW_STR );

}


// 'shizzolate' mode
// replace strings ending with '-ure' with '-izzle'
// insert 'fo real' after every 17th word
// insert 'gnome sayin?' after every 23rd word




// 'verbose'/'verbatim' mode
// incorporate YUI chart in a layer with the top 12 most common words on the page




// find all instances of 'o' char and replace with skeptical eye char
// also counts number of 'o' chars
var Y = YUI().use('node', function(Y) {});

var i = 0,
	j = 0,
	ycount = 0,
	NEW_STR = 'ಠ',
	str = Y.all('body')._nodes,
	ptext = Y.all('p')._nodes,
	pLen = ptext.length,
	strLen = str.length;
	
	str = str.concat( ptext );
	
for ( ; i< strLen; i+=1 ) {
	if (str[i].innerText.match(/o/gi)) {
		ycount += str[i].innerText.match(/o/gi).length;
	}

	str[i].innerText = str[i].innerText.replace(/o/gi, NEW_STR );
}

console.log( ycount );











