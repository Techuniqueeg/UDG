!function(e){"use strict";e(document).ready((function(){e.ajaxSetup({headers:{"X-CSRF-TOKEN":e('meta[name="csrf-token"]').attr("content")}});var t="rtl"===e("body").prop("dir");e(document).on("click",".generic-form button[type=submit]",(function(t){var n=this;t.preventDefault(),t.stopPropagation();var o=e(this).text();e(this).prop("disabled",!0).html('<i class="fa fa-spin fa-spinner"></i>'),e.ajax({type:"POST",cache:!1,url:e(this).closest("form").prop("action"),data:new FormData(e(this).closest("form")[0]),contentType:!1,processData:!1,success:function(t){e(n).closest("form").find(".text-success").html("").hide(),e(n).closest("form").find(".text-danger").html("").hide(),t.error?(e(n).closest("form").find(".text-danger").html(t.message).show(),setTimeout((function(){e(this).closest("form").find(".text-danger").html("").hide()}),5e3)):(e(n).closest("form").find("input[type=text]:not([readonly])").val(""),e(n).closest("form").find("input[type=email]").val(""),e(n).closest("form").find("input[type=url]").val(""),e(n).closest("form").find("input[type=tel]").val(""),e(n).closest("form").find("select").val(""),e(n).closest("form").find("textarea").val(""),e(n).closest("form").find(".text-success").html(t.message).show(),t.data&&t.data.next_page&&(window.location.href=t.data.next_page),setTimeout((function(){e(this).closest("form").find(".text-success").html("").hide()}),5e3)),"undefined"!=typeof refreshRecaptcha&&refreshRecaptcha(),e(n).prop("disabled",!1).html(o)},error:function(t){"undefined"!=typeof refreshRecaptcha&&refreshRecaptcha(),e(n).prop("disabled",!1).html(o),a(t,e(n).closest("form"))}})}));var a=function(t,a){if(void 0===t.errors||_.isArray(t.errors))if(void 0!==t.responseJSON)if(void 0!==t.responseJSON.errors)422===t.status&&n(t.responseJSON.errors,a);else if(void 0!==t.responseJSON.message)e(a).find(".text-danger").html(t.responseJSON.message).show();else{var o="";e.each(t.responseJSON,(function(t,a){e.each(a,(function(e,t){o+=t+"<br />"}))})),e(a).find(".text-danger").html(o).show()}else e(a).find(".text-danger").html(t.statusText).show();else n(t.errors,a)},n=function(t,a){var n="";e.each(t,(function(e,t){n+=t+"<br />"})),e(a).find(".text-success").html("").hide(),e(a).find(".text-danger").html("").hide(),e(a).find(".text-danger").html(n).show()};e("#cityslide").owlCarousel({rtl:t,margin:20,dots:!1,nav:!0,navText:[e(".am-prev"),e(".am-next")],loop:!1,responsive:{0:{items:1},400:{items:2},800:{items:3},1e3:{items:4},1300:{items:5}}}),e("#project-city-slides").owlCarousel({rtl:t,margin:20,dots:!1,nav:!0,navText:[e(".am-prev"),e(".am-next")],loop:!1,responsive:{0:{items:1},400:{items:2},800:{items:3},1e3:{items:4},1300:{items:5}}}),e("#listcarousel").owlCarousel({rtl:t,margin:0,loop:!0,autoplay:!0,lazyLoad:!0,dots:!1,nav:!1,center:!0,responsive:{300:{items:1},900:{items:2},1100:{items:3}}}),e("#listcarouselthumb").owlCarousel({rtl:t,margin:0,dots:!1,loop:!0,autoplay:!0,lazyLoad:!0,nav:!0,navText:[e(".ar-prev"),e(".ar-next")],responsive:{300:{items:2},900:{items:3},1100:{items:5}}});var o=e("#hometypesearch a.active").attr("rel"),i=e("#txtkey"),r=e("#hometypesearch");r.find("a").on("click",(function(){e(".advanced-search-content").removeClass("active"),"project"===e(this).attr("rel")?(e(".advanced-search-content.property-advanced-search input").prop("disabled",!0),e(".advanced-search-content.property-advanced-search select").prop("disabled",!0),e(".advanced-search-content.project-advanced-search input").prop("disabled",!1),e(".advanced-search-content.project-advanced-search select").prop("disabled",!1)):(e(".advanced-search-content.project-advanced-search input").prop("disabled",!0),e(".advanced-search-content.project-advanced-search select").prop("disabled",!0),e(".advanced-search-content.property-advanced-search input").prop("disabled",!1),e(".advanced-search-content.property-advanced-search select").prop("disabled",!1)),e(".listsuggest").html("").hide(),i.val(""),o=e(this).attr("rel"),r.find("a").removeClass("active"),e(this).addClass("active"),e("#txttypesearch").val(o),e("#frmhomesearch").prop("action",e(this).data("url"))}));var s=null;i.on("keydown",(function(){e(".listsuggest").html("").hide(),e(this).parents(".keyword-input").find(".spinner-icon").hide()})),i.on("keyup",(function(){var t=e(this).val();if(t){var a=e(this).parents(".keyword-input");a.find(".spinner-icon").show(),clearTimeout(s),s=setTimeout((function(){e.get(e("#hometypesearch a.active").data("url")+"?type="+o+"&k="+t+"&minimal=true",(function(t){t.error||""===t.data?e(".listsuggest").html("").hide():e(".listsuggest").html(t.data).show(),a.find(".spinner-icon").hide()}))}),500)}}));var c,l=document.querySelectorAll("img.lazy");!function e(){c&&clearTimeout(c),c=setTimeout((function(){var t=window.pageYOffset;l.forEach((function(e){e.offsetTop<window.innerHeight+t&&(e.src=e.dataset.src,e.classList.remove("lazy"))})),0==l.length&&(document.removeEventListener("scroll",e),window.removeEventListener("resize",e),window.removeEventListener("orientationChange",e))}),200)}(),e(document).scroll((function(){window.pageYOffset>0?e(".cd-top").find(".fas").attr("class","fas fa-arrow-up"):e(".cd-top").find(".fas").attr("class","fas fa-arrow-down")})),e(".pagination").addClass("pagination-sm"),e('[data-toggle="tooltip"]').tooltip(),e(document).on("click",".cd-top",(function(t){return t.preventDefault(),e("html").scrollTop()>0?e("body,html").animate({scrollTop:0},800):e("body,html").animate({scrollTop:e("html").height()},800),!1}));var d,p=null;function m(){var t=e("#map");if(!t.length)return!1;if(e(".view-type-map").length&&!e(".view-type-map").hasClass("active"))return!1;var a=0,n=1,o=u(),i=t.data("center"),r=e("#properties-list .property-item[data-lat][data-long]").filter((function(){return e(this).data("lat")&&e(this).data("long")}));r&&r.length&&(i=[r.data("lat"),r.data("long")]),window.activeMap&&(window.activeMap.off(),window.activeMap.remove());var s=L.map("map",{zoomControl:!0,scrollWheelZoom:!0,dragging:!0,maxZoom:22}).setView(i,14);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(s);var c=new L.MarkerClusterGroup,l=[],d=e("#traffic-popup-map-template").html();!function i(){return(0==a||n<=a)&&(o.page=n,e.ajax({url:t.data("url"),type:"GET",data:o,success:function(e){e.data.length>0&&(e.data.forEach((function(e){if(e.latitude&&e.longitude){var t=L.divIcon({className:"boxmarker",iconSize:L.point(50,20),html:e.map_icon}),a=function(e,t){var a=Object.keys(e);for(var n in a)if(a.hasOwnProperty(n)){var o=a[n];t=t.replace(new RegExp("__"+o+"__","gi"),e[o]||"")}return t}(e,d),n=new L.Marker(new L.LatLng(e.latitude,e.longitude),{icon:t}).bindPopup(a).addTo(s);l.push(n),c.addLayer(n),s.flyToBounds(L.latLngBounds(l.map((function(e){return e.getLatLng()}))))}})),0==a&&(a=e.meta.last_page),n++,i())}})),!1}(),s.addLayer(c),window.activeMap=s}function u(){var e,t,a=window.location.search.substring(1).split("&"),n={};for(t in a)""!==a[t]&&(e=a[t].split("="),n[decodeURIComponent(e[0])]=decodeURIComponent(e[1]));return n}function f(t){var a=[];t.find("select[name]").map((function(){var t=e(this).find("option:selected");t.text()&&t.val()&&a.push(t.text())})),t.find(".dropdown-toggle span").text(a&&a.length?a.join(" - "):t.data("text-default"))}function h(e){var t=e.data("calc"),a=e.find("input.min-input"),n=e.find(".min-label"),o=e.find(".max-label"),i=e.find("input.max-input"),r=parseInt(a.val()),s=parseInt(i.val());a.val(r||""),i.val(s||"");var c=e.data("all"),l="",d="";s||r?(t.map((function(e){r>=e.number&&!l&&(l=e.label.replace("__value__",(new Intl.NumberFormat).format(parseFloat((r/(e.number||1)).toFixed(2))))),s>=e.number&&!d&&(d=e.label.replace("__value__",(new Intl.NumberFormat).format(parseFloat((s/(e.number||1)).toFixed(2)))))})),n.text(l),o.text(d),r||(c="< "),s?r?c=l+" - "+d:c+=d:c="> "+l):(n.text(l),o.text(d)),e.closest(".dropdown").find(".dropdown-toggle span").text(c)}function g(){window.innerWidth>991&&e("#navbarSupportedContent").collapse("hide"),window.innerWidth<=767?e("#ajax-filters-form .search-box").addClass("animation"):e("#ajax-filters-form .search-box").removeClass("animation")}function v(t){d&&(d.off(),d.remove()),d=L.map(t.data("map-id"),{zoomControl:!1,scrollWheelZoom:!0,dragging:!0,maxZoom:22}).setView(t.data("center"),14);var a=L.divIcon({className:"boxmarker",iconSize:L.point(50,20),html:t.data("map-icon")});L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(d),L.marker(t.data("center"),{icon:a}).addTo(d).bindPopup(e(t.data("popup-id")).html()).openPopup()}e(".select-city-state").on("keydown",(function(){e(this).parents(".location-input").find(".suggestion").html("").hide()})).on("keyup",(function(){var t=e(this).val();if(t){var a=e(this).parents(".location-input");a.find(".input-has-icon i").hide(),a.find(".spinner-icon").show(),clearTimeout(p),p=setTimeout((function(){e.get((a.data("url")?a.data("url"):window.siteUrl+"/ajax/cities")+"?k="+t,(function(e){e.error||""===e.data?a.find(".suggestion").html("").hide():a.find(".suggestion").html(e.data).show(),a.find(".spinner-icon").hide(),a.find(".input-has-icon i").show()}))}),500)}})),e(document).on("click",".suggestion li a",(function(t){t.preventDefault(),t.stopPropagation();var a=e(this).parents(".location-input");a.find("input[name=city_id]").val(e(this).data("id")),a.find(".select-city-state").val(e(this).text()),a.find(".suggestion").html("").hide()})),e("#header-waypoint").waypoint({handler:function(t){"down"===t?(e(".main-header").addClass("header-sticky"),e("body").addClass("is-sticky")):(e(".main-header").removeClass("header-sticky"),e("body").removeClass("is-sticky"))}}),e("#navbarSupportedContent").on("show.bs.collapse",(function(){e("body").addClass("hidden-scroll-main-menu").css("padding-right",function(){var e=document.createElement("div");e.className="modal-scrollbar-measure",document.body.appendChild(e);var t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t}())})).on("hidden.bs.collapse",(function(){e("body").removeClass("hidden-scroll-main-menu").css("padding-right","")})),e(document).on("click",".main-menu-darken, .toggle-main-menu-offcanvas",(function(t){t.preventDefault(),e("#navbarSupportedContent").collapse("hide")})),e(document).on("click",".advanced-search-toggler",(function(t){t.preventDefault(),"project"===e("#hometypesearch a.active").attr("rel")?(e(".advanced-search-content.property-advanced-search").removeClass("active"),e(".advanced-search-content.project-advanced-search").toggleClass("active")):(e(".advanced-search-content.project-advanced-search").removeClass("active"),e(".advanced-search-content.property-advanced-search").toggleClass("active")),e(".advanced-search-content.active").length?e(".listsuggest").css({top:e(this).closest("form").height()+e(".advanced-search-content.property-advanced-search").height()+5+"px"}):e(".listsuggest").css({top:e(this).closest("form").height()+"px"})})),e(document).on("change",".shop__sort select",(function(t){t.preventDefault(),e(this).closest("form").trigger("submit")})),e(document).on("click",(function(t){"form-control"!==t.target.className&&("keyword-input"!==t.target.className&&e(".listsuggest").hide(),"location-input"!==t.target.className&&e(".suggestion").hide())})),e(document).on("click",".view-type-map",(function(){e("#properties-map").toggleClass("d-none");var t=e("#properties-list").data("class-left"),a=e(this).hasClass("active");e(this).toggleClass("active"),a&&(t=e("#properties-list").data("class-full")),e("#properties-list").attr("class",t),a||m(),function(e,t,a){var n=new Date,o=new URL(window.siteUrl);n.setTime(n.getTime()+5184e6);var i="expires="+n.toUTCString();document.cookie="show_map_on_properties="+t+"; "+i+"; path=/; domain="+o.hostname}(0,a?0:1)})),e("#map").length&&m(),e("#ajax-filters-form").find(".select-dropdown").map((function(){f(e(this))})),e(document).on("click","#ajax-filters-form .select-dropdown .btn-clear",(function(){e(this).closest(".select-dropdown").find("select[name]").map((function(){e(this).val("").trigger("change")})),e("#ajax-filters-form").trigger("submit")})),e(document).on("click","#ajax-filters-form .select-dropdown button[type=submit]",(function(){e("#ajax-filters-form").trigger("submit")})),e(document).on("click","#ajax-filters-form button[type=reset]",(function(){e("#ajax-filters-form").find(":input[name]").val(""),e("#ajax-filters-form").trigger("submit")})),e(document).on("submit","#ajax-filters-form",(function(t){t.preventDefault();var a=e(t.currentTarget),n=a.serializeArray(),o=[],i=[];n.forEach((function(e){e.value&&(o.push(e),i.push(e.name+"="+e.value))}));var r=a.attr("action")+(i&&i.length?"?"+i.join("&"):"");a.find(".select-dropdown").map((function(){f(e(this))})),o.push({name:"is_searching",value:1}),e.ajax({url:a.attr("action"),type:"GET",data:o,beforeSend:function(){e("#loading").show(),e("html, body").animate({scrollTop:e("#ajax-filters-form").offset().top-(e(".main-header").height()+50)},500),a.find(".search-box").removeClass("active")},success:function(e){0==e.error?(a.find(".data-listing").html(e.data),window.wishlishInElement(a.find(".data-listing")),r!=window.location.href&&window.history.pushState(o,e.message,r),m()):window.showAlert("alert-error",e.message||"Opp!")},complete:function(){e("#loading").hide()}})})),window.addEventListener("popstate",(function(){var t=e("#ajax-filters-form"),a=window.location.origin+window.location.pathname;if(t.attr("action")==a){var n=u();t.find("input, select, textarea").each((function(t,a){var o=e(a),i=n[o.attr("name")]||"";o.val()!=i&&o.val(i).trigger("change")})),t.trigger("submit")}else history.back()}),!1),e(".dropdown-menu.keep-open select").on("click",(function(e){e.stopPropagation()})),e(document).on("click",".list-of-suggetions li",(function(t){t.preventDefault();var a=e(t.currentTarget),n=a.closest(".dropdown");n.find(".dropdown-toggle span").text(a.text());var o=a.data("value").split("-");n.find("input.min-input").val(o[0]).trigger("change"),n.find("input.max-input").val(o[1]).trigger("change"),a.closest("form").trigger("submit")})),e(document).on("change keyup","input.min-input, input.max-input",(function(){h(e(this).closest(".form-group"))})),e(".dropdown .min-max-input").map((function(){h(e(this))})),e(document).on("click","#ajax-filters-form .pagination a",(function(t){t.preventDefault();var a=new URL(e(t.currentTarget).attr("href")).searchParams.get("page");e("#ajax-filters-form input[name=page]").val(a),e("#ajax-filters-form").trigger("submit")})),e(document).on("click",".toggle-filter-offcanvas",(function(t){t.preventDefault(),e("#ajax-filters-form .search-box").toggleClass("active")})),g(),e(window).on("resize",(function(){g()})),e(document).on("click","#ajax-filters-form .screen-darken",(function(t){t.preventDefault(),e("#ajax-filters-form .search-box").removeClass("active")})),e('[data-popup-id="#traffic-popup-map-template"]').length&&v(e('[data-popup-id="#traffic-popup-map-template"]')),jQuery().magnificPopup&&(e(".show-gallery-image").on("click",(function(){e("#listcarouselthumb .owl-item:not(.cloned) .showfullimg:first").trigger("click")})),e("#listcarouselthumb, #listcarousel").magnificPopup({delegate:".owl-item:not(.cloned) .showfullimg",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-img-mobile",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.',titleSrc:function(e){return e.el.attr("title")}}}),e(".popup-youtube").magnificPopup({type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,hiddenClass:"zxcv",overflowY:"hidden",iframe:{patterns:{youtube:{index:"youtube.com",id:function(e){var t=e.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/);return t&&11==t[7].length?t[7]:e},src:"//www.youtube.com/embed/%id%?autoplay=1"}}}}),e(document).on("click","[data-magnific-popup]",(function(t){var a=e(t.currentTarget),n=a.data("magnific-popup");e.magnificPopup.open({items:{src:n,type:"inline"},removalDelay:300,overflowY:"hidden",midClick:!0,callbacks:{beforeOpen:function(){a.data("clicked")||e(this.st.items.src).html("")},open:function(){a.data("clicked")||(a.data("clicked",!0),v(a))}}}),t.preventDefault()}))),e(".menu--mobile .menu-item-has-children > .sub-toggle").on("click",(function(t){t.preventDefault();var a=e(this).parent(".menu-item-has-children");e(this).toggleClass("active"),a.siblings().find(".sub-toggle").removeClass("active"),a.children(".sub-menu").slideToggle(350),a.siblings().find(".sub-menu").slideUp(350)}))}))}(jQuery);
