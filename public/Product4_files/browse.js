var favAction=false;var lastSelectedSkuId="";var lastSelectedLotId="";var isMouseOverEnabled=false;var callToCallMetric=false;var lotPagePpId="";var registryAction=false;var showAskAndAnswer=false;var fromGiftList=false;var reviewId;var submissionContainerUrl;var bazzarVoiceEnabled;function setupBazaarVoice(){if(bazzarVoiceEnabled){$BV.configure("global",{submissionContainerUrl:submissionContainerUrl});
executeRatingAndReviewsDetails(reviewId);if(showAskAndAnswer){executeAskAndAnswerForProduct(reviewId);}}}function isNumberKey(c){var d=(c.which)?c.which:event.keyCode;if(d>31&&(d<48||d>57)){return false;}return true;}function checkForErrors(){if($("#hasError").html()){error();}$('div[id*="lotOptionForPP"]').each(function(){if(jQuery.trim($(this).html()).length==0){$(this).parent().remove();
}});$('div[id*="skuDetails"]').each(function(){var b=$("#knowledgeAssist"+$(this).attr("id").substring(10)).html();if(jQuery.trim($(this).html()).length==0&&jQuery.trim(b).length==0){$(this).parent().remove();}});if(gup("fromBag")!="true"&&gup("fromFav")!="true"){$('form[id*="mandatoryVDataForm"]').each(function(){$(this).find("input").each(function(){$(this).val("");
});});}}function error(){window.location="/dotcom/jsp/error/error.jsp";}function addItems(){var d=$("#PAGETYPE").html();if(d!="PPE_Graphical"&&!isAddToBagAllowed()&&!fromGiftList){$("#errorContainer").find("ul").html("<li>We're sorry, this item is no longer available.</li>");$("#errorContainer").find("span").remove();
$("#errorContainer").show();return;}$("#addToBagForm").attr("action","");var c={success:populateToCart,error:errorMessage};if(registryAction==true){submitGRAddAction();}else{if(favAction==false){$("#addToBagForm").ajaxSubmit(c);showSpinner("blockedSectionDiv");}else{submitFavAddAction();}}}function isAddToBagAllowed(){var s="";
var r="";var n="";var e="";var p="";var o="";var l="";var q="";try{$('span[id*="selectedPPId"]').each(function(){var a=$(this).html();if(a&&a!=""){var c=$("#selectedLotId"+a).html();if(!isNumericValue(c)){c=c.substring(c.indexOf(">")+1,c.indexOf("</"));}var d=$("#selectedSKUId"+a).html();if(!isNumericValue(d)){d=d.substring(d.indexOf(">")+1,d.indexOf("</"));
}var b=$("#prod_quantity"+a).val();if(s!=""){s=s+",";r=r+",";n=n+",";p=p+",";o=o+",";l=l+",";q=q+",";e=e+",";}s=s+a;r=r+c;n=n+d;e=e+b;}});}catch(m){handlejavaScriptError(m);}if(s==""||r==""||n==""||e==""){return false;}return true;}function isNumericValue(g){var e="0123456789";var f=true;var h;for(i=0;
i<g.length&&f==true;i++){h=g.charAt(i);if(e.indexOf(h)==-1){f=false;}}return f;}function populateToCartGR(A,u,t,F){var D=document.getElementById("grView").value;var x="";$("#errorMessagesUL").html(x);$("#errorContainer").hide();if(D=="dashboard"){var G=$("#registryHidden").val();getPieChartData(G,"category","viewAll","W");
updatePieChart();$("#headerGR").load("/dotcom/jsp/giftregistry/secure/dashboard/dashboardHeader.jsp?regId="+G,function(c,a,b){$(".piechart").find(".swatchGR").tooltip({overrideClass:"swatchTooltip"});});hideSpinner();var y=$("#pageName").val();var r=document.getElementById("PAGETYPE").innerHTML;if(y=="sampleRegistry"){var z=$("#selectedPpid").val();
var s="addtogiftregistry_"+z;var C=$("#"+s).position();}else{if(r=="PPE_Graphical"){var C=$("#addtogiftregistry"+globalButtonIndex).position();}else{var C=$("#addtogiftregistry").position();}}$("#addtogiftregistry").attr("disabled","disabled");$("#addtobag").attr("disabled","disabled");var v=$("#grQuantities").val();
var E=$(".reg_notification");if(v>1){E=$(".reg_notification_items");}E.css({top:(C.top-53)+"px",left:(C.left-121)+"px"}).fadeIn("fast").fadeOut(4000,function(){$("#addtogiftregistry").removeAttr("disabled");$("#addtobag").removeAttr("disabled");});}else{if(A=="registryNotFound"){document.getElementById("noRegistryRedirectUrl").value=document.getElementById("noRegistryRedirectUrl").value+"&fromPP=true&ppIds="+$("#grPpIds").val()+"&skuIds="+$("#grSkuIds").val()+"&mediaLetters="+$("#grMediaLetters").val()+"&mediaYears="+$("#grMediaYears").val()+"&serviceSKUIds="+$("#grServiceSKUIds").val()+"&quantities="+$("#grQuantities").val()+"&lotIds="+$("#grLotIds").val()+"&serviceLotIds="+$("#grServiceLotIds").val()+"&vDataQuestionairre="+$("#grVDataQuestionairre").val()+"&vDataType="+$("#grVDataType").val();
$("#noRegistryFoundElement").trigger("click");}else{if(A=="invalidQuantity"){x="<li>Enter a quantity between 1 and 99</li>";$("#errorMessagesUL").html(x);$("#errorContainer").show();}else{var B=A.registryId;var w=A.eventRootCatId;document.getElementById("registryRedirectUrl").value=document.getElementById("registryRedirectUrl").value+"?giftRegistryId="+B+"&eventRootCatId="+w;
cmCreateManualPageviewTag("Add to registry Confirmation","JCP|GiftRegistry|Registrant",window.location.href,document.referrer);$("#addToRegistrySuccessElement").trigger("click");}}}}function loadDynamicUrlModal(){var b=document.getElementById("registryRedirectUrl").value;fnInitiateModal(b);}function loadNoRegistryFoundModal(){var b=document.getElementById("noRegistryRedirectUrl").value;
fnInitiateModal(b);}function loadNoRegistryFoundModal(b){var b=document.getElementById("noRegistryRedirectUrl").value;fnInitiateModal(b,window.location.href);}function validateAndAddGiftRegistryItems(b){registryAction=true;if(checkForHemming(b)){validateHemming(b);}else{addToGiftRegistry(b);}}function submitFavAddAction(){$.ajax({url:"/dotcom/jsp/profile/validateLogin.jsp",success:function(e){if(e.isTransient=="true"){var d=$("#loginModelUrl").val();
d=d+"&isFromFav=true&ppIds="+$("#favPpIds").val()+"&skuIds="+$("#favSkuIds").val()+"&mediaLetters="+$("#favMediaLetters").val()+"&mediaYears="+$("#favMediaYears").val()+"&serviceSKUIds="+$("#favServiceSKUIds").val()+"&quantities="+$("#favQuantities").val()+"&lotIds="+$("#favLotIds").val()+"&serviceLotIds="+$("#favServiceLotIds").val()+"&vDataQuestionairre="+$("#favVDataQuestionairre").val()+"&vDataType="+$("#favVDataType").val();
var f=$("#loginModelParentUrl").val();fnInitiateModal(d,f);cmCreateManualPageviewTag("Login","JCP|Favorites",window.location.href,document.referrer);}else{favAjaxSubmit();showSpinner("blockedSectionDiv");}}});}function submitGRAddAction(){var d=$("#isTransient").val();if(d=="true"){var c=$("#grLoginModelUrl").val();
c=c+"&isFromFav=false&ppIds="+$("#grPpIds").val()+"&skuIds="+$("#grSkuIds").val()+"&mediaLetters="+$("#grMediaLetters").val()+"&mediaYears="+$("#grMediaYears").val()+"&serviceSKUIds="+$("#grServiceSKUIds").val()+"&quantities="+$("#grQuantities").val()+"&lotIds="+$("#grLotIds").val()+"&serviceLotIds="+$("#grServiceLotIds").val()+"&vDataQuestionairre="+$("#grVDataQuestionairre").val()+"&vDataType="+$("#grVDataType").val();
fnInitiateModal(c);}else{grAjaxSubmit();showSpinner("blockedSectionDiv");}}function favAjaxSubmit(){var b={success:populateToFav,error:errorMessage};$("#addToFavForm").ajaxSubmit(b);}function grAjaxSubmit(){$("#addToGiftRegistryForm").attr("action","");$("#addToBagForm").attr("action","");options={success:populateToCartGR,error:fail};
registryAction=false;document.getElementById("parentUrl").value=window.location.href;$("#addToGiftRegistryForm").ajaxSubmit(options);}function fail(){redirectOnError();}function populateToFav(l,j,o,n){try{var e="";if(l.addFavErrors!=undefined||l.addFavErrors!=null){var m=0;for(m=0;m<l.addFavErrors.length;
m++){e=e+"<ul><li>"+l.addFavErrors[m].errorMessage+"</li></ul>";}if(document.getElementById("errorContainer")){document.getElementById("errorMessagesUL").innerHTML=e;$("#errorContainer").show();}else{if(document.getElementById("errorContainer1")){document.getElementById("errorMessagesUL1").innerHTML=e;
$("#errorContainer1").show();}}}else{if(document.getElementById("myfavoriteLink")){document.getElementById("myfavoriteLink").innerHTML="my favorites ("+l.favlistsize+")";}if(l.updatedgiftitem!=""){document.getElementById("giftItemId").value=l.updatedgiftitem;}$("#inventoryMessage").html("This item has been added to your favorites list.");
$("#dynamicMessages").show();cmCreateConversionEventTag("AddToFavorites","2","Favorites",null,lotPagePpId);}hideSpinner();}catch(k){hideSpinner();}}function resetErrorMessage(){if(document.getElementById("errorContainer")){$("#errorContainer").hide();$("#errorContainer span").show();}else{if(document.getElementById("errorContainer1")){$("#errorContainer1").hide();
$("#errorContainer1 span").show();}}}function populateToCart(p,e,m,l){try{var o="";if(p.addCartErrors!=undefined||p.addCartErrors!=null){for(i=0;i<p.addCartErrors.length;i=i+1){o=o+"<ul><li>"+p.addCartErrors[i].errorMessage+"</li></ul>";}if($("#PAGETYPE").html()=="PPE_Graphical"){$("#"+("errorContainer"+globalButtonIndex)).show();
$("#"+("errorMessagesUL"+globalButtonIndex)).html(o);$("html, body").animate({scrollTop:$("#"+("errorMessagesUL"+globalButtonIndex)).offset().top},"slow");}else{document.getElementById("errorContainer").innerHTML=o;$("#errorContainer").show();$(".prod_conf").show();$("html, body").animate({scrollTop:$("#errorContainer").offset().top},"slow");
}}else{if(gup("grView")=="dashboard"){$(".shoppingBagSummary").show();}else{if(gup("grView")=="public"){$(".shoppingBagSummary").show();$(".shoppingBagSummary").css("width","100%");}}if(typeof p.success!=undefined&&p.success!=null&&p.success=="true"){redirectToCart();callingMetric();return;}callingMetric();
var s=$("#product_details").attr("action");var q=$("#product_details").serialize();var n=$("#shoppingOverlayEnabled").html();$.ajax({url:s,type:"POST",data:q,success:function(a){if((n!=""||n!=undefined)&&n=="false"){$("#shoppingOverlayEnabled").html("true");}document.getElementById("addedItemsDiv").innerHTML=a;
$("#shopping_bag_flyout").html($("#addedItemsDiv").find("#lastAddedItemDiv").html());showShoppingBagPreview();$("#shopping_bag").trigger("mouseover");trackPageLoadTime("Add_To_Bag_Request_Completed");setTimeout(function(){$("#shopping_bag").trigger("mouseout");$("#shopping_bag_flyout").html($("#addedItemsDiv").find("#shopping_bag_overlay_flyout").html());
$("#addedItemsDiv").html("");if((n!=""||n!=undefined)&&n=="false"){$("#shoppingOverlayEnabled").html("false");}},document.getElementById("overlayTime").value);}});setTimeout("reloadPage()",500);}setTimeout("reloadPage()",500);hideSpinner();}catch(r){redirectOnError();}}function errorMessage(){redirectOnError();
}function onUpdateModalLoad(){if($("#graphicalNonGraphicalIndicator").html()=="graphical"){showSKUTitle();}else{setPPType("regular");checkForErrors();enableAllDropDowns();preSelectColor();enableUpdate();}}function showColorName(b){$("#colorName").html("select a color : "+b);$("#colorName").show();}function validateCompleteForm(){$("#senderNameRequired").hide();
$("#senderEmailRequired").hide();$("#friendEmailRequired").hide();$("#senderNameInvalid").hide();$("#senderEmailInvalid").hide();$("#friendEmailInvalid").hide();$("#errorExceptions").hide();$("#errorContainer").hide();$("#yourname").removeClass("input_txt input_long_txt input_error_txt").addClass("input_txt input_long_txt");
$("#senderNameLabel").removeClass("error");$("#youremail").removeClass("input_txt input_long_txt input_error_txt").addClass("input_txt input_long_txt mrgt10");$("#senderEmailLabel").removeClass("error");$("#yourfriendemail1").removeClass("input_txt input_long_txt input_error_txt").addClass("input_txt input_long_txt");
$("#friendsLabel").removeClass("error");var o=true;var q=/^[A-Za-z0-9]+([.\-_]{0,}[A-Za-z0-9]+[_]{0,})*@([A-Za-z0-9]+([\-_][A-Za-z0-9]+)*){1,}(\.[A-Za-z]{2,})+$/;var p=$("#yourname").val();var s=$("#youremail").val();var m=$("#yourfriendemail1").val();if($.trim(p)==""){populateHiglightErrors("senderNameRequired","yourname","senderNameLabel");
o=false;}if($.trim(s)==""){populateHiglightErrors("senderEmailRequired","youremail","senderEmailLabel");o=false;}if($.trim(m)==""){populateHiglightErrors("friendEmailRequired","yourfriendemail1","friendsLabel");o=false;}if($.trim(s)!=""){var e=document.getElementById("youremail");if(!e.value.match(q)){populateHiglightErrors("senderEmailInvalid","youremail","senderEmailLabel");
o=false;}}var u=1;var n=false;try{while(u<11){var r=$("#yourfriendemail"+u).val();if($.trim(r)!=""){if(!r.match(q)){if(u==1){$("#yourfriendemail"+u).attr("class","input_txt input_long_txt input_error_txt");}$("#yourfriendemail"+u).attr("class","input_txt input_long_txt mrgt10 input_error_txt");n=true;
o=false;$("#errorContainer").show();}}u=u+1;}}catch(t){redirectOnError();}if(n==true){document.getElementById("friendEmailInvalid").style.display="list-item";document.getElementById("friendsLabel").className="error";}if(o==false){$("#errorContainer").show();$(".email_templete_container").scrollTop(5);
return o;}if(o==true){buildReceipientList();loadShareEmailAjaxSubmit();}}function buildReceipientList(){var e=1;var d="";try{while(e<11){if(($("#yourfriendemail"+e).val()!=undefined)&&($("#yourfriendemail"+e).val()!="")){if(e==1){d=$("#yourfriendemail"+e).val();}else{d=d+","+$("#yourfriendemail"+e).val();
}$("#recepientListBox").val(d);}e++;}}catch(f){handlejavaScriptError(f);}}function loadShareEmailAjaxSubmit(){var b={beforeSubmit:beforeSubmitForms,success:successForm,error:errorSubmitForm};$("#shareProductEmail").ajaxSubmit(b);}function successForm(h,f){if(typeof h!="undefined"&&h!=null){try{if($(h).find("#thank_you_section").length==0){$("#float_fixId").html(h);
$("#errorContainer").show();}else{var e=$(h).find("#thank_you_section").html();$("#shareEmail").html(e);$.colorbox.resize({width:300});}}catch(g){$("#shareEmail").load("/dotcom/jsp/profile/secure/shareFavoritesEmailThankyou.jsp");$.colorbox.resize({width:282,height:106});$("#shareEmail").css("padding-bottom: 8px; padding-right: 18px; display: block; position: absolute; top: 223px; left: 482px;");
}}else{$("#shareEmail").load("/dotcom/jsp/profile/secure/shareFavoritesEmailThankyou.jsp");$.colorbox.resize({width:282,height:106});$("#shareEmail").css("padding-bottom: 8px; padding-right: 18px; display: block; position: absolute; top: 223px; left: 482px;");}}function beforeSubmitForms(d,c){}function errorSubmitForm(d,c){redirectOnError();
}function populateHiglightErrors(f,e,d){$("#"+f).attr("style","list-item");document.getElementById(e).className="input_txt input_long_txt input_error_txt";document.getElementById(d).className="error";}function closeModalPopup(){$.fn.colorbox.close();$("#moduleOverlay").empty();var c=decodeURIComponent(parentUrl);
function d(){$.postMessage({if_height:$("#moduleOverlay").height()},c,parent);}d();setInterval(d);}function focusShareModal(b){$.fn.colorbox({href:b,scrolling:false,overlayClose:false,escKey:false,close:function(){var a="<img id='cboxCloseImg' src='/dotcom/images/modal_close.gif' alt='close' title='close' />";
return $(a);},onComplete:function(){$("#modalFocus").focus(function(){$("#yourname *:input[type!=hidden]:first").focus();});}});}function skuSelectionComplete(j){var k=j.lotOrPPId;var o=j.ppId;var m=j.selectedLotId;var n=j.selectedSKUId;var l=j.selectedMediaCode;var h=j.selectedMediaYear;displayPriceDetails(j);
setSelectionSpans(k,m,n,h,l);displayServiceAndWarranty(j);displayMonogramData(j);displayHemmingData(j);displayGenericVData(j);displayAndValidateInventory(j);displayTruckDeliveryInformation(j);if(j.channelAvailability&&j.channelAvailability!=""){$("#truckDeliveryInfo").show();if(j.channelAvailability=="online"){$("#channelMessaging"+k).html("ONLINE EXCLUSIVE");
hideFindStoreLinks(o,n,m);}if(j.channelAvailability=="store"){$("#channelMessaging"+k).html("IN-STORE ONLY");displayFindStoreLink(j.isFurniture,o,n,m);}if(j.channelAvailability=="both"){$("#channelMessaging"+k).html("ALSO IN STORES");displayFindStoreLink(j.isFurniture,o,n,m);}}displayCustomerRepresentativeLink(k,m);
}function setSelectionSpans(f,g,h,j,k){$("#selectedPPId"+f).html(f);$("#selectedLotId"+f).html(g);$("#selectedSKUId"+f).html(h);$("#selectedMediaYear"+f).html(j);$("#selectedMediaCode"+f).html(k);}function updateIds(g,h,j,f,k){$("#selectedPPId"+g).html(g);$("#selectedLotId"+g).html(h);$("#selectedSKUId"+g).html(j);
$("#selectedMediaYear"+g).html(f);$("#selectedMediaCode"+g).html(k);}function displayTruckDeliveryInformation(c){var d="#truckAndWhiteGloveDelivery"+c.lotOrPPId;if(c.truckAndWhiteGloveDelivery!=""&&c.truckAndWhiteGloveDelivery!=undefined){$("#truckDeliveryInfo").show();$(d).html(c.truckAndWhiteGloveDelivery);
}}function displayServiceAndWarranty(d){var c="serviceAndWarrantyHolder"+d.ppId;$("#"+c).html(d.serviceAndWarrantyHtml);}function displayMonogramData(d){var c="monogramCheckBox"+d.ppId;$("#"+c).html(d.monogramCheckBoxHtml);$("#monogramForConfirm"+d.ppId).empty();$("#monogramFor"+d.ppId).empty();$("#"+c).show();
}function displayGenericVData(d){if(d.hemmingHTML==null){var c="GenericVDataFor"+d.ppId;$("#"+c).html(d.genericVDataHtml);$("#"+c).show();}}function displayHemmingData(f){var e="hemmingFor"+f.ppId;var d="hemmingError"+f.ppId;if(f.hemmingHTML!=null){$("#"+e).html(f.hemmingHTML);$("#"+e).show();}else{$("#"+e).empty();
$("#"+d).empty();}}function displayFindStoreLink(h,e,g,f){if($("#graphicalNonGraphicalIndicator").length==0){if(!h||h!=""){if(h=="true"){showFindInStoreDisplayLink(e,g,f);}else{showFindInStoreLink(e,g,f);}}else{showFindInStoreLink(e,g,f);}}}function showFindInStoreLink(k,j,g){if(!k||k==""){var f="#findInStoreLink"+g;
}else{var f="#findInStoreLink"+k;}var h="/dotcom/jsp/browse/common/checkInStores.jsp?ppId="+k+"&skuId="+j+"&lotId="+g+"&categoryId="+catId;if($(f).attr("name")==null){return;}$(f).attr("name",h);$(f).show();}function showFindInStoreDisplayLink(k,j,g){if(!k||k==""){var f="#findInStoreDisplayLink"+g;}else{var f="#findInStoreDisplayLink"+k;
}var h="/dotcom/jsp/browse/common/findInStoreDisplayModal.jsp?ppId="+k+"&skuId="+j+"&lotId="+g;if($(f).attr("name")==null){return;}$(f).attr("name",h);$(f).show();}function hideFindStoreLinks(k,j,h){if(!k||k==""){var g="#findInStoreDisplayLink"+h;}else{var g="#findInStoreDisplayLink"+k;}$(g).hide();if(!k||k==""){var f="#findInStoreLink"+h;
}else{var f="#findInStoreLink"+k;}$(f).hide();}function getHemmingVData(h){var k=new Array();var e="";var j="";try{$('form[id*="product_details_hemming"]').each(function(){var a;var c;var b=$(this).attr("id").substring(23);$(this).find('input[id*="enterValueFor"]').each(function(){a=$(this).attr("name");
a=a.substr([a.lastIndexOf(".")+1]);c=$(this).attr("value");if(b==""){e+=h+"_"+a+"_"+c+",";}else{e+=b+"_"+a+"_"+c+",";}});$(this).find('select[id*="selectOptions"]').each(function(){a=$(this).attr("name");a=a.substr([a.lastIndexOf(".")+1]);c=$(this).attr("value");if(c!="select"){if(b!=""){e+=b+"_"+a+"_"+c+",";
}else{e+=h+"_"+a+"_"+c+",";}}});j=j+"Hemming"+",";});}catch(g){redirectOnError();}k[0]=e;k[1]=j;return k;}function getGenericVdata(h){var k=new Array();var e="";var j="";try{$('form[id*="genericVData"]').each(function(){var a;var c;var b=$(this).attr("id").substring(12);$(this).find('input[id*="enterValueFor"]').each(function(){a=$(this).attr("name");
a=a.substr([a.lastIndexOf(".")+1]);c=$(this).attr("value");if(b==""){e+=h+"_"+a+"_"+c+",";}else{e+=b+"_"+a+"_"+c+",";}});$(this).find('select[id*="selectOptions"]').each(function(){a=$(this).attr("name");a=a.substr([a.lastIndexOf(".")+1]);c=$(this).attr("value");if(c!="select"){if(b!=""){e+=b+"_"+a+"_"+c+",";
}else{e+=h+"_"+a+"_"+c+",";}}});j=j+"VData"+",";});}catch(g){redirectOnError();}k[0]=e;k[1]=j;return k;}function getMonogramVData(g){var j=new Array();var k="";var h="";try{$('div[class*="monogram_confirmation"]').each(function(){var a=$(this).attr("class").substring(22);$(this).find('div[id*="monogram_questionairre"]').each(function(){var b=$(this).attr("id").substring(22);
if(a!=""){k+=a+"_"+b+",";}else{k+=g+"_"+b+",";}});h=h+"Monogramming"+",";});}catch(e){redirectOnError();}j[0]=k;j[1]=h;return j;}function validateAndAddItems(b){trackPageLoadTime("Add_To_Bag_Requested");resetErrorMessage();if(disabledDueToInventory==true||favDisabledDueToInventory==true){return;}favAction=false;
registryAction=false;if($('form[id*="mandatoryVDataForm"]').length>0){validateMandatoryVData("");}else{if(checkForHemming(b)){validateHemming(b,"fetchHemmingData");}else{if(checkForGenericVdata(b)){validateGenericVdata(b);}else{addToCart();}}}}function coreMetricCall(F,C,J,K,G){var U="";var B="";var E=$(".pdp_title").text();
var T=$.trim(E);if(typeof shopActionProductName!="undefined"){T=shopActionProductName;}var P=$("#prod_quantity"+K).val();var I=$.trim(P);var Q=document.getElementById("priceInDollars");var D=document.getElementById("hiddenFrontLoadCoefficient");var H=document.getElementById("hiddenShipToCountry");if(Q!=null&&Q.innerHTML!=null&&document.getElementById("priceInDollars").innerHTML!=""){B=document.getElementById("priceInDollars").innerHTML;
if(H==null||H.value==""||H.value=="US"){B=B/100;}else{if(D==null||D.value==""||D.value=="0.0"){B=B/100;}else{B=(B*D.value)/100;}}}else{B=$("#priceDetails"+" span:last").text();}var A=$.trim(B);var O=$("#serviceLotId"+K).text();var z="";var y="";var N=$("#coreMetricsCatId").val();if(N==""){N="JCP|"+G;
}z=$("#serviceAndWarrantyHolder"+K+" .capstxt").text();y=$("#serviceAndWarrantyHolder"+K+" #priceDetailsForServiceAgreement").text();if(A==""){B=$("#priceDetails"+" .orgn_price").text();A=$.trim(B);}if(A==""){B=$(".pdp_title").text();var M=B.indexOf("$");if(M>=0){var R=B.indexOf(" ",M);B=B.substring(M,R);
A=$.trim(B);}}if(y!=""){y=$.trim(y);}U=$("#selectedLotId"+K).text();if(U==""){U=J;}var L=$("#selectedSKUId"+K).text();var S="|"+U+"|"+I+"|";cmCreateShopAction5Tag(K,T,I,A,N,"",S+"-_-"+F+"-_-"+C);cmDisplayShop5s();if(O!=""){$('input[id*="serviceCheck"]').each(function(){if(this.checked==true){var b=$.trim($("#inventoryForServiceAgreement"+K).text());
var a="|"+O+"|1|";cmCreateShopAction5Tag(O,z,"1",y,N,"",a+"-_-"+F+"-_-"+b);cmDisplayShop5s();}});}}function coreMetricCallInGR(u,s,A,C,r){var v=A;var w=$("#quantities"+u).val();var t=$.trim(w);var y=$("#sale"+u).text();var B=$("#hdnName"+u).val();var q=$.trim(y);var p="JCP|GiftRegistry|Gifter";if(q==""){var y=$("#orig"+u).text();
q=$.trim(y);}var z=null;if(t=="0"){}else{var x="|"+v+"|"+t+"|";cmCreateShopAction5Tag(s,B,t,q,p,"",x+"-_-"+z+"-_-"+r);cmDisplayShop5s();}}function validateAndAddFavItems(b){lotPagePpId=b;resetErrorMessage();favAction=true;registryAction=false;if($('form[id*="mandatoryVDataForm"]').length>0){setPpIdFromBrowse(b);
validateMandatoryVData("");}else{if(checkForHemming(b)){validateHemming(b,"fetchHemmingData");}else{if(checkForGenericVdata(b)){validateGenericVdata(b);}else{addToFavorite(b);}}}}function checkForHemming(b){if($("#hemmingFor"+b).html()!=null&&$("#hemmingFor"+b).html().length>0){return true;}else{return false;
}}function checkForGenericVdata(b){if($("#GenericVDataFor"+b).html()!=null&&$("#GenericVDataFor"+b).html().length>0){return true;}else{return false;}}function validateGenericVdata(c){removeErrorClass("2");$("#prod_quantity"+c).removeClass("error");var d={success:renderGenericVdataAjaxResponse,error:error};
$("#genericVData"+c).ajaxSubmit(d);}function renderGenericVdataAjaxResponse(u,n){var m=u.productPresentationId;var w="GenericVDataFor"+m;var q="hemmingError"+m;var r=$("#prod_quantity"+m).val();var s=/[1-9]\d?/;if(u.errorPresent=="true"){var p=$(u.errorHtml).find("ul").html();$("#errorMessagesUL").html(p);
$("#errorContainer").show();if(!s.test(r)&&$("#PAGETYPE").html()!="PPE_Graphical"){$("#hemmingError"+m).find("ul").append("<li>Enter a valid quantity from 1-99.</li>");$("#errorMessagesUL").append("<li>Enter a valid quantity from 1-99.</li>");$("#errorContainer").show();var o="prod_quantity"+m;$("#"+o).addClass("error");
}$("#"+q).show();var t=u.errorComponents.split("_");for(var v=0;v<t.length;v++){$("#enterValueFor"+t[v]).addClass("error");$("#selectOptions"+t[v]).addClass("error");}}else{if(!s.test(r)&&$("#PAGETYPE").html()!="PPE_Graphical"){$("#errorContainer").find("ul").html("<li>Enter a valid quantity from 1-99.</li>");
$("#errorContainer").show();$("#"+q).empty();var o="prod_quantity"+m;$("#"+o).addClass("error");}else{$("#"+q).empty();if(favAction==false){addToCart();}else{addToFavorite(m);}}}}function validateHemming(e,f){removeErrorClass("2");$("#prod_quantity"+e).removeClass("error");var d={success:renderHemmingAjaxResponse,error:error};
$("#action").val(f);$("#product_details_hemming"+e).ajaxSubmit(d);}function renderHemmingAjaxResponse(v,o){var n=v.productPresentationId;var t="hemmingFor"+n;var w="hemmingError"+n;if(v.dynamicHemmingPresent=="true"){if(v.dynamicHemmingHtml!=null){$("#"+t).html(v.dynamicHemmingHtml);$("#"+t).show();$("#"+w).empty();
}}else{if(v.dynamicHemmingPresent!="false"){if(v.errorPresent=="true"){var q=$(v.errorHtml).find("ul").html();$("#errorMessagesUL").html(q);$("#errorContainer").show();var r=$("#prod_quantity"+n).val();var s=/[1-9]\d?/;if(!s.test(r)&&$("#PAGETYPE").html()!="PPE_Graphical"){$("#errorMessagesUL").append("<li>Enter a valid quantity from 1-99.</li>");
$("#errorContainer").show();var p="prod_quantity"+n;$("#"+p).addClass("error");}$("#"+w).show();var u=v.errorComponents.split("_");for(var m=0;m<u.length;m++){$("#enterValueFor"+u[m]).addClass("error");$("#selectOptions"+u[m]).addClass("error");}}else{var w="hemmingError"+n;$("#"+w).empty();if(favAction==false){addToCart();
}else{addToFavorite(n);}}}}}function checkForHemmingFromShoppingBag(){if($("#hemmingForShoppingBag").html()!=null){try{$('div[id*="hemmingFor"]').each(function(){$(this).html($("#hemmingForShoppingBag").html());$(this).show();$("#hemmingForShoppingBag").remove();});}catch(b){handlejavaScriptError(b);
}}}function checkForGenericVdataFromShoppingBag(){if($("#genericVdataForShoppingBag").html()!=null){try{$('div[id*="GenericVDataFor"]').each(function(){$(this).html($("#genericVdataForShoppingBag").html());$(this).show();$("#genericVdataForShoppingBag").remove();});}catch(b){handlejavaScriptError(b);
}}}function initializeInvodoPlayer(b){Invodo.init({viewers:{podId:b,footerMode:"compact"},callsToAction:{selector:".InvodoViewerLink",podId:b},logoUrl:"http://cache.jcpenney.com/images/Seasonal/video_header_logo.png"});Invodo.showViewer(b);return false;}function mouseOverSku(d,c){if(isMouseOverEnabled){if(!isOptionValid($(d).parent())){return;
}$(d).parent().parent().find("li").each(function(a){if($(this).attr("class")==SKU_STATE_SELECTED_CLASS){lastSelectedSkuId=$(this).children("a:first").attr("id");}});if(lastSelectedSkuId==""){lastSelectedSkuId=$(d).attr("id");}selectOptionClick(d,c);}}function mouseOutSku(d,c){if(isMouseOverEnabled){if(!isOptionValidMouseOut($(d).parent())){return;
}if(lastSelectedSkuId!=""){selectOptionClick($("#"+lastSelectedSkuId),c);}}}function mouseOverLot(d,c){if(isMouseOverEnabled){if(!isOptionValid($(d).parent())){return;}$(d).parent().parent().find("li").each(function(a){if($(this).attr("class")==SKU_STATE_SELECTED_CLASS){lastSelectedLotId=$(this).children("a:first").attr("id");
}});if(lastSelectedLotId==""){lastSelectedLotId=$(d).attr("id");}selectOptionClick(d,c);}}function mouseOutLot(d,c){if(isMouseOverEnabled){if(!isOptionValidMouseOut($(d).parent())){return;}if(lastSelectedLotId!=""){selectOptionClick($("#"+lastSelectedLotId),c);}}}function isOptionValid(d){var c=d.attr("class");
if(c=="sku_not_available"||c=="sku_select"||c=="sku_illegal"){return false;}else{return true;}}function isOptionValidMouseOut(d){var c=d.attr("class");if(c=="sku_not_available"||c=="sku_illegal"){return false;}else{return true;}}function removeSpecialCharecters(c){var d=c;d=d.replace(/&amp;/g,"");d=d.replace(/gt;/g,"");
d=d.replace(/lt;/g,"");d=d.replace(/quot;/g,"");d=d.replace(/"/g,"");d=d.replace(/'/g,"");return d;}function convertToHTML(b){if(b!=""&&b!=undefined&&b!=null){b=b.replace(/&amp;/g,"&");b=b.replace(/&gt;/g,">");b=b.replace(/&lt;/g,"<");return b;}}function validateAndAddGRItems(o,v,r,p,s,n,w,u,x,t){clearErrors();
showSpinner("gift_list_gifter");$("#mediaYears").val(v);$("#mediaLetters").val(r);$("#lotIds").val(p);$("#skuIds").val(s);$("#ppIds").val(o);$("#giftRegistryForAdd").val(n);var q=$("#quantities"+t).val();$("#quantities").val(q);if(w==""||w=="undefined"){$("#serviceLotId").val(0);}else{$("#serviceLotId").val(w);
}$("#vDataQuestionairre").val(u);$("#vDataType").val(x);$("#giftItemId").val(t);var y=$("#"+t).val();if(y!=null&&y!=undefined&&y!=""){t=t+","+y;}$("#giftItemIds").val(t);if(!hasRegErrors(q,t)){fromGiftList=true;$("#qtyContainer"+t).hide();validateAndAddItems(o);}}function hasRegErrors(e,d){var f="";var d=d;
if(!e||e==""||!(/^\d+$/.test(e))){$("#giftListItemDetails"+d).prepend("<div id='giftListErrorMsg' class='dynamic_error_msgs mrgb10'><div class='flt_lft mrgr15 exclamation_icn'><img alt='attention' src='/dotcom/images/spacer.gif' /></div><div class='float_fix'> <span class='disp_blk'>Please correct the errors listed in red below</span><ul><li>Enter a valid quantity from 1-99.</li></ul></div></div>");
hideSpinner();return true;}else{if(e<1||e>99){$("#giftListItemDetails"+d).prepend("<div id='giftListErrorMsg' class='dynamic_error_msgs mrgb10'><div class='flt_lft mrgr15 exclamation_icn'><img alt='attention' src='/dotcom/images/spacer.gif' /></div><div class='float_fix'> <span class='disp_blk'>Please correct the errors listed in red below</span><ul><li>Enter a valid quantity from 1-99.</li></ul></div></div>");
hideSpinner();return true;}}return false;}function clearErrors(){$("div[id='giftListErrorMsg']").remove();}function removeSpecialCharecters(c){var d=c;d=d.replace(/&amp;/g,"");d=d.replace(/gt;/g,"");d=d.replace(/lt;/g,"");d=d.replace(/quot;/g,"");d=d.replace(/"/g,"");d=d.replace(/'/g,"");return d;}function convertToHTML(b){b=b.replace(/&amp;/g,"&");
b=b.replace(/&gt;/g,">");b=b.replace(/&lt;/g,"<");return b;}function redirectToCart(){window.location="/dotcom/jsp/cart/viewShoppingBag.jsp";}function showShoppingBagPreview(){window.scrollTo(0,0);}function displayCustomerRepresentativeLink(c,d){if($("#CustomerProductDetail"+c).length>0){$("#CustomerProductDetail"+c).attr("href",function(b,g){var h=g;
var a=h.split("?");return a[0]+"?"+"productId="+d;});$("#CustomerProductDetail"+c).show();}}function clearCustomerReprentativeLink(b){if($("#CustomerProductDetail"+b).length>0){$("#CustomerProductDetail"+b).hide();}}function removeError(b){$(b).removeClass("error");}$(document).ready(function(){$(".launchModalIframe").click(function(){});
});