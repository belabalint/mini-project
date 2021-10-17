alert("working");
let title_texts = [];
let title_links = [];
let title_elements = document.querySelectorAll('[id="video-title"]');
for (var i = 0; i < title_elements.length; i++) {
    let currentelement = title_elements[i];
    let text = currentelement.attributes.getNamedItem("aria-label").value;
    if (text[0] === 'A' || text[0] === 'a') {
        //find rich item renderer parent and replace that obj
        //(currentelement as any).style.display = "none";
        while (currentelement.attributes.item(0).value != 'dismissible') {
            currentelement = currentelement.parentElement;
        }
        currentelement = currentelement.firstElementChild;
        currentelement = currentelement.firstElementChild;
        (currentelement as any).style.display = "none";
    }
}

/*for (var i = 0; i < title_texts.length; i++) {
    alert(title_texts[i]);
}*/

