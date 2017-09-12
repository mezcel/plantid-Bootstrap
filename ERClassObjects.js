/* http://www.csvjson.com/sql2json */
var plantclass = [
  {
    "plantclassID": 0,
    "plantclassName": "",
    "plantclassDescription": ""
  },
  {
    "plantclassID": 1,
    "plantclassName": "Magnoliopsida",
    "plantclassDescription": ""
  },
  {
    "plantclassID": 2,
    "plantclassName": "Pinopsida",
    "plantclassDescription": "conifers"
  }
];
var plantorder = [
  {
    "plantorderID": 0,
    "plantorderName": "",
    "plantorderDescription": "",
    "plantclass_FK": 0
  },
  {
    "plantorderID": 1,
    "plantorderName": "Sapindales",
    "plantorderDescription": "",
    "plantclass_FK": 1
  },
  {
    "plantorderID": 2,
    "plantorderName": "Fagales",
    "plantorderDescription": "",
    "plantclass_FK": 1
  },
  {
    "plantorderID": 3,
    "plantorderName": "Lamiales",
    "plantorderDescription": "",
    "plantclass_FK": 1
  },
  {
    "plantorderID": 4,
    "plantorderName": "Cornales",
    "plantorderDescription": "",
    "plantclass_FK": 1
  },
  {
    "plantorderID": 5,
    "plantorderName": "Ericales",
    "plantorderDescription": "",
    "plantclass_FK": 1
  },
  {
    "plantorderID": 6,
    "plantorderName": "Saxifragales",
    "plantorderDescription": "",
    "plantclass_FK": 1
  },
  {
    "plantorderID": 7,
    "plantorderName": "Pinales",
    "plantorderDescription": "pines",
    "plantclass_FK": 2
  },
  {
    "plantorderID": 8,
    "plantorderName": "Rosales",
    "plantorderDescription": "",
    "plantclass_FK": 1
  },
  {
    "plantorderID": 9,
    "plantorderName": "Laurales",
    "plantorderDescription": "",
    "plantclass_FK": 1
  },
  {
    "plantorderID": 10,
    "plantorderName": "Ericales",
    "plantorderDescription": "",
    "plantclass_FK": 1
  },
  {
    "plantorderID": 11,
    "plantorderName": "Magnoliales",
    "plantorderDescription": "",
    "plantclass_FK": 1
  }
];
var family = [
  {
    "familyID": 0,
    "familyName": "",
    "familyDescription": "",
    "plantorder_FK": 0
  },
  {
    "familyID": 1,
    "familyName": "Sapindaceae",
    "familyDescription": "soapberries",
    "plantorder_FK": 1
  },
  {
    "familyID": 2,
    "familyName": "Juglandaceae",
    "familyDescription": "walnuts",
    "plantorder_FK": 2
  },
  {
    "familyID": 3,
    "familyName": "Lamiaceae",
    "familyDescription": "mints",
    "plantorder_FK": 3
  },
  {
    "familyID": 4,
    "familyName": "Cornaceae",
    "familyDescription": "",
    "plantorder_FK": 4
  },
  {
    "familyID": 5,
    "familyName": "Ebenaceae",
    "familyDescription": "ebony",
    "plantorder_FK": 5
  },
  {
    "familyID": 6,
    "familyName": "Altingiaceae",
    "familyDescription": "",
    "plantorder_FK": 6
  },
  {
    "familyID": 7,
    "familyName": "Myricaceae",
    "familyDescription": "sweet gale",
    "plantorder_FK": 2
  },
  {
    "familyID": 8,
    "familyName": "Pinaceae",
    "familyDescription": "pines",
    "plantorder_FK": 7
  },
  {
    "familyID": 9,
    "familyName": "Rosaceae",
    "familyDescription": "roses",
    "plantorder_FK": 8
  },
  {
    "familyID": 10,
    "familyName": "Fagaceae",
    "familyDescription": "",
    "plantorder_FK": 2
  },
  {
    "familyID": 11,
    "familyName": "Anacardiaceae",
    "familyDescription": "cashews",
    "plantorder_FK": 1
  },
  {
    "familyID": 12,
    "familyName": "Lauraceae",
    "familyDescription": "laurels",
    "plantorder_FK": 9
  },
  {
    "familyID": 13,
    "familyName": "Ericaceae",
    "familyDescription": "heaths",
    "plantorder_FK": 10
  },
  {
    "familyID": 14,
    "familyName": "Annonaceae",
    "familyDescription": "custard apples",
    "plantorder_FK": 11
  }
];
var genus = [
  {
    "genusID": 0,
    "genusName": "",
    "genusDescription": "",
    "family_FK": 0
  },
  {
    "genusID": 1,
    "genusName": "Acer",
    "genusDescription": "maple",
    "family_FK": 1
  },
  {
    "genusID": 2,
    "genusName": "Carya",
    "genusDescription": "hickory",
    "family_FK": 2
  },
  {
    "genusID": 3,
    "genusName": "Callicarpa",
    "genusDescription": "beautyberry",
    "family_FK": 3
  },
  {
    "genusID": 4,
    "genusName": "Cornus",
    "genusDescription": "dogwoods",
    "family_FK": 4
  },
  {
    "genusID": 5,
    "genusName": "Diospyros",
    "genusDescription": "divine fruit",
    "family_FK": 5
  },
  {
    "genusID": 6,
    "genusName": "Liquidambar",
    "genusDescription": "liquid amber",
    "family_FK": 6
  },
  {
    "genusID": 7,
    "genusName": "Morella",
    "genusDescription": "fragrance",
    "family_FK": 7
  },
  {
    "genusID": 8,
    "genusName": "Pinus",
    "genusDescription": "pine",
    "family_FK": 8
  },
  {
    "genusID": 9,
    "genusName": "Prunus",
    "genusDescription": "stone fruit",
    "family_FK": 9
  },
  {
    "genusID": 10,
    "genusName": "Quercus",
    "genusDescription": "oak",
    "family_FK": 10
  },
  {
    "genusID": 11,
    "genusName": "Rhus",
    "genusDescription": "red",
    "family_FK": 11
  },
  {
    "genusID": 12,
    "genusName": "Sassafras",
    "genusDescription": "stone-breaking",
    "family_FK": 12
  },
  {
    "genusID": 13,
    "genusName": "Toxicodendron",
    "genusDescription": "poison",
    "family_FK": 11
  },
  {
    "genusID": 14,
    "genusName": "Vaccinium",
    "genusDescription": "berry",
    "family_FK": 13
  },
  {
    "genusID": 15,
    "genusName": "Asimina",
    "genusDescription": "pawpaw",
    "family_FK": 14
  },
  {
    "genusID": 16,
    "genusName": "Malus",
    "genusDescription": "apple",
    "family_FK": 9
  }
];
var species = [
  {
    "speciesID": 0,
    "speciesName": "",
    "speciesSymbol": "",
    "speciesDescription": "",
    "genus_FK": 0
  },
  {
    "speciesID": 1,
    "speciesName": "rubrum",
    "speciesSymbol": "ACRU",
    "speciesDescription": "red maple",
    "genus_FK": 1
  },
  {
    "speciesID": 2,
    "speciesName": "alba",
    "speciesSymbol": "CAAL",
    "speciesDescription": "Mockernut hickory",
    "genus_FK": 2
  },
  {
    "speciesID": 3,
    "speciesName": "americana",
    "speciesSymbol": "CAAM",
    "speciesDescription": "American beautyberry",
    "genus_FK": 3
  },
  {
    "speciesID": 4,
    "speciesName": "florida",
    "speciesSymbol": "COFL",
    "speciesDescription": "flowering dogwood",
    "genus_FK": 4
  },
  {
    "speciesID": 5,
    "speciesName": "virginiana",
    "speciesSymbol": "DIVI",
    "speciesDescription": "common persimmon",
    "genus_FK": 5
  },
  {
    "speciesID": 6,
    "speciesName": "tyraciflua",
    "speciesSymbol": "LIST",
    "speciesDescription": "sweetgum",
    "genus_FK": 6
  },
  {
    "speciesID": 7,
    "speciesName": "cerifera",
    "speciesSymbol": "MYCE",
    "speciesDescription": "wax myrtle",
    "genus_FK": 7
  },
  {
    "speciesID": 8,
    "speciesName": "echinata",
    "speciesSymbol": "PIEC",
    "speciesDescription": "shortleaf pine",
    "genus_FK": 8
  },
  {
    "speciesID": 9,
    "speciesName": "palustris",
    "speciesSymbol": "PIPA",
    "speciesDescription": "longleaf pine",
    "genus_FK": 8
  },
  {
    "speciesID": 10,
    "speciesName": "taeda",
    "speciesSymbol": "PITA",
    "speciesDescription": "loblolly pine",
    "genus_FK": 8
  },
  {
    "speciesID": 11,
    "speciesName": "serotina",
    "speciesSymbol": "PRSE",
    "speciesDescription": "black cherry",
    "genus_FK": 9
  },
  {
    "speciesID": 12,
    "speciesName": "alba",
    "speciesSymbol": "QUAL",
    "speciesDescription": "white oak",
    "genus_FK": 10
  },
  {
    "speciesID": 13,
    "speciesName": "falcata",
    "speciesSymbol": "QUFA",
    "speciesDescription": "southern red oak",
    "genus_FK": 10
  },
  {
    "speciesID": 14,
    "speciesName": "incana",
    "speciesSymbol": "QUIN",
    "speciesDescription": "bluejack oak",
    "genus_FK": 10
  },
  {
    "speciesID": 15,
    "speciesName": "laevis",
    "speciesSymbol": "QULAE",
    "speciesDescription": "turkey oak",
    "genus_FK": 10
  },
  {
    "speciesID": 16,
    "speciesName": "laurifolia",
    "speciesSymbol": "QULAU",
    "speciesDescription": "laurel oak",
    "genus_FK": 10
  },
  {
    "speciesID": 17,
    "speciesName": "margaretta",
    "speciesSymbol": "QUMARG",
    "speciesDescription": "sand post oak",
    "genus_FK": 10
  },
  {
    "speciesID": 18,
    "speciesName": "marilandica",
    "speciesSymbol": "QUMARI",
    "speciesDescription": "blackjack oak",
    "genus_FK": 10
  },
  {
    "speciesID": 19,
    "speciesName": "minima",
    "speciesSymbol": "QUMI",
    "speciesDescription": "dwarf live oak",
    "genus_FK": 10
  },
  {
    "speciesID": 20,
    "speciesName": "nigra",
    "speciesSymbol": "QUNI",
    "speciesDescription": "water oak",
    "genus_FK": 10
  },
  {
    "speciesID": 21,
    "speciesName": "stellata",
    "speciesSymbol": "QUST",
    "speciesDescription": "post oak",
    "genus_FK": 10
  },
  {
    "speciesID": 22,
    "speciesName": "virginiana",
    "speciesSymbol": "QUVI",
    "speciesDescription": "live oak",
    "genus_FK": 10
  },
  {
    "speciesID": 23,
    "speciesName": "phellos",
    "speciesSymbol": "QUPH",
    "speciesDescription": "willow oak",
    "genus_FK": 10
  },
  {
    "speciesID": 24,
    "speciesName": "pumila",
    "speciesSymbol": "QUPU",
    "speciesDescription": "running oak",
    "genus_FK": 10
  },
  {
    "speciesID": 25,
    "speciesName": "copallinum",
    "speciesSymbol": "RHCO",
    "speciesDescription": "winged sumac",
    "genus_FK": 11
  },
  {
    "speciesID": 26,
    "speciesName": "albidum",
    "speciesSymbol": "SAAL",
    "speciesDescription": "sassafras",
    "genus_FK": 12
  },
  {
    "speciesID": 27,
    "speciesName": "diversilobum",
    "speciesSymbol": "TOXDIV",
    "speciesDescription": "poison oak",
    "genus_FK": 13
  },
  {
    "speciesID": 28,
    "speciesName": "radicans",
    "speciesSymbol": "TORAR",
    "speciesDescription": "eastern poison ivy",
    "genus_FK": 13
  },
  {
    "speciesID": 29,
    "speciesName": "arboreum",
    "speciesSymbol": "VAAR",
    "speciesDescription": "sparkleberry or farkleberry",
    "genus_FK": 14
  },
  {
    "speciesID": 30,
    "speciesName": "darrowii",
    "speciesSymbol": "VADA",
    "speciesDescription": "Darrows blueberry",
    "genus_FK": 14
  },
  {
    "speciesID": 31,
    "speciesName": "myrsinites",
    "speciesSymbol": "VAMY",
    "speciesDescription": "shiny blueberry",
    "genus_FK": 14
  },
  {
    "speciesID": 32,
    "speciesName": "stamineum",
    "speciesSymbol": "VAST",
    "speciesDescription": "deerberry",
    "genus_FK": 14
  },
  {
    "speciesID": 33,
    "speciesName": "angustifolia",
    "speciesSymbol": "ASAN",
    "speciesDescription": "slimleaf pawpaw",
    "genus_FK": 15
  },
  {
    "speciesID": 34,
    "speciesName": "angustifolia",
    "speciesSymbol": "MAAN",
    "speciesDescription": "southern crabapple",
    "genus_FK": 16
  }
];
var leafArrangement = [
  {
    "leafArrangementID": 0,
    "leafArrangementName": "",
    "leafArrangementDescription": ""
  },
  {
    "leafArrangementID": 1,
    "leafArrangementName": "Alternate Pinate",
    "leafArrangementDescription": "Leaves are attached to the stem singly ascending either on alternate sides of the stalk or in a spiraling pattern."
  },
  {
    "leafArrangementID": 2,
    "leafArrangementName": "Basal/Spiral",
    "leafArrangementDescription": "Leaves occuring in a tight cluster or rosette at the base of the plant. Spiral"
  },
  {
    "leafArrangementID": 3,
    "leafArrangementName": "Distichous",
    "leafArrangementDescription": "Leaves arranged in two rows on opposite sides of the stem."
  },
  {
    "leafArrangementID": 4,
    "leafArrangementName": "Decussate",
    "leafArrangementDescription": "Leaves are arranged opposite at each node but each pair of leaves is oriented at right angles to the pair at the next node."
  },
  {
    "leafArrangementID": 5,
    "leafArrangementName": "Equitant",
    "leafArrangementDescription": "Leaves are overlapping as is typical in some Iris."
  },
  {
    "leafArrangementID": 6,
    "leafArrangementName": "Opposite Pinate",
    "leafArrangementDescription": "Leaves attached to stem in pairs that stand opposite each other."
  },
  {
    "leafArrangementID": 7,
    "leafArrangementName": "Rosette",
    "leafArrangementDescription": "Leaves arranged in a dense radiating cluster. Rosettes usually form near the base of the plant."
  },
  {
    "leafArrangementID": 8,
    "leafArrangementName": "Whorled",
    "leafArrangementDescription": "Leaves attached to stem in groups of three or more at the same level generally with symmetrical orientation."
  }
];
var leafStructure = [
  {
    "leafStructureID": 0,
    "leafStructureName": "",
    "leafStructureDescription": ""
  },
  {
    "leafStructureID": 1,
    "leafStructureName": "Compound",
    "leafStructureDescription": "Leaves divided into individual leaflets. Leaflets are distinguished from leaves in that there is no bud at the base."
  },
  {
    "leafStructureID": 2,
    "leafStructureName": "Dissected",
    "leafStructureDescription": "Leaves that are deeply or repeatedly cut into many partitions but not into individual leaflets."
  },
  {
    "leafStructureID": 3,
    "leafStructureName": "Lobed",
    "leafStructureDescription": "Leaves with distinct protrusions either rounded or pointed. Pinnately lobed leaves have the lobes arranged on either side of a central axis like a feather. Palmately lobed leaves have the lobes spreading radially from a point like fingers on a hand."
  },
  {
    "leafStructureID": 4,
    "leafStructureName": "Simple",
    "leafStructureDescription": "Leaves generally of simple - often convex shape - without partitions - lobes - or large lobe-like teeth. Leaves with small - marginal teeth or serrations are generally regarded as simple"
  }
];
var leafMargin = [
  {
    "leafMarginID": 0,
    "leafMarginName": "",
    "leafMarginDescription": ""
  },
  {
    "leafMarginID": 1,
    "leafMarginName": "Ciliate",
    "leafMarginDescription": "with fine hairs"
  },
  {
    "leafMarginID": 2,
    "leafMarginName": "Crenate",
    "leafMarginDescription": "Margins with continuous - rounded - and generally outward-pointing teeth - dentate with conspicuously rounded teeth."
  },
  {
    "leafMarginID": 3,
    "leafMarginName": "Dentate",
    "leafMarginDescription": "Margins with continuous - generally outward-pointing teeth."
  },
  {
    "leafMarginID": 4,
    "leafMarginName": "Denticulate",
    "leafMarginDescription": "extra fine teeth - smaller dentate"
  },
  {
    "leafMarginID": 5,
    "leafMarginName": "Doubly Serrate",
    "leafMarginDescription": "serrate with sub-teeth"
  },
  {
    "leafMarginID": 6,
    "leafMarginName": "Entire",
    "leafMarginDescription": "Margins without teeth or serrations."
  },
  {
    "leafMarginID": 7,
    "leafMarginName": "lobate",
    "leafMarginDescription": "indented - but not midline"
  },
  {
    "leafMarginID": 8,
    "leafMarginName": "Serrate",
    "leafMarginDescription": "Margins with continuous - sharp - forward-pointing teeth - like the blade of a ripsaw."
  },
  {
    "leafMarginID": 9,
    "leafMarginName": "Serrulate",
    "leafMarginDescription": "with fine serration"
  },
  {
    "leafMarginID": 10,
    "leafMarginName": "Sinuous",
    "leafMarginDescription": "Margins with more or less wavy or sinuous structure in the plane of the leaf."
  },
  {
    "leafMarginID": 11,
    "leafMarginName": "Spiny",
    "leafMarginDescription": "with sharp stiff points"
  },
  {
    "leafMarginID": 12,
    "leafMarginName": "Toothed",
    "leafMarginDescription": "Margins more or less toothed."
  },
  {
    "leafMarginID": 13,
    "leafMarginName": "Undulate",
    "leafMarginDescription": "Margins wavy or undulating out of the plane of the leaf."
  }
];
var leafAttachment = [
  {
    "leafAttachmentID": 0,
    "leafAttachmentName": "",
    "leafAttachmentDescription": ""
  },
  {
    "leafAttachmentID": 1,
    "leafAttachmentName": "Amplexicaule",
    "leafAttachmentDescription": "Leaves with basal lobes that wrap around or clasp the main stem."
  },
  {
    "leafAttachmentID": 2,
    "leafAttachmentName": "Connate-Perfoliate",
    "leafAttachmentDescription": "with bases of opposite leaves fused around the stem - which appear to go through the leaf."
  },
  {
    "leafAttachmentID": 3,
    "leafAttachmentName": "Ocrea",
    "leafAttachmentDescription": "leggings\" - a plant structure formed of stipules fused into a sheath surrounding the stem - and is typically found in the Polygonaceae."
  },
  {
    "leafAttachmentID": 4,
    "leafAttachmentName": "Peltate",
    "leafAttachmentDescription": "Peltate leaves are rounded with the petiole attached underneath the base of the leaf"
  },
  {
    "leafAttachmentID": 5,
    "leafAttachmentName": "Perfoliate",
    "leafAttachmentDescription": "Leaves united at the base so that they appear to be pierced by the main stem. surrounding stem"
  },
  {
    "leafAttachmentID": 6,
    "leafAttachmentName": "Petioled",
    "leafAttachmentDescription": "Leaves with a definite footstalk or stem (petiole) - long or short."
  },
  {
    "leafAttachmentID": 7,
    "leafAttachmentName": "Sessile",
    "leafAttachmentDescription": "Leaves without any footstalk or stem."
  },
  {
    "leafAttachmentID": 8,
    "leafAttachmentName": "Sheathing",
    "leafAttachmentDescription": "with a tubular portion of the leaf blade surrounding the stem below the base."
  }
];
var leafShape = [
  {
    "leafShapeID": 0,
    "leafShapeName": "",
    "leafShapeDescription": ""
  },
  {
    "leafShapeID": 1,
    "leafShapeName": "Awl-shaped",
    "leafShapeDescription": "Tapering to slender stiff point; Short stiff margins narrowing to a point - often sharp"
  },
  {
    "leafShapeID": 2,
    "leafShapeName": "Cordate",
    "leafShapeDescription": "Leaves heart-shaped with the lobes at the base of the leaf."
  },
  {
    "leafShapeID": 3,
    "leafShapeName": "Cuneate",
    "leafShapeDescription": "Cuneate leaves have a small width at base - but then a broad width near the top before the apex. \\\"wedge-shaped.\\\""
  },
  {
    "leafShapeID": 4,
    "leafShapeName": "Deltoid",
    "leafShapeDescription": "Triangular like the Greek letter delta - bottom two corners often rounded off."
  },
  {
    "leafShapeID": 5,
    "leafShapeName": "Elliptical",
    "leafShapeDescription": "Leaves shaped like an ellipse; that is - generally symmetrical - elongated - and more or less evenly rounded at both ends."
  },
  {
    "leafShapeID": 6,
    "leafShapeName": "Falcate",
    "leafShapeDescription": "A hooked leaf - similar to a sickle or beak of a falcon."
  },
  {
    "leafShapeID": 7,
    "leafShapeName": "Flabellate",
    "leafShapeDescription": "Fan-like or fan-shaped. The Ginkgo is the only woody plant in Central Illinois that has this type of leaf shape."
  },
  {
    "leafShapeID": 8,
    "leafShapeName": "Hastate",
    "leafShapeDescription": "Hastate leaves are very recognizable. They are taper off at three apexes and are arrowhead-shaped."
  },
  {
    "leafShapeID": 9,
    "leafShapeName": "Lanceolate",
    "leafShapeDescription": "Leaves shaped like a lance-head - much longer than wide - and - in technical usage - broader towards the base."
  },
  {
    "leafShapeID": 10,
    "leafShapeName": "Linear",
    "leafShapeDescription": "Leaves long and thin - many times longer than wide - with parallel margins."
  },
  {
    "leafShapeID": 11,
    "leafShapeName": "Needle",
    "leafShapeDescription": "needle shape"
  },
  {
    "leafShapeID": 12,
    "leafShapeName": "Obcordate",
    "leafShapeDescription": "Leaves heart-shaped with the tip at the base of the leaf."
  },
  {
    "leafShapeID": 13,
    "leafShapeName": "Oblanceolate",
    "leafShapeDescription": "Oblanceolate leaves are at least 3x longer than wide - but broadest above middle. Reverse of a Lanceolate leaf"
  },
  {
    "leafShapeID": 14,
    "leafShapeName": "Oblong",
    "leafShapeDescription": "Oblong leaves are 2-3x as long as wide and have parallel sides."
  },
  {
    "leafShapeID": 15,
    "leafShapeName": "Obovate",
    "leafShapeDescription": "An Obovate leaf is described as being broadest above the middle - and roughly 2x as long as it is wide. Reverse of Ovate"
  },
  {
    "leafShapeID": 16,
    "leafShapeName": "Orbicular",
    "leafShapeDescription": "Circular or rounded in leaf."
  },
  {
    "leafShapeID": 17,
    "leafShapeName": "Ovate",
    "leafShapeDescription": "An Ovate leaf is described as being broadest below the middle"
  },
  {
    "leafShapeID": 18,
    "leafShapeName": "Palmate",
    "leafShapeDescription": "Particular shape of leaf where the main leaf veins begin at the same place near the leaf stem. Named after the shape of a hand with the fingers spread wide. Maple is the classic example of \"palmate-shaped\" leaves."
  },
  {
    "leafShapeID": 19,
    "leafShapeName": "Peltate",
    "leafShapeDescription": "Peltate leaves are rounded with the petiole attached underneath the base of the leaf. shaped like little shields"
  },
  {
    "leafShapeID": 20,
    "leafShapeName": "Reniform",
    "leafShapeDescription": "Reniform leaves are broad and wider than they are high."
  },
  {
    "leafShapeID": 21,
    "leafShapeName": "Spatulate",
    "leafShapeDescription": "Spatulate leaves are narrow for almost the entire leaf - but then have an abrupt round structure at the apex. similar shape to a spatula"
  }
];
var leafSurface = [
  {
    "leafSurfaceID": 0,
    "leafSurfaceName": "",
    "leafSurfaceDescription": ""
  },
  {
    "leafSurfaceID": 1,
    "leafSurfaceName": "Farinose",
    "leafSurfaceDescription": "Covered with a meal-like powder or minute particles"
  },
  {
    "leafSurfaceID": 2,
    "leafSurfaceName": "Glabrous",
    "leafSurfaceDescription": "Without hairs of any kind"
  },
  {
    "leafSurfaceID": 3,
    "leafSurfaceName": "Glaucous",
    "leafSurfaceDescription": "Covered with a whitish powder or waxy coating"
  },
  {
    "leafSurfaceID": 4,
    "leafSurfaceName": "Glutinous",
    "leafSurfaceDescription": "About the same as viscid"
  },
  {
    "leafSurfaceID": 5,
    "leafSurfaceName": "Punctate",
    "leafSurfaceDescription": "Dotted with minute pits or translucent dots"
  },
  {
    "leafSurfaceID": 6,
    "leafSurfaceName": "Papillate",
    "leafSurfaceDescription": "Bearing minute - pimplelike protuberances"
  },
  {
    "leafSurfaceID": 7,
    "leafSurfaceName": "Pubescent",
    "leafSurfaceDescription": "With a hairy surface--there are many kinds of hairiness"
  },
  {
    "leafSurfaceID": 8,
    "leafSurfaceName": "Rugose",
    "leafSurfaceDescription": "Wrinkled--typical leaves of the mint family (Lamiaceae)"
  },
  {
    "leafSurfaceID": 9,
    "leafSurfaceName": "Scurfy",
    "leafSurfaceDescription": "Covered with small scalelike particles"
  },
  {
    "leafSurfaceID": 10,
    "leafSurfaceName": "Tuberculate",
    "leafSurfaceDescription": "Bearing tubercles or warty protuberances"
  },
  {
    "leafSurfaceID": 11,
    "leafSurfaceName": "Verrucose",
    "leafSurfaceDescription": "About the same as tuberculate"
  },
  {
    "leafSurfaceID": 12,
    "leafSurfaceName": "Viscid",
    "leafSurfaceDescription": "Covered with sticky or resinous secretion"
  }
];
var leafVenation = [
  {
    "leafVenationID": 0,
    "leafVenationName": "",
    "leafVenationDescription": ""
  },
  {
    "leafVenationID": 1,
    "leafVenationName": "Arcuate",
    "leafVenationDescription": "secondary veins bending toward apex"
  },
  {
    "leafVenationID": 2,
    "leafVenationName": "Cross-Venulate",
    "leafVenationDescription": "small veins connecting secondary veins"
  },
  {
    "leafVenationID": 3,
    "leafVenationName": "Dichotomous",
    "leafVenationDescription": "This type of venation occurs in Gingko. Numerous veins radiate from the base of the leaf that branch near the upper leaf surface to form a Y."
  },
  {
    "leafVenationID": 4,
    "leafVenationName": "Longitudinal",
    "leafVenationDescription": "veigns aligned mostly along the long axis of leaf"
  },
  {
    "leafVenationID": 5,
    "leafVenationName": "Palmate",
    "leafVenationDescription": "The main veins radiate from a central point at the petiole. Each main vein extends from the petiole to the tip of a lobe. "
  },
  {
    "leafVenationID": 6,
    "leafVenationName": "Parallel",
    "leafVenationDescription": "Leaves with parallel venation are diagnostic for monocots. The veins extend parallel to the outer leaf edge and each other."
  },
  {
    "leafVenationID": 7,
    "leafVenationName": "Pinnate",
    "leafVenationDescription": "Leaf veins are produced on either side of the central main vein (midrib) - which extends from the petiole to the leaf tip. "
  },
  {
    "leafVenationID": 8,
    "leafVenationName": "Reticulate",
    "leafVenationDescription": "Reticulate or net-veined leaves have many branched minor veines. "
  },
  {
    "leafVenationID": 9,
    "leafVenationName": "Rotate",
    "leafVenationDescription": "in peltate leaves - veins radiating"
  }
];
var leafHairs = [
  {
    "leafHairsID": 0,
    "leafHairsName": "",
    "leafHairsDescription": ""
  },
  {
    "leafHairsID": 1,
    "leafHairsName": "acicular",
    "leafHairsDescription": "needle-shaped"
  },
  {
    "leafHairsID": 2,
    "leafHairsName": "appressed",
    "leafHairsDescription": "lying closely and flatly against the plants surface"
  },
  {
    "leafHairsID": 3,
    "leafHairsName": "arachnoid",
    "leafHairsDescription": "cobwebby"
  },
  {
    "leafHairsID": 4,
    "leafHairsName": "canescent",
    "leafHairsDescription": "gray-hairy and hoary"
  },
  {
    "leafHairsID": 5,
    "leafHairsName": "capillary",
    "leafHairsDescription": "very slender or hairlike"
  },
  {
    "leafHairsID": 6,
    "leafHairsName": "cespitose",
    "leafHairsDescription": "matted or growing in little dense clumps"
  },
  {
    "leafHairsID": 7,
    "leafHairsName": "ciliate",
    "leafHairsDescription": "fringed with hairs on the margin"
  },
  {
    "leafHairsID": 8,
    "leafHairsName": "clavate",
    "leafHairsDescription": "club-shaped (big at one end)"
  },
  {
    "leafHairsID": 9,
    "leafHairsName": "downy",
    "leafHairsDescription": "with very short - weak - soft hairs"
  },
  {
    "leafHairsID": 10,
    "leafHairsName": "echinate",
    "leafHairsDescription": "with stout - blunt prickles\""
  },
  {
    "leafHairsID": 11,
    "leafHairsName": "ensiform",
    "leafHairsDescription": "sword-shaped"
  },
  {
    "leafHairsID": 12,
    "leafHairsName": "glabrous",
    "leafHairsDescription": "without hairs"
  },
  {
    "leafHairsID": 13,
    "leafHairsName": "hirsute",
    "leafHairsDescription": "with rough hairs"
  },
  {
    "leafHairsID": 14,
    "leafHairsName": "hirtellous",
    "leafHairsDescription": "like hirsute but with smaller or more diffuse hairs"
  },
  {
    "leafHairsID": 15,
    "leafHairsName": "hispid",
    "leafHairsDescription": "with stiff - bristly hairs"
  },
  {
    "leafHairsID": 16,
    "leafHairsName": "hispidulous",
    "leafHairsDescription": "like hispid but with smaller or more diffuse hairs"
  },
  {
    "leafHairsID": 17,
    "leafHairsName": "hoary",
    "leafHairsDescription": "closely covered with a white or whitish hairiness"
  },
  {
    "leafHairsID": 18,
    "leafHairsName": "indumentum",
    "leafHairsDescription": "a heavy covering or hairiness"
  },
  {
    "leafHairsID": 19,
    "leafHairsName": "lanuginose",
    "leafHairsDescription": "woolly or cottony"
  },
  {
    "leafHairsID": 20,
    "leafHairsName": "lanulose",
    "leafHairsDescription": "wooly with very short hairs"
  },
  {
    "leafHairsID": 21,
    "leafHairsName": "mucro",
    "leafHairsDescription": "a short and abruptly sharp or spiny tip"
  },
  {
    "leafHairsID": 22,
    "leafHairsName": "mucronate",
    "leafHairsDescription": "ending with a mucro"
  },
  {
    "leafHairsID": 23,
    "leafHairsName": "pilose",
    "leafHairsDescription": "shaggy with soft hairs"
  },
  {
    "leafHairsID": 24,
    "leafHairsName": "plumose",
    "leafHairsDescription": "feathery - like the pappus hairs of some composites\""
  },
  {
    "leafHairsID": 25,
    "leafHairsName": "puberulent",
    "leafHairsDescription": "like pubescent but with smaller hairs"
  },
  {
    "leafHairsID": 26,
    "leafHairsName": "pubescent",
    "leafHairsDescription": "downy with short - soft hairs\""
  },
  {
    "leafHairsID": 27,
    "leafHairsName": "recurved",
    "leafHairsDescription": "bent or curved downward or backward"
  },
  {
    "leafHairsID": 28,
    "leafHairsName": "retrorse",
    "leafHairsDescription": "bent or turned backward or downward"
  },
  {
    "leafHairsID": 29,
    "leafHairsName": "septate",
    "leafHairsDescription": "divided into partitions"
  },
  {
    "leafHairsID": 30,
    "leafHairsName": "sericeous",
    "leafHairsDescription": "silky"
  },
  {
    "leafHairsID": 31,
    "leafHairsName": "setose",
    "leafHairsDescription": "covered with bristles"
  },
  {
    "leafHairsID": 32,
    "leafHairsName": "stellate",
    "leafHairsDescription": "once or twice forked - or arms radiating from base"
  },
  {
    "leafHairsID": 33,
    "leafHairsName": "tomentose",
    "leafHairsDescription": "densely wooly or soft-matted hairiness"
  },
  {
    "leafHairsID": 34,
    "leafHairsName": "tomentulose",
    "leafHairsDescription": "like tomentose but less so"
  },
  {
    "leafHairsID": 35,
    "leafHairsName": "torulose",
    "leafHairsDescription": "twisted or knobby"
  },
  {
    "leafHairsID": 36,
    "leafHairsName": "uncinate",
    "leafHairsDescription": "hooked at the tip"
  },
  {
    "leafHairsID": 37,
    "leafHairsName": "velutinous",
    "leafHairsDescription": "velvety with erect - straight - moderately firm hairs"
  },
  {
    "leafHairsID": 38,
    "leafHairsName": "villous",
    "leafHairsDescription": "shaggy with long - soft - not matted hairs"
  }
];
var leafMorph =  [{
        "leafMorphID": 0,
        "species_FK": 0,
        "leafArrangement_FK": 0,    /*[2] */
        "leafStructure_FK": 0,
        "leafMargin_FK": 0,
        "leafAttachment_FK": 0,
        "leafShape_FK": 0,          /* leafShape_FK [6]*/
        "leafApex_FK":0,            /* leafShape_FK*/
        "leafBase_FK":0,            /* leafShape_FK*/
        "leafSurfaceTop_FK": 0,     /* leafSurface_FK */
        "leafSurfaceBottom_FK":0,   /* leafSurface_FK */
        "leafVenation_FK": 0,
        "leafHairsTop_FK": 0,       /* leafHairs_FK */
        "leafHairsBottom_FK":0      /* leafHairs_FK */
    }];

