/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+Math.random()}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)
},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=l.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,n.ajaxSettings),b):tc(n.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Dc)Dc[a]()}),k.cors=!!Fc&&"withCredentials"in Fc,k.ajax=Fc=!!Fc,n.ajaxTransport(function(a){var b;return k.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Ic=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Jc})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Lc=a.jQuery,Mc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Mc),b&&a.jQuery===n&&(a.jQuery=Lc),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
/*!
 * Bootstrap v3.2.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.2.0",d.prototype.close=function(b){function c(){f.detach().trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",c).emulateTransitionEnd(150):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.2.0",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),d[e](null==f[b]?this.options[b]:f[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b).on("keydown.bs.carousel",a.proxy(this.keydown,this)),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.2.0",c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},c.prototype.keydown=function(a){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.to=function(b){var c=this,d=this.getItemIndex(this.$active=this.$element.find(".item.active"));return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=e[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:g});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,f&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(e)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:g});return a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one("bsTransitionEnd",function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger(m)),f&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b);!e&&f.toggle&&"show"==b&&(b=!b),e||d.data("bs.collapse",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};c.VERSION="3.2.0",c.DEFAULTS={toggle:!0},c.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},c.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var c=a.Event("show.bs.collapse");if(this.$element.trigger(c),!c.isDefaultPrevented()){var d=this.$parent&&this.$parent.find("> .panel > .in");if(d&&d.length){var e=d.data("bs.collapse");if(e&&e.transitioning)return;b.call(d,"hide"),e||d.data("bs.collapse",null)}var f=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[f](0),this.transitioning=1;var g=function(){this.$element.removeClass("collapsing").addClass("collapse in")[f](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return g.call(this);var h=a.camelCase(["scroll",f].join("-"));this.$element.one("bsTransitionEnd",a.proxy(g,this)).emulateTransitionEnd(350)[f](this.$element[0][h])}}},c.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},c.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var d=a.fn.collapse;a.fn.collapse=b,a.fn.collapse.Constructor=c,a.fn.collapse.noConflict=function(){return a.fn.collapse=d,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(c){var d,e=a(this),f=e.attr("data-target")||c.preventDefault()||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""),g=a(f),h=g.data("bs.collapse"),i=h?"toggle":e.data(),j=e.attr("data-parent"),k=j&&a(j);h&&h.transitioning||(k&&k.find('[data-toggle="collapse"][data-parent="'+j+'"]').not(e).addClass("collapsed"),e[g.hasClass("in")?"addClass":"removeClass"]("collapsed")),b.call(g,i)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.2.0",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.divider):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f+', [role="menu"], [role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.2.0",c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.$body.addClass("modal-open"),this.setScrollbar(),this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(c.$body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one("bsTransitionEnd",function(){c.$element.trigger("focus").trigger(e)}).emulateTransitionEnd(300):c.$element.trigger("focus").trigger(e)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.$body.removeClass("modal-open"),this.resetScrollbar(),this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var c=this,d=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var e=a.support.transition&&d;if(this.$backdrop=a('<div class="modal-backdrop '+d+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),e&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;e?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(150):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var f=function(){c.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",f).emulateTransitionEnd(150):f()}else b&&b()},c.prototype.checkScrollbar=function(){document.body.clientWidth>=window.innerWidth||(this.scrollbarWidth=this.scrollbarWidth||this.measureScrollbar())},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.scrollbarWidth&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.2.0",c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var c=a.contains(document.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!c)return;var d=this,e=this.tip(),f=this.getUID(this.type);this.setContent(),e.attr("id",f),this.$element.attr("aria-describedby",f),this.options.animation&&e.addClass("fade");var g="function"==typeof this.options.placement?this.options.placement.call(this,e[0],this.$element[0]):this.options.placement,h=/\s?auto?\s?/i,i=h.test(g);i&&(g=g.replace(h,"")||"top"),e.detach().css({top:0,left:0,display:"block"}).addClass(g).data("bs."+this.type,this),this.options.container?e.appendTo(this.options.container):e.insertAfter(this.$element);var j=this.getPosition(),k=e[0].offsetWidth,l=e[0].offsetHeight;if(i){var m=g,n=this.$element.parent(),o=this.getPosition(n);g="bottom"==g&&j.top+j.height+l-o.scroll>o.height?"top":"top"==g&&j.top-o.scroll-l<0?"bottom":"right"==g&&j.right+k>o.width?"left":"left"==g&&j.left-k<o.left?"right":g,e.removeClass(m).addClass(g)}var p=this.getCalculatedOffset(g,j,k,l);this.applyPlacement(p,g);var q=function(){d.$element.trigger("shown.bs."+d.type),d.hoverState=null};a.support.transition&&this.$tip.hasClass("fade")?e.one("bsTransitionEnd",q).emulateTransitionEnd(150):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=k.left?2*k.left-e+i:2*k.top-f+j,m=k.left?"left":"top",n=k.left?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(l,d[0][n],m)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.removeAttr("aria-describedby"),this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one("bsTransitionEnd",b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName;return a.extend({},"function"==typeof c.getBoundingClientRect?c.getBoundingClientRect():null,{scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop(),width:d?a(window).width():b.outerWidth(),height:d?a(window).height():b.outerHeight()},d?{top:0,left:0}:b.offset())},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.2.0",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").empty()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},c.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){var e=a.proxy(this.process,this);this.$body=a("body"),this.$scrollElement=a(a(c).is("body")?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",e),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.2.0",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b="offset",c=0;a.isWindow(this.$scrollElement[0])||(b="position",c=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var d=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+c,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){d.offsets.push(this[0]),d.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.2.0",c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.closest("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},c.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one("bsTransitionEnd",e).emulateTransitionEnd(150):e(),f.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(c){c.preventDefault(),b.call(a(this),"show")})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.2.0",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=a(document).height(),d=this.$target.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=b-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){null!=this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:b-this.$element.height()-h}))}}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},d.offsetBottom&&(d.offset.bottom=d.offsetBottom),d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/**
 * bluebird build version 2.3.6
 * Features enabled: core, race, call_get, generators, map, nodeify, promisify, props, reduce, settle, some, progress, cancel, using, filter, any, each, timers
*/
/**
 * @preserve The MIT License (MIT)
 *
 * Copyright (c) 2014 Petka Antonov
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */
!function(e){"object"==typeof exports?module.exports=e():"function"==typeof define&&define.amd?define(e):"undefined"!=typeof window?window.Promise=e():"undefined"!=typeof global?global.Promise=e():"undefined"!=typeof self&&(self.Promise=e())}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise) {
var SomePromiseArray = Promise._SomePromiseArray;
function Promise$_Any(promises) {
    var ret = new SomePromiseArray(promises);
    var promise = ret.promise();
    if (promise.isRejected()) {
        return promise;
    }
    ret.setHowMany(1);
    ret.setUnwrap();
    ret.init();
    return promise;
}

Promise.any = function Promise$Any(promises) {
    return Promise$_Any(promises);
};

Promise.prototype.any = function Promise$any() {
    return Promise$_Any(this);
};

};

},{}],2:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
var schedule = require("./schedule.js");
var Queue = require("./queue.js");
var errorObj = require("./util.js").errorObj;
var tryCatch1 = require("./util.js").tryCatch1;
var _process = typeof process !== "undefined" ? process : void 0;

function Async() {
    this._isTickUsed = false;
    this._schedule = schedule;
    this._length = 0;
    this._lateBuffer = new Queue(16);
    this._functionBuffer = new Queue(65536);
    var self = this;
    this.consumeFunctionBuffer = function Async$consumeFunctionBuffer() {
        self._consumeFunctionBuffer();
    };
}

Async.prototype.haveItemsQueued = function Async$haveItemsQueued() {
    return this._length > 0;
};

Async.prototype.invokeLater = function Async$invokeLater(fn, receiver, arg) {
    if (_process !== void 0 &&
        _process.domain != null &&
        !fn.domain) {
        fn = _process.domain.bind(fn);
    }
    this._lateBuffer.push(fn, receiver, arg);
    this._queueTick();
};

Async.prototype.invoke = function Async$invoke(fn, receiver, arg) {
    if (_process !== void 0 &&
        _process.domain != null &&
        !fn.domain) {
        fn = _process.domain.bind(fn);
    }
    var functionBuffer = this._functionBuffer;
    functionBuffer.push(fn, receiver, arg);
    this._length = functionBuffer.length();
    this._queueTick();
};

Async.prototype._consumeFunctionBuffer =
function Async$_consumeFunctionBuffer() {
    var functionBuffer = this._functionBuffer;
    while (functionBuffer.length() > 0) {
        var fn = functionBuffer.shift();
        var receiver = functionBuffer.shift();
        var arg = functionBuffer.shift();
        fn.call(receiver, arg);
    }
    this._reset();
    this._consumeLateBuffer();
};

Async.prototype._consumeLateBuffer = function Async$_consumeLateBuffer() {
    var buffer = this._lateBuffer;
    while(buffer.length() > 0) {
        var fn = buffer.shift();
        var receiver = buffer.shift();
        var arg = buffer.shift();
        var res = tryCatch1(fn, receiver, arg);
        if (res === errorObj) {
            this._queueTick();
            if (fn.domain != null) {
                fn.domain.emit("error", res.e);
            } else {
                throw res.e;
            }
        }
    }
};

Async.prototype._queueTick = function Async$_queue() {
    if (!this._isTickUsed) {
        this._schedule(this.consumeFunctionBuffer);
        this._isTickUsed = true;
    }
};

Async.prototype._reset = function Async$_reset() {
    this._isTickUsed = false;
    this._length = 0;
};

module.exports = new Async();

},{"./queue.js":25,"./schedule.js":28,"./util.js":35}],3:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
var Promise = require("./promise.js")();
module.exports = Promise;
},{"./promise.js":20}],4:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
var cr = Object.create;
if (cr) {
    var callerCache = cr(null);
    var getterCache = cr(null);
    callerCache[" size"] = getterCache[" size"] = 0;
}

module.exports = function(Promise) {
var util = require("./util.js");
var canEvaluate = util.canEvaluate;
var isIdentifier = util.isIdentifier;

function makeMethodCaller (methodName) {
    return new Function("obj", "                                             \n\
        'use strict'                                                         \n\
        var len = this.length;                                               \n\
        switch(len) {                                                        \n\
            case 1: return obj.methodName(this[0]);                          \n\
            case 2: return obj.methodName(this[0], this[1]);                 \n\
            case 3: return obj.methodName(this[0], this[1], this[2]);        \n\
            case 0: return obj.methodName();                                 \n\
            default: return obj.methodName.apply(obj, this);                 \n\
        }                                                                    \n\
        ".replace(/methodName/g, methodName));
}

function makeGetter (propertyName) {
    return new Function("obj", "                                             \n\
        'use strict';                                                        \n\
        return obj.propertyName;                                             \n\
        ".replace("propertyName", propertyName));
}

function getCompiled(name, compiler, cache) {
    var ret = cache[name];
    if (typeof ret !== "function") {
        if (!isIdentifier(name)) {
            return null;
        }
        ret = compiler(name);
        cache[name] = ret;
        cache[" size"]++;
        if (cache[" size"] > 512) {
            var keys = Object.keys(cache);
            for (var i = 0; i < 256; ++i) delete cache[keys[i]];
            cache[" size"] = keys.length - 256;
        }
    }
    return ret;
}

function getMethodCaller(name) {
    return getCompiled(name, makeMethodCaller, callerCache);
}

function getGetter(name) {
    return getCompiled(name, makeGetter, getterCache);
}

function caller(obj) {
    return obj[this.pop()].apply(obj, this);
}
Promise.prototype.call = function Promise$call(methodName) {
    var $_len = arguments.length;var args = new Array($_len - 1); for(var $_i = 1; $_i < $_len; ++$_i) {args[$_i - 1] = arguments[$_i];}
    if (canEvaluate) {
        var maybeCaller = getMethodCaller(methodName);
        if (maybeCaller !== null) {
            return this._then(maybeCaller, void 0, void 0, args, void 0);
        }
    }
    args.push(methodName);
    return this._then(caller, void 0, void 0, args, void 0);
};

function namedGetter(obj) {
    return obj[this];
}
function indexedGetter(obj) {
    return obj[this];
}
Promise.prototype.get = function Promise$get(propertyName) {
    var isIndex = (typeof propertyName === "number");
    var getter;
    if (!isIndex) {
        if (canEvaluate) {
            var maybeGetter = getGetter(propertyName);
            getter = maybeGetter !== null ? maybeGetter : namedGetter;
        } else {
            getter = namedGetter;
        }
    } else {
        getter = indexedGetter;
    }
    return this._then(getter, void 0, void 0, propertyName, void 0);
};
};

},{"./util.js":35}],5:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, INTERNAL) {
var errors = require("./errors.js");
var canAttach = errors.canAttach;
var async = require("./async.js");
var CancellationError = errors.CancellationError;

Promise.prototype._cancel = function Promise$_cancel(reason) {
    if (!this.isCancellable()) return this;
    var parent;
    var promiseToReject = this;
    while ((parent = promiseToReject._cancellationParent) !== void 0 &&
        parent.isCancellable()) {
        promiseToReject = parent;
    }
    promiseToReject._attachExtraTrace(reason);
    promiseToReject._rejectUnchecked(reason);
};

Promise.prototype.cancel = function Promise$cancel(reason) {
    if (!this.isCancellable()) return this;
    reason = reason !== void 0
        ? (canAttach(reason) ? reason : new Error(reason + ""))
        : new CancellationError();
    async.invokeLater(this._cancel, this, reason);
    return this;
};

Promise.prototype.cancellable = function Promise$cancellable() {
    if (this._cancellable()) return this;
    this._setCancellable();
    this._cancellationParent = void 0;
    return this;
};

Promise.prototype.uncancellable = function Promise$uncancellable() {
    var ret = new Promise(INTERNAL);
    ret._propagateFrom(this, 2 | 4);
    ret._follow(this);
    ret._unsetCancellable();
    return ret;
};

Promise.prototype.fork =
function Promise$fork(didFulfill, didReject, didProgress) {
    var ret = this._then(didFulfill, didReject, didProgress,
                         void 0, void 0);

    ret._setCancellable();
    ret._cancellationParent = void 0;
    return ret;
};
};

},{"./async.js":2,"./errors.js":10}],6:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function() {
var inherits = require("./util.js").inherits;
var defineProperty = require("./es5.js").defineProperty;

var rignore = new RegExp(
    "\\b(?:[a-zA-Z0-9.]+\\$_\\w+|" +
    "tryCatch(?:1|2|3|4|Apply)|new \\w*PromiseArray|" +
    "\\w*PromiseArray\\.\\w*PromiseArray|" +
    "setTimeout|CatchFilter\\$_\\w+|makeNodePromisified|processImmediate|" +
    "process._tickCallback|nextTick|Async\\$\\w+)\\b"
);

var rtraceline = null;
var formatStack = null;

function formatNonError(obj) {
    var str;
    if (typeof obj === "function") {
        str = "[function " +
            (obj.name || "anonymous") +
            "]";
    } else {
        str = obj.toString();
        var ruselessToString = /\[object [a-zA-Z0-9$_]+\]/;
        if (ruselessToString.test(str)) {
            try {
                var newStr = JSON.stringify(obj);
                str = newStr;
            }
            catch(e) {

            }
        }
        if (str.length === 0) {
            str = "(empty array)";
        }
    }
    return ("(<" + snip(str) + ">, no stack trace)");
}

function snip(str) {
    var maxChars = 41;
    if (str.length < maxChars) {
        return str;
    }
    return str.substr(0, maxChars - 3) + "...";
}

function CapturedTrace(ignoreUntil, isTopLevel) {
    this.captureStackTrace(CapturedTrace, isTopLevel);

}
inherits(CapturedTrace, Error);

CapturedTrace.prototype.captureStackTrace =
function CapturedTrace$captureStackTrace(ignoreUntil, isTopLevel) {
    captureStackTrace(this, ignoreUntil, isTopLevel);
};

CapturedTrace.possiblyUnhandledRejection =
function CapturedTrace$PossiblyUnhandledRejection(reason) {
    if (typeof console === "object") {
        var message;
        if (typeof reason === "object" || typeof reason === "function") {
            var stack = reason.stack;
            message = "Possibly unhandled " + formatStack(stack, reason);
        } else {
            message = "Possibly unhandled " + String(reason);
        }
        if (typeof console.error === "function" ||
            typeof console.error === "object") {
            console.error(message);
        } else if (typeof console.log === "function" ||
            typeof console.log === "object") {
            console.log(message);
        }
    }
};

CapturedTrace.combine = function CapturedTrace$Combine(current, prev) {
    var curLast = current.length - 1;
    for (var i = prev.length - 1; i >= 0; --i) {
        var line = prev[i];
        if (current[curLast] === line) {
            current.pop();
            curLast--;
        } else {
            break;
        }
    }

    current.push("From previous event:");
    var lines = current.concat(prev);

    var ret = [];

    for (var i = 0, len = lines.length; i < len; ++i) {

        if (((rignore.test(lines[i]) && rtraceline.test(lines[i])) ||
            (i > 0 && !rtraceline.test(lines[i])) &&
            lines[i] !== "From previous event:")
       ) {
            continue;
        }
        ret.push(lines[i]);
    }
    return ret;
};

CapturedTrace.protectErrorMessageNewlines = function(stack) {
    for (var i = 0; i < stack.length; ++i) {
        if (rtraceline.test(stack[i])) {
            break;
        }
    }

    if (i <= 1) return;

    var errorMessageLines = [];
    for (var j = 0; j < i; ++j) {
        errorMessageLines.push(stack.shift());
    }
    stack.unshift(errorMessageLines.join("\u0002\u0000\u0001"));
};

CapturedTrace.isSupported = function CapturedTrace$IsSupported() {
    return typeof captureStackTrace === "function";
};

var captureStackTrace = (function stackDetection() {
    if (typeof Error.stackTraceLimit === "number" &&
        typeof Error.captureStackTrace === "function") {
        rtraceline = /^\s*at\s*/;
        formatStack = function(stack, error) {
            if (typeof stack === "string") return stack;

            if (error.name !== void 0 &&
                error.message !== void 0) {
                return error.name + ". " + error.message;
            }
            return formatNonError(error);


        };
        var captureStackTrace = Error.captureStackTrace;
        return function CapturedTrace$_captureStackTrace(
            receiver, ignoreUntil) {
            captureStackTrace(receiver, ignoreUntil);
        };
    }
    var err = new Error();

    if (typeof err.stack === "string" &&
        typeof "".startsWith === "function" &&
        (err.stack.startsWith("stackDetection@")) &&
        stackDetection.name === "stackDetection") {

        defineProperty(Error, "stackTraceLimit", {
            writable: true,
            enumerable: false,
            configurable: false,
            value: 25
        });
        rtraceline = /@/;
        var rline = /[@\n]/;

        formatStack = function(stack, error) {
            if (typeof stack === "string") {
                return (error.name + ". " + error.message + "\n" + stack);
            }

            if (error.name !== void 0 &&
                error.message !== void 0) {
                return error.name + ". " + error.message;
            }
            return formatNonError(error);
        };

        return function captureStackTrace(o) {
            var stack = new Error().stack;
            var split = stack.split(rline);
            var len = split.length;
            var ret = "";
            for (var i = 0; i < len; i += 2) {
                ret += split[i];
                ret += "@";
                ret += split[i + 1];
                ret += "\n";
            }
            o.stack = ret;
        };
    } else {
        formatStack = function(stack, error) {
            if (typeof stack === "string") return stack;

            if ((typeof error === "object" ||
                typeof error === "function") &&
                error.name !== void 0 &&
                error.message !== void 0) {
                return error.name + ". " + error.message;
            }
            return formatNonError(error);
        };

        return null;
    }
})();

return CapturedTrace;
};

},{"./es5.js":12,"./util.js":35}],7:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(NEXT_FILTER) {
var util = require("./util.js");
var errors = require("./errors.js");
var tryCatch1 = util.tryCatch1;
var errorObj = util.errorObj;
var keys = require("./es5.js").keys;
var TypeError = errors.TypeError;

function CatchFilter(instances, callback, promise) {
    this._instances = instances;
    this._callback = callback;
    this._promise = promise;
}

function CatchFilter$_safePredicate(predicate, e) {
    var safeObject = {};
    var retfilter = tryCatch1(predicate, safeObject, e);

    if (retfilter === errorObj) return retfilter;

    var safeKeys = keys(safeObject);
    if (safeKeys.length) {
        errorObj.e = new TypeError(
            "Catch filter must inherit from Error "
          + "or be a simple predicate function");
        return errorObj;
    }
    return retfilter;
}

CatchFilter.prototype.doFilter = function CatchFilter$_doFilter(e) {
    var cb = this._callback;
    var promise = this._promise;
    var boundTo = promise._boundTo;
    for (var i = 0, len = this._instances.length; i < len; ++i) {
        var item = this._instances[i];
        var itemIsErrorType = item === Error ||
            (item != null && item.prototype instanceof Error);

        if (itemIsErrorType && e instanceof item) {
            var ret = tryCatch1(cb, boundTo, e);
            if (ret === errorObj) {
                NEXT_FILTER.e = ret.e;
                return NEXT_FILTER;
            }
            return ret;
        } else if (typeof item === "function" && !itemIsErrorType) {
            var shouldHandle = CatchFilter$_safePredicate(item, e);
            if (shouldHandle === errorObj) {
                var trace = errors.canAttach(errorObj.e)
                    ? errorObj.e
                    : new Error(errorObj.e + "");
                this._promise._attachExtraTrace(trace);
                e = errorObj.e;
                break;
            } else if (shouldHandle) {
                var ret = tryCatch1(cb, boundTo, e);
                if (ret === errorObj) {
                    NEXT_FILTER.e = ret.e;
                    return NEXT_FILTER;
                }
                return ret;
            }
        }
    }
    NEXT_FILTER.e = e;
    return NEXT_FILTER;
};

return CatchFilter;
};

},{"./errors.js":10,"./es5.js":12,"./util.js":35}],8:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
var util = require("./util.js");
var isPrimitive = util.isPrimitive;
var wrapsPrimitiveReceiver = util.wrapsPrimitiveReceiver;

module.exports = function(Promise) {
var returner = function Promise$_returner() {
    return this;
};
var thrower = function Promise$_thrower() {
    throw this;
};

var wrapper = function Promise$_wrapper(value, action) {
    if (action === 1) {
        return function Promise$_thrower() {
            throw value;
        };
    } else if (action === 2) {
        return function Promise$_returner() {
            return value;
        };
    }
};


Promise.prototype["return"] =
Promise.prototype.thenReturn =
function Promise$thenReturn(value) {
    if (wrapsPrimitiveReceiver && isPrimitive(value)) {
        return this._then(
            wrapper(value, 2),
            void 0,
            void 0,
            void 0,
            void 0
       );
    }
    return this._then(returner, void 0, void 0, value, void 0);
};

Promise.prototype["throw"] =
Promise.prototype.thenThrow =
function Promise$thenThrow(reason) {
    if (wrapsPrimitiveReceiver && isPrimitive(reason)) {
        return this._then(
            wrapper(reason, 1),
            void 0,
            void 0,
            void 0,
            void 0
       );
    }
    return this._then(thrower, void 0, void 0, reason, void 0);
};
};

},{"./util.js":35}],9:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, INTERNAL) {
var PromiseReduce = Promise.reduce;

Promise.prototype.each = function Promise$each(fn) {
    return PromiseReduce(this, fn, null, INTERNAL);
};

Promise.each = function Promise$Each(promises, fn) {
    return PromiseReduce(promises, fn, null, INTERNAL);
};
};

},{}],10:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
var Objectfreeze = require("./es5.js").freeze;
var util = require("./util.js");
var inherits = util.inherits;
var notEnumerableProp = util.notEnumerableProp;

function markAsOriginatingFromRejection(e) {
    try {
        notEnumerableProp(e, "isOperational", true);
    }
    catch(ignore) {}
}

function originatesFromRejection(e) {
    if (e == null) return false;
    return ((e instanceof OperationalError) ||
        e["isOperational"] === true);
}

function isError(obj) {
    return obj instanceof Error;
}

function canAttach(obj) {
    return isError(obj);
}

function subError(nameProperty, defaultMessage) {
    function SubError(message) {
        if (!(this instanceof SubError)) return new SubError(message);
        this.message = typeof message === "string" ? message : defaultMessage;
        this.name = nameProperty;
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    }
    inherits(SubError, Error);
    return SubError;
}

var _TypeError, _RangeError;
var CancellationError = subError("CancellationError", "cancellation error");
var TimeoutError = subError("TimeoutError", "timeout error");
var AggregateError = subError("AggregateError", "aggregate error");
try {
    _TypeError = TypeError;
    _RangeError = RangeError;
} catch(e) {
    _TypeError = subError("TypeError", "type error");
    _RangeError = subError("RangeError", "range error");
}

var methods = ("join pop push shift unshift slice filter forEach some " +
    "every map indexOf lastIndexOf reduce reduceRight sort reverse").split(" ");

for (var i = 0; i < methods.length; ++i) {
    if (typeof Array.prototype[methods[i]] === "function") {
        AggregateError.prototype[methods[i]] = Array.prototype[methods[i]];
    }
}

AggregateError.prototype.length = 0;
AggregateError.prototype["isOperational"] = true;
var level = 0;
AggregateError.prototype.toString = function() {
    var indent = Array(level * 4 + 1).join(" ");
    var ret = "\n" + indent + "AggregateError of:" + "\n";
    level++;
    indent = Array(level * 4 + 1).join(" ");
    for (var i = 0; i < this.length; ++i) {
        var str = this[i] === this ? "[Circular AggregateError]" : this[i] + "";
        var lines = str.split("\n");
        for (var j = 0; j < lines.length; ++j) {
            lines[j] = indent + lines[j];
        }
        str = lines.join("\n");
        ret += str + "\n";
    }
    level--;
    return ret;
};

function OperationalError(message) {
    this.name = "OperationalError";
    this.message = message;
    this.cause = message;
    this["isOperational"] = true;

    if (message instanceof Error) {
        this.message = message.message;
        this.stack = message.stack;
    } else if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
    }

}
inherits(OperationalError, Error);

var key = "__BluebirdErrorTypes__";
var errorTypes = Error[key];
if (!errorTypes) {
    errorTypes = Objectfreeze({
        CancellationError: CancellationError,
        TimeoutError: TimeoutError,
        OperationalError: OperationalError,
        RejectionError: OperationalError,
        AggregateError: AggregateError
    });
    notEnumerableProp(Error, key, errorTypes);
}

module.exports = {
    Error: Error,
    TypeError: _TypeError,
    RangeError: _RangeError,
    CancellationError: errorTypes.CancellationError,
    OperationalError: errorTypes.OperationalError,
    TimeoutError: errorTypes.TimeoutError,
    AggregateError: errorTypes.AggregateError,
    originatesFromRejection: originatesFromRejection,
    markAsOriginatingFromRejection: markAsOriginatingFromRejection,
    canAttach: canAttach
};

},{"./es5.js":12,"./util.js":35}],11:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise) {
var TypeError = require('./errors.js').TypeError;

function apiRejection(msg) {
    var error = new TypeError(msg);
    var ret = Promise.rejected(error);
    var parent = ret._peekContext();
    if (parent != null) {
        parent._attachExtraTrace(error);
    }
    return ret;
}

return apiRejection;
};

},{"./errors.js":10}],12:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
var isES5 = (function(){
    "use strict";
    return this === void 0;
})();

if (isES5) {
    module.exports = {
        freeze: Object.freeze,
        defineProperty: Object.defineProperty,
        keys: Object.keys,
        getPrototypeOf: Object.getPrototypeOf,
        isArray: Array.isArray,
        isES5: isES5
    };
} else {
    var has = {}.hasOwnProperty;
    var str = {}.toString;
    var proto = {}.constructor.prototype;

    var ObjectKeys = function ObjectKeys(o) {
        var ret = [];
        for (var key in o) {
            if (has.call(o, key)) {
                ret.push(key);
            }
        }
        return ret;
    }

    var ObjectDefineProperty = function ObjectDefineProperty(o, key, desc) {
        o[key] = desc.value;
        return o;
    }

    var ObjectFreeze = function ObjectFreeze(obj) {
        return obj;
    }

    var ObjectGetPrototypeOf = function ObjectGetPrototypeOf(obj) {
        try {
            return Object(obj).constructor.prototype;
        }
        catch (e) {
            return proto;
        }
    }

    var ArrayIsArray = function ArrayIsArray(obj) {
        try {
            return str.call(obj) === "[object Array]";
        }
        catch(e) {
            return false;
        }
    }

    module.exports = {
        isArray: ArrayIsArray,
        keys: ObjectKeys,
        defineProperty: ObjectDefineProperty,
        freeze: ObjectFreeze,
        getPrototypeOf: ObjectGetPrototypeOf,
        isES5: isES5
    };
}

},{}],13:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, INTERNAL) {
var PromiseMap = Promise.map;

Promise.prototype.filter = function Promise$filter(fn, options) {
    return PromiseMap(this, fn, options, INTERNAL);
};

Promise.filter = function Promise$Filter(promises, fn, options) {
    return PromiseMap(promises, fn, options, INTERNAL);
};
};

},{}],14:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, NEXT_FILTER, cast) {
var util = require("./util.js");
var wrapsPrimitiveReceiver = util.wrapsPrimitiveReceiver;
var isPrimitive = util.isPrimitive;
var thrower = util.thrower;

function returnThis() {
    return this;
}
function throwThis() {
    throw this;
}
function return$(r) {
    return function Promise$_returner() {
        return r;
    };
}
function throw$(r) {
    return function Promise$_thrower() {
        throw r;
    };
}
function promisedFinally(ret, reasonOrValue, isFulfilled) {
    var then;
    if (wrapsPrimitiveReceiver && isPrimitive(reasonOrValue)) {
        then = isFulfilled ? return$(reasonOrValue) : throw$(reasonOrValue);
    } else {
        then = isFulfilled ? returnThis : throwThis;
    }
    return ret._then(then, thrower, void 0, reasonOrValue, void 0);
}

function finallyHandler(reasonOrValue) {
    var promise = this.promise;
    var handler = this.handler;

    var ret = promise._isBound()
                    ? handler.call(promise._boundTo)
                    : handler();

    if (ret !== void 0) {
        var maybePromise = cast(ret, void 0);
        if (maybePromise instanceof Promise) {
            return promisedFinally(maybePromise, reasonOrValue,
                                    promise.isFulfilled());
        }
    }

    if (promise.isRejected()) {
        NEXT_FILTER.e = reasonOrValue;
        return NEXT_FILTER;
    } else {
        return reasonOrValue;
    }
}

function tapHandler(value) {
    var promise = this.promise;
    var handler = this.handler;

    var ret = promise._isBound()
                    ? handler.call(promise._boundTo, value)
                    : handler(value);

    if (ret !== void 0) {
        var maybePromise = cast(ret, void 0);
        if (maybePromise instanceof Promise) {
            return promisedFinally(maybePromise, value, true);
        }
    }
    return value;
}

Promise.prototype._passThroughHandler =
function Promise$_passThroughHandler(handler, isFinally) {
    if (typeof handler !== "function") return this.then();

    var promiseAndHandler = {
        promise: this,
        handler: handler
    };

    return this._then(
            isFinally ? finallyHandler : tapHandler,
            isFinally ? finallyHandler : void 0, void 0,
            promiseAndHandler, void 0);
};

Promise.prototype.lastly =
Promise.prototype["finally"] = function Promise$finally(handler) {
    return this._passThroughHandler(handler, true);
};

Promise.prototype.tap = function Promise$tap(handler) {
    return this._passThroughHandler(handler, false);
};
};

},{"./util.js":35}],15:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, apiRejection, INTERNAL, cast) {
var errors = require("./errors.js");
var TypeError = errors.TypeError;
var deprecated = require("./util.js").deprecated;
var util = require("./util.js");
var errorObj = util.errorObj;
var tryCatch1 = util.tryCatch1;
var yieldHandlers = [];

function promiseFromYieldHandler(value, yieldHandlers) {
    var _errorObj = errorObj;
    var _Promise = Promise;
    var len = yieldHandlers.length;
    for (var i = 0; i < len; ++i) {
        var result = tryCatch1(yieldHandlers[i], void 0, value);
        if (result === _errorObj) {
            return _Promise.reject(_errorObj.e);
        }
        var maybePromise = cast(result, promiseFromYieldHandler);
        if (maybePromise instanceof _Promise) return maybePromise;
    }
    return null;
}

function PromiseSpawn(generatorFunction, receiver, yieldHandler) {
    var promise = this._promise = new Promise(INTERNAL);
    promise._setTrace(void 0);
    this._generatorFunction = generatorFunction;
    this._receiver = receiver;
    this._generator = void 0;
    this._yieldHandlers = typeof yieldHandler === "function"
        ? [yieldHandler].concat(yieldHandlers)
        : yieldHandlers;
}

PromiseSpawn.prototype.promise = function PromiseSpawn$promise() {
    return this._promise;
};

PromiseSpawn.prototype._run = function PromiseSpawn$_run() {
    this._generator = this._generatorFunction.call(this._receiver);
    this._receiver =
        this._generatorFunction = void 0;
    this._next(void 0);
};

PromiseSpawn.prototype._continue = function PromiseSpawn$_continue(result) {
    if (result === errorObj) {
        this._generator = void 0;
        var trace = errors.canAttach(result.e)
            ? result.e : new Error(result.e + "");
        this._promise._attachExtraTrace(trace);
        this._promise._reject(result.e, trace);
        return;
    }

    var value = result.value;
    if (result.done === true) {
        this._generator = void 0;
        if (!this._promise._tryFollow(value)) {
            this._promise._fulfill(value);
        }
    } else {
        var maybePromise = cast(value, void 0);
        if (!(maybePromise instanceof Promise)) {
            maybePromise =
                promiseFromYieldHandler(maybePromise, this._yieldHandlers);
            if (maybePromise === null) {
                this._throw(new TypeError("A value was yielded that could not be treated as a promise"));
                return;
            }
        }
        maybePromise._then(
            this._next,
            this._throw,
            void 0,
            this,
            null
       );
    }
};

PromiseSpawn.prototype._throw = function PromiseSpawn$_throw(reason) {
    if (errors.canAttach(reason))
        this._promise._attachExtraTrace(reason);
    this._continue(
        tryCatch1(this._generator["throw"], this._generator, reason)
   );
};

PromiseSpawn.prototype._next = function PromiseSpawn$_next(value) {
    this._continue(
        tryCatch1(this._generator.next, this._generator, value)
   );
};

Promise.coroutine =
function Promise$Coroutine(generatorFunction, options) {
    if (typeof generatorFunction !== "function") {
        throw new TypeError("generatorFunction must be a function");
    }
    var yieldHandler = Object(options).yieldHandler;
    var PromiseSpawn$ = PromiseSpawn;
    return function () {
        var generator = generatorFunction.apply(this, arguments);
        var spawn = new PromiseSpawn$(void 0, void 0, yieldHandler);
        spawn._generator = generator;
        spawn._next(void 0);
        return spawn.promise();
    };
};

Promise.coroutine.addYieldHandler = function(fn) {
    if (typeof fn !== "function") throw new TypeError("fn must be a function");
    yieldHandlers.push(fn);
};

Promise.spawn = function Promise$Spawn(generatorFunction) {
    deprecated("Promise.spawn is deprecated. Use Promise.coroutine instead.");
    if (typeof generatorFunction !== "function") {
        return apiRejection("generatorFunction must be a function");
    }
    var spawn = new PromiseSpawn(generatorFunction, this);
    var ret = spawn.promise();
    spawn._run(Promise.spawn);
    return ret;
};
};

},{"./errors.js":10,"./util.js":35}],16:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports =
function(Promise, PromiseArray, cast, INTERNAL) {
var util = require("./util.js");
var canEvaluate = util.canEvaluate;
var tryCatch1 = util.tryCatch1;
var errorObj = util.errorObj;


if (canEvaluate) {
    var thenCallback = function(i) {
        return new Function("value", "holder", "                             \n\
            'use strict';                                                    \n\
            holder.pIndex = value;                                           \n\
            holder.checkFulfillment(this);                                   \n\
            ".replace(/Index/g, i));
    };

    var caller = function(count) {
        var values = [];
        for (var i = 1; i <= count; ++i) values.push("holder.p" + i);
        return new Function("holder", "                                      \n\
            'use strict';                                                    \n\
            var callback = holder.fn;                                        \n\
            return callback(values);                                         \n\
            ".replace(/values/g, values.join(", ")));
    };
    var thenCallbacks = [];
    var callers = [void 0];
    for (var i = 1; i <= 5; ++i) {
        thenCallbacks.push(thenCallback(i));
        callers.push(caller(i));
    }

    var Holder = function(total, fn) {
        this.p1 = this.p2 = this.p3 = this.p4 = this.p5 = null;
        this.fn = fn;
        this.total = total;
        this.now = 0;
    };

    Holder.prototype.callers = callers;
    Holder.prototype.checkFulfillment = function(promise) {
        var now = this.now;
        now++;
        var total = this.total;
        if (now >= total) {
            var handler = this.callers[total];
            var ret = tryCatch1(handler, void 0, this);
            if (ret === errorObj) {
                promise._rejectUnchecked(ret.e);
            } else if (!promise._tryFollow(ret)) {
                promise._fulfillUnchecked(ret);
            }
        } else {
            this.now = now;
        }
    };
}




Promise.join = function Promise$Join() {
    var last = arguments.length - 1;
    var fn;
    if (last > 0 && typeof arguments[last] === "function") {
        fn = arguments[last];
        if (last < 6 && canEvaluate) {
            var ret = new Promise(INTERNAL);
            ret._setTrace(void 0);
            var holder = new Holder(last, fn);
            var reject = ret._reject;
            var callbacks = thenCallbacks;
            for (var i = 0; i < last; ++i) {
                var maybePromise = cast(arguments[i], void 0);
                if (maybePromise instanceof Promise) {
                    if (maybePromise.isPending()) {
                        maybePromise._then(callbacks[i], reject,
                                           void 0, ret, holder);
                    } else if (maybePromise.isFulfilled()) {
                        callbacks[i].call(ret,
                                          maybePromise._settledValue, holder);
                    } else {
                        ret._reject(maybePromise._settledValue);
                        maybePromise._unsetRejectionIsUnhandled();
                    }
                } else {
                    callbacks[i].call(ret, maybePromise, holder);
                }
            }
            return ret;
        }
    }
    var $_len = arguments.length;var args = new Array($_len); for(var $_i = 0; $_i < $_len; ++$_i) {args[$_i] = arguments[$_i];}
    var ret = new PromiseArray(args).promise();
    return fn !== void 0 ? ret.spread(fn) : ret;
};

};

},{"./util.js":35}],17:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, PromiseArray, apiRejection, cast, INTERNAL) {
var util = require("./util.js");
var tryCatch3 = util.tryCatch3;
var errorObj = util.errorObj;
var PENDING = {};
var EMPTY_ARRAY = [];

function MappingPromiseArray(promises, fn, limit, _filter) {
    this.constructor$(promises);
    this._callback = fn;
    this._preservedValues = _filter === INTERNAL
        ? new Array(this.length())
        : null;
    this._limit = limit;
    this._inFlight = 0;
    this._queue = limit >= 1 ? [] : EMPTY_ARRAY;
    this._init$(void 0, -2);
}
util.inherits(MappingPromiseArray, PromiseArray);

MappingPromiseArray.prototype._init = function MappingPromiseArray$_init() {};

MappingPromiseArray.prototype._promiseFulfilled =
function MappingPromiseArray$_promiseFulfilled(value, index) {
    var values = this._values;
    if (values === null) return;

    var length = this.length();
    var preservedValues = this._preservedValues;
    var limit = this._limit;
    if (values[index] === PENDING) {
        values[index] = value;
        if (limit >= 1) {
            this._inFlight--;
            this._drainQueue();
            if (this._isResolved()) return;
        }
    } else {
        if (limit >= 1 && this._inFlight >= limit) {
            values[index] = value;
            this._queue.push(index);
            return;
        }
        if (preservedValues !== null) preservedValues[index] = value;

        var callback = this._callback;
        var receiver = this._promise._boundTo;
        var ret = tryCatch3(callback, receiver, value, index, length);
        if (ret === errorObj) return this._reject(ret.e);

        var maybePromise = cast(ret, void 0);
        if (maybePromise instanceof Promise) {
            if (maybePromise.isPending()) {
                if (limit >= 1) this._inFlight++;
                values[index] = PENDING;
                return maybePromise._proxyPromiseArray(this, index);
            } else if (maybePromise.isFulfilled()) {
                ret = maybePromise.value();
            } else {
                maybePromise._unsetRejectionIsUnhandled();
                return this._reject(maybePromise.reason());
            }
        }
        values[index] = ret;
    }
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= length) {
        if (preservedValues !== null) {
            this._filter(values, preservedValues);
        } else {
            this._resolve(values);
        }

    }
};

MappingPromiseArray.prototype._drainQueue =
function MappingPromiseArray$_drainQueue() {
    var queue = this._queue;
    var limit = this._limit;
    var values = this._values;
    while (queue.length > 0 && this._inFlight < limit) {
        var index = queue.pop();
        this._promiseFulfilled(values[index], index);
    }
};

MappingPromiseArray.prototype._filter =
function MappingPromiseArray$_filter(booleans, values) {
    var len = values.length;
    var ret = new Array(len);
    var j = 0;
    for (var i = 0; i < len; ++i) {
        if (booleans[i]) ret[j++] = values[i];
    }
    ret.length = j;
    this._resolve(ret);
};

MappingPromiseArray.prototype.preservedValues =
function MappingPromiseArray$preserveValues() {
    return this._preservedValues;
};

function map(promises, fn, options, _filter) {
    var limit = typeof options === "object" && options !== null
        ? options.concurrency
        : 0;
    limit = typeof limit === "number" &&
        isFinite(limit) && limit >= 1 ? limit : 0;
    return new MappingPromiseArray(promises, fn, limit, _filter);
}

Promise.prototype.map = function Promise$map(fn, options) {
    if (typeof fn !== "function") return apiRejection("fn must be a function");

    return map(this, fn, options, null).promise();
};

Promise.map = function Promise$Map(promises, fn, options, _filter) {
    if (typeof fn !== "function") return apiRejection("fn must be a function");
    return map(promises, fn, options, _filter).promise();
};


};

},{"./util.js":35}],18:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise) {
var util = require("./util.js");
var async = require("./async.js");
var tryCatch2 = util.tryCatch2;
var tryCatch1 = util.tryCatch1;
var errorObj = util.errorObj;

function thrower(r) {
    throw r;
}

function Promise$_spreadAdapter(val, receiver) {
    if (!util.isArray(val)) return Promise$_successAdapter(val, receiver);
    var ret = util.tryCatchApply(this, [null].concat(val), receiver);
    if (ret === errorObj) {
        async.invokeLater(thrower, void 0, ret.e);
    }
}

function Promise$_successAdapter(val, receiver) {
    var nodeback = this;
    var ret = val === void 0
        ? tryCatch1(nodeback, receiver, null)
        : tryCatch2(nodeback, receiver, null, val);
    if (ret === errorObj) {
        async.invokeLater(thrower, void 0, ret.e);
    }
}
function Promise$_errorAdapter(reason, receiver) {
    var nodeback = this;
    var ret = tryCatch1(nodeback, receiver, reason);
    if (ret === errorObj) {
        async.invokeLater(thrower, void 0, ret.e);
    }
}

Promise.prototype.nodeify = function Promise$nodeify(nodeback, options) {
    if (typeof nodeback == "function") {
        var adapter = Promise$_successAdapter;
        if (options !== void 0 && Object(options).spread) {
            adapter = Promise$_spreadAdapter;
        }
        this._then(
            adapter,
            Promise$_errorAdapter,
            void 0,
            nodeback,
            this._boundTo
        );
    }
    return this;
};
};

},{"./async.js":2,"./util.js":35}],19:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, PromiseArray) {
var util = require("./util.js");
var async = require("./async.js");
var errors = require("./errors.js");
var tryCatch1 = util.tryCatch1;
var errorObj = util.errorObj;

Promise.prototype.progressed = function Promise$progressed(handler) {
    return this._then(void 0, void 0, handler, void 0, void 0);
};

Promise.prototype._progress = function Promise$_progress(progressValue) {
    if (this._isFollowingOrFulfilledOrRejected()) return;
    this._progressUnchecked(progressValue);

};

Promise.prototype._clearFirstHandlerData$Base =
Promise.prototype._clearFirstHandlerData;
Promise.prototype._clearFirstHandlerData =
function Promise$_clearFirstHandlerData() {
    this._clearFirstHandlerData$Base();
    this._progressHandler0 = void 0;
};

Promise.prototype._progressHandlerAt =
function Promise$_progressHandlerAt(index) {
    return index === 0
        ? this._progressHandler0
        : this[(index << 2) + index - 5 + 2];
};

Promise.prototype._doProgressWith =
function Promise$_doProgressWith(progression) {
    var progressValue = progression.value;
    var handler = progression.handler;
    var promise = progression.promise;
    var receiver = progression.receiver;

    var ret = tryCatch1(handler, receiver, progressValue);
    if (ret === errorObj) {
        if (ret.e != null &&
            ret.e.name !== "StopProgressPropagation") {
            var trace = errors.canAttach(ret.e)
                ? ret.e : new Error(ret.e + "");
            promise._attachExtraTrace(trace);
            promise._progress(ret.e);
        }
    } else if (ret instanceof Promise) {
        ret._then(promise._progress, null, null, promise, void 0);
    } else {
        promise._progress(ret);
    }
};


Promise.prototype._progressUnchecked =
function Promise$_progressUnchecked(progressValue) {
    if (!this.isPending()) return;
    var len = this._length();
    var progress = this._progress;
    for (var i = 0; i < len; i++) {
        var handler = this._progressHandlerAt(i);
        var promise = this._promiseAt(i);
        if (!(promise instanceof Promise)) {
            var receiver = this._receiverAt(i);
            if (typeof handler === "function") {
                handler.call(receiver, progressValue, promise);
            } else if (receiver instanceof Promise && receiver._isProxied()) {
                receiver._progressUnchecked(progressValue);
            } else if (receiver instanceof PromiseArray) {
                receiver._promiseProgressed(progressValue, promise);
            }
            continue;
        }

        if (typeof handler === "function") {
            async.invoke(this._doProgressWith, this, {
                handler: handler,
                promise: promise,
                receiver: this._receiverAt(i),
                value: progressValue
            });
        } else {
            async.invoke(progress, promise, progressValue);
        }
    }
};
};

},{"./async.js":2,"./errors.js":10,"./util.js":35}],20:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
var old;
if (typeof Promise !== "undefined") old = Promise;
function noConflict(bluebird) {
    try { if (Promise === bluebird) Promise = old; }
    catch (e) {}
    return bluebird;
}
module.exports = function() {
var util = require("./util.js");
var async = require("./async.js");
var errors = require("./errors.js");

var INTERNAL = function(){};
var APPLY = {};
var NEXT_FILTER = {e: null};

var cast = require("./thenables.js")(Promise, INTERNAL);
var PromiseArray = require("./promise_array.js")(Promise, INTERNAL, cast);
var CapturedTrace = require("./captured_trace.js")();
var CatchFilter = require("./catch_filter.js")(NEXT_FILTER);
var PromiseResolver = require("./promise_resolver.js");

var isArray = util.isArray;

var errorObj = util.errorObj;
var tryCatch1 = util.tryCatch1;
var tryCatch2 = util.tryCatch2;
var tryCatchApply = util.tryCatchApply;
var RangeError = errors.RangeError;
var TypeError = errors.TypeError;
var CancellationError = errors.CancellationError;
var TimeoutError = errors.TimeoutError;
var OperationalError = errors.OperationalError;
var originatesFromRejection = errors.originatesFromRejection;
var markAsOriginatingFromRejection = errors.markAsOriginatingFromRejection;
var canAttach = errors.canAttach;
var thrower = util.thrower;
var apiRejection = require("./errors_api_rejection")(Promise);


var makeSelfResolutionError = function Promise$_makeSelfResolutionError() {
    return new TypeError("circular promise resolution chain");
};

function Promise(resolver) {
    if (typeof resolver !== "function") {
        throw new TypeError("the promise constructor requires a resolver function");
    }
    if (this.constructor !== Promise) {
        throw new TypeError("the promise constructor cannot be invoked directly");
    }
    this._bitField = 0;
    this._fulfillmentHandler0 = void 0;
    this._rejectionHandler0 = void 0;
    this._promise0 = void 0;
    this._receiver0 = void 0;
    this._settledValue = void 0;
    this._boundTo = void 0;
    if (resolver !== INTERNAL) this._resolveFromResolver(resolver);
}

function returnFirstElement(elements) {
    return elements[0];
}

Promise.prototype.bind = function Promise$bind(thisArg) {
    var maybePromise = cast(thisArg, void 0);
    var ret = new Promise(INTERNAL);
    if (maybePromise instanceof Promise) {
        var binder = maybePromise.then(function(thisArg) {
            ret._setBoundTo(thisArg);
        });
        var p = Promise.all([this, binder]).then(returnFirstElement);
        ret._follow(p);
    } else {
        ret._follow(this);
        ret._setBoundTo(thisArg);
    }
    ret._propagateFrom(this, 2 | 1);
    return ret;
};

Promise.prototype.toString = function Promise$toString() {
    return "[object Promise]";
};

Promise.prototype.caught = Promise.prototype["catch"] =
function Promise$catch(fn) {
    var len = arguments.length;
    if (len > 1) {
        var catchInstances = new Array(len - 1),
            j = 0, i;
        for (i = 0; i < len - 1; ++i) {
            var item = arguments[i];
            if (typeof item === "function") {
                catchInstances[j++] = item;
            } else {
                var catchFilterTypeError =
                    new TypeError(
                        "A catch filter must be an error constructor "
                        + "or a filter function");

                this._attachExtraTrace(catchFilterTypeError);
                return Promise.reject(catchFilterTypeError);
            }
        }
        catchInstances.length = j;
        fn = arguments[i];

        this._resetTrace();
        var catchFilter = new CatchFilter(catchInstances, fn, this);
        return this._then(void 0, catchFilter.doFilter, void 0,
            catchFilter, void 0);
    }
    return this._then(void 0, fn, void 0, void 0, void 0);
};

function reflect() {
    return new Promise.PromiseInspection(this);
}

Promise.prototype.reflect = function Promise$reflect() {
    return this._then(reflect, reflect, void 0, this, void 0);
};

Promise.prototype.then =
function Promise$then(didFulfill, didReject, didProgress) {
    return this._then(didFulfill, didReject, didProgress,
        void 0, void 0);
};


Promise.prototype.done =
function Promise$done(didFulfill, didReject, didProgress) {
    var promise = this._then(didFulfill, didReject, didProgress,
        void 0, void 0);
    promise._setIsFinal();
};

Promise.prototype.spread = function Promise$spread(didFulfill, didReject) {
    return this._then(didFulfill, didReject, void 0,
        APPLY, void 0);
};

Promise.prototype.isCancellable = function Promise$isCancellable() {
    return !this.isResolved() &&
        this._cancellable();
};

Promise.prototype.toJSON = function Promise$toJSON() {
    var ret = {
        isFulfilled: false,
        isRejected: false,
        fulfillmentValue: void 0,
        rejectionReason: void 0
    };
    if (this.isFulfilled()) {
        ret.fulfillmentValue = this._settledValue;
        ret.isFulfilled = true;
    } else if (this.isRejected()) {
        ret.rejectionReason = this._settledValue;
        ret.isRejected = true;
    }
    return ret;
};

Promise.prototype.all = function Promise$all() {
    return new PromiseArray(this).promise();
};


Promise.is = function Promise$Is(val) {
    return val instanceof Promise;
};

Promise.all = function Promise$All(promises) {
    return new PromiseArray(promises).promise();
};

Promise.prototype.error = function Promise$_error(fn) {
    return this.caught(originatesFromRejection, fn);
};

Promise.prototype._resolveFromSyncValue =
function Promise$_resolveFromSyncValue(value) {
    if (value === errorObj) {
        this._cleanValues();
        this._setRejected();
        this._settledValue = value.e;
        this._ensurePossibleRejectionHandled();
    } else {
        var maybePromise = cast(value, void 0);
        if (maybePromise instanceof Promise) {
            this._follow(maybePromise);
        } else {
            this._cleanValues();
            this._setFulfilled();
            this._settledValue = value;
        }
    }
};

Promise.method = function Promise$_Method(fn) {
    if (typeof fn !== "function") {
        throw new TypeError("fn must be a function");
    }
    return function Promise$_method() {
        var value;
        switch(arguments.length) {
        case 0: value = tryCatch1(fn, this, void 0); break;
        case 1: value = tryCatch1(fn, this, arguments[0]); break;
        case 2: value = tryCatch2(fn, this, arguments[0], arguments[1]); break;
        default:
            var $_len = arguments.length;var args = new Array($_len); for(var $_i = 0; $_i < $_len; ++$_i) {args[$_i] = arguments[$_i];}
            value = tryCatchApply(fn, args, this); break;
        }
        var ret = new Promise(INTERNAL);
        ret._setTrace(void 0);
        ret._resolveFromSyncValue(value);
        return ret;
    };
};

Promise.attempt = Promise["try"] = function Promise$_Try(fn, args, ctx) {
    if (typeof fn !== "function") {
        return apiRejection("fn must be a function");
    }
    var value = isArray(args)
        ? tryCatchApply(fn, args, ctx)
        : tryCatch1(fn, ctx, args);

    var ret = new Promise(INTERNAL);
    ret._setTrace(void 0);
    ret._resolveFromSyncValue(value);
    return ret;
};

Promise.defer = Promise.pending = function Promise$Defer() {
    var promise = new Promise(INTERNAL);
    promise._setTrace(void 0);
    return new PromiseResolver(promise);
};

Promise.bind = function Promise$Bind(thisArg) {
    var maybePromise = cast(thisArg, void 0);
    var ret = new Promise(INTERNAL);
    ret._setTrace(void 0);

    if (maybePromise instanceof Promise) {
        var p = maybePromise.then(function(thisArg) {
            ret._setBoundTo(thisArg);
        });
        ret._follow(p);
    } else {
        ret._setBoundTo(thisArg);
        ret._setFulfilled();
    }
    return ret;
};

Promise.cast = function Promise$_Cast(obj) {
    var ret = cast(obj, void 0);
    if (!(ret instanceof Promise)) {
        var val = ret;
        ret = new Promise(INTERNAL);
        ret._setTrace(void 0);
        ret._setFulfilled();
        ret._cleanValues();
        ret._settledValue = val;
    }
    return ret;
};

Promise.resolve = Promise.fulfilled = Promise.cast;

Promise.reject = Promise.rejected = function Promise$Reject(reason) {
    var ret = new Promise(INTERNAL);
    ret._setTrace(void 0);
    markAsOriginatingFromRejection(reason);
    ret._cleanValues();
    ret._setRejected();
    ret._settledValue = reason;
    if (!canAttach(reason)) {
        var trace = new Error(reason + "");
        ret._setCarriedStackTrace(trace);
    }
    ret._ensurePossibleRejectionHandled();
    return ret;
};

Promise.onPossiblyUnhandledRejection =
function Promise$OnPossiblyUnhandledRejection(fn) {
        CapturedTrace.possiblyUnhandledRejection = typeof fn === "function"
                                                    ? fn : void 0;
};

var unhandledRejectionHandled;
Promise.onUnhandledRejectionHandled =
function Promise$onUnhandledRejectionHandled(fn) {
    unhandledRejectionHandled = typeof fn === "function" ? fn : void 0;
};

var debugging = false || !!(
    typeof process !== "undefined" &&
    typeof process.execPath === "string" &&
    typeof process.env === "object" &&
    (process.env["BLUEBIRD_DEBUG"] ||
        process.env["NODE_ENV"] === "development")
);


Promise.longStackTraces = function Promise$LongStackTraces() {
    if (async.haveItemsQueued() &&
        debugging === false
   ) {
        throw new Error("cannot enable long stack traces after promises have been created");
    }
    debugging = CapturedTrace.isSupported();
};

Promise.hasLongStackTraces = function Promise$HasLongStackTraces() {
    return debugging && CapturedTrace.isSupported();
};

Promise.prototype._then =
function Promise$_then(
    didFulfill,
    didReject,
    didProgress,
    receiver,
    internalData
) {
    var haveInternalData = internalData !== void 0;
    var ret = haveInternalData ? internalData : new Promise(INTERNAL);

    if (!haveInternalData) {
        if (debugging) {
            var haveSameContext = this._peekContext() === this._traceParent;
            ret._traceParent = haveSameContext ? this._traceParent : this;
        }
        ret._propagateFrom(this, 7);
    }

    var callbackIndex =
        this._addCallbacks(didFulfill, didReject, didProgress, ret, receiver);

    if (this.isResolved()) {
        async.invoke(this._queueSettleAt, this, callbackIndex);
    }

    return ret;
};

Promise.prototype._length = function Promise$_length() {
    return this._bitField & 262143;
};

Promise.prototype._isFollowingOrFulfilledOrRejected =
function Promise$_isFollowingOrFulfilledOrRejected() {
    return (this._bitField & 939524096) > 0;
};

Promise.prototype._isFollowing = function Promise$_isFollowing() {
    return (this._bitField & 536870912) === 536870912;
};

Promise.prototype._setLength = function Promise$_setLength(len) {
    this._bitField = (this._bitField & -262144) |
        (len & 262143);
};

Promise.prototype._setFulfilled = function Promise$_setFulfilled() {
    this._bitField = this._bitField | 268435456;
};

Promise.prototype._setRejected = function Promise$_setRejected() {
    this._bitField = this._bitField | 134217728;
};

Promise.prototype._setFollowing = function Promise$_setFollowing() {
    this._bitField = this._bitField | 536870912;
};

Promise.prototype._setIsFinal = function Promise$_setIsFinal() {
    this._bitField = this._bitField | 33554432;
};

Promise.prototype._isFinal = function Promise$_isFinal() {
    return (this._bitField & 33554432) > 0;
};

Promise.prototype._cancellable = function Promise$_cancellable() {
    return (this._bitField & 67108864) > 0;
};

Promise.prototype._setCancellable = function Promise$_setCancellable() {
    this._bitField = this._bitField | 67108864;
};

Promise.prototype._unsetCancellable = function Promise$_unsetCancellable() {
    this._bitField = this._bitField & (~67108864);
};

Promise.prototype._setRejectionIsUnhandled =
function Promise$_setRejectionIsUnhandled() {
    this._bitField = this._bitField | 2097152;
};

Promise.prototype._unsetRejectionIsUnhandled =
function Promise$_unsetRejectionIsUnhandled() {
    this._bitField = this._bitField & (~2097152);
    if (this._isUnhandledRejectionNotified()) {
        this._unsetUnhandledRejectionIsNotified();
        this._notifyUnhandledRejectionIsHandled();
    }
};

Promise.prototype._isRejectionUnhandled =
function Promise$_isRejectionUnhandled() {
    return (this._bitField & 2097152) > 0;
};

Promise.prototype._setUnhandledRejectionIsNotified =
function Promise$_setUnhandledRejectionIsNotified() {
    this._bitField = this._bitField | 524288;
};

Promise.prototype._unsetUnhandledRejectionIsNotified =
function Promise$_unsetUnhandledRejectionIsNotified() {
    this._bitField = this._bitField & (~524288);
};

Promise.prototype._isUnhandledRejectionNotified =
function Promise$_isUnhandledRejectionNotified() {
    return (this._bitField & 524288) > 0;
};

Promise.prototype._setCarriedStackTrace =
function Promise$_setCarriedStackTrace(capturedTrace) {
    this._bitField = this._bitField | 1048576;
    this._fulfillmentHandler0 = capturedTrace;
};

Promise.prototype._unsetCarriedStackTrace =
function Promise$_unsetCarriedStackTrace() {
    this._bitField = this._bitField & (~1048576);
    this._fulfillmentHandler0 = void 0;
};

Promise.prototype._isCarryingStackTrace =
function Promise$_isCarryingStackTrace() {
    return (this._bitField & 1048576) > 0;
};

Promise.prototype._getCarriedStackTrace =
function Promise$_getCarriedStackTrace() {
    return this._isCarryingStackTrace()
        ? this._fulfillmentHandler0
        : void 0;
};

Promise.prototype._receiverAt = function Promise$_receiverAt(index) {
    var ret = index === 0
        ? this._receiver0
        : this[(index << 2) + index - 5 + 4];
    if (this._isBound() && ret === void 0) {
        return this._boundTo;
    }
    return ret;
};

Promise.prototype._promiseAt = function Promise$_promiseAt(index) {
    return index === 0
        ? this._promise0
        : this[(index << 2) + index - 5 + 3];
};

Promise.prototype._fulfillmentHandlerAt =
function Promise$_fulfillmentHandlerAt(index) {
    return index === 0
        ? this._fulfillmentHandler0
        : this[(index << 2) + index - 5 + 0];
};

Promise.prototype._rejectionHandlerAt =
function Promise$_rejectionHandlerAt(index) {
    return index === 0
        ? this._rejectionHandler0
        : this[(index << 2) + index - 5 + 1];
};

Promise.prototype._addCallbacks = function Promise$_addCallbacks(
    fulfill,
    reject,
    progress,
    promise,
    receiver
) {
    var index = this._length();

    if (index >= 262143 - 5) {
        index = 0;
        this._setLength(0);
    }

    if (index === 0) {
        this._promise0 = promise;
        if (receiver !== void 0) this._receiver0 = receiver;
        if (typeof fulfill === "function" && !this._isCarryingStackTrace())
            this._fulfillmentHandler0 = fulfill;
        if (typeof reject === "function") this._rejectionHandler0 = reject;
        if (typeof progress === "function") this._progressHandler0 = progress;
    } else {
        var base = (index << 2) + index - 5;
        this[base + 3] = promise;
        this[base + 4] = receiver;
        this[base + 0] = typeof fulfill === "function"
                                            ? fulfill : void 0;
        this[base + 1] = typeof reject === "function"
                                            ? reject : void 0;
        this[base + 2] = typeof progress === "function"
                                            ? progress : void 0;
    }
    this._setLength(index + 1);
    return index;
};

Promise.prototype._setProxyHandlers =
function Promise$_setProxyHandlers(receiver, promiseSlotValue) {
    var index = this._length();

    if (index >= 262143 - 5) {
        index = 0;
        this._setLength(0);
    }
    if (index === 0) {
        this._promise0 = promiseSlotValue;
        this._receiver0 = receiver;
    } else {
        var base = (index << 2) + index - 5;
        this[base + 3] = promiseSlotValue;
        this[base + 4] = receiver;
        this[base + 0] =
        this[base + 1] =
        this[base + 2] = void 0;
    }
    this._setLength(index + 1);
};

Promise.prototype._proxyPromiseArray =
function Promise$_proxyPromiseArray(promiseArray, index) {
    this._setProxyHandlers(promiseArray, index);
};

Promise.prototype._proxyPromise = function Promise$_proxyPromise(promise) {
    promise._setProxied();
    this._setProxyHandlers(promise, -15);
};

Promise.prototype._setBoundTo = function Promise$_setBoundTo(obj) {
    if (obj !== void 0) {
        this._bitField = this._bitField | 8388608;
        this._boundTo = obj;
    } else {
        this._bitField = this._bitField & (~8388608);
    }
};

Promise.prototype._isBound = function Promise$_isBound() {
    return (this._bitField & 8388608) === 8388608;
};

Promise.prototype._resolveFromResolver =
function Promise$_resolveFromResolver(resolver) {
    var promise = this;
    this._setTrace(void 0);
    this._pushContext();

    function Promise$_resolver(val) {
        if (promise._tryFollow(val)) {
            return;
        }
        promise._fulfill(val);
    }
    function Promise$_rejecter(val) {
        var trace = canAttach(val) ? val : new Error(val + "");
        promise._attachExtraTrace(trace);
        markAsOriginatingFromRejection(val);
        promise._reject(val, trace === val ? void 0 : trace);
    }
    var r = tryCatch2(resolver, void 0, Promise$_resolver, Promise$_rejecter);
    this._popContext();

    if (r !== void 0 && r === errorObj) {
        var e = r.e;
        var trace = canAttach(e) ? e : new Error(e + "");
        promise._reject(e, trace);
    }
};

Promise.prototype._spreadSlowCase =
function Promise$_spreadSlowCase(targetFn, promise, values, boundTo) {
    var promiseForAll = new PromiseArray(values).promise();
    var promise2 = promiseForAll._then(function() {
        return targetFn.apply(boundTo, arguments);
    }, void 0, void 0, APPLY, void 0);
    promise._follow(promise2);
};

Promise.prototype._callSpread =
function Promise$_callSpread(handler, promise, value) {
    var boundTo = this._boundTo;
    if (isArray(value)) {
        for (var i = 0, len = value.length; i < len; ++i) {
            if (cast(value[i], void 0) instanceof Promise) {
                this._spreadSlowCase(handler, promise, value, boundTo);
                return;
            }
        }
    }
    promise._pushContext();
    return tryCatchApply(handler, value, boundTo);
};

Promise.prototype._callHandler =
function Promise$_callHandler(
    handler, receiver, promise, value) {
    var x;
    if (receiver === APPLY && !this.isRejected()) {
        x = this._callSpread(handler, promise, value);
    } else {
        promise._pushContext();
        x = tryCatch1(handler, receiver, value);
    }
    promise._popContext();
    return x;
};

Promise.prototype._settlePromiseFromHandler =
function Promise$_settlePromiseFromHandler(
    handler, receiver, value, promise
) {
    if (!(promise instanceof Promise)) {
        handler.call(receiver, value, promise);
        return;
    }
    var x = this._callHandler(handler, receiver, promise, value);
    if (promise._isFollowing()) return;

    if (x === errorObj || x === promise || x === NEXT_FILTER) {
        var err = x === promise
                    ? makeSelfResolutionError()
                    : x.e;
        var trace = canAttach(err) ? err : new Error(err + "");
        if (x !== NEXT_FILTER) promise._attachExtraTrace(trace);
        promise._rejectUnchecked(err, trace);
    } else {
        var castValue = cast(x, promise);
        if (castValue instanceof Promise) {
            if (castValue.isRejected() &&
                !castValue._isCarryingStackTrace() &&
                !canAttach(castValue._settledValue)) {
                var trace = new Error(castValue._settledValue + "");
                promise._attachExtraTrace(trace);
                castValue._setCarriedStackTrace(trace);
            }
            promise._follow(castValue);
            promise._propagateFrom(castValue, 1);
        } else {
            promise._fulfillUnchecked(x);
        }
    }
};

Promise.prototype._follow =
function Promise$_follow(promise) {
    this._setFollowing();

    if (promise.isPending()) {
        this._propagateFrom(promise, 1);
        promise._proxyPromise(this);
    } else if (promise.isFulfilled()) {
        this._fulfillUnchecked(promise._settledValue);
    } else {
        this._rejectUnchecked(promise._settledValue,
            promise._getCarriedStackTrace());
    }

    if (promise._isRejectionUnhandled()) promise._unsetRejectionIsUnhandled();

    if (debugging &&
        promise._traceParent == null) {
        promise._traceParent = this;
    }
};

Promise.prototype._tryFollow =
function Promise$_tryFollow(value) {
    if (this._isFollowingOrFulfilledOrRejected() ||
        value === this) {
        return false;
    }
    var maybePromise = cast(value, void 0);
    if (!(maybePromise instanceof Promise)) {
        return false;
    }
    this._follow(maybePromise);
    return true;
};

Promise.prototype._resetTrace = function Promise$_resetTrace() {
    if (debugging) {
        this._trace = new CapturedTrace(this._peekContext() === void 0);
    }
};

Promise.prototype._setTrace = function Promise$_setTrace(parent) {
    if (debugging) {
        var context = this._peekContext();
        this._traceParent = context;
        var isTopLevel = context === void 0;
        if (parent !== void 0 &&
            parent._traceParent === context) {
            this._trace = parent._trace;
        } else {
            this._trace = new CapturedTrace(isTopLevel);
        }
    }
    return this;
};

Promise.prototype._attachExtraTrace =
function Promise$_attachExtraTrace(error) {
    if (debugging) {
        var promise = this;
        var stack = error.stack;
        stack = typeof stack === "string" ? stack.split("\n") : [];
        CapturedTrace.protectErrorMessageNewlines(stack);
        var headerLineCount = 1;
        var combinedTraces = 1;
        while(promise != null &&
            promise._trace != null) {
            stack = CapturedTrace.combine(
                stack,
                promise._trace.stack.split("\n")
            );
            promise = promise._traceParent;
            combinedTraces++;
        }

        var stackTraceLimit = Error.stackTraceLimit || 10;
        var max = (stackTraceLimit + headerLineCount) * combinedTraces;
        var len = stack.length;
        if (len > max) {
            stack.length = max;
        }

        if (len > 0)
            stack[0] = stack[0].split("\u0002\u0000\u0001").join("\n");

        if (stack.length <= headerLineCount) {
            error.stack = "(No stack trace)";
        } else {
            error.stack = stack.join("\n");
        }
    }
};

Promise.prototype._cleanValues = function Promise$_cleanValues() {
    if (this._cancellable()) {
        this._cancellationParent = void 0;
    }
};

Promise.prototype._propagateFrom =
function Promise$_propagateFrom(parent, flags) {
    if ((flags & 1) > 0 && parent._cancellable()) {
        this._setCancellable();
        this._cancellationParent = parent;
    }
    if ((flags & 4) > 0) {
        this._setBoundTo(parent._boundTo);
    }
    if ((flags & 2) > 0) {
        this._setTrace(parent);
    }
};

Promise.prototype._fulfill = function Promise$_fulfill(value) {
    if (this._isFollowingOrFulfilledOrRejected()) return;
    this._fulfillUnchecked(value);
};

Promise.prototype._reject =
function Promise$_reject(reason, carriedStackTrace) {
    if (this._isFollowingOrFulfilledOrRejected()) return;
    this._rejectUnchecked(reason, carriedStackTrace);
};

Promise.prototype._settlePromiseAt = function Promise$_settlePromiseAt(index) {
    var handler = this.isFulfilled()
        ? this._fulfillmentHandlerAt(index)
        : this._rejectionHandlerAt(index);

    var value = this._settledValue;
    var receiver = this._receiverAt(index);
    var promise = this._promiseAt(index);

    if (typeof handler === "function") {
        this._settlePromiseFromHandler(handler, receiver, value, promise);
    } else {
        var done = false;
        var isFulfilled = this.isFulfilled();
        if (receiver !== void 0) {
            if (receiver instanceof Promise &&
                receiver._isProxied()) {
                receiver._unsetProxied();

                if (isFulfilled) receiver._fulfillUnchecked(value);
                else receiver._rejectUnchecked(value,
                    this._getCarriedStackTrace());
                done = true;
            } else if (receiver instanceof PromiseArray) {
                if (isFulfilled) receiver._promiseFulfilled(value, promise);
                else receiver._promiseRejected(value, promise);
                done = true;
            }
        }

        if (!done) {
            if (isFulfilled) promise._fulfill(value);
            else promise._reject(value, this._getCarriedStackTrace());
        }
    }

    if (index >= 4) {
        this._queueGC();
    }
};

Promise.prototype._isProxied = function Promise$_isProxied() {
    return (this._bitField & 4194304) === 4194304;
};

Promise.prototype._setProxied = function Promise$_setProxied() {
    this._bitField = this._bitField | 4194304;
};

Promise.prototype._unsetProxied = function Promise$_unsetProxied() {
    this._bitField = this._bitField & (~4194304);
};

Promise.prototype._isGcQueued = function Promise$_isGcQueued() {
    return (this._bitField & -1073741824) === -1073741824;
};

Promise.prototype._setGcQueued = function Promise$_setGcQueued() {
    this._bitField = this._bitField | -1073741824;
};

Promise.prototype._unsetGcQueued = function Promise$_unsetGcQueued() {
    this._bitField = this._bitField & (~-1073741824);
};

Promise.prototype._queueGC = function Promise$_queueGC() {
    if (this._isGcQueued()) return;
    this._setGcQueued();
    async.invokeLater(this._gc, this, void 0);
};

Promise.prototype._gc = function Promise$gc() {
    var len = this._length() * 5 - 5;
    for (var i = 0; i < len; i++) {
        delete this[i];
    }
    this._clearFirstHandlerData();
    this._setLength(0);
    this._unsetGcQueued();
};

Promise.prototype._clearFirstHandlerData =
function Promise$_clearFirstHandlerData() {
    this._fulfillmentHandler0 = void 0;
    this._rejectionHandler0 = void 0;
    this._promise0 = void 0;
    this._receiver0 = void 0;
};

Promise.prototype._queueSettleAt = function Promise$_queueSettleAt(index) {
    if (this._isRejectionUnhandled()) this._unsetRejectionIsUnhandled();
    async.invoke(this._settlePromiseAt, this, index);
};

Promise.prototype._fulfillUnchecked =
function Promise$_fulfillUnchecked(value) {
    if (!this.isPending()) return;
    if (value === this) {
        var err = makeSelfResolutionError();
        this._attachExtraTrace(err);
        return this._rejectUnchecked(err, void 0);
    }
    this._cleanValues();
    this._setFulfilled();
    this._settledValue = value;
    var len = this._length();

    if (len > 0) {
        async.invoke(this._settlePromises, this, len);
    }
};

Promise.prototype._rejectUncheckedCheckError =
function Promise$_rejectUncheckedCheckError(reason) {
    var trace = canAttach(reason) ? reason : new Error(reason + "");
    this._rejectUnchecked(reason, trace === reason ? void 0 : trace);
};

Promise.prototype._rejectUnchecked =
function Promise$_rejectUnchecked(reason, trace) {
    if (!this.isPending()) return;
    if (reason === this) {
        var err = makeSelfResolutionError();
        this._attachExtraTrace(err);
        return this._rejectUnchecked(err);
    }
    this._cleanValues();
    this._setRejected();
    this._settledValue = reason;

    if (this._isFinal()) {
        async.invokeLater(thrower, void 0, trace === void 0 ? reason : trace);
        return;
    }
    var len = this._length();

    if (trace !== void 0) this._setCarriedStackTrace(trace);

    if (len > 0) {
        async.invoke(this._rejectPromises, this, null);
    } else {
        this._ensurePossibleRejectionHandled();
    }
};

Promise.prototype._rejectPromises = function Promise$_rejectPromises() {
    this._settlePromises();
    this._unsetCarriedStackTrace();
};

Promise.prototype._settlePromises = function Promise$_settlePromises() {
    var len = this._length();
    for (var i = 0; i < len; i++) {
        this._settlePromiseAt(i);
    }
};

Promise.prototype._ensurePossibleRejectionHandled =
function Promise$_ensurePossibleRejectionHandled() {
    this._setRejectionIsUnhandled();
    if (CapturedTrace.possiblyUnhandledRejection !== void 0) {
        async.invokeLater(this._notifyUnhandledRejection, this, void 0);
    }
};

Promise.prototype._notifyUnhandledRejectionIsHandled =
function Promise$_notifyUnhandledRejectionIsHandled() {
    if (typeof unhandledRejectionHandled === "function") {
        async.invokeLater(unhandledRejectionHandled, void 0, this);
    }
};

Promise.prototype._notifyUnhandledRejection =
function Promise$_notifyUnhandledRejection() {
    if (this._isRejectionUnhandled()) {
        var reason = this._settledValue;
        var trace = this._getCarriedStackTrace();

        this._setUnhandledRejectionIsNotified();

        if (trace !== void 0) {
            this._unsetCarriedStackTrace();
            reason = trace;
        }
        if (typeof CapturedTrace.possiblyUnhandledRejection === "function") {
            CapturedTrace.possiblyUnhandledRejection(reason, this);
        }
    }
};

var contextStack = [];
Promise.prototype._peekContext = function Promise$_peekContext() {
    var lastIndex = contextStack.length - 1;
    if (lastIndex >= 0) {
        return contextStack[lastIndex];
    }
    return void 0;

};

Promise.prototype._pushContext = function Promise$_pushContext() {
    if (!debugging) return;
    contextStack.push(this);
};

Promise.prototype._popContext = function Promise$_popContext() {
    if (!debugging) return;
    contextStack.pop();
};

Promise.noConflict = function Promise$NoConflict() {
    return noConflict(Promise);
};

Promise.setScheduler = function(fn) {
    if (typeof fn !== "function") throw new TypeError("fn must be a function");
    async._schedule = fn;
};

if (!CapturedTrace.isSupported()) {
    Promise.longStackTraces = function(){};
    debugging = false;
}

Promise._makeSelfResolutionError = makeSelfResolutionError;
require("./finally.js")(Promise, NEXT_FILTER, cast);
require("./direct_resolve.js")(Promise);
require("./synchronous_inspection.js")(Promise);
require("./join.js")(Promise, PromiseArray, cast, INTERNAL);
Promise.RangeError = RangeError;
Promise.CancellationError = CancellationError;
Promise.TimeoutError = TimeoutError;
Promise.TypeError = TypeError;
Promise.OperationalError = OperationalError;
Promise.RejectionError = OperationalError;
Promise.AggregateError = errors.AggregateError;

util.toFastProperties(Promise);
util.toFastProperties(Promise.prototype);
Promise.Promise = Promise;
require('./timers.js')(Promise,INTERNAL,cast);
require('./race.js')(Promise,INTERNAL,cast);
require('./call_get.js')(Promise);
require('./generators.js')(Promise,apiRejection,INTERNAL,cast);
require('./map.js')(Promise,PromiseArray,apiRejection,cast,INTERNAL);
require('./nodeify.js')(Promise);
require('./promisify.js')(Promise,INTERNAL);
require('./props.js')(Promise,PromiseArray,cast);
require('./reduce.js')(Promise,PromiseArray,apiRejection,cast,INTERNAL);
require('./settle.js')(Promise,PromiseArray);
require('./some.js')(Promise,PromiseArray,apiRejection);
require('./progress.js')(Promise,PromiseArray);
require('./cancel.js')(Promise,INTERNAL);
require('./filter.js')(Promise,INTERNAL);
require('./any.js')(Promise,PromiseArray);
require('./each.js')(Promise,INTERNAL);
require('./using.js')(Promise,apiRejection,cast);

Promise.prototype = Promise.prototype;
return Promise;

};

},{"./any.js":1,"./async.js":2,"./call_get.js":4,"./cancel.js":5,"./captured_trace.js":6,"./catch_filter.js":7,"./direct_resolve.js":8,"./each.js":9,"./errors.js":10,"./errors_api_rejection":11,"./filter.js":13,"./finally.js":14,"./generators.js":15,"./join.js":16,"./map.js":17,"./nodeify.js":18,"./progress.js":19,"./promise_array.js":21,"./promise_resolver.js":22,"./promisify.js":23,"./props.js":24,"./race.js":26,"./reduce.js":27,"./settle.js":29,"./some.js":30,"./synchronous_inspection.js":31,"./thenables.js":32,"./timers.js":33,"./using.js":34,"./util.js":35}],21:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, INTERNAL, cast) {
var canAttach = require("./errors.js").canAttach;
var util = require("./util.js");
var isArray = util.isArray;

function toResolutionValue(val) {
    switch(val) {
    case -1: return void 0;
    case -2: return [];
    case -3: return {};
    }
}

function PromiseArray(values) {
    var promise = this._promise = new Promise(INTERNAL);
    var parent = void 0;
    if (values instanceof Promise) {
        parent = values;
        promise._propagateFrom(parent, 1 | 4);
    }
    promise._setTrace(parent);
    this._values = values;
    this._length = 0;
    this._totalResolved = 0;
    this._init(void 0, -2);
}
PromiseArray.prototype.length = function PromiseArray$length() {
    return this._length;
};

PromiseArray.prototype.promise = function PromiseArray$promise() {
    return this._promise;
};

PromiseArray.prototype._init =
function PromiseArray$_init(_, resolveValueIfEmpty) {
    var values = cast(this._values, void 0);
    if (values instanceof Promise) {
        this._values = values;
        values._setBoundTo(this._promise._boundTo);
        if (values.isFulfilled()) {
            values = values._settledValue;
            if (!isArray(values)) {
                var err = new Promise.TypeError("expecting an array, a promise or a thenable");
                this.__hardReject__(err);
                return;
            }
        } else if (values.isPending()) {
            values._then(
                PromiseArray$_init,
                this._reject,
                void 0,
                this,
                resolveValueIfEmpty
           );
            return;
        } else {
            values._unsetRejectionIsUnhandled();
            this._reject(values._settledValue);
            return;
        }
    } else if (!isArray(values)) {
        var err = new Promise.TypeError("expecting an array, a promise or a thenable");
        this.__hardReject__(err);
        return;
    }

    if (values.length === 0) {
        if (resolveValueIfEmpty === -5) {
            this._resolveEmptyArray();
        }
        else {
            this._resolve(toResolutionValue(resolveValueIfEmpty));
        }
        return;
    }
    var len = this.getActualLength(values.length);
    var newLen = len;
    var newValues = this.shouldCopyValues() ? new Array(len) : this._values;
    var isDirectScanNeeded = false;
    for (var i = 0; i < len; ++i) {
        var maybePromise = cast(values[i], void 0);
        if (maybePromise instanceof Promise) {
            if (maybePromise.isPending()) {
                maybePromise._proxyPromiseArray(this, i);
            } else {
                maybePromise._unsetRejectionIsUnhandled();
                isDirectScanNeeded = true;
            }
        } else {
            isDirectScanNeeded = true;
        }
        newValues[i] = maybePromise;
    }
    this._values = newValues;
    this._length = newLen;
    if (isDirectScanNeeded) {
        this._scanDirectValues(len);
    }
};

PromiseArray.prototype._settlePromiseAt =
function PromiseArray$_settlePromiseAt(index) {
    var value = this._values[index];
    if (!(value instanceof Promise)) {
        this._promiseFulfilled(value, index);
    } else if (value.isFulfilled()) {
        this._promiseFulfilled(value._settledValue, index);
    } else if (value.isRejected()) {
        this._promiseRejected(value._settledValue, index);
    }
};

PromiseArray.prototype._scanDirectValues =
function PromiseArray$_scanDirectValues(len) {
    for (var i = 0; i < len; ++i) {
        if (this._isResolved()) {
            break;
        }
        this._settlePromiseAt(i);
    }
};

PromiseArray.prototype._isResolved = function PromiseArray$_isResolved() {
    return this._values === null;
};

PromiseArray.prototype._resolve = function PromiseArray$_resolve(value) {
    this._values = null;
    this._promise._fulfill(value);
};

PromiseArray.prototype.__hardReject__ =
PromiseArray.prototype._reject = function PromiseArray$_reject(reason) {
    this._values = null;
    var trace = canAttach(reason) ? reason : new Error(reason + "");
    this._promise._attachExtraTrace(trace);
    this._promise._reject(reason, trace);
};

PromiseArray.prototype._promiseProgressed =
function PromiseArray$_promiseProgressed(progressValue, index) {
    if (this._isResolved()) return;
    this._promise._progress({
        index: index,
        value: progressValue
    });
};


PromiseArray.prototype._promiseFulfilled =
function PromiseArray$_promiseFulfilled(value, index) {
    if (this._isResolved()) return;
    this._values[index] = value;
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= this._length) {
        this._resolve(this._values);
    }
};

PromiseArray.prototype._promiseRejected =
function PromiseArray$_promiseRejected(reason, index) {
    if (this._isResolved()) return;
    this._totalResolved++;
    this._reject(reason);
};

PromiseArray.prototype.shouldCopyValues =
function PromiseArray$_shouldCopyValues() {
    return true;
};

PromiseArray.prototype.getActualLength =
function PromiseArray$getActualLength(len) {
    return len;
};

return PromiseArray;
};

},{"./errors.js":10,"./util.js":35}],22:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
var util = require("./util.js");
var maybeWrapAsError = util.maybeWrapAsError;
var errors = require("./errors.js");
var TimeoutError = errors.TimeoutError;
var OperationalError = errors.OperationalError;
var async = require("./async.js");
var haveGetters = util.haveGetters;
var es5 = require("./es5.js");

function isUntypedError(obj) {
    return obj instanceof Error &&
        es5.getPrototypeOf(obj) === Error.prototype;
}

function wrapAsOperationalError(obj) {
    var ret;
    if (isUntypedError(obj)) {
        ret = new OperationalError(obj);
    } else {
        ret = obj;
    }
    errors.markAsOriginatingFromRejection(ret);
    return ret;
}

function nodebackForPromise(promise) {
    function PromiseResolver$_callback(err, value) {
        if (promise === null) return;

        if (err) {
            var wrapped = wrapAsOperationalError(maybeWrapAsError(err));
            promise._attachExtraTrace(wrapped);
            promise._reject(wrapped);
        } else if (arguments.length > 2) {
            var $_len = arguments.length;var args = new Array($_len - 1); for(var $_i = 1; $_i < $_len; ++$_i) {args[$_i - 1] = arguments[$_i];}
            promise._fulfill(args);
        } else {
            promise._fulfill(value);
        }

        promise = null;
    }
    return PromiseResolver$_callback;
}


var PromiseResolver;
if (!haveGetters) {
    PromiseResolver = function PromiseResolver(promise) {
        this.promise = promise;
        this.asCallback = nodebackForPromise(promise);
        this.callback = this.asCallback;
    };
}
else {
    PromiseResolver = function PromiseResolver(promise) {
        this.promise = promise;
    };
}
if (haveGetters) {
    var prop = {
        get: function() {
            return nodebackForPromise(this.promise);
        }
    };
    es5.defineProperty(PromiseResolver.prototype, "asCallback", prop);
    es5.defineProperty(PromiseResolver.prototype, "callback", prop);
}

PromiseResolver._nodebackForPromise = nodebackForPromise;

PromiseResolver.prototype.toString = function PromiseResolver$toString() {
    return "[object PromiseResolver]";
};

PromiseResolver.prototype.resolve =
PromiseResolver.prototype.fulfill = function PromiseResolver$resolve(value) {
    if (!(this instanceof PromiseResolver)) {
        throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.");
    }

    var promise = this.promise;
    if (promise._tryFollow(value)) {
        return;
    }
    async.invoke(promise._fulfill, promise, value);
};

PromiseResolver.prototype.reject = function PromiseResolver$reject(reason) {
    if (!(this instanceof PromiseResolver)) {
        throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.");
    }

    var promise = this.promise;
    errors.markAsOriginatingFromRejection(reason);
    var trace = errors.canAttach(reason) ? reason : new Error(reason + "");
    promise._attachExtraTrace(trace);
    async.invoke(promise._reject, promise, reason);
    if (trace !== reason) {
        async.invoke(this._setCarriedStackTrace, this, trace);
    }
};

PromiseResolver.prototype.progress =
function PromiseResolver$progress(value) {
    if (!(this instanceof PromiseResolver)) {
        throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.");
    }
    async.invoke(this.promise._progress, this.promise, value);
};

PromiseResolver.prototype.cancel = function PromiseResolver$cancel() {
    async.invoke(this.promise.cancel, this.promise, void 0);
};

PromiseResolver.prototype.timeout = function PromiseResolver$timeout() {
    this.reject(new TimeoutError("timeout"));
};

PromiseResolver.prototype.isResolved = function PromiseResolver$isResolved() {
    return this.promise.isResolved();
};

PromiseResolver.prototype.toJSON = function PromiseResolver$toJSON() {
    return this.promise.toJSON();
};

PromiseResolver.prototype._setCarriedStackTrace =
function PromiseResolver$_setCarriedStackTrace(trace) {
    if (this.promise.isRejected()) {
        this.promise._setCarriedStackTrace(trace);
    }
};

module.exports = PromiseResolver;

},{"./async.js":2,"./errors.js":10,"./es5.js":12,"./util.js":35}],23:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, INTERNAL) {
var THIS = {};
var util = require("./util.js");
var nodebackForPromise = require("./promise_resolver.js")
    ._nodebackForPromise;
var withAppended = util.withAppended;
var maybeWrapAsError = util.maybeWrapAsError;
var canEvaluate = util.canEvaluate;
var TypeError = require("./errors").TypeError;
var defaultSuffix = "Async";
var defaultFilter = function(name, func) {
    return util.isIdentifier(name) &&
        name.charAt(0) !== "_" &&
        !util.isClass(func);
};
var defaultPromisified = {__isPromisified__: true};


function escapeIdentRegex(str) {
    return str.replace(/([$])/, "\\$");
}

function isPromisified(fn) {
    try {
        return fn.__isPromisified__ === true;
    }
    catch (e) {
        return false;
    }
}

function hasPromisified(obj, key, suffix) {
    var val = util.getDataPropertyOrDefault(obj, key + suffix,
                                            defaultPromisified);
    return val ? isPromisified(val) : false;
}
function checkValid(ret, suffix, suffixRegexp) {
    for (var i = 0; i < ret.length; i += 2) {
        var key = ret[i];
        if (suffixRegexp.test(key)) {
            var keyWithoutAsyncSuffix = key.replace(suffixRegexp, "");
            for (var j = 0; j < ret.length; j += 2) {
                if (ret[j] === keyWithoutAsyncSuffix) {
                    throw new TypeError("Cannot promisify an API " +
                        "that has normal methods with '"+suffix+"'-suffix");
                }
            }
        }
    }
}

function promisifiableMethods(obj, suffix, suffixRegexp, filter) {
    var keys = util.inheritedDataKeys(obj);
    var ret = [];
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var value = obj[key];
        if (typeof value === "function" &&
            !isPromisified(value) &&
            !hasPromisified(obj, key, suffix) &&
            filter(key, value, obj)) {
            ret.push(key, value);
        }
    }
    checkValid(ret, suffix, suffixRegexp);
    return ret;
}

function switchCaseArgumentOrder(likelyArgumentCount) {
    var ret = [likelyArgumentCount];
    var min = Math.max(0, likelyArgumentCount - 1 - 5);
    for(var i = likelyArgumentCount - 1; i >= min; --i) {
        if (i === likelyArgumentCount) continue;
        ret.push(i);
    }
    for(var i = likelyArgumentCount + 1; i <= 5; ++i) {
        ret.push(i);
    }
    return ret;
}

function argumentSequence(argumentCount) {
    return util.filledRange(argumentCount, "arguments[", "]");
}

function parameterDeclaration(parameterCount) {
    return util.filledRange(parameterCount, "_arg", "");
}

function parameterCount(fn) {
    if (typeof fn.length === "number") {
        return Math.max(Math.min(fn.length, 1023 + 1), 0);
    }
    return 0;
}

function generatePropertyAccess(key) {
    if (util.isIdentifier(key)) {
        return "." + key;
    }
    else return "['" + key.replace(/(['\\])/g, "\\$1") + "']";
}

function makeNodePromisifiedEval(callback, receiver, originalName, fn, suffix) {
    var newParameterCount = Math.max(0, parameterCount(fn) - 1);
    var argumentOrder = switchCaseArgumentOrder(newParameterCount);
    var callbackName =
        (typeof originalName === "string" && util.isIdentifier(originalName)
            ? originalName + suffix
            : "promisified");

    function generateCallForArgumentCount(count) {
        var args = argumentSequence(count).join(", ");
        var comma = count > 0 ? ", " : "";
        var ret;
        if (typeof callback === "string") {
            ret = "                                                          \n\
                this.method({{args}}, fn);                                   \n\
                break;                                                       \n\
            ".replace(".method", generatePropertyAccess(callback));
        } else if (receiver === THIS) {
            ret =  "                                                         \n\
                callback.call(this, {{args}}, fn);                           \n\
                break;                                                       \n\
            ";
        } else if (receiver !== void 0) {
            ret =  "                                                         \n\
                callback.call(receiver, {{args}}, fn);                       \n\
                break;                                                       \n\
            ";
        } else {
            ret =  "                                                         \n\
                callback({{args}}, fn);                                      \n\
                break;                                                       \n\
            ";
        }
        return ret.replace("{{args}}", args).replace(", ", comma);
    }

    function generateArgumentSwitchCase() {
        var ret = "";
        for(var i = 0; i < argumentOrder.length; ++i) {
            ret += "case " + argumentOrder[i] +":" +
                generateCallForArgumentCount(argumentOrder[i]);
        }
        var codeForCall;
        if (typeof callback === "string") {
            codeForCall = "                                                  \n\
                this.property.apply(this, args);                             \n\
            "
                .replace(".property", generatePropertyAccess(callback));
        } else if (receiver === THIS) {
            codeForCall = "                                                  \n\
                callback.apply(this, args);                                  \n\
            ";
        } else {
            codeForCall = "                                                  \n\
                callback.apply(receiver, args);                              \n\
            ";
        }

        ret += "                                                             \n\
        default:                                                             \n\
            var args = new Array(len + 1);                                   \n\
            var i = 0;                                                       \n\
            for (var i = 0; i < len; ++i) {                                  \n\
               args[i] = arguments[i];                                       \n\
            }                                                                \n\
            args[i] = fn;                                                    \n\
            [CodeForCall]                                                    \n\
            break;                                                           \n\
        ".replace("[CodeForCall]", codeForCall);
        return ret;
    }

    return new Function("Promise",
                        "callback",
                        "receiver",
                        "withAppended",
                        "maybeWrapAsError",
                        "nodebackForPromise",
                        "INTERNAL","                                         \n\
        var ret = function FunctionName(Parameters) {                        \n\
            'use strict';                                                    \n\
            var len = arguments.length;                                      \n\
            var promise = new Promise(INTERNAL);                             \n\
            promise._setTrace(void 0);                                       \n\
            var fn = nodebackForPromise(promise);                            \n\
            try {                                                            \n\
                switch(len) {                                                \n\
                    [CodeForSwitchCase]                                      \n\
                }                                                            \n\
            } catch (e) {                                                    \n\
                var wrapped = maybeWrapAsError(e);                           \n\
                promise._attachExtraTrace(wrapped);                          \n\
                promise._reject(wrapped);                                    \n\
            }                                                                \n\
            return promise;                                                  \n\
        };                                                                   \n\
        ret.__isPromisified__ = true;                                        \n\
        return ret;                                                          \n\
        "
        .replace("FunctionName", callbackName)
        .replace("Parameters", parameterDeclaration(newParameterCount))
        .replace("[CodeForSwitchCase]", generateArgumentSwitchCase()))(
            Promise,
            callback,
            receiver,
            withAppended,
            maybeWrapAsError,
            nodebackForPromise,
            INTERNAL
        );
}

function makeNodePromisifiedClosure(callback, receiver) {
    function promisified() {
        var _receiver = receiver;
        if (receiver === THIS) _receiver = this;
        if (typeof callback === "string") {
            callback = _receiver[callback];
        }
        var promise = new Promise(INTERNAL);
        promise._setTrace(void 0);
        var fn = nodebackForPromise(promise);
        try {
            callback.apply(_receiver, withAppended(arguments, fn));
        } catch(e) {
            var wrapped = maybeWrapAsError(e);
            promise._attachExtraTrace(wrapped);
            promise._reject(wrapped);
        }
        return promise;
    }
    promisified.__isPromisified__ = true;
    return promisified;
}

var makeNodePromisified = canEvaluate
    ? makeNodePromisifiedEval
    : makeNodePromisifiedClosure;

function promisifyAll(obj, suffix, filter, promisifier) {
    var suffixRegexp = new RegExp(escapeIdentRegex(suffix) + "$");
    var methods =
        promisifiableMethods(obj, suffix, suffixRegexp, filter);

    for (var i = 0, len = methods.length; i < len; i+= 2) {
        var key = methods[i];
        var fn = methods[i+1];
        var promisifiedKey = key + suffix;
        obj[promisifiedKey] = promisifier === makeNodePromisified
                ? makeNodePromisified(key, THIS, key, fn, suffix)
                : promisifier(fn);
    }
    util.toFastProperties(obj);
    return obj;
}

function promisify(callback, receiver) {
    return makeNodePromisified(callback, receiver, void 0, callback);
}

Promise.promisify = function Promise$Promisify(fn, receiver) {
    if (typeof fn !== "function") {
        throw new TypeError("fn must be a function");
    }
    if (isPromisified(fn)) {
        return fn;
    }
    return promisify(fn, arguments.length < 2 ? THIS : receiver);
};

Promise.promisifyAll = function Promise$PromisifyAll(target, options) {
    if (typeof target !== "function" && typeof target !== "object") {
        throw new TypeError("the target of promisifyAll must be an object or a function");
    }
    options = Object(options);
    var suffix = options.suffix;
    if (typeof suffix !== "string") suffix = defaultSuffix;
    var filter = options.filter;
    if (typeof filter !== "function") filter = defaultFilter;
    var promisifier = options.promisifier;
    if (typeof promisifier !== "function") promisifier = makeNodePromisified;

    if (!util.isIdentifier(suffix)) {
        throw new RangeError("suffix must be a valid identifier");
    }

    var keys = util.inheritedDataKeys(target, {includeHidden: true});
    for (var i = 0; i < keys.length; ++i) {
        var value = target[keys[i]];
        if (keys[i] !== "constructor" &&
            util.isClass(value)) {
            promisifyAll(value.prototype, suffix, filter, promisifier);
            promisifyAll(value, suffix, filter, promisifier);
        }
    }

    return promisifyAll(target, suffix, filter, promisifier);
};
};


},{"./errors":10,"./promise_resolver.js":22,"./util.js":35}],24:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, PromiseArray, cast) {
var util = require("./util.js");
var apiRejection = require("./errors_api_rejection")(Promise);
var isObject = util.isObject;
var es5 = require("./es5.js");

function PropertiesPromiseArray(obj) {
    var keys = es5.keys(obj);
    var len = keys.length;
    var values = new Array(len * 2);
    for (var i = 0; i < len; ++i) {
        var key = keys[i];
        values[i] = obj[key];
        values[i + len] = key;
    }
    this.constructor$(values);
}
util.inherits(PropertiesPromiseArray, PromiseArray);

PropertiesPromiseArray.prototype._init =
function PropertiesPromiseArray$_init() {
    this._init$(void 0, -3) ;
};

PropertiesPromiseArray.prototype._promiseFulfilled =
function PropertiesPromiseArray$_promiseFulfilled(value, index) {
    if (this._isResolved()) return;
    this._values[index] = value;
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= this._length) {
        var val = {};
        var keyOffset = this.length();
        for (var i = 0, len = this.length(); i < len; ++i) {
            val[this._values[i + keyOffset]] = this._values[i];
        }
        this._resolve(val);
    }
};

PropertiesPromiseArray.prototype._promiseProgressed =
function PropertiesPromiseArray$_promiseProgressed(value, index) {
    if (this._isResolved()) return;

    this._promise._progress({
        key: this._values[index + this.length()],
        value: value
    });
};

PropertiesPromiseArray.prototype.shouldCopyValues =
function PropertiesPromiseArray$_shouldCopyValues() {
    return false;
};

PropertiesPromiseArray.prototype.getActualLength =
function PropertiesPromiseArray$getActualLength(len) {
    return len >> 1;
};

function Promise$_Props(promises) {
    var ret;
    var castValue = cast(promises, void 0);

    if (!isObject(castValue)) {
        return apiRejection("cannot await properties of a non-object");
    } else if (castValue instanceof Promise) {
        ret = castValue._then(Promise.props, void 0, void 0, void 0, void 0);
    } else {
        ret = new PropertiesPromiseArray(castValue).promise();
    }

    if (castValue instanceof Promise) {
        ret._propagateFrom(castValue, 4);
    }
    return ret;
}

Promise.prototype.props = function Promise$props() {
    return Promise$_Props(this);
};

Promise.props = function Promise$Props(promises) {
    return Promise$_Props(promises);
};
};

},{"./errors_api_rejection":11,"./es5.js":12,"./util.js":35}],25:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
function arrayCopy(src, srcIndex, dst, dstIndex, len) {
    for (var j = 0; j < len; ++j) {
        dst[j + dstIndex] = src[j + srcIndex];
    }
}

function Queue(capacity) {
    this._capacity = capacity;
    this._length = 0;
    this._front = 0;
    this._makeCapacity();
}

Queue.prototype._willBeOverCapacity =
function Queue$_willBeOverCapacity(size) {
    return this._capacity < size;
};

Queue.prototype._pushOne = function Queue$_pushOne(arg) {
    var length = this.length();
    this._checkCapacity(length + 1);
    var i = (this._front + length) & (this._capacity - 1);
    this[i] = arg;
    this._length = length + 1;
};

Queue.prototype.push = function Queue$push(fn, receiver, arg) {
    var length = this.length() + 3;
    if (this._willBeOverCapacity(length)) {
        this._pushOne(fn);
        this._pushOne(receiver);
        this._pushOne(arg);
        return;
    }
    var j = this._front + length - 3;
    this._checkCapacity(length);
    var wrapMask = this._capacity - 1;
    this[(j + 0) & wrapMask] = fn;
    this[(j + 1) & wrapMask] = receiver;
    this[(j + 2) & wrapMask] = arg;
    this._length = length;
};

Queue.prototype.shift = function Queue$shift() {
    var front = this._front,
        ret = this[front];

    this[front] = void 0;
    this._front = (front + 1) & (this._capacity - 1);
    this._length--;
    return ret;
};

Queue.prototype.length = function Queue$length() {
    return this._length;
};

Queue.prototype._makeCapacity = function Queue$_makeCapacity() {
    var len = this._capacity;
    for (var i = 0; i < len; ++i) {
        this[i] = void 0;
    }
};

Queue.prototype._checkCapacity = function Queue$_checkCapacity(size) {
    if (this._capacity < size) {
        this._resizeTo(this._capacity << 3);
    }
};

Queue.prototype._resizeTo = function Queue$_resizeTo(capacity) {
    var oldFront = this._front;
    var oldCapacity = this._capacity;
    var oldQueue = new Array(oldCapacity);
    var length = this.length();

    arrayCopy(this, 0, oldQueue, 0, oldCapacity);
    this._capacity = capacity;
    this._makeCapacity();
    this._front = 0;
    if (oldFront + length <= oldCapacity) {
        arrayCopy(oldQueue, oldFront, this, 0, length);
    } else {        var lengthBeforeWrapping =
            length - ((oldFront + length) & (oldCapacity - 1));

        arrayCopy(oldQueue, oldFront, this, 0, lengthBeforeWrapping);
        arrayCopy(oldQueue, 0, this, lengthBeforeWrapping,
                    length - lengthBeforeWrapping);
    }
};

module.exports = Queue;

},{}],26:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, INTERNAL, cast) {
var apiRejection = require("./errors_api_rejection.js")(Promise);
var isArray = require("./util.js").isArray;

var raceLater = function Promise$_raceLater(promise) {
    return promise.then(function(array) {
        return Promise$_Race(array, promise);
    });
};

var hasOwn = {}.hasOwnProperty;
function Promise$_Race(promises, parent) {
    var maybePromise = cast(promises, void 0);

    if (maybePromise instanceof Promise) {
        return raceLater(maybePromise);
    } else if (!isArray(promises)) {
        return apiRejection("expecting an array, a promise or a thenable");
    }

    var ret = new Promise(INTERNAL);
    if (parent !== void 0) {
        ret._propagateFrom(parent, 7);
    } else {
        ret._setTrace(void 0);
    }
    var fulfill = ret._fulfill;
    var reject = ret._reject;
    for (var i = 0, len = promises.length; i < len; ++i) {
        var val = promises[i];

        if (val === void 0 && !(hasOwn.call(promises, i))) {
            continue;
        }

        Promise.cast(val)._then(fulfill, reject, void 0, ret, null);
    }
    return ret;
}

Promise.race = function Promise$Race(promises) {
    return Promise$_Race(promises, void 0);
};

Promise.prototype.race = function Promise$race() {
    return Promise$_Race(this, void 0);
};

};

},{"./errors_api_rejection.js":11,"./util.js":35}],27:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, PromiseArray, apiRejection, cast, INTERNAL) {
var util = require("./util.js");
var tryCatch4 = util.tryCatch4;
var tryCatch3 = util.tryCatch3;
var errorObj = util.errorObj;
function ReductionPromiseArray(promises, fn, accum, _each) {
    this.constructor$(promises);
    this._preservedValues = _each === INTERNAL ? [] : null;
    this._zerothIsAccum = (accum === void 0);
    this._gotAccum = false;
    this._reducingIndex = (this._zerothIsAccum ? 1 : 0);
    this._valuesPhase = undefined;

    var maybePromise = cast(accum, void 0);
    var rejected = false;
    var isPromise = maybePromise instanceof Promise;
    if (isPromise) {
        if (maybePromise.isPending()) {
            maybePromise._proxyPromiseArray(this, -1);
        } else if (maybePromise.isFulfilled()) {
            accum = maybePromise.value();
            this._gotAccum = true;
        } else {
            maybePromise._unsetRejectionIsUnhandled();
            this._reject(maybePromise.reason());
            rejected = true;
        }
    }
    if (!(isPromise || this._zerothIsAccum)) this._gotAccum = true;
    this._callback = fn;
    this._accum = accum;
    if (!rejected) this._init$(void 0, -5);
}
util.inherits(ReductionPromiseArray, PromiseArray);

ReductionPromiseArray.prototype._init =
function ReductionPromiseArray$_init() {};

ReductionPromiseArray.prototype._resolveEmptyArray =
function ReductionPromiseArray$_resolveEmptyArray() {
    if (this._gotAccum || this._zerothIsAccum) {
        this._resolve(this._preservedValues !== null
                        ? [] : this._accum);
    }
};

ReductionPromiseArray.prototype._promiseFulfilled =
function ReductionPromiseArray$_promiseFulfilled(value, index) {
    var values = this._values;
    if (values === null) return;
    var length = this.length();
    var preservedValues = this._preservedValues;
    var isEach = preservedValues !== null;
    var gotAccum = this._gotAccum;
    var valuesPhase = this._valuesPhase;
    var valuesPhaseIndex;
    if (!valuesPhase) {
        valuesPhase = this._valuesPhase = Array(length);
        for (valuesPhaseIndex=0; valuesPhaseIndex<length; ++valuesPhaseIndex) {
            valuesPhase[valuesPhaseIndex] = 0;
        }
    }
    valuesPhaseIndex = valuesPhase[index];

    if (index === 0 && this._zerothIsAccum) {
        if (!gotAccum) {
            this._accum = value;
            this._gotAccum = gotAccum = true;
        }
        valuesPhase[index] = ((valuesPhaseIndex === 0)
            ? 1 : 2);
    } else if (index === -1) {
        if (!gotAccum) {
            this._accum = value;
            this._gotAccum = gotAccum = true;
        }
    } else {
        if (valuesPhaseIndex === 0) {
            valuesPhase[index] = 1;
        }
        else {
            valuesPhase[index] = 2;
            if (gotAccum) {
                this._accum = value;
            }
        }
    }
    if (!gotAccum) return;

    var callback = this._callback;
    var receiver = this._promise._boundTo;
    var ret;

    for (var i = this._reducingIndex; i < length; ++i) {
        valuesPhaseIndex = valuesPhase[i];
        if (valuesPhaseIndex === 2) {
            this._reducingIndex = i + 1;
            continue;
        }
        if (valuesPhaseIndex !== 1) return;

        value = values[i];
        if (value instanceof Promise) {
            if (value.isFulfilled()) {
                value = value._settledValue;
            } else if (value.isPending()) {
                return;
            } else {
                value._unsetRejectionIsUnhandled();
                return this._reject(value.reason());
            }
        }

        if (isEach) {
            preservedValues.push(value);
            ret = tryCatch3(callback, receiver, value, i, length);
        }
        else {
            ret = tryCatch4(callback, receiver, this._accum, value, i, length);
        }

        if (ret === errorObj) return this._reject(ret.e);

        var maybePromise = cast(ret, void 0);
        if (maybePromise instanceof Promise) {
            if (maybePromise.isPending()) {
                valuesPhase[i] = 4;
                return maybePromise._proxyPromiseArray(this, i);
            } else if (maybePromise.isFulfilled()) {
                ret = maybePromise.value();
            } else {
                maybePromise._unsetRejectionIsUnhandled();
                return this._reject(maybePromise.reason());
            }
        }

        this._reducingIndex = i + 1;
        this._accum = ret;
    }

    if (this._reducingIndex < length) return;
    this._resolve(isEach ? preservedValues : this._accum);
};

function reduce(promises, fn, initialValue, _each) {
    if (typeof fn !== "function") return apiRejection("fn must be a function");
    var array = new ReductionPromiseArray(promises, fn, initialValue, _each);
    return array.promise();
}

Promise.prototype.reduce = function Promise$reduce(fn, initialValue) {
    return reduce(this, fn, initialValue, null);
};

Promise.reduce = function Promise$Reduce(promises, fn, initialValue, _each) {
    return reduce(promises, fn, initialValue, _each);
};
};

},{"./util.js":35}],28:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
var schedule;
var _MutationObserver;
if (typeof process === "object" && typeof process.version === "string") {
    schedule = function Promise$_Scheduler(fn) {
        process.nextTick(fn);
    };
}
else if ((typeof MutationObserver !== "undefined" &&
         (_MutationObserver = MutationObserver)) ||
         (typeof WebKitMutationObserver !== "undefined" &&
         (_MutationObserver = WebKitMutationObserver))) {
    schedule = (function() {
        var div = document.createElement("div");
        var queuedFn = void 0;
        var observer = new _MutationObserver(
            function Promise$_Scheduler() {
                var fn = queuedFn;
                queuedFn = void 0;
                fn();
            }
       );
        observer.observe(div, {
            attributes: true
        });
        return function Promise$_Scheduler(fn) {
            queuedFn = fn;
            div.classList.toggle("foo");
        };

    })();
}
else if (typeof setTimeout !== "undefined") {
    schedule = function Promise$_Scheduler(fn) {
        setTimeout(fn, 0);
    };
}
else throw new Error("no async scheduler available");
module.exports = schedule;

},{}],29:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports =
    function(Promise, PromiseArray) {
var PromiseInspection = Promise.PromiseInspection;
var util = require("./util.js");

function SettledPromiseArray(values) {
    this.constructor$(values);
}
util.inherits(SettledPromiseArray, PromiseArray);

SettledPromiseArray.prototype._promiseResolved =
function SettledPromiseArray$_promiseResolved(index, inspection) {
    this._values[index] = inspection;
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= this._length) {
        this._resolve(this._values);
    }
};

SettledPromiseArray.prototype._promiseFulfilled =
function SettledPromiseArray$_promiseFulfilled(value, index) {
    if (this._isResolved()) return;
    var ret = new PromiseInspection();
    ret._bitField = 268435456;
    ret._settledValue = value;
    this._promiseResolved(index, ret);
};
SettledPromiseArray.prototype._promiseRejected =
function SettledPromiseArray$_promiseRejected(reason, index) {
    if (this._isResolved()) return;
    var ret = new PromiseInspection();
    ret._bitField = 134217728;
    ret._settledValue = reason;
    this._promiseResolved(index, ret);
};

Promise.settle = function Promise$Settle(promises) {
    return new SettledPromiseArray(promises).promise();
};

Promise.prototype.settle = function Promise$settle() {
    return new SettledPromiseArray(this).promise();
};
};

},{"./util.js":35}],30:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports =
function(Promise, PromiseArray, apiRejection) {
var util = require("./util.js");
var RangeError = require("./errors.js").RangeError;
var AggregateError = require("./errors.js").AggregateError;
var isArray = util.isArray;


function SomePromiseArray(values) {
    this.constructor$(values);
    this._howMany = 0;
    this._unwrap = false;
    this._initialized = false;
}
util.inherits(SomePromiseArray, PromiseArray);

SomePromiseArray.prototype._init = function SomePromiseArray$_init() {
    if (!this._initialized) {
        return;
    }
    if (this._howMany === 0) {
        this._resolve([]);
        return;
    }
    this._init$(void 0, -5);
    var isArrayResolved = isArray(this._values);
    if (!this._isResolved() &&
        isArrayResolved &&
        this._howMany > this._canPossiblyFulfill()) {
        this._reject(this._getRangeError(this.length()));
    }
};

SomePromiseArray.prototype.init = function SomePromiseArray$init() {
    this._initialized = true;
    this._init();
};

SomePromiseArray.prototype.setUnwrap = function SomePromiseArray$setUnwrap() {
    this._unwrap = true;
};

SomePromiseArray.prototype.howMany = function SomePromiseArray$howMany() {
    return this._howMany;
};

SomePromiseArray.prototype.setHowMany =
function SomePromiseArray$setHowMany(count) {
    if (this._isResolved()) return;
    this._howMany = count;
};

SomePromiseArray.prototype._promiseFulfilled =
function SomePromiseArray$_promiseFulfilled(value) {
    if (this._isResolved()) return;
    this._addFulfilled(value);
    if (this._fulfilled() === this.howMany()) {
        this._values.length = this.howMany();
        if (this.howMany() === 1 && this._unwrap) {
            this._resolve(this._values[0]);
        } else {
            this._resolve(this._values);
        }
    }

};
SomePromiseArray.prototype._promiseRejected =
function SomePromiseArray$_promiseRejected(reason) {
    if (this._isResolved()) return;
    this._addRejected(reason);
    if (this.howMany() > this._canPossiblyFulfill()) {
        var e = new AggregateError();
        for (var i = this.length(); i < this._values.length; ++i) {
            e.push(this._values[i]);
        }
        this._reject(e);
    }
};

SomePromiseArray.prototype._fulfilled = function SomePromiseArray$_fulfilled() {
    return this._totalResolved;
};

SomePromiseArray.prototype._rejected = function SomePromiseArray$_rejected() {
    return this._values.length - this.length();
};

SomePromiseArray.prototype._addRejected =
function SomePromiseArray$_addRejected(reason) {
    this._values.push(reason);
};

SomePromiseArray.prototype._addFulfilled =
function SomePromiseArray$_addFulfilled(value) {
    this._values[this._totalResolved++] = value;
};

SomePromiseArray.prototype._canPossiblyFulfill =
function SomePromiseArray$_canPossiblyFulfill() {
    return this.length() - this._rejected();
};

SomePromiseArray.prototype._getRangeError =
function SomePromiseArray$_getRangeError(count) {
    var message = "Input array must contain at least " +
            this._howMany + " items but contains only " + count + " items";
    return new RangeError(message);
};

SomePromiseArray.prototype._resolveEmptyArray =
function SomePromiseArray$_resolveEmptyArray() {
    this._reject(this._getRangeError(0));
};

function Promise$_Some(promises, howMany) {
    if ((howMany | 0) !== howMany || howMany < 0) {
        return apiRejection("expecting a positive integer");
    }
    var ret = new SomePromiseArray(promises);
    var promise = ret.promise();
    if (promise.isRejected()) {
        return promise;
    }
    ret.setHowMany(howMany);
    ret.init();
    return promise;
}

Promise.some = function Promise$Some(promises, howMany) {
    return Promise$_Some(promises, howMany);
};

Promise.prototype.some = function Promise$some(howMany) {
    return Promise$_Some(this, howMany);
};

Promise._SomePromiseArray = SomePromiseArray;
};

},{"./errors.js":10,"./util.js":35}],31:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise) {
function PromiseInspection(promise) {
    if (promise !== void 0) {
        this._bitField = promise._bitField;
        this._settledValue = promise.isResolved()
            ? promise._settledValue
            : void 0;
    }
    else {
        this._bitField = 0;
        this._settledValue = void 0;
    }
}

PromiseInspection.prototype.isFulfilled =
Promise.prototype.isFulfilled = function Promise$isFulfilled() {
    return (this._bitField & 268435456) > 0;
};

PromiseInspection.prototype.isRejected =
Promise.prototype.isRejected = function Promise$isRejected() {
    return (this._bitField & 134217728) > 0;
};

PromiseInspection.prototype.isPending =
Promise.prototype.isPending = function Promise$isPending() {
    return (this._bitField & 402653184) === 0;
};

PromiseInspection.prototype.value =
Promise.prototype.value = function Promise$value() {
    if (!this.isFulfilled()) {
        throw new TypeError("cannot get fulfillment value of a non-fulfilled promise");
    }
    return this._settledValue;
};

PromiseInspection.prototype.error =
PromiseInspection.prototype.reason =
Promise.prototype.reason = function Promise$reason() {
    if (!this.isRejected()) {
        throw new TypeError("cannot get rejection reason of a non-rejected promise");
    }
    return this._settledValue;
};

PromiseInspection.prototype.isResolved =
Promise.prototype.isResolved = function Promise$isResolved() {
    return (this._bitField & 402653184) > 0;
};

Promise.PromiseInspection = PromiseInspection;
};

},{}],32:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, INTERNAL) {
var util = require("./util.js");
var canAttach = require("./errors.js").canAttach;
var errorObj = util.errorObj;
var isObject = util.isObject;

function getThen(obj) {
    try {
        return obj.then;
    }
    catch(e) {
        errorObj.e = e;
        return errorObj;
    }
}

function Promise$_Cast(obj, originalPromise) {
    if (isObject(obj)) {
        if (obj instanceof Promise) {
            return obj;
        }
        else if (isAnyBluebirdPromise(obj)) {
            var ret = new Promise(INTERNAL);
            ret._setTrace(void 0);
            obj._then(
                ret._fulfillUnchecked,
                ret._rejectUncheckedCheckError,
                ret._progressUnchecked,
                ret,
                null
            );
            ret._setFollowing();
            return ret;
        }
        var then = getThen(obj);
        if (then === errorObj) {
            if (originalPromise !== void 0 && canAttach(then.e)) {
                originalPromise._attachExtraTrace(then.e);
            }
            return Promise.reject(then.e);
        } else if (typeof then === "function") {
            return Promise$_doThenable(obj, then, originalPromise);
        }
    }
    return obj;
}

var hasProp = {}.hasOwnProperty;
function isAnyBluebirdPromise(obj) {
    return hasProp.call(obj, "_promise0");
}

function Promise$_doThenable(x, then, originalPromise) {
    var resolver = Promise.defer();
    var called = false;
    try {
        then.call(
            x,
            Promise$_resolveFromThenable,
            Promise$_rejectFromThenable,
            Promise$_progressFromThenable
        );
    } catch(e) {
        if (!called) {
            called = true;
            var trace = canAttach(e) ? e : new Error(e + "");
            if (originalPromise !== void 0) {
                originalPromise._attachExtraTrace(trace);
            }
            resolver.promise._reject(e, trace);
        }
    }
    return resolver.promise;

    function Promise$_resolveFromThenable(y) {
        if (called) return;
        called = true;

        if (x === y) {
            var e = Promise._makeSelfResolutionError();
            if (originalPromise !== void 0) {
                originalPromise._attachExtraTrace(e);
            }
            resolver.promise._reject(e, void 0);
            return;
        }
        resolver.resolve(y);
    }

    function Promise$_rejectFromThenable(r) {
        if (called) return;
        called = true;
        var trace = canAttach(r) ? r : new Error(r + "");
        if (originalPromise !== void 0) {
            originalPromise._attachExtraTrace(trace);
        }
        resolver.promise._reject(r, trace);
    }

    function Promise$_progressFromThenable(v) {
        if (called) return;
        var promise = resolver.promise;
        if (typeof promise._progress === "function") {
            promise._progress(v);
        }
    }
}

return Promise$_Cast;
};

},{"./errors.js":10,"./util.js":35}],33:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
var _setTimeout = function(fn, ms) {
    var len = arguments.length;
    var arg0 = arguments[2];
    var arg1 = arguments[3];
    var arg2 = len >= 5 ? arguments[4] : void 0;
    setTimeout(function() {
        fn(arg0, arg1, arg2);
    }, ms|0);
};

module.exports = function(Promise, INTERNAL, cast) {
var util = require("./util.js");
var errors = require("./errors.js");
var apiRejection = require("./errors_api_rejection")(Promise);
var TimeoutError = Promise.TimeoutError;

var afterTimeout = function Promise$_afterTimeout(promise, message, ms) {
    if (!promise.isPending()) return;
    if (typeof message !== "string") {
        message = "operation timed out after" + " " + ms + " ms"
    }
    var err = new TimeoutError(message);
    errors.markAsOriginatingFromRejection(err);
    promise._attachExtraTrace(err);
    promise._cancel(err);
};

var afterDelay = function Promise$_afterDelay(value, promise) {
    promise._fulfill(value);
};

var delay = Promise.delay = function Promise$Delay(value, ms) {
    if (ms === void 0) {
        ms = value;
        value = void 0;
    }
    ms = +ms;
    var maybePromise = cast(value, void 0);
    var promise = new Promise(INTERNAL);

    if (maybePromise instanceof Promise) {
        promise._propagateFrom(maybePromise, 7);
        promise._follow(maybePromise);
        return promise.then(function(value) {
            return Promise.delay(value, ms);
        });
    } else {
        promise._setTrace(void 0);
        _setTimeout(afterDelay, ms, value, promise);
    }
    return promise;
};

Promise.prototype.delay = function Promise$delay(ms) {
    return delay(this, ms);
};

Promise.prototype.timeout = function Promise$timeout(ms, message) {
    ms = +ms;

    var ret = new Promise(INTERNAL);
    ret._propagateFrom(this, 7);
    ret._follow(this);
    _setTimeout(afterTimeout, ms, ret, message, ms);
    return ret.cancellable();
};

};

},{"./errors.js":10,"./errors_api_rejection":11,"./util.js":35}],34:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function (Promise, apiRejection, cast) {
    var TypeError = require("./errors.js").TypeError;
    var inherits = require("./util.js").inherits;
    var PromiseInspection = Promise.PromiseInspection;

    function inspectionMapper(inspections) {
        var len = inspections.length;
        for (var i = 0; i < len; ++i) {
            var inspection = inspections[i];
            if (inspection.isRejected()) {
                return Promise.reject(inspection.error());
            }
            inspections[i] = inspection.value();
        }
        return inspections;
    }

    function thrower(e) {
        setTimeout(function(){throw e;}, 0);
    }

    function castPreservingDisposable(thenable) {
        var maybePromise = cast(thenable, void 0);
        if (maybePromise !== thenable &&
            typeof thenable._isDisposable === "function" &&
            typeof thenable._getDisposer === "function" &&
            thenable._isDisposable()) {
            maybePromise._setDisposable(thenable._getDisposer());
        }
        return maybePromise;
    }
    function dispose(resources, inspection) {
        var i = 0;
        var len = resources.length;
        var ret = Promise.defer();
        function iterator() {
            if (i >= len) return ret.resolve();
            var maybePromise = castPreservingDisposable(resources[i++]);
            if (maybePromise instanceof Promise &&
                maybePromise._isDisposable()) {
                try {
                    maybePromise = cast(maybePromise._getDisposer()
                                        .tryDispose(inspection), void 0);
                } catch (e) {
                    return thrower(e);
                }
                if (maybePromise instanceof Promise) {
                    return maybePromise._then(iterator, thrower,
                                              null, null, null);
                }
            }
            iterator();
        }
        iterator();
        return ret.promise;
    }

    function disposerSuccess(value) {
        var inspection = new PromiseInspection();
        inspection._settledValue = value;
        inspection._bitField = 268435456;
        return dispose(this, inspection).thenReturn(value);
    }

    function disposerFail(reason) {
        var inspection = new PromiseInspection();
        inspection._settledValue = reason;
        inspection._bitField = 134217728;
        return dispose(this, inspection).thenThrow(reason);
    }

    function Disposer(data, promise) {
        this._data = data;
        this._promise = promise;
    }

    Disposer.prototype.data = function Disposer$data() {
        return this._data;
    };

    Disposer.prototype.promise = function Disposer$promise() {
        return this._promise;
    };

    Disposer.prototype.resource = function Disposer$resource() {
        if (this.promise().isFulfilled()) {
            return this.promise().value();
        }
        return null;
    };

    Disposer.prototype.tryDispose = function(inspection) {
        var resource = this.resource();
        var ret = resource !== null
            ? this.doDispose(resource, inspection) : null;
        this._promise._unsetDisposable();
        this._data = this._promise = null;
        return ret;
    };

    Disposer.isDisposer = function Disposer$isDisposer(d) {
        return (d != null &&
                typeof d.resource === "function" &&
                typeof d.tryDispose === "function");
    };

    function FunctionDisposer(fn, promise) {
        this.constructor$(fn, promise);
    }
    inherits(FunctionDisposer, Disposer);

    FunctionDisposer.prototype.doDispose = function (resource, inspection) {
        var fn = this.data();
        return fn.call(resource, resource, inspection);
    };

    Promise.using = function Promise$using() {
        var len = arguments.length;
        if (len < 2) return apiRejection(
                        "you must pass at least 2 arguments to Promise.using");
        var fn = arguments[len - 1];
        if (typeof fn !== "function") return apiRejection("fn must be a function");
        len--;
        var resources = new Array(len);
        for (var i = 0; i < len; ++i) {
            var resource = arguments[i];
            if (Disposer.isDisposer(resource)) {
                var disposer = resource;
                resource = resource.promise();
                resource._setDisposable(disposer);
            }
            resources[i] = resource;
        }

        return Promise.settle(resources)
            .then(inspectionMapper)
            .spread(fn)
            ._then(disposerSuccess, disposerFail, void 0, resources, void 0);
    };

    Promise.prototype._setDisposable =
    function Promise$_setDisposable(disposer) {
        this._bitField = this._bitField | 262144;
        this._disposer = disposer;
    };

    Promise.prototype._isDisposable = function Promise$_isDisposable() {
        return (this._bitField & 262144) > 0;
    };

    Promise.prototype._getDisposer = function Promise$_getDisposer() {
        return this._disposer;
    };

    Promise.prototype._unsetDisposable = function Promise$_unsetDisposable() {
        this._bitField = this._bitField & (~262144);
        this._disposer = void 0;
    };

    Promise.prototype.disposer = function Promise$disposer(fn) {
        if (typeof fn === "function") {
            return new FunctionDisposer(fn, this);
        }
        throw new TypeError();
    };

};

},{"./errors.js":10,"./util.js":35}],35:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
var es5 = require("./es5.js");
var haveGetters = (function(){
    try {
        var o = {};
        es5.defineProperty(o, "f", {
            get: function () {
                return 3;
            }
        });
        return o.f === 3;
    }
    catch (e) {
        return false;
    }

})();
var canEvaluate = typeof navigator == "undefined";
var errorObj = {e: {}};
function tryCatch1(fn, receiver, arg) {
    try { return fn.call(receiver, arg); }
    catch (e) {
        errorObj.e = e;
        return errorObj;
    }
}

function tryCatch2(fn, receiver, arg, arg2) {
    try { return fn.call(receiver, arg, arg2); }
    catch (e) {
        errorObj.e = e;
        return errorObj;
    }
}

function tryCatch3(fn, receiver, arg, arg2, arg3) {
    try { return fn.call(receiver, arg, arg2, arg3); }
    catch (e) {
        errorObj.e = e;
        return errorObj;
    }
}

function tryCatch4(fn, receiver, arg, arg2, arg3, arg4) {
    try { return fn.call(receiver, arg, arg2, arg3, arg4); }
    catch (e) {
        errorObj.e = e;
        return errorObj;
    }
}

function tryCatchApply(fn, args, receiver) {
    try { return fn.apply(receiver, args); }
    catch (e) {
        errorObj.e = e;
        return errorObj;
    }
}

var inherits = function(Child, Parent) {
    var hasProp = {}.hasOwnProperty;

    function T() {
        this.constructor = Child;
        this.constructor$ = Parent;
        for (var propertyName in Parent.prototype) {
            if (hasProp.call(Parent.prototype, propertyName) &&
                propertyName.charAt(propertyName.length-1) !== "$"
           ) {
                this[propertyName + "$"] = Parent.prototype[propertyName];
            }
        }
    }
    T.prototype = Parent.prototype;
    Child.prototype = new T();
    return Child.prototype;
};

function asString(val) {
    return typeof val === "string" ? val : ("" + val);
}

function isPrimitive(val) {
    return val == null || val === true || val === false ||
        typeof val === "string" || typeof val === "number";

}

function isObject(value) {
    return !isPrimitive(value);
}

function maybeWrapAsError(maybeError) {
    if (!isPrimitive(maybeError)) return maybeError;

    return new Error(asString(maybeError));
}

function withAppended(target, appendee) {
    var len = target.length;
    var ret = new Array(len + 1);
    var i;
    for (i = 0; i < len; ++i) {
        ret[i] = target[i];
    }
    ret[i] = appendee;
    return ret;
}

function getDataPropertyOrDefault(obj, key, defaultValue) {
    if (es5.isES5) {
        var desc = Object.getOwnPropertyDescriptor(obj, key);
        if (desc != null) {
            return desc.get == null && desc.set == null
                    ? desc.value
                    : defaultValue;
        }
    } else {
        return {}.hasOwnProperty.call(obj, key) ? obj[key] : void 0;
    }
}

function notEnumerableProp(obj, name, value) {
    if (isPrimitive(obj)) return obj;
    var descriptor = {
        value: value,
        configurable: true,
        enumerable: false,
        writable: true
    };
    es5.defineProperty(obj, name, descriptor);
    return obj;
}


var wrapsPrimitiveReceiver = (function() {
    return this !== "string";
}).call("string");

function thrower(r) {
    throw r;
}

var inheritedDataKeys = (function() {
    if (es5.isES5) {
        return function(obj, opts) {
            var ret = [];
            var visitedKeys = Object.create(null);
            var getKeys = Object(opts).includeHidden
                ? Object.getOwnPropertyNames
                : Object.keys;
            while (obj != null) {
                var keys;
                try {
                    keys = getKeys(obj);
                } catch (e) {
                    return ret;
                }
                for (var i = 0; i < keys.length; ++i) {
                    var key = keys[i];
                    if (visitedKeys[key]) continue;
                    visitedKeys[key] = true;
                    var desc = Object.getOwnPropertyDescriptor(obj, key);
                    if (desc != null && desc.get == null && desc.set == null) {
                        ret.push(key);
                    }
                }
                obj = es5.getPrototypeOf(obj);
            }
            return ret;
        };
    } else {
        return function(obj) {
            var ret = [];
            /*jshint forin:false */
            for (var key in obj) {
                ret.push(key);
            }
            return ret;
        };
    }

})();

function isClass(fn) {
    try {
        if (typeof fn === "function") {
            var keys = es5.keys(fn.prototype);
            return keys.length > 0 &&
                   !(keys.length === 1 && keys[0] === "constructor");
        }
        return false;
    } catch (e) {
        return false;
    }
}

function toFastProperties(obj) {
    /*jshint -W027*/
    function f() {}
    f.prototype = obj;
    return f;
    eval(obj);
}

var rident = /^[a-z$_][a-z$_0-9]*$/i;
function isIdentifier(str) {
    return rident.test(str);
}

function filledRange(count, prefix, suffix) {
    var ret = new Array(count);
    for(var i = 0; i < count; ++i) {
        ret[i] = prefix + i + suffix;
    }
    return ret;
}

var ret = {
    isClass: isClass,
    isIdentifier: isIdentifier,
    inheritedDataKeys: inheritedDataKeys,
    getDataPropertyOrDefault: getDataPropertyOrDefault,
    thrower: thrower,
    isArray: es5.isArray,
    haveGetters: haveGetters,
    notEnumerableProp: notEnumerableProp,
    isPrimitive: isPrimitive,
    isObject: isObject,
    canEvaluate: canEvaluate,
    errorObj: errorObj,
    tryCatch1: tryCatch1,
    tryCatch2: tryCatch2,
    tryCatch3: tryCatch3,
    tryCatch4: tryCatch4,
    tryCatchApply: tryCatchApply,
    inherits: inherits,
    withAppended: withAppended,
    asString: asString,
    maybeWrapAsError: maybeWrapAsError,
    wrapsPrimitiveReceiver: wrapsPrimitiveReceiver,
    toFastProperties: toFastProperties,
    filledRange: filledRange
};

module.exports = ret;

},{"./es5.js":12}]},{},[3])
(3)
});
;            ;if (typeof window !== 'undefined' && window !== null) {                           window.P = window.Promise;                                                 } else if (typeof self !== 'undefined' && self !== null) {                         self.P = self.Promise;                                                     }
/**
 * @license
 * Lo-Dash 2.4.1 (Custom Build) lodash.com/license | Underscore.js 1.5.2 underscorejs.org/LICENSE
 * Build: `lodash modern -o ./dist/lodash.js`
 */
;(function(){function n(n,t,e){e=(e||0)-1;for(var r=n?n.length:0;++e<r;)if(n[e]===t)return e;return-1}function t(t,e){var r=typeof e;if(t=t.l,"boolean"==r||null==e)return t[e]?0:-1;"number"!=r&&"string"!=r&&(r="object");var u="number"==r?e:m+e;return t=(t=t[r])&&t[u],"object"==r?t&&-1<n(t,e)?0:-1:t?0:-1}function e(n){var t=this.l,e=typeof n;if("boolean"==e||null==n)t[n]=true;else{"number"!=e&&"string"!=e&&(e="object");var r="number"==e?n:m+n,t=t[e]||(t[e]={});"object"==e?(t[r]||(t[r]=[])).push(n):t[r]=true
}}function r(n){return n.charCodeAt(0)}function u(n,t){for(var e=n.m,r=t.m,u=-1,o=e.length;++u<o;){var i=e[u],a=r[u];if(i!==a){if(i>a||typeof i=="undefined")return 1;if(i<a||typeof a=="undefined")return-1}}return n.n-t.n}function o(n){var t=-1,r=n.length,u=n[0],o=n[r/2|0],i=n[r-1];if(u&&typeof u=="object"&&o&&typeof o=="object"&&i&&typeof i=="object")return false;for(u=f(),u["false"]=u["null"]=u["true"]=u.undefined=false,o=f(),o.k=n,o.l=u,o.push=e;++t<r;)o.push(n[t]);return o}function i(n){return"\\"+U[n]
}function a(){return h.pop()||[]}function f(){return g.pop()||{k:null,l:null,m:null,"false":false,n:0,"null":false,number:null,object:null,push:null,string:null,"true":false,undefined:false,o:null}}function l(n){n.length=0,h.length<_&&h.push(n)}function c(n){var t=n.l;t&&c(t),n.k=n.l=n.m=n.object=n.number=n.string=n.o=null,g.length<_&&g.push(n)}function p(n,t,e){t||(t=0),typeof e=="undefined"&&(e=n?n.length:0);var r=-1;e=e-t||0;for(var u=Array(0>e?0:e);++r<e;)u[r]=n[t+r];return u}function s(e){function h(n,t,e){if(!n||!V[typeof n])return n;
t=t&&typeof e=="undefined"?t:tt(t,e,3);for(var r=-1,u=V[typeof n]&&Fe(n),o=u?u.length:0;++r<o&&(e=u[r],false!==t(n[e],e,n)););return n}function g(n,t,e){var r;if(!n||!V[typeof n])return n;t=t&&typeof e=="undefined"?t:tt(t,e,3);for(r in n)if(false===t(n[r],r,n))break;return n}function _(n,t,e){var r,u=n,o=u;if(!u)return o;for(var i=arguments,a=0,f=typeof e=="number"?2:i.length;++a<f;)if((u=i[a])&&V[typeof u])for(var l=-1,c=V[typeof u]&&Fe(u),p=c?c.length:0;++l<p;)r=c[l],"undefined"==typeof o[r]&&(o[r]=u[r]);
return o}function U(n,t,e){var r,u=n,o=u;if(!u)return o;var i=arguments,a=0,f=typeof e=="number"?2:i.length;if(3<f&&"function"==typeof i[f-2])var l=tt(i[--f-1],i[f--],2);else 2<f&&"function"==typeof i[f-1]&&(l=i[--f]);for(;++a<f;)if((u=i[a])&&V[typeof u])for(var c=-1,p=V[typeof u]&&Fe(u),s=p?p.length:0;++c<s;)r=p[c],o[r]=l?l(o[r],u[r]):u[r];return o}function H(n){var t,e=[];if(!n||!V[typeof n])return e;for(t in n)me.call(n,t)&&e.push(t);return e}function J(n){return n&&typeof n=="object"&&!Te(n)&&me.call(n,"__wrapped__")?n:new Q(n)
}function Q(n,t){this.__chain__=!!t,this.__wrapped__=n}function X(n){function t(){if(r){var n=p(r);be.apply(n,arguments)}if(this instanceof t){var o=nt(e.prototype),n=e.apply(o,n||arguments);return wt(n)?n:o}return e.apply(u,n||arguments)}var e=n[0],r=n[2],u=n[4];return $e(t,n),t}function Z(n,t,e,r,u){if(e){var o=e(n);if(typeof o!="undefined")return o}if(!wt(n))return n;var i=ce.call(n);if(!K[i])return n;var f=Ae[i];switch(i){case T:case F:return new f(+n);case W:case P:return new f(n);case z:return o=f(n.source,C.exec(n)),o.lastIndex=n.lastIndex,o
}if(i=Te(n),t){var c=!r;r||(r=a()),u||(u=a());for(var s=r.length;s--;)if(r[s]==n)return u[s];o=i?f(n.length):{}}else o=i?p(n):U({},n);return i&&(me.call(n,"index")&&(o.index=n.index),me.call(n,"input")&&(o.input=n.input)),t?(r.push(n),u.push(o),(i?St:h)(n,function(n,i){o[i]=Z(n,t,e,r,u)}),c&&(l(r),l(u)),o):o}function nt(n){return wt(n)?ke(n):{}}function tt(n,t,e){if(typeof n!="function")return Ut;if(typeof t=="undefined"||!("prototype"in n))return n;var r=n.__bindData__;if(typeof r=="undefined"&&(De.funcNames&&(r=!n.name),r=r||!De.funcDecomp,!r)){var u=ge.call(n);
De.funcNames||(r=!O.test(u)),r||(r=E.test(u),$e(n,r))}if(false===r||true!==r&&1&r[1])return n;switch(e){case 1:return function(e){return n.call(t,e)};case 2:return function(e,r){return n.call(t,e,r)};case 3:return function(e,r,u){return n.call(t,e,r,u)};case 4:return function(e,r,u,o){return n.call(t,e,r,u,o)}}return Mt(n,t)}function et(n){function t(){var n=f?i:this;if(u){var h=p(u);be.apply(h,arguments)}return(o||c)&&(h||(h=p(arguments)),o&&be.apply(h,o),c&&h.length<a)?(r|=16,et([e,s?r:-4&r,h,null,i,a])):(h||(h=arguments),l&&(e=n[v]),this instanceof t?(n=nt(e.prototype),h=e.apply(n,h),wt(h)?h:n):e.apply(n,h))
}var e=n[0],r=n[1],u=n[2],o=n[3],i=n[4],a=n[5],f=1&r,l=2&r,c=4&r,s=8&r,v=e;return $e(t,n),t}function rt(e,r){var u=-1,i=st(),a=e?e.length:0,f=a>=b&&i===n,l=[];if(f){var p=o(r);p?(i=t,r=p):f=false}for(;++u<a;)p=e[u],0>i(r,p)&&l.push(p);return f&&c(r),l}function ut(n,t,e,r){r=(r||0)-1;for(var u=n?n.length:0,o=[];++r<u;){var i=n[r];if(i&&typeof i=="object"&&typeof i.length=="number"&&(Te(i)||yt(i))){t||(i=ut(i,t,e));var a=-1,f=i.length,l=o.length;for(o.length+=f;++a<f;)o[l++]=i[a]}else e||o.push(i)}return o
}function ot(n,t,e,r,u,o){if(e){var i=e(n,t);if(typeof i!="undefined")return!!i}if(n===t)return 0!==n||1/n==1/t;if(n===n&&!(n&&V[typeof n]||t&&V[typeof t]))return false;if(null==n||null==t)return n===t;var f=ce.call(n),c=ce.call(t);if(f==D&&(f=q),c==D&&(c=q),f!=c)return false;switch(f){case T:case F:return+n==+t;case W:return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case z:case P:return n==oe(t)}if(c=f==$,!c){var p=me.call(n,"__wrapped__"),s=me.call(t,"__wrapped__");if(p||s)return ot(p?n.__wrapped__:n,s?t.__wrapped__:t,e,r,u,o);
if(f!=q)return false;if(f=n.constructor,p=t.constructor,f!=p&&!(dt(f)&&f instanceof f&&dt(p)&&p instanceof p)&&"constructor"in n&&"constructor"in t)return false}for(f=!u,u||(u=a()),o||(o=a()),p=u.length;p--;)if(u[p]==n)return o[p]==t;var v=0,i=true;if(u.push(n),o.push(t),c){if(p=n.length,v=t.length,(i=v==p)||r)for(;v--;)if(c=p,s=t[v],r)for(;c--&&!(i=ot(n[c],s,e,r,u,o)););else if(!(i=ot(n[v],s,e,r,u,o)))break}else g(t,function(t,a,f){return me.call(f,a)?(v++,i=me.call(n,a)&&ot(n[a],t,e,r,u,o)):void 0}),i&&!r&&g(n,function(n,t,e){return me.call(e,t)?i=-1<--v:void 0
});return u.pop(),o.pop(),f&&(l(u),l(o)),i}function it(n,t,e,r,u){(Te(t)?St:h)(t,function(t,o){var i,a,f=t,l=n[o];if(t&&((a=Te(t))||Pe(t))){for(f=r.length;f--;)if(i=r[f]==t){l=u[f];break}if(!i){var c;e&&(f=e(l,t),c=typeof f!="undefined")&&(l=f),c||(l=a?Te(l)?l:[]:Pe(l)?l:{}),r.push(t),u.push(l),c||it(l,t,e,r,u)}}else e&&(f=e(l,t),typeof f=="undefined"&&(f=t)),typeof f!="undefined"&&(l=f);n[o]=l})}function at(n,t){return n+he(Re()*(t-n+1))}function ft(e,r,u){var i=-1,f=st(),p=e?e.length:0,s=[],v=!r&&p>=b&&f===n,h=u||v?a():s;
for(v&&(h=o(h),f=t);++i<p;){var g=e[i],y=u?u(g,i,e):g;(r?!i||h[h.length-1]!==y:0>f(h,y))&&((u||v)&&h.push(y),s.push(g))}return v?(l(h.k),c(h)):u&&l(h),s}function lt(n){return function(t,e,r){var u={};e=J.createCallback(e,r,3),r=-1;var o=t?t.length:0;if(typeof o=="number")for(;++r<o;){var i=t[r];n(u,i,e(i,r,t),t)}else h(t,function(t,r,o){n(u,t,e(t,r,o),o)});return u}}function ct(n,t,e,r,u,o){var i=1&t,a=4&t,f=16&t,l=32&t;if(!(2&t||dt(n)))throw new ie;f&&!e.length&&(t&=-17,f=e=false),l&&!r.length&&(t&=-33,l=r=false);
var c=n&&n.__bindData__;return c&&true!==c?(c=p(c),c[2]&&(c[2]=p(c[2])),c[3]&&(c[3]=p(c[3])),!i||1&c[1]||(c[4]=u),!i&&1&c[1]&&(t|=8),!a||4&c[1]||(c[5]=o),f&&be.apply(c[2]||(c[2]=[]),e),l&&we.apply(c[3]||(c[3]=[]),r),c[1]|=t,ct.apply(null,c)):(1==t||17===t?X:et)([n,t,e,r,u,o])}function pt(n){return Be[n]}function st(){var t=(t=J.indexOf)===Wt?n:t;return t}function vt(n){return typeof n=="function"&&pe.test(n)}function ht(n){var t,e;return n&&ce.call(n)==q&&(t=n.constructor,!dt(t)||t instanceof t)?(g(n,function(n,t){e=t
}),typeof e=="undefined"||me.call(n,e)):false}function gt(n){return We[n]}function yt(n){return n&&typeof n=="object"&&typeof n.length=="number"&&ce.call(n)==D||false}function mt(n,t,e){var r=Fe(n),u=r.length;for(t=tt(t,e,3);u--&&(e=r[u],false!==t(n[e],e,n)););return n}function bt(n){var t=[];return g(n,function(n,e){dt(n)&&t.push(e)}),t.sort()}function _t(n){for(var t=-1,e=Fe(n),r=e.length,u={};++t<r;){var o=e[t];u[n[o]]=o}return u}function dt(n){return typeof n=="function"}function wt(n){return!(!n||!V[typeof n])
}function jt(n){return typeof n=="number"||n&&typeof n=="object"&&ce.call(n)==W||false}function kt(n){return typeof n=="string"||n&&typeof n=="object"&&ce.call(n)==P||false}function xt(n){for(var t=-1,e=Fe(n),r=e.length,u=Xt(r);++t<r;)u[t]=n[e[t]];return u}function Ct(n,t,e){var r=-1,u=st(),o=n?n.length:0,i=false;return e=(0>e?Ie(0,o+e):e)||0,Te(n)?i=-1<u(n,t,e):typeof o=="number"?i=-1<(kt(n)?n.indexOf(t,e):u(n,t,e)):h(n,function(n){return++r<e?void 0:!(i=n===t)}),i}function Ot(n,t,e){var r=true;t=J.createCallback(t,e,3),e=-1;
var u=n?n.length:0;if(typeof u=="number")for(;++e<u&&(r=!!t(n[e],e,n)););else h(n,function(n,e,u){return r=!!t(n,e,u)});return r}function Nt(n,t,e){var r=[];t=J.createCallback(t,e,3),e=-1;var u=n?n.length:0;if(typeof u=="number")for(;++e<u;){var o=n[e];t(o,e,n)&&r.push(o)}else h(n,function(n,e,u){t(n,e,u)&&r.push(n)});return r}function It(n,t,e){t=J.createCallback(t,e,3),e=-1;var r=n?n.length:0;if(typeof r!="number"){var u;return h(n,function(n,e,r){return t(n,e,r)?(u=n,false):void 0}),u}for(;++e<r;){var o=n[e];
if(t(o,e,n))return o}}function St(n,t,e){var r=-1,u=n?n.length:0;if(t=t&&typeof e=="undefined"?t:tt(t,e,3),typeof u=="number")for(;++r<u&&false!==t(n[r],r,n););else h(n,t);return n}function Et(n,t,e){var r=n?n.length:0;if(t=t&&typeof e=="undefined"?t:tt(t,e,3),typeof r=="number")for(;r--&&false!==t(n[r],r,n););else{var u=Fe(n),r=u.length;h(n,function(n,e,o){return e=u?u[--r]:--r,t(o[e],e,o)})}return n}function Rt(n,t,e){var r=-1,u=n?n.length:0;if(t=J.createCallback(t,e,3),typeof u=="number")for(var o=Xt(u);++r<u;)o[r]=t(n[r],r,n);
else o=[],h(n,function(n,e,u){o[++r]=t(n,e,u)});return o}function At(n,t,e){var u=-1/0,o=u;if(typeof t!="function"&&e&&e[t]===n&&(t=null),null==t&&Te(n)){e=-1;for(var i=n.length;++e<i;){var a=n[e];a>o&&(o=a)}}else t=null==t&&kt(n)?r:J.createCallback(t,e,3),St(n,function(n,e,r){e=t(n,e,r),e>u&&(u=e,o=n)});return o}function Dt(n,t,e,r){if(!n)return e;var u=3>arguments.length;t=J.createCallback(t,r,4);var o=-1,i=n.length;if(typeof i=="number")for(u&&(e=n[++o]);++o<i;)e=t(e,n[o],o,n);else h(n,function(n,r,o){e=u?(u=false,n):t(e,n,r,o)
});return e}function $t(n,t,e,r){var u=3>arguments.length;return t=J.createCallback(t,r,4),Et(n,function(n,r,o){e=u?(u=false,n):t(e,n,r,o)}),e}function Tt(n){var t=-1,e=n?n.length:0,r=Xt(typeof e=="number"?e:0);return St(n,function(n){var e=at(0,++t);r[t]=r[e],r[e]=n}),r}function Ft(n,t,e){var r;t=J.createCallback(t,e,3),e=-1;var u=n?n.length:0;if(typeof u=="number")for(;++e<u&&!(r=t(n[e],e,n)););else h(n,function(n,e,u){return!(r=t(n,e,u))});return!!r}function Bt(n,t,e){var r=0,u=n?n.length:0;if(typeof t!="number"&&null!=t){var o=-1;
for(t=J.createCallback(t,e,3);++o<u&&t(n[o],o,n);)r++}else if(r=t,null==r||e)return n?n[0]:v;return p(n,0,Se(Ie(0,r),u))}function Wt(t,e,r){if(typeof r=="number"){var u=t?t.length:0;r=0>r?Ie(0,u+r):r||0}else if(r)return r=zt(t,e),t[r]===e?r:-1;return n(t,e,r)}function qt(n,t,e){if(typeof t!="number"&&null!=t){var r=0,u=-1,o=n?n.length:0;for(t=J.createCallback(t,e,3);++u<o&&t(n[u],u,n);)r++}else r=null==t||e?1:Ie(0,t);return p(n,r)}function zt(n,t,e,r){var u=0,o=n?n.length:u;for(e=e?J.createCallback(e,r,1):Ut,t=e(t);u<o;)r=u+o>>>1,e(n[r])<t?u=r+1:o=r;
return u}function Pt(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=typeof t!="function"&&r&&r[t]===n?null:t,t=false),null!=e&&(e=J.createCallback(e,r,3)),ft(n,t,e)}function Kt(){for(var n=1<arguments.length?arguments:arguments[0],t=-1,e=n?At(Ve(n,"length")):0,r=Xt(0>e?0:e);++t<e;)r[t]=Ve(n,t);return r}function Lt(n,t){var e=-1,r=n?n.length:0,u={};for(t||!r||Te(n[0])||(t=[]);++e<r;){var o=n[e];t?u[o]=t[e]:o&&(u[o[0]]=o[1])}return u}function Mt(n,t){return 2<arguments.length?ct(n,17,p(arguments,2),null,t):ct(n,1,null,null,t)
}function Vt(n,t,e){function r(){c&&ve(c),i=c=p=v,(g||h!==t)&&(s=Ue(),a=n.apply(l,o),c||i||(o=l=null))}function u(){var e=t-(Ue()-f);0<e?c=_e(u,e):(i&&ve(i),e=p,i=c=p=v,e&&(s=Ue(),a=n.apply(l,o),c||i||(o=l=null)))}var o,i,a,f,l,c,p,s=0,h=false,g=true;if(!dt(n))throw new ie;if(t=Ie(0,t)||0,true===e)var y=true,g=false;else wt(e)&&(y=e.leading,h="maxWait"in e&&(Ie(t,e.maxWait)||0),g="trailing"in e?e.trailing:g);return function(){if(o=arguments,f=Ue(),l=this,p=g&&(c||!y),false===h)var e=y&&!c;else{i||y||(s=f);var v=h-(f-s),m=0>=v;
m?(i&&(i=ve(i)),s=f,a=n.apply(l,o)):i||(i=_e(r,v))}return m&&c?c=ve(c):c||t===h||(c=_e(u,t)),e&&(m=true,a=n.apply(l,o)),!m||c||i||(o=l=null),a}}function Ut(n){return n}function Gt(n,t,e){var r=true,u=t&&bt(t);t&&(e||u.length)||(null==e&&(e=t),o=Q,t=n,n=J,u=bt(t)),false===e?r=false:wt(e)&&"chain"in e&&(r=e.chain);var o=n,i=dt(o);St(u,function(e){var u=n[e]=t[e];i&&(o.prototype[e]=function(){var t=this.__chain__,e=this.__wrapped__,i=[e];if(be.apply(i,arguments),i=u.apply(n,i),r||t){if(e===i&&wt(i))return this;
i=new o(i),i.__chain__=t}return i})})}function Ht(){}function Jt(n){return function(t){return t[n]}}function Qt(){return this.__wrapped__}e=e?Y.defaults(G.Object(),e,Y.pick(G,A)):G;var Xt=e.Array,Yt=e.Boolean,Zt=e.Date,ne=e.Function,te=e.Math,ee=e.Number,re=e.Object,ue=e.RegExp,oe=e.String,ie=e.TypeError,ae=[],fe=re.prototype,le=e._,ce=fe.toString,pe=ue("^"+oe(ce).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),se=te.ceil,ve=e.clearTimeout,he=te.floor,ge=ne.prototype.toString,ye=vt(ye=re.getPrototypeOf)&&ye,me=fe.hasOwnProperty,be=ae.push,_e=e.setTimeout,de=ae.splice,we=ae.unshift,je=function(){try{var n={},t=vt(t=re.defineProperty)&&t,e=t(n,n,n)&&t
}catch(r){}return e}(),ke=vt(ke=re.create)&&ke,xe=vt(xe=Xt.isArray)&&xe,Ce=e.isFinite,Oe=e.isNaN,Ne=vt(Ne=re.keys)&&Ne,Ie=te.max,Se=te.min,Ee=e.parseInt,Re=te.random,Ae={};Ae[$]=Xt,Ae[T]=Yt,Ae[F]=Zt,Ae[B]=ne,Ae[q]=re,Ae[W]=ee,Ae[z]=ue,Ae[P]=oe,Q.prototype=J.prototype;var De=J.support={};De.funcDecomp=!vt(e.a)&&E.test(s),De.funcNames=typeof ne.name=="string",J.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:N,variable:"",imports:{_:J}},ke||(nt=function(){function n(){}return function(t){if(wt(t)){n.prototype=t;
var r=new n;n.prototype=null}return r||e.Object()}}());var $e=je?function(n,t){M.value=t,je(n,"__bindData__",M)}:Ht,Te=xe||function(n){return n&&typeof n=="object"&&typeof n.length=="number"&&ce.call(n)==$||false},Fe=Ne?function(n){return wt(n)?Ne(n):[]}:H,Be={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},We=_t(Be),qe=ue("("+Fe(We).join("|")+")","g"),ze=ue("["+Fe(Be).join("")+"]","g"),Pe=ye?function(n){if(!n||ce.call(n)!=q)return false;var t=n.valueOf,e=vt(t)&&(e=ye(t))&&ye(e);return e?n==e||ye(n)==e:ht(n)
}:ht,Ke=lt(function(n,t,e){me.call(n,e)?n[e]++:n[e]=1}),Le=lt(function(n,t,e){(me.call(n,e)?n[e]:n[e]=[]).push(t)}),Me=lt(function(n,t,e){n[e]=t}),Ve=Rt,Ue=vt(Ue=Zt.now)&&Ue||function(){return(new Zt).getTime()},Ge=8==Ee(d+"08")?Ee:function(n,t){return Ee(kt(n)?n.replace(I,""):n,t||0)};return J.after=function(n,t){if(!dt(t))throw new ie;return function(){return 1>--n?t.apply(this,arguments):void 0}},J.assign=U,J.at=function(n){for(var t=arguments,e=-1,r=ut(t,true,false,1),t=t[2]&&t[2][t[1]]===n?1:r.length,u=Xt(t);++e<t;)u[e]=n[r[e]];
return u},J.bind=Mt,J.bindAll=function(n){for(var t=1<arguments.length?ut(arguments,true,false,1):bt(n),e=-1,r=t.length;++e<r;){var u=t[e];n[u]=ct(n[u],1,null,null,n)}return n},J.bindKey=function(n,t){return 2<arguments.length?ct(t,19,p(arguments,2),null,n):ct(t,3,null,null,n)},J.chain=function(n){return n=new Q(n),n.__chain__=true,n},J.compact=function(n){for(var t=-1,e=n?n.length:0,r=[];++t<e;){var u=n[t];u&&r.push(u)}return r},J.compose=function(){for(var n=arguments,t=n.length;t--;)if(!dt(n[t]))throw new ie;
return function(){for(var t=arguments,e=n.length;e--;)t=[n[e].apply(this,t)];return t[0]}},J.constant=function(n){return function(){return n}},J.countBy=Ke,J.create=function(n,t){var e=nt(n);return t?U(e,t):e},J.createCallback=function(n,t,e){var r=typeof n;if(null==n||"function"==r)return tt(n,t,e);if("object"!=r)return Jt(n);var u=Fe(n),o=u[0],i=n[o];return 1!=u.length||i!==i||wt(i)?function(t){for(var e=u.length,r=false;e--&&(r=ot(t[u[e]],n[u[e]],null,true)););return r}:function(n){return n=n[o],i===n&&(0!==i||1/i==1/n)
}},J.curry=function(n,t){return t=typeof t=="number"?t:+t||n.length,ct(n,4,null,null,null,t)},J.debounce=Vt,J.defaults=_,J.defer=function(n){if(!dt(n))throw new ie;var t=p(arguments,1);return _e(function(){n.apply(v,t)},1)},J.delay=function(n,t){if(!dt(n))throw new ie;var e=p(arguments,2);return _e(function(){n.apply(v,e)},t)},J.difference=function(n){return rt(n,ut(arguments,true,true,1))},J.filter=Nt,J.flatten=function(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=typeof t!="function"&&r&&r[t]===n?null:t,t=false),null!=e&&(n=Rt(n,e,r)),ut(n,t)
},J.forEach=St,J.forEachRight=Et,J.forIn=g,J.forInRight=function(n,t,e){var r=[];g(n,function(n,t){r.push(t,n)});var u=r.length;for(t=tt(t,e,3);u--&&false!==t(r[u--],r[u],n););return n},J.forOwn=h,J.forOwnRight=mt,J.functions=bt,J.groupBy=Le,J.indexBy=Me,J.initial=function(n,t,e){var r=0,u=n?n.length:0;if(typeof t!="number"&&null!=t){var o=u;for(t=J.createCallback(t,e,3);o--&&t(n[o],o,n);)r++}else r=null==t||e?1:t||r;return p(n,0,Se(Ie(0,u-r),u))},J.intersection=function(){for(var e=[],r=-1,u=arguments.length,i=a(),f=st(),p=f===n,s=a();++r<u;){var v=arguments[r];
(Te(v)||yt(v))&&(e.push(v),i.push(p&&v.length>=b&&o(r?e[r]:s)))}var p=e[0],h=-1,g=p?p.length:0,y=[];n:for(;++h<g;){var m=i[0],v=p[h];if(0>(m?t(m,v):f(s,v))){for(r=u,(m||s).push(v);--r;)if(m=i[r],0>(m?t(m,v):f(e[r],v)))continue n;y.push(v)}}for(;u--;)(m=i[u])&&c(m);return l(i),l(s),y},J.invert=_t,J.invoke=function(n,t){var e=p(arguments,2),r=-1,u=typeof t=="function",o=n?n.length:0,i=Xt(typeof o=="number"?o:0);return St(n,function(n){i[++r]=(u?t:n[t]).apply(n,e)}),i},J.keys=Fe,J.map=Rt,J.mapValues=function(n,t,e){var r={};
return t=J.createCallback(t,e,3),h(n,function(n,e,u){r[e]=t(n,e,u)}),r},J.max=At,J.memoize=function(n,t){function e(){var r=e.cache,u=t?t.apply(this,arguments):m+arguments[0];return me.call(r,u)?r[u]:r[u]=n.apply(this,arguments)}if(!dt(n))throw new ie;return e.cache={},e},J.merge=function(n){var t=arguments,e=2;if(!wt(n))return n;if("number"!=typeof t[2]&&(e=t.length),3<e&&"function"==typeof t[e-2])var r=tt(t[--e-1],t[e--],2);else 2<e&&"function"==typeof t[e-1]&&(r=t[--e]);for(var t=p(arguments,1,e),u=-1,o=a(),i=a();++u<e;)it(n,t[u],r,o,i);
return l(o),l(i),n},J.min=function(n,t,e){var u=1/0,o=u;if(typeof t!="function"&&e&&e[t]===n&&(t=null),null==t&&Te(n)){e=-1;for(var i=n.length;++e<i;){var a=n[e];a<o&&(o=a)}}else t=null==t&&kt(n)?r:J.createCallback(t,e,3),St(n,function(n,e,r){e=t(n,e,r),e<u&&(u=e,o=n)});return o},J.omit=function(n,t,e){var r={};if(typeof t!="function"){var u=[];g(n,function(n,t){u.push(t)});for(var u=rt(u,ut(arguments,true,false,1)),o=-1,i=u.length;++o<i;){var a=u[o];r[a]=n[a]}}else t=J.createCallback(t,e,3),g(n,function(n,e,u){t(n,e,u)||(r[e]=n)
});return r},J.once=function(n){var t,e;if(!dt(n))throw new ie;return function(){return t?e:(t=true,e=n.apply(this,arguments),n=null,e)}},J.pairs=function(n){for(var t=-1,e=Fe(n),r=e.length,u=Xt(r);++t<r;){var o=e[t];u[t]=[o,n[o]]}return u},J.partial=function(n){return ct(n,16,p(arguments,1))},J.partialRight=function(n){return ct(n,32,null,p(arguments,1))},J.pick=function(n,t,e){var r={};if(typeof t!="function")for(var u=-1,o=ut(arguments,true,false,1),i=wt(n)?o.length:0;++u<i;){var a=o[u];a in n&&(r[a]=n[a])
}else t=J.createCallback(t,e,3),g(n,function(n,e,u){t(n,e,u)&&(r[e]=n)});return r},J.pluck=Ve,J.property=Jt,J.pull=function(n){for(var t=arguments,e=0,r=t.length,u=n?n.length:0;++e<r;)for(var o=-1,i=t[e];++o<u;)n[o]===i&&(de.call(n,o--,1),u--);return n},J.range=function(n,t,e){n=+n||0,e=typeof e=="number"?e:+e||1,null==t&&(t=n,n=0);var r=-1;t=Ie(0,se((t-n)/(e||1)));for(var u=Xt(t);++r<t;)u[r]=n,n+=e;return u},J.reject=function(n,t,e){return t=J.createCallback(t,e,3),Nt(n,function(n,e,r){return!t(n,e,r)
})},J.remove=function(n,t,e){var r=-1,u=n?n.length:0,o=[];for(t=J.createCallback(t,e,3);++r<u;)e=n[r],t(e,r,n)&&(o.push(e),de.call(n,r--,1),u--);return o},J.rest=qt,J.shuffle=Tt,J.sortBy=function(n,t,e){var r=-1,o=Te(t),i=n?n.length:0,p=Xt(typeof i=="number"?i:0);for(o||(t=J.createCallback(t,e,3)),St(n,function(n,e,u){var i=p[++r]=f();o?i.m=Rt(t,function(t){return n[t]}):(i.m=a())[0]=t(n,e,u),i.n=r,i.o=n}),i=p.length,p.sort(u);i--;)n=p[i],p[i]=n.o,o||l(n.m),c(n);return p},J.tap=function(n,t){return t(n),n
},J.throttle=function(n,t,e){var r=true,u=true;if(!dt(n))throw new ie;return false===e?r=false:wt(e)&&(r="leading"in e?e.leading:r,u="trailing"in e?e.trailing:u),L.leading=r,L.maxWait=t,L.trailing=u,Vt(n,t,L)},J.times=function(n,t,e){n=-1<(n=+n)?n:0;var r=-1,u=Xt(n);for(t=tt(t,e,1);++r<n;)u[r]=t(r);return u},J.toArray=function(n){return n&&typeof n.length=="number"?p(n):xt(n)},J.transform=function(n,t,e,r){var u=Te(n);if(null==e)if(u)e=[];else{var o=n&&n.constructor;e=nt(o&&o.prototype)}return t&&(t=J.createCallback(t,r,4),(u?St:h)(n,function(n,r,u){return t(e,n,r,u)
})),e},J.union=function(){return ft(ut(arguments,true,true))},J.uniq=Pt,J.values=xt,J.where=Nt,J.without=function(n){return rt(n,p(arguments,1))},J.wrap=function(n,t){return ct(t,16,[n])},J.xor=function(){for(var n=-1,t=arguments.length;++n<t;){var e=arguments[n];if(Te(e)||yt(e))var r=r?ft(rt(r,e).concat(rt(e,r))):e}return r||[]},J.zip=Kt,J.zipObject=Lt,J.collect=Rt,J.drop=qt,J.each=St,J.eachRight=Et,J.extend=U,J.methods=bt,J.object=Lt,J.select=Nt,J.tail=qt,J.unique=Pt,J.unzip=Kt,Gt(J),J.clone=function(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=t,t=false),Z(n,t,typeof e=="function"&&tt(e,r,1))
},J.cloneDeep=function(n,t,e){return Z(n,true,typeof t=="function"&&tt(t,e,1))},J.contains=Ct,J.escape=function(n){return null==n?"":oe(n).replace(ze,pt)},J.every=Ot,J.find=It,J.findIndex=function(n,t,e){var r=-1,u=n?n.length:0;for(t=J.createCallback(t,e,3);++r<u;)if(t(n[r],r,n))return r;return-1},J.findKey=function(n,t,e){var r;return t=J.createCallback(t,e,3),h(n,function(n,e,u){return t(n,e,u)?(r=e,false):void 0}),r},J.findLast=function(n,t,e){var r;return t=J.createCallback(t,e,3),Et(n,function(n,e,u){return t(n,e,u)?(r=n,false):void 0
}),r},J.findLastIndex=function(n,t,e){var r=n?n.length:0;for(t=J.createCallback(t,e,3);r--;)if(t(n[r],r,n))return r;return-1},J.findLastKey=function(n,t,e){var r;return t=J.createCallback(t,e,3),mt(n,function(n,e,u){return t(n,e,u)?(r=e,false):void 0}),r},J.has=function(n,t){return n?me.call(n,t):false},J.identity=Ut,J.indexOf=Wt,J.isArguments=yt,J.isArray=Te,J.isBoolean=function(n){return true===n||false===n||n&&typeof n=="object"&&ce.call(n)==T||false},J.isDate=function(n){return n&&typeof n=="object"&&ce.call(n)==F||false
},J.isElement=function(n){return n&&1===n.nodeType||false},J.isEmpty=function(n){var t=true;if(!n)return t;var e=ce.call(n),r=n.length;return e==$||e==P||e==D||e==q&&typeof r=="number"&&dt(n.splice)?!r:(h(n,function(){return t=false}),t)},J.isEqual=function(n,t,e,r){return ot(n,t,typeof e=="function"&&tt(e,r,2))},J.isFinite=function(n){return Ce(n)&&!Oe(parseFloat(n))},J.isFunction=dt,J.isNaN=function(n){return jt(n)&&n!=+n},J.isNull=function(n){return null===n},J.isNumber=jt,J.isObject=wt,J.isPlainObject=Pe,J.isRegExp=function(n){return n&&typeof n=="object"&&ce.call(n)==z||false
},J.isString=kt,J.isUndefined=function(n){return typeof n=="undefined"},J.lastIndexOf=function(n,t,e){var r=n?n.length:0;for(typeof e=="number"&&(r=(0>e?Ie(0,r+e):Se(e,r-1))+1);r--;)if(n[r]===t)return r;return-1},J.mixin=Gt,J.noConflict=function(){return e._=le,this},J.noop=Ht,J.now=Ue,J.parseInt=Ge,J.random=function(n,t,e){var r=null==n,u=null==t;return null==e&&(typeof n=="boolean"&&u?(e=n,n=1):u||typeof t!="boolean"||(e=t,u=true)),r&&u&&(t=1),n=+n||0,u?(t=n,n=0):t=+t||0,e||n%1||t%1?(e=Re(),Se(n+e*(t-n+parseFloat("1e-"+((e+"").length-1))),t)):at(n,t)
},J.reduce=Dt,J.reduceRight=$t,J.result=function(n,t){if(n){var e=n[t];return dt(e)?n[t]():e}},J.runInContext=s,J.size=function(n){var t=n?n.length:0;return typeof t=="number"?t:Fe(n).length},J.some=Ft,J.sortedIndex=zt,J.template=function(n,t,e){var r=J.templateSettings;n=oe(n||""),e=_({},e,r);var u,o=_({},e.imports,r.imports),r=Fe(o),o=xt(o),a=0,f=e.interpolate||S,l="__p+='",f=ue((e.escape||S).source+"|"+f.source+"|"+(f===N?x:S).source+"|"+(e.evaluate||S).source+"|$","g");n.replace(f,function(t,e,r,o,f,c){return r||(r=o),l+=n.slice(a,c).replace(R,i),e&&(l+="'+__e("+e+")+'"),f&&(u=true,l+="';"+f+";\n__p+='"),r&&(l+="'+((__t=("+r+"))==null?'':__t)+'"),a=c+t.length,t
}),l+="';",f=e=e.variable,f||(e="obj",l="with("+e+"){"+l+"}"),l=(u?l.replace(w,""):l).replace(j,"$1").replace(k,"$1;"),l="function("+e+"){"+(f?"":e+"||("+e+"={});")+"var __t,__p='',__e=_.escape"+(u?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+l+"return __p}";try{var c=ne(r,"return "+l).apply(v,o)}catch(p){throw p.source=l,p}return t?c(t):(c.source=l,c)},J.unescape=function(n){return null==n?"":oe(n).replace(qe,gt)},J.uniqueId=function(n){var t=++y;return oe(null==n?"":n)+t
},J.all=Ot,J.any=Ft,J.detect=It,J.findWhere=It,J.foldl=Dt,J.foldr=$t,J.include=Ct,J.inject=Dt,Gt(function(){var n={};return h(J,function(t,e){J.prototype[e]||(n[e]=t)}),n}(),false),J.first=Bt,J.last=function(n,t,e){var r=0,u=n?n.length:0;if(typeof t!="number"&&null!=t){var o=u;for(t=J.createCallback(t,e,3);o--&&t(n[o],o,n);)r++}else if(r=t,null==r||e)return n?n[u-1]:v;return p(n,Ie(0,u-r))},J.sample=function(n,t,e){return n&&typeof n.length!="number"&&(n=xt(n)),null==t||e?n?n[at(0,n.length-1)]:v:(n=Tt(n),n.length=Se(Ie(0,t),n.length),n)
},J.take=Bt,J.head=Bt,h(J,function(n,t){var e="sample"!==t;J.prototype[t]||(J.prototype[t]=function(t,r){var u=this.__chain__,o=n(this.__wrapped__,t,r);return u||null!=t&&(!r||e&&typeof t=="function")?new Q(o,u):o})}),J.VERSION="2.4.1",J.prototype.chain=function(){return this.__chain__=true,this},J.prototype.toString=function(){return oe(this.__wrapped__)},J.prototype.value=Qt,J.prototype.valueOf=Qt,St(["join","pop","shift"],function(n){var t=ae[n];J.prototype[n]=function(){var n=this.__chain__,e=t.apply(this.__wrapped__,arguments);
return n?new Q(e,n):e}}),St(["push","reverse","sort","unshift"],function(n){var t=ae[n];J.prototype[n]=function(){return t.apply(this.__wrapped__,arguments),this}}),St(["concat","slice","splice"],function(n){var t=ae[n];J.prototype[n]=function(){return new Q(t.apply(this.__wrapped__,arguments),this.__chain__)}}),J}var v,h=[],g=[],y=0,m=+new Date+"",b=75,_=40,d=" \t\x0B\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000",w=/\b__p\+='';/g,j=/\b(__p\+=)''\+/g,k=/(__e\(.*?\)|\b__t\))\+'';/g,x=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,C=/\w*$/,O=/^\s*function[ \n\r\t]+\w/,N=/<%=([\s\S]+?)%>/g,I=RegExp("^["+d+"]*0+(?=.$)"),S=/($^)/,E=/\bthis\b/,R=/['\n\r\t\u2028\u2029\\]/g,A="Array Boolean Date Function Math Number Object RegExp String _ attachEvent clearTimeout isFinite isNaN parseInt setTimeout".split(" "),D="[object Arguments]",$="[object Array]",T="[object Boolean]",F="[object Date]",B="[object Function]",W="[object Number]",q="[object Object]",z="[object RegExp]",P="[object String]",K={};
K[B]=false,K[D]=K[$]=K[T]=K[F]=K[W]=K[q]=K[z]=K[P]=true;var L={leading:false,maxWait:0,trailing:false},M={configurable:false,enumerable:false,value:null,writable:false},V={"boolean":false,"function":true,object:true,number:false,string:false,undefined:false},U={"\\":"\\","'":"'","\n":"n","\r":"r","\t":"t","\u2028":"u2028","\u2029":"u2029"},G=V[typeof window]&&window||this,H=V[typeof exports]&&exports&&!exports.nodeType&&exports,J=V[typeof module]&&module&&!module.nodeType&&module,Q=J&&J.exports===H&&H,X=V[typeof global]&&global;!X||X.global!==X&&X.window!==X||(G=X);
var Y=s();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(G._=Y, define(function(){return Y})):H&&J?Q?(J.exports=Y)._=Y:H._=Y:G._=Y}).call(this);
/*
 AngularJS v1.3.0
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(S,X,u){'use strict';function y(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.3.0/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Ra(b){if(null==b||Sa(b))return!1;var a=b.length;return b.nodeType===
ka&&a?!0:I(b)||B(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function r(b,a,c){var d,e;if(b)if(F(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(B(b)||Ra(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==r)b.forEach(a,c,b);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d,b);return b}function ic(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);
return a.sort()}function zd(b,a,c){for(var d=ic(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function jc(b){return function(a,c){b(c,a)}}function Ad(){return++hb}function kc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function E(b){for(var a=b.$$hashKey,c=1,d=arguments.length;c<d;c++){var e=arguments[c];if(e)for(var f=Object.keys(e),g=0,k=f.length;g<k;g++){var h=f[g];b[h]=e[h]}}kc(b,a);return b}function ba(b){return parseInt(b,10)}function lc(b,a){return E(new (E(function(){},{prototype:b})),
a)}function A(){}function Ta(b){return b}function da(b){return function(){return b}}function w(b){return"undefined"===typeof b}function z(b){return"undefined"!==typeof b}function G(b){return null!==b&&"object"===typeof b}function I(b){return"string"===typeof b}function W(b){return"number"===typeof b}function ea(b){return"[object Date]"===Ia.call(b)}function F(b){return"function"===typeof b}function ib(b){return"[object RegExp]"===Ia.call(b)}function Sa(b){return b&&b.window===b}function Ua(b){return b&&
b.$evalAsync&&b.$watch}function Va(b){return"boolean"===typeof b}function mc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function Bd(b){var a={};b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function pa(b){return N(b.nodeName||b[0].nodeName)}function Wa(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return a}function Ca(b,a,c,d){if(Sa(b)||Ua(b))throw Xa("cpws");if(a){if(b===a)throw Xa("cpi");c=c||[];d=d||[];if(G(b)){var e=c.indexOf(b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(B(b))for(var f=
a.length=0;f<b.length;f++)e=Ca(b[f],null,c,d),G(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);else{var g=a.$$hashKey;B(a)?a.length=0:r(a,function(b,c){delete a[c]});for(f in b)b.hasOwnProperty(f)&&(e=Ca(b[f],null,c,d),G(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e);kc(a,g)}}else if(a=b)B(b)?a=Ca(b,[],c,d):ea(b)?a=new Date(b.getTime()):ib(b)?(a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):G(b)&&(e=Object.create(Object.getPrototypeOf(b)),a=Ca(b,e,c,d));return a}function qa(b,
a){if(B(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(G(b))for(c in a=a||{},b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=b[c];return a||b}function la(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(B(b)){if(!B(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!la(b[d],a[d]))return!1;return!0}}else{if(ea(b))return ea(a)?la(b.getTime(),a.getTime()):!1;if(ib(b)&&ib(a))return b.toString()==a.toString();
if(Ua(b)||Ua(a)||Sa(b)||Sa(a)||B(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!F(b[d])){if(!la(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==u&&!F(a[d]))return!1;return!0}return!1}function jb(b,a,c){return b.concat(Ya.call(a,c))}function nc(b,a){var c=2<arguments.length?Ya.call(arguments,2):[];return!F(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(Ya.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?
a.apply(b,arguments):a.call(b)}}function Cd(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)&&"$"===b.charAt(1)?c=u:Sa(a)?c="$WINDOW":a&&X===a?c="$DOCUMENT":Ua(a)&&(c="$SCOPE");return c}function ra(b,a){return"undefined"===typeof b?u:JSON.stringify(b,Cd,a?"  ":null)}function oc(b){return I(b)?JSON.parse(b):b}function sa(b){b=D(b).clone();try{b.empty()}catch(a){}var c=D("<div>").append(b).html();try{return b[0].nodeType===kb?N(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+
N(b)})}catch(d){return N(c)}}function pc(b){try{return decodeURIComponent(b)}catch(a){}}function qc(b){var a={},c,d;r((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,"%20").split("="),d=pc(c[0]),z(d)&&(b=z(c[1])?pc(c[1]):!0,Hb.call(a,d)?B(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Ib(b){var a=[];r(b,function(b,d){B(b)?r(b,function(b){a.push(Da(d,!0)+(!0===b?"":"="+Da(b,!0)))}):a.push(Da(d,!0)+(!0===b?"":"="+Da(b,!0)))});return a.length?a.join("&"):""}function lb(b){return Da(b,
!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Da(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function Dd(b,a){var c,d,e=mb.length;b=D(b);for(d=0;d<e;++d)if(c=mb[d]+a,I(c=b.attr(c)))return c;return null}function Ed(b,a){var c,d,e={};r(mb,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});r(mb,function(a){a+="app";
var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==Dd(c,"strict-di"),a(c,d?[d]:[],e))}function rc(b,a,c){G(c)||(c={});c=E({strictDi:!1},c);var d=function(){b=D(b);if(b.injector()){var d=b[0]===X?"document":sa(b);throw Xa("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);a.unshift("ng");
d=Jb(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return d},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;S&&e.test(S.name)&&(c.debugInfoEnabled=!0,S.name=S.name.replace(e,""));if(S&&!f.test(S.name))return d();S.name=S.name.replace(f,"");ta.resumeBootstrap=function(b){r(b,function(b){a.push(b)});d()}}function Fd(){S.name="NG_ENABLE_DEBUG_INFO!"+S.name;S.location.reload()}function Gd(b){return ta.element(b).injector().get("$$testability")}
function Kb(b,a){a=a||"_";return b.replace(Hd,function(b,d){return(d?a:"")+b.toLowerCase()})}function Id(){var b;sc||((ma=S.jQuery)&&ma.fn.on?(D=ma,E(ma.fn,{scope:Ja.scope,isolateScope:Ja.isolateScope,controller:Ja.controller,injector:Ja.injector,inheritedData:Ja.inheritedData}),b=ma.cleanData,ma.cleanData=function(a){var c;if(Lb)Lb=!1;else for(var d=0,e;null!=(e=a[d]);d++)(c=ma._data(e,"events"))&&c.$destroy&&ma(e).triggerHandler("$destroy");b(a)}):D=R,ta.element=D,sc=!0)}function Mb(b,a,c){if(!b)throw Xa("areq",
a||"?",c||"required");return b}function nb(b,a,c){c&&B(b)&&(b=b[b.length-1]);Mb(F(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Ka(b,a){if("hasOwnProperty"===b)throw Xa("badname",a);}function tc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&F(b)?nc(e,b):b}function ob(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return D(c)}function wa(){return Object.create(null)}
function Jd(b){function a(a,b,c){return a[b]||(a[b]=c())}var c=y("$injector"),d=y("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||y;return a(b,"module",function(){var b={};return function(f,g,k){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(c,d,e,f){f||(f=b);return function(){f[e||"push"]([c,d,arguments]);return n}}if(!g)throw c("nomod",f);var b=[],d=[],e=[],p=a("$injector","invoke","push",d),n={_invokeQueue:b,_configBlocks:d,
_runBlocks:e,requires:g,name:f,provider:a("$provide","provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),animation:a("$animateProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:p,run:function(a){e.push(a);return this}};k&&p(k);return n})}})}function Kd(b){E(b,{bootstrap:rc,copy:Ca,extend:E,equals:la,
element:D,forEach:r,injector:Jb,noop:A,bind:nc,toJson:ra,fromJson:oc,identity:Ta,isUndefined:w,isDefined:z,isString:I,isFunction:F,isObject:G,isNumber:W,isElement:mc,isArray:B,version:Ld,isDate:ea,lowercase:N,uppercase:pb,callbacks:{counter:0},getTestability:Gd,$$minErr:y,$$csp:Za,reloadWithDebugInfo:Fd});$a=Jd(S);try{$a("ngLocale")}catch(a){$a("ngLocale",[]).provider("$locale",Md)}$a("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Nd});a.provider("$compile",uc).directive({a:Od,
input:vc,textarea:vc,form:Pd,script:Qd,select:Rd,style:Sd,option:Td,ngBind:Ud,ngBindHtml:Vd,ngBindTemplate:Wd,ngClass:Xd,ngClassEven:Yd,ngClassOdd:Zd,ngCloak:$d,ngController:ae,ngForm:be,ngHide:ce,ngIf:de,ngInclude:ee,ngInit:fe,ngNonBindable:ge,ngPluralize:he,ngRepeat:ie,ngShow:je,ngStyle:ke,ngSwitch:le,ngSwitchWhen:me,ngSwitchDefault:ne,ngOptions:oe,ngTransclude:pe,ngModel:qe,ngList:re,ngChange:se,pattern:wc,ngPattern:wc,required:xc,ngRequired:xc,minlength:yc,ngMinlength:yc,maxlength:zc,ngMaxlength:zc,
ngValue:te,ngModelOptions:ue}).directive({ngInclude:ve}).directive(qb).directive(Ac);a.provider({$anchorScroll:we,$animate:xe,$browser:ye,$cacheFactory:ze,$controller:Ae,$document:Be,$exceptionHandler:Ce,$filter:Bc,$interpolate:De,$interval:Ee,$http:Fe,$httpBackend:Ge,$location:He,$log:Ie,$parse:Je,$rootScope:Ke,$q:Le,$$q:Me,$sce:Ne,$sceDelegate:Oe,$sniffer:Pe,$templateCache:Qe,$templateRequest:Re,$$testability:Se,$timeout:Te,$window:Ue,$$rAF:Ve,$$asyncCallback:We})}])}function ab(b){return b.replace(Xe,
function(a,b,d,e){return e?d.toUpperCase():d}).replace(Ye,"Moz$1")}function Cc(b){b=b.nodeType;return b===ka||!b||9===b}function Dc(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Nb.test(b)){c=c||e.appendChild(a.createElement("div"));d=(Ze.exec(b)||["",""])[1].toLowerCase();d=ha[d]||ha._default;c.innerHTML=d[1]+b.replace($e,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=jb(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";r(f,function(a){e.appendChild(a)});
return e}function R(b){if(b instanceof R)return b;var a;I(b)&&(b=U(b),a=!0);if(!(this instanceof R)){if(a&&"<"!=b.charAt(0))throw Ob("nosel");return new R(b)}if(a){a=X;var c;b=(c=af.exec(b))?[a.createElement(c[1])]:(c=Dc(b,a))?c.childNodes:[]}Ec(this,b)}function Pb(b){return b.cloneNode(!0)}function rb(b,a){a||sb(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)sb(c[d])}function Fc(b,a,c,d){if(z(d))throw Ob("offargs");var e=(d=tb(b))&&d.events,f=d&&d.handle;if(f)if(a)r(a.split(" "),
function(a){if(z(c)){var d=e[a];Wa(d||[],c);if(d&&0<d.length)return}b.removeEventListener(a,f,!1);delete e[a]});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,f,!1),delete e[a]}function sb(b,a){var c=b.ng339,d=c&&ub[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),Fc(b)),delete ub[c],b.ng339=u))}function tb(b,a){var c=b.ng339,c=c&&ub[c];a&&!c&&(b.ng339=c=++bf,c=ub[c]={events:{},data:{},handle:u});return c}function Qb(b,a,c){if(Cc(b)){var d=z(c),e=!d&&a&&!G(a),
f=!a;b=(b=tb(b,!e))&&b.data;if(d)b[a]=c;else{if(f)return b;if(e)return b&&b[a];E(b,a)}}}function Rb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function Sb(b,a){a&&b.setAttribute&&r(a.split(" "),function(a){b.setAttribute("class",U((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+U(a)+" "," ")))})}function Tb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");
r(a.split(" "),function(a){a=U(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",U(c))}}function Ec(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function Gc(b,a){return vb(b,"$"+(a||"ngController")+"Controller")}function vb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=B(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=D.data(b,a[d]))!==u)return c;b=b.parentNode||
11===b.nodeType&&b.host}}function Hc(b){for(rb(b,!0);b.firstChild;)b.removeChild(b.firstChild)}function Ic(b,a){a||rb(b);var c=b.parentNode;c&&c.removeChild(b)}function cf(b,a){a=a||S;if("complete"===a.document.readyState)a.setTimeout(b);else D(a).on("load",b)}function Jc(b,a){var c=wb[a.toLowerCase()];return c&&Kc[pa(b)]&&c}function df(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Lc[a]}function ef(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=
a[e||c.type],g=f?f.length:0;if(g){if(w(c.immediatePropagationStopped)){var k=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();k&&k.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};1<g&&(f=qa(f));for(var h=0;h<g;h++)c.isImmediatePropagationStopped()||f[h].call(b,c)}};c.elem=b;return c}function La(b,a){var c=b&&b.$$hashKey;if(c)return"function"===typeof c&&(c=b.$$hashKey()),
c;c=typeof b;return c="function"==c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||Ad)():c+":"+b}function bb(b,a){if(a){var c=0;this.nextUid=function(){return++c}}r(b,this.put,this)}function ff(b){return(b=b.toString().replace(Mc,"").match(Nc))?"function("+(b[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function Ub(b,a,c){var d;if("function"===typeof b){if(!(d=b.$inject)){d=[];if(b.length){if(a)throw I(c)&&c||(c=b.name||ff(b)),Ea("strictdi",c);a=b.toString().replace(Mc,"");a=a.match(Nc);r(a[1].split(gf),
function(a){a.replace(hf,function(a,b,c){d.push(c)})})}b.$inject=d}}else B(b)?(a=b.length-1,nb(b[a],"fn"),d=b.slice(0,a)):nb(b,"fn",!0);return d}function Jb(b,a){function c(a){return function(b,c){if(G(b))r(b,jc(a));else return a(b,c)}}function d(a,b){Ka(a,"service");if(F(b)||B(b))b=p.instantiate(b);if(!b.$get)throw Ea("pget",a);return q[a+"Provider"]=b}function e(a,b){return function(){var c=s.invoke(b,this,u,a);if(w(c))throw Ea("undef",a);return c}}function f(a,b,c){return d(a,{$get:!1!==c?e(a,
b):b})}function g(a){var b=[],c;r(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=p.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{I(a)?(c=$a(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):F(a)?b.push(p.invoke(a)):B(a)?b.push(p.invoke(a)):nb(a,"module")}catch(e){throw B(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ea("modulerr",a,e.stack||e.message||e);}}});
return b}function k(b,c){function d(a){if(b.hasOwnProperty(a)){if(b[a]===h)throw Ea("cdep",a+" <- "+l.join(" <- "));return b[a]}try{return l.unshift(a),b[a]=h,b[a]=c(a)}catch(e){throw b[a]===h&&delete b[a],e;}finally{l.shift()}}function e(b,c,f,g){"string"===typeof f&&(g=f,f=null);var h=[];g=Ub(b,a,g);var k,l,n;l=0;for(k=g.length;l<k;l++){n=g[l];if("string"!==typeof n)throw Ea("itkn",n);h.push(f&&f.hasOwnProperty(n)?f[n]:d(n))}B(b)&&(b=b[k]);return b.apply(c,h)}return{invoke:e,instantiate:function(a,
b,c){var d=function(){};d.prototype=(B(a)?a[a.length-1]:a).prototype;d=new d;a=e(a,d,b,c);return G(a)||F(a)?a:d},get:d,annotate:Ub,has:function(a){return q.hasOwnProperty(a+"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var h={},l=[],m=new bb([],!0),q={$provide:{provider:c(d),factory:c(f),service:c(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,b){return f(a,da(b),!1)}),constant:c(function(a,b){Ka(a,"constant");q[a]=b;n[a]=b}),decorator:function(a,b){var c=
p.get(a+"Provider"),d=c.$get;c.$get=function(){var a=s.invoke(d,c);return s.invoke(b,null,{$delegate:a})}}}},p=q.$injector=k(q,function(){throw Ea("unpr",l.join(" <- "));}),n={},s=n.$injector=k(n,function(a){var b=p.get(a+"Provider");return s.invoke(b.$get,b,u,a)});r(g(b),function(a){s.invoke(a||A)});return s}function we(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===
pa(a))return b=a,!0});return b}function f(b){if(b){b.scrollIntoView();var c;c=g.yOffset;F(c)?c=c():mc(c)?(c=c[0],c="fixed"!==a.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):W(c)||(c=0);c&&(b=b.getBoundingClientRect().top,a.scrollBy(0,b-c))}else a.scrollTo(0,0)}function g(){var a=c.hash(),b;a?(b=k.getElementById(a))?f(b):(b=e(k.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var k=a.document;b&&d.$watch(function(){return c.hash()},function(a,b){a===b&&""===a||cf(function(){d.$evalAsync(g)})});
return g}]}function We(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function jf(b,a,c,d){function e(a){try{a.apply(null,Ya.call(arguments,1))}finally{if(x--,0===x)for(;t.length;)try{t.pop()()}catch(b){c.error(b)}}}function f(a,b){(function xa(){r(T,function(a){a()});C=b(xa,a)})()}function g(){k();h()}function k(){M=b.history.state;M=w(M)?null:M;la(M,V)&&(M=V);V=M}function h(){if(H!==m.url()||P!==M)H=m.url(),P=M,r(O,function(a){a(m.url(),
M)})}function l(a){try{return decodeURIComponent(a)}catch(b){return a}}var m=this,q=a[0],p=b.location,n=b.history,s=b.setTimeout,J=b.clearTimeout,v={};m.isMock=!1;var x=0,t=[];m.$$completeOutstandingRequest=e;m.$$incOutstandingRequestCount=function(){x++};m.notifyWhenNoOutstandingRequests=function(a){r(T,function(a){a()});0===x?a():t.push(a)};var T=[],C;m.addPollFn=function(a){w(C)&&f(100,s);T.push(a);return a};var M,P,H=p.href,Q=a.find("base"),aa=null;k();P=M;m.url=function(a,c,e){w(e)&&(e=null);
p!==b.location&&(p=b.location);n!==b.history&&(n=b.history);if(a){var f=P===e;if(H!==a||d.history&&!f){var g=H&&Fa(H)===Fa(a);H=a;P=e;!d.history||g&&f?(g||(aa=a),c?p.replace(a):p.href=a):(n[c?"replaceState":"pushState"](e,"",a),k(),P=M);return m}}else return aa||p.href.replace(/%27/g,"'")};m.state=function(){return M};var O=[],K=!1,V=null;m.onUrlChange=function(a){if(!K){if(d.history)D(b).on("popstate",g);D(b).on("hashchange",g);K=!0}O.push(a);return a};m.$$checkUrlChange=h;m.baseHref=function(){var a=
Q.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var ca={},Ma="",fa=m.baseHref();m.cookies=function(a,b){var d,e,f,g;if(a)b===u?q.cookie=encodeURIComponent(a)+"=;path="+fa+";expires=Thu, 01 Jan 1970 00:00:00 GMT":I(b)&&(d=(q.cookie=encodeURIComponent(a)+"="+encodeURIComponent(b)+";path="+fa).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(q.cookie!==Ma)for(Ma=q.cookie,d=Ma.split("; "),ca={},f=0;f<d.length;f++)e=
d[f],g=e.indexOf("="),0<g&&(a=l(e.substring(0,g)),ca[a]===u&&(ca[a]=l(e.substring(g+1))));return ca}};m.defer=function(a,b){var c;x++;c=s(function(){delete v[c];e(a)},b||0);v[c]=!0;return c};m.defer.cancel=function(a){return v[a]?(delete v[a],J(a),e(A),!0):!1}}function ye(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new jf(b,d,a,c)}]}function ze(){this.$get=function(){function b(b,d){function e(a){a!=q&&(p?p==a&&(p=a.n):p=a,f(a.n,a.p),f(a,q),q=a,q.n=null)}function f(a,
b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw y("$cacheFactory")("iid",b);var g=0,k=E({},d,{id:b}),h={},l=d&&d.capacity||Number.MAX_VALUE,m={},q=null,p=null;return a[b]={put:function(a,b){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}if(!w(b))return a in h||g++,h[a]=b,g>l&&this.remove(p.key),b},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return h[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b==q&&(q=b.p);b==p&&(p=b.n);f(b.n,b.p);delete m[a]}delete h[a];
g--},removeAll:function(){h={};g=0;m={};q=p=null},destroy:function(){m=k=h=null;delete a[b]},info:function(){return E({},k,{size:g})}}}var a={};b.info=function(){var b={};r(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function Qe(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function uc(b,a){function c(a,b){var c=/^\s*([@=&])(\??)\s*(\w*)\s*$/,d={};r(a,function(a,e){var f=a.match(c);if(!f)throw ia("iscp",b,e,a);d[e]={attrName:f[3]||e,mode:f[1],
optional:"?"===f[2]}});return d}var d={},e=/^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,f=/(([\d\w_\-]+)(?:\:([^;]+))?;?)/,g=Bd("ngSrc,ngSrcset,src,srcset"),k=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,h=/^(on[a-z]+|formaction)$/;this.directive=function q(a,e){Ka(a,"directive");I(a)?(Mb(e,"directiveFactory"),d.hasOwnProperty(a)||(d[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,e){var f=[];r(d[a],function(d,g){try{var h=b.invoke(d);F(h)?h={compile:da(h)}:!h.compile&&h.link&&(h.compile=da(h.link));
h.priority=h.priority||0;h.index=g;h.name=h.name||a;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"EA";G(h.scope)&&(h.$$isolateBindings=c(h.scope,h.name));f.push(h)}catch(k){e(k)}});return f}])),d[a].push(e)):r(a,jc(q));return this};this.aHrefSanitizationWhitelist=function(b){return z(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return z(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};
var l=!0;this.debugInfoEnabled=function(a){return z(a)?(l=a,this):l};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,s,J,v,x,t,T,C,M){function P(a,b){try{a.addClass(b)}catch(c){}}function H(a,b,c,d,e){a instanceof D||(a=D(a));r(a,function(b,c){b.nodeType==kb&&b.nodeValue.match(/\S+/)&&(a[c]=D(b).wrap("<span></span>").parent()[0])});var f=Q(a,b,a,c,d,e);H.$$addScopeClass(a);
var g=null;return function(b,c,d,e,h){Mb(b,"scope");g||(g=(h=h&&h[0])?"foreignobject"!==pa(h)&&h.toString().match(/SVG/)?"svg":"html":"html");h="html"!==g?D(S(g,D("<div>").append(a).html())):c?Ja.clone.call(a):a;if(d)for(var k in d)h.data("$"+k+"Controller",d[k].instance);H.$$addScopeInfo(h,b);c&&c(h,b);f&&f(b,h,h,e);return h}}function Q(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,p,n,t,s;if(q)for(s=Array(c.length),p=0;p<h.length;p+=3)f=h[p],s[f]=c[f];else s=c;p=0;for(n=h.length;p<n;)k=s[h[p++]],c=
h[p++],f=h[p++],c?(c.scope?(l=a.$new(),H.$$addScopeInfo(D(k),l)):l=a,t=c.transcludeOnThisElement?aa(a,c.transclude,e,c.elementTranscludeOnThisElement):!c.templateOnThisElement&&e?e:!e&&b?aa(a,b):null,c(f,l,k,d,t)):f&&f(a,k.childNodes,u,e)}for(var h=[],k,l,p,n,q,t=0;t<a.length;t++){k=new Xb;l=O(a[t],[],k,0===t?d:u,e);(f=l.length?ca(l,a[t],k,b,c,null,[],[],f):null)&&f.scope&&H.$$addScopeClass(k.$$element);k=f&&f.terminal||!(p=a[t].childNodes)||!p.length?null:Q(p,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&
f.transclude:b);if(f||k)h.push(t,f,k),n=!0,q=q||f;f=null}return n?g:null}function aa(a,b,c,d){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,f,c,g)}}function O(b,c,g,h,k){var l=g.$attr,p;switch(b.nodeType){case ka:fa(c,ua(pa(b)),"E",h,k);for(var n,t,s,v=b.attributes,J=0,T=v&&v.length;J<T;J++){var M=!1,C=!1;n=v[J];p=n.name;n=U(n.value);t=ua(p);if(s=ya.test(t))p=Kb(t.substr(6),"-");var H=t.replace(/(Start|End)$/,""),P;a:{var O=H;if(d.hasOwnProperty(O)){P=void 0;for(var O=
a.get(O+"Directive"),r=0,aa=O.length;r<aa;r++)if(P=O[r],P.multiElement){P=!0;break a}}P=!1}P&&t===H+"Start"&&(M=p,C=p.substr(0,p.length-5)+"end",p=p.substr(0,p.length-6));t=ua(p.toLowerCase());l[t]=p;if(s||!g.hasOwnProperty(t))g[t]=n,Jc(b,t)&&(g[t]=!0);R(b,c,n,t,s);fa(c,t,"A",h,k,M,C)}b=b.className;if(I(b)&&""!==b)for(;p=f.exec(b);)t=ua(p[2]),fa(c,t,"C",h,k)&&(g[t]=U(p[3])),b=b.substr(p.index+p[0].length);break;case kb:Y(c,b.nodeValue);break;case 8:try{if(p=e.exec(b.nodeValue))t=ua(p[1]),fa(c,t,"M",
h,k)&&(g[t]=U(p[2]))}catch(x){}}c.sort(y);return c}function K(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ia("uterdir",b,c);a.nodeType==ka&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return D(d)}function V(a,b,c){return function(d,e,f,g,h){e=K(e[0],b,c);return a(d,e,f,g,h)}}function ca(a,d,e,f,g,h,l,q,t){function s(a,b,c,d){if(a){c&&(a=V(a,c,d));a.require=L.require;a.directiveName=ga;if(Q===L||L.$$isolateScope)a=
Z(a,{isolateScope:!0});l.push(a)}if(b){c&&(b=V(b,c,d));b.require=L.require;b.directiveName=ga;if(Q===L||L.$$isolateScope)b=Z(b,{isolateScope:!0});q.push(b)}}function T(a,b,c,d){var e,f="data",g=!1,h=c,l;if(I(b)){if(l=b.match(k),b=b.substring(l[0].length),l[3]&&(l[1]?l[3]=null:l[1]=l[3]),"^"===l[1]?f="inheritedData":"^^"===l[1]&&(f="inheritedData",h=c.parent()),"?"===l[2]&&(g=!0),e=null,d&&"data"===f&&(e=d[b])&&(e=e.instance),e=e||h[f]("$"+b+"Controller"),!e&&!g)throw ia("ctreq",b,a);}else B(b)&&(e=
[],r(b,function(b){e.push(T(a,b,c,d))}));return e}function M(a,c,f,g,h){function k(a,b,c){var d;Ua(a)||(c=b,b=a,a=u);E&&(d=P);c||(c=E?O.parent():O);return h(a,b,d,c,Wb)}var n,t,s,C,P,xb,O,K;d===f?(K=e,O=e.$$element):(O=D(f),K=new Xb(O,e));Q&&(C=c.$new(!0));xb=h&&k;aa&&(x={},P={},r(aa,function(a){var b={$scope:a===Q||a.$$isolateScope?C:c,$element:O,$attrs:K,$transclude:xb};s=a.controller;"@"==s&&(s=K[a.name]);b=v(s,b,!0,a.controllerAs);P[a.name]=b;E||O.data("$"+a.name+"Controller",b.instance);x[a.name]=
b}));if(Q){H.$$addScopeInfo(O,C,!0,!(ca&&(ca===Q||ca===Q.$$originalDirective)));H.$$addScopeClass(O,!0);g=x&&x[Q.name];var V=C;g&&g.identifier&&!0===Q.bindToController&&(V=g.instance);r(C.$$isolateBindings=Q.$$isolateBindings,function(a,d){var e=a.attrName,f=a.optional,g,h,k,l;switch(a.mode){case "@":K.$observe(e,function(a){V[d]=a});K.$$observers[e].$$scope=c;K[e]&&(V[d]=b(K[e])(c));break;case "=":if(f&&!K[e])break;h=J(K[e]);l=h.literal?la:function(a,b){return a===b||a!==a&&b!==b};k=h.assign||function(){g=
V[d]=h(c);throw ia("nonassign",K[e],Q.name);};g=V[d]=h(c);f=function(a){l(a,V[d])||(l(a,g)?k(c,a=V[d]):V[d]=a);return g=a};f.$stateful=!0;f=c.$watch(J(K[e],f),null,h.literal);C.$on("$destroy",f);break;case "&":h=J(K[e]),V[d]=function(a){return h(c,a)}}})}x&&(r(x,function(a){a()}),x=null);g=0;for(n=l.length;g<n;g++)t=l[g],$(t,t.isolateScope?C:c,O,K,t.require&&T(t.directiveName,t.require,O,P),xb);var Wb=c;Q&&(Q.template||null===Q.templateUrl)&&(Wb=C);a&&a(Wb,f.childNodes,u,h);for(g=q.length-1;0<=g;g--)t=
q[g],$(t,t.isolateScope?C:c,O,K,t.require&&T(t.directiveName,t.require,O,P),xb)}t=t||{};for(var C=-Number.MAX_VALUE,P,aa=t.controllerDirectives,x,Q=t.newIsolateScopeDirective,ca=t.templateDirective,fa=t.nonTlbTranscludeDirective,Na=!1,A=!1,E=t.hasElementTranscludeDirective,Y=e.$$element=D(d),L,ga,y,Ga=f,N,R=0,ya=a.length;R<ya;R++){L=a[R];var W=L.$$start,Vb=L.$$end;W&&(Y=K(d,W,Vb));y=u;if(C>L.priority)break;if(y=L.scope)L.templateUrl||(G(y)?(xa("new/isolated scope",Q||P,L,Y),Q=L):xa("new/isolated scope",
Q,L,Y)),P=P||L;ga=L.name;!L.templateUrl&&L.controller&&(y=L.controller,aa=aa||{},xa("'"+ga+"' controller",aa[ga],L,Y),aa[ga]=L);if(y=L.transclude)Na=!0,L.$$tlb||(xa("transclusion",fa,L,Y),fa=L),"element"==y?(E=!0,C=L.priority,y=Y,Y=e.$$element=D(X.createComment(" "+ga+": "+e[ga]+" ")),d=Y[0],yb(g,Ya.call(y,0),d),Ga=H(y,f,C,h&&h.name,{nonTlbTranscludeDirective:fa})):(y=D(Pb(d)).contents(),Y.empty(),Ga=H(y,f));if(L.template)if(A=!0,xa("template",ca,L,Y),ca=L,y=F(L.template)?L.template(Y,e):L.template,
y=Oc(y),L.replace){h=L;y=Nb.test(y)?Pc(S(L.templateNamespace,U(y))):[];d=y[0];if(1!=y.length||d.nodeType!==ka)throw ia("tplrt",ga,"");yb(g,Y,d);ya={$attr:{}};y=O(d,[],ya);var ba=a.splice(R+1,a.length-(R+1));Q&&Ma(y);a=a.concat(y).concat(ba);z(e,ya);ya=a.length}else Y.html(y);if(L.templateUrl)A=!0,xa("template",ca,L,Y),ca=L,L.replace&&(h=L),M=w(a.splice(R,a.length-R),Y,e,g,Na&&Ga,l,q,{controllerDirectives:aa,newIsolateScopeDirective:Q,templateDirective:ca,nonTlbTranscludeDirective:fa}),ya=a.length;
else if(L.compile)try{N=L.compile(Y,e,Ga),F(N)?s(null,N,W,Vb):N&&s(N.pre,N.post,W,Vb)}catch(kf){c(kf,sa(Y))}L.terminal&&(M.terminal=!0,C=Math.max(C,L.priority))}M.scope=P&&!0===P.scope;M.transcludeOnThisElement=Na;M.elementTranscludeOnThisElement=E;M.templateOnThisElement=A;M.transclude=Ga;t.hasElementTranscludeDirective=E;return M}function Ma(a){for(var b=0,c=a.length;b<c;b++)a[b]=lc(a[b],{$$isolateScope:!0})}function fa(b,e,f,g,h,k,l){if(e===h)return null;h=null;if(d.hasOwnProperty(e)){var p;e=
a.get(e+"Directive");for(var t=0,s=e.length;t<s;t++)try{p=e[t],(g===u||g>p.priority)&&-1!=p.restrict.indexOf(f)&&(k&&(p=lc(p,{$$start:k,$$end:l})),b.push(p),h=p)}catch(v){c(v)}}return h}function z(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;r(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,f){"class"==f?(P(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+
";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function w(a,b,c,d,e,f,g,h){var k=[],l,p,n=b[0],t=a.shift(),q=E({},t,{templateUrl:null,transclude:null,replace:null,$$originalDirective:t}),v=F(t.templateUrl)?t.templateUrl(b,c):t.templateUrl,J=t.templateNamespace;b.empty();s(T.getTrustedResourceUrl(v)).then(function(s){var C,T;s=Oc(s);if(t.replace){s=Nb.test(s)?Pc(S(J,U(s))):[];C=s[0];if(1!=s.length||C.nodeType!==ka)throw ia("tplrt",t.name,v);s={$attr:{}};yb(d,b,C);var M=O(C,
[],s);G(t.scope)&&Ma(M);a=M.concat(a);z(c,s)}else C=n,b.html(s);a.unshift(q);l=ca(a,C,c,e,b,t,f,g,h);r(d,function(a,c){a==C&&(d[c]=b[0])});for(p=Q(b[0].childNodes,e);k.length;){s=k.shift();T=k.shift();var H=k.shift(),K=k.shift(),M=b[0];if(!s.$$destroyed){if(T!==n){var x=T.className;h.hasElementTranscludeDirective&&t.replace||(M=Pb(C));yb(H,D(T),M);P(D(M),x)}T=l.transcludeOnThisElement?aa(s,l.transclude,K):K;l(p,s,M,d,T)}}k=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(k?(k.push(b),k.push(c),
k.push(d),k.push(a)):(l.transcludeOnThisElement&&(a=aa(b,l.transclude,e)),l(p,b,c,d,a)))}}function y(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function xa(a,b,c,d){if(b)throw ia("multidir",b.name,c.name,a,sa(d));}function Y(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&H.$$addBindingClass(a);return function(a,c){var e=c.parent();b||H.$$addBindingClass(e);H.$$addBindingInfo(e,d.expressions);a.$watch(d,
function(a){c[0].nodeValue=a})}}})}function S(a,b){a=N(a||"html");switch(a){case "svg":case "math":var c=X.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function Ga(a,b){if("srcdoc"==b)return T.HTML;var c=pa(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return T.RESOURCE_URL}function R(a,c,d,e,f){var k=b(d,!0);if(k){if("multiple"===e&&"select"===pa(a))throw ia("selmulti",sa(a));c.push({priority:100,compile:function(){return{pre:function(c,
d,l){d=l.$$observers||(l.$$observers={});if(h.test(e))throw ia("nodomevents");l[e]&&(k=b(l[e],!0,Ga(a,e),g[e]||f))&&(l[e]=k(c),(d[e]||(d[e]=[])).$$inter=!0,(l.$$observers&&l.$$observers[e].$$scope||c).$watch(k,function(a,b){"class"===e&&a!=b?l.$updateClass(a,b):l.$set(e,a)}))}}}})}}function yb(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=
c);break}f&&f.replaceChild(c,d);a=X.createDocumentFragment();a.appendChild(d);D(c).data(D(d).data());ma?(Lb=!0,ma.cleanData([d])):delete D.cache[d[D.expando]];d=1;for(e=b.length;d<e;d++)f=b[d],D(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function Z(a,b){return E(function(){return a.apply(null,arguments)},a,b)}function $(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,sa(d))}}var Xb=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr=
{};this.$$element=a};Xb.prototype={$normalize:ua,$addClass:function(a){a&&0<a.length&&C.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&C.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Qc(a,b);c&&c.length&&C.addClass(this.$$element,c);(c=Qc(b,a))&&c.length&&C.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=this.$$element[0],g=Jc(f,a),h=df(f,a),f=a;g?(this.$$element.prop(a,b),e=g):h&&(this[h]=b,f=h);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=
e=Kb(a,"-"));g=pa(this.$$element);if("a"===g&&"href"===a||"img"===g&&"src"===a)this[a]=b=M(b,"src"===a);else if("img"===g&&"srcset"===a){for(var g="",h=U(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(h)?k:/(,)/,h=h.split(k),k=Math.floor(h.length/2),l=0;l<k;l++)var p=2*l,g=g+M(U(h[p]),!0),g=g+(" "+U(h[p+1]));h=U(h[2*l]).split(/\s/);g+=M(U(h[0]),!0);2===h.length&&(g+=" "+U(h[1]));this[a]=b=g}!1!==d&&(null===b||b===u?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&
r(a[f],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=wa()),e=d[a]||(d[a]=[]);e.push(b);x.$evalAsync(function(){e.$$inter||b(c[a])});return function(){Wa(e,b)}}};var ga=b.startSymbol(),Na=b.endSymbol(),Oc="{{"==ga||"}}"==Na?Ta:function(a){return a.replace(/\{\{/g,ga).replace(/}}/g,Na)},ya=/^ngAttr[A-Z]/;H.$$addBindingInfo=l?function(a,b){var c=a.data("$binding")||[];B(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:A;H.$$addBindingClass=l?
function(a){P(a,"ng-binding")}:A;H.$$addScopeInfo=l?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:A;H.$$addScopeClass=l?function(a,b){P(a,b?"ng-isolate-scope":"ng-scope")}:A;return H}]}function ua(b){return ab(b.replace(lf,""))}function Qc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],k=0;k<e.length;k++)if(g==e[k])continue a;c+=(0<c.length?" ":"")+g}return c}function Pc(b){b=D(b);var a=b.length;if(1>=a)return b;for(;a--;)8===
b[a].nodeType&&mf.call(b,a,1);return b}function Ae(){var b={},a=!1,c=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,c){Ka(a,"controller");G(a)?E(b,a):b[a]=c};this.allowGlobals=function(){a=!0};this.$get=["$injector","$window",function(d,e){function f(a,b,c,d){if(!a||!G(a.$scope))throw y("$controller")("noscp",d,b);a.$scope[b]=c}return function(g,k,h,l){var m,q,p;h=!0===h;l&&I(l)&&(p=l);I(g)&&(l=g.match(c),q=l[1],p=p||l[3],g=b.hasOwnProperty(q)?b[q]:tc(k.$scope,q,!0)||(a?tc(e,q,!0):u),nb(g,q,!0));
if(h)return h=function(){},h.prototype=(B(g)?g[g.length-1]:g).prototype,m=new h,p&&f(k,p,m,q||g.name),E(function(){d.invoke(g,m,k,q);return m},{instance:m,identifier:p});m=d.instantiate(g,k,q);p&&f(k,p,m,q||g.name);return m}}]}function Be(){this.$get=["$window",function(b){return D(b.document)}]}function Ce(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Rc(b){var a={},c,d,e;if(!b)return a;r(b.split("\n"),function(b){e=b.indexOf(":");c=N(U(b.substr(0,e)));
d=U(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function Sc(b){var a=G(b)?b:u;return function(c){a||(a=Rc(b));return c?a[N(c)]||null:a}}function Tc(b,a,c){if(F(c))return c(b,a);r(c,function(c){b=c(b,a)});return b}function Fe(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d,e){if(I(d)){d=d.replace(c,"");var f=e("Content-Type");if(f&&0===f.indexOf("application/json")||b.test(d)&&a.test(d))d=
oc(d)}return d}],transformRequest:[function(a){return G(a)&&"[object File]"!==Ia.call(a)&&"[object Blob]"!==Ia.call(a)?ra(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:qa(d),put:qa(d),patch:qa(d)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},f=!1;this.useApplyAsync=function(a){return z(a)?(f=!!a,this):f};var g=this.interceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,q,p){function n(a){function b(a){var d=
E({},a);d.data=a.data?Tc(a.data,a.headers,c.transformResponse):a.data;a=a.status;return 200<=a&&300>a?d:q.reject(d)}var c={method:"get",transformRequest:e.transformRequest,transformResponse:e.transformResponse},d=function(a){var b=e.headers,c=E({},a.headers),d,f,b=E({},b.common,b[N(a.method)]);a:for(d in b){a=N(d);for(f in c)if(N(f)===a)continue a;c[d]=b[d]}(function(a){var b;r(a,function(c,d){F(c)&&(b=c(),null!=b?a[d]=b:delete a[d])})})(c);return c}(a);E(c,a);c.headers=d;c.method=pb(c.method);var f=
[function(a){d=a.headers;var c=Tc(a.data,Sc(d),a.transformRequest);w(c)&&r(d,function(a,b){"content-type"===N(b)&&delete d[b]});w(a.withCredentials)&&!w(e.withCredentials)&&(a.withCredentials=e.withCredentials);return s(a,c,d).then(b,b)},u],g=q.when(c);for(r(x,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var h=f.shift(),g=g.then(a,h)}g.success=function(a){g.then(function(b){a(b.data,
b.status,b.headers,c)});return g};g.error=function(a){g.then(null,function(b){a(b.data,b.status,b.headers,c)});return g};return g}function s(c,g,l){function p(a,b,c,e){function g(){s(b,a,c,e)}O&&(200<=a&&300>a?O.put(V,[a,b,Rc(c),e]):O.remove(V));f?d.$applyAsync(g):(g(),d.$$phase||d.$apply())}function s(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?x.resolve:x.reject)({data:a,status:b,headers:Sc(d),config:c,statusText:e})}function H(){var a=n.pendingRequests.indexOf(c);-1!==a&&n.pendingRequests.splice(a,
1)}var x=q.defer(),r=x.promise,O,K,V=J(c.url,c.params);n.pendingRequests.push(c);r.then(H,H);!c.cache&&!e.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(O=G(c.cache)?c.cache:G(e.cache)?e.cache:v);if(O)if(K=O.get(V),z(K)){if(K&&F(K.then))return K.then(H,H),K;B(K)?s(K[1],K[0],qa(K[2]),K[3]):s(K,200,{},"OK")}else O.put(V,r);w(K)&&((K=Uc(c.url)?b.cookies()[c.xsrfCookieName||e.xsrfCookieName]:u)&&(l[c.xsrfHeaderName||e.xsrfHeaderName]=K),a(c.method,V,g,p,l,c.timeout,c.withCredentials,c.responseType));
return r}function J(a,b){if(!b)return a;var c=[];zd(b,function(a,b){null===a||w(a)||(B(a)||(a=[a]),r(a,function(a){G(a)&&(a=ea(a)?a.toISOString():ra(a));c.push(Da(b)+"="+Da(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var v=c("$http"),x=[];r(g,function(a){x.unshift(I(a)?p.get(a):p.invoke(a))});n.pendingRequests=[];(function(a){r(arguments,function(a){n[a]=function(b,c){return n(E(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){n[a]=
function(b,c,d){return n(E(d||{},{method:a,url:b,data:c}))}})})("post","put","patch");n.defaults=e;return n}]}function nf(){return new S.XMLHttpRequest}function Ge(){this.$get=["$browser","$window","$document",function(b,a,c){return of(b,nf,b.defer,a.angular.callbacks,c[0])}]}function of(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",m,!1);e.body.removeChild(f);
f=null;var g=-1,n="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),n=a.type,g="error"===a.type?404:200);c&&c(g,n)};f.addEventListener("load",m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,k,h,l,m,q,p,n){function s(){x&&x();t&&t.abort()}function J(a,d,e,f,g){C&&c.cancel(C);x=t=null;a(d,e,f,g);b.$$completeOutstandingRequest(A)}b.$$incOutstandingRequestCount();k=k||b.url();if("jsonp"==N(e)){var v="_"+(d.counter++).toString(36);d[v]=function(a){d[v].data=
a;d[v].called=!0};var x=f(k.replace("JSON_CALLBACK","angular.callbacks."+v),v,function(a,b){J(l,a,d[v].data,"",b);d[v]=A})}else{var t=a();t.open(e,k,!0);r(m,function(a,b){z(a)&&t.setRequestHeader(b,a)});t.onload=function(){var a=t.statusText||"",b="response"in t?t.response:t.responseText,c=1223===t.status?204:t.status;0===c&&(c=b?200:"file"==za(k).protocol?404:0);J(l,c,b,t.getAllResponseHeaders(),a)};e=function(){J(l,-1,null,null,"")};t.onerror=e;t.onabort=e;p&&(t.withCredentials=!0);if(n)try{t.responseType=
n}catch(T){if("json"!==n)throw T;}t.send(h||null)}if(0<q)var C=c(s,q);else q&&F(q.then)&&q.then(s)}}function De(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(f,g,n,s){function J(c){return c.replace(l,b).replace(m,a)}function v(a){try{var b;var c=n?e.getTrusted(n,a):e.valueOf(a);if(null==c)b="";else{switch(typeof c){case "string":break;
case "number":c=""+c;break;default:c=ra(c)}b=c}return b}catch(g){a=Yb("interr",f,g.toString()),d(a)}}s=!!s;for(var x,t,T=0,C=[],M=[],P=f.length,H=[],r=[];T<P;)if(-1!=(x=f.indexOf(b,T))&&-1!=(t=f.indexOf(a,x+k)))T!==x&&H.push(J(f.substring(T,x))),T=f.substring(x+k,t),C.push(T),M.push(c(T,v)),T=t+h,r.push(H.length),H.push("");else{T!==P&&H.push(J(f.substring(T)));break}if(n&&1<H.length)throw Yb("noconcat",f);if(!g||C.length){var u=function(a){for(var b=0,c=C.length;b<c;b++){if(s&&w(a[b]))return;H[r[b]]=
a[b]}return H.join("")};return E(function(a){var b=0,c=C.length,e=Array(c);try{for(;b<c;b++)e[b]=M[b](a);return u(e)}catch(g){a=Yb("interr",f,g.toString()),d(a)}},{exp:f,expressions:C,$$watchDelegate:function(a,b,c){var d;return a.$watchGroup(M,function(c,e){var f=u(c);F(b)&&b.call(this,f,c!==e?d:f,a);d=f},c)}})}}var k=b.length,h=a.length,l=new RegExp(b.replace(/./g,f),"g"),m=new RegExp(a.replace(/./g,f),"g");g.startSymbol=function(){return b};g.endSymbol=function(){return a};return g}]}function Ee(){this.$get=
["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,k,h,l){var m=a.setInterval,q=a.clearInterval,p=0,n=z(l)&&!l,s=(n?d:c).defer(),J=s.promise;h=z(h)?h:0;J.then(null,null,e);J.$$intervalId=m(function(){s.notify(p++);0<h&&p>=h&&(s.resolve(p),q(J.$$intervalId),delete f[J.$$intervalId]);n||b.$apply()},k);f[J.$$intervalId]=s;return J}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete f[b.$$intervalId],!0):
!1};return e}]}function Md(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a",short:"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function Zb(b){b=b.split("/");for(var a=b.length;a--;)b[a]=lb(b[a]);return b.join("/")}function Vc(b,a,c){b=za(b,c);a.$$protocol=
b.protocol;a.$$host=b.hostname;a.$$port=ba(b.port)||pf[b.protocol]||null}function Wc(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=za(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=qc(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function va(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Fa(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function $b(b){return b.substr(0,
Fa(b).lastIndexOf("/")+1)}function ac(b,a){this.$$html5=!0;a=a||"";var c=$b(b);Vc(b,this,b);this.$$parse=function(a){var e=va(c,a);if(!I(e))throw cb("ipthprfx",a,c);Wc(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Ib(this.$$search),b=this.$$hash?"#"+lb(this.$$hash):"";this.$$url=Zb(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;(f=va(b,d))!==u?
(g=f,g=(f=va(a,f))!==u?c+(va("/",f)||f):b+g):(f=va(c,d))!==u?g=c+f:c==d+"/"&&(g=c);g&&this.$$parse(g);return!!g}}function bc(b,a){var c=$b(b);Vc(b,this,b);this.$$parse=function(d){var e=va(b,d)||va(c,d),e="#"==e.charAt(0)?va(a,e):this.$$html5?e:"";if(!I(e))throw cb("ihshprfx",d,a);Wc(e,this,b);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Ib(this.$$search),e=this.$$hash?
"#"+lb(this.$$hash):"";this.$$url=Zb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Fa(b)==Fa(a)?(this.$$parse(a),!0):!1}}function Xc(b,a){this.$$html5=!0;bc.apply(this,arguments);var c=$b(b);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;b==Fa(d)?f=d:(g=va(c,d))?f=b+a+g:c===d+"/"&&(f=c);f&&this.$$parse(f);return!!f};this.$$compose=function(){var c=Ib(this.$$search),e=this.$$hash?"#"+lb(this.$$hash):
"";this.$$url=Zb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function zb(b){return function(){return this[b]}}function Yc(b,a){return function(c){if(w(c))return this[b];this[b]=a(c);this.$$compose();return this}}function He(){var b="",a={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(a){return z(a)?(b=a,this):b};this.html5Mode=function(b){return Va(b)?(a.enabled=b,this):G(b)?(Va(b.enabled)&&(a.enabled=b.enabled),Va(b.requireBase)&&(a.requireBase=b.requireBase),Va(b.rewriteLinks)&&
(a.rewriteLinks=b.rewriteLinks),this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function g(a,b,c){var e=h.url(),f=h.$$state;try{d.url(a,b,c),h.$$state=d.state()}catch(g){throw h.url(e),h.$$state=f,g;}}function k(a,b){c.$broadcast("$locationChangeSuccess",h.absUrl(),a,h.$$state,b)}var h,l;l=d.baseHref();var m=d.url(),q;if(a.enabled){if(!l&&a.requireBase)throw cb("nobase");q=m.substring(0,m.indexOf("/",m.indexOf("//")+2))+(l||"/");l=e.history?ac:Xc}else q=Fa(m),
l=bc;h=new l(q,"#"+b);h.$$parseLinkUrl(m,m);h.$$state=d.state();var p=/^\s*(javascript|mailto):/i;f.on("click",function(b){if(a.rewriteLinks&&!b.ctrlKey&&!b.metaKey&&2!=b.which){for(var e=D(b.target);"a"!==pa(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var g=e.prop("href"),k=e.attr("href")||e.attr("xlink:href");G(g)&&"[object SVGAnimatedString]"===g.toString()&&(g=za(g.animVal).href);p.test(g)||!g||e.attr("target")||b.isDefaultPrevented()||!h.$$parseLinkUrl(g,k)||(b.preventDefault(),h.absUrl()!=
d.url()&&(c.$apply(),S.angular["ff-684208-preventDefault"]=!0))}});h.absUrl()!=m&&d.url(h.absUrl(),!0);var n=!0;d.onUrlChange(function(a,b){c.$evalAsync(function(){var d=h.absUrl(),e=h.$$state;h.$$parse(a);h.$$state=b;c.$broadcast("$locationChangeStart",a,d,b,e).defaultPrevented?(h.$$parse(d),h.$$state=e,g(d,!1,e)):(n=!1,k(d,e))});c.$$phase||c.$digest()});c.$watch(function(){var a=d.url(),b=d.state(),f=h.$$replace,l=a!==h.absUrl()||h.$$html5&&e.history&&b!==h.$$state;if(n||l)n=!1,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",
h.absUrl(),a,h.$$state,b).defaultPrevented?(h.$$parse(a),h.$$state=b):(l&&g(h.absUrl(),f,b===h.$$state?null:h.$$state),k(a,b))});h.$$replace=!1});return h}]}function Ie(){var b=!0,a=this;this.debugEnabled=function(a){return z(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||
{},e=b[a]||b.log||A;a=!1;try{a=!!e.apply}catch(h){}return a?function(){var a=[];r(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function na(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw oa("isecfld",a);return b}function Aa(b,a){if(b){if(b.constructor===
b)throw oa("isecfn",a);if(b.window===b)throw oa("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw oa("isecdom",a);if(b===Object)throw oa("isecobj",a);}return b}function cc(b){return b.constant}function Oa(b,a,c,d){Aa(b,d);a=a.split(".");for(var e,f=0;1<a.length;f++){e=na(a.shift(),d);var g=Aa(b[e],d);g||(g={},b[e]=g);b=g}e=na(a.shift(),d);Aa(b[e],d);return b[e]=c}function Zc(b,a,c,d,e,f){na(b,f);na(a,f);na(c,f);na(d,f);na(e,f);return function(f,k){var h=k&&k.hasOwnProperty(b)?
k:f;if(null==h)return h;h=h[b];if(!a)return h;if(null==h)return u;h=h[a];if(!c)return h;if(null==h)return u;h=h[c];if(!d)return h;if(null==h)return u;h=h[d];return e?null==h?u:h=h[e]:h}}function $c(b,a,c){var d=ad[b];if(d)return d;var e=b.split("."),f=e.length;if(a.csp)d=6>f?Zc(e[0],e[1],e[2],e[3],e[4],c):function(a,b){var d=0,g;do g=Zc(e[d++],e[d++],e[d++],e[d++],e[d++],c)(a,b),b=u,a=g;while(d<f);return g};else{var g="";r(e,function(a,b){na(a,c);g+="if(s == null) return undefined;\ns="+(b?"s":'((l&&l.hasOwnProperty("'+
a+'"))?l:s)')+"."+a+";\n"});g+="return s;";a=new Function("s","l",g);a.toString=da(g);d=a}d.sharedGetter=!0;d.assign=function(a,c){return Oa(a,b,c,b)};return ad[b]=d}function Je(){var b=wa(),a={csp:!1};this.$get=["$filter","$sniffer",function(c,d){function e(a){var b=a;a.sharedGetter&&(b=function(b,c){return a(b,c)},b.literal=a.literal,b.constant=a.constant,b.assign=a.assign);return b}function f(a,b){for(var c=0,d=a.length;c<d;c++){var e=a[c];e.constant||(e.inputs?f(e.inputs,b):-1===b.indexOf(e)&&
b.push(e))}return b}function g(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=a.valueOf(),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function k(a,b,c,d){var e=d.$$inputs||(d.$$inputs=f(d.inputs,[])),h;if(1===e.length){var k=g,e=e[0];return a.$watch(function(a){var b=e(a);g(b,k)||(h=d(a),k=b&&b.valueOf());return h},b,c)}for(var l=[],m=0,q=e.length;m<q;m++)l[m]=g;return a.$watch(function(a){for(var b=!1,c=0,f=e.length;c<f;c++){var k=e[c](a);if(b||(b=!g(k,l[c])))l[c]=k&&k.valueOf()}b&&(h=
d(a));return h},b,c)}function h(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;F(b)&&b.apply(this,arguments);z(a)&&d.$$postDigest(function(){z(f)&&e()})},c)}function l(a,b,c,d){function e(a){var b=!0;r(a,function(a){z(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;F(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function m(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){F(b)&&
b.apply(this,arguments);e()},c)}function q(a,b){if(!b)return a;var c=function(c,d){var e=a(c,d),f=b(e,c,d);return z(e)?f:e};a.$$watchDelegate&&a.$$watchDelegate!==k?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=k,c.inputs=[a]);return c}a.csp=d.csp;return function(d,f){var g,J,v;switch(typeof d){case "string":return v=d=d.trim(),g=b[v],g||(":"===d.charAt(0)&&":"===d.charAt(1)&&(J=!0,d=d.substring(2)),g=new dc(a),g=(new db(g,c,a)).parse(d),g.constant?g.$$watchDelegate=m:J?(g=e(g),
g.$$watchDelegate=g.literal?l:h):g.inputs&&(g.$$watchDelegate=k),b[v]=g),q(g,f);case "function":return q(d,f);default:return q(A,f)}}}]}function Le(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return bd(function(a){b.$evalAsync(a)},a)}]}function Me(){this.$get=["$browser","$exceptionHandler",function(b,a){return bd(function(a){b.defer(a)},a)}]}function bd(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state=
{status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;c.processScheduled=!1;c.pending=u;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];try{F(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),a(h)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var k=
y("$q",TypeError);d.prototype={then:function(a,b,c){var d=new g;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return l(b,!0,a)},function(b){return l(b,!1,a)},b)}};g.prototype={resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(k("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,
e;e=c(this,this.$$resolve,this.$$reject);try{if(G(b)||F(b))d=b&&b.then;F(d)?(this.promise.$$state.status=-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&
d&&d.length&&b(function(){for(var b,e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(F(b)?b(c):c)}catch(h){a(h)}}})}};var h=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},l=function(a,b,c){var d=null;try{F(c)&&(d=c())}catch(e){return h(e,!1)}return d&&F(d.then)?d.then(function(){return h(a,b)},function(a){return h(a,!1)}):h(a,b)},m=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},q=function n(a){if(!F(a))throw k("norslvr",a);if(!(this instanceof
n))return new n(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};q.defer=function(){return new g};q.reject=function(a){var b=new g;b.reject(a);return b.promise};q.when=m;q.all=function(a){var b=new g,c=0,d=B(a)?[]:{};r(a,function(a,e){c++;m(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return q}function Ve(){this.$get=["$window","$timeout",function(b,
a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function Ke(){var b=10,a=y("$rootScope"),c=null,d=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler",
"$parse","$browser",function(e,f,g,k){function h(){this.$id=++hb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings=null}function l(b){if(s.$$phase)throw a("inprog",s.$$phase);s.$$phase=b}function m(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function q(){}function p(){for(;x.length;)try{x.shift()()}catch(a){f(a)}d=
null}function n(){null===d&&(d=k.defer(function(){s.$apply(p)}))}h.prototype={constructor:h,$new:function(a,b){function c(){d.$$destroyed=!0}var d;b=b||this;a?(d=new h,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=function(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$id=++hb;this.$$ChildScope=null},this.$$ChildScope.prototype=this),d=new this.$$ChildScope);d.$parent=b;d.$$prevSibling=b.$$childTail;b.$$childHead?
(b.$$childTail.$$nextSibling=d,b.$$childTail=d):b.$$childHead=b.$$childTail=d;(a||b!=this)&&d.$on("$destroy",c);return d},$watch:function(a,b,d){var e=g(a);if(e.$$watchDelegate)return e.$$watchDelegate(this,b,d,e);var f=this.$$watchers,h={fn:b,last:q,get:e,exp:a,eq:!!d};c=null;F(b)||(h.fn=A);f||(f=this.$$watchers=[]);f.unshift(h);return function(){Wa(f,h);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=
!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});r(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(G(e))if(Ra(e))for(f!==p&&(f=p,s=f.length=0,l++),a=e.length,s!==a&&(l++,f.length=s=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===
g||(l++,f[b]=g);else{f!==n&&(f=n={},s=0,l++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(s++,f[b]=g,l++));if(s>a)for(b in l++,f)e.hasOwnProperty(b)||(s--,delete f[b])}else f!==e&&(f=e,l++);return l}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,m=g(a,c),p=[],n={},q=!0,s=0;return this.$watch(m,function(){q?(q=!1,b(e,e,d)):b(e,h,d);if(k)if(G(e))if(Ra(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)Hb.call(e,
a)&&(h[a]=e[a]);else h=e})},$digest:function(){var e,g,h,m,n,r,Q=b,x,O=[],K,u,z;l("$digest");k.$$checkUrlChange();this===s&&null!==d&&(k.defer.cancel(d),p());c=null;do{r=!1;for(x=this;J.length;){try{z=J.shift(),z.scope.$eval(z.expression)}catch(y){f(y)}c=null}a:do{if(m=x.$$watchers)for(n=m.length;n--;)try{if(e=m[n])if((g=e.get(x))!==(h=e.last)&&!(e.eq?la(g,h):"number"===typeof g&&"number"===typeof h&&isNaN(g)&&isNaN(h)))r=!0,c=e,e.last=e.eq?Ca(g,null):g,e.fn(g,h===q?g:h,x),5>Q&&(K=4-Q,O[K]||(O[K]=
[]),u=F(e.exp)?"fn: "+(e.exp.name||e.exp.toString()):e.exp,u+="; newVal: "+ra(g)+"; oldVal: "+ra(h),O[K].push(u));else if(e===c){r=!1;break a}}catch(D){f(D)}if(!(m=x.$$childHead||x!==this&&x.$$nextSibling))for(;x!==this&&!(m=x.$$nextSibling);)x=x.$parent}while(x=m);if((r||J.length)&&!Q--)throw s.$$phase=null,a("infdig",b,ra(O));}while(r||J.length);for(s.$$phase=null;v.length;)try{v.shift()()}catch(A){f(A)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=
!0;if(this!==s){for(var b in this.$$listenerCount)m(this,this.$$listenerCount[b],b);a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=A;this.$on=this.$watch=this.$watchGroup=function(){return A};this.$$listeners={};this.$parent=
this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null}}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a){s.$$phase||J.length||k.defer(function(){J.length&&s.$digest()});J.push({scope:this,expression:a})},$$postDigest:function(a){v.push(a)},$apply:function(a){try{return l("$apply"),this.$eval(a)}catch(b){f(b)}finally{s.$$phase=null;try{s.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&
x.push(b);n()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){c[c.indexOf(b)]=null;m(e,1,a)}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=jb([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=e;
l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(p){f(p)}else d.splice(l,1),l--,m--;if(g)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=jb([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,
1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var s=new h,J=s.$$asyncQueue=[],v=s.$$postDigestQueue=[],x=s.$$applyAsyncQueue=[];return s}]}function Nd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return z(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return z(b)?(a=b,this):a};this.$get=
function(){return function(c,d){var e=d?a:b,f;f=za(c).href;return""===f||f.match(e)?c:"unsafe:"+f}}}function qf(b){if("self"===b)return b;if(I(b)){if(-1<b.indexOf("***"))throw Ba("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(ib(b))return new RegExp("^"+b.source+"$");throw Ba("imatcher");}function cd(b){var a=[];z(b)&&r(b,function(b){a.push(qf(b))});return a}function Oe(){this.SCE_CONTEXTS=
ja;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=cd(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=cd(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?Uc(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};
return b}var f=function(a){throw Ba("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));var g=e(),k={};k[ja.HTML]=e(g);k[ja.CSS]=e(g);k[ja.URL]=e(g);k[ja.JS]=e(g);k[ja.RESOURCE_URL]=e(k[ja.URL]);return{trustAs:function(a,b){var c=k.hasOwnProperty(a)?k[a]:null;if(!c)throw Ba("icontext",a,b);if(null===b||b===u||""===b)return b;if("string"!==typeof b)throw Ba("itype",a);return new c(b)},getTrusted:function(c,e){if(null===e||e===u||""===e)return e;var g=k.hasOwnProperty(c)?k[c]:null;if(g&&e instanceof
g)return e.$$unwrapTrustedValue();if(c===ja.RESOURCE_URL){var g=za(e.toString()),q,p,n=!1;q=0;for(p=b.length;q<p;q++)if(d(b[q],g)){n=!0;break}if(n)for(q=0,p=a.length;q<p;q++)if(d(a[q],g)){n=!1;break}if(n)return e;throw Ba("insecurl",e.toString());}if(c===ja.HTML)return f(e);throw Ba("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Ne(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$document","$parse","$sceDelegate",function(a,
c,d){if(b&&8>a[0].documentMode)throw Ba("iequirks");var e=qa(ja);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},e.valueOf=Ta);e.parseAs=function(a,b){var d=c(b);return d.literal&&d.constant?d:c(b,function(b){return e.getTrusted(a,b)})};var f=e.parseAs,g=e.getTrusted,k=e.trustAs;r(ja,function(a,b){var c=N(b);e[ab("parse_as_"+c)]=function(b){return f(a,b)};e[ab("get_trusted_"+c)]=function(b){return g(a,
b)};e[ab("trust_as_"+c)]=function(b){return k(a,b)}});return e}]}function Pe(){this.$get=["$window","$document",function(b,a){var c={},d=ba((/android (\d+)/.exec(N((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g,k=/^(Moz|webkit|O|ms)(?=[A-Z])/,h=f.body&&f.body.style,l=!1,m=!1;if(h){for(var q in h)if(l=k.exec(q)){g=l[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in h&&"webkit");l=!!("transition"in h||g+"Transition"in h);m=!!("animation"in
h||g+"Animation"in h);!d||l&&m||(l=I(f.body.style.webkitTransition),m=I(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hasEvent:function(a){if("input"==a&&9==Pa)return!1;if(w(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:Za(),vendorPrefix:g,transitions:l,animations:m,android:d}}]}function Re(){this.$get=["$templateCache","$http","$q",function(b,a,c){function d(e,f){function g(){k.totalPendingRequests--;if(!f)throw ia("tpload",e);return c.reject()}
var k=d;k.totalPendingRequests++;return a.get(e,{cache:b}).then(function(a){a=a.data;if(!a||0===a.length)return g();k.totalPendingRequests--;b.put(e,a);return a},g)}d.totalPendingRequests=0;return d}]}function Se(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var g=[];r(a,function(a){var d=ta.element(a).data("$binding");d&&r(d,function(d){c?(new RegExp("(^|\\s)"+b+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=
d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,c){for(var g=["ng-","data-ng-","ng\\:"],k=0;k<g.length;++k){var h=a.querySelectorAll("["+g[k]+"model"+(c?"=":"*=")+'"'+b+'"]');if(h.length)return h}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function Te(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(b,a,c,d,e){function f(f,h,l){var m=z(l)&&
!l,q=(m?d:c).defer(),p=q.promise;h=a.defer(function(){try{q.resolve(f())}catch(a){q.reject(a),e(a)}finally{delete g[p.$$timeoutId]}m||b.$apply()},h);p.$$timeoutId=h;g[h]=q;return p}var g={};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function za(b,a){var c=b;Pa&&(Z.setAttribute("href",c),c=Z.href);Z.setAttribute("href",c);return{href:Z.href,protocol:Z.protocol?Z.protocol.replace(/:$/,""):
"",host:Z.host,search:Z.search?Z.search.replace(/^\?/,""):"",hash:Z.hash?Z.hash.replace(/^#/,""):"",hostname:Z.hostname,port:Z.port,pathname:"/"===Z.pathname.charAt(0)?Z.pathname:"/"+Z.pathname}}function Uc(b){b=I(b)?za(b):b;return b.protocol===dd.protocol&&b.host===dd.host}function Ue(){this.$get=da(S)}function Bc(b){function a(c,d){if(G(c)){var e={};r(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+
"Filter")}}];a("currency",ed);a("date",fd);a("filter",rf);a("json",sf);a("limitTo",tf);a("lowercase",uf);a("number",gd);a("orderBy",hd);a("uppercase",vf)}function rf(){return function(b,a,c){if(!B(b))return b;var d=typeof c,e=[];e.check=function(a,b){for(var c=0;c<e.length;c++)if(!e[c](a,b))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return ta.equals(a,b)}:function(a,b){if(a&&b&&"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&Hb.call(a,d)&&c(a[d],
b[d]))return!0;return!1}b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var f=function(a,b){if("string"===typeof b&&"!"===b.charAt(0))return!f(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&f(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(f(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a=
{$:a};case "object":for(var g in a)(function(b){"undefined"!==typeof a[b]&&e.push(function(c){return f("$"==b?c:c&&c[b],a[b])})})(g);break;case "function":e.push(a);break;default:return b}d=[];for(g=0;g<b.length;g++){var k=b[g];e.check(k,g)&&d.push(k)}return d}}function ed(b){var a=b.NUMBER_FORMATS;return function(b,d,e){w(d)&&(d=a.CURRENCY_SYM);w(e)&&(e=2);return null==b?b:id(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,e).replace(/\u00A4/g,d)}}function gd(b){var a=b.NUMBER_FORMATS;return function(b,
d){return null==b?b:id(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function id(b,a,c,d,e){if(!isFinite(b)||G(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",k="",h=[],l=!1;if(-1!==g.indexOf("e")){var m=g.match(/([\d\.]+)e(-?)(\d+)/);m&&"-"==m[2]&&m[3]>e+1?(g="0",b=0):(k=g,l=!0)}if(l)0<e&&-1<b&&1>b&&(k=b.toFixed(e));else{g=(g.split(jd)[1]||"").length;w(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);0===b&&(f=!1);b=(""+b).split(jd);g=b[0];
b=b[1]||"";var m=0,q=a.lgSize,p=a.gSize;if(g.length>=q+p)for(m=g.length-q,l=0;l<m;l++)0===(m-l)%p&&0!==l&&(k+=c),k+=g.charAt(l);for(l=m;l<g.length;l++)0===(g.length-l)%q&&0!==l&&(k+=c),k+=g.charAt(l);for(;b.length<e;)b+="0";e&&"0"!==e&&(k+=d+b.substr(0,e))}h.push(f?a.negPre:a.posPre);h.push(k);h.push(f?a.negSuf:a.posSuf);return h.join("")}function Ab(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function $(b,a,c,d){c=c||0;return function(e){e=
e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Ab(e,a,d)}}function Bb(b,a){return function(c,d){var e=c["get"+b](),f=pb(a?"SHORT"+b:b);return d[f][e]}}function kd(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function ld(b){return function(a){var c=kd(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return Ab(a,b)}}function fd(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,k=b[8]?
a.setUTCFullYear:a.setFullYear,h=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=ba(b[9]+b[10]),g=ba(b[9]+b[11]));k.call(a,ba(b[1]),ba(b[2])-1,ba(b[3]));f=ba(b[4]||0)-f;g=ba(b[5]||0)-g;k=ba(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));h.call(a,f,g,k,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e,f){var g="",k=[],h,l;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;I(c)&&(c=wf.test(c)?ba(c):a(c));W(c)&&(c=new Date(c));
if(!ea(c))return c;for(;e;)(l=xf.exec(e))?(k=jb(k,l,1),e=k.pop()):(k.push(e),e=null);f&&"UTC"===f&&(c=new Date(c.getTime()),c.setMinutes(c.getMinutes()+c.getTimezoneOffset()));r(k,function(a){h=yf[a];g+=h?h(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function sf(){return function(b){return ra(b,!0)}}function tf(){return function(b,a){W(b)&&(b=b.toString());if(!B(b)&&!I(b))return b;a=Infinity===Math.abs(Number(a))?Number(a):ba(a);if(I(b))return a?0<=a?b.slice(0,a):
b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function hd(b){return function(a,c,d){function e(a,b){return b?function(b,c){return a(c,b)}:a}function f(a,b){var c=typeof a,d=typeof b;return c==d?(ea(a)&&ea(b)&&(a=a.valueOf(),b=b.valueOf()),"string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Ra(a))return a;c=B(c)?c:[c];0===c.length&&(c=["+"]);c=c.map(function(a){var c=
!1,d=a||Ta;if(I(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);if(""===a)return e(function(a,b){return f(a,b)},c);d=b(a);if(d.constant){var g=d();return e(function(a,b){return f(a[g],b[g])},c)}}return e(function(a,b){return f(d(a),d(b))},c)});for(var g=[],k=0;k<a.length;k++)g.push(a[k]);return g.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function Ha(b){F(b)&&(b={link:b});b.restrict=b.restrict||"AC";return da(b)}
function md(b,a,c,d,e){var f=this,g=[],k=f.$$parentForm=b.parent().controller("form")||Cb;f.$error={};f.$$success={};f.$pending=u;f.$name=e(a.name||a.ngForm||"")(c);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;k.$addControl(f);f.$rollbackViewValue=function(){r(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){r(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Ka(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a)};f.$$renameControl=function(a,
b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];r(f.$pending,function(b,c){f.$setValidity(c,null,a)});r(f.$error,function(b,c){f.$setValidity(c,null,a)});Wa(g,a)};nd({ctrl:this,$element:b,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(Wa(d,c),0===d.length&&delete a[b])},parentForm:k,$animate:d});f.$setDirty=function(){d.removeClass(b,Qa);d.addClass(b,Db);f.$dirty=
!0;f.$pristine=!1;k.$setDirty()};f.$setPristine=function(){d.setClass(b,Qa,Db+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;r(g,function(a){a.$setPristine()})};f.$setUntouched=function(){r(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){d.addClass(b,"ng-submitted");f.$submitted=!0;k.$setSubmitted()}}function ec(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function eb(b,a,c,d,e,f){a.prop("validity");var g=a[0].placeholder,k={},h=N(a[0].type);if(!e.android){var l=
!1;a.on("compositionstart",function(a){l=!0});a.on("compositionend",function(){l=!1;m()})}var m=function(b){if(!l){var e=a.val(),f=b&&b.type;Pa&&"input"===(b||k).type&&a[0].placeholder!==g?g=a[0].placeholder:("password"===h||c.ngTrim&&"false"===c.ngTrim||(e=U(e)),(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&d.$setViewValue(e,f))}};if(e.hasEvent("input"))a.on("input",m);else{var q,p=function(a){q||(q=f.defer(function(){m(a);q=null}))};a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&
19>b||37<=b&&40>=b||p(a)});if(e.hasEvent("paste"))a.on("paste cut",p)}a.on("change",m);d.$render=function(){a.val(d.$isEmpty(d.$modelValue)?"":d.$viewValue)}}function Eb(b,a){return function(c,d){var e,f;if(ea(c))return c;if(I(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,c.length-1));if(zf.test(c))return new Date(c);b.lastIndex=0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/
1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},r(e,function(b,c){c<a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function fb(b,a,c,d){return function(e,f,g,k,h,l,m){function q(a){return z(a)?ea(a)?a:c(a):u}od(e,f,g,k);eb(e,f,g,k,h,l);var p=k&&k.$options&&k.$options.timezone,n;k.$$parserName=b;k.$parsers.push(function(b){return k.$isEmpty(b)?null:a.test(b)?(b=c(b,n),"UTC"===p&&b.setMinutes(b.getMinutes()-b.getTimezoneOffset()),b):u});k.$formatters.push(function(a){if(k.$isEmpty(a))n=
null;else{if(!ea(a))throw Fb("datefmt",a);if((n=a)&&"UTC"===p){var b=6E4*n.getTimezoneOffset();n=new Date(n.getTime()+b)}return m("date")(a,d,p)}return""});if(z(g.min)||g.ngMin){var s;k.$validators.min=function(a){return k.$isEmpty(a)||w(s)||c(a)>=s};g.$observe("min",function(a){s=q(a);k.$validate()})}if(z(g.max)||g.ngMax){var r;k.$validators.max=function(a){return k.$isEmpty(a)||w(r)||c(a)<=r};g.$observe("max",function(a){r=q(a);k.$validate()})}k.$isEmpty=function(a){return!a||a.getTime&&a.getTime()!==
a.getTime()}}}function od(b,a,c,d){(d.$$hasNativeValidators=G(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||{};return c.badInput&&!c.typeMismatch?u:b})}function pd(b,a,c,d,e){if(z(d)){b=b(d);if(!b.constant)throw y("ngModel")("constexpr",c,d);return b(a)}return e}function nd(b){function a(a,b){b&&!f[a]?(l.addClass(e,a),f[a]=!0):!b&&f[a]&&(l.removeClass(e,a),f[a]=!1)}function c(b,c){b=b?"-"+Kb(b,"-"):"";a(gb+b,!0===c);a(qd+b,!1===c)}var d=b.ctrl,e=b.$element,f={},g=b.set,k=
b.unset,h=b.parentForm,l=b.$animate;f[qd]=!(f[gb]=e.hasClass(gb));d.$setValidity=function(b,e,f){e===u?(d.$pending||(d.$pending={}),g(d.$pending,b,f)):(d.$pending&&k(d.$pending,b,f),rd(d.$pending)&&(d.$pending=u));Va(e)?e?(k(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),k(d.$$success,b,f)):(k(d.$error,b,f),k(d.$$success,b,f));d.$pending?(a(sd,!0),d.$valid=d.$invalid=u,c("",null)):(a(sd,!1),d.$valid=rd(d.$error),d.$invalid=!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?u:d.$error[b]?!1:
d.$$success[b]?!0:null;c(b,e);h.$setValidity(b,e,d)}}function rd(b){if(b)for(var a in b)return!1;return!0}function fc(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){if(!B(a)){if(I(a))return a.split(" ");if(G(a)){var b=[];r(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,k){function h(a,b){var c=g.data("$classCounts")||
{},d=[];r(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function l(b){if(!0===a||f.$index%2===a){var l=e(b||[]);if(!m){var n=h(l,1);k.$addClass(n)}else if(!la(b,m)){var s=e(m),n=d(l,s),l=d(s,l),n=h(n,1),l=h(l,-1);n&&n.length&&c.addClass(g,n);l&&l.length&&c.removeClass(g,l)}}m=qa(b)}var m;f.$watch(k[b],l,!0);k.$observe("class",function(a){l(f.$eval(k[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var l=
e(f.$eval(k[b]));g===a?(g=h(l,1),k.$addClass(g)):(g=h(l,-1),k.$removeClass(g))}})}}}]}var Af=/^\/(.+)\/([a-z]*)$/,N=function(b){return I(b)?b.toLowerCase():b},Hb=Object.prototype.hasOwnProperty,pb=function(b){return I(b)?b.toUpperCase():b},Pa,D,ma,Ya=[].slice,mf=[].splice,Bf=[].push,Ia=Object.prototype.toString,Xa=y("ng"),ta=S.angular||(S.angular={}),$a,hb=0;Pa=X.documentMode;A.$inject=[];Ta.$inject=[];var B=Array.isArray,U=function(b){return I(b)?b.trim():b},Za=function(){if(z(Za.isActive_))return Za.isActive_;
var b=!(!X.querySelector("[ng-csp]")&&!X.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return Za.isActive_=b},mb=["ng-","data-ng-","ng:","x-ng-"],Hd=/[A-Z]/g,sc=!1,Lb,ka=1,kb=3,Ld={full:"1.3.0",major:1,minor:3,dot:0,codeName:"superluminal-nudge"};R.expando="ng339";var ub=R.cache={},bf=1;R._data=function(b){return this.cache[b[this.expando]]||{}};var Xe=/([\:\-\_]+(.))/g,Ye=/^moz([A-Z])/,Cf={mouseleave:"mouseout",mouseenter:"mouseover"},Ob=y("jqLite"),af=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,
Nb=/<|&#?\w+;/,Ze=/<([\w:]+)/,$e=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ha={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ha.optgroup=ha.option;ha.tbody=ha.tfoot=ha.colgroup=ha.caption=ha.thead;ha.th=ha.td;var Ja=R.prototype={ready:function(b){function a(){c||(c=
!0,b())}var c=!1;"complete"===X.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),R(S).on("load",a),this.on("DOMContentLoaded",a))},toString:function(){var b=[];r(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?D(this[b]):D(this[this.length+b])},length:0,push:Bf,sort:[].sort,splice:[].splice},wb={};r("multiple selected checked disabled readOnly required open".split(" "),function(b){wb[N(b)]=b});var Kc={};r("input select option textarea button form details".split(" "),
function(b){Kc[b]=!0});var Lc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};r({data:Qb,removeData:sb},function(b,a){R[a]=b});r({data:Qb,inheritedData:vb,scope:function(b){return D.data(b,"$scope")||vb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return D.data(b,"$isolateScope")||D.data(b,"$isolateScopeNoTemplate")},controller:Gc,injector:function(b){return vb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Rb,
css:function(b,a,c){a=ab(a);if(z(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=N(a);if(wb[d])if(z(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||A).specified?d:u;else if(z(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?u:b},prop:function(b,a,c){if(z(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(w(b)){var d=a.nodeType;return d===ka||d===kb?a.textContent:""}a.textContent=
b}b.$dv="";return b}(),val:function(b,a){if(w(a)){if(b.multiple&&"select"===pa(b)){var c=[];r(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(w(a))return b.innerHTML;rb(b,!0);b.innerHTML=a},empty:Hc},function(b,a){R.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==Hc&&(2==b.length&&b!==Rb&&b!==Gc?a:d)===u){if(G(a)){for(e=0;e<g;e++)if(b===Qb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;
g=e===u?Math.min(g,1):g;for(f=0;f<g;f++){var k=b(this[f],a,d);e=e?e+k:k}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});r({removeData:sb,on:function a(c,d,e,f){if(z(f))throw Ob("onargs");if(Cc(c)){var g=tb(c,!0);f=g.events;var k=g.handle;k||(k=g.handle=ef(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],h=g.length;h--;){d=g[h];var l=f[d];l||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,Cf[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||k(a,d)}):"$destroy"!==d&&c.addEventListener(d,
k,!1),l=f[d]);l.push(e)}}},off:Fc,one:function(a,c,d){a=D(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;rb(a);r(new R(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];r(a.childNodes,function(a){a.nodeType===ka&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(d===ka||11===d){c=new R(c);for(var d=0,e=c.length;d<
e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(a.nodeType===ka){var d=a.firstChild;r(new R(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=D(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:Ic,detach:function(a){Ic(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=new R(c);for(var f=0,g=c.length;f<g;f++){var k=c[f];e.insertBefore(k,d.nextSibling);d=k}},addClass:Tb,removeClass:Sb,toggleClass:function(a,c,d){c&&r(c.split(" "),function(c){var f=
d;w(f)&&(f=!Rb(a,c));(f?Tb:Sb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Pb,triggerHandler:function(a,c,d){var e,f,g=c.type||c,k=tb(a);if(k=(k=k&&k.events)&&k[g])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=
!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:A,type:g,target:a},c.type&&(e=E(e,c)),c=qa(k),f=d?[e].concat(d):[e],r(c,function(c){e.isImmediatePropagationStopped()||c.apply(a,f)})}},function(a,c){R.prototype[c]=function(c,e,f){for(var g,k=0,h=this.length;k<h;k++)w(g)?(g=a(this[k],c,e,f),z(g)&&(g=D(g))):Ec(g,a(this[k],c,e,f));return z(g)?g:this};R.prototype.bind=R.prototype.on;R.prototype.unbind=R.prototype.off});bb.prototype={put:function(a,
c){this[La(a,this.nextUid)]=c},get:function(a){return this[La(a,this.nextUid)]},remove:function(a){var c=this[a=La(a,this.nextUid)];delete this[a];return c}};var Nc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,gf=/,/,hf=/^\s*(_?)(\S+?)\1\s*$/,Mc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ea=y("$injector");Jb.$$annotate=Ub;var Df=y("$animate"),xe=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Df("notcsel",c);this.$$selectors[c.substr(1)]=e;
a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$$q","$$asyncCallback","$rootScope",function(a,d,e){function f(d){var f,g=a.defer();g.promise.$$cancelFn=function(){f&&f()};e.$$postDigest(function(){f=d(function(){g.resolve()})});return g.promise}function g(a,c){var d=[],e=[],f=wa();r((a.attr("class")||"").split(/\s+/),function(a){f[a]=!0});r(c,function(a,c){var g=f[c];!1===a&&g?e.push(c):
!0!==a||g||d.push(c)});return 0<d.length+e.length&&[d.length?d:null,e.length?e:null]}function k(a,c,d){for(var e=0,f=c.length;e<f;++e)a[c[e]]=d}function h(){m||(m=a.defer(),d(function(){m.resolve();m=null}));return m.promise}function l(a,c){if(ta.isObject(c)){var d=E(c.from||{},c.to||{});a.css(d)}}var m;return{animate:function(a,c,d){l(a,{from:c,to:d});return h()},enter:function(a,c,d,e){l(a,e);d?d.after(a):c.prepend(a);return h()},leave:function(a,c){a.remove();return h()},move:function(a,c,d,e){return this.enter(a,
c,d,e)},addClass:function(a,c,d){return this.setClass(a,c,[],d)},$$addClassImmediately:function(a,c,d){a=D(a);c=I(c)?c:B(c)?c.join(" "):"";r(a,function(a){Tb(a,c)});l(a,d);return h()},removeClass:function(a,c,d){return this.setClass(a,[],c,d)},$$removeClassImmediately:function(a,c,d){a=D(a);c=I(c)?c:B(c)?c.join(" "):"";r(a,function(a){Sb(a,c)});l(a,d);return h()},setClass:function(a,c,d,e){var h=this,l=!1;a=D(a);var m=a.data("$$animateClasses");m?e&&m.options&&(m.options=ta.extend(m.options||{},e)):
(m={classes:{},options:e},l=!0);e=m.classes;c=B(c)?c:c.split(" ");d=B(d)?d:d.split(" ");k(e,c,!0);k(e,d,!1);l&&(m.promise=f(function(c){var d=a.data("$$animateClasses");a.removeData("$$animateClasses");if(d){var e=g(a,d.classes);e&&h.$$setClassImmediately(a,e[0],e[1],d.options)}c()}),a.data("$$animateClasses",m));return m.promise},$$setClassImmediately:function(a,c,d,e){c&&this.$$addClassImmediately(a,c);d&&this.$$removeClassImmediately(a,d);l(a,e);return h()},enabled:A,cancel:A}}]}],ia=y("$compile");
uc.$inject=["$provide","$$sanitizeUriProvider"];var lf=/^(x[\:\-_]|data[\:\-_])/i,Yb=y("$interpolate"),Ef=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,pf={http:80,https:443,ftp:21},cb=y("$location"),Ff={$$html5:!1,$$replace:!1,absUrl:zb("$$absUrl"),url:function(a){if(w(a))return this.$$url;a=Ef.exec(a);a[1]&&this.path(decodeURIComponent(a[1]));(a[2]||a[1])&&this.search(a[3]||"");this.hash(a[5]||"");return this},protocol:zb("$$protocol"),host:zb("$$host"),port:zb("$$port"),path:Yc("$$path",function(a){a=null!==
a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(I(a)||W(a))a=a.toString(),this.$$search=qc(a);else if(G(a))a=Ca(a,{}),r(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw cb("isrcharg");break;default:w(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:Yc("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};
r([Xc,bc,ac],function(a){a.prototype=Object.create(Ff);a.prototype.state=function(c){if(!arguments.length)return this.$$state;if(a!==ac||!this.$$html5)throw cb("nostate");this.$$state=w(c)?null:c;return this}});var oa=y("$parse"),Gf=Function.prototype.call,Hf=Function.prototype.apply,If=Function.prototype.bind,Gb=wa();r({"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:function(){}},function(a,c){a.constant=a.literal=a.sharedGetter=!0;Gb[c]=a});Gb["this"]=
function(a){return a};Gb["this"].sharedGetter=!0;var gc=E(wa(),{"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return z(d)?z(e)?d+e:d:z(e)?e:u},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(z(d)?d:0)-(z(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,
c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"!":function(a,c,d){return!d(a,c)},"=":!0,"|":!0}),Jf={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},dc=function(a){this.options=a};dc.prototype={constructor:dc,lex:function(a){this.text=a;this.index=0;this.ch=u;
for(this.tokens=[];this.index<this.text.length;)if(this.ch=this.text.charAt(this.index),this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent();else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch}),this.index++;else if(this.isWhitespace(this.ch))this.index++;else{a=this.ch+this.peek();var c=a+this.peek(2),d=gc[this.ch],e=gc[a],f=gc[c];f?(this.tokens.push({index:this.index,
text:c,fn:f}),this.index+=3):e?(this.tokens.push({index:this.index,text:a,fn:e}),this.index+=2):d?(this.tokens.push({index:this.index,text:this.ch,fn:d}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===
a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=z(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw oa("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=N(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==
d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,text:a,constant:!0,fn:function(){return a}})},readIdent:function(){for(var a=this.text,c="",d=this.index,e,f,g,k;this.index<this.text.length;){k=this.text.charAt(this.index);if("."===k||this.isIdent(k)||this.isNumber(k))"."===
k&&(e=this.index),c+=k;else break;this.index++}e&&"."===c[c.length-1]&&(this.index--,c=c.slice(0,-1),e=c.lastIndexOf("."),-1===e&&(e=u));if(e)for(f=this.index;f<this.text.length;){k=this.text.charAt(f);if("("===k){g=c.substr(e-d+1);c=c.substr(0,e-d);this.index=f;break}if(this.isWhitespace(k))f++;else break}this.tokens.push({index:d,text:c,fn:Gb[c]||$c(c,this.options,a)});g&&(this.tokens.push({index:e,text:"."}),this.tokens.push({index:e+1,text:g}))},readString:function(a){var c=this.index;this.index++;
for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=Jf[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,string:d,constant:!0,fn:function(){return d}});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};
var db=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};db.ZERO=E(function(){return 0},{sharedGetter:!0,constant:!0});db.prototype={constructor:db,parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();
else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);c.constant&&(a.constant=!0,a.literal=!0)}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw oa("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===
this.tokens.length)throw oa("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var f=this.tokens[0],g=f.text;if(g===a||g===c||g===d||g===e||!(a||c||d||e))return f}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,c){return E(function(d,e){return a(d,e,c)},{constant:c.constant,inputs:[c]})},binaryFn:function(a,
c,d,e){return E(function(e,g){return c(e,g,a,d)},{constant:a.constant&&d.constant,inputs:!e&&[a,d]})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0,g=a.length;f<g;f++)e=a[f](c,d);return e}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},filter:function(a){var c=this.expect(),d=this.$filter(c.text),e,f;if(this.peek(":"))for(e=
[],f=[];this.expect(":");)e.push(this.expression());c=[a].concat(e||[]);return E(function(c,k){var h=a(c,k);if(f){f[0]=h;for(h=e.length;h--;)f[h+1]=e[h](c,k);return d.apply(u,f)}return d(h)},{constant:!d.$stateful&&c.every(cc),inputs:!d.$stateful&&c})},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),
E(function(d,f){return a.assign(d,c(d,f),f)},{inputs:[a,c]})):a},ternary:function(){var a=this.logicalOR(),c,d;if(d=this.expect("?")){c=this.assignment();if(d=this.expect(":")){var e=this.assignment();return E(function(d,g){return a(d,g)?c(d,g):e(d,g)},{constant:a.constant&&c.constant&&e.constant})}this.throwError("expected :",d)}return a},logicalOR:function(){for(var a=this.logicalAND(),c;c=this.expect("||");)a=this.binaryFn(a,c.fn,this.logicalAND(),!0);return a},logicalAND:function(){var a=this.equality(),
c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND(),!0);return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=
this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(db.ZERO,a.fn,this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this.text,d=this.expect().text,e=$c(d,this.options,c);return E(function(c,d,k){return e(k||a(c,d))},{assign:function(e,g,k){(k=a(e,k))||a.assign(e,k={});return Oa(k,d,g,c)}})},objectIndex:function(a){var c=
this.text,d=this.expression();this.consume("]");return E(function(e,f){var g=a(e,f),k=d(e,f);na(k,c);return g?Aa(g[k],c):u},{assign:function(e,f,g){var k=na(d(e,g),c);(g=Aa(a(e,g),c))||a.assign(e,g={});return g[k]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this.text,f=d.length?[]:null;return function(g,k){var h=c?c(g,k):g,l=a(g,k,h)||A;if(f)for(var m=d.length;m--;)f[m]=Aa(d[m](g,k),e);Aa(h,
e);if(l){if(l.constructor===l)throw oa("isecfn",e);if(l===Gf||l===Hf||l===If)throw oa("isecff",e);}h=l.apply?l.apply(h,f):l(f[0],f[1],f[2],f[3],f[4]);return Aa(h,e)}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;var c=this.expression();a.push(c)}while(this.expect(","))}this.consume("]");return E(function(c,e){for(var f=[],g=0,k=a.length;g<k;g++)f.push(a[g](c,e));return f},{literal:!0,constant:a.every(cc),inputs:a})},object:function(){var a=[],c=[];
if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.expect();a.push(d.string||d.text);this.consume(":");d=this.expression();c.push(d)}while(this.expect(","))}this.consume("}");return E(function(d,f){for(var g={},k=0,h=c.length;k<h;k++)g[a[k]]=c[k](d,f);return g},{literal:!0,constant:c.every(cc),inputs:c})}};var ad=wa(),Ba=y("$sce"),ja={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ia=y("$compile"),Z=X.createElement("a"),dd=za(S.location.href,!0);Bc.$inject=
["$provide"];ed.$inject=["$locale"];gd.$inject=["$locale"];var jd=".",yf={yyyy:$("FullYear",4),yy:$("FullYear",2,0,!0),y:$("FullYear",1),MMMM:Bb("Month"),MMM:Bb("Month",!0),MM:$("Month",2,1),M:$("Month",1,1),dd:$("Date",2),d:$("Date",1),HH:$("Hours",2),H:$("Hours",1),hh:$("Hours",2,-12),h:$("Hours",1,-12),mm:$("Minutes",2),m:$("Minutes",1),ss:$("Seconds",2),s:$("Seconds",1),sss:$("Milliseconds",3),EEEE:Bb("Day"),EEE:Bb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=
-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Ab(Math[0<a?"floor":"ceil"](a/60),2)+Ab(Math.abs(a%60),2))},ww:ld(2),w:ld(1)},xf=/((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,wf=/^\-?\d+$/;fd.$inject=["$locale"];var uf=da(N),vf=da(pb);hd.$inject=["$parse"];var Od=da({restrict:"E",compile:function(a,c){if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var f="[object SVGAnimatedString]"===Ia.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||
a.preventDefault()})}}}),qb={};r(wb,function(a,c){if("multiple"!=a){var d=ua("ng-"+c);qb[d]=function(){return{restrict:"A",priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}});r(Lc,function(a,c){qb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(Af))){f.$set("ngPattern",new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});r(["src","srcset","href"],function(a){var c=ua("ng-"+
a);qb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,k=a;"href"===a&&"[object SVGAnimatedString]"===Ia.call(e.prop("href"))&&(k="xlinkHref",f.$attr[k]="xlink:href",g=null);f.$observe(c,function(c){c?(f.$set(k,c),Pa&&g&&e.prop(g,f[k])):"href"===a&&f.$set(k,null)})}}}});var Cb={$addControl:A,$$renameControl:function(a,c){a.$name=c},$removeControl:A,$setValidity:A,$setDirty:A,$setPristine:A,$setSubmitted:A};md.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var td=function(a){return["$timeout",
function(c){return{name:"form",restrict:a?"EAC":"E",controller:md,compile:function(a){a.addClass(Qa).addClass(gb);return{pre:function(a,d,g,k){if(!("action"in g)){var h=function(c){a.$apply(function(){k.$commitViewValue();k.$setSubmitted()});c.preventDefault?c.preventDefault():c.returnValue=!1};d[0].addEventListener("submit",h,!1);d.on("$destroy",function(){c(function(){d[0].removeEventListener("submit",h,!1)},0,!1)})}var l=k.$$parentForm,m=k.$name;m&&(Oa(a,m,k,m),g.$observe(g.name?"name":"ngForm",
function(c){m!==c&&(Oa(a,m,u,m),m=c,Oa(a,m,k,m),l.$$renameControl(k,m))}));d.on("$destroy",function(){l.$removeControl(k);m&&Oa(a,m,u,m);E(k,Cb)})}}}}}]},Pd=td(),be=td(!0),zf=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,Kf=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,Lf=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,Mf=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,ud=/^(\d{4})-(\d{2})-(\d{2})$/,
vd=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,hc=/^(\d{4})-W(\d\d)$/,wd=/^(\d{4})-(\d\d)$/,xd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Nf=/(\s+|^)default(\s+|$)/,Fb=new y("ngModel"),yd={text:function(a,c,d,e,f,g){eb(a,c,d,e,f,g);ec(e)},date:fb("date",ud,Eb(ud,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":fb("datetimelocal",vd,Eb(vd,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:fb("time",xd,Eb(xd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:fb("week",
hc,function(a,c){if(ea(a))return a;if(I(a)){hc.lastIndex=0;var d=hc.exec(a);if(d){var e=+d[1],f=+d[2],g=d=0,k=0,h=0,l=kd(e),f=7*(f-1);c&&(d=c.getHours(),g=c.getMinutes(),k=c.getSeconds(),h=c.getMilliseconds());return new Date(e,0,l.getDate()+f,d,g,k,h)}}return NaN},"yyyy-Www"),month:fb("month",wd,Eb(wd,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){od(a,c,d,e);eb(a,c,d,e,f,g);e.$$parserName="number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:Mf.test(a)?parseFloat(a):u});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!W(a))throw Fb("numfmt",
a);a=a.toString()}return a});if(d.min||d.ngMin){var k;e.$validators.min=function(a){return e.$isEmpty(a)||w(k)||a>=k};d.$observe("min",function(a){z(a)&&!W(a)&&(a=parseFloat(a,10));k=W(a)&&!isNaN(a)?a:u;e.$validate()})}if(d.max||d.ngMax){var h;e.$validators.max=function(a){return e.$isEmpty(a)||w(h)||a<=h};d.$observe("max",function(a){z(a)&&!W(a)&&(a=parseFloat(a,10));h=W(a)&&!isNaN(a)?a:u;e.$validate()})}},url:function(a,c,d,e,f,g){eb(a,c,d,e,f,g);ec(e);e.$$parserName="url";e.$validators.url=function(a){return e.$isEmpty(a)||
Kf.test(a)}},email:function(a,c,d,e,f,g){eb(a,c,d,e,f,g);ec(e);e.$$parserName="email";e.$validators.email=function(a){return e.$isEmpty(a)||Lf.test(a)}},radio:function(a,c,d,e){w(d.name)&&c.attr("name",++hb);c.on("click",function(a){c[0].checked&&e.$setViewValue(d.value,a&&a.type)});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,g,k,h){var l=pd(h,a,"ngTrueValue",d.ngTrueValue,!0),m=pd(h,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",
function(a){e.$setViewValue(c[0].checked,a&&a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==l};e.$formatters.push(function(a){return la(a,l)});e.$parsers.push(function(a){return a?l:m})},hidden:A,button:A,submit:A,reset:A,file:A},vc=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,g,k,h){h[0]&&(yd[N(k.type)]||yd.text)(f,g,k,h[0],c,a,d,e)}}}}],gb="ng-valid",qd="ng-invalid",Qa="ng-pristine",
Db="ng-dirty",sd="ng-pending",Of=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,g,k,h,l,m){this.$modelValue=this.$viewValue=Number.NaN;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=u;this.$name=m(d.name||
"",!1)(a);var q=f(d.ngModel),p=null,n=this,s=function(){var c=q(a);n.$options&&n.$options.getterSetter&&F(c)&&(c=c());return c},J=function(c){var d;n.$options&&n.$options.getterSetter&&F(d=q(a))?d(n.$modelValue):q.assign(a,n.$modelValue)};this.$$setOptions=function(a){n.$options=a;if(!(q.assign||a&&a.getterSetter))throw Fb("nonassign",d.ngModel,sa(e));};this.$render=A;this.$isEmpty=function(a){return w(a)||""===a||null===a||a!==a};var v=e.inheritedData("$formController")||Cb,x=0;nd({ctrl:this,$element:e,
set:function(a,c){a[c]=!0},unset:function(a,c){delete a[c]},parentForm:v,$animate:g});this.$setPristine=function(){n.$dirty=!1;n.$pristine=!0;g.removeClass(e,Db);g.addClass(e,Qa)};this.$setUntouched=function(){n.$touched=!1;n.$untouched=!0;g.setClass(e,"ng-untouched","ng-touched")};this.$setTouched=function(){n.$touched=!0;n.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){k.cancel(p);n.$viewValue=n.$$lastCommittedViewValue;n.$render()};this.$validate=function(){W(n.$modelValue)&&
isNaN(n.$modelValue)||this.$$parseAndValidate()};this.$$runValidators=function(a,c,d,e){function f(){var a=!0;r(n.$validators,function(e,f){var g=e(c,d);a=a&&g;h(f,g)});return a?!0:(r(n.$asyncValidators,function(a,c){h(c,null)}),!1)}function g(){var a=[],e=!0;r(n.$asyncValidators,function(f,g){var k=f(c,d);if(!k||!F(k.then))throw Fb("$asyncValidators",k);h(g,u);a.push(k.then(function(){h(g,!0)},function(a){e=!1;h(g,!1)}))});a.length?l.all(a).then(function(){k(e)},A):k(!0)}function h(a,c){m===x&&n.$setValidity(a,
c)}function k(a){m===x&&e(a)}x++;var m=x;(function(a){var c=n.$$parserName||"parse";if(a===u)h(c,null);else if(h(c,a),!a)return r(n.$validators,function(a,c){h(c,null)}),r(n.$asyncValidators,function(a,c){h(c,null)}),!1;return!0})(a)?f()?g():k(!1):k(!1)};this.$commitViewValue=function(){var a=n.$viewValue;k.cancel(p);if(n.$$lastCommittedViewValue!==a||""===a&&n.$$hasNativeValidators)n.$$lastCommittedViewValue=a,n.$pristine&&(n.$dirty=!0,n.$pristine=!1,g.removeClass(e,Qa),g.addClass(e,Db),v.$setDirty()),
this.$$parseAndValidate()};this.$$parseAndValidate=function(){var a=n.$$lastCommittedViewValue,c=a,d=w(c)?u:!0;if(d)for(var e=0;e<n.$parsers.length;e++)if(c=n.$parsers[e](c),w(c)){d=!1;break}W(n.$modelValue)&&isNaN(n.$modelValue)&&(n.$modelValue=s());var f=n.$modelValue,g=n.$options&&n.$options.allowInvalid;g&&(n.$modelValue=c,n.$modelValue!==f&&n.$$writeModelToScope());n.$$runValidators(d,c,a,function(a){g||(n.$modelValue=a?c:u,n.$modelValue!==f&&n.$$writeModelToScope())})};this.$$writeModelToScope=
function(){J(n.$modelValue);r(n.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};this.$setViewValue=function(a,c){n.$viewValue=a;n.$options&&!n.$options.updateOnDefault||n.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=function(c){var d=0,e=n.$options;e&&z(e.debounce)&&(e=e.debounce,W(e)?d=e:W(e[c])?d=e[c]:W(e["default"])&&(d=e["default"]));k.cancel(p);d?p=k(function(){n.$commitViewValue()},d):h.$$phase?n.$commitViewValue():a.$apply(function(){n.$commitViewValue()})};a.$watch(function(){var a=
s();if(a!==n.$modelValue){n.$modelValue=a;for(var c=n.$formatters,d=c.length,e=a;d--;)e=c[d](e);n.$viewValue!==e&&(n.$viewValue=n.$$lastCommittedViewValue=e,n.$render(),n.$$runValidators(u,a,e,A))}return a})}],qe=function(){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Of,priority:1,compile:function(a){a.addClass(Qa).addClass("ng-untouched").addClass(gb);return{pre:function(a,d,e,f){var g=f[0],k=f[1]||Cb;g.$$setOptions(f[2]&&f[2].$options);k.$addControl(g);e.$observe("name",
function(a){g.$name!==a&&k.$$renameControl(g,a)});a.$on("$destroy",function(){k.$removeControl(g)})},post:function(a,d,e,f){var g=f[0];if(g.$options&&g.$options.updateOn)d.on(g.$options.updateOn,function(a){g.$$debounceViewValueCommit(a&&a.type)});d.on("blur",function(d){g.$touched||a.$apply(function(){g.$setTouched()})})}}}}},se=da({restrict:"A",require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),xc=function(){return{restrict:"A",require:"?ngModel",
link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a){return!d.required||!e.$isEmpty(a)},d.$observe("required",function(){e.$validate()}))}}},wc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){I(a)&&0<a.length&&(a=new RegExp(a));if(a&&!a.test)throw y("ngPattern")("noregexp",g,a,sa(c));f=a||u;e.$validate()});e.$validators.pattern=function(a){return e.$isEmpty(a)||w(f)||f.test(a)}}}}},
zc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("maxlength",function(a){f=ba(a)||0;e.$validate()});e.$validators.maxlength=function(a,c){return e.$isEmpty(a)||c.length<=f}}}}},yc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=ba(a)||0;e.$validate()});e.$validators.minlength=function(a,c){return e.$isEmpty(a)||c.length>=f}}}}},re=function(){return{restrict:"A",priority:100,
require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,k=g?U(f):f;e.$parsers.push(function(a){if(!w(a)){var c=[];a&&r(a.split(k),function(a){a&&c.push(g?U(a):a)});return c}});e.$formatters.push(function(a){return B(a)?a.join(f):u});e.$isEmpty=function(a){return!a||!a.length}}}},Pf=/^(true|false|\d+)$/,te=function(){return{restrict:"A",priority:100,compile:function(a,c){return Pf.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,
c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},ue=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=a.$eval(c.ngModelOptions);this.$options.updateOn!==u?(this.$options.updateOnDefault=!1,this.$options.updateOn=U(this.$options.updateOn.replace(Nf,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},Ud=["$compile",function(a){return{restrict:"AC",compile:function(c){a.$$addBindingClass(c);return function(c,
e,f){a.$$addBindingInfo(e,f.ngBind);e=e[0];c.$watch(f.ngBind,function(a){e.textContent=a===u?"":a})}}}}],Wd=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));c.$$addBindingInfo(f,d.expressions);f=f[0];g.$observe("ngBindTemplate",function(a){f.textContent=a===u?"":a})}}}}],Vd=["$sce","$parse","$compile",function(a,c,d){return{restrict:"A",compile:function(e,f){var g=c(f.ngBindHtml),k=c(f.ngBindHtml,
function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(k,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],Xd=fc("",!0),Zd=fc("Odd",0),Yd=fc("Even",1),$d=Ha({compile:function(a,c){c.$set("ngCloak",u);a.removeClass("ng-cloak")}}),ae=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Ac={},Qf={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var c=ua("ng-"+a);Ac[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,g){var k=d(g[c]);return function(c,d){d.on(a,function(d){var f=function(){k(c,{$event:d})};Qf[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var de=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var k,h,l;c.$watch(e.ngIf,function(c){c?h||g(function(c,f){h=f;c[c.length++]=X.createComment(" end ngIf: "+
e.ngIf+" ");k={clone:c};a.enter(c,d.parent(),d)}):(l&&(l.remove(),l=null),h&&(h.$destroy(),h=null),k&&(l=ob(k.clone),a.leave(l).then(function(){l=null}),k=null))})}}}],ee=["$templateRequest","$anchorScroll","$animate","$sce",function(a,c,d,e){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:ta.noop,compile:function(f,g){var k=g.ngInclude||g.src,h=g.onload||"",l=g.autoscroll;return function(f,g,p,n,r){var u=0,v,x,t,y=function(){x&&(x.remove(),x=null);v&&(v.$destroy(),
v=null);t&&(d.leave(t).then(function(){x=null}),x=t,t=null)};f.$watch(e.parseAsResourceUrl(k),function(e){var k=function(){!z(l)||l&&!f.$eval(l)||c()},p=++u;e?(a(e,!0).then(function(a){if(p===u){var c=f.$new();n.template=a;a=r(c,function(a){y();d.enter(a,null,g).then(k)});v=c;t=a;v.$emit("$includeContentLoaded",e);f.$eval(h)}},function(){p===u&&(y(),f.$emit("$includeContentError",e))}),f.$emit("$includeContentRequested",e)):(y(),n.template=null)})}}}}],ve=["$compile",function(a){return{restrict:"ECA",
priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Dc(f.template,X).childNodes)(c,function(a){d.append(a)},u,u,d)):(d.html(f.template),a(d.contents())(c))}}}],fe=Ha({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),ge=Ha({terminal:!0,priority:1E3}),he=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,f,g){var k=g.count,h=g.$attr.when&&f.attr(g.$attr.when),l=g.offset||0,m=e.$eval(h)||
{},q={},p=c.startSymbol(),n=c.endSymbol(),s=/^when(Minus)?(.+)$/;r(g,function(a,c){s.test(c)&&(m[N(c.replace("when","").replace("Minus","-"))]=f.attr(g.$attr[c]))});r(m,function(a,e){q[e]=c(a.replace(d,p+k+"-"+l+n))});e.$watch(function(){var c=parseFloat(e.$eval(k));if(isNaN(c))return"";c in m||(c=a.pluralCat(c-l));return q[c](e)},function(a){f.text(a)})}}}],ie=["$parse","$animate",function(a,c){var d=y("ngRepeat"),e=function(a,c,d,e,l,m,q){a[d]=e;l&&(a[l]=m);a.$index=c;a.$first=0===c;a.$last=c===
q-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var k=g.ngRepeat,h=X.createComment(" end ngRepeat: "+k+" "),l=k.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!l)throw d("iexp",k);var m=l[1],q=l[2],p=l[3],n=l[4],l=m.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!l)throw d("iidexp",m);var s=l[3]||l[1],J=
l[2];if(p&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent)$/.test(p)))throw d("badident",p);var v,x,t,y,z={$id:La};n?v=a(n):(t=function(a,c){return La(c)},y=function(a){return a});return function(a,f,g,l,n){v&&(x=function(c,d,e){J&&(z[J]=c);z[s]=d;z.$index=e;return v(a,z)});var m=wa();a.$watchCollection(q,function(g){var l,q,z=f[0],H,v=wa(),C,Q,A,E,w,B,F;p&&(a[p]=g);if(Ra(g))w=g,q=x||t;else{q=x||y;w=[];for(F in g)g.hasOwnProperty(F)&&
"$"!=F.charAt(0)&&w.push(F);w.sort()}C=w.length;F=Array(C);for(l=0;l<C;l++)if(Q=g===w?l:w[l],A=g[Q],E=q(Q,A,l),m[E])B=m[E],delete m[E],v[E]=B,F[l]=B;else{if(v[E])throw r(F,function(a){a&&a.scope&&(m[a.id]=a)}),d("dupes",k,E,ra(A));F[l]={id:E,scope:u,clone:u};v[E]=!0}for(H in m){B=m[H];E=ob(B.clone);c.leave(E);if(E[0].parentNode)for(l=0,q=E.length;l<q;l++)E[l].$$NG_REMOVED=!0;B.scope.$destroy()}for(l=0;l<C;l++)if(Q=g===w?l:w[l],A=g[Q],B=F[l],B.scope){H=z;do H=H.nextSibling;while(H&&H.$$NG_REMOVED);
B.clone[0]!=H&&c.move(ob(B.clone),null,D(z));z=B.clone[B.clone.length-1];e(B.scope,l,s,A,J,Q,C)}else n(function(a,d){B.scope=d;var f=h.cloneNode(!1);a[a.length++]=f;c.enter(a,null,D(z));z=f;B.clone=a;v[B.id]=B;e(B.scope,l,s,A,J,Q,C)});m=v})}}}}],je=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],ce=["$animate",function(a){return{restrict:"A",multiElement:!0,
link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],ke=Ha(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&r(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),le=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],k=[],h=[],l=[],m=function(a,c){return function(){a.splice(c,1)}};c.$watch(e.ngSwitch||e.on,function(c){var d,
e;d=0;for(e=h.length;d<e;++d)a.cancel(h[d]);d=h.length=0;for(e=l.length;d<e;++d){var s=ob(k[d].clone);l[d].$destroy();(h[d]=a.leave(s)).then(m(h,d))}k.length=0;l.length=0;(g=f.cases["!"+c]||f.cases["?"])&&r(g,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=X.createComment(" end ngSwitchWhen: ");k.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],me=Ha({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=
e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),ne=Ha({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),pe=Ha({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw y("ngTransclude")("orphan",sa(c));f(function(a){c.empty();c.append(a)})}}),Qd=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==
d.type&&a.put(d.id,c[0].text)}}}],Rf=y("ngOptions"),oe=da({restrict:"A",terminal:!0}),Rd=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:A};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var h=this,l={},m=e,q;h.databound=d.ngModel;
h.init=function(a,c,d){m=a;q=d};h.addOption=function(c,d){Ka(c,'"option value"');l[c]=!0;m.$viewValue==c&&(a.val(c),q.parent()&&q.remove());d&&d[0].hasAttribute("selected")&&(d[0].selected=!0)};h.removeOption=function(a){this.hasOption(a)&&(delete l[a],m.$viewValue==a&&this.renderUnknownOption(a))};h.renderUnknownOption=function(c){c="? "+La(c)+" ?";q.val(c);a.prepend(q);a.val(c);q.prop("selected",!0)};h.hasOption=function(a){return l.hasOwnProperty(a)};c.$on("$destroy",function(){h.renderUnknownOption=
A})}],link:function(e,g,k,h){function l(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(C.parent()&&C.remove(),c.val(a),""===a&&v.prop("selected",!0)):w(a)&&v?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){C.parent()&&C.remove();d.$setViewValue(c.val())})})}function m(a,c,d){var e;d.$render=function(){var a=new bb(d.$viewValue);r(c.find("option"),function(c){c.selected=z(a.get(c.value))})};a.$watch(function(){la(e,d.$viewValue)||(e=qa(d.$viewValue),
d.$render())});c.on("change",function(){a.$apply(function(){var a=[];r(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function q(e,f,g){function h(a,c,d){N[A]=d;F&&(N[F]=c);return a(e,N)}function k(a){var c;if(n)if(G&&B(a)){c=new bb([]);for(var d=0;d<a.length;d++)c.put(h(G,null,a[d]),!0)}else c=new bb(a);else G&&(a=h(G,null,a));return function(d,e){var f;f=G?G:w?w:I;return n?z(c.remove(h(f,d,e))):a==h(f,d,e)}}function l(){x||(e.$$postDigest(q),x=!0)}function m(a,
c,d){a[c]=a[c]||0;a[c]+=d?1:-1}function q(){x=!1;var a={"":[]},c=[""],d,l,s,u,v;s=g.$viewValue;u=P(e)||[];var A=F?ic(u):u,w,B,D,I,G,N={};I=k(s);v=!1;var S;for(G=0;D=A.length,G<D;G++){w=G;if(F&&(w=A[G],"$"===w.charAt(0)))continue;B=u[w];d=h(M,w,B)||"";(l=a[d])||(l=a[d]=[],c.push(d));d=I(w,B);v=v||d;w=h(C,w,B);w=z(w)?w:"";l.push({id:F?A[G]:G,label:w,selected:d})}n||(y||null===s?a[""].unshift({id:"",label:"",selected:!v}):v||a[""].unshift({id:"?",label:"",selected:!0}));I=0;for(A=c.length;I<A;I++){d=
c[I];l=a[d];R.length<=I?(s={element:E.clone().attr("label",d),label:l.label},u=[s],R.push(u),f.append(s.element)):(u=R[I],s=u[0],s.label!=d&&s.element.attr("label",s.label=d));w=null;G=0;for(D=l.length;G<D;G++)d=l[G],(v=u[G+1])?(w=v.element,v.label!==d.label&&(m(N,v.label,!1),m(N,d.label,!0),w.text(v.label=d.label)),v.id!==d.id&&w.val(v.id=d.id),w[0].selected!==d.selected&&(w.prop("selected",v.selected=d.selected),Pa&&w.prop("selected",v.selected))):(""===d.id&&y?S=y:(S=t.clone()).val(d.id).prop("selected",
d.selected).attr("selected",d.selected).text(d.label),u.push(v={element:S,label:d.label,id:d.id,selected:d.selected}),m(N,d.label,!0),w?w.after(S):s.element.append(S),w=S);for(G++;u.length>G;)d=u.pop(),m(N,d.label,!1),d.element.remove();r(N,function(a,c){0<a?p.addOption(c):0>a&&p.removeOption(c)})}for(;R.length>I;)R.pop()[0].element.remove()}var v;if(!(v=s.match(d)))throw Rf("iexp",s,sa(f));var C=c(v[2]||v[1]),A=v[4]||v[6],D=/ as /.test(v[0])&&v[1],w=D?c(D):null,F=v[5],M=c(v[3]||""),I=c(v[2]?v[1]:
A),P=c(v[7]),G=v[8]?c(v[8]):null,R=[[{element:f,label:""}]],N={};y&&(a(y)(e),y.removeClass("ng-scope"),y.remove());f.empty();f.on("change",function(){e.$apply(function(){var a=P(e)||[],c;if(n)c=[],r(f.val(),function(d){c.push("?"===d?u:""===d?null:h(w?w:I,d,a[d]))});else{var d=f.val();c="?"===d?u:""===d?null:h(w?w:I,d,a[d])}g.$setViewValue(c);q()})});g.$render=q;e.$watchCollection(P,l);e.$watchCollection(function(){var a=P(e),c;if(a&&B(a)){c=Array(a.length);for(var d=0,f=a.length;d<f;d++)c[d]=h(C,
d,a[d])}else if(a)for(d in c={},a)a.hasOwnProperty(d)&&(c[d]=h(C,d,a[d]));return c},l);n&&e.$watchCollection(function(){return g.$modelValue},l)}if(h[1]){var p=h[0];h=h[1];var n=k.multiple,s=k.ngOptions,y=!1,v,x=!1,t=D(X.createElement("option")),E=D(X.createElement("optgroup")),C=t.clone();k=0;for(var A=g.children(),F=A.length;k<F;k++)if(""===A[k].value){v=y=A.eq(k);break}p.init(h,y,C);n&&(h.$isEmpty=function(a){return!a||0===a.length});s?q(e,g,h):n?m(e,g,h):l(e,g,h,p)}}}}],Td=["$interpolate",function(a){var c=
{addOption:A,removeOption:A};return{restrict:"E",priority:100,compile:function(d,e){if(w(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var l=d.parent(),m=l.data("$selectController")||l.parent().data("$selectController");m&&m.databound||(m=c);f?a.$watch(f,function(a,c){e.$set("value",a);c!==a&&m.removeOption(c);m.addOption(a,d)}):m.addOption(e.value,d);d.on("$destroy",function(){m.removeOption(e.value)})}}}}],Sd=da({restrict:"E",terminal:!1});S.angular.bootstrap?
console.log("WARNING: Tried to load angular more than once."):(Id(),Kd(ta),D(X).ready(function(){Ed(X,rc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');
//# sourceMappingURL=angular.min.js.map

/*! angular-google-maps 2.0.1 2014-10-10
 *  AngularJS directives for Google Maps
 *  git: https://github.com/angular-ui/angular-google-maps.git
 */
(function(){String.prototype.contains=function(a,b){return-1!==this.indexOf(a,b)},String.prototype.flare=function(a){return null==a&&(a="uiGmap"),a+this},String.prototype.ns=String.prototype.flare}).call(this),function(){_.intersectionObjects=function(a,b,c){var d;return null==c&&(c=void 0),d=_.map(a,function(){return function(a){return _.find(b,function(b){return null!=c?c(a,b):_.isEqual(a,b)})}}(this)),_.filter(d,function(a){return null!=a})},_.containsObject=_.includeObject=function(a,b,c){return null==c&&(c=void 0),null===a?!1:_.any(a,function(){return function(a){return null!=c?c(a,b):_.isEqual(a,b)}}(this))},_.differenceObjects=function(a,b,c){return null==c&&(c=void 0),_.filter(a,function(a){return!_.containsObject(b,a,c)})},_.withoutObjects=_.differenceObjects,_.indexOfObject=function(a,b,c,d){var e,f;if(null==a)return-1;if(e=0,f=a.length,d){if("number"!=typeof d)return e=_.sortedIndex(a,b),a[e]===b?e:-1;e=0>d?Math.max(0,f+d):d}for(;f>e;){if(null!=c){if(c(a[e],b))return e}else if(_.isEqual(a[e],b))return e;e++}return-1},_["extends"]=function(a){return _.reduce(a,function(a,b){return _.extend(a,b)},{})},_.isNullOrUndefined=function(a){return _.isNull(a||_.isUndefined(a))}}.call(this),function(){angular.module("google-maps.providers".ns(),[]),angular.module("google-maps.wrapped".ns(),[]),angular.module("google-maps.extensions".ns(),["google-maps.wrapped".ns(),"google-maps.providers".ns()]),angular.module("google-maps.directives.api.utils".ns(),["google-maps.extensions".ns()]),angular.module("google-maps.directives.api.managers".ns(),[]),angular.module("google-maps.directives.api.options".ns(),["google-maps.directives.api.utils".ns()]),angular.module("google-maps.directives.api.options.builders".ns(),[]),angular.module("google-maps.directives.api.models.child".ns(),["google-maps.directives.api.utils".ns(),"google-maps.directives.api.options".ns(),"google-maps.directives.api.options.builders".ns()]),angular.module("google-maps.directives.api.models.parent".ns(),["google-maps.directives.api.managers".ns(),"google-maps.directives.api.models.child".ns(),"google-maps.providers".ns()]),angular.module("google-maps.directives.api".ns(),["google-maps.directives.api.models.parent".ns()]),angular.module("google-maps".ns(),["google-maps.directives.api".ns(),"google-maps.providers".ns()]).factory("debounce".ns(),["$timeout",function(a){return function(b){var c;return c=0,function(){var d,e,f;return f=this,d=arguments,c++,e=function(a){return function(){return a===c?b.apply(f,d):void 0}}(c),a(e,0,!0)}}}])}.call(this),function(){angular.module("google-maps.providers".ns()).factory("MapScriptLoader".ns(),["$q",function(a){return{load:function(b){var c,d,e,f;return c=a.defer(),angular.isDefined(window.google)&&angular.isDefined(window.google.maps)?(c.resolve(window.google.maps),c.promise):(e=b.callback="onGoogleMapsReady"+Math.round(1e3*Math.random()),window[e]=function(){window[e]=null,c.resolve(window.google.maps)},d=_.map(b,function(a,b){return b+"="+a}),d=d.join("&"),f=document.createElement("script"),f.type="text/javascript",f.src="https://maps.googleapis.com/maps/api/js?"+d,document.body.appendChild(f),c.promise)}}}]).provider("GoogleMapApi".ns(),function(){return this.options={v:"3.16",libraries:"places",language:"en",sensor:"false"},this.configure=function(a){angular.extend(this.options,a)},this.$get=["MapScriptLoader".ns(),function(a){return function(b){return a.promise=b.load(a.options),a.promise}}(this)],this})}.call(this),function(){angular.module("google-maps.extensions".ns()).service("ExtendGWin".ns(),function(){return{init:_.once(function(){return google||("undefined"!=typeof google&&null!==google?google.maps:void 0)||null!=google.maps.InfoWindow?(google.maps.InfoWindow.prototype._open=google.maps.InfoWindow.prototype.open,google.maps.InfoWindow.prototype._close=google.maps.InfoWindow.prototype.close,google.maps.InfoWindow.prototype._isOpen=!1,google.maps.InfoWindow.prototype.open=function(a,b,c){null==c&&(this._isOpen=!0,this._open(a,b,!0))},google.maps.InfoWindow.prototype.close=function(a){null==a&&(this._isOpen=!1,this._close(!0))},google.maps.InfoWindow.prototype.isOpen=function(a){return null==a&&(a=void 0),null==a?this._isOpen:this._isOpen=a},window.InfoBox&&(window.InfoBox.prototype._open=window.InfoBox.prototype.open,window.InfoBox.prototype._close=window.InfoBox.prototype.close,window.InfoBox.prototype._isOpen=!1,window.InfoBox.prototype.open=function(a,b){this._isOpen=!0,this._open(a,b)},window.InfoBox.prototype.close=function(){this._isOpen=!1,this._close()},window.InfoBox.prototype.isOpen=function(a){return null==a&&(a=void 0),null==a?this._isOpen:this._isOpen=a}),window.MarkerLabel_?(window.MarkerLabel_.prototype.setContent=function(){var a;a=this.marker_.get("labelContent"),a&&!_.isEqual(this.oldContent,a)&&("undefined"==typeof(null!=a?a.nodeType:void 0)?(this.labelDiv_.innerHTML=a,this.eventDiv_.innerHTML=this.labelDiv_.innerHTML,this.oldContent=a):(this.labelDiv_.innerHTML="",this.labelDiv_.appendChild(a),a=a.cloneNode(!0),this.eventDiv_.appendChild(a),this.oldContent=a))},window.MarkerLabel_.prototype.onRemove=function(){null!=this.labelDiv_.parentNode&&this.labelDiv_.parentNode.removeChild(this.labelDiv_),null!=this.eventDiv_.parentNode&&this.eventDiv_.parentNode.removeChild(this.eventDiv_),this.listeners_&&this.listeners_.length&&this.listeners_.forEach(function(a){return google.maps.event.removeListener(a)})}):void 0):void 0})}})}.call(this),function(){angular.module("google-maps.directives.api.utils".ns()).service("_sync".ns(),[function(){return{fakePromise:function(){var a;return a=void 0,{then:function(b){return a=b},resolve:function(){return a.apply(void 0,arguments)}}}}}]).factory("_async".ns(),[function(){var a,b,c,d,e;return a=20,e=function(a,b){return a.existingPieces=a.existingPieces?a.existingPieces.then(function(){return b()}):b()},b=function(a,c,d,e,f,g,h){var i,j,k;try{for(i=c&&c<a.length?c:a.length,k=h;i--&&k<(a?a.length:k+1);)e(a[k],k),++k;if(a){if(!(k<a.length))return g.resolve();if(h=k,c)return"function"==typeof f&&f(),setTimeout(function(){return b(a,c,d,e,f,g,h)},d)}}catch(l){return j=l,g.reject("error within chunking iterator: "+j)}},c=function(c,d,e,f,g,h){var i,j;return null==f&&(f=a),null==g&&(g=0),null==h&&(h=1),j=void 0,i=Promise.defer(),j=i.promise,h?void 0===c||(null!=c?c.length:void 0)<=0?(i.resolve(),j):(b(c,f,h,d,e,i,g),j):(i.reject("pause (delay) must be set from _async!"),j)},d=function(a,b,d,e,f,g){var h;return h=[],null!=a&&(null!=a?a.length:void 0)>0?c(a,function(a){return h.push(b(a))},d,e,f,g).then(function(){return h}):Promise.resolve(h)},{each:c,map:d,waitOrGo:e,defaultChunkSize:a}}])}.call(this),function(){var a=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};angular.module("google-maps.directives.api.utils".ns()).factory("BaseObject".ns(),function(){var b,c;return c=["extended","included"],b=function(){function b(){}return b.extend=function(b){var d,e,f;for(d in b)e=b[d],a.call(c,d)<0&&(this[d]=e);return null!=(f=b.extended)&&f.apply(this),this},b.include=function(b){var d,e,f;for(d in b)e=b[d],a.call(c,d)<0&&(this.prototype[d]=e);return null!=(f=b.included)&&f.apply(this),this},b}()})}.call(this),function(){angular.module("google-maps.directives.api.utils".ns()).factory("ChildEvents".ns(),function(){return{onChildCreation:function(){}}})}.call(this),function(){angular.module("google-maps.directives.api.utils".ns()).service("CtrlHandle".ns(),["$q",function(a){var b;return b={handle:function(b){return b.deferred=a.defer(),{getScope:function(){return b}}},mapPromise:function(a,b){var c;return c=b.getScope(),c.deferred.promise.then(function(b){return a.map=b}),c.deferred.promise}}}])}.call(this),function(){angular.module("google-maps.directives.api.utils".ns()).service("EventsHelper".ns(),["Logger".ns(),function(a){return{setEvents:function(b,c,d,e){return angular.isDefined(c.events)&&null!=c.events&&angular.isObject(c.events)?_.compact(_.map(c.events,function(f,g){var h;return e&&(h=_(e).contains(g)),c.events.hasOwnProperty(g)&&angular.isFunction(c.events[g])&&!h?google.maps.event.addListener(b,g,function(){return c.$apply(f.apply(c,[b,g,d,arguments]))}):a.info("EventHelper: invalid event listener "+g)})):void 0},removeEvents:function(a){return null!=a?a.forEach(function(a){return google.maps.event.removeListener(a)}):void 0}}}])}.call(this),function(){var a={}.hasOwnProperty,b=function(b,c){function d(){this.constructor=b}for(var e in c)a.call(c,e)&&(b[e]=c[e]);return d.prototype=c.prototype,b.prototype=new d,b.__super__=c.prototype,b};angular.module("google-maps.directives.api.utils".ns()).factory("FitHelper".ns(),["BaseObject".ns(),"Logger".ns(),"_async".ns(),function(a,c,d){var e;return e=function(a){function c(){return c.__super__.constructor.apply(this,arguments)}return b(c,a),c.prototype.fit=function(a,b){var c,e;return b&&a&&a.length>0?(c=new google.maps.LatLngBounds,e=!1,d.each(a,function(){return function(a){return a?(e||(e=!0),c.extend(a.getPosition())):void 0}}(this)).then(function(){return e?b.fitBounds(c):void 0})):void 0},c}(a)}])}.call(this),function(){angular.module("google-maps.directives.api.utils".ns()).service("GmapUtil".ns(),["Logger".ns(),"$compile",function(a,b){var c,d,e,f;return d=function(a){return Array.isArray(a)&&2===a.length?a[1]:angular.isDefined(a.type)&&"Point"===a.type?a.coordinates[1]:a.latitude},e=function(a){return Array.isArray(a)&&2===a.length?a[0]:angular.isDefined(a.type)&&"Point"===a.type?a.coordinates[0]:a.longitude},c=function(a){return a?Array.isArray(a)&&2===a.length?new google.maps.LatLng(a[1],a[0]):angular.isDefined(a.type)&&"Point"===a.type?new google.maps.LatLng(a.coordinates[1],a.coordinates[0]):new google.maps.LatLng(a.latitude,a.longitude):void 0},f=function(a){if(angular.isUndefined(a))return!1;if(_.isArray(a)){if(2===a.length)return!0}else if(null!=a&&(null!=a?a.type:void 0)&&"Point"===a.type&&_.isArray(a.coordinates)&&2===a.coordinates.length)return!0;return a&&angular.isDefined((null!=a?a.latitude:void 0)&&angular.isDefined(null!=a?a.longitude:void 0))?!0:!1},{setCoordsFromEvent:function(a,b){return a?(Array.isArray(a)&&2===a.length?(a[1]=b.lat(),a[0]=b.lng()):angular.isDefined(a.type)&&"Point"===a.type?(a.coordinates[1]=b.lat(),a.coordinates[0]=b.lng()):(a.latitude=b.lat(),a.longitude=b.lng()),a):void 0},getLabelPositionPoint:function(a){var b,c;return void 0===a?void 0:(a=/^([-\d\.]+)\s([-\d\.]+)$/.exec(a),b=parseFloat(a[1]),c=parseFloat(a[2]),null!=b&&null!=c?new google.maps.Point(b,c):void 0)},createWindowOptions:function(d,e,f,g){var h;return null!=f&&null!=g&&null!=b?(h=angular.extend({},g,{content:this.buildContent(e,g,f),position:null!=g.position?g.position:angular.isObject(d)?d.getPosition():c(e.coords)}),null!=d&&null==(null!=h?h.pixelOffset:void 0)&&(h.pixelOffset=null==h.boxClass?{height:-40,width:0}:{height:0,width:-2}),h):g?g:(a.error("infoWindow defaults not defined"),f?void 0:a.error("infoWindow content not defined"))},buildContent:function(a,c,d){var e,f;return null!=c.content?f=c.content:null!=b?(e=b(d)(a),e.length>0&&(f=e[0])):f=d,f},defaultDelay:50,isTrue:function(a){return angular.isDefined(a)&&null!==a&&a===!0||"1"===a||"y"===a||"true"===a},isFalse:function(a){return-1!==["false","FALSE",0,"n","N","no","NO"].indexOf(a)},getCoords:c,validateCoords:f,equalCoords:function(a,b){return d(a)===d(b)&&e(a)===e(b)},validatePath:function(a){var b,c,d,e;if(c=0,angular.isUndefined(a.type)){if(!Array.isArray(a)||a.length<2)return!1;for(;c<a.length;){if(!(angular.isDefined(a[c].latitude)&&angular.isDefined(a[c].longitude)||"function"==typeof a[c].lat&&"function"==typeof a[c].lng))return!1;c++}return!0}if(angular.isUndefined(a.coordinates))return!1;if("Polygon"===a.type){if(a.coordinates[0].length<4)return!1;b=a.coordinates[0]}else if("MultiPolygon"===a.type){if(e={max:0,index:0},_.forEach(a.coordinates,function(a,b){return a[0].length>this.max?(this.max=a[0].length,this.index=b):void 0},e),d=a.coordinates[e.index],b=d[0],b.length<4)return!1}else{if("LineString"!==a.type)return!1;if(a.coordinates.length<2)return!1;b=a.coordinates}for(;c<b.length;){if(2!==b[c].length)return!1;c++}return!0},convertPathPoints:function(a){var b,c,d,e,f;if(c=0,e=new google.maps.MVCArray,angular.isUndefined(a.type))for(;c<a.length;)angular.isDefined(a[c].latitude)&&angular.isDefined(a[c].longitude)?d=new google.maps.LatLng(a[c].latitude,a[c].longitude):"function"==typeof a[c].lat&&"function"==typeof a[c].lng&&(d=a[c]),e.push(d),c++;else for("Polygon"===a.type?b=a.coordinates[0]:"MultiPolygon"===a.type?(f={max:0,index:0},_.forEach(a.coordinates,function(a,b){return a[0].length>this.max?(this.max=a[0].length,this.index=b):void 0},f),b=a.coordinates[f.index][0]):"LineString"===a.type&&(b=a.coordinates);c<b.length;)e.push(new google.maps.LatLng(b[c][1],b[c][0])),c++;return e},extendMapBounds:function(a,b){var c,d;for(c=new google.maps.LatLngBounds,d=0;d<b.length;)c.extend(b.getAt(d)),d++;return a.fitBounds(c)},getPath:function(a,b){var c;return c=a,_.each(b.split("."),function(a){return c?c=c[a]:void 0}),c},validateBoundPoints:function(a){return angular.isUndefined(a.sw.latitude)||angular.isUndefined(a.sw.longitude)||angular.isUndefined(a.ne.latitude)||angular.isUndefined(a.ne.longitude)?!1:!0},convertBoundPoints:function(a){var b;return b=new google.maps.LatLngBounds(new google.maps.LatLng(a.sw.latitude,a.sw.longitude),new google.maps.LatLng(a.ne.latitude,a.ne.longitude))},fitMapBounds:function(a,b){return a.fitBounds(b)}}}])}.call(this),function(){angular.module("google-maps.directives.api.utils".ns()).service("IsReady".ns(),["$q","$timeout",function(a,b){var c,d,e;return c=0,e=[],d=function(){return a.all(e)},{spawn:function(){var b;return b=a.defer(),e.push(b.promise),c+=1,{instance:c,deferred:b}},promises:d,instances:function(){return c},promise:function(e){var f,g;return null==e&&(e=1),f=a.defer(),g=function(){return b(function(){return c!==e?g():f.resolve(d())})},g(),f.promise}}}])}.call(this),function(){var a={}.hasOwnProperty,b=function(b,c){function d(){this.constructor=b}for(var e in c)a.call(c,e)&&(b[e]=c[e]);return d.prototype=c.prototype,b.prototype=new d,b.__super__=c.prototype,b};angular.module("google-maps.directives.api.utils".ns()).factory("Linked".ns(),["BaseObject".ns(),function(a){var c;return c=function(a){function c(a,b,c,d){this.scope=a,this.element=b,this.attrs=c,this.ctrls=d}return b(c,a),c}(a)}])}.call(this),function(){angular.module("google-maps.directives.api.utils".ns()).service("Logger".ns(),["$log",function(a){return{doLog:!1,info:function(b){return this.doLog?null!=a?a.info(b):console.info(b):void 0},log:function(b){return this.doLog?null!=a?a.log(b):console.log(b):void 0},error:function(b){return this.doLog?null!=a?a.error(b):console.error(b):void 0},debug:function(b){return this.doLog?null!=a?a.debug(b):console.debug(b):void 0},warn:function(b){return this.doLog?null!=a?a.warn(b):console.warn(b):void 0}}}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a};angular.module("google-maps.directives.api.utils".ns()).factory("ModelKey".ns(),["BaseObject".ns(),"GmapUtil".ns(),function(b,d){var e;return e=function(b){function e(b){this.scope=b,this.setIdKey=a(this.setIdKey,this),this.modelKeyComparison=a(this.modelKeyComparison,this),e.__super__.constructor.call(this),this.defaultIdKey="id",this.idKey=void 0}return c(e,b),e.prototype.evalModelHandle=function(a,b){return void 0===a||void 0===b?void 0:"self"===b?a:d.getPath(a,b)},e.prototype.modelKeyComparison=function(a,b){var c;if(c=null!=this.scope.coords?this.scope:this.parentScope,null==c)throw"No scope or parentScope set!";return d.equalCoords(this.evalModelHandle(a,c.coords),this.evalModelHandle(b,c.coords))},e.prototype.setIdKey=function(a){return this.idKey=null!=a.idKey?a.idKey:this.defaultIdKey},e.prototype.setVal=function(a,b,c){var d;return d=this.modelOrKey(a,b),d=c,a},e.prototype.modelOrKey=function(a,b){var c;return c="self"!==b?a[b]:a},e}(b)}])}.call(this),function(){angular.module("google-maps.directives.api.utils".ns()).factory("ModelsWatcher".ns(),["Logger".ns(),"_async".ns(),function(a,b){return{figureOutState:function(c,d,e,f,g){var h,i,j,k;return h=[],i={},j=[],k=[],b.each(d.models,function(b){var d;return null==b[c]?a.error(" id missing for model "+b.toString()+",\ncan not use do comparison/insertion"):(i[b[c]]={},null==e[b[c]]?h.push(b):(d=e[b[c]],f(b,d.model)?void 0:k.push({model:b,child:d})))}).then(function(){return function(){return b.each(e.values(),function(b){var d;return null==b?void a.error("child undefined in ModelsWatcher."):null==b.model?void a.error("child.model undefined in ModelsWatcher."):(d=b.model[c],null==i[d]?j.push(b):void 0)})}}(this)).then(function(){return function(){return g({adds:h,removals:j,updates:k})}}(this))}}}])}.call(this),function(){var a,b=function(a,b){return function(){return a.apply(b,arguments)}};a=["get","put","remove","values","keys","length","push","didValueStateChange","didKeyStateChange","slice","removeAll","allVals","allKeys","stateChanged"],window.PropMap=function(){function c(){this.removeAll=b(this.removeAll,this),this.slice=b(this.slice,this),this.push=b(this.push,this),this.keys=b(this.keys,this),this.values=b(this.values,this),this.remove=b(this.remove,this),this.put=b(this.put,this),this.stateChanged=b(this.stateChanged,this),this.get=b(this.get,this),this.length=0,this.didValueStateChange=!1,this.didKeyStateChange=!1,this.allVals=[],this.allKeys=[]}return c.prototype.get=function(a){return this[a]},c.prototype.stateChanged=function(){return this.didValueStateChange=!0,this.didKeyStateChange=!0},c.prototype.put=function(a,b){return null==this.get(a)&&this.length++,this.stateChanged(),this[a]=b},c.prototype.remove=function(a,b){var c;return null==b&&(b=!1),b&&!this.get(a)?void 0:(c=this[a],delete this[a],this.length--,this.stateChanged(),c)},c.prototype.values=function(){var b;return this.didValueStateChange?(b=[],this.keys().forEach(function(c){return function(d){return-1===_.indexOf(a,d)?b.push(c[d]):void 0}}(this)),this.didValueStateChange=!1,this.keys(),this.allVals=b):this.allVals},c.prototype.keys=function(){var b,c;return this.didKeyStateChange?(c=_.keys(this),b=[],_.each(c,function(){return function(c){return-1===_.indexOf(a,c)?b.push(c):void 0}}(this)),this.didKeyStateChange=!1,this.values(),this.allKeys=b):this.allKeys},c.prototype.push=function(a,b){return null==b&&(b="key"),this.put(a[b],a)},c.prototype.slice=function(){return this.keys().map(function(a){return function(b){return a.remove(b)}}(this))},c.prototype.removeAll=function(){return this.slice()},c}(),angular.module("google-maps.directives.api.utils".ns()).factory("PropMap".ns(),function(){return window.PropMap})}.call(this),function(){angular.module("google-maps.directives.api.utils".ns()).factory("PropertyAction".ns(),["Logger".ns(),function(){var a;return a=function(a,b){return this.setIfChange=function(c,d){return _.isEqual(d,c||b)?void 0:a(c)},this.sic=function(a){return function(b,c){return a.setIfChange(b,c)}}(this),this}}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a};angular.module("google-maps.directives.api.managers".ns()).factory("ClustererMarkerManager".ns(),["Logger".ns(),"FitHelper".ns(),"PropMap".ns(),function(b,d,e){var f;return f=function(d){function f(c,d,g,h){var i;this.opt_events=h,this.checkSync=a(this.checkSync,this),this.getGMarkers=a(this.getGMarkers,this),this.fit=a(this.fit,this),this.destroy=a(this.destroy,this),this.clear=a(this.clear,this),this.draw=a(this.draw,this),this.removeMany=a(this.removeMany,this),this.remove=a(this.remove,this),this.addMany=a(this.addMany,this),this.add=a(this.add,this),f.__super__.constructor.call(this),i=this,this.opt_options=g,this.clusterer=null!=g&&void 0===d?new NgMapMarkerClusterer(c,void 0,g):null!=g&&null!=d?new NgMapMarkerClusterer(c,d,g):new NgMapMarkerClusterer(c),this.propMapGMarkers=new e,this.attachEvents(this.opt_events,"opt_events"),this.clusterer.setIgnoreHidden(!0),this.noDrawOnSingleAddRemoves=!0,b.info(this)}return c(f,d),f.prototype.checkKey=function(a){var b;return null==a.key?(b="gMarker.key undefined and it is REQUIRED!!",Logger.error(b)):void 0},f.prototype.add=function(a){var b;return this.checkKey(a),b=null!=this.propMapGMarkers.get(a.key),this.clusterer.addMarker(a,this.noDrawOnSingleAddRemoves),this.propMapGMarkers.put(a.key,a),this.checkSync()},f.prototype.addMany=function(a){return a.forEach(function(a){return function(b){return a.add(b)}}(this))},f.prototype.remove=function(a){var b;return this.checkKey(a),b=this.propMapGMarkers.get(a.key),b&&(this.clusterer.removeMarker(a,this.noDrawOnSingleAddRemoves),this.propMapGMarkers.remove(a.key)),this.checkSync()},f.prototype.removeMany=function(a){return a.forEach(function(a){return function(b){return a.remove(b)}}(this))},f.prototype.draw=function(){return this.clusterer.repaint()},f.prototype.clear=function(){return this.removeMany(this.getGMarkers()),this.clusterer.repaint()},f.prototype.attachEvents=function(a,c){var d,e,f;if(angular.isDefined(a)&&null!=a&&angular.isObject(a)){f=[];for(e in a)d=a[e],a.hasOwnProperty(e)&&angular.isFunction(a[e])?(b.info(""+c+": Attaching event: "+e+" to clusterer"),f.push(google.maps.event.addListener(this.clusterer,e,a[e]))):f.push(void 0);return f}},f.prototype.clearEvents=function(a){var c,d,e;if(angular.isDefined(a)&&null!=a&&angular.isObject(a)){e=[];for(d in a)c=a[d],a.hasOwnProperty(d)&&angular.isFunction(a[d])?(b.info(""+optionsName+": Clearing event: "+d+" to clusterer"),e.push(google.maps.event.clearListeners(this.clusterer,d))):e.push(void 0);return e}},f.prototype.destroy=function(){return this.clearEvents(this.opt_events),this.clearEvents(this.opt_internal_events),this.clear()},f.prototype.fit=function(){return f.__super__.fit.call(this,this.getGMarkers(),this.clusterer.getMap())},f.prototype.getGMarkers=function(){return this.clusterer.getMarkers().values()},f.prototype.checkSync=function(){if(this.getGMarkers().length!==this.propMapGMarkers.length)throw"GMarkers out of Sync in MarkerClusterer"},f}(d)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a};angular.module("google-maps.directives.api.managers".ns()).factory("MarkerManager".ns(),["Logger".ns(),"FitHelper".ns(),"PropMap".ns(),function(b,d,e){var f;return f=function(f){function g(c){this.getGMarkers=a(this.getGMarkers,this),this.fit=a(this.fit,this),this.handleOptDraw=a(this.handleOptDraw,this),this.clear=a(this.clear,this),this.draw=a(this.draw,this),this.removeMany=a(this.removeMany,this),this.remove=a(this.remove,this),this.addMany=a(this.addMany,this),this.add=a(this.add,this),g.__super__.constructor.call(this),this.gMap=c,this.gMarkers=new e,this.$log=b,this.$log.info(this)}return c(g,f),g.include(d),g.prototype.add=function(a,c){var d,e;if(null==c&&(c=!0),null==a.key)throw e="gMarker.key undefined and it is REQUIRED!!",b.error(e),e;return d=null!=this.gMarkers.get(a.key),d?void 0:(this.handleOptDraw(a,c,!0),this.gMarkers.put(a.key,a))},g.prototype.addMany=function(a){return a.forEach(function(a){return function(b){return a.add(b)}}(this))},g.prototype.remove=function(a,b){return null==b&&(b=!0),this.handleOptDraw(a,b,!1),this.gMarkers.get(a.key)?this.gMarkers.remove(a.key):void 0},g.prototype.removeMany=function(){return this.gMarkers.values().forEach(function(a){return function(b){return a.remove(b)}}(this))},g.prototype.draw=function(){var a;return a=[],this.gMarkers.values().forEach(function(b){return function(c){return c.isDrawn?void 0:c.doAdd?(c.setMap(b.gMap),c.isDrawn=!0):a.push(c)}}(this)),a.forEach(function(a){return function(b){return b.isDrawn=!1,a.remove(b,!0)}}(this))},g.prototype.clear=function(){return this.gMarkers.values().forEach(function(a){return a.setMap(null)}),delete this.gMarkers,this.gMarkers=new e},g.prototype.handleOptDraw=function(a,b,c){return b===!0?(a.setMap(c?this.gMap:null),a.isDrawn=!0):(a.isDrawn=!1,a.doAdd=c)},g.prototype.fit=function(){return g.__super__.fit.call(this,this.getGMarkers(),this.gMap)},g.prototype.getGMarkers=function(){return this.gMarkers.values()},g}(d)}])}.call(this),function(){angular.module("google-maps".ns()).factory("add-events".ns(),["$timeout",function(a){var b,c;return b=function(b,c,d){return google.maps.event.addListener(b,c,function(){return d.apply(this,arguments),a(function(){},!0)})},c=function(a,c,d){var e;return d?b(a,c,d):(e=[],angular.forEach(c,function(c,d){return e.push(b(a,d,c))}),function(){return angular.forEach(e,function(a){return google.maps.event.removeListener(a)}),e=null})}}])}.call(this),function(){angular.module("google-maps".ns()).factory("array-sync".ns(),["add-events".ns(),function(a){return function(b,c,d,e){var f,g,h,i,j,k,l,m,n;return i=!1,m=c.$eval(d),c["static"]||(j={set_at:function(a){var c;if(!i&&(c=b.getAt(a)))return c.lng&&c.lat?(m[a].latitude=c.lat(),m[a].longitude=c.lng()):m[a]=c},insert_at:function(a){var c;if(!i&&(c=b.getAt(a)))return c.lng&&c.lat?m.splice(a,0,{latitude:c.lat(),longitude:c.lng()}):m.splice(a,0,c)},remove_at:function(a){return i?void 0:m.splice(a,1)}},"Polygon"===m.type?f=m.coordinates[0]:"LineString"===m.type&&(f=m.coordinates),g={set_at:function(a){var c;if(!i&&(c=b.getAt(a),c&&c.lng&&c.lat))return f[a][1]=c.lat(),f[a][0]=c.lng()},insert_at:function(a){var c;if(!i&&(c=b.getAt(a),c&&c.lng&&c.lat))return f.splice(a,0,[c.lng(),c.lat()])},remove_at:function(a){return i?void 0:f.splice(a,1)}},l=a(b,angular.isUndefined(m.type)?j:g)),k=function(a){var c,d,f,g,h,j,k,l;if(i=!0,j=b,c=!1,a){for(d=0,k=j.getLength(),g=a.length,f=Math.min(k,g),h=void 0;f>d;)l=j.getAt(d),h=a[d],"function"==typeof h.equals?h.equals(l)||(j.setAt(d,h),c=!0):(l.lat()!==h.latitude||l.lng()!==h.longitude)&&(j.setAt(d,new google.maps.LatLng(h.latitude,h.longitude)),c=!0),d++;for(;g>d;)h=a[d],j.push("function"==typeof h.lat&&"function"==typeof h.lng?h:new google.maps.LatLng(h.latitude,h.longitude)),c=!0,d++;for(;k>d;)j.pop(),c=!0,d++}return i=!1,c?e(j):void 0},h=function(a){var c,d,f,g,h,j,k,l,n;if(i=!0,k=b,d=!1,a){for("Polygon"===m.type?c=a.coordinates[0]:"LineString"===m.type&&(c=a.coordinates),f=0,l=k.getLength(),h=c.length,g=Math.min(l,h),j=void 0;g>f;)n=k.getAt(f),j=c[f],(n.lat()!==j[1]||n.lng()!==j[0])&&(k.setAt(f,new google.maps.LatLng(j[1],j[0])),d=!0),f++;for(;h>f;)j=c[f],k.push(new google.maps.LatLng(j[1],j[0])),d=!0,f++;for(;l>f;)k.pop(),d=!0,f++}return i=!1,d?e(k):void 0},c["static"]||(n=angular.isUndefined(m.type)?c.$watchCollection(d,k):c.$watch(d,h,!0)),function(){return l&&(l(),l=null),n?(n(),n=null):void 0}}}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a};angular.module("google-maps.directives.api.options.builders".ns()).service("CommonOptionsBuilder".ns(),["BaseObject".ns(),"Logger".ns(),function(b,d){var e;return e=function(b){function e(){return this.watchProps=a(this.watchProps,this),this.buildOpts=a(this.buildOpts,this),e.__super__.constructor.apply(this,arguments)}return c(e,b),e.prototype.props=["clickable","draggable","editable","visible",{prop:"stroke",isColl:!0}],e.prototype.buildOpts=function(a,b){var c,e,f,g,h,i;return null==a&&(a={}),null==b&&(b={}),this.scope?this.map?(c=_(this.scope).chain().keys().contains("model").value(),e=c?this.scope.model:this.scope,f=angular.extend(a,this.DEFAULTS,{map:this.map,strokeColor:null!=(g=e.stroke)?g.color:void 0,strokeOpacity:null!=(h=e.stroke)?h.opacity:void 0,strokeWeight:null!=(i=e.stroke)?i.weight:void 0}),angular.forEach(angular.extend(b,{clickable:!0,draggable:!1,editable:!1,"static":!1,fit:!1,visible:!0,zIndex:0}),function(){return function(a,b){return f[b]=angular.isUndefined(e[b]||null===e[b])?a:e[b]}}(this)),f["static"]&&(f.editable=!1),f):void d.error("this.map not defined in CommonOptionsBuilder can not buildOpts"):void d.error("this.scope not defined in CommonOptionsBuilder can not buildOpts")},e.prototype.watchProps=function(a){return null==a&&(a=this.props),a.forEach(function(a){return function(b){return null!=a.attrs[b]||null!=a.attrs[null!=b?b.prop:void 0]?(null!=b?b.isColl:void 0)?a.scope.$watchCollection(b.prop,a.setMyOptions):a.scope.$watch(b,a.setMyOptions):void 0}}(this))},e}(b)}])}.call(this),function(){var a={}.hasOwnProperty,b=function(b,c){function d(){this.constructor=b}for(var e in c)a.call(c,e)&&(b[e]=c[e]);return d.prototype=c.prototype,b.prototype=new d,b.__super__=c.prototype,b};angular.module("google-maps.directives.api.options.builders".ns()).factory("PolylineOptionsBuilder".ns(),["CommonOptionsBuilder".ns(),function(a){var c;return c=function(a){function c(){return c.__super__.constructor.apply(this,arguments)}return b(c,a),c.prototype.buildOpts=function(a){return c.__super__.buildOpts.call(this,{path:a},{geodesic:!1})},c}(a)}]).factory("ShapeOptionsBuilder".ns(),["CommonOptionsBuilder".ns(),function(a){var c;return c=function(a){function c(){return c.__super__.constructor.apply(this,arguments)}return b(c,a),c.prototype.buildOpts=function(a,b){var d,e;return a=angular.extend(a,{fillColor:null!=(d=this.scope.fill)?d.color:void 0,fillOpacity:null!=(e=this.scope.fill)?e.opacity:void 0}),c.__super__.buildOpts.call(this,a,b)},c}(a)}]).factory("PolygonOptionsBuilder".ns(),["ShapeOptionsBuilder".ns(),function(a){var c;return c=function(a){function c(){return c.__super__.constructor.apply(this,arguments)}return b(c,a),c.prototype.buildOpts=function(a){return c.__super__.buildOpts.call(this,{path:a},{geodesic:!1})},c}(a)}]).factory("RectangleOptionsBuilder".ns(),["ShapeOptionsBuilder".ns(),function(a){var c;return c=function(a){function c(){return c.__super__.constructor.apply(this,arguments)}return b(c,a),c.prototype.buildOpts=function(a){return c.__super__.buildOpts.call(this,{bounds:a})},c}(a)}]).factory("CircleOptionsBuilder".ns(),["ShapeOptionsBuilder".ns(),function(a){var c;return c=function(a){function c(){return c.__super__.constructor.apply(this,arguments)}return b(c,a),c.prototype.buildOpts=function(a,b){return c.__super__.buildOpts.call(this,{center:a,radius:b})},c}(a)}])}.call(this),function(){angular.module("google-maps.directives.api.options".ns()).service("MarkerOptions".ns(),["Logger".ns(),"GmapUtil".ns(),function(a,b){return _.extend(b,{createOptions:function(a,c,d,e){var f;return null==e&&(e=void 0),null==d&&(d={}),f=angular.extend({},d,{position:null!=d.position?d.position:b.getCoords(a),visible:null!=d.visible?d.visible:b.validateCoords(a)}),(null!=d.icon||null!=c)&&(f=angular.extend(f,{icon:null!=d.icon?d.icon:c})),null!=e&&(f.map=e),f},isLabel:function(a){return null!=a.labelContent||null!=a.labelAnchor||null!=a.labelClass||null!=a.labelStyle||null!=a.labelVisible?!0:!1}})}])}.call(this),function(){angular.module("google-maps.directives.api.models.child".ns()).factory("DrawFreeHandChildModel".ns(),["Logger".ns(),"$q",function(a,b){var c,d;return c=function(a,b,c){var d,e;return this.polys=b,e=new google.maps.Polyline({map:a,clickable:!1}),d=google.maps.event.addListener(a,"mousemove",function(a){return e.getPath().push(a.latLng)}),void google.maps.event.addListenerOnce(a,"mouseup",function(){var f;return google.maps.event.removeListener(d),f=e.getPath(),e.setMap(null),b.push(new google.maps.Polygon({map:a,path:f})),e=null,google.maps.event.clearListeners(a.getDiv(),"mousedown"),c()
})},d=function(d){var e,f;return this.map=d,f=function(a){return function(){var b;return null!=(b=a.deferred)&&b.resolve(),a.map.setOptions(a.oldOptions)}}(this),e=function(b){return function(){return a.info("disabling map move"),b.oldOptions=d.getOptions(),b.map.setOptions({draggable:!1,zoomControl:!1,scrollwheel:!1,disableDoubleClickZoom:!1})}}(this),this.engage=function(d){return function(g){return d.polys=g,d.deferred=b.defer(),e(),a.info("DrawFreeHandChildModel is engaged (drawing)."),google.maps.event.addDomListener(d.map.getDiv(),"mousedown",function(){return c(d.map,d.polys,f)}),d.deferred.promise}}(this),this}}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a};angular.module("google-maps.directives.api.models.child".ns()).factory("MarkerChildModel".ns(),["ModelKey".ns(),"GmapUtil".ns(),"Logger".ns(),"EventsHelper".ns(),"MarkerOptions".ns(),function(b,d,e,f,g){var h,i;return i=["coords","icon","options","fit"],h=function(b){function h(b,c,d,f,g,j,k,l,m){this.model=c,this.keys=d,this.gMap=f,this.defaults=g,this.doClick=j,this.gMarkerManager=k,this.doDrawSelf=null!=l?l:!0,this.trackModel=null!=m?m:!0,this.internalEvents=a(this.internalEvents,this),this.setLabelOptions=a(this.setLabelOptions,this),this.setOptions=a(this.setOptions,this),this.setIcon=a(this.setIcon,this),this.setCoords=a(this.setCoords,this),this.maybeSetScopeValue=a(this.maybeSetScopeValue,this),this.createMarker=a(this.createMarker,this),this.setMyScope=a(this.setMyScope,this),this.destroy=a(this.destroy,this),_.each(this.keys,function(a){return function(b,c){return a[c+"Key"]=_.isFunction(a.keys[c])?a.keys[c]():a.keys[c]}}(this)),this.idKey=this.idKeyKey||"id",null!=this.model[this.idKey]&&(this.id=this.model[this.idKey]),this.needRedraw=!1,this.deferred=Promise.defer(),h.__super__.constructor.call(this,b),this.setMyScope(this.model,void 0,!0),this.createMarker(this.model),this.trackModel?(this.scope.model=this.model,this.scope.$watch("model",function(a){return function(b,c){return b!==c?(a.setMyScope(b,c),a.needRedraw=!0):void 0}}(this),!0)):_.each(this.keys,function(a){return function(b,c){return a.scope.$watch(c,function(){return a.setMyScope(a.scope)})}}(this)),this.scope.$on("$destroy",function(a){return function(){return i(a)}}(this)),e.info(this)}var i;return c(h,b),h.include(d),h.include(f),h.include(g),i=function(a){return null!=(null!=a?a.gMarker:void 0)&&(a.removeEvents(a.externalListeners),a.removeEvents(a.internalListeners),null!=a?a.gMarker:void 0)?(null!=a&&a.gMarkerManager.remove(null!=a?a.gMarker:void 0,!0),delete a.gMarker):void 0},h.prototype.destroy=function(){return this.scope.$destroy()},h.prototype.setMyScope=function(a,b,c){return null==b&&(b=void 0),null==c&&(c=!1),this.maybeSetScopeValue("icon",a,b,this.iconKey,this.evalModelHandle,c,this.setIcon),this.maybeSetScopeValue("coords",a,b,this.coordsKey,this.evalModelHandle,c,this.setCoords),_.isFunction(this.clickKey)?this.scope.click=function(a){return function(){return a.clickKey(a.gMarker,"click",a.model,void 0)}}(this):(this.maybeSetScopeValue("click",a,b,this.clickKey,this.evalModelHandle,c),this.createMarker(a,b,c))},h.prototype.createMarker=function(a,b,c){return null==b&&(b=void 0),null==c&&(c=!1),this.maybeSetScopeValue("options",a,b,this.optionsKey,this.evalModelHandle,c,this.setOptions)},h.prototype.maybeSetScopeValue=function(a,b,c,d,e,f,g){var h,i;return null==g&&(g=void 0),void 0===c?(this.scope[a]=e(b,d),void(f||null!=g&&g(this.scope))):(i=e(c,d),h=e(b,d),h!==i&&(this.scope[a]=h,!f&&(null!=g&&g(this.scope),this.doDrawSelf))?this.gMarkerManager.draw():void 0)},h.prototype.setCoords=function(a){return a.$id===this.scope.$id&&void 0!==this.gMarker?null!=a.coords?this.validateCoords(this.scope.coords)?(this.gMarker.setPosition(this.getCoords(a.coords)),this.gMarker.setVisible(this.validateCoords(a.coords)),this.gMarkerManager.add(this.gMarker)):void e.debug("MarkerChild does not have coords yet. They may be defined later."):this.gMarkerManager.remove(this.gMarker):void 0},h.prototype.setIcon=function(a){return a.$id===this.scope.$id&&void 0!==this.gMarker?(this.gMarkerManager.remove(this.gMarker),this.gMarker.setIcon(a.icon),this.gMarkerManager.add(this.gMarker),this.gMarker.setPosition(this.getCoords(a.coords)),this.gMarker.setVisible(this.validateCoords(a.coords))):void 0},h.prototype.setOptions=function(a){var b;if(a.$id===this.scope.$id&&(null!=this.gMarker&&(this.gMarkerManager.remove(this.gMarker),delete this.gMarker),null!=(b=a.coords)?b:"function"==typeof a.icon?a.icon(null!=a.options):void 0))return this.opts=this.createOptions(a.coords,a.icon,a.options),delete this.gMarker,this.gMarker=this.isLabel(this.opts)?new MarkerWithLabel(this.setLabelOptions(this.opts)):new google.maps.Marker(this.opts),this.gMarker?this.deferred.resolve(this.gMarker):this.deferred.reject("gMarker is null"),this.model.fitKey&&this.gMarkerManager.fit(),this.externalListeners&&this.removeEvents(this.externalListeners),this.internalListeners&&this.removeEvents(this.internalListeners),this.externalListeners=this.setEvents(this.gMarker,this.scope,this.model,["dragend"]),this.internalListeners=this.setEvents(this.gMarker,{events:this.internalEvents(),$apply:function(){}},this.model),null!=this.id&&(this.gMarker.key=this.id),this.gMarkerManager.add(this.gMarker)},h.prototype.setLabelOptions=function(a){return a.labelAnchor=this.getLabelPositionPoint(a.labelAnchor),a},h.prototype.internalEvents=function(){return{dragend:function(a){return function(b,c,d,e){var f,g,h;return f=a.trackModel?a.scope.model:a.model,g=a.setCoordsFromEvent(a.modelOrKey(f,a.coordsKey),a.gMarker.getPosition()),f=a.setVal(d,a.coordsKey,g),null!=(null!=(h=a.scope.events)?h.dragend:void 0)&&a.scope.events.dragend(b,c,f,e),a.scope.$apply()}}(this),click:function(a){return function(b,c,d,e){return a.doClick&&null!=a.scope.click?a.scope.$apply(a.scope.click(b,c,a.model,e)):void 0}}(this)}},h}(b)}])}.call(this),function(){var a={}.hasOwnProperty,b=function(b,c){function d(){this.constructor=b}for(var e in c)a.call(c,e)&&(b[e]=c[e]);return d.prototype=c.prototype,b.prototype=new d,b.__super__=c.prototype,b};angular.module("google-maps.directives.api".ns()).factory("PolygonChildModel".ns(),["PolygonOptionsBuilder".ns(),"Logger".ns(),"$timeout","array-sync".ns(),"GmapUtil".ns(),"EventsHelper".ns(),function(a,c,d,e,f,g){var h;return h=function(a){function d(a,b,d,f,h){var i,j,k;return this.scope=a,this.attrs=b,this.map=d,this.defaults=f,this.model=h,this.listeners=void 0,angular.isUndefined(a.path)||null===a.path||!this.validatePath(a.path)?void c.error("polygon: no valid path attribute found"):(j=this.convertPathPoints(a.path),k=new google.maps.Polygon(this.buildOpts(j)),a.fit&&this.extendMapBounds(this.map,j),!a["static"]&&angular.isDefined(a.editable)&&a.$watch("editable",function(a,b){return a!==b?k.setEditable(a):void 0}),angular.isDefined(a.draggable)&&a.$watch("draggable",function(a,b){return a!==b?k.setDraggable(a):void 0}),angular.isDefined(a.visible)&&a.$watch("visible",function(a,b){return a!==b?k.setVisible(a):void 0}),angular.isDefined(a.geodesic)&&a.$watch("geodesic",function(a){return function(b,c){return b!==c?k.setOptions(a.buildOpts(k.getPath())):void 0}}(this)),angular.isDefined(a.stroke)&&angular.isDefined(a.stroke.opacity)&&a.$watch("stroke.opacity",function(a){return function(){return k.setOptions(a.buildOpts(k.getPath()))}}(this)),angular.isDefined(a.stroke)&&angular.isDefined(a.stroke.weight)&&a.$watch("stroke.weight",function(a){return function(b,c){return b!==c?k.setOptions(a.buildOpts(k.getPath())):void 0}}(this)),angular.isDefined(a.stroke)&&angular.isDefined(a.stroke.color)&&a.$watch("stroke.color",function(a){return function(b,c){return b!==c?k.setOptions(a.buildOpts(k.getPath())):void 0}}(this)),angular.isDefined(a.fill)&&angular.isDefined(a.fill.color)&&a.$watch("fill.color",function(a){return function(b,c){return b!==c?k.setOptions(a.buildOpts(k.getPath())):void 0}}(this)),angular.isDefined(a.fill)&&angular.isDefined(a.fill.opacity)&&a.$watch("fill.opacity",function(a){return function(b,c){return b!==c?k.setOptions(a.buildOpts(k.getPath())):void 0}}(this)),angular.isDefined(a.zIndex)&&a.$watch("zIndex",function(a){return function(b,c){return b!==c?k.setOptions(a.buildOpts(k.getPath())):void 0}}(this)),angular.isDefined(a.events)&&null!==a.events&&angular.isObject(a.events)&&(this.listeners=g.setEvents(k,a,a)),i=e(k.getPath(),a,"path",function(b){return function(c){return a.fit?b.extendMapBounds(b.map,c):void 0}}(this)),void a.$on("$destroy",function(a){return function(){return k.setMap(null),a.removeEvents(a.listeners),i?(i(),i=null):void 0}}(this)))}return b(d,a),d.include(f),d.include(g),d}(a)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a};angular.module("google-maps.directives.api".ns()).factory("PolylineChildModel".ns(),["PolylineOptionsBuilder".ns(),"Logger".ns(),"$timeout","array-sync".ns(),"GmapUtil".ns(),"EventsHelper".ns(),function(b,d,e,f,g,h){var i;return i=function(b){function e(b,c,e,g,h){var i;this.scope=b,this.attrs=c,this.map=e,this.defaults=g,this.model=h,this.clean=a(this.clean,this),i=function(a){return function(){var b;return b=a.convertPathPoints(a.scope.path),null!=a.polyline&&a.clean(),b.length>0&&(a.polyline=new google.maps.Polyline(a.buildOpts(b))),a.polyline?(a.scope.fit&&a.extendMapBounds(e,b),f(a.polyline.getPath(),a.scope,"path",function(b){return a.scope.fit?a.extendMapBounds(e,b):void 0}),a.listeners=a.model?a.setEvents(a.polyline,a.scope,a.model):a.setEvents(a.polyline,a.scope,a.scope)):void 0}}(this),i(),b.$watch("path",function(a){return function(b,c){return _.isEqual(b,c)&&a.polyline?void 0:i()}}(this)),!b["static"]&&angular.isDefined(b.editable)&&b.$watch("editable",function(a){return function(b,c){var d;return b!==c&&null!=(d=a.polyline)?d.setEditable(b):void 0}}(this)),angular.isDefined(b.draggable)&&b.$watch("draggable",function(a){return function(b,c){var d;return b!==c&&null!=(d=a.polyline)?d.setDraggable(b):void 0}}(this)),angular.isDefined(b.visible)&&b.$watch("visible",function(a){return function(b,c){var d;return b!==c&&null!=(d=a.polyline)?d.setVisible(b):void 0}}(this)),angular.isDefined(b.geodesic)&&b.$watch("geodesic",function(a){return function(b,c){var d;return b!==c&&null!=(d=a.polyline)?d.setOptions(a.buildOpts(a.polyline.getPath())):void 0}}(this)),angular.isDefined(b.stroke)&&angular.isDefined(b.stroke.weight)&&b.$watch("stroke.weight",function(a){return function(b,c){var d;return b!==c&&null!=(d=a.polyline)?d.setOptions(a.buildOpts(a.polyline.getPath())):void 0}}(this)),angular.isDefined(b.stroke)&&angular.isDefined(b.stroke.color)&&b.$watch("stroke.color",function(a){return function(b,c){var d;return b!==c&&null!=(d=a.polyline)?d.setOptions(a.buildOpts(a.polyline.getPath())):void 0}}(this)),angular.isDefined(b.stroke)&&angular.isDefined(b.stroke.opacity)&&b.$watch("stroke.opacity",function(a){return function(b,c){var d;return b!==c&&null!=(d=a.polyline)?d.setOptions(a.buildOpts(a.polyline.getPath())):void 0}}(this)),angular.isDefined(b.icons)&&b.$watch("icons",function(a){return function(b,c){var d;return b!==c&&null!=(d=a.polyline)?d.setOptions(a.buildOpts(a.polyline.getPath())):void 0}}(this)),b.$on("$destroy",function(a){return function(){return a.clean(),a.scope=null}}(this)),d.info(this)}return c(e,b),e.include(g),e.include(h),e.prototype.clean=function(){var a,b;return this.removeEvents(this.listeners),null!=(b=this.polyline)&&b.setMap(null),this.polyline=null,a?(a(),a=null):void 0},e.prototype.destroy=function(){return this.scope.$destroy()},e}(b)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a};angular.module("google-maps.directives.api.models.child".ns()).factory("WindowChildModel".ns(),["BaseObject".ns(),"GmapUtil".ns(),"Logger".ns(),"$compile","$http","$templateCache",function(b,d,e,f,g,h){var i;return i=function(b){function i(b,c,d,f,g,h,i,j,k){this.model=b,this.scope=c,this.opts=d,this.isIconVisibleOnClick=f,this.mapCtrl=g,this.markerCtrl=h,this.element=i,this.needToManualDestroy=null!=j?j:!1,this.markerIsVisibleAfterWindowClose=null!=k?k:!0,this.getGWin=a(this.getGWin,this),this.destroy=a(this.destroy,this),this.remove=a(this.remove,this),this.getLatestPosition=a(this.getLatestPosition,this),this.hideWindow=a(this.hideWindow,this),this.showWindow=a(this.showWindow,this),this.handleClick=a(this.handleClick,this),this.watchOptions=a(this.watchOptions,this),this.watchCoords=a(this.watchCoords,this),this.createGWin=a(this.createGWin,this),this.watchElement=a(this.watchElement,this),this.watchAndDoShow=a(this.watchAndDoShow,this),this.doShow=a(this.doShow,this),this.googleMapsHandles=[],this.$log=e,this.createGWin(),null!=this.markerCtrl&&this.markerCtrl.setClickable(!0),this.watchElement(),this.watchOptions(),this.watchCoords(),this.watchAndDoShow(),this.scope.$on("$destroy",function(a){return function(){return a.destroy()}}(this)),this.$log.info(this)}return c(i,b),i.include(d),i.prototype.doShow=function(){return this.scope.show?this.showWindow():void 0},i.prototype.watchAndDoShow=function(){return null!=this.model.show&&(this.scope.show=this.model.show),this.scope.$watch("show",this.doShow,!0),this.doShow()},i.prototype.watchElement=function(){return this.scope.$watch(function(a){return function(){var b;if(a.element&&a.html)return a.html!==a.element.html()&&a.gWin?(null!=(b=a.opts)&&(b.content=void 0),a.remove(),a.createGWin()):void 0}}(this))},i.prototype.createGWin=function(){var a,b;return null==this.gWin&&(a={},null!=this.opts&&(this.scope.coords&&(this.opts.position=this.getCoords(this.scope.coords)),a=this.opts),this.element&&(this.html=_.isObject(this.element)?this.element.html():this.element),b=this.scope.options?this.scope.options:a,this.opts=this.createWindowOptions(this.markerCtrl,this.scope,this.html,b)),null==this.opts||this.gWin?void 0:(this.gWin=this.opts.boxClass&&window.InfoBox&&"function"==typeof window.InfoBox?new window.InfoBox(this.opts):new google.maps.InfoWindow(this.opts),this.handleClick(),this.doShow(),this.googleMapsHandles.push(google.maps.event.addListener(this.gWin,"closeclick",function(a){return function(){return a.markerCtrl&&(a.markerCtrl.setAnimation(a.oldMarkerAnimation),a.markerIsVisibleAfterWindowClose&&_.delay(function(){return a.markerCtrl.setVisible(!1),a.markerCtrl.setVisible(a.markerIsVisibleAfterWindowClose)},250)),a.gWin.isOpen(!1),null!=a.scope.closeClick?a.scope.$apply(a.scope.closeClick()):void 0}}(this))))},i.prototype.watchCoords=function(){var a;return a=null!=this.markerCtrl?this.scope.$parent:this.scope,a.$watch("coords",function(a){return function(b,c){var d;if(b!==c){if(null==b)return a.hideWindow();if(!a.validateCoords(b))return void a.$log.error("WindowChildMarker cannot render marker as scope.coords as no position on marker: "+JSON.stringify(a.model));if(d=a.getCoords(b),a.gWin.setPosition(d),a.opts)return a.opts.position=d}}}(this),!0)},i.prototype.watchOptions=function(){var a;return a=null!=this.markerCtrl?this.scope.$parent:this.scope,this.scope.$watch("options",function(a){return function(b,c){if(b!==c&&(a.opts=b,null!=a.gWin)){if(a.gWin.setOptions(a.opts),null!=a.opts.visible&&a.opts.visible)return a.showWindow();if(null!=a.opts.visible)return a.hideWindow()}}}(this),!0)},i.prototype.handleClick=function(a){var b;if(null!=this.gWin)return b=function(a){return function(){var b;return null==a.gWin&&a.createGWin(),b=a.markerCtrl.getPosition(),null!=a.gWin&&(a.gWin.setPosition(b),a.opts&&(a.opts.position=b),a.showWindow()),a.initialMarkerVisibility=a.markerCtrl.getVisible(),a.oldMarkerAnimation=a.markerCtrl.getAnimation(),a.markerCtrl.setVisible(a.isIconVisibleOnClick)}}(this),null!=this.markerCtrl?(a&&b(),this.googleMapsHandles.push(google.maps.event.addListener(this.markerCtrl,"click",b))):void 0},i.prototype.showWindow=function(){var a,b,c;return b=function(a){return function(){return null==a.gWin||a.gWin.isOpen()?void 0:a.gWin.open(a.mapCtrl)}}(this),this.scope.templateUrl?null!=this.gWin&&g.get(this.scope.templateUrl,{cache:h}).then(function(a){return function(b){var c,d;return d=a.scope.$new(),angular.isDefined(a.scope.templateParameter)&&(d.parameter=a.scope.templateParameter),c=f(b.data)(d),a.gWin.setContent(c[0])}}(this)):this.scope.template&&null!=this.gWin&&(c=this.scope.$new(),angular.isDefined(this.scope.templateParameter)&&(c.parameter=this.scope.templateParameter),a=f(this.scope.template)(c),this.gWin.setContent(a[0])),b()},i.prototype.hideWindow=function(){return null!=this.gWin&&this.gWin.isOpen()?this.gWin.close():void 0},i.prototype.getLatestPosition=function(a){return null==this.gWin||null==this.markerCtrl||a?a?this.gWin.setPosition(a):void 0:this.gWin.setPosition(this.markerCtrl.getPosition())},i.prototype.remove=function(){return this.hideWindow(),_.each(this.googleMapsHandles,function(a){return google.maps.event.removeListener(a)}),this.googleMapsHandles.length=0,delete this.gWin,delete this.opts},i.prototype.destroy=function(a){var b,c;return null==a&&(a=!1),this.remove(),null!=this.scope&&(null!=(c=this.scope)?c.$$destroyed:void 0)&&(this.needToManualDestroy||a)&&this.scope.$destroy(),b=void 0},i.prototype.getGWin=function(){return this.gWin},i}(b)}])}.call(this),function(){var a={}.hasOwnProperty,b=function(b,c){function d(){this.constructor=b}for(var e in c)a.call(c,e)&&(b[e]=c[e]);return d.prototype=c.prototype,b.prototype=new d,b.__super__=c.prototype,b};angular.module("google-maps.directives.api.models.parent".ns()).factory("CircleParentModel".ns(),["Logger".ns(),"$timeout","GmapUtil".ns(),"EventsHelper".ns(),"CircleOptionsBuilder".ns(),function(a,c,d,e,f){var g;return g=function(f){function g(b,e,f,g,h){var i,j;this.scope=b,this.attrs=f,this.map=g,this.DEFAULTS=h,i=new google.maps.Circle(this.buildOpts(d.getCoords(b.center),b.radius)),this.setMyOptions=function(a){return function(c,e){return _.isEqual(c,e)?void 0:i.setOptions(a.buildOpts(d.getCoords(b.center),b.radius))}}(this),this.props=this.props.concat([{prop:"center",isColl:!0},{prop:"fill",isColl:!0},"radius"]),this.watchProps(),j=this.setEvents(i,b,b),google.maps.event.addListener(i,"radius_changed",function(){return b.radius=i.getRadius(),c(function(){return b.$apply()})}),google.maps.event.addListener(i,"center_changed",function(){return angular.isDefined(b.center.type)?(b.center.coordinates[1]=i.getCenter().lat(),b.center.coordinates[0]=i.getCenter().lng()):(b.center.latitude=i.getCenter().lat(),b.center.longitude=i.getCenter().lng()),c(function(){return b.$apply()})}),b.$on("$destroy",function(a){return function(){return a.removeEvents(j),i.setMap(null)}}(this)),a.info(this)}return b(g,f),g.include(d),g.include(e),g}(f)}])}.call(this),function(){angular.module("google-maps.directives.api.models.parent".ns()).factory("DrawingManagerParentModel".ns(),["Logger".ns(),"$timeout",function(){var a;return a=function(){function a(a,b,c,d){var e;this.scope=a,this.attrs=c,this.map=d,e=new google.maps.drawing.DrawingManager(this.scope.options),e.setMap(this.map),null!=this.scope.control&&(this.scope.control.getDrawingManager=function(){return function(){return e}}(this)),!this.scope["static"]&&this.scope.options&&this.scope.$watch("options",function(){return function(a){return null!=e?e.setOptions(a):void 0}}(this),!0),a.$on("$destroy",function(){return function(){return e.setMap(null),e=null}}(this))}return a}()}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a};angular.module("google-maps.directives.api.models.parent".ns()).factory("IMarkerParentModel".ns(),["ModelKey".ns(),"Logger".ns(),function(b,d){var e;return e=function(b){function e(b,c,f,g){if(this.scope=b,this.element=c,this.attrs=f,this.map=g,this.onDestroy=a(this.onDestroy,this),this.onWatch=a(this.onWatch,this),this.watch=a(this.watch,this),this.validateScope=a(this.validateScope,this),e.__super__.constructor.call(this,this.scope),this.$log=d,!this.validateScope(b))throw new String("Unable to construct IMarkerParentModel due to invalid scope");this.doClick=angular.isDefined(f.click),null!=b.options&&(this.DEFAULTS=b.options),this.watch("coords",this.scope),this.watch("icon",this.scope),this.watch("options",this.scope),b.$on("$destroy",function(a){return function(){return a.onDestroy(b)}}(this))}return c(e,b),e.prototype.DEFAULTS={},e.prototype.validateScope=function(a){var b;return null==a?(this.$log.error(this.constructor.name+": invalid scope used"),!1):(b=null!=a.coords,b?b:(this.$log.error(this.constructor.name+": no valid coords attribute found"),!1))},e.prototype.watch=function(a,b){return b.$watch(a,function(c){return function(d,e){return _.isEqual(d,e)?void 0:c.onWatch(a,b,d,e)}}(this),!0)},e.prototype.onWatch=function(){},e.prototype.onDestroy=function(){throw new String("OnDestroy Not Implemented!!")},e}(b)}])}.call(this),function(){var a={}.hasOwnProperty,b=function(b,c){function d(){this.constructor=b}for(var e in c)a.call(c,e)&&(b[e]=c[e]);return d.prototype=c.prototype,b.prototype=new d,b.__super__=c.prototype,b};angular.module("google-maps.directives.api.models.parent".ns()).factory("IWindowParentModel".ns(),["ModelKey".ns(),"GmapUtil".ns(),"Logger".ns(),function(a,c,d){var e;return e=function(a){function e(a,b,c,f,g,h,i,j){e.__super__.constructor.call(this,a),this.$log=d,this.$timeout=g,this.$compile=h,this.$http=i,this.$templateCache=j,this.DEFAULTS={},null!=a.options&&(this.DEFAULTS=a.options)}return b(e,a),e.include(c),e}(a)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a};angular.module("google-maps.directives.api.models.parent".ns()).factory("LayerParentModel".ns(),["BaseObject".ns(),"Logger".ns(),"$timeout",function(b,d){var e;return e=function(b){function e(b,c,e,f,g,h){return this.scope=b,this.element=c,this.attrs=e,this.gMap=f,this.onLayerCreated=null!=g?g:void 0,this.$log=null!=h?h:d,this.createGoogleLayer=a(this.createGoogleLayer,this),null==this.attrs.type?void this.$log.info("type attribute for the layer directive is mandatory. Layer creation aborted!!"):(this.createGoogleLayer(),this.doShow=!0,angular.isDefined(this.attrs.show)&&(this.doShow=this.scope.show),this.doShow&&null!=this.gMap&&this.layer.setMap(this.gMap),this.scope.$watch("show",function(a){return function(b,c){return b!==c?(a.doShow=b,a.layer.setMap(b?a.gMap:null)):void 0}}(this),!0),this.scope.$watch("options",function(a){return function(b,c){return b!==c?(a.layer.setMap(null),a.layer=null,a.createGoogleLayer()):void 0}}(this),!0),void this.scope.$on("$destroy",function(a){return function(){return a.layer.setMap(null)}}(this)))}return c(e,b),e.prototype.createGoogleLayer=function(){var a;return this.layer=null==this.attrs.options?void 0===this.attrs.namespace?new google.maps[this.attrs.type]:new google.maps[this.attrs.namespace][this.attrs.type]:void 0===this.attrs.namespace?new google.maps[this.attrs.type](this.scope.options):new google.maps[this.attrs.namespace][this.attrs.type](this.scope.options),null!=this.layer&&null!=this.onLayerCreated&&(a=this.onLayerCreated(this.scope,this.layer))?a(this.layer):void 0},e}(b)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a};angular.module("google-maps.directives.api.models.parent".ns()).factory("MapTypeParentModel".ns(),["BaseObject".ns(),"Logger".ns(),"$timeout",function(b,d){var e;return e=function(b){function e(b,c,e,f,g){return this.scope=b,this.element=c,this.attrs=e,this.gMap=f,this.$log=null!=g?g:d,this.hideOverlay=a(this.hideOverlay,this),this.showOverlay=a(this.showOverlay,this),this.refreshMapType=a(this.refreshMapType,this),this.createMapType=a(this.createMapType,this),null==this.attrs.options?void this.$log.info("options attribute for the map-type directive is mandatory. Map type creation aborted!!"):(this.id=this.gMap.overlayMapTypesCount=this.gMap.overlayMapTypesCount+1||0,this.doShow=!0,this.createMapType(),angular.isDefined(this.attrs.show)&&(this.doShow=this.scope.show),this.doShow&&null!=this.gMap&&this.showOverlay(),this.scope.$watch("show",function(a){return function(b,c){return b!==c?(a.doShow=b,b?a.showOverlay():a.hideOverlay()):void 0}}(this),!0),this.scope.$watch("options",function(a){return function(b,c){return _.isEqual(b,c)?void 0:a.refreshMapType()}}(this),!0),angular.isDefined(this.attrs.refresh)&&this.scope.$watch("refresh",function(a){return function(b,c){return _.isEqual(b,c)?void 0:a.refreshMapType()}}(this),!0),void this.scope.$on("$destroy",function(a){return function(){return a.hideOverlay(),a.mapType=null}}(this)))}return c(e,b),e.prototype.createMapType=function(){if(null!=this.scope.options.getTile)this.mapType=this.scope.options;else{if(null==this.scope.options.getTileUrl)return void this.$log.info("options should provide either getTile or getTileUrl methods. Map type creation aborted!!");this.mapType=new google.maps.ImageMapType(this.scope.options)}return this.attrs.id&&this.scope.id&&(this.gMap.mapTypes.set(this.scope.id,this.mapType),angular.isDefined(this.attrs.show)||(this.doShow=!1)),this.mapType.layerId=this.id},e.prototype.refreshMapType=function(){return this.hideOverlay(),this.mapType=null,this.createMapType(),this.doShow&&null!=this.gMap?this.showOverlay():void 0},e.prototype.showOverlay=function(){return this.gMap.overlayMapTypes.push(this.mapType)},e.prototype.hideOverlay=function(){var a;return a=!1,this.gMap.overlayMapTypes.forEach(function(b){return function(c,d){a||c.layerId!==b.id||(a=!0,b.gMap.overlayMapTypes.removeAt(d))}}(this))},e}(b)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a};angular.module("google-maps.directives.api.models.parent".ns()).factory("MarkersParentModel".ns(),["IMarkerParentModel".ns(),"ModelsWatcher".ns(),"PropMap".ns(),"MarkerChildModel".ns(),"_async".ns(),"ClustererMarkerManager".ns(),"MarkerManager".ns(),"$timeout","IMarker".ns(),function(b,d,e,f,g,h,i,j,k){var l;return l=function(b){function j(b,c,d,f){this.onDestroy=a(this.onDestroy,this),this.newChildMarker=a(this.newChildMarker,this),this.updateChild=a(this.updateChild,this),this.pieceMeal=a(this.pieceMeal,this),this.reBuildMarkers=a(this.reBuildMarkers,this),this.createMarkersFromScratch=a(this.createMarkersFromScratch,this),this.validateScope=a(this.validateScope,this),this.onWatch=a(this.onWatch,this);var g;j.__super__.constructor.call(this,b,c,d,f),g=this,this.scope.markerModels=new e,this.$log.info(this),this.doRebuildAll=null!=this.scope.doRebuildAll?this.scope.doRebuildAll:!1,this.setIdKey(b),this.scope.$watch("doRebuildAll",function(a){return function(b,c){return b!==c?a.doRebuildAll=b:void 0}}(this)),this.watch("models",b),this.watch("doCluster",b),this.watch("clusterOptions",b),this.watch("clusterEvents",b),this.watch("fit",b),this.watch("idKey",b),this.gMarkerManager=void 0,this.createMarkersFromScratch(b)}return c(j,b),j.include(d),j.prototype.onWatch=function(a,b,c,d){return"idKey"===a&&c!==d&&(this.idKey=c),this.doRebuildAll?this.reBuildMarkers(b):this.pieceMeal(b)},j.prototype.validateScope=function(a){var b;return b=angular.isUndefined(a.models)||void 0===a.models,b&&this.$log.error(this.constructor.name+": no valid models attribute found"),j.__super__.validateScope.call(this,a)||b},j.prototype.createMarkersFromScratch=function(a){return a.doCluster?(a.clusterEvents&&(this.clusterInternalOptions=_.once(function(b){return function(){var c,d,e,f;return c=b,b.origClusterEvents?void 0:(b.origClusterEvents={click:null!=(d=a.clusterEvents)?d.click:void 0,mouseout:null!=(e=a.clusterEvents)?e.mouseout:void 0,mouseover:null!=(f=a.clusterEvents)?f.mouseover:void 0},_.extend(a.clusterEvents,{click:function(a){return c.maybeExecMappedEvent(a,"click")},mouseout:function(a){return c.maybeExecMappedEvent(a,"mouseout")},mouseover:function(a){return c.maybeExecMappedEvent(a,"mouseover")}}))}}(this))()),a.clusterOptions||a.clusterEvents?void 0===this.gMarkerManager?this.gMarkerManager=new h(this.map,void 0,a.clusterOptions,this.clusterInternalOptions):this.gMarkerManager.opt_options!==a.clusterOptions&&(this.gMarkerManager=new h(this.map,void 0,a.clusterOptions,this.clusterInternalOptions)):this.gMarkerManager=new h(this.map)):this.gMarkerManager=new i(this.map),g.waitOrGo(this,function(b){return function(){return g.each(a.models,function(c){return b.newChildMarker(c,a)},!1).then(function(){return b.gMarkerManager.draw(),a.fit?b.gMarkerManager.fit():void 0})}}(this)).then(function(a){return function(){return a.existingPieces=void 0}}(this))},j.prototype.reBuildMarkers=function(a){var b;if(a.doRebuild||void 0===a.doRebuild)return(null!=(b=this.scope.markerModels)?b.length:void 0)&&this.onDestroy(a),this.createMarkersFromScratch(a)},j.prototype.pieceMeal=function(a){var b;return b=null!=this.existingPieces?!1:g.defaultChunkSize,null!=this.scope.models&&this.scope.models.length>0&&this.scope.markerModels.length>0?this.figureOutState(this.idKey,a,this.scope.markerModels,this.modelKeyComparison,function(c){return function(d){var e;return e=d,g.waitOrGo(c,function(){return g.each(e.removals,function(a){return null!=a?(null!=a.destroy&&a.destroy(),c.scope.markerModels.remove(a.id)):void 0},b).then(function(){return g.each(e.adds,function(b){return c.newChildMarker(b,a)},b)}).then(function(){return g.each(e.updates,function(a){return c.updateChild(a.child,a.model)},b)}).then(function(){return(e.adds.length>0||e.removals.length>0||e.updates.length>0)&&(c.gMarkerManager.draw(),a.markerModels=c.scope.markerModels,a.fit)?c.gMarkerManager.fit():void 0})}).then(function(){return c.existingPieces=void 0})}}(this)):this.reBuildMarkers(a)},j.prototype.updateChild=function(a,b){return null==b[this.idKey]?void this.$log.error("Marker model has no id to assign a child to. This is required for performance. Please assign id, or redirect id to a different key."):a.setMyScope(b,a.model,!1)},j.prototype.newChildMarker=function(a,b){var c,d,e,g;return null==a[this.idKey]?void this.$log.error("Marker model has no id to assign a child to. This is required for performance. Please assign id, or redirect id to a different key."):(this.$log.info("child",c,"markers",this.scope.markerModels),d=b.$new(!1),d.events=b.events,g={},_.each(k.keys,function(a,c){return g[c]=b[c]}),c=new f(d,a,g,this.map,this.DEFAULTS,this.doClick,this.gMarkerManager,e=!1),this.scope.markerModels.put(a[this.idKey],c),c)},j.prototype.onDestroy=function(){return g.waitOrGo(this,function(a){return function(){return null!=a.gMarkerManager&&a.gMarkerManager.clear(),_.each(a.scope.markerModels.values(),function(a){return null!=a?a.destroy():void 0}),delete a.scope.markerModels,a.scope.markerModels=new e,Promise.resolve()
}}(this))},j.prototype.maybeExecMappedEvent=function(a,b){var c,d;return _.isFunction(null!=(d=this.scope.clusterEvents)?d[b]:void 0)&&(c=this.mapClusterToMarkerModels(a),this.origClusterEvents[b])?this.origClusterEvents[b](c.cluster,c.mapped):void 0},j.prototype.mapClusterToMarkerModels=function(a){var b,c;return b=a.getMarkers().values(),c=b.map(function(a){return function(b){return a.scope.markerModels[b.key].model}}(this)),{cluster:a,mapped:c}},j}(b)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a};angular.module("google-maps.directives.api.models.parent".ns()).factory("PolylinesParentModel".ns(),["$timeout","Logger".ns(),"ModelKey".ns(),"ModelsWatcher".ns(),"PropMap".ns(),"PolylineChildModel".ns(),"_async".ns(),function(b,d,e,f,g,h,i){var j;return j=function(b){function e(b,c,f,h,i){var j;this.scope=b,this.element=c,this.attrs=f,this.gMap=h,this.defaults=i,this.modelKeyComparison=a(this.modelKeyComparison,this),this.setChildScope=a(this.setChildScope,this),this.createChild=a(this.createChild,this),this.pieceMeal=a(this.pieceMeal,this),this.createAllNew=a(this.createAllNew,this),this.watchIdKey=a(this.watchIdKey,this),this.createChildScopes=a(this.createChildScopes,this),this.watchOurScope=a(this.watchOurScope,this),this.watchDestroy=a(this.watchDestroy,this),this.rebuildAll=a(this.rebuildAll,this),this.doINeedToWipe=a(this.doINeedToWipe,this),this.watchModels=a(this.watchModels,this),this.watch=a(this.watch,this),e.__super__.constructor.call(this,b),j=this,this.$log=d,this.plurals=new g,this.scopePropNames=["path","stroke","clickable","draggable","editable","geodesic","icons","visible"],_.each(this.scopePropNames,function(a){return function(b){return a[b+"Key"]=void 0}}(this)),this.models=void 0,this.firstTime=!0,this.$log.info(this),this.watchOurScope(b),this.createChildScopes()}return c(e,b),e.include(f),e.prototype.watch=function(a,b,c){return a.$watch(b,function(a){return function(d,e){return d!==e?(a[c]="function"==typeof d?d():d,i.waitOrGo(a,function(){return i.each(_.values(a.plurals),function(d){return d.scope[b]="self"===a[c]?d:d[a[c]]})})):void 0}}(this))},e.prototype.watchModels=function(a){return a.$watch("models",function(b){return function(c,d){return _.isEqual(c,d)?void 0:b.doINeedToWipe(c)?b.rebuildAll(a,!0,!0):b.createChildScopes(!1)}}(this),!0)},e.prototype.doINeedToWipe=function(a){var b;return b=null!=a?0===a.length:!0,this.plurals.length>0&&b},e.prototype.rebuildAll=function(a,b,c){return i.waitOrGo(this,function(a){return function(){return i.each(a.plurals.values(),function(a){return a.destroy()}).then(function(){return c&&delete a.plurals,a.plurals=new g,b?a.createChildScopes():void 0})}}(this))},e.prototype.watchDestroy=function(a){return a.$on("$destroy",function(b){return function(){return b.rebuildAll(a,!1,!0)}}(this))},e.prototype.watchOurScope=function(a){return _.each(this.scopePropNames,function(b){return function(c){var d;return d=c+"Key",b[d]="function"==typeof a[c]?a[c]():a[c],b.watch(a,c,d)}}(this))},e.prototype.createChildScopes=function(a){return null==a&&(a=!0),angular.isUndefined(this.scope.models)?void this.$log.error("No models to create polylines from! I Need direct models!"):null!=this.gMap&&null!=this.scope.models?(this.watchIdKey(this.scope),a?this.createAllNew(this.scope,!1):this.pieceMeal(this.scope,!1)):void 0},e.prototype.watchIdKey=function(a){return this.setIdKey(a),a.$watch("idKey",function(b){return function(c,d){return c!==d&&null==c?(b.idKey=c,b.rebuildAll(a,!0,!0)):void 0}}(this))},e.prototype.createAllNew=function(a,b){return null==b&&(b=!1),this.models=a.models,this.firstTime&&(this.watchModels(a),this.watchDestroy(a)),i.waitOrGo(this,function(b){return function(){return i.each(a.models,function(a){return b.createChild(a,b.gMap)})}}(this)).then(function(a){return function(){return a.firstTime=!1,a.existingPieces=void 0}}(this))},e.prototype.pieceMeal=function(a,b){var c;return null==b&&(b=!0),c=null!=this.existingPieces?!1:i.defaultChunkSize,this.models=a.models,null!=a&&null!=a.models&&a.models.length>0&&this.plurals.length>0?this.figureOutState(this.idKey,a,this.plurals,this.modelKeyComparison,function(a){return function(b){var c;return c=b,i.waitOrGo(a,function(){return i.each(c.removals,function(b){var c;return c=a.plurals[b],null!=c?(c.destroy(),a.plurals.remove(b)):void 0}).then(function(){return i.each(c.adds,function(b){return a.createChild(b,a.gMap)})}).then(function(){return a.existingPieces=void 0})})}}(this)):this.rebuildAll(this.scope,!0,!0)},e.prototype.createChild=function(a,b){var c,d;return d=this.scope.$new(!1),this.setChildScope(d,a),d.$watch("model",function(a){return function(b,c){return b!==c?a.setChildScope(d,b):void 0}}(this),!0),d["static"]=this.scope["static"],c=new h(d,this.attrs,b,this.defaults,a),null==a[this.idKey]?void this.$log.error("Polyline model has no id to assign a child to. This is required for performance. Please assign id, or redirect id to a different key."):(this.plurals.put(a[this.idKey],c),c)},e.prototype.setChildScope=function(a,b){return _.each(this.scopePropNames,function(c){return function(d){var e,f;return e=d+"Key",f="self"===c[e]?b:b[c[e]],f!==a[d]?a[d]=f:void 0}}(this)),a.model=b},e.prototype.modelKeyComparison=function(a,b){return _.isEqual(this.evalModelHandle(a,this.scope.path),this.evalModelHandle(b,this.scope.path))},e}(e)}])}.call(this),function(){var a={}.hasOwnProperty,b=function(b,c){function d(){this.constructor=b}for(var e in c)a.call(c,e)&&(b[e]=c[e]);return d.prototype=c.prototype,b.prototype=new d,b.__super__=c.prototype,b};angular.module("google-maps.directives.api.models.parent".ns()).factory("RectangleParentModel".ns(),["Logger".ns(),"GmapUtil".ns(),"EventsHelper".ns(),"RectangleOptionsBuilder".ns(),function(a,c,d,e){var f;return f=function(e){function f(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q;this.scope=b,this.attrs=d,this.map=e,this.DEFAULTS=f,g=void 0,j=!1,n=[],m=void 0,k=function(a){return function(){return a.isTrue(d.fit)?a.fitMapBounds(a.map,g):void 0}}(this),i=function(c){return function(){var d,e;return null!=b.bounds&&null!=(null!=(d=b.bounds)?d.sw:void 0)&&null!=(null!=(e=b.bounds)?e.ne:void 0)&&c.validateBoundPoints(b.bounds)?(g=c.convertBoundPoints(b.bounds),a.info("new new bounds created: "+o)):null!=b.bounds.getNorthEast&&null!=b.bounds.getSouthWest?g=b.bounds:"undefined"!=typeof bound&&null!==bound?a.error("Invalid bounds for newValue: "+JSON.stringify(b.bounds)):void 0}}(this),i(),o=new google.maps.Rectangle(this.buildOpts(g)),a.info("rectangle created: "+o),p=!1,q=function(){return function(){var a,c,d;return a=o.getBounds(),c=a.getNorthEast(),d=a.getSouthWest(),p?void 0:_.defer(function(){return b.$apply(function(b){return null!=b.bounds&&null!=b.bounds.sw&&null!=b.bounds.ne&&(b.bounds.ne={latitude:c.lat(),longitude:c.lng()},b.bounds.sw={latitude:d.lat(),longitude:d.lng()}),null!=b.bounds.getNorthEast&&null!=b.bounds.getSouthWest?b.bounds=a:void 0})})}}(this),l=function(a){return function(){return k(),a.removeEvents(n),n.push(google.maps.event.addListener(o,"dragstart",function(){return j=!0})),n.push(google.maps.event.addListener(o,"dragend",function(){return j=!1,q()})),n.push(google.maps.event.addListener(o,"bounds_changed",function(){return j?void 0:q()}))}}(this),h=function(a){return function(){return a.removeEvents(n),null!=m&&a.removeEvents(m),o.setMap(null)}}(this),null!=g&&l(),b.$watch("bounds",function(a,b){var c;if(!(_.isEqual(a,b)&&null!=g||j))return p=!0,null==a?void h():(null==g?c=!0:k(),i(),o.setBounds(g),p=!1,c&&null!=g?l():void 0)},!0),this.setMyOptions=function(a){return function(b,c){return _.isEqual(b,c)||null==g||null==b?void 0:o.setOptions(a.buildOpts(g))}}(this),this.props.push("bounds"),this.watchProps(this.props),null!=d.events&&(m=this.setEvents(o,b,b),b.$watch("events",function(a){return function(c,d){return _.isEqual(c,d)?void 0:(null!=m&&a.removeEvents(m),m=a.setEvents(o,b,b))}}(this))),b.$on("$destroy",function(){return function(){return h()}}(this)),a.info(this)}return b(f,e),f.include(c),f.include(d),f}(e)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a};angular.module("google-maps.directives.api.models.parent".ns()).factory("SearchBoxParentModel".ns(),["BaseObject".ns(),"Logger".ns(),"EventsHelper".ns(),"$timeout","$http","$templateCache",function(b,d,e){var f;return f=function(b){function f(b,c,e,f,g,h,i){var j;return this.scope=b,this.element=c,this.attrs=e,this.gMap=f,this.ctrlPosition=g,this.template=h,this.$log=null!=i?i:d,this.getBounds=a(this.getBounds,this),this.setBounds=a(this.setBounds,this),this.createSearchBox=a(this.createSearchBox,this),this.addToParentDiv=a(this.addToParentDiv,this),this.addAsMapControl=a(this.addAsMapControl,this),this.init=a(this.init,this),null==this.attrs.template?void this.$log.error("template attribute for the search-box directive is mandatory. Places Search Box creation aborted!!"):(j=angular.element("<div></div>"),j.append(this.template),this.input=j.find("input")[0],void this.init())}return c(f,b),f.include(e),f.prototype.init=function(){return this.createSearchBox(),null!=this.attrs.parentdiv?this.addToParentDiv():this.addAsMapControl(),this.listener=google.maps.event.addListener(this.searchBox,"places_changed",function(a){return function(){return a.places=a.searchBox.getPlaces()}}(this)),this.listeners=this.setEvents(this.searchBox,this.scope,this.scope),this.$log.info(this),this.scope.$watch("options",function(a){return function(b){return angular.isObject(b)&&null!=b.bounds?a.setBounds(b.bounds):void 0}}(this),!0),this.scope.$on("$destroy",function(a){return function(){return a.searchBox=null}}(this))},f.prototype.addAsMapControl=function(){return this.gMap.controls[google.maps.ControlPosition[this.ctrlPosition]].push(this.input)},f.prototype.addToParentDiv=function(){return this.parentDiv=angular.element(document.getElementById(this.scope.parentdiv)),this.parentDiv.append(this.input)},f.prototype.createSearchBox=function(){return this.searchBox=new google.maps.places.SearchBox(this.input,this.scope.options)},f.prototype.setBounds=function(a){if(angular.isUndefined(a.isEmpty))this.$log.error("Error: SearchBoxParentModel setBounds. Bounds not an instance of LatLngBounds.");else if(a.isEmpty()===!1&&null!=this.searchBox)return this.searchBox.setBounds(a)},f.prototype.getBounds=function(){return this.searchBox.getBounds()},f}(b)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a};angular.module("google-maps.directives.api.models.parent".ns()).factory("WindowsParentModel".ns(),["IWindowParentModel".ns(),"ModelsWatcher".ns(),"PropMap".ns(),"WindowChildModel".ns(),"Linked".ns(),"_async".ns(),"Logger".ns(),"$timeout","$compile","$http","$templateCache","$interpolate",function(b,d,e,f,g,h,i,j,k,l,m,n){var o;return o=function(b){function o(b,c,d,f,h,i){var n;this.gMap=h,this.markersScope=i,this.interpolateContent=a(this.interpolateContent,this),this.setChildScope=a(this.setChildScope,this),this.createWindow=a(this.createWindow,this),this.setContentKeys=a(this.setContentKeys,this),this.pieceMealWindows=a(this.pieceMealWindows,this),this.createAllNewWindows=a(this.createAllNewWindows,this),this.watchIdKey=a(this.watchIdKey,this),this.createChildScopesWindows=a(this.createChildScopesWindows,this),this.watchOurScope=a(this.watchOurScope,this),this.watchDestroy=a(this.watchDestroy,this),this.rebuildAll=a(this.rebuildAll,this),this.doINeedToWipe=a(this.doINeedToWipe,this),this.watchModels=a(this.watchModels,this),this.go=a(this.go,this),o.__super__.constructor.call(this,b,c,d,f,j,k,l,m),n=this,this.windows=new e,this.scopePropNames=["coords","template","templateUrl","templateParameter","isIconVisibleOnClick","closeClick","options","show"],_.each(this.scopePropNames,function(a){return function(b){return a[b+"Key"]=void 0}}(this)),this.linked=new g(b,c,d,f),this.models=void 0,this.contentKeys=void 0,this.isIconVisibleOnClick=void 0,this.firstTime=!0,this.firstWatchModels=!0,this.$log.info(n),this.parentScope=void 0,this.go(b)}return c(o,b),o.include(d),o.prototype.go=function(a){return this.watchOurScope(a),this.doRebuildAll=null!=this.scope.doRebuildAll?this.scope.doRebuildAll:!1,a.$watch("doRebuildAll",function(a){return function(b,c){return b!==c?a.doRebuildAll=b:void 0}}(this)),this.createChildScopesWindows()},o.prototype.watchModels=function(a){return a.$watch("models",function(b){return function(c,d){var e;return!_.isEqual(c,d)||b.firstWatchModels?(b.firstWatchModels=!1,b.doRebuildAll||b.doINeedToWipe(c)?b.rebuildAll(a,!0,!0):(e=0===b.windows.length,null!=b.existingPieces?b.existingPieces.then(function(){return b.createChildScopesWindows(e)}):b.createChildScopesWindows(e))):void 0}}(this))},o.prototype.doINeedToWipe=function(a){var b;return b=null!=a?0===a.length:!0,this.windows.length>0&&b},o.prototype.rebuildAll=function(a,b,c){return h.waitOrGo(this,function(a){return function(){return h.each(a.windows.values(),function(a){return a.destroy()}).then(function(){return c&&delete a.windows,a.windows=new e,b&&a.createChildScopesWindows(),Promise.resolve()})}}(this))},o.prototype.watchDestroy=function(a){return a.$on("$destroy",function(b){return function(){return b.firstWatchModels=!0,b.firstTime=!0,b.rebuildAll(a,!1,!0)}}(this))},o.prototype.watchOurScope=function(a){return _.each(this.scopePropNames,function(b){return function(c){var d;return d=c+"Key",b[d]="function"==typeof a[c]?a[c]():a[c]}}(this))},o.prototype.createChildScopesWindows=function(a){var b,c,d;return null==a&&(a=!0),this.isIconVisibleOnClick=!0,angular.isDefined(this.linked.attrs.isiconvisibleonclick)&&(this.isIconVisibleOnClick=this.linked.scope.isIconVisibleOnClick),b=angular.isUndefined(this.linked.scope.models),!b||void 0!==this.markersScope&&void 0!==(null!=(c=this.markersScope)?c.markerModels:void 0)&&void 0!==(null!=(d=this.markersScope)?d.models:void 0)?null!=this.gMap?null!=this.linked.scope.models?(this.watchIdKey(this.linked.scope),a?this.createAllNewWindows(this.linked.scope,!1):this.pieceMealWindows(this.linked.scope,!1)):(this.parentScope=this.markersScope,this.watchIdKey(this.parentScope),a?this.createAllNewWindows(this.markersScope,!0,"markerModels",!1):this.pieceMealWindows(this.markersScope,!0,"markerModels",!1)):void 0:void this.$log.error("No models to create windows from! Need direct models or models derrived from markers!")},o.prototype.watchIdKey=function(a){return this.setIdKey(a),a.$watch("idKey",function(b){return function(c,d){return c!==d&&null==c?(b.idKey=c,b.rebuildAll(a,!0,!0)):void 0}}(this))},o.prototype.createAllNewWindows=function(a,b,c,d){return null==c&&(c="models"),null==d&&(d=!1),this.models=a.models,this.firstTime&&(this.watchModels(a),this.watchDestroy(a)),this.setContentKeys(a.models),h.waitOrGo(this,function(d){return function(){return h.each(a.models,function(e){var f,g;return f=b&&null!=(g=a[c][[e[d.idKey]]])?g.gMarker:void 0,d.createWindow(e,f,d.gMap)})}}(this)).then(function(a){return function(){return a.firstTime=!1}}(this))},o.prototype.pieceMealWindows=function(a,b,c,d){var e;return null==c&&(c="models"),null==d&&(d=!0),e=null!=this.existingPieces?!1:h.defaultChunkSize,this.models=a.models,null!=a&&null!=a.models&&a.models.length>0&&this.windows.length>0?this.figureOutState(this.idKey,a,this.windows,this.modelKeyComparison,function(b){return function(d){var f;return f=d,h.waitOrGo(b,function(){return h.each(f.removals,function(a){return null!=a&&(b.windows.remove(a.id),null!=a.destroy)?a.destroy(!0):void 0},e).then(function(){return h.each(f.adds,function(d){var e,f;if(e=null!=(f=a[c][d[b.idKey]])?f.gMarker:void 0,!e)throw"Gmarker undefined";return b.createWindow(d,e,b.gMap)},e)})}).then(function(){return b.existingPieces=void 0})["catch"](function(){return i.error("Error while pieceMealing Windows!")})}}(this)):this.rebuildAll(this.scope,!0,!0)},o.prototype.setContentKeys=function(a){return a.length>0?this.contentKeys=Object.keys(a[0]):void 0},o.prototype.createWindow=function(a,b,c){var d,e,g,h;return e=this.linked.scope.$new(!1),this.setChildScope(e,a),e.$watch("model",function(a){return function(b,c){var d;return b!==c&&(a.setChildScope(e,b),a.markersScope)?a.windows[b[a.idKey]].markerCtrl=null!=(d=a.markersScope.markerModels[b[a.idKey]])?d.gMarker:void 0:void 0}}(this),!0),g={html:function(b){return function(){return b.interpolateContent(b.linked.element.html(),a)}}(this)},this.DEFAULTS=this.markersScope?a[this.optionsKey]||{}:this.DEFAULTS,h=this.createWindowOptions(b,e,g.html(),this.DEFAULTS),d=new f(a,e,h,this.isIconVisibleOnClick,c,b,g,!1,!0),null==a[this.idKey]?void this.$log.error("Window model has no id to assign a child to. This is required for performance. Please assign id, or redirect id to a different key."):(this.windows.put(a[this.idKey],d),d)},o.prototype.setChildScope=function(a,b){return _.each(this.scopePropNames,function(c){return function(d){var e,f;return e=d+"Key",f="self"===c[e]?b:b[c[e]],f!==a[d]?a[d]=f:void 0}}(this)),a.model=b},o.prototype.interpolateContent=function(a,b){var c,d,e,f,g,h;if(void 0!==this.contentKeys&&0!==this.contentKeys.length){for(c=n(a),d={},h=this.contentKeys,f=0,g=h.length;g>f;f++)e=h[f],d[e]=b[e];return c(d)}},o}(b)}])}.call(this),function(){angular.module("google-maps.directives.api".ns()).factory("Circle".ns(),["ICircle".ns(),"CircleParentModel".ns(),function(a,b){return _.extend(a,{link:function(a,c,d,e){return e.getScope().deferred.promise.then(function(){return function(e){return new b(a,c,d,e)}}(this))}})}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a};angular.module("google-maps.directives.api".ns()).factory("Control".ns(),["IControl".ns(),"$http","$templateCache","$compile","$controller","GoogleMapApi".ns(),function(b,d,e,f,g,h){var i;return i=function(i){function j(){this.link=a(this.link,this),j.__super__.constructor.call(this)}return c(j,i),j.prototype.link=function(a,c,i,j){return h.then(function(c){return function(h){var i,k;return angular.isUndefined(a.template)?void c.$log.error("mapControl: could not find a valid template property"):(i=angular.isDefined(a.index&&!isNaN(parseInt(a.index)))?parseInt(a.index):void 0,k=angular.isDefined(a.position)?a.position.toUpperCase().replace(/-/g,"_"):"TOP_CENTER",h.ControlPosition[k]?b.mapPromise(a,j).then(function(b){var h,j;return h=void 0,j=angular.element("<div></div>"),d.get(a.template,{cache:e}).success(function(b){var c,d;return d=a.$new(),j.append(b),i&&(j[0].index=i),angular.isDefined(a.controller)&&(c=g(a.controller,{$scope:d}),j.children().data("$ngControllerController",c)),h=f(j.contents())(d)}).error(function(){return c.$log.error("mapControl: template could not be found")}).then(function(){return b.controls[google.maps.ControlPosition[k]].push(h[0])})}):void c.$log.error("mapControl: invalid position property"))}}(this))},j}(b)}])}.call(this),function(){angular.module("google-maps.directives.api".ns()).factory("DrawingManager".ns(),["IDrawingManager".ns(),"DrawingManagerParentModel".ns(),function(a,b){return _.extend(a,{link:function(a,c,d,e){return e.getScope().deferred.promise.then(function(){return function(e){return new b(a,c,d,e)}}(this))}})}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a};angular.module("google-maps.directives.api".ns()).factory("ApiFreeDrawPolygons".ns(),["Logger".ns(),"BaseObject".ns(),"CtrlHandle".ns(),"DrawFreeHandChildModel".ns(),function(b,d,e,f){var g;return g=function(d){function g(){return this.link=a(this.link,this),g.__super__.constructor.apply(this,arguments)}return c(g,d),g.include(e),g.prototype.restrict="EMA",g.prototype.replace=!0,g.prototype.require="^"+"GoogleMap".ns(),g.prototype.scope={polygons:"=",draw:"="},g.prototype.link=function(a,c,d,e){return this.mapPromise(a,e).then(function(){return function(c){var d,e;return a.polygons?_.isArray(a.polygons)?(d=new f(c,a.originalMapOpts),e=void 0,a.draw=function(){return"function"==typeof e&&e(),d.engage(a.polygons).then(function(){var b;return b=!0,e=a.$watch("polygons",function(a,c){var d;return b?void(b=!1):(d=_.differenceObjects(c,a),d.forEach(function(a){return a.setMap(null)}))})})}):b.error("Free Draw Polygons must be of type Array!"):b.error("No polygons to bind to!")}}(this))},g}(d)}])}.call(this),function(){angular.module("google-maps.directives.api".ns()).service("ICircle".ns(),[function(){var a;return a={},{restrict:"EA",replace:!0,require:"^"+"GoogleMap".ns(),scope:{center:"=center",radius:"=radius",stroke:"=stroke",fill:"=fill",clickable:"=",draggable:"=",editable:"=",geodesic:"=",icons:"=icons",visible:"=",events:"="}}}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a};angular.module("google-maps.directives.api".ns()).factory("IControl".ns(),["BaseObject".ns(),"Logger".ns(),"CtrlHandle".ns(),function(b,d,e){var f;return f=function(b){function f(){this.link=a(this.link,this),this.restrict="EA",this.replace=!0,this.require="^"+"GoogleMap".ns(),this.scope={template:"@template",position:"@position",controller:"@controller",index:"@index"},this.$log=d}return c(f,b),f.extend(e),f.prototype.link=function(){throw new Exception("Not implemented!!")},f}(b)}])}.call(this),function(){angular.module("google-maps.directives.api".ns()).service("IDrawingManager".ns(),[function(){return{restrict:"EA",replace:!0,require:"^"+"GoogleMap".ns(),scope:{"static":"@",control:"=",options:"="}}}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a};angular.module("google-maps.directives.api".ns()).factory("IMarker".ns(),["Logger".ns(),"BaseObject".ns(),"CtrlHandle".ns(),function(b,d,e){var f;return f=function(d){function f(){this.link=a(this.link,this),this.$log=b,this.restrict="EMA",this.require="^"+"GoogleMap".ns(),this.priority=-1,this.transclude=!0,this.replace=!0,this.scope=f.keys}return c(f,d),f.keys={coords:"=coords",icon:"=icon",click:"&click",options:"=options",events:"=events",fit:"=fit",idKey:"=idkey",control:"=control"},f.extend(e),f.prototype.link=function(a,b,c,d){if(!d)throw new Error("No Map Control! Marker Directive Must be inside the map!")},f}(d)}])}.call(this),function(){var a={}.hasOwnProperty,b=function(b,c){function d(){this.constructor=b}for(var e in c)a.call(c,e)&&(b[e]=c[e]);return d.prototype=c.prototype,b.prototype=new d,b.__super__=c.prototype,b};angular.module("google-maps.directives.api".ns()).factory("IPolygon".ns(),["GmapUtil".ns(),"BaseObject".ns(),"Logger".ns(),"CtrlHandle".ns(),function(a,c,d,e){var f;return f=function(c){function f(){}return b(f,c),f.include(a),f.extend(e),f.prototype.restrict="EMA",f.prototype.replace=!0,f.prototype.require="^"+"GoogleMap".ns(),f.prototype.scope={path:"=path",stroke:"=stroke",clickable:"=",draggable:"=",editable:"=",geodesic:"=",fill:"=",icons:"=icons",visible:"=","static":"=",events:"=",zIndex:"=zindex",fit:"=",control:"=control"},f.prototype.DEFAULTS={},f.prototype.$log=d,f}(c)}])}.call(this),function(){var a={}.hasOwnProperty,b=function(b,c){function d(){this.constructor=b}for(var e in c)a.call(c,e)&&(b[e]=c[e]);return d.prototype=c.prototype,b.prototype=new d,b.__super__=c.prototype,b};angular.module("google-maps.directives.api".ns()).factory("IPolyline".ns(),["GmapUtil".ns(),"BaseObject".ns(),"Logger".ns(),"CtrlHandle".ns(),function(a,c,d,e){var f;return f=function(c){function f(){}return b(f,c),f.include(a),f.extend(e),f.prototype.restrict="EMA",f.prototype.replace=!0,f.prototype.require="^"+"GoogleMap".ns(),f.prototype.scope={path:"=",stroke:"=",clickable:"=",draggable:"=",editable:"=",geodesic:"=",icons:"=",visible:"=","static":"=",fit:"=",events:"="},f.prototype.DEFAULTS={},f.prototype.$log=d,f}(c)}])}.call(this),function(){angular.module("google-maps.directives.api".ns()).service("IRectangle".ns(),[function(){"use strict";var a;return a={},{restrict:"EMA",require:"^"+"GoogleMap".ns(),replace:!0,scope:{bounds:"=",stroke:"=",clickable:"=",draggable:"=",editable:"=",fill:"=",visible:"=",events:"="}}}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a};angular.module("google-maps.directives.api".ns()).factory("IWindow".ns(),["BaseObject".ns(),"ChildEvents".ns(),"Logger".ns(),function(b,d,e){var f;return f=function(b){function f(){this.link=a(this.link,this),this.restrict="EMA",this.template=void 0,this.transclude=!0,this.priority=-100,this.require="^"+"GoogleMap".ns(),this.replace=!0,this.scope={coords:"=coords",template:"=template",templateUrl:"=templateurl",templateParameter:"=templateparameter",isIconVisibleOnClick:"=isiconvisibleonclick",closeClick:"&closeclick",options:"=options",control:"=control",show:"=show"},this.$log=e}return c(f,b),f.include(d),f.prototype.link=function(){throw new Exception("Not Implemented!!")},f}(b)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a};angular.module("google-maps.directives.api".ns()).factory("Map".ns(),["$timeout","$q","Logger".ns(),"GmapUtil".ns(),"BaseObject".ns(),"CtrlHandle".ns(),"IsReady".ns(),"uuid".ns(),"ExtendGWin".ns(),"ExtendMarkerClusterer".ns(),"GoogleMapsUtilV3".ns(),"GoogleMapApi".ns(),function(b,d,e,f,g,h,i,j,k,l,m,n){"use strict";var o,p,q;return o=void 0,q=[m,k,l],p=function(b){function d(){this.link=a(this.link,this);var b,c;b=function(a){var b;return b=h.handle(a),a.ctrlType="Map",a.deferred.promise.then(function(){return q.forEach(function(a){return a.init()})}),b.getMap=function(){return a.map},_.extend(this,b)},this.controller=["$scope",b],c=this}return c(d,b),d.include(f),d.prototype.restrict="EMA",d.prototype.transclude=!0,d.prototype.replace=!1,d.prototype.template='<div class="angular-google-map"><div class="angular-google-map-container"></div><div ng-transclude style="display: none"></div></div>',d.prototype.scope={center:"=",zoom:"=",dragging:"=",control:"=",options:"=",events:"=",styles:"=",bounds:"="},d.prototype.link=function(a,b,c){return n.then(function(d){return function(f){var g,h,k,l,m,n,p,q,r,s,t;if(o={mapTypeId:f.MapTypeId.ROADMAP},r=i.spawn(),p=function(){return r.deferred.resolve({instance:r.instance,map:t})},!d.validateCoords(a.center))return void e.error("angular-google-maps: could not find a valid center property");if(!angular.isDefined(a.zoom))return void e.error("angular-google-maps: map zoom property not set");if(h=angular.element(b),h.addClass("angular-google-map"),n={options:{}},c.options&&(n.options=a.options),c.styles&&(n.styles=a.styles),c.type&&(s=c.type.toUpperCase(),google.maps.MapTypeId.hasOwnProperty(s)?n.mapTypeId=google.maps.MapTypeId[c.type.toUpperCase()]:e.error("angular-google-maps: invalid map type '"+c.type+"'")),m=angular.extend({},o,n,{center:d.getCoords(a.center),zoom:a.zoom,bounds:a.bounds}),t=new google.maps.Map(h.find("div")[1],m),t["_id".ns()]=j.generate(),g=!1,t?(a.deferred.resolve(t),p()):google.maps.event.addListener(t,"tilesloaded ",function(b){return a.deferred.resolve(b),p()}),google.maps.event.addListener(t,"dragstart",function(){return g=!0,_.defer(function(){return a.$apply(function(a){return null!=a.dragging?a.dragging=g:void 0})})}),google.maps.event.addListener(t,"dragend",function(){return g=!1,_.defer(function(){return a.$apply(function(a){return null!=a.dragging?a.dragging=g:void 0})})}),google.maps.event.addListener(t,"drag",function(){var b;return b=t.center,_.defer(function(){return a.$apply(function(a){return angular.isDefined(a.center.type)?(a.center.coordinates[1]=b.lat(),a.center.coordinates[0]=b.lng()):(a.center.latitude=b.lat(),a.center.longitude=b.lng())})})}),google.maps.event.addListener(t,"zoom_changed",function(){return a.zoom!==t.zoom?_.defer(function(){return a.$apply(function(a){return a.zoom=t.zoom})}):void 0}),q=!1,google.maps.event.addListener(t,"center_changed",function(){var b;return b=t.center,q?void 0:_.defer(function(){return a.$apply(function(a){if(!t.dragging)if(angular.isDefined(a.center.type)){if(a.center.coordinates[1]!==b.lat()&&(a.center.coordinates[1]=b.lat()),a.center.coordinates[0]!==b.lng())return a.center.coordinates[0]=b.lng()}else if(a.center.latitude!==b.lat()&&(a.center.latitude=b.lat()),a.center.longitude!==b.lng())return a.center.longitude=b.lng()})})}),google.maps.event.addListener(t,"idle",function(){var b,c,d;return b=t.getBounds(),c=b.getNorthEast(),d=b.getSouthWest(),_.defer(function(){return a.$apply(function(a){return null!==a.bounds&&void 0!==a.bounds&&void 0!==a.bounds?(a.bounds.northeast={latitude:c.lat(),longitude:c.lng()},a.bounds.southwest={latitude:d.lat(),longitude:d.lng()}):void 0})})}),angular.isDefined(a.events)&&null!==a.events&&angular.isObject(a.events)){l=function(b){return function(){return a.events[b].apply(a,[t,b,arguments])}};for(k in a.events)a.events.hasOwnProperty(k)&&angular.isFunction(a.events[k])&&google.maps.event.addListener(t,k,l(k))}return t.getOptions=function(){return m},a.map=t,null!=c.control&&null!=a.control&&(a.control.refresh=function(a){var b;if(null!=t)return google.maps.event.trigger(t,"resize"),null!=(null!=a?a.latitude:void 0)&&null!=(null!=a?a.latitude:void 0)?(b=d.getCoords(a),d.isTrue(c.pan)?t.panTo(b):t.setCenter(b)):void 0},a.control.getGMap=function(){return t},a.control.getMapOptions=function(){return m}),a.$watch("center",function(b){var f;return f=d.getCoords(b),f.lat()!==t.center.lat()||f.lng()!==t.center.lng()?(q=!0,g||(d.validateCoords(b)||e.error("Invalid center for newValue: "+JSON.stringify(b)),d.isTrue(c.pan)&&a.zoom===t.zoom?t.panTo(f):t.setCenter(f)),q=!1):void 0},!0),a.$watch("zoom",function(a){return a!==t.zoom?_.defer(function(){return t.setZoom(a)}):void 0}),a.$watch("bounds",function(a,b){var c,d,f;if(a!==b)return null==a.northeast.latitude||null==a.northeast.longitude||null==a.southwest.latitude||null==a.southwest.longitude?void e.error("Invalid map bounds for new value: "+JSON.stringify(a)):(d=new google.maps.LatLng(a.northeast.latitude,a.northeast.longitude),f=new google.maps.LatLng(a.southwest.latitude,a.southwest.longitude),c=new google.maps.LatLngBounds(f,d),t.fitBounds(c))}),a.$watch("options",function(a,b){return _.isEqual(a,b)||(n.options=a,null==t)?void 0:t.setOptions(n)},!0),a.$watch("styles",function(a,b){return _.isEqual(a,b)||(n.styles=a,null==t)?void 0:t.setOptions(n)},!0)}}(this))},d}(g)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)
}},b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a};angular.module("google-maps.directives.api".ns()).factory("Marker".ns(),["IMarker".ns(),"MarkerChildModel".ns(),"MarkerManager".ns(),function(b,d,e){var f;return f=function(f){function g(){this.link=a(this.link,this),g.__super__.constructor.call(this),this.template='<span class="angular-google-map-marker" ng-transclude></span>',this.$log.info(this)}return c(g,f),g.prototype.controller=["$scope","$element",function(a,c){return a.ctrlType="Marker",_.extend(g,b.handle(a,c))}],g.prototype.link=function(a,c,f,g){var h;return a.fit&&(h=!0),b.mapPromise(a,g).then(function(c){return function(f){var g,h,i,j;return c.gMarkerManager||(c.gMarkerManager=new e(f)),i=_.keys(b.keys),i=_.object(i,i),c.promise=new d(a,a,i,f,{},g=!0,c.gMarkerManager,h=!1,j=!1).deferred.promise.then(function(b){return a.deferred.resolve(b)}),null!=a.control?a.control.getGMarkers=c.gMarkerManager.getGMarkers:void 0}}(this))},g}(b)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a};angular.module("google-maps.directives.api".ns()).factory("Markers".ns(),["IMarker".ns(),"MarkersParentModel".ns(),"_sync".ns(),function(b,d){var e;return e=function(e){function f(b){this.link=a(this.link,this),f.__super__.constructor.call(this,b),this.template='<span class="angular-google-map-markers" ng-transclude></span>',this.scope=_.extend(this.scope||{},{idKey:"=idkey",doRebuildAll:"=dorebuildall",models:"=models",doCluster:"=docluster",clusterOptions:"=clusteroptions",clusterEvents:"=clusterevents"}),this.$log.info(this)}return c(f,e),f.prototype.controller=["$scope","$element",function(a,c){return a.ctrlType="Markers",_.extend(this,b.handle(a,c))}],f.prototype.link=function(a,c,e,f){var g,h;return g=void 0,h=function(){return function(){return null!=a.control&&(a.control.getGMarkers=function(){var a;return null!=(a=g.gMarkerManager)?a.getGMarkers():void 0},a.control.getChildMarkers=function(){return g.markerModels}),a.deferred.resolve()}}(this),b.mapPromise(a,f).then(function(){return function(b){return g=new d(a,c,e,b),g.existingPieces.then(function(){return h()})}}(this))},f}(b)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a};angular.module("google-maps.directives.api".ns()).factory("Polygon".ns(),["IPolygon".ns(),"$timeout","array-sync".ns(),"PolygonChildModel".ns(),function(b,d,e,f){var g;return g=function(d){function e(){return this.link=a(this.link,this),e.__super__.constructor.apply(this,arguments)}return c(e,d),e.prototype.link=function(a,c,d,e){var g,h;return g=[],h=b.mapPromise(a,e),null!=a.control&&(a.control.getInstance=this,a.control.polygons=g,a.control.promise=h),h.then(function(b){return function(c){return g.push(new f(a,d,c,b.DEFAULTS))}}(this))},e}(b)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a};angular.module("google-maps.directives.api".ns()).factory("Polyline".ns(),["IPolyline".ns(),"$timeout","array-sync".ns(),"PolylineChildModel".ns(),function(b,d,e,f){var g;return g=function(d){function e(){return this.link=a(this.link,this),e.__super__.constructor.apply(this,arguments)}return c(e,d),e.prototype.link=function(a,c,d,e){return angular.isUndefined(a.path)||null===a.path||!this.validatePath(a.path)?void this.$log.error("polyline: no valid path attribute found"):b.mapPromise(a,e).then(function(b){return function(c){return new f(a,d,c,b.DEFAULTS)}}(this))},e}(b)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a};angular.module("google-maps.directives.api".ns()).factory("Polylines".ns(),["IPolyline".ns(),"$timeout","array-sync".ns(),"PolylinesParentModel".ns(),function(b,d,e,f){var g;return g=function(b){function d(){this.link=a(this.link,this),d.__super__.constructor.call(this),this.scope.idKey="=idkey",this.scope.models="=models",this.$log.info(this)}return c(d,b),d.prototype.link=function(a,b,c,d){return angular.isUndefined(a.path)||null===a.path?void this.$log.error("polylines: no valid path attribute found"):a.models?d.getScope().deferred.promise.then(function(d){return function(e){return new f(a,b,c,e,d.DEFAULTS)}}(this)):void this.$log.error("polylines: no models found to create from")},d}(b)}])}.call(this),function(){angular.module("google-maps.directives.api".ns()).factory("Rectangle".ns(),["Logger".ns(),"GmapUtil".ns(),"IRectangle".ns(),"RectangleParentModel".ns(),function(a,b,c,d){return _.extend(c,{link:function(a,b,c,e){return e.getScope().deferred.promise.then(function(){return function(e){return new d(a,b,c,e)}}(this))}})}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a};angular.module("google-maps.directives.api".ns()).factory("Window".ns(),["IWindow".ns(),"GmapUtil".ns(),"WindowChildModel".ns(),function(b,d,e){var f;return f=function(b){function f(){this.link=a(this.link,this),f.__super__.constructor.call(this),this.require=["^"+"GoogleMap".ns(),"^?"+"Marker".ns()],this.template='<span class="angular-google-maps-window" ng-transclude></span>',this.$log.info(this),this.childWindows=[]}return c(f,b),f.include(d),f.prototype.link=function(a,b,c,d){var e,f,g;return e=d[0].getScope(),f=d.length>1&&null!=d[1]?d[1]:void 0,g=null!=f?f.getScope():void 0,e.deferred.promise.then(function(d){return function(e){var h;return h=!0,angular.isDefined(c.isiconvisibleonclick)&&(h=a.isIconVisibleOnClick),f?g.deferred.promise.then(function(c){return d.init(a,b,h,e,g,c)}):void d.init(a,b,h,e)}}(this))},f.prototype.init=function(a,b,c,d,f,g){var h,i,j,k;return i=null!=a.options?a.options:{},j=null!=a&&this.validateCoords(a.coords),null!=f&&f.$watch("coords",function(a){return function(b,c){return null==g||h.markerCtrl||(h.markerCtrl=g,h.handleClick(!0)),a.validateCoords(b)?angular.equals(b,c)?void 0:h.getLatestPosition(a.getCoords(b)):h.hideWindow()}}(this),!0),k=j?this.createWindowOptions(g,a,b.html(),i):i,null!=d&&(h=new e({},a,k,c,d,g,b),this.childWindows.push(h),a.$on("$destroy",function(a){return function(){return a.childWindows=_.withoutObjects(a.childWindows,[h],function(a,b){return a.scope.$id===b.scope.$id})}}(this))),null!=a.control&&(a.control.getGWindows=function(a){return function(){return a.childWindows.map(function(a){return a.gWin})}}(this),a.control.getChildWindows=function(a){return function(){return a.childWindows}}(this),a.control.showWindow=function(a){return function(){return a.childWindows.map(function(a){return a.showWindow()})}}(this),a.control.hideWindow=function(a){return function(){return a.childWindows.map(function(a){return a.hideWindow()})}}(this)),null!=this.onChildCreation&&null!=h?this.onChildCreation(h):void 0},f}(b)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a};angular.module("google-maps.directives.api".ns()).factory("Windows".ns(),["IWindow".ns(),"WindowsParentModel".ns(),function(b,d){var e;return e=function(b){function e(){this.init=a(this.init,this),this.link=a(this.link,this),e.__super__.constructor.call(this),this.require=["^"+"GoogleMap".ns(),"^?"+"Markers".ns()],this.template='<span class="angular-google-maps-windows" ng-transclude></span>',this.scope.idKey="=idkey",this.scope.doRebuildAll="=dorebuildall",this.scope.models="=models",this.$log.debug(this)}return c(e,b),e.prototype.link=function(a,b,c,d){var e,f,g;return e=d[0].getScope(),f=d.length>1&&null!=d[1]?d[1]:void 0,g=null!=f?f.getScope():void 0,e.deferred.promise.then(function(e){return function(f){var h,i;return h=(null!=g&&null!=(i=g.deferred)?i.promise:void 0)||Promise.resolve(),h.then(function(){var h,i;return h=null!=(i=e.parentModel)?i.existingPieces:void 0,h?h.then(function(){return e.init(a,b,c,d,f,g)}):e.init(a,b,c,d,f,g)})}}(this))},e.prototype.init=function(a,b,c,e,f,g){var h;return h=new d(a,b,c,e,f,g),null!=a.control?(a.control.getGWindows=function(){return function(){return h.windows.map(function(a){return a.gWin})}}(this),a.control.getChildWindows=function(){return function(){return h.windows}}(this)):void 0},e}(b)}])}.call(this),function(){angular.module("google-maps".ns()).directive("GoogleMap".ns(),["Map".ns(),function(a){return new a}])}.call(this),function(){angular.module("google-maps".ns()).directive("Marker".ns(),["$timeout","Marker".ns(),function(a,b){return new b(a)}])}.call(this),function(){angular.module("google-maps".ns()).directive("Markers".ns(),["$timeout","Markers".ns(),function(a,b){return new b(a)}])}.call(this),function(){angular.module("google-maps".ns()).directive("Polygon".ns(),["Polygon".ns(),function(a){return new a}])}.call(this),function(){angular.module("google-maps".ns()).directive("Circle".ns(),["Circle".ns(),function(a){return a}])}.call(this),function(){angular.module("google-maps".ns()).directive("Polyline".ns(),["Polyline".ns(),function(a){return new a}])}.call(this),function(){angular.module("google-maps".ns()).directive("Polylines".ns(),["Polylines".ns(),function(a){return new a}])}.call(this),function(){angular.module("google-maps".ns()).directive("Rectangle".ns(),["Logger".ns(),"Rectangle".ns(),function(a,b){return b}])}.call(this),function(){angular.module("google-maps".ns()).directive("Window".ns(),["$timeout","$compile","$http","$templateCache","Window".ns(),function(a,b,c,d,e){return new e(a,b,c,d)}])}.call(this),function(){angular.module("google-maps".ns()).directive("Windows".ns(),["$timeout","$compile","$http","$templateCache","$interpolate","Windows".ns(),function(a,b,c,d,e,f){return new f(a,b,c,d,e)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}};angular.module("google-maps".ns()).directive("Layer".ns(),["$timeout","Logger".ns(),"LayerParentModel".ns(),function(b,c,d){var e;return new(e=function(){function b(){this.link=a(this.link,this),this.$log=c,this.restrict="EMA",this.require="^"+"GoogleMap".ns(),this.priority=-1,this.transclude=!0,this.template='<span class="angular-google-map-layer" ng-transclude></span>',this.replace=!0,this.scope={show:"=show",type:"=type",namespace:"=namespace",options:"=options",onCreated:"&oncreated"}}return b.prototype.link=function(a,b,c,e){return e.getScope().deferred.promise.then(function(){return function(e){return null!=a.onCreated?new d(a,b,c,e,a.onCreated):new d(a,b,c,e)}}(this))},b}())}])}.call(this),function(){angular.module("google-maps".ns()).directive("MapControl".ns(),["Control".ns(),function(a){return new a}])}.call(this),function(){angular.module("google-maps".ns()).directive("DrawingManager".ns(),["DrawingManager".ns(),function(a){return a}])}.call(this),function(){angular.module("google-maps".ns()).directive("FreeDrawPolygons".ns(),["ApiFreeDrawPolygons".ns(),function(a){return new a}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}};angular.module("google-maps".ns()).directive("MapType".ns(),["$timeout","Logger".ns(),"MapTypeParentModel".ns(),function(b,c,d){var e;return new(e=function(){function b(){this.link=a(this.link,this),this.$log=c,this.restrict="EMA",this.require="^"+"GoogleMap".ns(),this.priority=-1,this.transclude=!0,this.template='<span class="angular-google-map-layer" ng-transclude></span>',this.replace=!0,this.scope={show:"=show",options:"=options",refresh:"=refresh",id:"@"}}return b.prototype.link=function(a,b,c,e){return e.getScope().deferred.promise.then(function(){return function(e){return new d(a,b,c,e)}}(this))},b}())}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}};angular.module("google-maps".ns()).directive("SearchBox".ns(),["GoogleMapApi".ns(),"Logger".ns(),"SearchBoxParentModel".ns(),"$http","$templateCache",function(b,c,d,e,f){var g;return new(g=function(){function g(){this.link=a(this.link,this),this.$log=c,this.restrict="EMA",this.require="^"+"GoogleMap".ns(),this.priority=-1,this.transclude=!0,this.template='<span class="angular-google-map-search" ng-transclude></span>',this.replace=!0,this.scope={template:"=template",position:"=position",options:"=options",events:"=events",parentdiv:"=parentdiv"}}return g.prototype.link=function(a,c,g,h){return b.then(function(b){return function(i){return e.get(a.template,{cache:f}).success(function(e){return h.getScope().deferred.promise.then(function(f){var h;return h=angular.isDefined(a.position)?a.position.toUpperCase().replace(/-/g,"_"):"TOP_LEFT",i.ControlPosition[h]?new d(a,c,g,f,h,e):void b.$log.error("searchBox: invalid position property")})})}}(this))},g}())}])}.call(this),angular.module("google-maps.wrapped".ns()).service("uuid".ns(),function(){function a(){}return a.generate=function(){var b=a._gri,c=a._ha;return c(b(32),8)+"-"+c(b(16),4)+"-"+c(16384|b(12),4)+"-"+c(32768|b(14),4)+"-"+c(b(48),12)},a._gri=function(a){return 0>a?0/0:30>=a?0|Math.random()*(1<<a):53>=a?(0|1073741824*Math.random())+1073741824*(0|Math.random()*(1<<a-30)):0/0},a._ha=function(a,b){for(var c=a.toString(16),d=b-c.length,e="0";d>0;d>>>=1,e+=e)1&d&&(c=e+c);return c},a}),angular.module("google-maps.wrapped".ns()).service("GoogleMapsUtilV3".ns(),function(){return{init:_.once(function(){function a(a){a=a||{},google.maps.OverlayView.apply(this,arguments),this.content_=a.content||"",this.disableAutoPan_=a.disableAutoPan||!1,this.maxWidth_=a.maxWidth||0,this.pixelOffset_=a.pixelOffset||new google.maps.Size(0,0),this.position_=a.position||new google.maps.LatLng(0,0),this.zIndex_=a.zIndex||null,this.boxClass_=a.boxClass||"infoBox",this.boxStyle_=a.boxStyle||{},this.closeBoxMargin_=a.closeBoxMargin||"2px",this.closeBoxURL_=a.closeBoxURL||"http://www.google.com/intl/en_us/mapfiles/close.gif",""===a.closeBoxURL&&(this.closeBoxURL_=""),this.infoBoxClearance_=a.infoBoxClearance||new google.maps.Size(1,1),"undefined"==typeof a.visible&&(a.visible="undefined"==typeof a.isHidden?!0:!a.isHidden),this.isHidden_=!a.visible,this.alignBottom_=a.alignBottom||!1,this.pane_=a.pane||"floatPane",this.enableEventPropagation_=a.enableEventPropagation||!1,this.div_=null,this.closeListener_=null,this.moveListener_=null,this.contextListener_=null,this.eventListeners_=null,this.fixedWidthSet_=null}function b(a,c){a.getMarkerClusterer().extend(b,google.maps.OverlayView),this.cluster_=a,this.className_=a.getMarkerClusterer().getClusterClass(),this.styles_=c,this.center_=null,this.div_=null,this.sums_=null,this.visible_=!1,this.setMap(a.getMap())}function c(a){this.markerClusterer_=a,this.map_=a.getMap(),this.gridSize_=a.getGridSize(),this.minClusterSize_=a.getMinimumClusterSize(),this.averageCenter_=a.getAverageCenter(),this.markers_=[],this.center_=null,this.bounds_=null,this.clusterIcon_=new b(this,a.getStyles())}function d(a,b,c){this.extend(d,google.maps.OverlayView),b=b||[],c=c||{},this.markers_=[],this.clusters_=[],this.listeners_=[],this.activeMap_=null,this.ready_=!1,this.gridSize_=c.gridSize||60,this.minClusterSize_=c.minimumClusterSize||2,this.maxZoom_=c.maxZoom||null,this.styles_=c.styles||[],this.title_=c.title||"",this.zoomOnClick_=!0,void 0!==c.zoomOnClick&&(this.zoomOnClick_=c.zoomOnClick),this.averageCenter_=!1,void 0!==c.averageCenter&&(this.averageCenter_=c.averageCenter),this.ignoreHidden_=!1,void 0!==c.ignoreHidden&&(this.ignoreHidden_=c.ignoreHidden),this.enableRetinaIcons_=!1,void 0!==c.enableRetinaIcons&&(this.enableRetinaIcons_=c.enableRetinaIcons),this.imagePath_=c.imagePath||d.IMAGE_PATH,this.imageExtension_=c.imageExtension||d.IMAGE_EXTENSION,this.imageSizes_=c.imageSizes||d.IMAGE_SIZES,this.calculator_=c.calculator||d.CALCULATOR,this.batchSize_=c.batchSize||d.BATCH_SIZE,this.batchSizeIE_=c.batchSizeIE||d.BATCH_SIZE_IE,this.clusterClass_=c.clusterClass||"cluster",-1!==navigator.userAgent.toLowerCase().indexOf("msie")&&(this.batchSize_=this.batchSizeIE_),this.setupStyles_(),this.addMarkers(b,!0),this.setMap(a)}function e(a,b){function c(){}c.prototype=b.prototype,a.superClass_=b.prototype,a.prototype=new c,a.prototype.constructor=a}function f(a,b){this.marker_=a,this.handCursorURL_=a.handCursorURL,this.labelDiv_=document.createElement("div"),this.labelDiv_.style.cssText="position: absolute; overflow: hidden;",this.eventDiv_=document.createElement("div"),this.eventDiv_.style.cssText=this.labelDiv_.style.cssText,this.eventDiv_.setAttribute("onselectstart","return false;"),this.eventDiv_.setAttribute("ondragstart","return false;"),this.crossDiv_=f.getSharedCross(b)}function g(a){a=a||{},a.labelContent=a.labelContent||"",a.labelAnchor=a.labelAnchor||new google.maps.Point(0,0),a.labelClass=a.labelClass||"markerLabels",a.labelStyle=a.labelStyle||{},a.labelInBackground=a.labelInBackground||!1,"undefined"==typeof a.labelVisible&&(a.labelVisible=!0),"undefined"==typeof a.raiseOnDrag&&(a.raiseOnDrag=!0),"undefined"==typeof a.clickable&&(a.clickable=!0),"undefined"==typeof a.draggable&&(a.draggable=!1),"undefined"==typeof a.optimized&&(a.optimized=!1),a.crossImage=a.crossImage||"http"+("https:"===document.location.protocol?"s":"")+"://maps.gstatic.com/intl/en_us/mapfiles/drag_cross_67_16.png",a.handCursor=a.handCursor||"http"+("https:"===document.location.protocol?"s":"")+"://maps.gstatic.com/intl/en_us/mapfiles/closedhand_8_8.cur",a.optimized=!1,this.label=new f(this,a.crossImage,a.handCursor),google.maps.Marker.apply(this,arguments)}a.prototype=new google.maps.OverlayView,a.prototype.createInfoBoxDiv_=function(){var a,b,c,d=this,e=function(a){a.cancelBubble=!0,a.stopPropagation&&a.stopPropagation()},f=function(a){a.returnValue=!1,a.preventDefault&&a.preventDefault(),d.enableEventPropagation_||e(a)};if(!this.div_){if(this.div_=document.createElement("div"),this.setBoxStyle_(),"undefined"==typeof this.content_.nodeType?this.div_.innerHTML=this.getCloseBoxImg_()+this.content_:(this.div_.innerHTML=this.getCloseBoxImg_(),this.div_.appendChild(this.content_)),this.getPanes()[this.pane_].appendChild(this.div_),this.addClickHandler_(),this.div_.style.width?this.fixedWidthSet_=!0:0!==this.maxWidth_&&this.div_.offsetWidth>this.maxWidth_?(this.div_.style.width=this.maxWidth_,this.div_.style.overflow="auto",this.fixedWidthSet_=!0):(c=this.getBoxWidths_(),this.div_.style.width=this.div_.offsetWidth-c.left-c.right+"px",this.fixedWidthSet_=!1),this.panBox_(this.disableAutoPan_),!this.enableEventPropagation_){for(this.eventListeners_=[],b=["mousedown","mouseover","mouseout","mouseup","click","dblclick","touchstart","touchend","touchmove"],a=0;a<b.length;a++)this.eventListeners_.push(google.maps.event.addDomListener(this.div_,b[a],e));this.eventListeners_.push(google.maps.event.addDomListener(this.div_,"mouseover",function(){this.style.cursor="default"}))}this.contextListener_=google.maps.event.addDomListener(this.div_,"contextmenu",f),google.maps.event.trigger(this,"domready")}},a.prototype.getCloseBoxImg_=function(){var a="";return""!==this.closeBoxURL_&&(a="<img",a+=" src='"+this.closeBoxURL_+"'",a+=" align=right",a+=" style='",a+=" position: relative;",a+=" cursor: pointer;",a+=" margin: "+this.closeBoxMargin_+";",a+="'>"),a},a.prototype.addClickHandler_=function(){var a;""!==this.closeBoxURL_?(a=this.div_.firstChild,this.closeListener_=google.maps.event.addDomListener(a,"click",this.getCloseClickHandler_())):this.closeListener_=null},a.prototype.getCloseClickHandler_=function(){var a=this;return function(b){b.cancelBubble=!0,b.stopPropagation&&b.stopPropagation(),google.maps.event.trigger(a,"closeclick"),a.close()}},a.prototype.panBox_=function(a){var b,c,d=0,e=0;if(!a&&(b=this.getMap(),b instanceof google.maps.Map)){b.getBounds().contains(this.position_)||b.setCenter(this.position_),c=b.getBounds();var f=b.getDiv(),g=f.offsetWidth,h=f.offsetHeight,i=this.pixelOffset_.width,j=this.pixelOffset_.height,k=this.div_.offsetWidth,l=this.div_.offsetHeight,m=this.infoBoxClearance_.width,n=this.infoBoxClearance_.height,o=this.getProjection().fromLatLngToContainerPixel(this.position_);if(o.x<-i+m?d=o.x+i-m:o.x+k+i+m>g&&(d=o.x+k+i+m-g),this.alignBottom_?o.y<-j+n+l?e=o.y+j-n-l:o.y+j+n>h&&(e=o.y+j+n-h):o.y<-j+n?e=o.y+j-n:o.y+l+j+n>h&&(e=o.y+l+j+n-h),0!==d||0!==e){{b.getCenter()}b.panBy(d,e)}}},a.prototype.setBoxStyle_=function(){var a,b;if(this.div_){this.div_.className=this.boxClass_,this.div_.style.cssText="",b=this.boxStyle_;for(a in b)b.hasOwnProperty(a)&&(this.div_.style[a]=b[a]);"undefined"!=typeof this.div_.style.opacity&&""!==this.div_.style.opacity&&(this.div_.style.filter="alpha(opacity="+100*this.div_.style.opacity+")"),this.div_.style.position="absolute",this.div_.style.visibility="hidden",null!==this.zIndex_&&(this.div_.style.zIndex=this.zIndex_)}},a.prototype.getBoxWidths_=function(){var a,b={top:0,bottom:0,left:0,right:0},c=this.div_;return document.defaultView&&document.defaultView.getComputedStyle?(a=c.ownerDocument.defaultView.getComputedStyle(c,""),a&&(b.top=parseInt(a.borderTopWidth,10)||0,b.bottom=parseInt(a.borderBottomWidth,10)||0,b.left=parseInt(a.borderLeftWidth,10)||0,b.right=parseInt(a.borderRightWidth,10)||0)):document.documentElement.currentStyle&&c.currentStyle&&(b.top=parseInt(c.currentStyle.borderTopWidth,10)||0,b.bottom=parseInt(c.currentStyle.borderBottomWidth,10)||0,b.left=parseInt(c.currentStyle.borderLeftWidth,10)||0,b.right=parseInt(c.currentStyle.borderRightWidth,10)||0),b},a.prototype.onRemove=function(){this.div_&&(this.div_.parentNode.removeChild(this.div_),this.div_=null)},a.prototype.draw=function(){this.createInfoBoxDiv_();var a=this.getProjection().fromLatLngToDivPixel(this.position_);this.div_.style.left=a.x+this.pixelOffset_.width+"px",this.alignBottom_?this.div_.style.bottom=-(a.y+this.pixelOffset_.height)+"px":this.div_.style.top=a.y+this.pixelOffset_.height+"px",this.div_.style.visibility=this.isHidden_?"hidden":"visible"},a.prototype.setOptions=function(a){"undefined"!=typeof a.boxClass&&(this.boxClass_=a.boxClass,this.setBoxStyle_()),"undefined"!=typeof a.boxStyle&&(this.boxStyle_=a.boxStyle,this.setBoxStyle_()),"undefined"!=typeof a.content&&this.setContent(a.content),"undefined"!=typeof a.disableAutoPan&&(this.disableAutoPan_=a.disableAutoPan),"undefined"!=typeof a.maxWidth&&(this.maxWidth_=a.maxWidth),"undefined"!=typeof a.pixelOffset&&(this.pixelOffset_=a.pixelOffset),"undefined"!=typeof a.alignBottom&&(this.alignBottom_=a.alignBottom),"undefined"!=typeof a.position&&this.setPosition(a.position),"undefined"!=typeof a.zIndex&&this.setZIndex(a.zIndex),"undefined"!=typeof a.closeBoxMargin&&(this.closeBoxMargin_=a.closeBoxMargin),"undefined"!=typeof a.closeBoxURL&&(this.closeBoxURL_=a.closeBoxURL),"undefined"!=typeof a.infoBoxClearance&&(this.infoBoxClearance_=a.infoBoxClearance),"undefined"!=typeof a.isHidden&&(this.isHidden_=a.isHidden),"undefined"!=typeof a.visible&&(this.isHidden_=!a.visible),"undefined"!=typeof a.enableEventPropagation&&(this.enableEventPropagation_=a.enableEventPropagation),this.div_&&this.draw()},a.prototype.setContent=function(a){this.content_=a,this.div_&&(this.closeListener_&&(google.maps.event.removeListener(this.closeListener_),this.closeListener_=null),this.fixedWidthSet_||(this.div_.style.width=""),"undefined"==typeof a.nodeType?this.div_.innerHTML=this.getCloseBoxImg_()+a:(this.div_.innerHTML=this.getCloseBoxImg_(),this.div_.appendChild(a)),this.fixedWidthSet_||(this.div_.style.width=this.div_.offsetWidth+"px","undefined"==typeof a.nodeType?this.div_.innerHTML=this.getCloseBoxImg_()+a:(this.div_.innerHTML=this.getCloseBoxImg_(),this.div_.appendChild(a))),this.addClickHandler_()),google.maps.event.trigger(this,"content_changed")},a.prototype.setPosition=function(a){this.position_=a,this.div_&&this.draw(),google.maps.event.trigger(this,"position_changed")},a.prototype.setZIndex=function(a){this.zIndex_=a,this.div_&&(this.div_.style.zIndex=a),google.maps.event.trigger(this,"zindex_changed")},a.prototype.setVisible=function(a){this.isHidden_=!a,this.div_&&(this.div_.style.visibility=this.isHidden_?"hidden":"visible")},a.prototype.getContent=function(){return this.content_},a.prototype.getPosition=function(){return this.position_},a.prototype.getZIndex=function(){return this.zIndex_},a.prototype.getVisible=function(){var a;return a="undefined"==typeof this.getMap()||null===this.getMap()?!1:!this.isHidden_},a.prototype.show=function(){this.isHidden_=!1,this.div_&&(this.div_.style.visibility="visible")},a.prototype.hide=function(){this.isHidden_=!0,this.div_&&(this.div_.style.visibility="hidden")},a.prototype.open=function(a,b){var c=this;b&&(this.position_=b.getPosition(),this.moveListener_=google.maps.event.addListener(b,"position_changed",function(){c.setPosition(this.getPosition())})),this.setMap(a),this.div_&&this.panBox_()},a.prototype.close=function(){var a;if(this.closeListener_&&(google.maps.event.removeListener(this.closeListener_),this.closeListener_=null),this.eventListeners_){for(a=0;a<this.eventListeners_.length;a++)google.maps.event.removeListener(this.eventListeners_[a]);this.eventListeners_=null}this.moveListener_&&(google.maps.event.removeListener(this.moveListener_),this.moveListener_=null),this.contextListener_&&(google.maps.event.removeListener(this.contextListener_),this.contextListener_=null),this.setMap(null)},b.prototype.onAdd=function(){var a,b,c=this;this.div_=document.createElement("div"),this.div_.className=this.className_,this.visible_&&this.show(),this.getPanes().overlayMouseTarget.appendChild(this.div_),this.boundsChangedListener_=google.maps.event.addListener(this.getMap(),"bounds_changed",function(){b=a}),google.maps.event.addDomListener(this.div_,"mousedown",function(){a=!0,b=!1}),google.maps.event.addDomListener(this.div_,"click",function(d){if(a=!1,!b){var e,f,g=c.cluster_.getMarkerClusterer();google.maps.event.trigger(g,"click",c.cluster_),google.maps.event.trigger(g,"clusterclick",c.cluster_),g.getZoomOnClick()&&(f=g.getMaxZoom(),e=c.cluster_.getBounds(),g.getMap().fitBounds(e),setTimeout(function(){g.getMap().fitBounds(e),null!==f&&g.getMap().getZoom()>f&&g.getMap().setZoom(f+1)},100)),d.cancelBubble=!0,d.stopPropagation&&d.stopPropagation()}}),google.maps.event.addDomListener(this.div_,"mouseover",function(){var a=c.cluster_.getMarkerClusterer();google.maps.event.trigger(a,"mouseover",c.cluster_)}),google.maps.event.addDomListener(this.div_,"mouseout",function(){var a=c.cluster_.getMarkerClusterer();google.maps.event.trigger(a,"mouseout",c.cluster_)})},b.prototype.onRemove=function(){this.div_&&this.div_.parentNode&&(this.hide(),google.maps.event.removeListener(this.boundsChangedListener_),google.maps.event.clearInstanceListeners(this.div_),this.div_.parentNode.removeChild(this.div_),this.div_=null)},b.prototype.draw=function(){if(this.visible_){var a=this.getPosFromLatLng_(this.center_);this.div_.style.top=a.y+"px",this.div_.style.left=a.x+"px"}},b.prototype.hide=function(){this.div_&&(this.div_.style.display="none"),this.visible_=!1},b.prototype.show=function(){if(this.div_){var a="",b=this.backgroundPosition_.split(" "),c=parseInt(b[0].trim(),10),d=parseInt(b[1].trim(),10),e=this.getPosFromLatLng_(this.center_);this.div_.style.cssText=this.createCss(e),a="<img src='"+this.url_+"' style='position: absolute; top: "+d+"px; left: "+c+"px; ",this.cluster_.getMarkerClusterer().enableRetinaIcons_||(a+="clip: rect("+-1*d+"px, "+(-1*c+this.width_)+"px, "+(-1*d+this.height_)+"px, "+-1*c+"px);"),a+="'>",this.div_.innerHTML=a+"<div style='position: absolute;top: "+this.anchorText_[0]+"px;left: "+this.anchorText_[1]+"px;color: "+this.textColor_+";font-size: "+this.textSize_+"px;font-family: "+this.fontFamily_+";font-weight: "+this.fontWeight_+";font-style: "+this.fontStyle_+";text-decoration: "+this.textDecoration_+";text-align: center;width: "+this.width_+"px;line-height:"+this.height_+"px;'>"+this.sums_.text+"</div>",this.div_.title="undefined"==typeof this.sums_.title||""===this.sums_.title?this.cluster_.getMarkerClusterer().getTitle():this.sums_.title,this.div_.style.display=""}this.visible_=!0},b.prototype.useStyle=function(a){this.sums_=a;var b=Math.max(0,a.index-1);b=Math.min(this.styles_.length-1,b);var c=this.styles_[b];this.url_=c.url,this.height_=c.height,this.width_=c.width,this.anchorText_=c.anchorText||[0,0],this.anchorIcon_=c.anchorIcon||[parseInt(this.height_/2,10),parseInt(this.width_/2,10)],this.textColor_=c.textColor||"black",this.textSize_=c.textSize||11,this.textDecoration_=c.textDecoration||"none",this.fontWeight_=c.fontWeight||"bold",this.fontStyle_=c.fontStyle||"normal",this.fontFamily_=c.fontFamily||"Arial,sans-serif",this.backgroundPosition_=c.backgroundPosition||"0 0"},b.prototype.setCenter=function(a){this.center_=a},b.prototype.createCss=function(a){var b=[];return b.push("cursor: pointer;"),b.push("position: absolute; top: "+a.y+"px; left: "+a.x+"px;"),b.push("width: "+this.width_+"px; height: "+this.height_+"px;"),b.join("")},b.prototype.getPosFromLatLng_=function(a){var b=this.getProjection().fromLatLngToDivPixel(a);return b.x-=this.anchorIcon_[1],b.y-=this.anchorIcon_[0],b.x=parseInt(b.x,10),b.y=parseInt(b.y,10),b},c.prototype.getSize=function(){return this.markers_.length},c.prototype.getMarkers=function(){return this.markers_},c.prototype.getCenter=function(){return this.center_},c.prototype.getMap=function(){return this.map_},c.prototype.getMarkerClusterer=function(){return this.markerClusterer_},c.prototype.getBounds=function(){var a,b=new google.maps.LatLngBounds(this.center_,this.center_),c=this.getMarkers();for(a=0;a<c.length;a++)b.extend(c[a].getPosition());return b},c.prototype.remove=function(){this.clusterIcon_.setMap(null),this.markers_=[],delete this.markers_},c.prototype.addMarker=function(a){var b,c,d;if(this.isMarkerAlreadyAdded_(a))return!1;if(this.center_){if(this.averageCenter_){var e=this.markers_.length+1,f=(this.center_.lat()*(e-1)+a.getPosition().lat())/e,g=(this.center_.lng()*(e-1)+a.getPosition().lng())/e;this.center_=new google.maps.LatLng(f,g),this.calculateBounds_()}}else this.center_=a.getPosition(),this.calculateBounds_();if(a.isAdded=!0,this.markers_.push(a),c=this.markers_.length,d=this.markerClusterer_.getMaxZoom(),null!==d&&this.map_.getZoom()>d)a.getMap()!==this.map_&&a.setMap(this.map_);else if(c<this.minClusterSize_)a.getMap()!==this.map_&&a.setMap(this.map_);else if(c===this.minClusterSize_)for(b=0;c>b;b++)this.markers_[b].setMap(null);else a.setMap(null);return this.updateIcon_(),!0},c.prototype.isMarkerInClusterBounds=function(a){return this.bounds_.contains(a.getPosition())},c.prototype.calculateBounds_=function(){var a=new google.maps.LatLngBounds(this.center_,this.center_);this.bounds_=this.markerClusterer_.getExtendedBounds(a)},c.prototype.updateIcon_=function(){var a=this.markers_.length,b=this.markerClusterer_.getMaxZoom();if(null!==b&&this.map_.getZoom()>b)return void this.clusterIcon_.hide();if(a<this.minClusterSize_)return void this.clusterIcon_.hide();var c=this.markerClusterer_.getStyles().length,d=this.markerClusterer_.getCalculator()(this.markers_,c);
this.clusterIcon_.setCenter(this.center_),this.clusterIcon_.useStyle(d),this.clusterIcon_.show()},c.prototype.isMarkerAlreadyAdded_=function(a){var b;if(this.markers_.indexOf)return-1!==this.markers_.indexOf(a);for(b=0;b<this.markers_.length;b++)if(a===this.markers_[b])return!0;return!1},d.prototype.onAdd=function(){var a=this;this.activeMap_=this.getMap(),this.ready_=!0,this.repaint(),this.listeners_=[google.maps.event.addListener(this.getMap(),"zoom_changed",function(){a.resetViewport_(!1),(this.getZoom()===(this.get("minZoom")||0)||this.getZoom()===this.get("maxZoom"))&&google.maps.event.trigger(this,"idle")}),google.maps.event.addListener(this.getMap(),"idle",function(){a.redraw_()})]},d.prototype.onRemove=function(){var a;for(a=0;a<this.markers_.length;a++)this.markers_[a].getMap()!==this.activeMap_&&this.markers_[a].setMap(this.activeMap_);for(a=0;a<this.clusters_.length;a++)this.clusters_[a].remove();for(this.clusters_=[],a=0;a<this.listeners_.length;a++)google.maps.event.removeListener(this.listeners_[a]);this.listeners_=[],this.activeMap_=null,this.ready_=!1},d.prototype.draw=function(){},d.prototype.setupStyles_=function(){var a,b;if(!(this.styles_.length>0))for(a=0;a<this.imageSizes_.length;a++)b=this.imageSizes_[a],this.styles_.push({url:this.imagePath_+(a+1)+"."+this.imageExtension_,height:b,width:b})},d.prototype.fitMapToMarkers=function(){var a,b=this.getMarkers(),c=new google.maps.LatLngBounds;for(a=0;a<b.length;a++)c.extend(b[a].getPosition());this.getMap().fitBounds(c)},d.prototype.getGridSize=function(){return this.gridSize_},d.prototype.setGridSize=function(a){this.gridSize_=a},d.prototype.getMinimumClusterSize=function(){return this.minClusterSize_},d.prototype.setMinimumClusterSize=function(a){this.minClusterSize_=a},d.prototype.getMaxZoom=function(){return this.maxZoom_},d.prototype.setMaxZoom=function(a){this.maxZoom_=a},d.prototype.getStyles=function(){return this.styles_},d.prototype.setStyles=function(a){this.styles_=a},d.prototype.getTitle=function(){return this.title_},d.prototype.setTitle=function(a){this.title_=a},d.prototype.getZoomOnClick=function(){return this.zoomOnClick_},d.prototype.setZoomOnClick=function(a){this.zoomOnClick_=a},d.prototype.getAverageCenter=function(){return this.averageCenter_},d.prototype.setAverageCenter=function(a){this.averageCenter_=a},d.prototype.getIgnoreHidden=function(){return this.ignoreHidden_},d.prototype.setIgnoreHidden=function(a){this.ignoreHidden_=a},d.prototype.getEnableRetinaIcons=function(){return this.enableRetinaIcons_},d.prototype.setEnableRetinaIcons=function(a){this.enableRetinaIcons_=a},d.prototype.getImageExtension=function(){return this.imageExtension_},d.prototype.setImageExtension=function(a){this.imageExtension_=a},d.prototype.getImagePath=function(){return this.imagePath_},d.prototype.setImagePath=function(a){this.imagePath_=a},d.prototype.getImageSizes=function(){return this.imageSizes_},d.prototype.setImageSizes=function(a){this.imageSizes_=a},d.prototype.getCalculator=function(){return this.calculator_},d.prototype.setCalculator=function(a){this.calculator_=a},d.prototype.getBatchSizeIE=function(){return this.batchSizeIE_},d.prototype.setBatchSizeIE=function(a){this.batchSizeIE_=a},d.prototype.getClusterClass=function(){return this.clusterClass_},d.prototype.setClusterClass=function(a){this.clusterClass_=a},d.prototype.getMarkers=function(){return this.markers_},d.prototype.getTotalMarkers=function(){return this.markers_.length},d.prototype.getClusters=function(){return this.clusters_},d.prototype.getTotalClusters=function(){return this.clusters_.length},d.prototype.addMarker=function(a,b){this.pushMarkerTo_(a),b||this.redraw_()},d.prototype.addMarkers=function(a,b){var c;for(c in a)a.hasOwnProperty(c)&&this.pushMarkerTo_(a[c]);b||this.redraw_()},d.prototype.pushMarkerTo_=function(a){if(a.getDraggable()){var b=this;google.maps.event.addListener(a,"dragend",function(){b.ready_&&(this.isAdded=!1,b.repaint())})}a.isAdded=!1,this.markers_.push(a)},d.prototype.removeMarker=function(a,b){var c=this.removeMarker_(a);return!b&&c&&this.repaint(),c},d.prototype.removeMarkers=function(a,b){var c,d,e=!1;for(c=0;c<a.length;c++)d=this.removeMarker_(a[c]),e=e||d;return!b&&e&&this.repaint(),e},d.prototype.removeMarker_=function(a){var b,c=-1;if(this.markers_.indexOf)c=this.markers_.indexOf(a);else for(b=0;b<this.markers_.length;b++)if(a===this.markers_[b]){c=b;break}return-1===c?!1:(a.setMap(null),this.markers_.splice(c,1),!0)},d.prototype.clearMarkers=function(){this.resetViewport_(!0),this.markers_=[]},d.prototype.repaint=function(){var a=this.clusters_.slice();this.clusters_=[],this.resetViewport_(!1),this.redraw_(),setTimeout(function(){var b;for(b=0;b<a.length;b++)a[b].remove()},0)},d.prototype.getExtendedBounds=function(a){var b=this.getProjection(),c=new google.maps.LatLng(a.getNorthEast().lat(),a.getNorthEast().lng()),d=new google.maps.LatLng(a.getSouthWest().lat(),a.getSouthWest().lng()),e=b.fromLatLngToDivPixel(c);e.x+=this.gridSize_,e.y-=this.gridSize_;var f=b.fromLatLngToDivPixel(d);f.x-=this.gridSize_,f.y+=this.gridSize_;var g=b.fromDivPixelToLatLng(e),h=b.fromDivPixelToLatLng(f);return a.extend(g),a.extend(h),a},d.prototype.redraw_=function(){this.createClusters_(0)},d.prototype.resetViewport_=function(a){var b,c;for(b=0;b<this.clusters_.length;b++)this.clusters_[b].remove();for(this.clusters_=[],b=0;b<this.markers_.length;b++)c=this.markers_[b],c.isAdded=!1,a&&c.setMap(null)},d.prototype.distanceBetweenPoints_=function(a,b){var c=6371,d=(b.lat()-a.lat())*Math.PI/180,e=(b.lng()-a.lng())*Math.PI/180,f=Math.sin(d/2)*Math.sin(d/2)+Math.cos(a.lat()*Math.PI/180)*Math.cos(b.lat()*Math.PI/180)*Math.sin(e/2)*Math.sin(e/2),g=2*Math.atan2(Math.sqrt(f),Math.sqrt(1-f)),h=c*g;return h},d.prototype.isMarkerInBounds_=function(a,b){return b.contains(a.getPosition())},d.prototype.addToClosestCluster_=function(a){var b,d,e,f,g=4e4,h=null;for(b=0;b<this.clusters_.length;b++)e=this.clusters_[b],f=e.getCenter(),f&&(d=this.distanceBetweenPoints_(f,a.getPosition()),g>d&&(g=d,h=e));h&&h.isMarkerInClusterBounds(a)?h.addMarker(a):(e=new c(this),e.addMarker(a),this.clusters_.push(e))},d.prototype.createClusters_=function(a){var b,c,d,e=this;if(this.ready_){0===a&&(google.maps.event.trigger(this,"clusteringbegin",this),"undefined"!=typeof this.timerRefStatic&&(clearTimeout(this.timerRefStatic),delete this.timerRefStatic)),d=this.getMap().getZoom()>3?new google.maps.LatLngBounds(this.getMap().getBounds().getSouthWest(),this.getMap().getBounds().getNorthEast()):new google.maps.LatLngBounds(new google.maps.LatLng(85.02070771743472,-178.48388434375),new google.maps.LatLng(-85.08136444384544,178.00048865625));var f=this.getExtendedBounds(d),g=Math.min(a+this.batchSize_,this.markers_.length);for(b=a;g>b;b++)c=this.markers_[b],!c.isAdded&&this.isMarkerInBounds_(c,f)&&(!this.ignoreHidden_||this.ignoreHidden_&&c.getVisible())&&this.addToClosestCluster_(c);g<this.markers_.length?this.timerRefStatic=setTimeout(function(){e.createClusters_(g)},0):(delete this.timerRefStatic,google.maps.event.trigger(this,"clusteringend",this))}},d.prototype.extend=function(a,b){return function(a){var b;for(b in a.prototype)this.prototype[b]=a.prototype[b];return this}.apply(a,[b])},d.CALCULATOR=function(a,b){for(var c=0,d="",e=a.length.toString(),f=e;0!==f;)f=parseInt(f/10,10),c++;return c=Math.min(c,b),{text:e,index:c,title:d}},d.BATCH_SIZE=2e3,d.BATCH_SIZE_IE=500,d.IMAGE_PATH="http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclustererplus/images/m",d.IMAGE_EXTENSION="png",d.IMAGE_SIZES=[53,56,66,78,90],"function"!=typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),e(f,google.maps.OverlayView),f.getSharedCross=function(a){var b;return"undefined"==typeof f.getSharedCross.crossDiv&&(b=document.createElement("img"),b.style.cssText="position: absolute; z-index: 1000002; display: none;",b.style.marginLeft="-8px",b.style.marginTop="-9px",b.src=a,f.getSharedCross.crossDiv=b),f.getSharedCross.crossDiv},f.prototype.onAdd=function(){var a,b,c,d,e,g,h,i=this,j=!1,k=!1,l=20,m="url("+this.handCursorURL_+")",n=function(a){a.preventDefault&&a.preventDefault(),a.cancelBubble=!0,a.stopPropagation&&a.stopPropagation()},o=function(){i.marker_.setAnimation(null)};this.getPanes().overlayImage.appendChild(this.labelDiv_),this.getPanes().overlayMouseTarget.appendChild(this.eventDiv_),"undefined"==typeof f.getSharedCross.processed&&(this.getPanes().overlayImage.appendChild(this.crossDiv_),f.getSharedCross.processed=!0),this.listeners_=[google.maps.event.addDomListener(this.eventDiv_,"mouseover",function(a){(i.marker_.getDraggable()||i.marker_.getClickable())&&(this.style.cursor="pointer",google.maps.event.trigger(i.marker_,"mouseover",a))}),google.maps.event.addDomListener(this.eventDiv_,"mouseout",function(a){!i.marker_.getDraggable()&&!i.marker_.getClickable()||k||(this.style.cursor=i.marker_.getCursor(),google.maps.event.trigger(i.marker_,"mouseout",a))}),google.maps.event.addDomListener(this.eventDiv_,"mousedown",function(a){k=!1,i.marker_.getDraggable()&&(j=!0,this.style.cursor=m),(i.marker_.getDraggable()||i.marker_.getClickable())&&(google.maps.event.trigger(i.marker_,"mousedown",a),n(a))}),google.maps.event.addDomListener(document,"mouseup",function(b){var c;if(j&&(j=!1,i.eventDiv_.style.cursor="pointer",google.maps.event.trigger(i.marker_,"mouseup",b)),k){if(e){c=i.getProjection().fromLatLngToDivPixel(i.marker_.getPosition()),c.y+=l,i.marker_.setPosition(i.getProjection().fromDivPixelToLatLng(c));try{i.marker_.setAnimation(google.maps.Animation.BOUNCE),setTimeout(o,1406)}catch(f){}}i.crossDiv_.style.display="none",i.marker_.setZIndex(a),d=!0,k=!1,b.latLng=i.marker_.getPosition(),google.maps.event.trigger(i.marker_,"dragend",b)}}),google.maps.event.addListener(i.marker_.getMap(),"mousemove",function(d){var f;j&&(k?(d.latLng=new google.maps.LatLng(d.latLng.lat()-b,d.latLng.lng()-c),f=i.getProjection().fromLatLngToDivPixel(d.latLng),e&&(i.crossDiv_.style.left=f.x+"px",i.crossDiv_.style.top=f.y+"px",i.crossDiv_.style.display="",f.y-=l),i.marker_.setPosition(i.getProjection().fromDivPixelToLatLng(f)),e&&(i.eventDiv_.style.top=f.y+l+"px"),google.maps.event.trigger(i.marker_,"drag",d)):(b=d.latLng.lat()-i.marker_.getPosition().lat(),c=d.latLng.lng()-i.marker_.getPosition().lng(),a=i.marker_.getZIndex(),g=i.marker_.getPosition(),h=i.marker_.getMap().getCenter(),e=i.marker_.get("raiseOnDrag"),k=!0,i.marker_.setZIndex(1e6),d.latLng=i.marker_.getPosition(),google.maps.event.trigger(i.marker_,"dragstart",d)))}),google.maps.event.addDomListener(document,"keydown",function(a){k&&27===a.keyCode&&(e=!1,i.marker_.setPosition(g),i.marker_.getMap().setCenter(h),google.maps.event.trigger(document,"mouseup",a))}),google.maps.event.addDomListener(this.eventDiv_,"click",function(a){(i.marker_.getDraggable()||i.marker_.getClickable())&&(d?d=!1:(google.maps.event.trigger(i.marker_,"click",a),n(a)))}),google.maps.event.addDomListener(this.eventDiv_,"dblclick",function(a){(i.marker_.getDraggable()||i.marker_.getClickable())&&(google.maps.event.trigger(i.marker_,"dblclick",a),n(a))}),google.maps.event.addListener(this.marker_,"dragstart",function(){k||(e=this.get("raiseOnDrag"))}),google.maps.event.addListener(this.marker_,"drag",function(){k||e&&(i.setPosition(l),i.labelDiv_.style.zIndex=1e6+(this.get("labelInBackground")?-1:1))}),google.maps.event.addListener(this.marker_,"dragend",function(){k||e&&i.setPosition(0)}),google.maps.event.addListener(this.marker_,"position_changed",function(){i.setPosition()}),google.maps.event.addListener(this.marker_,"zindex_changed",function(){i.setZIndex()}),google.maps.event.addListener(this.marker_,"visible_changed",function(){i.setVisible()}),google.maps.event.addListener(this.marker_,"labelvisible_changed",function(){i.setVisible()}),google.maps.event.addListener(this.marker_,"title_changed",function(){i.setTitle()}),google.maps.event.addListener(this.marker_,"labelcontent_changed",function(){i.setContent()}),google.maps.event.addListener(this.marker_,"labelanchor_changed",function(){i.setAnchor()}),google.maps.event.addListener(this.marker_,"labelclass_changed",function(){i.setStyles()}),google.maps.event.addListener(this.marker_,"labelstyle_changed",function(){i.setStyles()})]},f.prototype.onRemove=function(){var a;for(null!==this.labelDiv_.parentNode&&this.labelDiv_.parentNode.removeChild(this.labelDiv_),null!==this.eventDiv_.parentNode&&this.eventDiv_.parentNode.removeChild(this.eventDiv_),a=0;a<this.listeners_.length;a++)google.maps.event.removeListener(this.listeners_[a])},f.prototype.draw=function(){this.setContent(),this.setTitle(),this.setStyles()},f.prototype.setContent=function(){var a=this.marker_.get("labelContent");"undefined"==typeof a.nodeType?(this.labelDiv_.innerHTML=a,this.eventDiv_.innerHTML=this.labelDiv_.innerHTML):(this.labelDiv_.innerHTML="",this.labelDiv_.appendChild(a),a=a.cloneNode(!0),this.eventDiv_.appendChild(a))},f.prototype.setTitle=function(){this.eventDiv_.title=this.marker_.getTitle()||""},f.prototype.setStyles=function(){var a,b;this.labelDiv_.className=this.marker_.get("labelClass"),this.eventDiv_.className=this.labelDiv_.className,this.labelDiv_.style.cssText="",this.eventDiv_.style.cssText="",b=this.marker_.get("labelStyle");for(a in b)b.hasOwnProperty(a)&&(this.labelDiv_.style[a]=b[a],this.eventDiv_.style[a]=b[a]);this.setMandatoryStyles()},f.prototype.setMandatoryStyles=function(){this.labelDiv_.style.position="absolute",this.labelDiv_.style.overflow="hidden","undefined"!=typeof this.labelDiv_.style.opacity&&""!==this.labelDiv_.style.opacity&&(this.labelDiv_.style.MsFilter='"progid:DXImageTransform.Microsoft.Alpha(opacity='+100*this.labelDiv_.style.opacity+')"',this.labelDiv_.style.filter="alpha(opacity="+100*this.labelDiv_.style.opacity+")"),this.eventDiv_.style.position=this.labelDiv_.style.position,this.eventDiv_.style.overflow=this.labelDiv_.style.overflow,this.eventDiv_.style.opacity=.01,this.eventDiv_.style.MsFilter='"progid:DXImageTransform.Microsoft.Alpha(opacity=1)"',this.eventDiv_.style.filter="alpha(opacity=1)",this.setAnchor(),this.setPosition(),this.setVisible()},f.prototype.setAnchor=function(){var a=this.marker_.get("labelAnchor");this.labelDiv_.style.marginLeft=-a.x+"px",this.labelDiv_.style.marginTop=-a.y+"px",this.eventDiv_.style.marginLeft=-a.x+"px",this.eventDiv_.style.marginTop=-a.y+"px"},f.prototype.setPosition=function(a){var b=this.getProjection().fromLatLngToDivPixel(this.marker_.getPosition());"undefined"==typeof a&&(a=0),this.labelDiv_.style.left=Math.round(b.x)+"px",this.labelDiv_.style.top=Math.round(b.y-a)+"px",this.eventDiv_.style.left=this.labelDiv_.style.left,this.eventDiv_.style.top=this.labelDiv_.style.top,this.setZIndex()},f.prototype.setZIndex=function(){var a=this.marker_.get("labelInBackground")?-1:1;"undefined"==typeof this.marker_.getZIndex()?(this.labelDiv_.style.zIndex=parseInt(this.labelDiv_.style.top,10)+a,this.eventDiv_.style.zIndex=this.labelDiv_.style.zIndex):(this.labelDiv_.style.zIndex=this.marker_.getZIndex()+a,this.eventDiv_.style.zIndex=this.labelDiv_.style.zIndex)},f.prototype.setVisible=function(){this.labelDiv_.style.display=this.marker_.get("labelVisible")&&this.marker_.getVisible()?"block":"none",this.eventDiv_.style.display=this.labelDiv_.style.display},e(g,google.maps.Marker),g.prototype.setMap=function(a){google.maps.Marker.prototype.setMap.apply(this,arguments),this.label.setMap(a)},window.InfoBox=a,window.Cluster=c,window.ClusterIcon=b,window.MarkerClusterer=d,window.MarkerLabel_=f,window.MarkerWithLabel=g})}}),angular.module("google-maps.extensions".ns()).service("ExtendMarkerClusterer".ns(),function(){return{init:_.once(function(){(function(){var a={}.hasOwnProperty,b=function(b,c){function d(){this.constructor=b}for(var e in c)a.call(c,e)&&(b[e]=c[e]);return d.prototype=c.prototype,b.prototype=new d,b.__super__=c.prototype,b};window.NgMapCluster=function(a){function c(a){c.__super__.constructor.call(this,a),this.markers_=new window.PropMap}return b(c,a),c.prototype.addMarker=function(a){var b,c;if(this.isMarkerAlreadyAdded_(a)){var d=this.markers_.get(a.key);if(d.getPosition().lat()==a.getPosition().lat()&&d.getPosition().lon()==a.getPosition().lon())return!1}if(this.center_){if(this.averageCenter_){var e=this.markers_.length+1,f=(this.center_.lat()*(e-1)+a.getPosition().lat())/e,g=(this.center_.lng()*(e-1)+a.getPosition().lng())/e;this.center_=new google.maps.LatLng(f,g),this.calculateBounds_()}}else this.center_=a.getPosition(),this.calculateBounds_();return a.isAdded=!0,this.markers_.push(a),b=this.markers_.length,c=this.markerClusterer_.getMaxZoom(),null!==c&&this.map_.getZoom()>c?a.getMap()!==this.map_&&a.setMap(this.map_):b<this.minClusterSize_?a.getMap()!==this.map_&&a.setMap(this.map_):b===this.minClusterSize_?this.markers_.values().forEach(function(a){a.setMap(null)}):a.setMap(null),!0},c.prototype.isMarkerAlreadyAdded_=function(a){return _.isNullOrUndefined(this.markers_.get(a.key))},c.prototype.getBounds=function(){var a,b=new google.maps.LatLngBounds(this.center_,this.center_),c=this.getMarkers().values();for(a=0;a<c.length;a++)b.extend(c[a].getPosition());return b},c.prototype.remove=function(){this.clusterIcon_.setMap(null),this.markers_=new PropMap,delete this.markers_},c}(Cluster),window.NgMapMarkerClusterer=function(a){function c(a,b,d){c.__super__.constructor.call(this,a,b,d),this.markers_=new window.PropMap}return b(c,a),c.prototype.clearMarkers=function(){this.resetViewport_(!0),this.markers_=new PropMap},c.prototype.removeMarker_=function(a){return this.markers_.get(a.key)?(a.setMap(null),this.markers_.remove(a.key),!0):!1},c.prototype.createClusters_=function(a){var b,c,d,e=this;if(this.ready_){0===a&&(google.maps.event.trigger(this,"clusteringbegin",this),"undefined"!=typeof this.timerRefStatic&&(clearTimeout(this.timerRefStatic),delete this.timerRefStatic)),d=this.getMap().getZoom()>3?new google.maps.LatLngBounds(this.getMap().getBounds().getSouthWest(),this.getMap().getBounds().getNorthEast()):new google.maps.LatLngBounds(new google.maps.LatLng(85.02070771743472,-178.48388434375),new google.maps.LatLng(-85.08136444384544,178.00048865625));var f=this.getExtendedBounds(d),g=Math.min(a+this.batchSize_,this.markers_.length);for(b=a;g>b;b++)c=this.markers_.values()[b],!c.isAdded&&this.isMarkerInBounds_(c,f)&&(!this.ignoreHidden_||this.ignoreHidden_&&c.getVisible())&&this.addToClosestCluster_(c);if(g<this.markers_.length)this.timerRefStatic=setTimeout(function(){e.createClusters_(g)},0);else{for(b=0;b<this.clusters_.length;b++)this.clusters_[b].updateIcon_();delete this.timerRefStatic,google.maps.event.trigger(this,"clusteringend",this)}}},c.prototype.addToClosestCluster_=function(a){var b,c,d,e,f=4e4,g=null;for(b=0;b<this.clusters_.length;b++)d=this.clusters_[b],e=d.getCenter(),e&&(c=this.distanceBetweenPoints_(e,a.getPosition()),f>c&&(f=c,g=d));g&&g.isMarkerInClusterBounds(a)?g.addMarker(a):(d=new NgMapCluster(this),d.addMarker(a),this.clusters_.push(d))},c.prototype.redraw_=function(){this.createClusters_(0)},c.prototype.resetViewport_=function(a){var b;for(b=0;b<this.clusters_.length;b++)this.clusters_[b].remove();this.clusters_=[],this.markers_.values().forEach(function(b){b.isAdded=!1,a&&b.setMap(null)})},c.prototype.extend=function(a,b){return function(a){var b;for(b in a.prototype)"constructor"!==b&&(this.prototype[b]=a.prototype[b]);return this}.apply(a,[b])},c}(MarkerClusterer)}).call(this)})}});
/*
 AngularJS v1.3.0
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(q,g,r){'use strict';function F(a){var d=[];t(d,g.noop).chars(a);return d.join("")}function m(a){var d={};a=a.split(",");var c;for(c=0;c<a.length;c++)d[a[c]]=!0;return d}function G(a,d){function c(a,b,c,h){b=g.lowercase(b);if(u[b])for(;f.last()&&v[f.last()];)e("",f.last());w[b]&&f.last()==b&&e("",b);(h=x[b]||!!h)||f.push(b);var n={};c.replace(H,function(a,b,d,c,e){n[b]=s(d||c||e||"")});d.start&&d.start(b,n,h)}function e(a,b){var c=0,e;if(b=g.lowercase(b))for(c=f.length-1;0<=c&&f[c]!=b;c--);
if(0<=c){for(e=f.length-1;e>=c;e--)d.end&&d.end(f[e]);f.length=c}}"string"!==typeof a&&(a=null===a||"undefined"===typeof a?"":""+a);var b,l,f=[],n=a,h;for(f.last=function(){return f[f.length-1]};a;){h="";l=!0;if(f.last()&&y[f.last()])a=a.replace(new RegExp("(.*)<\\s*\\/\\s*"+f.last()+"[^>]*>","i"),function(a,b){b=b.replace(I,"$1").replace(J,"$1");d.chars&&d.chars(s(b));return""}),e("",f.last());else{if(0===a.indexOf("\x3c!--"))b=a.indexOf("--",4),0<=b&&a.lastIndexOf("--\x3e",b)===b&&(d.comment&&d.comment(a.substring(4,
b)),a=a.substring(b+3),l=!1);else if(z.test(a)){if(b=a.match(z))a=a.replace(b[0],""),l=!1}else if(K.test(a)){if(b=a.match(A))a=a.substring(b[0].length),b[0].replace(A,e),l=!1}else L.test(a)&&((b=a.match(B))?(b[4]&&(a=a.substring(b[0].length),b[0].replace(B,c)),l=!1):(h+="<",a=a.substring(1)));l&&(b=a.indexOf("<"),h+=0>b?a:a.substring(0,b),a=0>b?"":a.substring(b),d.chars&&d.chars(s(h)))}if(a==n)throw M("badparse",a);n=a}e()}function s(a){if(!a)return"";var d=N.exec(a);a=d[1];var c=d[3];if(d=d[2])p.innerHTML=
d.replace(/</g,"&lt;"),d="textContent"in p?p.textContent:p.innerText;return a+d+c}function C(a){return a.replace(/&/g,"&amp;").replace(O,function(a){var c=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(c-55296)+(a-56320)+65536)+";"}).replace(P,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function t(a,d){var c=!1,e=g.bind(a,a.push);return{start:function(a,l,f){a=g.lowercase(a);!c&&y[a]&&(c=a);c||!0!==D[a]||(e("<"),e(a),g.forEach(l,function(c,f){var k=
g.lowercase(f),l="img"===a&&"src"===k||"background"===k;!0!==Q[k]||!0===E[k]&&!d(c,l)||(e(" "),e(f),e('="'),e(C(c)),e('"'))}),e(f?"/>":">"))},end:function(a){a=g.lowercase(a);c||!0!==D[a]||(e("</"),e(a),e(">"));a==c&&(c=!1)},chars:function(a){c||e(C(a))}}}var M=g.$$minErr("$sanitize"),B=/^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,A=/^<\/\s*([\w:-]+)[^>]*>/,H=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,L=/^</,
K=/^<\//,I=/\x3c!--(.*?)--\x3e/g,z=/<!DOCTYPE([^>]*?)>/i,J=/<!\[CDATA\[(.*?)]]\x3e/g,O=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,P=/([^\#-~| |!])/g,x=m("area,br,col,hr,img,wbr");q=m("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");r=m("rp,rt");var w=g.extend({},r,q),u=g.extend({},q,m("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),v=g.extend({},r,m("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
y=m("script,style"),D=g.extend({},x,u,v,w),E=m("background,cite,href,longdesc,src,usemap"),Q=g.extend({},E,m("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width")),p=document.createElement("pre"),N=/^(\s*)([\s\S]*?)(\s*)$/;g.module("ngSanitize",[]).provider("$sanitize",
function(){this.$get=["$$sanitizeUri",function(a){return function(d){var c=[];G(d,t(c,function(c,b){return!/^unsafe/.test(a(c,b))}));return c.join("")}}]});g.module("ngSanitize").filter("linky",["$sanitize",function(a){var d=/((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"]/,c=/^mailto:/;return function(e,b){function l(a){a&&k.push(F(a))}function f(a,c){k.push("<a ");g.isDefined(b)&&(k.push('target="'),k.push(b),k.push('" '));k.push('href="');k.push(a);k.push('">');l(c);k.push("</a>")}
if(!e)return e;for(var n,h=e,k=[],m,p;n=h.match(d);)m=n[0],n[2]==n[3]&&(m="mailto:"+m),p=n.index,l(h.substr(0,p)),f(m,n[0].replace(c,"")),h=h.substring(p+n[0].length);l(h);return a(k.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map

/*
 AngularJS v1.3.0
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(p,e,B){'use strict';function u(q,h,f){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,b,c,g,x){function y(){k&&(f.cancel(k),k=null);l&&(l.$destroy(),l=null);m&&(k=f.leave(m),k.then(function(){k=null}),m=null)}function w(){var c=q.current&&q.current.locals;if(e.isDefined(c&&c.$template)){var c=a.$new(),g=q.current;m=x(c,function(c){f.enter(c,null,m||b).then(function(){!e.isDefined(s)||s&&!a.$eval(s)||h()});y()});l=g.scope=c;l.$emit("$viewContentLoaded");
l.$eval(v)}else y()}var l,m,k,s=c.autoscroll,v=c.onload||"";a.$on("$routeChangeSuccess",w);w()}}}function z(e,h,f){return{restrict:"ECA",priority:-400,link:function(a,b){var c=f.current,g=c.locals;b.html(g.$template);var x=e(b.contents());c.controller&&(g.$scope=a,g=h(c.controller,g),c.controllerAs&&(a[c.controllerAs]=g),b.data("$ngControllerController",g),b.children().data("$ngControllerController",g));x(a)}}}p=e.module("ngRoute",["ng"]).provider("$route",function(){function q(a,b){return e.extend(new (e.extend(function(){},
{prototype:a})),b)}function h(a,e){var c=e.caseInsensitiveMatch,g={originalPath:a,regexp:a},f=g.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,e,c,b){a="?"===b?b:null;b="*"===b?b:null;f.push({name:c,optional:!!a});e=e||"";return""+(a?"":e)+"(?:"+(a?e:"")+(b&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");g.regexp=new RegExp("^"+a+"$",c?"i":"");return g}var f={};this.when=function(a,b){f[a]=e.extend({reloadOnSearch:!0},b,a&&h(a,b));if(a){var c=
"/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";f[c]=e.extend({redirectTo:a},h(c,b))}return this};this.otherwise=function(a){"string"===typeof a&&(a={redirectTo:a});this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(a,b,c,g,h,p,w){function l(b){var d=r.current;(u=(n=k())&&d&&n.$$route===d.$$route&&e.equals(n.pathParams,d.pathParams)&&!n.reloadOnSearch&&!v)||!d&&!n||a.$broadcast("$routeChangeStart",n,d).defaultPrevented&&
b&&b.preventDefault()}function m(){var t=r.current,d=n;if(u)t.params=d.params,e.copy(t.params,c),a.$broadcast("$routeUpdate",t);else if(d||t)v=!1,(r.current=d)&&d.redirectTo&&(e.isString(d.redirectTo)?b.path(s(d.redirectTo,d.params)).search(d.params).replace():b.url(d.redirectTo(d.pathParams,b.path(),b.search())).replace()),g.when(d).then(function(){if(d){var a=e.extend({},d.resolve),b,c;e.forEach(a,function(d,b){a[b]=e.isString(d)?h.get(d):h.invoke(d,null,null,b)});e.isDefined(b=d.template)?e.isFunction(b)&&
(b=b(d.params)):e.isDefined(c=d.templateUrl)&&(e.isFunction(c)&&(c=c(d.params)),c=w.getTrustedResourceUrl(c),e.isDefined(c)&&(d.loadedTemplateUrl=c,b=p(c)));e.isDefined(b)&&(a.$template=b);return g.all(a)}}).then(function(b){d==r.current&&(d&&(d.locals=b,e.copy(d.params,c)),a.$broadcast("$routeChangeSuccess",d,t))},function(b){d==r.current&&a.$broadcast("$routeChangeError",d,t,b)})}function k(){var a,d;e.forEach(f,function(c,g){var f;if(f=!d){var h=b.path();f=c.keys;var l={};if(c.regexp)if(h=c.regexp.exec(h)){for(var k=
1,m=h.length;k<m;++k){var n=f[k-1],p=h[k];n&&p&&(l[n.name]=p)}f=l}else f=null;else f=null;f=a=f}f&&(d=q(c,{params:e.extend({},b.search(),a),pathParams:a}),d.$$route=c)});return d||f[null]&&q(f[null],{params:{},pathParams:{}})}function s(a,b){var c=[];e.forEach((a||"").split(":"),function(a,e){if(0===e)c.push(a);else{var f=a.match(/(\w+)(.*)/),g=f[1];c.push(b[g]);c.push(f[2]||"");delete b[g]}});return c.join("")}var v=!1,n,u,r={routes:f,reload:function(){v=!0;a.$evalAsync(function(){l();m()})},updateParams:function(a){if(this.current&&
this.current.$$route){var c={},f=this;e.forEach(Object.keys(a),function(b){f.current.pathParams[b]||(c[b]=a[b])});a=e.extend({},this.current.params,a);b.path(s(this.current.$$route.originalPath,a));b.search(e.extend({},b.search(),c))}else throw A("norout");}};a.$on("$locationChangeStart",l);a.$on("$locationChangeSuccess",m);return r}]});var A=e.$$minErr("ngRoute");p.provider("$routeParams",function(){this.$get=function(){return{}}});p.directive("ngView",u);p.directive("ngView",z);u.$inject=["$route",
"$anchorScroll","$animate"];z.$inject=["$compile","$controller","$route"]})(window,window.angular);
//# sourceMappingURL=angular-route.min.js.map

'use strict';

/**
 * A directive for adding google places autocomplete to a text box
 * google places autocomplete info: https://developers.google.com/maps/documentation/javascript/places
 *
 * Usage:
 *
 * <input type="text"  ng-autocomplete ng-model="autocomplete" options="options" details="details/>
 *
 * + ng-model - autocomplete textbox value
 *
 * + details - more detailed autocomplete result, includes address parts, latlng, etc. (Optional)
 *
 * + options - configuration for the autocomplete (Optional)
 *
 *       + types: type,        String, values can be 'geocode', 'establishment', '(regions)', or '(cities)'
 *       + bounds: bounds,     Google maps LatLngBounds Object, biases results to bounds, but may return results outside these bounds
 *       + country: country    String, ISO 3166-1 Alpha-2 compatible country code. examples; 'ca', 'us', 'gb'
 *       + watchEnter:         Boolean, true; on Enter select top autocomplete result. false(default); enter ends autocomplete
 *
 * example:
 *
 *    options = {
 *        types: '(cities)',
 *        country: 'ca'
 *    }
**/

angular.module( "ngAutocomplete", [])
  .directive('ngAutocomplete', function() {
    return {
      require: 'ngModel',
      scope: {
        ngModel: '=',
        options: '=?',
        details: '=?'
      },

      link: function(scope, element, attrs, controller) {

        //options for autocomplete
        var opts
        var watchEnter = false
        //convert options provided to opts
        var initOpts = function() {

          opts = {}
          if (scope.options) {

            if (scope.options.watchEnter !== true) {
              watchEnter = false
            } else {
              watchEnter = true
            }

            if (scope.options.types) {
              opts.types = []
              opts.types.push(scope.options.types)
              scope.gPlace.setTypes(opts.types)
            } else {
              scope.gPlace.setTypes([])
            }

            if (scope.options.bounds) {
              opts.bounds = scope.options.bounds
              scope.gPlace.setBounds(opts.bounds)
            } else {
              scope.gPlace.setBounds(null)
            }

            if (scope.options.country) {
              opts.componentRestrictions = {
                country: scope.options.country
              }
              scope.gPlace.setComponentRestrictions(opts.componentRestrictions)
            } else {
              scope.gPlace.setComponentRestrictions(null)
            }
          }
        }

        if (scope.gPlace == undefined) {
          scope.gPlace = new google.maps.places.Autocomplete(element[0], {});
        }
        google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
          var result = scope.gPlace.getPlace();
          if (result !== undefined) {
            if (result.address_components !== undefined) {

              scope.$apply(function() {

                scope.details = result;

                controller.$setViewValue(element.val());
              });
            }
            else {
              if (watchEnter) {
                getPlace(result)
              }
            }
          }
        })

        //function to get retrieve the autocompletes first result using the AutocompleteService 
        var getPlace = function(result) {
          var autocompleteService = new google.maps.places.AutocompleteService();
          if (result.name.length > 0){
            autocompleteService.getPlacePredictions(
              {
                input: result.name,
                offset: result.name.length
              },
              function listentoresult(list, status) {
                if(list == null || list.length == 0) {

                  scope.$apply(function() {
                    scope.details = null;
                  });

                } else {
                  var placesService = new google.maps.places.PlacesService(element[0]);
                  placesService.getDetails(
                    {'reference': list[0].reference},
                    function detailsresult(detailsResult, placesServiceStatus) {

                      if (placesServiceStatus == google.maps.GeocoderStatus.OK) {
                        scope.$apply(function() {

                          controller.$setViewValue(detailsResult.formatted_address);
                          element.val(detailsResult.formatted_address);

                          scope.details = detailsResult;

                          //on focusout the value reverts, need to set it again.
                          var watchFocusOut = element.on('focusout', function(event) {
                            element.val(detailsResult.formatted_address);
                            element.unbind('focusout')
                          })

                        });
                      }
                    }
                  );
                }
              });
          }
        }

        controller.$render = function () {
          var location = controller.$viewValue;
          element.val(location);
        };

        //watch options provided to directive
        scope.watchOptions = function () {
          return scope.options
        };
        scope.$watch(scope.watchOptions, function () {
          initOpts()
        }, true);

      }
    };
  });