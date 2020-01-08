/*  README
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

	// OR FILTER
    /*
    var switchObj = [];
    if (switchArr[0]) {
        switchObj.push({'leafArrangement_FK' : parseInt($("#dbxleafArrangement").val())});
    }
    if (switchArr[1]) {
        switchObj.push({'leafStructure_FK' : parseInt($("#dbxleafStructure").val())});
    }
    if (switchArr[2]) {
        switchObj.push({'leafMargin_FK' : parseInt($("#dbxleafMargin").val())});
    }
    if (switchArr[3]) {
        switchObj.push({'leafAttachment_FK' : parseInt($("#dbxleafAttachment").val())});
    }
    if (switchArr[4]) {
        switchObj.push({'leafShape_FK' : parseInt($("#dbxleafShape").val())});
    }
    if (switchArr[5]) {
        switchObj.push({'leafSurfaceTop_FK' : parseInt($("#dbxleafSurface").val())});
    }
    if (switchArr[6]) {
        switchObj.push({'leafVenation_FK' : parseInt($("#dbxleafVenation").val())});
    }
    if (switchArr[7]) {
        switchObj.push({'leafHairsTop_FK' : parseInt($("#dbxleafHairs").val())});
    }
    */

    // AND FILTER
    var switchObj = {};

    if (switchArr[0]) {
		switchObj.leafArrangement_FK = parseInt($("#dbxleafArrangement").val());
    }
    if (switchArr[1]) {
		switchObj.leafStructure_FK = parseInt($("#dbxleafStructure").val());
    }
    if (switchArr[2]) {
		switchObj.leafMargin_FK = parseInt($("#dbxleafMargin").val());
    }
    if (switchArr[3]) {
		switchObj.leafAttachment_FK = parseInt($("#dbxleafAttachment").val());
    }
    if (switchArr[4]) {
		switchObj.leafShape_FK = parseInt($("#dbxleafShape").val());
    }
    if (switchArr[5]) {
		switchObj.leafShape_FK = parseInt($("#dbxleafShapeApex").val());
    }
    if (switchArr[6]) {
		switchObj.leafShape_FK = parseInt($("#dbxleafShapeBase").val());
    }
    if (switchArr[7]) {
		switchObj.leafSurfaceTop_FK = parseInt($("#dbxleafSurface").val());
    }
    if (switchArr[8]) {
		switchObj.leafSurfaceBottom_FK = parseInt($("#dbxleafSurfaceBottom").val());
    }
    if (switchArr[9]) {
		switchObj.leafVenation_FK = parseInt($("#dbxleafVenation").val());
    }
    if (switchArr[10]) {
		switchObj.leafHairsTop_FK = parseInt($("#dbxleafHairs").val());
    }
    if (switchArr[11]) {
		switchObj.leafHairsBottom_FK = parseInt($("#dbxleafHairsBottom").val());
    }

    return switchObj;
}

var switchFilterQuery = function(taffy_globalJson) {
	console.clear();
	$("#plantList").html(""); // clear display

    var species = TAFFY(taffy_globalJson.species);
    var leafMorph = TAFFY(taffy_globalJson.leafMorph);

	// checkbox flags
    var switchObj = returnSwitchQueryObj(); //return a list of flagged Foreign Keys
    console.log("Flagged dropdown and checkboxes:\n",switchObj);

    var returnQueryArr = leafMorph(switchObj).select("leafMorphID"); //retrieve the IDs of the morphology filter

	// All query matches
    var species_FK = [];
    for (i = 0; i < returnQueryArr.length; i+=1 ) {
        species_FK[i] = leafMorph({leafMorphID: returnQueryArr[i]}).distinct("species_FK"); //retrieve foreign keys pointing to species ID
    }

    var returnSpeciesArr = [];
    var returnCommonNameArr = [];
    var speciesDescription;

    for (i = 0; i < species_FK.length; i+=1 ) {
        speciesDescription = species().distinct("speciesDescription")[species_FK[i]]; //retrieve the names of the species ID
        //returnCommonNameArr.push(speciesDescription); //used for formatting common name display name
        returnCommonNameArr[i] = speciesDescription; //used for formatting common name display name
    }

	// Final Filtered Display
    returnCommonNameArr = _.uniq(returnCommonNameArr); //remove repeat common names

	for (i = 0; i < returnCommonNameArr.length; i+=1 ) {
		$("#plantList").append("<li><a class='w3-btn w3-button w3-block' href='https://www.google.com/search?q="+returnCommonNameArr[i]+", plant leaf' target='_blank'>"+returnCommonNameArr[i]+"</li>"); //display common names of matching plants
	}

}

