function EQ_GET_DATA(){ 
	  var ret = {
"name": " lucene-solr working set: {lucene.classification}", "value":600393, 
"prmetrics":{"5":1,"6":1,"7":1,"8":2,"9":2,"10":1,"11":1},
"prmetricvalues":{"5":0,"6":19,"7":3,"8":1203,"9":17,"10":3,"11":95},
"children": [ {
"name": "org.apache.lucene.classification.utils", "key": "zr", "value":431, 
"pmetrics":{"4":2,"12":1,"13":1,"14":2,"3":1,"1":1,"0":1,"6":2,"8":2,"2":1,"15":1,"16":1},
"pmetricvalues":{"4":2,"12":4,"13":0,"14":8,"3":1,"1":1,"0":1,"17":0.2,"6":8,"18":0.0,"8":431,"19":0.8,"2":1,"15":1,"16":134},
"children":[
{
"name": "ConfusionMatrixGenerator","key": "zs","value":139, 
"metrics":{"20":2,"21":1,"22":1,"23":1,"24":2,"25":1,"26":1,"0":2,"27":1,"28":2,"29":1,"30":1,"31":1,"32":1,"33":2,"34":1,"35":1,"36":1,"16":1,"37":1,"4":2,"8":2,"2":2,"3":1,"1":2},
"metricvalues":{"20":10,"21":1,"22":0,"23":0.0,"24":53,"25":0,"26":1,"0":2,"27":1,"28":62,"29":0.0,"30":0.0,"31":0,"32":0.4,"33":10,"34":16,"35":1,"36":0,"16":16,"37":0,"4":2,"8":139,"2":2,"3":1,"1":2}
},
{
"name": "DocToDoubleVectorUtils","key": "I.","value":32, 
"metrics":{"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"0":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"16":1,"37":1,"4":1,"8":1,"2":1,"3":1,"1":1},
"metricvalues":{"20":4,"21":0,"22":0,"23":0.0,"24":31,"25":0,"26":1,"0":1,"27":1,"28":11,"29":0.0,"30":0.0,"31":0,"32":0.167,"33":4,"34":8,"35":2,"36":0,"16":10,"37":0,"4":1,"8":32,"2":1,"3":1,"1":1}
},
{
"name": "NearestFuzzyQuery","key": "bwi","value":172, 
"metrics":{"20":3,"21":1,"22":1,"23":2,"24":2,"25":1,"26":2,"0":4,"27":1,"28":3,"29":4,"30":4,"31":1,"32":4,"33":3,"34":1,"35":1,"36":1,"16":2,"37":1,"4":2,"8":2,"2":3,"3":4,"1":3},
"metricvalues":{"20":19,"21":0,"22":2,"23":0.182,"24":106,"25":0,"26":2,"0":4,"27":11,"28":140,"29":0.81,"30":0.833,"31":4,"32":0.802,"33":19,"34":49,"35":0,"36":0,"16":33,"37":1,"4":2,"8":172,"2":3,"3":4,"1":3}
},
{
"name": "DatasetSplitter","key": "DD","value":88, 
"metrics":{"20":4,"21":1,"22":1,"23":1,"24":2,"25":1,"26":1,"0":5,"27":1,"28":5,"29":1,"30":1,"31":1,"32":1,"33":4,"34":1,"35":1,"36":1,"16":2,"37":1,"4":2,"8":2,"2":4,"3":1,"1":5},
"metricvalues":{"20":24,"21":0,"22":2,"23":0.0,"24":85,"25":0,"26":1,"0":5,"27":3,"28":1154,"29":0.0,"30":0.0,"31":0,"32":0.519,"33":24,"34":33,"35":0,"36":0,"16":23,"37":0,"4":2,"8":88,"2":4,"3":1,"1":5}
}
]
},{
"name": "org.apache.lucene.classification.document", "key": "Km", "value":150, 
"pmetrics":{"4":1,"12":1,"13":1,"14":1,"3":1,"1":1,"0":1,"6":1,"8":1,"2":1,"15":1,"16":1},
"pmetricvalues":{"4":1,"12":3,"13":1,"14":2,"3":1,"1":1,"0":1,"17":0.083,"6":3,"18":0.333,"8":150,"19":0.75,"2":1,"15":1,"16":37},
"children":[
{
"name": "DocumentClassifier","key": "Kn","value":4, 
"metrics":{"20":1,"21":1,"22":1,"23":1,"24":1,"25":2,"26":1,"0":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"4":1,"8":1,"2":1,"3":1,"16":1,"1":1},
"metricvalues":{"20":2,"21":0,"22":0,"23":0.0,"24":3,"25":2,"26":1,"0":1,"27":3,"28":3,"29":0.0,"30":0.0,"31":0,"32":0.222,"33":2,"34":0,"35":0,"36":0,"37":0,"4":1,"8":4,"2":1,"3":1,"16":3,"1":1}
},
{
"name": "SimpleNaiveBayesDocumentClassifier","key": "bYs","value":103, 
"metrics":{"20":3,"21":2,"22":1,"23":1,"24":2,"25":1,"26":2,"0":3,"27":1,"28":2,"29":5,"30":1,"31":1,"32":2,"33":3,"34":1,"35":1,"36":1,"16":2,"37":1,"4":2,"8":2,"2":3,"3":2,"1":2},
"metricvalues":{"20":18,"21":2,"22":1,"23":0.0,"24":101,"25":0,"26":2,"0":3,"27":12,"28":97,"29":1.0,"30":0.0,"31":0,"32":0.685,"33":18,"34":41,"35":0,"36":0,"16":24,"37":0,"4":2,"8":103,"2":3,"3":2,"1":2}
},
{
"name": "KNearestNeighborDocumentClassifier","key": "bcQ","value":43, 
"metrics":{"20":3,"21":1,"22":1,"23":1,"24":1,"25":1,"26":2,"0":3,"27":1,"28":3,"29":5,"30":1,"31":1,"32":1,"33":3,"34":1,"35":1,"36":1,"16":1,"37":1,"4":1,"8":1,"2":3,"3":1,"1":3},
"metricvalues":{"20":13,"21":0,"22":1,"23":0.0,"24":41,"25":0,"26":2,"0":3,"27":5,"28":130,"29":1.0,"30":0.0,"31":0,"32":0.6,"33":13,"34":20,"35":0,"36":0,"16":10,"37":0,"4":1,"8":43,"2":3,"3":1,"1":3}
}
]
},{
"name": "org.apache.lucene.classification", "key": "hJ", "value":622, 
"pmetrics":{"4":2,"12":2,"13":1,"14":2,"3":1,"1":1,"0":2,"6":2,"8":2,"2":2,"15":1,"16":1},
"pmetricvalues":{"4":2,"12":7,"13":1,"14":7,"3":1,"1":1,"0":2,"17":0.292,"6":8,"18":0.125,"8":622,"19":0.583,"2":2,"15":5,"16":159},
"children":[
{
"name": "Classifier","key": "sV","value":4, 
"metrics":{"20":1,"21":1,"22":1,"23":1,"24":1,"25":2,"26":1,"0":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"4":1,"8":1,"2":1,"3":1,"16":1,"1":1},
"metricvalues":{"20":1,"21":0,"22":0,"23":0.0,"24":3,"25":5,"26":1,"0":1,"27":3,"28":3,"29":0.0,"30":0.0,"31":0,"32":0.222,"33":1,"34":0,"35":0,"36":0,"37":0,"4":1,"8":4,"2":1,"3":1,"16":3,"1":1}
},
{
"name": "BM25NBClassifier","key": "hK","value":86, 
"metrics":{"20":3,"21":1,"22":1,"23":1,"24":2,"25":1,"26":1,"0":3,"27":1,"28":3,"29":5,"30":2,"31":1,"32":2,"33":3,"34":1,"35":1,"36":1,"16":2,"37":1,"4":2,"8":2,"2":3,"3":2,"1":3},
"metricvalues":{"20":20,"21":1,"22":6,"23":0.0,"24":79,"25":0,"26":1,"0":3,"27":10,"28":106,"29":1.0,"30":0.625,"31":0,"32":0.675,"33":20,"34":32,"35":0,"36":0,"16":24,"37":0,"4":2,"8":86,"2":3,"3":2,"1":3}
},
{
"name": "KNearestNeighborClassifier","key": "bcP","value":106, 
"metrics":{"20":3,"21":2,"22":1,"23":1,"24":2,"25":1,"26":1,"0":3,"27":1,"28":3,"29":4,"30":1,"31":1,"32":2,"33":3,"34":1,"35":1,"36":1,"16":2,"37":1,"4":2,"8":2,"2":3,"3":2,"1":3},
"metricvalues":{"20":19,"21":2,"22":6,"23":0.0,"24":99,"25":1,"26":1,"0":3,"27":8,"28":136,"29":0.9,"30":0.222,"31":0,"32":0.672,"33":19,"34":35,"35":0,"36":0,"16":25,"37":0,"4":2,"8":106,"2":3,"3":2,"1":3}
},
{
"name": "CachingNaiveBayesClassifier","key": "qs","value":99, 
"metrics":{"20":3,"21":2,"22":1,"23":3,"24":2,"25":1,"26":2,"0":3,"27":1,"28":3,"29":5,"30":1,"31":1,"32":1,"33":3,"34":1,"35":1,"36":1,"16":2,"37":1,"4":2,"8":2,"2":3,"3":1,"1":3},
"metricvalues":{"20":15,"21":2,"22":5,"23":0.4,"24":93,"25":0,"26":2,"0":3,"27":5,"28":109,"29":1.0,"30":0.4,"31":0,"32":0.6,"33":15,"34":36,"35":0,"36":0,"16":30,"37":1,"4":2,"8":99,"2":3,"3":1,"1":3}
},
{
"name": "SimpleNaiveBayesClassifier","key": "bYr","value":120, 
"metrics":{"20":3,"21":2,"22":1,"23":1,"24":2,"25":2,"26":1,"0":3,"27":1,"28":2,"29":5,"30":2,"31":1,"32":2,"33":3,"34":1,"35":1,"36":1,"16":2,"37":1,"4":2,"8":2,"2":3,"3":2,"1":2},
"metricvalues":{"20":18,"21":2,"22":6,"23":0.0,"24":113,"25":2,"26":1,"0":3,"27":13,"28":98,"29":1.0,"30":0.611,"31":0,"32":0.683,"33":18,"34":39,"35":0,"36":0,"16":30,"37":0,"4":2,"8":120,"2":3,"3":2,"1":2}
},
{
"name": "BooleanPerceptronClassifier","key": "mT","value":103, 
"metrics":{"20":4,"21":2,"22":1,"23":1,"24":2,"25":1,"26":1,"0":5,"27":1,"28":5,"29":4,"30":2,"31":1,"32":2,"33":4,"34":1,"35":1,"36":1,"16":2,"37":1,"4":2,"8":2,"2":4,"3":2,"1":5},
"metricvalues":{"20":27,"21":2,"22":5,"23":0.0,"24":97,"25":0,"26":1,"0":5,"27":6,"28":284,"29":0.833,"30":0.533,"31":0,"32":0.681,"33":27,"34":43,"35":0,"36":0,"16":24,"37":0,"4":2,"8":103,"2":4,"3":2,"1":5}
},
{
"name": "KNearestFuzzyClassifier","key": "bcO","value":91, 
"metrics":{"20":3,"21":2,"22":1,"23":1,"24":2,"25":1,"26":1,"0":3,"27":1,"28":2,"29":4,"30":1,"31":1,"32":2,"33":3,"34":1,"35":1,"36":1,"16":1,"37":1,"4":2,"8":2,"2":3,"3":2,"1":2},
"metricvalues":{"20":19,"21":2,"22":6,"23":0.0,"24":84,"25":0,"26":1,"0":3,"27":7,"28":72,"29":0.9,"30":0.222,"31":0,"32":0.661,"33":19,"34":25,"35":0,"36":0,"16":19,"37":0,"4":2,"8":91,"2":3,"3":2,"1":2}
},
{
"name": "ClassificationResult","key": "sQ","value":13, 
"metrics":{"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"0":1,"27":1,"28":1,"29":2,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"16":1,"37":1,"4":1,"8":1,"2":1,"3":1,"1":1},
"metricvalues":{"20":1,"21":0,"22":2,"23":0.0,"24":10,"25":0,"26":1,"0":1,"27":4,"28":5,"29":0.667,"30":0.5,"31":0,"32":0.562,"33":0,"34":2,"35":0,"36":1,"16":4,"37":0,"4":1,"8":13,"2":1,"3":1,"1":1}
}
]
}]
 }
;
return ret;
}
var EQ_METRIC_MAP = {};
EQ_METRIC_MAP["C3"] =0;
EQ_METRIC_MAP["Complexity"] =1;
EQ_METRIC_MAP["Coupling"] =2;
EQ_METRIC_MAP["Lack of Cohesion"] =3;
EQ_METRIC_MAP["Size"] =4;
EQ_METRIC_MAP["Number of Highly Problematic Classes"] =5;
EQ_METRIC_MAP["Number of Entities"] =6;
EQ_METRIC_MAP["Number of Problematic Classes"] =7;
EQ_METRIC_MAP["Class Lines of Code"] =8;
EQ_METRIC_MAP["Number of External Packages"] =9;
EQ_METRIC_MAP["Number of Packages"] =10;
EQ_METRIC_MAP["Number of External Entities"] =11;
EQ_METRIC_MAP["Efferent Coupling"] =12;
EQ_METRIC_MAP["Number of Interfaces"] =13;
EQ_METRIC_MAP["Number of Classes"] =14;
EQ_METRIC_MAP["Afferent Coupling"] =15;
EQ_METRIC_MAP["Weighted Method Count"] =16;
EQ_METRIC_MAP["Normalized Distance"] =17;
EQ_METRIC_MAP["Abstractness"] =18;
EQ_METRIC_MAP["Instability"] =19;
EQ_METRIC_MAP["Coupling Between Object Classes"] =20;
EQ_METRIC_MAP["Access to Foreign Data"] =21;
EQ_METRIC_MAP["Number of Fields"] =22;
EQ_METRIC_MAP["Specialization Index"] =23;
EQ_METRIC_MAP["Class-Methods Lines of Code"] =24;
EQ_METRIC_MAP["Number of Children"] =25;
EQ_METRIC_MAP["Depth of Inheritance Tree"] =26;
EQ_METRIC_MAP["Number of Methods"] =27;
EQ_METRIC_MAP["Response For a Class"] =28;
EQ_METRIC_MAP["Lack of Tight Class Cohesion"] =29;
EQ_METRIC_MAP["Lack of Cohesion of Methods"] =30;
EQ_METRIC_MAP["Number of Static Fields"] =31;
EQ_METRIC_MAP["Lack of Cohesion Among Methods(1-CAM)"] =32;
EQ_METRIC_MAP["CBO App"] =33;
EQ_METRIC_MAP["Simple Response For a Class"] =34;
EQ_METRIC_MAP["Number of Static Methods"] =35;
EQ_METRIC_MAP["CBO Lib"] =36;
EQ_METRIC_MAP["Number of Overridden Methods"] =37;
var EQ_SELECTED_CLASS_METRIC 		= "Coupling";
var EQ_SELECTED_PACKAGE_METRIC 	= "Coupling";
var EQ_SELECTED_PROJECT_METRIC 	= "Class Lines of Code";
var EQ_CLASS_METRIC_INDEX 	= EQ_METRIC_MAP[EQ_SELECTED_CLASS_METRIC];
var EQ_PACKAGE_METRIC_INDEX	= EQ_METRIC_MAP[EQ_SELECTED_PACKAGE_METRIC];
var EQ_PROJECT_METRIC_INDEX 	= EQ_METRIC_MAP[EQ_SELECTED_PROJECT_METRIC];
var EQ_COLOR_OF_LEVELS = ["#1F77B4","#007F24","#62BF18","#FFC800","#FF5B13","#E50000"];
var EQ_CLASS_METRICS = ["C3","Complexity","Coupling","Lack of Cohesion","Size","Class Lines of Code","Weighted Method Count","Coupling Between Object Classes","Access to Foreign Data","Number of Fields","Specialization Index","Class-Methods Lines of Code","Number of Children","Depth of Inheritance Tree","Number of Methods","Response For a Class","Lack of Tight Class Cohesion","Lack of Cohesion of Methods","Number of Static Fields","Lack of Cohesion Among Methods(1-CAM)","CBO App","Simple Response For a Class","Number of Static Methods","CBO Lib","Number of Overridden Methods"];
var EQ_PACKAGE_METRICS = ["C3","Complexity","Coupling","Lack of Cohesion","Size","Number of Entities","Class Lines of Code","Efferent Coupling","Number of Interfaces","Number of Classes","Afferent Coupling","Weighted Method Count","Normalized Distance","Abstractness","Instability"];
var EQ_PROJECT_METRICS = ["Number of Highly Problematic Classes","Number of Entities","Number of Problematic Classes","Class Lines of Code","Number of External Packages","Number of Packages","Number of External Entities"];
function EQ_GET_COLOR(d) {
if(d.metrics)
return EQ_COLOR_OF_LEVELS[d.metrics[EQ_CLASS_METRIC_INDEX]];
if(d.pmetrics)
return EQ_COLOR_OF_LEVELS[d.pmetrics[EQ_PACKAGE_METRIC_INDEX]];
if(d.prmetrics)
return EQ_COLOR_OF_LEVELS[d.prmetrics[EQ_PROJECT_METRIC_INDEX]];
return EQ_COLOR_OF_LEVELS[0];
}
