webpackJsonp([16],{"56Xb":function(){},"9IbV":function(){},"9qb7":function(e,n){var t,r;!function(){"use strict";function a(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var r=typeof t;if("string"===r||"number"===r)e.push(t);else if(Array.isArray(t))e.push(a.apply(null,t));else if("object"===r)for(var s in t)i.call(t,s)&&t[s]&&e.push(s)}}return e.join(" ")}var i={}.hasOwnProperty;void 0!==e&&e.exports?e.exports=a:(t=[],void 0!==(r=function(){return a}.apply(n,t))&&(e.exports=r))}()},"B/9r":function(e,n,t){"use strict";function r(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}t.d(n,"a",function(){return l});var i=t("KM04"),s=(t.n(i),t.i(i.h)("div",{className:"mdc-typography--display1"},"Components and their props")),o=t.i(i.h)("li",null,t.i(i.h)("div",{className:"mdc-typography--caption"},"no specific props")),l=function(e){function n(){return r(this,e.apply(this,arguments))}return a(n,e),n.prototype.render=function(){return t.i(i.h)("div",null,s,t.i(i.h)("ul",null,this.props.data.map(function(e){return t.i(i.h)("li",null,t.i(i.h)("div",{className:"mdc-typography--headline"},e.component),t.i(i.h)("ul",null,e.props&&e.props.map(function(e){return t.i(i.h)("li",null,t.i(i.h)("div",null,t.i(i.h)("div",null,t.i(i.h)("span",{className:"mdc-typography--title"},e.name," "),t.i(i.h)("span",{className:"mdc-typography--body2"},e.value||"true/false")),t.i(i.h)("div",{className:"mdc-typography--caption"},e.description)))}),0===e.props.length&&o))})))},n}(i.Component)},Bfdu:function(e){e.exports="import {h, Component} from 'preact';\r\nimport Elevation from 'preact-material-components/Elevation';\r\nimport 'preact-material-components/Elevation/style.css';\r\n\r\nexport default class ElevationPage extends Component {\r\n  render(){\r\n    return (\r\n      <div>\r\n        <Elevation z0={true}>Z0</Elevation>\r\n        <Elevation z1={true}>Z1</Elevation>\r\n        <Elevation z2={true}>Z2</Elevation>\r\n      </div>\r\n    );\r\n  }\r\n}\r\n"},ElH3:function(e){e.exports=function(e){var n={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:"[A-Za-z0-9\\._:-]+",relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/},{begin:/'/,end:/'/},{begin:/[^\s"'=<>`]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist"],case_insensitive:!0,contains:[{className:"meta",begin:"<!DOCTYPE",end:">",relevance:10,contains:[{begin:"\\[",end:"\\]"}]},e.COMMENT("\x3c!--","--\x3e",{relevance:10}),{begin:"<\\!\\[CDATA\\[",end:"\\]\\]>",relevance:10},{begin:/<\?(php)?/,end:/\?>/,subLanguage:"php",contains:[{begin:"/\\*",end:"\\*/",skip:!0}]},{className:"tag",begin:"<style(?=\\s|>|$)",end:">",keywords:{name:"style"},contains:[n],starts:{end:"</style>",returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:"<script(?=\\s|>|$)",end:">",keywords:{name:"script"},contains:[n],starts:{end:"<\/script>",returnEnd:!0,subLanguage:["actionscript","javascript","handlebars","xml"]}},{className:"meta",variants:[{begin:/<\?xml/,end:/\?>/,relevance:10},{begin:/<\?\w+/,end:/\?>/}]},{className:"tag",begin:"</?",end:"/?>",contains:[{className:"name",begin:/[^\/><\s]+/,relevance:0},n]}]}}},F4jb:function(e,n,t){"use strict";function r(e,n){var t={};for(var r in e)n.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}var a=t("KM04"),i=(t.n(a),t("9qb7")),s=t.n(i),o=t("R7gn"),l=t.n(o),c=t("Yr+x"),u=t.n(c),p=t("VSmG"),d=t.n(p),g=t("ElH3"),f=t.n(g),h=t("9IbV"),m=(t.n(h),{javascript:u.a,json:d.a,xml:f.a});Object.keys(m).forEach(function(e){return l.a.registerLanguage(e,m[e])}),n.a=function(e){var n=e.children,i=r(e,["children"]),o=n&&n[0];if(o&&"code"===o.nodeName){var c=o.children[0].replace(/(^\s+|\s+$)/g,""),u=(o.attributes.class&&o.attributes.class).match(/lang-([a-z]+)/)[1],p=l.a.highlightAuto(c,u?[u]:null),d=p.language;return t.i(a.h)("pre",{class:s()("highlight","highlight-"+d,i.class)},t.i(a.h)("code",{class:"hljs lang-"+d,dangerouslySetInnerHTML:{__html:p.value}}))}return t.i(a.h)("pre",i,n)}},Jnuy:function(e,n,t){"use strict";function r(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}t.d(n,"a",function(){return l});var i=t("KM04"),s=(t.n(i),t("lhA9")),o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l=function(e){function n(){var n=r(this,e.call(this));n.componentName="elevation",n._mdcProps=[];for(var t=0;t<25;t++)n._mdcProps.push("z"+t);return n}return a(n,e),n.prototype.materialDom=function(e){var n=this,r="";return e.z&&(r="mdc-elevation--z"+e.z),t.i(i.h)("p",o({className:r},e,{ref:function(e){return n.control=e}}),e.children)},n}(s.a)},R7gn:function(e,n){!function(e){"object"==typeof window&&window||"object"==typeof self&&self;e(n)}(function(e){function n(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function t(e){return e.nodeName.toLowerCase()}function r(e,n){var t=e&&e.exec(n);return t&&0===t.index}function a(e){return M.test(e)}function i(e){var n,t,r,i,s=e.className+" ";if(s+=e.parentNode?e.parentNode.className:"",t=x.exec(s))return _(t[1])?t[1]:"no-highlight";for(s=s.split(/\s+/),n=0,r=s.length;n<r;n++)if(i=s[n],a(i)||_(i))return i}function s(e){var n,t={},r=Array.prototype.slice.call(arguments,1);for(n in e)t[n]=e[n];return r.forEach(function(e){for(n in e)t[n]=e[n]}),t}function o(e){var n=[];return function e(r,a){for(var i=r.firstChild;i;i=i.nextSibling)3===i.nodeType?a+=i.nodeValue.length:1===i.nodeType&&(n.push({event:"start",offset:a,node:i}),a=e(i,a),t(i).match(/br|hr|img|input/)||n.push({event:"stop",offset:a,node:i}));return a}(e,0),n}function l(e,r,a){function i(){return e.length&&r.length?e[0].offset!==r[0].offset?e[0].offset<r[0].offset?e:r:"start"===r[0].event?e:r:e.length?e:r}function s(e){function r(e){return" "+e.nodeName+'="'+n(e.value).replace('"',"&quot;")+'"'}u+="<"+t(e)+N.map.call(e.attributes,r).join("")+">"}function o(e){u+="</"+t(e)+">"}function l(e){("start"===e.event?s:o)(e.node)}for(var c=0,u="",p=[];e.length||r.length;){var d=i();if(u+=n(a.substring(c,d[0].offset)),c=d[0].offset,d===e){p.reverse().forEach(o);do{l(d.splice(0,1)[0]),d=i()}while(d===e&&d.length&&d[0].offset===c);p.reverse().forEach(s)}else"start"===d[0].event?p.push(d[0].node):p.pop(),l(d.splice(0,1)[0])}return u+n(a.substr(c))}function c(e){return e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map(function(n){return s(e,{variants:null},n)})),e.cached_variants||e.endsWithParent&&[s(e)]||[e]}function u(e){function n(e){return e&&e.source||e}function t(t,r){return new RegExp(n(t),"m"+(e.case_insensitive?"i":"")+(r?"g":""))}function r(a,i){if(!a.compiled){if(a.compiled=!0,a.keywords=a.keywords||a.beginKeywords){var s={},o=function(n,t){e.case_insensitive&&(t=t.toLowerCase()),t.split(" ").forEach(function(e){var t=e.split("|");s[t[0]]=[n,t[1]?Number(t[1]):1]})};"string"==typeof a.keywords?o("keyword",a.keywords):O(a.keywords).forEach(function(e){o(e,a.keywords[e])}),a.keywords=s}a.lexemesRe=t(a.lexemes||/\w+/,!0),i&&(a.beginKeywords&&(a.begin="\\b("+a.beginKeywords.split(" ").join("|")+")\\b"),a.begin||(a.begin=/\B|\b/),a.beginRe=t(a.begin),a.end||a.endsWithParent||(a.end=/\B|\b/),a.end&&(a.endRe=t(a.end)),a.terminator_end=n(a.end)||"",a.endsWithParent&&i.terminator_end&&(a.terminator_end+=(a.end?"|":"")+i.terminator_end)),a.illegal&&(a.illegalRe=t(a.illegal)),null==a.relevance&&(a.relevance=1),a.contains||(a.contains=[]),a.contains=Array.prototype.concat.apply([],a.contains.map(function(e){return c("self"===e?a:e)})),a.contains.forEach(function(e){r(e,a)}),a.starts&&r(a.starts,i);var l=a.contains.map(function(e){return e.beginKeywords?"\\.?("+e.begin+")\\.?":e.begin}).concat([a.terminator_end,a.illegal]).map(n).filter(Boolean);a.terminators=l.length?t(l.join("|"),!0):{exec:function(){return null}}}}r(e)}function p(e,t,a,i){function s(e,n){var t,a;for(t=0,a=n.contains.length;t<a;t++)if(r(n.contains[t].beginRe,e))return n.contains[t]}function o(e,n){if(r(e.endRe,n)){for(;e.endsParent&&e.parent;)e=e.parent;return e}if(e.endsWithParent)return o(e.parent,n)}function l(e,n){return!a&&r(n.illegalRe,e)}function c(e,n){var t=v.case_insensitive?n[0].toLowerCase():n[0];return e.keywords.hasOwnProperty(t)&&e.keywords[t]}function g(e,n,t,r){var a=r?"":A.classPrefix,i='<span class="'+a,s=t?"":C;return(i+=e+'">')+n+s}function f(){var e,t,r,a;if(!N.keywords)return n(M);for(a="",t=0,N.lexemesRe.lastIndex=0,r=N.lexemesRe.exec(M);r;)a+=n(M.substring(t,r.index)),e=c(N,r),e?(x+=e[1],a+=g(e[0],n(r[0]))):a+=n(r[0]),t=N.lexemesRe.lastIndex,r=N.lexemesRe.exec(M);return a+n(M.substr(t))}function h(){var e="string"==typeof N.subLanguage;if(e&&!w[N.subLanguage])return n(M);var t=e?p(N.subLanguage,M,!0,O[N.subLanguage]):d(M,N.subLanguage.length?N.subLanguage:void 0);return N.relevance>0&&(x+=t.relevance),e&&(O[N.subLanguage]=t.top),g(t.language,t.value,!1,!0)}function m(){R+=null!=N.subLanguage?h():f(),M=""}function b(e){R+=e.className?g(e.className,"",!0):"",N=Object.create(e,{parent:{value:N}})}function E(e,n){if(M+=e,null==n)return m(),0;var t=s(n,N);if(t)return t.skip?M+=n:(t.excludeBegin&&(M+=n),m(),t.returnBegin||t.excludeBegin||(M=n)),b(t,n),t.returnBegin?0:n.length;var r=o(N,n);if(r){var a=N;a.skip?M+=n:(a.returnEnd||a.excludeEnd||(M+=n),m(),a.excludeEnd&&(M=n));do{N.className&&(R+=C),N.skip||(x+=N.relevance),N=N.parent}while(N!==r.parent);return r.starts&&b(r.starts,""),a.returnEnd?0:n.length}if(l(n,N))throw new Error('Illegal lexeme "'+n+'" for mode "'+(N.className||"<unnamed>")+'"');return M+=n,n.length||1}var v=_(e);if(!v)throw new Error('Unknown language: "'+e+'"');u(v);var y,N=i||v,O={},R="";for(y=N;y!==v;y=y.parent)y.className&&(R=g(y.className,"",!0)+R);var M="",x=0;try{for(var S,T,D=0;;){if(N.terminators.lastIndex=D,!(S=N.terminators.exec(t)))break;T=E(t.substring(D,S.index),S[0]),D=S.index+T}for(E(t.substr(D)),y=N;y.parent;y=y.parent)y.className&&(R+=C);return{relevance:x,value:R,language:e,top:N}}catch(e){if(e.message&&-1!==e.message.indexOf("Illegal"))return{relevance:0,value:n(t)};throw e}}function d(e,t){t=t||A.languages||O(w);var r={relevance:0,value:n(e)},a=r;return t.filter(_).forEach(function(n){var t=p(n,e,!1);t.language=n,t.relevance>a.relevance&&(a=t),t.relevance>r.relevance&&(a=r,r=t)}),a.language&&(r.second_best=a),r}function g(e){return A.tabReplace||A.useBR?e.replace(S,function(e,n){return A.useBR&&"\n"===e?"<br>":A.tabReplace?n.replace(/\t/g,A.tabReplace):""}):e}function f(e,n,t){var r=n?R[n]:t,a=[e.trim()];return e.match(/\bhljs\b/)||a.push("hljs"),-1===e.indexOf(r)&&a.push(r),a.join(" ").trim()}function h(e){var n,t,r,s,c,u=i(e);a(u)||(A.useBR?(n=document.createElementNS("http://www.w3.org/1999/xhtml","div"),n.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):n=e,c=n.textContent,r=u?p(u,c,!0):d(c),t=o(n),t.length&&(s=document.createElementNS("http://www.w3.org/1999/xhtml","div"),s.innerHTML=r.value,r.value=l(t,o(s),c)),r.value=g(r.value),e.innerHTML=r.value,e.className=f(e.className,u,r.language),e.result={language:r.language,re:r.relevance},r.second_best&&(e.second_best={language:r.second_best.language,re:r.second_best.relevance}))}function m(e){A=s(A,e)}function b(){if(!b.called){b.called=!0;var e=document.querySelectorAll("pre code");N.forEach.call(e,h)}}function E(){addEventListener("DOMContentLoaded",b,!1),addEventListener("load",b,!1)}function v(n,t){var r=w[n]=t(e);r.aliases&&r.aliases.forEach(function(e){R[e]=n})}function y(){return O(w)}function _(e){return e=(e||"").toLowerCase(),w[e]||w[R[e]]}var N=[],O=Object.keys,w={},R={},M=/^(no-?highlight|plain|text)$/i,x=/\blang(?:uage)?-([\w-]+)\b/i,S=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,C="</span>",A={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};return e.highlight=p,e.highlightAuto=d,e.fixMarkup=g,e.highlightBlock=h,e.configure=m,e.initHighlighting=b,e.initHighlightingOnLoad=E,e.registerLanguage=v,e.listLanguages=y,e.getLanguage=_,e.inherit=s,e.IDENT_RE="[a-zA-Z]\\w*",e.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",e.NUMBER_RE="\\b\\d+(\\.\\d+)?",e.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BINARY_NUMBER_RE="\\b(0b[01]+)",e.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},e.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},e.COMMENT=function(n,t,r){var a=e.inherit({className:"comment",begin:n,end:t,contains:[]},r||{});return a.contains.push(e.PHRASAL_WORDS_MODE),a.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),a},e.C_LINE_COMMENT_MODE=e.COMMENT("//","$"),e.C_BLOCK_COMMENT_MODE=e.COMMENT("/\\*","\\*/"),e.HASH_COMMENT_MODE=e.COMMENT("#","$"),e.NUMBER_MODE={className:"number",begin:e.NUMBER_RE,relevance:0},e.C_NUMBER_MODE={className:"number",begin:e.C_NUMBER_RE,relevance:0},e.BINARY_NUMBER_MODE={className:"number",begin:e.BINARY_NUMBER_RE,relevance:0},e.CSS_NUMBER_MODE={className:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},e.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[e.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[e.BACKSLASH_ESCAPE]}]},e.TITLE_MODE={className:"title",begin:e.IDENT_RE,relevance:0},e.UNDERSCORE_TITLE_MODE={className:"title",begin:e.UNDERSCORE_IDENT_RE,relevance:0},e.METHOD_GUARD={begin:"\\.\\s*"+e.UNDERSCORE_IDENT_RE,relevance:0},e})},VSmG:function(e){e.exports=function(e){var n={literal:"true false null"},t=[e.QUOTE_STRING_MODE,e.C_NUMBER_MODE],r={end:",",endsWithParent:!0,excludeEnd:!0,contains:t,keywords:n};return t.splice(t.length,0,{begin:"{",end:"}",contains:[{className:"attr",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE],illegal:"\\n"},e.inherit(r,{begin:/:/})],illegal:"\\S"},{begin:"\\[",end:"\\]",contains:[e.inherit(r)],illegal:"\\S"}),{contains:t,keywords:n,illegal:"\\S"}}},"Yr+x":function(e){e.exports=function(e){var n="[A-Za-z$_][0-9A-Za-z$_]*",t={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},r={className:"number",variants:[{begin:"\\b(0[bB][01]+)"},{begin:"\\b(0[oO][0-7]+)"},{begin:e.C_NUMBER_RE}],relevance:0},a={className:"subst",begin:"\\$\\{",end:"\\}",keywords:t,contains:[]},i={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,a]};a.contains=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,i,r,e.REGEXP_MODE];var s=a.contains.concat([e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]);return{aliases:["js","jsx"],keywords:t,contains:[{className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},{className:"meta",begin:/^#!/,end:/$/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,i,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,r,{begin:/[{,]\s*/,relevance:0,contains:[{begin:n+"\\s*:",returnBegin:!0,relevance:0,contains:[{className:"attr",begin:n,relevance:0}]}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{className:"function",begin:"(\\(.*?\\)|"+n+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:n},{begin:/\(\s*\)/},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:t,contains:s}]}]},{begin:/</,end:/(\/\w+|\w+\/)>/,subLanguage:"xml",contains:[{begin:/<\w+\s*\/>/,skip:!0},{begin:/<\w+/,end:/(\/\w+|\w+\/)>/,skip:!0,contains:[{begin:/<\w+\s*\/>/,skip:!0},"self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/\{/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:n}),{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,contains:s}],illegal:/\[|%/},{begin:/\$[(.]/},e.METHOD_GUARD,{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"constructor",end:/\{/,excludeEnd:!0}],illegal:/#(?!!)/}}},o8UG:function(e,n,t){"use strict";function r(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"default",function(){return N});var i=t("KM04"),s=(t.n(i),t("Jnuy")),o=t("B/9r"),l=t("F4jb"),c=t("56Xb"),u=(t.n(c),t("Bfdu")),p=t.n(u),d=t.i(i.h)("div",{className:"mdc-typography--display1"},"Sample code "),g=t.i(i.h)(l.a,null,t.i(i.h)("code",{class:"lang-js"},p.a)),f=t.i(i.h)("div",{className:"mdc-typography--display1"},"Original documentation"),h=t.i(i.h)("div",{className:"mdc-typography--body"},"This component encapsulates ",t.i(i.h)("span",{className:"strong"},"mdc-elevation"),", you can refer to its documentation",t.i(i.h)("a",{href:"https://github.com/material-components/material-components-web/tree/master/packages/mdc-elevation"}," here"),"."),m=t.i(i.h)("div",{className:"mdc-typography--display1"},"Demo "),b=t.i(i.h)(s.a,{z:0},"Z0"),E=t.i(i.h)(s.a,{z:1},"Z1"),v=t.i(i.h)(s.a,{z:2},"Z2"),y=t.i(i.h)(s.a,{z:3},"Z3"),_=t.i(i.h)(s.a,{z:4},"Z4"),N=function(e){function n(){var n=r(this,e.call(this));return n.propsTable=[{component:"Elevation",props:[{name:"z",value:"1 to 25",description:"Add one of z1 to z25=true to get different elevations."}]}],n}return a(n,e),n.prototype.render=function(){return t.i(i.h)("div",{className:"page-elevation"},t.i(i.h)(o.a,{data:this.propsTable}),d,g,f,h,m,b,E,v,y,_)},n}(i.Component)}});
//# sourceMappingURL=16.chunk.5207e.js.map