(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{147:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(161);t(148);a.default=function(){return i.a.createElement(r.a,{bannerHeight:"400px"},i.a.createElement("h1",null,"Blogging"))}},153:function(e,a,t){"use strict";t.d(a,"b",function(){return u});var n=t(0),i=t.n(n),r=t(4),l=t.n(r),c=t(33),o=t.n(c);t.d(a,"a",function(){return o.a});t(154);var s=i.a.createContext({}),u=function(e){return i.a.createElement(s.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},154:function(e,a,t){var n;e.exports=(n=t(160))&&n.default||n},157:function(e,a,t){"use strict";t(163);a.a=function(e,a){var t=(new TextEncoder).encode(JSON.stringify(a)),n=new Blob([t],{type:"application/json;charset=utf-8"});window.particlesJS.load(e,URL.createObjectURL(n),function(){return console.log("loaded")})}},158:function(e,a,t){"use strict";a.a={particles:{number:{value:150,density:{enable:!0,value_area:2e3}},color:{value:"#fb713f"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!1,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#fb713f",opacity:.4,width:1},move:{enable:!0,speed:1,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"repulse"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}},159:function(e){e.exports={data:{site:{siteMetadata:{title:"Liam Dalgarno",navLinks:[{name:"Home",link:"/"},{name:"Blog",link:"/blog"},{name:"Projects",link:"/projects"}],social:[{name:"github",link:"https://github.com/liamdalg"},{name:"linkedin",link:"https://www.linkedin.com/in/liamdalg/"},{name:"twitter",link:"https://twitter.com/Dalgrayno"}]}}}}},160:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),i=t.n(n),r=t(4),l=t.n(r),c=t(55),o=t(2),s=function(e){var a=e.location,t=o.default.getResourcesForPathnameSync(a.pathname);return t?i.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json)):null};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},a.default=s},161:function(e,a,t){"use strict";t(155),t(156);var n=t(7),i=t.n(n),r=t(159),l=t(0),c=t.n(l),o=t(153),s=(t(143),function(e){var a=e.siteTitle,t=e.navLinks;return c.a.createElement("header",{className:"main-header"},c.a.createElement("div",{className:"nav-container",style:{margin:"0 auto",padding:"2rem 0rem"}},c.a.createElement("nav",{className:"navbar"},c.a.createElement("ul",{className:"nav-left"},c.a.createElement("li",null,c.a.createElement(o.a,{to:"/",className:"main-link"},a))),c.a.createElement("ul",{className:"nav-right"},t.map(function(e){var a=e.name,t=e.link;return c.a.createElement("li",{key:"navbar-link-"+a},c.a.createElement(o.a,{to:t,activeClassName:"nav-active",className:"nav-link main-link"},a))}),c.a.createElement("a",{href:"/cv-pub.pdf",target:"_blank",className:"nav-link main-link"},"CV")))))}),u=(t(144),t(157)),d=t(158),m=t(162),p=t(164),v=t(165);m.c.add(p.a),m.c.add(p.b),m.c.add(p.c),m.a.autoAddCss=!1;var b=function(e){function a(){return e.apply(this,arguments)||this}i()(a,e);var t=a.prototype;return t.componentDidMount=function(){Object(u.a)("particles-js",d.a)},t.render=function(){var e=this;return c.a.createElement(o.b,{query:"1973186001",render:function(a){return c.a.createElement(c.a.Fragment,null,c.a.createElement(s,{siteTitle:a.site.siteMetadata.title,navLinks:a.site.siteMetadata.navLinks}),c.a.createElement("div",null,c.a.createElement("div",{style:{position:"relative",backgroundColor:"#161616",width:"100%",height:e.props.bannerHeight}},e.props.banner,c.a.createElement("div",{id:"particles-js",className:"particles"})),c.a.createElement("main",null,e.props.children),c.a.createElement("footer",null,c.a.createElement("div",{className:"footer-wrapper"},c.a.createElement("div",{className:"media-icons-wrapper"},a.site.siteMetadata.social.map(function(e){var a=e.name,t=e.link;return c.a.createElement("a",{className:"media-icon",key:"media-icon-"+a,href:t},c.a.createElement(v.a,{width:48,icon:["fab",a]}))})),c.a.createElement("div",{className:"footer-other"},c.a.createElement("p",null,"liamdalg99@gmail.com"),c.a.createElement("p",null,"© 2019 Liam Dalgarno | Made with GatsbyJS and Github Pages."))))))},data:r})},a}(c.a.Component);a.a=b}}]);
//# sourceMappingURL=component---src-pages-blog-js-46eda9a71ba729048ff5.js.map