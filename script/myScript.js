var populateComboBox = function(classNameString, classNameObj) {
    var i, queryArr, dbxOption, dropboxID, classAttributeObj, outputDispID;

    dropboxID = "#dbx" + classNameString;
    classAttributeObj = classNameString + 'Name';
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

var populateComboBoxInput = function(classNameString, classNameObj) { // used in index.html dropboxes
    var i, queryArr, dbxOption, dropboxID, classAttributeObj, outputDispID;

    dropboxID = "#dbx" + classNameString + "Input";

    if (classNameString === "species") {
        classAttributeObj = classNameString + 'Description'; // display common name
    } else {
        classAttributeObj = classNameString + 'Name';
    }

    outputDispID = "#value" + classNameString  + "Input";

    queryArr = classNameObj().select(classAttributeObj);

    for(i = 0; i < queryArr.length; i++) {
        dbxOption = '<option value="'+ i + '">' + queryArr[i] + '</option>';
        $(dropboxID).append(dbxOption);
    }

}

var dispComboBoxDescriptionInput = function(classNameString, classNameObj) {
    var dropboxID, classAttributeObj, outputDispID;

    dropboxID = "#dbx" + classNameString  + "Input";
    classAttributeObj = classNameString + 'Description';
    outputDispID = "#value" + classNameString  + "Input";

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
    console.log("switchObj", switchObj);

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

    //perform fresh query when the drop box has changed value
    $('select').change(function(){
        switchFilterQuery();
    });

    //perform fresh query when the on/off is toggled
    $('input').change(function(){
        switchFilterQuery();
    });
}

var populateMorphologyInputDropBoxes = function() {
    populateComboBoxInput('species', species);

    //Populate Combo Boxes
    populateComboBoxInput('leafArrangement', leafArrangement);
    populateComboBoxInput('leafStructure', leafStructure);
    populateComboBoxInput('leafMargin', leafMargin);
    populateComboBoxInput('leafAttachment', leafAttachment);
    populateComboBoxInput('leafShape', leafShape);
    populateComboBoxInput('leafSurface', leafSurface);
    populateComboBoxInput('leafVenation', leafVenation);
    populateComboBoxInput('leafHairs', leafHairs);

    //Combo Box Events
    dispComboBoxDescriptionInput('leafArrangement', leafArrangement);
    dispComboBoxDescriptionInput('leafStructure', leafStructure);
    dispComboBoxDescriptionInput('leafMargin', leafMargin);
    dispComboBoxDescriptionInput('leafAttachment', leafAttachment);
    dispComboBoxDescriptionInput('leafShape', leafShape);
    dispComboBoxDescriptionInput('leafSurface', leafSurface);
    dispComboBoxDescriptionInput('leafVenation', leafVenation);
    dispComboBoxDescriptionInput('leafHairs', leafHairs);

    $( "select" ).change(function() {
        updateInputArrayPreview();
    });

    $('#btnAddMorphologyRecord').click(function(){
        addMorphologyObservation(leafMorph);
    });
}

/* preview morphollogy input */
var updateInputArrayPreview = function() {
    $('#inputPreview').val(JSON.stringify(inputArrayObject()));
    autosize($('textarea'));
}

var inputArrayObject = function() {
    var inputObservationObj = [];
    var leafMorphLength = leafMorph().select("leafMorphID").length;
    leafMorphLength = leafMorphLength + 1; // the next record index

    inputObservationObj.push({"leafMorphID":leafMorphLength});
    inputObservationObj.push({"species_FK":parseInt($("#dbxspeciesInput").val())});
    inputObservationObj.push({"leafArrangement_FK":parseInt($("#dbxleafArrangementInput").val())});
    inputObservationObj.push({"leafStructure_FK":parseInt($("#dbxleafStructureInput").val())});
    inputObservationObj.push({"leafMargin_FK":parseInt($("#dbxleafMarginInput").val())});
    inputObservationObj.push({"leafAttachment_FK" : parseInt($("#dbxleafAttachmentInput").val())});
    inputObservationObj.push({"leafShape_FK" : parseInt($("#dbxleafShapeInput").val())});
    inputObservationObj.push({"leafApex_FK" : 0}); // unused in this example
    inputObservationObj.push({"leafBase_FK" : 0}); // unused in this example
    inputObservationObj.push({"leafSurfaceTop_FK" : parseInt($("#dbxleafSurfaceInput").val())});
    inputObservationObj.push({"leafSurfaceBottom_FK" : 0}); // unused in this example
    inputObservationObj.push({"leafVenation_FK" : parseInt($("#dbxleafVenationInput").val())});
    inputObservationObj.push({"leafHairsTop_FK" : parseInt($("#dbxleafHairsInput").val())});
    inputObservationObj.push({"leafHairsBottom_FK" : 0}); // unused in this example

    return inputObservationObj;
}

var resetMorphologyInputs = function() {
    $('select').prop('selectedIndex',0);
    updateInputArrayPreview();

    //refresh dropDown
    //$('select').empty();
    //populateLocalHerbariumQueryDropBoxes();
    //populateMorphologyInputDropBoxes();
}

/* Adding Record to Json DB */
var addMorphologyObservation = function(leafMorph) {
    var templeafMorphObj = inputArrayObject()[0];

    leafMorph.insert({
          "leafMorphID": templeafMorphObj.leafMorphID,
          "species_FK": templeafMorphObj.species_FK,
          "leafArrangement_FK": templeafMorphObj.leafArrangement_FK, //1
          "leafStructure_FK": templeafMorphObj.leafStructure_FK,
          "leafMargin_FK": templeafMorphObj.leafMargin_FK, //11
          "leafAttachment_FK": templeafMorphObj.leafAttachment_FK,
          "leafShape_FK": templeafMorphObj.leafShape_FK,
          "leafApex_FK":templeafMorphObj.leafApex_FK,
          "leafBase_FK":templeafMorphObj.leafBase_FK,
          "leafSurfaceTop_FK": templeafMorphObj.leafSurfaceTop_FK,
          "leafSurfaceBottom_FK": templeafMorphObj.leafSurfaceBottom_FK,
          "leafVenation_FK": templeafMorphObj.leafVenation_FK,
          "leafHairsTop_FK": templeafMorphObj.leafHairsTop_FK,
          "leafHairsBottom_FK":templeafMorphObj.leafHairsBottom_FK
     });

     resetMorphologyInputs();
}

var showAdd = function() {
    $( "#addMorphologyForm" ).toggle()
    $( "#dropDownDivs" ).toggle()

}
