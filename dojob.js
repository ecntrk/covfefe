(function() {
var elems = document.getElementsByClassName("commentary-event");
if(elems!= null) //so this script doesn't halt midway!
{
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
		var e = txt.replace(str, str+"<b> / "+nnn+"mph </b>");
		elems[count].innerHTML = e;
		//alert(i);

	}
	else
	{
		var overs = elems[count].getElementsByClassName("commentary-overs")[0];
		if (overs!= null)
		{
		var ballt = overs.innerHTML; 
		var ballN = overs.innerHTML.length;
		var ball = parseInt(ballt[ballN-1])-1;
		//alert(ballt);

		var cheers = [
		    " Welcome mate!",
		    " Olaayy! ole ole ole!",
		    " boy, that sailed!",
		  	" Hell yeah!",
		  	" oh yes babe!",
		  	" Authentic bullying this!"  
		];
		var curses = [
			" goddammit joe!",
			" like being hit wicket on a wide ball!",
			" ok that's gone!",
			" gone with the wind.. or something!",
		  	" Ouch, did that hurt!",
			" go chase that!"
		];

		//var chN = Math.floor((Math.random() * 7));
		var f = txt.replace(/SIX/g, "SIX!"+cheers[ball]);
		var g = f.replace(/FOUR/g, "FOUR!"+cheers[ball]);
			//elems[count].innerHTML = f;
		var h = g.replace(/OUT/g, "OUT!"+curses[ball]);
			elems[count].innerHTML = h;
		}

 	}           
}
}
})();