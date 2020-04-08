
// Plotly.d3.csv('/static/data/california-results.csv', function(err, rows){

// function unpack(rows, key) {
//     return rows.map(function(row) {
//          return row[key]; 
//         });
// }

// var trace = [{
//     // geojson: geojsonData
//     type: 'choropleth',
//     // fips: unpack(rows, 'fips'),
//     locationmode: 'USA-states',
//     locations: unpack(rows, 'fips'),
//     z: unpack(rows, 'winner'),
//     text: unpack(rows, 'county_name'),
//     colorscale: [ [1, 'red'], [-1, 'blue'] ],
//     showlegend: false
// }];

// var layout = {
//     title: 'California Election Results',
//     geo:{
//         scope: 'usa',
//         center: {
//                     lat: 36,
//                     lon: -125
//                 },
//         projection: { 
//             scale: 2
//         }
//         ,
//         countrycolor: 'rgb(255, 255, 255)',
//         showland: true,
//         landcolor: 'rgb(217, 217, 217)',
//         showlakes: true,
//         showocean: true,
//         lakecolor: 'rgb(255, 255, 255)',
//         oceancolor: "#3399FF"
//     }
// };
// Plotly.newPlot("trend", trace, layout, {showLink: false});
// }); 

let geojsonloc = "/static/data/processed_ca.json";

function filterJSON(json, key, value) {
    console.log(json);
    let result = L.geoJson(json, {
        filter: function (feature, _) {
            return feature.properties.winner == 1;
        }
    });
    console.log(result);
    return result;
}

Plotly.d3.json(geojsonloc, function (geojsondata) {
    geojsondata_dem = filterJSON(geojsondata, 'winner', 1)
    
    let trace = [{
        type: 'scattermapbox',
        lat: [36],
        lon: [-121]
    }]

    let layout = {
        title: "California Counties Results",
        height: 600,
        width: 600,
        mapbox: {
            center: {
                lat: 36,
                lon: -121
            },
            style: 'light',
            zoom: 4,
            layers: [
                {
                    sourcetype: 'geojson',
                    source: geojsondata,
                    type: 'fill',
                    color: 'rgba(163,22,19,0.8)'
                }
            ]
        }
    }

    let key = { mapboxAccessToken: API_KEY }

        Plotly.newPlot('trend', trace , layout , key);
    });
