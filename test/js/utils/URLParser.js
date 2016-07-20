//URLParser 
// ------------------------
//handle common url parsin
//operationsg
// ------------------------
//if(!main) var main = {};
if(!main || !main.utils) var main = { utils: {} };

main.utils.URLParser = {
    //--------------------------------------
    // getPathParts
    // - returns array
    //--------------------------------------
	getPathParts: function(){
		var path = window.location.pathname;
		var pathArr = path.split("/");
		return pathArr;
	}
};
