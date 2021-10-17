alert("working");
let title_texts = [];
let title_links = [];
let title_elements = document.querySelectorAll('a[id="video-title-link"]');
for (var i = 0; i < title_elements.length; i++) {
    let currentitle = title_elements[i];
    let text = currentitle.attributes.getNamedItem("aria-label").value;
    title_texts.push(text);
}
let image_elements = document.querySelectorAll('') 
for (var i = 0; i < title_texts.length; i++) {
    alert(title_texts.length);
}

