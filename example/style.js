/**
 * Vector styling for the public ESRI Vector tiles endpoint.
 * This style is copied from the Leaflet.VectorGrid library example here:
 * https://github.com/Leaflet/Leaflet.VectorGrid/blob/master/docs/demo-vectortiles.html
 */

var vectorTileStyling = {
	water: {
		fill: true,
		weight: 1,
		fillColor: '#06cccc',
		color: '#06cccc',
		fillOpacity: 0.2,
		opacity: 0.4,
	},
	admin: {
		weight: 1,
		fillColor: 'pink',
		color: 'pink',
		fillOpacity: 0.2,
		opacity: 0.4
	},
	waterway: {
		weight: 1,
		fillColor: '#2375e0',
		color: '#2375e0',
		fillOpacity: 0.2,
		opacity: 0.4
	},
	landcover: {
		fill: true,
		weight: 1,
		fillColor: '#53e033',
		color: '#53e033',
		fillOpacity: 0.2,
		opacity: 0.4,
	},
	landuse: {
		fill: true,
		weight: 1,
		fillColor: '#e5b404',
		color: '#e5b404',
		fillOpacity: 0.2,
		opacity: 0.4
	},
	park: {
		fill: true,
		weight: 1,
		fillColor: '#84ea5b',
		color: '#84ea5b',
		fillOpacity: 0.2,
		opacity: 0.4
	},
	boundary: {
		weight: 1,
		fillColor: '#c545d3',
		color: '#c545d3',
		fillOpacity: 0.2,
		opacity: 0.4
	},
	aeroway: {
		weight: 1,
		fillColor: '#51aeb5',
		color: '#51aeb5',
		fillOpacity: 0.2,
		opacity: 0.4
	},
	road: {	// mapbox & mapzen only
		weight: 1,
		fillColor: '#f2b648',
		color: '#f2b648',
		fillOpacity: 0.2,
		opacity: 0.4
	},
	tunnel: {	// mapbox only
		weight: 0.5,
		fillColor: '#f2b648',
		color: '#f2b648',
		fillOpacity: 0.2,
		opacity: 0.4,
// 					dashArray: [4, 4]
	},
	bridge: {	// mapbox only
		weight: 0.5,
		fillColor: '#f2b648',
		color: '#f2b648',
		fillOpacity: 0.2,
		opacity: 0.4,
// 					dashArray: [4, 4]
	},
	transportation: {	// openmaptiles only
		weight: 0.5,
		fillColor: '#f2b648',
		color: '#f2b648',
		fillOpacity: 0.2,
		opacity: 0.4,
// 					dashArray: [4, 4]
	},
	transit: {	// mapzen only
		weight: 0.5,
		fillColor: '#f2b648',
		color: '#f2b648',
		fillOpacity: 0.2,
		opacity: 0.4,
// 					dashArray: [4, 4]
	},
	building: {
		fill: true,
		weight: 1,
		fillColor: '#2b2b2b',
		color: '#2b2b2b',
		fillOpacity: 0.2,
		opacity: 0.4
	},
	water_name: {
		weight: 1,
		fillColor: '#022c5b',
		color: '#022c5b',
		fillOpacity: 0.2,
		opacity: 0.4
	},
	transportation_name: {
		weight: 1,
		fillColor: '#bc6b38',
		color: '#bc6b38',
		fillOpacity: 0.2,
		opacity: 0.4
	},
	place: {
		weight: 1,
		fillColor: '#f20e93',
		color: '#f20e93',
		fillOpacity: 0.2,
		opacity: 0.4
	},
	housenumber: {
		weight: 1,
		fillColor: '#ef4c8b',
		color: '#ef4c8b',
		fillOpacity: 0.2,
		opacity: 0.4
	},
	poi: {
		weight: 1,
		fillColor: '#3bb50a',
		color: '#3bb50a',
		fillOpacity: 0.2,
		opacity: 0.4
	},
	earth: {	// mapzen only
		fill: true,
		weight: 1,
		fillColor: '#c0c0c0',
		color: '#c0c0c0',
		fillOpacity: 0.2,
		opacity: 0.4
	},


	// Do not symbolize some stuff for mapbox
	country_label: [],
	marine_label: [],
	state_label: [],
	place_label: [],
	waterway_label: [],
	poi_label: [],
	road_label: [],
	housenum_label: [],


	// Do not symbolize some stuff for openmaptiles
	country_name: [],
	marine_name: [],
	state_name: [],
	place_name: [],
	waterway_name: [],
	poi_name: [],
	road_name: [],
	housenum_name: [],
};

