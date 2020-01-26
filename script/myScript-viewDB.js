/*
 * myScript-viewDB.js
 *
 * This script will:
 * import a json file via user prompt
 * load json into the web browser's memory storage
 * display a query view of cataloged plant leaves
 * delete records and update the master JSON accordingly
 *
 * */
//console.clear();

var populateDbx = function() {
	var dbxArrayOptions = [
		"ID",
		"Species",
		"Arrangement",
		"Structure",
		"Margin",
		"Attachment",
		"Shape",
		"Shape Apex",
		"Shape Base",
		"Surface Top",		// top
		"Surface Bottom",	// bottom
		"Venation",
		"Hairs Top",		// top
		"Hairs Bottom"		// bottom
		];

	var option = '';
	for (var i=0; i < dbxArrayOptions.length; i++) {
	   option += '<option value="'+ i + '">' + dbxArrayOptions[i] + '</option>';
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

	populateDbx();

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
	input = document.getElementById("inputFilterString");
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

function rmRecord() {

	var idxNo = $("#inputRecordID").val();
	if ( idxNo == "0" ) {
		var recordID = {leafMorphID:0};
	} else {
		var recordID = {leafMorphID:parseInt(idxNo)};
	}

	var masterJSON = JSON.parse(localStorage.getItem('taffy_globalJson'));	// memory string to json obj DB
	var taffy_globalJson = TAFFY(localStorage['taffy_globalJson']);			// TAFFY

	var leafMorhObjArr = masterJSON.leafMorph;	// json obj DB to array of objects
	var leafMorphTaffy = TAFFY(leafMorhObjArr);	// array to taffy obj

	leafMorphTaffy(recordID).remove();			// remove leafMorph record

	var leafMorphStringify = leafMorphTaffy().stringify();	// string new leafMorph
	var leafMorphJSON = JSON.parse(leafMorphStringify);		// make a leafMorph json

	delete masterJSON.leafMorph;							// delete old leafmorph from masterJSON
	masterJSON.leafMorph = leafMorphJSON;					// add new leafMorph jseon masterJSON


	localStorage['taffy_globalJson'] = JSON.stringify(masterJSON); // convert json into storage string
}

// Init Event

$( document ).ready(function() {
    console.log( "Jq/DOM document is ready!" );
    $('#fileinput').change( function(){
		loadJsonFile();
	});

	$("#btnDelRecord").click( function() {
		if ($("#inputRecordID").val() !== "") {
			rmRecord();

			$("#inputRecordID").val("");
			$("tbody").empty();

			var jsonFileVar = JSON.parse(localStorage['taffy_globalJson']);
			json2table(jsonFileVar);
		}

	});

});
