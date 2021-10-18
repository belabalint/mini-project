chrome.action.onClicked.addListener(function(tab) {
    chrome.scripting.executeScript(
        {
            target: {tabId: tab.id},
            files: ["jquery-3.6.0.min.js", "./javascript/content-script.js"],
        }
    );
})