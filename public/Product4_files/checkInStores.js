function resizeWindow(){if($("#cboxLoadedContent").find(".module_overlay").length>0){$.colorbox.resize();}}function handleSearchStoreAvailability(){$("#cityStateZipCode").removeClass("input_length_txt input_error_txt");$("#errorMsgDiv").hide();$("#errorMsg").hide();if($("#cityStateZipCode").val()==""){$("#cityStateZipCode").addClass("input_txt input_error_txt");
$("#fieldErrorMsg").html("Please correct the errors listed in red below:");$("#errorMsg").html("Please enter city, state or ZIP code");$("#errorMsg").show();$("#errorMsgDiv").show();resizeWindow();return;}else{var e=/^[a-zA-Z0-9#'&\";{}?,.()\\-\\/+=_ \\xA9 \\u2122 \\u00AE \\*]*$/;var f=$("#cityStateZipCode").val();
if(!f.match(e)){$("#cityStateZipCode").addClass("input_txt input_error_txt");$("#fieldErrorMsg").html("Please correct the errors listed in red below:");$("#errorMsg").html("Please enter valid city, state or ZIP code");$("#errorMsg").show();$("#errorMsgDiv").show();resizeWindow();return;}}$("#storeResults>.pp_store_results_holder").html('<div class="store_net_result flt_wdt"><div class="avalability column_one flt_lft"><p><strong>availability</strong></p></div><div class="store column_two flt_lft"><p><strong>store</strong></p></div><div class="hours column_three flt_lft"><p><strong>hours</strong></p></div><div class="distance column_four flt_lft"><p><strong>distance</strong></p></div>');
$("ul.pagination").html("<li><strong>PAGE</strong></li>");$("#storeResults").hide();resizeWindow();showSpinner("blockedSectionDivCIS");var d={success:populateStoreResults,error:error};$("#checkInStores").ajaxSubmit(d);}var resultsPerPage=5;function populateStoreResults(h,e,j,i){hideSpinner();if(h.errorExist=="false"){if(h.storeInventory.length){if(h.storeInventory.length==0){$("#fieldErrorMsg").html("");
$("#cityStateZipCode").removeClass("input_length_txt input_error_txt");$("#cityStateZipCode").addClass("input_txt input_error_txt");$("#errorMsg").html("We're sorry... we couldn't find any jcp stores that match your search.");$("#errorMsg").show();$("#errorMsgDiv").show();resizeWindow();return;}if(h.storeInventory.length>0){renderCoreMerticPageViewTag("Find Item In Store Results",catId,window.location.href,document.referrer);
resultsPerPage=h.resultsPerPage;$("#storeResults>.pp_store_results_holder").html($("#storeResults>.pp_store_results_holder").html()+'<span id="resultsPage1"></span>');pageToPopulate="resultsPage1";$("ul.pagination").html($("ul.pagination").html()+'<li onclick="pageSelect(this)"><strong style="padding: 2px 4px;">1</strong></li>');
try{jQuery.each(h.storeInventory,displayStoreInventory);}catch(g){handlejavaScriptError(g);}}}else{$("#cityStateZipCode").removeClass("input_length_txt input_error_txt");$("#cityStateZipCode").addClass("input_txt input_error_txt");$("#fieldErrorMsg").html("");$("#errorMsg").html("We're sorry... we couldn't find any jcp stores that match your search.");
$("#errorMsg").show();$("#errorMsgDiv").show();resizeWindow();}}else{$("#fieldErrorMsg").html("");$("#cityStateZipCode").removeClass("input_length_txt input_error_txt");$("#cityStateZipCode").addClass("input_txt input_error_txt");$("#errorMsg").html("We're sorry... we couldn't find any jcp stores that match your search.");
$("#errorMsg").show();$("#errorMsgDiv").show();resizeWindow();return;}}var finalPageNumber="";function displayStoreInventory(v,t){if(v>0&&(v)%resultsPerPage==0){var q=((v)/resultsPerPage+1);pageToPopulate="resultsPage"+q;finalPageNumber=q;$("#storeResults>.pp_store_results_holder").html($("#storeResults>.pp_store_results_holder").html()+'<span id="'+pageToPopulate+'" style="display:none"></span>');
$("ul.pagination").html($("ul.pagination").html()+'<li onclick="pageSelect(this)"><a href="javascript:void(\'findInStore:page:'+finalPageNumber+'\')" title="'+finalPageNumber+'">'+finalPageNumber+"</a></li>");}var n='<div class="hours column_three flt_lft"><ul>';try{jQuery.each(t.hours,function(a,b){n=n+"<li>"+b+"</li>";
});}catch(s){handlejavaScriptError(s);}n=n+"</ul></div>";var m=$("#cityStateZipCode").val();var o=" ";var u=t.storeName+o+t.city+o+t.state+o+t.zipCode;var p="not available";if(t.availability!=""&&t.availability=="IS"){p="in stock";}var e='<form action="http://maps.google.com/maps" method="get" target="_blank"><input type="hidden" name="saddr" value="'+m+'"/><input type="hidden" name="daddr" value="'+u+'" /><input type="submit" title="directions" value="DIRECTIONS" id="sign_in" name="sign in"></form>';
var r='<div class="store_net_result flt_wdt"><div class="avalability column_one flt_lft"><p>'+p+'</p></div><div class="store column_two flt_lft"><ul><li>'+t.storeName+"</li><li>"+t.street+"</li><li>"+t.city+", "+t.state+" "+t.zipCode+"</li><li>phone: "+t.storePhone+"</li></ul></div>"+n+'<div class="distance column_four flt_lft"><ul><li>'+t.distance+' miles</li></ul></div><div class="direction_btn flt_rgt"><div class="btn_input_holder blue_button_small"><span>'+e+"</span></div></div></div>";
$("#"+pageToPopulate).html($("#"+pageToPopulate).html()+r);$("#storeResults").show();$("#storeResults").addClass("pp_store_results_modal");resizeWindow();}function pageSelect(g){try{if($(g).children("a").length>0){var h=$(g).children("a").attr("title");$("ul.pagination > li > strong").each(function(){var a=$(this).html();
if(a!="PAGE"){var b="<a href=\"javascript:void('findInStore:page:"+a+'\')" title="'+a+'">'+a+"</a>";$(this).parent().html(b);}else{}});$("ul.pagination > li > a").each(function(){var a=$(this).html();if(h==a){var b='<strong style="padding: 2px 4px;">'+a+"</strong>";$(this).parent().html(b);}});var f="resultsPage"+h;
$("#storeResults span").each(function(){if(this.id==""||this.id==f){$(this).show();}else{$(this).hide();}});}}catch(e){handlejavaScriptError(e);}resizeWindow();}function error(g,f,e,h){$("#fieldErrorMsg").html("");$("#cityStateZipCode").removeClass("input_length_txt input_error_txt");$("#cityStateZipCode").addClass("input_txt input_error_txt");
$("#errorMsg").html("We're sorry... we couldn't find any jcp stores that match your search.");$("#errorMsg").show();$("#errorMsgDiv").show();hideSpinner();resizeWindow();return;}function disableEnterKey(c){var d;if(window.event){d=window.event.keyCode;}else{d=c.which;}if(d!=13){return true;}else{handleSearchStoreAvailability();
return false;}}function handleSearchStoreAvailabilityDefault(){$("#storeResults>.pp_store_results_holder").html('<div class="store_net_result flt_wdt"><div class="avalability column_one flt_lft"><p><strong>availability</strong></p></div><div class="store column_two flt_lft"><p><strong>store</strong></p></div><div class="hours column_three flt_lft"><p><strong>hours</strong></p></div><div class="distance column_four flt_lft"><p><strong>distance</strong></p></div>');
$("ul.pagination").html("<li><strong>PAGE</strong></li>");$("#storeResults").hide();resizeWindow();$("#blockedSectionDiv").prepend('<div id="page_loader" class="flt_wdt"></div>');var f=$("#page_loader");var e=f.show(function(){f.addClass("mask");$(".mask").css({"opacity":0.6});});var d={success:populateStoreResults,error:error};
$("#checkInStoresDefault").ajaxSubmit(d);}