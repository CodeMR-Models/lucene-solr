var matrix = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0],[0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,5,0,0,0,0,0],[0,1,0,0,0,0,0,0,5,5,5,0,0,0,4,0,0,2,7,0,21,3,11,0,0,0],[0,0,0,0,0,0,1,0,0,3,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,13,0,0,0,0,19,0,3,3,3,0,0,14,0,0,0,5,9,0,18,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3],[0,1,0,0,0,0,2,0,0,0,0,0,0,2,1,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,1,0,0,9,0,0,0,0,0],[0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,6,7,7,0,20,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,2,3,3,2,2,0,0,0,0,1,1,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,2,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,1,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,21,0,0,0,0,0,0,0,0,1,0]]
var packages = [{
"name": " org.apache.lucene.queryparser.simple", "color": " #3182bd"
}
,{
"name": " org.apache.lucene.queryparser.flexible.standard.config", "color": " #6baed6"
}
,{
"name": " org.apache.lucene.queryparser.flexible.precedence", "color": " #9ecae1"
}
,{
"name": " org.apache.lucene.queryparser.surround.query", "color": " #c6dbef"
}
,{
"name": " org.apache.lucene.queryparser.ext", "color": " #e6550d"
}
,{
"name": " org.apache.lucene.queryparser.flexible.standard", "color": " #fd8d3c"
}
,{
"name": " org.apache.lucene.queryparser.flexible.core.processors", "color": " #fdae6b"
}
,{
"name": " org.apache.lucene.queryparser.flexible.standard.builders", "color": " #fdd0a2"
}
,{
"name": " org.apache.lucene.queryparser.flexible.core", "color": " #31a354"
}
,{
"name": " org.apache.lucene.queryparser.flexible.messages", "color": " #74c476"
}
,{
"name": " org.apache.lucene.queryparser.flexible.core.messages", "color": " #a1d99b"
}
,{
"name": " org.apache.lucene.queryparser.charstream", "color": " #c7e9c0"
}
,{
"name": " org.apache.lucene.queryparser.flexible.core.parser", "color": " #756bb1"
}
,{
"name": " org.apache.lucene.queryparser.flexible.core.config", "color": " #9e9ac8"
}
,{
"name": " org.apache.lucene.queryparser.flexible.standard.processors", "color": " #bcbddc"
}
,{
"name": " org.apache.lucene.queryparser.xml", "color": " #dadaeb"
}
,{
"name": " org.apache.lucene.queryparser.flexible.precedence.processors", "color": " #636363"
}
,{
"name": " org.apache.lucene.queryparser.flexible.core.util", "color": " #969696"
}
,{
"name": " org.apache.lucene.queryparser.flexible.standard.nodes", "color": " #bdbdbd"
}
,{
"name": " org.apache.lucene.queryparser.surround.parser", "color": " #d9d9d9"
}
,{
"name": " org.apache.lucene.queryparser.flexible.core.nodes", "color": " #3182bd"
}
,{
"name": " org.apache.lucene.queryparser.flexible.standard.parser", "color": " #6baed6"
}
,{
"name": " org.apache.lucene.queryparser.flexible.core.builders", "color": " #9ecae1"
}
,{
"name": " org.apache.lucene.queryparser.complexPhrase", "color": " #c6dbef"
}
,{
"name": " org.apache.lucene.queryparser.classic", "color": " #e6550d"
}
,{
"name": " org.apache.lucene.queryparser.xml.builders", "color": " #fd8d3c"
}
];
