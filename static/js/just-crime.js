const map = L.map("map", {
    center: [37.7749, -122.4194],
    zoom: 13
});

// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
}).addTo(map);


const url = "https://data.sfgov.org/resource/cuks-n6tp.json?$limit=1000"


d3.json(url, function (response){
    let markers = []
    response.forEach(
        report => {
            const location = report.location;
            console.log(report.location)
            if (location) {
                markers.push([location.coordinates[1], location.coordinates[0]]);
            }
        });

    L.heatLayer(markers, {
        radius: 20,
        blur: 35
    }).addTo(map);   
});