var cursorImage = document.getElementById("cursor-image");
var countryList = document.getElementsByClassName("country");

function moveCursor(event) {
    cursorImage.style.transform =
        "translate3d("
        + (event.clientX + 10) + "px," + (event.clientY + 20) + "px,0px"
}

for (let country of countryList) {
    country.addEventListener('mousemove', moveCursor)

    country.addEventListener('mouseenter', function (event) {
        for (let img of cursorImage.children) {
            if (img.dataset.country === event.target.dataset.country) {
                img.style.display = "block"
            } else {
                img.style.display = "none"
            }
        }
        moveCursor(event);
    });

    country.addEventListener('mouseleave', function (event) {
        const country = event.target.dataset.country;
        for (let img of cursorImage.children) {
            img.style.display = "none"
        }
        moveCursor(event);
    });
}
