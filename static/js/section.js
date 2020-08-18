var cursorImage = document.getElementById("cursor-image");
var countryList = document.getElementsByClassName("country");

for (let country of countryList) {
    country.addEventListener('mousemove', function (event) {
        cursorImage.style.transform =
            "translate3d("
            + (event.clientX + 10) + "px," + (event.clientY + 20) + "px,0px"
    })

    country.addEventListener('mouseenter', function (event) {
        cursorImage.style.display = "block";
    });

    country.addEventListener('mouseleave', function (event) {
        cursorImage.style.display = "none";
    });


}


