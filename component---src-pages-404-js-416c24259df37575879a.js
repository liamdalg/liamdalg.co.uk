(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(152),l=a(158);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(l.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},146:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(33),s=a.n(c);a.d(t,"a",function(){return s.a});a(147);var o=r.a.createContext({}),m=function(e){return r.a.createElement(o.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},147:function(e,t,a){var n;e.exports=(n=a(151))&&n.default||n},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Liam Dalgarno",navLinks:[{name:"Home",link:"/"},{name:"Blog",link:"/blog"},{name:"Projects",link:"/projects"}],social:[{name:"github",link:"https://github.com/liamdalg"},{name:"linkedin",link:"https://www.linkedin.com/in/liamdalg/"},{name:"twitter",link:"https://twitter.com/Dalgrayno"}]}}}}},151:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(55),s=a(2),o=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=o},152:function(e,t,a){"use strict";a(149),a(148);var n=a(150),r=a(0),i=a.n(r),l=a(146),c=(a(154),function(e){var t=e.siteTitle,a=e.navLinks;return i.a.createElement("header",{className:"main-header"},i.a.createElement("div",{className:"nav-container",style:{margin:"0 auto",padding:"2rem 0rem"}},i.a.createElement("nav",{className:"navbar"},i.a.createElement("ul",{className:"nav-left"},i.a.createElement("li",null,i.a.createElement(l.a,{to:"/",className:"main-link"},t))),i.a.createElement("ul",{className:"nav-right"},a.map(function(e){var t=e.name,a=e.link;return i.a.createElement("li",{key:"navbar-link-"+t},i.a.createElement(l.a,{to:a,activeClassName:"nav-active",className:"nav-link main-link"},t))}),i.a.createElement("a",{href:"/cv-pub.pdf",target:"_blank",className:"nav-link main-link"},"CV")))))}),s=(a(155),a(153)),o=a(156),m=a(157);s.c.add(o.a),s.c.add(o.b),s.c.add(o.c),s.a.autoAddCss=!1;t.a=function(e){var t=e.invertedHeader,a=e.children;return i.a.createElement(l.b,{query:"1196550220",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(c,{inverted:t,siteTitle:e.site.siteMetadata.title,navLinks:e.site.siteMetadata.navLinks}),i.a.createElement("div",null,i.a.createElement("main",null,a),i.a.createElement("footer",null,i.a.createElement("div",{className:"footer-wrapper"},i.a.createElement("div",{className:"media-icons-wrapper"},e.site.siteMetadata.social.map(function(e){var t=e.name,a=e.link;return i.a.createElement("a",{className:"media-icon",key:"media-icon-"+t,href:a},i.a.createElement(m.a,{width:48,icon:["fab",t]}))})),i.a.createElement("div",{className:"footer-other"},i.a.createElement("p",null,"liamdalg99@gmail.com"),i.a.createElement("p",null,"© 2019 Liam Dalgarno | Made with GatsbyJS and Github Pages."))))))},data:n})}},158:function(e,t,a){"use strict";var n=a(159),r=a(0),i=a.n(r),l=a(4),c=a.n(l),s=a(161),o=a.n(s);function m(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,c=e.title,s=n.data.site,m=t||s.siteMetadata.description;return i.a.createElement(o.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:c},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:m}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=m},159:function(e){e.exports={data:{site:{siteMetadata:{title:"Liam Dalgarno",description:"Personal blog built with Gatsby.",author:"@liamdalg"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-416c24259df37575879a.js.map