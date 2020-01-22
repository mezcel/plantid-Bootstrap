/* view taffy db */
//console.clear();

var populateDbx = function(morphArray) {
	var option = '';
	for (var i=0;i<morphArray.length;i++){
	   option += '<option value="'+ i + '">' + morphArray[i] + '</option>';
	}
	$('#dbxFilterHeader').append(option);
}

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

	populateDbx(morphArray);

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

function tableFilter() {
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("myInput");
	filter = input.value.toUpperCase();

	table = document.getElementById("myTable");
	tr = table.getElementsByTagName("tr");

	for (i = 0; i < tr.length; i++) {

		td = tr[i].getElementsByTagName("td")[$("#dbxFilterHeader").val()];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}


$( document ).ready(function() {
    console.log( "ready!" );
    $('#fileinput').change( function(){
		loadJsonFile();
	});

});