(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{167:function(t,e,a){"use strict";a.r(e);var n=a(5),r=(a(0),a(224)),i=a.n(r),o=a(322),c=a.n(o),l=a(260),s=a(185),d=a(222),p=a(176),m=(a(91),a(175)),u=a(950),b=a(951),g={name:"4g6ai3",styles:"cursor:pointer;"},j=function(t){var e=t.url,a=t.title,r=t.twitterHandle;return Object(n.d)("div",{css:Object(n.c)("display:flex;align-items:center;justify-content:flex-start;div{margin-right:20px;cursor:pointer;:hover{color:",m.a.brand.primary,";}}span{margin-right:20px;font-size:70%;text-transform:uppercase;line-height:2.5;opacity:0.7;}")},Object(n.d)("div",{css:Object(n.c)("flex-grow:1;border-top:1px solid ",m.a.colors.gray,";")}),Object(n.d)("span",null,"Share article"),Object(n.d)(u.a,{url:e,quote:a,via:r.split("@").join("")},"Twitter"),Object(n.d)(b.a,{url:e,quote:a,via:r.split("@").join(""),css:g},"Facebook"))},h=a(199),f=a.n(h),O=a(186);a.d(e,"default",function(){return x}),a.d(e,"pageQuery",function(){return v});var y={name:"1age63q",styles:"width:100%;display:flex;"},w={name:"1u211r5",styles:"text-align:center;margin-bottom:20px;"};function x(t){var e=t.data,a=e.site,r=e.mdx,o=t.pageContext,m=(o.next,o.prev,r.frontmatter.author||f.a.author),u=r.frontmatter.date,b=r.frontmatter.title,g=r.frontmatter.banner;return Object(n.d)(d.a,{site:a,frontmatter:r.frontmatter},Object(n.d)(l.a,{frontmatter:r.frontmatter,isBlogPost:!0}),Object(n.d)("article",{css:y},Object(n.d)(s.a,null,Object(n.d)("h1",{css:w},b),Object(n.d)("div",{css:Object(n.c)("display:flex;justify-content:center;margin-bottom:20px;h3,span{text-align:center;font-size:15px;opacity:0.6;font-family:",p.b.regular,",sans-serif;font-weight:normal;margin:0 5px;}")},m&&Object(n.d)("h3",null,m),m&&Object(n.d)("span",null,"—"),u&&Object(n.d)("h3",null,u)),g&&Object(n.d)("div",{css:Object(n.c)("padding:30px;",O.a,"{padding:0;}")},Object(n.d)(i.a,{sizes:g.childImageSharp.fluid,alt:a.siteMetadata.keywords.join(", ")})),Object(n.d)("br",null),Object(n.d)(c.a,null,r.code.body))),Object(n.d)(s.a,{noVerticalPadding:!0},Object(n.d)(j,{url:f.a.siteUrl+"/"+r.frontmatter.slug+"/",title:b,twitterHandle:f.a.twitterHandle}),Object(n.d)("br",null)))}var v="3267494078"},225:function(t){t.exports={data:{site:{siteMetadata:{title:"DoubleDutch Develper Platform",description:"Information for building on the DoubleDutch platform",canonicalUrl:"https://doubledutch.github.io",image:"images/logo.png",author:{name:"Adam Liechty"},organization:{name:"DoubleDutch, Inc.",url:"https://doubledutch.github.io",logo:"images/logo.png"},social:{twitter:"@doubledutch",fbAppID:""}}}}}},260:function(t,e,a){"use strict";var n=a(5),r=a(225),i=a(226),o=a.n(i),c=a(0),l=a.n(c),s=a(198),d=a.n(s),p=a(41),m=a(1),u=a.n(m),b=(a(227),l.a.memo(function(t){var e=t.author,a=t.canonicalUrl,r=t.datePublished,i=t.defaultTitle,o=t.description,c=t.image,l=t.isBlogPost,s=t.organization,p=t.title,m=t.url,u=[{"@context":"http://schema.org","@type":"WebSite",url:m,name:p,alternateName:i}],b=l?[].concat(u,[{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":m,name:p,image:c}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:m,name:p,alternateName:i,headline:p,image:{"@type":"ImageObject",url:c},description:o,author:{"@type":"Person",name:e.name},publisher:{"@type":"Organization",url:s.url,logo:s.logo,name:s.name},mainEntityOfPage:{"@type":"WebSite","@id":a},datePublished:r}]):u;return Object(n.d)(d.a,null,Object(n.d)("script",{type:"application/ld+json"},JSON.stringify(b)))})),g=a(199),j=a.n(g),h=function(t){var e=t.postData,a=t.frontmatter,i=void 0===a?{}:a,c=t.postImage,s=t.isBlogPost;return Object(n.d)(p.StaticQuery,{query:"3550155404",render:function(t){var a=t.site.siteMetadata,r=i||e.childMarkdownRemark.frontmatter||{},p=s?r.title:j.a.siteTitle,m=r.description||a.description,u=c?""+a.canonicalUrl+c:a.image,g=r.slug?""+a.canonicalUrl+o.a.sep+r.slug:a.canonicalUrl,h=!!s&&r.datePublished;return Object(n.d)(l.a.Fragment,null,Object(n.d)(d.a,null,Object(n.d)("title",null,p),Object(n.d)("meta",{name:"description",content:m}),Object(n.d)("meta",{name:"image",content:u}),Object(n.d)("meta",{property:"og:url",content:g}),s?Object(n.d)("meta",{property:"og:type",content:"article"}):null,Object(n.d)("meta",{property:"og:title",content:p}),Object(n.d)("meta",{property:"og:description",content:m}),Object(n.d)("meta",{property:"og:image",content:u}),Object(n.d)("meta",{property:"fb:app_id",content:a.social.fbAppID}),Object(n.d)("meta",{name:"twitter:card",content:"summary_large_image"}),Object(n.d)("meta",{name:"twitter:creator",content:a.social.twitter}),Object(n.d)("meta",{name:"twitter:title",content:p}),Object(n.d)("meta",{name:"twitter:description",content:m}),Object(n.d)("meta",{name:"twitter:image",content:u})),Object(n.d)(b,{isBlogPost:s,url:g,title:p,image:u,description:m,datePublished:h,canonicalUrl:a.canonicalUrl,author:a.author,organization:a.organization,defaultTitle:a.title}))},data:r})};h.propTypes={isBlogPost:u.a.bool,postData:u.a.shape({childMarkdownRemark:u.a.shape({frontmatter:u.a.any,excerpt:u.a.any})}),postImage:u.a.string},h.defaultProps={isBlogPost:!1,postData:{childMarkdownRemark:{}},postImage:null};e.a=h}}]);
//# sourceMappingURL=component---src-templates-post-js-e3e084fab9a51ca01bd3.js.map