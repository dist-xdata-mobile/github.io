(window.webpackJsonp=window.webpackJsonp||[]).push([[4,6,7,12,20],{335:function(t,n,e){"use strict";e.d(n,"i",(function(){return r})),e.d(n,"d",(function(){return s})),e.d(n,"a",(function(){return l})),e.d(n,"h",(function(){return u})),e.d(n,"e",(function(){return o})),e.d(n,"f",(function(){return c})),e.d(n,"g",(function(){return f})),e.d(n,"b",(function(){return p})),e.d(n,"k",(function(){return h})),e.d(n,"j",(function(){return d})),e.d(n,"m",(function(){return v})),e.d(n,"c",(function(){return g})),e.d(n,"l",(function(){return m}));e(28),e(52),e(112),e(115),e(116),e(51),e(27),e(190),e(35),e(337),e(53);var i=e(0),r=/^(https?:|mailto:)/,s=/#.*$/,a=/\.(md|html)$/,l=/\/$/;function u(t){return t.replace(s,"").replace(a,"")}function o(t,n){var e=t.hash,i=function(t){var n=t.match(s);if(n)return n[0]}(n);return(!i||e===i)&&u(t.path)===u(n)}function c(t){return r.test(t)}function f(t){return/^mailto:/.test(t)}function p(t){if(c(t))return t;var n=t.match(s),e=n?n[0]:"",i=u(t);return l.test(i)?t:i+".html"+e}function h(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}function d(t,n){var e=Object(i.b)(t,n);return e&&e.key}function v(t,n,e,i){if("auto"===t.frontmatter.sidebar)return function(t){var n=g(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,children:n.map((function(n){return{type:"auto",title:n.title,basePath:t.path,path:t.path+"#"+n.slug,children:n.children||[]}}))}]}(t);var r=e.pages,s=e.themeConfig,a=(i&&s.locales&&s.locales[i]||s).sidebar||s.sidebar;if(a){var l=function(t,n){if(Array.isArray(n))return{base:"/",config:n};for(var e in n)if(0===(i=t.path,/(\.html|\/)$/.test(i)?i:i+"/").indexOf(e))return{base:e,config:n[e]};var i;return{}}(n,a),u=l.base,o=l.config;return o?o.map((function(t){return function t(n,e,i,r){if("string"==typeof n)return m(e,n,i);if(Array.isArray(n))return Object.assign(m(e,n[0],i),{title:n[1]});r&&console.error("[vuepress] Nested sidebar groups are not supported. Consider using navbar + categories instead.");var s=n.children||[];return{type:"group",title:n.title,children:s.map((function(n){return t(n,e,i,!0)})),collapsable:!1!==n.collapsable}}(t,r,u)})):[]}return[]}function g(t){var n;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?n=t:n&&(n.children||(n.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function m(t,n,e){e&&(n=function(t,n,e){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return n+t;var r=n.split("/");e&&r[r.length-1]||r.pop();for(var s=t.replace(/^\//,"").split("/"),a=0;a<s.length;a++){var l=s[a];".."===l?r.pop():"."!==l&&r.push(l)}""!==r[0]&&r.unshift("");return r.join("/")}(n,e));for(var i=u(n),r=0;r<t.length;r++)if(u(t[r].path)===i)return Object.assign({},t[r],{type:"page",path:p(n)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(n,'"')),{}}},336:function(t,n,e){},337:function(t,n,e){"use strict";var i=e(110),r=e(189),s=e(9),a=e(23),l=e(113),u=e(114),o=e(16),c=e(111),f=e(80),p=e(3),h=[].push,d=Math.min,v=!p((function(){return!RegExp(4294967295,"y")}));i("split",2,(function(t,n,e){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var i=String(a(this)),s=void 0===e?4294967295:e>>>0;if(0===s)return[];if(void 0===t)return[i];if(!r(t))return n.call(i,t,s);for(var l,u,o,c=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,v=new RegExp(t.source,p+"g");(l=f.call(v,i))&&!((u=v.lastIndex)>d&&(c.push(i.slice(d,l.index)),l.length>1&&l.index<i.length&&h.apply(c,l.slice(1)),o=l[0].length,d=u,c.length>=s));)v.lastIndex===l.index&&v.lastIndex++;return d===i.length?!o&&v.test("")||c.push(""):c.push(i.slice(d)),c.length>s?c.slice(0,s):c}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,e){var r=a(this),s=null==n?void 0:n[t];return void 0!==s?s.call(n,r,e):i.call(String(r),n,e)},function(t,r){var a=e(i,t,this,r,i!==n);if(a.done)return a.value;var f=s(t),p=String(this),h=l(f,RegExp),g=f.unicode,m=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(v?"y":"g"),k=new h(v?f:"^(?:"+f.source+")",m),b=void 0===r?4294967295:r>>>0;if(0===b)return[];if(0===p.length)return null===c(k,p)?[p]:[];for(var _=0,C=0,w=[];C<p.length;){k.lastIndex=v?C:0;var x,y=c(k,v?p:p.slice(C));if(null===y||(x=d(o(k.lastIndex+(v?0:C)),p.length))===_)C=u(p,C,g);else{if(w.push(p.slice(_,C)),w.length===b)return w;for(var L=1;L<=y.length-1;L++)if(w.push(y[L]),w.length===b)return w;C=_=x}}return w.push(p.slice(_)),w}]}),!v)},338:function(t,n,e){},339:function(t,n,e){"use strict";e.r(n);var i={name:"SidebarGroup",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){items.style.height=""}}},r=(e(340),e(6)),s=Object(r.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"}},[this._t("default")],2)}),[],!1,null,null,null);n.default=s.exports},340:function(t,n,e){"use strict";var i=e(336);e.n(i).a},341:function(t,n,e){},344:function(t,n,e){"use strict";e.r(n);e(346);var i=e(335),r={props:{item:{require:!0}},computed:{link:function(){return Object(i.b)(this.item.link)}},methods:{isExternal:i.f,isMailto:i.g}},s=(e(349),e(6)),a=Object(s.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.isExternal(t.link)?e("a",{staticClass:"nav-link",class:{new:t.item.new},attrs:{href:t.link,target:t.isMailto(t.link)?null:"_blank",rel:t.isMailto(t.link)?null:"noopener noreferrer"}},[t._v(t._s(t.item.text))]):e("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:"/"===t.link}},[t._v(t._s(t.item.text))])}),[],!1,null,"e7cf42d2",null);n.default=a.exports},346:function(t,n,e){"use strict";var i=e(2),r=e(347);i({target:"String",proto:!0,forced:e(348)("link")},{link:function(t){return r(this,"a","href",t)}})},347:function(t,n,e){var i=e(23),r=/"/g;t.exports=function(t,n,e,s){var a=String(i(t)),l="<"+n;return""!==e&&(l+=" "+e+'="'+String(s).replace(r,"&quot;")+'"'),l+">"+a+"</"+n+">"}},348:function(t,n,e){var i=e(3);t.exports=function(t){return i((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}},349:function(t,n,e){"use strict";var i=e(338);e.n(i).a},350:function(t,n,e){},356:function(t,n,e){"use strict";var i=e(341);e.n(i).a},358:function(t,n,e){},365:function(t,n,e){"use strict";e.r(n);e(335);var i=e(344),r=e(339),s={components:{NavLink:i.default,DropdownTransition:r.default},data:function(){return{open:!1}},props:{item:{required:!0}},methods:{toggle:function(){this.open=!this.open}}},a=(e(356),e(6)),l=Object(a.a)(s,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[e("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[e("span",{staticClass:"title"},[t._v(t._s(t.item.text))])]),t._v(" "),e("DropdownTransition",[e("ul",{staticClass:"nav-dropdown"},t._l(t.item.items,(function(n){return e("li",{key:n.link,staticClass:"dropdown-item"},["links"===n.type?e("h4",[t._v(t._s(n.text))]):t._e(),t._v(" "),"links"===n.type?e("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(n.items,(function(t){return e("li",{key:t.link,staticClass:"dropdown-subitem"},[e("NavLink",{attrs:{item:t}})],1)})),0):e("NavLink",{attrs:{item:n}})],1)})),0)])],1)}),[],!1,null,null,null);n.default=l.exports},367:function(t,n,e){"use strict";var i=e(350);e.n(i).a},371:function(t,n,e){"use strict";e.r(n);e(51);var i=e(335),r=e(365),s={components:{NavLink:e(344).default,DropdownLink:r.default},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},userLinks:function(){return(this.userNav||[]).map((function(t){return Object.assign(Object(i.k)(t),{items:(t.items||[]).map(i.k)})}))}}},a=(e(367),e(6)),l=Object(a.a)(s,(function(){var t=this.$createElement,n=this._self._c||t;return this.userLinks.length||this.repoLink?n("nav",{staticClass:"nav-links"},this._l(this.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),0):this._e()}),[],!1,null,null,null);n.default=l.exports},376:function(t,n,e){"use strict";var i=e(358);e.n(i).a},391:function(t,n,e){"use strict";e.r(n);var i={components:{NavLinks:e(371).default},computed:{repoLink:function(){var t=this.$site.themeConfig.repo;if(t)return/^https?:/.test(t)?t:"https://github.com/".concat(t)}}},r=(e(376),e(6)),s=Object(r.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("header",{staticClass:"navbar shadow"},[e("div",{staticClass:"con-btns-header"},[e("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[e("div",{staticClass:"con-logo"},[t.$site.themeConfig.logo?t._e():e("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}),t._v(" "),e("span",{staticClass:"site-name"},[t._v(t._s(t.$siteTitle))])])]),t._v(" "),e("div",{staticClass:"links"},[e("NavLinks")],1)],1),t._v(" "),e("div",{staticClass:"con-redes-download"},[t.repoLink?e("a",{staticClass:"repo-link flaticon-github",attrs:{title:"GitLab",href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}}):t._e()])])}),[],!1,null,null,null);n.default=s.exports}}]);