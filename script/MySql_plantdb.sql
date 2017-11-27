/* just one big file */

/*
MS SQL Tables

DROP DATABASE `plantdb`;
CREATE DATABASE `plantdb`;

*/

/* =========================== Leaf Taxonomy ======================================*/

CREATE TABLE `plantclass`
(
    `plantclassID`    INT NOT NULL,
    `plantclassName` varchar(20) NULL,
	`plantclassDescription` varchar(1000) NULL,
    CONSTRAINT PK_plantclass PRIMARY KEY CLUSTERED (`plantclassID` ASC)
);

/* ------- Order  Table -------*/

CREATE TABLE `plantorder`
(
    `plantorderID`  INT NOT NULL,
    `plantorderName` varchar(20) NULL,
	`plantorderDescription` varchar(1000) NULL,
	`plantclass_FK` INT NOT NULL,
    CONSTRAINT `PK_plantorder` PRIMARY KEY CLUSTERED (`plantorderID` ASC),
	CONSTRAINT `FK_plantclass` FOREIGN KEY (`plantclass_FK`) REFERENCES `plantclass` (`plantclassID`)
);

/* ------- Family Table -------*/

CREATE TABLE `family`
(
    `familyID`  INT NOT NULL,
    `familyName` varchar(20) NULL,
	`familyDescription` varchar(1000) NULL,
	`plantorder_FK` INT NOT NULL,
    CONSTRAINT `PK_family` PRIMARY KEY CLUSTERED (`familyID` ASC),
	CONSTRAINT `FK_plantorder` FOREIGN KEY (`plantorder_FK`) REFERENCES `plantorder` (`plantorderID`)
);

/* ------- Genus Table -------*/

CREATE TABLE `genus`
(
    `genusID`   INT NOT NULL,
    `genusName` varchar(20) NULL,
	`genusDescription` varchar(1000) NULL,
	`family_FK` INT NOT NULL,
    CONSTRAINT `PK_genus` PRIMARY KEY CLUSTERED (`genusID` ASC),
	CONSTRAINT `FK_family` FOREIGN KEY (`family_FK`) REFERENCES `family` (`familyID`)
);

/* ------- Species Table -------*/

CREATE TABLE `species`
(
    `speciesID`   INT NOT NULL,
    `speciesName` varchar(20) NULL,
	`speciesSymbol` varchar(20) NULL,
	`speciesDescription` varchar(1000) NULL,
	`genus_FK` INT NOT NULL,
    CONSTRAINT `PK_species` PRIMARY KEY CLUSTERED (`speciesID` ASC),
	CONSTRAINT `FK_genus` FOREIGN KEY (`genus_FK`) REFERENCES `genus` (`genusID`)
);

/* =========================== Leaf Morphology ====================================== */

/* ------- arrangement Morphology Table -------*/

CREATE TABLE `leafArrangement`
(
	`leafArrangementID`  INT NOT NULL,
	`leafArrangementName` varchar(50) NULL,
	`leafArrangementDescription` varchar(1000) NULL,
	CONSTRAINT `PK_leafArrangement` PRIMARY KEY CLUSTERED (`leafArrangementID` ASC)
);

/* ------- structure Morphology Table -------*/

CREATE TABLE `leafStructure`
(
	`leafStructureID`  INT NOT NULL,
	`leafStructureName` varchar(50) NULL,
	`leafStructureDescription` varchar(1000) NULL,
	CONSTRAINT `PK_leafStructure` PRIMARY KEY CLUSTERED (`leafStructureID` ASC)
);

/* ------- margin Morphology Table -------*/

CREATE TABLE `leafMargin`
(
	`leafMarginID`  INT NOT NULL,
	`leafMarginName` varchar(50) NULL,
	`leafMarginDescription` varchar(1000) NULL,
	CONSTRAINT `PK_leafMargin` PRIMARY KEY CLUSTERED (`leafMarginID` ASC)
);

/* ------- attachment Morphology Table -------*/

CREATE TABLE `leafAttachment`
(
	`leafAttachmentID`  INT NOT NULL,
	`leafAttachmentName` varchar(50) NULL,
	`leafAttachmentDescription` varchar(1000) NULL,
	CONSTRAINT `PK_leafAttachment` PRIMARY KEY CLUSTERED (`leafAttachmentID` ASC)
);

/* ------- shape Morphology Table -------*/

CREATE TABLE `leafShape`
(
	`leafShapeID`  INT NOT NULL,
	`leafShapeName` varchar(50) NULL,
	`leafShapeDescription` varchar(1000) NULL,
	CONSTRAINT `PK_leafShape` PRIMARY KEY CLUSTERED (`leafShapeID` ASC)
);

/* ------- surface Morphology Table -------*/

 CREATE TABLE `leafSurface`
(
	`leafSurfaceID`  INT NOT NULL,
	`leafSurfaceName` varchar(50) NULL,
	`leafSurfaceDescription` varchar(1000) NULL,
	CONSTRAINT `PK_leafSurface` PRIMARY KEY CLUSTERED (`leafSurfaceID` ASC)
);

/* ------- venation Morphology Table -------*/

 CREATE TABLE `leafVenation`
(
	`leafVenationID`  INT NOT NULL,
	`leafVenationName` varchar(50) NULL,
	`leafVenationDescription` varchar(1000) NULL,
	CONSTRAINT `PK_leafVenation` PRIMARY KEY CLUSTERED (`leafVenationID` ASC)
);

/* ------- hair Morphology Table -------*/

CREATE TABLE `leafHairs`
(
	`leafHairsID`  INT NOT NULL,
	`leafHairsName` varchar(50) NULL,
	`leafHairsDescription` varchar(1000) NULL,
	CONSTRAINT `PK_leafHairs` PRIMARY KEY CLUSTERED (`leafHairsID` ASC)
);



 CREATE TABLE `leafMorph`
