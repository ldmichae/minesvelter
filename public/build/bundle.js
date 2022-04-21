var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n){t.appendChild(n)}function l(t,n,e){t.insertBefore(n,e||null)}function i(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function f(){return a(" ")}function d(){return a("")}function m(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function h(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function p(t){return""===t?null:+t}function $(t,n){t.value=null==n?"":n}function g(t,n,e,o){null===e?t.style.removeProperty(n):t.style.setProperty(n,e,o?"important":"")}let b;function y(t){b=t}const x=[],v=[],_=[],k=[],B=Promise.resolve();let w=!1;function E(t){_.push(t)}const L=new Set;let C=0;function T(){const t=b;do{for(;C<x.length;){const t=x[C];C++,y(t),q(t.$$)}for(y(null),x.length=0,C=0;v.length;)v.pop()();for(let t=0;t<_.length;t+=1){const n=_[t];L.has(n)||(L.add(n),n())}_.length=0}while(x.length);for(;k.length;)k.pop()();w=!1,L.clear(),y(t)}function q(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(E)}}const A=new Set;let D;function N(){D={r:0,c:[],p:D}}function O(){D.r||o(D.c),D=D.p}function S(t,n){t&&t.i&&(A.delete(t),t.i(n))}function j(t,n,e,o){if(t&&t.o){if(A.has(t))return;A.add(t),D.c.push((()=>{A.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function P(t){t&&t.c()}function G(t,e,c,u){const{fragment:l,on_mount:i,on_destroy:s,after_update:a}=t.$$;l&&l.m(e,c),u||E((()=>{const e=i.map(n).filter(r);s?s.push(...e):o(e),t.$$.on_mount=[]})),a.forEach(E)}function W(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function H(t,n){-1===t.$$.dirty[0]&&(x.push(t),w||(w=!0,B.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function M(n,r,c,u,l,s,a,f=[-1]){const d=b;y(n);const m=n.$$={fragment:null,ctx:null,props:s,update:t,not_equal:l,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(d?d.$$.context:[])),callbacks:e(),dirty:f,skip_bound:!1,root:r.target||d.$$.root};a&&a(m.root);let h=!1;if(m.ctx=c?c(n,r.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return m.ctx&&l(m.ctx[t],m.ctx[t]=r)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](r),h&&H(n,t)),e})):[],m.update(),h=!0,o(m.before_update),m.fragment=!!u&&u(m.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);m.fragment&&m.fragment.l(t),t.forEach(i)}else m.fragment&&m.fragment.c();r.intro&&S(n.$$.fragment),G(n,r.target,r.anchor,r.customElement),T()}y(d)}class X{$destroy(){W(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function z(t){let n;return{c(){n=a("X")},m(t,e){l(t,n,e)},d(t){t&&i(n)}}}function F(t){let n;return{c(){n=a("O")},m(t,e){l(t,n,e)},d(t){t&&i(n)}}}function I(n){let e,o,r,c,a,d=!0===n[0]&&!0===n[1]&&z(),p=!0===n[0]&&!1===n[1]&&F();return{c(){e=s("main"),o=s("div"),d&&d.c(),r=f(),p&&p.c(),h(o,"class","square svelte-1sy2o87")},m(t,i){l(t,e,i),u(e,o),d&&d.m(o,null),u(o,r),p&&p.m(o,null),c||(a=m(o,"click",n[2]),c=!0)},p(t,[n]){!0===t[0]&&!0===t[1]?d||(d=z(),d.c(),d.m(o,r)):d&&(d.d(1),d=null),!0===t[0]&&!1===t[1]?p||(p=F(),p.c(),p.m(o,null)):p&&(p.d(1),p=null)},i:t,o:t,d(t){t&&i(e),d&&d.d(),p&&p.d(),c=!1,a()}}}function J(t,n,e){let{hasBomb:o}=n,{searched:r=!1}=n;return t.$$set=t=>{"hasBomb"in t&&e(1,o=t.hasBomb),"searched"in t&&e(0,r=t.searched)},[r,o,()=>{e(0,r=!0)}]}class K extends X{constructor(t){super(),M(this,t,J,I,c,{hasBomb:1,searched:0})}}function Q(t,n,e){const o=t.slice();return o[7]=n[e],o[9]=e,o}function R(t){let n;return{c(){n=a("Change Board")},m(t,e){l(t,n,e)},d(t){t&&i(n)}}}function U(t){let n;return{c(){n=a("Start Game!")},m(t,e){l(t,n,e)},d(t){t&&i(n)}}}function V(n){let e,o,r,c=5===n[9]&&function(t){let n,e;return n=new K({props:{class:"square",hasBomb:!0}}),{c(){P(n.$$.fragment)},m(t,o){G(n,t,o),e=!0},i(t){e||(S(n.$$.fragment,t),e=!0)},o(t){j(n.$$.fragment,t),e=!1},d(t){W(n,t)}}}(),u=5!==n[9]&&function(t){let n,e;return n=new K({props:{class:"square",hasBomb:!1}}),{c(){P(n.$$.fragment)},m(t,o){G(n,t,o),e=!0},i(t){e||(S(n.$$.fragment,t),e=!0)},o(t){j(n.$$.fragment,t),e=!1},d(t){W(n,t)}}}();return{c(){c&&c.c(),e=f(),u&&u.c(),o=d()},m(t,n){c&&c.m(t,n),l(t,e,n),u&&u.m(t,n),l(t,o,n),r=!0},p:t,i(t){r||(S(c),S(u),r=!0)},o(t){j(c),j(u),r=!1},d(t){c&&c.d(t),t&&i(e),u&&u.d(t),t&&i(o)}}}function Y(t){let n,e,o={length:t[0]**2},r=[];for(let n=0;n<o.length;n+=1)r[n]=V(Q(t,o,n));const c=t=>j(r[t],1,1,(()=>{r[t]=null}));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();n=d()},m(t,o){for(let n=0;n<r.length;n+=1)r[n].m(t,o);l(t,n,o),e=!0},p(t,e){if(1&e){let u;for(o={length:t[0]**2},u=0;u<o.length;u+=1){const c=Q(t,o,u);r[u]?(r[u].p(c,e),S(r[u],1)):(r[u]=V(c),r[u].c(),S(r[u],1),r[u].m(n.parentNode,n))}for(N(),u=o.length;u<r.length;u+=1)c(u);O()}},i(t){if(!e){for(let t=0;t<o.length;t+=1)S(r[t]);e=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)j(r[t]);e=!1},d(t){!function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(r,t),t&&i(n)}}}function Z(n){let e,r,a,d,b,y,x,v,_,k,B,w,E=n[0],L=n[1]&&R(),C=!n[1]&&U(),T=Y(n);return{c(){e=s("main"),r=s("h1"),r.textContent="Hello!",a=f(),d=s("input"),b=f(),y=s("button"),L&&L.c(),x=f(),C&&C.c(),v=f(),_=s("div"),T.c(),h(d,"type","number"),h(d,"min","3"),h(d,"max","10"),d.disabled=n[1],h(_,"class","minefield svelte-hbdk9k"),g(_,"--colWidth",n[2]),g(_,"--edges",n[0])},m(t,o){l(t,e,o),u(e,r),u(e,a),u(e,d),$(d,n[0]),u(e,b),u(e,y),L&&L.m(y,null),u(y,x),C&&C.m(y,null),u(e,v),u(e,_),T.m(_,null),k=!0,B||(w=[m(d,"input",n[5]),m(y,"click",n[6])],B=!0)},p(n,[e]){(!k||2&e)&&(d.disabled=n[1]),1&e&&p(d.value)!==n[0]&&$(d,n[0]),n[1]?L||(L=R(),L.c(),L.m(y,x)):L&&(L.d(1),L=null),n[1]?C&&(C.d(1),C=null):C||(C=U(),C.c(),C.m(y,null)),1&e&&c(E,E=n[0])?(N(),j(T,1,1,t),O(),T=Y(n),T.c(),S(T),T.m(_,null)):T.p(n,e),(!k||4&e)&&g(_,"--colWidth",n[2]),(!k||1&e)&&g(_,"--edges",n[0])},i(t){k||(S(T),k=!0)},o(t){j(T),k=!1},d(t){t&&i(e),L&&L.d(),C&&C.d(),T.d(t),B=!1,o(w)}}}function tt(t,n,e){let o,{edgeLen:r}=n,{inputDisabled:c=!1}=n;return t.$$set=t=>{"edgeLen"in t&&e(0,r=t.edgeLen),"inputDisabled"in t&&e(1,c=t.inputDisabled)},t.$$.update=()=>{1&t.$$.dirty&&e(2,o=.33*screen.width/r+"px")},[r,c,o,"Start Game!","Change Board",function(){r=p(this.value),e(0,r)},()=>{e(1,c=!c)}]}return new class extends X{constructor(t){super(),M(this,t,tt,Z,c,{edgeLen:0,inputDisabled:1,activeText:3,inactiveText:4})}get activeText(){return this.$$.ctx[3]}get inactiveText(){return this.$$.ctx[4]}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
