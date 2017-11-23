var populateComboBox = function(classNameString, classNameObj) {
    var i, queryArr, dbxOption, dropboxID, classAttributeObj, outputDispID;

    dropboxID = "#dbx" + classNameString;
    if (classNameString === "species") {
        classAttributeObj = classNameString + 'Description'; // display common name if available or "species"
    } else {
        classAttributeObj = classNameString + 'Name';
    }
    outputDispID = "#value" + classNameString;

    queryArr = classNameObj().select(classAttributeObj);

    for(i = 0; i < queryArr.length; i++) {
        dbxOption = '<option value="'+ i + '">' + queryArr[i] + '</option>';
        $(dropboxID).append(dbxOption);
    }
}

var dispComboBoxDescription = function(classNameString, classNameObj) {
    var dropboxID, classAttributeObj, outputDispID;

    dropboxID = "#dbx" + classNameString;
    classAttributeObj = classNameString + 'Description';
    outputDispID = "#value" + classNameString;

    $(dropboxID).change(function () {
        var selectedValue, morphName, morphDescription;

        selectedValue = $(this).val();
        morphName = classNameObj().select(classNameString + 'Name');
        $(outputDispID).text(morphName[selectedValue]);

        morphDescription = classNameObj().select(classNameString + 'Description');
        $(outputDispID).click(function(){
            $('#dropDownDescription').html("<b>" + morphName[selectedValue] + "</b>: " + morphDescription[selectedValue]);
            location.href='#descriptionAnchor';
        });
    });
}

var dispComboBoxDescriptionInput = function(classNameString, classNameObj) {
    var dropboxID, classAttributeObj, outputDispID;

    dropboxID = "#dbx" + classNameString;
    classAttributeObj = classNameString + 'Description';
    outputDispID = "#value" + classNameString;

    $(dropboxID).change(function () {
        var selectedValue, morphName, morphDescription;

        selectedValue = $(this).val();
        morphName = classNameObj().select(classNameString + 'Name');
        $(outputDispID).text(morphName[selectedValue]);

        morphDescription = classNameObj().select(classNameString + 'Description');
        $(outputDispID).click(function(){
            descriptionTextClass = ".descriptionvalue" + classNameString + "Input";
            $(descriptionTextClass).html("<b>" + morphName[selectedValue] + "</b>: " + morphDescription[selectedValue]);
        });
    });
}

var returnSwitchQueryObj = function() {

    var switchArr = [];
    var switchObj = [];
    var i;

    switchArr[0] = $('#ckbleafArrangement').is(':checked');
    switchArr[1] = $('#ckbleafStructure').is(':checked');
    switchArr[2] = $('#ckbleafMargin').is(':checked');
    switchArr[3] = $('#ckbleafAttachment').is(':checked');
    switchArr[4] = $('#ckbleafShape').is(':checked');
    switchArr[5] = $('#ckbleafSurface').is(':checked');
    switchArr[6] = $('#ckbleafVenation').is(':checked');
    switchArr[7] = $('#ckbleafHairs').is(':checked');

    if (switchArr[0]) {switchObj.push({'leafArrangement_FK' : parseInt($("#dbxleafArrangement").val())});}
    if (switchArr[1]) {switchObj.push({'leafStructure_FK' : parseInt($("#dbxleafStructure").val())});}
    if (switchArr[2]) {switchObj.push({'leafMargin_FK' : parseInt($("#dbxleafMargin").val())});}
    if (switchArr[3]) {switchObj.push({'leafAttachment_FK' : parseInt($("#dbxleafAttachment").val())});}
    if (switchArr[4]) {switchObj.push({'leafShape_FK' : parseInt($("#dbxleafShape").val())});}
    if (switchArr[5]) {switchObj.push({'leafSurfaceTop_FK' : parseInt($("#dbxleafSurface").val())});}
    if (switchArr[6]) {switchObj.push({'leafVenation_FK' : parseInt($("#dbxleafVenation").val())});}
    if (switchArr[7]) {switchObj.push({'leafHairsTop_FK' : parseInt($("#dbxleafHairs").val())});}

    return switchObj;
}

