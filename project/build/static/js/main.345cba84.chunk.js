(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(3),c=n.n(o),s=(n(9),n(1));var i=function(e){var t=e.log,n=e.setLog,r=e.name,o=e.setName,c=e.setError;return e.error,"login"===t?a.a.createElement("div",null,a.a.createElement("label",null,"username:",a.a.createElement("input",{onChange:function(e){o(e.target.value)},value:r})),a.a.createElement("br",null),a.a.createElement("button",{className:"log",onClick:function(){var e;c(""),n("logout"),(e=r,fetch("/session",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify({username:e})}).catch((function(){return Promise.reject({code:"network-error"})})).then((function(e){return e.ok?e.json:Promise.reject({code:"invalid name"})}))).catch((function(){c("invaild name"),n("login")}))}},t)):"logout"===t?a.a.createElement("div",null,a.a.createElement("button",{className:"log",onClick:function(){(function(e){return fetch("/user",{method:"DELETE",headers:new Headers({"content-type":"application/json"}),body:JSON.stringify({name:e})}).catch((function(){return Promise.reject({code:"network-error"})})).then((function(e){return e.ok?e.json:Promise.reject({code:"missing name"})}))})(r).catch((function(e){throw c("missing name"),e})),n("login")}},t)):a.a.createElement("div",null)};n(10);var u=function(e){var t=e.error;return a.a.createElement("div",{className:"err"},t)};var l=function(e){var t=e.name,n=e.searchName,r=e.setSearch,o=e.setError;return a.a.createElement("div",null,a.a.createElement("input",{onChange:function(e){r(e.target.value)},value:n}),a.a.createElement("button",{onClick:function(){(function(e,t){return fetch("/user/"+e,{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify({username:e,searchName:t})}).catch((function(){return Promise.reject({code:"network-error"})})).then((function(e){return e.ok?e.json:e.json().then((function(e){return Promise.reject(e.code)}))}))})(t,n).catch((function(e){throw o(e),e})).then((function(){o("You successfully added  "+n),r(t)}))}},"add new friend"))};var m=function(e){var t=e.name,n=(e.setName,e.setLog),o=e.setError,c=Object(r.useState)([]),i=Object(s.a)(c,2),u=i[0],l=i[1],m=Object(r.useState)(""),d=Object(s.a)(m,2),f=d[0],h=d[1];return Object(r.useEffect)((function(){setInterval((function(){(function(e){return fetch("/messages/"+e,{method:"post",headers:new Headers({"content-type":"application/json"}),body:JSON.stringify({name:e})}).catch((function(e){return Promise.reject({code:"network-error"})})).then((function(e){return e.ok?e.json():Promise.reject({code:"you are not allowed to get message"})}))})(t).catch((function(e){throw o("you are not allowed to get message"),e})).then((function(e){(e=e.filter((function(e){return e}))).sort((function(e,t){return e.timestamp.localeCompare(t.timestamp)}));var t=e.map((function(e){return a.a.createElement("div",{key:e.timestamp},a.a.createElement("div",{className:"username"},a.a.createElement("span",{className:"username"},e.name)),a.a.createElement("span",{className:"timestamp"},e.timestamp),a.a.createElement("br",null),a.a.createElement("p",{className:"message-text"},e.text),a.a.createElement("br",null))}));l(t)}))}),1500)}),[f]),a.a.createElement("div",null,a.a.createElement("span",{className:"title"},"you are chatting with ",t),a.a.createElement("br",null),u,a.a.createElement("br",null),a.a.createElement("div",null,a.a.createElement("input",{onChange:function(e){h(e.target.value)},value:f}),a.a.createElement("button",{onClick:function(){(function(e,t){return fetch("/messages/"+e,{method:"put",headers:new Headers({"content-type":"application/json"}),body:JSON.stringify({name:e,message:t})}).catch((function(e){return Promise.reject({code:"network-error"})})).then((function(e){return e.ok?e.json:Promise.reject({code:"you are not allowed to update messages"})}))})(t,f).catch((function(e){throw o("you are not allowed to send message"),e})).then((function(){o("you just send a message"),h("")}))}},"send"),a.a.createElement("br",null),a.a.createElement("button",{onClick:function(){n("logout"),o("")}},"back to Contacts")))};var d=function(e){var t=e.log,n=e.name,o=e.setError,c=e.setLog,i=e.setName,u=Object(r.useState)([]),d=Object(s.a)(u,2),f=d[0],h=d[1],E=Object(r.useState)(""),g=Object(s.a)(E,2),j=g[0],p=g[1];return Object(r.useEffect)((function(){fetch("/friend",{method:"get"}).catch((function(e){return Promise.reject({code:"network-error"})})).then((function(e){return e.ok?e.json():Promise.reject({code:"Didn't find you record"})})).catch((function(e){throw e})).then((function(e){if(0!==e.length){var t="";e.forEach((function(e){t+=e+" and "})),console.log(t),o(e+" requests to be your friend.")}})),fetch("/user",{method:"GET",headers:new Headers({"content-type":"application/json"})}).catch((function(){return Promise.reject({code:"network-error"})})).then((function(e){return e.ok?e.json():Promise.reject({code:"invalid login"})})).then((function(e){var t=e.map((function(e){return a.a.createElement("li",{key:e},a.a.createElement("button",{className:"friendlist",onClick:function(){i(e),c("sendmessage")}},e),a.a.createElement("button",{onClick:function(){(function(e,t){return fetch("/user/"+e,{method:"delete",headers:new Headers({"content-type":"application/json"}),body:JSON.stringify({name:e,friend:t})}).catch((function(e){return Promise.reject({code:"network-error"})})).then((function(e){return e.ok?e.json:Promise.reject({code:"missing-name"})}))})(n,e).catch((function(e){throw e})).then((function(){o("You have deleted "+e),p(e)}))}},"X"))}));h(t)}))}),[j,t]),"logout"===t?a.a.createElement("div",null,a.a.createElement(l,{setError:o,searchName:j,setSearch:p,name:n}),a.a.createElement("ul",null,f)):"login"===t?a.a.createElement("div",null,"Welcome"):a.a.createElement("div",null,a.a.createElement(m,{name:n,setName:i,setLog:c,setError:o}))};var f=function(){var e=Object(r.useState)("login"),t=Object(s.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)(""),l=Object(s.a)(c,2),m=l[0],f=l[1],h=Object(r.useState)(""),E=Object(s.a)(h,2),g=E[0],j=E[1];return a.a.createElement("div",{className:"App"},a.a.createElement("div",null,a.a.createElement(u,{error:g})),a.a.createElement(d,{setName:f,setLog:o,setError:j,log:n,name:m}),a.a.createElement("div",null,a.a.createElement(i,{log:n,setLog:o,name:m,setName:f,setError:j,error:g})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.345cba84.chunk.js.map