(
	`leafMorphID`  INT NOT NULL,
	`species_FK` INT NULL,
	`leafArrangement_FK` INT NULL,
	`leafStructure_FK` INT NULL,
	`leafMargin_FK` INT NULL,
	`leafAttachment_FK` INT NULL,
	`leafShape_FK` INT NULL,
	`leafSurface_FK`  INT NULL,
	`leafVenation_FK` INT NULL,
	`leafHairs_FK` INT NULL,
	CONSTRAINT `PK_leafMorph` PRIMARY KEY CLUSTERED (`leafMorphID` ASC),
	CONSTRAINT `FK_species` FOREIGN KEY (`species_FK`) REFERENCES `species` (`speciesID`),
	CONSTRAINT `FK_leafArrangement` FOREIGN KEY (`leafArrangement_FK`) REFERENCES `leafArrangement` (`leafArrangementID`),
	CONSTRAINT `FK_leafStructure` FOREIGN KEY (`leafStructure_FK`) REFERENCES `leafStructure` (`leafStructureID`),
	CONSTRAINT `FK_leafMargin` FOREIGN KEY (`leafMargin_FK`) REFERENCES `leafMargin` (`leafMarginID`),
	CONSTRAINT `FK_leafAttachment` FOREIGN KEY (`leafAttachment_FK`) REFERENCES `leafAttachment` (`leafAttachmentID`),
	CONSTRAINT `FK_leafShape` FOREIGN KEY (`leafShape_FK`) REFERENCES `leafShape` (`leafShapeID`),
	CONSTRAINT `FK_leafSurface` FOREIGN KEY (`leafSurface_FK`) REFERENCES `leafSurface` (`leafSurfaceID`),
	CONSTRAINT `FK_leafVenation` FOREIGN KEY (`leafVenation_FK`) REFERENCES `leafVenation` (`leafVenationID`),
	CONSTRAINT `FK_leafHairs` FOREIGN KEY (`leafHairs_FK`) REFERENCES `leafHairs` (`leafHairsID`)
);

/*
MS Sql Inserts
Taxonomy from: http://www.itis.gov/
*/

/* =========================== Leaf Taxonomy ======================================*/

/* -------------------- class insert -------------------------- */

/* ------------------- plantclass Table INSERT ----------------------------- */

INSERT INTO `plantclass` (`plantclassID`, `plantclassName`, `plantclassDescription`) VALUES ('0', '', '');
INSERT INTO `plantclass` (`plantclassID`, `plantclassName`, `plantclassDescription`) VALUES ('1', 'Magnoliopsida', '');
INSERT INTO `plantclass` (`plantclassID`, `plantclassName`, `plantclassDescription`) VALUES ('2', 'Pinopsida', 'conifers');



/* -------------------- order insert -------------------------- */

/* ------------------- plantorder Table INSERT ----------------------------- */

INSERT INTO `plantorder` (`plantorderID`, `plantorderName`, `plantorderDescription`, `plantclass_FK`) VALUES ('0', '', '', '0');
INSERT INTO `plantorder` (`plantorderID`, `plantorderName`, `plantorderDescription`, `plantclass_FK`) VALUES ('1', 'Sapindales', '', '1');
INSERT INTO `plantorder` (`plantorderID`, `plantorderName`, `plantorderDescription`, `plantclass_FK`) VALUES ('2', 'Fagales', '', '1');
INSERT INTO `plantorder` (`plantorderID`, `plantorderName`, `plantorderDescription`, `plantclass_FK`) VALUES ('3', 'Lamiales', '', '1');
INSERT INTO `plantorder` (`plantorderID`, `plantorderName`, `plantorderDescription`, `plantclass_FK`) VALUES ('4', 'Cornales', '', '1');
INSERT INTO `plantorder` (`plantorderID`, `plantorderName`, `plantorderDescription`, `plantclass_FK`) VALUES ('5', 'Ericales', '', '1');
INSERT INTO `plantorder` (`plantorderID`, `plantorderName`, `plantorderDescription`, `plantclass_FK`) VALUES ('6', 'Saxifragales', '', '1');
INSERT INTO `plantorder` (`plantorderID`, `plantorderName`, `plantorderDescription`, `plantclass_FK`) VALUES ('7', 'Pinales', 'pines', '2');
INSERT INTO `plantorder` (`plantorderID`, `plantorderName`, `plantorderDescription`, `plantclass_FK`) VALUES ('8', 'Rosales', '', '1');
INSERT INTO `plantorder` (`plantorderID`, `plantorderName`, `plantorderDescription`, `plantclass_FK`) VALUES ('9', 'Laurales', '', '1');
INSERT INTO `plantorder` (`plantorderID`, `plantorderName`, `plantorderDescription`, `plantclass_FK`) VALUES ('10', 'Ericales', '', '1');
INSERT INTO `plantorder` (`plantorderID`, `plantorderName`, `plantorderDescription`, `plantclass_FK`) VALUES ('11', 'Magnoliales', '', '1');



/* -------------------- family insert -------------------------- */

/* ------------------- family Table INSERT ----------------------------- */

INSERT INTO `family` (`familyID`, `familyName`, `familyDescription`, `plantorder_FK`) VALUES ('0', '', '', '0');
INSERT INTO `family` (`familyID`, `familyName`, `familyDescription`, `plantorder_FK`) VALUES ('1', 'Sapindaceae', 'soapberries', '1');
INSERT INTO `family` (`familyID`, `familyName`, `familyDescription`, `plantorder_FK`) VALUES ('2', 'Juglandaceae', 'walnuts', '2');
INSERT INTO `family` (`familyID`, `familyName`, `familyDescription`, `plantorder_FK`) VALUES ('3', 'Lamiaceae', 'mints', '3');
INSERT INTO `family` (`familyID`, `familyName`, `familyDescription`, `plantorder_FK`) VALUES ('4', 'Cornaceae', ' ', '4');
INSERT INTO `family` (`familyID`, `familyName`, `familyDescription`, `plantorder_FK`) VALUES ('5', 'Ebenaceae', 'ebony', '5');
INSERT INTO `family` (`familyID`, `familyName`, `familyDescription`, `plantorder_FK`) VALUES ('6', 'Altingiaceae', ' ', '6');
INSERT INTO `family` (`familyID`, `familyName`, `familyDescription`, `plantorder_FK`) VALUES ('7', 'Myricaceae', 'sweet gale', '2');
INSERT INTO `family` (`familyID`, `familyName`, `familyDescription`, `plantorder_FK`) VALUES ('8', 'Pinaceae', 'pines', '7');
INSERT INTO `family` (`familyID`, `familyName`, `familyDescription`, `plantorder_FK`) VALUES ('9', 'Rosaceae', 'roses', '8');
INSERT INTO `family` (`familyID`, `familyName`, `familyDescription`, `plantorder_FK`) VALUES ('10', 'Fagaceae', ' ', '2');
INSERT INTO `family` (`familyID`, `familyName`, `familyDescription`, `plantorder_FK`) VALUES ('11', 'Anacardiaceae', 'cashews', '1');
INSERT INTO `family` (`familyID`, `familyName`, `familyDescription`, `plantorder_FK`) VALUES ('12', 'Lauraceae', 'laurels', '9');
INSERT INTO `family` (`familyID`, `familyName`, `familyDescription`, `plantorder_FK`) VALUES ('13', 'Ericaceae', 'heaths', '10');
INSERT INTO `family` (`familyID`, `familyName`, `familyDescription`, `plantorder_FK`) VALUES ('14', 'Annonaceae', 'custard apples', '11');



