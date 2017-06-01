// this is the background code...
var the_tab_id = '';
var time = 1;
var isExec = false;

// listen for our browerAction to be clicked
chrome.browserAction.onClicked.addListener(function (tab) {
	// for the current tab, inject the "inject.js" file & execute it
if(!isExec)
	{
		the_tab_id = tab.id;		
		isExec = true;
	    alert("Covfefe sass activated!\nAuthor: debmalya.01@gmail.com\nCopyLeft: you can change this any way you want!");
		chrome.tabs.executeScript(tab.ib, {file: 'dojob.js'});
	}
});

// listen for our browerAction to be reloaded

function my_listener(tabId, changeInfo, tab) {
    // If updated tab matches this one
    //isExec = true;

    //console.log("accepted state: " + changeinfo.status);
    if (tabId == the_tab_id) {
	    //alert(the_tab_id);
		chrome.tabs.executeScript(the_tab_id, {file: 'dojob.js'});
		//isExec = true;

    }
}
chrome.tabs.onUpdated.addListener(my_listener);
