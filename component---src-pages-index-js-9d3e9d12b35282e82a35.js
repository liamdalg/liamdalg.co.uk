(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{145:function(e,a,t){"use strict";t.r(a);t(151),t(152);var n=t(7),r=t.n(n),i=t(0),l=t.n(i),c=t(150),s=(t(170),function(e){function a(){return e.apply(this,arguments)||this}r()(a,e);var t=a.prototype;return t.componentDidMount=function(){var e=(new TextEncoder).encode(JSON.stringify(this.props.config)),a=new Blob([e],{type:"application/json;charset=utf-8"});window.particlesJS.load("particles-js",URL.createObjectURL(a),function(){return console.log("loaded")})},t.render=function(){return l.a.createElement("div",{id:"particles-js",className:"particles"})},a}(l.a.Component)),o={particles:{number:{value:150,density:{enable:!1,value_area:800}},color:{value:"#fb713f"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!1,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#fb713f",opacity:.4,width:1},move:{enable:!0,speed:1,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"repulse"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0},d=t(171);t(172);t.d(a,"query",function(){return u});var u="3065999034",m=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).state={invertedHeader:!1},a.handleScroll=function(){a.setState({invertedHeader:window.pageYOffset+62>=window.innerHeight})},a}r()(a,e);var t=a.prototype;return t.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},t.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},t.render=function(){return l.a.createElement(c.a,{invertedHeader:this.state.invertedHeader},l.a.createElement("div",{className:"home-splash text-centered"},l.a.createElement("div",{className:"absolute-centered splash-info"},l.a.createElement("h1",{className:"splash-title"},l.a.createElement("span",{className:"accent-text"},"l"),"iam",l.a.createElement("span",{className:"accent-text"},"d"),"alg"),l.a.createElement("h4",{className:"splash-subtitle"},"Something goes here."),l.a.createElement("div",{className:"media-icons-wrapper"},this.props.data.site.siteMetadata.social.map(function(e){var a=e.name,t=e.link;return l.a.createElement("a",{className:"media-icon",key:"media-icon-"+a,href:t},l.a.createElement(d.a,{size:"2x",width:48,icon:["fab",a]}))}))),"undefined"!=typeof window&&s&&l.a.createElement(s,{config:o}),l.a.createElement("div",{onClick:function(){return document.querySelector("#firstContainer").scrollIntoView({behavior:"smooth"})},className:"arrow-down absolute-centeredX clickable"})),l.a.createElement("div",{id:"firstContainer",className:"container"},l.a.createElement("h1",{className:"title"},"Hey There."),l.a.createElement("p",null,"Development in progress with Gatsby.")))},a}(l.a.Component);a.default=m},146:function(e,a,t){"use strict";t.d(a,"b",function(){return d});var n=t(0),r=t.n(n),i=t(4),l=t.n(i),c=t(33),s=t.n(c);t.d(a,"a",function(){return s.a});t(147);var o=r.a.createContext({}),d=function(e){return r.a.createElement(o.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},147:function(e,a,t){var n;e.exports=(n=t(149))&&n.default||n},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Liam Dalgarno",navLinks:[{name:"Home",link:"/"},{name:"Blog",link:"/blog"},{name:"Projects",link:"/projects"},{name:"About",link:"/about"}]}}}}},149:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),r=t.n(n),i=t(4),l=t.n(i),c=t(55),s=t(2),o=function(e){var a=e.location,t=s.default.getResourcesForPathnameSync(a.pathname);return t?r.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json)):null};o.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},a.default=o},150:function(e,a,t){"use strict";var n=t(148),r=t(0),i=t.n(r),l=t(146),c=(t(151),t(152),t(154),function(e){var a=e.inverted,t=e.siteTitle,n=e.navLinks;return i.a.createElement("header",{className:"main-header"},i.a.createElement("div",{className:"nav-container",style:{margin:"0 auto",padding:"2rem 0rem"}},i.a.createElement("nav",{className:"navbar"},i.a.createElement("ul",{className:"nav-left"},i.a.createElement("li",null,i.a.createElement(l.a,{to:"/",className:a?"main-link inverted":"main-link"},t))),i.a.createElement("ul",{className:"nav-right"},n.map(function(e){var t=e.name,n=e.link;return i.a.createElement("li",{key:"navbar-link-"+t},i.a.createElement(l.a,{to:n,activeClassName:"nav-active",className:a?"nav-link main-link inverted":"nav-link main-link"},t))})))))}),s=(t(155),t(153)),o=t(156);s.b.add(o.a),s.b.add(o.b),s.b.add(o.c);a.a=function(e){var a=e.invertedHeader,t=e.children;return i.a.createElement(l.b,{query:"1170218135",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(c,{inverted:a,siteTitle:e.site.siteMetadata.title,navLinks:e.site.siteMetadata.navLinks}),i.a.createElement("div",null,i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})}}}]);
//# sourceMappingURL=component---src-pages-index-js-9d3e9d12b35282e82a35.js.map