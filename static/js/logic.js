let yearButton08 = d3.select("#results08");
let yearButton12 = d3.select("#results12");
let yearButton16 = d3.select("#results16");

// Creating map object

let us_latlng = {
  lat: 37.8,
  lng: -96.9
};

let myMap = L.map("map", {
  center: [us_latlng.lat, us_latlng.lng],
  zoom: 4.2
});

// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 12,
  // id: "mapbox.streets",
  // id: "mapbox.streets-basic",
  id: "mapbox.light",
  accessToken: API_KEY
}).addTo(myMap);

// Load in GeoJson data
const geoData = "https://raw.githubusercontent.com/mavsanchez/united-states-elections-project2/master/static/data/processed.json"; //For production
// const geoData = "static/data/processed.json"; For QA

fill_opacity = d3.scaleLinear()
  .domain([0, 100])
  .range([.4, 1])
let geojsonLayer = null;

function updateMap(event){
    let selected_year = d3.event.target.value || 2016;
    
      // Grab data with d3
      d3.json(geoData, function (response) {
        // For initial clearing
        if (geojsonLayer !== null) { myMap.removeLayer(geojsonLayer); }

        // Create a new choropleth layer
        geojsonLayer = L.choropleth(response, {
          filter: function (feature) {
            if (feature.properties.year === parseInt(selected_year)){ return true; }
          },
          style: function (feature) {
            switch (feature.properties.winner) {
              case "red":
                return {
                  fillColor: "#800000",
                  fillOpacity: fill_opacity(Math.abs(feature.properties.percentwon_rep - feature.properties.percentwon_dem)),
                  color: 'white',
                  weight: 0.5
                }
              default:
                return {
                  fillColor: "#000080",
                  fillOpacity: fill_opacity(Math.abs(feature.properties.percentwon_rep - feature.properties.percentwon_dem)),
                  color: 'white',
                  weight: 0.5
                }
            }
          },
          // Binding a pop-up to each layer
          onEachFeature: function (feature, layer) {
            layer.on({
            mouseover: function (event) {
                layer = event.target;
                layer.setStyle({
                  color: 'yellow',
                  weight: 2
                });
              },
              mouseout: function (event) {
                layer = event.target;
                layer.setStyle({
                  color: 'white',
                  weight: 0.5
                });
              }
            });

          layer.bindTooltip(
            `<h6>${feature.properties.county}, ${feature.properties.state_po} (${feature.properties.year}) </h6>
            <table class="table mb-0">
            <thead>
            <tr><th>Candidate</th><th>Party</th><th>Won</th></tr>
            </thead>
            <tbody>
            <tr><td>${feature.properties.candidate_dem}</td> <td>${feature.properties.party_dem}</td> <td>${feature.properties.percentwon_dem || 0}%</td></tr>
            <tr><td>${feature.properties.candidate_rep}</td> <td>${feature.properties.party_rep}</td> <td>${feature.properties.percentwon_rep || 0}%</td></tr>
            </tbody>
            </table>
            Total votes ${feature.properties.totalvotes_dem.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} 
            with ${Math.abs(feature.properties.percentwon_rep - feature.properties.percentwon_dem).toFixed(2)}%  margin
            `
            )
          }
        }).addTo(myMap);
      }
      );
    } //main function


yearButton08.on('click', updateMap);
yearButton12.on('click', updateMap);
yearButton16.on('click', updateMap);
d3.select(window).on("load", updateMap); //defaults to 2016