/* *************************** End Switch Related *************************** */

/* *********************** Start Drop Down Box Related ********************** */

var dropdownDescriptionEventsQuery = function(classNameString, dropboxID, outputDispID, localDynamicTaffyDB) {
    $(dropboxID).change(function () {

        var selectedValue, morphName, morphDescription, btnName;
        var selectedValue = $(this).val();

        morphName = localDynamicTaffyDB().select(classNameString + 'Name');
        $(outputDispID).text(morphName[selectedValue]);

        morphDescription = localDynamicTaffyDB().select(classNameString + 'Description');

        // dynamic description button event
        $(outputDispID).click(function(){
            $('#dropDownDescription').html("<b>" + morphName[selectedValue] + "</b>: " + morphDescription[selectedValue]);
        });
    });
}

// used for  morphologyFilter.html
var dropdownMorphInput = function(classNameString, dropboxID, outputDispID, localDynamicTaffyDB) {

    var dropDownDescription = ".descriptionvalue" + classNameString + "Input";

    $(dropboxID).change(function () {
        var selectedValue, morphName, morphDescription, btnName;

        selectedValue = $(this).val();

        if (classNameString == 'species') {
            // i need species symbol which is the same as genus and species
            speciesSymbol = localDynamicTaffyDB().select(classNameString + 'Symbol');

            $(dropDownDescription).html("<i class='fa fa-leaf'></i>");
            $(dropDownDescription).html(speciesSymbol[selectedValue] );

        } else {
            // i need morph name and morp desc
            morphName = localDynamicTaffyDB().select(classNameString + 'Name');
            morphDescription = localDynamicTaffyDB().select(classNameString + 'Description');

            $(outputDispID).text(morphName[selectedValue]);
            $(dropDownDescription).html("<i class='fa fa-pagelines'></i>");

            $(outputDispID).click(function() {
                $(dropDownDescription).html("<b>" + morphName[selectedValue] + "</b>: " + morphDescription[selectedValue]);
            });
        }
    });
}

var populateCbxAndDescBtn = function(taffy_globalJson) {

    /* Note:
        too many things are going on in this "function"
        i am reading in a master json
        parsing the json into it parts
        populating DOM with json data depending on which page i am on
        i am making DOM events for each <select> and <input> too
        this funct may as well be a main(), lol
    */
    var key = "";
    var classNameString, dropboxID, outputDispID, localDynamicTaffyDB;
    var thispage = returnThisPageFileName(); // addObservation.html or morphologyFilter.html
	console.clear();
	console.log("populate dbx\n");

	var shape_count = 2,
		surface_count = 1,
		hairs_count = 1;

    for (key in taffy_globalJson) {
        // break my json up into classes
        if (taffy_globalJson.hasOwnProperty(key)) {
            // on the real version i would use all the taxonomy for full query
            if ((key !== 'plantclass')||(key !== 'plantorder')||(key !== 'family')||(key !== 'genus')) {
                classNameString = key;
                dropboxID = "#dbx" + key;
                outputDispID = "#value" + classNameString;

                //console.log("classNameString:",classNameString, "\ndropboxID:",dropboxID, "\noutputDispID:",outputDispID);

                if (classNameString === "species") {
                    // applies only for addObservation.html
                    classAttributeObj = classNameString + 'Description'; // display common name if available or "species"
                } else {
                    classAttributeObj = classNameString + 'Name';
                }
                console.log("\nclassAttributeObj:", classAttributeObj);

                // I am converting json to TaffyDB json just for "app wide logic technique" consistency
                // this is the 'my ER technique philosophy' when I apply the TaffyDB framework
                localDynamicTaffyDB = TAFFY(taffy_globalJson[classNameString]); // Ex: var leafArrangement = TAFFY(taffy_globalJson.leafArrangement);

                // dynamic populate dropbox/dropdown content
                for(var i = 0; i < localDynamicTaffyDB().get().length; i++) {
                    var dbxOption = '<option value="'+ i + '">' + localDynamicTaffyDB().select(classAttributeObj)[i] + '</option>';

                    $(dropboxID).append(dbxOption);

					// Extra copies of the same attribute for different parts of the leaf.
                    if (dropboxID === "#dbxleafShape"){
						$("#dbxleafShapeApex").append(dbxOption);
						$("#dbxleafShapeBase").append(dbxOption);
					}

					if (dropboxID === "#dbxleafSurface"){
						$("#dbxleafSurfaceBottom").append(dbxOption);
					}

					if (dropboxID === "#dbxleafHairs"){
						$("#dbxleafHairsBottom").append(dbxOption);
					}

                    if (thispage === 'morphologyFilter') {
                        // for morphologyFilter.html
                        dropdownDescriptionEventsQuery(classNameString, dropboxID, outputDispID, localDynamicTaffyDB);
                    } else {
                        // for addObservation.html
                        dropdownMorphInput(classNameString, dropboxID, outputDispID, localDynamicTaffyDB);
                    }
                }
            }
        }
    }
}

