(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[43],{289:function(e,t,n){"use strict";n.r(t);var i=n(1),l=n(3),c=n.n(l),o=n(18),a=n(6),r=n(0),s=n(24),u=n(2),d=n(20),v=n(13),j=n(69),b=(n(404),n(135)),O=n(355),f=n(325),m=n(314),h=n(7),p=n(42),g=n(335),x=Object(u.lazy)((function(){return Promise.all([n.e(3),n.e(13)]).then(n.bind(null,321))})),w=Object(u.lazy)((function(){return n.e(16).then(n.bind(null,319))})),y=Object(u.lazy)((function(){return n.e(7).then(n.bind(null,343))})),_=Object(u.lazy)((function(){return n.e(17).then(n.bind(null,311))})),z=Object(u.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(14)]).then(n.bind(null,320))})),k=Object(u.lazy)((function(){return n.e(6).then(n.bind(null,350))})),L=Object(u.lazy)((function(){return Promise.resolve().then(n.bind(null,100))})),S=Object(u.lazy)((function(){return n.e(4).then(n.bind(null,322))})),E=Object(u.lazy)((function(){return Promise.all([n.e(1),n.e(8)]).then(n.bind(null,342))})),P=Object(u.lazy)((function(){return n.e(5).then(n.bind(null,351))})),N=Object(u.lazy)((function(){return Promise.resolve().then(n.bind(null,99))})),H=Object(u.lazy)((function(){return Promise.resolve().then(n.bind(null,98))})),R=Object(u.lazy)((function(){return n.e(10).then(n.bind(null,379))})),T=Object(u.lazy)((function(){return n.e(9).then(n.bind(null,352))})),W=Object(u.lazy)((function(){return n.e(15).then(n.bind(null,340))})),B=Object(u.lazy)((function(){return n.e(11).then(n.bind(null,364))}));t.default=function(){var e,t=Object(u.useRef)(null),n=Object(u.useRef)(null),l=Object(u.useState)(!1),M=Object(a.a)(l,2),Y=M[0],I=M[1],X=Object(u.useState)(!1),A=Object(a.a)(X,2),C=A[0],F=A[1],J=Object(u.useState)(""),q=Object(a.a)(J,2),K=q[0],D=q[1],G=function(){if(t&&t.current){var e=p.a?window.pageYOffset+t.current.clientHeight+194+186:window.pageYOffset+t.current.clientHeight+194,i=t.current.getBoundingClientRect().top+t.current.clientHeight;e>=i||t.current.classList.remove("stick-icon"),Q(n.current)&&t.current.classList.contains("stick-icon")&&t.current.classList.remove("stick-icon"),Q(n.current)||t.current.classList.contains("stick-icon")||e>=i&&t.current.classList.add("stick-icon")}},Q=function(e){for(var t=e.offsetTop,n=e.offsetLeft,i=e.offsetWidth,l=e.offsetHeight;e.offsetParent;)t+=(e=e.offsetParent).offsetTop,n+=e.offsetLeft;return t<window.pageYOffset+window.innerHeight&&n<window.pageXOffset+window.innerWidth&&t+l>window.pageYOffset&&n+i>window.pageXOffset},U=Object(u.useState)([]),V=Object(a.a)(U,2),Z=V[0],$=V[1],ee=Object(u.useState)([]),te=Object(a.a)(ee,2),ne=te[0],ie=te[1],le=Object(u.useState)([]),ce=Object(a.a)(le,2),oe=ce[0],ae=ce[1],re=Object(u.useState)([]),se=Object(a.a)(re,2),ue=se[0],de=se[1],ve=Object(u.useState)({}),je=Object(a.a)(ve,2),be=je[0],Oe=je[1],fe=Object(u.useState)(null),me=Object(a.a)(fe,2),he=me[0],pe=me[1],ge=Object(d.b)(),xe=Object(d.c)((function(e){return e.homeReducer})),we=Object(d.c)((function(e){return e.navReducer})),ye=function(){var e=Object(o.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(Object(s.isEmpty)(Z)||Object(s.isEmpty)(oe)||Object(s.isEmpty)(ue)||Object(s.isEmpty)(ne)||Object(s.isEmpty)(be))){e.next=22;break}return e.prev=1,F(!0),e.next=5,Object(v.d)("welcome/");case 5:t=e.sent,n=Object(s.get)(t,"dynamic_links"),D(null===t||void 0===t?void 0:t.timestamp),de(t.body),Oe(t.meta),$(null===n||void 0===n?void 0:n.navigation),ie(null===n||void 0===n?void 0:n.footer),ae(null===t||void 0===t?void 0:t.form_fields),pe(t),ge(j.a(null===t||void 0===t?void 0:t.highlight_message)),F(!1),!xe.isOpenModalMail&&setTimeout((function(){I(!0),ge(j.b(!0))}),3e4),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(1),F(!1);case 22:case"end":return e.stop()}}),e,null,[[1,19]])})));return function(){return e.apply(this,arguments)}}();Object(u.useEffect)((function(){Object(o.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ye();case 2:return window.addEventListener("scroll",G),e.abrupt("return",(function(){window.removeEventListener("scroll",(function(){return G}))}));case 4:case"end":return e.stop()}}),e)})))()}),[]),Object(u.useEffect)((function(){if(!Object(s.isEmpty)(null===we||void 0===we?void 0:we.basic_settings)){var e=Object(i.a)({},be);Oe(Object(i.a)(Object(i.a)({},e),we.basic_settings))}}),[we]);var _e=function(){I(!Y)},ze=(null===be||void 0===be?void 0:be.seo_title)?be.seo_title:h.X,ke=(null===be||void 0===be?void 0:be.search_description)?be.search_description:h.W;return Object(g.a)(he),Object(r.jsxs)("div",{className:"site-homepage",children:[Object(r.jsxs)(b.a,{children:[Object(r.jsx)("title",{children:ze}),Object(r.jsx)("meta",{name:"description",content:ke}),Object(r.jsx)("meta",{property:"og:title",content:ze}),Object(r.jsx)("meta",{property:"og:description",content:ke}),Object(r.jsx)("meta",{property:"og:image",content:(null===be||void 0===be||null===(e=be.og_image)||void 0===e?void 0:e.original)||O.a}),Object(r.jsx)("meta",{property:"og:type",content:"website"}),Object(r.jsx)("meta",{name:"robots",content:"index, follow"}),Object(r.jsx)("meta",{name:"revisit-after",content:"3 month"})]}),C?Object(r.jsx)(N,{}):"",Object(r.jsx)("div",{style:{minHeight:"100vh"},children:Object(s.map)(ue,(function(e,n){var i,l,c,o,a,s,u,d,v,j,b,O,h;switch(e.type){case"carousel":return Object(r.jsx)(y,{slides:e&&e.value?null===e||void 0===e?void 0:e.value.slides:[],dragOrAuto:!0,maxWidth:e&&e.value?null===e||void 0===e?void 0:e.value.max_width:""},n);case"spotlight":return Object(r.jsx)(k,{headline:null===e||void 0===e?void 0:e.value.headline,items:null===e||void 0===e?void 0:e.value.rows},n);case"countdown":return Object(r.jsx)(E,{data:null===e||void 0===e?void 0:e.value,timestamp:K},n);case"video":return Object(r.jsx)(S,{data:null===e||void 0===e?void 0:e.value,title:(null===e||void 0===e||null===(i=e.value)||void 0===i?void 0:i.title)||"",showReadmore:!0},n);case"icons":return Object(r.jsx)("div",{className:"main-content",ref:t||"",children:Object(r.jsx)(m.default,{iconList:(null===(l=e.value)||void 0===l?void 0:l.icons)||[]})},n);case"product":return Object(r.jsx)(z,{isInHomePage:!0,productList:null===e||void 0===e?void 0:e.value.products,title:null===e||void 0===e||null===(c=e.value)||void 0===c?void 0:c.headline,hasScrollButtons:!0},n);case"paragraph":return Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"content-slide",dangerouslySetInnerHTML:{__html:null===e||void 0===e||null===(o=e.value)||void 0===o?void 0:o.text}})},n);case"title":return Object(r.jsx)(w,{title:null===e||void 0===e||null===(a=e.value)||void 0===a?void 0:a.title},n);case"images":return Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"images-box-default",children:[Object(r.jsx)("div",{className:"wrapper-img row-span",children:Object(r.jsx)(H,{data:null===e||void 0===e||null===(s=e.value)||void 0===s||null===(u=s.images)||void 0===u?void 0:u.big})}),Object(r.jsx)("div",{className:"wrapper-img",children:Object(r.jsx)(H,{data:null===e||void 0===e||null===(d=e.value)||void 0===d||null===(v=d.images)||void 0===v?void 0:v.top_left})}),Object(r.jsx)("div",{className:"wrapper-img",children:Object(r.jsx)(H,{data:null===e||void 0===e||null===(j=e.value)||void 0===j||null===(b=j.images)||void 0===b?void 0:b.bottom_left})})]})},n);case"bloglist":return Object(r.jsx)(P,{blogList:null===e||void 0===e?void 0:e.value,title:"Sundora Blogs"},n);case"form":return"True"==(null===e||void 0===e||null===(O=e.value)||void 0===O?void 0:O.modal)?Object(r.jsx)(L,{isOpen:Y,minWidth:"36%",maskBg:!1,onKeyPress:function(){I(!1)},onClickAway:function(){return _e()},children:Object(r.jsx)(f.a,{content:null===e||void 0===e?void 0:e.value,formField:oe,url:be.html_url,closeModal:_e})},n):Object(r.jsx)(T,{content:null===e||void 0===e?void 0:e.value,formField:oe,url:be.html_url},n);case"instagram":return Object(r.jsx)(R,{widgetId:null===e||void 0===e||null===(h=e.value)||void 0===h?void 0:h.widget},n);case"questionnaire":return Object(r.jsx)(x,{data:null===e||void 0===e?void 0:e.value},n);case"allbrands":return Object(r.jsx)(W,{data:null===e||void 0===e?void 0:e.value},n);case"pdf":return Object(r.jsx)(B,{data:null===e||void 0===e?void 0:e.value},n)}}))}),Object(r.jsx)("div",{ref:n,children:Object(r.jsx)(_,{data:ne})})]})}},404:function(e,t,n){}}]);
//# sourceMappingURL=43.89648a25.chunk.js.map