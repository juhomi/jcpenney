/*!
 * jQuery Expander Plugin v1.3
 *
 * Date: Sat Sep 17 00:37:34 2011 EDT
 * Requires: jQuery v1.3+
 *
 * Copyright 2011, Karl Swedberg
 * Dual licensed under the MIT and GPL licenses (just like jQuery):
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 *
 *
 *
*/
(function(b){b.expander={version:"1.3",defaults:{slicePoint:100,preserveWords:true,widow:4,expandText:"read more",expandPrefix:'<span class="dot">...</span>',summaryClass:"summary",detailClass:"details",moreClass:"read-more",lessClass:"read-less",collapseTimer:0,expandEffect:"fadeIn",expandSpeed:250,collapseEffect:"fadeOut",collapseSpeed:200,userCollapse:true,userCollapseText:"read less",userCollapsePrefix:" ",onSlice:null,beforeExpand:null,afterExpand:null,onCollapse:null}};
b.fn.expander=function(u){var y=b.extend({},b.expander.defaults,u),w=/^<(?:area|br|col|embed|hr|img|input|link|meta|param).*>$/i,p=/(&(?:[^;]+;)?|\w+)$/,q=/<\/?(\w+)[^>]*>/g,t=/<(\w+)[^>]*>/g,a=/<\/(\w+)>/g,B=/^<[^>]+>.?/,A;this.each(function(){var V,W,h,n,o,R,d,f,af,S,X=[],ab=[],T={},l=this,Z=b(this),j=b([]),ad=b.meta?b.extend({},y,Z.data()):y,g=!!Z.find("."+ad.detailClass).length,m=!!Z.find("*").filter(function(){var C=b(this).css("display");
return(/^block|table|list/).test(C);}).length,Y=m?"div":"span",c=Y+"."+ad.detailClass,k="span."+ad.moreClass,i=ad.expandSpeed||0,aa=b.trim(Z.html()),e=b.trim(Z.text()),ae=aa.slice(0,ad.slicePoint);if(b.data(this,"expander")){return;}b.data(this,"expander",true);b.each(["onSlice","beforeExpand","afterExpand","onCollapse"],function(D,C){T[C]=b.isFunction(ad[C]);
});ae=r(ae);summTagless=ae.replace(q,"").length;while(summTagless<ad.slicePoint){newChar=aa.charAt(ae.length);if(newChar=="<"){newChar=aa.slice(ae.length).match(B)[0];}ae+=newChar;summTagless++;}ae=r(ae,ad.preserveWords);o=ae.match(t)||[];R=ae.match(a)||[];h=[];b.each(o,function(D,C){if(!w.test(C)){h.push(C);
}});o=h;W=R.length;for(V=0;V<W;V++){R[V]=R[V].replace(a,"$1");}b.each(o,function(F,C){var E=C.replace(t,"$1");var D=b.inArray(E,R);if(D===-1){X.push(C);ab.push("</"+E+">");}else{R.splice(D,1);}});ab.reverse();if(!g){f=aa.slice(ae.length);if(f.split(/\s+/).length<ad.widow&&!g){return;}d=ab.pop()||"";ae+=ab.join("");
f=X.join("")+f;}else{f=Z.find(c).remove().html();ae=Z.html();aa=ae+f;d="";}ad.moreLabel=Z.find(k).length?"":z(ad);if(m){f=aa;}ae+=d;ad.summary=ae;ad.details=f;ad.lastCloseTag=d;if(T.onSlice){h=ad.onSlice.call(l,ad);ad=h&&h.details?h:ad;}var U=v(ad,m);Z.html(U);af=Z.find(c);S=Z.find(k);af.hide();S.find("a").unbind("click.expander").bind("click.expander",ac);
j=Z.find("div."+ad.summaryClass);if(ad.userCollapse&&!Z.find("span."+ad.lessClass).length){Z.find(c).append('<span class="'+ad.lessClass+'">'+ad.userCollapsePrefix+'<a href="#">'+ad.userCollapseText+"</a></span>");}Z.find("span."+ad.lessClass+" a").unbind("click.expander").bind("click.expander",function(D){D.preventDefault();
clearTimeout(A);var C=b(this).closest(c);x(ad,C);if(T.onCollapse){ad.onCollapse.call(l,true);}});function ac(C){C.preventDefault();S.hide();j.hide();if(T.beforeExpand){ad.beforeExpand.call(l);}af.stop(false,true)[ad.expandEffect](i,function(){af.css({zoom:""});if(T.afterExpand){ad.afterExpand.call(l);
}s(ad,af,l);});}});function v(c,d){var e="span",f=c.summary;if(d){e="div";f=f.replace(/(<\/[^>]+>)\s*$/,c.moreLabel+"$1");f='<div class="'+c.summaryClass+'">'+f+"</div>";}else{f+=c.moreLabel;}return[f,"<",e+' class="'+c.detailClass+'"',">",c.details,"</"+e+">"].join("");}function z(c){var d='<span class="'+c.moreClass+'">'+c.expandPrefix;
d+='<a href="#">'+c.expandText+"</a></span>";return d;}function r(d,c){if(d.lastIndexOf("<")>d.lastIndexOf(">")){d=d.slice(0,d.lastIndexOf("<"));}if(c){d=d.replace(p,"");}return d;}function x(c,d){d.stop(true,true)[c.collapseEffect](c.collapseSpeed,function(){var e=d.prev("span."+c.moreClass).show();
if(!e.length){d.parent().children("div."+c.summaryClass).show().find("span."+c.moreClass).show();}});}function s(d,e,c){if(d.collapseTimer){A=setTimeout(function(){x(d,e);if(b.isFunction(d.onCollapse)){d.onCollapse.call(c,false);}},d.collapseTimer);}}return this;};b.fn.expander.defaults=b.expander.defaults;
})(jQuery);