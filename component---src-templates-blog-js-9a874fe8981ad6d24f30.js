(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{162:function(t,e,r){"use strict";r.r(e),r.d(e,"pageQuery",function(){return g});r(89);var a=r(5),i=(r(0),r(224)),n=r.n(i),o=r(184),s=r(262),l=r(222),c=r(246),d=r(185),u={name:"1o1ayn1",styles:"a,p{}h2{a{color:inherit;}}small{display:block;}"},f={name:"x566xh",styles:"margin-top:30px;margin-bottom:10px;"},p={name:"1q7njkh",styles:"margin-top:10px;"},h={name:"15ijm9t",styles:"margin:50px 0;"};e.default=function(t){var e=t.data,r=e.site,i=e.allMdx,g=t.pageContext,m=g.pagination,b=(g.categories,m.page),y=m.nextPagePath,v=m.previousPagePath,w=b.map(function(t){return i.edges.find(function(e){return e.node.id===t&&"pages"!==e.node.parent.sourceInstanceName})}).filter(function(t){return void 0!==t});return Object(a.d)(l.a,{site:r},Object(a.d)(s.a,null),Object(a.d)(o.a,{noVerticalPadding:!0,css:u},w.map(function(t){var e=t.node;return Object(a.d)("div",{key:e.id,css:Object(a.c)(":not(:first-of-type){margin-top:20px;",d.a,"{margin-top:20px;}}:first-of-type{margin-top:20px;",d.a,"{margin-top:20px;}}.gatsby-image-wrapper{}background:white;padding:40px;",d.a,"{padding:20px;}display:flex;flex-direction:column;")},e.frontmatter.banner&&Object(a.d)("div",{css:Object(a.c)("padding:60px 60px 40px 60px;",d.a,"{padding:20px;}")},Object(a.d)(c.a,{"aria-label":"View "+e.frontmatter.title+" article",to:"/"+e.fields.slug},Object(a.d)(n.a,{sizes:e.frontmatter.banner.childImageSharp.fluid}))),Object(a.d)("h2",{css:f},Object(a.d)(c.a,{"aria-label":"View "+e.frontmatter.title+" article",to:"/"+e.fields.slug},e.frontmatter.title)),Object(a.d)("p",{css:p},e.excerpt)," ",Object(a.d)(c.a,{to:"/"+e.fields.slug,"aria-label":'view "'+e.frontmatter.title+'" article'},"Read Article →"))}),Object(a.d)("br",null),Object(a.d)("br",null),Object(a.d)("div",null,y&&Object(a.d)(c.a,{to:y,"aria-label":"View next page"},"Next Page →"),v&&Object(a.d)(c.a,{to:v,"aria-label":"View previous page"},"← Previous Page")),Object(a.d)("hr",{css:h})))};var g="3387118337"},207:function(t,e){var r,a,i=t.exports={};function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(t){if(r===setTimeout)return setTimeout(t,0);if((r===n||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:n}catch(t){r=n}try{a="function"==typeof clearTimeout?clearTimeout:o}catch(t){a=o}}();var l,c=[],d=!1,u=-1;function f(){d&&l&&(d=!1,l.length?c=l.concat(c):u=-1,c.length&&p())}function p(){if(!d){var t=s(f);d=!0;for(var e=c.length;e;){for(l=c,c=[];++u<e;)l&&l[u].run();u=-1,e=c.length}l=null,d=!1,function(t){if(a===clearTimeout)return clearTimeout(t);if((a===o||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(t);try{a(t)}catch(e){try{return a.call(null,t)}catch(e){return a.call(this,t)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function g(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];c.push(new h(t,e)),1!==c.length||d||s(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=g,i.addListener=g,i.once=g,i.off=g,i.removeListener=g,i.removeAllListeners=g,i.emit=g,i.prependListener=g,i.prependOnceListener=g,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},224:function(t,e,r){"use strict";var a=r(8);e.__esModule=!0,e.default=void 0;var i,n=a(r(9)),o=a(r(42)),s=a(r(86)),l=a(r(40)),c=a(r(0)),d=a(r(1)),u=function(t){var e=(0,l.default)({},t);return e.resolutions&&(e.fixed=e.resolutions,delete e.resolutions),e.sizes&&(e.fluid=e.sizes,delete e.sizes),e},f={},p=function(t){var e=u(t),r=e.fluid?e.fluid.src:e.fixed.src;return f[r]||!1},h=[];var g=function(t,e){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(t){t.forEach(function(t){h.forEach(function(e){e[0]===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(i.unobserve(e[0]),e[1]())})})},{rootMargin:"200px"})),i).observe(t),h.push([t,e])},m=function(t){var e=t.src?'src="'+t.src+'" ':'src="" ',r=t.sizes?'sizes="'+t.sizes+'" ':"",a=t.srcSetWebp?"<source type='image/webp' srcSet=\""+t.srcSetWebp+'" '+r+"/>":"",i=t.srcSet?'<source srcSet="'+t.srcSet+'" '+r+"/>":"",n=t.title?'title="'+t.title+'" ':"",o=t.alt?'alt="'+t.alt+'" ':'alt="" ',s=t.width?'width="'+t.width+'" ':"",l=t.height?'height="'+t.height+'" ':"",c=t.opacity?t.opacity:"1";return"<picture>"+a+i+"<img "+s+l+e+o+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(t.transitionDelay?t.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=c.default.forwardRef(function(t,e){var r=t.style,a=t.onLoad,i=t.onError,n=(0,s.default)(t,["style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({},n,{onLoad:a,onError:i,ref:e,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))});b.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var y=function(t){function e(e){var r;r=t.call(this,e)||this;var a=!0,i=!1,n=e.fadeIn,s=p(e);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=!1,i=!0),"undefined"==typeof window&&(a=!1),e.critical&&(a=!0,i=!1);var l=!(r.props.critical&&!r.props.fadeIn);return r.state={isVisible:a,imgLoaded:!1,IOSupported:i,fadeIn:n,hasNoScript:l,seenBefore:s},r.imageRef=c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,o.default)((0,o.default)(r))),r.handleRef=r.handleRef.bind((0,o.default)((0,o.default)(r))),r}(0,n.default)(e,t);var r=e.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var t=this.imageRef.current;t&&t.complete&&this.handleImageLoaded()}},r.handleRef=function(t){var e=this;this.state.IOSupported&&t&&g(t,function(){e.state.isVisible||"function"!=typeof e.props.onStartLoad||e.props.onStartLoad({wasCached:p(e.props)}),e.setState({isVisible:!0,imgLoaded:!1})})},r.handleImageLoaded=function(){var t,e,r;t=this.props,e=u(t),r=e.fluid?e.fluid.src:e.fixed.src,f[r]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var t=u(this.props),e=t.title,r=t.alt,a=t.className,i=t.style,n=void 0===i?{}:i,o=t.imgStyle,s=void 0===o?{}:o,d=t.placeholderStyle,f=void 0===d?{}:d,p=t.placeholderClassName,h=t.fluid,g=t.fixed,y=t.backgroundColor,v=t.Tag,w="boolean"==typeof y?"lightgray":y,j=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,f),S=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),O={title:e,alt:this.state.isVisible?"":r,style:j,className:p};if(h){var x=h;return c.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(x.srcSet)},c.default.createElement(v,{style:{width:"100%",paddingBottom:100/x.aspectRatio+"%"}}),x.base64&&c.default.createElement(b,(0,l.default)({src:x.base64},O)),x.tracedSVG&&c.default.createElement(b,(0,l.default)({src:x.tracedSVG},O)),w&&c.default.createElement(v,{title:e,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,x.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),c.default.createElement("source",{srcSet:x.srcSet,sizes:x.sizes}),c.default.createElement(b,{alt:r,title:e,src:x.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:r,title:e},x))}}))}if(g){var E=g,L=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:E.width,height:E.height},n);return"inherit"===n.display&&delete L.display,c.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:L,ref:this.handleRef,key:"fixed-"+JSON.stringify(E.srcSet)},E.base64&&c.default.createElement(b,(0,l.default)({src:E.base64},O)),E.tracedSVG&&c.default.createElement(b,(0,l.default)({src:E.tracedSVG},O)),w&&c.default.createElement(v,{title:e,style:{backgroundColor:w,width:E.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:E.height}}),this.state.isVisible&&c.default.createElement("picture",null,E.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:E.srcSetWebp,sizes:E.sizes}),c.default.createElement("source",{srcSet:E.srcSet,sizes:E.sizes}),c.default.createElement(b,{alt:r,title:e,width:E.width,height:E.height,src:E.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:r,title:e,width:E.width,height:E.height},E))}}))}return null},e}(c.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var v=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),w=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});y.propTypes={resolutions:v,sizes:w,fixed:v,fluid:w,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string};var j=y;e.default=j},225:function(t){t.exports={data:{site:{siteMetadata:{title:"DoubleDutch Develper Platform",description:"Information for building on the DoubleDutch platform",canonicalUrl:"https://doubledutch.github.io",image:"images/logo.png",author:{name:"DoubleDutch"},organization:{name:"DoubleDutch, Inc.",url:"https://doubledutch.github.io",logo:"images/logo.png"},social:{twitter:"@doubledutch",fbAppID:""}}}}}},226:function(t,e,r){(function(t){function r(t,e){for(var r=0,a=t.length-1;a>=0;a--){var i=t[a];"."===i?t.splice(a,1):".."===i?(t.splice(a,1),r++):r&&(t.splice(a,1),r--)}if(e)for(;r--;r)t.unshift("..");return t}var a=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,i=function(t){return a.exec(t).slice(1)};function n(t,e){if(t.filter)return t.filter(e);for(var r=[],a=0;a<t.length;a++)e(t[a],a,t)&&r.push(t[a]);return r}e.resolve=function(){for(var e="",a=!1,i=arguments.length-1;i>=-1&&!a;i--){var o=i>=0?arguments[i]:t.cwd();if("string"!=typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(e=o+"/"+e,a="/"===o.charAt(0))}return(a?"/":"")+(e=r(n(e.split("/"),function(t){return!!t}),!a).join("/"))||"."},e.normalize=function(t){var a=e.isAbsolute(t),i="/"===o(t,-1);return(t=r(n(t.split("/"),function(t){return!!t}),!a).join("/"))||a||(t="."),t&&i&&(t+="/"),(a?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(n(t,function(t,e){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},e.relative=function(t,r){function a(t){for(var e=0;e<t.length&&""===t[e];e++);for(var r=t.length-1;r>=0&&""===t[r];r--);return e>r?[]:t.slice(e,r-e+1)}t=e.resolve(t).substr(1),r=e.resolve(r).substr(1);for(var i=a(t.split("/")),n=a(r.split("/")),o=Math.min(i.length,n.length),s=o,l=0;l<o;l++)if(i[l]!==n[l]){s=l;break}var c=[];for(l=s;l<i.length;l++)c.push("..");return(c=c.concat(n.slice(s))).join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){var e=i(t),r=e[0],a=e[1];return r||a?(a&&(a=a.substr(0,a.length-1)),r+a):"."},e.basename=function(t,e){var r=i(t)[2];return e&&r.substr(-1*e.length)===e&&(r=r.substr(0,r.length-e.length)),r},e.extname=function(t){return i(t)[3]};var o="b"==="ab".substr(-1)?function(t,e,r){return t.substr(e,r)}:function(t,e,r){return e<0&&(e=t.length+e),t.substr(e,r)}}).call(this,r(207))},262:function(t,e,r){"use strict";var a=r(5),i=r(225),n=r(226),o=r.n(n),s=r(0),l=r.n(s),c=r(198),d=r.n(c),u=r(41),f=r(1),p=r.n(f),h=(r(227),l.a.memo(function(t){var e=t.author,r=t.canonicalUrl,i=t.datePublished,n=t.defaultTitle,o=t.description,s=t.image,l=t.isBlogPost,c=t.organization,u=t.title,f=t.url,p=[{"@context":"http://schema.org","@type":"WebSite",url:f,name:u,alternateName:n}],h=l?[].concat(p,[{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":f,name:u,image:s}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:f,name:u,alternateName:n,headline:u,image:{"@type":"ImageObject",url:s},description:o,author:{"@type":"Person",name:e.name},publisher:{"@type":"Organization",url:c.url,logo:c.logo,name:c.name},mainEntityOfPage:{"@type":"WebSite","@id":r},datePublished:i}]):p;return Object(a.d)(d.a,null,Object(a.d)("script",{type:"application/ld+json"},JSON.stringify(h)))})),g=r(199),m=r.n(g),b=function(t){var e=t.postData,r=t.frontmatter,n=void 0===r?{}:r,s=t.postImage,c=t.isBlogPost;return Object(a.d)(u.StaticQuery,{query:"3550155404",render:function(t){var r=t.site.siteMetadata,i=n||e.childMarkdownRemark.frontmatter||{},u=c?i.title:m.a.siteTitle,f=i.description||r.description,p=s?""+r.canonicalUrl+s:r.image,g=i.slug?""+r.canonicalUrl+o.a.sep+i.slug:r.canonicalUrl,b=!!c&&i.datePublished;return Object(a.d)(l.a.Fragment,null,Object(a.d)(d.a,null,Object(a.d)("title",null,u),Object(a.d)("meta",{name:"description",content:f}),Object(a.d)("meta",{name:"image",content:p}),Object(a.d)("meta",{property:"og:url",content:g}),c?Object(a.d)("meta",{property:"og:type",content:"article"}):null,Object(a.d)("meta",{property:"og:title",content:u}),Object(a.d)("meta",{property:"og:description",content:f}),Object(a.d)("meta",{property:"og:image",content:p}),Object(a.d)("meta",{property:"fb:app_id",content:r.social.fbAppID}),Object(a.d)("meta",{name:"twitter:card",content:"summary_large_image"}),Object(a.d)("meta",{name:"twitter:creator",content:r.social.twitter}),Object(a.d)("meta",{name:"twitter:title",content:u}),Object(a.d)("meta",{name:"twitter:description",content:f}),Object(a.d)("meta",{name:"twitter:image",content:p})),Object(a.d)(h,{isBlogPost:c,url:g,title:u,image:p,description:f,datePublished:b,canonicalUrl:r.canonicalUrl,author:r.author,organization:r.organization,defaultTitle:r.title}))},data:i})};b.propTypes={isBlogPost:p.a.bool,postData:p.a.shape({childMarkdownRemark:p.a.shape({frontmatter:p.a.any,excerpt:p.a.any})}),postImage:p.a.string},b.defaultProps={isBlogPost:!1,postData:{childMarkdownRemark:{}},postImage:null};e.a=b}}]);
//# sourceMappingURL=component---src-templates-blog-js-9a874fe8981ad6d24f30.js.map