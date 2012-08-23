// Copyright Channel Intelligence, Inc. 2002-2008
var ci_vid = 841068;
var ci_loggingurl="https://ttwbs.channelintelligence.com?eid=1&";
var ci_imgs=[];
function CI_ReadCookie(ci_cookieName) {
	var ci_cookieParts = document.cookie.split(';');
	ci_cookieName += '=';
	for (var ci_cookiePartIndex=0;ci_cookiePartIndex<ci_cookieParts.length;ci_cookiePartIndex++)
	{
		var ci_cookiePart=ci_cookieParts[ci_cookiePartIndex];
		while (ci_cookiePart.charAt(0)===' '){ci_cookiePart=ci_cookiePart.substring(1,ci_cookiePart.length);}
		if (ci_cookiePart.indexOf(ci_cookieName)===0){return ci_cookiePart.substring(ci_cookieName.length,ci_cookiePart.length);}
	}
	return null;
}
function CI_GetValue(ci_vName,ci_dValue) {
	if (typeof(window[ci_vName])!=="undefined"){return window[ci_vName];}else{return ci_dValue===undefined?null:ci_dValue;}
}
function ci_FP(ci_pix_url){var ci_pic=document.createElement('img');ci_pic.src=ci_pix_url;ci_imgs[ci_imgs.length]=ci_pic;}
try {
	var ci_orderid=CI_GetValue('CI_OrderID',null);
	if(ci_orderid!==null) {
		var ci_baseurl=ci_loggingurl;
		var ci_url="cts=v5&"+"v="+ci_vid+"&o="+ci_orderid;
		if (CI_ReadCookie('ci_cpncode')!==null){ci_url+="&cpncode="+CI_ReadCookie('ci_cpncode');}
		if (CI_ReadCookie('ci_tid')!==null){ci_url+="&tid="+CI_ReadCookie('ci_tid');}
		var ci_aIDs=CI_GetValue('CI_ItemIDs',null);
		var ci_aPrices=CI_GetValue('CI_ItemPrices',null);
		var ci_aQtys=CI_GetValue('CI_ItemQtys',null);
		var ci_aMfrNumbers=CI_GetValue('CI_ItemMfrNums',null);
		for (ci_skuIndex = 0;ci_skuIndex<ci_aIDs.length;ci_skuIndex++) {
			ci_url += "&s=" + ci_aIDs[ci_skuIndex] + "|" + ci_aQtys[ci_skuIndex] + "|" + ci_aPrices[ci_skuIndex] + "|";
			if (ci_aMfrNumbers != undefined) {ci_url += ci_aMfrNumbers[ci_skuIndex];}
		}
		ci_FP(ci_baseurl + ci_url);
	}  
}
catch(err){}