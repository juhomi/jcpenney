/*! 
 * postMessage - v0.5 - 9/11/2009
 * http://benalman.com/
 * 
 * Copyright (c) 2009 "Cowboy" Ben Alman
 * Licensed under the MIT license
 * http://benalman.com/about/license/
 */
var ieredUrl="";(function(r){var n,w,p=1,o,u=this,t=!1,s="postMessage",l="addEventListener",v,q=u[s]&&!r.browser.opera;
r[s]=function(b,c,a,d){if(!c){return;}b=typeof b==="string"?b:r.param(b);a=a||parent;if(q){if(m().BrowserMode=="CompatMode"||m().BrowserMode=="IE7"){if(ieredUrl!=""){a.location=ieredUrl;}else{a.location=c.replace(/#.*$/,"");}}else{a[s](b,c.replace(/([^:]+:\/\/[^\/]+).*/,"$1"));}}else{if(c){if(typeof d!="undefined"){a.location=d;
}else{if(ieredUrl!=""){a.location=ieredUrl;}else{a.location=c.replace(/#.*$/,"");}}}}};function m(){var d=navigator,c=u,f=document;var g="NA";var a=d.userAgent;var e="NA";var b="NA";if(/msie/i.test(a)&&(!c.opera)){if(c.attachEvent&&c.ActiveXObject){g=(a.match(/.+ie\s([\d.]+)/i)||[])[1];if(parseInt(g)==7){if(f.documentMode){g=8;
if(/trident\/\d/i.test(a)){b="CompatMode";}else{b="IE7";}}}else{if(parseInt(g)==8){if(f.documentMode){b="IE8";}}}e=(f.documentMode)?f.documentMode:(f.compatMode&&f.compatMode=="CSS1Compat")?7:5;}}return{"UserAgent":a,"Version":g,"BrowserMode":b,"DocMode":e};}r.receiveMessage=v=function(c,a,b){if(q){if(c){o&&v();
o=function(d){if((typeof a==="string"&&d.origin!==a)||(r.isFunction(a)&&a(d.origin)===t)){return t;}c(d);};}if(u[l]){u[c?l:"removeEventListener"]("message",o,t);}else{u[c?"attachEvent":"detachEvent"]("onmessage",o);}}else{n&&clearInterval(n);n=null;if(c){b=typeof a==="number"?a:typeof b==="number"?b:100;
n=setInterval(function(){var d=document.location.hash,e=/^#?\d+&/;if(d!==w&&e.test(d)){w=d;c({data:d.replace(e,"")});}},b);}}};})(jQuery);function redirectOnSessionTimeOut(h){var i=h;if(i==null||i.indexOf("signinModal.jsp")==-1){if(getCookie("DPLastAccessedTime")!=null&&getCookie("DPSessionTimeOutInterval")!=null){var j=parseInt(getCookie("DPLastAccessedTime"));
var g=parseInt(getCookie("DPSessionTimeOutInterval"));var f=(new Date()).getTime();if((f-j)>g){window.location="/dotcom/jsp/error/error_session.jsp?sessionExpired=true";return;}}}}function fnInitiateModal(f,d){redirectOnSessionTimeOut(f);$('<div id="cboxOverlayIframe"></div>').appendTo("body").css("opacity","0.6");
if(d&&d!=""){d=encodeURIComponent(d);var e=d;if(f.indexOf("?")==-1){e="?parentUrl="+d;}else{e="&parentUrl="+d;}f=f+e;}(function(m){var o,l,n=f,a=m('<div id="iframeContainer"><iframe " src="'+n+'" name="modalIframe" id="modalIframe" scrolling="no" overflow="hidden" allowTransparency="true" frameBorder="0"></iframe></div>').appendTo("body");
var b=Math.abs(document.documentElement.clientHeight-m("#iframeContainer").height())/2+m(window).scrollTop();var c=Math.abs(m(window).width()-m("#iframeContainer").width())/2+m(window).scrollLeft();m("#iframeContainer").css("top",b);m("#iframeContainer").css("left",c);m("#modalIframe").css("top",0);setInterval(function p(){m.receiveMessage(function(h){var g=Number(h.data.replace(/.*if_height=(\d+)(?:&|$)/,"$1"));
var i=h.data.replace(l);if(g<=0&&isNaN(i)){m("#iframeContainer").remove();m("#cboxOverlayIframe").remove();m("input, a").removeAttr("disabled");location.reload();}else{if(isNaN(g)&&i!=undefined){if((i.indexOf(".jump")>0||i.indexOf(".jsp")>0||i.indexOf(".htm")>0)){m("#iframeContainer").remove();m("#cboxOverlayIframe").remove();
window.location=i;}}}});},500);})(jQuery);}function setIsHeaderFlag(){isHeaderClicked=true;}