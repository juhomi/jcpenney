function getBumperSites(){var b=["www.jcpenneyoptical.com","www.jcpportraits.com","www.jcp.jodee.com","www.teleflora.com","www.stonebridgebenefit.com","www.perfecthomerewards.com","www.stonebridge-jcp.com","www.sephora.com","www.jcpenney.com/jcp/x2.aspx?DeptID=83168&CatID=83168","www.jcpenney.com/jcp/X2.aspx?DeptID=78785&PCatID=78785&CatID=78785"];
return b;}var syndicateSitesArray=[{"URL":"levolortest.jcpenney.com","intlShip":"false"},{"URL":"baliblindstest.jcpenney.com","intlShip":"false"},{"URL":"sportsfanshoptest.jcpenney.com","intlShip":"false"},{"URL":"personalizedjewelrytest.jcpenney.com","intlShip":"false"},{"URL":"levolor.jcpenney.com","intlShip":"false"},{"URL":"baliblinds.jcpenney.com","intlShip":"false"},{"URL":"sportsfanshop.jcpenney.com","intlShip":"false"},{"URL":"personalizedjewelry.jcpenney.com","intlShip":"false"}];
$(window).load(function(){var b=function(r){var p=syndicateSitesArray;var s=getCookie("shipToCountry");var t=true;var i=$("#PAGETYPE").html();if(i!="BUMEPR_PAGE"){var q=$("#orderQuantity").html();var w=$(this).attr("href");var u=/https?\:\/\/\w+((\:\d+)?\/\S*)?/;if(q!=""&&q>0&&u.test(w)){var v=$(this).attr("id");
var o=false;var x=$(this).attr("target");if(v!="bumper"){bumperPage=getBumperSites();for(var a=0;a<bumperPage.length;a++){if(w.indexOf(bumperPage[a])!=-1){o=true;break;}}if(o&&x!="_blank"){r.preventDefault();w=encodeURIComponent(w);$("#bumper").attr("href",function(c,d){var e=d;var f=e.split("?");return f[0]+"?"+"targetSite="+w;
});$("#bumper").trigger("click");}}}if(u.test(w)){var v=$(this).attr("id");var o=false;var x=$(this).attr("target");if(v!="bumper"){for(a=0;a<p.length;a++){if(w.indexOf(p[a].URL)!=-1){t=p[a].intlShip;if(s!="US"){o=true;}break;}}if(o&&t!="true"&&x!="_blank"){r.preventDefault();$("#bumper").attr("href",function(c,d){var e=d;
var f=e.split("?");return f[0]+"?"+"targetSyndicateSite="+w;});$("#bumper").trigger("click");}}}}};$("a").live("click",b);});