var switchFilterQuery = function() {
    var tempObj, i;
    var switchObj = returnSwitchQueryObj(); //return a list of flaged Foregin Keys

    var returnQueryArr = leafMorph(switchObj).select("leafMorphID"); //retrieve the IDs of the morphology filter

    var species_FK = [];
    for (i = 0; i < returnQueryArr.length; i+=1 ) {
        species_FK[i] = leafMorph({leafMorphID: returnQueryArr[i]}).select("species_FK"); //retrieve foregin keys pointing to species ID
    }

    var returnSpeciesArr = [];
    var returnCommonNameArr = [];
    for (i = 0; i < species_FK.length; i+=1 ) {
        returnSpeciesArr[i] = species({speciesID:species_FK[i]}).select("speciesDescription"); //retrieve the names of the species ID
        returnCommonNameArr.push(returnSpeciesArr[i][0]); //used for formatting common name display name
    }
    returnCommonNameArr = _.uniq(returnCommonNameArr); //remove repeat common names

    $("#plantList").html(""); //clear display
    $("#plantList").append("<ul>");
    for (i = 0; i < returnCommonNameArr.length; i+=1 ) {
        $("#plantList").append("<li>"+returnCommonNameArr[i]+"</li>"); //display common names of matching plants
    }
    $("#plantList").append("</ul>");

}

/* Initialize morphologyFilter.html */
var populateLocalHerbariumQueryDropBoxes = function(){
    //Populate Combo Boxes
    populateComboBox('leafArrangement', leafArrangement);
    populateComboBox('leafStructure', leafStructure);
    populateComboBox('leafMargin', leafMargin);
    populateComboBox('leafAttachment', leafAttachment);
    populateComboBox('leafShape', leafShape);
    populateComboBox('leafSurface', leafSurface);
    populateComboBox('leafVenation', leafVenation);
    populateComboBox('leafHairs', leafHairs);

    //Combo Box Events
    dispComboBoxDescription('leafArrangement', leafArrangement);
    dispComboBoxDescription('leafStructure', leafStructure);
    dispComboBoxDescription('leafMargin', leafMargin);
    dispComboBoxDescription('leafAttachment', leafAttachment);
    dispComboBoxDescription('leafShape', leafShape);
    dispComboBoxDescription('leafSurface', leafSurface);
    dispComboBoxDescription('leafVenation', leafVenation);
    dispComboBoxDescription('leafHairs', leafHairs);

    //localStorage.clear();
    //localStorage.removeItem("leafMorph");

    //perform fresh query when the drop box has changed value
    $('select').change(function(){
        switchFilterQuery();
    });

    //perform fresh query when the on/off is toggled
    $('input').change(function(){
        switchFilterQuery();
    });


}

/* Initialize addObservation.html */
var populateMorphologyInputDropBoxes = function() {

    //Populate Combo Boxes
    populateComboBox('species', species);

    populateComboBox('leafArrangement', leafArrangement);
    populateComboBox('leafStructure', leafStructure);
    populateComboBox('leafMargin', leafMargin);
    populateComboBox('leafAttachment', leafAttachment);
    populateComboBox('leafShape', leafShape);
    populateComboBox('leafSurface', leafSurface);
    populateComboBox('leafVenation', leafVenation);
    populateComboBox('leafHairs', leafHairs);

    //Combo Box Events
    dispComboBoxDescriptionInput('leafArrangement', leafArrangement);
    dispComboBoxDescriptionInput('leafStructure', leafStructure);
    dispComboBoxDescriptionInput('leafMargin', leafMargin);
    dispComboBoxDescriptionInput('leafAttachment', leafAttachment);
    dispComboBoxDescriptionInput('leafShape', leafShape);
    dispComboBoxDescriptionInput('leafSurface', leafSurface);
    dispComboBoxDescriptionInput('leafVenation', leafVenation);
    dispComboBoxDescriptionInput('leafHairs', leafHairs);

    // update preview only
    updateInputArrayPreview();
}

/* preview morphollogy input addObservation.html */
var updateInputArrayPreview = function() {
    var inputPreview = JSON.stringify(inputArrayObject());
    $('#inputPreview').val(inputPreview);
    autosize($('textarea'));
}

