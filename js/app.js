const defaultMap = createMapIn("defaultMap");
const markerMap = createMapIn("markerMap");
const lineMap = createMapIn("lineMap");
const markersAndLineMap = createMapIn("markersAndLineMap");

makeMapsReadyForSelectedUser();

function makeMapsReadyForSelectedUser() {
  const userName = getSelectedUserName();

  clearMap(markerMap);
  clearMap(lineMap);
  clearMap(markersAndLineMap);

  $.getJSON(userName + "_data.json", function (coordinates) {
    addMarkerToMap(markerMap, coordinates);
    addLineToMap(lineMap, coordinates);
    addLineAndMarkersToMap(markersAndLineMap, coordinates);
  });
}

function clearMap(map) {
  map.eachLayer(function (layer) {
    if (layer.feature) layer.remove();
  });
}

function getSelectedUserName() {
  return document.getElementById("userSelect").value;
}

function createMapIn(tagId) {
  const map = L.map(tagId).setView([45.554383, -73.46658], 10);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
  }).addTo(map);
  return map;
}

function addLineAndMarkersToMap(map, coordinates) {
  addMarkerToMap(map, coordinates);
  addLineToMap(map, coordinates);
}

function addMarkerToMap(map, coordinates) {
  var jsonMarker = [];
  coordinates.forEach(function (point) {
    var marker = {
      type: "Feature",
      properties: point,
      geometry: {
        type: "Point",
        coordinates: [point.longitud, point.latitud],
      },
    };
    jsonMarker.push(marker);
  });

  var geoJson = { type: "FeatureCollection", features: jsonMarker };
  L.geoJson(geoJson).addTo(map);
}

function addLineToMap(map, coordinates) {
  var line = {
    type: "Feature",
    properties: {},
    geometry: {
      type: "LineString",
      coordinates: [],
    },
  };

  coordinates.forEach(function (point) {
    line.geometry.coordinates.push([point.longitud, point.latitud]);
  });

  var geoJsonB = { type: "FeatureCollection", features: [line] };
  L.geoJson(geoJsonB).addTo(map);
}

observeMap(defaultMap, "hometab");
observeMap(markerMap, "markertab");
observeMap(lineMap, "linetab");
observeMap(markersAndLineMap, "markerlinetab");

function observeMap(map, tabId) {
  var tab = document.getElementById(tabId);
  var observer = new MutationObserver(function () {
    if (tab.style.display != "none") {
      map.invalidateSize();
    }
  });
  observer.observe(tab, { attributes: true });
}
