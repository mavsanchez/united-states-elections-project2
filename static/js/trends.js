
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

let geojsonloc1 = "/static/data/geojson1a.json";
let geojsonloc2 = "/static/data/geojson1b.json";
let geojsonloc3 = "/static/data/geojson2a.json";
let geojsonloc4 = "/static/data/geojson2b.json";
let geojsonloc5 = "/static/data/geojson3a.json";
let geojsonloc6 = "/static/data/geojson3b.json";
let geojsonloc7 = "/static/data/geojson4a.json";
let geojsonloc8 = "/static/data/geojson4b.json";


// Plotly.d3.json(geojsonloc, function (geojsondata) {
//     geojsondata_dem = filterJSON(geojsondata, 'winner', 1)
    
//     let trace = [{
//         type: 'scattermapbox',
//         lat: [36],
//         lon: [-121]
//     }]

//     let layout = {
//         title: "California Counties Results",
//         height: 600,
//         width: 600,
//         mapbox: {
//             center: {
//                 lat: 36,
//                 lon: -121
//             },
//             style: 'light',
//             zoom: 4,
//             layers: [
//                 {
//                     sourcetype: 'geojson',
//                     source: geojsondata,
//                     type: 'fill',
//                     color: 'rgba(163,22,19,0.8)'
//                 }
//             ]
//         }
//     }

//     let key = { mapboxAccessToken: API_KEY }

//         Plotly.newPlot('trend', trace , layout , key);
//     });

Plotly.d3.json(geojsonloc2, function (redjson) {

    Plotly.d3.json(geojsonloc1, function (bluejson) {

        Plotly.newPlot('trend1', [{
            type: 'scattermapbox',
            lat: [36],
            lon: [-121]
        }], {
            title: "California Counties 2004 Results",
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
                        source: redjson,
                        type: 'fill',
                        color: 'rgba(163,22,19,0.8)'
                    },
                    {
                        sourcetype: 'geojson',
                        source: bluejson,
                        type: 'fill',
                        color: 'rgba(40,0,113,0.8)'
                    },
                ]
            }
        }, {
            mapboxAccessToken: API_KEY
        });
    });

});


Plotly.d3.json(geojsonloc4, function (redjson) {

    Plotly.d3.json(geojsonloc3, function (bluejson) {

        Plotly.newPlot('trend2', [{
            type: 'scattermapbox',
            lat: [36],
            lon: [-121]
        }], {
            title: "California Counties 2008 Results",
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
                        source: redjson,
                        type: 'fill',
                        color: 'rgba(163,22,19,0.8)'
                    },
                    {
                        sourcetype: 'geojson',
                        source: bluejson,
                        type: 'fill',
                        color: 'rgba(40,0,113,0.8)'
                    },
                ]
            }
        }, {
            mapboxAccessToken: API_KEY
        });
    });

});



Plotly.d3.json(geojsonloc6, function (redjson) {

    Plotly.d3.json(geojsonloc5, function (bluejson) {

        Plotly.newPlot('trend3', [{
            type: 'scattermapbox',
            lat: [36],
            lon: [-121]
        }], {
            title: "California Counties 2012 Results",
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
                        source: redjson,
                        type: 'fill',
                        color: 'rgba(163,22,19,0.8)'
                    },
                    {
                        sourcetype: 'geojson',
                        source: bluejson,
                        type: 'fill',
                        color: 'rgba(40,0,113,0.8)'
                    },
                ]
            }
        }, {
            mapboxAccessToken: API_KEY
        });
    });

});


Plotly.d3.json(geojsonloc8, function (redjson) {

    Plotly.d3.json(geojsonloc7, function (bluejson) {

        Plotly.newPlot('trend4', [{
            type: 'scattermapbox',
            lat: [36],
            lon: [-121]
        }], {
            title: "California Counties 2016 Results",
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
                        source: redjson,
                        type: 'fill',
                        color: 'rgba(163,22,19,0.8)'
                    },
                    {
                        sourcetype: 'geojson',
                        source: bluejson,
                        type: 'fill',
                        color: 'rgba(40,0,113,0.8)'
                    },
                ]
            }
        }, {
            mapboxAccessToken: API_KEY
        });
    });

});