(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[38,17],{301:function(e,t,a){"use strict";a.r(t);var c=a(43),s=a(1),n=a(3),l=a.n(n),i=a(18),r=a(6),o=a(0),j=a(2),d=a(311),b=a(13),h=a(24),m=(a(436),a(363)),O=a(99),u=a(50),x=a(7),p=a(316);var v=function(e){var t=e.classes;return Object(o.jsxs)("div",{className:"lds-roller ".concat(t||""),style:{transform:"scale(0.5)",bottom:"-5px",left:"-35px"},children:[Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{})]})};function f(){var e=Object(j.useRef)(null),t=Object(j.useState)(!0),a=Object(r.a)(t,2),n=a[0],f=a[1],g=Object(j.useState)([]),w=Object(r.a)(g,2),N=w[0],k=w[1],y=Object(j.useState)([]),_=Object(r.a)(y,2),A=_[0],S=_[1],G=Object(j.useState)([]),R=Object(r.a)(G,2),F=R[0],P=R[1],B=Object(j.useState)({}),E=Object(r.a)(B,2),C=E[0],D=E[1],I=Object(j.useState)(!1),T=Object(r.a)(I,2),H=T[0],U=T[1],J=Object(j.useState)({email:""}),L=Object(r.a)(J,2),q=L[0],K=L[1],V=Object(j.useState)({email:""}),M=Object(r.a)(V,2),W=M[0],z=M[1],Q=Object(j.useState)(!1),X=Object(r.a)(Q,2),Y=X[0],Z=X[1],$=function(){var e=Object(i.a)(l.a.mark((function e(){var t,a,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(Object(h.isEmpty)(N)||Object(h.isEmpty)(F)||Object(h.isEmpty)(A)||Object(h.isEmpty)(C))){e.next=17;break}return t=[Object(b.d)(x.F)],e.prev=2,e.next=5,Promise.all(t);case 5:a=e.sent,c=a[0],s=Object(h.get)(c,"dynamic_links"),P(c.body),D(c.meta),k(null===s||void 0===s?void 0:s.navigation),S(null===s||void 0===s?void 0:s.footer),f(!1),e.next=17;break;case 15:e.prev=15,e.t0=e.catch(2);case 17:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(){return e.apply(this,arguments)}}();Object(j.useEffect)((function(){$()}),[]);var ee=function(){var e=q.email?0==Object(b.t)(q.email.trim())?"Please enter valid email":void 0:"Please enter email";return z(Object(s.a)(Object(s.a)({},W),{email:e})),!!e};return Object(o.jsxs)("div",{className:"site-forgotPassword",children:[n?Object(o.jsx)(O.default,{}):"",Object(o.jsx)("div",{className:"container section-container",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-sm-12 col-lg-6",children:Object(o.jsx)("img",{src:m.a,alt:"",className:"resp-ic"})}),Object(o.jsx)("div",{className:"col-sm-12 col-lg-6",children:H?Object(o.jsxs)("div",{className:"status-box",children:[Object(o.jsx)("img",{src:p.a,alt:""}),Object(o.jsx)("h3",{children:"Password reset request sent"}),Object(o.jsx)("h4",{children:"A password reset message was sent to your email address. Please click the link in that message to countinue"})]}):Object(o.jsxs)("div",{className:"form-forgot-password",children:[Object(o.jsx)("h1",{children:"Forgot your password"}),Object(o.jsx)("p",{children:"Enter the email address and we will send you a link to reset your password."}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)(u.a,{type:"text",for:"email",name:"email",label:"Enter email",value:q.email,handleChange:function(e){K(Object(s.a)(Object(s.a)({},q),{},Object(c.a)({},e.currentTarget.name,e.target.value)))},validate:!!W.email,validateContent:W.email}),Object(o.jsxs)("div",{className:"button-group",children:[Object(o.jsx)("div",{className:"loader-container",children:Y&&Object(o.jsx)(v,{classes:"loader"})}),Object(o.jsx)("button",{className:"reset-btn",disabled:Y,onClick:function(){if(!ee()){var e;Z(!0);var t={url:x.N,method:"POST",body:{email:null===(e=q.email)||void 0===e?void 0:e.toLowerCase()}};Object(b.e)(t).then((function(e){e.success?U(!0):e.isError})).finally((function(){Z(!1)}))}},children:"Reset password"})]})]})]})})]})}),Object(o.jsx)("div",{ref:e,children:Object(o.jsx)(d.default,{data:A})})]})}t.default=Object(j.memo)(f)},311:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(2),n=a.p+"static/media/ic-facebook.1490317c.svg",l=a.p+"static/media/ic-insta.091b579b.svg",i=a.p+"static/media/ic-linkedin.fb119a0a.svg",r=a(24),o=a(31);var j=function(e){var t=e.data,a=void 0===t?{}:t,s=a.children;return Object(c.jsxs)("div",{className:"item-box",children:[(null===a||void 0===a?void 0:a.relative_url)?Object(c.jsx)(o.b,{to:null===a||void 0===a?void 0:a.relative_url,className:"py-1",children:a.title}):Object(c.jsx)("h3",{children:a.title}),Object(c.jsx)("ul",{children:Object(r.map)(s,(function(e,t){return Object(c.jsx)("li",{children:Object(c.jsxs)("a",{href:(null===e||void 0===e?void 0:e.external_url)?null===e||void 0===e?void 0:e.external_url:(null===e||void 0===e?void 0:e.relative_url)?null===e||void 0===e?void 0:e.relative_url:"/",className:"py-1",children:[Object(c.jsx)("span",{className:"icon-format material-icons",style:{top:0,left:-28},children:null===e||void 0===e?void 0:e.menu_icon}),Object(c.jsxs)("span",{children:[e.title," "]})]})},t)}))})]})},d=a(7);function b(e){var t=e.data,a=void 0===t?[]:t;return Object(c.jsx)("footer",{className:"blk-footer",children:Object(c.jsxs)("div",{className:"content container",children:[Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"item-box",children:[Object(c.jsx)("h3",{children:"contact"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsxs)("a",{children:[Object(c.jsx)("span",{className:"icon-format material-icons",style:{top:-4,left:-28},children:"call"}),d.I]})}),Object(c.jsx)("li",{children:"Sun - Thu 10.00 AM - 8.00 PM"}),Object(c.jsx)("li",{children:Object(c.jsxs)("a",{href:"mailto:support@sundora.com.bd",children:[Object(c.jsx)("span",{className:"icon-format material-icons",style:{top:-4,left:-28},children:"email"}),"support@sundora.com.bd"]})}),Object(c.jsx)("li",{style:{marginTop:"1rem"},children:Object(c.jsxs)("a",{href:"https://www.google.com/maps/search/".concat(encodeURI("Anabil Tower, Plot #3, Block - NW(J), Gulshan North Avenue, Kemal Ataturk Ave, Dhaka -1212, Bangladesh"),"/"),target:"_blank",rel:"noreferrer",children:[Object(c.jsx)("span",{className:"icon-format material-icons",style:{top:-4,left:-28},children:"location_on"}),Object(c.jsx)("p",{className:"location",children:"Anabil Tower, Plot #3, Block - NW(J), Gulshan North Avenue, Kemal Ataturk Ave, Dhaka -1212, Bangladesh"})]})})]}),Object(c.jsxs)("ul",{className:"social-group",children:[Object(c.jsx)("li",{children:Object(c.jsx)("a",{target:"__blank",href:"https://bd.linkedin.com/company/sundora?trk=public_profile_topcard-current-company",children:Object(c.jsx)("img",{className:"linkedin",src:i,width:35,height:22,alt:"ic-linkedin"})})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{target:"__blank",href:"https://www.facebook.com/sundorabeauty",children:Object(c.jsx)("img",{src:n,width:14,height:22.39,alt:"ic-facebook"})})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{target:"__blank",href:"https://www.instagram.com/sundorabeauty",children:Object(c.jsx)("img",{src:l,width:21,height:24,alt:"ic-instagram"})})})]})]}),Object(c.jsxs)("div",{className:"item-box",children:[Object(c.jsx)("h3",{children:"visit"}),Object(c.jsx)("ul",{children:Object(c.jsx)("li",{children:Object(c.jsx)("span",{children:Object(c.jsxs)("a",{href:"https://www.google.com/maps/search/".concat(encodeURI("Green City Square, Gr. Floor - Semi-basement, 750, Satmasjid Road, Dhanmondi"),"/"),target:"_blank",rel:"noreferrer",children:[Object(c.jsx)("span",{className:"icon-format material-icons",style:{top:-4,left:-28},children:"location_on"}),Object(c.jsx)("p",{className:"location",children:"Green City Square, Gr. Floor - Semi-basement, 750, Satmasjid Road, Dhanmondi"})]})})})}),Object(c.jsx)("ul",{children:Object(c.jsx)("li",{children:Object(c.jsx)("span",{children:Object(c.jsxs)("a",{href:"https://www.google.com/maps/search/".concat(encodeURI("Delvista, Banani Rd# 12, FL# 3, H# 44, Banani"),"/"),target:"_blank",rel:"noreferrer",children:[Object(c.jsx)("span",{className:"icon-format material-icons",style:{top:-4,left:-28},children:"location_on"}),Object(c.jsx)("p",{className:"location",children:"DELVISTA, FL# 3, H# 44,RD# 12, BANANI 1213, DHAKA"})]})})})}),Object(c.jsx)("ul",{children:Object(c.jsx)("li",{children:Object(c.jsxs)("span",{children:[" ",Object(c.jsxs)("a",{href:"https://www.google.com/maps/search/".concat(encodeURI("Ventura Agnibeena, Gr. Floor, H#38, Rd#12, Banani"),"/"),target:"_blank",rel:"noreferrer",children:[Object(c.jsx)("span",{className:"icon-format material-icons",style:{top:-4,left:-28},children:"location_on"}),Object(c.jsx)("p",{className:"location",children:"Ventura Agnibeena, Gr. Floor, H#38, Rd#12, Banani"})]})]})})}),Object(c.jsx)("ul",{children:Object(c.jsx)("li",{children:Object(c.jsxs)("span",{children:[" ",Object(c.jsxs)("a",{href:"https://www.google.com/maps/search/".concat(encodeURI("Casablanca, 114 Gulshan Ave, Gr. Floor, Gulshan"),"/"),target:"_blank",rel:"noreferrer",children:[Object(c.jsx)("span",{className:"icon-format material-icons",style:{top:-4,left:-28},children:"location_on"}),Object(c.jsx)("p",{className:"location",children:"Casablanca, 114 Gulshan Ave, Gr. Floor, Gulshan"})]})]})})})]})]}),Object(c.jsx)("div",{children:Object(r.map)(a,(function(e,t){return Object(c.jsx)(j,{data:e},t)}))})]})})}t.default=Object(s.memo)(b)},316:function(e,t,a){"use strict";t.a=a.p+"static/media/successful-payment.08385652.svg"},363:function(e,t,a){"use strict";t.a=a.p+"static/media/reset-password.e195328f.png"},436:function(e,t,a){}}]);
//# sourceMappingURL=38.4ef4fa12.chunk.js.map