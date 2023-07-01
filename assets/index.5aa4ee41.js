const gs=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};gs();function Qr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const J={},Et=[],Te=()=>{},vs=()=>!1,bs=/^on[^a-z]/,Xn=e=>bs.test(e),Zr=e=>e.startsWith("onUpdate:"),oe=Object.assign,ea=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ys=Object.prototype.hasOwnProperty,D=(e,t)=>ys.call(e,t),F=Array.isArray,St=e=>Gn(e)==="[object Map]",Yi=e=>Gn(e)==="[object Set]",L=e=>typeof e=="function",ae=e=>typeof e=="string",ta=e=>typeof e=="symbol",Q=e=>e!==null&&typeof e=="object",Vi=e=>Q(e)&&L(e.then)&&L(e.catch),Wi=Object.prototype.toString,Gn=e=>Wi.call(e),xs=e=>Gn(e).slice(8,-1),Ki=e=>Gn(e)==="[object Object]",na=e=>ae(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Mn=Qr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Jn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ws=/-(\w)/g,$e=Jn(e=>e.replace(ws,(t,n)=>n?n.toUpperCase():"")),_s=/\B([A-Z])/g,jt=Jn(e=>e.replace(_s,"-$1").toLowerCase()),Qn=Jn(e=>e.charAt(0).toUpperCase()+e.slice(1)),hr=Jn(e=>e?`on${Qn(e)}`:""),Rn=(e,t)=>!Object.is(e,t),gr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},$n=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ks=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let $a;const Cr=()=>$a||($a=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});function Zn(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ae(r)?Es(r):Zn(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ae(e))return e;if(Q(e))return e}}const As=/;(?![^(]*\))/g,Os=/:([^]+)/,Cs=/\/\*[^]*?\*\//g;function Es(e){const t={};return e.replace(Cs,"").split(As).forEach(n=>{if(n){const r=n.split(Os);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function er(e){let t="";if(ae(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const r=er(e[n]);r&&(t+=r+" ")}else if(Q(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ss="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ps=Qr(Ss);function qi(e){return!!e||e===""}const fe=e=>ae(e)?e:e==null?"":F(e)||Q(e)&&(e.toString===Wi||!L(e.toString))?JSON.stringify(e,Xi,2):String(e),Xi=(e,t)=>t&&t.__v_isRef?Xi(e,t.value):St(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Yi(t)?{[`Set(${t.size})`]:[...t.values()]}:Q(t)&&!F(t)&&!Ki(t)?String(t):t;let Ce;class Is{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ce,!t&&Ce&&(this.index=(Ce.scopes||(Ce.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Ce;try{return Ce=this,t()}finally{Ce=n}}}on(){Ce=this}off(){Ce=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Ts(e,t=Ce){t&&t.active&&t.effects.push(e)}function Ms(){return Ce}const ra=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Gi=e=>(e.w&tt)>0,Ji=e=>(e.n&tt)>0,Ns=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=tt},Fs=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Gi(a)&&!Ji(a)?a.delete(e):t[n++]=a,a.w&=~tt,a.n&=~tt}t.length=n}},Er=new WeakMap;let Bt=0,tt=1;const Sr=30;let Ee;const pt=Symbol(""),Pr=Symbol("");class aa{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ts(this,r)}run(){if(!this.active)return this.fn();let t=Ee,n=Ze;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ee,Ee=this,Ze=!0,tt=1<<++Bt,Bt<=Sr?Ns(this):Ha(this),this.fn()}finally{Bt<=Sr&&Fs(this),tt=1<<--Bt,Ee=this.parent,Ze=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ee===this?this.deferStop=!0:this.active&&(Ha(this),this.onStop&&this.onStop(),this.active=!1)}}function Ha(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ze=!0;const Qi=[];function zt(){Qi.push(Ze),Ze=!1}function Lt(){const e=Qi.pop();Ze=e===void 0?!0:e}function ye(e,t,n){if(Ze&&Ee){let r=Er.get(e);r||Er.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=ra()),Zi(a)}}function Zi(e,t){let n=!1;Bt<=Sr?Ji(e)||(e.n|=tt,n=!Gi(e)):n=!e.has(Ee),n&&(e.add(Ee),Ee.deps.push(e))}function Be(e,t,n,r,a,i){const o=Er.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&F(e)){const l=Number(r);o.forEach((f,d)=>{(d==="length"||d>=l)&&s.push(f)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":F(e)?na(n)&&s.push(o.get("length")):(s.push(o.get(pt)),St(e)&&s.push(o.get(Pr)));break;case"delete":F(e)||(s.push(o.get(pt)),St(e)&&s.push(o.get(Pr)));break;case"set":St(e)&&s.push(o.get(pt));break}if(s.length===1)s[0]&&Ir(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);Ir(ra(l))}}function Ir(e,t){const n=F(e)?e:[...e];for(const r of n)r.computed&&Da(r);for(const r of n)r.computed||Da(r)}function Da(e,t){(e!==Ee||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const js=Qr("__proto__,__v_isRef,__isVue"),eo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ta)),zs=ia(),Ls=ia(!1,!0),Rs=ia(!0),Ua=$s();function $s(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=U(this);for(let i=0,o=this.length;i<o;i++)ye(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(U)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){zt();const r=U(this)[t].apply(this,n);return Lt(),r}}),e}function Hs(e){const t=U(this);return ye(t,"has",e),t.hasOwnProperty(e)}function ia(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?nl:io:t?ao:ro).get(r))return r;const o=F(r);if(!e){if(o&&D(Ua,a))return Reflect.get(Ua,a,i);if(a==="hasOwnProperty")return Hs}const s=Reflect.get(r,a,i);return(ta(a)?eo.has(a):js(a))||(e||ye(r,"get",a),t)?s:pe(s)?o&&na(a)?s:s.value:Q(s)?e?oo(s):nr(s):s}}const Ds=to(),Us=to(!0);function to(e=!1){return function(n,r,a,i){let o=n[r];if(Qt(o)&&pe(o)&&!pe(a))return!1;if(!e&&(!Tr(a)&&!Qt(a)&&(o=U(o),a=U(a)),!F(n)&&pe(o)&&!pe(a)))return o.value=a,!0;const s=F(n)&&na(r)?Number(r)<n.length:D(n,r),l=Reflect.set(n,r,a,i);return n===U(i)&&(s?Rn(a,o)&&Be(n,"set",r,a):Be(n,"add",r,a)),l}}function Bs(e,t){const n=D(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Be(e,"delete",t,void 0),r}function Ys(e,t){const n=Reflect.has(e,t);return(!ta(t)||!eo.has(t))&&ye(e,"has",t),n}function Vs(e){return ye(e,"iterate",F(e)?"length":pt),Reflect.ownKeys(e)}const no={get:zs,set:Ds,deleteProperty:Bs,has:Ys,ownKeys:Vs},Ws={get:Rs,set(e,t){return!0},deleteProperty(e,t){return!0}},Ks=oe({},no,{get:Ls,set:Us}),oa=e=>e,tr=e=>Reflect.getPrototypeOf(e);function gn(e,t,n=!1,r=!1){e=e.__v_raw;const a=U(e),i=U(t);n||(t!==i&&ye(a,"get",t),ye(a,"get",i));const{has:o}=tr(a),s=r?oa:n?fa:ca;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function vn(e,t=!1){const n=this.__v_raw,r=U(n),a=U(e);return t||(e!==a&&ye(r,"has",e),ye(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function bn(e,t=!1){return e=e.__v_raw,!t&&ye(U(e),"iterate",pt),Reflect.get(e,"size",e)}function Ba(e){e=U(e);const t=U(this);return tr(t).has.call(t,e)||(t.add(e),Be(t,"add",e,e)),this}function Ya(e,t){t=U(t);const n=U(this),{has:r,get:a}=tr(n);let i=r.call(n,e);i||(e=U(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Rn(t,o)&&Be(n,"set",e,t):Be(n,"add",e,t),this}function Va(e){const t=U(this),{has:n,get:r}=tr(t);let a=n.call(t,e);a||(e=U(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Be(t,"delete",e,void 0),i}function Wa(){const e=U(this),t=e.size!==0,n=e.clear();return t&&Be(e,"clear",void 0,void 0),n}function yn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=U(o),l=t?oa:e?fa:ca;return!e&&ye(s,"iterate",pt),o.forEach((f,d)=>r.call(a,l(f),l(d),i))}}function xn(e,t,n){return function(...r){const a=this.__v_raw,i=U(a),o=St(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=a[e](...r),d=n?oa:t?fa:ca;return!t&&ye(i,"iterate",l?Pr:pt),{next(){const{value:m,done:v}=f.next();return v?{value:m,done:v}:{value:s?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function Xe(e){return function(...t){return e==="delete"?!1:this}}function qs(){const e={get(i){return gn(this,i)},get size(){return bn(this)},has:vn,add:Ba,set:Ya,delete:Va,clear:Wa,forEach:yn(!1,!1)},t={get(i){return gn(this,i,!1,!0)},get size(){return bn(this)},has:vn,add:Ba,set:Ya,delete:Va,clear:Wa,forEach:yn(!1,!0)},n={get(i){return gn(this,i,!0)},get size(){return bn(this,!0)},has(i){return vn.call(this,i,!0)},add:Xe("add"),set:Xe("set"),delete:Xe("delete"),clear:Xe("clear"),forEach:yn(!0,!1)},r={get(i){return gn(this,i,!0,!0)},get size(){return bn(this,!0)},has(i){return vn.call(this,i,!0)},add:Xe("add"),set:Xe("set"),delete:Xe("delete"),clear:Xe("clear"),forEach:yn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=xn(i,!1,!1),n[i]=xn(i,!0,!1),t[i]=xn(i,!1,!0),r[i]=xn(i,!0,!0)}),[e,n,t,r]}const[Xs,Gs,Js,Qs]=qs();function sa(e,t){const n=t?e?Qs:Js:e?Gs:Xs;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(D(n,a)&&a in r?n:r,a,i)}const Zs={get:sa(!1,!1)},el={get:sa(!1,!0)},tl={get:sa(!0,!1)},ro=new WeakMap,ao=new WeakMap,io=new WeakMap,nl=new WeakMap;function rl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function al(e){return e.__v_skip||!Object.isExtensible(e)?0:rl(xs(e))}function nr(e){return Qt(e)?e:la(e,!1,no,Zs,ro)}function il(e){return la(e,!1,Ks,el,ao)}function oo(e){return la(e,!0,Ws,tl,io)}function la(e,t,n,r,a){if(!Q(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=al(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Pt(e){return Qt(e)?Pt(e.__v_raw):!!(e&&e.__v_isReactive)}function Qt(e){return!!(e&&e.__v_isReadonly)}function Tr(e){return!!(e&&e.__v_isShallow)}function so(e){return Pt(e)||Qt(e)}function U(e){const t=e&&e.__v_raw;return t?U(t):e}function lo(e){return $n(e,"__v_skip",!0),e}const ca=e=>Q(e)?nr(e):e,fa=e=>Q(e)?oo(e):e;function ol(e){Ze&&Ee&&(e=U(e),Zi(e.dep||(e.dep=ra())))}function sl(e,t){e=U(e);const n=e.dep;n&&Ir(n)}function pe(e){return!!(e&&e.__v_isRef===!0)}function ge(e){return pe(e)?e.value:e}const ll={get:(e,t,n)=>ge(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return pe(a)&&!pe(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function co(e){return Pt(e)?e:new Proxy(e,ll)}class cl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new aa(t,()=>{this._dirty||(this._dirty=!0,sl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=U(this);return ol(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function fl(e,t,n=!1){let r,a;const i=L(e);return i?(r=e,a=Te):(r=e.get,a=e.set),new cl(r,a,i||!a,n)}function et(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){rr(i,t,n)}return a}function Me(e,t,n,r){if(L(e)){const i=et(e,t,n,r);return i&&Vi(i)&&i.catch(o=>{rr(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Me(e[i],t,n,r));return a}function rr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const f=i.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){et(l,null,10,[e,o,s]);return}}ul(e,n,a,r)}function ul(e,t,n,r=!0){console.error(e)}let Zt=!1,Mr=!1;const ue=[];let Le=0;const It=[];let Ue=null,ft=0;const fo=Promise.resolve();let ua=null;function dl(e){const t=ua||fo;return e?t.then(this?e.bind(this):e):t}function ml(e){let t=Le+1,n=ue.length;for(;t<n;){const r=t+n>>>1;en(ue[r])<e?t=r+1:n=r}return t}function da(e){(!ue.length||!ue.includes(e,Zt&&e.allowRecurse?Le+1:Le))&&(e.id==null?ue.push(e):ue.splice(ml(e.id),0,e),uo())}function uo(){!Zt&&!Mr&&(Mr=!0,ua=fo.then(po))}function pl(e){const t=ue.indexOf(e);t>Le&&ue.splice(t,1)}function hl(e){F(e)?It.push(...e):(!Ue||!Ue.includes(e,e.allowRecurse?ft+1:ft))&&It.push(e),uo()}function Ka(e,t=Zt?Le+1:0){for(;t<ue.length;t++){const n=ue[t];n&&n.pre&&(ue.splice(t,1),t--,n())}}function mo(e){if(It.length){const t=[...new Set(It)];if(It.length=0,Ue){Ue.push(...t);return}for(Ue=t,Ue.sort((n,r)=>en(n)-en(r)),ft=0;ft<Ue.length;ft++)Ue[ft]();Ue=null,ft=0}}const en=e=>e.id==null?1/0:e.id,gl=(e,t)=>{const n=en(e)-en(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function po(e){Mr=!1,Zt=!0,ue.sort(gl);const t=Te;try{for(Le=0;Le<ue.length;Le++){const n=ue[Le];n&&n.active!==!1&&et(n,null,14)}}finally{Le=0,ue.length=0,mo(),Zt=!1,ua=null,(ue.length||It.length)&&po()}}function vl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||J;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[d]||J;v&&(a=n.map(_=>ae(_)?_.trim():_)),m&&(a=n.map(ks))}let s,l=r[s=hr(t)]||r[s=hr($e(t))];!l&&i&&(l=r[s=hr(jt(t))]),l&&Me(l,e,6,a);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Me(f,e,6,a)}}function ho(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!L(e)){const l=f=>{const d=ho(f,t,!0);d&&(s=!0,oe(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(Q(e)&&r.set(e,null),null):(F(i)?i.forEach(l=>o[l]=null):oe(o,i),Q(e)&&r.set(e,o),o)}function ar(e,t){return!e||!Xn(t)?!1:(t=t.slice(2).replace(/Once$/,""),D(e,t[0].toLowerCase()+t.slice(1))||D(e,jt(t))||D(e,t))}let he=null,go=null;function Hn(e){const t=he;return he=e,go=e&&e.type.__scopeId||null,t}function _t(e,t=he,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&ai(-1);const i=Hn(t);let o;try{o=e(...a)}finally{Hn(i),r._d&&ai(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function vr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:f,render:d,renderCache:m,data:v,setupState:_,ctx:R,inheritAttrs:N}=e;let H,k;const O=Hn(e);try{if(n.shapeFlag&4){const P=a||r;H=ze(d.call(P,P,m,i,_,v,R)),k=l}else{const P=t;H=ze(P.length>1?P(i,{attrs:l,slots:s,emit:f}):P(i,null)),k=t.props?l:bl(l)}}catch(P){qt.length=0,rr(P,e,1),H=q(nt)}let j=H;if(k&&N!==!1){const P=Object.keys(k),{shapeFlag:B}=j;P.length&&B&7&&(o&&P.some(Zr)&&(k=yl(k,o)),j=Mt(j,k))}return n.dirs&&(j=Mt(j),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&(j.transition=n.transition),H=j,Hn(O),H}const bl=e=>{let t;for(const n in e)(n==="class"||n==="style"||Xn(n))&&((t||(t={}))[n]=e[n]);return t},yl=(e,t)=>{const n={};for(const r in e)(!Zr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function xl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?qa(r,o,f):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(o[v]!==r[v]&&!ar(f,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?qa(r,o,f):!0:!!o;return!1}function qa(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!ar(n,i))return!0}return!1}function wl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const _l=e=>e.__isSuspense;function kl(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):hl(e)}const wn={};function Nn(e,t,n){return vo(e,t,n)}function vo(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=J){var s;const l=Ms()===((s=se)==null?void 0:s.scope)?se:null;let f,d=!1,m=!1;if(pe(e)?(f=()=>e.value,d=Tr(e)):Pt(e)?(f=()=>e,r=!0):F(e)?(m=!0,d=e.some(P=>Pt(P)||Tr(P)),f=()=>e.map(P=>{if(pe(P))return P.value;if(Pt(P))return At(P);if(L(P))return et(P,l,2)})):L(e)?t?f=()=>et(e,l,2):f=()=>{if(!(l&&l.isUnmounted))return v&&v(),Me(e,l,3,[_])}:f=Te,t&&r){const P=f;f=()=>At(P())}let v,_=P=>{v=O.onStop=()=>{et(P,l,4)}},R;if(nn)if(_=Te,t?n&&Me(t,l,3,[f(),m?[]:void 0,_]):f(),a==="sync"){const P=bc();R=P.__watcherHandles||(P.__watcherHandles=[])}else return Te;let N=m?new Array(e.length).fill(wn):wn;const H=()=>{if(!!O.active)if(t){const P=O.run();(r||d||(m?P.some((B,le)=>Rn(B,N[le])):Rn(P,N)))&&(v&&v(),Me(t,l,3,[P,N===wn?void 0:m&&N[0]===wn?[]:N,_]),N=P)}else O.run()};H.allowRecurse=!!t;let k;a==="sync"?k=H:a==="post"?k=()=>be(H,l&&l.suspense):(H.pre=!0,l&&(H.id=l.uid),k=()=>da(H));const O=new aa(f,k);t?n?H():N=O.run():a==="post"?be(O.run.bind(O),l&&l.suspense):O.run();const j=()=>{O.stop(),l&&l.scope&&ea(l.scope.effects,O)};return R&&R.push(j),j}function Al(e,t,n){const r=this.proxy,a=ae(e)?e.includes(".")?bo(r,e):()=>r[e]:e.bind(r,r);let i;L(t)?i=t:(i=t.handler,n=t);const o=se;Nt(this);const s=vo(a,i.bind(r),n);return o?Nt(o):gt(),s}function bo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function At(e,t){if(!Q(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),pe(e))At(e.value,t);else if(F(e))for(let n=0;n<e.length;n++)At(e[n],t);else if(Yi(e)||St(e))e.forEach(n=>{At(n,t)});else if(Ki(e))for(const n in e)At(e[n],t);return e}function lt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(zt(),Me(l,n,8,[e.el,s,e,t]),Lt())}}function ma(e,t){return L(e)?(()=>oe({name:e.name},t,{setup:e}))():e}const Wt=e=>!!e.type.__asyncLoader,yo=e=>e.type.__isKeepAlive;function Ol(e,t){xo(e,"a",t)}function Cl(e,t){xo(e,"da",t)}function xo(e,t,n=se){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(ir(t,r,n),n){let a=n.parent;for(;a&&a.parent;)yo(a.parent.vnode)&&El(r,t,n,a),a=a.parent}}function El(e,t,n,r){const a=ir(t,e,r,!0);wo(()=>{ea(r[t],a)},n)}function ir(e,t,n=se,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;zt(),Nt(n);const s=Me(t,n,e,o);return gt(),Lt(),s});return r?a.unshift(i):a.push(i),i}}const Ke=e=>(t,n=se)=>(!nn||e==="sp")&&ir(e,(...r)=>t(...r),n),Sl=Ke("bm"),Pl=Ke("m"),Il=Ke("bu"),Tl=Ke("u"),Ml=Ke("bum"),wo=Ke("um"),Nl=Ke("sp"),Fl=Ke("rtg"),jl=Ke("rtc");function zl(e,t=se){ir("ec",e,t)}const _o="components";function ko(e,t){return Rl(_o,e,!0,t)||e}const Ll=Symbol.for("v-ndc");function Rl(e,t,n=!0,r=!1){const a=he||se;if(a){const i=a.type;if(e===_o){const s=hc(i,!1);if(s&&(s===t||s===$e(t)||s===Qn($e(t))))return i}const o=Xa(a[e]||i[e],t)||Xa(a.appContext[e],t);return!o&&r?i:o}}function Xa(e,t){return e&&(e[t]||e[$e(t)]||e[Qn($e(t))])}function Je(e,t,n,r){let a;const i=n&&n[r];if(F(e)||ae(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(Q(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const f=o[s];a[s]=t(e[f],f,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}function $l(e,t,n={},r,a){if(he.isCE||he.parent&&Wt(he.parent)&&he.parent.isCE)return t!=="default"&&(n.name=t),q("slot",n,r&&r());let i=e[t];i&&i._c&&(i._d=!1),K();const o=i&&Ao(i(n)),s=ht(re,{key:n.key||o&&o.key||`_${t}`},o||(r?r():[]),o&&e._===1?64:-2);return!a&&s.scopeId&&(s.slotScopeIds=[s.scopeId+"-s"]),i&&i._c&&(i._d=!0),s}function Ao(e){return e.some(t=>Bn(t)?!(t.type===nt||t.type===re&&!Ao(t.children)):!0)?e:null}const Nr=e=>e?jo(e)?ba(e)||e.proxy:Nr(e.parent):null,Kt=oe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Nr(e.parent),$root:e=>Nr(e.root),$emit:e=>e.emit,$options:e=>pa(e),$forceUpdate:e=>e.f||(e.f=()=>da(e.update)),$nextTick:e=>e.n||(e.n=dl.bind(e.proxy)),$watch:e=>Al.bind(e)}),br=(e,t)=>e!==J&&!e.__isScriptSetup&&D(e,t),Hl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const _=o[t];if(_!==void 0)switch(_){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(br(r,t))return o[t]=1,r[t];if(a!==J&&D(a,t))return o[t]=2,a[t];if((f=e.propsOptions[0])&&D(f,t))return o[t]=3,i[t];if(n!==J&&D(n,t))return o[t]=4,n[t];Fr&&(o[t]=0)}}const d=Kt[t];let m,v;if(d)return t==="$attrs"&&ye(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==J&&D(n,t))return o[t]=4,n[t];if(v=l.config.globalProperties,D(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return br(a,t)?(a[t]=n,!0):r!==J&&D(r,t)?(r[t]=n,!0):D(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==J&&D(e,o)||br(t,o)||(s=i[0])&&D(s,o)||D(r,o)||D(Kt,o)||D(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:D(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ga(e){return F(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Fr=!0;function Dl(e){const t=pa(e),n=e.proxy,r=e.ctx;Fr=!1,t.beforeCreate&&Ja(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:f,created:d,beforeMount:m,mounted:v,beforeUpdate:_,updated:R,activated:N,deactivated:H,beforeDestroy:k,beforeUnmount:O,destroyed:j,unmounted:P,render:B,renderTracked:le,renderTriggered:ce,errorCaptured:Ae,serverPrefetch:_e,expose:He,inheritAttrs:$t,components:dn,directives:mn,filters:dr}=t;if(f&&Ul(f,r,null),o)for(const Z in o){const V=o[Z];L(V)&&(r[Z]=V.bind(n))}if(a){const Z=a.call(n,n);Q(Z)&&(e.data=nr(Z))}if(Fr=!0,i)for(const Z in i){const V=i[Z],ot=L(V)?V.bind(n,n):L(V.get)?V.get.bind(n,n):Te,pn=!L(V)&&L(V.set)?V.set.bind(n):Te,st=ke({get:ot,set:pn});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>st.value,set:Ne=>st.value=Ne})}if(s)for(const Z in s)Oo(s[Z],r,n,Z);if(l){const Z=L(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(V=>{ql(V,Z[V])})}d&&Ja(d,e,"c");function de(Z,V){F(V)?V.forEach(ot=>Z(ot.bind(n))):V&&Z(V.bind(n))}if(de(Sl,m),de(Pl,v),de(Il,_),de(Tl,R),de(Ol,N),de(Cl,H),de(zl,Ae),de(jl,le),de(Fl,ce),de(Ml,O),de(wo,P),de(Nl,_e),F(He))if(He.length){const Z=e.exposed||(e.exposed={});He.forEach(V=>{Object.defineProperty(Z,V,{get:()=>n[V],set:ot=>n[V]=ot})})}else e.exposed||(e.exposed={});B&&e.render===Te&&(e.render=B),$t!=null&&(e.inheritAttrs=$t),dn&&(e.components=dn),mn&&(e.directives=mn)}function Ul(e,t,n=Te){F(e)&&(e=jr(e));for(const r in e){const a=e[r];let i;Q(a)?"default"in a?i=Fn(a.from||r,a.default,!0):i=Fn(a.from||r):i=Fn(a),pe(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function Ja(e,t,n){Me(F(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Oo(e,t,n,r){const a=r.includes(".")?bo(n,r):()=>n[r];if(ae(e)){const i=t[e];L(i)&&Nn(a,i)}else if(L(e))Nn(a,e.bind(n));else if(Q(e))if(F(e))e.forEach(i=>Oo(i,t,n,r));else{const i=L(e.handler)?e.handler.bind(n):t[e.handler];L(i)&&Nn(a,i,e)}}function pa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(f=>Dn(l,f,o,!0)),Dn(l,t,o)),Q(t)&&i.set(t,l),l}function Dn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Dn(e,i,n,!0),a&&a.forEach(o=>Dn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Bl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Bl={data:Qa,props:Za,emits:Za,methods:Yt,computed:Yt,beforeCreate:me,created:me,beforeMount:me,mounted:me,beforeUpdate:me,updated:me,beforeDestroy:me,beforeUnmount:me,destroyed:me,unmounted:me,activated:me,deactivated:me,errorCaptured:me,serverPrefetch:me,components:Yt,directives:Yt,watch:Vl,provide:Qa,inject:Yl};function Qa(e,t){return t?e?function(){return oe(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function Yl(e,t){return Yt(jr(e),jr(t))}function jr(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function me(e,t){return e?[...new Set([].concat(e,t))]:t}function Yt(e,t){return e?oe(Object.create(null),e,t):t}function Za(e,t){return e?F(e)&&F(t)?[...new Set([...e,...t])]:oe(Object.create(null),Ga(e),Ga(t!=null?t:{})):t}function Vl(e,t){if(!e)return t;if(!t)return e;const n=oe(Object.create(null),e);for(const r in t)n[r]=me(e[r],t[r]);return n}function Co(){return{app:null,config:{isNativeTag:vs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wl=0;function Kl(e,t){return function(r,a=null){L(r)||(r=oe({},r)),a!=null&&!Q(a)&&(a=null);const i=Co(),o=new Set;let s=!1;const l=i.app={_uid:Wl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:yc,get config(){return i.config},set config(f){},use(f,...d){return o.has(f)||(f&&L(f.install)?(o.add(f),f.install(l,...d)):L(f)&&(o.add(f),f(l,...d))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,d){return d?(i.components[f]=d,l):i.components[f]},directive(f,d){return d?(i.directives[f]=d,l):i.directives[f]},mount(f,d,m){if(!s){const v=q(r,a);return v.appContext=i,d&&t?t(v,f):e(v,f,m),s=!0,l._container=f,f.__vue_app__=l,ba(v.component)||v.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,d){return i.provides[f]=d,l},runWithContext(f){Un=l;try{return f()}finally{Un=null}}};return l}}let Un=null;function ql(e,t){if(se){let n=se.provides;const r=se.parent&&se.parent.provides;r===n&&(n=se.provides=Object.create(r)),n[e]=t}}function Fn(e,t,n=!1){const r=se||he;if(r||Un){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Un._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&L(t)?t.call(r&&r.proxy):t}}function Xl(e,t,n,r=!1){const a={},i={};$n(i,sr,1),e.propsDefaults=Object.create(null),Eo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:il(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Gl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=U(a),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(ar(e.emitsOptions,v))continue;const _=t[v];if(l)if(D(i,v))_!==i[v]&&(i[v]=_,f=!0);else{const R=$e(v);a[R]=zr(l,s,R,_,e,!1)}else _!==i[v]&&(i[v]=_,f=!0)}}}else{Eo(e,t,a,i)&&(f=!0);let d;for(const m in s)(!t||!D(t,m)&&((d=jt(m))===m||!D(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=zr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!D(t,m)&&!0)&&(delete i[m],f=!0)}f&&Be(e,"set","$attrs")}function Eo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Mn(l))continue;const f=t[l];let d;a&&D(a,d=$e(l))?!i||!i.includes(d)?n[d]=f:(s||(s={}))[d]=f:ar(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(i){const l=U(n),f=s||J;for(let d=0;d<i.length;d++){const m=i[d];n[m]=zr(a,l,m,f[m],e,!D(f,m))}}return o}function zr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=D(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&L(l)){const{propsDefaults:f}=a;n in f?r=f[n]:(Nt(a),r=f[n]=l.call(null,t),gt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===jt(n))&&(r=!0))}return r}function So(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!L(e)){const d=m=>{l=!0;const[v,_]=So(m,t,!0);oe(o,v),_&&s.push(..._)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return Q(e)&&r.set(e,Et),Et;if(F(i))for(let d=0;d<i.length;d++){const m=$e(i[d]);ei(m)&&(o[m]=J)}else if(i)for(const d in i){const m=$e(d);if(ei(m)){const v=i[d],_=o[m]=F(v)||L(v)?{type:v}:oe({},v);if(_){const R=ri(Boolean,_.type),N=ri(String,_.type);_[0]=R>-1,_[1]=N<0||R<N,(R>-1||D(_,"default"))&&s.push(m)}}}const f=[o,s];return Q(e)&&r.set(e,f),f}function ei(e){return e[0]!=="$"}function ti(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function ni(e,t){return ti(e)===ti(t)}function ri(e,t){return F(t)?t.findIndex(n=>ni(n,e)):L(t)&&ni(t,e)?0:-1}const Po=e=>e[0]==="_"||e==="$stable",ha=e=>F(e)?e.map(ze):[ze(e)],Jl=(e,t,n)=>{if(t._n)return t;const r=_t((...a)=>ha(t(...a)),n);return r._c=!1,r},Io=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Po(a))continue;const i=e[a];if(L(i))t[a]=Jl(a,i,r);else if(i!=null){const o=ha(i);t[a]=()=>o}}},To=(e,t)=>{const n=ha(t);e.slots.default=()=>n},Ql=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=U(t),$n(t,"_",n)):Io(t,e.slots={})}else e.slots={},t&&To(e,t);$n(e.slots,sr,1)},Zl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=J;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(oe(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Io(t,a)),o=t}else t&&(To(e,t),o={default:1});if(i)for(const s in a)!Po(s)&&!(s in o)&&delete a[s]};function Lr(e,t,n,r,a=!1){if(F(e)){e.forEach((v,_)=>Lr(v,t&&(F(t)?t[_]:t),n,r,a));return}if(Wt(r)&&!a)return;const i=r.shapeFlag&4?ba(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,f=t&&t.r,d=s.refs===J?s.refs={}:s.refs,m=s.setupState;if(f!=null&&f!==l&&(ae(f)?(d[f]=null,D(m,f)&&(m[f]=null)):pe(f)&&(f.value=null)),L(l))et(l,s,12,[o,d]);else{const v=ae(l),_=pe(l);if(v||_){const R=()=>{if(e.f){const N=v?D(m,l)?m[l]:d[l]:l.value;a?F(N)&&ea(N,i):F(N)?N.includes(i)||N.push(i):v?(d[l]=[i],D(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else v?(d[l]=o,D(m,l)&&(m[l]=o)):_&&(l.value=o,e.k&&(d[e.k]=o))};o?(R.id=-1,be(R,n)):R()}}}const be=kl;function ec(e){return tc(e)}function tc(e,t){const n=Cr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:f,setElementText:d,parentNode:m,nextSibling:v,setScopeId:_=Te,insertStaticContent:R}=e,N=(c,u,p,g=null,h=null,x=null,A=!1,y=null,w=!!u.dynamicChildren)=>{if(c===u)return;c&&!Dt(c,u)&&(g=hn(c),Ne(c,h,x,!0),c=null),u.patchFlag===-2&&(w=!1,u.dynamicChildren=null);const{type:b,ref:T,shapeFlag:E}=u;switch(b){case or:H(c,u,p,g);break;case nt:k(c,u,p,g);break;case yr:c==null&&O(u,p,g,A);break;case re:dn(c,u,p,g,h,x,A,y,w);break;default:E&1?B(c,u,p,g,h,x,A,y,w):E&6?mn(c,u,p,g,h,x,A,y,w):(E&64||E&128)&&b.process(c,u,p,g,h,x,A,y,w,yt)}T!=null&&h&&Lr(T,c&&c.ref,x,u||c,!u)},H=(c,u,p,g)=>{if(c==null)r(u.el=s(u.children),p,g);else{const h=u.el=c.el;u.children!==c.children&&f(h,u.children)}},k=(c,u,p,g)=>{c==null?r(u.el=l(u.children||""),p,g):u.el=c.el},O=(c,u,p,g)=>{[c.el,c.anchor]=R(c.children,u,p,g,c.el,c.anchor)},j=({el:c,anchor:u},p,g)=>{let h;for(;c&&c!==u;)h=v(c),r(c,p,g),c=h;r(u,p,g)},P=({el:c,anchor:u})=>{let p;for(;c&&c!==u;)p=v(c),a(c),c=p;a(u)},B=(c,u,p,g,h,x,A,y,w)=>{A=A||u.type==="svg",c==null?le(u,p,g,h,x,A,y,w):_e(c,u,h,x,A,y,w)},le=(c,u,p,g,h,x,A,y)=>{let w,b;const{type:T,props:E,shapeFlag:M,transition:z,dirs:$}=c;if(w=c.el=o(c.type,x,E&&E.is,E),M&8?d(w,c.children):M&16&&Ae(c.children,w,null,g,h,x&&T!=="foreignObject",A,y),$&&lt(c,null,g,"created"),ce(w,c,c.scopeId,A,g),E){for(const Y in E)Y!=="value"&&!Mn(Y)&&i(w,Y,null,E[Y],x,c.children,g,h,De);"value"in E&&i(w,"value",null,E.value),(b=E.onVnodeBeforeMount)&&je(b,g,c)}$&&lt(c,null,g,"beforeMount");const W=(!h||h&&!h.pendingBranch)&&z&&!z.persisted;W&&z.beforeEnter(w),r(w,u,p),((b=E&&E.onVnodeMounted)||W||$)&&be(()=>{b&&je(b,g,c),W&&z.enter(w),$&&lt(c,null,g,"mounted")},h)},ce=(c,u,p,g,h)=>{if(p&&_(c,p),g)for(let x=0;x<g.length;x++)_(c,g[x]);if(h){let x=h.subTree;if(u===x){const A=h.vnode;ce(c,A,A.scopeId,A.slotScopeIds,h.parent)}}},Ae=(c,u,p,g,h,x,A,y,w=0)=>{for(let b=w;b<c.length;b++){const T=c[b]=y?Qe(c[b]):ze(c[b]);N(null,T,u,p,g,h,x,A,y)}},_e=(c,u,p,g,h,x,A)=>{const y=u.el=c.el;let{patchFlag:w,dynamicChildren:b,dirs:T}=u;w|=c.patchFlag&16;const E=c.props||J,M=u.props||J;let z;p&&ct(p,!1),(z=M.onVnodeBeforeUpdate)&&je(z,p,u,c),T&&lt(u,c,p,"beforeUpdate"),p&&ct(p,!0);const $=h&&u.type!=="foreignObject";if(b?He(c.dynamicChildren,b,y,p,g,$,x):A||V(c,u,y,null,p,g,$,x,!1),w>0){if(w&16)$t(y,u,E,M,p,g,h);else if(w&2&&E.class!==M.class&&i(y,"class",null,M.class,h),w&4&&i(y,"style",E.style,M.style,h),w&8){const W=u.dynamicProps;for(let Y=0;Y<W.length;Y++){const te=W[Y],Oe=E[te],xt=M[te];(xt!==Oe||te==="value")&&i(y,te,Oe,xt,h,c.children,p,g,De)}}w&1&&c.children!==u.children&&d(y,u.children)}else!A&&b==null&&$t(y,u,E,M,p,g,h);((z=M.onVnodeUpdated)||T)&&be(()=>{z&&je(z,p,u,c),T&&lt(u,c,p,"updated")},g)},He=(c,u,p,g,h,x,A)=>{for(let y=0;y<u.length;y++){const w=c[y],b=u[y],T=w.el&&(w.type===re||!Dt(w,b)||w.shapeFlag&70)?m(w.el):p;N(w,b,T,null,g,h,x,A,!0)}},$t=(c,u,p,g,h,x,A)=>{if(p!==g){if(p!==J)for(const y in p)!Mn(y)&&!(y in g)&&i(c,y,p[y],null,A,u.children,h,x,De);for(const y in g){if(Mn(y))continue;const w=g[y],b=p[y];w!==b&&y!=="value"&&i(c,y,b,w,A,u.children,h,x,De)}"value"in g&&i(c,"value",p.value,g.value)}},dn=(c,u,p,g,h,x,A,y,w)=>{const b=u.el=c?c.el:s(""),T=u.anchor=c?c.anchor:s("");let{patchFlag:E,dynamicChildren:M,slotScopeIds:z}=u;z&&(y=y?y.concat(z):z),c==null?(r(b,p,g),r(T,p,g),Ae(u.children,p,T,h,x,A,y,w)):E>0&&E&64&&M&&c.dynamicChildren?(He(c.dynamicChildren,M,p,h,x,A,y),(u.key!=null||h&&u===h.subTree)&&Mo(c,u,!0)):V(c,u,p,T,h,x,A,y,w)},mn=(c,u,p,g,h,x,A,y,w)=>{u.slotScopeIds=y,c==null?u.shapeFlag&512?h.ctx.activate(u,p,g,A,w):dr(u,p,g,h,x,A,w):Na(c,u,w)},dr=(c,u,p,g,h,x,A)=>{const y=c.component=fc(c,g,h);if(yo(c)&&(y.ctx.renderer=yt),uc(y),y.asyncDep){if(h&&h.registerDep(y,de),!c.el){const w=y.subTree=q(nt);k(null,w,u,p)}return}de(y,c,u,p,h,x,A)},Na=(c,u,p)=>{const g=u.component=c.component;if(xl(c,u,p))if(g.asyncDep&&!g.asyncResolved){Z(g,u,p);return}else g.next=u,pl(g.update),g.update();else u.el=c.el,g.vnode=u},de=(c,u,p,g,h,x,A)=>{const y=()=>{if(c.isMounted){let{next:T,bu:E,u:M,parent:z,vnode:$}=c,W=T,Y;ct(c,!1),T?(T.el=$.el,Z(c,T,A)):T=$,E&&gr(E),(Y=T.props&&T.props.onVnodeBeforeUpdate)&&je(Y,z,T,$),ct(c,!0);const te=vr(c),Oe=c.subTree;c.subTree=te,N(Oe,te,m(Oe.el),hn(Oe),c,h,x),T.el=te.el,W===null&&wl(c,te.el),M&&be(M,h),(Y=T.props&&T.props.onVnodeUpdated)&&be(()=>je(Y,z,T,$),h)}else{let T;const{el:E,props:M}=u,{bm:z,m:$,parent:W}=c,Y=Wt(u);if(ct(c,!1),z&&gr(z),!Y&&(T=M&&M.onVnodeBeforeMount)&&je(T,W,u),ct(c,!0),E&&pr){const te=()=>{c.subTree=vr(c),pr(E,c.subTree,c,h,null)};Y?u.type.__asyncLoader().then(()=>!c.isUnmounted&&te()):te()}else{const te=c.subTree=vr(c);N(null,te,p,g,c,h,x),u.el=te.el}if($&&be($,h),!Y&&(T=M&&M.onVnodeMounted)){const te=u;be(()=>je(T,W,te),h)}(u.shapeFlag&256||W&&Wt(W.vnode)&&W.vnode.shapeFlag&256)&&c.a&&be(c.a,h),c.isMounted=!0,u=p=g=null}},w=c.effect=new aa(y,()=>da(b),c.scope),b=c.update=()=>w.run();b.id=c.uid,ct(c,!0),b()},Z=(c,u,p)=>{u.component=c;const g=c.vnode.props;c.vnode=u,c.next=null,Gl(c,u.props,g,p),Zl(c,u.children,p),zt(),Ka(),Lt()},V=(c,u,p,g,h,x,A,y,w=!1)=>{const b=c&&c.children,T=c?c.shapeFlag:0,E=u.children,{patchFlag:M,shapeFlag:z}=u;if(M>0){if(M&128){pn(b,E,p,g,h,x,A,y,w);return}else if(M&256){ot(b,E,p,g,h,x,A,y,w);return}}z&8?(T&16&&De(b,h,x),E!==b&&d(p,E)):T&16?z&16?pn(b,E,p,g,h,x,A,y,w):De(b,h,x,!0):(T&8&&d(p,""),z&16&&Ae(E,p,g,h,x,A,y,w))},ot=(c,u,p,g,h,x,A,y,w)=>{c=c||Et,u=u||Et;const b=c.length,T=u.length,E=Math.min(b,T);let M;for(M=0;M<E;M++){const z=u[M]=w?Qe(u[M]):ze(u[M]);N(c[M],z,p,null,h,x,A,y,w)}b>T?De(c,h,x,!0,!1,E):Ae(u,p,g,h,x,A,y,w,E)},pn=(c,u,p,g,h,x,A,y,w)=>{let b=0;const T=u.length;let E=c.length-1,M=T-1;for(;b<=E&&b<=M;){const z=c[b],$=u[b]=w?Qe(u[b]):ze(u[b]);if(Dt(z,$))N(z,$,p,null,h,x,A,y,w);else break;b++}for(;b<=E&&b<=M;){const z=c[E],$=u[M]=w?Qe(u[M]):ze(u[M]);if(Dt(z,$))N(z,$,p,null,h,x,A,y,w);else break;E--,M--}if(b>E){if(b<=M){const z=M+1,$=z<T?u[z].el:g;for(;b<=M;)N(null,u[b]=w?Qe(u[b]):ze(u[b]),p,$,h,x,A,y,w),b++}}else if(b>M)for(;b<=E;)Ne(c[b],h,x,!0),b++;else{const z=b,$=b,W=new Map;for(b=$;b<=M;b++){const xe=u[b]=w?Qe(u[b]):ze(u[b]);xe.key!=null&&W.set(xe.key,b)}let Y,te=0;const Oe=M-$+1;let xt=!1,za=0;const Ht=new Array(Oe);for(b=0;b<Oe;b++)Ht[b]=0;for(b=z;b<=E;b++){const xe=c[b];if(te>=Oe){Ne(xe,h,x,!0);continue}let Fe;if(xe.key!=null)Fe=W.get(xe.key);else for(Y=$;Y<=M;Y++)if(Ht[Y-$]===0&&Dt(xe,u[Y])){Fe=Y;break}Fe===void 0?Ne(xe,h,x,!0):(Ht[Fe-$]=b+1,Fe>=za?za=Fe:xt=!0,N(xe,u[Fe],p,null,h,x,A,y,w),te++)}const La=xt?nc(Ht):Et;for(Y=La.length-1,b=Oe-1;b>=0;b--){const xe=$+b,Fe=u[xe],Ra=xe+1<T?u[xe+1].el:g;Ht[b]===0?N(null,Fe,p,Ra,h,x,A,y,w):xt&&(Y<0||b!==La[Y]?st(Fe,p,Ra,2):Y--)}}},st=(c,u,p,g,h=null)=>{const{el:x,type:A,transition:y,children:w,shapeFlag:b}=c;if(b&6){st(c.component.subTree,u,p,g);return}if(b&128){c.suspense.move(u,p,g);return}if(b&64){A.move(c,u,p,yt);return}if(A===re){r(x,u,p);for(let E=0;E<w.length;E++)st(w[E],u,p,g);r(c.anchor,u,p);return}if(A===yr){j(c,u,p);return}if(g!==2&&b&1&&y)if(g===0)y.beforeEnter(x),r(x,u,p),be(()=>y.enter(x),h);else{const{leave:E,delayLeave:M,afterLeave:z}=y,$=()=>r(x,u,p),W=()=>{E(x,()=>{$(),z&&z()})};M?M(x,$,W):W()}else r(x,u,p)},Ne=(c,u,p,g=!1,h=!1)=>{const{type:x,props:A,ref:y,children:w,dynamicChildren:b,shapeFlag:T,patchFlag:E,dirs:M}=c;if(y!=null&&Lr(y,null,p,c,!0),T&256){u.ctx.deactivate(c);return}const z=T&1&&M,$=!Wt(c);let W;if($&&(W=A&&A.onVnodeBeforeUnmount)&&je(W,u,c),T&6)hs(c.component,p,g);else{if(T&128){c.suspense.unmount(p,g);return}z&&lt(c,null,u,"beforeUnmount"),T&64?c.type.remove(c,u,p,h,yt,g):b&&(x!==re||E>0&&E&64)?De(b,u,p,!1,!0):(x===re&&E&384||!h&&T&16)&&De(w,u,p),g&&Fa(c)}($&&(W=A&&A.onVnodeUnmounted)||z)&&be(()=>{W&&je(W,u,c),z&&lt(c,null,u,"unmounted")},p)},Fa=c=>{const{type:u,el:p,anchor:g,transition:h}=c;if(u===re){ps(p,g);return}if(u===yr){P(c);return}const x=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(c.shapeFlag&1&&h&&!h.persisted){const{leave:A,delayLeave:y}=h,w=()=>A(p,x);y?y(c.el,x,w):w()}else x()},ps=(c,u)=>{let p;for(;c!==u;)p=v(c),a(c),c=p;a(u)},hs=(c,u,p)=>{const{bum:g,scope:h,update:x,subTree:A,um:y}=c;g&&gr(g),h.stop(),x&&(x.active=!1,Ne(A,c,u,p)),y&&be(y,u),be(()=>{c.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},De=(c,u,p,g=!1,h=!1,x=0)=>{for(let A=x;A<c.length;A++)Ne(c[A],u,p,g,h)},hn=c=>c.shapeFlag&6?hn(c.component.subTree):c.shapeFlag&128?c.suspense.next():v(c.anchor||c.el),ja=(c,u,p)=>{c==null?u._vnode&&Ne(u._vnode,null,null,!0):N(u._vnode||null,c,u,null,null,null,p),Ka(),mo(),u._vnode=c},yt={p:N,um:Ne,m:st,r:Fa,mt:dr,mc:Ae,pc:V,pbc:He,n:hn,o:e};let mr,pr;return t&&([mr,pr]=t(yt)),{render:ja,hydrate:mr,createApp:Kl(ja,mr)}}function ct({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Mo(e,t,n=!1){const r=e.children,a=t.children;if(F(r)&&F(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Qe(a[i]),s.el=o.el),n||Mo(o,s)),s.type===or&&(s.el=o.el)}}function nc(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(a=n[n.length-1],e[a]<f){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<f?i=s+1:o=s;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const rc=e=>e.__isTeleport,re=Symbol.for("v-fgt"),or=Symbol.for("v-txt"),nt=Symbol.for("v-cmt"),yr=Symbol.for("v-stc"),qt=[];let Pe=null;function K(e=!1){qt.push(Pe=e?null:[])}function ac(){qt.pop(),Pe=qt[qt.length-1]||null}let tn=1;function ai(e){tn+=e}function No(e){return e.dynamicChildren=tn>0?Pe||Et:null,ac(),tn>0&&Pe&&Pe.push(e),e}function ne(e,t,n,r,a,i){return No(I(e,t,n,r,a,i,!0))}function ht(e,t,n,r,a){return No(q(e,t,n,r,a,!0))}function Bn(e){return e?e.__v_isVNode===!0:!1}function Dt(e,t){return e.type===t.type&&e.key===t.key}const sr="__vInternal",Fo=({key:e})=>e!=null?e:null,jn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ae(e)||pe(e)||L(e)?{i:he,r:e,k:t,f:!!n}:e:null);function I(e,t=null,n=null,r=0,a=null,i=e===re?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Fo(t),ref:t&&jn(t),scopeId:go,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:he};return s?(ga(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ae(n)?8:16),tn>0&&!o&&Pe&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Pe.push(l),l}const q=ic;function ic(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Ll)&&(e=nt),Bn(e)){const s=Mt(e,t,!0);return n&&ga(s,n),tn>0&&!i&&Pe&&(s.shapeFlag&6?Pe[Pe.indexOf(e)]=s:Pe.push(s)),s.patchFlag|=-2,s}if(gc(e)&&(e=e.__vccOpts),t){t=oc(t);let{class:s,style:l}=t;s&&!ae(s)&&(t.class=er(s)),Q(l)&&(so(l)&&!F(l)&&(l=oe({},l)),t.style=Zn(l))}const o=ae(e)?1:_l(e)?128:rc(e)?64:Q(e)?4:L(e)?2:0;return I(e,t,n,r,a,o,i,!0)}function oc(e){return e?so(e)||sr in e?oe({},e):e:null}function Mt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?sc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Fo(s),ref:t&&t.ref?n&&a?F(a)?a.concat(jn(t)):[a,jn(t)]:jn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==re?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Mt(e.ssContent),ssFallback:e.ssFallback&&Mt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function kt(e=" ",t=0){return q(or,null,e,t)}function ii(e="",t=!1){return t?(K(),ht(nt,null,e)):q(nt,null,e)}function ze(e){return e==null||typeof e=="boolean"?q(nt):F(e)?q(re,null,e.slice()):typeof e=="object"?Qe(e):q(or,null,String(e))}function Qe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Mt(e)}function ga(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),ga(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(sr in t)?t._ctx=he:a===3&&he&&(he.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:he},n=32):(t=String(t),r&64?(n=16,t=[kt(t)]):n=8);e.children=t,e.shapeFlag|=n}function sc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=er([t.class,r.class]));else if(a==="style")t.style=Zn([t.style,r.style]);else if(Xn(a)){const i=t[a],o=r[a];o&&i!==o&&!(F(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function je(e,t,n,r=null){Me(e,t,7,[n,r])}const lc=Co();let cc=0;function fc(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||lc,i={uid:cc++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Is(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:So(r,a),emitsOptions:ho(r,a),emit:null,emitted:null,propsDefaults:J,inheritAttrs:r.inheritAttrs,ctx:J,data:J,props:J,attrs:J,slots:J,refs:J,setupState:J,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=vl.bind(null,i),e.ce&&e.ce(i),i}let se=null,va,wt,oi="__VUE_INSTANCE_SETTERS__";(wt=Cr()[oi])||(wt=Cr()[oi]=[]),wt.push(e=>se=e),va=e=>{wt.length>1?wt.forEach(t=>t(e)):wt[0](e)};const Nt=e=>{va(e),e.scope.on()},gt=()=>{se&&se.scope.off(),va(null)};function jo(e){return e.vnode.shapeFlag&4}let nn=!1;function uc(e,t=!1){nn=t;const{props:n,children:r}=e.vnode,a=jo(e);Xl(e,n,a,t),Ql(e,r);const i=a?dc(e,t):void 0;return nn=!1,i}function dc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=lo(new Proxy(e.ctx,Hl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?pc(e):null;Nt(e),zt();const i=et(r,e,0,[e.props,a]);if(Lt(),gt(),Vi(i)){if(i.then(gt,gt),t)return i.then(o=>{si(e,o,t)}).catch(o=>{rr(o,e,0)});e.asyncDep=i}else si(e,i,t)}else zo(e,t)}function si(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Q(t)&&(e.setupState=co(t)),zo(e,n)}let li;function zo(e,t,n){const r=e.type;if(!e.render){if(!t&&li&&!r.render){const a=r.template||pa(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=oe(oe({isCustomElement:i,delimiters:s},o),l);r.render=li(a,f)}}e.render=r.render||Te}Nt(e),zt(),Dl(e),Lt(),gt()}function mc(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return ye(e,"get","$attrs"),t[n]}}))}function pc(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return mc(e)},slots:e.slots,emit:e.emit,expose:t}}function ba(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(co(lo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Kt)return Kt[n](e)},has(t,n){return n in t||n in Kt}}))}function hc(e,t=!0){return L(e)?e.displayName||e.name:e.name||t&&e.__name}function gc(e){return L(e)&&"__vccOpts"in e}const ke=(e,t)=>fl(e,t,nn);function Lo(e,t,n){const r=arguments.length;return r===2?Q(t)&&!F(t)?Bn(t)?q(e,null,[t]):q(e,t):q(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Bn(n)&&(n=[n]),q(e,t,n))}const vc=Symbol.for("v-scx"),bc=()=>Fn(vc),yc="3.3.4",xc="http://www.w3.org/2000/svg",ut=typeof document!="undefined"?document:null,ci=ut&&ut.createElement("template"),wc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?ut.createElementNS(xc,e):ut.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>ut.createTextNode(e),createComment:e=>ut.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ut.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{ci.innerHTML=r?`<svg>${e}</svg>`:e;const s=ci.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function _c(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function kc(e,t,n){const r=e.style,a=ae(n);if(n&&!a){if(t&&!ae(t))for(const i in t)n[i]==null&&Rr(r,i,"");for(const i in n)Rr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const fi=/\s*!important$/;function Rr(e,t,n){if(F(n))n.forEach(r=>Rr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Ac(e,t);fi.test(n)?e.setProperty(jt(r),n.replace(fi,""),"important"):e[r]=n}}const ui=["Webkit","Moz","ms"],xr={};function Ac(e,t){const n=xr[t];if(n)return n;let r=$e(t);if(r!=="filter"&&r in e)return xr[t]=r;r=Qn(r);for(let a=0;a<ui.length;a++){const i=ui[a]+r;if(i in e)return xr[t]=i}return t}const di="http://www.w3.org/1999/xlink";function Oc(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(di,t.slice(6,t.length)):e.setAttributeNS(di,t,n);else{const i=Ps(t);n==null||i&&!qi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Cc(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const f=s==="OPTION"?e.getAttribute("value"):e.value,d=n==null?"":n;f!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const f=typeof e[t];f==="boolean"?n=qi(n):n==null&&f==="string"?(n="",l=!0):f==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function Ec(e,t,n,r){e.addEventListener(t,n,r)}function Sc(e,t,n,r){e.removeEventListener(t,n,r)}function Pc(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Ic(t);if(r){const f=i[t]=Nc(r,a);Ec(e,s,f,l)}else o&&(Sc(e,s,o,l),i[t]=void 0)}}const mi=/(?:Once|Passive|Capture)$/;function Ic(e){let t;if(mi.test(e)){t={};let r;for(;r=e.match(mi);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):jt(e.slice(2)),t]}let wr=0;const Tc=Promise.resolve(),Mc=()=>wr||(Tc.then(()=>wr=0),wr=Date.now());function Nc(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Me(Fc(r,n.value),t,5,[r])};return n.value=e,n.attached=Mc(),n}function Fc(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const pi=/^on[a-z]/,jc=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?_c(e,r,a):t==="style"?kc(e,n,r):Xn(t)?Zr(t)||Pc(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):zc(e,t,r,a))?Cc(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Oc(e,t,r,a))};function zc(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&pi.test(t)&&L(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||pi.test(t)&&ae(n)?!1:t in e}const Lc=oe({patchProp:jc},wc);let hi;function Rc(){return hi||(hi=ec(Lc))}const $c=(...e)=>{const t=Rc().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Hc(r);if(!a)return;const i=t._component;!L(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Hc(e){return ae(e)?document.querySelector(e):e}const Dc={class:"flex justify-start"},Uc=I("div",{class:"border-t b-payton my-auto grow lg:w-1/12 max-h-1 align-baseline mx-4"},null,-1),Bc={class:"flex border b-payton grow rounded-lg lg:w-3/12 px-4 py-1 font-semibold items-center"},Yc={class:"grow"},Vc=I("div",{class:"border-t b-payton my-auto grow lg:w-9/12 max-h-1 align-baseline mx-4"},null,-1),Wc={class:"px-4 py-2"},Ut={__name:"cv-block",props:{title:String,content:String},setup(e){return(t,n)=>(K(),ne("article",null,[I("div",Dc,[Uc,I("div",Bc,[I("h1",Yc,fe(e.title),1)]),Vc]),I("div",Wc,[$l(t.$slots,"default")])]))}},Kc={class:"mb-2 ml-6 text-left rounded-xl px-4 py-1"},qc={class:"flew flex-col"},Xc={class:"flex absolute -left-3 bg-white justify-center items-center w-6 h-6 rounded-full ring-8 ring-white"},Gc={class:"flex flex-col md:flex-row md:items-center font-semibold my-0 text-lg text-gray-900"},Jc={class:"text-left"},Qc=I("div",{class:"md:border-t border-gray-200 my-auto max-h-1 grow align-baseline mx-4"},null,-1),Zc={class:"md:text-right"},ef={class:"block mb-1 text-sm font-normal t-payton"},tf={class:"flex flex-col gap-2 xl:flex-row xl:gap-8"},nf={class:"lg:basis-1/3 mb-1 text-base font-normal t-payton text-justify"},rf={class:"grow"},af={key:0,class:"text-sm font-normal t-payton"},of={class:"text-sm font-normal text-justify"},sf=["src"],gi={__name:"timeline-element",props:{present:Boolean,title:String,start:String,end:String,company:String,logo:String,description:String,educational:Boolean,responsibilities:[]},setup(e){return(t,n)=>{const r=ko("font-awesome-icon");return K(),ne("li",Kc,[I("div",qc,[I("span",Xc,[e.educational?(K(),ht(r,{key:1,class:"t-payton",icon:"fa-solid fa-graduation-cap"})):(K(),ht(r,{key:0,class:"t-payton",icon:"fa-solid fa-briefcase"}))]),I("h3",Gc,[I("span",Jc,fe(e.title),1),Qc,I("span",Zc,fe(e.company),1)]),I("time",ef,fe(e.start)+" - "+fe(e.end),1),I("div",tf,[I("p",nf,fe(e.description),1),I("div",rf,[e.educational?ii("",!0):(K(),ne("p",af,"Responsibilities:")),(K(!0),ne(re,null,Je(e.responsibilities,a=>(K(),ne("p",of," - "+fe(a),1))),256))]),e.educational?ii("",!0):(K(),ne("img",{key:0,class:"shrink m-auto rounded-md right-0 object-right object-contain h-20 w-20",src:e.logo,alt:""},null,8,sf))])])])}}},lf={class:""},cf={class:"flex items-center justify-between"},ff={class:"text-left basis-1/3"},uf={class:"text-xs font-bold inline-block px-1 rounded-md t-payton"},df={class:"text-center basis-1/3"},mf={class:"text-xs font-bold inline-block t-payton"},pf={class:"text-right basis-1/3"},hf={class:"text-xs font-bold inline-block t-payton"},gf={class:"overflow-hidden h-2 text-xs flex rounded border-2"},vf={__name:"progress-bar",props:{metric:String,level:Number,note:String},setup(e){return(t,n)=>(K(),ne("div",lf,[I("div",cf,[I("div",ff,[I("span",uf,fe(e.metric),1)]),I("div",df,[I("span",mf,fe(e.level)+"% ",1)]),I("div",pf,[I("span",hf,fe(e.note),1)])]),I("div",gf,[I("div",{style:Zn(`width: ${e.level}%`),class:"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center payton"},null,4)])]))}},bf=["Experienced gamer: MMORPGs, MOBAs, RPGs, FPS, mobile arcades. I've got them all! Favorites? Dragon Age series, Divinity Original Sin 2, Titan Quest.","I love spicy food and sour drinks! Don't mind some barbeque with hot sauces up to 2M SHU, thai food along with some lemon fresh)","Youtube gourmet: watch actors & movie-making things, astrophysics, science, mythology & history, memes","Listen-to-maniac, literally spend hours listening to various metal genres (power, sympho, core, heavy, folk, japanese etc.), rock, composers like Antti Martikainen, Christian Friedrich Johannes B\xFCttner, Trevor Moris.","Love sports: football, volleyball, tennis, snooker, some daily activity routines. Can also easily dare you in table-football!",'Fan of MCU movies & series, fantasy books, great fan of manga and anime (yet not a weeb). And "The Boys" - that one is dope as well.'],_n={email:"yuraivanskyi@gmail.com",skype:"y.ivanskyi"},yf=[{link:"https://twitter.com/i1skyi",icon:"twitter"},{link:"https://www.facebook.com/yurii.ivanskyi",icon:"facebook"},{link:"https://www.instagram.com/yuriyivanskyi",icon:"instagram"},{link:"https://www.linkedin.com/in/yuraivanskyi",icon:"linkedin"},{link:"https://github.com/YuraIvanskyi",icon:"github"},{link:"https://www.twitch.tv/i1skyi",icon:"twitch"}],xf=[{code:"devicon-python-plain-wordmark",tooltip:"Python, 3y. exp."},{code:"devicon-javascript-plain",tooltip:"JavaScript, 2y. exp."},{code:"devicon-pytest-plain-wordmark",tooltip:"Pytest"},{code:"devicon-selenium-original",tooltip:"Selenium"},{code:"devicon-html5-plain-wordmark",tooltip:"HTML5"},{code:"devicon-css3-plain-wordmark",tooltip:"CSS3"},{code:"devicon-vuejs-plain-wordmark",tooltip:"Vue.js 2/3"},{code:"devicon-vuetify-line",tooltip:"Vuetify"},{code:"devicon-tailwindcss-plain",tooltip:"Tailwind CSS"},{code:"devicon-opencv-plain-wordmark",tooltip:"OpenCV (python)"},{code:"devicon-firebase-plain-wordmark",tooltip:"Firebase"},{code:"devicon-amazonwebservices-original",tooltip:"AWS Features"},{code:"devicon-microsoftsqlserver-plain",tooltip:"MSSQL Server"},{code:"devicon-docker-plain-wordmark",tooltip:"Docker"},{code:"devicon-kubernetes-plain-wordmark",tooltip:"Kubernetes"},{code:"devicon-git-plain-wordmark",tooltip:"Git"},{code:"devicon-gitlab-plain-wordmark",tooltip:"Gitlab"},{code:"devicon-jenkins-line",tooltip:"Jenkins"},{code:"devicon-jira-plain",tooltip:"Jira"},{code:"devicon-confluence-original-wordmark",tooltip:"Confluence"}],wf=["automation testing using Python, less JavaScript","automation infrastructure setup, CI/CD","game & software quality assuarance: web, mobile","visual automation testing with opencv","documentation, test plans, test strategies, reporting"],_f=["a bit of front-end development (mostly on Vue, Vite, Vuetify)","a bit of tinkering here and there (plugins, addons, etc.)","operate in agile project environments","handle, organize and lead small team",'nonchalantly talk on meetings & make the "nice guy" impression'],kf=[{lang:"Ukrainian",level:100,note:"Native"},{lang:"English",level:90,note:"Fluent"},{lang:"Japanese",level:15,note:"N5"},{lang:"German",level:10,note:"Beginner"},{lang:"Polish",level:15,note:"Beginner"},{lang:"Korean",level:5,note:"Elementary"},{lang:"Russian",level:70,note:"Disgusted"}],Af=["assets\\me6.jpg","assets\\me2.jpg","assets\\m4.jpg","assets\\me1.png","assets\\m3.jpg"],Of=[{title:"Senior Automation QA",trivia:"Career #5: Revamp",company:"VisiQuate",logo:"https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1473871040/yqckxgmsf3rvyfzjm0ja.jpg",start:"08/2022",end:"Now",desc:"My role is being a part of an AQA team that strives to optimise QA procedures.",responsibilities:["contributing to the general test codebase","upgrading and supporting automation framework & infrastructure"],current:!0},{title:"Volunteer/Simple man",trivia:"Career #4.5: Fair job",logo:"https://media.istockphoto.com/id/1381185874/vector/coat-arms-ukraine-trident-yellow-blue-flag-coat-arms-symbol-ukraine.jpg?s=612x612&w=0&k=20&c=cjCaxczyk80t0ewtwnqYr1LN0Y6jZ1S9wfzDUq3KRWk=",company:"Ukraine/IT army of Ukraine",start:"02/2022",end:"Victory",desc:"Standing in IT frontline of war on my scale.",responsibilities:["helping with ddos attacks (1000 needles) to take down russian civil & military web resourses","showing & sharing the truth about crimes of Russia to the world"],current:!0},{title:"Server Test Engineer",trivia:"Career #4: Level-up",company:"Amazon Games",logo:"https://images.sftcdn.net/images/t_app-icon-m/p/056c9744-14bb-4b4d-a70a-29bdc7ec4728/1618455512/amazon-games-app-Amazon%20Games%20App-icon.png",start:"03/2022",end:"04/2022",desc:"Cancelled due to russian invasion and inability to relocate to Germany.",responsibilities:["leading any server test related tasks in Europe","investigating bugs on live, scale test problems, or other server/service bugs that need more info/logs/metrics"],current:!1},{title:"QA R&D Lead",trivia:"Career #3: Apex",company:"Gameloft",logo:"https://logosandtypes.com/wp-content/uploads/2020/07/gameloft.svg",start:"03/2020",end:"02/2022",desc:"My role included being both team and tech lead in QA R&D team, creating and delivering solutions for QA process optimisation/automation by means of scripting and/or development.",responsibilities:["conduct QA R&D team building & growth proccesses","provide required technical expertise for the team & other adjacent teams onsite and overseas","organize and prioritize assigned tasks","being the guy who googles the issue first","monitoring and contributing to traditional automation approaches within company","prototyping and development of custom game automation tools, ideas and initiatives"],current:!1},{title:"QA Automation",company:"Gameloft",trivia:"Career #2: Upshift",logo:"https://logosandtypes.com/wp-content/uploads/2020/07/gameloft.svg",start:"01/2018",end:"03/2020",desc:"Taking part in automation and testing of various games of multiple genres & complexities.",responsibilities:["creating E2E scripts for testing purposes","using internal tools & services to perform automation testing for GUI and server-side cases","contributing to traditional automation approaches within company","participating in various game automation initiatives"],current:!1},{title:"QA Tester",trivia:"Career #1: Init",logo:"https://logosandtypes.com/wp-content/uploads/2020/07/gameloft.svg",company:"Gameloft",start:"03/2017",end:"01/2018",desc:"My main activity was to test the game, find and describe the bugs on assigned tasks.",responsibilities:["identify and isolate bugs on assigned tasks","describe found bugs clearly and concisely","organize and prioritize assigned tasks","provide clear and correct task results","produce valid test cases based on documentation","create own test cases based on gaming experience and creative point of view"],current:!1}],Cf=[{title:"PM Excellence Course",desc:"Project management",start:"2020",end:"2021",company:"Lviv IT PM School"},{title:"Master's Degree",desc:"Software Engineering",start:"2018",end:"2020",company:"Lviv Polytechnic National University"},{title:"Bachelor's Degree",desc:"Software Engineering",start:"2014",end:"2018",company:"Lviv Polytechnic National University"},{title:"Student",desc:"Foreign Languages",start:"2003",end:"2014",company:"Horodok Gymnasium, Horodok"}];const Ef={class:"container m-auto py-4 lg:py-8 b-payton"},Sf={class:"flex flex-col lg:flex-row gap-4 justify-around items-center"},Pf={class:"border border-gray-200 rounded-2xl p-1"},If=["src"],Tf=I("span",{class:"font-light tracking-widest drop-shadow-md my-auto text-6xl text-gray-900"}," Yurii Ivanskyi ",-1),Mf={class:"flex flex-wrap gap-x-8 lg:flex-col mx-4 items-start"},Nf=["href"],Ff=["href"],jf=["href"],zf={class:"flex flex-col text-justify"},Lf={class:"flex flex-col lg:flex-row flex-wrap justify-center gap-4"},Rf={class:"flex flex-col flex-wrap items-center"},$f={class:"flex flex-col"},Hf=I("h1",null,"Primary:",-1),Df={class:"text-justify"},Uf=I("div",{class:"border-t visible lg:hidden border-gray-200 my-auto max-h-1 grow align-baseline mx-4"},null,-1),Bf={class:"flex flex-col flex-wrap items-center"},Yf={class:"flex flex-col"},Vf=I("h1",null,"Secondary:",-1),Wf={class:"text-justify"},Kf=I("div",{class:"border-t visible lg:hidden border-gray-200 my-auto max-h-1 grow align-baseline mx-4"},null,-1),qf={class:"flex flex-col lg:basis-1/3 2xl:basis-1/6 items-center justify-center gap-2"},Xf={class:"flex flex-row flex-wrap justify-center"},Gf=I("div",{class:"border-t visible lg:hidden border-gray-200 my-auto max-h-1 grow align-baseline mx-4"},null,-1),Jf={class:"flex flex-col md:basis-1/2 lg:basis-1/3 2xl:basis-1/6 justify-left grow lg:grow-0 px-4"},Qf={class:"flex flex-col gap-4 justify-left px-2 md:px-4"},Zf={class:"relative border-l border-gray-200"},eu={class:"flex flex-col"},tu={class:"flex flex-col gap-4 justify-left px-2 md:px-4"},nu={class:"relative border-l border-gray-200"},ru={__name:"App",setup(e){return nr({hoveredIcon:""}),(t,n)=>{const r=ko("font-awesome-icon");return K(),ne("div",Ef,[q(Ut,{title:"Contacts & Social"},{default:_t(()=>[I("div",Sf,[I("div",Pf,[I("img",{class:"shrink drop-shadow-md rounded-xl min-h-60 min-w-60 h-60 w-60",src:ge(Af)[0],alt:""},null,8,If)]),Tf,I("div",Mf,[I("a",{href:`mailto:${ge(_n).email}`},[q(r,{icon:"fa-regular fa-envelope",class:"t-payton align-middle"}),kt(" "+fe(ge(_n).email),1)],8,Nf),I("a",{href:`skype:username?chat:${ge(_n).skype}`},[q(r,{icon:"fa-brands fa-skype",class:"t-payton align-middle"}),kt(" "+fe(ge(_n).skype),1)],8,Ff),(K(!0),ne(re,null,Je(ge(yf),a=>(K(),ne("a",{href:a.link},[q(r,{icon:`fa-brands fa-${a.icon}`,class:"t-payton align-middle"},null,8,["icon"]),kt(" "+fe(a.link.split("/").at(-1)),1)],8,jf))),256))])])]),_:1}),q(Ut,{title:"Trivia"},{default:_t(()=>[I("div",zf,fe(ge(bf).join(" \u2724 ")),1)]),_:1}),q(Ut,{title:"Skills"},{default:_t(()=>[I("div",Lf,[I("div",Rf,[I("div",$f,[Hf,(K(!0),ne(re,null,Je(ge(wf),a=>(K(),ne("span",Df," \u2724 "+fe(a),1))),256))])]),Uf,I("div",Bf,[I("div",Yf,[Vf,(K(!0),ne(re,null,Je(ge(_f),a=>(K(),ne("span",Wf," \u2724 "+fe(a),1))),256))])]),Kf,I("div",qf,[I("h1",null,[q(r,{icon:"fa-solid fa-bug",class:"t-payton align-middle mr-2"}),kt(" The Big Tech "),q(r,{icon:"fa-solid fa-code-branch",class:"t-payton align-middle ml-2"})]),I("div",Xf,[(K(!0),ne(re,null,Je(ge(xf),(a,i)=>(K(),ne("div",{key:i},[I("i",{class:er(`${a.code} t-payton text-4xl md:text-5xl align-middle rounded-full`)},null,2)]))),128))])]),Gf,I("div",Jf,[I("h1",null,[q(r,{icon:"fa-solid fa-globe",class:"t-payton align-middle mr-2"}),kt(" Languages "),q(r,{icon:"fa-solid fa-language",class:"t-payton align-middle ml-2"})]),(K(!0),ne(re,null,Je(ge(kf),a=>(K(),ht(vf,{metric:a.lang,level:a.level,note:a.note},null,8,["metric","level","note"]))),256))])])]),_:1}),q(Ut,{title:"Experience"},{default:_t(()=>[I("div",Qf,[I("ol",Zf,[(K(!0),ne(re,null,Je(ge(Of),a=>(K(),ht(gi,{title:a.title,company:a.company,educational:!1,responsibilities:a.responsibilities,description:a.desc,start:a.start,logo:a.logo,end:a.end},null,8,["title","company","responsibilities","description","start","logo","end"]))),256))])])]),_:1}),q(Ut,{title:"Education"},{default:_t(()=>[I("div",eu,[I("div",tu,[I("ol",nu,[(K(!0),ne(re,null,Je(ge(Cf),a=>(K(),ht(gi,{title:a.title,company:a.company,educational:!0,description:a.desc,start:a.start,end:a.end},null,8,["title","company","description","start","end"]))),256))])])])]),_:1})])}}};function vi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?vi(Object(n),!0).forEach(function(r){ie(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):vi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Yn(e){return Yn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Yn(e)}function au(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function bi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function iu(e,t,n){return t&&bi(e.prototype,t),n&&bi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ya(e,t){return su(e)||cu(e,t)||Ro(e,t)||uu()}function cn(e){return ou(e)||lu(e)||Ro(e)||fu()}function ou(e){if(Array.isArray(e))return $r(e)}function su(e){if(Array.isArray(e))return e}function lu(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function cu(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Ro(e,t){if(!!e){if(typeof e=="string")return $r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $r(e,t)}}function $r(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function fu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function uu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var yi=function(){},xa={},$o={},Ho=null,Do={mark:yi,measure:yi};try{typeof window!="undefined"&&(xa=window),typeof document!="undefined"&&($o=document),typeof MutationObserver!="undefined"&&(Ho=MutationObserver),typeof performance!="undefined"&&(Do=performance)}catch{}var du=xa.navigator||{},xi=du.userAgent,wi=xi===void 0?"":xi,rt=xa,G=$o,_i=Ho,kn=Do;rt.document;var qe=!!G.documentElement&&!!G.head&&typeof G.addEventListener=="function"&&typeof G.createElement=="function",Uo=~wi.indexOf("MSIE")||~wi.indexOf("Trident/"),An,On,Cn,En,Sn,Ye="___FONT_AWESOME___",Hr=16,Bo="fa",Yo="svg-inline--fa",vt="data-fa-i2svg",Dr="data-fa-pseudo-element",mu="data-fa-pseudo-element-pending",wa="data-prefix",_a="data-icon",ki="fontawesome-i2svg",pu="async",hu=["HTML","HEAD","STYLE","SCRIPT"],Vo=function(){try{return!0}catch{return!1}}(),X="classic",ee="sharp",ka=[X,ee];function fn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[X]}})}var rn=fn((An={},ie(An,X,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ie(An,ee,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),An)),an=fn((On={},ie(On,X,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ie(On,ee,{solid:"fass",regular:"fasr",light:"fasl"}),On)),on=fn((Cn={},ie(Cn,X,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ie(Cn,ee,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Cn)),gu=fn((En={},ie(En,X,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ie(En,ee,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),En)),vu=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Wo="fa-layers-text",bu=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,yu=fn((Sn={},ie(Sn,X,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ie(Sn,ee,{900:"fass",400:"fasr",300:"fasl"}),Sn)),Ko=[1,2,3,4,5,6,7,8,9,10],xu=Ko.concat([11,12,13,14,15,16,17,18,19,20]),wu=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],dt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},sn=new Set;Object.keys(an[X]).map(sn.add.bind(sn));Object.keys(an[ee]).map(sn.add.bind(sn));var _u=[].concat(ka,cn(sn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",dt.GROUP,dt.SWAP_OPACITY,dt.PRIMARY,dt.SECONDARY]).concat(Ko.map(function(e){return"".concat(e,"x")})).concat(xu.map(function(e){return"w-".concat(e)})),Xt=rt.FontAwesomeConfig||{};function ku(e){var t=G.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Au(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(G&&typeof G.querySelector=="function"){var Ou=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ou.forEach(function(e){var t=ya(e,2),n=t[0],r=t[1],a=Au(ku(n));a!=null&&(Xt[r]=a)})}var qo={styleDefault:"solid",familyDefault:"classic",cssPrefix:Bo,replacementClass:Yo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Xt.familyPrefix&&(Xt.cssPrefix=Xt.familyPrefix);var Ft=C(C({},qo),Xt);Ft.autoReplaceSvg||(Ft.observeMutations=!1);var S={};Object.keys(qo).forEach(function(e){Object.defineProperty(S,e,{enumerable:!0,set:function(n){Ft[e]=n,Gt.forEach(function(r){return r(S)})},get:function(){return Ft[e]}})});Object.defineProperty(S,"familyPrefix",{enumerable:!0,set:function(t){Ft.cssPrefix=t,Gt.forEach(function(n){return n(S)})},get:function(){return Ft.cssPrefix}});rt.FontAwesomeConfig=S;var Gt=[];function Cu(e){return Gt.push(e),function(){Gt.splice(Gt.indexOf(e),1)}}var Ge=Hr,Re={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Eu(e){if(!(!e||!qe)){var t=G.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=G.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return G.head.insertBefore(t,r),e}}var Su="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ln(){for(var e=12,t="";e-- >0;)t+=Su[Math.random()*62|0];return t}function Rt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Aa(e){return e.classList?Rt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Xo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Pu(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Xo(e[n]),'" ')},"").trim()}function lr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Oa(e){return e.size!==Re.size||e.x!==Re.x||e.y!==Re.y||e.rotate!==Re.rotate||e.flipX||e.flipY}function Iu(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function Tu(e){var t=e.transform,n=e.width,r=n===void 0?Hr:n,a=e.height,i=a===void 0?Hr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Uo?l+="translate(".concat(t.x/Ge-r/2,"em, ").concat(t.y/Ge-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ge,"em), calc(-50% + ").concat(t.y/Ge,"em)) "):l+="translate(".concat(t.x/Ge,"em, ").concat(t.y/Ge,"em) "),l+="scale(".concat(t.size/Ge*(t.flipX?-1:1),", ").concat(t.size/Ge*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Mu=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Go(){var e=Bo,t=Yo,n=S.cssPrefix,r=S.replacementClass,a=Mu;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Ai=!1;function _r(){S.autoAddCss&&!Ai&&(Eu(Go()),Ai=!0)}var Nu={mixout:function(){return{dom:{css:Go,insertCss:_r}}},hooks:function(){return{beforeDOMElementCreation:function(){_r()},beforeI2svg:function(){_r()}}}},Ve=rt||{};Ve[Ye]||(Ve[Ye]={});Ve[Ye].styles||(Ve[Ye].styles={});Ve[Ye].hooks||(Ve[Ye].hooks={});Ve[Ye].shims||(Ve[Ye].shims=[]);var Ie=Ve[Ye],Jo=[],Fu=function e(){G.removeEventListener("DOMContentLoaded",e),Vn=1,Jo.map(function(t){return t()})},Vn=!1;qe&&(Vn=(G.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(G.readyState),Vn||G.addEventListener("DOMContentLoaded",Fu));function ju(e){!qe||(Vn?setTimeout(e,0):Jo.push(e))}function un(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Xo(e):"<".concat(t," ").concat(Pu(r),">").concat(i.map(un).join(""),"</").concat(t,">")}function Oi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var zu=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},kr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?zu(n,a):n,l,f,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)f=i[l],d=s(d,t[f],f,t);return d};function Lu(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Ur(e){var t=Lu(e);return t.length===1?t[0].toString(16):null}function Ru(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Ci(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Br(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Ci(t);typeof Ie.hooks.addPack=="function"&&!a?Ie.hooks.addPack(e,Ci(t)):Ie.styles[e]=C(C({},Ie.styles[e]||{}),i),e==="fas"&&Br("fa",t)}var Pn,In,Tn,Ot=Ie.styles,$u=Ie.shims,Hu=(Pn={},ie(Pn,X,Object.values(on[X])),ie(Pn,ee,Object.values(on[ee])),Pn),Ca=null,Qo={},Zo={},es={},ts={},ns={},Du=(In={},ie(In,X,Object.keys(rn[X])),ie(In,ee,Object.keys(rn[ee])),In);function Uu(e){return~_u.indexOf(e)}function Bu(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Uu(a)?a:null}var rs=function(){var t=function(i){return kr(Ot,function(o,s,l){return o[l]=kr(s,i,{}),o},{})};Qo=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Zo=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),ns=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Ot||S.autoFetchSvg,r=kr($u,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});es=r.names,ts=r.unicodes,Ca=cr(S.styleDefault,{family:S.familyDefault})};Cu(function(e){Ca=cr(e.styleDefault,{family:S.familyDefault})});rs();function Ea(e,t){return(Qo[e]||{})[t]}function Yu(e,t){return(Zo[e]||{})[t]}function mt(e,t){return(ns[e]||{})[t]}function as(e){return es[e]||{prefix:null,iconName:null}}function Vu(e){var t=ts[e],n=Ea("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function at(){return Ca}var Sa=function(){return{prefix:null,iconName:null,rest:[]}};function cr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?X:n,a=rn[r][e],i=an[r][e]||an[r][a],o=e in Ie.styles?e:null;return i||o||null}var Ei=(Tn={},ie(Tn,X,Object.keys(on[X])),ie(Tn,ee,Object.keys(on[ee])),Tn);function fr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ie(t,X,"".concat(S.cssPrefix,"-").concat(X)),ie(t,ee,"".concat(S.cssPrefix,"-").concat(ee)),t),o=null,s=X;(e.includes(i[X])||e.some(function(f){return Ei[X].includes(f)}))&&(s=X),(e.includes(i[ee])||e.some(function(f){return Ei[ee].includes(f)}))&&(s=ee);var l=e.reduce(function(f,d){var m=Bu(S.cssPrefix,d);if(Ot[d]?(d=Hu[s].includes(d)?gu[s][d]:d,o=d,f.prefix=d):Du[s].indexOf(d)>-1?(o=d,f.prefix=cr(d,{family:s})):m?f.iconName=m:d!==S.replacementClass&&d!==i[X]&&d!==i[ee]&&f.rest.push(d),!a&&f.prefix&&f.iconName){var v=o==="fa"?as(f.iconName):{},_=mt(f.prefix,f.iconName);v.prefix&&(o=null),f.iconName=v.iconName||_||f.iconName,f.prefix=v.prefix||f.prefix,f.prefix==="far"&&!Ot.far&&Ot.fas&&!S.autoFetchSvg&&(f.prefix="fas")}return f},Sa());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ee&&(Ot.fass||S.autoFetchSvg)&&(l.prefix="fass",l.iconName=mt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=at()||"fas"),l}var Wu=function(){function e(){au(this,e),this.definitions={}}return iu(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=C(C({},n.definitions[s]||{}),o[s]),Br(s,o[s]);var l=on[X][s];l&&Br(l,o[s]),rs()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,d=f[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=f)}),n[s][l]=f}),n}}]),e}(),Si=[],Ct={},Tt={},Ku=Object.keys(Tt);function qu(e,t){var n=t.mixoutsTo;return Si=e,Ct={},Object.keys(Tt).forEach(function(r){Ku.indexOf(r)===-1&&delete Tt[r]}),Si.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Yn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Ct[o]||(Ct[o]=[]),Ct[o].push(i[o])})}r.provides&&r.provides(Tt)}),n}function Yr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Ct[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function bt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Ct[e]||[];a.forEach(function(i){i.apply(null,n)})}function We(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Tt[e]?Tt[e].apply(null,t):void 0}function Vr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||at();if(!!t)return t=mt(n,t)||t,Oi(is.definitions,n,t)||Oi(Ie.styles,n,t)}var is=new Wu,Xu=function(){S.autoReplaceSvg=!1,S.observeMutations=!1,bt("noAuto")},Gu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return qe?(bt("beforeI2svg",t),We("pseudoElements2svg",t),We("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;S.autoReplaceSvg===!1&&(S.autoReplaceSvg=!0),S.observeMutations=!0,ju(function(){Qu({autoReplaceSvgRoot:n}),bt("watch",t)})}},Ju={icon:function(t){if(t===null)return null;if(Yn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:mt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=cr(t[0]);return{prefix:r,iconName:mt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(S.cssPrefix,"-"))>-1||t.match(vu))){var a=fr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||at(),iconName:mt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=at();return{prefix:i,iconName:mt(i,t)||t}}}},we={noAuto:Xu,config:S,dom:Gu,parse:Ju,library:is,findIconDefinition:Vr,toHtml:un},Qu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?G:n;(Object.keys(Ie.styles).length>0||S.autoFetchSvg)&&qe&&S.autoReplaceSvg&&we.dom.i2svg({node:r})};function ur(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return un(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!qe){var r=G.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Zu(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Oa(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=lr(C(C({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function ed(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(S.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:C(C({},a),{},{id:o}),children:r}]}]}function Pa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,d=e.titleId,m=e.extra,v=e.watchable,_=v===void 0?!1:v,R=r.found?r:n,N=R.width,H=R.height,k=a==="fak",O=[S.replacementClass,i?"".concat(S.cssPrefix,"-").concat(i):""].filter(function(_e){return m.classes.indexOf(_e)===-1}).filter(function(_e){return _e!==""||!!_e}).concat(m.classes).join(" "),j={children:[],attributes:C(C({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(H)})},P=k&&!~m.classes.indexOf("fa-fw")?{width:"".concat(N/H*16*.0625,"em")}:{};_&&(j.attributes[vt]=""),l&&(j.children.push({tag:"title",attributes:{id:j.attributes["aria-labelledby"]||"title-".concat(d||ln())},children:[l]}),delete j.attributes.title);var B=C(C({},j),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:C(C({},P),m.styles)}),le=r.found&&n.found?We("generateAbstractMask",B)||{children:[],attributes:{}}:We("generateAbstractIcon",B)||{children:[],attributes:{}},ce=le.children,Ae=le.attributes;return B.children=ce,B.attributes=Ae,s?ed(B):Zu(B)}function Pi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=C(C(C({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[vt]="");var d=C({},o.styles);Oa(a)&&(d.transform=Tu({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=lr(d);m.length>0&&(f.style=m);var v=[];return v.push({tag:"span",attributes:f,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function td(e){var t=e.content,n=e.title,r=e.extra,a=C(C(C({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=lr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ar=Ie.styles;function Wr(e){var t=e[0],n=e[1],r=e.slice(4),a=ya(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(S.cssPrefix,"-").concat(dt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(dt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(dt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var nd={found:!1,width:512,height:512};function rd(e,t){!Vo&&!S.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Kr(e,t){var n=t;return t==="fa"&&S.styleDefault!==null&&(t=at()),new Promise(function(r,a){if(We("missingIconAbstract"),n==="fa"){var i=as(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Ar[t]&&Ar[t][e]){var o=Ar[t][e];return r(Wr(o))}rd(e,t),r(C(C({},nd),{},{icon:S.showMissingIcons&&e?We("missingIconAbstract")||{}:{}}))})}var Ii=function(){},qr=S.measurePerformance&&kn&&kn.mark&&kn.measure?kn:{mark:Ii,measure:Ii},Vt='FA "6.4.0"',ad=function(t){return qr.mark("".concat(Vt," ").concat(t," begins")),function(){return os(t)}},os=function(t){qr.mark("".concat(Vt," ").concat(t," ends")),qr.measure("".concat(Vt," ").concat(t),"".concat(Vt," ").concat(t," begins"),"".concat(Vt," ").concat(t," ends"))},Ia={begin:ad,end:os},zn=function(){};function Ti(e){var t=e.getAttribute?e.getAttribute(vt):null;return typeof t=="string"}function id(e){var t=e.getAttribute?e.getAttribute(wa):null,n=e.getAttribute?e.getAttribute(_a):null;return t&&n}function od(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(S.replacementClass)}function sd(){if(S.autoReplaceSvg===!0)return Ln.replace;var e=Ln[S.autoReplaceSvg];return e||Ln.replace}function ld(e){return G.createElementNS("http://www.w3.org/2000/svg",e)}function cd(e){return G.createElement(e)}function ss(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?ld:cd:n;if(typeof e=="string")return G.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(ss(o,{ceFn:r}))}),a}function fd(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Ln={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(ss(a),n)}),n.getAttribute(vt)===null&&S.keepOriginalSource){var r=G.createComment(fd(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Aa(n).indexOf(S.replacementClass))return Ln.replace(t);var a=new RegExp("".concat(S.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===S.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return un(s)}).join(`
`);n.setAttribute(vt,""),n.innerHTML=o}};function Mi(e){e()}function ls(e,t){var n=typeof t=="function"?t:zn;if(e.length===0)n();else{var r=Mi;S.mutateApproach===pu&&(r=rt.requestAnimationFrame||Mi),r(function(){var a=sd(),i=Ia.begin("mutate");e.map(a),i(),n()})}}var Ta=!1;function cs(){Ta=!0}function Xr(){Ta=!1}var Wn=null;function Ni(e){if(!!_i&&!!S.observeMutations){var t=e.treeCallback,n=t===void 0?zn:t,r=e.nodeCallback,a=r===void 0?zn:r,i=e.pseudoElementsCallback,o=i===void 0?zn:i,s=e.observeMutationsRoot,l=s===void 0?G:s;Wn=new _i(function(f){if(!Ta){var d=at();Rt(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Ti(m.addedNodes[0])&&(S.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&S.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Ti(m.target)&&~wu.indexOf(m.attributeName))if(m.attributeName==="class"&&id(m.target)){var v=fr(Aa(m.target)),_=v.prefix,R=v.iconName;m.target.setAttribute(wa,_||d),R&&m.target.setAttribute(_a,R)}else od(m.target)&&a(m.target)})}}),qe&&Wn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ud(){!Wn||Wn.disconnect()}function dd(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function md(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=fr(Aa(e));return a.prefix||(a.prefix=at()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Yu(a.prefix,e.innerText)||Ea(a.prefix,Ur(e.innerText))),!a.iconName&&S.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function pd(e){var t=Rt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return S.autoA11y&&(n?t["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(r||ln()):(t["aria-hidden"]="true",t.focusable="false")),t}function hd(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Re,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Fi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=md(e),r=n.iconName,a=n.prefix,i=n.rest,o=pd(e),s=Yr("parseNodeAttributes",{},e),l=t.styleParser?dd(e):[];return C({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Re,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var gd=Ie.styles;function fs(e){var t=S.autoReplaceSvg==="nest"?Fi(e,{styleParser:!1}):Fi(e);return~t.extra.classes.indexOf(Wo)?We("generateLayersText",e,t):We("generateSvgReplacementMutation",e,t)}var it=new Set;ka.map(function(e){it.add("fa-".concat(e))});Object.keys(rn[X]).map(it.add.bind(it));Object.keys(rn[ee]).map(it.add.bind(it));it=cn(it);function ji(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!qe)return Promise.resolve();var n=G.documentElement.classList,r=function(m){return n.add("".concat(ki,"-").concat(m))},a=function(m){return n.remove("".concat(ki,"-").concat(m))},i=S.autoFetchSvg?it:ka.map(function(d){return"fa-".concat(d)}).concat(Object.keys(gd));i.includes("fa")||i.push("fa");var o=[".".concat(Wo,":not([").concat(vt,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(vt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Rt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Ia.begin("onTree"),f=s.reduce(function(d,m){try{var v=fs(m);v&&d.push(v)}catch(_){Vo||_.name==="MissingIcon"&&console.error(_)}return d},[]);return new Promise(function(d,m){Promise.all(f).then(function(v){ls(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),m(v)})})}function vd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;fs(e).then(function(n){n&&ls([n],t)})}function bd(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Vr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Vr(a||{})),e(r,C(C({},n),{},{mask:a}))}}var yd=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Re:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,d=f===void 0?null:f,m=n.title,v=m===void 0?null:m,_=n.titleId,R=_===void 0?null:_,N=n.classes,H=N===void 0?[]:N,k=n.attributes,O=k===void 0?{}:k,j=n.styles,P=j===void 0?{}:j;if(!!t){var B=t.prefix,le=t.iconName,ce=t.icon;return ur(C({type:"icon"},t),function(){return bt("beforeDOMElementCreation",{iconDefinition:t,params:n}),S.autoA11y&&(v?O["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(R||ln()):(O["aria-hidden"]="true",O.focusable="false")),Pa({icons:{main:Wr(ce),mask:l?Wr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:B,iconName:le,transform:C(C({},Re),a),symbol:o,title:v,maskId:d,titleId:R,extra:{attributes:O,styles:P,classes:H}})})}},xd={mixout:function(){return{icon:bd(yd)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ji,n.nodeCallback=vd,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?G:r,i=n.callback,o=i===void 0?function(){}:i;return ji(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(_,R){Promise.all([Kr(a,s),d.iconName?Kr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var H=ya(N,2),k=H[0],O=H[1];_([n,Pa({icons:{main:k,mask:O},prefix:s,iconName:a,transform:l,symbol:f,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(R)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=lr(s);l.length>0&&(a.style=l);var f;return Oa(o)&&(f=We("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},wd={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return ur({type:"layer"},function(){bt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(S.cssPrefix,"-layers")].concat(cn(i)).join(" ")},children:o}]})}}}},_d={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return ur({type:"counter",content:n},function(){return bt("beforeDOMElementCreation",{content:n,params:r}),td({content:n.toString(),title:i,extra:{attributes:f,styles:m,classes:["".concat(S.cssPrefix,"-layers-counter")].concat(cn(s))}})})}}}},kd={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Re:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,v=r.styles,_=v===void 0?{}:v;return ur({type:"text",content:n},function(){return bt("beforeDOMElementCreation",{content:n,params:r}),Pi({content:n,transform:C(C({},Re),i),title:s,extra:{attributes:m,styles:_,classes:["".concat(S.cssPrefix,"-layers-text")].concat(cn(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Uo){var f=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/f,l=d.height/f}return S.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Pi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Ad=new RegExp('"',"ug"),zi=[1105920,1112319];function Od(e){var t=e.replace(Ad,""),n=Ru(t,0),r=n>=zi[0]&&n<=zi[1],a=t.length===2?t[0]===t[1]:!1;return{value:Ur(a?t[0]:t),isSecondary:r||a}}function Li(e,t){var n="".concat(mu).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Rt(e.children),o=i.filter(function(ce){return ce.getAttribute(Dr)===t})[0],s=rt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(bu),f=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?ee:X,_=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?an[v][l[2].toLowerCase()]:yu[v][f],R=Od(m),N=R.value,H=R.isSecondary,k=l[0].startsWith("FontAwesome"),O=Ea(_,N),j=O;if(k){var P=Vu(N);P.iconName&&P.prefix&&(O=P.iconName,_=P.prefix)}if(O&&!H&&(!o||o.getAttribute(wa)!==_||o.getAttribute(_a)!==j)){e.setAttribute(n,j),o&&e.removeChild(o);var B=hd(),le=B.extra;le.attributes[Dr]=t,Kr(O,_).then(function(ce){var Ae=Pa(C(C({},B),{},{icons:{main:ce,mask:Sa()},prefix:_,iconName:j,extra:le,watchable:!0})),_e=G.createElement("svg");t==="::before"?e.insertBefore(_e,e.firstChild):e.appendChild(_e),_e.outerHTML=Ae.map(function(He){return un(He)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Cd(e){return Promise.all([Li(e,"::before"),Li(e,"::after")])}function Ed(e){return e.parentNode!==document.head&&!~hu.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Dr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ri(e){if(!!qe)return new Promise(function(t,n){var r=Rt(e.querySelectorAll("*")).filter(Ed).map(Cd),a=Ia.begin("searchPseudoElements");cs(),Promise.all(r).then(function(){a(),Xr(),t()}).catch(function(){a(),Xr(),n()})})}var Sd={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ri,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?G:r;S.searchPseudoElements&&Ri(a)}}},$i=!1,Pd={mixout:function(){return{dom:{unwatch:function(){cs(),$i=!0}}}},hooks:function(){return{bootstrap:function(){Ni(Yr("mutationObserverCallbacks",{}))},noAuto:function(){ud()},watch:function(n){var r=n.observeMutationsRoot;$i?Xr():Ni(Yr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Hi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Id={mixout:function(){return{parse:{transform:function(n){return Hi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Hi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(f," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},_={outer:s,inner:m,path:v};return{tag:"g",attributes:C({},_.outer),children:[{tag:"g",attributes:C({},_.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:C(C({},r.icon.attributes),_.path)}]}]}}}},Or={x:0,y:0,width:"100%",height:"100%"};function Di(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Td(e){return e.tag==="g"?e.children:[e]}var Md={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?fr(a.split(" ").map(function(o){return o.trim()})):Sa();return i.prefix||(i.prefix=at()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,d=i.icon,m=o.width,v=o.icon,_=Iu({transform:l,containerWidth:m,iconWidth:f}),R={tag:"rect",attributes:C(C({},Or),{},{fill:"white"})},N=d.children?{children:d.children.map(Di)}:{},H={tag:"g",attributes:C({},_.inner),children:[Di(C({tag:d.tag,attributes:C(C({},d.attributes),_.path)},N))]},k={tag:"g",attributes:C({},_.outer),children:[H]},O="mask-".concat(s||ln()),j="clip-".concat(s||ln()),P={tag:"mask",attributes:C(C({},Or),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[R,k]},B={tag:"defs",children:[{tag:"clipPath",attributes:{id:j},children:Td(v)},P]};return r.push(B,{tag:"rect",attributes:C({fill:"currentColor","clip-path":"url(#".concat(j,")"),mask:"url(#".concat(O,")")},Or)}),{children:r,attributes:a}}}},Nd={provides:function(t){var n=!1;rt.matchMedia&&(n=rt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:C(C({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=C(C({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:C(C({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:C(C({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:C(C({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:C(C({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:C(C({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:C(C({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:C(C({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Fd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},jd=[Nu,xd,wd,_d,kd,Sd,Pd,Id,Md,Nd,Fd];qu(jd,{mixoutsTo:we});we.noAuto;var us=we.config,zd=we.library;we.dom;var Kn=we.parse;we.findIconDefinition;we.toHtml;var Ld=we.icon;we.layer;var Rd=we.text;we.counter;function Ui(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Se(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ui(Object(n),!0).forEach(function(r){ve(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ui(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function qn(e){return qn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},qn(e)}function ve(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $d(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Hd(e,t){if(e==null)return{};var n=$d(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function Gr(e){return Dd(e)||Ud(e)||Bd(e)||Yd()}function Dd(e){if(Array.isArray(e))return Jr(e)}function Ud(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Bd(e,t){if(!!e){if(typeof e=="string")return Jr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Jr(e,t)}}function Jr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Yd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Vd=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},ds={exports:{}};(function(e){(function(t){var n=function(k,O,j){if(!f(O)||m(O)||v(O)||_(O)||l(O))return O;var P,B=0,le=0;if(d(O))for(P=[],le=O.length;B<le;B++)P.push(n(k,O[B],j));else{P={};for(var ce in O)Object.prototype.hasOwnProperty.call(O,ce)&&(P[k(ce,j)]=n(k,O[ce],j))}return P},r=function(k,O){O=O||{};var j=O.separator||"_",P=O.split||/(?=[A-Z])/;return k.split(P).join(j)},a=function(k){return R(k)?k:(k=k.replace(/[\-_\s]+(.)?/g,function(O,j){return j?j.toUpperCase():""}),k.substr(0,1).toLowerCase()+k.substr(1))},i=function(k){var O=a(k);return O.substr(0,1).toUpperCase()+O.substr(1)},o=function(k,O){return r(k,O).toLowerCase()},s=Object.prototype.toString,l=function(k){return typeof k=="function"},f=function(k){return k===Object(k)},d=function(k){return s.call(k)=="[object Array]"},m=function(k){return s.call(k)=="[object Date]"},v=function(k){return s.call(k)=="[object RegExp]"},_=function(k){return s.call(k)=="[object Boolean]"},R=function(k){return k=k-0,k===k},N=function(k,O){var j=O&&"process"in O?O.process:O;return typeof j!="function"?k:function(P,B){return j(P,k,B)}},H={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(k,O){return n(N(a,O),k)},decamelizeKeys:function(k,O){return n(N(o,O),k,O)},pascalizeKeys:function(k,O){return n(N(i,O),k)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=H:t.humps=H})(Vd)})(ds);var Wd=ds.exports,Kd=["class","style"];function qd(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Wd.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Xd(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Ma(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Ma(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,f){var d=e.attributes[f];switch(f){case"class":l.class=Xd(d);break;case"style":l.style=qd(d);break;default:l.attrs[f]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Hd(n,Kd);return Lo(e.tag,Se(Se(Se({},t),{},{class:a.class,style:Se(Se({},a.style),o)},a.attrs),s),r)}var ms=!1;try{ms=!0}catch{}function Gd(){if(!ms&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Jt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ve({},e,t):{}}function Jd(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ve(t,"fa-".concat(e.size),e.size!==null),ve(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ve(t,"fa-pull-".concat(e.pull),e.pull!==null),ve(t,"fa-swap-opacity",e.swapOpacity),ve(t,"fa-bounce",e.bounce),ve(t,"fa-shake",e.shake),ve(t,"fa-beat",e.beat),ve(t,"fa-fade",e.fade),ve(t,"fa-beat-fade",e.beatFade),ve(t,"fa-flash",e.flash),ve(t,"fa-spin-pulse",e.spinPulse),ve(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Bi(e){if(e&&qn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Kn.icon)return Kn.icon(e);if(e===null)return null;if(qn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Qd=ma({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ke(function(){return Bi(t.icon)}),i=ke(function(){return Jt("classes",Jd(t))}),o=ke(function(){return Jt("transform",typeof t.transform=="string"?Kn.transform(t.transform):t.transform)}),s=ke(function(){return Jt("mask",Bi(t.mask))}),l=ke(function(){return Ld(a.value,Se(Se(Se(Se({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});Nn(l,function(d){if(!d)return Gd("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var f=ke(function(){return l.value?Ma(l.value.abstract[0],{},r):null});return function(){return f.value}}});ma({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=us.familyPrefix,i=ke(function(){return["".concat(a,"-layers")].concat(Gr(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return Lo("div",{class:i.value},r.default?r.default():[])}}});ma({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=us.familyPrefix,i=ke(function(){return Jt("classes",[].concat(Gr(t.counter?["".concat(a,"-layers-counter")]:[]),Gr(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=ke(function(){return Jt("transform",typeof t.transform=="string"?Kn.transform(t.transform):t.transform)}),s=ke(function(){var f=Rd(t.value.toString(),Se(Se({},o.value),i.value)),d=f.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=ke(function(){return Ma(s.value,{},r)});return function(){return l.value}}});var Zd={prefix:"far",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"]},em={prefix:"fas",iconName:"globe",icon:[512,512,[127760],"f0ac","M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"]},tm={prefix:"fas",iconName:"language",icon:[640,512,[],"f1ab","M0 128C0 92.7 28.7 64 64 64H256h48 16H576c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H320 304 256 64c-35.3 0-64-28.7-64-64V128zm320 0V384H576V128H320zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1h73.6l8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276H141l19-42.8zM448 164c11 0 20 9 20 20v4h44 16c11 0 20 9 20 20s-9 20-20 20h-2l-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9l-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45H448 376c-11 0-20-9-20-20s9-20 20-20h52v-4c0-11 9-20 20-20z"]},nm={prefix:"fas",iconName:"code-branch",icon:[448,512,[],"f126","M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 32.8-19.7 61-48 73.3v87.8c18.8-10.9 40.7-17.1 64-17.1h96c35.3 0 64-28.7 64-64v-6.7C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V160c0 70.7-57.3 128-128 128H176c-35.3 0-64 28.7-64 64v6.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V352 153.3C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm232 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM80 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]},rm={prefix:"fas",iconName:"bug",icon:[512,512,[],"f188","M256 0c53 0 96 43 96 96v3.6c0 15.7-12.7 28.4-28.4 28.4H188.4c-15.7 0-28.4-12.7-28.4-28.4V96c0-53 43-96 96-96zM41.4 105.4c12.5-12.5 32.8-12.5 45.3 0l64 64c.7 .7 1.3 1.4 1.9 2.1c14.2-7.3 30.4-11.4 47.5-11.4H312c17.1 0 33.2 4.1 47.5 11.4c.6-.7 1.2-1.4 1.9-2.1l64-64c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-64 64c-.7 .7-1.4 1.3-2.1 1.9c6.2 12 10.1 25.3 11.1 39.5H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H416c0 24.6-5.5 47.8-15.4 68.6c2.2 1.3 4.2 2.9 6 4.8l64 64c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-63.1-63.1c-24.5 21.8-55.8 36.2-90.3 39.6V240c0-8.8-7.2-16-16-16s-16 7.2-16 16V479.2c-34.5-3.4-65.8-17.8-90.3-39.6L86.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l64-64c1.9-1.9 3.9-3.4 6-4.8C101.5 367.8 96 344.6 96 320H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96.3c1.1-14.1 5-27.5 11.1-39.5c-.7-.6-1.4-1.2-2.1-1.9l-64-64c-12.5-12.5-12.5-32.8 0-45.3z"]},am={prefix:"fas",iconName:"briefcase",icon:[512,512,[128188],"f0b1","M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"]},im={prefix:"fas",iconName:"graduation-cap",icon:[640,512,[127891,"mortar-board"],"f19d","M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"]},om={prefix:"fab",iconName:"skype",icon:[448,512,[],"f17e","M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z"]},sm={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},lm={prefix:"fab",iconName:"twitch",icon:[512,512,[],"f1e8","M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z"]},cm={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},fm={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"]},um={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},dm={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};zd.add([Zd,om,dm,lm,fm,sm,cm,um,am,im,tm,em,rm,nm]);$c(ru).component("font-awesome-icon",Qd).mount("#app");
