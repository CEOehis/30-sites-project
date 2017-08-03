$(document).ready(function(){
    var userLat;
    var userLong;
    var host = "https://api.darksky.net/forecast/e0477ed58041c8232d9f57dc2652536d/";
    var queryUrl;

    doloc();

    function doloc() {
        //check if users browser supports geolocation api
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, showError, options);
        } else {
            alert("Couldn't quite get your location");
        }

        //success callback
        function success(position) {
            userLat = position.coords.latitude;
            userLong = position.coords.longitude;
            queryUrl = host + userLat + "," + userLong;
        }
        //error handler
        function showError(positionError) {
            switch (positionError.code) {
                case positionError.PERMISION_DENIED:
                    alert("User denied location request");
                    break;
                case positionError.POSITION_UNAVAILABLE:
                    alert("Location information currently unavailable");
                    break;
                case positionError.TIMEOUT:
                    alert("request timeout");
            }
        }
        //option (object) settings for getCurrentPosition
        var options = {
            enableHighAccuracy: false,
            timeout: Infinity,
            maximumAge: 0,
        }
    }
    
});


