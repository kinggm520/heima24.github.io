(window.webpackJsonp=window.webpackJsonp||[]).push([[2,36],{338:function(e,t,n){},339:function(e,t){var n={utf8:{stringToBytes:function(e){return n.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(n.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t},bytesToString:function(e){for(var t=[],n=0;n<e.length;n++)t.push(String.fromCharCode(e[n]));return t.join("")}}};e.exports=n},347:function(e,t,n){},348:function(e,t,n){},352:function(e,t,n){"use strict";n(338)},353:function(e,t,n){var s,o,a,r,i;s=n(354),o=n(339).utf8,a=n(355),r=n(339).bin,(i=function(e,t){e.constructor==String?e=t&&"binary"===t.encoding?r.stringToBytes(e):o.stringToBytes(e):a(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||(e=e.toString());for(var n=s.bytesToWords(e),l=8*e.length,c=1732584193,u=-271733879,d=-1732584194,f=271733878,p=0;p<n.length;p++)n[p]=16711935&(n[p]<<8|n[p]>>>24)|4278255360&(n[p]<<24|n[p]>>>8);n[l>>>5]|=128<<l%32,n[14+(l+64>>>9<<4)]=l;var h=i._ff,g=i._gg,m=i._hh,b=i._ii;for(p=0;p<n.length;p+=16){var v=c,y=u,_=d,w=f;c=h(c,u,d,f,n[p+0],7,-680876936),f=h(f,c,u,d,n[p+1],12,-389564586),d=h(d,f,c,u,n[p+2],17,606105819),u=h(u,d,f,c,n[p+3],22,-1044525330),c=h(c,u,d,f,n[p+4],7,-176418897),f=h(f,c,u,d,n[p+5],12,1200080426),d=h(d,f,c,u,n[p+6],17,-1473231341),u=h(u,d,f,c,n[p+7],22,-45705983),c=h(c,u,d,f,n[p+8],7,1770035416),f=h(f,c,u,d,n[p+9],12,-1958414417),d=h(d,f,c,u,n[p+10],17,-42063),u=h(u,d,f,c,n[p+11],22,-1990404162),c=h(c,u,d,f,n[p+12],7,1804603682),f=h(f,c,u,d,n[p+13],12,-40341101),d=h(d,f,c,u,n[p+14],17,-1502002290),c=g(c,u=h(u,d,f,c,n[p+15],22,1236535329),d,f,n[p+1],5,-165796510),f=g(f,c,u,d,n[p+6],9,-1069501632),d=g(d,f,c,u,n[p+11],14,643717713),u=g(u,d,f,c,n[p+0],20,-373897302),c=g(c,u,d,f,n[p+5],5,-701558691),f=g(f,c,u,d,n[p+10],9,38016083),d=g(d,f,c,u,n[p+15],14,-660478335),u=g(u,d,f,c,n[p+4],20,-405537848),c=g(c,u,d,f,n[p+9],5,568446438),f=g(f,c,u,d,n[p+14],9,-1019803690),d=g(d,f,c,u,n[p+3],14,-187363961),u=g(u,d,f,c,n[p+8],20,1163531501),c=g(c,u,d,f,n[p+13],5,-1444681467),f=g(f,c,u,d,n[p+2],9,-51403784),d=g(d,f,c,u,n[p+7],14,1735328473),c=m(c,u=g(u,d,f,c,n[p+12],20,-1926607734),d,f,n[p+5],4,-378558),f=m(f,c,u,d,n[p+8],11,-2022574463),d=m(d,f,c,u,n[p+11],16,1839030562),u=m(u,d,f,c,n[p+14],23,-35309556),c=m(c,u,d,f,n[p+1],4,-1530992060),f=m(f,c,u,d,n[p+4],11,1272893353),d=m(d,f,c,u,n[p+7],16,-155497632),u=m(u,d,f,c,n[p+10],23,-1094730640),c=m(c,u,d,f,n[p+13],4,681279174),f=m(f,c,u,d,n[p+0],11,-358537222),d=m(d,f,c,u,n[p+3],16,-722521979),u=m(u,d,f,c,n[p+6],23,76029189),c=m(c,u,d,f,n[p+9],4,-640364487),f=m(f,c,u,d,n[p+12],11,-421815835),d=m(d,f,c,u,n[p+15],16,530742520),c=b(c,u=m(u,d,f,c,n[p+2],23,-995338651),d,f,n[p+0],6,-198630844),f=b(f,c,u,d,n[p+7],10,1126891415),d=b(d,f,c,u,n[p+14],15,-1416354905),u=b(u,d,f,c,n[p+5],21,-57434055),c=b(c,u,d,f,n[p+12],6,1700485571),f=b(f,c,u,d,n[p+3],10,-1894986606),d=b(d,f,c,u,n[p+10],15,-1051523),u=b(u,d,f,c,n[p+1],21,-2054922799),c=b(c,u,d,f,n[p+8],6,1873313359),f=b(f,c,u,d,n[p+15],10,-30611744),d=b(d,f,c,u,n[p+6],15,-1560198380),u=b(u,d,f,c,n[p+13],21,1309151649),c=b(c,u,d,f,n[p+4],6,-145523070),f=b(f,c,u,d,n[p+11],10,-1120210379),d=b(d,f,c,u,n[p+2],15,718787259),u=b(u,d,f,c,n[p+9],21,-343485551),c=c+v>>>0,u=u+y>>>0,d=d+_>>>0,f=f+w>>>0}return s.endian([c,u,d,f])})._ff=function(e,t,n,s,o,a,r){var i=e+(t&n|~t&s)+(o>>>0)+r;return(i<<a|i>>>32-a)+t},i._gg=function(e,t,n,s,o,a,r){var i=e+(t&s|n&~s)+(o>>>0)+r;return(i<<a|i>>>32-a)+t},i._hh=function(e,t,n,s,o,a,r){var i=e+(t^n^s)+(o>>>0)+r;return(i<<a|i>>>32-a)+t},i._ii=function(e,t,n,s,o,a,r){var i=e+(n^(t|~s))+(o>>>0)+r;return(i<<a|i>>>32-a)+t},i._blocksize=16,i._digestsize=16,e.exports=function(e,t){if(null==e)throw new Error("Illegal argument "+e);var n=s.wordsToBytes(i(e,t));return t&&t.asBytes?n:t&&t.asString?r.bytesToString(n):s.bytesToHex(n)}},354:function(e,t){var n,s;n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&s.rotl(e,8)|4278255360&s.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=s.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],n=0,s=0;n<e.length;n++,s+=8)t[s>>>5]|=e[n]<<24-s%32;return t},wordsToBytes:function(e){for(var t=[],n=0;n<32*e.length;n+=8)t.push(e[n>>>5]>>>24-n%32&255);return t},bytesToHex:function(e){for(var t=[],n=0;n<e.length;n++)t.push((e[n]>>>4).toString(16)),t.push((15&e[n]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],n=0;n<e.length;n+=2)t.push(parseInt(e.substr(n,2),16));return t},bytesToBase64:function(e){for(var t=[],s=0;s<e.length;s+=3)for(var o=e[s]<<16|e[s+1]<<8|e[s+2],a=0;a<4;a++)8*s+6*a<=8*e.length?t.push(n.charAt(o>>>6*(3-a)&63)):t.push("=");return t.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var t=[],s=0,o=0;s<e.length;o=++s%4)0!=o&&t.push((n.indexOf(e.charAt(s-1))&Math.pow(2,-2*o+8)-1)<<2*o|n.indexOf(e.charAt(s))>>>6-2*o);return t}},e.exports=s},355:function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(n(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}(e)||!!e._isBuffer)}},357:function(e,t,n){"use strict";n.r(t);var s=n(0),o=n(379),a=n(361),r=n(17),i=n(322);var l=Object(s.c)({name:"SidebarLinks",components:{SidebarGroup:o.default,SidebarLink:a.default},props:["items","depth","sidebarDepth"],setup(e,t){const n=Object(i.a)(),{items:o}=Object(s.i)(e),a=Object(s.h)(0),l=()=>{const e=function(e,t){for(let n=0;n<t.length;n++){const s=t[n];if("group"===s.type&&s.children.some(t=>"page"===t.type&&Object(r.e)(e,t.path)))return n}return-1}(n.$route,o.value);e>-1&&(a.value=e)},c=()=>{const e=[].slice.call(document.querySelectorAll(".header-anchor")).filter(e=>-1!=decodeURIComponent(n.$route.fullPath).indexOf(decodeURIComponent(e.hash)));null==e||e.length<1||null==e[0].offsetTop||setTimeout((function(){window.scrollTo(0,e[0].offsetTop+160)}),100)},u=()=>{const e=document.getElementsByClassName("sidebar")[0];let t=document.getElementsByClassName("active sidebar-link")[1];if(null!=t&&null!=t&&null!=t.offsetTop||(t=document.getElementsByClassName("active sidebar-link")[0]),null==t||null==t||null==t.offsetTop)return;const n=e.clientHeight||window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,s=t.offsetTop,o=t.offsetTop+t.offsetHeight,a=e.scrollTop;o<=n+a||(e.scrollTop=o+5-n);s>=a||(e.scrollTop=s-5)},d=e=>d(n.$route,e.regularPath);return l(),Object(s.e)(()=>{(()=>{const e=decodeURIComponent(n.$route.fullPath);if(!e||""==e)return;const t=[].slice.call(document.querySelectorAll(".sidebar-link"));for(let n=0;n<t.length;n++)if(-1!=decodeURIComponent(t[n].getAttribute("href")).indexOf(e))return void c()})(),u()}),Object(s.f)(()=>u()),{openGroupIndex:a,refreshIndex:l,toggleGroup:e=>{n.openGroupIndex=e===n.openGroupIndex?-1:e},isActive:d}},watch:{$route(){this.refreshIndex()}}}),c=n(2),u=Object(c.a)(l,(function(){var e=this,t=e._self._c;e._self._setupProxy;return e.items.length?t("ul",{staticClass:"sidebar-links"},e._l(e.items,(function(n,s){return t("li",{key:s},["group"===n.type?t("SidebarGroup",{attrs:{item:n,open:s===e.openGroupIndex,collapsable:n.collapsable||n.collapsible,depth:e.depth},on:{toggle:function(t){return e.toggleGroup(s)}}}):t("SidebarLink",{attrs:{sidebarDepth:e.sidebarDepth,item:n}})],1)})),0):e._e()}),[],!1,null,null,null);t.default=u.exports},361:function(e,t,n){"use strict";n.r(t);var s=n(0),o=n(17);var a=Object(s.c)({functional:!0,props:["item","sidebarDepth"],render(e,{parent:{$page:t,$site:n,$route:s,$themeConfig:a,$themeLocaleConfig:r},props:{item:i,sidebarDepth:l}}){const c=Object(o.e)(s,i.path),u="auto"===i.type?c||i.children.some(e=>Object(o.e)(s,i.basePath+"#"+e.slug)):c;return function(e,t,n,s){return e("router-link",{props:{to:t,activeClass:"",exactActiveClass:""},class:{active:s,"sidebar-link":!0}},n)}(e,i.path,i.title||i.path,u)}}),r=(n(352),n(2)),i=Object(r.a)(a,void 0,void 0,!1,null,null,null);t.default=i.exports},367:function(e,t,n){"use strict";n(347)},368:function(e,t,n){},369:function(e,t,n){"use strict";n(348)},370:function(e,t,n){},371:function(e,t,n){},377:function(e,t,n){"use strict";n.r(t);var s=n(0),o=n(436),a=n(409),r=n(381),i=n(410),l=n(415),c=n(423),u=n(322),d=Object(s.c)({components:{Sidebar:a.default,Navbar:o.default,Password:i.default,PersonalInfo:r.default,SubSidebar:l.default},props:{sidebar:{type:Boolean,default:!0},sidebarItems:{type:Array,default:()=>[]},showModule:{type:Boolean,default:!1}},setup(e,t){const n=Object(u.a)(),o=Object(s.h)(!1),a=Object(s.h)(!0),r=Object(s.h)(!0),i=Object(s.h)(!0),l=Object(s.a)(()=>e.sidebarItems.length>0),d=Object(s.a)(()=>n.$themeConfig.keyPage&&!0===n.$themeConfig.keyPage.absoluteEncryption),f=Object(s.a)(()=>{const{themeConfig:e}=n.$site,{frontmatter:t}=n.$page;return!1!==t.navbar&&!1!==e.navbar&&(n.$title||e.logo||e.repo||e.nav||n.$themeLocaleConfig.nav)}),p=Object(s.a)(()=>{const e={"no-navbar":!f.value,"sidebar-open":o.value,"no-sidebar":!l.value},{pageClass:t}=n.$frontmatter||{};return t&&(e[t]=!0),e}),h=()=>{const{keyPage:e}=n.$themeConfig;if(!e||!e.keys||0===e.keys.length)return void(a.value=!0);let{keys:t}=e;t=t.map(e=>e.toLowerCase()),a.value=t&&t.indexOf(sessionStorage.getItem("key"))>-1},g=()=>{let e=n.$frontmatter.keys;e&&0!==e.length?(e=e.map(e=>e.toLowerCase()),r.value=e.indexOf(sessionStorage.getItem("pageKey"+window.location.pathname))>-1):r.value=!0};return Object(s.e)(()=>{n.$router.afterEach(()=>{o.value=!1}),h(),g(),(()=>{const e=n.$frontmatter.home&&null==sessionStorage.getItem("firstLoad")?1e3:0;Object(c.setTimeout)(()=>{i.value=!1,null==sessionStorage.getItem("firstLoad")&&sessionStorage.setItem("firstLoad",!1)},e)})()}),{isSidebarOpen:o,absoluteEncryption:d,shouldShowNavbar:f,shouldShowSidebar:l,pageClasses:p,hasKey:h,hasPageKey:g,isHasKey:a,isHasPageKey:r,toggleSidebar:e=>{o.value="boolean"==typeof e?e:!o.value},firstLoad:i}},watch:{$frontmatter(e,t){this.hasKey(),this.hasPageKey()}}}),f=(n(425),n(2)),p=Object(f.a)(d,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"theme-container",class:e.pageClasses},[e.absoluteEncryption?t("div",[t("transition",{attrs:{name:"fade"}},[e.isHasKey?e._e():t("Password")],1),e._v(" "),e.isHasKey?t("div",[e.shouldShowNavbar?t("Navbar",{on:{"toggle-sidebar":e.toggleSidebar}}):e._e(),e._v(" "),t("div",{staticClass:"sidebar-mask",on:{click:function(t){return e.toggleSidebar(!1)}}}),e._v(" "),t("Sidebar",{attrs:{items:e.sidebarItems},on:{"toggle-sidebar":e.toggleSidebar}},[t("PersonalInfo",{attrs:{slot:"top"},slot:"top"}),e._v(" "),e._t("sidebar-bottom",null,{slot:"bottom"})],2),e._v(" "),e.isHasPageKey?e._t("default"):t("Password",{attrs:{isPage:!0}})],2):e._e()],1):t("div",[t("transition",{attrs:{name:"fade"}},[t("Password",{directives:[{name:"show",rawName:"v-show",value:!e.firstLoad&&!e.isHasKey,expression:"!firstLoad && !isHasKey"}],key:"out",staticClass:"password-wrapper-out"})],1),e._v(" "),t("div",{class:{hide:e.firstLoad||!e.isHasKey}},[e.shouldShowNavbar?t("Navbar",{on:{"toggle-sidebar":e.toggleSidebar}}):e._e(),e._v(" "),t("div",{staticClass:"sidebar-mask",on:{click:function(t){return e.toggleSidebar(!1)}}}),e._v(" "),t("Sidebar",{attrs:{items:e.sidebarItems},on:{"toggle-sidebar":e.toggleSidebar}},[t("PersonalInfo",{attrs:{slot:"top"},slot:"top"}),e._v(" "),e._t("sidebar-bottom",null,{slot:"bottom"})],2),e._v(" "),t("Password",{directives:[{name:"show",rawName:"v-show",value:!e.isHasPageKey,expression:"!isHasPageKey"}],key:"in",staticClass:"password-wrapper-in",attrs:{isPage:!0}}),e._v(" "),t("div",{class:{hide:!e.isHasPageKey}},[e._t("default")],2),e._v(" "),t("SubSidebar",{staticClass:"sub-sidebar"})],1)],1)])}),[],!1,null,"7dd95ae2",null);t.default=p.exports},379:function(e,t,n){"use strict";n.r(t);var s=n(0),o=n(17),a=n(335),r=n(322),i=Object(s.c)({name:"SidebarGroup",props:["item","open","collapsable","depth"],components:{DropdownTransition:a.default},setup:(e,t)=>(Object(r.a)().$options.components.SidebarLinks=n(357).default,{isActive:o.e})}),l=(n(367),n(2)),c=Object(l.a)(i,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("section",{staticClass:"sidebar-group",class:[{collapsable:e.collapsable,"is-sub-group":0!==e.depth},"depth-"+e.depth]},[e.item.path?t("router-link",{staticClass:"sidebar-heading clickable",class:{open:e.open,active:e.isActive(e.$route,e.item.path)},attrs:{to:e.item.path},nativeOn:{click:function(t){return e.$emit("toggle")}}},[t("span",[e._v(e._s(e.item.title))]),e._v(" "),e.collapsable?t("span",{staticClass:"arrow",class:e.open?"down":"right"}):e._e()]):t("p",{staticClass:"sidebar-heading",class:{open:e.open},on:{click:function(t){return e.$emit("toggle")}}},[t("span",[e._v(e._s(e.item.title))]),e._v(" "),e.collapsable?t("span",{staticClass:"arrow",class:e.open?"down":"right"}):e._e()]),e._v(" "),t("DropdownTransition",[e.open||!e.collapsable?t("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:e.item.children,sidebarDepth:e.item.sidebarDepth,depth:e.depth+1}}):e._e()],1)],1)}),[],!1,null,null,null);t.default=c.exports},381:function(e,t,n){"use strict";n.r(t);var s=n(0),o=n(323),a=n(41),r=n(322),i=Object(s.c)({components:{RecoIcon:o.b},setup(e,t){const n=Object(r.a)();return{socialLinks:Object(s.a)(()=>(n.$themeConfig.blogConfig&&n.$themeConfig.blogConfig.socialLinks||[]).map(e=>(e.color||(e.color=Object(a.b)()),e)))}}}),l=(n(369),n(2)),c=Object(l.a)(i,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"personal-info-wrapper"},[e.$themeConfig.authorAvatar?t("img",{staticClass:"personal-img",attrs:{src:e.$withBase(e.$themeConfig.authorAvatar),alt:"author-avatar"}}):e._e(),e._v(" "),e.$themeConfig.author?t("h3",{staticClass:"name"},[e._v("\n    "+e._s(e.$themeConfig.author)+"\n  ")]):e._e(),e._v(" "),t("div",{staticClass:"num"},[t("div",[t("h3",[e._v(e._s(e.$recoPosts.length))]),e._v(" "),t("h6",[e._v(e._s(e.$recoLocales.article))])]),e._v(" "),t("div",[t("h3",[e._v(e._s(e.$tags.list.length))]),e._v(" "),t("h6",[e._v(e._s(e.$recoLocales.tag))])])]),e._v(" "),t("ul",{staticClass:"social-links"},e._l(e.socialLinks,(function(e,n){return t("li",{key:n,staticClass:"social-item"},[t("reco-icon",{style:{color:e.color},attrs:{icon:e.icon,link:e.link}})],1)})),0),e._v(" "),t("hr")])}),[],!1,null,"1fad0c41",null);t.default=c.exports},386:function(e,t,n){"use strict";n(368)},387:function(e,t,n){"use strict";n(370)},388:function(e,t,n){"use strict";n(371)},397:function(e,t,n){},409:function(e,t,n){"use strict";n.r(t);var s=n(0),o=n(357),a=n(378),r=Object(s.c)({name:"Sidebar",components:{SidebarLinks:o.default,NavLinks:a.default},props:["items"]}),i=(n(386),n(2)),l=Object(i.a)(r,(function(){var e=this._self._c;this._self._setupProxy;return e("aside",{staticClass:"sidebar"},[this._t("top"),this._v(" "),e("NavLinks"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null);t.default=l.exports},410:function(e,t,n){"use strict";n.r(t);var s=n(0),o=n(353),a=n.n(o),r=n(323),i=n(322),l=Object(s.c)({name:"Password",components:{RecoIcon:r.b},props:{isPage:{type:Boolean,default:!1}},setup(e,t){const n=Object(i.a)(),o=(new Date).getFullYear(),r=Object(s.h)(""),l=Object(s.h)("Konck! Knock!"),{isPage:c}=Object(s.i)(e);return{warningText:l,year:o,key:r,inter:()=>{const e=a()(r.value.trim()),t="pageKey"+window.location.pathname,s=c.value?t:"key";sessionStorage.setItem(s,e);if(!(c.value?(()=>{const e=n.$frontmatter.keys.map(e=>e.toLowerCase()),t="pageKey"+window.location.pathname;return e&&e.indexOf(sessionStorage.getItem(t))>-1})():(()=>{let{keys:e}=n.$themeConfig.keyPage;return e=e.map(e=>e.toLowerCase()),e.indexOf(sessionStorage.getItem("key"))>-1})()))return void(l.value="Key Error");l.value="Key Success";const o=document.getElementById("box").style.width;n.$refs.passwordBtn.style.width=o-2+"px",n.$refs.passwordBtn.style.opacity=1,setTimeout(()=>{window.location.reload()},800)},inputFocus:()=>{l.value="Input Your Key"},inputBlur:()=>{l.value="Konck! Knock!"}}}}),c=(n(387),n(2)),u=Object(c.a)(l,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"password-shadow"},[t("h3",{staticClass:"title"},[e._v(e._s(e.isPage?e.$frontmatter.title:e.$site.title||e.$localeConfig.title))]),e._v(" "),e.isPage?e._e():t("p",{staticClass:"description"},[e._v(e._s(e.$site.description||e.$localeConfig.description))]),e._v(" "),t("label",{staticClass:"inputBox",attrs:{id:"box"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.key,expression:"key"}],attrs:{type:"password"},domProps:{value:e.key},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.inter.apply(null,arguments)},focus:e.inputFocus,blur:e.inputBlur,input:function(t){t.target.composing||(e.key=t.target.value)}}}),e._v(" "),t("span",[e._v(e._s(e.warningText))]),e._v(" "),t("button",{ref:"passwordBtn",on:{click:e.inter}},[e._v("OK")])]),e._v(" "),t("div",{staticClass:"footer"},[t("span",[t("reco-icon",{attrs:{icon:"reco-theme"}}),e._v(" "),t("a",{attrs:{target:"blank",href:"https://vuepress-theme-reco.recoluan.com"}},[e._v("vuePress-theme-reco")])],1),e._v(" "),t("span",[t("reco-icon",{attrs:{icon:"reco-copyright"}}),e._v(" "),t("a",[e.$themeConfig.author?t("span",[e._v(e._s(e.$themeConfig.author))]):e._e(),e._v("\n          \n        "),e.$themeConfig.startYear&&e.$themeConfig.startYear!=e.year?t("span",[e._v(e._s(e.$themeConfig.startYear)+" - ")]):e._e(),e._v("\n        "+e._s(e.year)+"\n      ")])],1)])])}),[],!1,null,"59e6cb88",null);t.default=u.exports},415:function(e,t,n){"use strict";n.r(t);var s=n(0),o=n(17),a=n(322),r=Object(s.c)({setup(e,t){const n=Object(a.a)();return{headers:Object(s.a)(()=>n.$showSubSideBar?n.$page.headers:[]),isLinkActive:e=>Object(o.e)(n.$route,n.$page.path+"#"+e.slug)}},render(e){return e("ul",{class:{"sub-sidebar-wrapper":!0},style:{width:this.headers.length>0?"12rem":"0"}},[...this.headers.map(t=>e("li",{class:{active:this.isLinkActive(t),["level-"+t.level]:!0},attr:{key:t.title}},[e("router-link",{class:{"sidebar-link":!0,["reco-side-"+t.slug]:!0},props:{to:`${this.$page.path}#${t.slug}`}},t.title)]))])}}),i=(n(388),n(2)),l=Object(i.a)(r,void 0,void 0,!1,null,"b57cc07c",null);t.default=l.exports},423:function(e,t,n){var s="undefined"!=typeof global&&global||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;function a(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new a(o.call(setTimeout,s,arguments),clearTimeout)},t.setInterval=function(){return new a(o.call(setInterval,s,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},a.prototype.unref=a.prototype.ref=function(){},a.prototype.close=function(){this._clearFn.call(s,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n(424),t.setImmediate="undefined"!=typeof self&&self.setImmediate||"undefined"!=typeof global&&global.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||"undefined"!=typeof global&&global.clearImmediate||this&&this.clearImmediate},424:function(e,t){!function(e,t){"use strict";if(!e.setImmediate){var n,s,o,a,r,i=1,l={},c=!1,u=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?n=function(e){process.nextTick((function(){p(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((o=new MessageChannel).port1.onmessage=function(e){p(e.data)},n=function(e){o.port2.postMessage(e)}):u&&"onreadystatechange"in u.createElement("script")?(s=u.documentElement,n=function(e){var t=u.createElement("script");t.onreadystatechange=function(){p(e),t.onreadystatechange=null,s.removeChild(t),t=null},s.appendChild(t)}):n=function(e){setTimeout(p,0,e)}:(a="setImmediate$"+Math.random()+"$",r=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(a)&&p(+t.data.slice(a.length))},e.addEventListener?e.addEventListener("message",r,!1):e.attachEvent("onmessage",r),n=function(t){e.postMessage(a+t,"*")}),d.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),s=0;s<t.length;s++)t[s]=arguments[s+1];var o={callback:e,args:t};return l[i]=o,n(i),i++},d.clearImmediate=f}function f(e){delete l[e]}function p(e){if(c)setTimeout(p,0,e);else{var t=l[e];if(t){c=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(void 0,n)}}(t)}finally{f(e),c=!1}}}}}("undefined"==typeof self?"undefined"==typeof global?this:global:self)},425:function(e,t,n){"use strict";n(397)}}]);