
var demoElement = document.getElementById("demo");

function getLocation() {
    demoElement.innerHTML = "Geolocation is not supported by this browser.";
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            demoElement.innerHTML = "Latitude: "
                + position.coords.latitude
                + "<br>Longitude: "
                + position.coords.longitude;
        });
    }
}
