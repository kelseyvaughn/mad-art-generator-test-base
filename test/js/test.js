$(document).ready(function() {
    console.log("ready")
    //break down the url
    //load the appropriate
    //test script
    var path_parts = main.utils.URLParser.getPathParts();
    //the last item 
    //should match the test script name
    //that needs to be loaded
    var filename = path_parts[path_parts.length-1];
    
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("src", "/test/js/test/" + filename + ".js");
        
    document.head.appendChild(fileref);
});