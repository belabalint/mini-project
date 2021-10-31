let objectstring = 'ytd-rich-item-renderer, ytd-playlist-panel-video-renderer, ytd-compact-video-renderer, ytd-video-renderer, ytd-playlist-renderer, ytd-grid-video-renderer, ytd-channel-video-player-renderer';

let observer = new MutationObserver(function(mutations) {
    let title_elements = document.querySelectorAll('[id="video-title"]');
    for (var i = 0; i < title_elements.length; i++) {
        let currentelement = title_elements[i];
        let text = (currentelement as any).innerText;
        if (text[0] !== 'a' && text[0] !== 'A') {
            $(currentelement).closest(objectstring).find('img').hide();
        }
    }
});
observer.observe(document,{subtree:true, childList:true});