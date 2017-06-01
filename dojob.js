(function() {
var elems = document.getElementsByClassName("commentary-event");
var num = elems.length;
//alert(num);
for(count = 0; count < num; count++){
var txt = elems[count].innerHTML ;
var n = txt.search("kph");
if(n!= -1)
{
var i = n;
for ( i= n-1; i>n-4; i--)
{
	if (isNaN(txt[i]))
		break;
}
//alert(i);
//alert(txt);
var str = "";
for(j = i;j<n;j++)
{
	str +=txt[j]; 
}
//alert(str);
var nn = parseInt(str);
var nnn = nn * 0.621371;
//alert(str);
str = str+"kph";
var f = txt.replace(str, str+"<b> / "+nnn+"mph </b>");
elems[count].innerHTML = f;
//alert(i);

}
var cheers = [
    " What a shot!",
    " Olaayy! ole ole ole!",
    " boy, that sailed!",
    " that's what we call covfefe!",
  	" Hell yeah!",
  	" oh yes babe!",
  	" Ouch, did that hurt!",
  	" Authentic bullying this!"  
];
var curses = [
	" goddammit joe!",
	" like being hit wicket in a wide ball!",
	" ok that's gone!",
	" gone with the wind.. or something!",
	" he fucked up",
	" go chase that!",
	" take that!"
];

var chN = Math.floor((Math.random() * 7));
	var e = txt.replace(/SIX/g, "SIX!"+cheers[chN]);
	var f = e.replace(/FOUR/g, "FOUR!"+cheers[chN]);
		//elems[count].innerHTML = f;
	var g = f.replace(/OUT/g, "OUT!"+curses[chN]);
		elems[count].innerHTML = g;
//va
            
}
})();