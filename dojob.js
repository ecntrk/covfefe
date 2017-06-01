
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
var f = txt.replace(/FOUR/g, "FOUR!");
elems[count].innerHTML = f;
            }
})();