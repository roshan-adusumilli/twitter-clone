(this["webpackJsonptweetme-web"]=this["webpackJsonptweetme-web"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(6),r=n.n(s),i=(n(14),n.p+"static/media/logo.6ce24c58.svg");n(15);function o(e,t,n,c){var a;c&&(a=JSON.stringify(c));var s=new XMLHttpRequest,r="http://localhost:8000/api".concat(t);s.responseType="json";var i=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),c=0;c<n.length;c++){var a=n[c].trim();if(a.substring(0,e.length+1)===e+"="){t=decodeURIComponent(a.substring(e.length+1));break}}return t}("csrftoken");s.open(e,r),s.setRequestHeader("Content-Type","application/json"),i&&(s.setRequestHeader("X-Requested-With","XMLHttpRequest"),s.setRequestHeader("X-CSRFToken",i)),s.onload=function(){403===s.status&&("Authentication credentials were not provided."===s.response.detail&&(window.location.href="/login"));n(s.response,s.status)},s.onerror=function(e){n({message:"request was an error"},400)},s.send(a)}var l=n(0);function u(e){var t=e.tweet,n=e.action,c=e.didPerformAction,a=t.likes?t.likes:0,s=e.className?e.className:"btn btn-primary btn-sm",r=n.display?n.display:"Action",i=function(e,t){console.log(e,t),200!==t&&201!==t||!c||c(e,t)},u="like"===n.type?"".concat(a," ").concat(r):r;return Object(l.jsx)("button",{className:s,onClick:function(e){e.preventDefault(),function(e,t,n){o("POST","/tweets/action/",n,{id:e,action:t})}(t.id,n.type,i)},children:u})}var d=n(8),j=n(2);function b(e){var t=e.tweet;return t.parent?Object(l.jsx)("div",{className:"row",children:Object(l.jsxs)("div",{className:"col-11 mx-auto p-3 border rounded",children:[Object(l.jsx)("p",{className:"mb-0 text-muted small",children:"Retweet"}),Object(l.jsx)(m,{hideActions:!0,className:" ",tweet:t.parent})]})}):null}function m(e){var t=e.tweet,n=e.didRetweet,s=e.hideActions,r=Object(c.useState)(e.tweet?e.tweet:null),i=Object(j.a)(r,2),o=i[0],m=i[1],f=e.className?e.className:"col-10 mx-auto col-md-6",p=window.location.pathname.match(Object(d.a)(/([0-9]+)/,{tweetid:1})),w=p?p.groups.tweetid:-1,O="".concat(t.id)==="".concat(w),h=function(e,t){200===t?m(e):201===t&&n&&n(e)};return Object(l.jsxs)("div",{className:f,children:[Object(l.jsxs)("div",{children:[Object(l.jsxs)("p",{children:[t.id," - ",t.content]}),Object(l.jsx)(b,{tweet:t})]}),Object(l.jsxs)("div",{className:"btn btn-group",children:[o&&!0!==s&&Object(l.jsxs)(a.a.Fragment,{children:[Object(l.jsx)(u,{tweet:o,didPerformAction:h,action:{type:"like",display:"Likes"}}),Object(l.jsx)(u,{tweet:o,didPerformAction:h,action:{type:"unlike",display:"Unlike"}}),Object(l.jsx)(u,{tweet:o,didPerformAction:h,action:{type:"retweet",display:"Retweet"}})]}),!0===O?null:Object(l.jsx)("button",{className:"btn btn-outline-primary btn-sm",onClick:function(e){e.preventDefault(),window.location.href="/".concat(t.id)},children:"View"})]})]})}var f=m,p=n(3);function w(e){var t=Object(c.useState)([]),n=Object(j.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)([]),i=Object(j.a)(r,2),u=i[0],d=i[1],b=Object(c.useState)(!1),m=Object(j.a)(b,2),w=m[0],O=m[1];Object(c.useEffect)((function(){var t=Object(p.a)(e.newTweets).concat(a);t.length!==u.length&&d(t)}),[e.newTweets,u,a]),Object(c.useEffect)((function(){if(!1===w){!function(e,t){var n="/tweets/";e&&(n="/tweets/?username=".concat(e)),o("GET",n,t)}(e.username,(function(e,t){200===t?(s(e),O(!0)):alert("There was an error")}))}}),[a,w,O,e.username]);var h=function(e){var t=Object(p.a)(a);t.unshift(e),s(t);var n=Object(p.a)(u);n.unshift(u),d(n)};return u.map((function(e,t){return Object(l.jsx)(f,{tweet:e,didRetweet:h,className:"my-5 py-5 border bg-white text-dark"},"".concat(t,"-{item.id}"))}))}var O=n(9);function h(e){var t=a.a.createRef(),n=e.didTweet,c=function(e,t){201===t?n(e):alert("An error occured")};return Object(l.jsx)("div",{className:e.className,children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=t.current.value;o("POST","/tweets/create/",c,{content:n}),t.current.value=""},children:[Object(l.jsx)("textarea",{ref:t,required:!0,className:"form-control",name:"tweet"}),Object(l.jsx)("button",{type:"submit",className:"btn btn-primary my-3",children:"Tweet"})]})})}function v(e){var t=Object(c.useState)([]),n=Object(j.a)(t,2),a=n[0],s=n[1],r="false"!==e.canTweet;return Object(l.jsxs)("div",{className:e.className,children:[!0===r&&Object(l.jsx)(h,{didTweet:function(e){var t=Object(p.a)(a);t.unshift(e),s(t)},className:"col-12 mb-3"}),Object(l.jsx)(w,Object(O.a)({newTweets:a},e))]})}function x(e){var t=e.tweetId,n=Object(c.useState)(!1),a=Object(j.a)(n,2),s=a[0],r=a[1],i=Object(c.useState)(null),u=Object(j.a)(i,2),d=u[0],b=u[1],f=function(e,t){200===t?b(e):alert("There was an error finding your tweet")};return Object(c.useEffect)((function(){!1===s&&(!function(e,t){o("GET","/tweets/".concat(e,"/"),t)}(t,f),r(!0))}),[t,s,r]),null===d?null:Object(l.jsx)(m,{tweet:d,className:e.className})}var g=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("header",{className:"App-header",children:[Object(l.jsx)("img",{src:i,className:"App-logo",alt:"logo"}),Object(l.jsxs)("p",{children:["Edit ",Object(l.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(l.jsx)("div",{children:Object(l.jsx)(v,{})}),Object(l.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))},y=document.getElementById("root");y&&r.a.render(Object(l.jsx)(g,{}),y);var k=a.a.createElement,T=document.getElementById("tweetme");T&&r.a.render(k(v,T.dataset),T),document.querySelectorAll(".tweetme-detail").forEach((function(e){r.a.render(k(x,e.dataset),e)})),N()}},[[17,1,2]]]);
//# sourceMappingURL=main.d4727a47.chunk.js.map