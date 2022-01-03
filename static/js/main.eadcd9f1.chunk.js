(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[1],{21:function(e,t,n){"use strict";var c=n(0),i=n(1),a=n(16),r=n(3),l=n(12),s=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),j=s.NODE_ENV,o=s.REACT_APP_GA_TRACKING_ID;"production"===j&&l.a.initialize(o);var u=function(){var e=Object(r.f)().pathname;return Object(i.useEffect)((function(){"production"===j&&(l.a.set({page:e}),l.a.pageview(e))}),[e]),null},b=n(8),h=n(23),d=[{index:!0,label:"Zhiyu Zhou",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Projects",path:"/projects"},{label:"posts",path:"/posts"},{label:"Contact",path:"/contact"}],O=Object(i.lazy)((function(){return n.e(5).then(n.t.bind(null,170,7))})),x=function(){var e=Object(i.useState)(!1),t=Object(h.a)(e,2),n=t[0],a=t[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:n?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return a(!n)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return a(!n)},className:"menu-hover",children:"\u2630"})})})}),Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(O,{right:!0,isOpen:n,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:d.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(b.b,{to:e.path,onClick:function(){return a(!n)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},p=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:d.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(b.b,{to:e.path,children:e.label},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:d.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(b.b,{to:e.path,children:e.label})},e.label)}))})}),Object(c.jsx)(x,{})]})},m=n(25),f=function(){return Object(c.jsxs)("section",{id:"sidebar",children:[Object(c.jsxs)("section",{id:"intro",children:[Object(c.jsx)(b.b,{to:"/",className:"logo",children:Object(c.jsx)("img",{src:"".concat("","/images/me.jpg"),alt:""})}),Object(c.jsxs)("header",{children:[Object(c.jsx)("h2",{children:"Zhiyu Zhou"}),Object(c.jsx)("p",{children:"+44  7902405064"}),Object(c.jsx)("p",{children:Object(c.jsx)("a",{href:"mailto:zhouhoushu@126.com",children:"zhouhoushu@126.com"})})]})]}),Object(c.jsxs)("section",{className:"blurb",children:[Object(c.jsx)("h2",{children:"About"}),Object(c.jsxs)("p",{children:["Hi, I'm Zhiyu. I am a ",Object(c.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://cs.shu.edu.cn/",children:" Shanghai University CS"})," graduate, a current postgraduate student at ",Object(c.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.manchester.ac.uk/study/masters/courses/list/08354/msc-acs-software-engineering/",children:"the University of Manchester (ACS: Software Engineering)"}),", and once the co-founder of Genial(unfortunately shut down already). Before Genial I was at ",Object(c.jsx)("a",{href:"https://www.qiniu.com/",children:"Qiniu Ltd."}),", ",Object(c.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.wudizu.com/zh/",children:"Dangfei Tech"}),", and ",Object(c.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.stec.net/",children:"STEC"}),"."]})]}),Object(c.jsx)("section",{id:"footer",children:Object(c.jsx)(m.a,{})})]})},g=function(){var e=Object(r.f)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},w=function(e){return Object(c.jsxs)(a.b,{children:[Object(c.jsx)(u,{}),Object(c.jsx)(g,{}),Object(c.jsxs)(a.a,{titleTemplate:"%s | Zhiyu Zhou",defaultTitle:"Zhiyu Zhou",defer:!1,children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(p,{}),Object(c.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(c.jsx)(f,{})]})]})};w.defaultProps={children:null,fullPage:!1,title:null,description:"Michael D'Angelo's personal website."};t.a=w},25:function(e,t,n){"use strict";var c=n(0),i=(n(1),n(29)),a=n(30),r=n(31),l=n(32),s=n(33),j=[{link:"https://github.com/Izzy1647",label:"Github",icon:a.faGithub},{link:"https://www.instagram.com/rockabyzzy/",label:"Instagram",icon:r.faInstagram},{link:"https://www.linkedin.com/in/%E4%B9%8B%E6%B8%9D-%E5%91%A8-4672a5104/",label:"LinkedIn",icon:l.faLinkedinIn},{link:"mailto:zhouhoushu@126.com",label:"Email",icon:s.faEnvelope}];t.a=function(){return Object(c.jsx)("ul",{className:"icons",children:j.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.link,children:Object(c.jsx)(i.a,{icon:e.icon})})},e.label)}))})}},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),a=n.n(i),r=n(15),l=n(8),s=n(3),j=n(21),o=(n(46),Object(i.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,166))}))),u=Object(i.lazy)((function(){return n.e(9).then(n.bind(null,167))})),b=Object(i.lazy)((function(){return n.e(11).then(n.bind(null,168))})),h=Object(i.lazy)((function(){return n.e(12).then(n.bind(null,169))})),d=Object(i.lazy)((function(){return n.e(8).then(n.bind(null,173))})),O=Object(i.lazy)((function(){return n.e(7).then(n.bind(null,171))})),x=Object(i.lazy)((function(){return Promise.all([n.e(4),n.e(14)]).then(n.bind(null,172))})),p=Object(i.lazy)((function(){return n.e(13).then(n.bind(null,174))})),m=Object(i.lazy)((function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,175))})),f=function(){return Object(c.jsx)(l.a,{basename:"",children:Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(j.a,{}),children:Object(c.jsxs)(s.c,{children:[Object(c.jsx)(s.a,{exact:!0,path:"/",component:b}),Object(c.jsx)(s.a,{path:"/about",component:o}),Object(c.jsx)(s.a,{path:"/posts",component:p}),Object(c.jsx)(s.a,{path:"/detail",component:m}),Object(c.jsx)(s.a,{path:"/projects",component:d}),Object(c.jsx)(s.a,{path:"/stats",component:x}),Object(c.jsx)(s.a,{path:"/contact",component:u}),Object(c.jsx)(s.a,{path:"/resume",component:O}),Object(c.jsx)(s.a,{component:h,status:404})]})})})},g=function(){return Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(f,{})})},w=document.getElementById("root");w.hasChildNodes()?Object(r.hydrate)(Object(c.jsx)(g,{}),w):Object(r.render)(Object(c.jsx)(g,{}),w)}},[[47,2,3]]]);
//# sourceMappingURL=main.eadcd9f1.chunk.js.map