/* Initialize morphologyFilter.html */
var populateLocalHerbariumQueryDropBoxes = function(taffy_globalJson) {

    // Emppty dropdown list combo box beofre entering data
    // I should do an error catch prior... but i wil get back to that
    $('select').empty();

    //Populate Combo Boxes with its dropdown description event
    populateCbxAndDescBtn(taffy_globalJson);

    // create event for a fresh query when the drop box has changed value
    $('select').change(function(){
		// query results
        switchFilterQuery(taffy_globalJson);
    });

    // create event for a query when the on/off is toggled
    $('input').change(function(){
		// query results
        switchFilterQuery(taffy_globalJson);

        // modal popup
        $("#queryResultModal").modal();
    });
}

/* *********************** End Drop Down Box Related ************************ */

/* ************************ Data Manipulation Relate ************************ */

var jsonFile2TaffyDB = function(jsonFileVar) {
    // clear all localStorage
    localStorage.clear();

    // re define TaffyDB
    var plantclass = TAFFY(jsonFileVar.plantclass);
    var plantorder = TAFFY(jsonFileVar.plantorder);
    var family = TAFFY(jsonFileVar.family);
    var genus = TAFFY(jsonFileVar.genus);
    var species = TAFFY(jsonFileVar.species);
    var leafArrangement = TAFFY(jsonFileVar.leafArrangement);
    var leafStructure = TAFFY(jsonFileVar.leafStructure);
    var leafMargin = TAFFY(jsonFileVar.leafMargin);
    var leafAttachment = TAFFY(jsonFileVar.leafAttachment);
    var leafShape = TAFFY(jsonFileVar.leafShape);
    var leafSurface = TAFFY(jsonFileVar.leafSurface);
    var leafVenation = TAFFY(jsonFileVar.leafVenation);
    var leafHairs = TAFFY(jsonFileVar.leafHairs);

    var leafMorph = TAFFY(jsonFileVar.leafMorph);

    // re init localStorage Taffy Global Storage
    plantclass.store("plantclass");
    plantorder.store("plantorder");
    family.store("family");
    genus.store("genus");
    species.store("species");
    leafArrangement.store("leafArrangement");
    leafStructure.store("leafStructure");
    leafMargin.store("leafMargin");
    leafAttachment.store("leafAttachment");
    leafShape.store("leafShape");
    leafSurface.store("leafSurface");
    leafVenation.store("leafVenation");
    leafHairs.store("leafHairs");
    leafMorph.store("leafMorph");
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

        populateDOMObjects(jsonFileVar);
    }
}

// used to as confirmation/debug display display purposes only addObservation.html
var inputMorphArrayDOM = function(leafMorphObjArr) {
    var inputObservationObj = [];
    var leafMorphLength = leafMorphObjArr.length;
    leafMorphLength = leafMorphLength + 1; // the next record index

    inputObservationObj.push({"leafMorphID":leafMorphLength});
    inputObservationObj.push({"species_FK":parseInt($("#dbxspecies").val())});
    inputObservationObj.push({"leafArrangement_FK":parseInt($("#dbxleafArrangement").val())});
    inputObservationObj.push({"leafStructure_FK":parseInt($("#dbxleafStructure").val())});
    inputObservationObj.push({"leafMargin_FK":parseInt($("#dbxleafMargin").val())});
    inputObservationObj.push({"leafAttachment_FK" : parseInt($("#dbxleafAttachment").val())});
    inputObservationObj.push({"leafShape_FK" : parseInt($("#dbxleafShape").val())});
    inputObservationObj.push({"leafApex_FK" : parseInt($("#dbxleafShapeApex").val())}); // unused in this example
    inputObservationObj.push({"leafBase_FK" : parseInt($("#dbxleafShapeBase").val())}); // unused in this example
    inputObservationObj.push({"leafSurfaceTop_FK" : parseInt($("#dbxleafSurface").val())});
    inputObservationObj.push({"leafSurfaceBottom_FK" : parseInt($("#dbxleafSurfaceBottom").val())}); // unused in this example
    inputObservationObj.push({"leafVenation_FK" : parseInt($("#dbxleafVenation").val())});
    inputObservationObj.push({"leafHairsTop_FK" : parseInt($("#dbxleafHairs").val())});
    inputObservationObj.push({"leafHairsBottom_FK" : parseInt($("#dbxleafHairsBottom").val())}); // unused in this example

    return inputObservationObj;
}

