(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(7),c=a.n(r),i=a(2),s=a(9),u=a(0);function j(e){var t=e.setCategories,a=Object(n.useState)("Nueva Categoria"),r=Object(i.a)(a,2),c=r[0],j=r[1];return Object(u.jsx)("div",{children:Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),c.trim().length>2&&(t((function(e){return[c].concat(Object(s.a)(e))})),j(""))},children:Object(u.jsx)("input",{type:"text",value:c,onChange:function(e){j(e.target.value)}})})})}var o=a(10),d=a(6),m=a.n(d),l=a(8),p=function(){var e=Object(l.a)(m.a.mark((function e(t){var a,n,r,c,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="http://api.giphy.com/v1/gifs/search?api_key=ZrvnaHogNgrjiwxWqiJJmQdppGapPHEg&q=".concat(encodeURI(t),"&limit=10"),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function f(e){e.id;var t=e.title,a=e.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__animate__fadeIn animate__delay-5s",children:[Object(u.jsx)("img",{src:a,alt:t}),Object(u.jsx)("p",{children:t})]})}var b=function(e){var t=e.category,a=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(i.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){p(e).then((function(e){setTimeout((function(){c({data:e,loading:!1})}),4e3)}))}),[]),r}(t),r=a.data,c=a.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:"animate__animated animate__animate__fadeIn animate__delay-5s",children:t}),c&&Object(u.jsx)("p",{className:"animate__animated animate__animate__flash animate__delay-5s",children:"Loading..."}),Object(u.jsx)("div",{className:"card-grid",children:r.map((function(e){return Object(u.jsx)(f,Object(o.a)({},e),e.id)}))})]})},O=function(){var e=Object(n.useState)(["One Punch"]),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(j,{setCategories:r}),Object(u.jsx)("hr",{}),Object(u.jsx)("ul",{children:a.map((function(e,t){return Object(u.jsx)(b,{category:e},e)}))})]})};a(17);c.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.6dfd6d9b.chunk.js.map