/*
	myScript/myScript.js

	README
    DOM UI Initializations

    Name scheme of the dropboxes:
        dropbox id = "#dbx" + [field name of the json object class];
        dropbox values = [field name of the json object class] + [json object array name]
        drop box values are called by tag $('select')

    Filte Switch:
        the DOM switch state are consolodated into an array [0...n]

    Share data between web pages:
        i just used localStorage to temporarily save between .html page reloads
            Note: an AngularJS approach would have eliminated a need to do this
                    i use Firefox more than Chrome, and I wanted the multiple html
                    approach for modular development. I did not want to mess with
                    Node, Grunt, Gulp, ect. for my testbench usecase
            On each page load I must trigger TaffyDB's localStorage feature append
                reinitialize my TaffyDB to ensure DB changes are consistent
                throughout the session and site navigation
*/

/*
 * Load Json from browser storage
 * Populate Dropdown Boxes
 * Add events for each dropdown box
 *
 *
 *
 * */
/* ************************** Start Switch Related ************************** */

var returnSwitchQueryObj = function() {

    var switchArr = [];

    switchArr[0] = $('#ckbleafArrangement').is(':checked');
    switchArr[1] = $('#ckbleafStructure').is(':checked');
    switchArr[2] = $('#ckbleafMargin').is(':checked');
    switchArr[3] = $('#ckbleafAttachment').is(':checked');
    switchArr[4] = $('#ckbleafShape').is(':checked');
    switchArr[5] = $('#ckbleafShapeApex').is(':checked');
    switchArr[6] = $('#ckbleafShapeBase').is(':checked');
    switchArr[7] = $('#ckbleafSurface').is(':checked');
    switchArr[8] = $('#ckbleafSurfaceBottom').is(':checked');
    switchArr[9] = $('#ckbleafVenation').is(':checked');
    switchArr[10] = $('#ckbleafHairs').is(':checked');
    switchArr[11] = $('#ckbleafHairsBottom').is(':checked');

    // AND FILTER
    var switchObj = {};

    if ( switchArr[0] ) {
		switchObj.leafArrangement_FK = parseInt($("#dbxleafArrangement").val());
    }

    if ( switchArr[1] ) {
		switchObj.leafStructure_FK = parseInt($("#dbxleafStructure").val());
    }

    if ( switchArr[2] ) {
		switchObj.leafMargin_FK = parseInt($("#dbxleafMargin").val());
    }

    if ( switchArr[3] ) {
		switchObj.leafAttachment_FK = parseInt($("#dbxleafAttachment").val());
    }

    if ( switchArr[4] ) {
		switchObj.leafShape_FK = parseInt($("#dbxleafShape").val());
    }

    if ( switchArr[5] ) {
		switchObj.leafShape_FK = parseInt($("#dbxleafShapeApex").val());
    }

    if ( switchArr[6] ) {
		switchObj.leafShape_FK = parseInt($("#dbxleafShapeBase").val());
    }

    if ( switchArr[7] ) {
		switchObj.leafSurfaceTop_FK = parseInt($("#dbxleafSurface").val());
    }

    if ( switchArr[8] ) {
		switchObj.leafSurfaceBottom_FK = parseInt($("#dbxleafSurfaceBottom").val());
    }

    if ( switchArr[9] ) {
		switchObj.leafVenation_FK = parseInt($("#dbxleafVenation").val());
    }

    if ( switchArr[10] ) {
		switchObj.leafHairsTop_FK = parseInt($("#dbxleafHairs").val());
    }

    if ( switchArr[11] ) {
		switchObj.leafHairsBottom_FK = parseInt($("#dbxleafHairsBottom").val());
    }

    return switchObj;
}

var switchFilterQuery = function(taffy_globalJson) {

	$('#plantList').html(""); // clear plant list modal

    var species = TAFFY(taffy_globalJson.species);
    var leafMorph = TAFFY(taffy_globalJson.leafMorph);

	// checkbox flags
    var switchObj = returnSwitchQueryObj(); //return a list of flagged Foreign Keys

    var returnQueryArr = leafMorph(switchObj).select("leafMorphID"); //retrieve the IDs of the morphology filter

	// All query matches
    var species_FK = [];
    for ( i = 0; i < returnQueryArr.length; i += 1 ) {
        species_FK[i] = leafMorph({leafMorphID: returnQueryArr[i]}).distinct("species_FK"); //retrieve foreign keys pointing to species ID
    }

    var returnSpeciesArr = [];
    var returnCommonNameArr = [];
    var speciesDescription;

    for ( i = 0; i < species_FK.length; i+=1 ) {
        speciesDescription = species().distinct("speciesDescription")[species_FK[i]]; //retrieve the names of the species ID
        returnCommonNameArr[i] = speciesDescription; //used for formatting common name display name
    }

	// Final Filtered Display
    returnCommonNameArr = _.uniq( returnCommonNameArr ); //remove repeat common names

	if ( typeof( returnCommonNameArr[0] ) != "undefined" ) {
		for (i = 0; i < returnCommonNameArr.length; i+=1 ) {
			var liString = "<li><a class='w3-btn w3-button w3-block' href='https://www.google.com/search?q=" + returnCommonNameArr[i] + ", plant leaf' target='_blank'>" + returnCommonNameArr[i] + "</li>";
			$( '#plantList' ).append( liString ); //display common names of matching plants
		}
	} else {
		$('#plantList').append( "no matches.<br>change or remove any of the query option settings" );
	}

}

