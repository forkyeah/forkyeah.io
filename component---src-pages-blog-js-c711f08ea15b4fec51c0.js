(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"6Gk8":function(e,t,a){"use strict";a("0mN4");var r=a("dyft"),i=a("q1tI"),n=a.n(i),s=a("Wbzz"),o=a("9eSz"),d=a.n(o),l=a("p3AD");var c="2113895519";t.a=function(){return n.a.createElement(s.StaticQuery,{query:c,render:function(e){var t=e.site.siteMetadata,a=t.author;t.social;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(l.a)(2.5)}},n.a.createElement(d.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(l.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("p",null,"Get smart as fork: "," ",n.a.createElement("a",{href:"http://eepurl.com/cDweO5"},"sign up for the newsletter.")))},data:r})}},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),o=r(a("8OQS")),d=r(a("pVnL")),l=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed;return g(t||a).src},g=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t]}return e[0]},m=Object.create({}),h=function(e){var t=u(e),a=p(t);return m[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,S=y&&window.IntersectionObserver,v=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),l.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function E(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function A(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function R(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},k=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?R(e,!0):"")+R(e)})).join("")+"<img "+l+s+o+a+r+t+n+i+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=l.default.createElement(z,(0,d.default)({src:t},i));return a.length>1?l.default.createElement("picture",null,r(a),n):n},z=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return l.default.createElement("img",(0,d.default)({sizes:a,srcSet:r,src:i},p,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));z.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var V=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&S&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=p(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,m=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,S=e.Tag,v=e.itemProp,E=e.loading,R=e.draggable,L=!1===this.state.fadeIn||this.state.imgLoaded,V=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,d.default)({opacity:L?1:0,transition:V?"opacity "+y+"ms":"none"},o),x="boolean"==typeof b?"lightgray":b,N={transitionDelay:y+"ms"},T=(0,d.default)({opacity:this.state.imgLoaded?0:1},V&&N,{},o,{},f),j={title:t,alt:this.state.isVisible?"":a,style:T,className:p,itemProp:v};if(m){var q=m,P=g(m);return l.default.createElement(S,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},l.default.createElement(S,{style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),x&&l.default.createElement(S,{title:t,style:(0,d.default)({backgroundColor:x,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},V&&N)}),P.base64&&l.default.createElement(O,{src:P.base64,spreadProps:j,imageVariants:q,generateSources:I}),P.tracedSVG&&l.default.createElement(O,{src:P.tracedSVG,spreadProps:j,imageVariants:q,generateSources:A}),this.state.isVisible&&l.default.createElement("picture",null,w(q),l.default.createElement(z,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:E,draggable:R})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,d.default)({alt:a,title:t,loading:E},P,{imageVariants:q}))}}))}if(h){var M=h,B=g(h),G=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:B.width,height:B.height},n);return"inherit"===n.display&&delete G.display,l.default.createElement(S,{className:(r||"")+" gatsby-image-wrapper",style:G,ref:this.handleRef,key:"fixed-"+JSON.stringify(B.srcSet)},x&&l.default.createElement(S,{title:t,style:(0,d.default)({backgroundColor:x,width:B.width,opacity:this.state.imgLoaded?0:1,height:B.height},V&&N)}),B.base64&&l.default.createElement(O,{src:B.base64,spreadProps:j,imageVariants:M,generateSources:I}),B.tracedSVG&&l.default.createElement(O,{src:B.tracedSVG,spreadProps:j,imageVariants:M,generateSources:A}),this.state.isVisible&&l.default.createElement("picture",null,w(M),l.default.createElement(z,{alt:a,title:t,width:B.width,height:B.height,sizes:B.sizes,src:B.src,crossOrigin:this.props.crossOrigin,srcSet:B.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:E,draggable:R})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,d.default)({alt:a,title:t,loading:E},B,{imageVariants:M}))}}))}return null},t}(l.default.Component);V.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),x=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});V.propTypes={resolutions:C,sizes:x,fixed:c.default.oneOfType([C,c.default.arrayOf(C)]),fluid:c.default.oneOfType([x,c.default.arrayOf(x)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var N=V;t.default=N},INYr:function(e,t,a){"use strict";var r=a("XKFU"),i=a("CkkT")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),r(r.P+r.F*s,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},OGtf:function(e,t,a){var r=a("XKFU"),i=a("eeVq"),n=a("vhPU"),s=/"/g,o=function(e,t,a,r){var i=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},dyft:function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAC4jAAAuIwF4pT92AAABL0lEQVQoz42SMYuDQBCF/Zk21pJCSCPap8oPCAaDiIWVQsBaCGLUwiZgIwoWkkCKWFkkBOM7dkEwnu7dNAM7b74dZh6HUfR9/5Xn4vV64f1+L+q5acNQfDwe8H0fnufBcRxEUYTT6QTLsr4A08+5Odjz+cThcEAcxxTI8zxWqxUEQYCiKFRzuVzQNA17ws/nQ3NVVZAkieYkSWAYBkRRRJqmKMsSt9sNpmkiy7KvvkUgadI0DV3X4Xw+U5Bt23Rqkne7HVzXpR8ygeMige33e8iyjPV6jePxSEGbzQaqqqKu67+PMhQIjERRFNhut3R/QRDQt/v9jjzP0bbt7GE4lm2u1yt0Xac7Gw4w1TOvPBUR64Rh+KtG1rJkHW7JwGMRWcF4epbxORZsmOY/oCF+AJo3N6stOIwfAAAAAElFTkSuQmCC","width":50,"height":50,"src":"/static/4a88cedb3e7821deeea2a027651c1026/000d3/forkyeah.png","srcSet":"/static/4a88cedb3e7821deeea2a027651c1026/000d3/forkyeah.png 1x,\\n/static/4a88cedb3e7821deeea2a027651c1026/bc2a0/forkyeah.png 1.5x,\\n/static/4a88cedb3e7821deeea2a027651c1026/89cf4/forkyeah.png 2x"}}},"site":{"siteMetadata":{"author":"Jared Nielsen","social":{"twitter":"forkyeah"}}}}}')},vx99:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return u}));var r=a("q1tI"),i=a.n(r),n=a("Wbzz"),s=a("6Gk8"),o=a("Bl7J"),d=a("vrFN"),l=a("p3AD");var c=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges;return i.a.createElement(o.a,{location:this.props.location,title:t},i.a.createElement(d.a,{title:"All posts",keywords:["blog","gatsby","javascript","react"]}),i.a.createElement(s.a,null),a.map((function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return i.a.createElement("div",{key:t.fields.slug},i.a.createElement("h3",{style:{marginBottom:Object(l.a)(.25)}},i.a.createElement(n.Link,{style:{boxShadow:"none"},to:t.fields.slug},a)),i.a.createElement("small",null,t.frontmatter.date),i.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}}))})))},r}(i.a.Component);t.default=c;var u="2785444898"}}]);
//# sourceMappingURL=component---src-pages-blog-js-c711f08ea15b4fec51c0.js.map