var esriStyle = {};
esriStyle.Continent  = vectorTileStyling.earth;
esriStyle.Bathymetry = vectorTileStyling.water;
esriStyle["Vegetation small scale"] = vectorTileStyling.landuse;
esriStyle["Marine area"] = vectorTileStyling.water;
esriStyle.Land = vectorTileStyling.earth;

esriStyle["City small scale"             ] = [];
esriStyle["Admin0 point"                 ] = [];
esriStyle["Water area small scale"       ] = vectorTileStyling.water;
esriStyle["Water line small scale/label" ] = [];
esriStyle["Water line small scale"       ] = vectorTileStyling.water;
esriStyle["Marine waterbody/label"       ] = [];
esriStyle["Boundary line"                ] = vectorTileStyling.boundary;
esriStyle["Admin0 forest or park"        ] = vectorTileStyling.landuse;
esriStyle["Openspace or forest"          ] = vectorTileStyling.landuse;
esriStyle["Admin1 area/label"            ] = [];
esriStyle["Admin2 area/label"            ] = [];
esriStyle["Admin0 forest or park/label"  ] = [];
esriStyle["Water area small scale/label" ] = [];
esriStyle["Road tunnel"                  ] = vectorTileStyling.road;
esriStyle["Road"                         ] = vectorTileStyling.road;
esriStyle["Water line medium scale/label"] = [];
esriStyle["Water line medium scale"      ] = vectorTileStyling.water;
esriStyle["Urban area"                   ] = vectorTileStyling.landuse;
esriStyle["Admin1 forest or park"        ] = vectorTileStyling.landuse;
esriStyle["Water area medium scale/label"] = [];
esriStyle["Water area medium scale"      ] = vectorTileStyling.water;
esriStyle["Spot elevation"               ] = [];
esriStyle["City large scale"             ] = vectorTileStyling.building;
esriStyle["Admin2 area/label"            ] =
esriStyle["Water area large scale"       ] = vectorTileStyling.water;
esriStyle["Water line large scale/label" ] = [];
esriStyle["Water line large scale"       ] = vectorTileStyling.water;
esriStyle["Point of interest"            ] = vectorTileStyling.building;
esriStyle["Road/label"                   ] = [];
esriStyle["Ferry/label"                  ] = [];
esriStyle["Ferry"                        ] = vectorTileStyling.water;
esriStyle["Building"                     ] = vectorTileStyling.building;
esriStyle["Water area/label"             ] = [];
esriStyle["Water area"                   ] = vectorTileStyling.water;
esriStyle["Water line"                   ] = vectorTileStyling.water;
esriStyle["Cemetery/label"               ] = [];
esriStyle["Cemetery"                     ] = vectorTileStyling.landuse;
esriStyle["Retail"                       ] = vectorTileStyling.landuse;
esriStyle["Airport/label"                ] = [];
esriStyle["Airport"                      ] = vectorTileStyling.landuse;
esriStyle["Industry"                     ] = vectorTileStyling.landuse;
esriStyle["Water area large scale/label" ] = [];
esriStyle["Road tunnel/label"            ] = [];
esriStyle["Golf course/label"            ] = [];
esriStyle["Golf course"                  ] = vectorTileStyling.landuse;
esriStyle["Industry/label"               ] = [];
esriStyle["Marine area/label"            ] = [];
esriStyle["Railroad"                     ] = vectorTileStyling.road;
esriStyle["Medical"                      ] = vectorTileStyling.landuse;
esriStyle["Education"                    ] = vectorTileStyling.landuse;
esriStyle["Park or farming"              ] = vectorTileStyling.landuse;
esriStyle["Exit"                         ] = vectorTileStyling.road;
esriStyle["Retail/label"                 ] = [];
esriStyle["Beach/label"                  ] = [];
esriStyle["Beach"                        ] = vectorTileStyling.landuse;
esriStyle["Special area of interest"     ] = vectorTileStyling.housenumber;
esriStyle["Point of interest"            ] = vectorTileStyling.poi;
esriStyle["Education/label"              ] = [];
esriStyle["Landmark"                     ] = vectorTileStyling.landuse;
esriStyle["Cemetery"                     ] = vectorTileStyling.landuse;
esriStyle["Transportation"               ] = vectorTileStyling.road;
esriStyle["Landmark/label"               ] = [];
esriStyle["Medical/label"                ] = [];
esriStyle["Park or farming/label"        ] = [];
esriStyle["Building/label"               ] = [];

export default esriStyle;