/* *************************** End Switch Related *************************** */

/* *********************** Start Drop Down Box Related ********************** */

var dropdownDescriptionEventsQuery = function( classNameString, dropboxID, outputDispID, localDynamicTaffyDB ) {

    $(dropboxID).change( function () {
        var selectedValue = $(this).val();
        var morphName = localDynamicTaffyDB().select( classNameString + 'Name' );
        $( outputDispID ).text( morphName[selectedValue] );

        var morphDescription = localDynamicTaffyDB().select( classNameString + 'Description' );

        // automatically pre-select complimentary attributes
        if ( selectedValue == 2 ) {
			if ( outputDispID == "#valueleafSurface" ) {
				$( '#dbxleafHairs' ).val( '12' );
			} else if ( outputDispID == "#valueleafSurfaceBottom" ) {
				$( '#dbxleafHairsBottom' ).val( '12' );
			}
		}

        // dynamic description button event
        var ckb = "#ckb" + classNameString;
        $(outputDispID).click( function() {
			var descString = "<b>" + morphName[selectedValue] + "</b>: " + morphDescription[selectedValue] + " <a href='https://www.google.com/search?q=" + morphName[selectedValue] + ", plant leaf' target='_blank'><i><u class='w3-text-blue'> online examples </u></i></a>";
			$('#dropDownDescription').html( descString );
        });
    });
}

var populateCbxAndDescBtn = function(taffy_globalJson) {

    var key = "";
    var classNameString, dropboxID, outputDispID, localDynamicTaffyDB;

    for (key in taffy_globalJson) {
        // break my json up into classes
        if (taffy_globalJson.hasOwnProperty(key)) {
            // this app is limited to and focused on plant species.
            if ( (key !== 'plantclass') || (key !== 'plantorder') || (key !== 'family') || (key !== 'genus') ) {

                classNameString = key;
                dropboxID = "#dbx" + key;
                outputDispID = "#value" + classNameString;

                var classAttributeObj = classNameString + 'Name';

                var localDynamicTaffyDB = TAFFY(taffy_globalJson[classNameString]);

                // dynamic populate dropbox/dropdown content
                for(var i = 0; i < localDynamicTaffyDB().get().length; i++) {
                    var dbxOption = '<option value="'+ i + '">' + localDynamicTaffyDB().select(classAttributeObj)[i] + '</option>';

                    $(dropboxID).append(dbxOption);

					if ( ( dropboxID === "#dbxleafSurface" ) || ( dropboxID === "#dbxleafHairs" ) ) {
						$(dropboxID.concat("Bottom")).append(dbxOption);
					}

                    dropdownDescriptionEventsQuery(
						classNameString, dropboxID, outputDispID, localDynamicTaffyDB
                    );

					if ( (dropboxID === "#dbxleafSurface") || (dropboxID === "#dbxleafHairs") ) {
						dropdownDescriptionEventsQuery(
							classNameString, dropboxID.concat("Bottom"), outputDispID.concat("Bottom"), localDynamicTaffyDB
						);
					}
                }
            }
        }
    }
}

/* Initialize morphologyFilter.html */
var populateLocalHerbariumQueryDropBoxes = function( taffy_globalJson ) {

    // Emppty dropdown list combo box beofre entering data
    // I should do an error catch prior... but i wil get back to that
    $( 'select' ).empty();

    //Populate Combo Boxes with its dropdown description event
    populateCbxAndDescBtn(taffy_globalJson);

    // create event for a fresh query when the drop box has changed value

    $( 'select' ).change( function() {
        var isSwitchOn = $( '#ckb' + this.id.slice(3)).prop("checked" ); // true/false

		if ( isSwitchOn == true ) {
			// query results
			switchFilterQuery( taffy_globalJson );
			var firstMatch = $( '#plantList li:nth-child(1) a:nth-child(1)' ).text();

			// modal popup
			if ( firstMatch !== "" ) {
				// if exclusive matches are found
				$( '#queryResultModal' ).modal();
			}
		}

    });

    // create event for a query when the on/off is toggled
    $( 'input' ).change( function() {
		// query results
		switchFilterQuery( taffy_globalJson );
		var firstMatch = $( '#plantList li:nth-child(1) a:nth-child(1)' ).text();

		// modal popup
		if ( firstMatch !== "" ){
			// if exclusive matches are found
			$('#queryResultModal').modal();
		}
    });
}