/* -------------------- genus insert -------------------------- */

/* ------------------- genus Table INSERT ----------------------------- */

INSERT INTO `genus` (`genusID`, `genusName`, `genusDescription`, `family_FK`) VALUES ('0', '', '', '0');
INSERT INTO `genus` (`genusID`, `genusName`, `genusDescription`, `family_FK`) VALUES ('1', 'Acer', 'maple', '1');
INSERT INTO `genus` (`genusID`, `genusName`, `genusDescription`, `family_FK`) VALUES ('2', 'Carya', 'hickory', '2');
INSERT INTO `genus` (`genusID`, `genusName`, `genusDescription`, `family_FK`) VALUES ('3', 'Callicarpa', 'beautyberry', '3');
INSERT INTO `genus` (`genusID`, `genusName`, `genusDescription`, `family_FK`) VALUES ('4', 'Cornus', 'dogwoods', '4');
INSERT INTO `genus` (`genusID`, `genusName`, `genusDescription`, `family_FK`) VALUES ('5', 'Diospyros', 'divine fruit', '5');
INSERT INTO `genus` (`genusID`, `genusName`, `genusDescription`, `family_FK`) VALUES ('6', 'Liquidambar', 'liquid amber', '6');
INSERT INTO `genus` (`genusID`, `genusName`, `genusDescription`, `family_FK`) VALUES ('7', 'Morella', 'fragrance', '7');
INSERT INTO `genus` (`genusID`, `genusName`, `genusDescription`, `family_FK`) VALUES ('8', 'Pinus', 'pine', '8');
INSERT INTO `genus` (`genusID`, `genusName`, `genusDescription`, `family_FK`) VALUES ('9', 'Prunus', 'stone fruit', '9');
INSERT INTO `genus` (`genusID`, `genusName`, `genusDescription`, `family_FK`) VALUES ('10', 'Quercus', 'oak', '10');
INSERT INTO `genus` (`genusID`, `genusName`, `genusDescription`, `family_FK`) VALUES ('11', 'Rhus', 'red', '11');
INSERT INTO `genus` (`genusID`, `genusName`, `genusDescription`, `family_FK`) VALUES ('12', 'Sassafras', 'stone-breaking', '12');
INSERT INTO `genus` (`genusID`, `genusName`, `genusDescription`, `family_FK`) VALUES ('13', 'Toxicodendron', 'poison', '11');
INSERT INTO `genus` (`genusID`, `genusName`, `genusDescription`, `family_FK`) VALUES ('14', 'Vaccinium', 'berry', '13');
INSERT INTO `genus` (`genusID`, `genusName`, `genusDescription`, `family_FK`) VALUES ('15', 'Asimina', 'pawpaw', '14');
INSERT INTO `genus` (`genusID`, `genusName`, `genusDescription`, `family_FK`) VALUES ('16', 'Malus', 'apple', '9');



/* -------------------- species insert -------------------------- */

/* ------------------- species Table INSERT ----------------------------- */

