(this.webpackJsonpwatch=this.webpackJsonpwatch||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),o=n.n(c),s=(n(14),n(1)),i=n.n(s),l=n(2),u=n(5),m=n(6),d=n(8),h=n(7),v=(n(16),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={light:!1},e.componentDidMount=Object(l.a)(i.a.mark((function t(){var n,a,r,c,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://worldtimeapi.org/api/timezone/Europe/Vienna").then((function(e){return e.json()}));case 2:n=t.sent,6,a=document.querySelector("#hr"),r=document.querySelector("#mn"),c=document.querySelector("#sc"),o=0,1e3*n.unixtime,0,setInterval(Object(l.a)(i.a.mark((function t(){var s,l,u,m,d,h,v,g;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!((o+=0)>3e4)){t.next=7;break}return o=0,t.next=5,fetch("https://worldtimeapi.org/api/timezone/Europe/Vienna").then((function(e){return e.json()}));case 5:n=t.sent,1e3*n.unixtime;case 7:s=new Date,l=s.getHours(),u=s.getMinutes(),m=s.getSeconds(),d=s.getMilliseconds(),g=l+(v=u+(h=m+d/1e3)/60)/60,a.style.transform="rotateZ(".concat(30*g,"deg)"),r.style.transform="rotateZ(".concat(6*v,"deg)"),c.style.transform="rotateZ(".concat(6*h,"deg)"),e.setState({hour:l,minute:u,second:m,msecond:d});case 19:case"end":return t.stop()}}),t)}))),0);case 11:case"end":return t.stop()}}),t)}))),e.toggleLight=function(){e.setState({light:!e.state.light})},e}return Object(m.a)(n,[{key:"pad",value:function(e,t){for(var n=e+"";n.length<t;)n="0"+n;return n}},{key:"render",value:function(){return r.a.createElement("div",{id:"clock",className:this.state.light?"light":"dark"},r.a.createElement("div",{className:"clock"},r.a.createElement("div",{className:"hour"},r.a.createElement("div",{className:"hr",id:"hr"})),r.a.createElement("div",{className:"min"},r.a.createElement("div",{className:"mn",id:"mn"})),r.a.createElement("div",{className:"sec"},r.a.createElement("div",{className:"sc",id:"sc"}))),void 0!==this.state.msecond&&r.a.createElement("div",{className:"d-flex justify-content-between digital"},r.a.createElement("div",null,this.state.hour),r.a.createElement("div",null,":"),r.a.createElement("div",null,this.state.minute),r.a.createElement("div",null,":"),r.a.createElement("div",null,this.state.second),r.a.createElement("div",null,":"),r.a.createElement("div",null,this.pad(this.state.msecond,3))),r.a.createElement("div",{className:"toggleClass",onClick:this.toggleLight}))}}]),n}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.010d031d.chunk.js.map