/* *********************** End Drop Down Box Related ************************ */

/* ************************ Data Manipulation Relate ************************ */

// import json fie using FileReader in morphologyFilter.html
var loadJsonFile = function() {

    if ( typeof window.FileReader !== 'function' ) {
        alert("The file API isn't supported on this browser yet.");
        return;
    }

    var input = document.getElementById('fileinput');

    if ( !input ) {
        alert("couldn't find the fileinput element.");
    } else if (!input.files) {
        alert("This browser doesn't seem to support the `files` property of file inputs.");
    } else if (!input.files[0]) {
        alert("Please select a file before clicking 'Load'");
    } else {
        var file	= input.files[0];
        var fr		= new FileReader();
        fr.onload	= receivedText;
        fr.readAsText(file);
    }

    function receivedText(e) {
        // rebuild/replace default base TaffyDB
        lines = e.target.result;
        var jsonFileVar = JSON.parse(lines);

        // save to global because its the easiest way to pass var out of fileInput
        // keeping a consistent name for get/set overwrite
        localStorage['taffy_globalJson'] = JSON.stringify(jsonFileVar);
        populateLocalHerbariumQueryDropBoxes(jsonFileVar);
    }
}

/* ************************ End Manipulation Relate ************************* */

/* ********************** Start Initialization Related ********************** */

var initTaffyDBfromLocalStorage = function (taffy_globalJson) {
    /* ************* Define Session TaffyDB ******************* */
    //break myDemoJson down into TaffyDB ER-like classes

    var plantclass		= TAFFY(taffy_globalJson.plantclass);
    var plantorder		= TAFFY(taffy_globalJson.plantorder);
    var family			= TAFFY(taffy_globalJson.family);
    var genus			= TAFFY(taffy_globalJson.genus);
    var species			= TAFFY(taffy_globalJson.species);
    var leafArrangement = TAFFY(taffy_globalJson.leafArrangement);
    var leafStructure	= TAFFY(taffy_globalJson.leafStructure);
    var leafMargin		= TAFFY(taffy_globalJson.leafMargin);
    var leafAttachment	= TAFFY(taffy_globalJson.leafAttachment);
    var leafShape		= TAFFY(taffy_globalJson.leafShape);
    var leafShapeApex	= TAFFY(taffy_globalJson.leafShapeApex);
    var leafShapeBase	= TAFFY(taffy_globalJson.leafShapeBase);
    var leafSurface		= TAFFY(taffy_globalJson.leafSurface);
    var leafVenation	= TAFFY(taffy_globalJson.leafVenation);
    var leafHairs		= TAFFY(taffy_globalJson.leafHairs);
    var leafMorph		= TAFFY(taffy_globalJson.leafMorph);

    // configure existing json as a json with TaffyDB specific formatting

    taffy_globalJson.species			= species().get();
    taffy_globalJson.leafArrangement	= leafArrangement().get();
    taffy_globalJson.leafStructure		= leafStructure().get();
    taffy_globalJson.leafMargin			= leafMargin().get();
    taffy_globalJson.leafAttachment		= leafAttachment().get();
    taffy_globalJson.leafShape			= leafShape().get();
    taffy_globalJson.leafShapeApex		= leafShapeApex().get();
    taffy_globalJson.leafShapeBas		= leafShapeBase().get();
    taffy_globalJson.leafSurface		= leafSurface().get();
    taffy_globalJson.leafVenation		= leafVenation().get();
    taffy_globalJson.leafHairs			= leafHairs().get();
    taffy_globalJson.leafMorph			= leafMorph().get();

    return taffy_globalJson;
}

/* *********************** End Initialization Related *********************** */

$( '#fileinput' ).change( function() {
	loadJsonFile();
});

$( document ).ready( function() {
	// Populate DOM with JSON saved in browser storage
	var taffy_globalJson = JSON.parse( localStorage.getItem( 'taffy_globalJson' ) );
    taffy_globalJson = initTaffyDBfromLocalStorage( taffy_globalJson );
    populateLocalHerbariumQueryDropBoxes( taffy_globalJson );
});