INSERT INTO `species` (`speciesID`, `speciesName`, `speciesSymbol`, `speciesDescription`, `genus_FK`) VALUES ('0', '', '', '', '0');
INSERT INTO `species` (`speciesID`, `speciesName`, `speciesSymbol`, `speciesDescription`, `genus_FK`) VALUES ('1', 'rubrum', 'ACRU', 'red maple', '1');
INSERT INTO `species` (`speciesID`, `speciesName`, `speciesSymbol`, `speciesDescription`, `genus_FK`) VALUES ('2', 'alba', 'CAAL', 'Mockernut hickory', '2');
INSERT INTO `species` (`speciesID`, `speciesName`, `speciesSymbol`, `speciesDescription`, `genus_FK`) VALUES ('3', 'americana', 'CAAM', 'American beautyberry', '3');
INSERT INTO `species` (`speciesID`, `speciesName`, `speciesSymbol`, `speciesDescription`, `genus_FK`) VALUES ('4', 'florida', 'COFL', 'flowering dogwood ', '4');
INSERT INTO `species` (`speciesID`, `speciesName`, `speciesSymbol`, `speciesDescription`, `genus_FK`) VALUES ('5', 'virginiana', 'DIVI', 'common persimmon', '5');
INSERT INTO `species` (`speciesID`, `speciesName`, `speciesSymbol`, `speciesDescription`, `genus_FK`) VALUES ('6', 'tyraciflua', 'LIST', 'sweetgum', '6');
INSERT INTO `species` (`speciesID`, `speciesName`, `speciesSymbol`, `speciesDescription`, `genus_FK`) VALUES ('7', 'cerifera', 'MYCE', 'wax myrtle', '7');
INSERT INTO `species` (`speciesID`, `speciesName`, `speciesSymbol`, `speciesDescription`, `genus_FK`) VALUES ('8', 'echinata', 'PIEC', 'shortleaf pine', '8');
INSERT INTO `species` (`speciesID`, `speciesName`, `speciesSymbol`, `speciesDescription`, `genus_FK`) VALUES ('9', 'palustris', 'PIPA', 'longleaf pine', '8');
INSERT INTO `species` (`speciesID`, `speciesName`, `speciesSymbol`, `speciesDescription`, `genus_FK`) VALUES ('10', 'taeda', 'PITA', 'loblolly pine', '8');
INSERT INTO `species` (`speciesID`, `speciesName`, `speciesSymbol`, `speciesDescription`, `genus_FK`) VALUES ('11', 'serotina', 'PRSE', 'black cherry ', '9');
INSERT INTO `species` (`speciesID`, `speciesName`, `speciesSymbol`, `speciesDescription`, `genus_FK`) VALUES ('12', 'alba', 'QUAL', 'white oak', '10');
INSERT INTO `species` (`speciesID`, `speciesName`, `speciesSymbol`, `speciesDescription`, `genus_FK`) VALUES ('13', 'falcata', 'QUFA', 'southern red oak', '10');
INSERT INTO `species` (`speciesID`, `speciesName`, `speciesSymbol`, `speciesDescription`, `genus_FK`) VALUES ('14', 'incana', 'QUIN', 'bluejack oak ', '10');
INSERT INTO `species` (`speciesID`, `speciesName`, `speciesSymbol`, `speciesDescription`, `genus_FK`) VALUES ('15', 'laevis', 'QULAE', 'turkey oak ', '10');
INSERT INTO `species` (`speciesID`, `speciesName`, `speciesSymbol`, `speciesDescription`, `genus_FK`) VALUES ('16', 'laurifolia', 'QULAU', 'laurel oak ', '10');
INSERT INTO `species` (`speciesID`, `speciesName`, `speciesSymbol`, `speciesDescription`, `genus_FK`) VALUES ('17', 'margaretta', 'QUMARG', 'sand post oak', '10');
INSERT INTO `species` (`speciesID`, `speciesName`, `speciesSymbol`, `speciesDescription`, `genus_FK`) VALUES ('18', 'marilandica', 'QUMARI', 'blackjack oak', '10');
INSERT INTO `species` (`speciesID`, `speciesName`, `speciesSymbol`, `speciesDescription`, `genus_FK`) VALUES ('19', 'minima', 'QUMI', 'dwarf live oak', '10');
INSERT INTO `species` (`speciesID`, `speciesName`, `speciesSymbol`, `speciesDescription`, `genus_FK`) VALUES ('20', 'nigra', 'QUNI', 'water oak', '10');
INSERT INTO `species` (`speciesID`, `speciesName`, `speciesSymbol`, `speciesDescription`, `genus_FK`) VALUES ('21', 'stellata', 'QUST', 'post oak', '10');
INSERT INTO `species` (`speciesID`, `speciesName`, `speciesSymbol`, `speciesDescription`, `genus_FK`) VALUES ('22', 'virginiana', 'QUVI', 'live oak', '10');
INSERT INTO `species` (`speciesID`, `speciesName`, `speciesSymbol`, `speciesDescription`, `genus_FK`) VALUES ('23', 'phellos', 'QUPH', 'willow oak', '10');
INSERT INTO `species` (`speciesID`, `speciesName`, `speciesSymbol`, `speciesDescription`, `genus_FK`) VALUES ('24', 'pumila', 'QUPU', 'running oak ', '10');
INSERT INTO `species` (`speciesID`, `speciesName`, `speciesSymbol`, `speciesDescription`, `genus_FK`) VALUES ('25', 'copallinum', 'RHCO', 'winged sumac', '11');
INSERT INTO `species` (`speciesID`, `speciesName`, `speciesSymbol`, `speciesDescription`, `genus_FK`) VALUES ('26', 'albidum', 'SAAL', 'sassafras', '12');
INSERT INTO `species` (`speciesID`, `speciesName`, `speciesSymbol`, `speciesDescription`, `genus_FK`) VALUES ('27', 'diversilobum', 'TOXDIV', 'poison oak ', '13');
INSERT INTO `species` (`speciesID`, `speciesName`, `speciesSymbol`, `speciesDescription`, `genus_FK`) VALUES ('28', 'radicans', 'TORAR', 'eastern poison ivy', '13');
INSERT INTO `species` (`speciesID`, `speciesName`, `speciesSymbol`, `speciesDescription`, `genus_FK`) VALUES ('29', 'arboreum', 'VAAR', 'sparkleberry or farkleberry', '14');
INSERT INTO `species` (`speciesID`, `speciesName`, `speciesSymbol`, `speciesDescription`, `genus_FK`) VALUES ('30', 'darrowii', 'VADA', 'Darrows blueberry', '14');
INSERT INTO `species` (`speciesID`, `speciesName`, `speciesSymbol`, `speciesDescription`, `genus_FK`) VALUES ('31', 'myrsinites', 'VAMY', 'shiny blueberry ', '14');
INSERT INTO `species` (`speciesID`, `speciesName`, `speciesSymbol`, `speciesDescription`, `genus_FK`) VALUES ('32', 'stamineum', 'VAST', 'deerberry', '14');
INSERT INTO `species` (`speciesID`, `speciesName`, `speciesSymbol`, `speciesDescription`, `genus_FK`) VALUES ('33', 'angustifolia', 'ASAN', 'slimleaf pawpaw', '15');
INSERT INTO `species` (`speciesID`, `speciesName`, `speciesSymbol`, `speciesDescription`, `genus_FK`) VALUES ('34', 'angustifolia', 'MAAN', 'southern crabapple', '16');



/* =========================== Leaf Morphology ======================================*/

/* -------------------- arrangement insert -------------------------- */

/* ------------------- leafarrangement Table INSERT ----------------------------- */

INSERT INTO `leafArrangement` (`leafArrangementID`, `leafArrangementName`, `leafArrangementDescription`) VALUES ('0', ' ', ' ');
INSERT INTO `leafArrangement` (`leafArrangementID`, `leafArrangementName`, `leafArrangementDescription`) VALUES ('1', 'Alternate Pinate', 'Leaves are attached to the stem singly  ascending either on alternate sides of the stalk or in a spiraling pattern.');
INSERT INTO `leafArrangement` (`leafArrangementID`, `leafArrangementName`, `leafArrangementDescription`) VALUES ('2', 'Basal/Spiral', 'Leaves occuring in a tight cluster or rosette at the base of the plant. Spiral');
INSERT INTO `leafArrangement` (`leafArrangementID`, `leafArrangementName`, `leafArrangementDescription`) VALUES ('3', 'Distichous', 'Leaves arranged in two rows on opposite sides of the stem.');
INSERT INTO `leafArrangement` (`leafArrangementID`, `leafArrangementName`, `leafArrangementDescription`) VALUES ('4', 'Decussate', 'Leaves are arranged opposite at each node but each pair of leaves is oriented at right angles to the pair at the next node.');
INSERT INTO `leafArrangement` (`leafArrangementID`, `leafArrangementName`, `leafArrangementDescription`) VALUES ('5', 'Equitant', 'Leaves are overlapping as is typical in some Iris.');
INSERT INTO `leafArrangement` (`leafArrangementID`, `leafArrangementName`, `leafArrangementDescription`) VALUES ('6', 'Opposite Pinate', 'Leaves attached to stem in pairs that stand opposite each other.');
INSERT INTO `leafArrangement` (`leafArrangementID`, `leafArrangementName`, `leafArrangementDescription`) VALUES ('7', 'Rosette', 'Leaves arranged in a dense radiating cluster. Rosettes usually form near the base of the plant.');
INSERT INTO `leafArrangement` (`leafArrangementID`, `leafArrangementName`, `leafArrangementDescription`) VALUES ('8', 'Whorled', 'Leaves attached to stem in groups of three or more at the same level generally with symmetrical orientation.');



