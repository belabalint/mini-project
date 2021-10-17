chrome.action.onClicked.addListener(function(tab) {
    chrome.scripting.executeScript(
        {
            target: {tabId: tab.id},
            files: ["./javascript/content-script.js"],
        }
    );
})