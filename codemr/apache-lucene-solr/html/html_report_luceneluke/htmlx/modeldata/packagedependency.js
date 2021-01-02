var matrix = [[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0],[0,0,0,0,0,0,4,0,0,0,0,0,3,0,0,0,0,0,0,0,2,0,0,0,4],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1],[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0],[0,1,0,0,1,0,6,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,1,0,6],[0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2],[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,1,0,0],[1,0,1,1,0,0,9,1,1,7,1,1,0,1,2,2,0,1,0,1,0,1,2,1,9],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,2],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,8,0,12,0,0,0,0,0,0,0,0,0,0,0,6],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,2,5,1,0,1,0,2,3,0,0,1,0,0,0,0,0,0,1,0,5],[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,3,0,0,1,0,0,0,0,0,8,0,6,0,0,0,0,0,1,0,0,0,4],[0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0]]
var packages = [{
"name": " org.apache.lucene.luke.models.commits", "color": " #3182bd"
}
,{
"name": " org.apache.lucene.luke.util.reflection", "color": " #6baed6"
}
,{
"name": " org.apache.lucene.luke.models.overview", "color": " #9ecae1"
}
,{
"name": " org.apache.lucene.luke.app.desktop.components.dialog.analysis", "color": " #c6dbef"
}
,{
"name": " org.apache.lucene.luke.models.util", "color": " #e6550d"
}
,{
"name": " org.apache.lucene.luke.app.desktop.dto.documents", "color": " #fd8d3c"
}
,{
"name": " org.apache.lucene.luke.app.desktop", "color": " #fdae6b"
}
,{
"name": " org.apache.lucene.luke.models.tools", "color": " #fdd0a2"
}
,{
"name": " org.apache.lucene.luke.app.desktop.components.dialog.menubar", "color": " #31a354"
}
,{
"name": " org.apache.lucene.luke.app", "color": " #74c476"
}
,{
"name": " org.apache.lucene.luke.models.search", "color": " #a1d99b"
}
,{
"name": " org.apache.lucene.luke.models.documents", "color": " #c7e9c0"
}
,{
"name": " org.apache.lucene.luke.app.desktop.components", "color": " #756bb1"
}
,{
"name": " org.apache.lucene.luke.app.desktop.components.dialog.search", "color": " #9e9ac8"
}
,{
"name": " org.apache.lucene.luke.models.analysis", "color": " #bcbddc"
}
,{
"name": " org.apache.lucene.luke.app.desktop.components.dialog", "color": " #dadaeb"
}
,{
"name": " org.apache.lucene.luke.models.util.twentynewsgroups", "color": " #636363"
}
,{
"name": " org.apache.lucene.luke.util", "color": " #969696"
}
,{
"name": " org.apache.lucene.luke.app.desktop.util.inifile", "color": " #bdbdbd"
}
,{
"name": " org.apache.lucene.luke.app.desktop.components.fragments.search", "color": " #d9d9d9"
}
,{
"name": " org.apache.lucene.luke.app.desktop.util.lang", "color": " #3182bd"
}
,{
"name": " org.apache.lucene.luke.app.desktop.components.dialog.documents", "color": " #6baed6"
}
,{
"name": " org.apache.lucene.luke.models", "color": " #9ecae1"
}
,{
"name": " org.apache.lucene.luke.app.desktop.components.fragments.analysis", "color": " #c6dbef"
}
,{
"name": " org.apache.lucene.luke.app.desktop.util", "color": " #e6550d"
}
];