/* -------------------- structure insert -------------------------- */

/* ------------------- leafstructure Table INSERT ----------------------------- */

INSERT INTO `leafStructure` (`leafStructureID`, `leafStructureName`, `leafStructureDescription`) VALUES ('0', '', '');
INSERT INTO `leafStructure` (`leafStructureID`, `leafStructureName`, `leafStructureDescription`) VALUES ('1', 'Compound', 'Leaves divided into individual leaflets. Leaflets are distinguished from leaves in that there is no bud at the base.');
INSERT INTO `leafStructure` (`leafStructureID`, `leafStructureName`, `leafStructureDescription`) VALUES ('2', 'Dissected', 'Leaves that are deeply or repeatedly cut into many partitions  but not into individual leaflets.');
INSERT INTO `leafStructure` (`leafStructureID`, `leafStructureName`, `leafStructureDescription`) VALUES ('3', 'Lobed', 'Leaves with distinct protrusions either rounded or pointed. Pinnately lobed leaves have the lobes arranged on either side of a central axis like a feather. Palmately lobed leaves have the lobes spreading radially from a point like fingers on a hand.');
INSERT INTO `leafStructure` (`leafStructureID`, `leafStructureName`, `leafStructureDescription`) VALUES ('4', 'Simple', 'Leaves generally of simple - often convex shape - without partitions - lobes - or large lobe-like teeth. Leaves with small - marginal teeth or serrations are generally regarded as simple');



/* -------------------- margin insert -------------------------- */

/* ------------------- leafmargin Table INSERT ----------------------------- */

INSERT INTO `leafMargin` (`leafMarginID`, `leafMarginName`, `leafMarginDescription`) VALUES ('0', '', '');
INSERT INTO `leafMargin` (`leafMarginID`, `leafMarginName`, `leafMarginDescription`) VALUES ('1', 'Ciliate', 'with fine hairs');
INSERT INTO `leafMargin` (`leafMarginID`, `leafMarginName`, `leafMarginDescription`) VALUES ('2', 'Crenate', 'Margins with continuous - rounded - and generally outward-pointing teeth - dentate with conspicuously rounded teeth.');
INSERT INTO `leafMargin` (`leafMarginID`, `leafMarginName`, `leafMarginDescription`) VALUES ('3', 'Dentate', 'Margins with continuous - generally outward-pointing teeth.');
INSERT INTO `leafMargin` (`leafMarginID`, `leafMarginName`, `leafMarginDescription`) VALUES ('4', 'Denticulate', 'extra fine teeth - smaller dentate');
INSERT INTO `leafMargin` (`leafMarginID`, `leafMarginName`, `leafMarginDescription`) VALUES ('5', 'Doubly Serrate', 'serrate with sub-teeth');
INSERT INTO `leafMargin` (`leafMarginID`, `leafMarginName`, `leafMarginDescription`) VALUES ('6', 'Entire', 'Margins without teeth or serrations.');
INSERT INTO `leafMargin` (`leafMarginID`, `leafMarginName`, `leafMarginDescription`) VALUES ('7', 'lobate', 'indented - but not midline');
INSERT INTO `leafMargin` (`leafMarginID`, `leafMarginName`, `leafMarginDescription`) VALUES ('8', 'Serrate', 'Margins with continuous - sharp - forward-pointing teeth - like the blade of a ripsaw.');
INSERT INTO `leafMargin` (`leafMarginID`, `leafMarginName`, `leafMarginDescription`) VALUES ('9', 'Serrulate', 'with fine serration');
INSERT INTO `leafMargin` (`leafMarginID`, `leafMarginName`, `leafMarginDescription`) VALUES ('10', 'Sinuous', 'Margins with more or less wavy or sinuous structure in the plane of the leaf.');
INSERT INTO `leafMargin` (`leafMarginID`, `leafMarginName`, `leafMarginDescription`) VALUES ('11', 'Spiny', 'with sharp stiff points');
INSERT INTO `leafMargin` (`leafMarginID`, `leafMarginName`, `leafMarginDescription`) VALUES ('12', 'Toothed', 'Margins more or less toothed.');
INSERT INTO `leafMargin` (`leafMarginID`, `leafMarginName`, `leafMarginDescription`) VALUES ('13', 'Undulate', 'Margins wavy or undulating out of the plane of the leaf.');



/* -------------------- attachment insert -------------------------- */

/* ------------------- leafattachment Table INSERT ----------------------------- */

