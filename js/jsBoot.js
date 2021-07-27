var map1 = L.map('mapid1').setView([45.554383, -73.466580], 10);
	 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map1);

var map2 = L.map('mapid2').setView([45.554383, -73.466580], 10);
	 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map2);

		var data =[{
"latitud": 45.438499,
"longitud": -73.291171
}, {
"latitud": 45.448721,
"longitud":-73.467874
}, {
 "latitud": 45.500042,
"longitud":-73.405265
}, {
"latitud": 45.588896,
"longitud":-73.449332
}, {
"latitud":  45.564676,
"longitud": -73.549727
}]

var jsonMarker = [];
data.forEach(function(point){
    var lat = point.latitud;
    var lon = point.longitud;

   var marker = {type: 'Feature',
        properties: point,
        geometry: {
           type: 'Point',
           coordinates: [lon,lat]
       }
    };
    jsonMarker.push(marker);
	 });
	 

	var geoJsonA = { type: 'FeatureCollection', features: jsonMarker };
	L.geoJson(geoJsonA).addTo(map2);
	
		var map3 = L.map('mapid3').setView([45.554383, -73.466580], 10);
	 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map3);

		var line = {type: 'Feature',
    properties: {},
    geometry: {
    type: 'LineString',
        coordinates: []
    }
};
var coordinates = [];
data.forEach(function(point){
    var lat = point.latitud;
    var lon = point.longitud;
    coordinates.push([lon, lat]);
});
var jsonLine = [];
line.geometry.coordinates = coordinates;
jsonLine.push(line);
var geoJsonB = { type: 'FeatureCollection', features: jsonLine };
L.geoJson(geoJsonB).addTo(map3);

var map4 = L.map('mapid4').setView([45.554383, -73.466580], 10);
	 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map4);
var data =[{
"latitud": 45.438499,
"longitud": -73.291171
}, {
"latitud": 45.448721,
"longitud":-73.467874
}, {
 "latitud": 45.500042,
"longitud":-73.405265
}, {
"latitud": 45.588896,
"longitud":-73.449332
}, {
"latitud":  45.564676,
"longitud": -73.549727
}]

var jsonMarker = [];
data.forEach(function(point){
    var lat = point.latitud;
    var lon = point.longitud;

   var marker = {type: 'Feature',
        properties: point,
        geometry: {
           type: 'Point',
           coordinates: [lon,lat]
       }
    };
    jsonMarker.push(marker);
	 });
	 

	var geoJsonA = { type: 'FeatureCollection', features: jsonMarker };
	L.geoJson(geoJsonA).addTo(map4);
	
var line = {type: 'Feature',
    properties: {},
    geometry: {
    type: 'LineString',
        coordinates: []
    }
};
var coordinates = [];
data.forEach(function(point){
    var lat = point.latitud;
    var lon = point.longitud;
    coordinates.push([lon, lat]);
});
var jsonLine = [];
line.geometry.coordinates = coordinates;
jsonLine.push(line);
var geoJsonB = { type: 'FeatureCollection', features: jsonLine };
L.geoJson(geoJsonB).addTo(map4);	
		

 var homeTab = document.getElementById('report1');
  var observer1 = new MutationObserver(function(){
    if(homeTab.style.display != 'none'){
      map1.invalidateSize();
    }
  });
  observer1.observe(homeTab, {attributes: true});  

  var markerTab = document.getElementById('report2');
  var observer2 = new MutationObserver(function(){
    if(markerTab.style.display != 'none'){
      map2.invalidateSize();
    }
  });
  observer2.observe(markerTab, {attributes: true}); 

var lineTab = document.getElementById('report3');
  var observer3 = new MutationObserver(function(){
    if(lineTab.style.display != 'none'){
      map3.invalidateSize();
    }
  });
  observer3.observe(lineTab, {attributes: true});  
  
 var mark_lineTab = document.getElementById('report4');
  var observer4 = new MutationObserver(function(){
    if(mark_lineTab.style.display != 'none'){
      map4.invalidateSize();
    }
  });
  observer4.observe(mark_lineTab, {attributes: true});  
  