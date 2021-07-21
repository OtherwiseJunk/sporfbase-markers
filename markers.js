// Add your own markers to this file.

var MAPCRAFTER_MARKERS = [
	/*
	// just one example marker group
	{
		// id of the marker group, without spaces/other special chars
		"id" : "signs",
		// name of the marker group, displayed in the webinterface
		"name" : "Signs",
		// icon of the markers belonging to that group (optional)
		"icon" : "sign.png",
		// size of that icon
		"iconSize" : [32, 32],
		// whether this marker group is shown by default (optional)
		"showDefault" : true,
		// markers of this marker group...
		"markers" : {
			// ...in the world "world"
			"world" : [
				// example marker, pretty format:
				{
					// position ([x, z, y])
					"pos" : [35, -21, 64],
					// title when you hover over the marker
					"title" : "Sign1",
					// text in the marker popup window
					"text" : "Hello.",
					// override the icon of a single marker (optional)
					"icon" : "player.png",
					// override the size of the marker icon (optional)
					"iconSize" : [32, 32]
				},
				// more markers:
				{"pos" : [100, 100, 64], "title" : "Test1"},
				{"pos" : [100, 200, 64], "title" : "Test2"},
				{"pos" : [500, 30, 64], "title" : "Test2"},
			],
		},
	},
	
	// you can also add more complicated markers using the Leaflet API
	// just specify a function which creates the Leaflet API marker objects
	{
		"id" : "test",
		"name" : "Test",
		"createMarker" : function(ui, groupInfo, markerInfo) {
			var latlngs = [];
			// use the ui.mcToLatLng-function to convert Minecraft coords to LatLngs
			latlngs.push(ui.mcToLatLng(markerInfo.p1[0], markerInfo.p1[1], 64));
			latlngs.push(ui.mcToLatLng(markerInfo.p2[0], markerInfo.p2[1], 64));
			latlngs.push(ui.mcToLatLng(markerInfo.p3[0], markerInfo.p3[1], 64));
			latlngs.push(ui.mcToLatLng(markerInfo.p4[0], markerInfo.p4[1], 64));
			latlngs.push(ui.mcToLatLng(markerInfo.p1[0], markerInfo.p1[1], 64));
			
			return L.polyline(latlngs, {"color" : markerInfo.color});
		},
		"markers" : {
			"world" : [
				{
					"p1" : [42, 0],
					"p2" : [0, 0],
					"p3" : [0, 42],
					"p4" : [42, 42],
					"color" : "red",
				},
				{
					"p1" : [73, -42],
					"p2" : [-42, -42],
					"p3" : [-42, 73],
					"p4" : [73, 73],
					"color" : "yellow",
				},
			],
		},
	},
	*/
  {
    // id of the marker group, without spaces/other special chars
    "id" : "signs",
    // name of the marker group, displayed in the webinterface
    "name" : "Signs",
    // icon of the markers belonging to that group (optional)
    //"icon" : "sign.png",
    "icon" : "emblem-photos.svg",
    // size of that icon
    "iconSize" : [32, 32],
    // whether this marker group is shown by default (optional)
    "showDefault" : true,
    // markers of this marker group...
    "markers" : {
      // ...in the world "world"
      "fantasia" : [
		// Points of Interest:
		{"pos" : [-650, 1000, 64], "title" : "MINE"},
		{"pos" : [-2200, 225, 64], "title" : "Lake Grandjardin"},
		{"pos" : [-2210, 319, 64], "title" : "Sporf Sanssouci"},
		{"pos" : [-200, 0, 64], "title" : "Granjero"},
		{"pos" : [0, -300, 64], "title" : "Arcadia"},
		{"pos" : [-3013, -1871, 64], "title" : "Sapia, Capital of Atlantica"},
		// Territorial Claims
		{
			"p1" : [-2400,-2020],
			"p2" : [-2800, -1550],
			"p3" : [-3320, -1700],
			"p4" : [-3500,-3400],
			"p5" : [-3500,-3400],
			"p6" : [-3500,-3400],
			"p7" : [-2520,-2300],
			// Serves as an outline
			"color" : "navy",
			"fillColor" : "#4169e1",
			"fillOpacity" : "0.3",
			"title" : "Atlantica"
 		}
    ],
    },
  },
];