/* view taffy db */
//console.clear();

var json2table = function(taffy_globalJson) {

	var morphArray = [
			"leafMorph",
			"species",
			"leafArrangement",
			"leafStructure",
			"leafMargin",
			"leafAttachment",
			"leafShape",
			"leafShapeApex",
			"leafShapeBase",
			"leafSurfaceTop",		// top
			"leafSurfaceBottom",	// bottom
			"leafVenation",
			"leafHairsTop",			// top
			"leafHairsBottom"		// bottom
		];

	console.log("JSON Loaded:",taffy_globalJson);

	var leafMorphJson = TAFFY(taffy_globalJson['leafMorph']);

	for(var i = 1; i < leafMorphJson().get().length; i++) {

		var recordArray = [];

		recordArray.push(leafMorphJson().select('leafMorphID')[i]);

		var species_FK 	= leafMorphJson().select('species_FK')[i];
		recordArray.push(TAFFY(taffy_globalJson['species'])().select('speciesSymbol')[species_FK]);

		var tmpFK, tmpAttr, tmpNameValue;
		for (var m = 2; m < morphArray.length; m++) {
			tmpAttr = morphArray[m] + "_FK";
			tmpFK = leafMorphJson().select(tmpAttr)[i];
			tmpAttr = morphArray[m] + "Name"

			if (tmpFK !== 0) {
				if ((morphArray[m] == "leafHairsTop") || (morphArray[m] == "leafHairsBottom")) {
					recordArray.push( TAFFY(taffy_globalJson['leafHairs'])().select('leafHairsName')[tmpFK] );
				} else if ((morphArray[m] == "leafSurfaceTop") || (morphArray[m] == "leafSurfaceBottom")) {
					recordArray.push( TAFFY(taffy_globalJson['leafSurface'])().select('leafSurfaceName')[tmpFK] );
				} else {
					recordArray.push( TAFFY(taffy_globalJson[morphArray[m]])().select(tmpAttr)[tmpFK] );
				}
			} else {
				recordArray.push("-");
			}

		}

		var newTR	= $("<tr></tr>");
		for ( var r = 0; r < recordArray.length; r++) {
			var newTD	= $("<td></td>");

			newTD.text(recordArray[r]);
			newTR.append(newTD);
		}

		$("tbody").append(newTR);

	}

}

// import json fie using FileReader in morphologyFilter.html
var loadJsonFile = function() {

    var input, file, fr;

    if (typeof window.FileReader !== 'function') {
        alert("The file API isn't supported on this browser yet.");
        return;
    }

    input = document.getElementById('fileinput');

    if (!input) {
        alert("couldn't find the fileinput element.");
    } else if (!input.files) {
        alert("This browser doesn't seem to support the `files` property of file inputs.");
    } else if (!input.files[0]) {
        alert("Please select a file before clicking 'Load'");
    } else {
        file = input.files[0];
        fr = new FileReader();
        fr.onload = receivedText;
        fr.readAsText(file);
    }

    function receivedText(e) {
        // rebuild/replace default base TaffyDB
        lines = e.target.result;
        var jsonFileVar = JSON.parse(lines);

        // save to global because its the easiest way to pass var out of fileInput
        // keeping a consistent name for get/set overwrite
        localStorage['taffy_globalJson'] = JSON.stringify(jsonFileVar);

        json2table(jsonFileVar);
    }
}


$( document ).ready(function() {
    console.log( "ready!" );
    $('#fileinput').change( function(){
		loadJsonFile();
	});

});

/*
$(window).scroll(function(){
	var sticky = $('.sticky'),
	scroll = $(window).scrollTop();

	if (scroll >= 100) {
		sticky.addClass('fixed');
	} else {
		sticky.removeClass('fixed');
	}
});
*/