// used to as confirmation/debug display
// display purposes only addObservation.html
var inputArrayObject = function() {
    var inputObservationObj = [];
    var leafMorphLength = leafMorph().select("leafMorphID").length;
    leafMorphLength = leafMorphLength + 1; // the next record index
    console.log(leafMorphLength);

    inputObservationObj.push({"leafMorphID":leafMorphLength});
    inputObservationObj.push({"species_FK":parseInt($("#dbxspecies").val())});
    inputObservationObj.push({"leafArrangement_FK":parseInt($("#dbxleafArrangement").val())});
    inputObservationObj.push({"leafStructure_FK":parseInt($("#dbxleafStructure").val())});
    inputObservationObj.push({"leafMargin_FK":parseInt($("#dbxleafMargin").val())});
    inputObservationObj.push({"leafAttachment_FK" : parseInt($("#dbxleafAttachment").val())});
    inputObservationObj.push({"leafShape_FK" : parseInt($("#dbxleafShape").val())});
    inputObservationObj.push({"leafApex_FK" : 0}); // unused in this example
    inputObservationObj.push({"leafBase_FK" : 0}); // unused in this example
    inputObservationObj.push({"leafSurfaceTop_FK" : parseInt($("#dbxleafSurface").val())});
    inputObservationObj.push({"leafSurfaceBottom_FK" : 0}); // unused in this example
    inputObservationObj.push({"leafVenation_FK" : parseInt($("#dbxleafVenation").val())});
    inputObservationObj.push({"leafHairsTop_FK" : parseInt($("#dbxleafHairs").val())});
    inputObservationObj.push({"leafHairsBottom_FK" : 0}); // unused in this example

    return inputObservationObj;
}

// store the observation dropbox state as an obj var
// used for current DB manipulation addObservation.html
var inputDropBoxValueObject = function() {

    var dbxSelectionState = new Object();

    dbxSelectionState["leafMorphID"] = (leafMorph().get().length);
    dbxSelectionState["species_FK"] = parseInt($("#dbxspecies").val());
    dbxSelectionState["leafArrangement_FK"] = parseInt($("#dbxleafArrangement").val());
    dbxSelectionState["leafStructure_FK"] = parseInt($("#dbxleafStructure").val());
    dbxSelectionState["leafMargin_FK"] = parseInt($("#dbxleafMargin").val());
    dbxSelectionState["leafAttachment_FK" ] = parseInt($("#dbxleafAttachment").val());
    dbxSelectionState["leafShape_FK" ] = parseInt($("#dbxleafShape").val());
    dbxSelectionState["leafApex_FK" ] = 0; // unused in this example
    dbxSelectionState["leafBase_FK" ] = 0; // unused in this example
    dbxSelectionState["leafSurfaceTop_FK" ] = parseInt($("#dbxleafSurface").val());
    dbxSelectionState["leafSurfaceBottom_FK" ] = 0; // unused in this example
    dbxSelectionState["leafVenation_FK" ] = parseInt($("#dbxleafVenation").val());
    dbxSelectionState["leafHairsTop_FK" ] = parseInt($("#dbxleafHairs").val());
    dbxSelectionState["leafHairsBottom_FK" ] = 0; // unused in this example

    return dbxSelectionState;
}

var resetMorphologyInputs = function() {
    $('select').prop('selectedIndex',0);
    //update preview only
    updateInputArrayPreview();
}

/* Adding Record to current Json DB addObservation.html */
var localStorageAndTaffyDB = function() {
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

    var newObservation = inputDropBoxValueObject();
    leafMorph.insert(newObservation);
}

/* import/overwrite a fresh new json DB */
// Used in morphologyFilter.html
var loadFile = function() {
    var input, file, fr;

    if (typeof window.FileReader !== 'function') {
        alert("The file API isn't supported on this browser yet.");
        return;
    }

    input = document.getElementById('fileinput');
    if (!input) {
        alert("Um, couldn't find the fileinput element.");
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
        var importedJsonObject = JSON.parse(lines);

        // update localStorage
        resetLocalStorage2Taffy();
        resetTaffy2localStorage();

    }
}

// update localStorage both Taffy and Traditional
var updateMylocalStorage = function(){
    // re-initialize TaffyDB on Page loadFile
    plantclass = TAFFY(localStorage['plantclass']);
    plantorder = TAFFY(localStorage['plantorder']);
    family = TAFFY(localStorage['family']);
    genus = TAFFY(localStorage['genus']);
    species = TAFFY(localStorage['species']);
    leafArrangement = TAFFY(localStorage['leafArrangement']);
    leafStructure = TAFFY(localStorage['leafStructure']);
    leafMargin = TAFFY(localStorage['leafMargin']);
    leafAttachment = TAFFY(localStorage['leafAttachment']);
    leafShape = TAFFY(localStorage['leafShape']);
    leafSurface = TAFFY(localStorage['leafSurface']);
    leafVenation = TAFFY(localStorage['leafVenation']);
    leafHairs = TAFFY(localStorage['leafHairs']);
    leafMorph = TAFFY(localStorage['leafMorph']);

    // re-initialize TaffyDB on Page loadFile

    localStorage['plantclass'] = plantclass().stringify();
    localStorage['plantorder'] = plantorder().stringify();
    localStorage['family'] = family().stringify();
    localStorage['genus'] = genus().stringify();
    localStorage['species'] = species().stringify();
    localStorage['leafArrangement'] = leafArrangement().stringify();
    localStorage['leafStructure'] = leafStructure().stringify();
    localStorage['leafMargin'] = leafMargin().stringify();
    localStorage['leafAttachment'] = leafAttachment().stringify();
    localStorage['leafShape'] = leafShape().stringify();
    localStorage['leafSurface'] = leafSurface().stringify();
    localStorage['leafVenation'] = leafVenation().stringify();
    localStorage['leafHairs'] = leafHairs().stringify();
    localStorage['leafMorph'] = leafMorph().stringify();
}

