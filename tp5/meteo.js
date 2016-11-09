window.onload = function() {    
document.getElementById("searchCity").addEventListener("submit", function(event){event.preventDefault(); 
// pour annuler le rechargement de la page  
 var city = document.getElementById("city").value;
 searchCity(city);




});

}
function searchCity(_city){
    console.log('searchCity','Hello from '+_city);
    //A compléter dans la suite du TP
    
    var request =   new XMLHttpRequest();
    request.open('GET','http://api.openweathermap.org/data/2.5/weather?q='+_city+'&appid=fa89ffeb6a2c9bc0571f85cd5a3d232c',true);
    request.onload = function() {
        if (request.status >=200 && request.status <400) {
            // Success!
            var responseJSON = JSON.parse(request.responseText);
            console.log(responseJSON);
            document.getElementById("result").innerHTML = responseJSON.name + " " + responseJSON.main.temp +" K°";
            //VOTRE CODE JS pour afficher les données météo sur votre page
            // en mettant à jour la DIV “result”
        } else {
            // We reached our target server, but it returned an error
        }
    };
    
    request.onerror = function() {
            // There was a connection error of some sort
    };
    
    
    request.send();
}


    
    
function searchLatLng(_lat, _lng){
    console.log(searchLatLng,'Hello from '+_lat+','+_lng);
    //A compléter dans la suite du TP
}

document.getElementById("gps").addEventListener("click", function(){
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        city.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;

    var img_url = "https://maps.googleapis.com/maps/api/staticmap?markers=latitude.longitude&size=640x400&zoom=5";
    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            city.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            city.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            city.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            city.innerHTML = "An unknown error occurred."
            break;
    }
}
});
}