INSERT INTO `leafAttachment` (`leafAttachmentID`, `leafAttachmentName`, `leafAttachmentDescription`) VALUES ('0', '', '');
INSERT INTO `leafAttachment` (`leafAttachmentID`, `leafAttachmentName`, `leafAttachmentDescription`) VALUES ('1','Amplexicaule','Leaves with basal lobes that wrap around or clasp the main stem.');
INSERT INTO `leafAttachment` (`leafAttachmentID`, `leafAttachmentName`, `leafAttachmentDescription`) VALUES ('2','Connate-Perfoliate','with bases of opposite leaves fused around the stem - which appear to go through the leaf.');
INSERT INTO `leafAttachment` (`leafAttachmentID`, `leafAttachmentName`, `leafAttachmentDescription`) VALUES ('3','Ocrea','"leggings" - a plant structure formed of stipules fused into a sheath surrounding the stem - and is typically found in the Polygonaceae.');
INSERT INTO `leafAttachment` (`leafAttachmentID`, `leafAttachmentName`, `leafAttachmentDescription`) VALUES ('4','Peltate','Peltate leaves are rounded with the petiole attached underneath the base of the leaf');
INSERT INTO `leafAttachment` (`leafAttachmentID`, `leafAttachmentName`, `leafAttachmentDescription`) VALUES ('5','Perfoliate','Leaves united at the base so that they appear to be pierced by the main stem. surrounding stem');
INSERT INTO `leafAttachment` (`leafAttachmentID`, `leafAttachmentName`, `leafAttachmentDescription`) VALUES ('6','Petioled','Leaves with a definite footstalk or stem (petiole) - long or short.');
INSERT INTO `leafAttachment` (`leafAttachmentID`, `leafAttachmentName`, `leafAttachmentDescription`) VALUES ('7','Sessile','Leaves without any footstalk or stem.');
INSERT INTO `leafAttachment` (`leafAttachmentID`, `leafAttachmentName`, `leafAttachmentDescription`) VALUES ('8','Sheathing','with a tubular portion of the leaf blade surrounding the stem below the base.');



/* -------------------- shape insert -------------------------- */

/* ------------------- leafshape Table INSERT ----------------------------- */

INSERT INTO `leafShape` (`leafShapeID`, `leafShapeName`, `leafShapeDescription`) VALUES ('0', '', '');
INSERT INTO `leafShape` (`leafShapeID`, `leafShapeName`, `leafShapeDescription`) VALUES ('1', 'Awl-shaped', 'Tapering to slender stiff point; Short stiff margins narrowing to a point - often sharp');
INSERT INTO `leafShape` (`leafShapeID`, `leafShapeName`, `leafShapeDescription`) VALUES ('2', 'Cordate', 'Leaves heart-shaped with the lobes at the base of the leaf.');
INSERT INTO `leafShape` (`leafShapeID`, `leafShapeName`, `leafShapeDescription`) VALUES ('3', 'Cuneate', 'Cuneate leaves have a small width at base - but then a broad width near the top before the apex. \"wedge-shaped.\"');
INSERT INTO `leafShape` (`leafShapeID`, `leafShapeName`, `leafShapeDescription`) VALUES ('4', 'Deltoid', 'Triangular like the Greek letter delta - bottom two corners often rounded off.');
INSERT INTO `leafShape` (`leafShapeID`, `leafShapeName`, `leafShapeDescription`) VALUES ('5', 'Elliptical', 'Leaves shaped like an ellipse; that is - generally symmetrical - elongated - and more or less evenly rounded at both ends.');
INSERT INTO `leafShape` (`leafShapeID`, `leafShapeName`, `leafShapeDescription`) VALUES ('6', 'Falcate', 'A hooked leaf - similar to a sickle or beak of a falcon.');
INSERT INTO `leafShape` (`leafShapeID`, `leafShapeName`, `leafShapeDescription`) VALUES ('7', 'Flabellate', 'Fan-like or fan-shaped. The Ginkgo is the only woody plant in Central Illinois that has this type of leaf shape.');
INSERT INTO `leafShape` (`leafShapeID`, `leafShapeName`, `leafShapeDescription`) VALUES ('8', 'Hastate', 'Hastate leaves are very recognizable. They are taper off at three apexes and are arrowhead-shaped.');
INSERT INTO `leafShape` (`leafShapeID`, `leafShapeName`, `leafShapeDescription`) VALUES ('9', 'Lanceolate', 'Leaves shaped like a lance-head - much longer than wide - and - in technical usage - broader towards the base.');
INSERT INTO `leafShape` (`leafShapeID`, `leafShapeName`, `leafShapeDescription`) VALUES ('10', 'Linear', 'Leaves long and thin - many times longer than wide - with parallel margins.');
INSERT INTO `leafShape` (`leafShapeID`, `leafShapeName`, `leafShapeDescription`) VALUES ('11', 'Needle', 'needle shape');
INSERT INTO `leafShape` (`leafShapeID`, `leafShapeName`, `leafShapeDescription`) VALUES ('12', 'Obcordate', 'Leaves heart-shaped with the tip at the base of the leaf.');
INSERT INTO `leafShape` (`leafShapeID`, `leafShapeName`, `leafShapeDescription`) VALUES ('13', 'Oblanceolate', 'Oblanceolate leaves are at least 3x longer than wide - but broadest above middle. Reverse of a Lanceolate leaf');
INSERT INTO `leafShape` (`leafShapeID`, `leafShapeName`, `leafShapeDescription`) VALUES ('14', 'Oblong', 'Oblong leaves are 2-3x as long as wide and have parallel sides.');
INSERT INTO `leafShape` (`leafShapeID`, `leafShapeName`, `leafShapeDescription`) VALUES ('15', 'Obovate', 'An Obovate leaf is described as being broadest above the middle - and roughly 2x as long as it is wide. Reverse of Ovate');
INSERT INTO `leafShape` (`leafShapeID`, `leafShapeName`, `leafShapeDescription`) VALUES ('16', 'Orbicular', 'Circular or rounded in leaf.');
INSERT INTO `leafShape` (`leafShapeID`, `leafShapeName`, `leafShapeDescription`) VALUES ('17', 'Ovate', 'An Ovate leaf is described as being broadest below the middle');
INSERT INTO `leafShape` (`leafShapeID`, `leafShapeName`, `leafShapeDescription`) VALUES ('18', 'Palmate', 'Particular shape of leaf where the main leaf veins begin at the same place near the leaf stem. Named after the shape of a hand with the fingers spread wide. Maple is the classic example of "palmate-shaped" leaves.');
INSERT INTO `leafShape` (`leafShapeID`, `leafShapeName`, `leafShapeDescription`) VALUES ('19', 'Peltate', 'Peltate leaves are rounded with the petiole attached underneath the base of the leaf. shaped like little shields');
INSERT INTO `leafShape` (`leafShapeID`, `leafShapeName`, `leafShapeDescription`) VALUES ('20', 'Reniform', 'Reniform leaves are broad and wider than they are high.');
INSERT INTO `leafShape` (`leafShapeID`, `leafShapeName`, `leafShapeDescription`) VALUES ('21', 'Spatulate', 'Spatulate leaves are narrow for almost the entire leaf - but then have an abrupt round structure at the apex. similar shape to a spatula');