var resetTaffy2localStorage = function(){
    // re-initialize TaffyDB on Page loadFile
    plantclass = TAFFY(localStorage['plantclass']);
    plantorder = TAFFY(localStorage['plantorder']);
    family = TAFFY(localStorage['family']);
    genus = TAFFY(localStorage['genus']);
    species = TAFFY(localStorage['species']);
    leafArrangement = TAFFY(localStorage['leafArrangement']);
    leafStructure = TAFFY(localStorage['leafStructure']);
    leafMargin = TAFFY(localStorage['leafMargin']);
    leafAttachment = TAFFY(localStorage['leafAttachment']);
    leafShape = TAFFY(localStorage['leafShape']);
    leafSurface = TAFFY(localStorage['leafSurface']);
    leafVenation = TAFFY(localStorage['leafVenation']);
    leafHairs = TAFFY(localStorage['leafHairs']);
    leafMorph = TAFFY(localStorage['leafMorph']);
}

var resetLocalStorage2Taffy = function(){
    // re-initialize TaffyDB on Page loadFile

    localStorage['plantclass'] = plantclass().stringify();
    localStorage['plantorder'] = plantorder().stringify();
    localStorage['family'] = family().stringify();
    localStorage['genus'] = genus().stringify();
    localStorage['species'] = species().stringify();
    localStorage['leafArrangement'] = leafArrangement().stringify();
    localStorage['leafStructure'] = leafStructure().stringify();
    localStorage['leafMargin'] = leafMargin().stringify();
    localStorage['leafAttachment'] = leafAttachment().stringify();
    localStorage['leafShape'] = leafShape().stringify();
    localStorage['leafSurface'] = leafSurface().stringify();
    localStorage['leafVenation'] = leafVenation().stringify();
    localStorage['leafHairs'] = leafHairs().stringify();
    localStorage['leafMorph'] = leafMorph().stringify();
}

var resetTaffy2localStoragetaffy = function(){
    // re-initialize TaffyDB on Page loadFile
    plantclass = TAFFY(localStorage['taffy_plantclass']);
    plantorder = TAFFY(localStorage['taffy_plantorder']);
    family = TAFFY(localStorage['taffy_family']);
    genus = TAFFY(localStorage['taffy_genus']);
    species = TAFFY(localStorage['taffy_species']);
    leafArrangement = TAFFY(localStorage['taffy_leafArrangement']);
    leafStructure = TAFFY(localStorage['taffy_leafStructure']);
    leafMargin = TAFFY(localStorage['taffy_leafMargin']);
    leafAttachment = TAFFY(localStorage['taffy_leafAttachment']);
    leafShape = TAFFY(localStorage['taffy_leafShape']);
    leafSurface = TAFFY(localStorage['taffy_leafSurface']);
    leafVenation = TAFFY(localStorage['taffy_leafVenation']);
    leafHairs = TAFFY(localStorage['taffy_leafHairs']);
    leafMorph = TAFFY(localStorage['taffy_leafMorph']);
}


$('.myhomelink').click(function(){
     localStorage.clear();
     window.location='./index.html';
     //return false;
});

// update preview only
$( "select" ).change(function() {
    updateInputArrayPreview();
});

// update preview and lariables
$('#btnAddMorphologyRecord').click(function(){
    updateInputArrayPreview();

    // re-initialize TaffyDB on Page loadFile
    resetTaffy2localStorage();

    localStorageAndTaffyDB();

    // re-initialize TaffyDB on Page loadFile
    resetLocalStorage2Taffy();
});
