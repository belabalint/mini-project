var objectstring = 'ytd-rich-item-renderer, ytd-playlist-panel-video-renderer, ytd-compact-video-renderer, ytd-video-renderer, ytd-playlist-renderer, ytd-grid-video-renderer, ytd-channel-video-player-renderer';
var observer = new MutationObserver(function (mutations) {
    var title_elements = document.querySelectorAll('[id="video-title"]');
    for (var i = 0; i < title_elements.length; i++) {
        var currentelement = title_elements[i];
        var text = currentelement.innerText;
        if (text[0] !== 'a' && text[0] !== 'A') {
            $(currentelement).closest(objectstring).find('img').hide();
        }
    }
});
observer.observe(document, { subtree: true, childList: true });
