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
    if (switchArr[2]) {switchObj.push({'leafMargin_FK'  : parseInt($("#dbxleafMargin").val())});}
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