var insertLeafMorphLocal = function(leafMorph) {

    var dbxSelectionState = new Object();

    dbxSelectionState["leafMorphID"] = (leafMorph().get().length);
    dbxSelectionState["species_FK"] = parseInt($("#dbxspecies").val());
    dbxSelectionState["leafArrangement_FK"] = parseInt($("#dbxleafArrangement").val());
    dbxSelectionState["leafStructure_FK"] = parseInt($("#dbxleafStructure").val());
    dbxSelectionState["leafMargin_FK"] = parseInt($("#dbxleafMargin").val());
    dbxSelectionState["leafAttachment_FK" ] = parseInt($("#dbxleafAttachment").val());
    dbxSelectionState["leafShape_FK" ] = parseInt($("#dbxleafShape").val());
    dbxSelectionState["leafApex_FK" ] = parseInt($("#dbxleafShapeApex").val()); // unused in this example
    dbxSelectionState["leafBase_FK" ] = parseInt($("#dbxleafShapeBase").val()); // unused in this example
    dbxSelectionState["leafSurfaceTop_FK" ] = parseInt($("#dbxleafSurface").val());
    dbxSelectionState["leafSurfaceBottom_FK" ] = parseInt($("#dbxleafSurfaceBottom").val()); // unused in this example
    dbxSelectionState["leafVenation_FK" ] = parseInt($("#dbxleafVenation").val());
    dbxSelectionState["leafHairsTop_FK" ] = parseInt($("#dbxleafHairs").val());
    dbxSelectionState["leafHairsBottom_FK" ] = parseInt($("#dbxleafHairs").val()); // unused in this example

    return dbxSelectionState;
}

// preview morphollogy input addObservation.html
var updateInputArrayPreview = function() {
    // get curent leafMorphState from Global
    var taffy_globalJson = JSON.parse(localStorage.getItem('taffy_globalJson'));

    // pull out the ObjClass I want to use: leafMorphID
    var leafMorphObjArr = taffy_globalJson.leafMorph;

    var inputPreview = inputMorphArrayDOM(leafMorphObjArr);
    inputPreview = JSON.stringify(inputPreview);
    $('#inputPreview').val(inputPreview);
    autosize($('textarea'));
}

var resetMorphologyInputs = function() {
    $('select').prop('selectedIndex',0); // reset to 1st dbx position
    $('select').trigger('change',0); // trigger change event flag in order to triger other events
    updateInputArrayPreview(); //update preview only
}

/* Adding Record to current Json DB addObservation.html */
var addMorphObservation = function() {
    /*
     * The Web Storage API provides mechanisms by which browsers can
     *    store key/value pairs, in a much more intuitive fashion than using cookies.
     * sessionStorage maintains a separate storage area for each given
     *    origin that's available for the duration of the page session
     *    (as long as the browser is open, including page reloads and restores)
     * localStorage does the same thing, but persists even when the browser
     *    is closed and reopened.
     * Mozilla: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API
     * From Firefox 45 onwards, when the browser crashes/restarts,
     *    the amount of data saved per origin is limited to 10MB.
        Writing : localStorage['myKey'] = 'somestring'; // only strings
        Reading : var myVar = localStorage['myKey'] || 'defaultValue';
     */

    /*
     * TaffyDB Extensions: http://taffydb.com/working_with_data.html
     * db.store() // Ex: db.store("name"); // starts storing records in local storage
     *      Takes: A string with the storage name for the DB
     *      Returns: true if data was returned from localStorage, false if no data returned
     * Sets up a localStorage collection for a given name.
     * If data exists already the data will be loaded into the collection.
     * Changes are auto synced to localStorage.
     * Pass in false to terminate storing the collection (data in localstorage will be unchanged).
     * Note: db().get() or db().stringify() will retturn a proper formatted TaffyDB Json obj
     */
    var taffy_globalJson = JSON.parse(localStorage.getItem('taffy_globalJson'));
    var leafMorph = TAFFY(taffy_globalJson.leafMorph);
    var newObservation = insertLeafMorphLocal(leafMorph);

    leafMorph.insert(newObservation);
    taffy_globalJson.leafMorph = leafMorph().get();
    localStorage.clear();
    localStorage['taffy_globalJson'] = JSON.stringify(taffy_globalJson);
    updateInputArrayPreview(); //update preview only
}

