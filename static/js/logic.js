// Creating map object
var myMap = L.map("map", {
  center: [37.8, -96.9],
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
// const geoData = "static/data/Median_Household_Income_2016.geojson";
// const geoData = "static/data/gz_2010_us_050_00_500k.json";
const geoData = "static/data/processed.json";

whatOp = d3.scaleLinear()
  .domain([0, 100]) // unit: km
  .range([.4, 1])


// var scaleDem = d3.scaleLinear()
//   .domain([0, 100])
//   .range(['#ddd', 'blue']);
// var linearScale = d3.scaleLinear()
//   .domain([-10, 0, 10])
//   .range(['red', '#ddd', 'blue']);
// linearScale(-10);  // returns "rgb(255, 0, 0)"
// linearScale(0);    // returns "rgb(221, 221, 221)"
// linearScale(5);    // returns "rgb(111, 111, 238)"


let geojson;

// Grab data with d3
d3.json(geoData, function (response){
  console.log(response);
  let colorUse;
  // Create a new choropleth layer
  geojson = L.choropleth(response,{
    // Define what  property in the features to use
    // valueProperty: 'percentwon_dem',
    
    // valueProperty: function (feature) { colorUse = feature.properties.winner; console.log('one',colorUse);  return (feature.properties.winner == "blue") ? feature.properties.percentwon_dem : feature.properties.percentwon_rep; },//'percentwon_dem',
    // Set color scale
    // scale: function (feature) { return (feature.properties.winner == "blue") ? new Array("white", "blue") : new Array("white", "red"); },
    // scale: ["white", "red"],
    // Number of breaks in step range
    // steps: 100,
    // q for quartile, e for equidistant, k for k-means
    // mode: 'q',
    // style: {
    //   color: '#fff',
    //   weight: 1,
    //   fillOpacity: 0.5
    // },
    style: function (feature) {
      switch (feature.properties.winner) {
        case "red":
          return {
            fillColor: "#800000", 
            fillOpacity:  whatOp(Math.abs(feature.properties.percentwon_rep-feature.properties.percentwon_dem)),   //((feature.properties.percentwon_rep/100)+.1)-.2,
            color: 'white',
            weight: 0.5
          }
        default:
          return {
            fillColor: "#000080",
            fillOpacity:  whatOp(Math.abs(feature.properties.percentwon_rep-feature.properties.percentwon_dem)),  //((feature.properties.percentwon_dem / 100)+.1)-.2,
            color: 'white',
            weight: 0.5
          }
      }
      },
    // Binding a pop-up to each layer
    onEachFeature: function (feature, layer) {
      layer.on({
        // When a user's mouse touches a map feature, the mouseover event calls this function, that feature's opacity changes to 90% so that it stands out
        mouseover: function (event) {
          layer = event.target;
          layer.setStyle({
            color: 'yellow',
            weight: 2
          });
        },
        // When the cursor no longer hovers over a map feature - when the mouseout event occurs - the feature's opacity reverts back to 50%
        mouseout: function (event) {
          layer = event.target;
          layer.setStyle({
            color: 'white',
            weight: 0.5
          });
        }
      });

      // properties = ['year', 'state_po', 'county', 'candidate', 'party', 'candidatevotes', 'totalvotes', 'percentwon']
      // layer.bindPopup(`<h6>${feature.properties.county}</h6>
      //                  <table class="table"> <tr> <th scope="col">Candidate</th> <th scope="col">Party</th> <th scope="col">Won</th> </tr> <tr> <th scope="row">${feature.properties.candidate_dem || 0}</th> <td>${feature.properties.party_dem || 0}</td> <td>${feature.properties.percentwon_dem || 0}%</td> </tr><tr> <th scope="row">${feature.properties.candidate_rep || 0}</th> <td>${feature.properties.party_rep || 0}</td> <td>${feature.properties.percentwon_rep || 0}%</td> </tr> </table>`
      //                  )
      // Removed the line below for faster rendering. 
      //  <table class="table table-condensed mb-0 pb-0"><tr> <th>Candidate</th> <th>Party</th> <th>Won</th> </tr> <tr> <td scope="row">${feature.properties.candidate_dem || 0}</td> <td>${feature.properties.party_dem || 0}</td> <td>${feature.properties.percentwon_dem || 0}%</td> </tr><tr> <td scope="row">${feature.properties.candidate_rep || 0}</td> <td>${feature.properties.party_rep || 0}</td> <td>${feature.properties.percentwon_rep || 0}%</td></tr></table>`
      layer.bindTooltip(`<h6>${feature.properties.county}, ${feature.properties.state_po} </h6>
                          Total votes: ${feature.properties.totalvotes_dem.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                       <table class="table table-condensed mb-0 pb-0"><tr> <th>Candidate</th> <th>Party</th> <th>Won</th> </tr> <tr> <td scope="row">Hillary Clintron</td> <td>Democrat</td> <td>${feature.properties.percentwon_dem || 0}%</td> </tr><tr> <td scope="row">Donal Trump</td> <td>Republican</td> <td>${feature.properties.percentwon_rep || 0}%</td></tr></table>`
                       )
    }     
  }).addTo(myMap);



});