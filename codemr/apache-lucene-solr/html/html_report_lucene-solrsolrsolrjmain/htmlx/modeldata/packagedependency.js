var matrix = [[0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,5,0,0,2,2,0,2,0,0,2,0,0,2,0,0,0,0,2],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,2,0,0,0,0,0,0,3,0,0,0,1,0,0,1,0,4,0,3,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,5,0,0,0,0,0,0,0,0,3,0,2,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,14,0,0,0,0,37,0,0,7,0,0,238,0,0,0,0,0,0,0,0,0,0,0],[0,0,22,1,1,0,0,0,0,0,0,10,8,0,0,0,3,0,15,0,0,0,3,0,0,0,0,17,0,16,1,5,0],[0,0,1,0,0,0,0,3,0,0,2,0,2,0,0,3,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,10,2,0,1,7,20,0,0,0,15,6,0,0,63,0,3,32,62,0,67,6,0,10,0,0,17,0,9,0,1,7],[0,0,22,0,0,0,0,2,0,0,0,0,3,0,0,0,0,0,20,0,0,0,15,0,0,0,0,7,0,6,0,6,0],[0,0,1,0,1,6,0,0,0,0,0,0,0,0,0,0,1,0,5,0,0,0,0,0,0,0,0,15,1,20,0,0,0],[0,0,2,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,1,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,1,0,0,0],[0,0,1,0,0,0,1,1,0,0,2,0,0,0,0,0,0,0,3,1,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,2,0,0,0,0,3,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,5,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,1,1,0,7,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,4,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1],[0,1,4,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,17,0,4,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,2,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,3,0,3,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,2,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,2,0,0,0,0,1,0,0,0,1,0,0,0,0,0],[0,0,1,0,0,7,0,1,0,2,0,1,1,0,0,0,1,0,2,0,0,0,0,0,0,0,0,0,4,14,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,0,0,0,6,3,0,0,0,0],[0,0,2,0,0,0,0,2,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,2,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,2,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0]]
var packages = [{
"name": " org.apache.solr.client.solrj.io.graph", "color": " #3182bd"
}
,{
"name": " org.apache.solr.client.solrj.response.json", "color": " #6baed6"
}
,{
"name": " org.apache.solr.client.solrj", "color": " #9ecae1"
}
,{
"name": " org.apache.solr.client.solrj.routing", "color": " #c6dbef"
}
,{
"name": " org.apache.solr.common.cloud.rule", "color": " #e6550d"
}
,{
"name": " org.noggit", "color": " #fd8d3c"
}
,{
"name": " org.apache.solr.client.solrj.io.eval", "color": " #fdae6b"
}
,{
"name": " org.apache.solr.client.solrj.impl", "color": " #fdd0a2"
}
,{
"name": " org.apache.solr.client.solrj.io.sql", "color": " #31a354"
}
,{
"name": " org.apache.solr.common.annotation", "color": " #74c476"
}
,{
"name": " org.apache.solr.client.solrj.io.stream", "color": " #a1d99b"
}
,{
"name": " org.apache.solr.client.solrj.request", "color": " #c7e9c0"
}
,{
"name": " org.apache.solr.common.cloud", "color": " #756bb1"
}
,{
"name": " org.apache.solr.client.solrj.request.json", "color": " #9e9ac8"
}
,{
"name": " org.apache.solr.client.solrj.request.beans", "color": " #bcbddc"
}
,{
"name": " org.apache.solr.client.solrj.io", "color": " #dadaeb"
}
,{
"name": " org.apache.solr.client.solrj.cloud", "color": " #636363"
}
,{
"name": " org.apache.solr.client.solrj.io.ops", "color": " #969696"
}
,{
"name": " org.apache.solr.common.params", "color": " #bdbdbd"
}
,{
"name": " org.apache.solr.client.solrj.io.comp", "color": " #d9d9d9"
}
,{
"name": " org.apache.solr.common.luke", "color": " #3182bd"
}
,{
"name": " org.apache.solr.client.solrj.io.stream.expr", "color": " #6baed6"
}
,{
"name": " org.apache.solr.client.solrj.response", "color": " #9ecae1"
}
,{
"name": " org.apache.solr.client.solrj.response.schema", "color": " #c6dbef"
}
,{
"name": " org.apache.solr.client.solrj.io.eq", "color": " #e6550d"
}
,{
"name": " org.apache.solr.client.solrj.beans", "color": " #fd8d3c"
}
,{
"name": " org.apache.solr.client.solrj.request.schema", "color": " #fdae6b"
}
,{
"name": " org.apache.solr.common.util", "color": " #fdd0a2"
}
,{
"name": " org.apache.solr.cluster.api", "color": " #31a354"
}
,{
"name": " org.apache.solr.common", "color": " #74c476"
}
,{
"name": " org.apache.solr.client.solrj.embedded", "color": " #a1d99b"
}
,{
"name": " org.apache.solr.client.solrj.util", "color": " #c7e9c0"
}
,{
"name": " org.apache.solr.client.solrj.io.stream.metrics", "color": " #756bb1"
}
];
