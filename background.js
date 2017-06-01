// this is the background code...
var the_tab_id = '';

var isExec = false;

// listen for our browerAction to be clicked
chrome.browserAction.onClicked.addListener(function (tab) {
	// for the current tab, inject the "inject.js" file & execute it
if(!isExec)
	{
		the_tab_id = tab.id;		
		isExec = true;

	    //alert(the_tab_id);
		chrome.tabs.executeScript(tab.ib, {file: 'dojob.js'});
	}
});

// listen for our browerAction to be reloaded

function my_listener(tabId, changeInfo, tab) {
    // If updated tab matches this one
    isExec = true;
    if (tabId == the_tab_id ) {
	    //alert(the_tab_id);
		chrome.tabs.executeScript(the_tab_id, {file: 'dojob.js'});
    }
        isExec = false;

}
chrome.tabs.onUpdated.addListener(my_listener);
