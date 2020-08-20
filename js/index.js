var slideIndex = 1;
var slides = document.getElementsByClassName("slide");
var cursorTexts = document.getElementsByClassName("cursor-text");
var slideshowContainer = document.getElementById("slideshow-container");
var cursor = document.getElementById("cursor");
var cursorImage = document.getElementById("cursor-image");
var countryList = document.getElementById("country-list");

function show(items, n) {
    for (var i = 0; i < items.length; i++) {
        if (i == n - 1) {
            items[i].style.display = "block";
        } else {
            items[i].style.display = "none";
        }
    }
}

slideshowContainer.addEventListener('click', function () {
    if ((slideIndex + 1) >= (slides.length + 1)) {
        slideIndex = 1;
    } else {
        slideIndex = slideIndex + 1;
    }

    show(slides, slideIndex);
    show(cursorTexts, slideIndex);
});

slideshowContainer.addEventListener('mousemove', function (event) {
    cursor.style.transform =
        "translate3d("
        + event.clientX + "px,"
        + event.clientY + "px,0px)"
});

slideshowContainer.addEventListener('mouseenter', function (event) {
    cursor.style.display = "block";
});

slideshowContainer.addEventListener('mouseleave', function (event) {
    cursor.style.display = "none";
});

show(slides, slideIndex);
show(cursorTexts, slideIndex);

