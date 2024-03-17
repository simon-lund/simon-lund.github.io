"use strict";(self.webpackChunksimon_lund=self.webpackChunksimon_lund||[]).push([[691],{1591:function(e,t,r){r.r(t),r.d(t,{Head:function(){return x},default:function(){return g}});var n=r(7294),a=r(4160);var o=()=>n.createElement("header",{className:"fixed z-[100] w-screen h-12 backdrop-blur-md bg-black/90"},n.createElement("div",{className:"flex h-full items-center mx-8"},n.createElement(a.rU,{to:"/",className:"text-white text-xl font-bold hover:cursor-pointer hover:rotate-12 transition-transform",style:{letterSpacing:"-0.22em"}},"$&")));function c(e,t,r,n){return new(r||(r=Promise))((function(a,o){function c(e){try{i(n.next(e))}catch(e){o(e)}}function l(e){try{i(n.throw(e))}catch(e){o(e)}}function i(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(c,l)}i((n=n.apply(e,t||[])).next())}))}function l(e,t){var r,n,a,o,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return c.label++,{value:o[1],done:!1};case 5:c.label++,n=o[1],o=[0];continue;case 7:o=c.ops.pop(),c.trys.pop();continue;default:if(!((a=(a=c.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){c=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){c.label=o[1];break}if(6===o[0]&&c.label<a[1]){c.label=a[1],a=o;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(o);break}a[2]&&c.ops.pop(),c.trys.pop();continue}o=t.call(e,c)}catch(e){o=[6,e],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}}function i(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function u(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,a,o=r.call(e),c=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)c.push(n.value)}catch(e){a={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(a)throw a.error}}return c}function s(e,t,r){if(r||2===arguments.length)for(var n,a=0,o=t.length;a<o;a++)!n&&a in t||(n||(n=Array.prototype.slice.call(t,0,a)),n[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))}function f(e,t,r,n,a){for(var o=[],f=5;f<arguments.length;f++)o[f-5]=arguments[f];return c(this,void 0,void 0,(function(){var c,f,m,h,b,y;return l(this,(function(l){switch(l.label){case 0:l.trys.push([0,12,13,14]),c=i(o),f=c.next(),l.label=1;case 1:if(f.done)return[3,11];switch(typeof(m=f.value)){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,d(e,t,m,r,n,a)];case 3:return l.sent(),[3,10];case 4:return[4,p(m)];case 5:return l.sent(),[3,10];case 6:return[4,m.apply(void 0,s([e,t,r,n,a],u(o),!1))];case 7:return l.sent(),[3,10];case 8:return[4,m];case 9:l.sent(),l.label=10;case 10:return f=c.next(),[3,1];case 11:return[3,14];case 12:return h=l.sent(),b={error:h},[3,14];case 13:try{f&&!f.done&&(y=c.return)&&y.call(c)}finally{if(b)throw b.error}return[7];case 14:return[2]}}))}))}function d(e,t,r,n,a,o){return c(this,void 0,void 0,(function(){var c,i;return l(this,(function(l){switch(l.label){case 0:return c=e.textContent||"",i=function(e,t){var r=u(t).slice(0);return s(s([],u(e),!1),[NaN],!1).findIndex((function(e,t){return r[t]!==e}))}(c,r),[4,m(e,s(s([],u(b(c,t,i)),!1),u(h(r,t,i)),!1),n,a,o)];case 1:return l.sent(),[2]}}))}))}function p(e){return c(this,void 0,void 0,(function(){return l(this,(function(t){switch(t.label){case 0:return[4,new Promise((function(t){return setTimeout(t,e)}))];case 1:return t.sent(),[2]}}))}))}function m(e,t,r,n,a){return c(this,void 0,void 0,(function(){var o,c,s,f,d,m,h,b,y,v,w,g,x;return l(this,(function(E){switch(E.label){case 0:if(o=t,a){for(c=0,s=1;s<t.length;s++)if(f=u([t[s-1],t[s]],2),d=f[0],(m=f[1]).length>d.length||""===m){c=s;break}o=t.slice(c,t.length)}E.label=1;case 1:E.trys.push([1,6,7,8]),h=i(function(e){var t,r,n,a,o,c,u;return l(this,(function(s){switch(s.label){case 0:t=function(e){return l(this,(function(t){switch(t.label){case 0:return[4,{op:function(t){return requestAnimationFrame((function(){return t.textContent=e}))},opCode:function(t){var r=t.textContent||"";return""===e||r.length>e.length?"DELETE":"WRITING"}}];case 1:return t.sent(),[2]}}))},s.label=1;case 1:s.trys.push([1,6,7,8]),r=i(e),n=r.next(),s.label=2;case 2:return n.done?[3,5]:(a=n.value,[5,t(a)]);case 3:s.sent(),s.label=4;case 4:return n=r.next(),[3,2];case 5:return[3,8];case 6:return o=s.sent(),c={error:o},[3,8];case 7:try{n&&!n.done&&(u=r.return)&&u.call(r)}finally{if(c)throw c.error}return[7];case 8:return[2]}}))}(o)),b=h.next(),E.label=2;case 2:return b.done?[3,5]:(y=b.value,v="WRITING"===y.opCode(e)?r+r*(Math.random()-.5):n+n*(Math.random()-.5),y.op(e),[4,p(v)]);case 3:E.sent(),E.label=4;case 4:return b=h.next(),[3,2];case 5:return[3,8];case 6:return w=E.sent(),g={error:w},[3,8];case 7:try{b&&!b.done&&(x=h.return)&&x.call(h)}finally{if(g)throw g.error}return[7];case 8:return[2]}}))}))}function h(e,t,r){var n,a;return void 0===r&&(r=0),l(this,(function(o){switch(o.label){case 0:n=t(e),a=n.length,o.label=1;case 1:return r<a?[4,n.slice(0,++r).join("")]:[3,3];case 2:return o.sent(),[3,1];case 3:return[2]}}))}function b(e,t,r){var n,a;return void 0===r&&(r=0),l(this,(function(o){switch(o.label){case 0:n=t(e),a=n.length,o.label=1;case 1:return a>r?[4,n.slice(0,--a).join("")]:[3,3];case 2:return o.sent(),[3,1];case 3:return[2]}}))}!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===r&&n.firstChild?n.insertBefore(a,n.firstChild):n.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}(".index-module_type__E-SaG::after {\n  content: '|';\n  animation: index-module_cursor__PQg0P 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__PQg0P {\n  50% {\n    opacity: 0;\n  }\n}\n");var y=(0,n.memo)((0,n.forwardRef)((function(e,t){var r=e.sequence,a=e.repeat,o=e.className,c=e.speed,l=void 0===c?40:c,i=e.deletionSpeed,d=e.omitDeletionAnimation,p=void 0!==d&&d,m=e.preRenderFirstString,h=void 0!==m&&m,b=e.wrapper,y=void 0===b?"span":b,v=e.splitter,w=void 0===v?function(e){return s([],u(e),!1)}:v,g=e.cursor,x=void 0===g||g,E=e.style,O=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}(e,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","splitter","cursor","style"]),j=O["aria-label"],N=O["aria-hidden"],S=O.role;i||(i=l);var P=new Array(2).fill(40);[l,i].forEach((function(e,t){switch(typeof e){case"number":P[t]=Math.abs(e-100);break;case"object":var r=e.type,n=e.value;if("number"!=typeof n)break;"keyStrokeDelayInMs"===r&&(P[t]=n)}}));var k,C,_,R,T,D,I=P[0],A=P[1],z=function(e,t){void 0===t&&(t=null);var r=(0,n.useRef)(t);return(0,n.useEffect)((function(){e&&("function"==typeof e?e(r.current):e.current=r.current)}),[e]),r}(t),G="index-module_type__E-SaG";k=o?"".concat(x?G+" ":"").concat(o):x?G:"",C=(0,n.useRef)((function(){var e,t=r;a===1/0?e=f:"number"==typeof a&&(t=Array(1+a).fill(r).flat());var n=e?s(s([],u(t),!1),[e],!1):s([],u(t),!1);return f.apply(void 0,s([z.current,w,I,A,p],u(n),!1)),function(){z.current}})),_=(0,n.useRef)(),R=(0,n.useRef)(!1),T=(0,n.useRef)(!1),D=u((0,n.useState)(0),2)[1],R.current&&(T.current=!0),(0,n.useEffect)((function(){return R.current||(_.current=C.current(),R.current=!0),D((function(e){return e+1})),function(){T.current&&_.current&&_.current()}}),[]);var H=y,q=h?r.find((function(e){return"string"==typeof e}))||"":null;return n.createElement(H,{"aria-hidden":N,"aria-label":j,role:S,style:E,className:k,children:j?n.createElement("span",{"aria-hidden":"true",ref:z,children:q}):q,ref:j?void 0:z})})),(function(e,t){return!0}));var v=()=>n.createElement("div",{className:"grow"},n.createElement("div",{className:"hero"},n.createElement("h1",{className:"absolute text-6xl font-bold"},n.createElement(y,{sequence:["Hello.",1500,"Bonjour.",1500,"Hola.",1500,"Ciao.",1500],speed:1,wrapper:"span",repeat:1/0})),n.createElement("div",{className:"blob-cont"},n.createElement("div",{className:"yellow blob"}),n.createElement("div",{className:"red blob"}),n.createElement("div",{className:"green blob"})))),w=r(8633);var g=()=>n.createElement("main",{className:"relative"},n.createElement("div",{className:"flex flex-col h-screen"},n.createElement(o,null),n.createElement(v,null),n.createElement("div",{className:"flex h-24 justify-center items-center",style:{background:"white",boxShadow:"0 0 5px 2px white"}},n.createElement(w.DY7,{size:24,className:"animate-bounce"}))),n.createElement("div",{className:"h-screen"},n.createElement("h2",null,"Projects"),n.createElement("p",null,"Here are some of the projects I've been working on lately.")));const x=()=>n.createElement("title",null,"Home Page")},3621:function(e,t,r){r.d(t,{w_:function(){return p}});var n=r(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(a),c=["attr","size","title"];function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e){return e&&e.map(((e,t)=>n.createElement(e.tag,s({key:t},e.attr),d(e.child))))}function p(e){return t=>n.createElement(m,i({attr:s({},e.attr)},t),d(e.child))}function m(e){var t=t=>{var r,{attr:a,size:o,title:u}=e,f=l(e,c),d=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,f,{className:r,style:s(s({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),u&&n.createElement("title",null,u),e.children)};return void 0!==o?n.createElement(o.Consumer,null,(e=>t(e))):t(a)}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-cae600f197a11c7ddb34.js.map