/* -------------------- surface insert -------------------------- */

/* ------------------- leafSurface Table INSERT ----------------------------- */

INSERT INTO `leafSurface` (`leafSurfaceID`, `leafSurfaceName`, `leafSurfaceDescription`) VALUES ('0', '', '');
INSERT INTO `leafSurface` (`leafSurfaceID`, `leafSurfaceName`, `leafSurfaceDescription`) VALUES ('1', 'Farinose', 'Covered with a meal-like powder or minute particles');
INSERT INTO `leafSurface` (`leafSurfaceID`, `leafSurfaceName`, `leafSurfaceDescription`) VALUES ('2', 'Glabrous', 'Without hairs of any kind');
INSERT INTO `leafSurface` (`leafSurfaceID`, `leafSurfaceName`, `leafSurfaceDescription`) VALUES ('3', 'Glaucous', 'Covered with a whitish powder or waxy coating');
INSERT INTO `leafSurface` (`leafSurfaceID`, `leafSurfaceName`, `leafSurfaceDescription`) VALUES ('4', 'Glutinous', 'About the same as viscid');
INSERT INTO `leafSurface` (`leafSurfaceID`, `leafSurfaceName`, `leafSurfaceDescription`) VALUES ('5', 'Punctate', 'Dotted with minute pits or translucent dots');
INSERT INTO `leafSurface` (`leafSurfaceID`, `leafSurfaceName`, `leafSurfaceDescription`) VALUES ('6', 'Papillate ', 'Bearing minute - pimplelike protuberances');
INSERT INTO `leafSurface` (`leafSurfaceID`, `leafSurfaceName`, `leafSurfaceDescription`) VALUES ('7', 'Pubescent', 'With a hairy surface--there are many kinds of hairiness');
INSERT INTO `leafSurface` (`leafSurfaceID`, `leafSurfaceName`, `leafSurfaceDescription`) VALUES ('8', 'Rugose', 'Wrinkled--typical leaves of the mint family (Lamiaceae)');
INSERT INTO `leafSurface` (`leafSurfaceID`, `leafSurfaceName`, `leafSurfaceDescription`) VALUES ('9', 'Scurfy', 'Covered with small scalelike particles');
INSERT INTO `leafSurface` (`leafSurfaceID`, `leafSurfaceName`, `leafSurfaceDescription`) VALUES ('10', 'Tuberculate', 'Bearing tubercles or warty protuberances');
INSERT INTO `leafSurface` (`leafSurfaceID`, `leafSurfaceName`, `leafSurfaceDescription`) VALUES ('11', 'Verrucose', 'About the same as tuberculate');
INSERT INTO `leafSurface` (`leafSurfaceID`, `leafSurfaceName`, `leafSurfaceDescription`) VALUES ('12', 'Viscid ', 'Covered with sticky or resinous secretion');



/* -------------------- venation insert -------------------------- */

/* ------------------- leafVenation Table INSERT ----------------------------- */

INSERT INTO `leafVenation` (`leafVenationID`, `leafVenationName`, `leafVenationDescription`) VALUES ('0', '', '');
INSERT INTO `leafVenation` (`leafVenationID`, `leafVenationName`, `leafVenationDescription`) VALUES ('1', 'Arcuate', 'secondary veins bending toward apex');
INSERT INTO `leafVenation` (`leafVenationID`, `leafVenationName`, `leafVenationDescription`) VALUES ('2', 'Cross-Venulate', 'small veins connecting secondary veins');
INSERT INTO `leafVenation` (`leafVenationID`, `leafVenationName`, `leafVenationDescription`) VALUES ('3', 'Dichotomous', 'This type of venation occurs in Gingko. Numerous veins radiate from the base of the leaf that branch near the upper leaf surface to form a Y.');
INSERT INTO `leafVenation` (`leafVenationID`, `leafVenationName`, `leafVenationDescription`) VALUES ('4', 'Longitudinal', 'veigns aligned mostly along the long axis of leaf');
INSERT INTO `leafVenation` (`leafVenationID`, `leafVenationName`, `leafVenationDescription`) VALUES ('5', 'Palmate', 'The main veins radiate from a central point at the petiole. Each main vein extends from the petiole to the tip of a lobe. ');
INSERT INTO `leafVenation` (`leafVenationID`, `leafVenationName`, `leafVenationDescription`) VALUES ('6', 'Parallel', 'Leaves with parallel venation are diagnostic for monocots. The veins extend parallel to the outer leaf edge and each other.');
INSERT INTO `leafVenation` (`leafVenationID`, `leafVenationName`, `leafVenationDescription`) VALUES ('7', 'Pinnate', 'Leaf veins are produced on either side of the central main vein (midrib) - which extends from the petiole to the leaf tip. ');
INSERT INTO `leafVenation` (`leafVenationID`, `leafVenationName`, `leafVenationDescription`) VALUES ('8', 'Reticulate', 'Reticulate or net-veined leaves have many branched minor veines. ');
INSERT INTO `leafVenation` (`leafVenationID`, `leafVenationName`, `leafVenationDescription`) VALUES ('9', 'Rotate', 'in peltate leaves - veins radiating');



/* -------------------- hairs inserts -------------------------- */

/* ------------------- leafHairs Table INSERT ----------------------------- */

