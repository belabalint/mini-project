//find something with id video title
//if it's a span, do x, if it's an a tag, do y
let title_elements = document.querySelectorAll('[id="video-title"]');
for (var i = 0; i < title_elements.length; i++) {
    let currentelement = title_elements[i];
    if (currentelement.tagName === 'SPAN') {
        //adding megyünk felfele, amedding nem ytd-playlist-renderer
        let text = (currentelement as any).innerText;
        if (text[0] === 'A' || text[0] === 'a') {
            while (currentelement.tagName !== 'YTD-PLAYLIST-RENDERER') {
                currentelement = currentelement.parentElement;
            }
            while (currentelement.tagName !== "IMG") {
                currentelement = currentelement.firstElementChild;
            }
            (currentelement as any).style.display = "none";
        }
        //addig le, amig nem img
    } else if (currentelement.tagName === 'A') {
        let text = currentelement.attributes.getNamedItem('aria-label').value;
        if (text[0] === 'A' || text[0] === 'a') {
            while (currentelement.attributes.item(0).value !== "dismissible") {
                currentelement = currentelement.parentElement;
            }
            currentelement = currentelement.firstElementChild;
            currentelement = currentelement.firstElementChild;
            (currentelement as any).style.display = "none";
        }
    } 
}