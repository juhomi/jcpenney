(function(P,R,I){function N(af){if(!C){x=af,J(),p=P(x),y=0,ac.rel!=="nofollow"&&(p=P("."+Q).filter(function(){var ah=P.data(this,M).rel||this.rel;return ah===ac.rel;}),y=p.index(x),y===-1&&(p=p.add(x),y=p.length-1));if(!A){A=B=!0,i.show();if(ac.returnFocus){try{x.blur(),P(x).one(c,function(){try{this.focus();
}catch(ah){}});}catch(ag){}}h.css({opacity:+ac.opacity,cursor:ac.overlayClose?"pointer":"auto"}).show(),ac.w=H(ac.initialWidth,"x"),ac.h=H(ac.initialHeight,"y"),F.position(),f&&q.bind("resize."+g+" scroll."+g,function(){h.css({width:q.width(),height:q.height(),top:q.scrollTop(),left:q.scrollLeft()});
}).trigger("resize."+g),t(S,ac.onOpen),ab.add(V).hide(),aa.html(ac.close).show();}F.load(!0);}}function L(){var ah,ai=O+"Slideshow_",aj="click."+O,ak,af,ag;ac.slideshow&&p[1]?(ak=function(){X.text(ac.slideshowStop).unbind(aj).bind(a,function(){if(y<p.length-1||ac.loop){ah=setTimeout(F.next,ac.slideshowSpeed);
}}).bind(T,function(){clearTimeout(ah);}).one(aj+" "+b,af),i.removeClass(ai+"off").addClass(ai+"on"),ah=setTimeout(F.next,ac.slideshowSpeed);},af=function(){clearTimeout(ah),X.text(ac.slideshowStart).unbind([a,T,b,aj].join(" ")).one(aj,ak),i.removeClass(ai+"on").addClass(ai+"off");},ac.slideshowAuto?ak():af()):i.removeClass(ai+"off "+ai+"on");
}function t(af,ag){ag&&ag.call(x),P.event.trigger(af);}function J(af){ac=P.extend({},P.data(x,M));for(af in ac){P.isFunction(ac[af])&&af.substring(0,2)!=="on"&&(ac[af]=ac[af].call(x));}ac.rel=ac.rel||x.rel||"nofollow",ac.href=ac.href||P(x).attr("href"),ac.title=ac.title||x.title,typeof ac.href=="string"&&(ac.href=P.trim(ac.href));
}function r(af){return ac.photo||/\.(gif|png|jpg|jpeg|bmp)(?:\?([^#]*))?(?:#(\.*))?$/i.test(af);}function H(af,ag){return Math.round((/%/.test(af)?(ag==="x"?q.width():q.height())/100:1)*parseInt(af,10));}function G(ag,ah,af){af=R.createElement("div"),ag&&(af.id=O+ag),af.style.cssText=ah||"";return P(af);
}var K={transition:"elastic",speed:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,inline:!1,html:!1,iframe:!1,fastIframe:!0,photo:!1,href:!1,title:!1,rel:!1,opacity:0.9,preloading:!0,current:"image {current} of {total}",previous:"previous",next:"next",close:"close",open:!1,returnFocus:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:!1},M="colorbox",O="cbox",Q=O+"Element",S=O+"_open",T=O+"_load",a=O+"_complete",b=O+"_cleanup",c=O+"_closed",d=O+"_purge",e=P.browser.msie&&!P.support.opacity,f=e&&P.browser.version<7,g=O+"_IE6",h,i,j,k,l,m,n,o,p,q,s,ae,U,V,W,X,Y,Z,aa,ab,ac,ad,u,v,w,x,y,z,A,B,C,D,E,F;
F=P.fn[M]=P[M]=function(ah,af){var ag=this;ah=ah||{};if(!ag[0]){if(ag.selector){return ag;}ag=P("<a/>"),ah.open=!0;}af&&(ah.onComplete=af),ag.each(function(){P.data(this,M,P.extend({},P.data(this,M)||K,ah)),P(this).addClass(Q);}),(P.isFunction(ah.open)&&ah.open.call(ag)||ah.open)&&N(ag[0]);return ag;
},F.init=function(){q=P(I),i=G().attr({id:M,"class":e?O+(f?"IE6":"IE"):""}),h=G("Overlay",f?"position:absolute":"").hide(),j=G("Wrapper"),k=G("Content").append(s=G("LoadedContent","width:0; height:0; overflow:hidden"),U=G("LoadingOverlay").add(G("LoadingGraphic")),V=G("Title"),W=G("Current"),Y=G("Next"),Z=G("Previous"),X=G("Slideshow").bind(S,L),aa=G("Close")),j.append(G().append(G("TopLeft"),l=G("TopCenter"),G("TopRight")),G(!1,"clear:left").append(m=G("MiddleLeft"),k,n=G("MiddleRight")),G(!1,"clear:left").append(G("BottomLeft"),o=G("BottomCenter"),G("BottomRight"))).children().children().css({"float":"left"}),ae=G(!1,"position:absolute; width:9999px; visibility:hidden; display:none"),P("body").prepend(h,i.append(j,ae)),k.children().hover(function(){P(this).addClass("hover");
},function(){P(this).removeClass("hover");}).addClass("hover"),ad=l.height()+o.height()+k.outerHeight(!0)-k.height(),u=m.width()+n.width()+k.outerWidth(!0)-k.width(),v=s.outerHeight(!0),w=s.outerWidth(!0),i.css({"padding-bottom":ad,"padding-right":u}).hide(),Y.click(function(){F.next();}),Z.click(function(){F.prev();
}),aa.click(function(){F.close();}),ab=Y.add(Z).add(W).add(X),k.children().removeClass("hover"),h.click(function(){ac.overlayClose&&F.close();}),P(R).bind("keydown."+O,function(af){var ag=af.keyCode;A&&ac.escKey&&ag===27&&(af.preventDefault(),F.close()),A&&ac.arrowKey&&p[1]&&(ag===37?(af.preventDefault(),Z.click()):ag===39&&(af.preventDefault(),Y.click()));
});},F.remove=function(){i.add(h).remove(),P("."+Q).removeData(M).removeClass(Q);},F.position=function(ai,aj){function ah(ak){l[0].style.width=o[0].style.width=k[0].style.width=ak.style.width,U[0].style.height=U[1].style.height=k[0].style.height=m[0].style.height=n[0].style.height=ak.style.height;}var af=0,ag=0;
q.unbind("resize."+O),i.hide(),ac.fixed&&!f?i.css({position:"fixed"}):(af=q.scrollTop(),ag=q.scrollLeft(),i.css({position:"absolute"})),ac.right!==!1?ag+=Math.max(q.width()-ac.w-w-u-H(ac.right,"x"),0):ac.left!==!1?ag+=H(ac.left,"x"):ag+=Math.round(Math.max(q.width()-ac.w-w-u,0)/2),ac.bottom!==!1?af+=Math.max(R.documentElement.clientHeight-ac.h-v-ad-H(ac.bottom,"y"),0):ac.top!==!1?af+=H(ac.top,"y"):af+=Math.round(Math.max(R.documentElement.clientHeight-ac.h-v-ad,0)/2),i.show(),ai=i.width()===ac.w+w&&i.height()===ac.h+v?0:ai||0,j[0].style.width=j[0].style.height="9999px",i.dequeue().animate({width:ac.w+w,height:ac.h+v,top:af,left:ag},{duration:ai,complete:function(){ah(this),B=!1,j[0].style.width=ac.w+w+u+"px",j[0].style.height=ac.h+v+ad+"px",aj&&aj(),setTimeout(function(){q.bind("resize."+O,F.position);
},1);},step:function(){ah(this);}});},F.resize=function(af){if(A){af=af||{},af.width&&(ac.w=H(af.width,"x")-w-u),af.innerWidth&&(ac.w=H(af.innerWidth,"x")),s.css({width:ac.w}),af.height&&(ac.h=H(af.height,"y")-v-ad),af.innerHeight&&(ac.h=H(af.innerHeight,"y"));if(!af.innerHeight&&!af.height){var ag=s.wrapInner("<div style='overflow:auto'></div>").children();
ac.h=ag.height(),ag.replaceWith(ag.children());}s.css({height:ac.h}),F.position(ac.transition==="none"?0:ac.speed);}},F.prep=function(ai){function ah(){ac.h=ac.h||s.height(),ac.h=ac.mh&&ac.mh<ac.h?ac.mh:ac.h;return ac.h;}function ag(){ac.w=ac.w||s.width(),ac.w=ac.mw&&ac.mw<ac.w?ac.mw:ac.w;return ac.w;
}if(!!A){var aj,af=ac.transition==="none"?0:ac.speed;s.remove(),s=G("LoadedContent").append(ai),s.hide().appendTo(ae.show()).css({width:ag(),overflow:ac.scrolling?"auto":"hidden"}).css({height:ah()}).prependTo(k),ae.hide(),P(z).css({"float":"none"}),f&&P("select").not(i.find("select")).filter(function(){return this.style.visibility!=="hidden";
}).css({visibility:"hidden"}).one(b,function(){this.style.visibility="inherit";}),aj=function(){function am(){e&&i[0].style.removeAttribute("filter");}var aq,al,an,ao,ap=p.length,ar,ak;!A||(ak=function(){clearTimeout(E),U.hide(),t(a,ac.onComplete);},e&&z&&s.fadeIn(100),V.html(ac.title).add(s).show(),ap>1?(typeof ac.current=="string"&&W.html(ac.current.replace("{current}",y+1).replace("{total}",ap)).show(),Y[ac.loop||y<ap-1?"show":"hide"]().html(ac.next),Z[ac.loop||y?"show":"hide"]().html(ac.previous),aq=y?p[y-1]:p[ap-1],an=y<ap-1?p[y+1]:p[0],ac.slideshow&&X.show(),ac.preloading&&(ao=P.data(an,M).href||an.href,al=P.data(aq,M).href||aq.href,ao=P.isFunction(ao)?ao.call(an):ao,al=P.isFunction(al)?al.call(aq):al,r(ao)&&(P("<img/>")[0].src=ao),r(al)&&(P("<img/>")[0].src=al))):ab.hide(),ac.iframe?(ar=P("<iframe/>").addClass(O+"Iframe")[0],ac.fastIframe?ak():P(ar).one("load",ak),ar.name=O+ +(new Date),ar.src=ac.href,ac.scrolling||(ar.scrolling="no"),e&&(ar.frameBorder=0,ar.allowTransparency="true"),P(ar).appendTo(s).one(d,function(){ar.src="//about:blank";
})):ak(),ac.transition==="fade"?i.fadeTo(af,1,am):am());},ac.transition==="fade"?i.fadeTo(af,0,function(){F.position(0,aj);}):F.position(af,aj);}},F.load=function(ah){var ai,af,ag=F.prep;B=!0,z=!1,x=p[y],ah||J(),t(d),t(T,ac.onLoad),ac.h=ac.height?H(ac.height,"y")-v-ad:ac.innerHeight&&H(ac.innerHeight,"y"),ac.w=ac.width?H(ac.width,"x")-w-u:ac.innerWidth&&H(ac.innerWidth,"x"),ac.mw=ac.w,ac.mh=ac.h,ac.maxWidth&&(ac.mw=H(ac.maxWidth,"x")-w-u,ac.mw=ac.w&&ac.w<ac.mw?ac.w:ac.mw),ac.maxHeight&&(ac.mh=H(ac.maxHeight,"y")-v-ad,ac.mh=ac.h&&ac.h<ac.mh?ac.h:ac.mh),ai=ac.href,E=setTimeout(function(){U.show();
},100),ac.inline?(G().hide().insertBefore(P(ai)[0]).one(d,function(){P(this).replaceWith(s.children());}),ag(P(ai))):ac.iframe?ag(" "):ac.html?ag(ac.html):r(ai)?(P(z=new Image).addClass(O+"Photo").error(function(){ac.title=!1,ag(G("Error").text("This image could not be loaded"));}).load(function(){var aj;
z.onload=null,ac.scalePhotos&&(af=function(){z.height-=z.height*aj,z.width-=z.width*aj;},ac.mw&&z.width>ac.mw&&(aj=(z.width-ac.mw)/z.width,af()),ac.mh&&z.height>ac.mh&&(aj=(z.height-ac.mh)/z.height,af())),ac.h&&(z.style.marginTop=Math.max(ac.h-z.height,0)/2+"px"),p[1]&&(y<p.length-1||ac.loop)&&(z.style.cursor="pointer",z.onclick=function(){F.next();
}),e&&(z.style.msInterpolationMode="bicubic"),setTimeout(function(){ag(z);},1);}),setTimeout(function(){z.src=ai;},1)):ai&&ae.load(ai,ac.data,function(al,aj,ak){ag(aj==="error"?G("Error").text("Request unsuccessful: "+ak.statusText):P(this).contents());});},F.next=function(){!B&&p[1]&&(y<p.length-1||ac.loop)&&(y=y<p.length-1?y+1:0,F.load());
},F.prev=function(){!B&&p[1]&&(y||ac.loop)&&(y=y?y-1:p.length-1,F.load());},F.close=function(){A&&!C&&(C=!0,A=!1,t(b,ac.onCleanup),q.unbind("."+O+" ."+g),h.fadeTo(200,0),i.stop().fadeTo(300,0,function(){i.add(h).css({opacity:1,cursor:"auto"}).hide(),t(d),s.remove(),setTimeout(function(){C=!1,t(c,ac.onClosed);
},1);}));},F.element=function(){return P(x);},F.settings=K,D=function(af){af.button!==0&&typeof af.button!="undefined"||af.ctrlKey||af.shiftKey||af.altKey||(af.preventDefault(),N(this));},P.fn.delegate?P(R).delegate("."+Q,"click",D):P("."+Q).live("click",D),P(F.init);})(jQuery,document,this);