function EQ_GET_DATA(){ 
	  var ret = {
"name": " lucene-solr working set: {lucene-solr.solr.contrib.analysis-extras.main}", "value":600393, 
"prmetrics":{"5":1,"6":1,"7":1,"8":1,"9":3,"10":1,"11":1},
"prmetricvalues":{"5":0,"6":2,"7":1,"8":389,"9":26,"10":2,"11":53},
"children": [ {
"name": "org.apache.solr.schema", "key": "J", "value":9415, 
"pmetrics":{"4":5,"12":4,"13":3,"14":5,"3":1,"1":5,"0":5,"6":5,"8":5,"2":4,"15":5,"16":5},
"pmetricvalues":{"4":5,"12":65,"13":11,"14":111,"3":1,"1":5,"0":5,"17":0.572,"6":122,"18":0.205,"8":9415,"19":0.223,"2":4,"15":227,"16":2731},
"children":[
{
"name": "ICUCollationField","key": "6Q","value":143, 
"metrics":{"20":4,"21":2,"22":1,"23":5,"24":2,"25":1,"26":2,"0":4,"27":1,"28":3,"29":5,"30":1,"31":1,"32":3,"33":3,"34":1,"35":1,"36":1,"16":2,"37":2,"4":2,"8":2,"2":4,"3":3,"1":3},
"metricvalues":{"20":23,"21":3,"22":1,"23":1.5,"24":141,"25":0,"26":3,"0":4,"27":14,"28":102,"29":0.964,"30":0.0,"31":0,"32":0.776,"33":19,"34":42,"35":1,"36":4,"16":48,"37":7,"4":2,"8":143,"2":4,"3":3,"1":3}
}
]
},{
"name": "org.apache.solr.update.processor", "key": "A", "value":6773, 
"pmetrics":{"4":5,"12":4,"13":1,"14":5,"3":1,"1":4,"0":4,"6":5,"8":4,"2":4,"15":4,"16":4},
"pmetricvalues":{"4":5,"12":80,"13":5,"14":120,"3":1,"1":4,"0":4,"17":0.08,"6":125,"18":0.136,"8":6773,"19":0.784,"2":4,"15":22,"16":1932},
"children":[
{
"name": "OpenNLPExtractNamedEntitiesUpdateProcessorFactory","key": "bzx","value":246, 
"metrics":{"20":3,"21":1,"22":1,"23":1,"24":2,"25":1,"26":2,"0":3,"27":1,"28":1,"29":2,"30":3,"31":1,"32":2,"33":3,"34":1,"35":1,"36":1,"16":2,"37":1,"4":2,"8":2,"2":3,"3":2,"1":2},
"metricvalues":{"20":13,"21":1,"22":7,"23":0.0,"24":229,"25":0,"26":2,"0":3,"27":6,"28":46,"29":0.667,"30":0.783,"31":8,"32":0.643,"33":12,"34":23,"35":1,"36":1,"16":46,"37":0,"4":2,"8":246,"2":3,"3":2,"1":2}
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
