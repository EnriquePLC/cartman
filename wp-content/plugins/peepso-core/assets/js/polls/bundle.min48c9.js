!function s(n,i,l){function p(o,t){if(!i[o]){if(!n[o]){var e="function"==typeof require&&require;if(!t&&e)return e(o,!0);if(r)return r(o,!0);throw(e=new Error("Cannot find module '"+o+"'")).code="MODULE_NOT_FOUND",e}e=i[o]={exports:{}},n[o][0].call(e.exports,function(t){return p(n[o][1][t]||t)},e,e.exports,s,n,i,l)}return i[o].exports}for(var r="function"==typeof require&&require,t=0;t<l.length;t++)p(l[t]);return p}({1:[function(t,o,e){"use strict";t("./peepsopolls")},{"./peepsopolls":2}],2:[function(s,t,o){!function(e){!function(){"use strict";function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var t,p=(t="undefined"!=typeof window?window.jQuery:void 0!==e?e.jQuery:null)&&t.__esModule?t:{default:t},r=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==l(t)&&"function"!=typeof t)return{default:t};var o=u();if(o&&o.has(t))return o.get(t);var e,s={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(e in t){var i;Object.prototype.hasOwnProperty.call(t,e)&&((i=n?Object.getOwnPropertyDescriptor(t,e):null)&&(i.get||i.set)?Object.defineProperty(s,e,i):s[e]=t[e])}s.default=t,o&&o.set(t,s);return s}("undefined"!=typeof window?window.peepso:void 0!==e?e.peepso:null),n="undefined"!=typeof window?window.peepsodata:void 0!==e?e.peepsodata:null,a=s("./polls");function u(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return u=function(){return t},t}function o(){this.allow_multiple=null,this.textarea=null}r.default.polls=new o,o.prototype.init=function(){var s=this,t=this.$postbox.$textarea.attr("placeholder");(0,p.default)(this.$postbox.$posttabs).on("peepso_posttabs_show-polls",function(t,o,e){(0,p.default)("#poll-post",s.$postbox).addClass("active"),o.show(),void 0!==s.$postbox.$textarea&&s.$postbox.$textarea.attr("placeholder",n.polls.textPostboxPlaceholder),(0,p.default)(".ps-postbox-status",e.options.container).show(),s.$postbox.on_change()}),r.observer.addAction("postbox_type_set",function(t,o){t===s.$postbox&&"polls"===o&&t.find("#poll-post.ps-postbox__menu-item").click()},10,2),this.allow_multiple=(0,p.default)(".allow-multiple",this.$postbox),this.$postbox.$posttabs.on("peepso_posttabs_submit-polls",function(){function t(t){return s.set_post_filter(t)}r.observer.addFilter("postbox_req_"+s.$postbox.guid,t,10,1),s.$postbox.save_post(),r.observer.removeFilter("postbox_req_"+s.$postbox.guid,t,10,1)}),this.$postbox.$posttabs.on("peepso_posttabs_cancel-polls",function(){(0,p.default)("#poll-post",s.$postbox).removeClass("active"),s.$postbox.$textarea.attr("placeholder",t),s.on_cancel()}),(0,p.default)("#poll-post",this.$postbox).on("click",function(){"polls"!==s.$postbox.$posttabs.current_tab().data("tab")&&((0,p.default)(s.$postbox.$posttabs).find("[data-tab='polls']").trigger("click"),s.$postbox.$textarea.focus())}),this.save_post=jQuery.proxy(window.activity.option_savepost,window.activity),window.activity.option_savepost=function(t){s.option_savepost(t)},this.$postbox.on("keyup",".ps-poll__option input",p.default.proxy(_.throttle(function(){this.$postbox.on_change()},1e3),this)),this.$postbox.on("click","#ps-add-new-option",p.default.proxy(function(t){var o=(0,p.default)(t.currentTarget).closest(".ps-js-polls"),t=o.find(".ps-poll__option").eq(0).clone();t.find("input").val(""),o.find(".ui-sortable").append(t),this.reorder_placeholder(o),this.$postbox.on_change()},this)),this.$postbox.on("click","#ps-delete-option",p.default.proxy(function(t){var o=(0,p.default)(t.currentTarget),e=o.closest(".ps-js-polls");t.preventDefault(),2<o.closest(".ps-js-polls").find(".ps-poll__option").length&&(o.closest(".ps-poll__option").remove(),this.reorder_placeholder(e),this.$postbox.on_change())},this)),r.observer.addFilter("peepso_postbox_can_submit",function(t){var o,e=this.$postbox,s=e.$posttabs,n=!0,i=[];return"polls"===s.current_tab_id&&(""===p.default.trim(e.$textarea.val())||(o=e.find(".ps-poll__option input")).length<2?n=!1:o.each(function(){var t=p.default.trim(this.value);return!t||0<=i.indexOf(t)?n=!1:void i.push(t)}),t.hard.push(n)),t},30,1,this),(0,p.default)(".ps-js-polls .ui-sortable").sortable({handle:".ps-js-handle",update:p.default.proxy(function(t,o){this.reorder_placeholder(o.item.closest(".ps-js-polls"))},this)})},o.prototype.set_postbox=function(t){this.$postbox=t},o.prototype.on_cancel=function(){this.preview_request&&(this.preview_request.ret.abort(),(0,p.default)(".ps-js-polls .ps-postbox-input .ps-postbox-loading",this.$postbox).hide());for(var t=(0,p.default)(".ps-poll__option input",this.$postbox),o=0;o<=t.length;o++)o<=1?t.eq(o).val(""):t.eq(o).closest(".ps-poll__option").remove();0<this.allow_multiple.length&&this.allow_multiple.prop("checked",!1),(0,p.default)("#ps-polls-input",this.$postbox).hide(),(0,p.default)(".ps-js-polls .ps-postbox-preview",this.$postbox).hide().html(""),this.$postbox.on_change()},o.prototype.set_post_filter=function(t){t.options=[];for(var o,e=(0,p.default)(".ps-poll__option input",this.$postbox),s=0;s<=e.length;s++)(o=e.eq(s).val())&&t.options.push(o);return(t.allow_multiple=0)<this.allow_multiple.length&&this.allow_multiple.is(":checked")&&(t.allow_multiple=1),t.type="poll",t},o.prototype.submit_vote=function(t,o){var e,s=(0,p.default)(o),n=s.find("img"),o=s.closest(".ps-js-poll-item").find(".ps-js-poll-item-option"),i=[];o.filter(":checked").each(function(){i.push(this.value)}),s.attr("disabled","disabled"),n.show(),r.default.postJson("pollsajax.submit_vote",{user_id:peepsodata.currentuserid,poll_id:t,polls:i},p.default.proxy(function(t){s.removeAttr("disabled"),n.hide(),t.success?t.data&&t.data.html&&((e=s.closest(".ps-js-activity")).find(".ps-stream-attachments").html(t.data.html),e.find(".ps-js-poll-option-changevote").show(),(0,a.initActivities)()):t.errors&&r.default.dialog(t.errors,{error:!0}).show()},this))},o.prototype.change_vote=function(t,o){var e,s=(0,p.default)(o);r.default.postJson("pollsajax.change_vote",{user_id:peepsodata.currentuserid,poll_id:t},p.default.proxy(function(t){t.success?t.data&&t.data.html&&((e=s.closest(".ps-js-activity")).find(".ps-stream-attachments").html(t.data.html),e.find(".ps-js-poll-option-changevote").show(),(0,a.initActivities)()):t.errors&&r.default.dialog(t.errors,{error:!0}).show()},this))},o.prototype.unvote=function(t,o){var e,s=(0,p.default)(o),n=s.find("img");s.attr("disabled","disabled"),n.show(),r.default.postJson("pollsajax.unvote",{user_id:peepsodata.currentuserid,poll_id:t},p.default.proxy(function(t){s.removeAttr("disabled"),n.hide(),t.success?t.data&&t.data.html&&((e=s.closest(".ps-js-activity")).find(".ps-stream-attachments").html(t.data.html),e.find(".ps-js-poll-option-changevote").hide(),(0,a.initActivities)()):t.errors&&r.default.dialog(t.errors,{error:!0}).show()},this))},o.prototype.reorder_placeholder=function(t){var o=n.polls.textOptionPlaceholder;t.find(".ps-poll__option input[type=text]").each(function(t){(0,p.default)(this).attr("placeholder",o.replace("%d",t+1))})},(0,p.default)(function(){(0,a.initActivities)(),(0,p.default)(document).on("ps_activitystream_loaded ps_activitystream_append",function(){(0,a.initActivities)()})}),r.observer.addFilter("peepso_postbox_addons",function(t){return t.push(new o),t},10,1),r.observer.addAction("postbox_init",function(t){t.$tabContext.find("#poll-post").remove()},10,1)}.call(this)}.call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./polls":3}],3:[function(t,o,s){!function(o){!function(){"use strict";function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(s,"__esModule",{value:!0}),s.initActivities=function(){(0,e.default)(".ps-js-poll-item").each(function(){var t=(0,e.default)(this);t.data("init-poll")||(t.data("init-poll",1),(t=t.find(".ps-js-poll-item-option")).on("click",function(){var t=(0,e.default)(this).closest(".ps-js-poll-item"),o=t.find(".ps-js-poll-item-option"),t=t.find(".ps-js-poll-item-submit");o.filter(":checked").length?t.removeAttr("disabled"):t.attr("disabled","disabled")}),t.eq(0).triggerHandler("click"))})},s.getVoteEditorHTML=function(i){return new p.Promise(function(t,o){var e,s,n={user_id:r.currentuserid,poll_id:i},n=p.default.postJson("pollsajax.change_vote",n).ret;n.done(function(t){e=t.success&&t.data&&t.data.html,s=!e&&t.errors}),n.always(function(){e?t(e):o(s)})})},s.submitVote=function(t,o,e){return new p.Promise(function(t,o){})},s.removeVote=function(t,o){return new p.Promise(function(t,o){})};var t,e=(t="undefined"!=typeof window?window.jQuery:void 0!==o?o.jQuery:null)&&t.__esModule?t:{default:t},p=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==l(t)&&"function"!=typeof t)return{default:t};var o=a();if(o&&o.has(t))return o.get(t);var e,s={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(e in t){var i;Object.prototype.hasOwnProperty.call(t,e)&&((i=n?Object.getOwnPropertyDescriptor(t,e):null)&&(i.get||i.set)?Object.defineProperty(s,e,i):s[e]=t[e])}s.default=t,o&&o.set(t,s);return s}("undefined"!=typeof window?window.peepso:void 0!==o?o.peepso:null),r="undefined"!=typeof window?window.peepsodata:void 0!==o?o.peepsodata:null;function a(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return a=function(){return t},t}}.call(this)}.call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1]);