!function(d){d(document).on("click",".ps-privacy-dropdown ul li a",function(){var t=d(this).closest("a"),e=t.closest("ul"),a=e.siblings("input"),s=e.siblings(".ps-btn,.ps-js-dropdown-toggle"),i=s.find("i"),s=s.find(".ps-privacy-title");a.val(t.attr("data-option-value")),i.attr("class",t.find("i").attr("class")),s.html(t.find("span").html()),e.css("display","none")});var l=0;function t(t){t&&(t.each(function(){this.id&&this!==document.getElementById(this.id)&&(this.id=this.id+"_dupl"+ ++l);var t,e,a,s,i=d(this),n=i.data("value"),p=String(i.data("dateRangeMin")),r=String(i.data("dateRangeMax")),o=(new Date).getFullYear();if(!d.fn.psDatepicker)return i.removeAttr("readonly"),i.val(i.data("value")),i.on("blur",function(){var t=this.value.match(/^\d{4}-\d{1,2}-\d{1,2}/),t=t&&t[0]||"";this.value=t,i.data("value",t)}),!0;p=p.match(/^[-+]\d+$/)?+p:-p,r=+r,t=_.map([p,r],function(t){return-999===t?"c-100":999===t?"c+100":(t=Math.min(Math.max(t,-100),100))<0?""+t:"+"+t}).join(":"),(e=new Date).setFullYear(o+p),(a=new Date).setFullYear(o+r),s=new Date,0<p?s.setFullYear(o+p):r<0&&s.setFullYear(o+r),i.psDatepicker({yearRange:t,minDate:e,maxDate:a,defaultDate:s,onSelect:function(t,e){var a=d(this),s=a.datepicker("getDate"),i=[];s&&(i.push(s.getFullYear()),i.push(s.getMonth()+1),i.push(s.getDate()),i[1]=(i[1]<10?"0":"")+i[1],i[2]=(i[2]<10?"0":"")+i[2]),a.data("value",i.join("-")),a.trigger("input")}}),n&&(n=n.split("-"),p=new Date(+n[0],+n[1]-1,+n[2]),i.psDatepicker("setDate",p))}),t.addClass("datepickerInitialized"))}ps_datepicker={init:t},d(function(){t(d("#peepso-wrap .datepicker").not(".datepickerInitialized"))}),d(function(){function s(t,e){var t=d(t),a=t.siblings("input[type=password], input[type=text]"),s="gci-eye",i="gci-eye-slash";(e=void 0===e?"password"===a.attr("type"):e)?(a.attr("type","text"),t.removeClass(s).addClass(i)):(a.attr("type","password"),t.removeClass(i).addClass(s))}let i=0;function t(){d("input.ps-js-password-preview").each(function(t){var e=d(this).removeClass("ps-js-password-preview"),t=`ps-js-password-preview-btn-${i}-`+t,a=d(`<i class="ps-password-preview ${t} gcis" />`);a.insertAfter(e),s(a,!1),d(document).on("click","."+t,function(){s(this)})}),i++}t(),"object"==typeof peepso&&peepso.hooks&&peepso.hooks.addAction("init_password_preview","form",t)})}(jQuery);