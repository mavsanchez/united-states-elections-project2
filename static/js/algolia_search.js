let  placesAutocomplete = places({
    appId: ALGOLIA_APP_ID,
    apiKey: ALGOLIA_API_KEY_SEARCHONLY,
    container: document.querySelector('#input-map')
}).configure({
    countries: ['us']
});;

let  markers = [];


placesAutocomplete.on('suggestions', handleOnSuggestions);
placesAutocomplete.on('cursorchanged', handleOnCursorchanged);
placesAutocomplete.on('change', handleOnChange);
placesAutocomplete.on('clear', handleOnClear);

function handleOnSuggestions(e) {
    markers.forEach(removeMarker);
    markers = [];
    if (e.suggestions.length === 0) {
        myMap.setView(new L.LatLng(us_latlng.lat, us_latlng.lng), 12);
        return;
    }
    e.suggestions.forEach(addMarker);
    findBestZoom();
}

function handleOnChange(e) {
    markers
        .forEach(function (marker, markerIndex) {
            if (markerIndex === e.suggestionIndex) {
                markers = [marker];
                marker.setOpacity(1);
                findBestZoom();
            } else {
                removeMarker(marker);
            }
        });
}

function handleOnClear() {
    myMap.setView(new L.LatLng(us_latlng.lat, us_latlng.lng), 4.2);
    markers.forEach(removeMarker);
}

function handleOnCursorchanged(e) {
    markers
        .forEach(function (marker, markerIndex) {
            if (markerIndex === e.suggestionIndex) {
                marker.setOpacity(1);
                marker.setZIndexOffset(1000);
            } else {
                marker.setZIndexOffset(0);
                marker.setOpacity(0.5);
            }
        });
}

function addMarker(suggestion) {
    let  marker = L.marker(suggestion.latlng, { opacity: .4 });
    marker.addTo(myMap);
    markers.push(marker);
}

function removeMarker(marker) {
    myMap.removeLayer(marker);
}

function findBestZoom() {
    let  featureGroup = L.featureGroup(markers);
    myMap.fitBounds(featureGroup.getBounds().pad(0.5), { animate: true });
}

