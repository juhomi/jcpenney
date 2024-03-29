/*
ADOBE CONFIDENTIAL
Copyright 2005 Adobe Systems Incorporated
All Rights Reserved.

NOTICE:  All information contained herein is, and remains the property of Adobe Systems Incorporated and its suppliers,
if any.  The intellectual and technical concepts contained herein are proprietary to Adobe Systems Incorporated and its
suppliers and may be covered by U.S. and Foreign Patents, patents in process, and are protected by trade secret or 
copyright law. Dissemination of this information or reproduction of this material is strictly forbidden unless prior 
written permission is obtained from Adobe Systems Incorporated.
*/

//////////////
// INCLUDE Function
sj=[];
sj.path='../dhtml/';
if (typeof(sj_codebase)!="undefined"){
	if (sj_codebase.substring(sj_codebase.length-1)!='/' && sj_codebase!='') 
		sj_codebase+='/'; 
	sj.path=sj_codebase;
}
sj.setPath=function(path){
	if (path.substring(path.length-1)!='/' && path!='') 
		path+='/'; 
	sj.path=path;
}
sj.include=function(js){
	js=js.replace(/\:/g,'\/');
	document.write('<script language="javascript" type="text/javascript" src="'+sj.path+js+'.js"><\/script>'); 
}

sj_resource = new Object();
sj_resource.getResource  = function(inString){
var res = inString;
	for (var key in this) {
		if (typeof key == 'string') {
			var old;
			do {
				old = res
				res = res.replace('%' + key + '%', this[key]);
			} while (old != res);
		}
	}

	return res;
} 


sj.include('3.8:sj_resource')
sj.include('3.8:sj_config')
sj.include('3.8:sj_browser')
sj.include('3.8:sj_core')
sj.include('3.8:sj_textloader')
sj.include('3.8:sj_hashtable')
sj.include('3.8:sj_element')
sj.include('3.8:sj_layer')
sj.include('3.8:sj_picture')
sj.include('3.8:sj_zoom')
sj.include('3.8:sj_zoomviewer')
