// Creating map object
var myMap = L.map("map", {
  center: [37.8, -96.9],
  zoom: 4.2
});


// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

// Load in GeoJson data
// const geoData = "static/data/Median_Household_Income_2016.geojson";
// const geoData = "static/data/gz_2010_us_050_00_500k.json";
const geoData = "static/data/processed.json";

let geojson;

// Grab data with d3
d3.json(geoData, function (reponse){
  console.log(reponse);
  // Create a new choropleth layer
  geojson = L.choropleth(reponse,{
    // Define what  property in the features to use
    valueProperty: 'percentwon',
    // Set color scale
    scale: ['blue', 'red'],
    // Number of breaks in step range
    steps: 10,
    // q for quartile, e for equidistant, k for k-means
    mode: 'q',
    style: {
      color: '#fff',
      weight: 1,
      fillOpacity: 0.5
    },
    // Binding a pop-up to each layer
    onEachFeature: function (feature, layer) {
      // properties = ['year', 'state_po', 'county', 'candidate', 'party', 'candidatevotes', 'totalvotes', 'percentwon']
      layer.bindPopup(`STATE: ${feature.properties.state_po} <br \> Candidate won: $${feature.properties.candidate || 0}`)
    }     
  }).addTo(myMap);

  // Set up the legend
  // let legend = L.control({ position: "bottomright" });
  // legend.onAdd = function () {
  //   let div = L.DomUtil.create('div', 'info legend');
  //   let limits = geojson.options.limits;
  //   let colors = geojson.options.colors;
  //   let labels = [];
    
  //   // Add min & max
  //   let legendInfo = `<h1>Median Income</h1>
  //     <div class="labels">
  //       <div class="min">${limits[0]}</div>
  //       <div class="max">${limits[limits.length - 1]}</div>
  //     </div>`;
  //   div.innerHTML = legendInfo;

  //   limits.forEach(function(limit, index) {
  //     labels.push(`<li style="background-color: ${colors[index]}"></li>`)
  //   });

  //   div.innerHTML += `<ul> ${labels.join("")}</ul>`
  //   return div;

  // }

  // // Adding legend to the map
  // legend.addTo(myMap);

});