INSERT INTO `leafHairs` (`leafHairsID`, `leafHairsName`, `leafHairsDescription`) VALUES ('0','','');
INSERT INTO `leafHairs` (`leafHairsID`, `leafHairsName`, `leafHairsDescription`) VALUES ('1','acicular','needle-shaped');
INSERT INTO `leafHairs` (`leafHairsID`, `leafHairsName`, `leafHairsDescription`) VALUES ('2','appressed','lying closely and flatly against the plants surface');
INSERT INTO `leafHairs` (`leafHairsID`, `leafHairsName`, `leafHairsDescription`) VALUES ('3','arachnoid','cobwebby');
INSERT INTO `leafHairs` (`leafHairsID`, `leafHairsName`, `leafHairsDescription`) VALUES ('4','canescent','gray-hairy and hoary');
INSERT INTO `leafHairs` (`leafHairsID`, `leafHairsName`, `leafHairsDescription`) VALUES ('5','capillary','very slender or hairlike');
INSERT INTO `leafHairs` (`leafHairsID`, `leafHairsName`, `leafHairsDescription`) VALUES ('6','cespitose','matted or growing in little dense clumps');
INSERT INTO `leafHairs` (`leafHairsID`, `leafHairsName`, `leafHairsDescription`) VALUES ('7','ciliate','fringed with hairs on the margin');
INSERT INTO `leafHairs` (`leafHairsID`, `leafHairsName`, `leafHairsDescription`) VALUES ('8','clavate','club-shaped (big at one end)');
INSERT INTO `leafHairs` (`leafHairsID`, `leafHairsName`, `leafHairsDescription`) VALUES ('9','downy','with very short - weak - soft hairs');
INSERT INTO `leafHairs` (`leafHairsID`, `leafHairsName`, `leafHairsDescription`) VALUES ('10','echinate','with stout - blunt prickles"');
INSERT INTO `leafHairs` (`leafHairsID`, `leafHairsName`, `leafHairsDescription`) VALUES ('11','ensiform','sword-shaped');
INSERT INTO `leafHairs` (`leafHairsID`, `leafHairsName`, `leafHairsDescription`) VALUES ('12','glabrous','without hairs');
INSERT INTO `leafHairs` (`leafHairsID`, `leafHairsName`, `leafHairsDescription`) VALUES ('13','hirsute','with rough hairs');
INSERT INTO `leafHairs` (`leafHairsID`, `leafHairsName`, `leafHairsDescription`) VALUES ('14','hirtellous','like hirsute but with smaller or more diffuse hairs');
INSERT INTO `leafHairs` (`leafHairsID`, `leafHairsName`, `leafHairsDescription`) VALUES ('15','hispid','with stiff - bristly hairs');
INSERT INTO `leafHairs` (`leafHairsID`, `leafHairsName`, `leafHairsDescription`) VALUES ('16','hispidulous','like hispid but with smaller or more diffuse hairs');
INSERT INTO `leafHairs` (`leafHairsID`, `leafHairsName`, `leafHairsDescription`) VALUES ('17','hoary','closely covered with a white or whitish hairiness');
INSERT INTO `leafHairs` (`leafHairsID`, `leafHairsName`, `leafHairsDescription`) VALUES ('18','indumentum','a heavy covering or hairiness');
INSERT INTO `leafHairs` (`leafHairsID`, `leafHairsName`, `leafHairsDescription`) VALUES ('19','lanuginose','woolly or cottony');
INSERT INTO `leafHairs` (`leafHairsID`, `leafHairsName`, `leafHairsDescription`) VALUES ('20','lanulose','wooly with very short hairs');
INSERT INTO `leafHairs` (`leafHairsID`, `leafHairsName`, `leafHairsDescription`) VALUES ('21','mucro','a short and abruptly sharp or spiny tip');
INSERT INTO `leafHairs` (`leafHairsID`, `leafHairsName`, `leafHairsDescription`) VALUES ('22','mucronate','ending with a mucro');
INSERT INTO `leafHairs` (`leafHairsID`, `leafHairsName`, `leafHairsDescription`) VALUES ('23','pilose','shaggy with soft hairs');
INSERT INTO `leafHairs` (`leafHairsID`, `leafHairsName`, `leafHairsDescription`) VALUES ('24','plumose','"feathery - like the pappus hairs of some composites"');
INSERT INTO `leafHairs` (`leafHairsID`, `leafHairsName`, `leafHairsDescription`) VALUES ('25','puberulent','like pubescent but with smaller hairs');
INSERT INTO `leafHairs` (`leafHairsID`, `leafHairsName`, `leafHairsDescription`) VALUES ('26','pubescent','"downy with short - soft hairs"');
INSERT INTO `leafHairs` (`leafHairsID`, `leafHairsName`, `leafHairsDescription`) VALUES ('27','recurved','bent or curved downward or backward');
INSERT INTO `leafHairs` (`leafHairsID`, `leafHairsName`, `leafHairsDescription`) VALUES ('28','retrorse','bent or turned backward or downward');
INSERT INTO `leafHairs` (`leafHairsID`, `leafHairsName`, `leafHairsDescription`) VALUES ('29','septate','divided into partitions');
INSERT INTO `leafHairs` (`leafHairsID`, `leafHairsName`, `leafHairsDescription`) VALUES ('30','sericeous','silky');
INSERT INTO `leafHairs` (`leafHairsID`, `leafHairsName`, `leafHairsDescription`) VALUES ('31','setose','covered with bristles');
INSERT INTO `leafHairs` (`leafHairsID`, `leafHairsName`, `leafHairsDescription`) VALUES ('32','stellate','once or twice forked - or arms radiating from base');
INSERT INTO `leafHairs` (`leafHairsID`, `leafHairsName`, `leafHairsDescription`) VALUES ('33','tomentose','densely wooly or soft-matted hairiness');
INSERT INTO `leafHairs` (`leafHairsID`, `leafHairsName`, `leafHairsDescription`) VALUES ('34','tomentulose','like tomentose but less so');
INSERT INTO `leafHairs` (`leafHairsID`, `leafHairsName`, `leafHairsDescription`) VALUES ('35','torulose','twisted or knobby');
INSERT INTO `leafHairs` (`leafHairsID`, `leafHairsName`, `leafHairsDescription`) VALUES ('36','uncinate','hooked at the tip');
INSERT INTO `leafHairs` (`leafHairsID`, `leafHairsName`, `leafHairsDescription`) VALUES ('37','velutinous','velvety with erect - straight - moderately firm hairs');
INSERT INTO `leafHairs` (`leafHairsID`, `leafHairsName`, `leafHairsDescription`) VALUES ('38','villous','shaggy with long - soft - not matted hairs');




/* -------------------- leaf morphology insert -------------------------- */

/* ------------------- leafMorph Table INSERT ----------------------------- */

INSERT INTO `leafMorph` (`leafMorphID`, `species_FK`, `leafArrangement_FK`, `leafStructure_FK`, `leafMargin_FK`, `leafAttachment_FK`, `leafShape_FK`, `leafSurface_FK`, `leafVenation_FK`, `leafHairs_FK`) VALUES ('0','0','0','0','0','0','0','0','0','0');
