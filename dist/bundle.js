!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=27)}([function(e,t,r){"use strict";t.__esModule=!0,t.extend=s,t.indexOf=function(e,t){for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r;return-1},t.escapeExpression=function(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}if(!a.test(e))return e;return e.replace(o,i)},t.isEmpty=function(e){return!e&&0!==e||!(!c(e)||0!==e.length)},t.createFrame=function(e){var t=s({},e);return t._parent=e,t},t.blockParams=function(e,t){return e.path=t,e},t.appendContextPath=function(e,t){return(e?e+".":"")+t};var n={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},o=/[&<>"'`=]/g,a=/[&<>"'`=]/;function i(e){return n[e]}function s(e){for(var t=1;t<arguments.length;t++)for(var r in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],r)&&(e[r]=arguments[t][r]);return e}var l=Object.prototype.toString;t.toString=l;var u=function(e){return"function"==typeof e};u(/x/)&&(t.isFunction=u=function(e){return"function"==typeof e&&"[object Function]"===l.call(e)}),t.isFunction=u;var c=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===l.call(e)};t.isArray=c},function(e,t,r){"use strict";t.__esModule=!0;var n=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function o(e,t){var r=t&&t.loc,a=void 0,i=void 0,s=void 0,l=void 0;r&&(a=r.start.line,i=r.end.line,s=r.start.column,l=r.end.column,e+=" - "+a+":"+s);for(var u=Error.prototype.constructor.call(this,e),c=0;c<n.length;c++)this[n[c]]=u[n[c]];Error.captureStackTrace&&Error.captureStackTrace(this,o);try{r&&(this.lineNumber=a,this.endLineNumber=i,Object.defineProperty?(Object.defineProperty(this,"column",{value:s,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:l,enumerable:!0})):(this.column=s,this.endColumn=l))}catch(e){}}o.prototype=new Error,t.default=o,e.exports=t.default},function(e,t,r){e.exports=r(12).default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.HandlebarsEnvironment=c;var o=r(0),a=n(r(1)),i=r(4),s=r(20),l=n(r(6)),u=r(7);t.VERSION="4.7.6";t.COMPILER_REVISION=8;t.LAST_COMPATIBLE_COMPILER_REVISION=7;t.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};function c(e,t,r){this.helpers=e||{},this.partials=t||{},this.decorators=r||{},i.registerDefaultHelpers(this),s.registerDefaultDecorators(this)}c.prototype={constructor:c,logger:l.default,log:l.default.log,registerHelper:function(e,t){if("[object Object]"===o.toString.call(e)){if(t)throw new a.default("Arg not supported with multiple helpers");o.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if("[object Object]"===o.toString.call(e))o.extend(this.partials,e);else{if(void 0===t)throw new a.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if("[object Object]"===o.toString.call(e)){if(t)throw new a.default("Arg not supported with multiple decorators");o.extend(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]},resetLoggedPropertyAccesses:function(){u.resetLoggedProperties()}};var d=l.default.log;t.log=d,t.createFrame=o.createFrame,t.logger=l.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.registerDefaultHelpers=function(e){o.default(e),a.default(e),i.default(e),s.default(e),l.default(e),u.default(e),c.default(e)},t.moveHelperToHooks=function(e,t,r){e.helpers[t]&&(e.hooks[t]=e.helpers[t],r||delete e.helpers[t])};var o=n(r(13)),a=n(r(14)),i=n(r(15)),s=n(r(16)),l=n(r(17)),u=n(r(18)),c=n(r(19))},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){"use strict";t.__esModule=!0;var n=r(0),o={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=n.indexOf(o.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=o.lookupLevel(e),"undefined"!=typeof console&&o.lookupLevel(o.level)<=e){var t=o.methodMap[e];console[t]||(t="log");for(var r=arguments.length,n=Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];console[t].apply(console,n)}}};t.default=o,e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.createProtoAccessControl=function(e){var t=Object.create(null);t.constructor=!1,t.__defineGetter__=!1,t.__defineSetter__=!1,t.__lookupGetter__=!1;var r=Object.create(null);return r.__proto__=!1,{properties:{whitelist:n.createNewLookupObject(r,e.allowedProtoProperties),defaultValue:e.allowProtoPropertiesByDefault},methods:{whitelist:n.createNewLookupObject(t,e.allowedProtoMethods),defaultValue:e.allowProtoMethodsByDefault}}},t.resultIsAllowed=function(e,t,r){return i("function"==typeof e?t.methods:t.properties,r)},t.resetLoggedProperties=function(){Object.keys(a).forEach((function(e){delete a[e]}))};var n=r(22),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(6)),a=Object.create(null);function i(e,t){return void 0!==e.whitelist[t]?!0===e.whitelist[t]:void 0!==e.defaultValue?e.defaultValue:(function(e){!0!==a[e]&&(a[e]=!0,o.log("error",'Handlebars: Access has been denied to resolve the property "'+e+'" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'))}(t),!1)}},function(e,t,r){var n=r(2);e.exports=(n.default||n).template({compiler:[8,">= 4.3.0"],main:function(e,t,r,n,o){return'<div class="popup">\n    <div class="popup__header">\n        <div class="popup__address">{{address}}</div>\n        <a href="#" id="close" class="popup__close"></a>\n    </div>\n    <div class="popup__outer">\n        <div class="popup__inner">\n            <div class="review">\n                <ul class="review__list">\n                    {% if !reviews %}\n                        <div class="review__empty">Отзывов пока нет...</div>\n                    {% else %}\n                        {% for review in reviews %}\n                            <li class="review__item">\n                                <div class="review__header">\n                                    <div class="review__author">{{review.author}}</div>\n                                    <div class="review__spot">{{review.spot}}</div>\n                                    <div class="review__date">{{review.date}}</div>\n                                </div>\n                                <div class="review__text">{{review.text}}</div>\n                            </li>\n                        {% endfor %}\n                    {% endif %}\n                </ul>\n            </div>\n            <div class="form">\n                <div class="form__title">Ваш отзыв</div>\n                <form action="" class="form__elem">\n                    <input type="text" id="add-author-input" class="form__input" placeholder="Ваше имя">\n                    <input type="text" id="add-spot-input" class="form__input" placeholder="Укажите место">\n                    <textarea id="add-text-input" class="form__input form__input--textarea" placeholder="Поделитесь впечатлениями"></textarea>\n                    <button type="submit" id="add-review-button" class="form__btn">Добавить</button>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>'},useData:!0})},function(e,t,r){var n=r(2);e.exports=(n.default||n).template({compiler:[8,">= 4.3.0"],main:function(e,t,r,n,o){return'<div class="carousel">\n    <div class="carousel__main">\n        <div class="carousel__spot">{{properties.reviews.spot}}</div>\n        <a href="#" id="address-link" class="carousel__address">{{properties.address}}</a>\n        <div class="carousel__text">{{properties.reviews.text}}</div>\n    </div>\n    <div class="carousel__footer">\n        <div class="carousel__date">{{properties.reviews.date}}</div>\n    </div>\n</div>'},useData:!0})},function(e){e.exports=JSON.parse('{"map":{"center":[55.76,37.64],"zoom":11,"controls":["zoomControl"]}}')},function(e,t,r){},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}t.__esModule=!0;var a=o(r(3)),i=n(r(23)),s=n(r(1)),l=o(r(0)),u=o(r(24)),c=n(r(26));function d(){var e=new a.HandlebarsEnvironment;return l.extend(e,a),e.SafeString=i.default,e.Exception=s.default,e.Utils=l,e.escapeExpression=l.escapeExpression,e.VM=u,e.template=function(t){return u.template(t,e)},e}var f=d();f.create=d,c.default(f),f.default=f,t.default=f,e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0;var n=r(0);t.default=function(e){e.registerHelper("blockHelperMissing",(function(t,r){var o=r.inverse,a=r.fn;if(!0===t)return a(this);if(!1===t||null==t)return o(this);if(n.isArray(t))return t.length>0?(r.ids&&(r.ids=[r.name]),e.helpers.each(t,r)):o(this);if(r.data&&r.ids){var i=n.createFrame(r.data);i.contextPath=n.appendContextPath(r.data.contextPath,r.name),r={data:i}}return a(t,r)}))},e.exports=t.default},function(e,t,r){"use strict";(function(n){t.__esModule=!0;var o,a=r(0),i=r(1),s=(o=i)&&o.__esModule?o:{default:o};t.default=function(e){e.registerHelper("each",(function(e,t){if(!t)throw new s.default("Must pass iterator to #each");var r,o=t.fn,i=t.inverse,l=0,u="",c=void 0,d=void 0;function f(t,r,n){c&&(c.key=t,c.index=r,c.first=0===r,c.last=!!n,d&&(c.contextPath=d+t)),u+=o(e[t],{data:c,blockParams:a.blockParams([e[t],t],[d+t,null])})}if(t.data&&t.ids&&(d=a.appendContextPath(t.data.contextPath,t.ids[0])+"."),a.isFunction(e)&&(e=e.call(this)),t.data&&(c=a.createFrame(t.data)),e&&"object"==typeof e)if(a.isArray(e))for(var p=e.length;l<p;l++)l in e&&f(l,l,l===e.length-1);else if(n.Symbol&&e[n.Symbol.iterator]){for(var h=[],v=e[n.Symbol.iterator](),m=v.next();!m.done;m=v.next())h.push(m.value);for(p=(e=h).length;l<p;l++)f(l,l,l===e.length-1)}else r=void 0,Object.keys(e).forEach((function(e){void 0!==r&&f(r,l-1),r=e,l++})),void 0!==r&&f(r,l-1,!0);return 0===l&&(u=i(this)),u}))},e.exports=t.default}).call(this,r(5))},function(e,t,r){"use strict";t.__esModule=!0;var n,o=r(1),a=(n=o)&&n.__esModule?n:{default:n};t.default=function(e){e.registerHelper("helperMissing",(function(){if(1!==arguments.length)throw new a.default('Missing helper: "'+arguments[arguments.length-1].name+'"')}))},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0;var n,o=r(0),a=r(1),i=(n=a)&&n.__esModule?n:{default:n};t.default=function(e){e.registerHelper("if",(function(e,t){if(2!=arguments.length)throw new i.default("#if requires exactly one argument");return o.isFunction(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||o.isEmpty(e)?t.inverse(this):t.fn(this)})),e.registerHelper("unless",(function(t,r){if(2!=arguments.length)throw new i.default("#unless requires exactly one argument");return e.helpers.if.call(this,t,{fn:r.inverse,inverse:r.fn,hash:r.hash})}))},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("log",(function(){for(var t=[void 0],r=arguments[arguments.length-1],n=0;n<arguments.length-1;n++)t.push(arguments[n]);var o=1;null!=r.hash.level?o=r.hash.level:r.data&&null!=r.data.level&&(o=r.data.level),t[0]=o,e.log.apply(e,t)}))},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("lookup",(function(e,t,r){return e?r.lookupProperty(e,t):e}))},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0;var n,o=r(0),a=r(1),i=(n=a)&&n.__esModule?n:{default:n};t.default=function(e){e.registerHelper("with",(function(e,t){if(2!=arguments.length)throw new i.default("#with requires exactly one argument");o.isFunction(e)&&(e=e.call(this));var r=t.fn;if(o.isEmpty(e))return t.inverse(this);var n=t.data;return t.data&&t.ids&&((n=o.createFrame(t.data)).contextPath=o.appendContextPath(t.data.contextPath,t.ids[0])),r(e,{data:n,blockParams:o.blockParams([e],[n&&n.contextPath])})}))},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.registerDefaultDecorators=function(e){a.default(e)};var n,o=r(21),a=(n=o)&&n.__esModule?n:{default:n}},function(e,t,r){"use strict";t.__esModule=!0;var n=r(0);t.default=function(e){e.registerDecorator("inline",(function(e,t,r,o){var a=e;return t.partials||(t.partials={},a=function(o,a){var i=r.partials;r.partials=n.extend({},i,t.partials);var s=e(o,a);return r.partials=i,s}),t.partials[o.args[0]]=o.fn,a}))},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.createNewLookupObject=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return n.extend.apply(void 0,[Object.create(null)].concat(t))};var n=r(0)},function(e,t,r){"use strict";function n(e){this.string=e}t.__esModule=!0,n.prototype.toString=n.prototype.toHTML=function(){return""+this.string},t.default=n,e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.checkRevision=function(e){var t=e&&e[0]||1,r=s.COMPILER_REVISION;if(t>=s.LAST_COMPATIBLE_COMPILER_REVISION&&t<=s.COMPILER_REVISION)return;if(t<s.LAST_COMPATIBLE_COMPILER_REVISION){var n=s.REVISION_CHANGES[r],o=s.REVISION_CHANGES[t];throw new i.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+n+") or downgrade your runtime to an older version ("+o+").")}throw new i.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")},t.template=function(e,t){if(!t)throw new i.default("No environment passed to template");if(!e||!e.main)throw new i.default("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var r=e.compiler&&7===e.compiler[0];var n={strict:function(e,t,r){if(!e||!(t in e))throw new i.default('"'+t+'" not defined in '+e,{loc:r});return e[t]},lookupProperty:function(e,t){var r=e[t];return null==r||Object.prototype.hasOwnProperty.call(e,t)||c.resultIsAllowed(r,n.protoAccessControl,t)?r:void 0},lookup:function(e,t){for(var r=e.length,o=0;o<r;o++){if(null!=(e[o]&&n.lookupProperty(e[o],t)))return e[o][t]}},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:o.escapeExpression,invokePartial:function(r,n,a){a.hash&&(n=o.extend({},n,a.hash),a.ids&&(a.ids[0]=!0)),r=t.VM.resolvePartial.call(this,r,n,a);var s=o.extend({},a,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),l=t.VM.invokePartial.call(this,r,n,s);if(null==l&&t.compile&&(a.partials[a.name]=t.compile(r,e.compilerOptions,t),l=a.partials[a.name](n,s)),null!=l){if(a.indent){for(var u=l.split("\n"),c=0,d=u.length;c<d&&(u[c]||c+1!==d);c++)u[c]=a.indent+u[c];l=u.join("\n")}return l}throw new i.default("The partial "+a.name+" could not be compiled when running in runtime-only mode")},fn:function(t){var r=e[t];return r.decorator=e[t+"_d"],r},programs:[],program:function(e,t,r,n,o){var a=this.programs[e],i=this.fn(e);return t||o||n||r?a=d(this,e,i,t,r,n,o):a||(a=this.programs[e]=d(this,e,i)),a},data:function(e,t){for(;e&&t--;)e=e._parent;return e},mergeIfNeeded:function(e,t){var r=e||t;return e&&t&&e!==t&&(r=o.extend({},t,e)),r},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler};function a(t){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],o=r.data;a._setup(r),!r.partial&&e.useData&&(o=p(t,o));var i=void 0,s=e.useBlockParams?[]:void 0;function l(t){return""+e.main(n,t,n.helpers,n.partials,o,s,i)}return e.useDepths&&(i=r.depths?t!=r.depths[0]?[t].concat(r.depths):r.depths:[t]),(l=h(e.main,l,n,r.depths||[],o,s))(t,r)}return a.isTop=!0,a._setup=function(a){if(a.partial)n.protoAccessControl=a.protoAccessControl,n.helpers=a.helpers,n.partials=a.partials,n.decorators=a.decorators,n.hooks=a.hooks;else{var i=o.extend({},t.helpers,a.helpers);!function(e,t){Object.keys(e).forEach((function(r){var n=e[r];e[r]=function(e,t){var r=t.lookupProperty;return u.wrapHelper(e,(function(e){return o.extend({lookupProperty:r},e)}))}(n,t)}))}(i,n),n.helpers=i,e.usePartial&&(n.partials=n.mergeIfNeeded(a.partials,t.partials)),(e.usePartial||e.useDecorators)&&(n.decorators=o.extend({},t.decorators,a.decorators)),n.hooks={},n.protoAccessControl=c.createProtoAccessControl(a);var s=a.allowCallsToHelperMissing||r;l.moveHelperToHooks(n,"helperMissing",s),l.moveHelperToHooks(n,"blockHelperMissing",s)}},a._child=function(t,r,o,a){if(e.useBlockParams&&!o)throw new i.default("must pass block params");if(e.useDepths&&!a)throw new i.default("must pass parent depths");return d(n,t,e[t],r,0,o,a)},a},t.wrapProgram=d,t.resolvePartial=function(e,t,r){e?e.call||r.name||(r.name=e,e=r.partials[e]):e="@partial-block"===r.name?r.data["partial-block"]:r.partials[r.name];return e},t.invokePartial=function(e,t,r){var n=r.data&&r.data["partial-block"];r.partial=!0,r.ids&&(r.data.contextPath=r.ids[0]||r.data.contextPath);var a=void 0;r.fn&&r.fn!==f&&function(){r.data=s.createFrame(r.data);var e=r.fn;a=r.data["partial-block"]=function(t){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return r.data=s.createFrame(r.data),r.data["partial-block"]=n,e(t,r)},e.partials&&(r.partials=o.extend({},r.partials,e.partials))}();void 0===e&&a&&(e=a);if(void 0===e)throw new i.default("The partial "+r.name+" could not be found");if(e instanceof Function)return e(t,r)},t.noop=f;var n,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(0)),a=r(1),i=(n=a)&&n.__esModule?n:{default:n},s=r(3),l=r(4),u=r(25),c=r(7);function d(e,t,r,n,o,a,i){function s(t){var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],s=i;return!i||t==i[0]||t===e.nullContext&&null===i[0]||(s=[t].concat(i)),r(e,t,e.helpers,e.partials,o.data||n,a&&[o.blockParams].concat(a),s)}return(s=h(r,s,e,i,n,a)).program=t,s.depth=i?i.length:0,s.blockParams=o||0,s}function f(){return""}function p(e,t){return t&&"root"in t||((t=t?s.createFrame(t):{}).root=e),t}function h(e,t,r,n,a,i){if(e.decorator){var s={};t=e.decorator(t,s,r,n&&n[0],a,i,n),o.extend(t,s)}return t}},function(e,t,r){"use strict";t.__esModule=!0,t.wrapHelper=function(e,t){if("function"!=typeof e)return e;return function(){var r=arguments[arguments.length-1];return arguments[arguments.length-1]=t(r),e.apply(this,arguments)}}},function(e,t,r){"use strict";(function(r){t.__esModule=!0,t.default=function(e){var t=void 0!==r?r:window,n=t.Handlebars;e.noConflict=function(){return t.Handlebars===e&&(t.Handlebars=n),e}},e.exports=t.default}).call(this,r(5))},function(e,t,r){"use strict";r.r(t);r(11);var n=r(8),o=r.n(n),a=r(9),i=r.n(a);let s;function l(e,t,r){let n=new ymaps.Placemark(t,r,{preset:"islands#violetIcon",hideIconOnBalloonOpen:!1});return e.add(n),n}function u(e,t){return ymaps.templateLayoutFactory.createClass(e,{build:function(){if(this.constructor.superclass.build.call(this),$("#add-review-button").on("click",$.proxy(this.onAddReview,this)),$("#close").on("click",$.proxy(this.onClose,this)),this.getData().geoObject){let e=JSON.parse(JSON.stringify(this.getData().properties._data));Array.isArray(e.reviews)||(e.reviews=[e.reviews]),this.setData(e)}},onAddReview:function(e){e.preventDefault();const r=document.querySelector("#add-author-input"),n=document.querySelector("#add-spot-input"),o=document.querySelector("#add-text-input"),a={author:r.value,spot:n.value,date:(new Date).toLocaleString(),text:o.value},i=this.getData().coords,s=this.getData().address,u=this.getData();let c=[];if(u.reviews)if(Array.isArray(u.reviews))for(let e of u.reviews)c.push(e);else c.push(u.reviews);c.push(a);let d="marker-"+s,f=localStorage.getItem(d);null!==f?(f=JSON.parse(f),f.reviews.push(a),localStorage.setItem(d,JSON.stringify(f))):localStorage.setItem(d,JSON.stringify({coords:i,address:s,reviews:c})),l(t,i,{coords:i,address:s,reviews:a}),this.setData({coords:i,address:s,reviews:c}),this.events.fire("addreview")},onClose:function(e){e.preventDefault(),this.events.fire("userclose")},clear:function(){$("#add-review-button").off("click"),$("#close").off("click"),this.constructor.superclass.clear.call(this)}})}var c=r(10);(async()=>{let{map:e,clusterer:t}=await function(e,t,r,n){return new Promise((o,a)=>{try{ymaps.ready(()=>{let a=new ymaps.Clusterer({clusterDisableClickZoom:!0,clusterOpenBalloonOnClick:!0,hideIconOnBalloonOpen:!1,clusterBalloonLayout:"cluster#balloonCarousel",clusterBalloonItemContentLayout:(i=n,ymaps.templateLayoutFactory.createClass(i,{build:function(){this.constructor.superclass.build.call(this);const e=document.querySelector("#address-link");e.addEventListener("click",e=>{e.preventDefault();let t=this.getData().properties._data,r="marker-"+t.address,n=localStorage.getItem(r);null!==n&&(n=JSON.parse(n),s.balloon.open(t.coords,n))})}})),clusterBalloonPanelMaxMapArea:0,clusterBalloonContentLayoutWidth:300,clusterBalloonContentLayoutHeight:195,clusterBalloonPagerSize:5,preset:"islands#invertedVioletClusterIcons"});var i;s=new ymaps.Map(e,t,{balloonLayout:u(r,a)});for(let e=0;e<localStorage.length;e++)if(localStorage.key(e).includes("marker-")){let t=localStorage.getItem(localStorage.key(e));t=JSON.parse(t);for(let e of t.reviews){let r={coords:t.coords,address:t.address,reviews:e};l(a,t.coords,r)}}s.geoObjects.add(a),o({map:s,clusterer:a})})}catch(e){a(e)}})}("map",c.map,o()(),i()());e.events.add("click",async t=>{let r=t.get("coords"),n=await async function(e){return(await ymaps.geocode(e)).geoObjects.get(0).getAddressLine()}(r);e.balloon.open(r,{address:n,coords:r})})})()}]);