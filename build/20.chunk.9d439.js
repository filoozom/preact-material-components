webpackJsonp([20],{"9IbV":function(){},"9qb7":function(e,n){var t,a;!function(){"use strict";function r(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var a=typeof t;if("string"===a||"number"===a)e.push(t);else if(Array.isArray(t))e.push(r.apply(null,t));else if("object"===a)for(var s in t)i.call(t,s)&&t[s]&&e.push(s)}}return e.join(" ")}var i={}.hasOwnProperty;void 0!==e&&e.exports?e.exports=r:(t=[],void 0!==(a=function(){return r}.apply(n,t))&&(e.exports=a))}()},"B/9r":function(e,n,t){"use strict";function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function r(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}t.d(n,"a",function(){return l});var i=t("KM04"),s=(t.n(i),t.i(i.h)("div",{className:"mdc-typography--display1"},"Components and their props")),o=t.i(i.h)("li",null,t.i(i.h)("div",{className:"mdc-typography--caption"},"no specific props")),l=function(e){function n(){return a(this,e.apply(this,arguments))}return r(n,e),n.prototype.render=function(){return t.i(i.h)("div",null,s,t.i(i.h)("ul",null,this.props.data.map(function(e){return t.i(i.h)("li",null,t.i(i.h)("div",{className:"mdc-typography--headline"},e.component),t.i(i.h)("ul",null,e.props&&e.props.map(function(e){return t.i(i.h)("li",null,t.i(i.h)("div",null,t.i(i.h)("div",null,t.i(i.h)("span",{className:"mdc-typography--title"},e.name," "),t.i(i.h)("span",{className:"mdc-typography--body2"},e.value||"true/false")),t.i(i.h)("div",{className:"mdc-typography--caption"},e.description)))}),0===e.props.length&&o))})))},n}(i.Component)},ElH3:function(e){e.exports=function(e){var n={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:"[A-Za-z0-9\\._:-]+",relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/},{begin:/'/,end:/'/},{begin:/[^\s"'=<>`]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist"],case_insensitive:!0,contains:[{className:"meta",begin:"<!DOCTYPE",end:">",relevance:10,contains:[{begin:"\\[",end:"\\]"}]},e.COMMENT("\x3c!--","--\x3e",{relevance:10}),{begin:"<\\!\\[CDATA\\[",end:"\\]\\]>",relevance:10},{begin:/<\?(php)?/,end:/\?>/,subLanguage:"php",contains:[{begin:"/\\*",end:"\\*/",skip:!0}]},{className:"tag",begin:"<style(?=\\s|>|$)",end:">",keywords:{name:"style"},contains:[n],starts:{end:"</style>",returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:"<script(?=\\s|>|$)",end:">",keywords:{name:"script"},contains:[n],starts:{end:"<\/script>",returnEnd:!0,subLanguage:["actionscript","javascript","handlebars","xml"]}},{className:"meta",variants:[{begin:/<\?xml/,end:/\?>/,relevance:10},{begin:/<\?\w+/,end:/\?>/}]},{className:"tag",begin:"</?",end:"/?>",contains:[{className:"name",begin:/[^\/><\s]+/,relevance:0},n]}]}}},F4jb:function(e,n,t){"use strict";function a(e,n){var t={};for(var a in e)n.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}var r=t("KM04"),i=(t.n(r),t("9qb7")),s=t.n(i),o=t("R7gn"),l=t.n(o),c=t("Yr+x"),u=t.n(c),p=t("VSmG"),d=t.n(p),g=t("ElH3"),m=t.n(g),f=t("9IbV"),h=(t.n(f),{javascript:u.a,json:d.a,xml:m.a});Object.keys(h).forEach(function(e){return l.a.registerLanguage(e,h[e])}),n.a=function(e){var n=e.children,i=a(e,["children"]),o=n&&n[0];if(o&&"code"===o.nodeName){var c=o.children[0].replace(/(^\s+|\s+$)/g,""),u=(o.attributes.class&&o.attributes.class).match(/lang-([a-z]+)/)[1],p=l.a.highlightAuto(c,u?[u]:null),d=p.language;return t.i(r.h)("pre",{class:s()("highlight","highlight-"+d,i.class)},t.i(r.h)("code",{class:"hljs lang-"+d,dangerouslySetInnerHTML:{__html:p.value}}))}return t.i(r.h)("pre",i,n)}},HIOX:function(e,n,t){"use strict";function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function r(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"default",function(){return w});var i=t("KM04"),s=(t.n(i),t("E7XR")),o=t("B/9r"),l=t("F4jb"),c=t("Hb3h"),u=(t.n(c),t("pdCL")),p=t.n(u),d=t.i(i.h)("div",{className:"mdc-typography--display1"},"Sample code "),g=t.i(i.h)(l.a,null,t.i(i.h)("code",{class:"lang-js"},p.a)),m=t.i(i.h)("div",{className:"mdc-typography--display1"},"Original documentation"),f=t.i(i.h)("div",{className:"mdc-typography--body"},"This component encapsulates ",t.i(i.h)("span",{className:"strong"},"mdc-list"),", you can refer to its documentation",t.i(i.h)("a",{href:"https://github.com/material-components/material-components-web/tree/master/packages/mdc-list"}," here"),"."),h=t.i(i.h)("div",{className:"mdc-typography--display1"},"Demo "),b=t.i(i.h)("div",{className:"mdc-typography--title"},"Normal "),E=t.i(i.h)(s.a,null,t.i(i.h)(s.a.Item,null,"Item1"),t.i(i.h)(s.a.Item,null,"Item2"),t.i(i.h)(s.a.Divider,null),t.i(i.h)(s.a.Item,null,"Item3"),t.i(i.h)(s.a.Item,null,"Item4"),t.i(i.h)(s.a.Item,null,"Item5")),v=t.i(i.h)("div",{className:"mdc-typography--title"},"Action items "),y=t.i(i.h)(s.a,null,t.i(i.h)(s.a.LinkItem,{ripple:!0,href:"#/component/list"},"Item1"),t.i(i.h)(s.a.LinkItem,{ripple:!0,href:"#/component/list"},"Item2"),t.i(i.h)(s.a.LinkItem,{ripple:!0,href:"#/component/list"},"Item3"),t.i(i.h)(s.a.LinkItem,{ripple:!0,href:"#/component/list"},"Item4"),t.i(i.h)(s.a.LinkItem,{ripple:!0,href:"#/component/list"},"Item5")),_=t.i(i.h)("div",{className:"mdc-typography--title"},"Two line "),N=t.i(i.h)(s.a,{"two-line":!0},t.i(i.h)(s.a.Item,null,t.i(i.h)(s.a.TextContainer,null,t.i(i.h)(s.a.PrimaryText,null,"Heading 1"),t.i(i.h)(s.a.SecondaryText,null,"Lorem ipsum dolor sit amet."))),t.i(i.h)(s.a.Item,null,t.i(i.h)(s.a.TextContainer,null,t.i(i.h)(s.a.PrimaryText,null,"Heading 2"),t.i(i.h)(s.a.SecondaryText,null,"Lorem ipsum dolor sit amet."))),t.i(i.h)(s.a.Item,null,t.i(i.h)(s.a.TextContainer,null,t.i(i.h)(s.a.PrimaryText,null,"Heading 3"),t.i(i.h)(s.a.SecondaryText,null,"Lorem ipsum dolor sit amet.")))),w=function(e){function n(){var n=a(this,e.call(this));return n.propsTable=[{component:"List",props:[{name:"dense",description:"Makes the list with lesser padding."},{name:"two-line",description:"Makes container for two line list item."}]},{component:"List.Item",props:[]},{component:"List.LinkItem",props:[{name:"align-start",description:"Makes the Icon align to start."},{name:"align-end",description:"Makes the Icon align to end."}]},{component:"List.ItemAvatar",props:[{name:"src",value:"path of avatar image",description:"path of avatar image"}]},{component:"List.TextContainer",props:[]},{component:"List.PrimaryText",props:[]},{component:"List.SecondaryText",props:[]}],n}return r(n,e),n.prototype.render=function(){return t.i(i.h)("div",{className:"page-list"},t.i(i.h)(o.a,{data:this.propsTable}),d,g,m,f,h,b,E,v,y,_,N)},n}(i.Component)},Hb3h:function(){},R7gn:function(e,n){!function(e){"object"==typeof window&&window||"object"==typeof self&&self;e(n)}(function(e){function n(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function t(e){return e.nodeName.toLowerCase()}function a(e,n){var t=e&&e.exec(n);return t&&0===t.index}function r(e){return x.test(e)}function i(e){var n,t,a,i,s=e.className+" ";if(s+=e.parentNode?e.parentNode.className:"",t=M.exec(s))return _(t[1])?t[1]:"no-highlight";for(s=s.split(/\s+/),n=0,a=s.length;n<a;n++)if(i=s[n],r(i)||_(i))return i}function s(e){var n,t={},a=Array.prototype.slice.call(arguments,1);for(n in e)t[n]=e[n];return a.forEach(function(e){for(n in e)t[n]=e[n]}),t}function o(e){var n=[];return function e(a,r){for(var i=a.firstChild;i;i=i.nextSibling)3===i.nodeType?r+=i.nodeValue.length:1===i.nodeType&&(n.push({event:"start",offset:r,node:i}),r=e(i,r),t(i).match(/br|hr|img|input/)||n.push({event:"stop",offset:r,node:i}));return r}(e,0),n}function l(e,a,r){function i(){return e.length&&a.length?e[0].offset!==a[0].offset?e[0].offset<a[0].offset?e:a:"start"===a[0].event?e:a:e.length?e:a}function s(e){function a(e){return" "+e.nodeName+'="'+n(e.value).replace('"',"&quot;")+'"'}u+="<"+t(e)+N.map.call(e.attributes,a).join("")+">"}function o(e){u+="</"+t(e)+">"}function l(e){("start"===e.event?s:o)(e.node)}for(var c=0,u="",p=[];e.length||a.length;){var d=i();if(u+=n(r.substring(c,d[0].offset)),c=d[0].offset,d===e){p.reverse().forEach(o);do{l(d.splice(0,1)[0]),d=i()}while(d===e&&d.length&&d[0].offset===c);p.reverse().forEach(s)}else"start"===d[0].event?p.push(d[0].node):p.pop(),l(d.splice(0,1)[0])}return u+n(r.substr(c))}function c(e){return e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map(function(n){return s(e,{variants:null},n)})),e.cached_variants||e.endsWithParent&&[s(e)]||[e]}function u(e){function n(e){return e&&e.source||e}function t(t,a){return new RegExp(n(t),"m"+(e.case_insensitive?"i":"")+(a?"g":""))}function a(r,i){if(!r.compiled){if(r.compiled=!0,r.keywords=r.keywords||r.beginKeywords){var s={},o=function(n,t){e.case_insensitive&&(t=t.toLowerCase()),t.split(" ").forEach(function(e){var t=e.split("|");s[t[0]]=[n,t[1]?Number(t[1]):1]})};"string"==typeof r.keywords?o("keyword",r.keywords):w(r.keywords).forEach(function(e){o(e,r.keywords[e])}),r.keywords=s}r.lexemesRe=t(r.lexemes||/\w+/,!0),i&&(r.beginKeywords&&(r.begin="\\b("+r.beginKeywords.split(" ").join("|")+")\\b"),r.begin||(r.begin=/\B|\b/),r.beginRe=t(r.begin),r.end||r.endsWithParent||(r.end=/\B|\b/),r.end&&(r.endRe=t(r.end)),r.terminator_end=n(r.end)||"",r.endsWithParent&&i.terminator_end&&(r.terminator_end+=(r.end?"|":"")+i.terminator_end)),r.illegal&&(r.illegalRe=t(r.illegal)),null==r.relevance&&(r.relevance=1),r.contains||(r.contains=[]),r.contains=Array.prototype.concat.apply([],r.contains.map(function(e){return c("self"===e?r:e)})),r.contains.forEach(function(e){a(e,r)}),r.starts&&a(r.starts,i);var l=r.contains.map(function(e){return e.beginKeywords?"\\.?("+e.begin+")\\.?":e.begin}).concat([r.terminator_end,r.illegal]).map(n).filter(Boolean);r.terminators=l.length?t(l.join("|"),!0):{exec:function(){return null}}}}a(e)}function p(e,t,r,i){function s(e,n){var t,r;for(t=0,r=n.contains.length;t<r;t++)if(a(n.contains[t].beginRe,e))return n.contains[t]}function o(e,n){if(a(e.endRe,n)){for(;e.endsParent&&e.parent;)e=e.parent;return e}if(e.endsWithParent)return o(e.parent,n)}function l(e,n){return!r&&a(n.illegalRe,e)}function c(e,n){var t=v.case_insensitive?n[0].toLowerCase():n[0];return e.keywords.hasOwnProperty(t)&&e.keywords[t]}function g(e,n,t,a){var r=a?"":C.classPrefix,i='<span class="'+r,s=t?"":L;return(i+=e+'">')+n+s}function m(){var e,t,a,r;if(!N.keywords)return n(x);for(r="",t=0,N.lexemesRe.lastIndex=0,a=N.lexemesRe.exec(x);a;)r+=n(x.substring(t,a.index)),e=c(N,a),e?(M+=e[1],r+=g(e[0],n(a[0]))):r+=n(a[0]),t=N.lexemesRe.lastIndex,a=N.lexemesRe.exec(x);return r+n(x.substr(t))}function f(){var e="string"==typeof N.subLanguage;if(e&&!R[N.subLanguage])return n(x);var t=e?p(N.subLanguage,x,!0,w[N.subLanguage]):d(x,N.subLanguage.length?N.subLanguage:void 0);return N.relevance>0&&(M+=t.relevance),e&&(w[N.subLanguage]=t.top),g(t.language,t.value,!1,!0)}function h(){O+=null!=N.subLanguage?f():m(),x=""}function b(e){O+=e.className?g(e.className,"",!0):"",N=Object.create(e,{parent:{value:N}})}function E(e,n){if(x+=e,null==n)return h(),0;var t=s(n,N);if(t)return t.skip?x+=n:(t.excludeBegin&&(x+=n),h(),t.returnBegin||t.excludeBegin||(x=n)),b(t,n),t.returnBegin?0:n.length;var a=o(N,n);if(a){var r=N;r.skip?x+=n:(r.returnEnd||r.excludeEnd||(x+=n),h(),r.excludeEnd&&(x=n));do{N.className&&(O+=L),N.skip||(M+=N.relevance),N=N.parent}while(N!==a.parent);return a.starts&&b(a.starts,""),r.returnEnd?0:n.length}if(l(n,N))throw new Error('Illegal lexeme "'+n+'" for mode "'+(N.className||"<unnamed>")+'"');return x+=n,n.length||1}var v=_(e);if(!v)throw new Error('Unknown language: "'+e+'"');u(v);var y,N=i||v,w={},O="";for(y=N;y!==v;y=y.parent)y.className&&(O=g(y.className,"",!0)+O);var x="",M=0;try{for(var I,T,S=0;;){if(N.terminators.lastIndex=S,!(I=N.terminators.exec(t)))break;T=E(t.substring(S,I.index),I[0]),S=I.index+T}for(E(t.substr(S)),y=N;y.parent;y=y.parent)y.className&&(O+=L);return{relevance:M,value:O,language:e,top:N}}catch(e){if(e.message&&-1!==e.message.indexOf("Illegal"))return{relevance:0,value:n(t)};throw e}}function d(e,t){t=t||C.languages||w(R);var a={relevance:0,value:n(e)},r=a;return t.filter(_).forEach(function(n){var t=p(n,e,!1);t.language=n,t.relevance>r.relevance&&(r=t),t.relevance>a.relevance&&(r=a,a=t)}),r.language&&(a.second_best=r),a}function g(e){return C.tabReplace||C.useBR?e.replace(I,function(e,n){return C.useBR&&"\n"===e?"<br>":C.tabReplace?n.replace(/\t/g,C.tabReplace):""}):e}function m(e,n,t){var a=n?O[n]:t,r=[e.trim()];return e.match(/\bhljs\b/)||r.push("hljs"),-1===e.indexOf(a)&&r.push(a),r.join(" ").trim()}function f(e){var n,t,a,s,c,u=i(e);r(u)||(C.useBR?(n=document.createElementNS("http://www.w3.org/1999/xhtml","div"),n.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):n=e,c=n.textContent,a=u?p(u,c,!0):d(c),t=o(n),t.length&&(s=document.createElementNS("http://www.w3.org/1999/xhtml","div"),s.innerHTML=a.value,a.value=l(t,o(s),c)),a.value=g(a.value),e.innerHTML=a.value,e.className=m(e.className,u,a.language),e.result={language:a.language,re:a.relevance},a.second_best&&(e.second_best={language:a.second_best.language,re:a.second_best.relevance}))}function h(e){C=s(C,e)}function b(){if(!b.called){b.called=!0;var e=document.querySelectorAll("pre code");N.forEach.call(e,f)}}function E(){addEventListener("DOMContentLoaded",b,!1),addEventListener("load",b,!1)}function v(n,t){var a=R[n]=t(e);a.aliases&&a.aliases.forEach(function(e){O[e]=n})}function y(){return w(R)}function _(e){return e=(e||"").toLowerCase(),R[e]||R[O[e]]}var N=[],w=Object.keys,R={},O={},x=/^(no-?highlight|plain|text)$/i,M=/\blang(?:uage)?-([\w-]+)\b/i,I=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,L="</span>",C={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};return e.highlight=p,e.highlightAuto=d,e.fixMarkup=g,e.highlightBlock=f,e.configure=h,e.initHighlighting=b,e.initHighlightingOnLoad=E,e.registerLanguage=v,e.listLanguages=y,e.getLanguage=_,e.inherit=s,e.IDENT_RE="[a-zA-Z]\\w*",e.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",e.NUMBER_RE="\\b\\d+(\\.\\d+)?",e.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BINARY_NUMBER_RE="\\b(0b[01]+)",e.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},e.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},e.COMMENT=function(n,t,a){var r=e.inherit({className:"comment",begin:n,end:t,contains:[]},a||{});return r.contains.push(e.PHRASAL_WORDS_MODE),r.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),r},e.C_LINE_COMMENT_MODE=e.COMMENT("//","$"),e.C_BLOCK_COMMENT_MODE=e.COMMENT("/\\*","\\*/"),e.HASH_COMMENT_MODE=e.COMMENT("#","$"),e.NUMBER_MODE={className:"number",begin:e.NUMBER_RE,relevance:0},e.C_NUMBER_MODE={className:"number",begin:e.C_NUMBER_RE,relevance:0},e.BINARY_NUMBER_MODE={className:"number",begin:e.BINARY_NUMBER_RE,relevance:0},e.CSS_NUMBER_MODE={className:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},e.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[e.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[e.BACKSLASH_ESCAPE]}]},e.TITLE_MODE={className:"title",begin:e.IDENT_RE,relevance:0},e.UNDERSCORE_TITLE_MODE={className:"title",begin:e.UNDERSCORE_IDENT_RE,relevance:0},e.METHOD_GUARD={begin:"\\.\\s*"+e.UNDERSCORE_IDENT_RE,relevance:0},e})},VSmG:function(e){e.exports=function(e){var n={literal:"true false null"},t=[e.QUOTE_STRING_MODE,e.C_NUMBER_MODE],a={end:",",endsWithParent:!0,excludeEnd:!0,contains:t,keywords:n};return t.splice(t.length,0,{begin:"{",end:"}",contains:[{className:"attr",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE],illegal:"\\n"},e.inherit(a,{begin:/:/})],illegal:"\\S"},{begin:"\\[",end:"\\]",contains:[e.inherit(a)],illegal:"\\S"}),{contains:t,keywords:n,illegal:"\\S"}}},"Yr+x":function(e){e.exports=function(e){var n="[A-Za-z$_][0-9A-Za-z$_]*",t={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},a={className:"number",variants:[{begin:"\\b(0[bB][01]+)"},{begin:"\\b(0[oO][0-7]+)"},{begin:e.C_NUMBER_RE}],relevance:0},r={className:"subst",begin:"\\$\\{",end:"\\}",keywords:t,contains:[]},i={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,r]};r.contains=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,i,a,e.REGEXP_MODE];var s=r.contains.concat([e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]);return{aliases:["js","jsx"],keywords:t,contains:[{className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},{className:"meta",begin:/^#!/,end:/$/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,i,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,a,{begin:/[{,]\s*/,relevance:0,contains:[{begin:n+"\\s*:",returnBegin:!0,relevance:0,contains:[{className:"attr",begin:n,relevance:0}]}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{className:"function",begin:"(\\(.*?\\)|"+n+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:n},{begin:/\(\s*\)/},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:t,contains:s}]}]},{begin:/</,end:/(\/\w+|\w+\/)>/,subLanguage:"xml",contains:[{begin:/<\w+\s*\/>/,skip:!0},{begin:/<\w+/,end:/(\/\w+|\w+\/)>/,skip:!0,contains:[{begin:/<\w+\s*\/>/,skip:!0},"self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/\{/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:n}),{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,contains:s}],illegal:/\[|%/},{begin:/\$[(.]/},e.METHOD_GUARD,{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"constructor",end:/\{/,excludeEnd:!0}],illegal:/#(?!!)/}}},pdCL:function(e){e.exports="import {h, Component} from 'preact';\r\nimport List from 'preact-material-components/List';\r\nimport 'preact-material-components/List/style.css';\r\n\r\nexport default class ListPage extends Component {\r\n  render(){\r\n    return (\r\n      <div>\r\n        <List>\r\n          <List.Item>Item1</List.Item>\r\n          <List.Item>Item2</List.Item>\r\n          <List.Item>Item3</List.Item>\r\n          <List.Item>Item4</List.Item>\r\n          <List.Item>Item5</List.Item>\r\n        </List>\r\n      </div>\r\n    );\r\n  }\r\n}\r\n"}});
//# sourceMappingURL=20.chunk.9d439.js.map