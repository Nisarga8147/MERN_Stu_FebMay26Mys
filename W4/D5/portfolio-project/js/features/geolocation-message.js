function initGeolocationMessage() {
    const locationMessage = document.getElementById("location-message");

    if (!locationMessage) return;

    if (!navigator.geolocation) {
        locationMessage.textContent = "Geolocation is not supported by your browser.";
        return;
    }

    navigator.geolocation.getCurrentPosition(
        function (position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
                .then(res => res.json())
                .then(data => {
                    const city =
                        data.address.city ||
                        data.address.town ||
                        data.address.village ||
                        "your area";

                    locationMessage.textContent = `📍 You are browsing from ${city}`;
                })
                .catch(() => {
                    locationMessage.textContent = "📍 Location detected (unable to fetch city)";
                });
        },

        function (error) {
    
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    locationMessage.textContent = "Permission denied for location access.";
                    break;
                case error.POSITION_UNAVAILABLE:
                    locationMessage.textContent = "Location information unavailable.";
                    break;
                case error.TIMEOUT:
                    locationMessage.textContent = "Location request timed out.";
                    break;
                default:
                    locationMessage.textContent = "An unknown error occurred.";
            }
        }
    );
}

document.addEventListener("DOMContentLoaded", initGeolocationMessage);