alert("working");
var title_texts = [];
var title_links = [];
var title_elements = document.querySelectorAll('a[id="video-title-link"]');
for (var i = 0; i < title_elements.length; i++) {
    var currentitle = title_elements[i];
    var text = currentitle.attributes.getNamedItem("aria-label").value;
    title_texts.push(text);
}
var image_elements = document.querySelectorAll('');
for (var i = 0; i < title_texts.length; i++) {
    alert(title_texts.length);
}