/* ************* TaffyDB ******************* */
plantclass = TAFFY(plantclass);
plantorder = TAFFY(plantorder);
family = TAFFY(family);
genus = TAFFY(genus);
species = TAFFY(species);
leafArrangement = TAFFY(leafArrangement);
leafStructure = TAFFY(leafStructure);
leafMargin = TAFFY(leafMargin);
leafAttachment = TAFFY(leafAttachment);
leafShape = TAFFY(leafShape);
leafSurface = TAFFY(leafSurface);
leafVenation = TAFFY(leafVenation);
leafHairs = TAFFY(leafHairs);
leafMorph = TAFFY(leafMorph);

/* ************* leafMorph ******************* */
/* my legasy import raw observation data input */
var leafMorph_inputArr=[];
    leafMorph_inputArr[0]=[0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    leafMorph_inputArr[1]=[1,0,0,0,0,0,0,0,0,0,0,0,0,0];
    leafMorph_inputArr[2]=[2,7,1,1,17,6,24,13,3,2,0,7,0,0];
    leafMorph_inputArr[3]=[3,9,9,7,8,6,1,13,3,2,0,7,0,7];
    leafMorph_inputArr[4]=[4,10,9,7,8,6,1,13,3,2,0,7,0,7];
    leafMorph_inputArr[5]=[5,11,9,7,8,6,1,3,2,2,7,7,14,7];
    leafMorph_inputArr[6]=[6,12,1,1,11,6,14,13,3,2,0,7,0,0];
    leafMorph_inputArr[7]=[7,13,1,1,11,6,6,4,8,2,3,7,0,21];
    leafMorph_inputArr[8]=[8,14,1,1,8,6,5,1,2,9,7,7,0,21];
    leafMorph_inputArr[9]=[9,19,1,1,8,6,15,13,1,2,7,7,0,14];
    leafMorph_inputArr[10]=[10,19,1,1,8,6,14,0,0,2,0,7,0,0];
    leafMorph_inputArr[11]=[11,19,1,1,8,6,14,0,0,2,0,7,0,0];
    leafMorph_inputArr[12]=[12,8,9,7,8,8,1,0,0,0,0,6,0,0];

var i;
for (i=1; i<leafMorph_inputArr.length; i+=1) {
  // automated object inserts
  // list of observations
  leafMorph.insert(
    {
        "leafMorphID": leafMorph_inputArr[i][0],
        "species_FK": leafMorph_inputArr[i][1],
        "leafArrangement_FK": leafMorph_inputArr[i][2], //1
        "leafStructure_FK": leafMorph_inputArr[i][3],
        "leafMargin_FK": leafMorph_inputArr[i][4], //11
        "leafAttachment_FK": leafMorph_inputArr[i][5],
        "leafShape_FK": leafMorph_inputArr[i][6],
        "leafApex_FK":leafMorph_inputArr[i][7],
        "leafBase_FK":leafMorph_inputArr[i][8],
        "leafSurfaceTop_FK": leafMorph_inputArr[i][9],
        "leafSurfaceBottom_FK": leafMorph_inputArr[i][10],
        "leafVenation_FK": leafMorph_inputArr[i][11],
        "leafHairsTop_FK": leafMorph_inputArr[i][12],
        "leafHairsBottom_FK":leafMorph_inputArr[i][13]
    }
  );
}

//debug
console.log(leafMorph_inputArr); //debug leafmorph array