var exportToJsonFile = function(jsonData) {
    var content = JSON.stringify(jsonData);
    var uriContent = "data:application/json," + encodeURIComponent(content);
    //var newWindow = window.open(uriContent, 'JSON');
    window.open(uriContent, 'JSON');

}

/* ************************ End Manipulation Relate ************************* */

/* ********************** Start Initialization Related ********************** */

var initTaffyDBfromLocalStorage = function (taffy_globalJson) {
    /* ************* Define Session TaffyDB ******************* */
    //break myDemoJson down into TaffyDB ER-like classes

    var plantclass = TAFFY(taffy_globalJson.plantclass);
    var plantorder = TAFFY(taffy_globalJson.plantorder);
    var family = TAFFY(taffy_globalJson.family);
    var genus = TAFFY(taffy_globalJson.genus);
    var species = TAFFY(taffy_globalJson.species);
    var leafArrangement = TAFFY(taffy_globalJson.leafArrangement);
    var leafStructure = TAFFY(taffy_globalJson.leafStructure);
    var leafMargin = TAFFY(taffy_globalJson.leafMargin);
    var leafAttachment = TAFFY(taffy_globalJson.leafAttachment);
    var leafShape = TAFFY(taffy_globalJson.leafShape);
    var leafSurface = TAFFY(taffy_globalJson.leafSurface);
    var leafVenation = TAFFY(taffy_globalJson.leafVenation);
    var leafHairs = TAFFY(taffy_globalJson.leafHairs);
    var leafMorph = TAFFY(taffy_globalJson.leafMorph);

    // configure existing json as a json with TaffyDB specific formatting

    taffy_globalJson.species = species().get();
    taffy_globalJson.leafArrangement = leafArrangement().get();
    taffy_globalJson.leafStructure = leafStructure().get();
    taffy_globalJson.leafMargin = leafMargin().get();
    taffy_globalJson.leafAttachment = leafAttachment().get();
    taffy_globalJson.leafShape = leafShape().get();
    taffy_globalJson.leafSurface = leafSurface().get();
    taffy_globalJson.leafVenation = leafVenation().get();
    taffy_globalJson.leafHairs = leafHairs().get();
    taffy_globalJson.leafMorph = leafMorph().get();

    return taffy_globalJson;
}

var returnThisPageFileName = function() {

    var parts = window.location.pathname.split( '/' );
    var query = parts[parts.length-1].split( '.html' );
        query[0] = query[0].replace(/-/g, " ");

    // for this usecase, it will return eith morphologyFilter or addObservation
    return query[0];
}

var populateDOMObjects = function(taffy_globalJson){
    var thispage = returnThisPageFileName();

    if (thispage === 'morphologyFilter') {
        $('#fileinput').change(function(){
            loadJsonFile();
        });

        populateLocalHerbariumQueryDropBoxes(taffy_globalJson);

    } else if (thispage === 'addObservation') {
        populateLocalHerbariumQueryDropBoxes(taffy_globalJson);

        // page specific events

        $('select').change(function() {
            updateInputArrayPreview();
        });

        $('#btnAddMorphologyRecord').click(function(){
            addMorphObservation();
        });

        $('#btnClearMorphologyRecord').click(function(){
            resetMorphologyInputs();
        });

        $('#btnExportJsonFile').click(function(){
            var taffy_globalJson = JSON.parse(localStorage.getItem('taffy_globalJson'));
            //var taffy_globalJson = localStorage.getItem('taffy_globalJson');
            exportToJsonFile(taffy_globalJson);
        });
    }

    $('.myhomelink').click(function(){
         localStorage.clear();
         window.location='./index.html';
    });
}

var pageMain = function(){
    // get json from last localStorage definition
    var taffy_globalJson = JSON.parse(localStorage.getItem('taffy_globalJson'));

    // re-initialize TaffyDB on Page loadFile
    taffy_globalJson = initTaffyDBfromLocalStorage(taffy_globalJson);
    populateDOMObjects(taffy_globalJson);
}

/* *********************** End Initialization Related *********************** */
