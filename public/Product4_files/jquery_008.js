(function(b){b.uniform={options:{selectClass:"selector",radioClass:"radio",checkboxClass:"checker",checkedClass:"checked",focusClass:"focus",disabledClass:"disabled",activeClass:"active",hoverClass:"hover",useID:true,idPrefix:"uniform",resetSelector:false,autoHide:true},elements:[]};if(b.browser.msie&&b.browser.version<7){b.support.selectOpacity=false;
}else{b.support.selectOpacity=true;}b.fn.uniform=function(i){i=b.extend(b.uniform.options,i);var l=this;if(i.resetSelector!=false){b(i.resetSelector).mouseup(function(){function c(){b.uniform.update(l);}setTimeout(c,10);});}function m(c){$el=b(c);$el.addClass($el.attr("type"));j(c);}function n(d){var f=b(d);
var c=b("<div />"),g=b("<span />");if(!f.css("display")=="none"&&i.autoHide){c.hide();}c.addClass(i.selectClass);if(i.useID&&d.attr("id")!=""){c.attr("id",i.idPrefix+"-"+d.attr("id"));}var e=d.find(":selected:first");if(e.length==0){e=d.find("option:first");}g.html(e.html());d.css("opacity",0);d.wrap(c);
d.before(g);c=d.parent("div");g=d.siblings("span");d.bind({"change.uniform":function(){g.text(d.find(":selected").html());c.removeClass(i.activeClass);},"focus.uniform":function(){c.addClass(i.focusClass);},"blur.uniform":function(){c.removeClass(i.focusClass);c.removeClass(i.activeClass);},"mousedown.uniform touchbegin.uniform":function(){c.addClass(i.activeClass);
},"mouseup.uniform touchend.uniform":function(){c.removeClass(i.activeClass);},"click.uniform touchend.uniform":function(){c.removeClass(i.activeClass);},"mouseenter.uniform":function(){c.addClass(i.hoverClass);},"mouseleave.uniform":function(){c.removeClass(i.hoverClass);c.removeClass(i.activeClass);
},"keyup.uniform":function(){g.text(d.find(":selected").html());}});if(b(d).attr("disabled")){c.addClass(i.disabledClass);}b.uniform.noSelect(g);j(d);}function a(d){var e=b(d);var c=b("<div />"),f=b("<span />");if(!e.css("display")=="none"&&i.autoHide){c.hide();}c.addClass(i.checkboxClass);if(i.useID&&d.attr("id")!=""){c.attr("id",i.idPrefix+"-"+d.attr("id"));
}b(d).wrap(c);b(d).wrap(f);f=d.parent();c=f.parent();b(d).css("opacity",0).bind({"focus.uniform":function(){c.addClass(i.focusClass);},"blur.uniform":function(){c.removeClass(i.focusClass);},"click.uniform touchend.uniform":function(){if(!b(d).attr("checked")){f.removeClass(i.checkedClass);}else{f.addClass(i.checkedClass);
}},"mousedown.uniform touchbegin.uniform":function(){c.addClass(i.activeClass);},"mouseup.uniform touchend.uniform":function(){c.removeClass(i.activeClass);},"mouseenter.uniform":function(){c.addClass(i.hoverClass);},"mouseleave.uniform":function(){c.removeClass(i.hoverClass);c.removeClass(i.activeClass);
}});if(b(d).attr("checked")){f.addClass(i.checkedClass);}if(b(d).attr("disabled")){c.addClass(i.disabledClass);}j(d);}function k(d){var e=b(d);var c=b("<div />"),f=b("<span />");if(!e.css("display")=="none"&&i.autoHide){c.hide();}c.addClass(i.radioClass);if(i.useID&&d.attr("id")!=""){c.attr("id",i.idPrefix+"-"+d.attr("id"));
}b(d).wrap(c);b(d).wrap(f);f=d.parent();c=f.parent();b(d).css("opacity",0).bind({"focus.uniform":function(){c.addClass(i.focusClass);},"blur.uniform":function(){c.removeClass(i.focusClass);},"click.uniform touchend.uniform":function(){if(!b(d).attr("checked")){f.removeClass(i.checkedClass);}else{var g=i.radioClass.split(" ")[0];
b("."+g+" span."+i.checkedClass+":has([name='"+b(d).attr("name")+"'])").removeClass(i.checkedClass);f.addClass(i.checkedClass);}},"mousedown.uniform touchend.uniform":function(){if(!b(d).is(":disabled")){c.addClass(i.activeClass);}},"mouseup.uniform touchbegin.uniform":function(){c.removeClass(i.activeClass);
},"mouseenter.uniform touchend.uniform":function(){c.addClass(i.hoverClass);},"mouseleave.uniform":function(){c.removeClass(i.hoverClass);c.removeClass(i.activeClass);}});if(b(d).attr("checked")){f.addClass(i.checkedClass);}if(b(d).attr("disabled")){c.addClass(i.disabledClass);}j(d);}b.uniform.restore=function(c){if(c==undefined){c=b(b.uniform.elements);
}b(c).each(function(){if(b(this).is(":checkbox")){b(this).unwrap().unwrap();}else{if(b(this).is("select")){b(this).siblings("span").remove();b(this).unwrap();}else{if(b(this).is(":radio")){b(this).unwrap().unwrap();}}}b(this).unbind(".uniform");b(this).css("opacity","1");var d=b.inArray(b(c),b.uniform.elements);
b.uniform.elements.splice(d,1);});};function j(c){c=b(c).get();if(c.length>1){b.each(c,function(e,d){b.uniform.elements.push(d);});}else{b.uniform.elements.push(c);}}b.uniform.noSelect=function(d){function c(){return false;}b(d).each(function(){this.onselectstart=this.ondragstart=c;b(this).mousedown(c).css({MozUserSelect:"none"});
});};b.uniform.update=function(c){if(c==undefined){c=b(b.uniform.elements);}c=b(c);c.each(function(){var e=b(this);if(e.is("select")){var f=e.siblings("span");var d=e.parent("div");d.removeClass(i.hoverClass+" "+i.focusClass+" "+i.activeClass);f.html(e.find(":selected").html());if(e.is(":disabled")){d.addClass(i.disabledClass);
}else{d.removeClass(i.disabledClass);}}else{if(e.is(":checkbox")){var f=e.closest("span");var d=e.closest("div");d.removeClass(i.hoverClass+" "+i.focusClass+" "+i.activeClass);f.removeClass(i.checkedClass);if(e.is(":checked")){f.addClass(i.checkedClass);}if(e.is(":disabled")){d.addClass(i.disabledClass);
}else{d.removeClass(i.disabledClass);}}else{if(e.is(":radio.myradio")){var f=e.closest("span");var d=e.closest("div");d.removeClass(i.hoverClass+" "+i.focusClass+" "+i.activeClass);f.removeClass(i.checkedClass);if(e.is(":checked")){f.addClass(i.checkedClass);}if(e.is(":disabled")){d.addClass(i.disabledClass);
}else{d.removeClass(i.disabledClass);}}}}});};return this.each(function(){if(b.support.selectOpacity){var c=b(this);if(c.is("select")){if(c.attr("multiple")!=true){if(c.attr("size")==undefined||c.attr("size")<=1){n(c);}}}else{if(c.is(":checkbox")){a(c);}else{if(c.is(":radio")){k(c);}}}}});};})(jQuery);