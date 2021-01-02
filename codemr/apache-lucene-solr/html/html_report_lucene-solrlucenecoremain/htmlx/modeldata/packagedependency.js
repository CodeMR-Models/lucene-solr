var matrix = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,40,1,4,0,0,0,0,0,0,1,0,0,0,9,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,20,15,0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,26,0,0,1,3,30,0,0,0,0,0,0,2,5,0,0,2,1,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,5,13,22,0,0,0,0,0,0,1,0,0,0,32,0,0],[0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,3,2,0,0,0,0,1,0,0,0,0,0,3,0,0],[0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,3,0,0],[0,0,2,0,0,2,6,0,0,0,0,0,0,0,0,0,3,5,5,0,0,0,0,0,0,0,0,0,0,6,0,0],[0,0,2,0,0,0,5,0,0,0,0,0,0,0,0,0,0,8,4,1,0,0,0,0,0,0,0,0,0,5,0,0],[0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,1,3,3,0,0,0,0,0,0,0,0,0,0,4,0,2],[0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,3,0,0,0,0,0,3,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,22,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,5,0,0,1,1,1,1,0,0,0,2,3,2,0,0,2,0,0,0,0,0,0,0,4,0,0],[0,0,0,5,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,10,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,10,66,0,3,0,0,0,0,4,10,1,0,88,0,0],[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,21,0,0,0,0,0,0,1,0,0,0,6,0,0],[0,0,1,2,0,0,1,0,0,0,0,0,0,1,0,0,14,7,0,0,0,0,0,0,0,2,1,0,1,4,0,0],[0,0,0,0,0,1,7,0,0,0,0,0,0,0,0,0,0,9,8,0,0,0,0,0,0,0,3,0,0,7,7,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,22,0,3,0,0,0,0,0,0,0,0,0,0,17,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,4,0,0,0,0,0,0,0,0,0,0,2,0,0],[0,0,0,2,0,0,2,0,0,0,0,0,0,0,0,0,2,2,12,0,0,0,0,0,0,2,0,0,0,11,0,0],[0,0,9,0,0,1,9,0,0,0,0,0,2,0,0,0,2,12,10,0,0,0,0,0,0,0,0,0,0,11,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,3,0,0,0,0,0,0,0,0,0,2,0,0,50,0,38,0,0,0,21,0,0,0,0,0,0,41,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,13,0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,1,0,0,0,0,0,0,4,0,0,0,6,0,0],[0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0],[0,5,16,19,0,0,54,0,0,1,0,0,0,5,0,1,53,71,146,0,0,0,0,1,0,20,13,0,0,0,0,1],[0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,15,13,0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,1,0,0,0,5,0,0,0,0,0,0,0,0,0,1,6,10,0,0,0,0,0,0,0,0,0,0,3,0,0]]
var packages = [{
"name": " org.apache.lucene.util.mutable", "color": " #3182bd"
}
,{
"name": " org.apache.lucene.search.similarities", "color": " #6baed6"
}
,{
"name": " org.apache.lucene.util.packed", "color": " #9ecae1"
}
,{
"name": " org.apache.lucene.analysis", "color": " #c6dbef"
}
,{
"name": " org.apache.lucene.codecs.lucene60", "color": " #e6550d"
}
,{
"name": " org.apache.lucene.util.compress", "color": " #fd8d3c"
}
,{
"name": " org.apache.lucene.codecs", "color": " #fdae6b"
}
,{
"name": " org.apache.lucene.codecs.lucene50", "color": " #fdd0a2"
}
,{
"name": " org.apache.lucene.codecs.perfield", "color": " #31a354"
}
,{
"name": " org.apache.lucene.codecs.lucene80", "color": " #74c476"
}
,{
"name": " org.apache.lucene.codecs.lucene84", "color": " #a1d99b"
}
,{
"name": " org.apache.lucene.codecs.lucene86", "color": " #c7e9c0"
}
,{
"name": " org.apache.lucene.codecs.lucene87", "color": " #756bb1"
}
,{
"name": " org.apache.lucene.analysis.tokenattributes", "color": " #9e9ac8"
}
,{
"name": " org.apache.lucene.codecs.lucene90", "color": " #bcbddc"
}
,{
"name": " org.apache.lucene.analysis.standard", "color": " #dadaeb"
}
,{
"name": " org.apache.lucene.search", "color": " #636363"
}
,{
"name": " org.apache.lucene.store", "color": " #969696"
}
,{
"name": " org.apache.lucene.util", "color": " #bdbdbd"
}
,{
"name": " org.apache.lucene.codecs.blocktree", "color": " #d9d9d9"
}
,{
"name": " org.apache.lucene.search.spans", "color": " #3182bd"
}
,{
"name": " org.apache.lucene.util.hnsw", "color": " #6baed6"
}
,{
"name": " org.apache.lucene.geo", "color": " #9ecae1"
}
,{
"name": " org.apache.lucene.codecs.compressing", "color": " #c6dbef"
}
,{
"name": " org.apache.lucene", "color": " #e6550d"
}
,{
"name": " org.apache.lucene.document", "color": " #fd8d3c"
}
,{
"name": " org.apache.lucene.util.automaton", "color": " #fdae6b"
}
,{
"name": " org.apache.lucene.search.comparators", "color": " #fdd0a2"
}
,{
"name": " org.apache.lucene.util.graph", "color": " #31a354"
}
,{
"name": " org.apache.lucene.index", "color": " #74c476"
}
,{
"name": " org.apache.lucene.util.fst", "color": " #a1d99b"
}
,{
"name": " org.apache.lucene.util.bkd", "color": " #c7e9c0"
}
];
