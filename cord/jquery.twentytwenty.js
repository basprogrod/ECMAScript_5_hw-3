(function(a){a.fn.twentytwenty=function(b){var b=a.extend({default_offset_pct:.5,orientation:"horizontal",before_label:"Before",after_label:"After",no_overlay:!1,move_slider_on_hover:!1,move_with_handle_only:!0,click_to_move:!1},b);return this.each(function(){var c=b.default_offset_pct,d=a(this),f=b.orientation,g="vertical"===f?"down":"left",h="vertical"===f?"up":"right";if(d.wrap("<div class='twentytwenty-wrapper twentytwenty-"+f+"'></div>"),!b.no_overlay){d.append("<div class='twentytwenty-overlay'></div>");var i=d.find(".twentytwenty-overlay");i.append("<div class='twentytwenty-before-label' data-content='"+b.before_label+"'></div>"),i.append("<div class='twentytwenty-after-label' data-content='"+b.after_label+"'></div>")}var j=d.find("img:first"),k=d.find("img:last");d.append("<div class='twentytwenty-handle'></div>");var l=d.find(".twentytwenty-handle");l.append("<span class='twentytwenty-"+g+"-arrow'></span>"),l.append("<span class='twentytwenty-"+h+"-arrow'></span>"),d.addClass("twentytwenty-container"),j.addClass("twentytwenty-before"),k.addClass("twentytwenty-after");var m=function(a){var b=j.width(),c=j.height();return{w:b+"px",h:c+"px",cw:a*b+"px",ch:a*c+"px"}},n=function(a){"vertical"===f?(j.css("clip","rect(0,"+a.w+","+a.ch+",0)"),k.css("clip","rect("+a.ch+","+a.w+","+a.h+",0)")):(j.css("clip","rect(0,"+a.cw+","+a.h+",0)"),k.css("clip","rect(0,"+a.w+","+a.h+","+a.cw+")")),d.css("height",a.h)},o=function(a){var b=m(a);l.css("vertical"===f?"top":"left","vertical"===f?b.ch:b.cw),n(b)},p=function(a,b,c){return Math.max(b,Math.min(c,a))},q=function(a,b){var c="vertical"===f?(b-s)/u:(a-r)/t;return p(c,0,1)};a(window).on("resize.twentytwenty",function(){o(c)});var r=0,s=0,t=0,u=0,v=function(a){(a.distX>a.distY&&a.distX<-a.distY||a.distX<a.distY&&a.distX>-a.distY)&&"vertical"!==f?a.preventDefault():(a.distX<a.distY&&a.distX<-a.distY||a.distX>a.distY&&a.distX>-a.distY)&&"vertical"===f&&a.preventDefault(),d.addClass("active"),r=d.offset().left,s=d.offset().top,t=j.width(),u=j.height()},w=function(a){d.hasClass("active")&&(c=q(a.pageX,a.pageY),o(c))},x=function(){d.removeClass("active")},y=b.move_with_handle_only?l:d;y.on("movestart",v),y.on("move",w),y.on("moveend",x),b.move_slider_on_hover&&(d.on("mouseenter",v),d.on("mousemove",w),d.on("mouseleave",x)),l.on("touchmove",function(a){a.preventDefault()}),d.find("img").on("mousedown",function(a){a.preventDefault()}),b.click_to_move&&d.on("click",function(a){r=d.offset().left,s=d.offset().top,t=j.width(),u=j.height(),c=q(a.pageX,a.pageY),o(c)}),a(window).trigger("resize.twentytwenty")})},a(window).load(function(){a("#contain1").twentytwenty()})})(jQuery);