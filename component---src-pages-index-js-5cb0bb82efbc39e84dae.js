(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),o=r(a("8OQS")),l=r(a("pVnL")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed;return p(t||a).src},p=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=m(t);return g[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,S=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function N(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?N(e,!0):"")+N(e)})).join("")+"<img "+d+s+o+a+r+t+n+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},V=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=e.ariaHidden,s=d.default.createElement(z,(0,l.default)({src:t},i,{ariaHidden:n}));return a.length>1?d.default.createElement("picture",null,r(a),s):s},z=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,l.default)({"aria-hidden":m,sizes:a,srcSet:r,src:i},p,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));z.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var C=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=m(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,g=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,S=e.itemProp,w=e.loading,N=e.draggable,O=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,q=(0,l.default)({opacity:O?1:0,transition:C?"opacity "+y+"ms":"none"},o),P="boolean"==typeof b?"lightgray":b,k={transitionDelay:y+"ms"},x=(0,l.default)({opacity:this.state.imgLoaded?0:1},C&&k,{},o,{},f),j={title:t,alt:this.state.isVisible?"":a,style:x,className:m,itemProp:S};if(g){var T=g,H=p(g);return d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},d.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),P&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:P,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&k)}),H.base64&&d.default.createElement(V,{ariaHidden:!0,src:H.base64,spreadProps:j,imageVariants:T,generateSources:L}),H.tracedSVG&&d.default.createElement(V,{ariaHidden:!0,src:H.tracedSVG,spreadProps:j,imageVariants:T,generateSources:I}),this.state.isVisible&&d.default.createElement("picture",null,E(T),d.default.createElement(z,{alt:a,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:q,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:N})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,l.default)({alt:a,title:t,loading:w},H,{imageVariants:T}))}}))}if(h){var G=h,M=p(h),_=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},n);return"inherit"===n.display&&delete _.display,d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:_,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},P&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:P,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},C&&k)}),M.base64&&d.default.createElement(V,{ariaHidden:!0,src:M.base64,spreadProps:j,imageVariants:G,generateSources:L}),M.tracedSVG&&d.default.createElement(V,{ariaHidden:!0,src:M.tracedSVG,spreadProps:j,imageVariants:G,generateSources:I}),this.state.isVisible&&d.default.createElement("picture",null,E(G),d.default.createElement(z,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:q,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:N})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,l.default)({alt:a,title:t,loading:w},M,{imageVariants:G}))}}))}return null},t}(d.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var q=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),P=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});C.propTypes={resolutions:q,sizes:P,fixed:c.default.oneOfType([q,c.default.arrayOf(q)]),fluid:c.default.oneOfType([P,c.default.arrayOf(P)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var k=C;t.default=k},INYr:function(e,t,a){"use strict";var r=a("XKFU"),i=a("CkkT")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),r(r.P+r.F*s,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return d}));var r=a("q1tI"),i=a.n(r),n=a("9eSz"),s=a.n(n),o=a("Bl7J"),l=(a("sg+I"),a("vrFN"));var d="1817795647",c=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=i.a.createElement("div",{className:"text-centered"},i.a.createElement("div",{className:"absolute-centered splash-info"},i.a.createElement("h1",{className:"splash-title"},i.a.createElement("span",{className:"accent-text"},"l"),"iam",i.a.createElement("span",{className:"accent-text"},"d"),"alg"),i.a.createElement("h4",{className:"splash-subtitle"},"Under construction!")),i.a.createElement("div",{onClick:function(){return document.querySelector("#firstContainer").scrollIntoView({behavior:"smooth"})},className:"arrow-down absolute-centeredX clickable"}));return i.a.createElement(o.a,{bannerHeight:"100vh",noSpacer:!0,banner:e},i.a.createElement(l.a,{title:"Home"}),i.a.createElement("div",{id:"firstContainer",className:"container home-about"},i.a.createElement("h1",{className:"container-title"},"About Me"),i.a.createElement("div",{className:"home-about-left"},i.a.createElement(s.a,{className:"rounded-image about-image",fluid:this.props.data.fileName.childImageSharp.fluid,alt:"A picture of me!"})),i.a.createElement("div",{className:"home-about-right"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a ipsum est. Vivamus ullamcorper sem erat, eu sodales metus finibus eu. Aliquam erat nunc, sagittis nec faucibus non, pulvinar a lectus. Duis leo ante, tempor ut leo sit amet, luctus cursus dolor. Quisque scelerisque sapien a nulla venenatis tincidunt. Quisque ac mauris a justo placerat euismod at bibendum leo. Nam dapibus finibus consequat. Phasellus urna mauris, efficitur et velit ac, posuere congue sapien. Sed nec neque est. In consequat arcu sit amet feugiat laoreet. Phasellus molestie, dolor non semper mattis, orci eros semper felis, vitae feugiat dui arcu ut leo.")),i.a.createElement("div",{className:"container home-projects"},i.a.createElement("h1",{className:"container-title"},"Projects")),i.a.createElement("div",{className:"container home-projects"},i.a.createElement("h1",{className:"container-title"},"Recent Blog Posts")))},r}(i.a.Component);t.default=c}}]);
//# sourceMappingURL=component---src-pages-index-js-5cb0bb82efbc39e84dae.js.map