(function(){/*

 Copyright 2017 Google Inc. All Rights Reserved.

 Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.

  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
*/
'use strict';function aa(a){const c=/\s+/;return a.trim().split(/\s*;\s*/).map(b=>b.split(c)).reduce(function(b,f){f[0]&&(b[f[0]]=f.slice(1).map(h=>h).sort());return b},{})}function da(a){const c=aa(a),b="trusted-types"in c;let f=["*"];b&&(f=c["trusted-types"].filter(h=>"'"!==h.charAt(0)));return new g(!0,b,f,a)}class g{constructor(a,c,b,f=null){this.b=a;this.a=c;this.c=b;this.f=f}};const ea=()=>{throw new TypeError("undefined conversion");},{toLowerCase:fa,toUpperCase:ha}=String.prototype;function ia(){throw new TypeError("Illegal constructor");}function v(){throw new TypeError("Illegal constructor");}
const {TrustedTypes:w,B:ja,u:ka}=function(){function a(d){let e=O.get(d);void 0===e&&(e=m(null),O.set(d,e));return e}function c(d){const e=E(d);if(null==e||E(e)!==P)throw Error();for(const p of C(e))t(d,p,{value:d[p]});return d}function b(d,e){q(d.prototype);delete d.name;t(d,"name",{value:e})}function f(d){return e=>e instanceof d&&O.has(e)}function h(d,e){function p(x,Q){const sa=e[Q]||ea,ta=q(new x(R,d));return q({[Q](y){y=sa(""+y);if(void 0===y||null===y)y="";y=""+y;const ba=q(m(ta));a(ba).v=
y;return ba}}[Q])}const k=m(ia.prototype);for(const x of C(L))k[x]=p(L[x],x);t(k,"name",{value:d,writable:!1,configurable:!1,enumerable:!0});return q(k)}function l(d,e,p,k="",x=""){d=ha.apply(String(d));(k=x?x:k)||(k="http://www.w3.org/1999/xhtml");if(k=F.apply(u,[k])?u[k]:null){if(F.apply(k,[d])&&k[d]&&F.apply(k[d][e],[p])&&k[d][e][p])return k[d][e][p];if(F.apply(k,["*"])&&F.apply(k["*"][e],[p])&&k["*"][e][p])return k["*"][e][p]}}const {assign:r,create:m,defineProperty:t,freeze:q,getOwnPropertyNames:C,
getPrototypeOf:E,prototype:P}=Object,{hasOwnProperty:F}=P,{forEach:ua,push:va}=Array.prototype,R=Symbol(),O=c(new WeakMap),G=c([]),S=c([]);let T=null,U=!1;class H{constructor(d,e){if(d!==R)throw Error("cannot call the constructor");t(this,"policyName",{value:e,enumerable:!0})}toString(){return a(this).v}valueOf(){return a(this).v}}class n extends H{}b(n,"TrustedURL");class z extends H{}b(z,"TrustedScriptURL");class A extends H{}b(A,"TrustedHTML");class B extends H{}b(B,"TrustedScript");b(H,"TrustedType");
const ca=q(m(new A(R,"")));a(ca).v="";const u={["http://www.w3.org/1999/xhtml"]:{A:{attributes:{href:n.name}},AREA:{attributes:{href:n.name}},AUDIO:{attributes:{src:n.name}},BASE:{attributes:{href:n.name}},BUTTON:{attributes:{formaction:n.name}},EMBED:{attributes:{src:z.name}},FORM:{attributes:{action:n.name}},FRAME:{attributes:{src:n.name}},IFRAME:{attributes:{src:n.name,srcdoc:A.name}},IMG:{attributes:{src:n.name}},INPUT:{attributes:{src:n.name,formaction:n.name}},LINK:{attributes:{href:n.name}},
OBJECT:{attributes:{data:z.name,codebase:z.name}},SCRIPT:{attributes:{src:z.name,text:B.name},properties:{innerText:B.name,textContent:B.name,text:B.name}},SOURCE:{attributes:{src:n.name}},TRACK:{attributes:{src:n.name}},VIDEO:{attributes:{src:n.name}},"*":{attributes:{},properties:{innerHTML:A.name,outerHTML:A.name}}},["http://www.w3.org/1999/xlink"]:{"*":{attributes:{href:n.name},properties:{}}},["http://www.w3.org/2000/svg"]:{"*":{attributes:{href:n.name},properties:{}}}};var I={codebase:"codeBase",
formaction:"formAction"};"srcdoc"in HTMLIFrameElement.prototype||delete u["http://www.w3.org/1999/xhtml"].IFRAME.attributes.srcdoc;for(const d of Object.keys(u["http://www.w3.org/1999/xhtml"])){u["http://www.w3.org/1999/xhtml"][d].properties||(u["http://www.w3.org/1999/xhtml"][d].properties={});for(const e of Object.keys(u["http://www.w3.org/1999/xhtml"][d].attributes))u["http://www.w3.org/1999/xhtml"][d].properties[I[e]?I[e]:e]=u["http://www.w3.org/1999/xhtml"][d].attributes[e]}for(const d of C(HTMLElement.prototype))"on"===
d.slice(0,2)&&(u["http://www.w3.org/1999/xhtml"]["*"].attributes[d]="TrustedScript");const L={createHTML:A,createScriptURL:z,createURL:n,createScript:B},wa=L.hasOwnProperty;I=m(v.prototype);r(I,{createPolicy:function(d,e){if(U&&-1===S.indexOf(d))throw new TypeError("Policy "+d+" disallowed.");if(-1!==G.indexOf(d))throw new TypeError("Policy "+d+" exists.");G.push(d);const p=m(null);if(e&&"object"===typeof e)for(const k of C(e))wa.call(L,k)&&(p[k]=e[k]);else console.warn("TrustedTypes.createPolicy "+
d+" was given an empty policy");q(p);e=h(d,p);"default"===d&&(T=e);return e},getPolicyNames:function(){return G.slice()},i:f(A),m:f(n),l:f(z),j:f(B),g:function(d,e,p="",k=""){e=fa.apply(String(e));return l(d,"attributes",e,p,k)},w:function(d,e,p=""){return l(d,"properties",String(e),p)},h:function(d=""){if(!d)try{d=document.documentElement.namespaceURI}catch(e){d="http://www.w3.org/1999/xhtml"}return(d=u[d])?JSON.parse(JSON.stringify(d)):{}},o:ca,TrustedHTML:A,TrustedURL:n,TrustedScriptURL:z,TrustedScript:B});
return{TrustedTypes:q(I),B:function(d){-1!==d.indexOf("*")?U=!1:(U=!0,S.length=0,ua.call(d,e=>{va.call(S,""+e)}))},u:function(){return T},C:function(){T=null;G.splice(G.indexOf("default"),1)}}}();const {defineProperty:D}=Object;function la(a,c,b){D(a,c,{value:b})};const {apply:J}=Reflect,{getOwnPropertyNames:ma,getOwnPropertyDescriptor:K,getPrototypeOf:na}=Object,{hasOwnProperty:M}=Object.prototype,{slice:oa}=String.prototype,pa="function"==typeof window.URL?URL.prototype.constructor:null,qa=function(a){return 0==a.createRange().createContextualFragment({toString:()=>"<div></div>"}).childNodes.length}(document),ra=document.createElement("div").constructor.name?a=>a.name:a=>(""+a).match(/^\[object (\S+)\]$/)[1],xa=K(window,"open")?window:window.constructor.prototype,
ya=J(M,Element.prototype,["insertAdjacentHTML"])?Element.prototype:HTMLElement.prototype,za=window.SecurityPolicyViolationEvent||null,N=w.h("http://www.w3.org/1999/xhtml"),V={TrustedHTML:w.TrustedHTML,TrustedScript:w.TrustedScript,TrustedScriptURL:w.TrustedScriptURL,TrustedURL:w.TrustedURL};for(const a of Object.keys(N)){const c=N[a].properties;for(const [b,f]of Object.entries(c))c[b]=V[f]}
const W={TrustedHTML:w.i,TrustedURL:w.m,TrustedScriptURL:w.l,TrustedScript:w.j},Aa={TrustedHTML:"createHTML",TrustedURL:"createURL",TrustedScriptURL:"createScriptURL",TrustedScript:"createScript"};
function Ba(a,c,b,f){function h(q){a.b.call(a,this,b,f,m,0,[q])}let l=c,r,m;var t=na(Node.prototype);do(m=(r=K(l,b))?r.set:null)||(l=na(l)||t);while(!m&&l!==t&&l);if(!(m instanceof Function))throw new TypeError("No setter for property "+b+" on object"+c);t=""+(c.constructor.name?c.constructor.name:c.constructor)+"-"+b;if(a.c[t])throw Error(`TrustedTypesEnforcer: Double installation detected: ${t} ${b}`);l===c?D(c,b,{set:h}):D(c,b,{set:h,get:r.get,configurable:!0});a.c[t]=m}
function X(a,c,b,f){var h=Y;Z(h,a,c,function(l,...r){return h.b.call(h,this,c,b,l,f,r)})}function Ca(){var a=Y;Z(a,Element.prototype,"setAttribute",function(c,...b){return a.s.bind(a,this,c).apply(a,b)});Z(a,Element.prototype,"setAttributeNS",function(c,...b){return a.f.bind(a,this,c).apply(a,b)})}
function Z(a,c,b,f){var h=K(c,b);const l=h?h.value:null;if(!(l instanceof Function))throw new TypeError("Property "+b+" on object"+c+" is not a function");h=""+(c.constructor.name?c.constructor.name:c.constructor)+"-"+b;if(a.c[h])throw Error(`TrustedTypesEnforcer: Double installation detected: ${h} ${b}`);la(c,b,function(...r){return f.bind(this,l).apply(this,r)});a.c[h]=l}
class Da{constructor(a){this.a=a;this.c={}}s(a,c,...b){if(null!==a.constructor&&a instanceof Element){var f=(b[0]=String(b[0])).toLowerCase();if((f=w.g(a.tagName,f,a.namespaceURI))&&J(M,V,[f]))return this.b(a,"setAttribute",V[f],c,1,b)}return c.apply(a,b)}f(a,c,...b){if(null!==a.constructor&&a instanceof Element){var f=b[0]?String(b[0]):null;b[0]=f;const h=(b[1]=String(b[1])).toLowerCase();if((f=w.g(a.tagName,h,a.namespaceURI,f))&&J(M,V,[f]))return this.b(a,"setAttributeNS",V[f],c,2,b)}return c.apply(a,
b)}b(a,c,b,f,h,l){const r=l[h];var m=b.name;if(W.hasOwnProperty(m)&&W[m](r))return qa&&"createContextualFragment"==c&&(l[h]=l[h].toString()),J(f,a,l);if(b===w.TrustedScript){var t="setAttribute"==c||"setAttributeNS"===c||"on"===J(oa,c,[0,2]);if(("setInterval"===c||"setTimeout"===c||t)&&"function"===typeof r||t&&null===r)return J(f,a,l)}if((t=ka.call(w))&&W.hasOwnProperty(m)){let E;try{var q=t[Aa[m]](r)}catch(P){E=!0}if(!E)return l[h]=q,J(f,a,l)}h=ra(a.constructor)||""+a;m=`Failed to set ${c} on ${h}: `+
`This property requires ${m}.`;this.a.b&&console.warn(m,c,a,b,r);if("function"==typeof za){q="";if(b===w.TrustedURL||b===w.TrustedScriptURL){try{var C=new pa(r,document.baseURI||void 0)}catch(E){C=null}if(q=C||"")q=q.href}b=J(oa,""+r,[0,40]);c=new za("securitypolicyviolation",{bubbles:!0,blockedURI:q,disposition:this.a.a?"enforce":"report",documentURI:document.location.href,effectiveDirective:"trusted-types",originalPolicy:this.a.f,statusCode:0,violatedDirective:"trusted-types",sample:`${h}.${c} ${b}`});
a instanceof Node&&a.isConnected?a.dispatchEvent(c):document.dispatchEvent(c)}if(this.a.a)throw new TypeError(m);return J(f,a,l)}};if("undefined"!==typeof window&&"undefined"===typeof window.TrustedTypes){var Ea=Object.create(v.prototype);Object.assign(Ea,{isHTML:w.i,isURL:w.m,isScriptURL:w.l,isScript:w.j,createPolicy:w.createPolicy,getPolicyNames:w.getPolicyNames,getAttributeType:w.g,getPropertyType:w.w,getTypeMapping:w.h,emptyHTML:w.o,_isPolyfill_:!0});window.TrustedTypes=Object.freeze(Ea);window.TrustedHTML=w.TrustedHTML;window.TrustedURL=w.TrustedURL;window.TrustedScriptURL=w.TrustedScriptURL;window.TrustedScript=w.TrustedScript;
window.TrustedTypePolicy=ia;window.TrustedTypePolicyFactory=v};function Fa(){try{var a;if(!(a=document.currentScript)){{const b=document.getElementsByTagName("script");a=b[b.length-1]}}if(a&&"Content-Security-Policy:"==a.textContent.trim().substr(0,24))return a.textContent.trim().slice(24);if(a.dataset.csp)return a.dataset.csp;const c=document.head.querySelector('meta[http-equiv^="Content-Security-Policy"]');if(c)return c.content.trim()}catch(c){}return null}
if(!window.TrustedTypes||window.TrustedTypes._isPolyfill_){{const a=Fa(),c=a?da(a):new g(!1,!1,["*"]);var Y=new Da(c);ja(Y.a.c);if(Y.a.a||Y.a.b){"ShadowRoot"in window&&Ba(Y,ShadowRoot.prototype,"innerHTML",w.TrustedHTML);X(Range.prototype,"createContextualFragment",w.TrustedHTML,0);X(ya,"insertAdjacentHTML",w.TrustedHTML,1);K(Document.prototype,"write")?(X(Document.prototype,"write",w.TrustedHTML,0),X(Document.prototype,"open",w.TrustedURL,0)):(X(HTMLDocument.prototype,"write",w.TrustedHTML,0),X(HTMLDocument.prototype,
"open",w.TrustedURL,0));X(xa,"open",w.TrustedURL,0);"DOMParser"in window&&X(DOMParser.prototype,"parseFromString",w.TrustedHTML,0);X(window,"setInterval",w.TrustedScript,0);X(window,"setTimeout",w.TrustedScript,0);Ca();var Ga=Y;for(const b of ma(N))for(const f of ma(N[b].properties))Ba(Ga,window["*"==b?"HTMLElement":ra(document.createElement(b).constructor)].prototype,f,N[b].properties[f])}}};}).call(this);

//# sourceMappingURL=trustedtypes.build.js.map
