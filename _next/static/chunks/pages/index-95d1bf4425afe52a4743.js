(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4184:function(e,t){var n;!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var a=r.apply(null,n);a&&e.push(a)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var s in n)o.call(n,s)&&n[s]&&e.push(s);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},5440:function(e,t,n){"use strict";n.d(t,{D:function(){return s}});var o=n(5893),r=n(1664),i=n(4275),a=n.n(i);function s(){return(0,o.jsxs)("nav",{className:a().topBar,children:[(0,o.jsx)("div",{className:a().topbarTitle,children:(0,o.jsx)(r.default,{href:"/",children:(0,o.jsxs)("a",{className:a().title,children:["Health icons ",(0,o.jsx)("sup",{children:"BETA"})]})})}),(0,o.jsxs)("ul",{className:a().topbarLinks,children:[(0,o.jsx)("li",{children:(0,o.jsxs)("a",{href:"https://github.com/resolvetosavelives/healthicons#icon-requests",className:a().link,children:[(0,o.jsx)("img",{src:"/ui/question-line.svg",alt:""})," Request an icon"]})}),(0,o.jsx)("li",{children:(0,o.jsxs)("a",{href:"https://github.com/resolvetosavelives/healthicons",className:a().link,children:[(0,o.jsx)("img",{src:"/ui/github-fill.svg",alt:""})," GitHub"]})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.default,{href:"/about",children:(0,o.jsxs)("a",{className:a().link,children:[(0,o.jsx)("img",{src:"/ui/information-line.svg",alt:""})," About"]})})})]}),(0,o.jsx)("div",{className:a().topbarDownload,children:(0,o.jsx)("a",{href:"/icons.zip",className:a().buttonLink,children:"Download all"})})]})}},4153:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return O},default:function(){return T}});var o=n(5893),r=n(7294),i=n(9008),a=n(5440),s=n(7125),l=n.n(s);function c(e){return(0,o.jsx)("h2",{className:l().categoryHeading,children:e.children})}var u=n(6265),f=n(4184),p=n.n(f),d=n(2679),h=(n(5488),n(3759)),y=n.n(h);function b(e){var t=this,n=p()(y().iconGroup,(0,u.Z)({},y().hidden,!e.visible));return(0,o.jsxs)("div",{className:n,children:[(0,o.jsxs)("button",{className:y().iconItem,onClick:function(){e.onClick.call(t,"filled")},children:[(0,o.jsx)("div",{className:y().iconThumb,children:(0,o.jsx)(d.LazyLoadImage,{src:"icons/svg/filled/".concat(e.icon.path,"/").concat(e.icon.fileName,".svg"),width:"48",height:"48",alt:"".concat(e.icon.title," outline icon"),effect:"blur"})}),(0,o.jsx)("div",{className:y().iconTitle,children:e.icon.title})]}),(0,o.jsxs)("button",{className:y().iconItem,onClick:function(){e.onClick.call(t,"outline")},children:[(0,o.jsx)("div",{className:y().iconThumb,children:(0,o.jsx)(d.LazyLoadImage,{src:"icons/svg/outline/".concat(e.icon.path,"/").concat(e.icon.fileName,".svg"),width:"48",height:"48",alt:"".concat(e.icon.title," outline icon"),effect:"blur"})}),(0,o.jsx)("div",{className:y().iconTitle,children:e.icon.title})]})]})}var m=n(768),v=n.n(m),g=n(3253),_=n.n(g);function w(e){return(0,o.jsx)(_(),{isOpen:e.isOpen,bodyOpenClassName:"modal--open",onRequestClose:e.onClose,className:v().modalContainer,overlayClassName:v().modalBody,closeTimeoutMS:200,children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("button",{onClick:e.onClose,className:v().modalClose,children:"\xd7"}),(0,o.jsx)("img",{src:"icons/svg/".concat(e.iconType,"/").concat(e.icon.path,"/").concat(e.icon.fileName,".svg"),className:v().modalImage,width:"96",height:"96",alt:""}),(0,o.jsx)("div",{className:v().modalLabel,children:"Filename"}),(0,o.jsx)("div",{className:v().modalTitle,children:e.icon.title}),(0,o.jsxs)("div",{className:v().modalButtons,children:[(0,o.jsx)("a",{href:"icons/svg/".concat(e.iconType,"/").concat(e.icon.path,"/").concat(e.icon.fileName,".svg"),download:"".concat(e.icon.fileName,".svg"),className:v().modalButton,children:(0,o.jsx)("span",{children:"SVG"})}),(0,o.jsx)("a",{href:"icons/png/".concat(e.iconType,"/").concat(e.icon.path,"/").concat(e.icon.fileName,".png"),download:"".concat(e.icon.fileName,".png"),className:v().modalButton,children:(0,o.jsx)("span",{children:"48px PNG"})}),(0,o.jsx)("a",{href:"icons/png/".concat(e.iconType,"/").concat(e.icon.path,"/").concat(e.icon.fileName,"@2x.png"),download:"".concat(e.icon.fileName,"@2x.png"),className:v().modalButton,children:(0,o.jsx)("span",{children:"96px PNG"})})]}),(0,o.jsx)("div",{className:v().modalLabel,children:"Tags"}),(0,o.jsx)("div",{className:v().modalTags,children:(0,o.jsx)("span",{children:"Coming soon..."})})]})})}var j=n(5432),x=n.n(j),O=!0;function T(e){var t=e.categories,n=(0,r.useState)(void 0),s=n[0],l=n[1],u=(0,r.useState)(),f=u[0],p=u[1],d=(0,r.useMemo)((function(){var e=[];if(!f)return e;var n=f.toLowerCase();return t.forEach((function(t){t.icons.forEach((function(t){t.title.toLowerCase().includes(n)&&e.push(t)}))})),e}),[f,t]),h=t.reduce((function(e,t){return e+t.icons.length}),0);return(0,o.jsxs)("div",{className:"container",children:[(0,o.jsxs)(i.default,{children:[(0,o.jsx)("title",{children:"Health Icons"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,o.jsx)("meta",{property:"og:site_name",content:"Health icons"}),(0,o.jsx)("meta",{property:"og:title",content:"Health icons"}),(0,o.jsx)("meta",{property:"og:description",content:"Free, open source health icons. Use in your next commercial or personal project. Editing is ok. Republishing is ok. No need to give credit."}),(0,o.jsx)("meta",{property:"og:url",content:"http://healthicons.org/"}),(0,o.jsx)("meta",{property:"og:image",content:"http://healthicons.org/og_image.png"}),(0,o.jsx)("meta",{property:"og:image:secure_url",content:"https://healthicons.org/og_image.png"}),(0,o.jsx)("meta",{property:"og:image:width",content:"1280"}),(0,o.jsx)("meta",{property:"og:image:height",content:"640"}),(0,o.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,o.jsx)("meta",{property:"twitter:image",content:"https://healthicons.org/og_image.png"}),(0,o.jsx)("meta",{property:"twitter:site",content:"@health_icons"})]}),(0,o.jsx)(a.D,{}),(0,o.jsxs)("main",{id:"main",children:[(0,o.jsxs)("div",{className:x().box,children:[(0,o.jsx)("h1",{children:"Free, open source health icons"}),(0,o.jsxs)("h3",{children:["Free for use in your next commercial or personal project.",(0,o.jsx)("span",{children:" "}),"Editing is ok. Republishing is ok. No need to give credit."]})]}),(0,o.jsx)("label",{className:x().filterBox,children:(0,o.jsx)("input",{type:"text",className:x().filterBoxInput,placeholder:"Search ".concat(h," Icons\u2026"),onChange:function(e){return p(e.target.value)}})}),t.map((function(e){return(0,o.jsxs)("div",{children:[(!f||e.icons.some((function(e){return d.includes(e)})))&&(0,o.jsx)(c,{children:e.title},e.title),(0,o.jsx)("div",{className:x().iconGrid,children:e.icons.map((function(e){return(0,o.jsx)(b,{icon:e,visible:!f||d.includes(e),onClick:function(t){l({icon:e,iconType:t})}},e.title)}))})]},e.title)})),s&&(0,o.jsx)(w,{icon:s.icon,iconType:s.iconType,isOpen:void 0!==s,onClose:function(){l(void 0)}})]}),(0,o.jsxs)("footer",{children:["All icons are licensed under an open source"," ",(0,o.jsx)("a",{href:"/about#license",className:x().link,children:"MIT License"})]})]})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4153)}])},7125:function(e){e.exports={categoryHeading:"CategoryHeading_categoryHeading__HEvhE"}},3759:function(e){e.exports={hidden:"IconTile_hidden__11j3i",iconGrid:"IconTile_iconGrid__10McG",iconGroup:"IconTile_iconGroup__3CqO9",iconItem:"IconTile_iconItem__1gXgE",iconThumb:"IconTile_iconThumb__1TZtS",iconTitle:"IconTile_iconTitle__1n89d"}},768:function(e){e.exports={modalContainer:"IconTileModal_modalContainer__hlNku",modalClose:"IconTileModal_modalClose__1_noM",modalLabel:"IconTileModal_modalLabel__11eS2",modalImage:"IconTileModal_modalImage__2rq-s",modalButtons:"IconTileModal_modalButtons__Xal5c",modalButton:"IconTileModal_modalButton__2f98q",modalTitle:"IconTileModal_modalTitle__x3jxn",modalTags:"IconTileModal_modalTags__10LHu"}},4275:function(e){e.exports={topBar:"TopBar_topBar__2JUYM",topbarDownload:"TopBar_topbarDownload__2A2Iy",topbarTitle:"TopBar_topbarTitle__3BbGS",topbarLinks:"TopBar_topbarLinks__1s2bB",buttonLink:"TopBar_buttonLink__1wCM1"}},5432:function(e){e.exports={box:"index_box__3NDYN",iconGrid:"index_iconGrid__jIua1",filterBox:"index_filterBox__19CMh",filterBoxInput:"index_filterBoxInput__1ZMIE"}},5488:function(){},2679:function(e,t,n){e.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t){e.exports=n(7294)},function(e,t,n){e.exports=n(10)()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return"undefined"!=typeof window&&"IntersectionObserver"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=c(n(0)),i=n(1),a=c(n(4)),s=c(n(12)),l=c(n(2));function c(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),o=e.afterLoad,r=e.beforeLoad,i=e.scrollPosition,a=e.visibleByDefault;return n.state={visible:a},a&&(r(),o()),n.onVisible=n.onVisible.bind(n),n.isScrollTracked=Boolean(i&&Number.isFinite(i.x)&&i.x>=0&&Number.isFinite(i.y)&&i.y>=0),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidUpdate",value:function(e,t){t.visible!==this.state.visible&&this.props.afterLoad()}},{key:"onVisible",value:function(){this.props.beforeLoad(),this.setState({visible:!0})}},{key:"render",value:function(){if(this.state.visible)return this.props.children;var e=this.props,t=e.className,n=e.delayMethod,o=e.delayTime,i=e.height,c=e.placeholder,u=e.scrollPosition,f=e.style,p=e.threshold,d=e.useIntersectionObserver,h=e.width;return this.isScrollTracked||d&&(0,l.default)()?r.default.createElement(a.default,{className:t,height:i,onVisible:this.onVisible,placeholder:c,scrollPosition:u,style:f,threshold:p,useIntersectionObserver:d,width:h}):r.default.createElement(s.default,{className:t,delayMethod:n,delayTime:o,height:i,onVisible:this.onVisible,placeholder:c,style:f,threshold:p,width:h})}}]),t}(r.default.Component);u.propTypes={afterLoad:i.PropTypes.func,beforeLoad:i.PropTypes.func,useIntersectionObserver:i.PropTypes.bool,visibleByDefault:i.PropTypes.bool},u.defaultProps={afterLoad:function(){return{}},beforeLoad:function(){return{}},useIntersectionObserver:!0,visibleByDefault:!1},t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=c(n(0)),a=c(n(5)),s=n(1),l=c(n(2));function c(e){return e&&e.__esModule?e:{default:e}}var u=function(e){e.forEach((function(e){e.isIntersecting&&e.target.onVisible()}))},f={},p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));if(n.supportsObserver=!e.scrollPosition&&e.useIntersectionObserver&&(0,l.default)(),n.supportsObserver){var o=e.threshold;n.observer=function(e){return f[e]=f[e]||new IntersectionObserver(u,{rootMargin:e+"px"}),f[e]}(o)}return n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.placeholder&&this.observer&&(this.placeholder.onVisible=this.props.onVisible,this.observer.observe(this.placeholder)),this.supportsObserver||this.updateVisibility()}},{key:"componentWillUnmount",value:function(){this.observer&&this.observer.unobserve(this.placeholder)}},{key:"componentDidUpdate",value:function(){this.supportsObserver||this.updateVisibility()}},{key:"getPlaceholderBoundingBox",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.scrollPosition,t=this.placeholder.getBoundingClientRect(),n=a.default.findDOMNode(this.placeholder).style,o={left:parseInt(n.getPropertyValue("margin-left"),10)||0,top:parseInt(n.getPropertyValue("margin-top"),10)||0};return{bottom:e.y+t.bottom+o.top,left:e.x+t.left+o.left,right:e.x+t.right+o.left,top:e.y+t.top+o.top}}},{key:"isPlaceholderInViewport",value:function(){if("undefined"==typeof window||!this.placeholder)return!1;var e=this.props,t=e.scrollPosition,n=e.threshold,o=this.getPlaceholderBoundingBox(t),r=t.y+window.innerHeight,i=t.x,a=t.x+window.innerWidth,s=t.y;return Boolean(s-n<=o.bottom&&r+n>=o.top&&i-n<=o.right&&a+n>=o.left)}},{key:"updateVisibility",value:function(){this.isPlaceholderInViewport()&&this.props.onVisible()}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=t.height,a=t.placeholder,s=t.style,l=t.width;if(a&&"function"!=typeof a.type)return i.default.cloneElement(a,{ref:function(t){return e.placeholder=t}});var c=o({display:"inline-block"},s);return void 0!==l&&(c.width=l),void 0!==r&&(c.height=r),i.default.createElement("span",{className:n,ref:function(t){return e.placeholder=t},style:c},a)}}]),t}(i.default.Component);p.propTypes={onVisible:s.PropTypes.func.isRequired,className:s.PropTypes.string,height:s.PropTypes.oneOfType([s.PropTypes.number,s.PropTypes.string]),placeholder:s.PropTypes.element,threshold:s.PropTypes.number,useIntersectionObserver:s.PropTypes.bool,scrollPosition:s.PropTypes.shape({x:s.PropTypes.number.isRequired,y:s.PropTypes.number.isRequired}),width:s.PropTypes.oneOfType([s.PropTypes.number,s.PropTypes.string])},p.defaultProps={className:"",placeholder:null,threshold:100,useIntersectionObserver:!0},t.default=p},function(e,t){e.exports=n(3935)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=p(n(0)),a=p(n(5)),s=n(1),l=p(n(13)),c=p(n(14)),u=p(n(2)),f=p(n(15));function p(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var h=function(){return"undefined"==typeof window?0:window.scrollX||window.pageXOffset},y=function(){return"undefined"==typeof window?0:window.scrollY||window.pageYOffset};t.default=function(e){var t=function(t){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=d(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));if(t.useIntersectionObserver=e.useIntersectionObserver&&(0,u.default)(),t.useIntersectionObserver)return d(t);var o=t.onChangeScroll.bind(t);return"debounce"===e.delayMethod?t.delayedScroll=(0,l.default)(o,e.delayTime):"throttle"===e.delayMethod&&(t.delayedScroll=(0,c.default)(o,e.delayTime)),t.state={scrollPosition:{x:h(),y:y()}},t.baseComponentRef=i.default.createRef(),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t),r(n,[{key:"componentDidMount",value:function(){this.addListeners()}},{key:"componentWillUnmount",value:function(){this.removeListeners()}},{key:"componentDidUpdate",value:function(){"undefined"==typeof window||this.useIntersectionObserver||(0,f.default)(a.default.findDOMNode(this.baseComponentRef.current))!==this.scrollElement&&(this.removeListeners(),this.addListeners())}},{key:"addListeners",value:function(){"undefined"==typeof window||this.useIntersectionObserver||(this.scrollElement=(0,f.default)(a.default.findDOMNode(this.baseComponentRef.current)),this.scrollElement.addEventListener("scroll",this.delayedScroll,{passive:!0}),window.addEventListener("resize",this.delayedScroll,{passive:!0}),this.scrollElement!==window&&window.addEventListener("scroll",this.delayedScroll,{passive:!0}))}},{key:"removeListeners",value:function(){"undefined"==typeof window||this.useIntersectionObserver||(this.scrollElement.removeEventListener("scroll",this.delayedScroll),window.removeEventListener("resize",this.delayedScroll),this.scrollElement!==window&&window.removeEventListener("scroll",this.delayedScroll))}},{key:"onChangeScroll",value:function(){this.useIntersectionObserver||this.setState({scrollPosition:{x:h(),y:y()}})}},{key:"render",value:function(){var t=this.props,n=(t.delayMethod,t.delayTime,function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(t,["delayMethod","delayTime"])),r=this.useIntersectionObserver?null:this.state.scrollPosition;return i.default.createElement(e,o({ref:this.baseComponentRef,scrollPosition:r},n))}}]),n}(i.default.Component);return t.propTypes={delayMethod:s.PropTypes.oneOf(["debounce","throttle"]),delayTime:s.PropTypes.number,useIntersectionObserver:s.PropTypes.bool},t.defaultProps={delayMethod:"throttle",delayTime:300,useIntersectionObserver:!0},t}},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.trackWindowScroll=t.LazyLoadComponent=t.LazyLoadImage=void 0;var o=a(n(9)),r=a(n(3)),i=a(n(6));function a(e){return e&&e.__esModule?e:{default:e}}t.LazyLoadImage=o.default,t.LazyLoadComponent=r.default,t.trackWindowScroll=i.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=l(n(0)),a=n(1),s=l(n(3));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={loaded:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"onImageLoad",value:function(){var e=this;return this.state.loaded?null:function(){e.props.afterLoad(),e.setState({loaded:!0})}}},{key:"getImg",value:function(){var e=this.props,t=(e.afterLoad,e.beforeLoad,e.delayMethod,e.delayTime,e.effect,e.placeholder,e.placeholderSrc,e.scrollPosition,e.threshold,e.useIntersectionObserver,e.visibleByDefault,e.wrapperClassName,e.wrapperProps,function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(e,["afterLoad","beforeLoad","delayMethod","delayTime","effect","placeholder","placeholderSrc","scrollPosition","threshold","useIntersectionObserver","visibleByDefault","wrapperClassName","wrapperProps"]));return i.default.createElement("img",o({onLoad:this.onImageLoad()},t))}},{key:"getLazyLoadImage",value:function(){var e=this.props,t=e.beforeLoad,n=e.className,o=e.delayMethod,r=e.delayTime,a=e.height,l=e.placeholder,c=e.scrollPosition,u=e.style,f=e.threshold,p=e.useIntersectionObserver,d=e.visibleByDefault,h=e.width;return i.default.createElement(s.default,{beforeLoad:t,className:n,delayMethod:o,delayTime:r,height:a,placeholder:l,scrollPosition:c,style:u,threshold:f,useIntersectionObserver:p,visibleByDefault:d,width:h},this.getImg())}},{key:"getWrappedLazyLoadImage",value:function(e){var t=this.props,n=t.effect,r=t.height,a=t.placeholderSrc,s=t.width,l=t.wrapperClassName,c=t.wrapperProps,u=this.state.loaded,f=u?" lazy-load-image-loaded":"";return i.default.createElement("span",o({className:l+" lazy-load-image-background "+n+f,style:{backgroundImage:u||!a?"":"url("+a+")",backgroundSize:u||!a?"":"100% 100%",display:"inline-block",height:r,width:s}},c),e)}},{key:"render",value:function(){var e=this.props,t=e.effect,n=e.placeholderSrc,o=e.visibleByDefault,r=e.wrapperClassName,i=e.wrapperProps,a=this.getLazyLoadImage();return(t||n)&&!o||r||i?this.getWrappedLazyLoadImage(a):a}}]),t}(i.default.Component);c.propTypes={afterLoad:a.PropTypes.func,beforeLoad:a.PropTypes.func,delayMethod:a.PropTypes.string,delayTime:a.PropTypes.number,effect:a.PropTypes.string,placeholderSrc:a.PropTypes.string,threshold:a.PropTypes.number,useIntersectionObserver:a.PropTypes.bool,visibleByDefault:a.PropTypes.bool,wrapperClassName:a.PropTypes.string,wrapperProps:a.PropTypes.object},c.defaultProps={afterLoad:function(){return{}},beforeLoad:function(){return{}},delayMethod:"throttle",delayTime:300,effect:"",placeholderSrc:null,threshold:100,useIntersectionObserver:!0,visibleByDefault:!1,wrapperClassName:""},t.default=c},function(e,t,n){"use strict";var o=n(11);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,i,a){if(a!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=s(n(0)),i=s(n(4)),a=s(n(6));function s(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){return r.default.createElement(i.default,this.props)}}]),t}(r.default.Component);t.default=(0,a.default)(l)},function(e,t,n){(function(t){var n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,s="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,c=s||l||Function("return this")(),u=Object.prototype.toString,f=Math.max,p=Math.min,d=function(){return c.Date.now()};function h(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==u.call(e)}(e))return NaN;if(h(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=h(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var s=r.test(e);return s||i.test(e)?a(e.slice(2),s?2:8):o.test(e)?NaN:+e}e.exports=function(e,t,n){var o,r,i,a,s,l,c=0,u=!1,b=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function g(e){var n=e-l;return void 0===l||n>=t||n<0||b&&e-c>=i}function _(){var e=d();if(g(e))return w(e);s=setTimeout(_,function(e){var n=t-(e-l);return b?p(n,i-(e-c)):n}(e))}function w(e){return s=void 0,m&&o?v(e):(o=r=void 0,a)}function j(){var e=d(),n=g(e);if(o=arguments,r=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(_,t),u?v(e):a}(l);if(b)return s=setTimeout(_,t),v(l)}return void 0===s&&(s=setTimeout(_,t)),a}return t=y(t)||0,h(n)&&(u=!!n.leading,i=(b="maxWait"in n)?f(y(n.maxWait)||0,t):i,m="trailing"in n?!!n.trailing:m),j.cancel=function(){void 0!==s&&clearTimeout(s),c=0,o=l=r=s=void 0},j.flush=function(){return void 0===s?a:w(d())},j}}).call(this,n(7))},function(e,t,n){(function(t){var n="Expected a function",o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,s=parseInt,l="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,u=l||c||Function("return this")(),f=Object.prototype.toString,p=Math.max,d=Math.min,h=function(){return u.Date.now()};function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==f.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?s(e.slice(2),n?2:8):r.test(e)?NaN:+e}e.exports=function(e,t,o){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(n);return y(o)&&(r="leading"in o?!!o.leading:r,i="trailing"in o?!!o.trailing:i),function(e,t,o){var r,i,a,s,l,c,u=0,f=!1,m=!1,v=!0;if("function"!=typeof e)throw new TypeError(n);function g(t){var n=r,o=i;return r=i=void 0,u=t,s=e.apply(o,n)}function _(e){var n=e-c;return void 0===c||n>=t||n<0||m&&e-u>=a}function w(){var e=h();if(_(e))return j(e);l=setTimeout(w,function(e){var n=t-(e-c);return m?d(n,a-(e-u)):n}(e))}function j(e){return l=void 0,v&&r?g(e):(r=i=void 0,s)}function x(){var e=h(),n=_(e);if(r=arguments,i=this,c=e,n){if(void 0===l)return function(e){return u=e,l=setTimeout(w,t),f?g(e):s}(c);if(m)return l=setTimeout(w,t),g(c)}return void 0===l&&(l=setTimeout(w,t)),s}return t=b(t)||0,y(o)&&(f=!!o.leading,a=(m="maxWait"in o)?p(b(o.maxWait)||0,t):a,v="trailing"in o?!!o.trailing:v),x.cancel=function(){void 0!==l&&clearTimeout(l),u=0,r=c=i=l=void 0},x.flush=function(){return void 0===l?s:j(h())},x}(e,t,{leading:r,maxWait:t,trailing:i})}}).call(this,n(7))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t){return"undefined"==typeof getComputedStyle?e.style[t]:getComputedStyle(e,null).getPropertyValue(t)},r=function(e){return o(e,"overflow")+o(e,"overflow-y")+o(e,"overflow-x")};t.default=function(e){if(!(e instanceof HTMLElement))return window;for(var t=e;t&&t!==document.body&&t!==document.documentElement&&t.parentNode;){if(/(scroll|auto)/.test(r(t)))return t;t=t.parentNode}return window}}])}},function(e){e.O(0,[996,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);