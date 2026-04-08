(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ds(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const be={},Dt=[],ot=()=>{},bi=()=>!1,Pn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),_n=e=>e.startsWith("onUpdate:"),Ae=Object.assign,us=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ia=Object.prototype.hasOwnProperty,ue=(e,t)=>Ia.call(e,t),Y=Array.isArray,Bt=e=>ln(e)==="[object Map]",wi=e=>ln(e)==="[object Set]",Ms=e=>ln(e)==="[object Date]",ne=e=>typeof e=="function",ke=e=>typeof e=="string",rt=e=>typeof e=="symbol",pe=e=>e!==null&&typeof e=="object",Si=e=>(pe(e)||ne(e))&&ne(e.then)&&ne(e.catch),xi=Object.prototype.toString,ln=e=>xi.call(e),Ra=e=>ln(e).slice(8,-1),ki=e=>ln(e)==="[object Object]",ps=e=>ke(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Gt=ds(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),En=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},La=/-\w/g,Be=En(e=>e.replace(La,t=>t.slice(1).toUpperCase())),Ma=/\B([A-Z])/g,It=En(e=>e.replace(Ma,"-$1").toLowerCase()),In=En(e=>e.charAt(0).toUpperCase()+e.slice(1)),Fn=En(e=>e?`on${In(e)}`:""),at=(e,t)=>!Object.is(e,t),Nn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Ci=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},Da=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Ba=e=>{const t=ke(e)?Number(e):NaN;return isNaN(t)?e:t};let Ds;const Rn=()=>Ds||(Ds=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ft(e){if(Y(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],i=ke(s)?Na(s):Ft(s);if(i)for(const o in i)t[o]=i[o]}return t}else if(ke(e)||pe(e))return e}const Oa=/;(?![^(]*\))/g,qa=/:([^]+)/,Fa=/\/\*[^]*?\*\//g;function Na(e){const t={};return e.replace(Fa,"").split(Oa).forEach(n=>{if(n){const s=n.split(qa);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function J(e){let t="";if(ke(e))t=e;else if(Y(e))for(let n=0;n<e.length;n++){const s=J(e[n]);s&&(t+=s+" ")}else if(pe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ua="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Wa=ds(Ua);function Ti(e){return!!e||e===""}function Ha(e,t){if(e.length!==t.length)return!1;let n=!0;for(let s=0;n&&s<e.length;s++)n=ms(e[s],t[s]);return n}function ms(e,t){if(e===t)return!0;let n=Ms(e),s=Ms(t);if(n||s)return n&&s?e.getTime()===t.getTime():!1;if(n=rt(e),s=rt(t),n||s)return e===t;if(n=Y(e),s=Y(t),n||s)return n&&s?Ha(e,t):!1;if(n=pe(e),s=pe(t),n||s){if(!n||!s)return!1;const i=Object.keys(e).length,o=Object.keys(t).length;if(i!==o)return!1;for(const r in e){const l=e.hasOwnProperty(r),c=t.hasOwnProperty(r);if(l&&!c||!l&&c||!ms(e[r],t[r]))return!1}}return String(e)===String(t)}const Ai=e=>!!(e&&e.__v_isRef===!0),f=e=>ke(e)?e:e==null?"":Y(e)||pe(e)&&(e.toString===xi||!ne(e.toString))?Ai(e)?f(e.value):JSON.stringify(e,Pi,2):String(e),Pi=(e,t)=>Ai(t)?Pi(e,t.value):Bt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,i],o)=>(n[Un(s,o)+" =>"]=i,n),{})}:wi(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Un(n))}:rt(t)?Un(t):pe(t)&&!Y(t)&&!ki(t)?String(t):t,Un=(e,t="")=>{var n;return rt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let qe;class ja{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=qe,!t&&qe&&(this.index=(qe.scopes||(qe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=qe;try{return qe=this,t()}finally{qe=n}}}on(){++this._on===1&&(this.prevScope=qe,qe=this)}off(){this._on>0&&--this._on===0&&(qe=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Ja(){return qe}let ve;const Wn=new WeakSet;class _i{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,qe&&qe.active&&qe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Wn.has(this)&&(Wn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ii(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Bs(this),Ri(this);const t=ve,n=Ge;ve=this,Ge=!0;try{return this.fn()}finally{Li(this),ve=t,Ge=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)gs(t);this.deps=this.depsTail=void 0,Bs(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Wn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Qn(this)&&this.run()}get dirty(){return Qn(this)}}let Ei=0,Vt,Kt;function Ii(e,t=!1){if(e.flags|=8,t){e.next=Kt,Kt=e;return}e.next=Vt,Vt=e}function fs(){Ei++}function hs(){if(--Ei>0)return;if(Kt){let t=Kt;for(Kt=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Vt;){let t=Vt;for(Vt=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function Ri(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Li(e){let t,n=e.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),gs(s),$a(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}e.deps=t,e.depsTail=n}function Qn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Mi(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Mi(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===en)||(e.globalVersion=en,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Qn(e))))return;e.flags|=2;const t=e.dep,n=ve,s=Ge;ve=e,Ge=!0;try{Ri(e);const i=e.fn(e._value);(t.version===0||at(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{ve=n,Ge=s,Li(e),e.flags&=-3}}function gs(e,t=!1){const{dep:n,prevSub:s,nextSub:i}=e;if(s&&(s.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)gs(o,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function $a(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Ge=!0;const Di=[];function mt(){Di.push(Ge),Ge=!1}function ft(){const e=Di.pop();Ge=e===void 0?!0:e}function Bs(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ve;ve=void 0;try{t()}finally{ve=n}}}let en=0;class za{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ys{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ve||!Ge||ve===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ve)n=this.activeLink=new za(ve,this),ve.deps?(n.prevDep=ve.depsTail,ve.depsTail.nextDep=n,ve.depsTail=n):ve.deps=ve.depsTail=n,Bi(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ve.depsTail,n.nextDep=void 0,ve.depsTail.nextDep=n,ve.depsTail=n,ve.deps===n&&(ve.deps=s)}return n}trigger(t){this.version++,en++,this.notify(t)}notify(t){fs();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{hs()}}}function Bi(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)Bi(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Yn=new WeakMap,_t=Symbol(""),Zn=Symbol(""),tn=Symbol("");function Ee(e,t,n){if(Ge&&ve){let s=Yn.get(e);s||Yn.set(e,s=new Map);let i=s.get(n);i||(s.set(n,i=new ys),i.map=s,i.key=n),i.track()}}function pt(e,t,n,s,i,o){const r=Yn.get(e);if(!r){en++;return}const l=c=>{c&&c.trigger()};if(fs(),t==="clear")r.forEach(l);else{const c=Y(e),p=c&&ps(n);if(c&&n==="length"){const d=Number(s);r.forEach((y,x)=>{(x==="length"||x===tn||!rt(x)&&x>=d)&&l(y)})}else switch((n!==void 0||r.has(void 0))&&l(r.get(n)),p&&l(r.get(tn)),t){case"add":c?p&&l(r.get("length")):(l(r.get(_t)),Bt(e)&&l(r.get(Zn)));break;case"delete":c||(l(r.get(_t)),Bt(e)&&l(r.get(Zn)));break;case"set":Bt(e)&&l(r.get(_t));break}}hs()}function Lt(e){const t=de(e);return t===e?t:(Ee(t,"iterate",tn),Je(e)?t:t.map(Ve))}function Ln(e){return Ee(e=de(e),"iterate",tn),e}function st(e,t){return ht(e)?Nt(Et(e)?Ve(t):t):Ve(t)}const Ga={__proto__:null,[Symbol.iterator](){return Hn(this,Symbol.iterator,e=>st(this,e))},concat(...e){return Lt(this).concat(...e.map(t=>Y(t)?Lt(t):t))},entries(){return Hn(this,"entries",e=>(e[1]=st(this,e[1]),e))},every(e,t){return lt(this,"every",e,t,void 0,arguments)},filter(e,t){return lt(this,"filter",e,t,n=>n.map(s=>st(this,s)),arguments)},find(e,t){return lt(this,"find",e,t,n=>st(this,n),arguments)},findIndex(e,t){return lt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return lt(this,"findLast",e,t,n=>st(this,n),arguments)},findLastIndex(e,t){return lt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return lt(this,"forEach",e,t,void 0,arguments)},includes(...e){return jn(this,"includes",e)},indexOf(...e){return jn(this,"indexOf",e)},join(e){return Lt(this).join(e)},lastIndexOf(...e){return jn(this,"lastIndexOf",e)},map(e,t){return lt(this,"map",e,t,void 0,arguments)},pop(){return jt(this,"pop")},push(...e){return jt(this,"push",e)},reduce(e,...t){return Os(this,"reduce",e,t)},reduceRight(e,...t){return Os(this,"reduceRight",e,t)},shift(){return jt(this,"shift")},some(e,t){return lt(this,"some",e,t,void 0,arguments)},splice(...e){return jt(this,"splice",e)},toReversed(){return Lt(this).toReversed()},toSorted(e){return Lt(this).toSorted(e)},toSpliced(...e){return Lt(this).toSpliced(...e)},unshift(...e){return jt(this,"unshift",e)},values(){return Hn(this,"values",e=>st(this,e))}};function Hn(e,t,n){const s=Ln(e),i=s[t]();return s!==e&&!Je(e)&&(i._next=i.next,i.next=()=>{const o=i._next();return o.done||(o.value=n(o.value)),o}),i}const Va=Array.prototype;function lt(e,t,n,s,i,o){const r=Ln(e),l=r!==e&&!Je(e),c=r[t];if(c!==Va[t]){const y=c.apply(e,o);return l?Ve(y):y}let p=n;r!==e&&(l?p=function(y,x){return n.call(this,st(e,y),x,e)}:n.length>2&&(p=function(y,x){return n.call(this,y,x,e)}));const d=c.call(r,p,s);return l&&i?i(d):d}function Os(e,t,n,s){const i=Ln(e),o=i!==e&&!Je(e);let r=n,l=!1;i!==e&&(o?(l=s.length===0,r=function(p,d,y){return l&&(l=!1,p=st(e,p)),n.call(this,p,st(e,d),y,e)}):n.length>3&&(r=function(p,d,y){return n.call(this,p,d,y,e)}));const c=i[t](r,...s);return l?st(e,c):c}function jn(e,t,n){const s=de(e);Ee(s,"iterate",tn);const i=s[t](...n);return(i===-1||i===!1)&&Ss(n[0])?(n[0]=de(n[0]),s[t](...n)):i}function jt(e,t,n=[]){mt(),fs();const s=de(e)[t].apply(e,n);return hs(),ft(),s}const Ka=ds("__proto__,__v_isRef,__isVue"),Oi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(rt));function Xa(e){rt(e)||(e=String(e));const t=de(this);return Ee(t,"has",e),t.hasOwnProperty(e)}class qi{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const i=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return o;if(n==="__v_raw")return s===(i?o?oo:Wi:o?Ui:Ni).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const r=Y(t);if(!i){let c;if(r&&(c=Ga[n]))return c;if(n==="hasOwnProperty")return Xa}const l=Reflect.get(t,n,Re(t)?t:s);if((rt(n)?Oi.has(n):Ka(n))||(i||Ee(t,"get",n),o))return l;if(Re(l)){const c=r&&ps(n)?l:l.value;return i&&pe(c)?ts(c):c}return pe(l)?i?ts(l):bs(l):l}}class Fi extends qi{constructor(t=!1){super(!1,t)}set(t,n,s,i){let o=t[n];const r=Y(t)&&ps(n);if(!this._isShallow){const p=ht(o);if(!Je(s)&&!ht(s)&&(o=de(o),s=de(s)),!r&&Re(o)&&!Re(s))return p||(o.value=s),!0}const l=r?Number(n)<t.length:ue(t,n),c=Reflect.set(t,n,s,Re(t)?t:i);return t===de(i)&&(l?at(s,o)&&pt(t,"set",n,s):pt(t,"add",n,s)),c}deleteProperty(t,n){const s=ue(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&s&&pt(t,"delete",n,void 0),i}has(t,n){const s=Reflect.has(t,n);return(!rt(n)||!Oi.has(n))&&Ee(t,"has",n),s}ownKeys(t){return Ee(t,"iterate",Y(t)?"length":_t),Reflect.ownKeys(t)}}class Qa extends qi{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Ya=new Fi,Za=new Qa,eo=new Fi(!0);const es=e=>e,un=e=>Reflect.getPrototypeOf(e);function to(e,t,n){return function(...s){const i=this.__v_raw,o=de(i),r=Bt(o),l=e==="entries"||e===Symbol.iterator&&r,c=e==="keys"&&r,p=i[e](...s),d=n?es:t?Nt:Ve;return!t&&Ee(o,"iterate",c?Zn:_t),Ae(Object.create(p),{next(){const{value:y,done:x}=p.next();return x?{value:y,done:x}:{value:l?[d(y[0]),d(y[1])]:d(y),done:x}}})}}function pn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function no(e,t){const n={get(i){const o=this.__v_raw,r=de(o),l=de(i);e||(at(i,l)&&Ee(r,"get",i),Ee(r,"get",l));const{has:c}=un(r),p=t?es:e?Nt:Ve;if(c.call(r,i))return p(o.get(i));if(c.call(r,l))return p(o.get(l));o!==r&&o.get(i)},get size(){const i=this.__v_raw;return!e&&Ee(de(i),"iterate",_t),i.size},has(i){const o=this.__v_raw,r=de(o),l=de(i);return e||(at(i,l)&&Ee(r,"has",i),Ee(r,"has",l)),i===l?o.has(i):o.has(i)||o.has(l)},forEach(i,o){const r=this,l=r.__v_raw,c=de(l),p=t?es:e?Nt:Ve;return!e&&Ee(c,"iterate",_t),l.forEach((d,y)=>i.call(o,p(d),p(y),r))}};return Ae(n,e?{add:pn("add"),set:pn("set"),delete:pn("delete"),clear:pn("clear")}:{add(i){const o=de(this),r=un(o),l=de(i),c=!t&&!Je(i)&&!ht(i)?l:i;return r.has.call(o,c)||at(i,c)&&r.has.call(o,i)||at(l,c)&&r.has.call(o,l)||(o.add(c),pt(o,"add",c,c)),this},set(i,o){!t&&!Je(o)&&!ht(o)&&(o=de(o));const r=de(this),{has:l,get:c}=un(r);let p=l.call(r,i);p||(i=de(i),p=l.call(r,i));const d=c.call(r,i);return r.set(i,o),p?at(o,d)&&pt(r,"set",i,o):pt(r,"add",i,o),this},delete(i){const o=de(this),{has:r,get:l}=un(o);let c=r.call(o,i);c||(i=de(i),c=r.call(o,i)),l&&l.call(o,i);const p=o.delete(i);return c&&pt(o,"delete",i,void 0),p},clear(){const i=de(this),o=i.size!==0,r=i.clear();return o&&pt(i,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=to(i,e,t)}),n}function vs(e,t){const n=no(e,t);return(s,i,o)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?s:Reflect.get(ue(n,i)&&i in s?n:s,i,o)}const so={get:vs(!1,!1)},io={get:vs(!1,!0)},ao={get:vs(!0,!1)};const Ni=new WeakMap,Ui=new WeakMap,Wi=new WeakMap,oo=new WeakMap;function ro(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function lo(e){return e.__v_skip||!Object.isExtensible(e)?0:ro(Ra(e))}function bs(e){return ht(e)?e:ws(e,!1,Ya,so,Ni)}function co(e){return ws(e,!1,eo,io,Ui)}function ts(e){return ws(e,!0,Za,ao,Wi)}function ws(e,t,n,s,i){if(!pe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=lo(e);if(o===0)return e;const r=i.get(e);if(r)return r;const l=new Proxy(e,o===2?s:n);return i.set(e,l),l}function Et(e){return ht(e)?Et(e.__v_raw):!!(e&&e.__v_isReactive)}function ht(e){return!!(e&&e.__v_isReadonly)}function Je(e){return!!(e&&e.__v_isShallow)}function Ss(e){return e?!!e.__v_raw:!1}function de(e){const t=e&&e.__v_raw;return t?de(t):e}function uo(e){return!ue(e,"__v_skip")&&Object.isExtensible(e)&&Ci(e,"__v_skip",!0),e}const Ve=e=>pe(e)?bs(e):e,Nt=e=>pe(e)?ts(e):e;function Re(e){return e?e.__v_isRef===!0:!1}function H(e){return po(e,!1)}function po(e,t){return Re(e)?e:new mo(e,t)}class mo{constructor(t,n){this.dep=new ys,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:de(t),this._value=n?t:Ve(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||Je(t)||ht(t);t=s?t:de(t),at(t,n)&&(this._rawValue=t,this._value=s?t:Ve(t),this.dep.trigger())}}function fo(e){return Re(e)?e.value:e}const ho={get:(e,t,n)=>t==="__v_raw"?e:fo(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const i=e[t];return Re(i)&&!Re(n)?(i.value=n,!0):Reflect.set(e,t,n,s)}};function Hi(e){return Et(e)?e:new Proxy(e,ho)}class go{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new ys(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=en-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ve!==this)return Ii(this,!0),!0}get value(){const t=this.dep.track();return Mi(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function yo(e,t,n=!1){let s,i;return ne(e)?s=e:(s=e.get,i=e.set),new go(s,i,n)}const mn={},bn=new WeakMap;let At;function vo(e,t=!1,n=At){if(n){let s=bn.get(n);s||bn.set(n,s=[]),s.push(e)}}function bo(e,t,n=be){const{immediate:s,deep:i,once:o,scheduler:r,augmentJob:l,call:c}=n,p=W=>i?W:Je(W)||i===!1||i===0?bt(W,1):bt(W);let d,y,x,I,j=!1,B=!1;if(Re(e)?(y=()=>e.value,j=Je(e)):Et(e)?(y=()=>p(e),j=!0):Y(e)?(B=!0,j=e.some(W=>Et(W)||Je(W)),y=()=>e.map(W=>{if(Re(W))return W.value;if(Et(W))return p(W);if(ne(W))return c?c(W,2):W()})):ne(e)?t?y=c?()=>c(e,2):e:y=()=>{if(x){mt();try{x()}finally{ft()}}const W=At;At=d;try{return c?c(e,3,[I]):e(I)}finally{At=W}}:y=ot,t&&i){const W=y,ae=i===!0?1/0:i;y=()=>bt(W(),ae)}const O=Ja(),D=()=>{d.stop(),O&&O.active&&us(O.effects,d)};if(o&&t){const W=t;t=(...ae)=>{W(...ae),D()}}let R=B?new Array(e.length).fill(mn):mn;const Z=W=>{if(!(!(d.flags&1)||!d.dirty&&!W))if(t){const ae=d.run();if(i||j||(B?ae.some((ge,xe)=>at(ge,R[xe])):at(ae,R))){x&&x();const ge=At;At=d;try{const xe=[ae,R===mn?void 0:B&&R[0]===mn?[]:R,I];R=ae,c?c(t,3,xe):t(...xe)}finally{At=ge}}}else d.run()};return l&&l(Z),d=new _i(y),d.scheduler=r?()=>r(Z,!1):Z,I=W=>vo(W,!1,d),x=d.onStop=()=>{const W=bn.get(d);if(W){if(c)c(W,4);else for(const ae of W)ae();bn.delete(d)}},t?s?Z(!0):R=d.run():r?r(Z.bind(null,!0),!0):d.run(),D.pause=d.pause.bind(d),D.resume=d.resume.bind(d),D.stop=D,D}function bt(e,t=1/0,n){if(t<=0||!pe(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Re(e))bt(e.value,t,n);else if(Y(e))for(let s=0;s<e.length;s++)bt(e[s],t,n);else if(wi(e)||Bt(e))e.forEach(s=>{bt(s,t,n)});else if(ki(e)){for(const s in e)bt(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&bt(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function cn(e,t,n,s){try{return s?e(...s):e()}catch(i){Mn(i,t,n)}}function Ke(e,t,n,s){if(ne(e)){const i=cn(e,t,n,s);return i&&Si(i)&&i.catch(o=>{Mn(o,t,n)}),i}if(Y(e)){const i=[];for(let o=0;o<e.length;o++)i.push(Ke(e[o],t,n,s));return i}}function Mn(e,t,n,s=!0){const i=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:r}=t&&t.appContext.config||be;if(t){let l=t.parent;const c=t.proxy,p=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let y=0;y<d.length;y++)if(d[y](e,c,p)===!1)return}l=l.parent}if(o){mt(),cn(o,null,10,[e,c,p]),ft();return}}wo(e,n,i,s,r)}function wo(e,t,n,s=!0,i=!1){if(i)throw e;console.error(e)}const Me=[];let tt=-1;const Ot=[];let vt=null,Mt=0;const ji=Promise.resolve();let wn=null;function So(e){const t=wn||ji;return e?t.then(this?e.bind(this):e):t}function xo(e){let t=tt+1,n=Me.length;for(;t<n;){const s=t+n>>>1,i=Me[s],o=nn(i);o<e||o===e&&i.flags&2?t=s+1:n=s}return t}function xs(e){if(!(e.flags&1)){const t=nn(e),n=Me[Me.length-1];!n||!(e.flags&2)&&t>=nn(n)?Me.push(e):Me.splice(xo(t),0,e),e.flags|=1,Ji()}}function Ji(){wn||(wn=ji.then(zi))}function ko(e){Y(e)?Ot.push(...e):vt&&e.id===-1?vt.splice(Mt+1,0,e):e.flags&1||(Ot.push(e),e.flags|=1),Ji()}function qs(e,t,n=tt+1){for(;n<Me.length;n++){const s=Me[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;Me.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function $i(e){if(Ot.length){const t=[...new Set(Ot)].sort((n,s)=>nn(n)-nn(s));if(Ot.length=0,vt){vt.push(...t);return}for(vt=t,Mt=0;Mt<vt.length;Mt++){const n=vt[Mt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}vt=null,Mt=0}}const nn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function zi(e){try{for(tt=0;tt<Me.length;tt++){const t=Me[tt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),cn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;tt<Me.length;tt++){const t=Me[tt];t&&(t.flags&=-2)}tt=-1,Me.length=0,$i(),wn=null,(Me.length||Ot.length)&&zi()}}let $e=null,Gi=null;function Sn(e){const t=$e;return $e=e,Gi=e&&e.type.__scopeId||null,t}function je(e,t=$e,n){if(!t||e._n)return e;const s=(...i)=>{s._d&&Cn(-1);const o=Sn(t);let r;try{r=e(...i)}finally{Sn(o),s._d&&Cn(1)}return r};return s._n=!0,s._c=!0,s._d=!0,s}function xt(e,t,n,s){const i=e.dirs,o=t&&t.dirs;for(let r=0;r<i.length;r++){const l=i[r];o&&(l.oldValue=o[r].value);let c=l.dir[s];c&&(mt(),Ke(c,n,8,[e.el,l,e,t]),ft())}}function Co(e,t){if(Ie){let n=Ie.provides;const s=Ie.parent&&Ie.parent.provides;s===n&&(n=Ie.provides=Object.create(s)),n[e]=t}}function hn(e,t,n=!1){const s=Ta();if(s||qt){let i=qt?qt._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&ne(t)?t.call(s&&s.proxy):t}}const To=Symbol.for("v-scx"),Ao=()=>hn(To);function Jn(e,t,n){return Vi(e,t,n)}function Vi(e,t,n=be){const{immediate:s,deep:i,flush:o,once:r}=n,l=Ae({},n),c=t&&s||!t&&o!=="post";let p;if(on){if(o==="sync"){const I=Ao();p=I.__watcherHandles||(I.__watcherHandles=[])}else if(!c){const I=()=>{};return I.stop=ot,I.resume=ot,I.pause=ot,I}}const d=Ie;l.call=(I,j,B)=>Ke(I,d,j,B);let y=!1;o==="post"?l.scheduler=I=>{Oe(I,d&&d.suspense)}:o!=="sync"&&(y=!0,l.scheduler=(I,j)=>{j?I():xs(I)}),l.augmentJob=I=>{t&&(I.flags|=4),y&&(I.flags|=2,d&&(I.id=d.uid,I.i=d))};const x=bo(e,t,l);return on&&(p?p.push(x):c&&x()),x}function Po(e,t,n){const s=this.proxy,i=ke(e)?e.includes(".")?Ki(s,e):()=>s[e]:e.bind(s,s);let o;ne(t)?o=t:(o=t.handler,n=t);const r=dn(this),l=Vi(i,o.bind(s),n);return r(),l}function Ki(e,t){const n=t.split(".");return()=>{let s=e;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const _o=Symbol("_vte"),Xi=e=>e.__isTeleport,nt=Symbol("_leaveCb"),Jt=Symbol("_enterCb");function Eo(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ks(()=>{e.isMounted=!0}),ia(()=>{e.isUnmounting=!0}),e}const He=[Function,Array],Qi={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:He,onEnter:He,onAfterEnter:He,onEnterCancelled:He,onBeforeLeave:He,onLeave:He,onAfterLeave:He,onLeaveCancelled:He,onBeforeAppear:He,onAppear:He,onAfterAppear:He,onAppearCancelled:He},Yi=e=>{const t=e.subTree;return t.component?Yi(t.component):t},Io={name:"BaseTransition",props:Qi,setup(e,{slots:t}){const n=Ta(),s=Eo();return()=>{const i=t.default&&ta(t.default(),!0);if(!i||!i.length)return;const o=Zi(i),r=de(e),{mode:l}=r;if(s.isLeaving)return $n(o);const c=Fs(o);if(!c)return $n(o);let p=ns(c,r,s,n,y=>p=y);c.type!==De&&sn(c,p);let d=n.subTree&&Fs(n.subTree);if(d&&d.type!==De&&!Pt(d,c)&&Yi(n).type!==De){let y=ns(d,r,s,n);if(sn(d,y),l==="out-in"&&c.type!==De)return s.isLeaving=!0,y.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete y.afterLeave,d=void 0},$n(o);l==="in-out"&&c.type!==De?y.delayLeave=(x,I,j)=>{const B=ea(s,d);B[String(d.key)]=d,x[nt]=()=>{I(),x[nt]=void 0,delete p.delayedLeave,d=void 0},p.delayedLeave=()=>{j(),delete p.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return o}}};function Zi(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==De){t=n;break}}return t}const Ro=Io;function ea(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function ns(e,t,n,s,i){const{appear:o,mode:r,persisted:l=!1,onBeforeEnter:c,onEnter:p,onAfterEnter:d,onEnterCancelled:y,onBeforeLeave:x,onLeave:I,onAfterLeave:j,onLeaveCancelled:B,onBeforeAppear:O,onAppear:D,onAfterAppear:R,onAppearCancelled:Z}=t,W=String(e.key),ae=ea(n,e),ge=(X,ie)=>{X&&Ke(X,s,9,ie)},xe=(X,ie)=>{const ce=ie[1];ge(X,ie),Y(X)?X.every(F=>F.length<=1)&&ce():X.length<=1&&ce()},fe={mode:r,persisted:l,beforeEnter(X){let ie=c;if(!n.isMounted)if(o)ie=O||c;else return;X[nt]&&X[nt](!0);const ce=ae[W];ce&&Pt(e,ce)&&ce.el[nt]&&ce.el[nt](),ge(ie,[X])},enter(X){if(ae[W]===e)return;let ie=p,ce=d,F=y;if(!n.isMounted)if(o)ie=D||p,ce=R||d,F=Z||y;else return;let oe=!1;X[Jt]=k=>{oe||(oe=!0,k?ge(F,[X]):ge(ce,[X]),fe.delayedLeave&&fe.delayedLeave(),X[Jt]=void 0)};const se=X[Jt].bind(null,!1);ie?xe(ie,[X,se]):se()},leave(X,ie){const ce=String(e.key);if(X[Jt]&&X[Jt](!0),n.isUnmounting)return ie();ge(x,[X]);let F=!1;X[nt]=se=>{F||(F=!0,ie(),se?ge(B,[X]):ge(j,[X]),X[nt]=void 0,ae[ce]===e&&delete ae[ce])};const oe=X[nt].bind(null,!1);ae[ce]=e,I?xe(I,[X,oe]):oe()},clone(X){const ie=ns(X,t,n,s,i);return i&&i(ie),ie}};return fe}function $n(e){if(Dn(e))return e=wt(e),e.children=null,e}function Fs(e){if(!Dn(e))return Xi(e.type)&&e.children?Zi(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&ne(n.default))return n.default()}}function sn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,sn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ta(e,t=!1,n){let s=[],i=0;for(let o=0;o<e.length;o++){let r=e[o];const l=n==null?r.key:String(n)+String(r.key!=null?r.key:o);r.type===G?(r.patchFlag&128&&i++,s=s.concat(ta(r.children,t,l))):(t||r.type!==De)&&s.push(l!=null?wt(r,{key:l}):r)}if(i>1)for(let o=0;o<s.length;o++)s[o].patchFlag=-2;return s}function na(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Ns(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const xn=new WeakMap;function Xt(e,t,n,s,i=!1){if(Y(e)){e.forEach((B,O)=>Xt(B,t&&(Y(t)?t[O]:t),n,s,i));return}if(Qt(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Xt(e,t,n,s.component.subTree);return}const o=s.shapeFlag&4?Es(s.component):s.el,r=i?null:o,{i:l,r:c}=e,p=t&&t.r,d=l.refs===be?l.refs={}:l.refs,y=l.setupState,x=de(y),I=y===be?bi:B=>Ns(d,B)?!1:ue(x,B),j=(B,O)=>!(O&&Ns(d,O));if(p!=null&&p!==c){if(Us(t),ke(p))d[p]=null,I(p)&&(y[p]=null);else if(Re(p)){const B=t;j(p,B.k)&&(p.value=null),B.k&&(d[B.k]=null)}}if(ne(c))cn(c,l,12,[r,d]);else{const B=ke(c),O=Re(c);if(B||O){const D=()=>{if(e.f){const R=B?I(c)?y[c]:d[c]:j()||!e.k?c.value:d[e.k];if(i)Y(R)&&us(R,o);else if(Y(R))R.includes(o)||R.push(o);else if(B)d[c]=[o],I(c)&&(y[c]=d[c]);else{const Z=[o];j(c,e.k)&&(c.value=Z),e.k&&(d[e.k]=Z)}}else B?(d[c]=r,I(c)&&(y[c]=r)):O&&(j(c,e.k)&&(c.value=r),e.k&&(d[e.k]=r))};if(r){const R=()=>{D(),xn.delete(e)};R.id=-1,xn.set(e,R),Oe(R,n)}else Us(e),D()}}}function Us(e){const t=xn.get(e);t&&(t.flags|=8,xn.delete(e))}Rn().requestIdleCallback;Rn().cancelIdleCallback;const Qt=e=>!!e.type.__asyncLoader,Dn=e=>e.type.__isKeepAlive;function Lo(e,t){sa(e,"a",t)}function Mo(e,t){sa(e,"da",t)}function sa(e,t,n=Ie){const s=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Bn(t,s,n),n){let i=n.parent;for(;i&&i.parent;)Dn(i.parent.vnode)&&Do(s,t,n,i),i=i.parent}}function Do(e,t,n,s){const i=Bn(t,e,s,!0);Cs(()=>{us(s[t],i)},n)}function Bn(e,t,n=Ie,s=!1){if(n){const i=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...r)=>{mt();const l=dn(n),c=Ke(t,n,e,r);return l(),ft(),c});return s?i.unshift(o):i.push(o),o}}const gt=e=>(t,n=Ie)=>{(!on||e==="sp")&&Bn(e,(...s)=>t(...s),n)},Bo=gt("bm"),ks=gt("m"),Oo=gt("bu"),qo=gt("u"),ia=gt("bum"),Cs=gt("um"),Fo=gt("sp"),No=gt("rtg"),Uo=gt("rtc");function Wo(e,t=Ie){Bn("ec",e,t)}const Ho="components",aa=Symbol.for("v-ndc");function jo(e){return ke(e)?Jo(Ho,e,!1)||e:e||aa}function Jo(e,t,n=!0,s=!1){const i=$e||Ie;if(i){const o=i.type;{const l=_r(o,!1);if(l&&(l===t||l===Be(t)||l===In(Be(t))))return o}const r=Ws(i[e]||o[e],t)||Ws(i.appContext[e],t);return!r&&s?o:r}}function Ws(e,t){return e&&(e[t]||e[Be(t)]||e[In(Be(t))])}function te(e,t,n,s){let i;const o=n,r=Y(e);if(r||ke(e)){const l=r&&Et(e);let c=!1,p=!1;l&&(c=!Je(e),p=ht(e),e=Ln(e)),i=new Array(e.length);for(let d=0,y=e.length;d<y;d++)i[d]=t(c?p?Nt(Ve(e[d])):Ve(e[d]):e[d],d,void 0,o)}else if(typeof e=="number"){i=new Array(e);for(let l=0;l<e;l++)i[l]=t(l+1,l,void 0,o)}else if(pe(e))if(e[Symbol.iterator])i=Array.from(e,(l,c)=>t(l,c,void 0,o));else{const l=Object.keys(e);i=new Array(l.length);for(let c=0,p=l.length;c<p;c++){const d=l[c];i[c]=t(e[d],d,c,o)}}else i=[];return i}const ss=e=>e?Aa(e)?Es(e):ss(e.parent):null,Yt=Ae(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ss(e.parent),$root:e=>ss(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>ra(e),$forceUpdate:e=>e.f||(e.f=()=>{xs(e.update)}),$nextTick:e=>e.n||(e.n=So.bind(e.proxy)),$watch:e=>Po.bind(e)}),zn=(e,t)=>e!==be&&!e.__isScriptSetup&&ue(e,t),$o={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:o,accessCache:r,type:l,appContext:c}=e;if(t[0]!=="$"){const x=r[t];if(x!==void 0)switch(x){case 1:return s[t];case 2:return i[t];case 4:return n[t];case 3:return o[t]}else{if(zn(s,t))return r[t]=1,s[t];if(i!==be&&ue(i,t))return r[t]=2,i[t];if(ue(o,t))return r[t]=3,o[t];if(n!==be&&ue(n,t))return r[t]=4,n[t];is&&(r[t]=0)}}const p=Yt[t];let d,y;if(p)return t==="$attrs"&&Ee(e.attrs,"get",""),p(e);if((d=l.__cssModules)&&(d=d[t]))return d;if(n!==be&&ue(n,t))return r[t]=4,n[t];if(y=c.config.globalProperties,ue(y,t))return y[t]},set({_:e},t,n){const{data:s,setupState:i,ctx:o}=e;return zn(i,t)?(i[t]=n,!0):s!==be&&ue(s,t)?(s[t]=n,!0):ue(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:i,props:o,type:r}},l){let c;return!!(n[l]||e!==be&&l[0]!=="$"&&ue(e,l)||zn(t,l)||ue(o,l)||ue(s,l)||ue(Yt,l)||ue(i.config.globalProperties,l)||(c=r.__cssModules)&&c[l])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ue(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Hs(e){return Y(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let is=!0;function zo(e){const t=ra(e),n=e.proxy,s=e.ctx;is=!1,t.beforeCreate&&js(t.beforeCreate,e,"bc");const{data:i,computed:o,methods:r,watch:l,provide:c,inject:p,created:d,beforeMount:y,mounted:x,beforeUpdate:I,updated:j,activated:B,deactivated:O,beforeDestroy:D,beforeUnmount:R,destroyed:Z,unmounted:W,render:ae,renderTracked:ge,renderTriggered:xe,errorCaptured:fe,serverPrefetch:X,expose:ie,inheritAttrs:ce,components:F,directives:oe,filters:se}=t;if(p&&Go(p,s,null),r)for(const Q in r){const re=r[Q];ne(re)&&(s[Q]=re.bind(n))}if(i){const Q=i.call(n,n);pe(Q)&&(e.data=bs(Q))}if(is=!0,o)for(const Q in o){const re=o[Q],Fe=ne(re)?re.bind(n,n):ne(re.get)?re.get.bind(n,n):ot,Xe=!ne(re)&&ne(re.set)?re.set.bind(n):ot,Ne=we({get:Fe,set:Xe});Object.defineProperty(s,Q,{enumerable:!0,configurable:!0,get:()=>Ne.value,set:_e=>Ne.value=_e})}if(l)for(const Q in l)oa(l[Q],s,n,Q);if(c){const Q=ne(c)?c.call(n):c;Reflect.ownKeys(Q).forEach(re=>{Co(re,Q[re])})}d&&js(d,e,"c");function _(Q,re){Y(re)?re.forEach(Fe=>Q(Fe.bind(n))):re&&Q(re.bind(n))}if(_(Bo,y),_(ks,x),_(Oo,I),_(qo,j),_(Lo,B),_(Mo,O),_(Wo,fe),_(Uo,ge),_(No,xe),_(ia,R),_(Cs,W),_(Fo,X),Y(ie))if(ie.length){const Q=e.exposed||(e.exposed={});ie.forEach(re=>{Object.defineProperty(Q,re,{get:()=>n[re],set:Fe=>n[re]=Fe,enumerable:!0})})}else e.exposed||(e.exposed={});ae&&e.render===ot&&(e.render=ae),ce!=null&&(e.inheritAttrs=ce),F&&(e.components=F),oe&&(e.directives=oe),X&&na(e)}function Go(e,t,n=ot){Y(e)&&(e=as(e));for(const s in e){const i=e[s];let o;pe(i)?"default"in i?o=hn(i.from||s,i.default,!0):o=hn(i.from||s):o=hn(i),Re(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:r=>o.value=r}):t[s]=o}}function js(e,t,n){Ke(Y(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function oa(e,t,n,s){let i=s.includes(".")?Ki(n,s):()=>n[s];if(ke(e)){const o=t[e];ne(o)&&Jn(i,o)}else if(ne(e))Jn(i,e.bind(n));else if(pe(e))if(Y(e))e.forEach(o=>oa(o,t,n,s));else{const o=ne(e.handler)?e.handler.bind(n):t[e.handler];ne(o)&&Jn(i,o,e)}}function ra(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:i,optionsCache:o,config:{optionMergeStrategies:r}}=e.appContext,l=o.get(t);let c;return l?c=l:!i.length&&!n&&!s?c=t:(c={},i.length&&i.forEach(p=>kn(c,p,r,!0)),kn(c,t,r)),pe(t)&&o.set(t,c),c}function kn(e,t,n,s=!1){const{mixins:i,extends:o}=t;o&&kn(e,o,n,!0),i&&i.forEach(r=>kn(e,r,n,!0));for(const r in t)if(!(s&&r==="expose")){const l=Vo[r]||n&&n[r];e[r]=l?l(e[r],t[r]):t[r]}return e}const Vo={data:Js,props:$s,emits:$s,methods:zt,computed:zt,beforeCreate:Le,created:Le,beforeMount:Le,mounted:Le,beforeUpdate:Le,updated:Le,beforeDestroy:Le,beforeUnmount:Le,destroyed:Le,unmounted:Le,activated:Le,deactivated:Le,errorCaptured:Le,serverPrefetch:Le,components:zt,directives:zt,watch:Xo,provide:Js,inject:Ko};function Js(e,t){return t?e?function(){return Ae(ne(e)?e.call(this,this):e,ne(t)?t.call(this,this):t)}:t:e}function Ko(e,t){return zt(as(e),as(t))}function as(e){if(Y(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Le(e,t){return e?[...new Set([].concat(e,t))]:t}function zt(e,t){return e?Ae(Object.create(null),e,t):t}function $s(e,t){return e?Y(e)&&Y(t)?[...new Set([...e,...t])]:Ae(Object.create(null),Hs(e),Hs(t??{})):t}function Xo(e,t){if(!e)return t;if(!t)return e;const n=Ae(Object.create(null),e);for(const s in t)n[s]=Le(e[s],t[s]);return n}function la(){return{app:null,config:{isNativeTag:bi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Qo=0;function Yo(e,t){return function(s,i=null){ne(s)||(s=Ae({},s)),i!=null&&!pe(i)&&(i=null);const o=la(),r=new WeakSet,l=[];let c=!1;const p=o.app={_uid:Qo++,_component:s,_props:i,_container:null,_context:o,_instance:null,version:Rr,get config(){return o.config},set config(d){},use(d,...y){return r.has(d)||(d&&ne(d.install)?(r.add(d),d.install(p,...y)):ne(d)&&(r.add(d),d(p,...y))),p},mixin(d){return o.mixins.includes(d)||o.mixins.push(d),p},component(d,y){return y?(o.components[d]=y,p):o.components[d]},directive(d,y){return y?(o.directives[d]=y,p):o.directives[d]},mount(d,y,x){if(!c){const I=p._ceVNode||Se(s,i);return I.appContext=o,x===!0?x="svg":x===!1&&(x=void 0),e(I,d,x),c=!0,p._container=d,d.__vue_app__=p,Es(I.component)}},onUnmount(d){l.push(d)},unmount(){c&&(Ke(l,p._instance,16),e(null,p._container),delete p._container.__vue_app__)},provide(d,y){return o.provides[d]=y,p},runWithContext(d){const y=qt;qt=p;try{return d()}finally{qt=y}}};return p}}let qt=null;const Zo=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Be(t)}Modifiers`]||e[`${It(t)}Modifiers`];function er(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||be;let i=n;const o=t.startsWith("update:"),r=o&&Zo(s,t.slice(7));r&&(r.trim&&(i=n.map(d=>ke(d)?d.trim():d)),r.number&&(i=n.map(Da)));let l,c=s[l=Fn(t)]||s[l=Fn(Be(t))];!c&&o&&(c=s[l=Fn(It(t))]),c&&Ke(c,e,6,i);const p=s[l+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Ke(p,e,6,i)}}const tr=new WeakMap;function ca(e,t,n=!1){const s=n?tr:t.emitsCache,i=s.get(e);if(i!==void 0)return i;const o=e.emits;let r={},l=!1;if(!ne(e)){const c=p=>{const d=ca(p,t,!0);d&&(l=!0,Ae(r,d))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!o&&!l?(pe(e)&&s.set(e,null),null):(Y(o)?o.forEach(c=>r[c]=null):Ae(r,o),pe(e)&&s.set(e,r),r)}function On(e,t){return!e||!Pn(t)?!1:(t=t.slice(2).replace(/Once$/,""),ue(e,t[0].toLowerCase()+t.slice(1))||ue(e,It(t))||ue(e,t))}function zs(e){const{type:t,vnode:n,proxy:s,withProxy:i,propsOptions:[o],slots:r,attrs:l,emit:c,render:p,renderCache:d,props:y,data:x,setupState:I,ctx:j,inheritAttrs:B}=e,O=Sn(e);let D,R;try{if(n.shapeFlag&4){const W=i||s,ae=W;D=it(p.call(ae,W,d,y,I,x,j)),R=l}else{const W=t;D=it(W.length>1?W(y,{attrs:l,slots:r,emit:c}):W(y,null)),R=t.props?l:nr(l)}}catch(W){Zt.length=0,Mn(W,e,1),D=Se(De)}let Z=D;if(R&&B!==!1){const W=Object.keys(R),{shapeFlag:ae}=Z;W.length&&ae&7&&(o&&W.some(_n)&&(R=sr(R,o)),Z=wt(Z,R,!1,!0))}return n.dirs&&(Z=wt(Z,null,!1,!0),Z.dirs=Z.dirs?Z.dirs.concat(n.dirs):n.dirs),n.transition&&sn(Z,n.transition),D=Z,Sn(O),D}const nr=e=>{let t;for(const n in e)(n==="class"||n==="style"||Pn(n))&&((t||(t={}))[n]=e[n]);return t},sr=(e,t)=>{const n={};for(const s in e)(!_n(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function ir(e,t,n){const{props:s,children:i,component:o}=e,{props:r,children:l,patchFlag:c}=t,p=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Gs(s,r,p):!!r;if(c&8){const d=t.dynamicProps;for(let y=0;y<d.length;y++){const x=d[y];if(da(r,s,x)&&!On(p,x))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===r?!1:s?r?Gs(s,r,p):!0:!!r;return!1}function Gs(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let i=0;i<s.length;i++){const o=s[i];if(da(t,e,o)&&!On(n,o))return!0}return!1}function da(e,t,n){const s=e[n],i=t[n];return n==="style"&&pe(s)&&pe(i)?!ms(s,i):s!==i}function ar({vnode:e,parent:t,suspense:n},s){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.suspense.vnode.el=i.el=s,e=i),i===e)(e=t.vnode).el=s,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=s)}const ua={},pa=()=>Object.create(ua),ma=e=>Object.getPrototypeOf(e)===ua;function or(e,t,n,s=!1){const i={},o=pa();e.propsDefaults=Object.create(null),fa(e,t,i,o);for(const r in e.propsOptions[0])r in i||(i[r]=void 0);n?e.props=s?i:co(i):e.type.props?e.props=i:e.props=o,e.attrs=o}function rr(e,t,n,s){const{props:i,attrs:o,vnode:{patchFlag:r}}=e,l=de(i),[c]=e.propsOptions;let p=!1;if((s||r>0)&&!(r&16)){if(r&8){const d=e.vnode.dynamicProps;for(let y=0;y<d.length;y++){let x=d[y];if(On(e.emitsOptions,x))continue;const I=t[x];if(c)if(ue(o,x))I!==o[x]&&(o[x]=I,p=!0);else{const j=Be(x);i[j]=os(c,l,j,I,e,!1)}else I!==o[x]&&(o[x]=I,p=!0)}}}else{fa(e,t,i,o)&&(p=!0);let d;for(const y in l)(!t||!ue(t,y)&&((d=It(y))===y||!ue(t,d)))&&(c?n&&(n[y]!==void 0||n[d]!==void 0)&&(i[y]=os(c,l,y,void 0,e,!0)):delete i[y]);if(o!==l)for(const y in o)(!t||!ue(t,y))&&(delete o[y],p=!0)}p&&pt(e.attrs,"set","")}function fa(e,t,n,s){const[i,o]=e.propsOptions;let r=!1,l;if(t)for(let c in t){if(Gt(c))continue;const p=t[c];let d;i&&ue(i,d=Be(c))?!o||!o.includes(d)?n[d]=p:(l||(l={}))[d]=p:On(e.emitsOptions,c)||(!(c in s)||p!==s[c])&&(s[c]=p,r=!0)}if(o){const c=de(n),p=l||be;for(let d=0;d<o.length;d++){const y=o[d];n[y]=os(i,c,y,p[y],e,!ue(p,y))}}return r}function os(e,t,n,s,i,o){const r=e[n];if(r!=null){const l=ue(r,"default");if(l&&s===void 0){const c=r.default;if(r.type!==Function&&!r.skipFactory&&ne(c)){const{propsDefaults:p}=i;if(n in p)s=p[n];else{const d=dn(i);s=p[n]=c.call(null,t),d()}}else s=c;i.ce&&i.ce._setProp(n,s)}r[0]&&(o&&!l?s=!1:r[1]&&(s===""||s===It(n))&&(s=!0))}return s}const lr=new WeakMap;function ha(e,t,n=!1){const s=n?lr:t.propsCache,i=s.get(e);if(i)return i;const o=e.props,r={},l=[];let c=!1;if(!ne(e)){const d=y=>{c=!0;const[x,I]=ha(y,t,!0);Ae(r,x),I&&l.push(...I)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!o&&!c)return pe(e)&&s.set(e,Dt),Dt;if(Y(o))for(let d=0;d<o.length;d++){const y=Be(o[d]);Vs(y)&&(r[y]=be)}else if(o)for(const d in o){const y=Be(d);if(Vs(y)){const x=o[d],I=r[y]=Y(x)||ne(x)?{type:x}:Ae({},x),j=I.type;let B=!1,O=!0;if(Y(j))for(let D=0;D<j.length;++D){const R=j[D],Z=ne(R)&&R.name;if(Z==="Boolean"){B=!0;break}else Z==="String"&&(O=!1)}else B=ne(j)&&j.name==="Boolean";I[0]=B,I[1]=O,(B||ue(I,"default"))&&l.push(y)}}const p=[r,l];return pe(e)&&s.set(e,p),p}function Vs(e){return e[0]!=="$"&&!Gt(e)}const Ts=e=>e==="_"||e==="_ctx"||e==="$stable",As=e=>Y(e)?e.map(it):[it(e)],cr=(e,t,n)=>{if(t._n)return t;const s=je((...i)=>As(t(...i)),n);return s._c=!1,s},ga=(e,t,n)=>{const s=e._ctx;for(const i in e){if(Ts(i))continue;const o=e[i];if(ne(o))t[i]=cr(i,o,s);else if(o!=null){const r=As(o);t[i]=()=>r}}},ya=(e,t)=>{const n=As(t);e.slots.default=()=>n},va=(e,t,n)=>{for(const s in t)(n||!Ts(s))&&(e[s]=t[s])},dr=(e,t,n)=>{const s=e.slots=pa();if(e.vnode.shapeFlag&32){const i=t._;i?(va(s,t,n),n&&Ci(s,"_",i,!0)):ga(t,s)}else t&&ya(e,t)},ur=(e,t,n)=>{const{vnode:s,slots:i}=e;let o=!0,r=be;if(s.shapeFlag&32){const l=t._;l?n&&l===1?o=!1:va(i,t,n):(o=!t.$stable,ga(t,i)),r=t}else t&&(ya(e,t),r={default:1});if(o)for(const l in i)!Ts(l)&&r[l]==null&&delete i[l]},Oe=gr;function pr(e){return mr(e)}function mr(e,t){const n=Rn();n.__VUE__=!0;const{insert:s,remove:i,patchProp:o,createElement:r,createText:l,createComment:c,setText:p,setElementText:d,parentNode:y,nextSibling:x,setScopeId:I=ot,insertStaticContent:j}=e,B=(u,m,S,P=null,C=null,T=null,q=void 0,M=null,L=!!m.dynamicChildren)=>{if(u===m)return;u&&!Pt(u,m)&&(P=E(u),_e(u,C,T,!0),u=null),m.patchFlag===-2&&(L=!1,m.dynamicChildren=null);const{type:A,ref:K,shapeFlag:N}=m;switch(A){case qn:O(u,m,S,P);break;case De:D(u,m,S,P);break;case gn:u==null&&R(m,S,P,q);break;case G:F(u,m,S,P,C,T,q,M,L);break;default:N&1?ae(u,m,S,P,C,T,q,M,L):N&6?oe(u,m,S,P,C,T,q,M,L):(N&64||N&128)&&A.process(u,m,S,P,C,T,q,M,L,Ce)}K!=null&&C?Xt(K,u&&u.ref,T,m||u,!m):K==null&&u&&u.ref!=null&&Xt(u.ref,null,T,u,!0)},O=(u,m,S,P)=>{if(u==null)s(m.el=l(m.children),S,P);else{const C=m.el=u.el;m.children!==u.children&&p(C,m.children)}},D=(u,m,S,P)=>{u==null?s(m.el=c(m.children||""),S,P):m.el=u.el},R=(u,m,S,P)=>{[u.el,u.anchor]=j(u.children,m,S,P,u.el,u.anchor)},Z=({el:u,anchor:m},S,P)=>{let C;for(;u&&u!==m;)C=x(u),s(u,S,P),u=C;s(m,S,P)},W=({el:u,anchor:m})=>{let S;for(;u&&u!==m;)S=x(u),i(u),u=S;i(m)},ae=(u,m,S,P,C,T,q,M,L)=>{if(m.type==="svg"?q="svg":m.type==="math"&&(q="mathml"),u==null)ge(m,S,P,C,T,q,M,L);else{const A=u.el&&u.el._isVueCE?u.el:null;try{A&&A._beginPatch(),X(u,m,C,T,q,M,L)}finally{A&&A._endPatch()}}},ge=(u,m,S,P,C,T,q,M)=>{let L,A;const{props:K,shapeFlag:N,transition:z,dirs:ee}=u;if(L=u.el=r(u.type,T,K&&K.is,K),N&8?d(L,u.children):N&16&&fe(u.children,L,null,P,C,Gn(u,T),q,M),ee&&xt(u,null,P,"created"),xe(L,u,u.scopeId,q,P),K){for(const he in K)he!=="value"&&!Gt(he)&&o(L,he,null,K[he],T,P);"value"in K&&o(L,"value",null,K.value,T),(A=K.onVnodeBeforeMount)&&et(A,P,u)}ee&&xt(u,null,P,"beforeMount");const le=fr(C,z);le&&z.beforeEnter(L),s(L,m,S),((A=K&&K.onVnodeMounted)||le||ee)&&Oe(()=>{try{A&&et(A,P,u),le&&z.enter(L),ee&&xt(u,null,P,"mounted")}finally{}},C)},xe=(u,m,S,P,C)=>{if(S&&I(u,S),P)for(let T=0;T<P.length;T++)I(u,P[T]);if(C){let T=C.subTree;if(m===T||xa(T.type)&&(T.ssContent===m||T.ssFallback===m)){const q=C.vnode;xe(u,q,q.scopeId,q.slotScopeIds,C.parent)}}},fe=(u,m,S,P,C,T,q,M,L=0)=>{for(let A=L;A<u.length;A++){const K=u[A]=M?ut(u[A]):it(u[A]);B(null,K,m,S,P,C,T,q,M)}},X=(u,m,S,P,C,T,q)=>{const M=m.el=u.el;let{patchFlag:L,dynamicChildren:A,dirs:K}=m;L|=u.patchFlag&16;const N=u.props||be,z=m.props||be;let ee;if(S&&kt(S,!1),(ee=z.onVnodeBeforeUpdate)&&et(ee,S,m,u),K&&xt(m,u,S,"beforeUpdate"),S&&kt(S,!0),(N.innerHTML&&z.innerHTML==null||N.textContent&&z.textContent==null)&&d(M,""),A?ie(u.dynamicChildren,A,M,S,P,Gn(m,C),T):q||re(u,m,M,null,S,P,Gn(m,C),T,!1),L>0){if(L&16)ce(M,N,z,S,C);else if(L&2&&N.class!==z.class&&o(M,"class",null,z.class,C),L&4&&o(M,"style",N.style,z.style,C),L&8){const le=m.dynamicProps;for(let he=0;he<le.length;he++){const ye=le[he],Te=N[ye],Pe=z[ye];(Pe!==Te||ye==="value")&&o(M,ye,Te,Pe,C,S)}}L&1&&u.children!==m.children&&d(M,m.children)}else!q&&A==null&&ce(M,N,z,S,C);((ee=z.onVnodeUpdated)||K)&&Oe(()=>{ee&&et(ee,S,m,u),K&&xt(m,u,S,"updated")},P)},ie=(u,m,S,P,C,T,q)=>{for(let M=0;M<m.length;M++){const L=u[M],A=m[M],K=L.el&&(L.type===G||!Pt(L,A)||L.shapeFlag&198)?y(L.el):S;B(L,A,K,null,P,C,T,q,!0)}},ce=(u,m,S,P,C)=>{if(m!==S){if(m!==be)for(const T in m)!Gt(T)&&!(T in S)&&o(u,T,m[T],null,C,P);for(const T in S){if(Gt(T))continue;const q=S[T],M=m[T];q!==M&&T!=="value"&&o(u,T,M,q,C,P)}"value"in S&&o(u,"value",m.value,S.value,C)}},F=(u,m,S,P,C,T,q,M,L)=>{const A=m.el=u?u.el:l(""),K=m.anchor=u?u.anchor:l("");let{patchFlag:N,dynamicChildren:z,slotScopeIds:ee}=m;ee&&(M=M?M.concat(ee):ee),u==null?(s(A,S,P),s(K,S,P),fe(m.children||[],S,K,C,T,q,M,L)):N>0&&N&64&&z&&u.dynamicChildren&&u.dynamicChildren.length===z.length?(ie(u.dynamicChildren,z,S,C,T,q,M),(m.key!=null||C&&m===C.subTree)&&ba(u,m,!0)):re(u,m,S,K,C,T,q,M,L)},oe=(u,m,S,P,C,T,q,M,L)=>{m.slotScopeIds=M,u==null?m.shapeFlag&512?C.ctx.activate(m,S,P,q,L):se(m,S,P,C,T,q,L):k(u,m,L)},se=(u,m,S,P,C,T,q)=>{const M=u.component=kr(u,P,C);if(Dn(u)&&(M.ctx.renderer=Ce),Cr(M,!1,q),M.asyncDep){if(C&&C.registerDep(M,_,q),!u.el){const L=M.subTree=Se(De);D(null,L,m,S),u.placeholder=L.el}}else _(M,u,m,S,C,T,q)},k=(u,m,S)=>{const P=m.component=u.component;if(ir(u,m,S))if(P.asyncDep&&!P.asyncResolved){Q(P,m,S);return}else P.next=m,P.update();else m.el=u.el,P.vnode=m},_=(u,m,S,P,C,T,q)=>{const M=()=>{if(u.isMounted){let{next:N,bu:z,u:ee,parent:le,vnode:he}=u;{const Ye=wa(u);if(Ye){N&&(N.el=he.el,Q(u,N,q)),Ye.asyncDep.then(()=>{Oe(()=>{u.isUnmounted||A()},C)});return}}let ye=N,Te;kt(u,!1),N?(N.el=he.el,Q(u,N,q)):N=he,z&&Nn(z),(Te=N.props&&N.props.onVnodeBeforeUpdate)&&et(Te,le,N,he),kt(u,!0);const Pe=zs(u),Qe=u.subTree;u.subTree=Pe,B(Qe,Pe,y(Qe.el),E(Qe),u,C,T),N.el=Pe.el,ye===null&&ar(u,Pe.el),ee&&Oe(ee,C),(Te=N.props&&N.props.onVnodeUpdated)&&Oe(()=>et(Te,le,N,he),C)}else{let N;const{el:z,props:ee}=m,{bm:le,m:he,parent:ye,root:Te,type:Pe}=u,Qe=Qt(m);kt(u,!1),le&&Nn(le),!Qe&&(N=ee&&ee.onVnodeBeforeMount)&&et(N,ye,m),kt(u,!0);{Te.ce&&Te.ce._hasShadowRoot()&&Te.ce._injectChildStyle(Pe,u.parent?u.parent.type:void 0);const Ye=u.subTree=zs(u);B(null,Ye,S,P,u,C,T),m.el=Ye.el}if(he&&Oe(he,C),!Qe&&(N=ee&&ee.onVnodeMounted)){const Ye=m;Oe(()=>et(N,ye,Ye),C)}(m.shapeFlag&256||ye&&Qt(ye.vnode)&&ye.vnode.shapeFlag&256)&&u.a&&Oe(u.a,C),u.isMounted=!0,m=S=P=null}};u.scope.on();const L=u.effect=new _i(M);u.scope.off();const A=u.update=L.run.bind(L),K=u.job=L.runIfDirty.bind(L);K.i=u,K.id=u.uid,L.scheduler=()=>xs(K),kt(u,!0),A()},Q=(u,m,S)=>{m.component=u;const P=u.vnode.props;u.vnode=m,u.next=null,rr(u,m.props,P,S),ur(u,m.children,S),mt(),qs(u),ft()},re=(u,m,S,P,C,T,q,M,L=!1)=>{const A=u&&u.children,K=u?u.shapeFlag:0,N=m.children,{patchFlag:z,shapeFlag:ee}=m;if(z>0){if(z&128){Xe(A,N,S,P,C,T,q,M,L);return}else if(z&256){Fe(A,N,S,P,C,T,q,M,L);return}}ee&8?(K&16&&w(A,C,T),N!==A&&d(S,N)):K&16?ee&16?Xe(A,N,S,P,C,T,q,M,L):w(A,C,T,!0):(K&8&&d(S,""),ee&16&&fe(N,S,P,C,T,q,M,L))},Fe=(u,m,S,P,C,T,q,M,L)=>{u=u||Dt,m=m||Dt;const A=u.length,K=m.length,N=Math.min(A,K);let z;for(z=0;z<N;z++){const ee=m[z]=L?ut(m[z]):it(m[z]);B(u[z],ee,S,null,C,T,q,M,L)}A>K?w(u,C,T,!0,!1,N):fe(m,S,P,C,T,q,M,L,N)},Xe=(u,m,S,P,C,T,q,M,L)=>{let A=0;const K=m.length;let N=u.length-1,z=K-1;for(;A<=N&&A<=z;){const ee=u[A],le=m[A]=L?ut(m[A]):it(m[A]);if(Pt(ee,le))B(ee,le,S,null,C,T,q,M,L);else break;A++}for(;A<=N&&A<=z;){const ee=u[N],le=m[z]=L?ut(m[z]):it(m[z]);if(Pt(ee,le))B(ee,le,S,null,C,T,q,M,L);else break;N--,z--}if(A>N){if(A<=z){const ee=z+1,le=ee<K?m[ee].el:P;for(;A<=z;)B(null,m[A]=L?ut(m[A]):it(m[A]),S,le,C,T,q,M,L),A++}}else if(A>z)for(;A<=N;)_e(u[A],C,T,!0),A++;else{const ee=A,le=A,he=new Map;for(A=le;A<=z;A++){const Ue=m[A]=L?ut(m[A]):it(m[A]);Ue.key!=null&&he.set(Ue.key,A)}let ye,Te=0;const Pe=z-le+1;let Qe=!1,Ye=0;const Ht=new Array(Pe);for(A=0;A<Pe;A++)Ht[A]=0;for(A=ee;A<=N;A++){const Ue=u[A];if(Te>=Pe){_e(Ue,C,T,!0);continue}let Ze;if(Ue.key!=null)Ze=he.get(Ue.key);else for(ye=le;ye<=z;ye++)if(Ht[ye-le]===0&&Pt(Ue,m[ye])){Ze=ye;break}Ze===void 0?_e(Ue,C,T,!0):(Ht[Ze-le]=A+1,Ze>=Ye?Ye=Ze:Qe=!0,B(Ue,m[Ze],S,null,C,T,q,M,L),Te++)}const Is=Qe?hr(Ht):Dt;for(ye=Is.length-1,A=Pe-1;A>=0;A--){const Ue=le+A,Ze=m[Ue],Rs=m[Ue+1],Ls=Ue+1<K?Rs.el||Sa(Rs):P;Ht[A]===0?B(null,Ze,S,Ls,C,T,q,M,L):Qe&&(ye<0||A!==Is[ye]?Ne(Ze,S,Ls,2):ye--)}}},Ne=(u,m,S,P,C=null)=>{const{el:T,type:q,transition:M,children:L,shapeFlag:A}=u;if(A&6){Ne(u.component.subTree,m,S,P);return}if(A&128){u.suspense.move(m,S,P);return}if(A&64){q.move(u,m,S,Ce);return}if(q===G){s(T,m,S);for(let N=0;N<L.length;N++)Ne(L[N],m,S,P);s(u.anchor,m,S);return}if(q===gn){Z(u,m,S);return}if(P!==2&&A&1&&M)if(P===0)M.beforeEnter(T),s(T,m,S),Oe(()=>M.enter(T),C);else{const{leave:N,delayLeave:z,afterLeave:ee}=M,le=()=>{u.ctx.isUnmounted?i(T):s(T,m,S)},he=()=>{T._isLeaving&&T[nt](!0),N(T,()=>{le(),ee&&ee()})};z?z(T,le,he):he()}else s(T,m,S)},_e=(u,m,S,P=!1,C=!1)=>{const{type:T,props:q,ref:M,children:L,dynamicChildren:A,shapeFlag:K,patchFlag:N,dirs:z,cacheIndex:ee,memo:le}=u;if(N===-2&&(C=!1),M!=null&&(mt(),Xt(M,null,S,u,!0),ft()),ee!=null&&(m.renderCache[ee]=void 0),K&256){m.ctx.deactivate(u);return}const he=K&1&&z,ye=!Qt(u);let Te;if(ye&&(Te=q&&q.onVnodeBeforeUnmount)&&et(Te,m,u),K&6)h(u.component,S,P);else{if(K&128){u.suspense.unmount(S,P);return}he&&xt(u,null,m,"beforeUnmount"),K&64?u.type.remove(u,m,S,Ce,P):A&&!A.hasOnce&&(T!==G||N>0&&N&64)?w(A,m,S,!1,!0):(T===G&&N&384||!C&&K&16)&&w(L,m,S),P&&V(u)}const Pe=le!=null&&ee==null;(ye&&(Te=q&&q.onVnodeUnmounted)||he||Pe)&&Oe(()=>{Te&&et(Te,m,u),he&&xt(u,null,m,"unmounted"),Pe&&(u.el=null)},S)},V=u=>{const{type:m,el:S,anchor:P,transition:C}=u;if(m===G){b(S,P);return}if(m===gn){W(u);return}const T=()=>{i(S),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(u.shapeFlag&1&&C&&!C.persisted){const{leave:q,delayLeave:M}=C,L=()=>q(S,T);M?M(u.el,T,L):L()}else T()},b=(u,m)=>{let S;for(;u!==m;)S=x(u),i(u),u=S;i(m)},h=(u,m,S)=>{const{bum:P,scope:C,job:T,subTree:q,um:M,m:L,a:A}=u;Ks(L),Ks(A),P&&Nn(P),C.stop(),T&&(T.flags|=8,_e(q,u,m,S)),M&&Oe(M,m),Oe(()=>{u.isUnmounted=!0},m)},w=(u,m,S,P=!1,C=!1,T=0)=>{for(let q=T;q<u.length;q++)_e(u[q],m,S,P,C)},E=u=>{if(u.shapeFlag&6)return E(u.component.subTree);if(u.shapeFlag&128)return u.suspense.next();const m=x(u.anchor||u.el),S=m&&m[_o];return S?x(S):m};let U=!1;const me=(u,m,S)=>{let P;u==null?m._vnode&&(_e(m._vnode,null,null,!0),P=m._vnode.component):B(m._vnode||null,u,m,null,null,null,S),m._vnode=u,U||(U=!0,qs(P),$i(),U=!1)},Ce={p:B,um:_e,m:Ne,r:V,mt:se,mc:fe,pc:re,pbc:ie,n:E,o:e};return{render:me,hydrate:void 0,createApp:Yo(me)}}function Gn({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function kt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function fr(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function ba(e,t,n=!1){const s=e.children,i=t.children;if(Y(s)&&Y(i))for(let o=0;o<s.length;o++){const r=s[o];let l=i[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[o]=ut(i[o]),l.el=r.el),!n&&l.patchFlag!==-2&&ba(r,l)),l.type===qn&&(l.patchFlag===-1&&(l=i[o]=ut(l)),l.el=r.el),l.type===De&&!l.el&&(l.el=r.el)}}function hr(e){const t=e.slice(),n=[0];let s,i,o,r,l;const c=e.length;for(s=0;s<c;s++){const p=e[s];if(p!==0){if(i=n[n.length-1],e[i]<p){t[s]=i,n.push(s);continue}for(o=0,r=n.length-1;o<r;)l=o+r>>1,e[n[l]]<p?o=l+1:r=l;p<e[n[o]]&&(o>0&&(t[s]=n[o-1]),n[o]=s)}}for(o=n.length,r=n[o-1];o-- >0;)n[o]=r,r=t[r];return n}function wa(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:wa(t)}function Ks(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Sa(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Sa(t.subTree):null}const xa=e=>e.__isSuspense;function gr(e,t){t&&t.pendingBranch?Y(e)?t.effects.push(...e):t.effects.push(e):ko(e)}const G=Symbol.for("v-fgt"),qn=Symbol.for("v-txt"),De=Symbol.for("v-cmt"),gn=Symbol.for("v-stc"),Zt=[];let We=null;function g(e=!1){Zt.push(We=e?null:[])}function yr(){Zt.pop(),We=Zt[Zt.length-1]||null}let an=1;function Cn(e,t=!1){an+=e,e<0&&We&&t&&(We.hasOnce=!0)}function ka(e){return e.dynamicChildren=an>0?We||Dt:null,yr(),an>0&&We&&We.push(e),e}function v(e,t,n,s,i,o){return ka(a(e,t,n,s,i,o,!0))}function Ps(e,t,n,s,i){return ka(Se(e,t,n,s,i,!0))}function Tn(e){return e?e.__v_isVNode===!0:!1}function Pt(e,t){return e.type===t.type&&e.key===t.key}const Ca=({key:e})=>e??null,yn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ke(e)||Re(e)||ne(e)?{i:$e,r:e,k:t,f:!!n}:e:null);function a(e,t=null,n=null,s=0,i=null,o=e===G?0:1,r=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ca(t),ref:t&&yn(t),scopeId:Gi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:$e};return l?(_s(c,n),o&128&&e.normalize(c)):n&&(c.shapeFlag|=ke(n)?8:16),an>0&&!r&&We&&(c.patchFlag>0||o&6)&&c.patchFlag!==32&&We.push(c),c}const Se=vr;function vr(e,t=null,n=null,s=0,i=null,o=!1){if((!e||e===aa)&&(e=De),Tn(e)){const l=wt(e,t,!0);return n&&_s(l,n),an>0&&!o&&We&&(l.shapeFlag&6?We[We.indexOf(e)]=l:We.push(l)),l.patchFlag=-2,l}if(Er(e)&&(e=e.__vccOpts),t){t=br(t);let{class:l,style:c}=t;l&&!ke(l)&&(t.class=J(l)),pe(c)&&(Ss(c)&&!Y(c)&&(c=Ae({},c)),t.style=Ft(c))}const r=ke(e)?1:xa(e)?128:Xi(e)?64:pe(e)?4:ne(e)?2:0;return a(e,t,n,s,i,r,o,!0)}function br(e){return e?Ss(e)||ma(e)?Ae({},e):e:null}function wt(e,t,n=!1,s=!1){const{props:i,ref:o,patchFlag:r,children:l,transition:c}=e,p=t?wr(i||{},t):i,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&Ca(p),ref:t&&t.ref?n&&o?Y(o)?o.concat(yn(t)):[o,yn(t)]:yn(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==G?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&wt(e.ssContent),ssFallback:e.ssFallback&&wt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&s&&sn(d,c.clone(d)),d}function rs(e=" ",t=0){return Se(qn,null,e,t)}function Ut(e,t){const n=Se(gn,null,e);return n.staticCount=t,n}function $(e="",t=!1){return t?(g(),Ps(De,null,e)):Se(De,null,e)}function it(e){return e==null||typeof e=="boolean"?Se(De):Y(e)?Se(G,null,e.slice()):Tn(e)?ut(e):Se(qn,null,String(e))}function ut(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:wt(e)}function _s(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(Y(t))n=16;else if(typeof t=="object")if(s&65){const i=t.default;i&&(i._c&&(i._d=!1),_s(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!ma(t)?t._ctx=$e:i===3&&$e&&($e.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ne(t)?(t={default:t,_ctx:$e},n=32):(t=String(t),s&64?(n=16,t=[rs(t)]):n=8);e.children=t,e.shapeFlag|=n}function wr(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const i in s)if(i==="class")t.class!==s.class&&(t.class=J([t.class,s.class]));else if(i==="style")t.style=Ft([t.style,s.style]);else if(Pn(i)){const o=t[i],r=s[i];r&&o!==r&&!(Y(o)&&o.includes(r))?t[i]=o?[].concat(o,r):r:r==null&&o==null&&!_n(i)&&(t[i]=r)}else i!==""&&(t[i]=s[i])}return t}function et(e,t,n,s=null){Ke(e,t,7,[n,s])}const Sr=la();let xr=0;function kr(e,t,n){const s=e.type,i=(t?t.appContext:e.appContext)||Sr,o={uid:xr++,vnode:e,type:s,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ja(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ha(s,i),emitsOptions:ca(s,i),emit:null,emitted:null,propsDefaults:be,inheritAttrs:s.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=er.bind(null,o),e.ce&&e.ce(o),o}let Ie=null;const Ta=()=>Ie||$e;let An,ls;{const e=Rn(),t=(n,s)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(s),o=>{i.length>1?i.forEach(r=>r(o)):i[0](o)}};An=t("__VUE_INSTANCE_SETTERS__",n=>Ie=n),ls=t("__VUE_SSR_SETTERS__",n=>on=n)}const dn=e=>{const t=Ie;return An(e),e.scope.on(),()=>{e.scope.off(),An(t)}},Xs=()=>{Ie&&Ie.scope.off(),An(null)};function Aa(e){return e.vnode.shapeFlag&4}let on=!1;function Cr(e,t=!1,n=!1){t&&ls(t);const{props:s,children:i}=e.vnode,o=Aa(e);or(e,s,o,t),dr(e,i,n||t);const r=o?Tr(e,t):void 0;return t&&ls(!1),r}function Tr(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,$o);const{setup:s}=n;if(s){mt();const i=e.setupContext=s.length>1?Pr(e):null,o=dn(e),r=cn(s,e,0,[e.props,i]),l=Si(r);if(ft(),o(),(l||e.sp)&&!Qt(e)&&na(e),l){if(r.then(Xs,Xs),t)return r.then(c=>{Qs(e,c)}).catch(c=>{Mn(c,e,0)});e.asyncDep=r}else Qs(e,r)}else Pa(e)}function Qs(e,t,n){ne(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:pe(t)&&(e.setupState=Hi(t)),Pa(e)}function Pa(e,t,n){const s=e.type;e.render||(e.render=s.render||ot);{const i=dn(e);mt();try{zo(e)}finally{ft(),i()}}}const Ar={get(e,t){return Ee(e,"get",""),e[t]}};function Pr(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Ar),slots:e.slots,emit:e.emit,expose:t}}function Es(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Hi(uo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Yt)return Yt[n](e)},has(t,n){return n in t||n in Yt}})):e.proxy}function _r(e,t=!0){return ne(e)?e.displayName||e.name:e.name||t&&e.__name}function Er(e){return ne(e)&&"__vccOpts"in e}const we=(e,t)=>yo(e,t,on);function Ir(e,t,n){try{Cn(-1);const s=arguments.length;return s===2?pe(t)&&!Y(t)?Tn(t)?Se(e,null,[t]):Se(e,t):Se(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Tn(n)&&(n=[n]),Se(e,t,n))}finally{Cn(1)}}const Rr="3.5.32";/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let cs;const Ys=typeof window<"u"&&window.trustedTypes;if(Ys)try{cs=Ys.createPolicy("vue",{createHTML:e=>e})}catch{}const _a=cs?e=>cs.createHTML(e):e=>e,Lr="http://www.w3.org/2000/svg",Mr="http://www.w3.org/1998/Math/MathML",dt=typeof document<"u"?document:null,Zs=dt&&dt.createElement("template"),Dr={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const i=t==="svg"?dt.createElementNS(Lr,e):t==="mathml"?dt.createElementNS(Mr,e):n?dt.createElement(e,{is:n}):dt.createElement(e);return e==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:e=>dt.createTextNode(e),createComment:e=>dt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>dt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,i,o){const r=n?n.previousSibling:t.lastChild;if(i&&(i===o||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===o||!(i=i.nextSibling)););else{Zs.innerHTML=_a(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const l=Zs.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},yt="transition",$t="animation",rn=Symbol("_vtc"),Ea={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Br=Ae({},Qi,Ea),Or=e=>(e.displayName="Transition",e.props=Br,e),ze=Or((e,{slots:t})=>Ir(Ro,qr(e),t)),Ct=(e,t=[])=>{Y(e)?e.forEach(n=>n(...t)):e&&e(...t)},ei=e=>e?Y(e)?e.some(t=>t.length>1):e.length>1:!1;function qr(e){const t={};for(const F in e)F in Ea||(t[F]=e[F]);if(e.css===!1)return t;const{name:n="v",type:s,duration:i,enterFromClass:o=`${n}-enter-from`,enterActiveClass:r=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=o,appearActiveClass:p=r,appearToClass:d=l,leaveFromClass:y=`${n}-leave-from`,leaveActiveClass:x=`${n}-leave-active`,leaveToClass:I=`${n}-leave-to`}=e,j=Fr(i),B=j&&j[0],O=j&&j[1],{onBeforeEnter:D,onEnter:R,onEnterCancelled:Z,onLeave:W,onLeaveCancelled:ae,onBeforeAppear:ge=D,onAppear:xe=R,onAppearCancelled:fe=Z}=t,X=(F,oe,se,k)=>{F._enterCancelled=k,Tt(F,oe?d:l),Tt(F,oe?p:r),se&&se()},ie=(F,oe)=>{F._isLeaving=!1,Tt(F,y),Tt(F,I),Tt(F,x),oe&&oe()},ce=F=>(oe,se)=>{const k=F?xe:R,_=()=>X(oe,F,se);Ct(k,[oe,_]),ti(()=>{Tt(oe,F?c:o),ct(oe,F?d:l),ei(k)||ni(oe,s,B,_)})};return Ae(t,{onBeforeEnter(F){Ct(D,[F]),ct(F,o),ct(F,r)},onBeforeAppear(F){Ct(ge,[F]),ct(F,c),ct(F,p)},onEnter:ce(!1),onAppear:ce(!0),onLeave(F,oe){F._isLeaving=!0;const se=()=>ie(F,oe);ct(F,y),F._enterCancelled?(ct(F,x),ai(F)):(ai(F),ct(F,x)),ti(()=>{F._isLeaving&&(Tt(F,y),ct(F,I),ei(W)||ni(F,s,O,se))}),Ct(W,[F,se])},onEnterCancelled(F){X(F,!1,void 0,!0),Ct(Z,[F])},onAppearCancelled(F){X(F,!0,void 0,!0),Ct(fe,[F])},onLeaveCancelled(F){ie(F),Ct(ae,[F])}})}function Fr(e){if(e==null)return null;if(pe(e))return[Vn(e.enter),Vn(e.leave)];{const t=Vn(e);return[t,t]}}function Vn(e){return Ba(e)}function ct(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[rn]||(e[rn]=new Set)).add(t)}function Tt(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[rn];n&&(n.delete(t),n.size||(e[rn]=void 0))}function ti(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Nr=0;function ni(e,t,n,s){const i=e._endId=++Nr,o=()=>{i===e._endId&&s()};if(n!=null)return setTimeout(o,n);const{type:r,timeout:l,propCount:c}=Ur(e,t);if(!r)return s();const p=r+"end";let d=0;const y=()=>{e.removeEventListener(p,x),o()},x=I=>{I.target===e&&++d>=c&&y()};setTimeout(()=>{d<c&&y()},l+1),e.addEventListener(p,x)}function Ur(e,t){const n=window.getComputedStyle(e),s=j=>(n[j]||"").split(", "),i=s(`${yt}Delay`),o=s(`${yt}Duration`),r=si(i,o),l=s(`${$t}Delay`),c=s(`${$t}Duration`),p=si(l,c);let d=null,y=0,x=0;t===yt?r>0&&(d=yt,y=r,x=o.length):t===$t?p>0&&(d=$t,y=p,x=c.length):(y=Math.max(r,p),d=y>0?r>p?yt:$t:null,x=d?d===yt?o.length:c.length:0);const I=d===yt&&/\b(?:transform|all)(?:,|$)/.test(s(`${yt}Property`).toString());return{type:d,timeout:y,propCount:x,hasTransform:I}}function si(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>ii(n)+ii(e[s])))}function ii(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function ai(e){return(e?e.ownerDocument:document).body.offsetHeight}function Wr(e,t,n){const s=e[rn];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const oi=Symbol("_vod"),Hr=Symbol("_vsh"),jr=Symbol(""),Jr=/(?:^|;)\s*display\s*:/;function $r(e,t,n){const s=e.style,i=ke(n);let o=!1;if(n&&!i){if(t)if(ke(t))for(const r of t.split(";")){const l=r.slice(0,r.indexOf(":")).trim();n[l]==null&&vn(s,l,"")}else for(const r in t)n[r]==null&&vn(s,r,"");for(const r in n)r==="display"&&(o=!0),vn(s,r,n[r])}else if(i){if(t!==n){const r=s[jr];r&&(n+=";"+r),s.cssText=n,o=Jr.test(n)}}else t&&e.removeAttribute("style");oi in e&&(e[oi]=o?s.display:"",e[Hr]&&(s.display="none"))}const ri=/\s*!important$/;function vn(e,t,n){if(Y(n))n.forEach(s=>vn(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=zr(e,t);ri.test(n)?e.setProperty(It(s),n.replace(ri,""),"important"):e[s]=n}}const li=["Webkit","Moz","ms"],Kn={};function zr(e,t){const n=Kn[t];if(n)return n;let s=Be(t);if(s!=="filter"&&s in e)return Kn[t]=s;s=In(s);for(let i=0;i<li.length;i++){const o=li[i]+s;if(o in e)return Kn[t]=o}return t}const ci="http://www.w3.org/1999/xlink";function di(e,t,n,s,i,o=Wa(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(ci,t.slice(6,t.length)):e.setAttributeNS(ci,t,n):n==null||o&&!Ti(n)?e.removeAttribute(t):e.setAttribute(t,o?"":rt(n)?String(n):n)}function ui(e,t,n,s,i){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?_a(n):n);return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const l=o==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let r=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Ti(n):n==null&&l==="string"?(n="",r=!0):l==="number"&&(n=0,r=!0)}try{e[t]=n}catch{}r&&e.removeAttribute(i||t)}function Gr(e,t,n,s){e.addEventListener(t,n,s)}function Vr(e,t,n,s){e.removeEventListener(t,n,s)}const pi=Symbol("_vei");function Kr(e,t,n,s,i=null){const o=e[pi]||(e[pi]={}),r=o[t];if(s&&r)r.value=s;else{const[l,c]=Xr(t);if(s){const p=o[t]=Zr(s,i);Gr(e,l,p,c)}else r&&(Vr(e,l,r,c),o[t]=void 0)}}const mi=/(?:Once|Passive|Capture)$/;function Xr(e){let t;if(mi.test(e)){t={};let s;for(;s=e.match(mi);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):It(e.slice(2)),t]}let Xn=0;const Qr=Promise.resolve(),Yr=()=>Xn||(Qr.then(()=>Xn=0),Xn=Date.now());function Zr(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ke(el(s,n.value),t,5,[s])};return n.value=e,n.attached=Yr(),n}function el(e,t){if(Y(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>i=>!i._stopped&&s&&s(i))}else return t}const fi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,tl=(e,t,n,s,i,o)=>{const r=i==="svg";t==="class"?Wr(e,s,r):t==="style"?$r(e,n,s):Pn(t)?_n(t)||Kr(e,t,n,s,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):nl(e,t,s,r))?(ui(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&di(e,t,s,r,o,t!=="value")):e._isVueCE&&(sl(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!ke(s)))?ui(e,Be(t),s,o,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),di(e,t,s,r))};function nl(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&fi(t)&&ne(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return fi(t)&&ke(n)?!1:t in e}function sl(e,t){const n=e._def.props;if(!n)return!1;const s=Be(t);return Array.isArray(n)?n.some(i=>Be(i)===s):Object.keys(n).some(i=>Be(i)===s)}const il=["ctrl","shift","alt","meta"],al={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>il.some(n=>e[`${n}Key`]&&!t.includes(n))},St=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),s=t.join(".");return n[s]||(n[s]=(i,...o)=>{for(let r=0;r<t.length;r++){const l=al[t[r]];if(l&&l(i,t))return}return e(i,...o)})},ol=Ae({patchProp:tl},Dr);let hi;function rl(){return hi||(hi=pr(ol))}const ll=(...e)=>{const t=rl().createApp(...e),{mount:n}=t;return t.mount=s=>{const i=dl(s);if(!i)return;const o=t._component;!ne(o)&&!o.render&&!o.template&&(o.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const r=n(i,!1,cl(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),r},t};function cl(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function dl(e){return ke(e)?document.querySelector(e):e}const ul={"Task 1: Introduction to Selenium":{title:"Introduction to Selenium",description:`Selenium is the most widely used open-source test automation framework for web applications. It allows testers and developers to automate browser interactions, simulating real user behavior across different browsers and operating systems.

Selenium Suite consists of four main components:

1. Selenium IDE
   - Browser extension for Chrome and Firefox
   - Record and playback functionality
   - Good for beginners and quick test creation
   - Exports tests in multiple languages

2. Selenium WebDriver
   - Core component for browser automation
   - Direct communication with browser using native support
   - Supports Java, Python, C#, JavaScript, Ruby
   - No server needed (unlike Selenium RC)

3. Selenium Grid
   - Enables parallel test execution
   - Run tests on multiple machines and browsers simultaneously
   - Hub and Node architecture
   - Reduces overall test execution time

4. Selenium RC (Deprecated)
   - Old version, replaced by WebDriver
   - Required a server to run tests

Why Selenium?
   - Free and open-source
   - Supports all major browsers
   - Large community support
   - Integrates with TestNG, JUnit, Maven, Jenkins, Docker`,keyPoints:["Selenium WebDriver directly controls browsers without needing a server","Supports Chrome, Firefox, Safari, Edge, Opera browsers","Works with Java, Python, C#, JavaScript, Ruby, Kotlin","Selenium 4 is W3C standardized - more stable cross-browser behavior","Cannot automate desktop applications or CAPTCHA","Best used with TestNG or JUnit for test management"],exercises:[{id:1,title:"Explore Selenium IDE",scenario:"Install Selenium IDE as a Chrome extension, record a simple Google search and play it back to understand how Selenium works before writing code.",steps:["Go to Chrome Web Store and search 'Selenium IDE'","Install the extension and open it","Click 'Record a new test in a new project'","Name your project 'My First Test'","Navigate to https://www.google.com","Type 'Selenium WebDriver' in search box and press Enter","Stop recording and click Play button","Observe the recorded steps in IDE"],code:`// Selenium IDE exports this as Java code:
driver.get("https://www.google.com");
driver.findElement(By.name("q")).sendKeys("Selenium WebDriver");
driver.findElement(By.name("q")).sendKeys(Keys.ENTER);`},{id:2,title:"Understand Selenium Architecture",scenario:"Research and document the flow of how a Selenium test communicates with a browser. Draw the architecture: Test Code → WebDriver API → Browser Driver → Browser.",steps:["Test code calls Selenium WebDriver API methods","WebDriver converts calls to W3C WebDriver Protocol (JSON over HTTP)","Browser-specific driver (ChromeDriver) receives the commands","ChromeDriver communicates with Chrome browser natively","Browser executes the action and returns response","Response travels back through the same chain"],code:`// This single line triggers the entire communication chain:
driver.findElement(By.id("username")).sendKeys("admin");

// Flow:
// 1. Java code calls sendKeys()
// 2. WebDriver sends HTTP POST to ChromeDriver
// 3. ChromeDriver finds element in Chrome
// 4. Chrome types the text
// 5. Success response returned`}]},"Task 2: Environment Setup":{title:"Setting Up Selenium Environment",description:`Proper environment setup is the foundation of any Selenium project. A well-configured project ensures smooth test execution and easy maintenance.

Required Tools:

1. Java JDK (Java Development Kit)
   - Version 11 or higher recommended
   - Set JAVA_HOME environment variable
   - Verify: java -version in terminal

2. IDE (Integrated Development Environment)
   - IntelliJ IDEA (recommended) or Eclipse
   - Provides code completion, debugging

3. Maven (Build Tool)
   - Manages project dependencies via pom.xml
   - Downloads Selenium JAR files automatically
   - Verify: mvn -version in terminal

4. Browser + Browser Driver
   - Chrome + ChromeDriver (must match versions)
   - Selenium 4.6+ includes Selenium Manager (auto driver management)
   - Alternative: WebDriverManager library

5. TestNG (Testing Framework)
   - Adds test annotations, grouping, reporting
   - Install TestNG plugin in IntelliJ

Maven Dependencies needed in pom.xml:
   - selenium-java
   - testng
   - webdrivermanager (optional but recommended)`,keyPoints:["Java and Maven must be installed and added to PATH","ChromeDriver version must match installed Chrome browser version","Selenium 4.6+ includes Selenium Manager for automatic driver management","WebDriverManager library auto-downloads correct driver version","Always use latest stable Selenium version","Set up .gitignore to exclude target/ and .idea/ folders"],exercises:[{id:1,title:"Create Maven Selenium Project",scenario:"Create a new Maven project in IntelliJ IDEA with all necessary Selenium and TestNG dependencies configured in pom.xml.",steps:["Open IntelliJ → New Project → Maven Archetype","GroupId: com.automation, ArtifactId: selenium-project","Open pom.xml and add selenium-java dependency","Add testng dependency","Add webdrivermanager dependency","Click 'Load Maven Changes' (elephant icon)","Create folder structure: src/test/java/tests"],code:`<dependencies>
  <!-- Selenium WebDriver -->
  <dependency>
    <groupId>org.seleniumhq.selenium</groupId>
    <artifactId>selenium-java</artifactId>
    <version>4.15.0</version>
  </dependency>

  <!-- TestNG -->
  <dependency>
    <groupId>org.testng</groupId>
    <artifactId>testng</artifactId>
    <version>7.8.0</version>
    <scope>test</scope>
  </dependency>

  <!-- WebDriverManager -->
  <dependency>
    <groupId>io.github.bonigarcia</groupId>
    <artifactId>webdrivermanager</artifactId>
    <version>5.6.3</version>
  </dependency>
</dependencies>`},{id:2,title:"Write First Selenium Test",scenario:"Write your first Selenium test that opens a browser, navigates to google.com, verifies the title, and closes the browser.",steps:["Create class FirstTest.java in tests package","Setup WebDriverManager for Chrome","Create ChromeDriver instance","Navigate to https://www.google.com","Print and assert the page title","Close the browser using quit()"],code:`import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.*;

public class FirstTest {
    WebDriver driver;

    @BeforeMethod
    public void setup() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.manage().window().maximize();
    }

    @Test
    public void verifyGoogleTitle() {
        driver.get("https://www.google.com");
        String title = driver.getTitle();
        System.out.println("Page Title: " + title);
        Assert.assertEquals(title, "Google");
    }

    @AfterMethod
    public void teardown() {
        driver.quit();
    }
}`}]},"Task 3: Locators & Strategies":{title:"Locators & Locator Strategies",description:`Locators are the backbone of Selenium automation. They identify web elements on a page so Selenium can interact with them. Choosing the right locator is critical for test stability and performance.

Types of Locators (Best to Least Preferred):

1. ID Locator
   - Fastest and most reliable
   - Should be unique on a page
   - Example: By.id("username")

2. Name Locator
   - Uses the 'name' HTML attribute
   - Common for form elements
   - Example: By.name("email")

3. CSS Selector
   - Very fast, flexible, widely used
   - Supports partial matching
   - Example: By.cssSelector("input.login-btn")

4. XPath
   - Most powerful, can traverse the entire DOM
   - Can select by text, attributes, parent/child
   - Absolute XPath: /html/body/div/input (AVOID)
   - Relative XPath: //input[@id='user'] (USE THIS)

5. ClassName
   - Uses CSS class name
   - Avoid if multiple classes applied

6. TagName
   - Selects by HTML tag (div, input, button)
   - Useful for getting all elements of a type

7. LinkText / PartialLinkText
   - Only for anchor <a> tags
   - LinkText: exact match, PartialLinkText: partial

XPath Special Functions:
   - contains(): //input[contains(@id,'user')]
   - starts-with(): //div[starts-with(@class,'nav')]
   - text(): //button[text()='Submit']
   - normalize-space(): handles whitespace`,keyPoints:["Prefer ID > Name > CSS Selector > XPath for performance","Never use absolute XPath - it breaks with any UI change","Use contains() in XPath for dynamic/partial attribute values","CSS Selector cannot traverse up DOM (no parent selection)","XPath axes: parent, child, following-sibling, preceding-sibling","Use browser DevTools (F12) to test locators before coding","Right-click element → Inspect → Ctrl+F to test XPath/CSS in DevTools"],exercises:[{id:1,title:"Practice All Locator Types",scenario:"On https://www.selenium.dev/selenium/web/inputs.html, find various elements using all 8 types of locators and interact with them.",steps:["Open the Selenium inputs test page","Find email field using By.id()","Find checkbox using By.name()","Find submit button using By.cssSelector()","Find password field using By.xpath()","Find all input elements using By.tagName()","Print count of all input elements found"],code:`driver.get("https://www.selenium.dev/selenium/web/inputs.html");

// By ID
WebElement emailField = driver.findElement(By.id("email"));
emailField.sendKeys("test@email.com");

// By Name
WebElement checkbox = driver.findElement(By.name("checkbox"));

// By CSS Selector
WebElement submitBtn = driver.findElement(By.cssSelector("input[type='submit']"));

// By XPath
WebElement passwordField = driver.findElement(By.xpath("//input[@type='password']"));

// By TagName - find all inputs
List<WebElement> allInputs = driver.findElements(By.tagName("input"));
System.out.println("Total inputs found: " + allInputs.size());`},{id:2,title:"Dynamic XPath with contains() and text()",scenario:"Practice writing XPath for dynamic elements where IDs change. Use contains(), starts-with(), and text() functions.",steps:["Use contains() to find element with partial ID","Use starts-with() to find element whose attribute starts with a value","Use text() to find button by its visible text","Use following-sibling to find next element","Use parent:: to navigate to parent element"],code:`// contains() - when ID is dynamic like 'user_123_field'
WebElement el1 = driver.findElement(By.xpath("//*[contains(@id,'user')]"));

// starts-with() - attribute starts with 'nav'
WebElement el2 = driver.findElement(By.xpath("//div[starts-with(@class,'nav')]"));

// text() - find by visible text
WebElement loginBtn = driver.findElement(By.xpath("//button[text()='Login']"));

// normalize-space() - handles extra whitespace
WebElement el3 = driver.findElement(By.xpath("//span[normalize-space()='Submit']"));

// Sibling - find next sibling of an element
WebElement sibling = driver.findElement(By.xpath("//label[@for='email']/following-sibling::input"));

// Parent traversal
WebElement parent = driver.findElement(By.xpath("//input[@id='email']/parent::div"));`},{id:3,title:"CSS Selector Advanced Techniques",scenario:"Master CSS selectors including attribute selectors, pseudo-classes, and combinators for robust element identification.",steps:["Use attribute selector to find input by type","Use class and ID combination selector","Use child combinator (>) to find direct children","Use nth-child to find specific table row","Use attribute contains (*=) for partial match"],code:`// Attribute selector
WebElement emailInput = driver.findElement(By.cssSelector("input[type='email']"));

// Class selector
WebElement btn = driver.findElement(By.cssSelector(".btn-primary"));

// ID + class combination
WebElement el = driver.findElement(By.cssSelector("#loginForm .submit-btn"));

// Direct child
WebElement directChild = driver.findElement(By.cssSelector("div.container > input"));

// nth-child - 2nd row of table
WebElement secondRow = driver.findElement(By.cssSelector("table tr:nth-child(2)"));

// Attribute contains
WebElement partial = driver.findElement(By.cssSelector("[class*='nav-item']"));

// Attribute starts with
WebElement startsWith = driver.findElement(By.cssSelector("[id^='user']"));

// Attribute ends with
WebElement endsWith = driver.findElement(By.cssSelector("[id$='_field']"));`}]},"Task 4: Browser Interactions":{title:"Browser Interactions & Navigation",description:`Selenium WebDriver provides extensive methods to interact with the browser itself, not just elements. Understanding browser-level operations is essential for comprehensive automation.

Navigation Commands:
   - driver.get(url) - Navigate to URL, waits for page load
   - driver.navigate().to(url) - Same as get()
   - driver.navigate().back() - Browser back button
   - driver.navigate().forward() - Browser forward button
   - driver.navigate().refresh() - Refresh page

Browser Information:
   - driver.getTitle() - Get page title
   - driver.getCurrentUrl() - Get current URL
   - driver.getPageSource() - Get full HTML source
   - driver.getWindowHandle() - Current window ID
   - driver.getWindowHandles() - All open window IDs

Browser Window Management:
   - driver.manage().window().maximize()
   - driver.manage().window().minimize()
   - driver.manage().window().fullscreen()
   - driver.manage().window().setSize(new Dimension(1280,720))

Cookies Management:
   - driver.manage().getCookies() - Get all cookies
   - driver.manage().addCookie(cookie) - Add cookie
   - driver.manage().deleteCookieNamed(name)
   - driver.manage().deleteAllCookies()`,keyPoints:["driver.get() waits for page load complete, navigate().to() does not guarantee this","Always maximize browser window to avoid element visibility issues","driver.close() closes current window, driver.quit() closes all and ends session","Page source can be used to verify content without finding elements","Cookies can be used to maintain login sessions between tests"],exercises:[{id:1,title:"Browser Navigation Operations",scenario:"Practice navigating between multiple pages using browser navigation methods and verify URLs at each step.",steps:["Navigate to https://www.example.com","Print the page title and URL","Navigate to https://www.google.com","Use navigate().back() to go to example.com","Use navigate().forward() to go back to google","Refresh the current page","Verify URL after each navigation"],code:`driver.get("https://www.example.com");
System.out.println("Title: " + driver.getTitle());
System.out.println("URL: " + driver.getCurrentUrl());

driver.navigate().to("https://www.google.com");
Assert.assertTrue(driver.getCurrentUrl().contains("google"));

driver.navigate().back();
Assert.assertTrue(driver.getCurrentUrl().contains("example"));

driver.navigate().forward();
Assert.assertTrue(driver.getCurrentUrl().contains("google"));

driver.navigate().refresh();
System.out.println("After refresh: " + driver.getTitle());`},{id:2,title:"Window and Cookie Management",scenario:"Learn to manage browser windows size and handle cookies for session management in tests.",steps:["Maximize browser window","Set specific window size to 1280x720","Navigate to a site and capture cookies","Print all cookie names and values","Delete a specific cookie","Verify cookie deletion"],code:`// Window management
driver.manage().window().maximize();
driver.manage().window().setSize(new Dimension(1280, 720));
Dimension size = driver.manage().window().getSize();
System.out.println("Width: " + size.width + " Height: " + size.height);

driver.get("https://www.google.com");

// Get all cookies
Set<Cookie> cookies = driver.manage().getCookies();
for (Cookie cookie : cookies) {
    System.out.println(cookie.getName() + " = " + cookie.getValue());
}

// Add custom cookie
Cookie myCookie = new Cookie("testCookie", "testValue");
driver.manage().addCookie(myCookie);

// Delete specific cookie
driver.manage().deleteCookieNamed("testCookie");
System.out.println("Cookie deleted");

// Delete all cookies
driver.manage().deleteAllCookies();`}]},"Task 5: WebElement Interactions":{title:"WebElement Interactions",description:`WebElement is the core interface representing an HTML element. Every interaction with a web page element goes through WebElement methods.

Common WebElement Methods:

Input Operations:
   - sendKeys(text) - Type text into field
   - clear() - Clear existing text
   - sendKeys(Keys.ENTER) - Press keyboard keys
   - sendKeys(Keys.TAB) - Tab to next field

Click Operations:
   - click() - Click on element
   - submit() - Submit a form

Element Information:
   - getText() - Get visible text
   - getAttribute(name) - Get attribute value
   - getCssValue(property) - Get CSS property value
   - getTagName() - Get HTML tag name
   - getRect() - Get size and location

Element State:
   - isDisplayed() - Is element visible?
   - isEnabled() - Is element enabled/clickable?
   - isSelected() - Is checkbox/radio selected?

Special Inputs:
   - Checkboxes: click() to toggle, isSelected() to verify
   - Radio buttons: click() to select
   - File upload: sendKeys('/path/to/file')
   - Date picker: sendKeys('2024-01-15') or use JS`,keyPoints:["Always clear() field before sendKeys() to avoid appending to existing text","isDisplayed() returns false for hidden elements even if in DOM","getAttribute('value') gets current input field value","getAttribute('innerHTML') gets inner HTML content","Use Keys class for special keyboard actions (ENTER, TAB, BACKSPACE)","getText() returns empty string for hidden elements"],exercises:[{id:1,title:"Form Interactions",scenario:"Fill out a complete registration form with text inputs, checkboxes, and radio buttons on https://demoqa.com/automation-practice-form",steps:["Navigate to the practice form","Enter first name and last name","Enter email address","Select gender radio button","Enter mobile number","Check a hobby checkbox","Verify all entered values using getAttribute('value')"],code:`driver.get("https://demoqa.com/automation-practice-form");

// Text inputs
WebElement firstName = driver.findElement(By.id("firstName"));
firstName.clear();
firstName.sendKeys("John");

driver.findElement(By.id("lastName")).sendKeys("Doe");
driver.findElement(By.id("userEmail")).sendKeys("john@email.com");
driver.findElement(By.id("userNumber")).sendKeys("9876543210");

// Radio button
driver.findElement(By.xpath("//label[text()='Male']")).click();

// Checkbox
WebElement sportsCheckbox = driver.findElement(By.xpath("//label[text()='Sports']"));
if (!sportsCheckbox.isSelected()) {
    sportsCheckbox.click();
}

// Verify values
String enteredName = firstName.getAttribute("value");
System.out.println("Entered: " + enteredName);
Assert.assertEquals(enteredName, "John");`},{id:2,title:"Element State Verification",scenario:"Practice verifying element states - visible, enabled, selected - before and after interactions.",steps:["Check if element is displayed before interacting","Check if button is enabled before clicking","Verify checkbox is not selected initially","Click checkbox and verify it is selected","Disable a field using JavaScript and verify isEnabled()","Print element tag name, text, and CSS color"],code:`driver.get("https://demoqa.com/automation-practice-form");

WebElement emailField = driver.findElement(By.id("userEmail"));

// State checks
System.out.println("Is Displayed: " + emailField.isDisplayed());
System.out.println("Is Enabled: " + emailField.isEnabled());
System.out.println("Tag Name: " + emailField.getTagName());

// Checkbox state
WebElement checkbox = driver.findElement(By.id("hobbies-checkbox-1"));
System.out.println("Initially selected: " + checkbox.isSelected());
checkbox.click();
System.out.println("After click selected: " + checkbox.isSelected());
Assert.assertTrue(checkbox.isSelected());

// CSS Value
WebElement heading = driver.findElement(By.tagName("h1"));
System.out.println("Font size: " + heading.getCssValue("font-size"));
System.out.println("Color: " + heading.getCssValue("color"));`}]},"Task 6: Waits in Selenium":{title:"Waits - Implicit, Explicit & Fluent",description:`Waits are one of the most critical concepts in Selenium. Modern web applications are dynamic - elements load asynchronously with AJAX, animations, and API calls. Without proper waits, tests fail intermittently with NoSuchElementException or ElementNotInteractableException.

Types of Waits:

1. Implicit Wait
   - Global timeout applied to ALL findElement calls
   - Set once, applies throughout driver session
   - Polls the DOM at regular intervals until timeout
   - driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10))
   - Drawback: always waits maximum time even if element found early

2. Explicit Wait
   - Waits for SPECIFIC condition on SPECIFIC element
   - Uses WebDriverWait + ExpectedConditions
   - Much more flexible and reliable
   - Stops waiting as soon as condition is met
   - ExpectedConditions: visibilityOf, elementToBeClickable, presenceOfElement, etc.

3. Fluent Wait
   - Advanced explicit wait
   - Define polling interval (check every X milliseconds)
   - Ignore specific exceptions during wait
   - Useful for elements that appear and disappear

4. Thread.sleep() - AVOID IN PRODUCTION
   - Hard-coded pause regardless of element state
   - Makes tests slow and unreliable
   - Only use for debugging

Best Practices:
   - NEVER mix implicit and explicit waits
   - Use explicit wait for dynamic elements
   - Set a global implicit wait as baseline
   - Prefer elementToBeClickable over visibilityOfElement for buttons`,keyPoints:["NEVER use Thread.sleep() in real tests - it wastes time unconditionally","Mixing implicit and explicit waits causes unpredictable behavior","elementToBeClickable waits for both visible AND enabled","visibilityOfElementLocated waits for element to be visible in viewport","presenceOfElementLocated only checks if element is in DOM (may not be visible)","Fluent wait is best for elements with loading spinners or animations","Default polling interval for WebDriverWait is 500 milliseconds"],exercises:[{id:1,title:"Implement Explicit Wait",scenario:"On https://demoqa.com/dynamic-properties, elements appear after a delay. Use explicit wait to handle these dynamic elements.",steps:["Navigate to dynamic properties page","Create WebDriverWait with 10 second timeout","Wait for button that appears after 5 seconds","Wait for button that becomes enabled after delay","Wait for element color to change","Click each element after condition is satisfied"],code:`driver.get("https://demoqa.com/dynamic-properties");
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

// Wait for element to be visible
WebElement visibleAfterDelay = wait.until(
    ExpectedConditions.visibilityOfElementLocated(By.id("visibleAfter"))
);
System.out.println("Element visible: " + visibleAfterDelay.getText());

// Wait for element to be clickable (visible + enabled)
WebElement enableAfterDelay = wait.until(
    ExpectedConditions.elementToBeClickable(By.id("enableAfter"))
);
enableAfterDelay.click();

// Wait for URL to contain specific text
wait.until(ExpectedConditions.urlContains("dynamic-properties"));

// Wait for title
wait.until(ExpectedConditions.titleContains("DEMOQA"));

// Wait for element text to change
wait.until(ExpectedConditions.textToBePresentInElementLocated(
    By.id("colorChange"), "Color Change"
));`},{id:2,title:"Fluent Wait Implementation",scenario:"Use Fluent Wait to handle a loading spinner that appears before content loads, with custom polling interval.",steps:["Create FluentWait with 15 second timeout","Set polling interval to every 2 seconds","Ignore NoSuchElementException during polling","Wait for loading spinner to disappear","Wait for actual content to appear","Compare performance with Thread.sleep()"],code:`// Fluent Wait setup
Wait<WebDriver> fluentWait = new FluentWait<>(driver)
    .withTimeout(Duration.ofSeconds(15))
    .pollingEvery(Duration.ofSeconds(2))
    .ignoring(NoSuchElementException.class)
    .ignoring(StaleElementReferenceException.class);

// Wait for spinner to disappear
fluentWait.until(driver -> {
    List<WebElement> spinners = driver.findElements(By.className("loading-spinner"));
    return spinners.isEmpty() || !spinners.get(0).isDisplayed();
});

// Wait for content using custom condition
WebElement content = fluentWait.until(driver -> {
    WebElement el = driver.findElement(By.id("content"));
    return el.isDisplayed() ? el : null;
});

System.out.println("Content loaded: " + content.getText());`}]},"Task 7: Dropdowns & Select":{title:"Handling Dropdowns",description:`Dropdowns are common UI elements in web forms. Selenium handles them differently based on their HTML implementation.

Types of Dropdowns:

1. HTML Select Element (<select> tag)
   - Native browser dropdown
   - Handled by Selenium's Select class
   - Most reliable to automate

2. Custom Dropdowns
   - Built with div, ul, li tags
   - Styled to look like dropdowns
   - Need to click to open, then click option
   - Common in modern React/Angular apps

3. Multi-Select Dropdowns
   - <select multiple> attribute
   - Can select multiple options
   - Use selectByVisibleText() multiple times
   - Use deselectAll() to clear selections

Select Class Methods:
   - selectByVisibleText(text) - Select by visible option text
   - selectByValue(value) - Select by value attribute
   - selectByIndex(index) - Select by position (0-based)
   - getFirstSelectedOption() - Get currently selected
   - getOptions() - Get all available options
   - getAllSelectedOptions() - Get all selected (multi-select)
   - deselectAll() - Deselect all (multi-select only)
   - deselectByVisibleText(text)`,keyPoints:["Select class only works with HTML <select> elements","For custom dropdowns: click to open, then click the option","getOptions().size() tells you total number of options","Always verify selection after selecting using getFirstSelectedOption()","selectByIndex(0) selects first option, useful for resetting dropdown","Use isMultiple() to check if dropdown supports multi-select"],exercises:[{id:1,title:"Select Class Operations",scenario:"On https://demoqa.com/select-menu, practice all Select class methods with the standard select dropdown.",steps:["Find the select element on the page","Create Select object wrapping the element","Select 'Volvo' by visible text","Verify selection using getFirstSelectedOption()","Print all available options","Select by index (second option)","Select by value attribute"],code:`driver.get("https://demoqa.com/select-menu");

// Standard select dropdown
WebElement selectElement = driver.findElement(By.id("oldSelectMenu"));
Select select = new Select(selectElement);

// Select by visible text
select.selectByVisibleText("Blue");
System.out.println("Selected: " + select.getFirstSelectedOption().getText());

// Select by index
select.selectByIndex(1);
System.out.println("Selected by index: " + select.getFirstSelectedOption().getText());

// Select by value
select.selectByValue("3");
System.out.println("Selected by value: " + select.getFirstSelectedOption().getText());

// Get all options
List<WebElement> options = select.getOptions();
System.out.println("Total options: " + options.size());
for (WebElement option : options) {
    System.out.println("Option: " + option.getText());
}

// Check if multi-select
System.out.println("Is Multiple: " + select.isMultiple());`},{id:2,title:"Handle Custom Dropdown",scenario:"Handle a custom React/Angular dropdown that is built with div elements instead of native select tag.",steps:["Identify the custom dropdown trigger element","Click to open the dropdown","Wait for dropdown options to appear","Find and click the desired option","Verify the selected value is displayed"],code:`driver.get("https://demoqa.com/select-menu");
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

// Click to open custom dropdown
WebElement dropdownTrigger = driver.findElement(By.id("react-select-2-input"));
dropdownTrigger.click();

// Wait for options to appear
wait.until(ExpectedConditions.visibilityOfElementLocated(
    By.className("react-select__menu")
));

// Click specific option
WebElement option = driver.findElement(
    By.xpath("//div[contains(@class,'option') and text()='Group 1, option 1']"));
option.click();

// Verify selection
WebElement selectedValue = driver.findElement(
    By.className("react-select__single-value"));
System.out.println("Selected: " + selectedValue.getText());
Assert.assertEquals(selectedValue.getText(), "Group 1, option 1");`}]},"Task 8: Alerts & Popups":{title:"Handling Alerts, Popups & Frames",description:`Web applications often display alerts, confirmation dialogs, and prompts. Selenium provides the Alert interface to handle these JavaScript-based dialogs.

Types of Alerts:

1. Simple Alert
   - Just an OK button
   - Used to display information
   - Handle: alert.accept()

2. Confirmation Alert
   - OK and Cancel buttons
   - Used to confirm actions
   - Accept: alert.accept()
   - Dismiss: alert.dismiss()

3. Prompt Alert
   - Text input field + OK + Cancel
   - Used to collect user input
   - Enter text: alert.sendKeys(text)
   - Then accept or dismiss

Alert Methods:
   - driver.switchTo().alert() - Switch to alert
   - alert.getText() - Get alert message
   - alert.accept() - Click OK
   - alert.dismiss() - Click Cancel
   - alert.sendKeys(text) - Enter text in prompt

Frames/iFrames:
   - Frames are HTML documents within documents
   - Must switch context to interact with elements inside
   - switchTo().frame(index/name/element)
   - switchTo().defaultContent() - Return to main page
   - switchTo().parentFrame() - Go one level up

Browser Windows & Tabs:
   - New window/tab opens with new handle
   - driver.getWindowHandles() returns Set of all handles
   - switchTo().window(handle) to switch context`,keyPoints:["Must switch to alert before performing any action on it","NoAlertPresentException thrown if no alert is present","Use explicit wait with alertIsPresent() condition for async alerts","Always switch back to defaultContent() after working inside frame","Cannot interact with elements inside frame without switching first","Window handles are not guaranteed in any specific order"],exercises:[{id:1,title:"Handle All Alert Types",scenario:"On https://demoqa.com/alerts, handle simple alert, confirmation alert, and prompt alert.",steps:["Click button to trigger simple alert","Switch to alert and read the message","Accept the simple alert","Trigger confirmation dialog","Dismiss the confirmation","Trigger prompt alert","Send text to prompt and accept"],code:`driver.get("https://demoqa.com/alerts");
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(5));

// Simple Alert
driver.findElement(By.id("alertButton")).click();
Alert simpleAlert = wait.until(ExpectedConditions.alertIsPresent());
System.out.println("Alert Text: " + simpleAlert.getText());
simpleAlert.accept();

// Confirmation Alert
driver.findElement(By.id("confirmButton")).click();
Alert confirmAlert = driver.switchTo().alert();
System.out.println("Confirm Text: " + confirmAlert.getText());
confirmAlert.dismiss(); // Click Cancel

// Check result
String result = driver.findElement(By.id("confirmResult")).getText();
Assert.assertEquals(result, "You selected Cancel");

// Prompt Alert
driver.findElement(By.id("promtButton")).click();
Alert promptAlert = driver.switchTo().alert();
System.out.println("Prompt Text: " + promptAlert.getText());
prompAlert.sendKeys("John Doe");
prompAlert.accept();

// Verify prompt result
String promptResult = driver.findElement(By.id("promptResult")).getText();
System.out.println("Prompt Result: " + promptResult);`},{id:2,title:"Switch Between Multiple Windows",scenario:"Handle a scenario where clicking a link opens a new browser tab, perform actions in new tab, then return to original.",steps:["Get current window handle before clicking","Click a link that opens new tab","Get all window handles","Switch to new window","Perform actions in new window","Close new window","Switch back to original window"],code:`driver.get("https://demoqa.com/browser-windows");

// Store original window handle
String originalWindow = driver.getWindowHandle();
System.out.println("Original window: " + originalWindow);

// Open new window
driver.findElement(By.id("windowButton")).click();

// Wait for new window
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(5));
wait.until(ExpectedConditions.numberOfWindowsToBe(2));

// Switch to new window
for (String handle : driver.getWindowHandles()) {
    if (!handle.equals(originalWindow)) {
        driver.switchTo().window(handle);
        break;
    }
}

// Actions in new window
System.out.println("New window title: " + driver.getTitle());
String newWindowText = driver.findElement(By.id("sampleHeading")).getText();
System.out.println("New window content: " + newWindowText);

// Close new window and return
driver.close();
driver.switchTo().window(originalWindow);
System.out.println("Back to: " + driver.getTitle());`}]},"Task 9: Actions Class":{title:"Actions Class - Mouse & Keyboard",description:`The Actions class in Selenium enables complex user gesture simulations that cannot be performed with simple click() and sendKeys() methods.

Mouse Actions:
   - moveToElement(element) - Hover over element
   - click(element) - Click at element position
   - doubleClick(element) - Double click
   - contextClick(element) - Right click
   - clickAndHold(element) - Press and hold
   - release() - Release held button
   - dragAndDrop(source, target) - Drag and drop
   - dragAndDropBy(element, xOffset, yOffset)
   - moveByOffset(x, y) - Move mouse by coordinates

Keyboard Actions:
   - sendKeys(Keys.CONTROL + "a") - Keyboard shortcut
   - keyDown(Keys.SHIFT) - Press and hold key
   - keyUp(Keys.SHIFT) - Release held key
   - sendKeys(element, text) - Type in element

Chaining Actions:
   - All actions can be chained
   - Must call build().perform() to execute
   - Or just perform() which implies build()

Common Use Cases:
   - Hover menus that reveal on mouse over
   - Drag and drop UI elements
   - Rich text editors requiring keyboard shortcuts
   - Sliders and range inputs
   - Canvas element interactions`,keyPoints:["Actions are not executed until perform() is called","build() compiles actions, perform() executes them","In Selenium 4, perform() alone is sufficient (no need for build())","Use moveToElement() before clicking on menu items that appear on hover","dragAndDrop() may not work on all websites due to HTML5 drag events","For Ctrl+Click (multi-select): keyDown(CONTROL), click elements, keyUp(CONTROL)"],exercises:[{id:1,title:"Mouse Hover and Context Menu",scenario:"On https://demoqa.com/menu, hover over menu items to reveal submenus and interact with them. Also practice right-click context menu.",steps:["Create Actions instance","Find the main menu item","Use moveToElement() to hover","Wait for submenu to appear","Click on submenu item","Practice right-click context menu"],code:`driver.get("https://demoqa.com/menu");
Actions actions = new Actions(driver);
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(5));

// Hover over main menu
WebElement mainMenu = driver.findElement(By.id("nav"));
WebElement menuItem2 = driver.findElement(By.linkText("Menu Item 2"));
actions.moveToElement(menuItem2).perform();

// Wait for submenu and click
WebElement subItem = wait.until(ExpectedConditions.visibilityOfElementLocated(
    By.linkText("SUB SUB LIST »")
));
actions.moveToElement(subItem).perform();

WebElement deepItem = wait.until(ExpectedConditions.visibilityOfElementLocated(
    By.linkText("Sub Sub Item 1")
));
deepItem.click();

// Right click (context menu)
driver.get("https://demoqa.com/context-menu");
WebElement contextArea = driver.findElement(By.id("rightClickBtn"));
actions.contextClick(contextArea).perform();

Alert alert = driver.switchTo().alert();
System.out.println("Context menu alert: " + alert.getText());
alert.accept();`},{id:2,title:"Drag and Drop",scenario:"Implement drag and drop on https://demoqa.com/droppable - drag the draggable element and drop it on the target.",steps:["Find source (draggable) element","Find target (droppable) element","Use dragAndDrop() method","Verify the drop was successful","Also practice dragAndDropBy() with offset coordinates"],code:`driver.get("https://demoqa.com/droppable");
Actions actions = new Actions(driver);

WebElement source = driver.findElement(By.id("draggable"));
WebElement target = driver.findElement(By.id("droppable"));

// Method 1: dragAndDrop
actions.dragAndDrop(source, target).perform();

// Verify
String targetText = target.getText();
System.out.println("Target text: " + targetText);
Assert.assertEquals(targetText, "Dropped!");

// Method 2: clickAndHold, move, release
driver.navigate().refresh();
source = driver.findElement(By.id("draggable"));
target = driver.findElement(By.id("droppable"));

actions.clickAndHold(source)
       .moveToElement(target)
       .release()
       .perform();

System.out.println("Drop successful: " + target.getText());`}]},"Task 10: JavaScriptExecutor":{title:"JavaScriptExecutor",description:`JavaScriptExecutor is an interface in Selenium that allows you to execute JavaScript code directly in the browser. It is a powerful tool when normal WebDriver methods are insufficient.

When to Use JavaScriptExecutor:
   - Element is not clickable (covered/hidden)
   - Scrolling to element or position
   - Changing element properties dynamically
   - Getting values not accessible via WebDriver
   - Handling HTML5 input types (date, color)
   - Triggering events not fired by WebDriver

Common Uses:

1. Clicking elements:
   js.executeScript("arguments[0].click();", element)

2. Scrolling:
   - By pixels: js.executeScript("window.scrollBy(0,500)")
   - To element: js.executeScript("arguments[0].scrollIntoView(true)", element)
   - To bottom: js.executeScript("window.scrollTo(0,document.body.scrollHeight)")

3. Getting/Setting values:
   - Get: js.executeScript("return arguments[0].value;", element)
   - Set: js.executeScript("arguments[0].value='text';", element)

4. Highlighting element (debugging):
   js.executeScript("arguments[0].style.border='3px solid red'", element)

5. Page information:
   - Title: js.executeScript("return document.title;")
   - URL: js.executeScript("return window.location.href;")`,keyPoints:["Cast driver to JavascriptExecutor before using","executeScript() runs synchronously, executeAsyncScript() for async operations","arguments[0] refers to the first element passed as parameter","JS click bypasses element visibility check - use carefully","scrollIntoView(true) aligns element to top, false to bottom","Use JS to interact with elements hidden behind overlays"],exercises:[{id:1,title:"Scroll and Highlight Elements",scenario:"Use JavaScriptExecutor to scroll through a long page, highlight elements for debugging, and interact with elements using JS click.",steps:["Cast WebDriver to JavascriptExecutor","Scroll down by 500 pixels","Scroll to a specific element","Highlight an element with red border for debugging","Use JS click on a button","Get page title using JavaScript"],code:`driver.get("https://demoqa.com/elements");
JavascriptExecutor js = (JavascriptExecutor) driver;

// Scroll down by pixels
js.executeScript("window.scrollBy(0, 500);");
Thread.sleep(1000); // Just to see scroll effect

// Scroll to bottom of page
js.executeScript("window.scrollTo(0, document.body.scrollHeight);");

// Scroll to specific element
WebElement element = driver.findElement(By.linkText("Buttons"));
js.executeScript("arguments[0].scrollIntoView(true);", element);

// Highlight element (useful for debugging)
js.executeScript("arguments[0].style.border='3px solid red'; arguments[0].style.backgroundColor='yellow';", element);

// JS Click
js.executeScript("arguments[0].click();", element);

// Get page info
String title = (String) js.executeScript("return document.title;");
String url = (String) js.executeScript("return window.location.href;");
System.out.println("Title: " + title);
System.out.println("URL: " + url);`},{id:2,title:"Set Values Using JavaScript",scenario:"Use JavaScript to set values in form fields that don't respond to sendKeys(), such as read-only fields or hidden inputs.",steps:["Find a read-only input field","Use JS to remove readonly attribute","Set value using JS executeScript","Use JS to set date in date picker","Get inner text of element using JS","Manipulate CSS class of element"],code:`JavascriptExecutor js = (JavascriptExecutor) driver;

// Set value in field (bypasses readonly)
WebElement inputField = driver.findElement(By.id("sampleHeading"));
js.executeScript("arguments[0].removeAttribute('readonly');", inputField);
js.executeScript("arguments[0].value='New Value';", inputField);

// Verify the set value
String value = (String) js.executeScript("return arguments[0].value;", inputField);
System.out.println("Field value: " + value);

// Get inner text
String innerText = (String) js.executeScript("return arguments[0].innerText;", inputField);
System.out.println("Inner text: " + innerText);

// Add/Remove CSS class
js.executeScript("arguments[0].classList.add('highlighted');", inputField);
js.executeScript("arguments[0].classList.remove('highlighted');", inputField);

// Check if element has class
Boolean hasClass = (Boolean) js.executeScript(
    "return arguments[0].classList.contains('btn-primary');", inputField);
System.out.println("Has class: " + hasClass);`}]},"Task 11: Screenshots & Reporting":{title:"Screenshots & Test Reporting",description:`Screenshots and reports are essential for understanding test results, especially when tests fail in CI/CD pipelines where you cannot watch execution live.

Taking Screenshots:

1. Full Page Screenshot
   - Captures entire browser viewport
   - TakesScreenshot interface
   - Save as File or BASE64 string

2. Element Screenshot (Selenium 4)
   - Captures specific element only
   - WebElement implements TakesScreenshot
   - Useful for comparing specific UI components

3. When to Capture:
   - On test failure (@AfterMethod)
   - At key test steps for evidence
   - For visual regression testing

Test Reports:

1. TestNG Default Reports
   - Generated in test-output folder
   - HTML and XML formats
   - Basic but always available

2. Extent Reports
   - Professional HTML reports
   - Embed screenshots
   - Test pass/fail statistics
   - Timeline view

3. Allure Reports
   - Beautiful interactive reports
   - History trends
   - Categories of failures
   - Integration with Jenkins

Best Practices:
   - Name screenshots with timestamp to avoid overwriting
   - Attach screenshots to extent report on failure
   - Store screenshots in target/ folder (excluded from git)`,keyPoints:["Always capture screenshot on test failure for debugging","Use timestamp in filename to prevent overwriting: timestamp = new SimpleDateFormat","Extent Reports need extent.flush() at end to write HTML file","Allure requires @Step annotations and allure-results folder","Element screenshot useful for visual regression - compare baseline vs current","Base64 format useful for embedding in HTML reports"],exercises:[{id:1,title:"Capture Screenshots on Failure",scenario:"Create a test base class that automatically captures a screenshot whenever a test fails and saves it with a timestamp.",steps:["Create BaseTest class with ITestListener or use @AfterMethod with ITestResult","Check if test result status is FAILURE","Cast driver to TakesScreenshot","Save screenshot with test name and timestamp","Log screenshot path to console"],code:`import org.testng.ITestResult;
import org.apache.commons.io.FileUtils;

public class BaseTest {
    protected WebDriver driver;

    @BeforeMethod
    public void setup() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.manage().window().maximize();
    }

    @AfterMethod
    public void teardown(ITestResult result) throws IOException {
        // Capture screenshot if test failed
        if (result.getStatus() == ITestResult.FAILURE) {
            TakesScreenshot ts = (TakesScreenshot) driver;
            File screenshotFile = ts.getScreenshotAs(OutputType.FILE);

            // Create filename with timestamp
            String timestamp = new SimpleDateFormat("yyyyMMdd_HHmmss").format(new Date());
            String fileName = result.getName() + "_" + timestamp + ".png";
            String destPath = "screenshots/" + fileName;

            // Save screenshot
            FileUtils.copyFile(screenshotFile, new File(destPath));
            System.out.println("Screenshot saved: " + destPath);
        }
        driver.quit();
    }
}`},{id:2,title:"Element Screenshot",scenario:"Capture a screenshot of a specific element (Selenium 4 feature) for visual comparison testing.",steps:["Navigate to a page with a specific element to capture","Find the element to screenshot","Cast element to TakesScreenshot","Save element screenshot as PNG","Compare with baseline image"],code:`// Selenium 4 - Element Level Screenshot
driver.get("https://demoqa.com/elements");

WebElement card = driver.findElement(By.className("card"));

// Element implements TakesScreenshot in Selenium 4
File elementScreenshot = ((TakesScreenshot) card).getScreenshotAs(OutputType.FILE);
FileUtils.copyFile(elementScreenshot, new File("screenshots/element_capture.png"));
System.out.println("Element screenshot captured");

// Full page screenshot
File pageScreenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
FileUtils.copyFile(pageScreenshot, new File("screenshots/full_page.png"));

// Screenshot as Base64 (for embedding in HTML)
String base64 = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BASE64);
System.out.println("Base64 length: " + base64.length());
// Embed in HTML: <img src='data:image/png;base64 then base64  `}]},"Task 12: Page Object Model":{title:"Page Object Model (POM) Design Pattern",description:`Page Object Model is the most widely used design pattern in Selenium automation. It creates an abstraction layer between test code and page interaction code.

Core Concept:
   - Each web page = One Java class
   - Class contains all locators for that page
   - Class contains all methods to interact with page
   - Tests only call methods, never use locators directly

Without POM (BAD):
   - Test code directly has locators
   - Same locator copied in multiple tests
   - When locator changes: update ALL tests
   - Tests become unreadable and unmaintainable

With POM (GOOD):
   - Locator defined once in page class
   - Test calls page.login('user','pass')
   - When locator changes: update only page class
   - Tests read like plain English

PageFactory:
   - Part of Selenium support package
   - Provides @FindBy annotation for cleaner syntax
   - Lazy initialization - element found when used
   - initElements() sets up all @FindBy elements

Best Practices:
   - Page methods should return void or another page object
   - Never assert in page methods (keep in tests)
   - Name methods as user actions: clickLogin(), enterUsername()
   - Use constructor injection for WebDriver
   - Create BasePage class with common utilities`,keyPoints:["POM separates 'what to test' (tests) from 'how to interact' (page classes)","Never put assertions inside page object methods","Page methods should return the resulting page for fluent API","PageFactory @FindBy is evaluated lazily - element found when method called","Create a BasePage class for common methods like waitForElement, scrollTo","@FindBy(how = How.XPATH, using = '//button') is alternative syntax"],exercises:[{id:1,title:"Build Login Page Object",scenario:"Create a LoginPage class using POM with PageFactory for a login form, then use it in a test class.",steps:["Create LoginPage.java in pages package","Add WebElement fields with @FindBy annotations","Add constructor with PageFactory.initElements()","Create method: enterUsername(String)","Create method: enterPassword(String)","Create method: clickLogin() returning HomePage","Use LoginPage in test class"],code:`// LoginPage.java
public class LoginPage {
    private WebDriver driver;

    @FindBy(id = "userName")
    private WebElement usernameField;

    @FindBy(id = "password")
    private WebElement passwordField;

    @FindBy(id = "login")
    private WebElement loginButton;

    @FindBy(id = "output")
    private WebElement outputMessage;

    public LoginPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public LoginPage enterUsername(String username) {
        usernameField.clear();
        usernameField.sendKeys(username);
        return this;
    }

    public LoginPage enterPassword(String password) {
        passwordField.clear();
        passwordField.sendKeys(password);
        return this;
    }

    public void clickLogin() {
        loginButton.click();
    }

    public String getOutputMessage() {
        return outputMessage.getText();
    }
}

// LoginTest.java
public class LoginTest extends BaseTest {
    @Test
    public void testSuccessfulLogin() {
        driver.get("https://demoqa.com/login");
        LoginPage loginPage = new LoginPage(driver);

        // Fluent API - method chaining
        loginPage.enterUsername("testUser")
                 .enterPassword("testPassword")
                 .clickLogin();

        String message = loginPage.getOutputMessage();
        System.out.println("Output: " + message);
    }
}`},{id:2,title:"BasePage Class Implementation",scenario:"Create a reusable BasePage class with common utility methods that all page objects can inherit.",steps:["Create BasePage.java abstract class","Add common wait utilities","Add scroll to element method","Add highlight element for debugging","Add isElementDisplayed helper","Extend BasePage in LoginPage"],code:`// BasePage.java
public class BasePage {
    protected WebDriver driver;
    protected WebDriverWait wait;

    public BasePage(WebDriver driver) {
        this.driver = driver;
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        PageFactory.initElements(driver, this);
    }

    protected WebElement waitForElement(By locator) {
        return wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
    }

    protected WebElement waitForClickable(By locator) {
        return wait.until(ExpectedConditions.elementToBeClickable(locator));
    }

    protected void scrollToElement(WebElement element) {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].scrollIntoView(true);", element);
    }

    protected boolean isElementDisplayed(By locator) {
        try {
            return driver.findElement(locator).isDisplayed();
        } catch (NoSuchElementException e) {
            return false;
        }
    }

    protected void highlightElement(WebElement element) {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].style.border='3px solid red'", element);
    }
}

// LoginPage extends BasePage
public class LoginPage extends BasePage {
    @FindBy(id = "userName")
    private WebElement usernameField;

    public LoginPage(WebDriver driver) {
        super(driver); // calls BasePage constructor
    }

    public void enterUsername(String username) {
        waitForClickable(By.id("userName"));
        highlightElement(usernameField);
        usernameField.sendKeys(username);
    }
}`}]},"Task 13: TestNG Framework":{title:"TestNG Integration & Configuration",description:`TestNG (Test Next Generation) is a powerful testing framework inspired by JUnit. It addresses many limitations of JUnit and provides enterprise-level test management capabilities.

TestNG Annotations in Execution Order:
   @BeforeSuite → @BeforeTest → @BeforeGroups → @BeforeClass → @BeforeMethod → @Test → @AfterMethod → @AfterClass → @AfterGroups → @AfterTest → @AfterSuite

@Test Attributes:
   - priority: controls execution order (lower runs first)
   - groups: categorize tests (smoke, regression)
   - enabled: set false to skip test
   - timeOut: fail if test exceeds duration
   - dependsOnMethods: run after specified method
   - dataProvider: link to data provider
   - expectedExceptions: test should throw this
   - invocationCount: run test N times
   - threadPoolSize: parallel threads

testng.xml:
   - Defines test suites
   - Groups tests
   - Controls parallel execution
   - Passes parameters
   - Includes/excludes tests

TestNG Assertions:
   - Hard assertions (Assert): stop test on failure
   - Soft assertions (SoftAssert): continue on failure`,keyPoints:["Priority lower number runs first (priority=1 before priority=2)","@BeforeMethod runs before EACH @Test method in class","@BeforeClass runs ONCE before all @Test methods in class","dependsOnMethods - if dependent test fails, dependent test is skipped","SoftAssert.assertAll() must be called to report failures","testng.xml parallel='methods' with thread-count for parallel execution"],exercises:[{id:1,title:"TestNG Annotations and Priority",scenario:"Create a complete TestNG test class demonstrating all lifecycle annotations, test priorities, and grouping.",steps:["Create test class with @BeforeSuite, @BeforeClass, @BeforeMethod","Add tests with different priorities (1, 2, 3)","Assign tests to groups (smoke, regression)","Add @AfterMethod, @AfterClass, @AfterSuite","Create testng.xml to run only smoke group","Run and observe execution order"],code:`public class TestNGDemoTest {

    @BeforeSuite
    public void beforeSuite() {
        System.out.println("=== Suite Started ===");
    }

    @BeforeClass
    public void beforeClass() {
        System.out.println("=== Class Setup ===");
    }

    @BeforeMethod
    public void beforeMethod(Method method) {
        System.out.println("Starting test: " + method.getName());
    }

    @Test(priority = 1, groups = {"smoke"})
    public void verifyHomePage() {
        System.out.println("Test 1: Verify Home Page");
    }

    @Test(priority = 2, groups = {"smoke", "regression"})
    public void verifyLogin() {
        System.out.println("Test 2: Verify Login");
    }

    @Test(priority = 3, groups = {"regression"}, dependsOnMethods = {"verifyLogin"})
    public void verifyDashboard() {
        System.out.println("Test 3: Verify Dashboard (runs after login)");
    }

    @Test(enabled = false)
    public void skippedTest() {
        System.out.println("This test is skipped");
    }

    @AfterMethod
    public void afterMethod(ITestResult result) {
        System.out.println("Test " + result.getName() + ": " +
            (result.isSuccess() ? "PASSED" : "FAILED"));
    }

    @AfterClass
    public void afterClass() {
        System.out.println("=== Class Teardown ===");
    }

    @AfterSuite
    public void afterSuite() {
        System.out.println("=== Suite Completed ===");
    }
}`},{id:2,title:"Data Driven Testing with @DataProvider",scenario:"Implement data-driven login tests using TestNG @DataProvider to test multiple username/password combinations.",steps:["Create @DataProvider method returning Object[][]","Reference DataProvider in @Test annotation","Test runs once for each data row","Print test data being used in each run","Use external data source (Excel) with DataProvider"],code:`public class DataDrivenTest {
    WebDriver driver;

    @DataProvider(name = "loginCredentials")
    public Object[][] getLoginData() {
        return new Object[][] {
            {"validUser",    "validPass",   true},
            {"invalidUser",  "invalidPass", false},
            {"validUser",    "wrongPass",   false},
            {"",             "",            false}
        };
    }

    @Test(dataProvider = "loginCredentials")
    public void testLogin(String username, String password, boolean expectedResult) {
        driver.get("https://demoqa.com/login");
        driver.findElement(By.id("userName")).sendKeys(username);
        driver.findElement(By.id("password")).sendKeys(password);
        driver.findElement(By.id("login")).click();

        boolean isLoggedIn = driver.findElements(By.id("userName-value")).size() > 0;
        System.out.println("Username: " + username + " | Expected: " + expectedResult + " | Actual: " + isLoggedIn);
        Assert.assertEquals(isLoggedIn, expectedResult);
    }

    @DataProvider(name = "loginFromExcel")
    public Object[][] getDataFromExcel() throws IOException {
        FileInputStream fis = new FileInputStream("src/test/resources/testdata.xlsx");
        Workbook workbook = new XSSFWorkbook(fis);
        Sheet sheet = workbook.getSheet("LoginData");
        int rowCount = sheet.getLastRowNum();
        Object[][] data = new Object[rowCount][2];
        for (int i = 1; i <= rowCount; i++) {
            data[i-1][0] = sheet.getRow(i).getCell(0).getStringCellValue();
            data[i-1][1] = sheet.getRow(i).getCell(1).getStringCellValue();
        }
        workbook.close();
        return data;
    }
}`}]},"Task 14: Parallel Execution":{title:"Parallel Test Execution with Selenium Grid",description:`Parallel execution dramatically reduces total test execution time by running multiple tests simultaneously. Selenium Grid extends this to multiple machines and browsers.

Parallel Execution with TestNG:
   - parallel='methods': each test method in separate thread
   - parallel='classes': each test class in separate thread
   - parallel='tests': each <test> tag in testng.xml in separate thread
   - thread-count: number of parallel threads

Critical: Thread Safety
   - WebDriver is NOT thread-safe
   - Sharing driver between threads causes failures
   - Solution: ThreadLocal<WebDriver> - gives each thread its own driver

Selenium Grid Architecture:
   - Hub: central point receiving test requests
   - Node: machine running tests on browsers
   - Register nodes to hub
   - Tests specify desired capabilities
   - Hub routes to matching node

Selenium Grid 4 Improvements:
   - Standalone mode (no hub/node needed)
   - Docker support
   - Built-in UI at http://localhost:4444
   - Dynamic node allocation

RemoteWebDriver:
   - Used to connect to Grid
   - Specify hub URL and capabilities
   - Browser runs on remote node
   - Same API as local WebDriver`,keyPoints:["ThreadLocal<WebDriver> is MANDATORY for parallel execution","Always call ThreadLocal.remove() after test to prevent memory leaks","Grid hub default port is 4444: http://localhost:4444","Standalone mode for simple setup: java -jar selenium-server.jar standalone","Use DesiredCapabilities or Options to specify browser in Grid","thread-count in testng.xml determines max concurrent tests"],exercises:[{id:1,title:"ThreadLocal WebDriver for Parallel Tests",scenario:"Create a DriverManager class using ThreadLocal to safely run tests in parallel without driver conflicts.",steps:["Create DriverManager class with ThreadLocal<WebDriver>","Add getDriver(), setDriver(), removeDriver() methods","Update BaseTest to use DriverManager","Configure testng.xml for parallel execution","Run and verify tests run simultaneously"],code:`// DriverManager.java
public class DriverManager {
    private static final ThreadLocal<WebDriver> driverThreadLocal = new ThreadLocal<>();

    public static WebDriver getDriver() {
        return driverThreadLocal.get();
    }

    public static void setDriver(WebDriver driver) {
        driverThreadLocal.set(driver);
    }

    public static void removeDriver() {
        if (driverThreadLocal.get() != null) {
            driverThreadLocal.get().quit();
            driverThreadLocal.remove();
        }
    }
}

// BaseTest.java
public class BaseTest {
    @BeforeMethod
    @Parameters("browser")
    public void setup(@Optional("chrome") String browser) {
        WebDriver driver;
        if (browser.equalsIgnoreCase("firefox")) {
            WebDriverManager.firefoxdriver().setup();
            driver = new FirefoxDriver();
        } else {
            WebDriverManager.chromedriver().setup();
            driver = new ChromeDriver();
        }
        driver.manage().window().maximize();
        DriverManager.setDriver(driver);
    }

    @AfterMethod
    public void teardown() {
        DriverManager.removeDriver();
    }

    public WebDriver getDriver() {
        return DriverManager.getDriver();
    }
}

// testng.xml for parallel
/*
<suite name="Parallel Suite" parallel="methods" thread-count="3">
  <test name="ChromeTests">
    <parameter name="browser" value="chrome"/>
    <classes>
      <class name="tests.LoginTest"/>
    </classes>
  </test>
</suite>
*/`}]},"Task 15: File Upload & Download":{title:"File Upload and Download Handling",description:`Handling file operations is a common requirement in web automation. Selenium has limitations with OS-level dialogs but provides good solutions for HTML-based file operations.

File Upload Methods:

1. sendKeys() on input[type='file']
   - Most reliable approach
   - Works for HTML file input elements
   - No OS dialog appears
   - Provide absolute file path

2. Robot class
   - For OS-level file dialogs
   - Simulates keyboard/mouse at OS level
   - Platform-specific behavior
   - Fragile, not recommended

3. AutoIT (Windows only)
   - External tool for Windows dialogs
   - Compile .au3 script to .exe
   - Execute from Selenium using Runtime

File Download:
   - Cannot handle OS Save dialogs with Selenium
   - Solution: Configure browser preferences
   - Chrome: set download directory, disable dialog
   - Firefox: set browser.download preferences
   - Verify download: check file exists after download
   - Wait for download: poll file system until file appears

Chrome Download Preferences:
   - download.default_directory
   - download.prompt_for_download: false
   - plugins.always_open_pdf_externally: true`,keyPoints:["sendKeys() with file path works without opening OS dialog","File path must be absolute path on the machine running tests","For remote Grid execution, use RemoteWebDriver with file detector","Chrome preferences disable save dialog for automatic downloads","Always wait for file to appear before asserting download success","Clean up downloaded files in @AfterMethod to keep test environment clean"],exercises:[{id:1,title:"File Upload with sendKeys",scenario:"Upload a file on https://demoqa.com/upload-download using sendKeys approach, which avoids OS dialog entirely.",steps:["Create a test file to upload","Find input[type='file'] element","Use sendKeys() with absolute file path","Verify upload success message","Verify uploaded filename is displayed"],code:`driver.get("https://demoqa.com/upload-download");

// Create a test file
String testFilePath = System.getProperty("user.dir") + "/src/test/resources/testfile.txt";
File file = new File(testFilePath);
if (!file.exists()) {
    FileWriter writer = new FileWriter(file);
    writer.write("This is test upload content");
    writer.close();
}

// Find file input - no need to click Browse button
WebElement fileInput = driver.findElement(By.id("uploadFile"));
fileInput.sendKeys(testFilePath);

// Wait for upload message
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(5));
WebElement uploadedPath = wait.until(
    ExpectedConditions.visibilityOfElementLocated(By.id("uploadedFilePath"))
);

System.out.println("Uploaded: " + uploadedPath.getText());
Assert.assertTrue(uploadedPath.getText().contains("testfile.txt"));`},{id:2,title:"Configure Chrome for Auto Download",scenario:"Configure ChromeDriver to automatically download files to a specific folder without showing the OS save dialog.",steps:["Create download directory","Set Chrome preferences for download","Disable download prompt","Click download link","Wait for file to appear in directory","Verify file was downloaded"],code:`// Setup Chrome with download preferences
String downloadPath = System.getProperty("user.dir") + "/downloads";
new File(downloadPath).mkdirs();

HashMap<String, Object> chromePrefs = new HashMap<>();
chromePrefs.put("download.default_directory", downloadPath);
chromePrefs.put("download.prompt_for_download", false);
chromePrefs.put("plugins.always_open_pdf_externally", true);

ChromeOptions options = new ChromeOptions();
options.setExperimentalOption("prefs", chromePrefs);

WebDriverManager.chromedriver().setup();
driver = new ChromeDriver(options);

driver.get("https://demoqa.com/upload-download");

// Click download button
driver.findElement(By.id("downloadButton")).click();

// Wait for file to download
String downloadedFile = downloadPath + "/sampleFile.jpeg";
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(15));
wait.until(driver -> new File(downloadedFile).exists());

Assert.assertTrue(new File(downloadedFile).exists(), "File not downloaded!");
System.out.println("File downloaded: " + downloadedFile);`}]}},pl={"Task 1: Introduction to Playwright":{title:"Introduction to Playwright",description:`Playwright is a modern end-to-end testing framework developed by Microsoft. It supports multiple browsers, languages, and provides powerful automation capabilities.

What is Playwright?
   - End-to-end testing framework by Microsoft
   - Supports Chromium, Firefox, and WebKit
   - Works with JavaScript, TypeScript, Python, Java, C#
   - Auto-waits for elements before interacting
   - Built-in assertions with retry logic

Why Playwright over Selenium?
   - Auto-waiting: no explicit waits needed
   - Faster execution
   - Better handling of modern web apps
   - Built-in test runner
   - Network interception built-in
   - Multiple contexts (like incognito)
   - Parallel execution out of the box

Key Concepts:
   - Browser  : Chromium, Firefox, WebKit instance
   - Context  : Isolated browser session (like incognito)
   - Page     : Single browser tab
   - Locator  : Element finder with auto-wait
   - Fixture  : Reusable test setup/teardown

Test Structure:
   test('test name', async ({ page }) => {
     // arrange
     await page.goto('url');
     // act
     await page.click('selector');
     // assert
     await expect(page.locator('h1')).toBeVisible();
   });

Playwright Config:
   - playwright.config.ts controls all settings
   - Browsers, base URL, timeout, retries
   - Screenshots, videos on failure`,keyPoints:["Playwright auto-waits for elements - no Thread.sleep() needed","Each test gets a fresh browser context by default","Locators are lazy - they find elements when you interact","expect() assertions have built-in retry logic","playwright.config.ts is the central configuration file","npx playwright test runs all tests, --headed shows browser"],exercises:[{id:1,title:"Install and Setup Playwright",scenario:"Set up a new Playwright project with TypeScript and verify the installation by running the default example tests.",steps:["Install Node.js if not already installed","Create new project folder","Run Playwright init command","Select TypeScript and install browsers","Run example tests to verify setup","Open HTML report to see results"],code:`// Terminal commands to setup Playwright

// Step 1: Create project folder
mkdir playwright-automation
cd playwright-automation

// Step 2: Initialize Playwright
npm init playwright@latest

// Step 3: Select options:
// - TypeScript
// - tests folder
// - Add GitHub Actions: No (for now)
// - Install browsers: Yes

// Step 4: Run example tests
npx playwright test

// Step 5: Open HTML Report
npx playwright show-report

// Step 6: Run in headed mode (see browser)
npx playwright test --headed

// Step 7: Run specific test file
npx playwright test tests/example.spec.ts

// Project structure created:
// playwright-automation/
// ├── tests/
// │   └── example.spec.ts
// ├── playwright.config.ts
// ├── package.json
// └── node_modules/`},{id:2,title:"Understanding playwright.config.ts",scenario:"Explore and customize the Playwright configuration file to set base URL, timeouts, browsers, and reporting options.",steps:["Open playwright.config.ts","Set baseURL to demoqa.com","Set default timeout to 30 seconds","Enable screenshot on failure","Enable video recording on failure","Configure to run on Chromium only for now"],code:`// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // Run tests in parallel
  fullyParallel: true,

  // Fail build on CI if test.only left accidentally
  forbidOnly: !!process.env.CI,

  // Retry failed tests
  retries: process.env.CI ? 2 : 0,

  // Number of parallel workers
  workers: process.env.CI ? 1 : undefined,

  // Reporter
  reporter: 'html',

  // Shared settings for all tests
  use: {
    baseURL: 'https://demoqa.com',
    headless: true,
    actionTimeout: 10000,
    navigationTimeout: 30000,

    // Collect artifacts on failure
    screenshot: 'only-on-failure',
    video:      'retain-on-failure',
    trace:      'retain-on-failure',
  },

  // Browser projects
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    // Mobile browsers
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
  ],
});`}]},"Task 2: Locators & Selectors":{title:"Locators & Selectors",description:`Locators are the core of Playwright - they describe how to find elements on the page. Playwright locators are smart: they auto-wait and auto-retry.

Types of Locators:

1. Role-based (Recommended)
   - page.getByRole('button', { name: 'Submit' })
   - page.getByRole('textbox', { name: 'Email' })
   - page.getByRole('heading', { name: 'Login' })
   - Mirrors how users and screen readers see the page

2. Text-based
   - page.getByText('Click here')
   - page.getByText('Submit', { exact: true })

3. Label-based
   - page.getByLabel('Email address')
   - page.getByLabel('Password')

4. Placeholder-based
   - page.getByPlaceholder('Enter email')
   - page.getByPlaceholder('Full Name')

5. Test ID
   - page.getByTestId('submit-button')
   - Requires data-testid attribute on element

6. CSS Selector
   - page.locator('#elementId')
   - page.locator('.className')
   - page.locator('input[type=email]')

7. XPath
   - page.locator('//button[@type=submit]')

Locator Chaining:
   - page.locator('.form').locator('input')
   - Find input inside .form element

Locator Filters:
   - page.getByRole('listitem').filter({ hasText: 'Product' })
   - Filter locators by text or child elements`,keyPoints:["Prefer role-based locators - they are most resilient to UI changes","getByLabel() is best for form inputs with visible labels","Locators are lazy - element is not found until you interact","Auto-waiting means Playwright retries finding element until timeout","Avoid XPath when possible - brittle and hard to read","Use Playwright Inspector (npx playwright codegen) to generate locators"],exercises:[{id:1,title:"Practice Different Locator Types",scenario:"Use various locator strategies on demoqa.com Text Box page to find and interact with elements.",steps:["Open demoqa.com/text-box","Find heading using getByRole","Find input using getByPlaceholder","Find input using getByLabel","Find button using getByRole with name","Find element using CSS selector","Fill all fields and submit"],code:`import { test, expect } from '@playwright/test';

test('practice all locator types', async ({ page }) => {
  await page.goto('/text-box');

  // 1. Role-based locator - Heading
  const heading = page.getByRole('heading', { name: 'Text Box' });
  await expect(heading).toBeVisible();

  // 2. Placeholder-based locator
  const fullName = page.getByPlaceholder('Full Name');
  await fullName.fill('John Doe');

  // 3. Label-based locator (if label exists)
  // const emailInput = page.getByLabel('Email');

  // 4. Placeholder for email
  const email = page.getByPlaceholder('name@example.com');
  await email.fill('john@test.com');

  // 5. CSS selector
  const currentAddress = page.locator('#currentAddress');
  await currentAddress.fill('123 Main Street');

  // 6. Role-based button
  const submitBtn = page.getByRole('button', { name: 'Submit' });
  await submitBtn.click();

  // 7. Assert output using CSS
  const output = page.locator('#output');
  await expect(output).toBeVisible();
  await expect(output).toContainText('John Doe');
});

test('locator chaining', async ({ page }) => {
  await page.goto('/text-box');

  // Chain locators - find input inside a specific container
  const form = page.locator('.card-body');
  const nameInput = form.getByPlaceholder('Full Name');
  await nameInput.fill('Jane Smith');
  await expect(nameInput).toHaveValue('Jane Smith');
});`},{id:2,title:"Generate Locators with Codegen",scenario:"Use Playwright Codegen tool to automatically generate test code by recording browser interactions.",steps:["Run npx playwright codegen demoqa.com","Observe how Playwright suggests locators","Click on elements to generate locator code","Fill forms to see fill() code generated","Copy generated code into test file","Run generated test to verify it works"],code:`// Terminal: Launch Codegen
npx playwright codegen https://demoqa.com

// Codegen opens two windows:
// 1. Browser window - interact here
// 2. Inspector window - shows generated code

// Example generated code from Codegen:
import { test, expect } from '@playwright/test';

test('generated by codegen', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');

  // Codegen generates the best locator automatically
  await page.getByPlaceholder('Full Name').click();
  await page.getByPlaceholder('Full Name').fill('Test User');

  await page.getByPlaceholder('name@example.com').fill('test@email.com');

  await page.getByRole('button', { name: 'Submit' }).click();

  // You can also record and save to a file:
  // npx playwright codegen --output tests/recorded.spec.ts https://demoqa.com
});`}]},"Task 3: Interactions & Actions":{title:"Interactions & Actions",description:`Playwright provides a comprehensive set of actions to interact with web elements. All actions auto-wait for elements to be ready before interacting.

Mouse Actions:
   - click()           : Single left click
   - dblclick()        : Double click
   - rightClick()      : Right click
   - hover()           : Mouse hover
   - dragAndDrop()     : Drag element to target
   - clickCount: 3     : Triple click (select all text)

Keyboard Actions:
   - fill('text')      : Clear and type text
   - type('text')      : Type character by character
   - press('Enter')    : Press keyboard key
   - press('Tab')      : Press Tab key
   - press('Control+A'): Key combinations

Form Actions:
   - check()           : Check checkbox or radio
   - uncheck()         : Uncheck checkbox
   - selectOption()    : Select dropdown option

Page Actions:
   - goto(url)         : Navigate to URL
   - goBack()          : Browser back
   - goForward()       : Browser forward
   - reload()          : Refresh page
   - waitForURL(url)   : Wait for navigation

Scroll Actions:
   - scrollIntoViewIfNeeded() : Scroll to element
   - mouse.wheel(x, y)        : Scroll page

File Upload:
   - setInputFiles('path/to/file')

Special Keys:
   - 'Enter', 'Tab', 'Escape', 'ArrowDown'
   - 'Control+A', 'Shift+Click'
   - 'Meta+C' (Mac Command key)`,keyPoints:["fill() clears existing text before typing - use type() to append","click() auto-scrolls element into view before clicking","selectOption() works by value, label, or index","press('Enter') can submit forms without clicking submit button","hover() is needed before asserting tooltip visibility","Use force: true option only as last resort to bypass auto-wait"],exercises:[{id:1,title:"Form Interactions",scenario:"Complete the DemoQA Automation Practice Form using various interaction methods.",steps:["Navigate to automation-practice-form","Fill text inputs using fill()","Select gender radio using check()","Enter date of birth","Select subjects using keyboard","Check hobbies checkboxes","Select state and city dropdowns","Submit the form"],code:`import { test, expect } from '@playwright/test';

test('complete practice form', async ({ page }) => {
  await page.goto('/automation-practice-form');

  // Fill text inputs
  await page.getByPlaceholder('First Name').fill('John');
  await page.getByPlaceholder('Last Name').fill('Doe');
  await page.getByPlaceholder('name@example.com').fill('john@test.com');

  // Select radio button
  await page.getByLabel('Male').check();
  await expect(page.getByLabel('Male')).toBeChecked();

  // Fill phone number
  await page.getByPlaceholder('Mobile Number').fill('1234567890');

  // Check hobbies checkboxes
  await page.getByLabel('Sports').check();
  await page.getByLabel('Reading').check();
  await expect(page.getByLabel('Sports')).toBeChecked();

  // Type in subject input and press Enter
  await page.locator('#subjectsInput').fill('Math');
  await page.locator('#subjectsInput').press('Enter');

  // Scroll to state dropdown
  await page.locator('#state').scrollIntoViewIfNeeded();
  await page.locator('#state').click();
  await page.getByText('NCR', { exact: true }).click();

  // Select city
  await page.locator('#city').click();
  await page.getByText('Delhi', { exact: true }).click();

  // Submit
  await page.getByRole('button', { name: 'Submit' }).click();

  // Assert modal appears
  await expect(page.locator('.modal-title')).toContainText('Thanks for submitting');
});`},{id:2,title:"Dropdown & Select Interactions",scenario:"Practice interacting with native HTML select dropdowns and custom React/Bootstrap dropdowns.",steps:["Navigate to select menu page","Select option by visible text","Select option by value","Select multiple options","Handle custom styled dropdowns","Assert selected values"],code:`import { test, expect } from '@playwright/test';

test('native select dropdown', async ({ page }) => {
  await page.goto('/select-menu');

  // Native HTML select - selectOption by label text
  await page.locator('#oldSelectMenu').selectOption('Blue');

  // Select by value attribute
  await page.locator('#oldSelectMenu').selectOption({ value: '3' });

  // Select by index
  await page.locator('#oldSelectMenu').selectOption({ index: 2 });

  // Multi-select
  await page.locator('#cars').selectOption(['volvo', 'audi']);
});

test('custom react dropdown', async ({ page }) => {
  await page.goto('/select-menu');

  // Custom dropdown (not native select)
  // Click to open dropdown
  await page.locator('#withOptGroup').click();

  // Wait for options and click
  await page.getByText('Group 1, option 1').click();

  // For React-Select style dropdowns
  const colorSelect = page.locator('[id="react-select-2-input"]');
  await colorSelect.fill('Blue');
  await colorSelect.press('Enter');
});`},{id:3,title:"Drag and Drop & Hover",scenario:"Practice drag and drop interactions and hover to reveal tooltip or hidden elements.",steps:["Navigate to droppable page","Drag source element to target","Assert target text changes","Navigate to a page with tooltips","Hover over element","Assert tooltip becomes visible"],code:`import { test, expect } from '@playwright/test';

test('drag and drop', async ({ page }) => {
  await page.goto('/droppable');

  const source = page.locator('#draggable');
  const target = page.locator('#droppable');

  // Method 1: dragTo()
  await source.dragTo(target);
  await expect(target).toContainText('Dropped!');
});

test('hover interaction', async ({ page }) => {
  await page.goto('/tool-tips');

  // Hover over button to show tooltip
  const hoverBtn = page.getByRole('button', { name: 'Hover me to see' });
  await hoverBtn.hover();

  // Assert tooltip appears
  const tooltip = page.locator('.tooltip-inner');
  await expect(tooltip).toBeVisible();
  await expect(tooltip).toContainText('You hovered over the Button');
});

test('double click and right click', async ({ page }) => {
  await page.goto('/buttons');

  // Double click
  await page.getByRole('button', { name: 'Double Click Me' }).dblclick();
  await expect(page.locator('#doubleClickMessage')).toContainText('You have done a double click');

  // Right click
  await page.getByRole('button', { name: 'Right Click Me' }).click({ button: 'right' });
  await expect(page.locator('#rightClickMessage')).toContainText('You have done a right click');

  // Dynamic click
  await page.getByText('Click Me', { exact: true }).last().click();
  await expect(page.locator('#dynamicClickMessage')).toContainText('You have done a dynamic click');
});`}]},"Task 4: Assertions":{title:"Assertions with expect()",description:`Playwright's expect() provides built-in assertions with automatic retry logic. Assertions wait for the condition to be true before failing.

Element Assertions:
   - toBeVisible()           : Element is visible
   - toBeHidden()            : Element is not visible
   - toBeEnabled()           : Element is enabled
   - toBeDisabled()          : Element is disabled
   - toBeChecked()           : Checkbox is checked
   - toHaveText('text')      : Exact text match
   - toContainText('text')   : Contains text
   - toHaveValue('value')    : Input has value
   - toHaveAttribute(k, v)   : Has HTML attribute
   - toHaveClass('class')    : Has CSS class
   - toHaveCount(n)          : Number of matching elements
   - toBeEmpty()             : Element has no text
   - toBeFocused()           : Element has focus

Page Assertions:
   - toHaveTitle('title')    : Page title matches
   - toHaveURL('url')        : Page URL matches
   - toHaveURL(/regex/)      : URL matches regex

Negative Assertions:
   - expect(locator).not.toBeVisible()
   - expect(locator).not.toBeChecked()
   - expect(locator).not.toHaveText('wrong')

Soft Assertions:
   - expect.soft() - continues test on failure
   - Reports all failures at end
   - Good for validating multiple fields

Custom Timeout:
   - expect(locator).toBeVisible({ timeout: 10000 })
   - Override default assertion timeout`,keyPoints:["Playwright assertions auto-retry until timeout - no manual waits needed","toHaveText() requires exact match, toContainText() allows partial","Soft assertions with expect.soft() collect all failures before reporting","not.toBeVisible() passes if element is hidden OR does not exist","toHaveURL() can use string, regex, or function for matching","Default assertion timeout is 5 seconds, configurable in config"],exercises:[{id:1,title:"Element State Assertions",scenario:"Practice all common element assertions on demoqa.com pages.",steps:["Assert element visibility with toBeVisible","Assert input value with toHaveValue","Assert text content with toHaveText and toContainText","Assert checkbox state with toBeChecked","Assert page title and URL","Use negative assertions with not"],code:`import { test, expect } from '@playwright/test';

test('element state assertions', async ({ page }) => {
  await page.goto('/text-box');

  // Visibility assertions
  await expect(page.locator('h1')).toBeVisible();
  await expect(page.getByPlaceholder('Full Name')).toBeVisible();

  // Fill and assert value
  await page.getByPlaceholder('Full Name').fill('John Doe');
  await expect(page.getByPlaceholder('Full Name')).toHaveValue('John Doe');

  // Text assertions
  await expect(page.locator('h1')).toHaveText('Text Box');
  await expect(page.locator('h1')).toContainText('Text');

  // Submit and assert output
  await page.getByPlaceholder('name@example.com').fill('john@test.com');
  await page.getByRole('button', { name: 'Submit' }).click();

  const output = page.locator('#output');
  await expect(output).toBeVisible();
  await expect(output).toContainText('John Doe');
  await expect(output).toContainText('john@test.com');
});

test('checkbox and radio assertions', async ({ page }) => {
  await page.goto('/automation-practice-form');

  const maleRadio = page.getByLabel('Male');

  // Before check
  await expect(maleRadio).not.toBeChecked();

  // After check
  await maleRadio.check();
  await expect(maleRadio).toBeChecked();
});

test('page level assertions', async ({ page }) => {
  await page.goto('https://demoqa.com');

  // Page title
  await expect(page).toHaveTitle(/DEMOQA/);

  // Page URL
  await expect(page).toHaveURL('https://demoqa.com/');

  // Navigate and assert URL changes
  await page.goto('/elements');
  await expect(page).toHaveURL(/elements/);
});`},{id:2,title:"Soft Assertions & Count Assertions",scenario:"Use soft assertions to validate multiple form fields and count assertions to verify list items.",steps:["Use expect.soft() for multiple validations","Assert number of elements with toHaveCount","Assert list items contain specific text","Check test reports all soft assertion failures","Use toBeEnabled and toBeDisabled on buttons"],code:`import { test, expect } from '@playwright/test';

test('soft assertions - all failures reported', async ({ page }) => {
  await page.goto('/text-box');

  await page.getByPlaceholder('Full Name').fill('John');
  await page.getByPlaceholder('name@example.com').fill('john@test.com');
  await page.getByRole('button', { name: 'Submit' }).click();

  const output = page.locator('#output');

  // Soft assertions - test continues even if one fails
  await expect.soft(output).toBeVisible();
  await expect.soft(output).toContainText('John');
  await expect.soft(output).toContainText('john@test.com');
  await expect.soft(page.locator('h1')).toHaveText('Text Box');

  // Hard assertion at the end
  expect(test.info().errors).toHaveLength(0);
});

test('count assertions', async ({ page }) => {
  await page.goto('/elements');

  // Count number of menu items
  const menuItems = page.locator('.element-group');
  await expect(menuItems).toHaveCount(6);

  // Assert list has items
  const listItems = page.locator('.btn.btn-light');
  const count = await listItems.count();
  console.log('Total menu buttons: ' + count);
  expect(count).toBeGreaterThan(0);
});

test('enabled and disabled assertions', async ({ page }) => {
  await page.goto('/dynamic-properties');

  // Button disabled initially
  const enableBtn = page.locator('#enableAfter');
  await expect(enableBtn).toBeDisabled();

  // Wait for button to be enabled (Playwright auto-waits)
  await expect(enableBtn).toBeEnabled({ timeout: 10000 });
});`}]},"Task 5: Page Object Model":{title:"Page Object Model (POM)",description:`Page Object Model is a design pattern that creates a class for each page of the application. Each class contains the locators and methods for that page, making tests cleaner and more maintainable.

Why POM?
   - Single place to update locators when UI changes
   - Tests read like business language
   - Reuse page methods across multiple tests
   - Separation of concerns: test logic vs page logic

POM Structure in Playwright:

// pages/LoginPage.ts
class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByLabel('Username');
    this.passwordInput = page.getByLabel('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}

POM Best Practices:
   - One class per page
   - Locators as readonly class properties
   - Methods describe user actions (login, search, addToCart)
   - Return new page object when navigating to another page
   - Keep assertions in test files, not page objects
   - Use index.ts to export all page objects`,keyPoints:["Page objects contain locators and actions, NOT assertions","Constructor receives page object and initializes locators","Methods should represent user actions: login(), search(), checkout()","Return next page object from navigation methods for chaining","Store all page objects in pages/ folder","Tests become readable: await loginPage.login('user', 'pass')"],exercises:[{id:1,title:"Create First Page Object",scenario:"Create a TextBoxPage class for demoqa.com/text-box and use it in a test.",steps:["Create pages/ folder in tests directory","Create TextBoxPage.ts class","Add locators as readonly properties","Add fillForm() and submit() methods","Add getOutput() method","Use page object in test file","Assert results using extracted values"],code:`// pages/TextBoxPage.ts
import { Page, Locator } from '@playwright/test';

export class TextBoxPage {
  readonly page:            Page;
  readonly fullNameInput:   Locator;
  readonly emailInput:      Locator;
  readonly currentAddress:  Locator;
  readonly permanentAddress:Locator;
  readonly submitButton:    Locator;
  readonly outputSection:   Locator;

  constructor(page: Page) {
    this.page             = page;
    this.fullNameInput    = page.getByPlaceholder('Full Name');
    this.emailInput       = page.getByPlaceholder('name@example.com');
    this.currentAddress   = page.locator('#currentAddress');
    this.permanentAddress = page.locator('#permanentAddress');
    this.submitButton     = page.getByRole('button', { name: 'Submit' });
    this.outputSection    = page.locator('#output');
  }

  async goto() {
    await this.page.goto('/text-box');
  }

  async fillForm(name: string, email: string, current: string, permanent: string) {
    await this.fullNameInput.fill(name);
    await this.emailInput.fill(email);
    await this.currentAddress.fill(current);
    await this.permanentAddress.fill(permanent);
  }

  async submit() {
    await this.submitButton.click();
  }

  async getOutputText(): Promise<string> {
    return await this.outputSection.innerText();
  }
}

// tests/textBox.spec.ts
import { test, expect } from '@playwright/test';
import { TextBoxPage } from './pages/TextBoxPage';

test('fill text box form using POM', async ({ page }) => {
  const textBoxPage = new TextBoxPage(page);

  await textBoxPage.goto();
  await textBoxPage.fillForm('John Doe', 'john@test.com', '123 Main St', '456 Elm St');
  await textBoxPage.submit();

  const output = await textBoxPage.getOutputText();
  expect(output).toContain('John Doe');
  expect(output).toContain('john@test.com');
});`},{id:2,title:"Multi-Page POM with Navigation",scenario:"Create page objects for multiple pages and chain them together in an end-to-end test flow.",steps:["Create HomePage with navigation methods","Create ElementsPage","Navigate from HomePage to ElementsPage","Return page object from navigation method","Write E2E test using multiple page objects","Use fixtures for page object initialization"],code:`// pages/HomePage.ts
import { Page, Locator } from '@playwright/test';
import { ElementsPage } from './ElementsPage';

export class HomePage {
  readonly page: Page;
  readonly elementsCard: Locator;
  readonly formsCard:    Locator;

  constructor(page: Page) {
    this.page         = page;
    this.elementsCard = page.getByText('Elements').first();
    this.formsCard    = page.getByText('Forms').first();
  }

  async goto() {
    await this.page.goto('/');
  }

  async navigateToElements(): Promise<ElementsPage> {
    await this.elementsCard.click();
    return new ElementsPage(this.page);
  }
}

// pages/ElementsPage.ts
import { Page, Locator } from '@playwright/test';

export class ElementsPage {
  readonly page:        Page;
  readonly textBoxMenu: Locator;
  readonly heading:     Locator;

  constructor(page: Page) {
    this.page        = page;
    this.textBoxMenu = page.getByText('Text Box');
    this.heading     = page.locator('h1');
  }

  async clickTextBox() {
    await this.textBoxMenu.click();
  }
}

// tests/navigation.spec.ts
import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';

test('navigate using page objects', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.goto();
  await expect(page).toHaveURL('https://demoqa.com/');

  const elementsPage = await homePage.navigateToElements();
  await expect(elementsPage.heading).toBeVisible();

  await elementsPage.clickTextBox();
  await expect(page).toHaveURL(/text-box/);
});`}]},"Task 6: Fixtures & Hooks":{title:"Fixtures & Hooks",description:`Fixtures and hooks manage test setup and teardown. They ensure tests start with the right state and clean up after themselves.

Built-in Playwright Fixtures:
   - page     : New page for each test
   - browser  : Browser instance
   - context  : Browser context
   - request  : API request context

Test Hooks:
   - test.beforeAll()  : Runs once before all tests in file
   - test.afterAll()   : Runs once after all tests in file
   - test.beforeEach() : Runs before each test
   - test.afterEach()  : Runs after each test

Custom Fixtures:
   - Extend test with your own fixtures
   - Share page objects across tests
   - Pre-configured states (logged in)
   - Defined in fixtures/ folder
   - import { test } from '../fixtures/myFixtures'

Fixture Scopes:
   - Default: per test (created fresh each test)
   - scope: 'worker' : shared across worker
   - scope: 'test'   : per test (default)

When to use what:
   - beforeEach : Navigate to page before each test
   - beforeAll  : Login once, reuse session
   - Custom fixture : Reuse page object across test files
   - afterEach  : Take screenshot on failure
   - afterAll   : Close DB connections, cleanup`,keyPoints:["beforeEach is ideal for page navigation shared across tests","Custom fixtures allow injecting page objects into test parameters","scope: worker shares fixture across all tests in same worker","Fixtures auto-cleanup after yield - no need for explicit cleanup","Use storageState to save login session and reuse across tests","test.extend() creates a new test function with custom fixtures"],exercises:[{id:1,title:"Using beforeEach and afterEach Hooks",scenario:"Set up test hooks to navigate to the correct page before each test and take screenshot after each test.",steps:["Add test.beforeEach to navigate to page","Add test.afterEach for cleanup/screenshot","Add test.beforeAll for one-time setup","Verify hooks run in correct order","Use test.info() to access test metadata"],code:`import { test, expect } from '@playwright/test';

test.describe('Text Box Tests', () => {

  test.beforeAll(async () => {
    console.log('Starting Text Box test suite');
  });

  test.beforeEach(async ({ page }) => {
    // Navigate before each test
    await page.goto('/text-box');
    console.log('Navigated to text-box page');
  });

  test.afterEach(async ({ page }, testInfo) => {
    // Take screenshot if test failed
    if (testInfo.status !== testInfo.expectedStatus) {
      const screenshot = await page.screenshot();
      await testInfo.attach('screenshot', {
        body: screenshot,
        contentType: 'image/png'
      });
    }
    console.log('Test finished: ' + testInfo.title);
  });

  test.afterAll(async () => {
    console.log('All Text Box tests completed');
  });

  test('fill and submit form', async ({ page }) => {
    // page already on /text-box from beforeEach
    await page.getByPlaceholder('Full Name').fill('John Doe');
    await page.getByPlaceholder('name@example.com').fill('john@test.com');
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.locator('#output')).toContainText('John Doe');
  });

  test('heading is visible', async ({ page }) => {
    // page already on /text-box from beforeEach
    await expect(page.locator('h1')).toHaveText('Text Box');
  });
});`},{id:2,title:"Custom Fixtures with Page Objects",scenario:"Create custom fixtures that automatically initialize page objects and inject them into tests.",steps:["Create fixtures/pageFixtures.ts","Define custom fixture type with page objects","Use test.extend() to add page object fixtures","Import custom test in spec files","Use page objects directly as test parameters","Verify fixtures initialize and cleanup automatically"],code:`// fixtures/pageFixtures.ts
import { test as base, Page } from '@playwright/test';
import { TextBoxPage } from '../pages/TextBoxPage';
import { HomePage }    from '../pages/HomePage';

// Define fixture types
type PageFixtures = {
  textBoxPage: TextBoxPage;
  homePage:    HomePage;
};

// Extend base test with custom fixtures
export const test = base.extend<PageFixtures>({

  textBoxPage: async ({ page }, use) => {
    const textBoxPage = new TextBoxPage(page);
    await textBoxPage.goto();         // Auto-navigate
    await use(textBoxPage);           // Provide to test
    // Cleanup happens automatically after yield
  },

  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await use(homePage);
  },
});

export { expect } from '@playwright/test';

// tests/textBox.spec.ts - Using custom fixtures
import { test, expect } from '../fixtures/pageFixtures';

test('form submission with fixture', async ({ textBoxPage }) => {
  // textBoxPage is already initialized and navigated!
  await textBoxPage.fillForm('Jane Doe', 'jane@test.com', '789 Oak Ave', '321 Pine St');
  await textBoxPage.submit();

  const output = await textBoxPage.getOutputText();
  expect(output).toContain('Jane Doe');
});

test('home page navigation with fixture', async ({ homePage }) => {
  // homePage already initialized!
  const elementsPage = await homePage.navigateToElements();
  await expect(elementsPage.heading).toBeVisible();
});`}]},"Task 7: Handling Alerts, Frames & Windows":{title:"Alerts, Frames & Multiple Windows",description:`Modern web applications use popups, iframes, and multiple browser tabs. Playwright provides elegant APIs to handle all of these.

Browser Dialogs (Alerts):
   - alert()   : Simple message dialog
   - confirm() : OK/Cancel dialog
   - prompt()  : Input dialog
   - Handler must be set BEFORE action that triggers dialog
   - page.on('dialog', handler)

Frames (iframes):
   - page.frameLocator('iframe')
   - frameLocator('#iframeId')
   - Can chain locators inside frame
   - Nested frames also supported

Multiple Tabs/Windows:
   - context.waitForEvent('page')
   - Set up listener BEFORE click that opens new tab
   - newPage event gives you the new page
   - Can interact with both pages simultaneously

Dialog Handler:
   page.on('dialog', async dialog => {
     console.log(dialog.message());  // Get message
     await dialog.accept();         // Click OK
     await dialog.dismiss();        // Click Cancel
     await dialog.accept('input'); // Fill and OK for prompt
   });

Frame Locator:
   const frame = page.frameLocator('#myFrame');
   await frame.getByRole('button').click();
   // All locators chained on frameLocator work inside iframe`,keyPoints:["Dialog handler must be registered BEFORE the action that triggers it","frameLocator() returns a FrameLocator, not a Frame","waitForEvent('page') must be called BEFORE the click that opens new tab","Use Promise.all() to register listener and trigger action simultaneously","dialog.accept() for OK, dialog.dismiss() for Cancel","Multiple iframes can be nested: frameLocator().frameLocator()"],exercises:[{id:1,title:"Handle Browser Alerts",scenario:"Handle alert, confirm, and prompt dialogs on demoqa.com/alerts page.",steps:["Navigate to alerts page","Handle simple alert dialog","Handle confirm dialog - click OK","Handle confirm dialog - click Cancel","Handle prompt dialog with input","Assert result text after each interaction"],code:`import { test, expect } from '@playwright/test';

test('handle simple alert', async ({ page }) => {
  await page.goto('/alerts');

  // Register handler BEFORE triggering dialog
  page.on('dialog', async dialog => {
    console.log('Alert message: ' + dialog.message());
    await dialog.accept();
  });

  await page.getByRole('button', { name: 'Click me' }).first().click();
});

test('handle confirm dialog - accept', async ({ page }) => {
  await page.goto('/alerts');

  page.on('dialog', async dialog => {
    expect(dialog.type()).toBe('confirm');
    await dialog.accept();  // Click OK
  });

  await page.locator('#confirmButton').click();
  await expect(page.locator('#confirmResult')).toContainText('Ok');
});

test('handle confirm dialog - dismiss', async ({ page }) => {
  await page.goto('/alerts');

  page.on('dialog', async dialog => {
    await dialog.dismiss();  // Click Cancel
  });

  await page.locator('#confirmButton').click();
  await expect(page.locator('#confirmResult')).toContainText('Cancel');
});

test('handle prompt dialog', async ({ page }) => {
  await page.goto('/alerts');

  page.on('dialog', async dialog => {
    expect(dialog.type()).toBe('prompt');
    await dialog.accept('Playwright Test');  // Fill and accept
  });

  await page.locator('#promtButton').click();
  await expect(page.locator('#promptResult')).toContainText('Playwright Test');
});`},{id:2,title:"Handle iFrames",scenario:"Interact with elements inside an iframe using Playwright frameLocator.",steps:["Navigate to frames page","Use frameLocator to scope to iframe","Find element inside iframe","Interact with element inside iframe","Assert result inside iframe","Handle nested iframes"],code:`import { test, expect } from '@playwright/test';

test('interact with iframe', async ({ page }) => {
  await page.goto('/frames');

  // frameLocator scopes all subsequent locators to iframe
  const frame = page.frameLocator('iframe[src="/sample"]').first();

  // Find element inside iframe
  const heading = frame.locator('h1');
  await expect(heading).toBeVisible();
  await expect(heading).toContainText('This is a sample page');
});

test('interact with nested iframe', async ({ page }) => {
  await page.goto('/nestedframes');

  // Parent frame
  const parentFrame = page.frameLocator('iframe[name="frame1"]');

  // Nested child frame inside parent
  const childFrame = parentFrame.frameLocator('iframe[name="frame2"]');

  await expect(childFrame.locator('body')).toContainText('Child Iframe');
});`},{id:3,title:"Handle Multiple Tabs",scenario:"Handle scenarios where clicking a link or button opens a new browser tab.",steps:["Set up page event listener before clicking","Click element that opens new tab","Get reference to new tab page","Wait for new tab to load","Assert content on new tab","Switch back to original tab"],code:`import { test, expect } from '@playwright/test';

test('handle new tab', async ({ page, context }) => {
  await page.goto('/browser-windows');

  // Listen for new page BEFORE clicking
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),                          // Wait for new tab
    page.getByRole('button', { name: 'New Tab' }).click() // Trigger new tab
  ]);

  // Wait for new tab to load
  await newPage.waitForLoadState();

  // Assert content on new tab
  await expect(newPage.locator('h1')).toHaveText('This is a sample page');
  await expect(newPage).toHaveURL(/sample/);

  // Close new tab and go back to original
  await newPage.close();
  await expect(page).toHaveURL(/browser-windows/);
});

test('handle new window', async ({ page, context }) => {
  await page.goto('/browser-windows');

  const [newWindow] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('button', { name: 'New Window' }).click()
  ]);

  await newWindow.waitForLoadState();
  await expect(newWindow.locator('h1')).toContainText('This is a sample page');

  // Work with both pages simultaneously
  console.log('Original URL: ' + page.url());
  console.log('New Window URL: ' + newWindow.url());
});`}]},"Task 8: Network Interception":{title:"Network Interception & API Mocking",description:`Playwright can intercept network requests and responses. This is powerful for mocking APIs, testing error scenarios, and speeding up tests by blocking unnecessary resources.

Network Interception Methods:

1. page.route(url, handler)
   - Intercept and handle matching requests
   - Can fulfill, abort, or continue requests
   - URL can be string, regex, or function

2. route.fulfill()
   - Return mock response
   - Set status, headers, body
   - Never hits real server

3. route.abort()
   - Simulate network failure
   - Test error handling in app

4. route.continue()
   - Modify request before sending
   - Add headers, change URL
   - Let request proceed to server

5. page.waitForResponse()
   - Wait for specific API response
   - Extract response data
   - Sync UI tests with API calls

Common Use Cases:
   - Mock API responses for offline testing
   - Test error states (500, 404 responses)
   - Block images/CSS to speed up tests
   - Verify specific API calls were made
   - Modify responses to test edge cases
   - Test loading states by delaying responses`,keyPoints:["route() handler must be set BEFORE page.goto() or the action","route.fulfill() returns mock data without hitting real server","Block images with route('**/*.{png,jpg}', r => r.abort())","waitForResponse() resolves with the actual Response object","Use page.unroute() to remove specific route handlers","Intercept by URL pattern: '***/api/users' matches any domain"],exercises:[{id:1,title:"Mock API Response",scenario:"Intercept an API call and return mock data to test the UI without depending on real backend.",steps:["Set up route handler before navigation","Match specific API endpoint URL","Return mock JSON response with route.fulfill()","Navigate to page that makes the API call","Assert UI shows data from mock response","Test error state by returning 500 status"],code:`import { test, expect } from '@playwright/test';

test('mock API response', async ({ page }) => {
  // Mock GET /api/users response
  await page.route('**/api/users', async route => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify([
        { id: 1, name: 'Mock User One',   email: 'mock1@test.com' },
        { id: 2, name: 'Mock User Two',   email: 'mock2@test.com' },
        { id: 3, name: 'Mock User Three', email: 'mock3@test.com' }
      ])
    });
  });

  await page.goto('https://reqres.in/api/users');
  await expect(page.locator('body')).toContainText('Mock User One');
});

test('mock error response', async ({ page }) => {
  // Simulate server error
  await page.route('**/api/**', async route => {
    await route.fulfill({
      status: 500,
      body: JSON.stringify({ error: 'Internal Server Error' })
    });
  });

  await page.goto('https://reqres.in/api/users');
  await expect(page.locator('body')).toContainText('Internal Server Error');
});

test('block images to speed up test', async ({ page }) => {
  // Block all image requests
  await page.route('**/*.{png,jpg,jpeg,gif,svg}', route => route.abort());

  await page.goto('https://demoqa.com');
  // Page loads faster without images
  await expect(page.locator('body')).toBeVisible();
});`},{id:2,title:"Intercept and Verify API Calls",scenario:"Verify that the correct API calls are made when user interacts with UI, capturing request details.",steps:["Use page.waitForRequest() to capture request","Use page.waitForResponse() to capture response","Assert request URL and method","Assert request body for POST requests","Assert response status and body","Use Promise.all for action and wait simultaneously"],code:`import { test, expect } from '@playwright/test';

test('verify API call is made', async ({ page }) => {
  await page.goto('https://reqres.in/#support-heading');

  // Wait for specific API response
  const [response] = await Promise.all([
    page.waitForResponse('**/api/users*'),
    page.goto('https://reqres.in/api/users')
  ]);

  // Assert response details
  expect(response.status()).toBe(200);
  expect(response.url()).toContain('/api/users');

  const body = await response.json();
  expect(body).toBeDefined();
});

test('intercept and modify request headers', async ({ page }) => {
  // Add custom header to all requests
  await page.route('**/*', async route => {
    await route.continue({
      headers: {
        ...route.request().headers(),
        'X-Custom-Header': 'PlaywrightTest',
        'Authorization': 'Bearer test-token'
      }
    });
  });

  await page.goto('https://demoqa.com');
  await expect(page.locator('body')).toBeVisible();
});`}]},"Task 9: Screenshots & Visual Testing":{title:"Screenshots & Visual Testing",description:`Playwright provides built-in screenshot capabilities and visual comparison testing. Visual testing catches UI regressions that functional tests miss.

Screenshot Types:

1. Full Page Screenshot
   - page.screenshot({ fullPage: true })
   - Captures entire scrollable page

2. Element Screenshot
   - locator.screenshot()
   - Captures only the specific element

3. Clip Screenshot
   - page.screenshot({ clip: { x, y, width, height } })
   - Captures specific region

Visual Comparison (toMatchSnapshot):
   - First run: creates baseline image
   - Subsequent runs: compares to baseline
   - Fails if pixel difference exceeds threshold
   - Update baselines: npx playwright test --update-snapshots

Snapshot Options:
   - threshold: 0.1  : Allow 10% pixel difference
   - maxDiffPixels: 100 : Allow 100 different pixels
   - animations: 'disabled' : Disable CSS animations

Screenshot Best Practices:
   - Mask dynamic content (timestamps, random data)
   - Disable animations before screenshot
   - Use consistent viewport size
   - Store snapshots in snapshots/ folder
   - Update snapshots when UI intentionally changes`,keyPoints:["First snapshot run creates baseline - always review baseline images","Update snapshots with --update-snapshots flag when UI changes","Mask dynamic content using mask option to avoid false failures","Disable animations with animations: disabled for stable screenshots","Element screenshots are more stable than full page screenshots","Visual tests complement functional tests - they catch CSS/layout bugs"],exercises:[{id:1,title:"Capture Screenshots",scenario:"Practice taking different types of screenshots: full page, element-level, and region-specific.",steps:["Take full page screenshot and save to file","Take element-level screenshot","Take screenshot with clip region","Attach screenshot to test report","Take screenshot on test failure automatically"],code:`import { test, expect } from '@playwright/test';
import path from 'path';

test('full page screenshot', async ({ page }) => {
  await page.goto('/text-box');

  // Full page screenshot
  await page.screenshot({
    path: 'screenshots/full-page.png',
    fullPage: true
  });

  console.log('Full page screenshot saved');
});

test('element screenshot', async ({ page }) => {
  await page.goto('/text-box');

  // Screenshot of specific element only
  const card = page.locator('.card').first();
  await card.screenshot({
    path: 'screenshots/element.png'
  });
});

test('clip region screenshot', async ({ page }) => {
  await page.goto('/text-box');

  // Screenshot of specific region
  await page.screenshot({
    path: 'screenshots/region.png',
    clip: { x: 0, y: 0, width: 600, height: 400 }
  });
});

test('attach screenshot to report', async ({ page }, testInfo) => {
  await page.goto('/text-box');

  const screenshot = await page.screenshot();

  // Attach to Playwright HTML report
  await testInfo.attach('text-box-page', {
    body: screenshot,
    contentType: 'image/png'
  });

  await expect(page.locator('h1')).toHaveText('Text Box');
});`},{id:2,title:"Visual Comparison Testing",scenario:"Use toMatchSnapshot() for visual regression testing to detect unexpected UI changes.",steps:["Write test with toMatchSnapshot()","Run test first time to create baseline","Run test again to compare with baseline","Introduce intentional change to see failure","Update snapshot with --update-snapshots","Use threshold to allow minor differences"],code:`import { test, expect } from '@playwright/test';

test('visual snapshot - full page', async ({ page }) => {
  await page.goto('/text-box');

  // Disable animations for stable screenshot
  await page.evaluate(() => {
    const style = document.createElement('style');
    style.textContent = '* { animation: none !important; transition: none !important; }';
    document.head.appendChild(style);
  });

  // First run: creates baseline snapshot
  // Subsequent runs: compares to baseline
  await expect(page).toMatchSnapshot('text-box-page.png');
});

test('visual snapshot - element only', async ({ page }) => {
  await page.goto('/text-box');

  const form = page.locator('.card').first();

  // Element-level snapshot comparison
  await expect(form).toMatchSnapshot('text-box-form.png', {
    threshold: 0.1,       // Allow 10% pixel difference
    maxDiffPixels: 50     // Allow max 50 pixels difference
  });
});

test('snapshot with masked content', async ({ page }) => {
  await page.goto('https://demoqa.com');

  // Mask dynamic content to avoid false failures
  await expect(page).toMatchSnapshot('home-page.png', {
    mask: [
      page.locator('.dynamic-content'),  // Mask elements with changing content
      page.locator('#timestamp')
    ]
  });
});

// Terminal commands:
// Create baselines: npx playwright test
// Update baselines: npx playwright test --update-snapshots
// View report:      npx playwright show-report`}]},"Task 10: API Testing with Playwright":{title:"API Testing with Playwright",description:`Playwright includes a powerful API testing capability through its request context. You can test REST APIs directly without a browser, similar to Rest Assured or Postman.

Playwright API Testing:
   - request fixture available in tests
   - No browser needed for API tests
   - Same test framework for UI and API
   - Can combine UI and API in same test

APIRequestContext Methods:
   - request.get(url, options)
   - request.post(url, { data: body })
   - request.put(url, { data: body })
   - request.patch(url, { data: body })
   - request.delete(url)
   - request.fetch(url, options)

Response Methods:
   - response.status()      : HTTP status code
   - response.ok()          : True if 200-299
   - response.json()        : Parse JSON body
   - response.text()        : Get body as string
   - response.headers()     : Get all headers
   - response.url()         : Get response URL

API + UI Combination:
   - Create data via API, verify via UI
   - Login via API, continue in browser
   - Clean up test data via API after UI test

Global Request Context:
   - Defined in playwright.config.ts
   - Set base URL, headers, auth tokens
   - Shared across all API tests`,keyPoints:["Use request fixture for API tests - no page/browser overhead","expect(response.ok()).toBeTruthy() checks 2xx status codes","request.post() takes data as JSON object in options","Combine API setup with UI verification for faster E2E tests","APIRequestContext can be used outside tests for data setup/cleanup","Set extraHTTPHeaders in config for auth headers across all requests"],exercises:[{id:1,title:"Basic API Tests with Playwright",scenario:"Write API tests using Playwright request fixture to test JSONPlaceholder API.",steps:["Use request fixture in test","Send GET request and check status","Parse JSON response and assert fields","Send POST request with JSON body","Assert created resource fields","Test DELETE request"],code:`import { test, expect } from '@playwright/test';

test('GET users - verify status and body', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/users/1');

  // Status assertions
  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();

  // Body assertions
  const body = await response.json();
  expect(body.id).toBe(1);
  expect(body.name).toBe('Leanne Graham');
  expect(body.email).toContain('@');
  expect(body.address.city).toBe('Gwenborough');

  console.log('User name: ' + body.name);
});

test('GET all users - verify array', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/users');

  expect(response.status()).toBe(200);
  const users = await response.json();

  expect(users).toHaveLength(10);
  expect(users[0].name).toBe('Leanne Graham');
});

test('POST create new post', async ({ request }) => {
  const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
    data: {
      title:  'Playwright API Test',
      body:   'Testing API with Playwright',
      userId: 1
    }
  });

  expect(response.status()).toBe(201);

  const created = await response.json();
  expect(created.id).toBeDefined();
  expect(created.title).toBe('Playwright API Test');
  expect(created.userId).toBe(1);
});

test('DELETE post', async ({ request }) => {
  const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');
  expect(response.status()).toBe(200);
});`},{id:2,title:"Combine API and UI Testing",scenario:"Use API to set up test data, then verify through UI - a common hybrid testing pattern.",steps:["Create test user via API in beforeEach","Navigate to UI and verify user appears","Use API to verify data after UI action","Clean up test data via API in afterEach","Set auth token via API for UI tests"],code:`import { test, expect, request as apiRequest } from '@playwright/test';

test('API setup then UI verification', async ({ page, request }) => {
  // Step 1: Create post via API
  const createResponse = await request.post(
    'https://jsonplaceholder.typicode.com/posts',
    {
      data: {
        title:  'API Created Post',
        body:   'Created via API for UI test',
        userId: 1
      }
    }
  );
  expect(createResponse.status()).toBe(201);
  const createdPost = await createResponse.json();
  console.log('Created post ID: ' + createdPost.id);

  // Step 2: Verify via another API call
  const getResponse = await request.get(
    \`https://jsonplaceholder.typicode.com/posts/\${createdPost.id}\`
  );
  const post = await getResponse.json();
  expect(post.title).toBe('API Created Post');

  // Step 3: Navigate to UI (simulated)
  await page.goto('https://jsonplaceholder.typicode.com');
  await expect(page.locator('body')).toBeVisible();

  console.log('API + UI hybrid test completed');
});

test('API login then use session in UI', async ({ page, request }) => {
  // Login via API to get token
  const loginResponse = await request.post('https://reqres.in/api/login', {
    data: {
      email:    'eve.holt@reqres.in',
      password: 'cityslicka'
    }
  });
  expect(loginResponse.status()).toBe(200);

  const { token } = await loginResponse.json();
  console.log('Auth token: ' + token);

  // Use token in subsequent API calls
  const usersResponse = await request.get('https://reqres.in/api/users', {
    headers: { Authorization: 'Bearer ' + token }
  });
  expect(usersResponse.status()).toBe(200);
});`}]},"Task 11: Data-Driven Testing":{title:"Data-Driven Testing in Playwright",description:`Data-driven testing runs the same test with multiple data sets. Playwright supports several approaches to parameterize tests.

Approaches:

1. test.each (Array based)
   - test.each(dataArray)('test %s', async () => {})
   - Inline data in test file
   - Good for small data sets

2. External JSON File
   - Read data with fs.readFileSync
   - Loop through data with test.each
   - Data separated from logic

3. CSV File
   - Parse with csv-parse library
   - Good for spreadsheet-based test data

4. Environment Variables
   - process.env.USERNAME
   - Set in .env file or CI pipeline
   - Good for credentials

5. Faker.js for Random Data
   - npm install @faker-js/faker
   - Generate realistic random data
   - Unique data for each test run

test.each Syntax:
   // Array of arrays
   test.each([
     ['Alice', 'alice@test.com'],
     ['Bob',   'bob@test.com']
   ])('test for %s', async (name, email) => {});

   // Array of objects
   test.each([
     { name: 'Alice', email: 'alice@test.com' },
     { name: 'Bob',   email: 'bob@test.com' }
   ])('test for $name', async ({ name, email }) => {});`,keyPoints:["test.each() generates separate test cases for each data row","Use $variable in test name to show data in report","External JSON files allow non-developers to add test data","Faker.js generates realistic data: names, emails, addresses","Environment variables keep sensitive data out of test files","CSV files work well when test data comes from Excel/Sheets"],exercises:[{id:1,title:"test.each with Inline Data",scenario:"Use test.each to run the same form submission test with multiple different user data sets.",steps:["Define test data as array of objects","Use test.each() to parameterize test","Access data fields as destructured parameters","Use data values in test name for clear reporting","Run tests and verify each data set runs separately"],code:`import { test, expect } from '@playwright/test';

// Test data - array of objects
const users = [
  { name: 'Alice Smith',  email: 'alice@test.com',  phone: '1234567890' },
  { name: 'Bob Johnson',  email: 'bob@test.com',    phone: '0987654321' },
  { name: 'Carol White',  email: 'carol@test.com',  phone: '5556667777' },
  { name: 'David Brown',  email: 'david@test.com',  phone: '1112223333' },
];

// test.each generates one test per data row
test.each(users)('form submission for $name', async ({ page, name, email, phone }) => {
  await page.goto('/automation-practice-form');

  const [firstName, lastName] = name.split(' ');

  await page.getByPlaceholder('First Name').fill(firstName);
  await page.getByPlaceholder('Last Name').fill(lastName);
  await page.getByPlaceholder('name@example.com').fill(email);
  await page.getByPlaceholder('Mobile Number').fill(phone);
  await page.getByLabel('Male').check();

  await page.getByRole('button', { name: 'Submit' }).click();

  // Assert modal with submitted data
  await expect(page.locator('.modal-title')).toContainText('Thanks');
  await expect(page.locator('.table-responsive')).toContainText(firstName);

  console.log('Completed test for: ' + name);
});

// Simple array data
test.each([
  [1, 'Leanne Graham'],
  [2, 'Ervin Howell'],
  [3, 'Clementine Bauch']
])('API test for user %d - %s', async ({ request }, userId, expectedName) => {
  const response = await request.get(\`https://jsonplaceholder.typicode.com/users/\${userId}\`);
  const user = await response.json();
  expect(user.name).toBe(expectedName);
});`},{id:2,title:"External JSON Data File",scenario:"Read test data from external JSON file to separate data from test logic.",steps:["Create test-data/users.json file","Define array of user test cases","Read JSON file in test using fs module","Use test.each with read data","Run tests with data from file","Add new test case by editing JSON file only"],code:`// test-data/formData.json
[
  {
    "firstName": "Alice",
    "lastName":  "Smith",
    "email":     "alice@test.com",
    "phone":     "1234567890",
    "gender":    "Female"
  },
  {
    "firstName": "Bob",
    "lastName":  "Jones",
    "email":     "bob@test.com",
    "phone":     "9876543210",
    "gender":    "Male"
  }
]

// tests/dataFromFile.spec.ts
import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

// Read test data from JSON file
const rawData = fs.readFileSync(
  path.join(__dirname, '../test-data/formData.json'),
  'utf-8'
);
const formData = JSON.parse(rawData);

// Use data with test.each
test.each(formData)(
  'form test for $firstName $lastName',
  async ({ page, firstName, lastName, email, phone, gender }) => {
    await page.goto('/automation-practice-form');

    await page.getByPlaceholder('First Name').fill(firstName);
    await page.getByPlaceholder('Last Name').fill(lastName);
    await page.getByPlaceholder('name@example.com').fill(email);
    await page.getByPlaceholder('Mobile Number').fill(phone);
    await page.getByLabel(gender).check();

    await page.getByRole('button', { name: 'Submit' }).click();

    await expect(page.locator('.modal-title')).toContainText('Thanks');
    await expect(page.locator('.table-responsive')).toContainText(firstName);
  }
);`}]},"Task 12: CI/CD & Reporting":{title:"CI/CD Integration & Test Reporting",description:`Playwright integrates seamlessly with CI/CD pipelines and provides rich reporting capabilities to communicate test results.

Playwright Reporters:

1. HTML Reporter (Default)
   - Full interactive HTML report
   - Screenshots, videos, traces
   - npx playwright show-report

2. List Reporter
   - Simple console output
   - Good for CI logs

3. JSON Reporter
   - Machine-readable output
   - Integration with other tools

4. JUnit Reporter
   - XML format for CI systems
   - Jenkins, Azure DevOps compatible

5. Allure Reporter
   - Beautiful visual reports
   - Timeline, categories, trends
   - npm i allure-playwright

GitHub Actions Integration:
   - Use microsoft/playwright-github-action
   - Or simple npm install and npx playwright test
   - Upload HTML report as artifact
   - Matrix strategy for multiple browsers

CI Best Practices:
   - Run headless (default)
   - Set retries: 2 for flaky tests
   - Limit workers: 1 for stability
   - Upload artifacts: reports, screenshots, videos
   - Use --reporter=junit for CI logs
   - Cache node_modules for faster runs

Trace Viewer:
   - trace: 'on-first-retry' in config
   - Records all actions, screenshots, network
   - npx playwright show-trace trace.zip
   - Powerful debugging tool`,keyPoints:["trace: retain-on-failure captures full test trace for debugging","Upload Playwright report folder as CI artifact to review failures","Use PLAYWRIGHT_BROWSERS_PATH to cache browser binaries in CI","GitHub Actions has official Playwright action for easy setup","Multiple reporters can be configured: reporter: ['html', 'junit']","Trace viewer shows timeline of all actions with DOM snapshots"],exercises:[{id:1,title:"Configure Multiple Reporters",scenario:"Set up HTML, JUnit, and JSON reporters in playwright.config.ts for both local and CI reporting.",steps:["Configure multiple reporters in playwright.config.ts","Generate HTML report after test run","Generate JUnit XML for CI integration","Open and explore the HTML report","Configure trace recording on failure","View trace file with trace viewer"],code:`// playwright.config.ts - with full reporting setup
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,

  // Multiple reporters
  reporter: [
    ['html',  { outputFolder: 'playwright-report', open: 'never' }],
    ['junit', { outputFile: 'test-results/results.xml' }],
    ['json',  { outputFile: 'test-results/results.json' }],
    ['list']  // Console output
  ],

  use: {
    baseURL: 'https://demoqa.com',

    // Artifacts on failure
    screenshot: 'only-on-failure',
    video:      'retain-on-failure',
    trace:      'retain-on-failure',
  },

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox',  use: { ...devices['Desktop Firefox'] } }
  ]
});

// Terminal commands:
// Run all tests:          npx playwright test
// Open HTML report:       npx playwright show-report
// View trace:             npx playwright show-trace trace.zip
// Run with list reporter: npx playwright test --reporter=list`},{id:2,title:"GitHub Actions CI Pipeline",scenario:"Create a GitHub Actions workflow to run Playwright tests on every push and pull request.",steps:["Create .github/workflows folder","Create playwright.yml workflow file","Configure trigger on push and PR","Install Node, dependencies, and browsers","Run tests in headless mode","Upload HTML report as artifact","View test results in GitHub Actions"],code:`# .github/workflows/playwright.yml
name: Playwright Tests

on:
  push:
    branches: [ main, master ]
  pull_request:
    branches: [ main, master ]

jobs:
  test:
    timeout-minutes: 60
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Install Playwright browsers
        run: npx playwright install --with-deps

      - name: Run Playwright tests
        run: npx playwright test
        env:
          CI: true

      - name: Upload HTML Report
        uses: actions/upload-artifact@v4
        if: always()   # Upload even if tests fail
        with:
          name: playwright-report
          path: playwright-report/
          retention-days: 30

      - name: Upload Test Results (JUnit)
        uses: actions/upload-artifact@v4
        if: always()
        with:
          name: test-results
          path: test-results/`}]}},ml={"Task 1: Introduction to REST & APIs":{title:"Introduction to REST & APIs",description:`REST (Representational State Transfer) is an architectural style for designing networked applications. RESTful APIs use HTTP requests to perform CRUD operations on resources.

What is an API?
   - Application Programming Interface
   - Allows two applications to communicate
   - Client sends Request, Server returns Response
   - Data exchanged in JSON or XML format

HTTP Methods:
   - GET    : Retrieve data (Read)
   - POST   : Create new resource
   - PUT    : Update entire resource
   - PATCH  : Partially update resource
   - DELETE : Remove resource

HTTP Status Codes:
   - 200 OK            : Success
   - 201 Created       : Resource created
   - 204 No Content    : Success, no response body
   - 400 Bad Request   : Invalid request data
   - 401 Unauthorized  : Authentication required
   - 403 Forbidden     : No permission
   - 404 Not Found     : Resource does not exist
   - 500 Internal Server Error : Server-side error

Request Structure:
   - URL/Endpoint
   - HTTP Method
   - Headers (Content-Type, Authorization)
   - Request Body (for POST/PUT/PATCH)
   - Query Parameters (?key=value)
   - Path Parameters (/users/{id})

Response Structure:
   - Status Code
   - Response Headers
   - Response Body (JSON/XML)
   - Response Time`,keyPoints:["REST is stateless - each request is independent","JSON is the most common data format for REST APIs","GET requests should never modify data","POST creates resource, PUT replaces it, PATCH updates partially","Status codes 2xx = success, 4xx = client error, 5xx = server error","Headers carry metadata like Content-Type and Authorization tokens"],exercises:[{id:1,title:"Explore APIs using Postman",scenario:"Before writing code, explore the free JSONPlaceholder API (https://jsonplaceholder.typicode.com) using Postman to understand request/response structure.",steps:["Download and install Postman","Create a GET request to https://jsonplaceholder.typicode.com/users","Observe the JSON response structure","Create a GET request to /users/1 (path parameter)","Create a POST request to /posts with JSON body","Observe status codes for each request","Check response headers like Content-Type"],code:`// API Endpoints to explore in Postman:

// GET all users
GET https://jsonplaceholder.typicode.com/users

// GET single user by ID (path parameter)
GET https://jsonplaceholder.typicode.com/users/1

// GET posts with query parameter
GET https://jsonplaceholder.typicode.com/posts?userId=1

// POST - create new post
POST https://jsonplaceholder.typicode.com/posts
Content-Type: application/json

{
  "title": "My First Post",
  "body": "This is the post body",
  "userId": 1
}

// Expected Responses:
// GET users    -> 200 OK
// POST posts   -> 201 Created
// GET /users/999 -> 404 Not Found`},{id:2,title:"Understand JSON Structure",scenario:"Practice reading and understanding JSON response structures that you will validate in Rest Assured tests.",steps:["Identify JSON object vs JSON array","Navigate nested JSON objects","Identify data types: string, number, boolean, array","Note field names for later use in assertions","Understand null values in JSON"],code:`// Sample JSON Response - User Object
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "city": "Gwenborough",
    "zipcode": "92998-3874"
  },
  "phone": "1-770-736-0988",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "bs": "harness real-time e-markets"
  }
}

// JSON Array of Posts
[
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere",
    "body": "quia et suscipit"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore"
  }
]

// Accessing values in Rest Assured:
// body("name", equalTo("Leanne Graham"))
// body("address.city", equalTo("Gwenborough"))
// body("[0].title", equalTo("sunt aut facere"))  // array index`}]},"Task 2: Rest Assured Setup":{title:"Rest Assured Setup & Configuration",description:`Rest Assured is a Java DSL (Domain Specific Language) for simplifying testing of REST services. It provides a fluent API that makes writing API tests feel like plain English.

Why Rest Assured?
   - No need to write HTTP connection code manually
   - Built-in JSON/XML parsing
   - Chainable fluent API: given().when().then()
   - Integrates perfectly with TestNG and JUnit
   - Supports all HTTP methods
   - Built-in serialization/deserialization with Jackson

Rest Assured Structure:
given()   - Setup request (headers, params, body, auth)
  .when() - Execute request (get, post, put, delete)
  .then() - Validate response (status, body, headers)

Maven Dependencies:
   - rest-assured
   - json-path
   - xml-path
   - jackson-databind (for POJO serialization)
   - testng

Base URI Configuration:
   - Set globally: RestAssured.baseURI
   - Set globally: RestAssured.basePath
   - Set globally: RestAssured.port
   - Or use RequestSpecification for reusable config

RequestSpecification:
   - Define base URL, headers, auth once
   - Reuse across all tests
   - Clean and maintainable`,keyPoints:["Rest Assured uses BDD-style syntax: given/when/then","Set RestAssured.baseURI once in @BeforeClass to avoid repetition","RequestSpecification allows reusable request configuration","ResponseSpecification allows reusable response validation","Always add io.rest-assured:rest-assured dependency not old com.jayway","Enable logging with .log().all() for debugging"],exercises:[{id:1,title:"Setup Rest Assured Maven Project",scenario:"Create a Maven project with all required Rest Assured dependencies and write a basic configuration class.",steps:["Create Maven project in IntelliJ","Add rest-assured dependency in pom.xml","Add jackson-databind for JSON serialization","Add testng dependency","Create BaseTest class with RestAssured.baseURI setup","Write first simple GET test to verify setup works"],code:`<!-- pom.xml dependencies -->
<dependencies>
  <dependency>
    <groupId>io.rest-assured</groupId>
    <artifactId>rest-assured</artifactId>
    <version>5.3.2</version>
    <scope>test</scope>
  </dependency>

  <dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>2.15.2</version>
  </dependency>

  <dependency>
    <groupId>org.testng</groupId>
    <artifactId>testng</artifactId>
    <version>7.8.0</version>
    <scope>test</scope>
  </dependency>

  <dependency>
    <groupId>io.rest-assured</groupId>
    <artifactId>json-path</artifactId>
    <version>5.3.2</version>
  </dependency>
</dependencies>

// BaseTest.java
public class BaseTest {
  protected RequestSpecification requestSpec;

  @BeforeClass
  public void setup() {
    RestAssured.baseURI = "https://jsonplaceholder.typicode.com";

    requestSpec = new RequestSpecBuilder()
      .setBaseUri("https://jsonplaceholder.typicode.com")
      .setContentType(ContentType.JSON)
      .build();
  }
}`},{id:2,title:"First Rest Assured GET Request",scenario:"Write your first Rest Assured test using given/when/then syntax to call GET /users and validate the response.",steps:["Create FirstApiTest class extending BaseTest","Write GET request using given().when().then()","Assert status code is 200","Enable logging to see request and response","Extract and print response body","Run the test and verify output"],code:`import io.restassured.RestAssured;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class FirstApiTest extends BaseTest {

  @Test
  public void firstGetRequest() {
    given()
      .log().all()            // Log request details
    .when()
      .get("/users")          // HTTP GET /users
    .then()
      .log().all()            // Log response details
      .statusCode(200);       // Assert status is 200
  }

  @Test
  public void getResponseBody() {
    Response response =
      given()
        .when()
        .get("/users/1")
        .then()
        .statusCode(200)
        .extract().response();

    System.out.println("Status Code : " + response.getStatusCode());
    System.out.println("Response Body: " + response.getBody().asString());
    System.out.println("Response Time: " + response.getTime() + "ms");
    System.out.println("Content-Type : " + response.getContentType());
  }
}`}]},"Task 3: GET Requests & Assertions":{title:"GET Requests & Response Assertions",description:`GET requests retrieve data from the server. Rest Assured provides powerful assertion capabilities using Hamcrest matchers to validate every aspect of the response.

Hamcrest Matchers (most used):
   - equalTo(value)          : Exact match
   - containsString(text)    : String contains
   - hasSize(n)              : Collection size
   - not(value)              : Negation
   - greaterThan(n)          : Numeric comparison
   - lessThan(n)             : Numeric comparison
   - notNullValue()          : Not null
   - nullValue()             : Is null
   - hasItem(value)          : Array contains item
   - hasItems(v1,v2)         : Array contains all
   - everyItem(matcher)      : All items match

JSON Path Expressions:
   - body("name")            : Root level field
   - body("address.city")    : Nested field
   - body("[0].name")        : First array item
   - body("users[1].email") : Second item field
   - body("*.name")          : All name fields
   - body("findAll{it.id>2}.name") : Groovy filter

Header Assertions:
   - header("Content-Type", containsString("json"))
   - headers("X-Custom", "value")

Response Time:
   - time(lessThan(2000L))   : Response under 2 seconds`,keyPoints:["Import static io.restassured.RestAssured.* for clean syntax","Import static org.hamcrest.Matchers.* for matchers","JSON path uses dot notation for nested fields: address.city","Array elements accessed by index: [0].name or users[0].id",'Use extract().path("field") to get value for use in next request','body("size()") checks total number of items in array response'],exercises:[{id:1,title:"GET Single Resource & Validate Fields",scenario:"Call GET /users/1 and validate multiple fields in the response including nested objects.",steps:["Send GET request to /users/1","Assert status code 200","Assert name field equals expected value","Assert nested field address.city","Assert email contains @ symbol","Assert id is not null","Assert response time is less than 3 seconds"],code:`import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class GetRequestTest extends BaseTest {

  @Test
  public void validateSingleUser() {
    given()
      .pathParam("id", 1)
    .when()
      .get("/users/{id}")
    .then()
      .statusCode(200)
      .body("id",              equalTo(1))
      .body("name",            equalTo("Leanne Graham"))
      .body("username",        equalTo("Bret"))
      .body("email",           containsString("@"))
      .body("address.city",    equalTo("Gwenborough"))
      .body("address.zipcode", notNullValue())
      .body("company.name",    not(emptyString()))
      .time(lessThan(3000L));
  }

  @Test
  public void validateAllUsersResponse() {
    given()
    .when()
      .get("/users")
    .then()
      .statusCode(200)
      .body("$",          hasSize(10))          // 10 users total
      .body("id",         hasSize(10))          // 10 id fields
      .body("name",       hasItem("Leanne Graham"))  // array contains
      .body("[0].name",   equalTo("Leanne Graham"))  // first user
      .body("[9].id",     equalTo(10))          // last user id
      .header("Content-Type", containsString("application/json"));
  }
}`},{id:2,title:"Query Parameters & Path Parameters",scenario:"Practice using path parameters and query parameters to filter API responses.",steps:["Use pathParam() for /users/{id}","Use queryParam() to filter posts by userId","Assert filtered results contain only matching userId","Use multiple query parameters together","Extract filtered list size and assert"],code:`public class ParameterTest extends BaseTest {

  @Test
  public void getPostsByUserId() {
    // Query parameter: /posts?userId=1
    given()
      .queryParam("userId", 1)
    .when()
      .get("/posts")
    .then()
      .statusCode(200)
      .body("$",         hasSize(10))
      .body("userId",    everyItem(equalTo(1)))  // all posts belong to userId 1
      .body("id",        hasSize(10));
  }

  @Test
  public void getCommentsByPostId() {
    // Multiple params: /comments?postId=1
    given()
      .queryParam("postId", 1)
    .when()
      .get("/comments")
    .then()
      .statusCode(200)
      .body("$",        hasSize(5))
      .body("postId",   everyItem(equalTo(1)))
      .body("email",    everyItem(containsString("@")));
  }

  @Test
  public void pathAndQueryParamCombined() {
    // Path param for user, then get their albums
    int userId = 1;
    given()
      .queryParam("userId", userId)
    .when()
      .get("/albums")
    .then()
      .statusCode(200)
      .body("userId",   everyItem(equalTo(userId)))
      .body("title",    everyItem(not(emptyString())));
  }
}`},{id:3,title:"Extract Response Values",scenario:"Extract values from API response to use in subsequent requests or for complex assertions in Java code.",steps:["Extract single field value using extract().path()","Extract entire response as String","Extract response as JsonPath object","Extract list of values from array response","Use extracted value in next API call"],code:`public class ExtractResponseTest extends BaseTest {

  @Test
  public void extractAndUseValues() {
    // Extract single value
    String name = given()
      .when()
      .get("/users/1")
      .then()
      .statusCode(200)
      .extract().path("name");

    System.out.println("User Name: " + name);
    Assert.assertEquals(name, "Leanne Graham");

    // Extract nested value
    String city = given()
      .when()
      .get("/users/1")
      .then()
      .extract().path("address.city");
    System.out.println("City: " + city);

    // Extract list of all user names
    List<String> allNames = given()
      .when()
      .get("/users")
      .then()
      .extract().path("name");
    System.out.println("All names: " + allNames);
    Assert.assertEquals(allNames.size(), 10);

    // Extract as JsonPath for complex operations
    JsonPath jsonPath = given()
      .when()
      .get("/users")
      .then()
      .extract().jsonPath();

    String firstUserEmail = jsonPath.getString("[0].email");
    List<String> emails = jsonPath.getList("email");
    System.out.println("First email: " + firstUserEmail);
    System.out.println("Total emails: " + emails.size());
  }
}`}]},"Task 4: POST, PUT, PATCH, DELETE":{title:"POST, PUT, PATCH & DELETE Requests",description:`While GET retrieves data, the other HTTP methods modify data on the server. Understanding how to send request bodies and validate responses is essential for complete API testing.

POST Request:
   - Creates a new resource
   - Request body contains new resource data
   - Returns 201 Created on success
   - Response body usually contains created resource with ID

PUT Request:
   - Replaces entire existing resource
   - Must send all fields even unchanged ones
   - Returns 200 OK on success
   - If resource not found may return 404

PATCH Request:
   - Partially updates existing resource
   - Send only fields you want to change
   - Returns 200 OK on success
   - More efficient than PUT for small changes

DELETE Request:
   - Removes a resource
   - Usually returns 200 OK or 204 No Content
   - Response body may be empty
   - Subsequent GET should return 404

Request Body Options in Rest Assured:
   - String (raw JSON)
   - HashMap/Map object
   - POJO class (auto-serialized by Jackson)
   - JSONObject from org.json library

Content-Type Header:
   - Must set Content-Type: application/json for body requests
   - Use .contentType(ContentType.JSON) in Rest Assured`,keyPoints:["Always set Content-Type header for POST/PUT/PATCH requests","POST returns 201, PUT/PATCH return 200, DELETE returns 200 or 204","POJO serialization requires Jackson dependency and getter/setter methods","JSONPlaceholder is fake API - data not actually saved but returns valid response",'body("id", notNullValue()) verifies server assigned an ID to new resource',"For DELETE: verify 200/204, then GET same resource to confirm 404"],exercises:[{id:1,title:"POST Request - Create Resource",scenario:"Send a POST request to create a new post on /posts endpoint with JSON body using different body formats.",steps:["Send POST with raw JSON String body","Assert status code 201 Created","Assert response body contains sent data","Assert server assigned an ID","Send POST using HashMap as body","Send POST using POJO class as body"],code:`public class PostRequestTest extends BaseTest {

  @Test
  public void createPostWithStringBody() {
    String requestBody = "{" +
      "\\"title\\": \\"Rest Assured Test Post\\"," +
      "\\"body\\": \\"This is created by Rest Assured\\"," +
      "\\"userId\\": 1" +
      "}";

    given()
      .contentType(ContentType.JSON)
      .body(requestBody)
    .when()
      .post("/posts")
    .then()
      .statusCode(201)
      .body("title",  equalTo("Rest Assured Test Post"))
      .body("userId", equalTo(1))
      .body("id",     notNullValue())
      .log().body();
  }

  @Test
  public void createPostWithHashMap() {
    HashMap<String, Object> body = new HashMap<>();
    body.put("title",  "Post via HashMap");
    body.put("body",   "Body content here");
    body.put("userId", 1);

    given()
      .contentType(ContentType.JSON)
      .body(body)
    .when()
      .post("/posts")
    .then()
      .statusCode(201)
      .body("title", equalTo("Post via HashMap"))
      .body("id",    notNullValue());
  }

  @Test
  public void createPostWithPOJO() {
    // Using POJO class for cleaner code
    PostRequest postRequest = new PostRequest();
    postRequest.setTitle("Post via POJO");
    postRequest.setBody("Clean POJO body");
    postRequest.setUserId(1);

    given()
      .contentType(ContentType.JSON)
      .body(postRequest)
    .when()
      .post("/posts")
    .then()
      .statusCode(201)
      .body("title", equalTo("Post via POJO"));
  }
}`},{id:2,title:"PUT and PATCH Requests",scenario:"Update an existing post using both PUT (full update) and PATCH (partial update) and validate the changes.",steps:["Send PUT to /posts/1 with full updated body","Assert all fields are updated in response","Send PATCH to /posts/1 with only title field","Assert only title changed in response","Compare PUT vs PATCH behavior"],code:`public class UpdateRequestTest extends BaseTest {

  @Test
  public void updatePostWithPUT() {
    // PUT - full resource replacement
    HashMap<String, Object> fullUpdate = new HashMap<>();
    fullUpdate.put("id",     1);
    fullUpdate.put("title",  "Updated Title via PUT");
    fullUpdate.put("body",   "Updated body content");
    fullUpdate.put("userId", 1);

    given()
      .contentType(ContentType.JSON)
      .body(fullUpdate)
    .when()
      .put("/posts/1")
    .then()
      .statusCode(200)
      .body("id",    equalTo(1))
      .body("title", equalTo("Updated Title via PUT"))
      .body("body",  equalTo("Updated body content"))
      .log().body();
  }

  @Test
  public void partialUpdateWithPATCH() {
    // PATCH - only send fields to update
    HashMap<String, Object> partialUpdate = new HashMap<>();
    partialUpdate.put("title", "Only Title Updated via PATCH");

    given()
      .contentType(ContentType.JSON)
      .body(partialUpdate)
    .when()
      .patch("/posts/1")
    .then()
      .statusCode(200)
      .body("title",  equalTo("Only Title Updated via PATCH"))
      .body("userId", equalTo(1))  // other fields unchanged
      .log().body();
  }
}`},{id:3,title:"DELETE Request",scenario:"Delete a resource using DELETE method, verify the deletion response, and confirm the resource is gone.",steps:["Send DELETE request to /posts/1","Assert status code 200 or 204","Verify response body is empty or confirmation message","Send GET to same endpoint after delete","Assert 404 Not Found after deletion"],code:`public class DeleteRequestTest extends BaseTest {

  @Test
  public void deletePost() {
    // Delete the post
    given()
    .when()
      .delete("/posts/1")
    .then()
      .statusCode(200)
      .log().all();
  }

  @Test
  public void deleteAndVerify() {
    int postId = 1;

    // Step 1: Verify post exists
    given()
    .when()
      .get("/posts/" + postId)
    .then()
      .statusCode(200)
      .body("id", equalTo(postId));

    // Step 2: Delete the post
    given()
    .when()
      .delete("/posts/" + postId)
    .then()
      .statusCode(200);

    System.out.println("Post " + postId + " deleted successfully");
    // Note: JSONPlaceholder is fake API so GET after delete
    // still returns 200, but in real APIs it would return 404
  }
}`}]},"Task 5: Request & Response Specifications":{title:"Request & Response Specifications",description:`Specifications allow you to define reusable request and response configurations. Instead of repeating headers, base URL, and common assertions in every test, you define them once and reuse everywhere.

RequestSpecification:
   - Defines common request setup
   - Base URL, headers, auth, content type
   - Built using RequestSpecBuilder
   - Used with given(requestSpec)

ResponseSpecification:
   - Defines common response validations
   - Status codes, headers to check
   - Built using ResponseSpecBuilder
   - Used with then(responseSpec)

Benefits:
   - DRY principle - Don't Repeat Yourself
   - Change base URL in one place
   - Common headers managed centrally
   - Tests become cleaner and focused

Spec Builder Methods:
   - setBaseUri(url)
   - setBasePath(path)
   - addHeader(name, value)
   - setContentType(type)
   - addQueryParam(key, value)
   - expectStatusCode(code)
   - expectHeader(name, value)
   - expectResponseTime(matcher)`,keyPoints:["RequestSpecBuilder builds reusable request config","ResponseSpecBuilder builds reusable response validations","Specs reduce boilerplate code significantly","Multiple specs can be merged: new RequestSpecBuilder().addRequestSpecification(baseSpec)","Store specs as static fields in BaseTest class","Specs can be overridden per test when needed"],exercises:[{id:1,title:"Create Reusable Specifications",scenario:"Create RequestSpecification and ResponseSpecification in BaseTest that all test classes can use to eliminate code duplication.",steps:["Create RequestSpecBuilder with base URL and headers","Create ResponseSpecBuilder with common status and header checks","Use both specs in multiple test methods","Create a separate spec for authenticated requests","Override spec for one test that needs different config"],code:`public class BaseTest {
  protected static RequestSpecification requestSpec;
  protected static ResponseSpecification responseSpec;
  protected static RequestSpecification authRequestSpec;

  @BeforeClass
  public static void setupSpecs() {
    // Base Request Specification
    requestSpec = new RequestSpecBuilder()
      .setBaseUri("https://jsonplaceholder.typicode.com")
      .setContentType(ContentType.JSON)
      .addHeader("Accept", "application/json")
      .log(LogDetail.ALL)
      .build();

    // Base Response Specification
    responseSpec = new ResponseSpecBuilder()
      .expectHeader("Content-Type", containsString("application/json"))
      .expectResponseTime(lessThan(5000L))
      .log(LogDetail.ALL)
      .build();

    // Authenticated Request Spec (example with Bearer token)
    authRequestSpec = new RequestSpecBuilder()
      .addRequestSpecification(requestSpec)  // inherit base
      .addHeader("Authorization", "Bearer your-token-here")
      .build();
  }
}

// Using specs in tests
public class SpecificationTest extends BaseTest {

  @Test
  public void getUserWithSpec() {
    given(requestSpec)
    .when()
      .get("/users/1")
    .then()
      .spec(responseSpec)         // use response spec
      .statusCode(200)
      .body("name", equalTo("Leanne Graham"));
  }

  @Test
  public void getAllUsersWithSpec() {
    given(requestSpec)
    .when()
      .get("/users")
    .then()
      .spec(responseSpec)
      .statusCode(200)
      .body("$", hasSize(10));
  }
}`}]},"Task 6: POJO Serialization & Deserialization":{title:"POJO Serialization & Deserialization",description:`POJO (Plain Old Java Object) serialization converts Java objects to JSON for requests, and deserialization converts JSON responses back to Java objects. Jackson library handles this automatically.

Serialization (Java Object -> JSON):
   - Create POJO class with fields
   - Add getters and setters
   - Pass POJO as body in Rest Assured
   - Jackson converts to JSON automatically

Deserialization (JSON -> Java Object):
   - Define POJO matching JSON structure
   - Use extract().as(ClassName.class)
   - Access response data as Java object
   - Type-safe access to fields

Jackson Annotations:
   - @JsonProperty("field_name") : Map different names
   - @JsonIgnore               : Skip field
   - @JsonIgnoreProperties(ignoreUnknown=true) : Skip unknown fields

Lombok (optional but recommended):
   - @Data generates getters, setters, toString
   - @Builder generates builder pattern
   - @NoArgsConstructor and @AllArgsConstructor
   - Reduces boilerplate significantly

Nested POJOs:
   - Create separate class for each nested object
   - Address class inside User class
   - List<Post> for array responses`,keyPoints:["Jackson requires no-args constructor and getters/setters","Use @JsonIgnoreProperties(ignoreUnknown=true) to handle extra fields","extract().as(Class.class) deserializes response to POJO","Lombok @Data eliminates need to write getters/setters manually","Nested objects need their own POJO class","List<MyClass> works for array responses"],exercises:[{id:1,title:"Create Request and Response POJOs",scenario:"Create POJO classes for Post request and User response, then use them in API tests for type-safe interactions.",steps:["Create PostRequest POJO with title, body, userId fields","Create UserResponse POJO with id, name, email, address fields","Create Address nested POJO","Use PostRequest as request body in POST test","Deserialize GET /users/1 response into UserResponse POJO","Access fields directly on POJO object"],code:`// PostRequest.java - Request POJO
public class PostRequest {
  private String title;
  private String body;
  private int userId;

  // Constructors
  public PostRequest() {}
  public PostRequest(String title, String body, int userId) {
    this.title = title;
    this.body = body;
    this.userId = userId;
  }

  // Getters and Setters
  public String getTitle()   { return title; }
  public void setTitle(String title) { this.title = title; }
  public String getBody()    { return body; }
  public void setBody(String body)   { this.body = body; }
  public int getUserId()     { return userId; }
  public void setUserId(int userId)  { this.userId = userId; }
}

// UserResponse.java - Response POJO
@JsonIgnoreProperties(ignoreUnknown = true)
public class UserResponse {
  private int id;
  private String name;
  private String username;
  private String email;
  private Address address;

  // Getters and Setters...

  public static class Address {
    private String street;
    private String city;
    private String zipcode;
    // Getters and Setters...
  }
}

// Test using POJOs
public class PojoTest extends BaseTest {

  @Test
  public void createPostWithPojo() {
    PostRequest request = new PostRequest("POJO Title", "POJO Body", 1);

    given(requestSpec)
      .body(request)
    .when()
      .post("/posts")
    .then()
      .statusCode(201)
      .body("title", equalTo("POJO Title"));
  }

  @Test
  public void deserializeUserResponse() {
    UserResponse user = given(requestSpec)
    .when()
      .get("/users/1")
    .then()
      .statusCode(200)
      .extract().as(UserResponse.class);

    // Type-safe field access
    System.out.println("Name:  " + user.getName());
    System.out.println("Email: " + user.getEmail());
    System.out.println("City:  " + user.getAddress().getCity());

    Assert.assertEquals(user.getName(), "Leanne Graham");
    Assert.assertEquals(user.getAddress().getCity(), "Gwenborough");
  }
}`}]},"Task 7: Authentication":{title:"API Authentication",description:`Most real-world APIs require authentication to protect resources. Rest Assured supports all common authentication mechanisms.

Authentication Types:

1. Basic Authentication
   - Username and password encoded in Base64
   - Sent in Authorization header
   - Format: Authorization: Basic base64(user:pass)
   - Not secure without HTTPS

2. Bearer Token (OAuth 2.0)
   - Token obtained from login endpoint
   - Sent in Authorization header
   - Format: Authorization: Bearer <token>
   - Most common in modern APIs

3. API Key
   - Unique key provided by API provider
   - Can be in header, query param, or body
   - Simpler than OAuth but less secure

4. OAuth 2.0
   - Industry standard authorization framework
   - Get access token using client credentials
   - Token has expiry, need refresh

5. Digest Authentication
   - More secure than Basic
   - Server sends challenge, client responds

Rest Assured Auth Methods:
   - .auth().basic(username, password)
   - .auth().oauth2(token)
   - .auth().preemptive().basic(u, p)
   - .header("Authorization", "Bearer " + token)
   - .header("X-API-Key", apiKey)`,keyPoints:["Basic auth sends credentials in every request - always use HTTPS","Bearer token is obtained once (login) and reused for subsequent requests","preemptive().basic() sends auth without waiting for 401 challenge","Store tokens/keys in config files or environment variables, never hardcode","Token expiry handling: refresh token before expiry or on 401 response","API keys in headers are more secure than in URL query parameters"],exercises:[{id:1,title:"Basic Authentication",scenario:"Test an API endpoint that requires Basic Authentication using Rest Assured auth methods.",steps:["Use auth().basic() with credentials","Verify successful 200 response with auth","Test without auth to see 401 response","Use preemptive basic auth","Add auth to RequestSpecification for reuse"],code:`public class AuthTest extends BaseTest {

  @Test
  public void basicAuthentication() {
    // Basic Auth
    given()
      .baseUri("https://httpbin.org")
      .auth().basic("user", "passwd")
    .when()
      .get("/basic-auth/user/passwd")
    .then()
      .statusCode(200)
      .body("authenticated", equalTo(true))
      .body("user",          equalTo("user"));
  }

  @Test
  public void preemptiveBasicAuth() {
    // Preemptive: sends auth without waiting for 401
    given()
      .baseUri("https://httpbin.org")
      .auth().preemptive().basic("user", "passwd")
    .when()
      .get("/basic-auth/user/passwd")
    .then()
      .statusCode(200);
  }

  @Test
  public void withoutAuthExpects401() {
    given()
      .baseUri("https://httpbin.org")
    .when()
      .get("/basic-auth/user/passwd")
    .then()
      .statusCode(401);
  }
}`},{id:2,title:"Bearer Token Authentication",scenario:"Simulate a login flow where you first get a token, then use it in subsequent authenticated requests.",steps:["Send POST /login with credentials","Extract token from login response","Use extracted token in Authorization header","Make authenticated GET request","Store token in RequestSpecification for reuse"],code:`public class BearerTokenTest extends BaseTest {
  private static String authToken;

  @BeforeClass
  public void getAuthToken() {
    // Step 1: Login to get token
    HashMap<String, String> credentials = new HashMap<>();
    credentials.put("username", "admin");
    credentials.put("password", "password123");

    authToken = given()
      .contentType(ContentType.JSON)
      .body(credentials)
    .when()
      .post("https://reqres.in/api/login")
    .then()
      .statusCode(200)
      .extract().path("token");

    System.out.println("Auth Token: " + authToken);
  }

  @Test
  public void authenticatedRequest() {
    // Step 2: Use token in header
    given()
      .baseUri("https://reqres.in")
      .header("Authorization", "Bearer " + authToken)
    .when()
      .get("/api/users")
    .then()
      .statusCode(200)
      .body("data", not(empty()));
  }

  @Test
  public void oAuth2Style() {
    // Rest Assured oauth2 method
    given()
      .baseUri("https://reqres.in")
      .auth().oauth2(authToken)
    .when()
      .get("/api/users")
    .then()
      .statusCode(200);
  }
}`}]},"Task 8: API Chaining":{title:"API Chaining & E2E Scenarios",description:`API chaining means using the output of one API call as the input for the next. This mimics real user workflows and allows testing end-to-end scenarios.

Common Chaining Patterns:

1. Create then Read:
   POST /users -> extract ID -> GET /users/{id}
   Verify created resource exists

2. Create then Update:
   POST /posts -> extract ID -> PUT /posts/{id}
   Verify update applied correctly

3. Create then Delete:
   POST /resource -> extract ID -> DELETE /resource/{id}
   Verify deletion with GET -> 404

4. Login then Operate:
   POST /login -> extract token -> GET /protected with token
   Full authentication flow

5. Search then Act:
   GET /users?name=John -> extract first ID -> GET /users/{id}/posts
   Use search result to drive next call

Best Practices for Chaining:
   - Extract only needed values between calls
   - Use TestNG @Test(dependsOnMethods) for ordered execution
   - Store shared state as class-level variables
   - Clean up created data in @AfterClass
   - Use soft assertions to continue even after failures`,keyPoints:["extract().path() returns the value for use in next request","Class-level variables share extracted values between @Test methods","dependsOnMethods ensures tests run in correct order","Always clean up test data created during chaining tests","Log each step clearly for debugging chain failures","Isolate each chain step in separate method for readability"],exercises:[{id:1,title:"CRUD Chaining Test",scenario:"Build a complete CRUD flow: Create a post, read it back, update it, verify update, then delete it and verify deletion.",steps:["POST /posts - Create a new post, extract ID","GET /posts/{id} - Verify created post","PUT /posts/{id} - Update the post","GET /posts/{id} - Verify updated fields","DELETE /posts/{id} - Delete the post","Verify each step with assertions"],code:`public class CrudChainTest extends BaseTest {
  private int createdPostId;

  @Test(priority = 1)
  public void step1_CreatePost() {
    HashMap<String, Object> body = new HashMap<>();
    body.put("title",  "Chain Test Post");
    body.put("body",   "Created in step 1");
    body.put("userId", 1);

    createdPostId = given(requestSpec)
      .body(body)
    .when()
      .post("/posts")
    .then()
      .statusCode(201)
      .body("title", equalTo("Chain Test Post"))
      .extract().path("id");

    System.out.println("Created Post ID: " + createdPostId);
    Assert.assertTrue(createdPostId > 0, "Post ID should be positive");
  }

  @Test(priority = 2, dependsOnMethods = "step1_CreatePost")
  public void step2_ReadCreatedPost() {
    given(requestSpec)
    .when()
      .get("/posts/" + createdPostId)
    .then()
      .statusCode(200)
      .body("id", equalTo(createdPostId));

    System.out.println("Step 2: Post " + createdPostId + " exists");
  }

  @Test(priority = 3, dependsOnMethods = "step2_ReadCreatedPost")
  public void step3_UpdatePost() {
    HashMap<String, Object> updateBody = new HashMap<>();
    updateBody.put("id",     createdPostId);
    updateBody.put("title",  "Updated Chain Post");
    updateBody.put("body",   "Updated in step 3");
    updateBody.put("userId", 1);

    given(requestSpec)
      .body(updateBody)
    .when()
      .put("/posts/" + createdPostId)
    .then()
      .statusCode(200)
      .body("title", equalTo("Updated Chain Post"));

    System.out.println("Step 3: Post updated");
  }

  @Test(priority = 4, dependsOnMethods = "step3_UpdatePost")
  public void step4_DeletePost() {
    given(requestSpec)
    .when()
      .delete("/posts/" + createdPostId)
    .then()
      .statusCode(200);

    System.out.println("Step 4: Post " + createdPostId + " deleted");
  }
}`},{id:2,title:"Login and Perform Operations",scenario:"Complete authentication chain: register user, login to get token, use token for CRUD operations.",steps:["POST /register - Create test user","POST /login - Login with created credentials","Extract auth token from login response","GET /users with Bearer token","Verify authenticated response"],code:`public class LoginChainTest {
  private String token;
  private int userId;

  @Test(priority = 1)
  public void step1_RegisterUser() {
    HashMap<String, String> body = new HashMap<>();
    body.put("email",    "testuser@reqres.in");
    body.put("password", "password123");

    userId = given()
      .baseUri("https://reqres.in")
      .contentType(ContentType.JSON)
      .body(body)
    .when()
      .post("/api/register")
    .then()
      .statusCode(200)
      .body("token", notNullValue())
      .extract().path("id");

    System.out.println("Registered User ID: " + userId);
  }

  @Test(priority = 2, dependsOnMethods = "step1_RegisterUser")
  public void step2_LoginAndGetToken() {
    HashMap<String, String> credentials = new HashMap<>();
    credentials.put("email",    "testuser@reqres.in");
    credentials.put("password", "password123");

    token = given()
      .baseUri("https://reqres.in")
      .contentType(ContentType.JSON)
      .body(credentials)
    .when()
      .post("/api/login")
    .then()
      .statusCode(200)
      .body("token", notNullValue())
      .extract().path("token");

    System.out.println("Token: " + token);
    Assert.assertNotNull(token);
  }

  @Test(priority = 3, dependsOnMethods = "step2_LoginAndGetToken")
  public void step3_GetUsersWithToken() {
    given()
      .baseUri("https://reqres.in")
      .header("Authorization", "Bearer " + token)
    .when()
      .get("/api/users")
    .then()
      .statusCode(200)
      .body("data",        not(empty()))
      .body("data[0].id",  notNullValue())
      .body("data[0].email", containsString("@"));

    System.out.println("Authenticated GET successful");
  }
}`}]},"Task 9: Response Validation Deep Dive":{title:"Advanced Response Validation",description:`Thorough response validation is what separates good API tests from basic ones. Rest Assured provides rich validation capabilities beyond simple status code checks.

What to Validate:

1. Status Code
   - Exact match: statusCode(200)
   - Range: statusCode(both(greaterThan(199)).and(lessThan(300)))

2. Response Headers
   - Content-Type header
   - Cache-Control
   - Custom headers

3. Response Body
   - Field values
   - Data types
   - Null checks
   - Array size and contents
   - Nested object values

4. Response Time
   - Performance threshold validation
   - SLA enforcement in CI/CD

5. Schema Validation
   - Validate JSON structure against schema
   - Catches missing/extra fields
   - Validates data types
   - Industry standard approach

JSON Schema Validation:
   - Define expected structure in .json file
   - matchesJsonSchemaInClasspath(schemaFile)
   - Validates field names, types, required fields
   - Works with complex nested structures

Soft Assertions:
   - Continue test even after assertion fails
   - Collect all failures at end
   - Use SoftAssert from TestNG`,keyPoints:["Schema validation catches API contract changes automatically","Always validate Content-Type header to ensure JSON response","Response time assertions enforce performance SLAs","Validate array empty vs not-empty states explicitly","Check both positive (data exists) and negative (error message) responses","Use SoftAssert to report all failures in one test run"],exercises:[{id:1,title:"Complete Response Validation",scenario:"Write comprehensive validation covering status code, headers, body fields, data types, array contents, and response time.",steps:["Validate status code is exactly 200","Validate Content-Type header contains application/json","Validate multiple body fields with different matchers","Validate array has correct size","Validate every item in array matches condition","Validate response time is under 3 seconds","Validate nested object fields"],code:`public class DeepValidationTest extends BaseTest {

  @Test
  public void comprehensiveValidation() {
    given(requestSpec)
    .when()
      .get("/users")
    .then()
      // Status Code
      .statusCode(200)

      // Headers
      .header("Content-Type",  containsString("application/json"))
      .header("Content-Type",  containsString("charset=utf-8"))

      // Array level checks
      .body("$",          hasSize(10))
      .body("$",          not(empty()))

      // Field existence and values
      .body("id",         hasSize(10))
      .body("id",         hasItem(1))
      .body("id",         hasItem(10))
      .body("name",       hasItem("Leanne Graham"))

      // Every item validation
      .body("id",         everyItem(notNullValue()))
      .body("email",      everyItem(containsString("@")))
      .body("username",   everyItem(not(emptyString())))

      // Nested field validation
      .body("[0].address.city",    equalTo("Gwenborough"))
      .body("[0].company.name",    not(emptyString()))

      // Response time
      .time(lessThan(3000L));
  }

  @Test
  public void validateErrorResponse() {
    given(requestSpec)
    .when()
      .get("/users/9999")     // Non-existent user
    .then()
      .statusCode(404)
      .body(isEmpty());
  }

  @Test
  public void validateWithSoftAssert() {
    SoftAssert softAssert = new SoftAssert();

    Response response = given(requestSpec)
      .when()
      .get("/users/1")
      .then()
      .extract().response();

    softAssert.assertEquals(response.getStatusCode(), 200, "Status code mismatch");
    softAssert.assertEquals(response.jsonPath().getString("name"), "Leanne Graham", "Name mismatch");
    softAssert.assertNotNull(response.jsonPath().getString("email"), "Email is null");
    softAssert.assertTrue(response.getTime() < 3000, "Response too slow");

    softAssert.assertAll();  // Reports all failures together
  }
}`},{id:2,title:"JSON Schema Validation",scenario:"Create a JSON schema file and use it to validate the structure of API responses automatically.",steps:["Add json-schema-validator dependency in pom.xml","Create user-schema.json in test resources","Define required fields and data types in schema","Use matchesJsonSchemaInClasspath() in test","Verify schema catches missing fields","Test both valid and invalid responses"],code:`// user-schema.json (save in src/test/resources)
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "required": ["id", "name", "email", "username"],
  "properties": {
    "id":       { "type": "integer" },
    "name":     { "type": "string"  },
    "username": { "type": "string"  },
    "email":    { "type": "string"  },
    "address": {
      "type": "object",
      "properties": {
        "street":  { "type": "string" },
        "city":    { "type": "string" },
        "zipcode": { "type": "string" }
      }
    }
  }
}

// Schema Validation Test
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;

public class SchemaValidationTest extends BaseTest {

  @Test
  public void validateUserSchema() {
    given(requestSpec)
    .when()
      .get("/users/1")
    .then()
      .statusCode(200)
      .body(matchesJsonSchemaInClasspath("user-schema.json"));

    System.out.println("Schema validation passed!");
  }
}`}]},"Task 10: Data-Driven API Testing":{title:"Data-Driven API Testing",description:`Data-driven testing runs the same test logic with multiple sets of data. For API testing, this means testing same endpoints with different inputs and expected outputs.

Approaches:

1. TestNG @DataProvider
   - Return Object[][] with multiple data sets
   - Test runs once per data row
   - Best for small inline data sets

2. External JSON File
   - Read test data from JSON file
   - Flexible and easy to update
   - Non-technical team can update data

3. Excel File
   - Apache POI to read Excel
   - Business-friendly format
   - Works well for large data sets

4. CSV File
   - Simplest format
   - Easy to generate and edit
   - Limited structure support

5. Faker Library
   - Generate random realistic test data
   - Names, emails, addresses, phone numbers
   - Useful for load testing or creating unique records

Benefits:
   - Test coverage without duplicating test code
   - Easy to add new test cases (just add data)
   - Clear separation of data and logic
   - Non-developers can add test scenarios`,keyPoints:["DataProvider name must match dataProvider attribute in @Test","Object[][] first dimension is rows, second is columns (parameters)","External data files go in src/test/resources","Parameterize both input data AND expected output for complete testing","Use Faker for generating unique data to avoid conflicts","Always log which data set is being tested for debugging failures"],exercises:[{id:1,title:"Data-Driven POST with DataProvider",scenario:"Use TestNG @DataProvider to run the same POST /posts test with multiple different data sets.",steps:["Create @DataProvider with multiple post data sets","Include valid and invalid data combinations","Reference DataProvider in @Test annotation","Assert different expected results per data set","Log which data set is currently running"],code:`public class DataDrivenApiTest extends BaseTest {

  @DataProvider(name = "postData")
  public Object[][] getPostData() {
    return new Object[][] {
      // title,               body,              userId, expectedStatus
      {"Valid Post Title",    "Valid body",      1,      201},
      {"Another Valid Post", "Another body",    2,      201},
      {"Tech Post",          "About Java",      3,      201},
      {"Empty Title",        "Body only",       1,      201}
    };
  }

  @Test(dataProvider = "postData")
  public void createPostDataDriven(String title, String body, int userId, int expectedStatus) {
    System.out.println("Testing with title: " + title + ", userId: " + userId);

    HashMap<String, Object> requestBody = new HashMap<>();
    requestBody.put("title",  title);
    requestBody.put("body",   body);
    requestBody.put("userId", userId);

    given(requestSpec)
      .body(requestBody)
    .when()
      .post("/posts")
    .then()
      .statusCode(expectedStatus)
      .body("title",  equalTo(title))
      .body("userId", equalTo(userId))
      .body("id",     notNullValue());
  }

  @DataProvider(name = "userIdData")
  public Object[][] getUserIdData() {
    return new Object[][] {
      {1, "Leanne Graham",  200},
      {2, "Ervin Howell",   200},
      {3, "Clementine",     200},
      {999, null,           404}   // invalid ID
    };
  }

  @Test(dataProvider = "userIdData")
  public void getUserDataDriven(int userId, String expectedName, int expectedStatus) {
    System.out.println("Testing userId: " + userId);

    ValidatableResponse response = given(requestSpec)
    .when()
      .get("/users/" + userId)
    .then()
      .statusCode(expectedStatus);

    if (expectedStatus == 200) {
      response.body("name", containsString(expectedName));
    }
  }
}`},{id:2,title:"Read Test Data from JSON File",scenario:"Store API test data in an external JSON file and read it in DataProvider for cleaner separation of data and logic.",steps:["Create testdata/posts.json in test resources","Define array of test cases in JSON","Create utility method to read JSON file","Convert JSON to Object[][] for DataProvider","Use file-based DataProvider in test"],code:`// src/test/resources/testdata/posts.json
[
  {
    "title":          "Java Automation",
    "body":           "Rest Assured is great",
    "userId":         1,
    "expectedStatus": 201
  },
  {
    "title":          "API Testing",
    "body":           "Testing REST APIs",
    "userId":         2,
    "expectedStatus": 201
  }
]

// TestDataReader.java utility
public class TestDataReader {
  public static List<Map<String, Object>> readJsonData(String filePath) throws IOException {
    ObjectMapper mapper = new ObjectMapper();
    File file = new File("src/test/resources/" + filePath);
    return mapper.readValue(file,
        new TypeReference<List<Map<String, Object>>>() {});
  }
}

// Test class
public class FileDataDrivenTest extends BaseTest {

  @DataProvider(name = "postsFromFile")
  public Object[][] getPostsFromFile() throws IOException {
    List<Map<String, Object>> testData = TestDataReader.readJsonData("testdata/posts.json");
    Object[][] data = new Object[testData.size()][1];
    for (int i = 0; i < testData.size(); i++) {
      data[i][0] = testData.get(i);
    }
    return data;
  }

  @Test(dataProvider = "postsFromFile")
  public void createPostFromFile(Map<String, Object> testCase) {
    System.out.println("Test case: " + testCase.get("title"));

    given(requestSpec)
      .body(testCase)
    .when()
      .post("/posts")
    .then()
      .statusCode((Integer) testCase.get("expectedStatus"))
      .body("title", equalTo(testCase.get("title")));
  }
}`}]},"Task 11: API Framework Design":{title:"API Test Framework Design",description:`A well-designed API test framework is maintainable, scalable, and reusable. It follows software engineering best practices and makes adding new tests effortless.

Framework Structure:
   src/
   main/java/
     api/        - API client classes
     models/     - Request/Response POJOs
     utils/      - Utility helpers
     config/     - Configuration management
   test/java/
     tests/      - Test classes
     base/       - BaseTest
     data/       - DataProviders
   test/resources/
     schemas/    - JSON schema files
     testdata/   - Test data JSON/Excel
     config.properties

Key Components:

1. Configuration Manager
   - Read from config.properties
   - Environment-specific URLs (dev/staging/prod)
   - No hardcoded values in tests

2. API Client Layer
   - Each API resource has a client class
   - PostApiClient, UserApiClient, etc.
   - Tests call client methods, not Rest Assured directly

3. POJO Models
   - Request and Response models
   - Lombok for reducing boilerplate

4. Utilities
   - TestDataReader
   - FileUtils
   - DateUtils

5. Base Test
   - Common setup and teardown
   - RequestSpecification
   - Logging configuration`,keyPoints:["API Client layer hides Rest Assured details from tests","Config manager reads environment variables or properties file","Tests should read like documentation - business language","All URLs and credentials come from config, never hardcoded","Logging should be configurable - verbose for debug, minimal for CI","Framework should work for multiple environments with single change"],exercises:[{id:1,title:"Build API Client Layer",scenario:"Create a PostApiClient class that wraps Rest Assured calls so tests don't directly use Rest Assured syntax.",steps:["Create PostApiClient class in api package","Add methods: getAllPosts(), getPostById(), createPost(), updatePost(), deletePost()","Each method returns Response object","Tests use client methods instead of given().when().then()","Client uses RequestSpecification from BaseTest"],code:`// PostApiClient.java
public class PostApiClient {
  private final RequestSpecification requestSpec;

  public PostApiClient(RequestSpecification requestSpec) {
    this.requestSpec = requestSpec;
  }

  public Response getAllPosts() {
    return given(requestSpec)
      .when()
      .get("/posts");
  }

  public Response getPostById(int id) {
    return given(requestSpec)
      .pathParam("id", id)
      .when()
      .get("/posts/{id}");
  }

  public Response createPost(PostRequest postRequest) {
    return given(requestSpec)
      .body(postRequest)
      .when()
      .post("/posts");
  }

  public Response updatePost(int id, PostRequest postRequest) {
    return given(requestSpec)
      .pathParam("id", id)
      .body(postRequest)
      .when()
      .put("/posts/{id}");
  }

  public Response deletePost(int id) {
    return given(requestSpec)
      .pathParam("id", id)
      .when()
      .delete("/posts/{id}");
  }
}

// Clean test using client
public class PostApiTest extends BaseTest {
  private PostApiClient postClient;

  @BeforeClass
  public void initClient() {
    postClient = new PostApiClient(requestSpec);
  }

  @Test
  public void getAllPostsReturns200() {
    postClient.getAllPosts()
      .then()
      .statusCode(200)
      .body("$", hasSize(100));
  }

  @Test
  public void createPostReturns201() {
    PostRequest newPost = new PostRequest("Framework Post", "Via client", 1);
    postClient.createPost(newPost)
      .then()
      .statusCode(201)
      .body("title", equalTo("Framework Post"));
  }
}`},{id:2,title:"Configuration Manager",scenario:"Create a ConfigManager class that reads base URLs and credentials from config.properties, enabling multi-environment testing.",steps:["Create config.properties in test resources","Add environment-specific URLs","Create ConfigManager singleton class","Read properties using java.util.Properties","Use system properties to override for different environments","Update BaseTest to use ConfigManager for URL"],code:`// src/test/resources/config.properties
base.url=https://jsonplaceholder.typicode.com
api.version=/
default.timeout=5000
log.level=all

// ConfigManager.java
public class ConfigManager {
  private static Properties properties;
  private static ConfigManager instance;

  private ConfigManager() {
    properties = new Properties();
    try {
      FileInputStream fis = new FileInputStream(
          "src/test/resources/config.properties");
      properties.load(fis);
    } catch (IOException e) {
      throw new RuntimeException("Could not load config.properties", e);
    }
  }

  public static ConfigManager getInstance() {
    if (instance == null) {
      instance = new ConfigManager();
    }
    return instance;
  }

  public String getBaseUrl() {
    // System property overrides file (for CI/CD)
    return System.getProperty("base.url",
        properties.getProperty("base.url"));
  }

  public int getTimeout() {
    return Integer.parseInt(
        properties.getProperty("default.timeout", "5000"));
  }
}

// Updated BaseTest
public class BaseTest {
  protected RequestSpecification requestSpec;
  private ConfigManager config = ConfigManager.getInstance();

  @BeforeClass
  public void setup() {
    requestSpec = new RequestSpecBuilder()
      .setBaseUri(config.getBaseUrl())
      .setContentType(ContentType.JSON)
      .build();
  }
}

// Run with different environment:
// mvn test -Dbase.url=https://staging-api.example.com`}]},"Task 12: Reporting & Logging":{title:"API Test Reporting & Logging",description:`Good reporting and logging are essential for understanding API test results, especially in CI/CD pipelines where you need to diagnose failures remotely.

Rest Assured Logging:

1. Request Logging:
   - .log().all() - Log everything
   - .log().headers() - Log only headers
   - .log().body() - Log only body
   - .log().params() - Log parameters
   - .log().method() - Log HTTP method and URL

2. Response Logging:
   - .log().all() - Log everything
   - .log().body() - Log only body
   - .log().status() - Log status code
   - .log().ifError() - Log only on error (recommended)
   - .log().ifValidationFails() - Log only on assertion failure

3. Global Logging:
   - RestAssured.filters(new RequestLoggingFilter())
   - Applies to all requests in suite

Extent Reports for API:
   - Create extent report in @BeforeSuite
   - Add test node for each @Test
   - Log request/response details in report
   - Mark pass/fail with screenshots or JSON
   - Flush report in @AfterSuite

Allure Reports:
   - @Step annotation for test steps
   - @Attachment for request/response JSON
   - Beautiful timeline and history
   - Category analysis of failures`,keyPoints:["Use log().ifValidationFails() in production to reduce log noise","Always log in @BeforeMethod and @AfterMethod for test boundaries","Extent report needs extentReports.flush() to generate HTML file","Allure needs maven plugin and allure commandline to generate report","Log request/response as Allure attachment for full visibility","Store reports in target/ folder - excluded from git"],exercises:[{id:1,title:"Configure Smart Logging",scenario:"Set up logging that shows full request/response on failure but minimal output on success for CI/CD pipelines.",steps:["Add log().ifValidationFails() to response","Add global request logging filter","Log only on error for response","Write custom log filter for structured output","Test logging behavior with passing and failing tests"],code:`public class LoggingTest extends BaseTest {

  @BeforeClass
  public void setupLogging() {
    // Global logging - applies to all requests
    PrintStream logStream = System.out;
    RestAssured.filters(
      new RequestLoggingFilter(logStream),
      new ResponseLoggingFilter(logStream)
    );
  }

  @Test
  public void logOnlyOnFailure() {
    given(requestSpec)
    .when()
      .get("/users/1")
    .then()
      .log().ifValidationFails()  // Only log if assertion fails
      .statusCode(200)
      .body("name", equalTo("Leanne Graham"));
  }

  @Test
  public void logAllDetails() {
    given(requestSpec)
      .log().all()              // Log full request
    .when()
      .get("/users")
    .then()
      .log().body()             // Log only response body
      .statusCode(200);
  }

  @Test
  public void captureResponseForReport() {
    Response response = given(requestSpec)
    .when()
      .get("/users/1")
    .then()
      .extract().response();

    // Log structured info
    System.out.println("========== API Test Result ==========");
    System.out.println("URL:           " + response.getHeader("Content-Location"));
    System.out.println("Status Code:   " + response.getStatusCode());
    System.out.println("Response Time: " + response.getTime() + "ms");
    System.out.println("Response Body: " + response.getBody().asPrettyString());
    System.out.println("=====================================");
  }
}`}]}},fl={title:"Rest Assured Interview Questions",icon:"🔌",questions:[{id:1,question:"What is Rest Assured?",answer:"Rest Assured is an open-source Java library used for testing RESTful web services. It simplifies the process of writing tests for REST APIs by providing a domain-specific language (DSL) for making HTTP requests and validating responses.",difficulty:"Easy"},{id:2,question:"What are the main HTTP methods supported by Rest Assured?",answer:"Rest Assured supports GET, POST, PUT, DELETE, PATCH, HEAD, and OPTIONS HTTP methods. Each method is represented by a corresponding method in the Rest Assured API: get(), post(), put(), delete(), patch(), head(), and options().",difficulty:"Easy"},{id:3,question:"What is the BDD syntax in Rest Assured?",answer:"Rest Assured supports BDD (Behavior Driven Development) syntax using Given-When-Then pattern. 'given()' sets up preconditions like headers/params, 'when()' performs the HTTP action, and 'then()' validates the response. Example: given().header('key','val').when().get('/endpoint').then().statusCode(200).",difficulty:"Easy"},{id:4,question:"How do you validate a JSON response field in Rest Assured?",answer:"Using JSONPath in the then() block: .then().body('fieldName', equalTo('expectedValue')). For nested fields use dot notation: .body('user.name', equalTo('John')). For arrays use: .body('users[0].name', equalTo('John')).",difficulty:"Easy"},{id:5,question:"What is the difference between queryParam() and pathParam()?",answer:"queryParam() appends parameters to the URL as query strings (e.g., /users?id=1), while pathParam() replaces placeholders in the URL path (e.g., /users/{id} becomes /users/1). queryParam is used for filtering/sorting, pathParam for identifying specific resources.",difficulty:"Medium"},{id:6,question:"How do you handle authentication in Rest Assured?",answer:"Rest Assured supports multiple authentication types: Basic Auth using .auth().basic('user','pass'), OAuth2 using .auth().oauth2('token'), Digest Auth using .auth().digest('user','pass'), and API Key by adding it as a header using .header('Authorization', 'Bearer token').",difficulty:"Medium"},{id:7,question:"How do you extract a value from a JSON response?",answer:"Using the extract() method: String value = given().when().get('/endpoint').then().extract().path('fieldName'). Or extract the full response: Response response = given().when().get('/endpoint'); String val = response.jsonPath().getString('fieldName').",difficulty:"Medium"},{id:8,question:"What is RequestSpecification in Rest Assured?",answer:"RequestSpecification is an interface used to define reusable request configurations. You can set base URI, headers, content type, and auth once using RequestSpecBuilder and reuse it across tests. Example: RequestSpecification spec = new RequestSpecBuilder().setBaseUri('http://api.com').build();",difficulty:"Medium"},{id:9,question:"How do you handle SSL certificates in Rest Assured?",answer:"To bypass SSL certificate validation, use: RestAssured.useRelaxedHTTPSValidation() globally, or given().relaxedHTTPSValidation() per request. For custom certificates, use given().keyStore('/path/to/keystore', 'password').",difficulty:"Medium"},{id:10,question:"What is the difference between contentType() and accept() in Rest Assured?",answer:"contentType() sets the Content-Type header telling the server what format the request body is in (e.g., application/json). accept() sets the Accept header telling the server what format you expect in the response. Both can use ContentType enum values like ContentType.JSON.",difficulty:"Medium"},{id:11,question:"How do you send a POST request with a JSON body?",answer:"Use given().contentType(ContentType.JSON).body(jsonString).when().post('/endpoint'). The body can be a String, Map, POJO, or JSONObject. For POJO: given().contentType(ContentType.JSON).body(pojoObject).when().post('/users'). Rest Assured serializes it automatically.",difficulty:"Easy"},{id:12,question:"What is ResponseSpecification in Rest Assured?",answer:"ResponseSpecification defines reusable response validations. Built using ResponseSpecBuilder: ResponseSpecification spec = new ResponseSpecBuilder().expectStatusCode(200).expectContentType(ContentType.JSON).build(). Then use: when().get('/endpoint').then().spec(spec).",difficulty:"Hard"},{id:13,question:"How do you handle multipart file uploads in Rest Assured?",answer:"Use given().multiPart('file', new File('/path/to/file')).when().post('/upload'). For multiple parts: given().multiPart('file', file).multiPart('name', 'value').when().post('/upload'). Set content type to multipart/form-data automatically.",difficulty:"Hard"},{id:14,question:"What is JSONPath and how is it used in Rest Assured?",answer:"JSONPath is a query language for JSON similar to XPath for XML. In Rest Assured: response.jsonPath().getString('name'), .getInt('age'), .getList('items'), .get('users[0].address.city'). Supports wildcards: .getList('users.name') gets all user names.",difficulty:"Medium"},{id:15,question:"How do you perform schema validation in Rest Assured?",answer:"Using matchesJsonSchemaInClasspath() from io.restassured.module.jsv.JsonSchemaValidator: then().body(matchesJsonSchemaInClasspath('schema.json')). The JSON schema file should be in the resources folder. Requires the json-schema-validator dependency.",difficulty:"Hard"},{id:16,question:"How do you handle cookies in Rest Assured?",answer:"To send cookies: given().cookie('cookieName', 'cookieValue'). To get cookies from response: Response response = when().get('/endpoint'); String cookie = response.getCookie('cookieName'). To get all cookies: Map cookies = response.getCookies().",difficulty:"Medium"},{id:17,question:"What is the use of filters in Rest Assured?",answer:"Filters intercept requests and responses for logging, authentication, or modification. Built-in filters: RequestLoggingFilter, ResponseLoggingFilter, AllureRestAssured for reporting. Custom filters implement the Filter interface. Add using: given().filter(new RequestLoggingFilter()).",difficulty:"Hard"},{id:18,question:"How do you perform response time validation?",answer:"Using time() assertion: then().time(lessThan(2000L)) validates response time is less than 2 seconds. Or extract: long time = when().get('/endpoint').timeIn(TimeUnit.MILLISECONDS). Requires Hamcrest matchers for comparison.",difficulty:"Medium"},{id:19,question:"How do you chain API requests in Rest Assured?",answer:"Extract a value from one response and use in the next: String token = given().body(loginBody).post('/login').then().extract().path('token'); then: given().header('Authorization','Bearer '+token).when().get('/profile').then().statusCode(200).",difficulty:"Hard"},{id:20,question:"What is the difference between RestAssured.given() and SerenityRest.given()?",answer:"RestAssured.given() is the standard Rest Assured entry point. SerenityRest.given() is a wrapper provided by Serenity BDD framework that integrates Rest Assured with Serenity reporting, providing richer test reports with request/response details automatically captured.",difficulty:"Hard"}]},hl={title:"Selenium Interview Questions",icon:"🌐",questions:[{id:1,question:"What is Selenium and what are its components?",answer:"Selenium is an open-source automation testing tool for web applications. Components: Selenium IDE (record/playback browser plugin), Selenium WebDriver (programmatic browser control), Selenium Grid (parallel/distributed test execution), and Selenium RC (deprecated, replaced by WebDriver).",difficulty:"Easy"},{id:2,question:"What are the different types of locators in Selenium?",answer:"Selenium supports 8 locators: ID (fastest, most reliable), Name, ClassName, TagName, LinkText (exact anchor text), PartialLinkText (partial anchor text), CSS Selector (flexible, fast), and XPath (most powerful, can traverse DOM). Best practice: prefer ID > CSS Selector > XPath.",difficulty:"Easy"},{id:3,question:"What is the difference between findElement() and findElements()?",answer:"findElement() returns a single WebElement and throws NoSuchElementException if not found. findElements() returns a List of WebElements and returns an empty list if none found (no exception). Use findElements().size() > 0 to check element existence safely.",difficulty:"Easy"},{id:4,question:"Explain implicit, explicit, and fluent waits.",answer:"Implicit Wait: global wait applied to all findElement calls, waits up to specified time. Explicit Wait: waits for specific condition using WebDriverWait and ExpectedConditions. Fluent Wait: advanced explicit wait with polling interval and exception ignoring. Best practice: avoid mixing implicit and explicit waits.",difficulty:"Medium"},{id:5,question:"What is Page Object Model (POM)?",answer:"POM is a design pattern where each web page has a corresponding class containing WebElements and methods to interact with them. Benefits: reduces code duplication, improves maintainability, separates test logic from page logic. Each page class uses @FindBy annotations or By locators with PageFactory.initElements().",difficulty:"Medium"},{id:6,question:"How do you handle dynamic elements in Selenium?",answer:"Use dynamic XPath with contains(): //div[contains(@id,'dynamic')], starts-with(): //input[starts-with(@name,'user')], or text(): //span[text()='Submit']. Also use explicit waits with ExpectedConditions.visibilityOfElementLocated() to wait for dynamic elements to appear.",difficulty:"Medium"},{id:7,question:"How do you handle dropdowns in Selenium?",answer:"Use the Select class for HTML select elements: Select dropdown = new Select(driver.findElement(By.id('dropdown'))); Methods: selectByVisibleText('option'), selectByValue('val'), selectByIndex(0), getOptions(), getFirstSelectedOption(), deselectAll(). For custom dropdowns, click the element then click the option.",difficulty:"Easy"},{id:8,question:"How do you handle multiple windows/tabs in Selenium?",answer:"Get all window handles: Set handles = driver.getWindowHandles(). Switch to new window: driver.switchTo().window(newHandle). Get current handle: driver.getWindowHandle(). To close current window: driver.close(). To switch back: driver.switchTo().window(originalHandle).",difficulty:"Medium"},{id:9,question:"How do you handle iframes in Selenium?",answer:"Switch to iframe by index: driver.switchTo().frame(0). By name/id: driver.switchTo().frame('frameName'). By WebElement: driver.switchTo().frame(driver.findElement(By.id('frame'))). To return to main page: driver.switchTo().defaultContent(). To go one level up: driver.switchTo().parentFrame().",difficulty:"Medium"},{id:10,question:"What is Actions class and when do you use it?",answer:"Actions class handles complex user interactions: mouseHover using moveToElement(), drag and drop using dragAndDrop(), right-click using contextClick(), double-click using doubleClick(), keyboard actions using keyDown()/keyUp(), and chaining multiple actions using build().perform().",difficulty:"Medium"},{id:11,question:"How do you take a screenshot in Selenium?",answer:"Cast driver to TakesScreenshot: TakesScreenshot ts = (TakesScreenshot)driver. Capture screenshot: File src = ts.getScreenshotAs(OutputType.FILE). Save to file: FileUtils.copyFile(src, new File('path/screenshot.png')). Can also capture specific element: ((TakesScreenshot)element).getScreenshotAs(OutputType.FILE).",difficulty:"Easy"},{id:12,question:"What is JavaScriptExecutor and when do you use it?",answer:"JavaScriptExecutor executes JavaScript in browser context. Use when: normal click doesn't work, scrolling (executeScript('window.scrollBy(0,500)')), highlighting elements, getting element attributes, clicking hidden elements. Cast: JavascriptExecutor js = (JavascriptExecutor)driver; js.executeScript('script', element).",difficulty:"Medium"},{id:13,question:"How do you handle alerts in Selenium?",answer:"Switch to alert: Alert alert = driver.switchTo().alert(). Methods: accept() clicks OK, dismiss() clicks Cancel, getText() gets alert message, sendKeys('text') enters text in prompt. Use try-catch with NoAlertPresentException. For explicit wait: new WebDriverWait(driver,10).until(ExpectedConditions.alertIsPresent()).",difficulty:"Easy"},{id:14,question:"What is Selenium Grid and how does it work?",answer:"Selenium Grid enables parallel test execution across multiple machines and browsers. Hub is the central point that receives test requests. Nodes are machines registered to the hub that execute tests. Tests connect to hub URL, hub routes to matching node. Supports Docker containers for easy setup.",difficulty:"Hard"},{id:15,question:"What is the difference between driver.close() and driver.quit()?",answer:"driver.close() closes only the current browser window but keeps the WebDriver session active. driver.quit() closes all browser windows and terminates the WebDriver session completely, releasing all resources. Always use quit() in tearDown to avoid memory leaks.",difficulty:"Easy"},{id:16,question:"How do you handle StaleElementReferenceException?",answer:"StaleElementReferenceException occurs when a referenced element is no longer attached to DOM (page refresh/navigation). Solutions: re-find element before use, use try-catch to retry, use explicit wait with refreshed() condition: ExpectedConditions.refreshed(ExpectedConditions.elementToBeClickable(locator)).",difficulty:"Hard"},{id:17,question:"How do you scroll in Selenium?",answer:"Scroll by pixels: js.executeScript('window.scrollBy(0,500)'). Scroll to bottom: js.executeScript('window.scrollTo(0,document.body.scrollHeight)'). Scroll to element: js.executeScript('arguments[0].scrollIntoView(true)', element). Using Actions: new Actions(driver).scrollToElement(element).perform() in Selenium 4.",difficulty:"Medium"},{id:18,question:"What are the new features in Selenium 4?",answer:"Selenium 4 features: W3C WebDriver standardization, relative locators (above, below, near, toLeftOf, toRightOf), Chrome DevTools Protocol (CDP) integration, improved Selenium Grid with Docker support, new window/tab opening API (driver.switchTo().newWindow()), and better documentation.",difficulty:"Hard"},{id:19,question:"How do you handle file uploads in Selenium?",answer:"For input type=file: driver.findElement(By.id('upload')).sendKeys('/path/to/file'). For drag-drop upload zones use JavaScript or Actions class. For OS-level file dialogs use Robot class or AutoIT for Windows. In headless mode, sendKeys approach works best without triggering OS dialogs.",difficulty:"Medium"},{id:20,question:"What is the difference between CSS Selector and XPath?",answer:"CSS Selector: faster, simpler syntax, better for styling-based selection, cannot traverse up DOM (no parent selection), e.g., div.className > input. XPath: can traverse up and down DOM, supports text-based selection, more powerful but slower, e.g., //div[@class='name']/parent::div. Prefer CSS Selector for performance.",difficulty:"Medium"}]},gl={title:"Framework Interview Questions",icon:"🏗️",questions:[{id:1,question:"What is TestNG and how is it different from JUnit?",answer:"TestNG is a testing framework inspired by JUnit but with more features: supports grouping tests, parallel execution, data-driven testing with @DataProvider, dependent test methods, flexible test configuration with XML, before/after suite/group hooks, and soft assertions. JUnit is simpler but less feature-rich.",difficulty:"Easy"},{id:2,question:"Explain TestNG annotations in order of execution.",answer:"@BeforeSuite → @BeforeTest → @BeforeGroups → @BeforeClass → @BeforeMethod → @Test → @AfterMethod → @AfterClass → @AfterGroups → @AfterTest → @AfterSuite. BeforeSuite runs once before entire suite. BeforeClass runs once before all test methods in class. BeforeMethod runs before each test method.",difficulty:"Medium"},{id:3,question:"What is Data Driven Testing and how do you implement it in TestNG?",answer:"Data Driven Testing separates test data from test logic. In TestNG, use @DataProvider annotation: @DataProvider(name='loginData') public Object[][] getData() { return new Object[][]{{'user1','pass1'},{'user2','pass2'}}; } Then reference in test: @Test(dataProvider='loginData') public void test(String u, String p){}.",difficulty:"Medium"},{id:4,question:"What is Page Object Model and what are its advantages?",answer:"POM is a design pattern creating a class for each web page containing locators and methods. Advantages: reduces code duplication (DRY principle), easy maintenance (change locator in one place), improves readability, separates page logic from test logic, enables reuse across multiple tests. Use with PageFactory for @FindBy annotations.",difficulty:"Medium"},{id:5,question:"What is the difference between keyword-driven and data-driven frameworks?",answer:"Data-Driven: test logic is fixed, only test data changes (stored in Excel/JSON/CSV). Keywords-Driven: test steps are driven by keywords in external files (e.g., 'click', 'enterText'), business analysts can write tests. Hybrid Framework combines both approaches for maximum flexibility and reusability.",difficulty:"Medium"},{id:6,question:"How do you implement parallel execution in TestNG?",answer:"In testng.xml: <suite name='Suite' parallel='methods' thread-count='4'>. Parallel options: methods (each method in separate thread), tests (each test tag in separate thread), classes (each class in separate thread), instances (each instance in separate thread). Ensure thread-safe WebDriver using ThreadLocal<WebDriver>.",difficulty:"Hard"},{id:7,question:"What is ThreadLocal and why is it used in Selenium frameworks?",answer:"ThreadLocal provides thread-local variables, giving each thread its own independent WebDriver instance. Implementation: private static ThreadLocal<WebDriver> driver = new ThreadLocal<>(). Set: driver.set(new ChromeDriver()). Get: driver.get(). Remove: driver.remove(). Essential for parallel test execution to avoid WebDriver sharing between threads.",difficulty:"Hard"},{id:8,question:"How do you generate Extent Reports?",answer:"Create ExtentReports instance, create ExtentHtmlReporter, attach reporter. In tests: ExtentTest test = extent.createTest('testName'). Log: test.log(Status.PASS,'message') or test.pass/fail/skip(). Add screenshot: test.addScreenCaptureFromPath(path). Call extent.flush() in @AfterSuite. Use ExtentTestNGITestListener for automatic integration.",difficulty:"Medium"},{id:9,question:"What is Maven and how is it used in test automation?",answer:"Maven is a build automation tool managing project dependencies via pom.xml. For automation: add dependencies (Selenium, TestNG, etc.), run tests using mvn test, configure Surefire plugin to run TestNG XML, set properties for parallel execution, generate reports. Maven lifecycle: validate → compile → test → package → install → deploy.",difficulty:"Medium"},{id:10,question:"How do you read test data from Excel in a framework?",answer:"Using Apache POI library: add poi and poi-ooxml dependencies. Read: FileInputStream fis = new FileInputStream('data.xlsx'); Workbook wb = new XSSFWorkbook(fis); Sheet sheet = wb.getSheet('Sheet1'); Row row = sheet.getRow(0); Cell cell = row.getCell(0); String value = cell.getStringCellValue(). Create utility class for reuse.",difficulty:"Medium"},{id:11,question:"What is Singleton design pattern in test frameworks?",answer:"Singleton ensures only one instance of a class exists. Used for WebDriver: private static WebDriver driver; public static WebDriver getInstance() { if(driver == null) { driver = new ChromeDriver(); } return driver; }. Warning: not thread-safe, use ThreadLocal for parallel execution instead.",difficulty:"Hard"},{id:12,question:"How do you implement logging in a test framework?",answer:"Use Log4j2 or SLF4J with Logback. Add dependency, create log4j2.xml config file. In classes: private static final Logger log = LogManager.getLogger(ClassName.class). Use: log.info(), log.debug(), log.error(), log.warn(). Configure appenders for console and file output. Integrate with Extent Reports for test-level logging.",difficulty:"Medium"},{id:13,question:"What is the Factory design pattern in automation?",answer:"Factory pattern creates objects without specifying exact class. Used for cross-browser testing: DriverFactory.getDriver('chrome') returns ChromeDriver, getDriver('firefox') returns FirefoxDriver. Centralizes driver creation, easy to add new browsers, follows Open/Closed principle. Combine with configuration files for browser selection.",difficulty:"Hard"},{id:14,question:"How do you handle test configuration using properties files?",answer:"Create config.properties file with key-value pairs. Read using: Properties props = new Properties(); FileInputStream fis = new FileInputStream('config.properties'); props.load(fis); String url = props.getProperty('baseUrl'). Create ConfigReader utility class as Singleton. Store: URLs, browser type, credentials, timeouts.",difficulty:"Easy"},{id:15,question:"What is CI/CD and how do you integrate tests with Jenkins?",answer:"CI/CD automates building, testing, and deploying. Jenkins integration: create Pipeline/Freestyle job, configure Git repository, add build step 'mvn clean test', configure post-build actions for reports (publish HTML/Allure report), set triggers (GitHub webhook, scheduled), email notifications on failure.",difficulty:"Hard"},{id:16,question:"How do you implement soft assertions in TestNG?",answer:"Soft assertions don't stop test execution on failure. Use: SoftAssert softAssert = new SoftAssert(). Multiple checks: softAssert.assertEquals(actual, expected, 'message'), softAssert.assertTrue(condition). Call softAssert.assertAll() at end to report all failures. Useful for validating multiple fields on a form.",difficulty:"Medium"},{id:17,question:"What is the Builder design pattern in test automation?",answer:"Builder pattern constructs complex objects step by step. Used for test data creation: new User.Builder().setName('John').setEmail('john@email.com').setAge(25).build(). Improves readability, handles optional parameters elegantly. Also used in Rest Assured's RequestSpecBuilder and ResponseSpecBuilder.",difficulty:"Hard"},{id:18,question:"How do you manage test environments in a framework?",answer:"Use environment-specific property files (dev.properties, staging.properties, prod.properties). Pass environment via Maven: mvn test -Denv=staging. Read in framework: String env = System.getProperty('env','dev'). Load corresponding properties file. Store URLs, credentials, feature flags per environment.",difficulty:"Medium"},{id:19,question:"What is Allure Report and how do you integrate it?",answer:"Allure is a flexible reporting framework. Add allure-testng dependency and aspectj agent in pom.xml. Use annotations: @Step for test steps, @Attachment for screenshots, @Description, @Severity, @Story, @Feature. Run: mvn test, then allure serve target/allure-results. Provides rich interactive reports with history trends.",difficulty:"Hard"},{id:20,question:"How do you handle test retries for flaky tests?",answer:"Implement IRetryAnalyzer interface: public boolean retry(ITestResult result) { if(retryCount < maxRetry) { retryCount++; return true; } return false; }. Add to test: @Test(retryAnalyzer=RetryAnalyzer.class). Or use RetryListener implementing IAnnotationTransformer to apply globally to all tests without modifying each annotation.",difficulty:"Hard"}]},yl={title:"Basic Testing Interview Questions",icon:"🧪",questions:[{id:1,question:"What is Software Testing and why is it important?",answer:"Software testing is the process of evaluating software to find defects and ensure it meets requirements. Important because: catches bugs before production, ensures quality, reduces maintenance costs, builds user confidence, validates business requirements, and prevents security vulnerabilities. Cost of fixing bugs increases exponentially later in SDLC.",difficulty:"Easy"},{id:2,question:"What is SDLC and what are its phases?",answer:"Software Development Life Cycle phases: Planning (feasibility, resources), Requirements Analysis (gathering requirements), System Design (architecture, DB design), Implementation (coding), Testing (verification & validation), Deployment (release to production), Maintenance (bug fixes, updates). Models: Waterfall, Agile, Spiral, V-Model.",difficulty:"Easy"},{id:3,question:"What is STLC and what are its phases?",answer:"Software Testing Life Cycle phases: Requirement Analysis (review requirements, identify testable requirements), Test Planning (strategy, resources, timeline), Test Case Design (write test cases, test data), Test Environment Setup, Test Execution (run tests, log defects), Test Closure (metrics, lessons learned). Each phase has entry and exit criteria.",difficulty:"Easy"},{id:4,question:"What is the difference between verification and validation?",answer:"Verification: 'Are we building the product right?' - checks if software meets specified requirements without executing code (reviews, inspections, walkthroughs). Validation: 'Are we building the right product?' - checks if software meets user expectations through execution (testing). Verification is static, validation is dynamic.",difficulty:"Easy"},{id:5,question:"Explain different levels of testing.",answer:"Unit Testing: tests individual components/functions. Integration Testing: tests interaction between modules (top-down, bottom-up, sandwich). System Testing: tests complete system against requirements. Acceptance Testing: validates against business requirements (UAT - User Acceptance Testing). Each level has different scope and responsibility.",difficulty:"Easy"},{id:6,question:"What is the difference between black box, white box, and grey box testing?",answer:"Black Box: tester has no knowledge of internal code, tests based on requirements/UI (functional testing). White Box: tester has full knowledge of code, tests internal logic, code paths (unit testing, code coverage). Grey Box: partial knowledge of internals, combination of both approaches. Most QA engineers do black box testing.",difficulty:"Easy"},{id:7,question:"What is the difference between smoke, sanity, and regression testing?",answer:"Smoke Testing: shallow, wide testing of main features after new build to decide if detailed testing should proceed ('build verification test'). Sanity Testing: narrow, focused testing of specific functionality after bug fix or small change. Regression Testing: re-running existing tests to ensure changes haven't broken existing functionality.",difficulty:"Medium"},{id:8,question:"What is boundary value analysis and equivalence partitioning?",answer:"Equivalence Partitioning: divides input data into valid/invalid partitions, test one value per partition. E.g., age 1-120: test one valid (25), one invalid (<1), one invalid (>120). Boundary Value Analysis: tests at boundaries of partitions: minimum, minimum+1, maximum-1, maximum. E.g., age: 0,1,2,119,120,121.",difficulty:"Medium"},{id:9,question:"What is a test case and what should it contain?",answer:"A test case is a set of conditions to validate functionality. Components: Test Case ID, Title/Description, Preconditions, Test Steps (numbered), Test Data, Expected Result, Actual Result, Status (Pass/Fail), Priority, Severity, Created By, Executed By, Date. Good test cases are clear, concise, reusable, and independent.",difficulty:"Easy"},{id:10,question:"What is the difference between priority and severity of a defect?",answer:"Severity: impact of bug on application functionality (Critical/Major/Minor/Trivial) - determined by tester. Priority: urgency of fixing the bug (High/Medium/Low) - determined by business/product owner. High severity low priority: app crashes on rarely used feature. Low severity high priority: spelling error on homepage.",difficulty:"Medium"},{id:11,question:"What is a defect life cycle?",answer:"Defect lifecycle: New (logged by tester) → Assigned (to developer) → Open (developer starts fixing) → Fixed (developer fixes) → Ready for Retest → Retest (tester verifies fix) → Closed (if fixed) or Reopened (if not fixed). Other states: Duplicate, Deferred, Not a Bug, Cannot Reproduce.",difficulty:"Medium"},{id:12,question:"What is exploratory testing?",answer:"Exploratory testing is simultaneous learning, test design, and test execution. Tester explores application without predefined test cases, using domain knowledge and creativity. Benefits: finds defects that scripted tests miss, effective for complex systems, good for usability issues. Documented using session-based testing with charter, notes, and time-boxing.",difficulty:"Medium"},{id:13,question:"What is Agile testing and how does it differ from traditional testing?",answer:"Agile testing is continuous testing throughout sprint cycles. Differences: testing starts from day 1 (not after development), testers collaborate with developers, testing is everyone's responsibility, automated tests are critical, working in 2-week sprints, adapting to changing requirements. Uses ceremonies: sprint planning, daily standups, sprint review, retrospective.",difficulty:"Medium"},{id:14,question:"What is performance testing and what are its types?",answer:"Performance testing validates system behavior under load. Types: Load Testing (normal expected load), Stress Testing (beyond normal capacity to find breaking point), Spike Testing (sudden large load increase), Soak/Endurance Testing (sustained load over long period), Volume Testing (large amount of data), Scalability Testing. Tools: JMeter, Gatling, LoadRunner.",difficulty:"Hard"},{id:15,question:"What is usability testing?",answer:"Usability testing evaluates how easy and intuitive a product is to use. Checks: learnability, efficiency, memorability, error prevention, satisfaction. Methods: moderated (facilitator guides user), unmoderated (remote, self-guided), A/B testing (compare two versions). Metrics: task completion rate, time on task, error rate, satisfaction score.",difficulty:"Medium"},{id:16,question:"What is the difference between test strategy and test plan?",answer:"Test Strategy: high-level document describing overall testing approach for organization/project, covers testing types, tools, standards. Relatively static. Test Plan: detailed project-specific document covering scope, objectives, resources, schedule, risks, test cases. Created per project/release. Strategy is 'what and how', plan is 'who, when, what specifically'.",difficulty:"Medium"},{id:17,question:"What is mutation testing?",answer:"Mutation testing evaluates quality of test cases by introducing small code changes (mutations) like changing operators (+/-), modifying conditions, changing values. If tests catch the mutation (tests fail), mutation is 'killed'. If tests pass with mutation, mutation 'survives' indicating weak tests. Tools: PIT (Java), Stryker (JS). High mutation score = good tests.",difficulty:"Hard"},{id:18,question:"What are the key metrics in software testing?",answer:"Key metrics: Test Coverage (% of requirements covered), Defect Density (defects per KLOC), Defect Detection Efficiency (defects found in testing vs total), Test Execution Rate, Pass/Fail Rate, Defect Removal Efficiency, Mean Time to Detect (MTTD), Mean Time to Repair (MTTR), Automation Coverage percentage.",difficulty:"Hard"},{id:19,question:"What is risk-based testing?",answer:"Risk-based testing prioritizes testing based on probability and impact of failures. Process: identify risks (business, technical, operational), analyze risk probability and impact, prioritize testing based on risk score, allocate testing effort accordingly. High-risk areas get more thorough testing. Ensures critical functionality is tested first with limited time.",difficulty:"Hard"},{id:20,question:"What is shift-left testing?",answer:"Shift-left testing means involving testing activities earlier in the SDLC (moving left on timeline). Activities: reviewing requirements for testability, writing test cases during design phase, developers writing unit tests, TDD (Test Driven Development), BDD (Behavior Driven Development). Benefits: cheaper defect detection, faster feedback, better quality.",difficulty:"Medium"}]},vl={title:"Java Coding Interview Questions",icon:"☕",questions:[{id:1,question:"What are the four pillars of OOP in Java?",answer:"Encapsulation: bundling data and methods, hiding internal state using private fields with getters/setters. Inheritance: child class inherits properties from parent using 'extends'. Polymorphism: one interface, multiple implementations - method overloading (compile-time) and overriding (runtime). Abstraction: hiding complexity using abstract classes and interfaces.",difficulty:"Easy"},{id:2,question:"What is the difference between == and .equals() in Java?",answer:"== compares object references (memory addresses) for objects, compares values for primitives. .equals() compares actual content/values - can be overridden. String s1='hello'; String s2=new String('hello'); s1==s2 is FALSE (different objects), s1.equals(s2) is TRUE (same content). String literals use string pool, so 'hello'=='hello' can be true.",difficulty:"Easy"},{id:3,question:"What is the difference between ArrayList and LinkedList?",answer:"ArrayList: backed by dynamic array, O(1) random access by index, O(n) insertion/deletion in middle, better for frequent reads. LinkedList: doubly linked list, O(n) access by index, O(1) insertion/deletion at ends, implements Deque, better for frequent insertions/deletions. ArrayList uses less memory as no node pointers needed.",difficulty:"Medium"},{id:4,question:"What is the difference between HashMap, LinkedHashMap, and TreeMap?",answer:"HashMap: unordered key-value pairs, O(1) get/put, allows one null key, not synchronized. LinkedHashMap: maintains insertion order, slightly slower than HashMap due to linked list overhead. TreeMap: sorted by keys (natural or Comparator), O(log n) operations, no null keys. Use HashMap for performance, LinkedHashMap for order, TreeMap for sorted data.",difficulty:"Medium"},{id:5,question:"What is the difference between abstract class and interface in Java?",answer:"Abstract class: can have abstract and concrete methods, constructor, instance variables, single inheritance. Interface: all methods abstract by default (Java 8+ allows default/static), no constructor, only public static final variables, multiple implementation. Use abstract class for 'is-a' relationship with shared code, interface for 'can-do' capability contract.",difficulty:"Medium"},{id:6,question:"What is Java 8 Stream API?",answer:"Stream API processes collections in a functional style. Operations: filter() (condition), map() (transform), flatMap() (flatten), sorted(), distinct(), limit(), skip(). Terminal: collect(), forEach(), count(), findFirst(), anyMatch(), reduce(). Example: list.stream().filter(x->x>5).map(x->x*2).collect(Collectors.toList()). Supports parallel processing with parallelStream().",difficulty:"Hard"},{id:7,question:"What are Lambda expressions in Java 8?",answer:"Lambda expressions are anonymous functions implementing functional interfaces. Syntax: (parameters) -> expression or (parameters) -> { statements }. Example: Runnable r = () -> System.out.println('Hello'). Comparator<String> c = (s1,s2) -> s1.compareTo(s2). Eliminates boilerplate of anonymous inner classes. Used extensively with Stream API and functional interfaces.",difficulty:"Medium"},{id:8,question:"What is the difference between checked and unchecked exceptions?",answer:"Checked exceptions: must be handled or declared (throws), checked at compile-time. Examples: IOException, SQLException, ClassNotFoundException. Unchecked exceptions (RuntimeException): not required to be handled, occur at runtime. Examples: NullPointerException, ArrayIndexOutOfBoundsException, IllegalArgumentException. Error: serious problems not for catching (OutOfMemoryError).",difficulty:"Medium"},{id:9,question:"What is multithreading in Java and how do you create threads?",answer:"Multithreading runs multiple threads concurrently. Create thread: 1) Extend Thread class and override run(). 2) Implement Runnable interface and pass to Thread constructor. 3) Implement Callable for return values. 4) Use ExecutorService thread pool. Start with thread.start() (not run()). Synchronize shared resources with synchronized keyword or Lock interface.",difficulty:"Hard"},{id:10,question:"What is the difference between String, StringBuilder, and StringBuffer?",answer:"String: immutable, new object created on every modification, stored in String pool, thread-safe. StringBuilder: mutable, modifies same object, not thread-safe, faster. StringBuffer: mutable, synchronized (thread-safe), slower than StringBuilder. Use String for few modifications, StringBuilder for many modifications in single thread, StringBuffer in multi-threaded environment.",difficulty:"Easy"},{id:11,question:"What is Java Collections Framework hierarchy?",answer:"Iterable → Collection → List (ArrayList, LinkedList, Vector), Set (HashSet, LinkedHashSet, TreeSet), Queue (PriorityQueue, LinkedList, ArrayDeque). Map (separate hierarchy): HashMap, LinkedHashMap, TreeMap, Hashtable, ConcurrentHashMap. Sorted interfaces: SortedSet (TreeSet), SortedMap (TreeMap). Deque: double-ended queue (ArrayDeque, LinkedList).",difficulty:"Hard"},{id:12,question:"What is the Singleton pattern and how do you implement it in Java?",answer:"Singleton ensures one instance per JVM. Thread-safe implementation: private static volatile Singleton instance; private Singleton(){}; public static Singleton getInstance(){ if(instance==null){ synchronized(Singleton.class){ if(instance==null){ instance=new Singleton(); }}} return instance; }. Or use enum: enum Singleton{ INSTANCE; }. Enum is preferred - handles serialization and reflection attacks.",difficulty:"Hard"},{id:13,question:"What is Optional in Java 8?",answer:"Optional is a container that may or may not contain a non-null value, avoiding NullPointerException. Create: Optional.of(value), Optional.ofNullable(value), Optional.empty(). Use: isPresent(), get(), orElse(default), orElseGet(supplier), orElseThrow(), ifPresent(consumer), map(), filter(). Best practice: use as return type, not as parameter or field.",difficulty:"Medium"},{id:14,question:"What is the difference between Comparable and Comparator?",answer:"Comparable (java.lang): natural ordering, implemented by the class itself, single sorting sequence, compareTo() method, e.g., String implements Comparable. Comparator (java.util): external ordering, implemented separately, multiple sorting sequences, compare() method. Use Comparable for default sort, Comparator for custom/multiple sort orders without modifying original class.",difficulty:"Medium"},{id:15,question:"What is garbage collection in Java?",answer:"JVM automatically manages memory by removing unreachable objects. Heap regions: Young Generation (Eden, S0, S1) - minor GC, Old Generation - major GC, Metaspace (Java 8+, replaced PermGen). GC algorithms: Serial, Parallel, CMS, G1 (default Java 9+), ZGC. finalize() deprecated. System.gc() is only a suggestion. Memory leaks can still occur with static references.",difficulty:"Hard"},{id:16,question:"What are functional interfaces in Java 8?",answer:"Functional interface has exactly one abstract method, used with lambda expressions. @FunctionalInterface annotation. Built-in: Function<T,R> (takes T returns R), Predicate<T> (takes T returns boolean), Consumer<T> (takes T returns void), Supplier<T> (no input returns T), BiFunction<T,U,R>, UnaryOperator<T>, BinaryOperator<T>. Used heavily in Stream API.",difficulty:"Medium"},{id:17,question:"What is the difference between final, finally, and finalize?",answer:"final: keyword - final variable (constant), final method (cannot override), final class (cannot extend). finally: block in try-catch-finally that always executes (except System.exit()), used for cleanup like closing resources. finalize(): method called by GC before object is garbage collected (deprecated in Java 9). Use try-with-resources instead of finalize for cleanup.",difficulty:"Easy"},{id:18,question:"What is method overloading vs method overriding?",answer:"Overloading (compile-time polymorphism): same method name, different parameters (type/number/order), same class, resolved at compile time. Overriding (runtime polymorphism): same method name and signature, child class overrides parent class method, @Override annotation, resolved at runtime. Cannot override static, final, or private methods. Overriding enables runtime polymorphism.",difficulty:"Easy"},{id:19,question:"What is Java memory model (Stack vs Heap)?",answer:"Stack: stores primitive variables and object references (not objects), method call frames, thread-specific, LIFO, fixed size, fast access. Heap: stores actual objects and class instances, shared among all threads, managed by GC, dynamic size, slower. String pool is in Heap (Metaspace in older versions). Stack overflow occurs with infinite recursion, OutOfMemoryError with heap overflow.",difficulty:"Hard"},{id:20,question:"What are design patterns commonly used in test automation?",answer:"Creational: Singleton (single WebDriver), Factory (browser selection), Builder (test data). Structural: Page Object (page abstraction), Facade (complex API simplification), Decorator (add behavior). Behavioral: Strategy (different test strategies), Observer (event handling), Template Method (test flow skeleton). Most important for SDET: Singleton, Factory, Builder, Page Object Model.",difficulty:"Hard"}]},bl={restAssured:fl,selenium:hl,framework:gl,basicTesting:yl,javaCoding:vl},Wt=(e,t)=>{const n=e.__vccOpts||e;for(const[s,i]of t)n[s]=i;return n},wl={class:"career-page"},Sl={class:"career-card"},xl={class:"points-grid"},kl={class:"point-icon"},Cl={class:"career-card"},Tl={class:"future-grid"},Al={class:"future-icon"},Pl={class:"career-card"},_l={class:"steps-list"},El={class:"step-number"},Il={class:"step-content"},Rl={class:"skills-row"},Ll={__name:"SdetCareer",setup(e){const t=[{icon:"⚙️",title:"Automation First",desc:"Write robust, maintainable automation code — not just manual test cases."},{icon:"🔗",title:"End-to-End Thinking",desc:"Understand and test across UI, APIs, microservices, and databases."},{icon:"🏗️",title:"Framework Design",desc:"Design scalable test frameworks that teams can build on top of."},{icon:"🛡️",title:"Risk Identification",desc:"Identify critical paths, edge cases, and production risks before release."},{icon:"🤝",title:"Engineering Mindset",desc:"Collaborate with developers, contribute to CI/CD, and treat tests as code."}],n=[{icon:"🔌",title:"API & Microservices Testing",desc:"The shift is clear — UI testing alone is not enough. API and service-level testing is becoming the core skill of modern SDETs."},{icon:"🤖",title:"AI-Assisted Testing",desc:"AI is entering test generation, failure analysis, and intelligent assertions. SDETs who can use AI tools will have a massive productivity advantage."},{icon:"⚡",title:"Speed & Stability Focus",desc:"Flaky tests and slow pipelines are being eliminated. The focus is on fast, deterministic, and intelligent validation."},{icon:"🎭",title:"Playwright & AI Integration",desc:"Playwright's modern architecture and flexible APIs make it highly compatible with AI-assisted workflows — a key reason it is gaining industry momentum."}],s=[{step:"1",title:"Master One Tool First",desc:"Go deep into either Selenium or Playwright. Build real projects, understand the internals, and get confident."},{step:"2",title:"Learn the Other Tool Too",desc:"Once strong in one, pick up the other. Flexibility across both tools makes you valuable in any team."},{step:"3",title:"Build API Automation Skills",desc:"REST Assured, Playwright API, or Axios — API testing is non-negotiable for a modern SDET."},{step:"4",title:"Design a Framework",desc:"Learn Page Object Model, reporting, CI/CD integration, and modular design."},{step:"5",title:"Use AI as a Productivity Tool",desc:"Use GitHub Copilot or ChatGPT to write tests faster, debug smarter, and learn quicker."}],i=[{icon:"🔌",skill:"API Automation"},{icon:"🏗️",skill:"Framework Design"},{icon:"🧠",skill:"Problem Solving"},{icon:"🔍",skill:"System Thinking"},{icon:"🤖",skill:"AI Productivity"},{icon:"🔄",skill:"CI/CD Integration"}];return(o,r)=>(g(),v("div",wl,[r[3]||(r[3]=Ut('<div class="career-hero" data-v-c5ac6478><span class="hero-badge" data-v-c5ac6478>Career Guide</span><h1 data-v-c5ac6478>SDET Career – Present &amp; Future</h1><p data-v-c5ac6478>Understand the role, the industry, and where it&#39;s heading</p></div><div class="career-card" data-v-c5ac6478><div class="card-heading" data-v-c5ac6478><span class="card-icon" data-v-c5ac6478>🧑‍💻</span><h2 data-v-c5ac6478>What is an SDET?</h2></div><p class="card-body" data-v-c5ac6478> A Software Development Engineer in Test (SDET) is not just a tester — they are a software engineer who specialises in quality. An SDET writes automation code, designs test frameworks, validates complex systems, and ensures software is production-ready at scale. They sit at the intersection of development and quality, and are expected to think like a developer while owning the reliability of the product. </p></div>',2)),a("div",Sl,[r[0]||(r[0]=a("div",{class:"card-heading"},[a("span",{class:"card-icon"},"🏭"),a("h2",null,"What the Industry Expects")],-1)),a("div",xl,[(g(),v(G,null,te(t,l=>a("div",{key:l.title,class:"point-item"},[a("span",kl,f(l.icon),1),a("div",null,[a("strong",null,f(l.title),1),a("p",null,f(l.desc),1)])])),64))])]),r[4]||(r[4]=Ut('<div class="career-card" data-v-c5ac6478><div class="card-heading" data-v-c5ac6478><span class="card-icon" data-v-c5ac6478>🛠️</span><h2 data-v-c5ac6478>Current Tools &amp; Industry Trends</h2></div><div class="tools-grid" data-v-c5ac6478><div class="tool-card" style="--tc:#10b981;" data-v-c5ac6478><div class="tool-header" data-v-c5ac6478><span class="tool-icon" data-v-c5ac6478>🌐</span><div data-v-c5ac6478><h3 data-v-c5ac6478>Selenium</h3><span class="tool-tag" style="background:#10b98120;color:#10b981;" data-v-c5ac6478>Enterprise Standard</span></div></div><p class="tool-desc" data-v-c5ac6478> Selenium remains the backbone of enterprise automation. It has a massive ecosystem, supports all major languages, and is deeply integrated into legacy and large-scale systems. If you work in a bank, insurance company, or any large organisation, Selenium is very likely in their stack. </p><div class="tool-strengths" data-v-c5ac6478><span class="strength-chip" style="border-color:#10b981;color:#10b981;" data-v-c5ac6478>✓ Widely adopted in enterprise</span><span class="strength-chip" style="border-color:#10b981;color:#10b981;" data-v-c5ac6478>✓ Multi-language support</span><span class="strength-chip" style="border-color:#10b981;color:#10b981;" data-v-c5ac6478>✓ Huge community</span><span class="strength-chip" style="border-color:#10b981;color:#10b981;" data-v-c5ac6478>✓ Strong legacy integration</span></div></div><div class="tool-card" style="--tc:#6c63ff;" data-v-c5ac6478><div class="tool-header" data-v-c5ac6478><span class="tool-icon" data-v-c5ac6478>🎭</span><div data-v-c5ac6478><h3 data-v-c5ac6478>Playwright</h3><span class="tool-tag" style="background:#6c63ff20;color:#6c63ff;" data-v-c5ac6478>Modern &amp; Fast</span></div></div><p class="tool-desc" data-v-c5ac6478> Playwright is the modern choice. Built by Microsoft, it is faster, more reliable, and aligned with how today&#39;s web works. It handles dynamic content, network interception, and multi-browser testing out of the box. Playwright is where the industry is actively moving. </p><div class="tool-strengths" data-v-c5ac6478><span class="strength-chip" style="border-color:#6c63ff;color:#6c63ff;" data-v-c5ac6478>✓ Faster execution</span><span class="strength-chip" style="border-color:#6c63ff;color:#6c63ff;" data-v-c5ac6478>✓ Auto-wait built-in</span><span class="strength-chip" style="border-color:#6c63ff;color:#6c63ff;" data-v-c5ac6478>✓ Network interception</span><span class="strength-chip" style="border-color:#6c63ff;color:#6c63ff;" data-v-c5ac6478>✓ AI-friendly design</span></div></div></div></div>',1)),a("div",Cl,[r[1]||(r[1]=a("div",{class:"card-heading"},[a("span",{class:"card-icon"},"🔮"),a("h2",null,"The Future of SDET")],-1)),a("div",Tl,[(g(),v(G,null,te(n,l=>a("div",{key:l.title,class:"future-item"},[a("span",Al,f(l.icon),1),a("div",null,[a("strong",null,f(l.title),1),a("p",null,f(l.desc),1)])])),64))])]),a("div",Pl,[r[2]||(r[2]=a("div",{class:"card-heading"},[a("span",{class:"card-icon"},"🎯"),a("h2",null,"What You Should Do")],-1)),a("div",_l,[(g(),v(G,null,te(s,l=>a("div",{key:l.step,class:"step-item"},[a("div",El,f(l.step),1),a("div",Il,[a("strong",null,f(l.title),1),a("p",null,f(l.desc),1)])])),64))]),a("div",Rl,[(g(),v(G,null,te(i,l=>a("span",{key:l.skill,class:"skill-chip"},f(l.icon)+" "+f(l.skill),1)),64))])]),r[5]||(r[5]=a("div",{class:"closing-banner"},[a("span",{class:"closing-icon"},"🚀"),a("p",null,"We cover both Selenium, API Automation and Playwright along with Real Time Interview Questions in this platform to help you build a strong foundation and stay future-ready as an SDET.")],-1))]))}},Ml=Wt(Ll,[["__scopeId","data-v-c5ac6478"]]),Dl={class:"sdet-container"},Bl={class:"mobile-header"},Ol={class:"mobile-title"},ql={class:"sidebar-header"},Fl={class:"sidebar-controls"},Nl={key:0,class:"sidebar-nav"},Ul=["onClick"],Wl={class:"section-icon"},Hl={class:"section-info"},jl={class:"section-title"},Jl={class:"completion-percentage"},$l={key:0,class:"nav-items"},zl=["onClick"],Gl={class:"task-number"},Vl={class:"task-name"},Kl={class:"category-qa-count"},Xl=["onClick"],Ql=["checked","onClick"],Yl={class:"task-number"},Zl={class:"task-name"},ec={key:0,class:"completion-icon"},tc={class:"content"},nc={key:0,class:"task-view"},sc={class:"task-header"},ic={class:"breadcrumb"},ac={class:"qa-meta"},oc={class:"qa-count"},rc={class:"qa-list"},lc=["onClick"],cc={class:"qa-left"},dc=["checked","onClick"],uc={class:"qa-number"},pc={class:"qa-question"},mc={class:"qa-right"},fc={key:0,class:"qa-answer"},hc={key:1,class:"task-view"},gc={class:"task-header"},yc={class:"breadcrumb"},vc={class:"description-card"},bc={class:"description-text"},wc={key:0,class:"key-points-card"},Sc={key:1,class:"exercises-section"},xc=["onClick"],kc={class:"exercise-title"},Cc={class:"exercise-number"},Tc={key:0,class:"exercise-body"},Ac={class:"scenario"},Pc={key:0,class:"steps-section"},_c={key:1,class:"code-section"},Ec={class:"code-header"},Ic=["onClick"],Rc={class:"code-block"},Lc={key:2,class:"navigation-buttons"},Mc=["disabled"],Dc=["disabled"],Bc={key:2,class:"welcome-screen"},Oc={class:"career-dropdown"},qc={key:0,class:"career-dropdown-body"},Fc={class:"welcome-cards"},Nc=["onClick"],Uc={class:"card-icon"},Wc={__name:"SDET",setup(e){function t(b){return Object.values(b)}const n=H(!1),s=Object.values(bl),i=H(!1),o=H(!1),r=H([]),l=H([]),c=H([]),p=H(null),d=H(null),y=H(""),x=H(null),I=H(null),j=H(new Set),B=H(new Set),O=we(()=>[{id:"selenium",title:"Selenium Automation",icon:"🌐",tasks:t(ul),categories:[]},{id:"api",title:"API Automation",icon:"🔌",tasks:t(ml),categories:[]},{id:"playwright",title:"Playwright",icon:"🎭",tasks:t(pl),categories:[]},{id:"interview",title:"Interview Preparation",icon:"📝",tasks:[],categories:s}]),D=we(()=>{const b=O.value.find(h=>h.title===y.value);return b?b.tasks:[]}),R=we(()=>!p.value||!D.value.length?-1:D.value.findIndex(b=>b.title===p.value.title)),Z=we(()=>R.value>0),W=we(()=>R.value<D.value.length-1),ae=we(()=>Z.value?D.value[R.value-1]:null),ge=we(()=>W.value?D.value[R.value+1]:null),xe=b=>{if(b.id==="interview"){const h=b.categories.reduce((E,U)=>E+U.questions.length,0),w=b.categories.reduce((E,U)=>E+U.questions.filter(me=>B.value.has(`${U.title}-${me.id}`)).length,0);return h>0?Math.round(w/h*100):0}else{const h=b.tasks.length,w=b.tasks.filter(E=>j.value.has(`${b.id}-${E.title}`)).length;return h>0?Math.round(w/h*100):0}},fe=(b,h)=>j.value.has(`${h}-${b.title}`),X=(b,h)=>B.value.has(`${h}-${b.id}`),ie=(b,h)=>{const w=`${h}-${b.title}`;j.value.has(w)?j.value.delete(w):j.value.add(w)},ce=(b,h)=>{const w=`${h}-${b.id}`;B.value.has(w)?B.value.delete(w):B.value.add(w)};function F(){i.value=!i.value}function oe(){o.value=!o.value}function se(){i.value=!1}function k(b){I.value=b,r.value.includes(b)?r.value=r.value.filter(h=>h!==b):r.value=[b]}function _(b){I.value=b,r.value.includes(b)||r.value.push(b)}function Q(b,h){p.value=b,d.value=null,y.value=h,l.value=[],se()}function re(b,h){d.value=b,p.value=null,y.value=h,c.value=[],se()}function Fe(){Z.value&&Q(ae.value,y.value)}function Xe(){W.value&&Q(ge.value,y.value)}function Ne(b){const h=l.value.indexOf(b);h===-1?l.value.push(b):l.value.splice(h,1)}function _e(b){const h=c.value.indexOf(b);h===-1?c.value.push(b):c.value.splice(h,1)}async function V(b,h){await navigator.clipboard.writeText(b),x.value=h,setTimeout(()=>x.value=null,2e3)}return(b,h)=>(g(),v("div",Dl,[a("div",Bl,[a("button",{class:"hamburger",onClick:F},[a("span",{class:J(["hamburger-icon",{open:i.value}])},[...h[2]||(h[2]=[a("span",null,null,-1),a("span",null,null,-1),a("span",null,null,-1)])],2)]),a("h2",Ol,f(y.value||"SDET"),1)]),i.value?(g(),v("div",{key:0,class:"overlay",onClick:se})):$("",!0),a("aside",{class:J(["sidebar",{"sidebar-open":i.value,"sidebar-minimized":o.value}])},[a("div",ql,[o.value?$("",!0):(g(),v("h2",{key:0,onClick:h[0]||(h[0]=w=>p.value=null),style:{cursor:"pointer","user-select":"none"},title:"Go to Welcome Screen"}," 🔬 SDET ")),a("div",Fl,[a("button",{class:"minimize-btn",onClick:oe},f(o.value?"➡️":"⬅️"),1),a("button",{class:"close-btn",onClick:se},"✕")])]),o.value?$("",!0):(g(),v("nav",Nl,[(g(!0),v(G,null,te(O.value,(w,E)=>(g(),v("div",{key:E,class:"nav-section"},[a("div",{class:J(["nav-section-header",{active:I.value===E}]),onClick:U=>k(E)},[a("span",Wl,f(w.icon),1),a("div",Hl,[a("span",jl,f(w.title),1),a("span",Jl,f(xe(w))+"%",1)]),a("span",{class:J(["chevron",{rotated:r.value.includes(E)}])},"▾",2)],10,Ul),Se(ze,{name:"slide"},{default:je(()=>[r.value.includes(E)?(g(),v("ul",$l,[w.id==="interview"?(g(!0),v(G,{key:0},te(w.categories,(U,me)=>{var Ce;return g(),v("li",{key:me,onClick:Rt=>re(U,w.title),class:J({active:((Ce=d.value)==null?void 0:Ce.title)===U.title})},[a("span",Gl,f(me+1),1),a("span",Vl,f(U.title),1),a("span",Kl,f(U.questions.length)+" Qs",1)],10,zl)}),128)):(g(!0),v(G,{key:1},te(w.tasks,(U,me)=>{var Ce;return g(),v("li",{key:me,onClick:Rt=>Q(U,w.title),class:J({active:((Ce=p.value)==null?void 0:Ce.title)===U.title,completed:fe(U,w.id)})},[a("input",{type:"checkbox",checked:fe(U,w.id),onClick:St(Rt=>ie(U,w.id),["stop"]),class:"completion-checkbox"},null,8,Ql),a("span",Yl,f(me+1),1),a("span",Zl,f(U.title),1),fe(U,w.id)?(g(),v("span",ec,"✅")):$("",!0)],10,Xl)}),128))])):$("",!0)]),_:2},1024)]))),128))]))],2),a("main",tc,[d.value?(g(),v("div",nc,[a("div",sc,[a("h1",null,f(d.value.icon)+" "+f(d.value.title),1),a("span",ic,"Interview Preparation → "+f(d.value.title),1),a("div",ac,[a("span",oc,f(d.value.questions.length)+" Questions",1),h[3]||(h[3]=a("div",{class:"difficulty-legend"},[a("span",{class:"badge easy"},"Easy"),a("span",{class:"badge medium"},"Medium"),a("span",{class:"badge hard"},"Hard")],-1))])]),a("div",rc,[(g(!0),v(G,null,te(d.value.questions,(w,E)=>(g(),v("div",{key:w.id,class:J(["qa-card",{completed:X(w,d.value.title)}])},[a("div",{class:"qa-header",onClick:U=>_e(E)},[a("div",cc,[a("input",{type:"checkbox",checked:X(w,d.value.title),onClick:St(U=>ce(w,d.value.title),["stop"]),class:"completion-checkbox"},null,8,dc),a("span",uc,f(w.id),1),a("p",pc,f(w.question),1)]),a("div",mc,[a("span",{class:J(["badge",w.difficulty.toLowerCase()])},f(w.difficulty),3),a("span",{class:J(["chevron",{rotated:c.value.includes(E)}])},"▾",2)])],8,lc),Se(ze,{name:"slide"},{default:je(()=>[c.value.includes(E)?(g(),v("div",fc,[a("p",null,f(w.answer),1)])):$("",!0)]),_:2},1024)],2))),128))])])):p.value?(g(),v("div",hc,[a("div",gc,[a("h1",null,f(p.value.title),1),a("span",yc,f(y.value)+" → "+f(p.value.title),1)]),a("div",vc,[h[4]||(h[4]=a("h2",null,"📘 Overview",-1)),a("pre",bc,f(p.value.description),1)]),p.value.keyPoints?(g(),v("div",wc,[h[5]||(h[5]=a("h2",null,"🔑 Key Points",-1)),a("ul",null,[(g(!0),v(G,null,te(p.value.keyPoints,(w,E)=>(g(),v("li",{key:E},f(w),1))),128))])])):$("",!0),p.value.exercises?(g(),v("div",Sc,[h[8]||(h[8]=a("h2",null,"💻 Exercises",-1)),(g(!0),v(G,null,te(p.value.exercises,(w,E)=>(g(),v("div",{key:E,class:"exercise-card"},[a("div",{class:"exercise-header",onClick:U=>Ne(E)},[a("div",kc,[a("span",Cc,f(E+1),1),a("h3",null,f(w.title),1)]),a("span",{class:J(["chevron",{rotated:l.value.includes(E)}])},"▾",2)],8,xc),Se(ze,{name:"slide"},{default:je(()=>[l.value.includes(E)?(g(),v("div",Tc,[a("p",Ac,f(w.scenario),1),w.steps?(g(),v("div",Pc,[h[6]||(h[6]=a("h4",null,"📋 Steps",-1)),a("ol",null,[(g(!0),v(G,null,te(w.steps,(U,me)=>(g(),v("li",{key:me},f(U),1))),128))])])):$("",!0),w.code?(g(),v("div",_c,[a("div",Ec,[h[7]||(h[7]=a("span",null,"💻 Code",-1)),a("button",{onClick:U=>V(w.code,E),class:"copy-btn"},f(x.value===E?"✅ Copied!":"📋 Copy"),9,Ic)]),a("pre",Rc,[a("code",null,f(w.code),1)])])):$("",!0)])):$("",!0)]),_:2},1024)]))),128))])):$("",!0),p.value&&D.value.length>1?(g(),v("div",Lc,[a("button",{onClick:Fe,disabled:!Z.value,class:"nav-btn prev-btn"},"⬅️ Previous",8,Mc),a("button",{onClick:Xe,disabled:!W.value,class:"nav-btn next-btn"},"Next ➡️",8,Dc)])):$("",!0)])):(g(),v("div",Bc,[h[10]||(h[10]=a("div",{class:"welcome-icon"},"🚀",-1)),h[11]||(h[11]=a("h1",null,"Welcome to SDET",-1)),h[12]||(h[12]=a("p",null,"Select a topic from the sidebar to get started",-1)),a("div",Oc,[a("div",{class:"career-dropdown-header",onClick:h[1]||(h[1]=w=>n.value=!n.value)},[h[9]||(h[9]=a("div",{class:"career-header-left"},[a("span",null,"📌"),a("span",null,"SDET Career – Present & Future")],-1)),a("span",{class:J(["chevron",{rotated:n.value}])},"▾",2)]),Se(ze,{name:"slide"},{default:je(()=>[n.value?(g(),v("div",qc,[Se(Ml)])):$("",!0)]),_:1})]),a("div",Fc,[(g(!0),v(G,null,te(O.value,(w,E)=>(g(),v("div",{key:E,class:"welcome-card",onClick:U=>_(E)},[a("span",Uc,f(w.icon),1),a("h3",null,f(w.title),1),a("p",null,f(w.id==="interview"?w.categories.length+" categories":w.tasks.length+" topics"),1)],8,Nc))),128))])]))])]))}},Hc=Wt(Wc,[["__scopeId","data-v-e4360504"]]),jc={"Task 1: Introduction to Java":{title:"Introduction to Java",description:`Java is one of the most popular, versatile, and powerful programming languages in the world. Created by James Gosling at Sun Microsystems in 1995, Java follows the principle of 'Write Once, Run Anywhere' (WORA).

Key Features of Java:

1. Platform Independent
   - Java code compiles to bytecode
   - Runs on any platform with JVM
   - Same code works on Windows, Mac, Linux

2. Object-Oriented
   - Everything is an object (except primitives)
   - Supports encapsulation, inheritance, polymorphism
   - Promotes code reusability

3. Robust & Secure
   - Strong memory management
   - Exception handling
   - No pointers (unlike C/C++)
   - Built-in security features

4. Multi-threaded
   - Built-in support for concurrent programming
   - Thread class and Runnable interface
   - Synchronization mechanisms

Java Editions:
   - Java SE (Standard Edition): Core Java
   - Java EE (Enterprise Edition): Web & enterprise apps
   - Java ME (Micro Edition): Mobile devices`,keyPoints:["JDK = JRE + Development Tools (compiler, debugger)","JRE = JVM + Libraries (runtime environment)","JVM executes bytecode and provides platform independence","Java is statically typed - types checked at compile time","main() method is the entry point of every Java application","Java 8, 11, 17, 21 are LTS (Long Term Support) versions"],exercises:[{id:1,title:"Set Up Java Development Environment",scenario:"Install JDK, set up environment variables, and write your first Java program.",steps:["Download and install JDK 17 or 21 from Oracle or OpenJDK","Set JAVA_HOME environment variable","Add Java bin folder to PATH","Verify installation: java -version and javac -version","Install an IDE (IntelliJ IDEA recommended)","Create your first Java project"],code:`// HelloWorld.java - Your first Java program
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        
        // Print Java version
        System.out.println("Java Version: " + System.getProperty("java.version"));
        
        // Basic variable declaration
        String name = "Java Developer";
        int year = 2024;
        
        System.out.println("Welcome, " + name + "!");
        System.out.println("Year: " + year);
    }
}

// Compile: javac HelloWorld.java
// Run: java HelloWorld`},{id:2,title:"Understanding Java Program Structure",scenario:"Learn the anatomy of a Java program including packages, imports, classes, and methods.",steps:["Understand package declaration","Learn import statements","Create a class with proper structure","Define the main method","Add instance variables and methods"],code:`// Package declaration (optional, but recommended)
package com.mycompany.myapp;

// Import statements
import java.util.Scanner;
import java.time.LocalDateTime;

/**
 * This is a Javadoc comment - used for documentation
 * @author YourName
 * @version 1.0
 */
public class ProgramStructure {
    
    // Instance variable (field)
    private String appName;
    
    // Static variable (shared across all instances)
    private static int instanceCount = 0;
    
    // Constructor
    public ProgramStructure(String name) {
        this.appName = name;
        instanceCount++;
    }
    
    // Instance method
    public void displayInfo() {
        System.out.println("App: " + appName);
        System.out.println("Created at: " + LocalDateTime.now());
    }
    
    // Static method
    public static int getInstanceCount() {
        return instanceCount;
    }
    
    // Main method - entry point
    public static void main(String[] args) {
        ProgramStructure app1 = new ProgramStructure("MyApp");
        ProgramStructure app2 = new ProgramStructure("AnotherApp");
        
        app1.displayInfo();
        System.out.println("Total instances: " + getInstanceCount());
    }
}`}]},"Task 2: Data Types & Variables":{title:"Data Types & Variables",description:`Java is a strongly typed language where every variable must have a declared type. Understanding data types is fundamental to Java programming.

Primitive Data Types (8 types):

1. Numeric - Integer Types:
   - byte: 8-bit (-128 to 127)
   - short: 16-bit (-32,768 to 32,767)
   - int: 32-bit (most common for integers)
   - long: 64-bit (suffix L required)

2. Numeric - Floating Point:
   - float: 32-bit (suffix F required)
   - double: 64-bit (default for decimals)

3. Character:
   - char: 16-bit Unicode character

4. Boolean:
   - boolean: true or false

Reference Types:
   - Classes (String, custom classes)
   - Arrays
   - Interfaces
   - Enums

Wrapper Classes:
   - Integer, Long, Double, Float, Boolean, Character
   - Allow primitives in collections
   - Provide utility methods`,keyPoints:["Primitives store actual values, references store memory addresses","String is immutable - operations create new String objects","Use int for most integers, double for decimals","Autoboxing: automatic conversion between primitives and wrappers","null can only be assigned to reference types, not primitives","final keyword makes a variable constant (cannot be reassigned)"],exercises:[{id:1,title:"Working with Primitive Types",scenario:"Practice declaring and using all primitive data types with type casting and operations.",steps:["Declare variables of each primitive type","Perform arithmetic operations","Understand type casting (widening and narrowing)","Work with character and boolean types","Explore overflow and underflow"],code:`public class PrimitiveTypes {
    public static void main(String[] args) {
        // Integer types
        byte smallNum = 127;           // -128 to 127
        short mediumNum = 32000;       // -32,768 to 32,767
        int normalNum = 2_000_000;     // Underscores for readability
        long bigNum = 9_000_000_000L;  // L suffix required
        
        // Floating point
        float price = 19.99F;          // F suffix required
        double precise = 3.14159265359;
        
        // Character and Boolean
        char grade = 'A';
        char unicode = '\\u0041';       // Also 'A'
        boolean isActive = true;
        
        // Type casting
        // Widening (automatic): smaller to larger
        int intVal = 100;
        long longVal = intVal;         // int to long (automatic)
        double doubleVal = intVal;     // int to double (automatic)
        
        // Narrowing (explicit): larger to smaller
        double d = 100.99;
        int i = (int) d;               // Loses decimal: 100
        
        // Overflow example
        byte b = 127;
        b = (byte)(b + 1);             // Overflows to -128!
        System.out.println("Overflow result: " + b);
        
        // Arithmetic operations
        int sum = 10 + 5;
        int diff = 10 - 5;
        int product = 10 * 5;
        int quotient = 10 / 3;         // Integer division: 3
        int remainder = 10 % 3;        // Modulus: 1
        double realDiv = 10.0 / 3;     // Real division: 3.333...
        
        System.out.println("Sum: " + sum);
        System.out.println("Integer division: " + quotient);
        System.out.println("Real division: " + realDiv);
    }
}`},{id:2,title:"Working with Strings",scenario:"Master String operations, StringBuilder, and common string manipulation techniques.",steps:["Create strings using different methods","Use common String methods","Understand String immutability","Use StringBuilder for efficient concatenation","Practice string formatting"],code:`public class StringOperations {
    public static void main(String[] args) {
        // String creation
        String s1 = "Hello";                    // String literal (uses pool)
        String s2 = new String("Hello");        // New object (not pooled)
        String s3 = "Hello";                    // Same reference as s1
        
        // Comparison
        System.out.println(s1 == s3);           // true (same reference)
        System.out.println(s1 == s2);           // false (different objects)
        System.out.println(s1.equals(s2));      // true (same content)
        
        // Common String methods
        String text = "  Java Programming  ";
        System.out.println("Length: " + text.length());
        System.out.println("Trimmed: '" + text.trim() + "'");
        System.out.println("Upper: " + text.toUpperCase());
        System.out.println("Lower: " + text.toLowerCase());
        System.out.println("Char at 2: " + text.charAt(2));
        System.out.println("Substring: " + text.substring(2, 6));
        System.out.println("Contains 'Java': " + text.contains("Java"));
        System.out.println("Index of 'Pro': " + text.indexOf("Pro"));
        System.out.println("Replace: " + text.replace("Java", "Python"));
        
        // Split and Join
        String csv = "apple,banana,cherry";
        String[] fruits = csv.split(",");
        for (String fruit : fruits) {
            System.out.println("Fruit: " + fruit);
        }
        String joined = String.join(" | ", fruits);
        System.out.println("Joined: " + joined);
        
        // StringBuilder (mutable, efficient for concatenation)
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < 5; i++) {
            sb.append("Item").append(i).append(", ");
        }
        System.out.println("Built: " + sb.toString());
        
        // String formatting
        String name = "Alice";
        int age = 30;
        double salary = 75000.50;
        
        // Using String.format()
        String formatted = String.format("Name: %s, Age: %d, Salary: $%.2f", 
                                         name, age, salary);
        System.out.println(formatted);
        
        // Using printf()
        System.out.printf("Name: %-10s | Age: %3d%n", name, age);
        
        // Text blocks (Java 15+)
        String json = """
            {
                "name": "John",
                "age": 30
            }
            """;
        System.out.println(json);
    }
}`}]},"Task 3: Control Flow":{title:"Control Flow Statements",description:`Control flow statements determine the order in which statements are executed. Java provides several control flow mechanisms.

Decision Making:

1. if-else Statement
   - Simple if
   - if-else
   - if-else if-else ladder
   - Nested if

2. switch Statement
   - Traditional switch
   - Enhanced switch (Java 14+)
   - Switch expressions

3. Ternary Operator
   - condition ? value1 : value2

Looping:

1. for Loop
   - Traditional for
   - Enhanced for-each

2. while Loop
   - Entry-controlled loop

3. do-while Loop
   - Exit-controlled loop (executes at least once)

Jump Statements:
   - break: exit loop or switch
   - continue: skip current iteration
   - return: exit method`,keyPoints:["Use switch for multiple discrete values, if-else for ranges/conditions","Enhanced switch (Java 14+) doesn't need break statements","for-each loop is cleaner but can't modify collection or access index","Infinite loops: while(true) or for(;;)","Labeled break/continue for nested loops","Avoid deep nesting - refactor to methods"],exercises:[{id:1,title:"Decision Making Statements",scenario:"Practice if-else, switch statements, and ternary operator with various examples.",steps:["Write if-else for grade calculation","Use switch for day of week","Practice enhanced switch expressions","Use ternary for simple conditions"],code:`public class DecisionMaking {
    public static void main(String[] args) {
        // If-else example: Grade calculator
        int score = 85;
        String grade;
        
        if (score >= 90) {
            grade = "A";
        } else if (score >= 80) {
            grade = "B";
        } else if (score >= 70) {
            grade = "C";
        } else if (score >= 60) {
            grade = "D";
        } else {
            grade = "F";
        }
        System.out.println("Grade: " + grade);
        
        // Traditional switch
        int day = 3;
        String dayName;
        switch (day) {
            case 1:
                dayName = "Monday";
                break;
            case 2:
                dayName = "Tuesday";
                break;
            case 3:
                dayName = "Wednesday";
                break;
            default:
                dayName = "Unknown";
        }
        System.out.println("Day: " + dayName);
        
        // Enhanced switch (Java 14+) - no break needed
        String dayType = switch (day) {
            case 1, 2, 3, 4, 5 -> "Weekday";
            case 6, 7 -> "Weekend";
            default -> "Invalid";
        };
        System.out.println("Day type: " + dayType);
        
        // Switch with yield (for complex logic)
        String activity = switch (day) {
            case 1 -> "Start of week meeting";
            case 5 -> {
                System.out.println("It's Friday!");
                yield "Weekly review";
            }
            default -> "Regular work";
        };
        System.out.println("Activity: " + activity);
        
        // Ternary operator
        int age = 20;
        String status = (age >= 18) ? "Adult" : "Minor";
        System.out.println("Status: " + status);
        
        // Nested ternary (avoid in production - hard to read)
        String category = (age < 13) ? "Child" : 
                         (age < 20) ? "Teenager" : "Adult";
        System.out.println("Category: " + category);
    }
}`},{id:2,title:"Loops and Iteration",scenario:"Master all loop types with practical examples including nested loops and loop control.",steps:["Use for loop for counting","Use while for conditional iteration","Use do-while for menu systems","Practice for-each with arrays","Use break and continue effectively"],code:`import java.util.Scanner;

public class LoopsDemo {
    public static void main(String[] args) {
        // Traditional for loop
        System.out.println("Counting 1 to 5:");
        for (int i = 1; i <= 5; i++) {
            System.out.print(i + " ");
        }
        System.out.println();
        
        // For loop - reverse
        System.out.println("Countdown:");
        for (int i = 5; i >= 1; i--) {
            System.out.print(i + " ");
        }
        System.out.println();
        
        // Enhanced for-each loop
        String[] fruits = {"Apple", "Banana", "Cherry"};
        System.out.println("Fruits:");
        for (String fruit : fruits) {
            System.out.println("  - " + fruit);
        }
        
        // While loop - find first digit
        int number = 12345;
        while (number >= 10) {
            number /= 10;
        }
        System.out.println("First digit: " + number);
        
        // Do-while (executes at least once)
        int count = 0;
        do {
            System.out.println("Do-while executed, count: " + count);
            count++;
        } while (count < 3);
        
        // Break example - find first even
        int[] numbers = {1, 3, 5, 8, 9, 10};
        for (int n : numbers) {
            if (n % 2 == 0) {
                System.out.println("First even: " + n);
                break;
            }
        }
        
        // Continue example - skip negatives
        int[] mixed = {1, -2, 3, -4, 5};
        System.out.print("Positive only: ");
        for (int n : mixed) {
            if (n < 0) continue;
            System.out.print(n + " ");
        }
        System.out.println();
        
        // Nested loops - multiplication table
        System.out.println("\\nMultiplication Table (1-3):");
        for (int i = 1; i <= 3; i++) {
            for (int j = 1; j <= 3; j++) {
                System.out.printf("%d x %d = %d\\t", i, j, i * j);
            }
            System.out.println();
        }
        
        // Labeled break (for nested loops)
        System.out.println("\\nLabeled break example:");
        outer:
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                if (i == 1 && j == 1) {
                    System.out.println("Breaking out of both loops");
                    break outer;
                }
                System.out.println("i=" + i + ", j=" + j);
            }
        }
    }
}`}]},"Task 4: Object-Oriented Programming":{title:"Object-Oriented Programming (OOP)",description:`Java is fundamentally an object-oriented language. Understanding OOP principles is essential for writing clean, maintainable, and reusable code.

Four Pillars of OOP:

1. Encapsulation
   - Bundle data and methods together
   - Hide internal implementation
   - Use access modifiers (private, public, protected)
   - Provide getters and setters

2. Inheritance
   - Child class inherits from parent class
   - Use 'extends' keyword
   - Promotes code reuse
   - 'super' keyword to access parent

3. Polymorphism
   - One interface, multiple implementations
   - Method overloading (compile-time)
   - Method overriding (runtime)
   - Enables flexibility and extensibility

4. Abstraction
   - Hide complex implementation
   - Show only necessary features
   - Abstract classes and interfaces
   - Focus on 'what' not 'how'`,keyPoints:["Every class implicitly extends Object class","Java supports single inheritance for classes, multiple for interfaces","Use 'final' to prevent inheritance or method overriding","Constructor is not inherited but can be called using super()","@Override annotation helps catch errors in method overriding","Prefer composition over inheritance when possible"],exercises:[{id:1,title:"Classes and Objects",scenario:"Create a complete class with encapsulation, constructors, and methods.",steps:["Define a class with private fields","Create constructors (default and parameterized)","Add getters and setters","Implement instance methods","Create and use objects"],code:`public class BankAccount {
    // Private fields (encapsulation)
    private String accountNumber;
    private String holderName;
    private double balance;
    private static int accountCount = 0; // Shared across all instances
    
    // Default constructor
    public BankAccount() {
        this.accountNumber = "ACC" + (++accountCount);
        this.balance = 0.0;
    }
    
    // Parameterized constructor
    public BankAccount(String holderName, double initialDeposit) {
        this(); // Call default constructor
        this.holderName = holderName;
        if (initialDeposit > 0) {
            this.balance = initialDeposit;
        }
    }
    
    // Getters
    public String getAccountNumber() {
        return accountNumber;
    }
    
    public String getHolderName() {
        return holderName;
    }
    
    public double getBalance() {
        return balance;
    }
    
    // Setter with validation
    public void setHolderName(String holderName) {
        if (holderName != null && !holderName.trim().isEmpty()) {
            this.holderName = holderName;
        }
    }
    
    // Business methods
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: $" + amount);
        } else {
            System.out.println("Invalid deposit amount");
        }
    }
    
    public boolean withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: $" + amount);
            return true;
        }
        System.out.println("Insufficient funds or invalid amount");
        return false;
    }
    
    // Static method
    public static int getTotalAccounts() {
        return accountCount;
    }
    
    // toString method for object representation
    @Override
    public String toString() {
        return String.format("Account[%s, %s, $%.2f]", 
                            accountNumber, holderName, balance);
    }
    
    // Main method to test
    public static void main(String[] args) {
        BankAccount acc1 = new BankAccount("John Doe", 1000);
        BankAccount acc2 = new BankAccount("Jane Smith", 500);
        
        System.out.println(acc1);
        acc1.deposit(250);
        acc1.withdraw(100);
        System.out.println("Balance: $" + acc1.getBalance());
        
        System.out.println("Total accounts: " + BankAccount.getTotalAccounts());
    }
}`},{id:2,title:"Inheritance and Polymorphism",scenario:"Implement inheritance hierarchy with method overriding to demonstrate polymorphism.",steps:["Create a base class (Animal)","Create derived classes (Dog, Cat)","Override methods in child classes","Demonstrate polymorphism with parent reference","Use instanceof and type casting"],code:`// Base class
class Animal {
    protected String name;
    protected int age;
    
    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Method to be overridden
    public void makeSound() {
        System.out.println("Some generic animal sound");
    }
    
    public void eat() {
        System.out.println(name + " is eating");
    }
    
    public void displayInfo() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}

// Derived class 1
class Dog extends Animal {
    private String breed;
    
    public Dog(String name, int age, String breed) {
        super(name, age); // Call parent constructor
        this.breed = breed;
    }
    
    @Override
    public void makeSound() {
        System.out.println(name + " says: Woof! Woof!");
    }
    
    // Dog-specific method
    public void fetch() {
        System.out.println(name + " is fetching the ball");
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo(); // Call parent method
        System.out.println("Breed: " + breed);
    }
}

// Derived class 2
class Cat extends Animal {
    private boolean isIndoor;
    
    public Cat(String name, int age, boolean isIndoor) {
        super(name, age);
        this.isIndoor = isIndoor;
    }
    
    @Override
    public void makeSound() {
        System.out.println(name + " says: Meow!");
    }
    
    public void scratch() {
        System.out.println(name + " is scratching");
    }
}

// Main class to demonstrate
public class InheritanceDemo {
    public static void main(String[] args) {
        // Polymorphism: Parent reference, child object
        Animal[] animals = {
            new Dog("Buddy", 3, "Golden Retriever"),
            new Cat("Whiskers", 2, true),
            new Dog("Max", 5, "German Shepherd")
        };
        
        // Polymorphic behavior
        System.out.println("=== Polymorphism Demo ===");
        for (Animal animal : animals) {
            animal.displayInfo();
            animal.makeSound(); // Each animal makes its own sound
            animal.eat();
            System.out.println();
        }
        
        // instanceof and type casting
        System.out.println("=== Type Checking ===");
        for (Animal animal : animals) {
            if (animal instanceof Dog) {
                Dog dog = (Dog) animal; // Downcasting
                dog.fetch();
            } else if (animal instanceof Cat) {
                Cat cat = (Cat) animal;
                cat.scratch();
            }
        }
        
        // Pattern matching instanceof (Java 16+)
        Animal myPet = new Dog("Rex", 4, "Labrador");
        if (myPet instanceof Dog d) {
            d.fetch(); // d is already cast to Dog
        }
    }
}`}]},"Task 5: Interfaces and Abstract Classes":{title:"Interfaces and Abstract Classes",description:`Abstraction in Java is achieved through abstract classes and interfaces. Understanding when to use each is crucial for good design.

Abstract Classes:
   - Cannot be instantiated
   - Can have abstract and concrete methods
   - Can have instance variables
   - Can have constructors
   - Single inheritance only
   - Use when classes share common code

Interfaces:
   - Define a contract (what, not how)
   - All methods are public abstract (before Java 8)
   - Java 8+: default and static methods allowed
   - Java 9+: private methods allowed
   - Multiple implementation allowed
   - Use for defining capabilities

When to Use What:
   - Abstract class: IS-A relationship with shared code
   - Interface: CAN-DO capability or contract
   - Prefer interfaces for flexibility`,keyPoints:["A class can extend one class but implement multiple interfaces","Interface variables are implicitly public static final","Default methods in interfaces provide backward compatibility","Use interfaces for loose coupling and dependency injection","Abstract classes can have state, interfaces cannot (before Java 8)","Functional interfaces have exactly one abstract method"],exercises:[{id:1,title:"Working with Interfaces",scenario:"Create interfaces to define contracts and implement them in multiple classes.",steps:["Define interfaces with abstract methods","Add default and static methods","Implement interfaces in classes","Use interface as type","Demonstrate multiple interface implementation"],code:`// Interface definition
interface Drawable {
    // Abstract method (implicitly public abstract)
    void draw();
    
    // Default method (Java 8+)
    default void fill(String color) {
        System.out.println("Filling with " + color);
    }
    
    // Static method
    static void printInfo() {
        System.out.println("Drawable interface for shapes");
    }
}

interface Resizable {
    void resize(double factor);
    
    default void doubleSize() {
        resize(2.0);
    }
}

// Implementing multiple interfaces
class Rectangle implements Drawable, Resizable {
    private double width;
    private double height;
    
    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }
    
    @Override
    public void draw() {
        System.out.println("Drawing rectangle: " + width + "x" + height);
    }
    
    @Override
    public void resize(double factor) {
        width *= factor;
        height *= factor;
        System.out.println("Resized to: " + width + "x" + height);
    }
    
    public double getArea() {
        return width * height;
    }
}

class Circle implements Drawable, Resizable {
    private double radius;
    
    public Circle(double radius) {
        this.radius = radius;
    }
    
    @Override
    public void draw() {
        System.out.println("Drawing circle with radius: " + radius);
    }
    
    @Override
    public void resize(double factor) {
        radius *= factor;
        System.out.println("Resized to radius: " + radius);
    }
}

public class InterfaceDemo {
    public static void main(String[] args) {
        // Using interface as type
        Drawable[] shapes = {
            new Rectangle(10, 5),
            new Circle(7)
        };
        
        Drawable.printInfo(); // Static method call
        
        for (Drawable shape : shapes) {
            shape.draw();
            shape.fill("Blue"); // Default method
            System.out.println();
        }
        
        // Using Resizable interface
        Resizable rect = new Rectangle(10, 5);
        rect.resize(1.5);
        rect.doubleSize(); // Default method
    }
}`},{id:2,title:"Abstract Classes",scenario:"Design an abstract class hierarchy for an employee management system.",steps:["Create abstract class with abstract and concrete methods","Define common properties and behaviors","Create concrete subclasses","Use abstract class as type","Compare with interface approach"],code:`// Abstract class
abstract class Employee {
    protected String id;
    protected String name;
    protected double baseSalary;
    
    // Constructor in abstract class
    public Employee(String id, String name, double baseSalary) {
        this.id = id;
        this.name = name;
        this.baseSalary = baseSalary;
    }
    
    // Abstract method - must be implemented by subclasses
    public abstract double calculateSalary();
    
    // Concrete method - shared by all subclasses
    public void displayInfo() {
        System.out.println("ID: " + id);
        System.out.println("Name: " + name);
        System.out.println("Salary: $" + calculateSalary());
    }
    
    // Getters
    public String getName() {
        return name;
    }
}

// Concrete class 1
class FullTimeEmployee extends Employee {
    private double bonus;
    
    public FullTimeEmployee(String id, String name, double baseSalary, double bonus) {
        super(id, name, baseSalary);
        this.bonus = bonus;
    }
    
    @Override
    public double calculateSalary() {
        return baseSalary + bonus;
    }
}

// Concrete class 2
class PartTimeEmployee extends Employee {
    private int hoursWorked;
    private double hourlyRate;
    
    public PartTimeEmployee(String id, String name, int hoursWorked, double hourlyRate) {
        super(id, name, 0); // No base salary
        this.hoursWorked = hoursWorked;
        this.hourlyRate = hourlyRate;
    }
    
    @Override
    public double calculateSalary() {
        return hoursWorked * hourlyRate;
    }
}

// Concrete class 3
class Contractor extends Employee {
    private double projectFee;
    
    public Contractor(String id, String name, double projectFee) {
        super(id, name, 0);
        this.projectFee = projectFee;
    }
    
    @Override
    public double calculateSalary() {
        return projectFee;
    }
}

public class AbstractClassDemo {
    public static void main(String[] args) {
        // Cannot instantiate abstract class
        // Employee emp = new Employee("1", "Test", 1000); // ERROR!
        
        // Using abstract class as type (polymorphism)
        Employee[] employees = {
            new FullTimeEmployee("FT001", "John Doe", 5000, 1000),
            new PartTimeEmployee("PT001", "Jane Smith", 80, 25),
            new Contractor("CT001", "Bob Wilson", 15000)
        };
        
        double totalPayroll = 0;
        
        for (Employee emp : employees) {
            System.out.println("=== " + emp.getClass().getSimpleName() + " ===");
            emp.displayInfo();
            totalPayroll += emp.calculateSalary();
            System.out.println();
        }
        
        System.out.println("Total Payroll: $" + totalPayroll);
    }
}`}]},"Task 6: Collections Framework":{title:"Java Collections Framework",description:`The Collections Framework provides a unified architecture for storing and manipulating groups of objects.

Collection Hierarchy:

1. List (Ordered, allows duplicates)
   - ArrayList: Dynamic array, fast random access
   - LinkedList: Doubly linked list, fast insertion/deletion
   - Vector: Thread-safe ArrayList (legacy)

2. Set (No duplicates)
   - HashSet: Unordered, O(1) operations
   - LinkedHashSet: Maintains insertion order
   - TreeSet: Sorted order, O(log n)

3. Queue (FIFO)
   - LinkedList: Also implements Queue
   - PriorityQueue: Elements ordered by priority
   - ArrayDeque: Double-ended queue

4. Map (Key-Value pairs)
   - HashMap: Unordered, O(1) operations
   - LinkedHashMap: Maintains insertion order
   - TreeMap: Sorted by keys
   - Hashtable: Thread-safe (legacy)`,keyPoints:["ArrayList for most use cases, LinkedList for frequent insertions/deletions","HashSet for fast unique checks, TreeSet for sorted unique elements","HashMap is not thread-safe, use ConcurrentHashMap for concurrent access","Use List.of(), Set.of(), Map.of() for immutable collections (Java 9+)","Always use generics to ensure type safety","Iterator.remove() is the safe way to remove during iteration"],exercises:[{id:1,title:"Working with Lists",scenario:"Master ArrayList and LinkedList operations including sorting and searching.",steps:["Create and populate ArrayLists","Use common List methods","Sort lists with Comparator","Search and filter lists","Compare ArrayList vs LinkedList"],code:`import java.util.*;

public class ListDemo {
    public static void main(String[] args) {
        // Creating ArrayList
        List<String> fruits = new ArrayList<>();
        
        // Adding elements
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Cherry");
        fruits.add(1, "Apricot"); // Insert at index
        
        System.out.println("Fruits: " + fruits);
        System.out.println("Size: " + fruits.size());
        System.out.println("Element at 0: " + fruits.get(0));
        System.out.println("Contains Banana: " + fruits.contains("Banana"));
        System.out.println("Index of Cherry: " + fruits.indexOf("Cherry"));
        
        // Modifying
        fruits.set(0, "Avocado"); // Replace element
        fruits.remove("Banana"); // Remove by object
        fruits.remove(0); // Remove by index
        System.out.println("After modifications: " + fruits);
        
        // Iterating
        System.out.println("\\nIterating:");
        for (String fruit : fruits) {
            System.out.println("  - " + fruit);
        }
        
        // List of numbers for sorting
        List<Integer> numbers = new ArrayList<>(Arrays.asList(5, 2, 8, 1, 9, 3));
        System.out.println("\\nOriginal: " + numbers);
        
        Collections.sort(numbers); // Natural order
        System.out.println("Sorted: " + numbers);
        
        Collections.sort(numbers, Collections.reverseOrder());
        System.out.println("Reverse: " + numbers);
        
        // Custom objects with Comparator
        List<Person> people = new ArrayList<>();
        people.add(new Person("Alice", 30));
        people.add(new Person("Bob", 25));
        people.add(new Person("Charlie", 35));
        
        // Sort by age
        people.sort(Comparator.comparingInt(Person::getAge));
        System.out.println("\\nSorted by age: " + people);
        
        // Sort by name
        people.sort(Comparator.comparing(Person::getName));
        System.out.println("Sorted by name: " + people);
        
        // Java 9+ immutable list
        List<String> immutable = List.of("One", "Two", "Three");
        // immutable.add("Four"); // UnsupportedOperationException!
        
        // Stream operations (Java 8+)
        List<Integer> nums = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        List<Integer> evenSquares = nums.stream()
            .filter(n -> n % 2 == 0)
            .map(n -> n * n)
            .toList(); // Java 16+ or collect(Collectors.toList())
        System.out.println("\\nEven squares: " + evenSquares);
    }
}

class Person {
    private String name;
    private int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public String getName() { return name; }
    public int getAge() { return age; }
    
    @Override
    public String toString() {
        return name + "(" + age + ")";
    }
}`},{id:2,title:"Working with Maps",scenario:"Master HashMap operations for key-value data storage and retrieval.",steps:["Create and populate HashMaps","Use common Map methods","Iterate over maps","Handle missing keys","Use computeIfAbsent and merge"],code:`import java.util.*;

public class MapDemo {
    public static void main(String[] args) {
        // Creating HashMap
        Map<String, Integer> scores = new HashMap<>();
        
        // Adding entries
        scores.put("Alice", 95);
        scores.put("Bob", 87);
        scores.put("Charlie", 92);
        scores.put("Alice", 98); // Updates existing key
        
        System.out.println("Scores: " + scores);
        System.out.println("Size: " + scores.size());
        System.out.println("Alice's score: " + scores.get("Alice"));
        System.out.println("Contains Bob: " + scores.containsKey("Bob"));
        System.out.println("Contains 100: " + scores.containsValue(100));
        
        // Get with default
        int davidScore = scores.getOrDefault("David", 0);
        System.out.println("David's score (default): " + davidScore);
        
        // Iterating over Map
        System.out.println("\\n--- Iterating ---");
        
        // Method 1: entrySet
        for (Map.Entry<String, Integer> entry : scores.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
        
        // Method 2: keySet
        for (String name : scores.keySet()) {
            System.out.println(name + " -> " + scores.get(name));
        }
        
        // Method 3: forEach (Java 8+)
        scores.forEach((name, score) -> 
            System.out.println(name + " scored " + score));
        
        // Advanced operations
        System.out.println("\\n--- Advanced Operations ---");
        
        // putIfAbsent - only adds if key doesn't exist
        scores.putIfAbsent("Alice", 50); // Won't change Alice
        scores.putIfAbsent("David", 88); // Adds David
        System.out.println("After putIfAbsent: " + scores);
        
        // computeIfAbsent - compute value if key absent
        Map<String, List<String>> groups = new HashMap<>();
        groups.computeIfAbsent("Team A", k -> new ArrayList<>()).add("Alice");
        groups.computeIfAbsent("Team A", k -> new ArrayList<>()).add("Bob");
        System.out.println("Groups: " + groups);
        
        // merge - combine values
        Map<String, Integer> wordCount = new HashMap<>();
        String[] words = {"apple", "banana", "apple", "cherry", "banana", "apple"};
        for (String word : words) {
            wordCount.merge(word, 1, Integer::sum);
        }
        System.out.println("Word count: " + wordCount);
        
        // TreeMap - sorted by keys
        Map<String, Integer> sortedScores = new TreeMap<>(scores);
        System.out.println("\\nSorted by name: " + sortedScores);
        
        // LinkedHashMap - maintains insertion order
        Map<String, Integer> orderedScores = new LinkedHashMap<>();
        orderedScores.put("First", 1);
        orderedScores.put("Second", 2);
        orderedScores.put("Third", 3);
        System.out.println("Insertion order: " + orderedScores);
        
        // Java 9+ immutable map
        Map<String, String> constants = Map.of(
            "PI", "3.14159",
            "E", "2.71828"
        );
        System.out.println("Constants: " + constants);
    }
}`}]},"Task 7: Exception Handling":{title:"Exception Handling",description:`Exception handling is a mechanism to handle runtime errors gracefully without crashing the program.

Exception Hierarchy:
   Throwable
   ├── Error (system errors, don't catch)
   │   ├── OutOfMemoryError
   │   └── StackOverflowError
   └── Exception
       ├── Checked Exceptions (must handle)
       │   ├── IOException
       │   ├── SQLException
       │   └── ClassNotFoundException
       └── RuntimeException (unchecked)
           ├── NullPointerException
           ├── ArrayIndexOutOfBoundsException
           ├── IllegalArgumentException
           └── ArithmeticException

Keywords:
   - try: Block that might throw exception
   - catch: Handle specific exception
   - finally: Always executes (cleanup)
   - throw: Explicitly throw an exception
   - throws: Declare method may throw exception`,keyPoints:["Checked exceptions must be caught or declared (throws)","Unchecked exceptions (RuntimeException) don't require handling","finally block always executes, even with return statement","try-with-resources automatically closes resources (Java 7+)","Catch specific exceptions before general ones","Don't catch Exception or Throwable unless necessary"],exercises:[{id:1,title:"Basic Exception Handling",scenario:"Learn try-catch-finally blocks and handling multiple exceptions.",steps:["Use try-catch for basic errors","Handle multiple exceptions","Use finally for cleanup","Access exception information","Re-throw exceptions"],code:`import java.io.*;
import java.util.Scanner;

public class ExceptionDemo {
    public static void main(String[] args) {
        // Basic try-catch
        try {
            int result = 10 / 0;
            System.out.println(result);
        } catch (ArithmeticException e) {
            System.out.println("Error: Cannot divide by zero");
            System.out.println("Message: " + e.getMessage());
        }
        
        // Multiple catch blocks
        try {
            int[] arr = {1, 2, 3};
            System.out.println(arr[5]); // ArrayIndexOutOfBoundsException
            
            String str = null;
            System.out.println(str.length()); // NullPointerException
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Array index error: " + e.getMessage());
        } catch (NullPointerException e) {
            System.out.println("Null pointer error: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("Some other error: " + e.getMessage());
        }
        
        // Multi-catch (Java 7+)
        try {
            // Some code
            throw new IllegalArgumentException("Test");
        } catch (IllegalArgumentException | IllegalStateException e) {
            System.out.println("Caught: " + e.getClass().getSimpleName());
        }
        
        // try-catch-finally
        Scanner scanner = null;
        try {
            scanner = new Scanner(System.in);
            System.out.print("Enter a number: ");
            // int num = scanner.nextInt(); // Could throw InputMismatchException
        } catch (Exception e) {
            System.out.println("Invalid input");
        } finally {
            System.out.println("Finally block always executes");
            if (scanner != null) {
                scanner.close();
            }
        }
        
        // try-with-resources (Java 7+) - auto-closes resources
        try (BufferedReader reader = new BufferedReader(
                new FileReader("test.txt"))) {
            String line = reader.readLine();
            System.out.println(line);
        } catch (FileNotFoundException e) {
            System.out.println("File not found");
        } catch (IOException e) {
            System.out.println("Error reading file");
        }
        // reader is automatically closed here
        
        // Calling method that throws exception
        try {
            validateAge(-5);
        } catch (IllegalArgumentException e) {
            System.out.println("Validation error: " + e.getMessage());
        }
    }
    
    // Method that throws exception
    public static void validateAge(int age) {
        if (age < 0) {
            throw new IllegalArgumentException("Age cannot be negative: " + age);
        }
        if (age > 150) {
            throw new IllegalArgumentException("Age seems unrealistic: " + age);
        }
        System.out.println("Age is valid: " + age);
    }
}`},{id:2,title:"Custom Exceptions",scenario:"Create and use custom exception classes for domain-specific error handling.",steps:["Create custom exception classes","Add constructors and fields","Throw custom exceptions","Handle custom exceptions","Chain exceptions"],code:`// Custom checked exception
class InsufficientFundsException extends Exception {
    private double shortfall;
    
    public InsufficientFundsException(String message, double shortfall) {
        super(message);
        this.shortfall = shortfall;
    }
    
    public double getShortfall() {
        return shortfall;
    }
}

// Custom unchecked exception
class InvalidAccountException extends RuntimeException {
    public InvalidAccountException(String message) {
        super(message);
    }
    
    public InvalidAccountException(String message, Throwable cause) {
        super(message, cause);
    }
}

// Bank account class using custom exceptions
class BankAccountWithExceptions {
    private String accountId;
    private double balance;
    
    public BankAccountWithExceptions(String accountId, double initialBalance) {
        if (accountId == null || accountId.isEmpty()) {
            throw new InvalidAccountException("Account ID cannot be empty");
        }
        if (initialBalance < 0) {
            throw new InvalidAccountException("Initial balance cannot be negative");
        }
        this.accountId = accountId;
        this.balance = initialBalance;
    }
    
    public void withdraw(double amount) throws InsufficientFundsException {
        if (amount <= 0) {
            throw new IllegalArgumentException("Withdrawal amount must be positive");
        }
        if (amount > balance) {
            double shortfall = amount - balance;
            throw new InsufficientFundsException(
                "Cannot withdraw $" + amount + " from account " + accountId,
                shortfall
            );
        }
        balance -= amount;
        System.out.println("Withdrew $" + amount + ". New balance: $" + balance);
    }
    
    public void deposit(double amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("Deposit amount must be positive");
        }
        balance += amount;
    }
    
    public double getBalance() {
        return balance;
    }
}

public class CustomExceptionDemo {
    public static void main(String[] args) {
        // Test custom exceptions
        try {
            BankAccountWithExceptions account = 
                new BankAccountWithExceptions("ACC001", 1000);
            
            account.withdraw(500);  // OK
            account.withdraw(800);  // Will throw InsufficientFundsException
            
        } catch (InsufficientFundsException e) {
            System.out.println("Error: " + e.getMessage());
            System.out.println("You need $" + e.getShortfall() + " more");
        }
        
        // Test invalid account
        try {
            BankAccountWithExceptions invalid = 
                new BankAccountWithExceptions("", 100);
        } catch (InvalidAccountException e) {
            System.out.println("Invalid account: " + e.getMessage());
        }
        
        // Exception chaining
        try {
            processAccount(null);
        } catch (InvalidAccountException e) {
            System.out.println("Processing error: " + e.getMessage());
            if (e.getCause() != null) {
                System.out.println("Caused by: " + e.getCause().getMessage());
            }
        }
    }
    
    public static void processAccount(String accountId) {
        try {
            if (accountId == null) {
                throw new NullPointerException("Account ID is null");
            }
            // Process account...
        } catch (NullPointerException e) {
            // Chain the exception
            throw new InvalidAccountException("Failed to process account", e);
        }
    }
}`}]},"Task 8: Java 8+ Features":{title:"Java 8+ Modern Features",description:`Java 8 brought revolutionary features that changed how Java code is written. Understanding these features is essential for modern Java development.

Lambda Expressions:
   - Anonymous functions
   - Syntax: (parameters) -> expression
   - Used with functional interfaces

Stream API:
   - Process collections functionally
   - Filter, map, reduce operations
   - Lazy evaluation
   - Parallel processing support

Optional:
   - Container for potentially null values
   - Eliminates NullPointerException
   - Functional methods: map, filter, orElse

Date/Time API:
   - Immutable date/time classes
   - LocalDate, LocalTime, LocalDateTime
   - ZonedDateTime for time zones
   - Period and Duration for calculations`,keyPoints:["Lambda expressions enable functional programming in Java","Streams don't modify source collection","Use Optional.ofNullable() for potentially null values","Stream operations are lazy until terminal operation","Method references (::) are shorthand for lambdas","LocalDateTime is immutable - operations return new objects"],exercises:[{id:1,title:"Lambda Expressions",scenario:"Master lambda expressions and functional interfaces for cleaner, more concise code.",steps:["Understand functional interfaces","Write lambda expressions","Use method references","Work with built-in functional interfaces","Create custom functional interfaces"],code:`import java.util.*;
import java.util.function.*;

// Custom functional interface
@FunctionalInterface
interface Calculator {
    int calculate(int a, int b);
    
    // Default method allowed
    default void printInfo() {
        System.out.println("Calculator interface");
    }
}

public class LambdaDemo {
    public static void main(String[] args) {
        // Lambda basics
        // Before Java 8
        Runnable oldWay = new Runnable() {
            @Override
            public void run() {
                System.out.println("Old way");
            }
        };
        
        // With lambda
        Runnable newWay = () -> System.out.println("Lambda way");
        
        // Lambda with parameters
        Calculator add = (a, b) -> a + b;
        Calculator multiply = (a, b) -> a * b;
        
        System.out.println("5 + 3 = " + add.calculate(5, 3));
        System.out.println("5 * 3 = " + multiply.calculate(5, 3));
        
        // Lambda with block
        Calculator complex = (a, b) -> {
            int result = a + b;
            result *= 2;
            return result;
        };
        System.out.println("Complex: " + complex.calculate(5, 3));
        
        // Built-in functional interfaces
        // Predicate<T> - takes T, returns boolean
        Predicate<String> isLong = s -> s.length() > 5;
        System.out.println("Is 'Hello' long? " + isLong.test("Hello"));
        System.out.println("Is 'Hi' long? " + isLong.test("Hi"));
        
        // Function<T, R> - takes T, returns R
        Function<String, Integer> length = s -> s.length();
        System.out.println("Length of 'Java': " + length.apply("Java"));
        
        // Consumer<T> - takes T, returns void
        Consumer<String> printer = s -> System.out.println(">> " + s);
        printer.accept("Hello Consumer");
        
        // Supplier<T> - takes nothing, returns T
        Supplier<Double> random = () -> Math.random();
        System.out.println("Random: " + random.get());
        
        // BiFunction<T, U, R>
        BiFunction<String, String, String> concat = (a, b) -> a + " " + b;
        System.out.println(concat.apply("Hello", "World"));
        
        // Method references
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
        
        // Lambda
        names.forEach(name -> System.out.println(name));
        
        // Method reference (same as above)
        names.forEach(System.out::println);
        
        // Static method reference
        Function<String, Integer> parser = Integer::parseInt;
        System.out.println("Parsed: " + parser.apply("123"));
        
        // Instance method reference
        Function<String, String> upper = String::toUpperCase;
        System.out.println("Upper: " + upper.apply("java"));
        
        // Constructor reference
        Supplier<ArrayList<String>> listFactory = ArrayList::new;
        List<String> newList = listFactory.get();
    }
}`},{id:2,title:"Stream API",scenario:"Master the Stream API for functional data processing and transformation.",steps:["Create streams from collections","Use intermediate operations (filter, map, sorted)","Use terminal operations (collect, forEach, reduce)","Chain multiple operations","Use parallel streams"],code:`import java.util.*;
import java.util.stream.*;

public class StreamDemo {
    public static void main(String[] args) {
        List<String> names = Arrays.asList(
            "Alice", "Bob", "Charlie", "David", "Eve", "Frank"
        );
        
        // Filter - keep elements matching predicate
        List<String> longNames = names.stream()
            .filter(name -> name.length() > 4)
            .collect(Collectors.toList());
        System.out.println("Long names: " + longNames);
        
        // Map - transform elements
        List<String> upperNames = names.stream()
            .map(String::toUpperCase)
            .collect(Collectors.toList());
        System.out.println("Upper names: " + upperNames);
        
        // Sorted
        List<String> sorted = names.stream()
            .sorted()
            .collect(Collectors.toList());
        System.out.println("Sorted: " + sorted);
        
        // Chained operations
        String result = names.stream()
            .filter(n -> n.length() > 3)
            .map(String::toUpperCase)
            .sorted()
            .collect(Collectors.joining(", "));
        System.out.println("Chained: " + result);
        
        // Working with numbers
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        
        // Sum using reduce
        int sum = numbers.stream()
            .reduce(0, Integer::sum);
        System.out.println("Sum: " + sum);
        
        // Average
        OptionalDouble average = numbers.stream()
            .mapToInt(Integer::intValue)
            .average();
        System.out.println("Average: " + average.orElse(0));
        
        // Find operations
        Optional<String> first = names.stream()
            .filter(n -> n.startsWith("C"))
            .findFirst();
        System.out.println("First C name: " + first.orElse("Not found"));
        
        // Match operations
        boolean anyMatch = names.stream().anyMatch(n -> n.length() > 5);
        boolean allMatch = names.stream().allMatch(n -> n.length() > 2);
        boolean noneMatch = names.stream().noneMatch(n -> n.isEmpty());
        System.out.println("Any > 5: " + anyMatch);
        System.out.println("All > 2: " + allMatch);
        
        // Grouping
        Map<Integer, List<String>> byLength = names.stream()
            .collect(Collectors.groupingBy(String::length));
        System.out.println("Grouped by length: " + byLength);
        
        // Partitioning
        Map<Boolean, List<String>> partitioned = names.stream()
            .collect(Collectors.partitioningBy(n -> n.length() > 4));
        System.out.println("Partitioned: " + partitioned);
        
        // Statistics
        IntSummaryStatistics stats = names.stream()
            .mapToInt(String::length)
            .summaryStatistics();
        System.out.println("Stats - Count: " + stats.getCount() + 
                          ", Sum: " + stats.getSum() +
                          ", Avg: " + stats.getAverage());
        
        // Parallel stream (for large data sets)
        long count = names.parallelStream()
            .filter(n -> n.length() > 3)
            .count();
        System.out.println("Parallel count: " + count);
        
        // FlatMap - flatten nested structures
        List<List<Integer>> nested = Arrays.asList(
            Arrays.asList(1, 2),
            Arrays.asList(3, 4),
            Arrays.asList(5, 6)
        );
        List<Integer> flattened = nested.stream()
            .flatMap(List::stream)
            .collect(Collectors.toList());
        System.out.println("Flattened: " + flattened);
    }
}`}]},"Task 9: Multithreading":{title:"Multithreading & Concurrency",description:`Multithreading allows concurrent execution of two or more parts of a program for maximum CPU utilization.

Creating Threads:
   1. Extend Thread class
   2. Implement Runnable interface
   3. Implement Callable interface (returns result)
   4. Use ExecutorService (recommended)

Thread Lifecycle:
   NEW → RUNNABLE → RUNNING → BLOCKED/WAITING → TERMINATED

Synchronization:
   - synchronized keyword
   - Lock interface
   - Atomic classes
   - Concurrent collections

Executor Framework:
   - Thread pool management
   - ExecutorService interface
   - Executors factory methods
   - Future for async results`,keyPoints:["Use ExecutorService instead of creating threads manually","synchronized blocks should be as small as possible","Use volatile for variables accessed by multiple threads","Atomic classes provide thread-safe operations without locks","ConcurrentHashMap is thread-safe alternative to HashMap","Always shutdown ExecutorService when done"],exercises:[{id:1,title:"Creating and Managing Threads",scenario:"Learn different ways to create threads and manage their lifecycle.",steps:["Create threads using Thread class","Create threads using Runnable","Use ExecutorService for thread pooling","Handle thread interruption","Use Callable for returning results"],code:`import java.util.concurrent.*;
import java.util.List;
import java.util.ArrayList;

public class ThreadDemo {
    public static void main(String[] args) throws Exception {
        // Method 1: Extend Thread class
        class MyThread extends Thread {
            @Override
            public void run() {
                System.out.println("Thread running: " + getName());
            }
        }
        
        MyThread t1 = new MyThread();
        t1.start(); // Don't call run() directly!
        
        // Method 2: Implement Runnable
        Runnable task = () -> {
            String name = Thread.currentThread().getName();
            System.out.println("Runnable task in: " + name);
        };
        
        Thread t2 = new Thread(task, "MyRunnable");
        t2.start();
        
        // Wait for threads to complete
        t1.join();
        t2.join();
        
        // Method 3: ExecutorService (RECOMMENDED)
        System.out.println("\\n--- ExecutorService ---");
        ExecutorService executor = Executors.newFixedThreadPool(3);
        
        for (int i = 1; i <= 5; i++) {
            final int taskId = i;
            executor.submit(() -> {
                System.out.println("Task " + taskId + " running in " + 
                                 Thread.currentThread().getName());
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            });
        }
        
        // Shutdown executor
        executor.shutdown();
        executor.awaitTermination(10, TimeUnit.SECONDS);
        
        // Method 4: Callable with Future (returns result)
        System.out.println("\\n--- Callable with Future ---");
        ExecutorService calcExecutor = Executors.newFixedThreadPool(2);
        
        Callable<Integer> sumTask = () -> {
            int sum = 0;
            for (int i = 1; i <= 100; i++) {
                sum += i;
            }
            return sum;
        };
        
        Future<Integer> future = calcExecutor.submit(sumTask);
        System.out.println("Submitted task, doing other work...");
        
        // Get result (blocks if not ready)
        Integer result = future.get();
        System.out.println("Sum 1-100: " + result);
        
        // Multiple futures
        List<Future<Integer>> futures = new ArrayList<>();
        for (int i = 0; i < 5; i++) {
            final int multiplier = i + 1;
            futures.add(calcExecutor.submit(() -> multiplier * 10));
        }
        
        for (int i = 0; i < futures.size(); i++) {
            System.out.println("Future " + i + " result: " + futures.get(i).get());
        }
        
        calcExecutor.shutdown();
        
        // CompletableFuture (Java 8+)
        System.out.println("\\n--- CompletableFuture ---");
        CompletableFuture<String> cf = CompletableFuture.supplyAsync(() -> {
            return "Hello";
        }).thenApply(s -> s + " World")
          .thenApply(String::toUpperCase);
        
        System.out.println("CompletableFuture result: " + cf.get());
    }
}`},{id:2,title:"Synchronization and Thread Safety",scenario:"Learn to write thread-safe code using synchronization mechanisms.",steps:["Understand race conditions","Use synchronized keyword","Use Lock interface","Use atomic classes","Use concurrent collections"],code:`import java.util.concurrent.*;
import java.util.concurrent.atomic.*;
import java.util.concurrent.locks.*;

public class SynchronizationDemo {
    // Shared mutable state - NOT thread safe
    private static int unsafeCounter = 0;
    
    // Thread-safe with synchronized
    private static int syncCounter = 0;
    private static final Object lock = new Object();
    
    // Thread-safe with AtomicInteger
    private static AtomicInteger atomicCounter = new AtomicInteger(0);
    
    // Thread-safe with Lock
    private static int lockCounter = 0;
    private static final Lock reentrantLock = new ReentrantLock();
    
    public static void main(String[] args) throws InterruptedException {
        int numThreads = 100;
        int incrementsPerThread = 1000;
        
        // Test 1: Unsafe counter (will likely be wrong)
        ExecutorService executor1 = Executors.newFixedThreadPool(10);
        for (int i = 0; i < numThreads; i++) {
            executor1.submit(() -> {
                for (int j = 0; j < incrementsPerThread; j++) {
                    unsafeCounter++; // Not atomic!
                }
            });
        }
        executor1.shutdown();
        executor1.awaitTermination(10, TimeUnit.SECONDS);
        System.out.println("Unsafe counter: " + unsafeCounter + 
                          " (expected: " + (numThreads * incrementsPerThread) + ")");
        
        // Test 2: Synchronized counter
        ExecutorService executor2 = Executors.newFixedThreadPool(10);
        for (int i = 0; i < numThreads; i++) {
            executor2.submit(() -> {
                for (int j = 0; j < incrementsPerThread; j++) {
                    synchronized (lock) {
                        syncCounter++;
                    }
                }
            });
        }
        executor2.shutdown();
        executor2.awaitTermination(10, TimeUnit.SECONDS);
        System.out.println("Sync counter: " + syncCounter);
        
        // Test 3: Atomic counter (most efficient for simple operations)
        ExecutorService executor3 = Executors.newFixedThreadPool(10);
        for (int i = 0; i < numThreads; i++) {
            executor3.submit(() -> {
                for (int j = 0; j < incrementsPerThread; j++) {
                    atomicCounter.incrementAndGet();
                }
            });
        }
        executor3.shutdown();
        executor3.awaitTermination(10, TimeUnit.SECONDS);
        System.out.println("Atomic counter: " + atomicCounter.get());
        
        // Test 4: Lock-based counter
        ExecutorService executor4 = Executors.newFixedThreadPool(10);
        for (int i = 0; i < numThreads; i++) {
            executor4.submit(() -> {
                for (int j = 0; j < incrementsPerThread; j++) {
                    reentrantLock.lock();
                    try {
                        lockCounter++;
                    } finally {
                        reentrantLock.unlock(); // Always unlock in finally!
                    }
                }
            });
        }
        executor4.shutdown();
        executor4.awaitTermination(10, TimeUnit.SECONDS);
        System.out.println("Lock counter: " + lockCounter);
        
        // Concurrent Collections
        System.out.println("\\n--- Concurrent Collections ---");
        ConcurrentHashMap<String, Integer> concurrentMap = new ConcurrentHashMap<>();
        CopyOnWriteArrayList<String> cowList = new CopyOnWriteArrayList<>();
        BlockingQueue<String> blockingQueue = new LinkedBlockingQueue<>();
        
        // These are thread-safe without external synchronization
        concurrentMap.put("key", 1);
        concurrentMap.computeIfAbsent("key2", k -> 42);
        
        System.out.println("ConcurrentMap: " + concurrentMap);
    }
}`}]},"Task 10: Spring Boot Basics":{title:"Introduction to Spring Boot",description:`Spring Boot is the most popular framework for building production-ready Java applications quickly with minimal configuration.

Spring Boot Features:
   - Auto-configuration
   - Embedded servers (Tomcat, Jetty)
   - Starter dependencies
   - Production-ready features
   - No XML configuration needed

Core Concepts:
   - Dependency Injection (DI)
   - Inversion of Control (IoC)
   - Annotations-based configuration
   - Component scanning

Key Annotations:
   - @SpringBootApplication: Main class marker
   - @RestController: REST API controller
   - @Service: Business logic layer
   - @Repository: Data access layer
   - @Autowired: Dependency injection`,keyPoints:["Spring Boot eliminates boilerplate configuration","Use Spring Initializr (start.spring.io) to bootstrap projects","@SpringBootApplication combines @Configuration, @EnableAutoConfiguration, @ComponentScan","application.properties or application.yml for configuration","Spring Boot DevTools enables hot reload during development","Actuator provides production-ready monitoring endpoints"],exercises:[{id:1,title:"Create Your First Spring Boot Application",scenario:"Build a simple REST API with Spring Boot from scratch.",steps:["Generate project using Spring Initializr","Understand project structure","Create a REST controller","Run the application","Test the API endpoints"],code:`// 1. pom.xml dependencies
/*
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>3.2.0</version>
</parent>

<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
</dependencies>
*/

// 2. Main Application class
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}

// 3. REST Controller
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api")
public class HelloController {
    
    // GET http://localhost:8080/api/hello
    @GetMapping("/hello")
    public String hello() {
        return "Hello, Spring Boot!";
    }
    
    // GET with path variable
    // http://localhost:8080/api/hello/John
    @GetMapping("/hello/{name}")
    public String helloName(@PathVariable String name) {
        return "Hello, " + name + "!";
    }
    
    // GET with request parameter
    // http://localhost:8080/api/greet?name=John&age=25
    @GetMapping("/greet")
    public Map<String, Object> greet(
            @RequestParam String name,
            @RequestParam(defaultValue = "0") int age) {
        Map<String, Object> response = new HashMap<>();
        response.put("message", "Hello, " + name);
        response.put("age", age);
        response.put("timestamp", new Date());
        return response;
    }
    
    // POST with request body
    @PostMapping("/users")
    public User createUser(@RequestBody User user) {
        // In real app, save to database
        user.setId(UUID.randomUUID().toString());
        return user;
    }
}

// 4. Model class
public class User {
    private String id;
    private String name;
    private String email;
    
    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
}

// Run: mvn spring-boot:run
// Test: curl http://localhost:8080/api/hello`},{id:2,title:"Layered Architecture with Spring Boot",scenario:"Build a properly structured Spring Boot application with Controller, Service, and Repository layers.",steps:["Create model/entity class","Create repository layer","Create service layer with business logic","Create controller layer","Wire everything with dependency injection"],code:`// 1. Entity/Model
import jakarta.persistence.*;

@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    private String description;
    private double price;
    
    // Constructors, Getters, Setters
    public Product() {}
    
    public Product(String name, String description, double price) {
        this.name = name;
        this.description = description;
        this.price = price;
    }
    
    // Getters and Setters...
}

// 2. Repository Layer
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    // Spring Data JPA generates implementation automatically!
    
    // Custom query methods
    List<Product> findByNameContaining(String name);
    List<Product> findByPriceLessThan(double price);
}

// 3. Service Layer
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    
    private final ProductRepository repository;
    
    // Constructor injection (recommended)
    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }
    
    public List<Product> getAllProducts() {
        return repository.findAll();
    }
    
    public Optional<Product> getProductById(Long id) {
        return repository.findById(id);
    }
    
    public Product createProduct(Product product) {
        return repository.save(product);
    }
    
    public Product updateProduct(Long id, Product product) {
        product.setId(id);
        return repository.save(product);
    }
    
    public void deleteProduct(Long id) {
        repository.deleteById(id);
    }
    
    public List<Product> searchByName(String name) {
        return repository.findByNameContaining(name);
    }
}

// 4. Controller Layer
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    
    private final ProductService service;
    
    public ProductController(ProductService service) {
        this.service = service;
    }
    
    @GetMapping
    public List<Product> getAllProducts() {
        return service.getAllProducts();
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Product> getProduct(@PathVariable Long id) {
        return service.getProductById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }
    
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Product createProduct(@RequestBody Product product) {
        return service.createProduct(product);
    }
    
    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable Long id, @RequestBody Product product) {
        return service.updateProduct(id, product);
    }
    
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteProduct(@PathVariable Long id) {
        service.deleteProduct(id);
    }
    
    @GetMapping("/search")
    public List<Product> searchProducts(@RequestParam String name) {
        return service.searchByName(name);
    }
}

// 5. application.properties
/*
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driver-class-name=org.h2.Driver
spring.jpa.hibernate.ddl-auto=create-drop
spring.h2.console.enabled=true
*/`}]}},Jc={title:"Core Java Concepts",icon:"☕",questions:[{id:1,question:"What is the difference between JDK, JRE, and JVM?",answer:"JVM (Java Virtual Machine): Executes Java bytecode, provides platform independence. JRE (Java Runtime Environment): JVM + core libraries, needed to run Java programs. JDK (Java Development Kit): JRE + development tools (compiler, debugger), needed to develop Java programs. JDK contains JRE which contains JVM.",difficulty:"Easy"},{id:2,question:"What are the four pillars of OOP?",answer:"Encapsulation: Bundling data and methods, hiding implementation using access modifiers. Inheritance: Child class inherits from parent using 'extends'. Polymorphism: Same interface, different implementations - overloading (compile-time) and overriding (runtime). Abstraction: Hiding complexity using abstract classes/interfaces, showing only essential features.",difficulty:"Easy"},{id:3,question:"What is the difference between == and .equals()?",answer:"== compares references (memory addresses) for objects, actual values for primitives. .equals() compares content/values and can be overridden. For String: 'hello' == 'hello' may be true (string pool), but new String('hello') == new String('hello') is false. Always use .equals() for object content comparison.",difficulty:"Easy"},{id:4,question:"What is the difference between String, StringBuilder, and StringBuffer?",answer:"String: Immutable, new object created on modification, thread-safe due to immutability. StringBuilder: Mutable, single-threaded use, faster. StringBuffer: Mutable, thread-safe (synchronized), slower than StringBuilder. Use String for few modifications, StringBuilder for many modifications, StringBuffer in multi-threaded scenarios.",difficulty:"Easy"},{id:5,question:"Explain method overloading vs method overriding.",answer:"Overloading (Compile-time polymorphism): Same method name, different parameters (number/type/order), in same class. Overriding (Runtime polymorphism): Same method name and signature, in child class, replaces parent implementation. Overloading resolved at compile time, overriding at runtime. @Override annotation helps catch errors.",difficulty:"Easy"},{id:6,question:"What is the difference between abstract class and interface?",answer:"Abstract class: Can have abstract and concrete methods, constructors, instance variables, single inheritance only. Interface: All methods public abstract (before Java 8), Java 8+ allows default/static methods, multiple implementation allowed. Use abstract class for IS-A with shared code, interface for capabilities/contracts.",difficulty:"Medium"},{id:7,question:"What is the difference between final, finally, and finalize?",answer:"final: Keyword - final variable (constant), final method (cannot override), final class (cannot extend). finally: Block in try-catch that always executes for cleanup. finalize(): Method called by GC before object is garbage collected (deprecated in Java 9). Use try-with-resources instead of finalize.",difficulty:"Easy"},{id:8,question:"Explain access modifiers in Java.",answer:"private: Same class only. default (no modifier): Same package only. protected: Same package + subclasses in other packages. public: Accessible everywhere. For fields, prefer private with getters/setters. Classes can only be public or default.",difficulty:"Easy"}]},$c={title:"Collections Framework",icon:"📚",questions:[{id:1,question:"What is the difference between ArrayList and LinkedList?",answer:"ArrayList: Dynamic array, O(1) random access by index, O(n) insertion/deletion in middle, better for frequent reads. LinkedList: Doubly linked list, O(n) access by index, O(1) insertion/deletion at ends, implements Deque, better for frequent modifications. ArrayList uses less memory overall.",difficulty:"Medium"},{id:2,question:"What is the difference between HashMap, LinkedHashMap, and TreeMap?",answer:"HashMap: Unordered, O(1) get/put, allows one null key. LinkedHashMap: Maintains insertion order, slightly slower due to linked list. TreeMap: Sorted by keys (natural/Comparator), O(log n) operations, no null keys. Use HashMap for performance, LinkedHashMap for order, TreeMap for sorted data.",difficulty:"Medium"},{id:3,question:"What is the difference between HashSet and TreeSet?",answer:"HashSet: Unordered, O(1) operations, allows one null, backed by HashMap. TreeSet: Sorted order, O(log n) operations, no nulls allowed, backed by TreeMap. Use HashSet for fast unique checks, TreeSet when you need sorted unique elements.",difficulty:"Medium"},{id:4,question:"How does HashMap work internally?",answer:"HashMap uses array of buckets. Key's hashCode() determines bucket index. Collisions handled by linked list (Java 7) or tree (Java 8+ when >8 entries). On get: hash key → find bucket → traverse list/tree using equals(). Load factor 0.75 triggers resize. Java 8+ converts to red-black tree for O(log n) worst case.",difficulty:"Hard"},{id:5,question:"What is the difference between fail-fast and fail-safe iterators?",answer:"Fail-fast: Throws ConcurrentModificationException if collection modified during iteration (ArrayList, HashMap). Uses modCount internally. Fail-safe: Works on clone, doesn't throw exception (ConcurrentHashMap, CopyOnWriteArrayList). Fail-safe may not reflect latest changes. Use Iterator.remove() for safe removal during iteration.",difficulty:"Hard"},{id:6,question:"When should you override equals() and hashCode()?",answer:"Override both when using objects as Map keys or in Sets. Contract: Equal objects MUST have same hashCode. If only equals() overridden, HashMap won't find objects. Use same fields in both methods. IDE can generate these. Objects.equals() and Objects.hash() help with null handling.",difficulty:"Medium"}]},zc={title:"Exception Handling",icon:"⚠️",questions:[{id:1,question:"What is the difference between checked and unchecked exceptions?",answer:"Checked exceptions: Must be caught or declared (throws), checked at compile-time. Examples: IOException, SQLException. Unchecked exceptions (RuntimeException): Don't require handling, occur at runtime. Examples: NullPointerException, ArrayIndexOutOfBoundsException. Error: Serious system problems, shouldn't be caught (OutOfMemoryError).",difficulty:"Easy"},{id:2,question:"What is try-with-resources?",answer:"Java 7+ feature that automatically closes resources implementing AutoCloseable. Syntax: try (Resource r = new Resource()) { }. Resources closed in reverse order of creation. Cleaner than try-finally, handles multiple resources. Suppressed exceptions accessible via getSuppressed().",difficulty:"Medium"},{id:3,question:"Can we have try without catch?",answer:"Yes, with try-finally (for cleanup) or try-with-resources (auto-close). try-finally: finally always executes. try-with-resources: resources auto-closed. Cannot have try alone. Example: try (var reader = new FileReader(file)) { } - no catch needed if exception is declared in method signature.",difficulty:"Easy"},{id:4,question:"What happens if exception is thrown in finally block?",answer:"The finally exception masks the original exception from try/catch block. The original exception is lost unless you handle it explicitly. In Java 7+, use try-with-resources which handles this via suppressed exceptions. Best practice: Avoid throwing exceptions in finally, use try-finally for cleanup only.",difficulty:"Hard"}]},Gc={title:"Multithreading & Concurrency",icon:"🔄",questions:[{id:1,question:"What is the difference between Thread and Runnable?",answer:"Thread: Class to extend, can only extend one class (no multiple inheritance), has lifecycle methods. Runnable: Interface to implement, allows extending other classes, separates task from thread. Prefer Runnable for flexibility. Java 5+ prefer ExecutorService over manual thread creation.",difficulty:"Easy"},{id:2,question:"What is the difference between synchronized method and synchronized block?",answer:"Synchronized method: Locks entire method on 'this' object (or class for static). Synchronized block: Locks only specific section on specified object, more granular control. Block preferred for performance - minimize locked code. Both provide mutual exclusion and visibility guarantees.",difficulty:"Medium"},{id:3,question:"What is volatile keyword?",answer:"volatile ensures visibility: reads/writes go directly to main memory, not CPU cache. Prevents caching of variable value. Does NOT provide atomicity - i++ on volatile is still not thread-safe. Use for flags, single writer multiple reader scenarios. For atomicity, use Atomic classes or synchronized.",difficulty:"Medium"},{id:4,question:"What is ThreadLocal?",answer:"ThreadLocal provides thread-local variables - each thread has its own independent copy. Common uses: storing user context, database connections per thread, SimpleDateFormat (not thread-safe). Usage: ThreadLocal<T> tl = new ThreadLocal<>(); tl.set(value); tl.get(); Always call remove() to prevent memory leaks.",difficulty:"Hard"},{id:5,question:"What is the difference between wait() and sleep()?",answer:"wait(): Object method, releases lock, must be in synchronized block, woken by notify()/notifyAll(). sleep(): Thread method, doesn't release lock, pauses current thread for specified time. wait() for inter-thread communication, sleep() for pausing execution. Both throw InterruptedException.",difficulty:"Medium"},{id:6,question:"What is deadlock and how to prevent it?",answer:"Deadlock: Two+ threads waiting for each other's locks forever. Conditions: mutual exclusion, hold and wait, no preemption, circular wait. Prevention: Lock ordering (always acquire locks in same order), lock timeout (tryLock with timeout), avoid nested locks, use higher-level concurrency utilities.",difficulty:"Hard"}]},Vc={title:"Java 8+ Features",icon:"✨",questions:[{id:1,question:"What is a lambda expression?",answer:"Lambda is an anonymous function implementing a functional interface. Syntax: (params) -> expression or (params) -> { statements }. Examples: () -> 42, x -> x * 2, (a, b) -> a + b. Enables functional programming, used with Stream API, reduces boilerplate vs anonymous classes.",difficulty:"Easy"},{id:2,question:"What is a functional interface?",answer:"Interface with exactly one abstract method, used as lambda target. @FunctionalInterface annotation (optional but recommended). Built-in: Predicate<T> (test), Function<T,R> (apply), Consumer<T> (accept), Supplier<T> (get). Can have default and static methods without affecting functional interface status.",difficulty:"Easy"},{id:3,question:"What is the difference between map() and flatMap()?",answer:"map(): Transforms each element, one-to-one mapping. flatMap(): Transforms and flattens, one-to-many mapping. Use flatMap when mapper returns Stream/Collection. Example: List of Lists → flatMap flattens to single List. map would create Stream of Streams instead.",difficulty:"Medium"},{id:4,question:"What is Optional and why use it?",answer:"Optional<T> is a container that may or may not contain a non-null value. Avoids NullPointerException, makes null handling explicit. Create: Optional.of(val), Optional.ofNullable(val), Optional.empty(). Use: isPresent(), get(), orElse(), orElseGet(), map(), filter(). Don't use for fields or parameters, mainly for return types.",difficulty:"Medium"},{id:5,question:"What is the difference between intermediate and terminal operations in Stream?",answer:"Intermediate: Return Stream, lazy (not executed until terminal), chainable. Examples: filter(), map(), sorted(), distinct(). Terminal: Return non-Stream result, trigger execution of pipeline. Examples: collect(), forEach(), count(), reduce(). Stream can only be consumed once.",difficulty:"Medium"},{id:6,question:"What are default methods in interfaces?",answer:"Java 8 allows method implementations in interfaces using 'default' keyword. Enables adding methods to interfaces without breaking existing implementations. Used for backward compatibility (Collection.stream()). If class implements multiple interfaces with same default method, must override it.",difficulty:"Medium"}]},Kc={title:"Spring Boot",icon:"🌱",questions:[{id:1,question:"What is Spring Boot and its advantages?",answer:"Spring Boot is a framework for building production-ready Spring applications quickly. Advantages: Auto-configuration, embedded servers (Tomcat), starter dependencies, no XML config needed, production-ready features (Actuator), rapid development. @SpringBootApplication combines @Configuration, @EnableAutoConfiguration, @ComponentScan.",difficulty:"Easy"},{id:2,question:"What is dependency injection and IoC?",answer:"IoC (Inversion of Control): Framework controls object lifecycle, not the code. DI (Dependency Injection): Dependencies provided to objects rather than created by them. Types: Constructor injection (recommended), setter injection, field injection (@Autowired). Benefits: loose coupling, testability, flexibility.",difficulty:"Easy"},{id:3,question:"What is the difference between @Component, @Service, @Repository, @Controller?",answer:"@Component: Generic stereotype. @Service: Business logic layer, semantic clarity. @Repository: Data access layer, enables exception translation. @Controller/@RestController: Web layer, handles HTTP requests. All are @Component specializations, detected by component scanning. Use appropriate one for each layer.",difficulty:"Easy"},{id:4,question:"What is the difference between @Autowired constructor vs field injection?",answer:"Constructor injection: Dependencies explicit, immutable (final), easier testing, fails fast if dependency missing. Field injection: Less code, but hides dependencies, harder to test, allows null. Constructor injection recommended by Spring team. @Autowired optional on single constructor (Spring 4.3+).",difficulty:"Medium"},{id:5,question:"What are Spring Boot profiles?",answer:"Profiles allow different configurations for different environments (dev, test, prod). Files: application-dev.properties, application-prod.properties. Activate: spring.profiles.active=dev or -Dspring.profiles.active=dev. @Profile annotation on beans. Enables environment-specific behavior without code changes.",difficulty:"Medium"},{id:6,question:"What is Spring Data JPA?",answer:"Spring Data JPA simplifies data access by auto-implementing repository interfaces. Extend JpaRepository<Entity, ID> to get CRUD operations free. Method naming conventions: findByName(), findByAgeGreaterThan(). @Query for custom JPQL/SQL. Reduces boilerplate significantly compared to raw JPA/Hibernate.",difficulty:"Medium"}]},Xc={title:"Design Patterns",icon:"🏗️",questions:[{id:1,question:"What is Singleton pattern and how to implement it?",answer:"Singleton ensures one instance per JVM. Thread-safe implementation: private static volatile instance, private constructor, double-checked locking in getInstance(). Or use enum: enum Singleton { INSTANCE }. Enum handles serialization and reflection attacks. Used for configuration, connection pools, logging.",difficulty:"Medium"},{id:2,question:"What is Factory pattern?",answer:"Factory creates objects without exposing instantiation logic. Client uses factory method instead of 'new'. Types: Simple Factory, Factory Method (subclasses decide), Abstract Factory (families of objects). Benefits: loose coupling, single responsibility, easy to add new types. Used in JDBC, Spring BeanFactory.",difficulty:"Medium"},{id:3,question:"What is Builder pattern?",answer:"Builder constructs complex objects step by step. Separates construction from representation. Pattern: static inner Builder class, fluent API with chained methods, build() returns product. Benefits: handles many parameters elegantly, immutable objects possible. Example: StringBuilder, Stream API, Lombok @Builder.",difficulty:"Medium"},{id:4,question:"What is Strategy pattern?",answer:"Strategy defines family of algorithms, encapsulates each, makes them interchangeable. Context holds reference to strategy interface, clients can switch algorithms at runtime. Example: Comparator (different sorting strategies), payment methods, compression algorithms. Follows Open/Closed principle.",difficulty:"Medium"}]},Qc={coreJava:Jc,collections:$c,exceptions:zc,multithreading:Gc,java8Features:Vc,springBoot:Kc,designPatterns:Xc},Yc={class:"sdet-container"},Zc={class:"mobile-header"},ed={class:"mobile-title"},td={class:"sidebar-header"},nd={class:"sidebar-controls"},sd={key:0,class:"sidebar-nav"},id=["onClick"],ad={class:"section-icon"},od={class:"section-info"},rd={class:"section-title"},ld={class:"completion-percentage"},cd={key:0,class:"nav-items"},dd=["onClick"],ud={class:"task-number"},pd={class:"task-name"},md={class:"category-qa-count"},fd=["onClick"],hd=["checked","onClick"],gd={class:"task-number"},yd={class:"task-name"},vd={key:0,class:"completion-icon"},bd={class:"content"},wd={key:0,class:"task-view"},Sd={class:"task-header"},xd={class:"breadcrumb"},kd={class:"qa-meta"},Cd={class:"qa-count"},Td={class:"qa-list"},Ad=["onClick"],Pd={class:"qa-left"},_d=["checked","onClick"],Ed={class:"qa-number"},Id={class:"qa-question"},Rd={class:"qa-right"},Ld={key:0,class:"qa-answer"},Md={key:1,class:"task-view"},Dd={class:"task-header"},Bd={class:"breadcrumb"},Od={class:"description-card"},qd={class:"description-text"},Fd={key:0,class:"key-points-card"},Nd={key:1,class:"exercises-section"},Ud=["onClick"],Wd={class:"exercise-title"},Hd={class:"exercise-number"},jd={key:0,class:"exercise-body"},Jd={class:"scenario"},$d={key:0,class:"steps-section"},zd={key:1,class:"code-section"},Gd={class:"code-header"},Vd=["onClick"],Kd={class:"code-block"},Xd={key:2,class:"navigation-buttons"},Qd=["disabled"],Yd=["disabled"],Zd={key:2,class:"welcome-screen"},eu={class:"welcome-cards"},tu=["onClick"],nu={class:"card-icon"},su={__name:"Java",setup(e){function t(b){return Object.values(b)}const n=Object.values(Qc),s=H(!1),i=H(!1),o=H([]),r=H([]),l=H([]),c=H(null),p=H(null),d=H(""),y=H(null),x=H(null),I=H(new Set),j=H(new Set),B=t(jc),O=we(()=>[{id:"java-basics",title:"Java Basics",icon:"📚",tasks:B.slice(0,3),categories:[]},{id:"oop",title:"OOP Concepts",icon:"🎯",tasks:B.slice(3,5),categories:[]},{id:"collections",title:"Collections & Exceptions",icon:"📦",tasks:B.slice(5,7),categories:[]},{id:"advanced",title:"Advanced Java",icon:"⚡",tasks:B.slice(7,9),categories:[]},{id:"spring",title:"Spring Boot",icon:"🌱",tasks:B.slice(9,10),categories:[]},{id:"interview",title:"Interview Preparation",icon:"📝",tasks:[],categories:n}]),D=we(()=>{const b=O.value.find(h=>h.title===d.value);return b?b.tasks:[]}),R=we(()=>!c.value||!D.value.length?-1:D.value.findIndex(b=>b.title===c.value.title)),Z=we(()=>R.value>0),W=we(()=>R.value<D.value.length-1),ae=we(()=>Z.value?D.value[R.value-1]:null),ge=we(()=>W.value?D.value[R.value+1]:null),xe=b=>{if(b.id==="interview"){const h=b.categories.reduce((E,U)=>E+U.questions.length,0),w=b.categories.reduce((E,U)=>E+U.questions.filter(me=>j.value.has(`${U.title}-${me.id}`)).length,0);return h>0?Math.round(w/h*100):0}else{const h=b.tasks.length,w=b.tasks.filter(E=>I.value.has(`${b.id}-${E.title}`)).length;return h>0?Math.round(w/h*100):0}},fe=(b,h)=>I.value.has(`${h}-${b.title}`),X=(b,h)=>j.value.has(`${h}-${b.id}`),ie=(b,h)=>{const w=`${h}-${b.title}`;I.value.has(w)?I.value.delete(w):I.value.add(w)},ce=(b,h)=>{const w=`${h}-${b.id}`;j.value.has(w)?j.value.delete(w):j.value.add(w)};function F(){s.value=!s.value}function oe(){i.value=!i.value}function se(){s.value=!1}function k(b){x.value=b,o.value.includes(b)?o.value=o.value.filter(h=>h!==b):o.value=[b]}function _(b){x.value=b,o.value.includes(b)||o.value.push(b)}function Q(b,h){c.value=b,p.value=null,d.value=h,r.value=[],se()}function re(b,h){p.value=b,c.value=null,d.value=h,l.value=[],se()}function Fe(){Z.value&&Q(ae.value,d.value)}function Xe(){W.value&&Q(ge.value,d.value)}function Ne(b){const h=r.value.indexOf(b);h===-1?r.value.push(b):r.value.splice(h,1)}function _e(b){const h=l.value.indexOf(b);h===-1?l.value.push(b):l.value.splice(h,1)}async function V(b,h){await navigator.clipboard.writeText(b),y.value=h,setTimeout(()=>y.value=null,2e3)}return(b,h)=>(g(),v("div",Yc,[a("div",Zc,[a("button",{class:"hamburger",onClick:F},[a("span",{class:J(["hamburger-icon",{open:s.value}])},[...h[1]||(h[1]=[a("span",null,null,-1),a("span",null,null,-1),a("span",null,null,-1)])],2)]),a("h2",ed,f(d.value||"Java Development"),1)]),s.value?(g(),v("div",{key:0,class:"overlay",onClick:se})):$("",!0),a("aside",{class:J(["sidebar",{"sidebar-open":s.value,"sidebar-minimized":i.value}])},[a("div",td,[i.value?$("",!0):(g(),v("h2",{key:0,onClick:h[0]||(h[0]=w=>{c.value=null,p.value=null}),style:{cursor:"pointer","user-select":"none"},title:"Go to Welcome Screen"}," ☕ Java ")),a("div",nd,[a("button",{class:"minimize-btn",onClick:oe},f(i.value?"➡️":"⬅️"),1),a("button",{class:"close-btn",onClick:se},"✕")])]),i.value?$("",!0):(g(),v("nav",sd,[(g(!0),v(G,null,te(O.value,(w,E)=>(g(),v("div",{key:E,class:"nav-section"},[a("div",{class:J(["nav-section-header",{active:x.value===E}]),onClick:U=>k(E)},[a("span",ad,f(w.icon),1),a("div",od,[a("span",rd,f(w.title),1),a("span",ld,f(xe(w))+"%",1)]),a("span",{class:J(["chevron",{rotated:o.value.includes(E)}])},"▾",2)],10,id),Se(ze,{name:"slide"},{default:je(()=>[o.value.includes(E)?(g(),v("ul",cd,[w.id==="interview"?(g(!0),v(G,{key:0},te(w.categories,(U,me)=>{var Ce;return g(),v("li",{key:me,onClick:Rt=>re(U,w.title),class:J({active:((Ce=p.value)==null?void 0:Ce.title)===U.title})},[a("span",ud,f(me+1),1),a("span",pd,f(U.title),1),a("span",md,f(U.questions.length)+" Qs",1)],10,dd)}),128)):(g(!0),v(G,{key:1},te(w.tasks,(U,me)=>{var Ce;return g(),v("li",{key:me,onClick:Rt=>Q(U,w.title),class:J({active:((Ce=c.value)==null?void 0:Ce.title)===U.title,completed:fe(U,w.id)})},[a("input",{type:"checkbox",checked:fe(U,w.id),onClick:St(Rt=>ie(U,w.id),["stop"]),class:"completion-checkbox"},null,8,hd),a("span",gd,f(me+1),1),a("span",yd,f(U.title),1),fe(U,w.id)?(g(),v("span",vd,"✅")):$("",!0)],10,fd)}),128))])):$("",!0)]),_:2},1024)]))),128))]))],2),a("main",bd,[p.value?(g(),v("div",wd,[a("div",Sd,[a("h1",null,f(p.value.icon)+" "+f(p.value.title),1),a("span",xd,"Interview Preparation → "+f(p.value.title),1),a("div",kd,[a("span",Cd,f(p.value.questions.length)+" Questions",1),h[2]||(h[2]=a("div",{class:"difficulty-legend"},[a("span",{class:"badge easy"},"Easy"),a("span",{class:"badge medium"},"Medium"),a("span",{class:"badge hard"},"Hard")],-1))])]),a("div",Td,[(g(!0),v(G,null,te(p.value.questions,(w,E)=>(g(),v("div",{key:w.id,class:J(["qa-card",{completed:X(w,p.value.title)}])},[a("div",{class:"qa-header",onClick:U=>_e(E)},[a("div",Pd,[a("input",{type:"checkbox",checked:X(w,p.value.title),onClick:St(U=>ce(w,p.value.title),["stop"]),class:"completion-checkbox"},null,8,_d),a("span",Ed,f(w.id),1),a("p",Id,f(w.question),1)]),a("div",Rd,[a("span",{class:J(["badge",w.difficulty.toLowerCase()])},f(w.difficulty),3),a("span",{class:J(["chevron",{rotated:l.value.includes(E)}])},"▾",2)])],8,Ad),Se(ze,{name:"slide"},{default:je(()=>[l.value.includes(E)?(g(),v("div",Ld,[a("p",null,f(w.answer),1)])):$("",!0)]),_:2},1024)],2))),128))])])):c.value?(g(),v("div",Md,[a("div",Dd,[a("h1",null,f(c.value.title),1),a("span",Bd,f(d.value)+" → "+f(c.value.title),1)]),a("div",Od,[h[3]||(h[3]=a("h2",null,"📘 Overview",-1)),a("pre",qd,f(c.value.description),1)]),c.value.keyPoints?(g(),v("div",Fd,[h[4]||(h[4]=a("h2",null,"🔑 Key Points",-1)),a("ul",null,[(g(!0),v(G,null,te(c.value.keyPoints,(w,E)=>(g(),v("li",{key:E},f(w),1))),128))])])):$("",!0),c.value.exercises?(g(),v("div",Nd,[h[7]||(h[7]=a("h2",null,"💻 Exercises",-1)),(g(!0),v(G,null,te(c.value.exercises,(w,E)=>(g(),v("div",{key:E,class:"exercise-card"},[a("div",{class:"exercise-header",onClick:U=>Ne(E)},[a("div",Wd,[a("span",Hd,f(E+1),1),a("h3",null,f(w.title),1)]),a("span",{class:J(["chevron",{rotated:r.value.includes(E)}])},"▾",2)],8,Ud),Se(ze,{name:"slide"},{default:je(()=>[r.value.includes(E)?(g(),v("div",jd,[a("p",Jd,f(w.scenario),1),w.steps?(g(),v("div",$d,[h[5]||(h[5]=a("h4",null,"📋 Steps",-1)),a("ol",null,[(g(!0),v(G,null,te(w.steps,(U,me)=>(g(),v("li",{key:me},f(U),1))),128))])])):$("",!0),w.code?(g(),v("div",zd,[a("div",Gd,[h[6]||(h[6]=a("span",null,"💻 Code",-1)),a("button",{onClick:U=>V(w.code,E),class:"copy-btn"},f(y.value===E?"✅ Copied!":"📋 Copy"),9,Vd)]),a("pre",Kd,[a("code",null,f(w.code),1)])])):$("",!0)])):$("",!0)]),_:2},1024)]))),128))])):$("",!0),c.value&&D.value.length>1?(g(),v("div",Xd,[a("button",{onClick:Fe,disabled:!Z.value,class:"nav-btn prev-btn"},"⬅️ Previous",8,Qd),a("button",{onClick:Xe,disabled:!W.value,class:"nav-btn next-btn"},"Next ➡️",8,Yd)])):$("",!0)])):(g(),v("div",Zd,[h[8]||(h[8]=a("div",{class:"welcome-icon"},"☕",-1)),h[9]||(h[9]=a("h1",null,"Welcome to Java Development",-1)),h[10]||(h[10]=a("p",null,"Master Java from Fundamentals to Enterprise Applications",-1)),a("div",eu,[(g(!0),v(G,null,te(O.value,(w,E)=>(g(),v("div",{key:E,class:"welcome-card",onClick:U=>_(E)},[a("span",nu,f(w.icon),1),a("h3",null,f(w.title),1),a("p",null,f(w.id==="interview"?w.categories.length+" categories":w.tasks.length+" topics"),1)],8,tu))),128))])]))])]))}},iu=Wt(su,[["__scopeId","data-v-bb0b440c"]]),fn={"Task 1: Introduction to AI Development":{title:"Introduction to AI Development",description:`Artificial Intelligence (AI) Development is the process of creating systems that can perform tasks that typically require human intelligence. As an AI Developer, you'll work with machine learning models, neural networks, and modern AI tools.

Key Areas of AI Development:

1. Machine Learning (ML)
   - Supervised Learning (classification, regression)
   - Unsupervised Learning (clustering, dimensionality reduction)
   - Reinforcement Learning

2. Deep Learning
   - Neural Networks architecture
   - CNNs for computer vision
   - RNNs/Transformers for NLP

3. Large Language Models (LLMs)
   - GPT, Claude, Llama, Gemini
   - Fine-tuning and prompt engineering
   - RAG (Retrieval Augmented Generation)

4. AI Application Development
   - API integration (OpenAI, Anthropic, etc.)
   - Building AI-powered applications
   - Deploying ML models

Why AI Development?
   - Rapidly growing field with high demand
   - Transforming every industry
   - Creative and challenging problem-solving
   - High compensation and career growth`,keyPoints:["AI encompasses ML, Deep Learning, NLP, and Computer Vision","Python is the primary language for AI development","Understanding data is fundamental to AI success","LLMs have revolutionized how we build AI applications","Ethics and responsible AI are critical considerations","Cloud platforms (AWS, GCP, Azure) are essential for deployment"],exercises:[{id:1,title:"Set Up Your AI Development Environment",scenario:"Create a Python environment with essential AI/ML libraries to start your AI development journey.",steps:["Install Python 3.10+ and pip","Create a virtual environment: python -m venv ai_env","Activate the environment","Install core libraries: numpy, pandas, scikit-learn","Install deep learning: torch or tensorflow","Install LLM tools: openai, langchain, transformers","Verify installations with import statements"],code:`# Create and activate virtual environment
python -m venv ai_env
source ai_env/bin/activate  # On Windows: ai_env\\Scripts\\activate

# Install essential packages
pip install numpy pandas scikit-learn matplotlib seaborn
pip install torch torchvision  # or tensorflow
pip install openai langchain transformers
pip install jupyter notebook

# Verify installation
python -c "import numpy; import pandas; import sklearn; print('Core ML libraries OK')"
python -c "import torch; print(f'PyTorch version: {torch.__version__}')"
python -c "import openai; import langchain; print('LLM libraries OK')"`},{id:2,title:"Understanding the AI/ML Workflow",scenario:"Learn the standard workflow for building AI/ML solutions from problem definition to deployment.",steps:["Define the problem and success metrics","Collect and explore the data","Preprocess and clean the data","Select and train the model","Evaluate model performance","Iterate and improve","Deploy and monitor"],code:`# Standard ML Workflow Example
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report

# 1. Load Data
df = pd.read_csv('data.csv')

# 2. Explore Data
print(df.head())
print(df.describe())
print(df.info())

# 3. Preprocess
X = df.drop('target', axis=1)
y = df['target']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# 4. Train Model
model = RandomForestClassifier(n_estimators=100)
model.fit(X_train_scaled, y_train)

# 5. Evaluate
y_pred = model.predict(X_test_scaled)
print(f'Accuracy: {accuracy_score(y_test, y_pred)}')
print(classification_report(y_test, y_pred))`}]},"Task 2: Python for AI":{title:"Python Fundamentals for AI",description:`Python is the lingua franca of AI development. Mastering Python and its scientific computing ecosystem is essential for any AI developer.

Core Libraries:

1. NumPy
   - N-dimensional arrays
   - Mathematical operations
   - Broadcasting and vectorization

2. Pandas
   - DataFrames for tabular data
   - Data manipulation and cleaning
   - Time series handling

3. Matplotlib & Seaborn
   - Data visualization
   - Statistical plots
   - Custom visualizations

4. Scikit-learn
   - ML algorithms
   - Preprocessing utilities
   - Model evaluation tools

Python Best Practices for AI:
   - Use type hints for clarity
   - Write modular, reusable code
   - Document functions and classes
   - Use virtual environments
   - Follow PEP 8 style guide`,keyPoints:["NumPy arrays are 50x faster than Python lists for numerical operations","Pandas DataFrames are essential for data manipulation","Vectorized operations are key to performance","List comprehensions and generators for memory efficiency","Understanding broadcasting rules saves debugging time","Jupyter notebooks are great for experimentation"],exercises:[{id:1,title:"NumPy Essentials for AI",scenario:"Master NumPy operations that you'll use daily in AI development - array creation, manipulation, and mathematical operations.",steps:["Create arrays from lists and using built-in functions","Perform element-wise operations","Use broadcasting for efficient computation","Apply linear algebra operations","Use random number generation for ML"],code:`import numpy as np

# Array creation
arr = np.array([1, 2, 3, 4, 5])
zeros = np.zeros((3, 4))
ones = np.ones((2, 3))
random = np.random.randn(3, 3)  # Standard normal distribution
linspace = np.linspace(0, 1, 10)  # 10 evenly spaced values

# Array operations
a = np.array([[1, 2], [3, 4]])
b = np.array([[5, 6], [7, 8]])

print('Element-wise multiplication:', a * b)
print('Matrix multiplication:', a @ b)  # or np.dot(a, b)
print('Transpose:', a.T)

# Broadcasting
matrix = np.random.randn(3, 4)
row_means = matrix.mean(axis=1, keepdims=True)
normalized = matrix - row_means  # Broadcasting in action

# Common ML operations
X = np.random.randn(100, 5)  # 100 samples, 5 features
mean = X.mean(axis=0)
std = X.std(axis=0)
X_normalized = (X - mean) / std  # Standardization

print(f'Shape: {X.shape}, Mean: {X_normalized.mean():.4f}, Std: {X_normalized.std():.4f}')`},{id:2,title:"Pandas for Data Manipulation",scenario:"Learn essential Pandas operations for loading, cleaning, and transforming data for ML pipelines.",steps:["Load data from various sources","Explore and understand the data","Handle missing values","Feature engineering","Prepare data for ML models"],code:`import pandas as pd
import numpy as np

# Create sample dataset
df = pd.DataFrame({
    'name': ['Alice', 'Bob', 'Charlie', 'Diana', None],
    'age': [25, 30, None, 28, 35],
    'salary': [50000, 60000, 55000, None, 70000],
    'department': ['Engineering', 'Sales', 'Engineering', 'HR', 'Sales']
})

# Data exploration
print(df.head())
print(df.info())
print(df.describe())
print(df.isnull().sum())  # Missing values count

# Handle missing values
df['age'].fillna(df['age'].median(), inplace=True)
df['salary'].fillna(df['salary'].mean(), inplace=True)
df['name'].fillna('Unknown', inplace=True)

# Feature engineering
df['salary_category'] = pd.cut(df['salary'], bins=[0, 55000, 65000, np.inf], 
                                labels=['Low', 'Medium', 'High'])
df['age_group'] = df['age'].apply(lambda x: 'Young' if x < 30 else 'Senior')

# One-hot encoding for ML
df_encoded = pd.get_dummies(df, columns=['department'], drop_first=True)

# Group operations
print(df.groupby('department')['salary'].agg(['mean', 'min', 'max']))`}]},"Task 3: Machine Learning Fundamentals":{title:"Machine Learning Fundamentals",description:`Machine Learning is the foundation of modern AI. Understanding ML algorithms, when to use them, and how to evaluate them is crucial.

Types of Machine Learning:

1. Supervised Learning
   - Classification: Predict categories (spam/not spam)
   - Regression: Predict continuous values (house prices)
   - Examples: Linear Regression, Decision Trees, SVM, Neural Networks

2. Unsupervised Learning
   - Clustering: Group similar items (customer segments)
   - Dimensionality Reduction: Reduce features (PCA)
   - Examples: K-Means, DBSCAN, PCA, Autoencoders

3. Reinforcement Learning
   - Agent learns by interacting with environment
   - Reward-based learning
   - Examples: Game AI, Robotics, Recommendation systems

Key Concepts:
   - Overfitting vs Underfitting
   - Bias-Variance Tradeoff
   - Cross-validation
   - Hyperparameter tuning
   - Feature engineering`,keyPoints:["Choose algorithm based on problem type and data characteristics","Always split data into train/validation/test sets","Feature engineering often matters more than algorithm choice","Cross-validation gives more reliable performance estimates","Regularization helps prevent overfitting","Start simple, add complexity only when needed"],exercises:[{id:1,title:"Build a Classification Model",scenario:"Build a complete classification pipeline using scikit-learn with proper evaluation and cross-validation.",steps:["Load and explore the dataset","Preprocess the features","Split into train/test sets","Train multiple classifiers","Evaluate using appropriate metrics","Perform cross-validation"],code:`from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import SVC
from sklearn.metrics import classification_report, confusion_matrix
import numpy as np

# Load data
iris = load_iris()
X, y = iris.data, iris.target

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# Scale features
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Train multiple models
models = {
    'Logistic Regression': LogisticRegression(max_iter=200),
    'Random Forest': RandomForestClassifier(n_estimators=100),
    'SVM': SVC(kernel='rbf')
}

for name, model in models.items():
    # Train
    model.fit(X_train_scaled, y_train)
    
    # Evaluate
    train_score = model.score(X_train_scaled, y_train)
    test_score = model.score(X_test_scaled, y_test)
    
    # Cross-validation
    cv_scores = cross_val_score(model, X_train_scaled, y_train, cv=5)
    
    print(f'\\n{name}:')
    print(f'  Train Accuracy: {train_score:.4f}')
    print(f'  Test Accuracy: {test_score:.4f}')
    print(f'  CV Score: {cv_scores.mean():.4f} (+/- {cv_scores.std()*2:.4f})')`},{id:2,title:"Build a Regression Model",scenario:"Create a regression pipeline to predict continuous values with proper feature engineering and evaluation.",steps:["Load and explore the dataset","Handle missing values and outliers","Engineer new features","Train regression models","Evaluate using MSE, RMSE, R²"],code:`from sklearn.datasets import fetch_california_housing
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LinearRegression, Ridge, Lasso
from sklearn.ensemble import GradientBoostingRegressor
from sklearn.metrics import mean_squared_error, r2_score
import numpy as np

# Load data
housing = fetch_california_housing()
X, y = housing.data, housing.target

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Scale features
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Train models
models = {
    'Linear Regression': LinearRegression(),
    'Ridge (L2)': Ridge(alpha=1.0),
    'Lasso (L1)': Lasso(alpha=0.1),
    'Gradient Boosting': GradientBoostingRegressor(n_estimators=100)
}

for name, model in models.items():
    model.fit(X_train_scaled, y_train)
    y_pred = model.predict(X_test_scaled)
    
    mse = mean_squared_error(y_test, y_pred)
    rmse = np.sqrt(mse)
    r2 = r2_score(y_test, y_pred)
    
    print(f'\\n{name}:')
    print(f'  RMSE: {rmse:.4f}')
    print(f'  R² Score: {r2:.4f}')`}]},"Task 4: Deep Learning with PyTorch":{title:"Deep Learning with PyTorch",description:`Deep Learning powers modern AI breakthroughs. PyTorch is the preferred framework for research and increasingly for production.

PyTorch Core Concepts:

1. Tensors
   - Multi-dimensional arrays (like NumPy but GPU-accelerated)
   - Automatic differentiation (autograd)
   - Device management (CPU/GPU)

2. Neural Network Building Blocks
   - nn.Module: Base class for all networks
   - nn.Linear: Fully connected layers
   - nn.Conv2d: Convolutional layers
   - Activation functions: ReLU, Sigmoid, Softmax

3. Training Loop
   - Forward pass
   - Loss computation
   - Backward pass (backpropagation)
   - Optimizer step

4. Common Architectures
   - MLP (Multi-Layer Perceptron)
   - CNN (Convolutional Neural Network)
   - RNN/LSTM (Recurrent Neural Networks)
   - Transformers`,keyPoints:["PyTorch uses dynamic computation graphs (define-by-run)","Always zero gradients before backward pass","Use DataLoader for efficient batch processing","Move models and data to GPU with .to(device)","Use torch.no_grad() during inference for efficiency","Save models with torch.save() and load with torch.load()"],exercises:[{id:1,title:"Build Your First Neural Network",scenario:"Create a simple neural network for classification using PyTorch's nn.Module.",steps:["Create a custom neural network class","Define layers in __init__","Implement forward pass","Create loss function and optimizer","Write training loop","Evaluate on test data"],code:`import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import DataLoader, TensorDataset
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
import numpy as np

# Generate synthetic data
X, y = make_classification(n_samples=1000, n_features=20, n_classes=2, random_state=42)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Convert to tensors
X_train = torch.FloatTensor(X_train)
y_train = torch.LongTensor(y_train)
X_test = torch.FloatTensor(X_test)
y_test = torch.LongTensor(y_test)

# Create DataLoader
train_dataset = TensorDataset(X_train, y_train)
train_loader = DataLoader(train_dataset, batch_size=32, shuffle=True)

# Define Neural Network
class NeuralNet(nn.Module):
    def __init__(self, input_size, hidden_size, num_classes):
        super(NeuralNet, self).__init__()
        self.fc1 = nn.Linear(input_size, hidden_size)
        self.relu = nn.ReLU()
        self.dropout = nn.Dropout(0.2)
        self.fc2 = nn.Linear(hidden_size, hidden_size)
        self.fc3 = nn.Linear(hidden_size, num_classes)
    
    def forward(self, x):
        x = self.fc1(x)
        x = self.relu(x)
        x = self.dropout(x)
        x = self.fc2(x)
        x = self.relu(x)
        x = self.fc3(x)
        return x

# Initialize model, loss, optimizer
model = NeuralNet(input_size=20, hidden_size=64, num_classes=2)
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)

# Training loop
for epoch in range(100):
    for batch_X, batch_y in train_loader:
        # Forward pass
        outputs = model(batch_X)
        loss = criterion(outputs, batch_y)
        
        # Backward pass
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()
    
    if (epoch + 1) % 20 == 0:
        print(f'Epoch {epoch+1}, Loss: {loss.item():.4f}')

# Evaluate
with torch.no_grad():
    outputs = model(X_test)
    _, predicted = torch.max(outputs, 1)
    accuracy = (predicted == y_test).sum().item() / len(y_test)
    print(f'Test Accuracy: {accuracy:.4f}')`},{id:2,title:"Build a CNN for Image Classification",scenario:"Create a Convolutional Neural Network for image classification using PyTorch.",steps:["Define CNN architecture with conv layers","Add pooling and fully connected layers","Load image dataset with transforms","Train with proper data augmentation","Evaluate and visualize results"],code:`import torch
import torch.nn as nn
import torch.optim as optim
import torchvision
import torchvision.transforms as transforms
from torch.utils.data import DataLoader

# Define transforms
transform = transforms.Compose([
    transforms.ToTensor(),
    transforms.Normalize((0.5,), (0.5,))
])

# Load MNIST dataset
train_dataset = torchvision.datasets.MNIST(
    root='./data', train=True, transform=transform, download=True
)
test_dataset = torchvision.datasets.MNIST(
    root='./data', train=False, transform=transform
)

train_loader = DataLoader(train_dataset, batch_size=64, shuffle=True)
test_loader = DataLoader(test_dataset, batch_size=64, shuffle=False)

# Define CNN
class CNN(nn.Module):
    def __init__(self):
        super(CNN, self).__init__()
        self.conv1 = nn.Conv2d(1, 32, kernel_size=3, padding=1)
        self.conv2 = nn.Conv2d(32, 64, kernel_size=3, padding=1)
        self.pool = nn.MaxPool2d(2, 2)
        self.fc1 = nn.Linear(64 * 7 * 7, 128)
        self.fc2 = nn.Linear(128, 10)
        self.relu = nn.ReLU()
        self.dropout = nn.Dropout(0.25)
    
    def forward(self, x):
        x = self.pool(self.relu(self.conv1(x)))  # 28x28 -> 14x14
        x = self.pool(self.relu(self.conv2(x)))  # 14x14 -> 7x7
        x = x.view(-1, 64 * 7 * 7)  # Flatten
        x = self.relu(self.fc1(x))
        x = self.dropout(x)
        x = self.fc2(x)
        return x

# Setup
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
model = CNN().to(device)
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)

# Training
for epoch in range(5):
    model.train()
    for images, labels in train_loader:
        images, labels = images.to(device), labels.to(device)
        
        outputs = model(images)
        loss = criterion(outputs, labels)
        
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()
    
    # Evaluate
    model.eval()
    correct = 0
    total = 0
    with torch.no_grad():
        for images, labels in test_loader:
            images, labels = images.to(device), labels.to(device)
            outputs = model(images)
            _, predicted = torch.max(outputs, 1)
            total += labels.size(0)
            correct += (predicted == labels).sum().item()
    
    print(f'Epoch {epoch+1}, Accuracy: {100*correct/total:.2f}%')`}]},"Task 5: Large Language Models (LLMs)":{title:"Working with Large Language Models",description:`Large Language Models have revolutionized AI development. Understanding how to work with LLMs is essential for modern AI developers.

Key LLM Concepts:

1. What are LLMs?
   - Transformer-based models trained on massive text data
   - Capable of understanding and generating human-like text
   - Examples: GPT-4, Claude, Llama, Gemini, Mistral

2. Using LLM APIs
   - OpenAI API (GPT-4, GPT-3.5)
   - Anthropic API (Claude)
   - Open-source models (Llama, Mistral)
   - Structured outputs and function calling

3. Key Parameters
   - Temperature: Creativity vs consistency (0-2)
   - Max tokens: Response length limit
   - Top-p (nucleus sampling): Diversity control
   - System prompts: Set behavior and context

4. Best Practices
   - Clear, specific instructions
   - Provide examples (few-shot learning)
   - Handle rate limits and errors
   - Monitor costs and token usage`,keyPoints:["Temperature 0 = deterministic, higher = more creative/random","System prompts define the AI's role and behavior","Few-shot examples significantly improve output quality","Always handle API errors and rate limits gracefully","Token count affects both cost and response time","Use streaming for better UX in chat applications"],exercises:[{id:1,title:"Build an LLM-Powered Chatbot",scenario:"Create a conversational AI chatbot using the OpenAI API with proper error handling and conversation history.",steps:["Set up OpenAI client with API key","Create system prompt for the assistant","Implement conversation history management","Handle API responses and errors","Add streaming for real-time responses"],code:`from openai import OpenAI
import os

# Initialize client
client = OpenAI(api_key=os.getenv('OPENAI_API_KEY'))

class Chatbot:
    def __init__(self, system_prompt):
        self.system_prompt = system_prompt
        self.conversation_history = [
            {"role": "system", "content": system_prompt}
        ]
    
    def chat(self, user_message):
        # Add user message to history
        self.conversation_history.append({
            "role": "user",
            "content": user_message
        })
        
        try:
            # Call the API
            response = client.chat.completions.create(
                model="gpt-4",
                messages=self.conversation_history,
                temperature=0.7,
                max_tokens=1000
            )
            
            # Extract assistant's response
            assistant_message = response.choices[0].message.content
            
            # Add to history
            self.conversation_history.append({
                "role": "assistant",
                "content": assistant_message
            })
            
            return assistant_message
            
        except Exception as e:
            return f"Error: {str(e)}"
    
    def chat_stream(self, user_message):
        """Streaming version for real-time responses"""
        self.conversation_history.append({
            "role": "user",
            "content": user_message
        })
        
        stream = client.chat.completions.create(
            model="gpt-4",
            messages=self.conversation_history,
            temperature=0.7,
            stream=True
        )
        
        full_response = ""
        for chunk in stream:
            if chunk.choices[0].delta.content:
                content = chunk.choices[0].delta.content
                full_response += content
                print(content, end="", flush=True)
        
        self.conversation_history.append({
            "role": "assistant",
            "content": full_response
        })
        return full_response

# Usage
bot = Chatbot("You are a helpful AI coding assistant.")
response = bot.chat("Explain what a neural network is in simple terms.")
print(response)`},{id:2,title:"Implement Function Calling",scenario:"Use OpenAI's function calling feature to let the LLM interact with external tools and APIs.",steps:["Define function schemas","Call API with function definitions","Parse function call responses","Execute the requested function","Return results to the model"],code:`from openai import OpenAI
import json

client = OpenAI()

# Define available functions
def get_weather(location, unit="celsius"):
    """Simulated weather API"""
    return {"location": location, "temperature": 22, "unit": unit, "condition": "sunny"}

def search_web(query):
    """Simulated web search"""
    return {"results": [f"Result 1 for {query}", f"Result 2 for {query}"]}

# Function schemas for the API
tools = [
    {
        "type": "function",
        "function": {
            "name": "get_weather",
            "description": "Get current weather for a location",
            "parameters": {
                "type": "object",
                "properties": {
                    "location": {"type": "string", "description": "City name"},
                    "unit": {"type": "string", "enum": ["celsius", "fahrenheit"]}
                },
                "required": ["location"]
            }
        }
    },
    {
        "type": "function",
        "function": {
            "name": "search_web",
            "description": "Search the web for information",
            "parameters": {
                "type": "object",
                "properties": {
                    "query": {"type": "string", "description": "Search query"}
                },
                "required": ["query"]
            }
        }
    }
]

def run_conversation(user_message):
    messages = [{"role": "user", "content": user_message}]
    
    response = client.chat.completions.create(
        model="gpt-4",
        messages=messages,
        tools=tools,
        tool_choice="auto"
    )
    
    message = response.choices[0].message
    
    # Check if model wants to call a function
    if message.tool_calls:
        for tool_call in message.tool_calls:
            func_name = tool_call.function.name
            func_args = json.loads(tool_call.function.arguments)
            
            # Execute the function
            if func_name == "get_weather":
                result = get_weather(**func_args)
            elif func_name == "search_web":
                result = search_web(**func_args)
            
            # Add function result to messages
            messages.append(message)
            messages.append({
                "role": "tool",
                "tool_call_id": tool_call.id,
                "content": json.dumps(result)
            })
        
        # Get final response
        final_response = client.chat.completions.create(
            model="gpt-4",
            messages=messages
        )
        return final_response.choices[0].message.content
    
    return message.content

# Test
print(run_conversation("What's the weather like in Tokyo?"))`}]},"Task 6: Prompt Engineering":{title:"Prompt Engineering Mastery",description:`Prompt engineering is the art and science of crafting effective prompts to get desired outputs from LLMs. It's a critical skill for AI developers.

Prompt Engineering Techniques:

1. Zero-Shot Prompting
   - Direct instruction without examples
   - Works for simple, well-defined tasks

2. Few-Shot Prompting
   - Provide examples of desired input-output pairs
   - Helps model understand format and style

3. Chain-of-Thought (CoT)
   - Ask model to think step-by-step
   - Improves reasoning on complex problems

4. Role Prompting
   - Assign a persona or role to the model
   - Influences tone, expertise, and perspective

5. Structured Output
   - Request specific formats (JSON, XML, Markdown)
   - Use schemas for consistent outputs

Prompt Components:
   - Context: Background information
   - Instruction: What to do
   - Input: The specific data to process
   - Output format: How to structure response`,keyPoints:["Be specific and explicit in your instructions","Use delimiters to separate different parts of the prompt","Few-shot examples dramatically improve consistency","Chain-of-thought improves reasoning accuracy by 10-40%","Negative prompting (what NOT to do) can help avoid common errors","Iterate and refine prompts based on outputs"],exercises:[{id:1,title:"Master Prompt Techniques",scenario:"Practice different prompting techniques to solve various tasks effectively.",steps:["Create zero-shot prompts for simple tasks","Build few-shot prompts with examples","Implement chain-of-thought for reasoning","Use role prompting for specialized outputs","Structure outputs with JSON formatting"],code:`# Zero-Shot Prompt
zero_shot = """
Classify the sentiment of the following review as POSITIVE, NEGATIVE, or NEUTRAL.

Review: "The product arrived on time and works exactly as described. Very satisfied!"

Sentiment:
"""

# Few-Shot Prompt
few_shot = """
Extract the product name and price from the text.

Text: "The new iPhone 15 Pro is available for $999."
Output: {"product": "iPhone 15 Pro", "price": "$999"}

Text: "Samsung Galaxy S24 Ultra costs $1199."
Output: {"product": "Samsung Galaxy S24 Ultra", "price": "$1199"}

Text: "Get the MacBook Air M3 for just $1099."
Output:
"""

# Chain-of-Thought Prompt
cot_prompt = """
Solve this problem step by step:

A store has 50 apples. They sell 23 apples in the morning and receive a shipment of 35 apples. 
Then they sell 18 more apples in the afternoon. How many apples do they have now?

Let's think through this step by step:
1. Start with initial count
2. Subtract morning sales
3. Add shipment
4. Subtract afternoon sales
5. Calculate final answer

Solution:
"""

# Role Prompting
role_prompt = """
You are an expert Python code reviewer with 15 years of experience. 
You focus on code quality, security, performance, and best practices.

Review the following code and provide detailed feedback:

\`\`\`python
def get_user(id):
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    cursor.execute(f"SELECT * FROM users WHERE id = {id}")
    return cursor.fetchone()
\`\`\`

Provide your review in this format:
1. Security Issues
2. Performance Concerns  
3. Best Practice Violations
4. Suggested Improvements
"""

# Structured Output with JSON
json_prompt = """
Analyze the following customer feedback and extract insights.

Feedback: "I love the fast shipping but the packaging was damaged. The product itself is great quality though. Will probably order again."

Respond with a JSON object containing:
- sentiment: overall sentiment (positive/negative/mixed)
- aspects: list of aspects mentioned with their individual sentiments
- recommendation: whether customer would recommend (yes/no/maybe)
- key_phrases: important phrases from the feedback

JSON Response:
"""`},{id:2,title:"Build a Prompt Template System",scenario:"Create a reusable prompt template system for consistent AI interactions across your application.",steps:["Design template structure with placeholders","Create template classes for different use cases","Implement variable substitution","Add validation for required fields","Build a template library"],code:`from dataclasses import dataclass
from typing import Optional, List
import re

@dataclass
class PromptTemplate:
    """Reusable prompt template with variable substitution."""
    template: str
    name: str
    description: str
    required_vars: List[str]
    
    def format(self, **kwargs) -> str:
        # Validate required variables
        missing = [var for var in self.required_vars if var not in kwargs]
        if missing:
            raise ValueError(f"Missing required variables: {missing}")
        
        # Substitute variables
        result = self.template
        for key, value in kwargs.items():
            result = result.replace(f"{{{key}}}", str(value))
        
        return result

# Template Library
class PromptLibrary:
    templates = {
        "code_review": PromptTemplate(
            name="Code Review",
            description="Review code for quality and issues",
            required_vars=["language", "code"],
            template="""You are an expert {language} developer.

Review this code for:
- Bugs and errors
- Security vulnerabilities
- Performance issues
- Best practices

Code:
\`\`\`{language}
{code}
\`\`\`

Provide specific, actionable feedback."""
        ),
        
        "summarize": PromptTemplate(
            name="Summarize",
            description="Summarize text to specified length",
            required_vars=["text", "max_sentences"],
            template="""Summarize the following text in {max_sentences} sentences or less.
Be concise but capture the key points.

Text: {text}

Summary:"""
        ),
        
        "translate": PromptTemplate(
            name="Translate",
            description="Translate text between languages",
            required_vars=["text", "source_lang", "target_lang"],
            template="""Translate the following {source_lang} text to {target_lang}.
Maintain the tone and meaning as closely as possible.

Original ({source_lang}):
{text}

Translation ({target_lang}):"""
        ),
        
        "extract_data": PromptTemplate(
            name="Extract Data",
            description="Extract structured data from text",
            required_vars=["text", "fields"],
            template="""Extract the following information from the text.
Return as JSON with these fields: {fields}

Text: {text}

If a field is not found, use null.

JSON:"""
        )
    }
    
    @classmethod
    def get(cls, template_name: str) -> PromptTemplate:
        if template_name not in cls.templates:
            raise KeyError(f"Template '{template_name}' not found")
        return cls.templates[template_name]
    
    @classmethod
    def list_templates(cls) -> List[str]:
        return list(cls.templates.keys())

# Usage
template = PromptLibrary.get("code_review")
prompt = template.format(
    language="Python",
    code="def add(a, b): return a + b"
)
print(prompt)`}]},"Task 7: RAG - Retrieval Augmented Generation":{title:"RAG - Retrieval Augmented Generation",description:`RAG combines the power of LLMs with external knowledge retrieval, enabling AI systems to access and use specific, up-to-date information.

RAG Architecture:

1. Document Processing
   - Load documents (PDFs, web pages, databases)
   - Split into chunks (optimal size varies)
   - Handle different document types

2. Embedding & Indexing
   - Convert text chunks to vector embeddings
   - Store in vector database
   - Enable semantic similarity search

3. Retrieval
   - Convert query to embedding
   - Find similar documents
   - Rank and filter results

4. Generation
   - Combine retrieved context with query
   - Generate response using LLM
   - Cite sources when appropriate

Vector Databases:
   - Pinecone, Weaviate, Chroma
   - FAISS (local), Milvus
   - pgvector (PostgreSQL extension)`,keyPoints:["Chunk size affects retrieval quality - typically 500-1000 tokens","Overlap between chunks preserves context","Embedding model choice impacts semantic search quality","Reranking improves retrieval accuracy","Hybrid search (keyword + semantic) often works best","Always handle cases where no relevant documents are found"],exercises:[{id:1,title:"Build a RAG System with LangChain",scenario:"Create a complete RAG pipeline that can answer questions based on your documents.",steps:["Load and process documents","Split into chunks with overlap","Create embeddings and vector store","Implement retrieval chain","Generate answers with context"],code:`from langchain.document_loaders import TextLoader, PyPDFLoader, WebBaseLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Chroma
from langchain.chat_models import ChatOpenAI
from langchain.chains import RetrievalQA
from langchain.prompts import PromptTemplate

# 1. Load Documents
# loader = PyPDFLoader("document.pdf")
# loader = WebBaseLoader("https://example.com")
loader = TextLoader("knowledge_base.txt")
documents = loader.load()

# 2. Split into chunks
text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,
    chunk_overlap=200,
    length_function=len,
    separators=["\\n\\n", "\\n", " ", ""]
)
chunks = text_splitter.split_documents(documents)
print(f"Created {len(chunks)} chunks")

# 3. Create embeddings and vector store
embeddings = OpenAIEmbeddings()
vectorstore = Chroma.from_documents(
    documents=chunks,
    embedding=embeddings,
    persist_directory="./chroma_db"
)

# 4. Create retriever
retriever = vectorstore.as_retriever(
    search_type="similarity",
    search_kwargs={"k": 4}  # Return top 4 documents
)

# 5. Create custom prompt
template = """Use the following context to answer the question.
If you don't know the answer based on the context, say so.

Context:
{context}

Question: {question}

Answer:"""

prompt = PromptTemplate(
    template=template,
    input_variables=["context", "question"]
)

# 6. Create QA chain
llm = ChatOpenAI(model="gpt-4", temperature=0)
qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    chain_type="stuff",
    retriever=retriever,
    return_source_documents=True,
    chain_type_kwargs={"prompt": prompt}
)

# 7. Query
query = "What is the main topic of the document?"
result = qa_chain({"query": query})

print(f"Answer: {result['result']}")
print(f"\\nSources:")
for doc in result['source_documents']:
    print(f"- {doc.page_content[:100]}...")`},{id:2,title:"Advanced RAG with Reranking",scenario:"Implement advanced RAG techniques including hybrid search and reranking for better accuracy.",steps:["Implement hybrid search (BM25 + semantic)","Add a reranker for better relevance","Implement query expansion","Add source citation to responses","Handle edge cases gracefully"],code:`from langchain.retrievers import BM25Retriever, EnsembleRetriever
from langchain.retrievers.document_compressors import CrossEncoderReranker
from langchain.retrievers import ContextualCompressionRetriever
from langchain_community.cross_encoders import HuggingFaceCrossEncoder

class AdvancedRAG:
    def __init__(self, documents, embeddings):
        self.documents = documents
        self.embeddings = embeddings
        self._setup_retrievers()
    
    def _setup_retrievers(self):
        # Semantic retriever
        self.vectorstore = Chroma.from_documents(
            documents=self.documents,
            embedding=self.embeddings
        )
        semantic_retriever = self.vectorstore.as_retriever(search_kwargs={"k": 10})
        
        # BM25 keyword retriever
        bm25_retriever = BM25Retriever.from_documents(self.documents)
        bm25_retriever.k = 10
        
        # Hybrid retriever (ensemble)
        self.ensemble_retriever = EnsembleRetriever(
            retrievers=[bm25_retriever, semantic_retriever],
            weights=[0.4, 0.6]  # Weight towards semantic
        )
        
        # Reranker
        reranker = HuggingFaceCrossEncoder(model_name="cross-encoder/ms-marco-MiniLM-L-6-v2")
        compressor = CrossEncoderReranker(model=reranker, top_n=4)
        
        self.retriever = ContextualCompressionRetriever(
            base_compressor=compressor,
            base_retriever=self.ensemble_retriever
        )
    
    def expand_query(self, query: str, llm) -> str:
        """Expand query with related terms for better retrieval."""
        expansion_prompt = f"""Generate 2-3 alternative ways to ask this question.
        Keep them short and focused on the same intent.
        
        Question: {query}
        
        Alternatives (one per line):"""
        
        response = llm.invoke(expansion_prompt)
        expanded = f"{query}\\n{response.content}"
        return expanded
    
    def retrieve_with_sources(self, query: str):
        """Retrieve documents with source tracking."""
        docs = self.retriever.get_relevant_documents(query)
        
        sources = []
        for i, doc in enumerate(docs):
            sources.append({
                "id": i + 1,
                "content": doc.page_content,
                "metadata": doc.metadata
            })
        
        return docs, sources
    
    def generate_answer(self, query: str, llm):
        """Generate answer with citations."""
        docs, sources = self.retrieve_with_sources(query)
        
        if not docs:
            return "I couldn't find relevant information to answer this question.", []
        
        context = "\\n\\n".join([
            f"[{i+1}] {doc.page_content}" 
            for i, doc in enumerate(docs)
        ])
        
        prompt = f"""Answer the question using the provided sources.
        Cite sources using [1], [2], etc.
        
        Sources:
        {context}
        
        Question: {query}
        
        Answer with citations:"""
        
        response = llm.invoke(prompt)
        return response.content, sources

# Usage
# rag = AdvancedRAG(documents, OpenAIEmbeddings())
# answer, sources = rag.generate_answer("What is machine learning?", ChatOpenAI())`}]},"Task 8: AI Agents":{title:"Building AI Agents",description:`AI Agents are autonomous systems that can plan, reason, use tools, and execute multi-step tasks. They represent the cutting edge of LLM applications.

Agent Architecture:

1. Core Components
   - LLM (brain): Reasoning and decision making
   - Tools: Actions the agent can take
   - Memory: Short-term and long-term storage
   - Planning: Breaking down complex tasks

2. Agent Types
   - ReAct Agents: Reason + Act pattern
   - Plan-and-Execute: Plan first, then execute
   - Multi-Agent Systems: Specialized agents working together

3. Tool Design
   - Clear descriptions for the LLM
   - Well-defined inputs and outputs
   - Error handling and validation
   - Safety constraints

4. Memory Systems
   - Conversation history
   - Working memory (current task)
   - Long-term memory (vector store)
   - Episodic memory (past experiences)`,keyPoints:["Agents need clear tool descriptions to choose correctly","ReAct pattern: Thought → Action → Observation → Repeat","Limit agent iterations to prevent infinite loops","Include human-in-the-loop for critical actions","Test agents thoroughly - they can be unpredictable","Monitor token usage - agents can be expensive"],exercises:[{id:1,title:"Build a ReAct Agent",scenario:"Create an agent that can reason about tasks and use tools to accomplish goals.",steps:["Define tools with clear descriptions","Set up the agent with LangChain","Implement the reasoning loop","Add memory for conversation","Test with various queries"],code:`from langchain.agents import AgentExecutor, create_react_agent
from langchain.tools import Tool, tool
from langchain.prompts import PromptTemplate
from langchain_openai import ChatOpenAI
from langchain.memory import ConversationBufferWindowMemory
import requests
import json

# Define tools
@tool
def calculator(expression: str) -> str:
    """Calculate a mathematical expression. Input should be a valid math expression."""
    try:
        result = eval(expression)
        return f"Result: {result}"
    except Exception as e:
        return f"Error: {str(e)}"

@tool
def search_wikipedia(query: str) -> str:
    """Search Wikipedia for information. Input should be a search query."""
    try:
        url = f"https://en.wikipedia.org/api/rest_v1/page/summary/{query}"
        response = requests.get(url)
        if response.status_code == 200:
            data = response.json()
            return data.get('extract', 'No information found.')
        return "Could not find information."
    except Exception as e:
        return f"Error: {str(e)}"

@tool  
def get_current_time() -> str:
    """Get the current date and time. No input required."""
    from datetime import datetime
    return datetime.now().strftime("%Y-%m-%d %H:%M:%S")

tools = [calculator, search_wikipedia, get_current_time]

# Create agent
llm = ChatOpenAI(model="gpt-4", temperature=0)

# ReAct prompt template
react_template = """Answer the following questions as best you can. You have access to the following tools:

{tools}

Use the following format:

Question: the input question you must answer
Thought: you should always think about what to do
Action: the action to take, should be one of [{tool_names}]
Action Input: the input to the action
Observation: the result of the action
... (this Thought/Action/Action Input/Observation can repeat N times)
Thought: I now know the final answer
Final Answer: the final answer to the original input question

Begin!

Question: {input}
Thought:{agent_scratchpad}"""

prompt = PromptTemplate.from_template(react_template)

# Create agent
agent = create_react_agent(llm, tools, prompt)

# Add memory
memory = ConversationBufferWindowMemory(
    memory_key="chat_history",
    k=5,  # Remember last 5 exchanges
    return_messages=True
)

# Create executor with limits
agent_executor = AgentExecutor(
    agent=agent,
    tools=tools,
    memory=memory,
    verbose=True,
    max_iterations=5,
    handle_parsing_errors=True
)

# Test the agent
result = agent_executor.invoke({
    "input": "What is 15% of 250, and who invented the calculator?"
})
print(f"\\nFinal Answer: {result['output']}")`},{id:2,title:"Build a Multi-Agent System",scenario:"Create a system with specialized agents that collaborate to solve complex tasks.",steps:["Design specialized agent roles","Implement coordinator agent","Set up inter-agent communication","Handle task delegation","Aggregate results from agents"],code:`from typing import List, Dict
from dataclasses import dataclass
from enum import Enum
from langchain_openai import ChatOpenAI

class AgentRole(Enum):
    RESEARCHER = "researcher"
    WRITER = "writer"
    CRITIC = "critic"
    COORDINATOR = "coordinator"

@dataclass
class AgentMessage:
    sender: AgentRole
    recipient: AgentRole
    content: str
    task_id: str

class SpecializedAgent:
    def __init__(self, role: AgentRole, system_prompt: str):
        self.role = role
        self.system_prompt = system_prompt
        self.llm = ChatOpenAI(model="gpt-4", temperature=0.7)
    
    def process(self, message: str, context: str = "") -> str:
        prompt = f"""{self.system_prompt}
        
        Context from other agents:
        {context}
        
        Task: {message}
        
        Your response:"""
        
        response = self.llm.invoke(prompt)
        return response.content

class MultiAgentSystem:
    def __init__(self):
        self.agents = {
            AgentRole.RESEARCHER: SpecializedAgent(
                AgentRole.RESEARCHER,
                """You are a research specialist. Your job is to:
                - Gather relevant information
                - Identify key facts and data
                - Provide well-sourced findings
                Be thorough but concise."""
            ),
            AgentRole.WRITER: SpecializedAgent(
                AgentRole.WRITER,
                """You are a professional writer. Your job is to:
                - Create clear, engaging content
                - Structure information logically
                - Adapt tone to the audience
                Focus on clarity and impact."""
            ),
            AgentRole.CRITIC: SpecializedAgent(
                AgentRole.CRITIC,
                """You are a quality critic. Your job is to:
                - Review content for accuracy
                - Identify gaps or improvements
                - Suggest specific enhancements
                Be constructive but thorough."""
            ),
            AgentRole.COORDINATOR: SpecializedAgent(
                AgentRole.COORDINATOR,
                """You are the coordinator. Your job is to:
                - Break down complex tasks
                - Delegate to appropriate specialists
                - Synthesize results
                - Ensure quality output"""
            )
        }
        self.conversation_history: List[AgentMessage] = []
    
    def run_task(self, task: str) -> str:
        """Execute a task using multiple agents."""
        task_id = f"task_{len(self.conversation_history)}"
        
        # Step 1: Coordinator plans the approach
        plan = self.agents[AgentRole.COORDINATOR].process(
            f"Plan how to accomplish this task: {task}"
        )
        print(f"📋 Coordinator Plan:\\n{plan}\\n")
        
        # Step 2: Researcher gathers information
        research = self.agents[AgentRole.RESEARCHER].process(
            task,
            context=f"Coordinator's plan: {plan}"
        )
        print(f"🔍 Research Results:\\n{research}\\n")
        
        # Step 3: Writer creates content
        draft = self.agents[AgentRole.WRITER].process(
            f"Create content based on this research: {research}",
            context=f"Original task: {task}"
        )
        print(f"✍️ Writer's Draft:\\n{draft}\\n")
        
        # Step 4: Critic reviews
        review = self.agents[AgentRole.CRITIC].process(
            f"Review this content: {draft}",
            context=f"Original task: {task}\\nResearch: {research}"
        )
        print(f"🔎 Critic's Review:\\n{review}\\n")
        
        # Step 5: Writer revises based on feedback
        final = self.agents[AgentRole.WRITER].process(
            f"Revise the content based on this feedback: {review}\\n\\nOriginal draft: {draft}"
        )
        
        return final

# Usage
# mas = MultiAgentSystem()
# result = mas.run_task("Write a blog post about the future of AI in healthcare")
# print(f"📄 Final Output:\\n{result}")`}]},"Task 9: Model Fine-tuning":{title:"Fine-tuning AI Models",description:`Fine-tuning adapts pre-trained models to specific tasks or domains, improving performance for your use case.

Fine-tuning Approaches:

1. Full Fine-tuning
   - Update all model parameters
   - Requires significant compute
   - Best results but expensive

2. Parameter-Efficient Fine-tuning (PEFT)
   - LoRA (Low-Rank Adaptation)
   - QLoRA (Quantized LoRA)
   - Adapters
   - Much cheaper, nearly same quality

3. Instruction Fine-tuning
   - Train on instruction-response pairs
   - Improves task following
   - Used for chat models

4. RLHF (Reinforcement Learning from Human Feedback)
   - Train reward model
   - Optimize with PPO
   - Aligns model with human preferences

When to Fine-tune:
   - Specific domain knowledge needed
   - Consistent output format required
   - Prompt engineering insufficient
   - Privacy/security requirements`,keyPoints:["Start with prompt engineering before fine-tuning","Quality of training data matters more than quantity","LoRA/QLoRA makes fine-tuning accessible on consumer GPUs","Always evaluate on held-out test set","Fine-tuned models may lose some general capabilities","OpenAI fine-tuning is easiest but limited to their models"],exercises:[{id:1,title:"Fine-tune with OpenAI",scenario:"Fine-tune a GPT model using OpenAI's fine-tuning API for a specific task.",steps:["Prepare training data in JSONL format","Upload the training file","Create a fine-tuning job","Monitor training progress","Test the fine-tuned model"],code:`from openai import OpenAI
import json
import time

client = OpenAI()

# 1. Prepare training data (JSONL format)
training_data = [
    {
        "messages": [
            {"role": "system", "content": "You are a customer service assistant for a tech company."},
            {"role": "user", "content": "My laptop won't turn on"},
            {"role": "assistant", "content": "I'm sorry to hear that. Let's troubleshoot: 1) Check if it's plugged in and the charger light is on. 2) Try holding the power button for 30 seconds. 3) If using a removable battery, remove it and try again. Would you like to try these steps?"}
        ]
    },
    {
        "messages": [
            {"role": "system", "content": "You are a customer service assistant for a tech company."},
            {"role": "user", "content": "How do I reset my password?"},
            {"role": "assistant", "content": "To reset your password: 1) Go to our login page and click 'Forgot Password'. 2) Enter your registered email. 3) Check your inbox for the reset link (also check spam). 4) Click the link and create a new password. Need help with any of these steps?"}
        ]
    }
    # Add more training examples (minimum 10 recommended)
]

# Save to JSONL file
with open('training_data.jsonl', 'w') as f:
    for item in training_data:
        f.write(json.dumps(item) + '\\n')

# 2. Upload the training file
with open('training_data.jsonl', 'rb') as f:
    file_response = client.files.create(
        file=f,
        purpose='fine-tune'
    )

file_id = file_response.id
print(f"File uploaded: {file_id}")

# 3. Create fine-tuning job
job = client.fine_tuning.jobs.create(
    training_file=file_id,
    model="gpt-3.5-turbo",
    hyperparameters={
        "n_epochs": 3
    }
)

job_id = job.id
print(f"Fine-tuning job created: {job_id}")

# 4. Monitor progress
while True:
    job_status = client.fine_tuning.jobs.retrieve(job_id)
    print(f"Status: {job_status.status}")
    
    if job_status.status in ['succeeded', 'failed']:
        break
    
    time.sleep(60)  # Check every minute

# 5. Use the fine-tuned model
if job_status.status == 'succeeded':
    fine_tuned_model = job_status.fine_tuned_model
    print(f"Fine-tuned model: {fine_tuned_model}")
    
    # Test it
    response = client.chat.completions.create(
        model=fine_tuned_model,
        messages=[
            {"role": "system", "content": "You are a customer service assistant for a tech company."},
            {"role": "user", "content": "My screen is flickering"}
        ]
    )
    print(f"Response: {response.choices[0].message.content}")`},{id:2,title:"Fine-tune with LoRA",scenario:"Use LoRA to efficiently fine-tune an open-source model on your own hardware.",steps:["Set up the training environment","Load base model with quantization","Configure LoRA parameters","Train on your dataset","Merge and save the model"],code:`import torch
from transformers import (
    AutoModelForCausalLM,
    AutoTokenizer,
    TrainingArguments,
    Trainer,
    DataCollatorForLanguageModeling
)
from peft import LoraConfig, get_peft_model, prepare_model_for_kbit_training
from datasets import Dataset

# 1. Load base model with quantization (4-bit for memory efficiency)
model_name = "mistralai/Mistral-7B-v0.1"

tokenizer = AutoTokenizer.from_pretrained(model_name)
tokenizer.pad_token = tokenizer.eos_token

model = AutoModelForCausalLM.from_pretrained(
    model_name,
    load_in_4bit=True,
    torch_dtype=torch.float16,
    device_map="auto"
)

# Prepare model for training
model = prepare_model_for_kbit_training(model)

# 2. Configure LoRA
lora_config = LoraConfig(
    r=16,                    # Rank of update matrices
    lora_alpha=32,           # Scaling factor
    target_modules=["q_proj", "v_proj", "k_proj", "o_proj"],  # Layers to adapt
    lora_dropout=0.05,
    bias="none",
    task_type="CAUSAL_LM"
)

# Apply LoRA
model = get_peft_model(model, lora_config)
model.print_trainable_parameters()

# 3. Prepare dataset
training_texts = [
    "### Instruction: Summarize this article.\\n### Input: [article text]\\n### Response: [summary]",
    # Add more training examples
]

def tokenize_function(examples):
    return tokenizer(
        examples["text"],
        truncation=True,
        max_length=512,
        padding="max_length"
    )

dataset = Dataset.from_dict({"text": training_texts})
tokenized_dataset = dataset.map(tokenize_function, batched=True)

# 4. Training arguments
training_args = TrainingArguments(
    output_dir="./lora_model",
    num_train_epochs=3,
    per_device_train_batch_size=4,
    gradient_accumulation_steps=4,
    learning_rate=2e-4,
    fp16=True,
    logging_steps=10,
    save_strategy="epoch",
    warmup_ratio=0.03,
)

# 5. Create trainer and train
trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=tokenized_dataset,
    data_collator=DataCollatorForLanguageModeling(tokenizer, mlm=False)
)

trainer.train()

# 6. Save the LoRA adapter
model.save_pretrained("./lora_adapter")

# 7. For inference, merge and save full model
from peft import PeftModel

base_model = AutoModelForCausalLM.from_pretrained(model_name)
peft_model = PeftModel.from_pretrained(base_model, "./lora_adapter")
merged_model = peft_model.merge_and_unload()
merged_model.save_pretrained("./merged_model")`}]},"Task 10: AI Application Deployment":{title:"Deploying AI Applications",description:`Deploying AI applications requires careful consideration of performance, scalability, cost, and reliability.

Deployment Options:

1. API-Based Deployment
   - FastAPI / Flask for REST APIs
   - gRPC for high-performance
   - Serverless (AWS Lambda, Cloud Functions)

2. Container Deployment
   - Docker for containerization
   - Kubernetes for orchestration
   - Cloud Run, ECS, AKS

3. ML-Specific Platforms
   - AWS SageMaker
   - Google Vertex AI
   - Azure ML
   - Hugging Face Inference Endpoints

4. Edge Deployment
   - ONNX Runtime
   - TensorRT
   - Core ML (iOS)
   - TensorFlow Lite (Mobile)

Key Considerations:
   - Latency requirements
   - Throughput needs
   - Cost optimization
   - Model versioning
   - Monitoring and observability`,keyPoints:["Use async processing for non-blocking inference","Implement proper health checks and monitoring","Cache embeddings and frequent queries","Use batching to improve GPU utilization","Set up proper error handling and fallbacks","Monitor model performance and data drift"],exercises:[{id:1,title:"Build a Production FastAPI Service",scenario:"Create a production-ready AI API service with proper error handling, validation, and monitoring.",steps:["Set up FastAPI with proper structure","Add request validation with Pydantic","Implement async inference","Add health checks and metrics","Configure logging and error handling"],code:`from fastapi import FastAPI, HTTPException, BackgroundTasks
from pydantic import BaseModel, Field
from typing import Optional, List
import logging
import time
from contextlib import asynccontextmanager
import asyncio

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Request/Response models
class ChatRequest(BaseModel):
    message: str = Field(..., min_length=1, max_length=4000)
    conversation_id: Optional[str] = None
    temperature: float = Field(default=0.7, ge=0, le=2)
    max_tokens: int = Field(default=1000, ge=1, le=4000)

class ChatResponse(BaseModel):
    response: str
    conversation_id: str
    tokens_used: int
    latency_ms: float

class HealthResponse(BaseModel):
    status: str
    model_loaded: bool
    uptime_seconds: float

# Global state
class AppState:
    def __init__(self):
        self.model = None
        self.start_time = time.time()
        self.request_count = 0
        self.error_count = 0

state = AppState()

# Lifecycle management
@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    logger.info("Loading AI model...")
    # state.model = load_your_model()
    state.model = "model_placeholder"  # Replace with actual model
    logger.info("Model loaded successfully")
    yield
    # Shutdown
    logger.info("Shutting down...")

app = FastAPI(
    title="AI Chat API",
    version="1.0.0",
    lifespan=lifespan
)

# Middleware for request tracking
@app.middleware("http")
async def track_requests(request, call_next):
    start = time.time()
    response = await call_next(request)
    duration = time.time() - start
    logger.info(f"{request.method} {request.url.path} - {response.status_code} - {duration:.3f}s")
    return response

# Health check endpoint
@app.get("/health", response_model=HealthResponse)
async def health_check():
    return HealthResponse(
        status="healthy",
        model_loaded=state.model is not None,
        uptime_seconds=time.time() - state.start_time
    )

# Main chat endpoint
@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    start_time = time.time()
    state.request_count += 1
    
    try:
        # Simulate AI inference
        await asyncio.sleep(0.1)  # Replace with actual inference
        response_text = f"AI response to: {request.message[:50]}..."
        
        latency = (time.time() - start_time) * 1000
        
        return ChatResponse(
            response=response_text,
            conversation_id=request.conversation_id or "new_conv_123",
            tokens_used=len(request.message.split()) * 2,
            latency_ms=latency
        )
    
    except Exception as e:
        state.error_count += 1
        logger.error(f"Chat error: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

# Metrics endpoint
@app.get("/metrics")
async def metrics():
    return {
        "total_requests": state.request_count,
        "total_errors": state.error_count,
        "error_rate": state.error_count / max(state.request_count, 1),
        "uptime_seconds": time.time() - state.start_time
    }

# Run with: uvicorn main:app --host 0.0.0.0 --port 8000`},{id:2,title:"Containerize and Deploy with Docker",scenario:"Package your AI application in Docker and prepare for cloud deployment.",steps:["Create optimized Dockerfile","Set up docker-compose for local development","Configure environment variables","Add health checks to container","Prepare for Kubernetes deployment"],code:`# Dockerfile
"""
# Use Python slim image for smaller size
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \\
    build-essential \\
    curl \\
    && rm -rf /var/lib/apt/lists/*

# Copy requirements first for better caching
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Create non-root user for security
RUN useradd -m appuser && chown -R appuser:appuser /app
USER appuser

# Expose port
EXPOSE 8000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \\
    CMD curl -f http://localhost:8000/health || exit 1

# Run the application
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
"""

# docker-compose.yml
"""
version: '3.8'

services:
  ai-api:
    build: .
    ports:
      - "8000:8000"
    environment:
      - OPENAI_API_KEY=\${OPENAI_API_KEY}
      - LOG_LEVEL=INFO
      - MAX_WORKERS=4
    volumes:
      - ./models:/app/models  # Mount model directory
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8000/health"]
      interval: 30s
      timeout: 10s
      retries: 3
    restart: unless-stopped
    deploy:
      resources:
        limits:
          memory: 4G
        reservations:
          memory: 2G

  redis:
    image: redis:alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data

volumes:
  redis_data:
"""

# kubernetes/deployment.yaml
"""
apiVersion: apps/v1
kind: Deployment
metadata:
  name: ai-api
spec:
  replicas: 3
  selector:
    matchLabels:
      app: ai-api
  template:
    metadata:
      labels:
        app: ai-api
    spec:
      containers:
      - name: ai-api
        image: your-registry/ai-api:latest
        ports:
        - containerPort: 8000
        env:
        - name: OPENAI_API_KEY
          valueFrom:
            secretKeyRef:
              name: ai-secrets
              key: openai-api-key
        resources:
          limits:
            memory: "4Gi"
            cpu: "2"
          requests:
            memory: "2Gi"
            cpu: "1"
        livenessProbe:
          httpGet:
            path: /health
            port: 8000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /health
            port: 8000
          initialDelaySeconds: 5
          periodSeconds: 5
---
apiVersion: v1
kind: Service
metadata:
  name: ai-api-service
spec:
  selector:
    app: ai-api
  ports:
  - port: 80
    targetPort: 8000
  type: LoadBalancer
"""

# Build and run commands:
# docker build -t ai-api .
# docker run -p 8000:8000 --env-file .env ai-api
# docker-compose up -d
# kubectl apply -f kubernetes/`}]}},au={title:"Machine Learning Basics",icon:"🤖",questions:[{id:1,question:"What is the difference between supervised and unsupervised learning?",answer:"Supervised learning uses labeled data where the algorithm learns to map inputs to known outputs (e.g., classification, regression). Unsupervised learning works with unlabeled data to find patterns or structure (e.g., clustering, dimensionality reduction). Supervised needs a 'teacher' (labels), unsupervised discovers hidden patterns.",difficulty:"Easy"},{id:2,question:"What is overfitting and how do you prevent it?",answer:"Overfitting occurs when a model learns training data too well, including noise, and performs poorly on new data. Prevention methods: 1) Cross-validation, 2) Regularization (L1/L2), 3) Dropout in neural networks, 4) Early stopping, 5) More training data, 6) Feature selection, 7) Ensemble methods, 8) Data augmentation.",difficulty:"Easy"},{id:3,question:"Explain bias-variance tradeoff.",answer:"Bias is error from oversimplified models (underfitting) - model can't capture patterns. Variance is error from over-complex models (overfitting) - model is too sensitive to training data. The tradeoff: reducing bias increases variance and vice versa. Goal is finding the sweet spot that minimizes total error (bias² + variance + irreducible error).",difficulty:"Medium"},{id:4,question:"What is gradient descent and how does it work?",answer:"Gradient descent is an optimization algorithm to minimize a loss function by iteratively moving in the direction of steepest descent (negative gradient). Steps: 1) Calculate gradient of loss w.r.t. parameters, 2) Update parameters: θ = θ - α * ∇L(θ), where α is learning rate. Variants: Batch GD, Stochastic GD (SGD), Mini-batch GD, Adam, RMSprop.",difficulty:"Medium"},{id:5,question:"What is cross-validation and why is it important?",answer:"Cross-validation is a technique to evaluate model performance by splitting data into multiple folds. K-Fold CV: split data into K parts, train on K-1, test on 1, rotate K times, average results. Importance: provides more reliable performance estimate than single train-test split, helps detect overfitting, makes better use of limited data.",difficulty:"Easy"},{id:6,question:"What is the difference between L1 and L2 regularization?",answer:"L1 (Lasso): adds |weights| to loss, produces sparse solutions (some weights become exactly 0), good for feature selection. L2 (Ridge): adds weights² to loss, shrinks weights but rarely makes them exactly 0, handles correlated features better. L1 gives simpler models, L2 gives smaller weights. Elastic Net combines both.",difficulty:"Medium"},{id:7,question:"Explain precision, recall, and F1 score.",answer:"Precision = TP/(TP+FP): of all predicted positives, how many are actually positive. Recall = TP/(TP+FN): of all actual positives, how many did we predict correctly. F1 = 2*(Precision*Recall)/(Precision+Recall): harmonic mean, balances both. Use precision when FP is costly (spam detection), recall when FN is costly (disease detection).",difficulty:"Easy"},{id:8,question:"What is the vanishing gradient problem?",answer:"In deep networks, gradients can become extremely small as they backpropagate through many layers (especially with sigmoid/tanh activations), causing early layers to learn very slowly or not at all. Solutions: ReLU activation, proper weight initialization (Xavier, He), batch normalization, residual connections (skip connections), LSTM/GRU for RNNs.",difficulty:"Hard"}]},ou={title:"Deep Learning",icon:"🧠",questions:[{id:1,question:"What is a neural network and how does it learn?",answer:"A neural network is a computational model inspired by biological neurons. It consists of layers of interconnected nodes (neurons) that apply weighted sums and activation functions. Learning happens through backpropagation: forward pass computes output, loss is calculated, gradients flow backward, weights are updated via gradient descent to minimize loss.",difficulty:"Easy"},{id:2,question:"Explain the difference between CNN and RNN.",answer:"CNN (Convolutional Neural Network): designed for spatial data (images), uses convolution operations to detect local patterns, has translation invariance, good for image classification/detection. RNN (Recurrent Neural Network): designed for sequential data, has memory through hidden states, processes inputs one at a time while maintaining context, good for text/time series.",difficulty:"Medium"},{id:3,question:"What is the Transformer architecture?",answer:"Transformers use self-attention mechanism to process all inputs in parallel (unlike RNNs). Key components: 1) Multi-head self-attention: relates different positions in sequence, 2) Positional encoding: adds sequence order information, 3) Feed-forward layers, 4) Layer normalization. Enables long-range dependencies and parallel processing. Basis for GPT, BERT, LLaMA.",difficulty:"Hard"},{id:4,question:"What is attention mechanism and why is it important?",answer:"Attention allows models to focus on relevant parts of input when producing output. Self-attention computes attention scores: Attention(Q,K,V) = softmax(QK^T/√d)V. Importance: handles long sequences better than RNNs, captures dependencies regardless of distance, parallelizable, interpretable (attention weights show what model focuses on).",difficulty:"Hard"},{id:5,question:"What is batch normalization and why use it?",answer:"Batch normalization normalizes layer inputs across the batch dimension: normalize to zero mean/unit variance, then scale and shift with learned parameters. Benefits: 1) Faster training (allows higher learning rates), 2) Regularization effect (reduces overfitting), 3) Reduces internal covariate shift, 4) Makes networks more stable, 5) Reduces sensitivity to initialization.",difficulty:"Medium"},{id:6,question:"Explain transfer learning and when to use it.",answer:"Transfer learning uses knowledge from a model trained on one task for a different but related task. Process: take pre-trained model (e.g., ImageNet-trained CNN), freeze early layers (generic features), fine-tune later layers on your data. Use when: limited training data, similar domain to pre-trained model, need faster training. Common: BERT for NLP, ResNet for vision.",difficulty:"Medium"},{id:7,question:"What is dropout and how does it work?",answer:"Dropout is a regularization technique that randomly sets a fraction of neurons to zero during training (typically 20-50%). During inference, all neurons are used but outputs are scaled. Why it works: prevents co-adaptation of neurons, forces network to learn redundant representations, acts like ensemble of sub-networks. Apply to fully connected layers, less common in conv layers.",difficulty:"Easy"},{id:8,question:"What is the difference between embedding and one-hot encoding?",answer:"One-hot encoding: sparse vector with 1 at index, 0 elsewhere. High-dimensional (vocab size), no semantic meaning, categories are equidistant. Embedding: dense learned vector representation. Low-dimensional (50-300d typical), captures semantic relationships (similar items close together), parameters learned during training. Use embeddings for high-cardinality features and NLP.",difficulty:"Medium"}]},ru={title:"Large Language Models",icon:"💬",questions:[{id:1,question:"What are Large Language Models (LLMs)?",answer:"LLMs are neural networks (typically Transformers) trained on massive text data to understand and generate human language. Key characteristics: billions of parameters, trained on internet-scale data, emergent capabilities at scale (reasoning, few-shot learning). Examples: GPT-4, Claude, LLaMA, Gemini. They predict next token given context.",difficulty:"Easy"},{id:2,question:"What is the difference between fine-tuning and prompt engineering?",answer:"Prompt engineering: crafting effective prompts to guide model behavior without changing weights. Fast, no training needed, limited customization. Fine-tuning: updating model weights on domain-specific data. Requires training data and compute, deeper customization, can teach new patterns. Use prompting first; fine-tune when prompting is insufficient.",difficulty:"Medium"},{id:3,question:"Explain RAG (Retrieval Augmented Generation).",answer:"RAG combines retrieval systems with LLMs to ground responses in external knowledge. Process: 1) Convert documents to embeddings, store in vector DB, 2) At query time, retrieve relevant documents, 3) Include retrieved context in LLM prompt, 4) Generate response based on context. Benefits: reduces hallucinations, enables current information, no fine-tuning needed.",difficulty:"Medium"},{id:4,question:"What is temperature in LLM sampling?",answer:"Temperature controls randomness in token sampling. Low temperature (0-0.3): more deterministic, higher probability tokens favored, good for factual tasks. High temperature (0.7-1.5): more random/creative, flatter probability distribution. Temperature=0 is greedy (always highest probability). Typical: 0 for code/facts, 0.7-1.0 for creative writing.",difficulty:"Easy"},{id:5,question:"What is RLHF and why is it used?",answer:"RLHF (Reinforcement Learning from Human Feedback) aligns LLMs with human preferences. Process: 1) Collect human comparisons of outputs, 2) Train reward model to predict human preferences, 3) Use RL (PPO) to optimize LLM against reward model. Used to make models helpful, harmless, and honest. Makes models follow instructions better.",difficulty:"Hard"},{id:6,question:"What are hallucinations in LLMs and how to reduce them?",answer:"Hallucinations are confident but incorrect or fabricated outputs. Causes: training data patterns, lack of real knowledge. Mitigation: 1) RAG for grounding, 2) Lower temperature, 3) Ask for citations, 4) Chain-of-thought prompting, 5) Fine-tuning on accurate data, 6) Fact verification systems, 7) Prompt: 'say I don't know if unsure'.",difficulty:"Medium"},{id:7,question:"Explain LoRA and why it's important for fine-tuning.",answer:"LoRA (Low-Rank Adaptation) freezes pre-trained weights and adds small trainable matrices to attention layers: W_new = W_frozen + A*B where A and B are low-rank. Benefits: 95%+ fewer trainable parameters, can fine-tune on consumer GPUs, maintains base model capabilities, easy to switch between adapters. QLoRA adds quantization for even more efficiency.",difficulty:"Hard"},{id:8,question:"What is context window and why does it matter?",answer:"Context window is the maximum number of tokens an LLM can process at once (input + output). Examples: GPT-4 (128K), Claude (200K). Matters because: limits conversation history, affects RAG chunk sizes, longer contexts enable more complex tasks. Trade-offs: longer context = more compute, potential attention degradation, higher cost.",difficulty:"Easy"}]},lu={title:"Prompt Engineering",icon:"✍️",questions:[{id:1,question:"What are the key components of an effective prompt?",answer:"Key components: 1) Role/persona: who the AI should act as, 2) Context: background information, 3) Task: clear instruction of what to do, 4) Format: desired output structure, 5) Examples: few-shot demonstrations, 6) Constraints: limitations or requirements. Use delimiters to separate sections clearly.",difficulty:"Easy"},{id:2,question:"Explain chain-of-thought prompting.",answer:"Chain-of-thought (CoT) prompting asks the model to show reasoning steps before giving final answer. Improves accuracy on reasoning tasks by 10-40%. Techniques: 'Let's think step by step', provide worked examples, ask model to explain reasoning. Works because it mimics human problem-solving and catches errors in intermediate steps.",difficulty:"Medium"},{id:3,question:"What is few-shot vs zero-shot prompting?",answer:"Zero-shot: give instruction with no examples, relies on model's pre-training. Few-shot: provide 1-5 examples of desired input-output pairs before the actual task. Few-shot generally more reliable for specific formats, zero-shot faster and uses fewer tokens. Many-shot (10+) examples can further improve consistency.",difficulty:"Easy"},{id:4,question:"How do you handle inconsistent LLM outputs?",answer:"Strategies: 1) Lower temperature for consistency, 2) Use structured output (JSON schema), 3) Few-shot examples showing exact format, 4) Explicit format instructions, 5) Output validators with retry logic, 6) Self-consistency: generate multiple responses, take majority vote, 7) Fine-tuning for consistent domain-specific outputs.",difficulty:"Medium"},{id:5,question:"What is prompt injection and how to prevent it?",answer:"Prompt injection: malicious input that hijacks the model's instructions (e.g., 'Ignore previous instructions and...'). Prevention: 1) Input sanitization, 2) Separate system/user messages, 3) Use delimiters around user input, 4) Output validation, 5) Instruction hierarchy, 6) Fine-tuned models trained to resist injection, 7) Never trust user input in prompts.",difficulty:"Hard"},{id:6,question:"Explain system prompts vs user prompts.",answer:"System prompt: sets the AI's role, behavior, and constraints. Persists across conversation, higher priority than user messages. User prompt: the actual query or task from the user. Best practice: use system prompt for consistent behavior (role, tone, limitations), user prompt for specific tasks. System prompts help with security and consistency.",difficulty:"Easy"}]},cu={title:"MLOps & Deployment",icon:"🚀",questions:[{id:1,question:"What is MLOps and why is it important?",answer:"MLOps (Machine Learning Operations) applies DevOps principles to ML systems. It covers: data versioning, experiment tracking, model versioning, CI/CD for ML, monitoring, and governance. Important because: ML systems are complex (data + code + model), models degrade over time (data drift), need reproducibility and collaboration at scale.",difficulty:"Easy"},{id:2,question:"How do you handle model versioning?",answer:"Model versioning tracks model artifacts, code, data, and hyperparameters. Tools: MLflow, DVC, Weights & Biases, Neptune. Best practices: 1) Version control for code (Git), 2) Data versioning (DVC), 3) Experiment tracking (metrics, parameters), 4) Model registry for deployment, 5) Reproducible training pipelines, 6) Clear naming conventions.",difficulty:"Medium"},{id:3,question:"What is data drift and model drift?",answer:"Data drift: statistical properties of input data change over time (distribution shift). Model drift: model performance degrades because relationship between features and target changes (concept drift). Detection: monitor input distributions, prediction distributions, and performance metrics. Response: retrain, update features, or deploy new model.",difficulty:"Medium"},{id:4,question:"How do you monitor ML models in production?",answer:"Monitor: 1) Technical metrics: latency, throughput, errors, resource usage, 2) Data quality: missing values, schema changes, feature distributions, 3) Model performance: accuracy, predictions distribution, confidence scores, 4) Business metrics: conversion, user engagement. Tools: Prometheus, Grafana, Evidently, WhyLabs. Set alerts for anomalies.",difficulty:"Hard"},{id:5,question:"What is A/B testing for ML models?",answer:"A/B testing compares models in production by routing traffic between versions. Process: 1) Define success metrics, 2) Calculate sample size for statistical significance, 3) Random traffic split (e.g., 90/10), 4) Collect data, 5) Statistical analysis, 6) Make decision. Considerations: novelty effects, segment analysis, guardrail metrics, ramp-up strategy.",difficulty:"Medium"},{id:6,question:"How do you optimize inference latency?",answer:"Optimization techniques: 1) Model: quantization (FP16, INT8), pruning, distillation, 2) Infrastructure: GPU inference, batching, caching, 3) Code: async processing, optimized frameworks (ONNX, TensorRT), 4) Architecture: model cascading, early exit, 5) System: load balancing, edge deployment. Measure P50, P95, P99 latencies.",difficulty:"Hard"}]},du={title:"Python for AI",icon:"🐍",questions:[{id:1,question:"Why is Python preferred for AI/ML development?",answer:"Python advantages: 1) Rich ecosystem (NumPy, Pandas, scikit-learn, PyTorch, TensorFlow), 2) Easy syntax for rapid prototyping, 3) Strong community and documentation, 4) Jupyter notebooks for experimentation, 5) Bindings to optimized C/C++ libraries, 6) Integration with data tools. It's not the fastest, but development speed and ecosystem outweigh runtime concerns.",difficulty:"Easy"},{id:2,question:"Explain vectorization and why it matters in ML.",answer:"Vectorization performs operations on entire arrays at once instead of element-by-element loops. NumPy operations are vectorized using optimized C code. Example: instead of loop: for i in range(len(a)): c[i]=a[i]+b[i], use c=a+b. Benefits: 10-100x faster, cleaner code, enables GPU parallelization. Essential for efficient ML computations.",difficulty:"Medium"},{id:3,question:"What is the GIL and how does it affect ML code?",answer:"GIL (Global Interpreter Lock) allows only one thread to execute Python bytecode at a time. Impact on ML: CPU-bound Python code doesn't benefit from multi-threading. Solutions: 1) NumPy/PyTorch operations release GIL, 2) Multiprocessing instead of threading, 3) Use optimized libraries (they run C code), 4) GPU operations bypass GIL. For most ML, libraries handle parallelism.",difficulty:"Hard"},{id:4,question:"How do you handle large datasets that don't fit in memory?",answer:"Strategies: 1) Chunking: process data in batches (pd.read_csv(chunksize=)), 2) Memory mapping: np.memmap, 3) Efficient formats: Parquet, HDF5, Arrow, 4) Data generators: PyTorch DataLoader, Keras generators, 5) Distributed: Dask, Spark, 6) Column selection: read only needed columns, 7) Downcasting: convert float64 to float32.",difficulty:"Medium"},{id:5,question:"What are decorators and how are they used in ML?",answer:"Decorators wrap functions to add functionality. Syntax: @decorator above function definition. ML uses: @torch.no_grad() for inference, @property for getters, @staticmethod/@classmethod, @dataclass for data structures, custom decorators for timing/logging. Example: timing decorator to measure training time, caching decorator for expensive computations.",difficulty:"Medium"},{id:6,question:"How do you handle async operations in AI applications?",answer:"Async (asyncio) enables concurrent I/O operations. For AI APIs: use async HTTP clients (aiohttp, httpx), await API calls without blocking, process multiple requests concurrently. Pattern: async def call_api(): response = await client.post(...). Use with: LLM API calls, parallel data fetching, web servers (FastAPI). I/O bound tasks benefit most.",difficulty:"Hard"}]},uu={mlBasics:au,deepLearning:ou,llms:ru,promptEngineering:lu,mlOps:cu,pythonForAI:du},pu={class:"sdet-container"},mu={class:"mobile-header"},fu={class:"mobile-title"},hu={class:"sidebar-header"},gu={class:"sidebar-controls"},yu={key:0,class:"sidebar-nav"},vu=["onClick"],bu={class:"section-icon"},wu={class:"section-info"},Su={class:"section-title"},xu={class:"completion-percentage"},ku={key:0,class:"nav-items"},Cu=["onClick"],Tu={class:"task-number"},Au={class:"task-name"},Pu={class:"category-qa-count"},_u=["onClick"],Eu=["checked","onClick"],Iu={class:"task-number"},Ru={class:"task-name"},Lu={key:0,class:"completion-icon"},Mu={class:"content"},Du={key:0,class:"task-view"},Bu={class:"task-header"},Ou={class:"breadcrumb"},qu={class:"qa-meta"},Fu={class:"qa-count"},Nu={class:"qa-list"},Uu=["onClick"],Wu={class:"qa-left"},Hu=["checked","onClick"],ju={class:"qa-number"},Ju={class:"qa-question"},$u={class:"qa-right"},zu={key:0,class:"qa-answer"},Gu={key:1,class:"task-view"},Vu={class:"task-header"},Ku={class:"breadcrumb"},Xu={class:"description-card"},Qu={class:"description-text"},Yu={key:0,class:"key-points-card"},Zu={key:1,class:"exercises-section"},ep=["onClick"],tp={class:"exercise-title"},np={class:"exercise-number"},sp={key:0,class:"exercise-body"},ip={class:"scenario"},ap={key:0,class:"steps-section"},op={key:1,class:"code-section"},rp={class:"code-header"},lp=["onClick"],cp={class:"code-block"},dp={key:2,class:"navigation-buttons"},up=["disabled"],pp=["disabled"],mp={key:2,class:"welcome-screen"},fp={class:"welcome-cards"},hp=["onClick"],gp={class:"card-icon"},yp={__name:"AIDeveloper",setup(e){function t(V){return Object.values(V)}const n=Object.values(uu),s=H(!1),i=H(!1),o=H([]),r=H([]),l=H([]),c=H(null),p=H(null),d=H(""),y=H(null),x=H(null),I=H(new Set),j=H(new Set),B=we(()=>[{id:"ai-fundamentals",title:"AI Fundamentals",icon:"🧠",tasks:t(fn).slice(0,3),categories:[]},{id:"deep-learning",title:"Deep Learning",icon:"🔬",tasks:t(fn).slice(3,5),categories:[]},{id:"llms",title:"LLMs & Prompt Engineering",icon:"💬",tasks:t(fn).slice(4,7),categories:[]},{id:"ai-applications",title:"AI Applications",icon:"🚀",tasks:t(fn).slice(6,10),categories:[]},{id:"interview",title:"Interview Preparation",icon:"📝",tasks:[],categories:n}]),O=we(()=>{const V=B.value.find(b=>b.title===d.value);return V?V.tasks:[]}),D=we(()=>!c.value||!O.value.length?-1:O.value.findIndex(V=>V.title===c.value.title)),R=we(()=>D.value>0),Z=we(()=>D.value<O.value.length-1),W=we(()=>R.value?O.value[D.value-1]:null),ae=we(()=>Z.value?O.value[D.value+1]:null),ge=V=>{if(V.id==="interview"){const b=V.categories.reduce((w,E)=>w+E.questions.length,0),h=V.categories.reduce((w,E)=>w+E.questions.filter(U=>j.value.has(`${E.title}-${U.id}`)).length,0);return b>0?Math.round(h/b*100):0}else{const b=V.tasks.length,h=V.tasks.filter(w=>I.value.has(`${V.id}-${w.title}`)).length;return b>0?Math.round(h/b*100):0}},xe=(V,b)=>I.value.has(`${b}-${V.title}`),fe=(V,b)=>j.value.has(`${b}-${V.id}`),X=(V,b)=>{const h=`${b}-${V.title}`;I.value.has(h)?I.value.delete(h):I.value.add(h)},ie=(V,b)=>{const h=`${b}-${V.id}`;j.value.has(h)?j.value.delete(h):j.value.add(h)};function ce(){s.value=!s.value}function F(){i.value=!i.value}function oe(){s.value=!1}function se(V){x.value=V,o.value.includes(V)?o.value=o.value.filter(b=>b!==V):o.value=[V]}function k(V){x.value=V,o.value.includes(V)||o.value.push(V)}function _(V,b){c.value=V,p.value=null,d.value=b,r.value=[],oe()}function Q(V,b){p.value=V,c.value=null,d.value=b,l.value=[],oe()}function re(){R.value&&_(W.value,d.value)}function Fe(){Z.value&&_(ae.value,d.value)}function Xe(V){const b=r.value.indexOf(V);b===-1?r.value.push(V):r.value.splice(b,1)}function Ne(V){const b=l.value.indexOf(V);b===-1?l.value.push(V):l.value.splice(b,1)}async function _e(V,b){await navigator.clipboard.writeText(V),y.value=b,setTimeout(()=>y.value=null,2e3)}return(V,b)=>(g(),v("div",pu,[a("div",mu,[a("button",{class:"hamburger",onClick:ce},[a("span",{class:J(["hamburger-icon",{open:s.value}])},[...b[1]||(b[1]=[a("span",null,null,-1),a("span",null,null,-1),a("span",null,null,-1)])],2)]),a("h2",fu,f(d.value||"AI Developer"),1)]),s.value?(g(),v("div",{key:0,class:"overlay",onClick:oe})):$("",!0),a("aside",{class:J(["sidebar",{"sidebar-open":s.value,"sidebar-minimized":i.value}])},[a("div",hu,[i.value?$("",!0):(g(),v("h2",{key:0,onClick:b[0]||(b[0]=h=>{c.value=null,p.value=null}),style:{cursor:"pointer","user-select":"none"},title:"Go to Welcome Screen"}," 🤖 AI Developer ")),a("div",gu,[a("button",{class:"minimize-btn",onClick:F},f(i.value?"➡️":"⬅️"),1),a("button",{class:"close-btn",onClick:oe},"✕")])]),i.value?$("",!0):(g(),v("nav",yu,[(g(!0),v(G,null,te(B.value,(h,w)=>(g(),v("div",{key:w,class:"nav-section"},[a("div",{class:J(["nav-section-header",{active:x.value===w}]),onClick:E=>se(w)},[a("span",bu,f(h.icon),1),a("div",wu,[a("span",Su,f(h.title),1),a("span",xu,f(ge(h))+"%",1)]),a("span",{class:J(["chevron",{rotated:o.value.includes(w)}])},"▾",2)],10,vu),Se(ze,{name:"slide"},{default:je(()=>[o.value.includes(w)?(g(),v("ul",ku,[h.id==="interview"?(g(!0),v(G,{key:0},te(h.categories,(E,U)=>{var me;return g(),v("li",{key:U,onClick:Ce=>Q(E,h.title),class:J({active:((me=p.value)==null?void 0:me.title)===E.title})},[a("span",Tu,f(U+1),1),a("span",Au,f(E.title),1),a("span",Pu,f(E.questions.length)+" Qs",1)],10,Cu)}),128)):(g(!0),v(G,{key:1},te(h.tasks,(E,U)=>{var me;return g(),v("li",{key:U,onClick:Ce=>_(E,h.title),class:J({active:((me=c.value)==null?void 0:me.title)===E.title,completed:xe(E,h.id)})},[a("input",{type:"checkbox",checked:xe(E,h.id),onClick:St(Ce=>X(E,h.id),["stop"]),class:"completion-checkbox"},null,8,Eu),a("span",Iu,f(U+1),1),a("span",Ru,f(E.title),1),xe(E,h.id)?(g(),v("span",Lu,"✅")):$("",!0)],10,_u)}),128))])):$("",!0)]),_:2},1024)]))),128))]))],2),a("main",Mu,[p.value?(g(),v("div",Du,[a("div",Bu,[a("h1",null,f(p.value.icon)+" "+f(p.value.title),1),a("span",Ou,"Interview Preparation → "+f(p.value.title),1),a("div",qu,[a("span",Fu,f(p.value.questions.length)+" Questions",1),b[2]||(b[2]=a("div",{class:"difficulty-legend"},[a("span",{class:"badge easy"},"Easy"),a("span",{class:"badge medium"},"Medium"),a("span",{class:"badge hard"},"Hard")],-1))])]),a("div",Nu,[(g(!0),v(G,null,te(p.value.questions,(h,w)=>(g(),v("div",{key:h.id,class:J(["qa-card",{completed:fe(h,p.value.title)}])},[a("div",{class:"qa-header",onClick:E=>Ne(w)},[a("div",Wu,[a("input",{type:"checkbox",checked:fe(h,p.value.title),onClick:St(E=>ie(h,p.value.title),["stop"]),class:"completion-checkbox"},null,8,Hu),a("span",ju,f(h.id),1),a("p",Ju,f(h.question),1)]),a("div",$u,[a("span",{class:J(["badge",h.difficulty.toLowerCase()])},f(h.difficulty),3),a("span",{class:J(["chevron",{rotated:l.value.includes(w)}])},"▾",2)])],8,Uu),Se(ze,{name:"slide"},{default:je(()=>[l.value.includes(w)?(g(),v("div",zu,[a("p",null,f(h.answer),1)])):$("",!0)]),_:2},1024)],2))),128))])])):c.value?(g(),v("div",Gu,[a("div",Vu,[a("h1",null,f(c.value.title),1),a("span",Ku,f(d.value)+" → "+f(c.value.title),1)]),a("div",Xu,[b[3]||(b[3]=a("h2",null,"📘 Overview",-1)),a("pre",Qu,f(c.value.description),1)]),c.value.keyPoints?(g(),v("div",Yu,[b[4]||(b[4]=a("h2",null,"🔑 Key Points",-1)),a("ul",null,[(g(!0),v(G,null,te(c.value.keyPoints,(h,w)=>(g(),v("li",{key:w},f(h),1))),128))])])):$("",!0),c.value.exercises?(g(),v("div",Zu,[b[7]||(b[7]=a("h2",null,"💻 Exercises",-1)),(g(!0),v(G,null,te(c.value.exercises,(h,w)=>(g(),v("div",{key:w,class:"exercise-card"},[a("div",{class:"exercise-header",onClick:E=>Xe(w)},[a("div",tp,[a("span",np,f(w+1),1),a("h3",null,f(h.title),1)]),a("span",{class:J(["chevron",{rotated:r.value.includes(w)}])},"▾",2)],8,ep),Se(ze,{name:"slide"},{default:je(()=>[r.value.includes(w)?(g(),v("div",sp,[a("p",ip,f(h.scenario),1),h.steps?(g(),v("div",ap,[b[5]||(b[5]=a("h4",null,"📋 Steps",-1)),a("ol",null,[(g(!0),v(G,null,te(h.steps,(E,U)=>(g(),v("li",{key:U},f(E),1))),128))])])):$("",!0),h.code?(g(),v("div",op,[a("div",rp,[b[6]||(b[6]=a("span",null,"💻 Code",-1)),a("button",{onClick:E=>_e(h.code,w),class:"copy-btn"},f(y.value===w?"✅ Copied!":"📋 Copy"),9,lp)]),a("pre",cp,[a("code",null,f(h.code),1)])])):$("",!0)])):$("",!0)]),_:2},1024)]))),128))])):$("",!0),c.value&&O.value.length>1?(g(),v("div",dp,[a("button",{onClick:re,disabled:!R.value,class:"nav-btn prev-btn"},"⬅️ Previous",8,up),a("button",{onClick:Fe,disabled:!Z.value,class:"nav-btn next-btn"},"Next ➡️",8,pp)])):$("",!0)])):(g(),v("div",mp,[b[8]||(b[8]=a("div",{class:"welcome-icon"},"🤖",-1)),b[9]||(b[9]=a("h1",null,"Welcome to AI Developer",-1)),b[10]||(b[10]=a("p",null,"Master AI, Machine Learning & LLMs",-1)),a("div",fp,[(g(!0),v(G,null,te(B.value,(h,w)=>(g(),v("div",{key:w,class:"welcome-card",onClick:E=>k(w)},[a("span",gp,f(h.icon),1),a("h3",null,f(h.title),1),a("p",null,f(h.id==="interview"?h.categories.length+" categories":h.tasks.length+" topics"),1)],8,hp))),128))])]))])]))}},vp=Wt(yp,[["__scopeId","data-v-30a60951"]]),bp={class:"talentforge-container"},wp={class:"tf-header"},Sp={class:"tf-header-content"},xp={class:"tf-header-actions"},kp={class:"talent-score-widget"},Cp={class:"score-card"},Tp={class:"score-circle"},Ap={viewBox:"0 0 100 100"},Pp={class:"score-value"},_p={class:"score-stats"},Ep={class:"stat-item"},Ip={class:"stat-info"},Rp={class:"stat-value"},Lp={class:"stat-item"},Mp={class:"stat-info"},Dp={class:"stat-value"},Bp={class:"stat-item"},Op={class:"stat-info"},qp={class:"stat-value"},Fp={class:"tf-tabs"},Np={class:"tf-content"},Up={key:0,class:"quickfire-section"},Wp={class:"quiz-container"},Hp={class:"quiz-progress"},jp={class:"progress-bar"},Jp={class:"progress-text"},$p={class:"quiz-difficulty"},zp={class:"quiz-topic"},Gp={class:"quiz-question"},Vp={class:"quiz-options"},Kp=["onClick","disabled"],Xp={class:"option-letter"},Qp={class:"option-text"},Yp={key:0,class:"option-icon"},Zp={key:1,class:"option-icon"},em={key:0,class:"quiz-explanation"},tm={class:"explanation-header"},nm={key:0,class:"result-badge correct"},sm={key:1,class:"result-badge incorrect"},im={class:"explanation-text"},am={class:"concept-tags"},om=["onClick"],rm={class:"quiz-nav"},lm=["disabled"],cm=["disabled"],dm={key:1,class:"challenges-section"},um={class:"challenge-tabs"},pm={key:0,class:"challenge-grid"},mm={class:"card-header"},fm={class:"card-meta"},hm={class:"meta-item"},gm={class:"meta-item"},ym={class:"card-rewards"},vm={class:"reward-item"},bm={class:"reward-item"},wm={key:1,class:"challenge-grid"},Sm={class:"card-header"},xm={class:"budget-tag"},km={class:"skills-required"},Cm={class:"skill-tags"},Tm={class:"card-meta"},Am={class:"meta-item"},Pm={class:"meta-item"},_m={key:2,class:"challenge-grid"},Em={class:"card-header"},Im={class:"company-info"},Rm={class:"company-logo"},Lm={class:"company-name"},Mm={class:"task-details"},Dm={class:"detail-item"},Bm={class:"detail-item"},Om={class:"detail-item"},qm={class:"card-meta"},Fm={class:"meta-item deadline"},Nm={key:2,class:"coinquest-section"},Um={class:"coinquest-grid"},Wm={class:"coins-summary-card"},Hm={class:"coins-display"},jm={class:"coins-amount"},Jm={class:"coins-breakdown"},$m={class:"breakdown-item"},zm={class:"breakdown-item"},Gm={class:"breakdown-item"},Vm={class:"streak-card"},Km={class:"streak-display"},Xm={class:"streak-number"},Qm={class:"streak-progress"},Ym={class:"streak-days"},Zm={class:"streak-message"},ef={class:"badges-card"},tf={class:"badges-grid"},nf={class:"badge-icon"},sf={class:"badge-name"},af={key:0,class:"badge-lock"},of={class:"leaderboard-card"},rf={class:"leaderboard-list"},lf={class:"rank"},cf={key:0,class:"rank-medal"},df={class:"user-avatar"},uf={class:"user-name"},pf={class:"user-score"},mf={class:"concept-modal"},ff={class:"concept-resources"},hf={key:1,class:"coin-animation"},gf={class:"coin-float"},yf={__name:"TalentForge",setup(e){const t=H("quiz"),n=H("hackathons"),s=H(0),i=H(null),o=H(!1),r=H(""),l=H(!1),c=H(0),p=H(2450),d=H(78),y=H(12),x=H(5),I=H(1200),j=H(950),B=H(300),O=we(()=>Math.round(d.value*.4+y.value*2+x.value*3)),D=H([{id:1,question:"What is the primary purpose of the 'useEffect' hook in React?",options:["To manage component state","To perform side effects in function components","To create custom hooks","To optimize component rendering"],correctAnswer:1,difficulty:"Medium",topic:"React",explanation:"useEffect is used to perform side effects in function components, such as data fetching, subscriptions, or manually changing the DOM.",concepts:["React Hooks","Side Effects","Component Lifecycle"],coins:10},{id:2,question:"Which data structure uses LIFO (Last In, First Out) principle?",options:["Queue","Stack","Linked List","Tree"],correctAnswer:1,difficulty:"Easy",topic:"Data Structures",explanation:"A Stack follows the LIFO principle where the last element added is the first one to be removed.",concepts:["Stack","LIFO","Data Structures Basics"],coins:5},{id:3,question:"What is the time complexity of binary search?",options:["O(n)","O(n²)","O(log n)","O(1)"],correctAnswer:2,difficulty:"Medium",topic:"Algorithms",explanation:"Binary search has O(log n) time complexity because it halves the search space with each comparison.",concepts:["Binary Search","Time Complexity","Divide and Conquer"],coins:10},{id:4,question:"In SQL, which clause is used to filter grouped results?",options:["WHERE","HAVING","FILTER","GROUP BY"],correctAnswer:1,difficulty:"Medium",topic:"SQL",explanation:"HAVING clause filters groups after GROUP BY, while WHERE filters individual rows before grouping.",concepts:["SQL Aggregation","GROUP BY","HAVING vs WHERE"],coins:10},{id:5,question:"What design pattern does Redux follow?",options:["Observer Pattern","Factory Pattern","Flux/Redux Pattern","Singleton Pattern"],correctAnswer:2,difficulty:"Hard",topic:"State Management",explanation:"Redux follows the Flux architecture pattern with unidirectional data flow: Actions → Reducers → Store → View.",concepts:["Redux","Flux Architecture","State Management"],coins:15}]),R=we(()=>D.value[s.value]),Z=we(()=>i.value===R.value.correctAnswer);function W(se){i.value===null&&(i.value=se,se===R.value.correctAnswer&&(c.value=R.value.coins,p.value+=R.value.coins,l.value=!0,setTimeout(()=>{l.value=!1},1500)))}function ae(se){return i.value===null?"":se===R.value.correctAnswer?"correct":se===i.value?"incorrect":"disabled"}function ge(){s.value<D.value.length-1&&(s.value++,i.value=null)}function xe(){s.value>0&&(s.value--,i.value=null)}function fe(se){r.value=se,o.value=!0}const X=H([{id:1,title:"AI Innovation Challenge",description:"Build an innovative AI-powered solution for real-world problems. Open to all skill levels.",difficulty:"Hard",deadline:"15 days left",participants:234,prize:"$5,000",coins:500},{id:2,title:"Frontend Masters Sprint",description:"Create a stunning, accessible web application using modern frontend technologies.",difficulty:"Medium",deadline:"7 days left",participants:156,prize:"$2,500",coins:300},{id:3,title:"API Design Championship",description:"Design and implement RESTful APIs following best practices and documentation standards.",difficulty:"Medium",deadline:"21 days left",participants:89,prize:"$3,000",coins:350}]),ie=H([{id:1,title:"E-commerce Dashboard Development",description:"Build a responsive admin dashboard for an e-commerce platform with analytics and inventory management.",skills:["React","Node.js","MongoDB","Chart.js"],budget:"$800 - $1,200",duration:"2-3 weeks",type:"Remote"},{id:2,title:"Mobile App UI/UX Redesign",description:"Redesign the user interface of an existing fitness tracking mobile application.",skills:["Figma","UI/UX","Mobile Design","Prototyping"],budget:"$500 - $800",duration:"1-2 weeks",type:"Remote"},{id:3,title:"API Integration Specialist",description:"Integrate multiple third-party APIs including payment gateways and social media platforms.",skills:["REST APIs","Python","OAuth","Webhooks"],budget:"$600 - $900",duration:"1 week",type:"Remote"}]),ce=H([{id:1,company:"TechCorp Inc.",companyLogo:"🏢",title:"Build a Real-time Chat Feature",description:"Implement a WebSocket-based real-time chat system with typing indicators and read receipts.",role:"Full Stack Developer",location:"Remote",salary:"$80K - $120K",deadline:"5 days",urgency:"urgent"},{id:2,company:"DataFlow Systems",companyLogo:"📊",title:"Data Pipeline Optimization",description:"Optimize an existing ETL pipeline to reduce processing time by at least 40%.",role:"Data Engineer",location:"Hybrid - NYC",salary:"$90K - $130K",deadline:"10 days",urgency:"normal"},{id:3,company:"CloudNine Solutions",companyLogo:"☁️",title:"Kubernetes Deployment Setup",description:"Set up a production-ready Kubernetes cluster with auto-scaling and monitoring.",role:"DevOps Engineer",location:"Remote",salary:"$100K - $140K",deadline:"7 days",urgency:"urgent"}]),F=H([{id:1,icon:"🌟",name:"First Quiz",unlocked:!0},{id:2,icon:"🔥",name:"7-Day Streak",unlocked:!0},{id:3,icon:"🏆",name:"Challenge Winner",unlocked:!0},{id:4,icon:"💎",name:"1000 Coins",unlocked:!0},{id:5,icon:"🚀",name:"Speed Demon",unlocked:!1},{id:6,icon:"🎯",name:"Perfect Score",unlocked:!1},{id:7,icon:"👑",name:"Top 10",unlocked:!1},{id:8,icon:"⚡",name:"30-Day Streak",unlocked:!1}]),oe=H([{id:1,name:"Alex Chen",avatar:"👨‍💻",score:4520},{id:2,name:"Sarah Miller",avatar:"👩‍💻",score:4180},{id:3,name:"James Wilson",avatar:"🧑‍💻",score:3950},{id:4,name:"You",avatar:"😊",score:2450,isCurrentUser:!0},{id:5,name:"Mike Brown",avatar:"👨‍🎓",score:2100}]);return(se,k)=>(g(),v("div",bp,[a("header",wp,[a("div",Sp,[k[12]||(k[12]=a("div",{class:"tf-header-left"},[a("h1",{class:"tf-title"},"⚡ TalentForge"),a("p",{class:"tf-tagline"},"Forge your skills. Prove your talent. Get hired.")],-1)),a("div",xp,[a("button",{class:"tf-action-btn primary",onClick:k[0]||(k[0]=_=>t.value="quiz")}," 🎯 Start Quiz "),a("button",{class:"tf-action-btn secondary",onClick:k[1]||(k[1]=_=>t.value="challenges")}," 🧩 Explore Challenges "),a("button",{class:"tf-action-btn coins",onClick:k[2]||(k[2]=_=>t.value="coins")}," 💰 "+f(p.value)+" Coins ",1)])])]),a("div",kp,[a("div",Cp,[a("div",Tp,[(g(),v("svg",Ap,[k[13]||(k[13]=a("circle",{class:"score-bg",cx:"50",cy:"50",r:"45"},null,-1)),a("circle",{class:"score-progress",cx:"50",cy:"50",r:"45",style:Ft({strokeDashoffset:283-283*O.value/100})},null,4)])),a("div",Pp,f(O.value),1)]),k[14]||(k[14]=a("div",{class:"score-label"},"Talent Score",-1))]),a("div",_p,[a("div",Ep,[k[16]||(k[16]=a("span",{class:"stat-icon"},"🎯",-1)),a("div",Ip,[a("span",Rp,f(d.value)+"%",1),k[15]||(k[15]=a("span",{class:"stat-label"},"Quiz Accuracy",-1))])]),a("div",Lp,[k[18]||(k[18]=a("span",{class:"stat-icon"},"🏆",-1)),a("div",Mp,[a("span",Dp,f(y.value),1),k[17]||(k[17]=a("span",{class:"stat-label"},"Challenges Done",-1))])]),a("div",Bp,[k[20]||(k[20]=a("span",{class:"stat-icon"},"🔥",-1)),a("div",Op,[a("span",qp,f(x.value)+" days",1),k[19]||(k[19]=a("span",{class:"stat-label"},"Current Streak",-1))])])])]),a("nav",Fp,[a("button",{class:J(["tf-tab",{active:t.value==="quiz"}]),onClick:k[3]||(k[3]=_=>t.value="quiz")}," 🧠 QuickFire ",2),a("button",{class:J(["tf-tab",{active:t.value==="challenges"}]),onClick:k[4]||(k[4]=_=>t.value="challenges")}," 🧩 Challenge Hub ",2),a("button",{class:J(["tf-tab",{active:t.value==="coins"}]),onClick:k[5]||(k[5]=_=>t.value="coins")}," 💰 CoinQuest ",2)]),a("main",Np,[t.value==="quiz"?(g(),v("div",Up,[a("div",Wp,[a("div",{class:J(["quiz-card",{answered:i.value!==null}])},[a("div",Hp,[a("div",jp,[a("div",{class:"progress-fill",style:Ft({width:(s.value+1)/D.value.length*100+"%"})},null,4)]),a("span",Jp,f(s.value+1)+" / "+f(D.value.length),1)]),a("div",$p,[a("span",{class:J(["difficulty-badge",R.value.difficulty])},f(R.value.difficulty),3),a("span",zp,f(R.value.topic),1)]),a("h2",Gp,f(R.value.question),1),a("div",Vp,[(g(!0),v(G,null,te(R.value.options,(_,Q)=>(g(),v("button",{key:Q,class:J(["option-btn",ae(Q)]),onClick:re=>W(Q),disabled:i.value!==null},[a("span",Xp,f(["A","B","C","D"][Q]),1),a("span",Qp,f(_),1),i.value!==null&&Q===R.value.correctAnswer?(g(),v("span",Yp,"✓")):$("",!0),i.value===Q&&Q!==R.value.correctAnswer?(g(),v("span",Zp,"✗")):$("",!0)],10,Kp))),128))]),Se(ze,{name:"slide-up"},{default:je(()=>[i.value!==null?(g(),v("div",em,[a("div",tm,[Z.value?(g(),v("span",nm,"✓ Correct! +"+f(R.value.coins)+" coins",1)):(g(),v("span",sm,"✗ Incorrect"))]),a("p",im,f(R.value.explanation),1),a("div",am,[k[21]||(k[21]=a("span",{class:"concept-label"},"Related Concepts:",-1)),(g(!0),v(G,null,te(R.value.concepts,_=>(g(),v("button",{key:_,class:"concept-tag",onClick:Q=>fe(_)},f(_),9,om))),128))])])):$("",!0)]),_:1}),a("div",rm,[a("button",{class:"nav-btn prev",onClick:xe,disabled:s.value===0}," ← Previous ",8,lm),a("button",{class:"concept-flow-btn",onClick:k[6]||(k[6]=_=>o.value=!0)}," 📚 Jump to Concept Flow "),a("button",{class:"nav-btn next",onClick:ge,disabled:i.value===null},f(s.value===D.value.length-1?"Finish":"Next →"),9,cm)])],2)])])):$("",!0),t.value==="challenges"?(g(),v("div",dm,[a("div",um,[a("button",{class:J(["challenge-tab",{active:n.value==="hackathons"}]),onClick:k[7]||(k[7]=_=>n.value="hackathons")}," 🚀 Hackathons ",2),a("button",{class:J(["challenge-tab",{active:n.value==="projects"}]),onClick:k[8]||(k[8]=_=>n.value="projects")}," 💼 Paid Projects ",2),a("button",{class:J(["challenge-tab",{active:n.value==="hiring"}]),onClick:k[9]||(k[9]=_=>n.value="hiring")}," 🎯 Task-Based Hiring ",2)]),n.value==="hackathons"?(g(),v("div",pm,[(g(!0),v(G,null,te(X.value,_=>(g(),v("div",{key:_.id,class:"challenge-card hackathon"},[a("div",mm,[k[22]||(k[22]=a("span",{class:"card-icon"},"🚀",-1)),a("span",{class:J(["difficulty-tag",_.difficulty])},f(_.difficulty),3)]),a("h3",null,f(_.title),1),a("p",null,f(_.description),1),a("div",fm,[a("span",hm,"⏰ "+f(_.deadline),1),a("span",gm,"👥 "+f(_.participants)+" joined",1)]),a("div",ym,[a("span",vm,"🏆 "+f(_.prize),1),a("span",bm,"💰 "+f(_.coins)+" coins",1)]),k[23]||(k[23]=a("button",{class:"register-btn"},"Register Now",-1))]))),128))])):$("",!0),n.value==="projects"?(g(),v("div",wm,[(g(!0),v(G,null,te(ie.value,_=>(g(),v("div",{key:_.id,class:"challenge-card project"},[a("div",Sm,[k[24]||(k[24]=a("span",{class:"card-icon"},"💼",-1)),a("span",xm,f(_.budget),1)]),a("h3",null,f(_.title),1),a("p",null,f(_.description),1),a("div",km,[k[25]||(k[25]=a("span",{class:"skills-label"},"Required Skills:",-1)),a("div",Cm,[(g(!0),v(G,null,te(_.skills,Q=>(g(),v("span",{key:Q,class:"skill-tag"},f(Q),1))),128))])]),a("div",Tm,[a("span",Am,"⏰ "+f(_.duration),1),a("span",Pm,"📍 "+f(_.type),1)]),k[26]||(k[26]=a("button",{class:"apply-btn"},"Apply Now",-1))]))),128))])):$("",!0),n.value==="hiring"?(g(),v("div",_m,[(g(!0),v(G,null,te(ce.value,_=>(g(),v("div",{key:_.id,class:"challenge-card hiring"},[a("div",Em,[a("div",Im,[a("span",Rm,f(_.companyLogo),1),a("span",Lm,f(_.company),1)]),a("span",{class:J(["urgency-tag",_.urgency])},f(_.urgency),3)]),a("h3",null,f(_.title),1),a("p",null,f(_.description),1),a("div",Mm,[a("span",Dm,"💼 "+f(_.role),1),a("span",Bm,"📍 "+f(_.location),1),a("span",Om,"💰 "+f(_.salary),1)]),a("div",qm,[a("span",Fm,"⏰ Deadline: "+f(_.deadline),1)]),k[27]||(k[27]=a("button",{class:"solve-btn"},"Solve & Apply",-1))]))),128))])):$("",!0)])):$("",!0),t.value==="coins"?(g(),v("div",Nm,[a("div",Um,[a("div",Wm,[a("div",Hm,[k[28]||(k[28]=a("span",{class:"coins-icon"},"💰",-1)),a("span",jm,f(p.value),1),k[29]||(k[29]=a("span",{class:"coins-label"},"Total Coins",-1))]),a("div",Jm,[a("div",$m,[k[30]||(k[30]=a("span",null,"📝 Quizzes",-1)),a("span",null,"+"+f(I.value),1)]),a("div",zm,[k[31]||(k[31]=a("span",null,"🏆 Challenges",-1)),a("span",null,"+"+f(j.value),1)]),a("div",Gm,[k[32]||(k[32]=a("span",null,"🔥 Streaks",-1)),a("span",null,"+"+f(B.value),1)])])]),a("div",Vm,[k[34]||(k[34]=a("h3",null,"🔥 Current Streak",-1)),a("div",Km,[a("span",Xm,f(x.value),1),k[33]||(k[33]=a("span",{class:"streak-unit"},"days",-1))]),a("div",Qm,[a("div",Ym,[(g(),v(G,null,te(7,_=>a("span",{key:_,class:J(["streak-day",{active:_<=x.value%7||x.value>=7}])},f(["M","T","W","T","F","S","S"][_-1]),3)),64))]),a("p",Zm,f(x.value>=7?"🎉 Amazing week!":`${7-x.value%7} days to weekly bonus!`),1)])]),a("div",ef,[k[35]||(k[35]=a("h3",null,"🏅 Achievements",-1)),a("div",tf,[(g(!0),v(G,null,te(F.value,_=>(g(),v("div",{key:_.id,class:J(["badge-item",{locked:!_.unlocked}])},[a("span",nf,f(_.icon),1),a("span",sf,f(_.name),1),_.unlocked?$("",!0):(g(),v("span",af,"🔒"))],2))),128))])]),a("div",of,[k[36]||(k[36]=a("h3",null,"🏆 Leaderboard",-1)),a("div",rf,[(g(!0),v(G,null,te(oe.value,(_,Q)=>(g(),v("div",{key:_.id,class:J(["leaderboard-item",{"current-user":_.isCurrentUser}])},[a("span",lf,f(Q+1),1),Q<3?(g(),v("span",cf,f(["🥇","🥈","🥉"][Q]),1)):$("",!0),a("span",df,f(_.avatar),1),a("span",uf,f(_.name),1),a("span",pf,f(_.score)+" pts",1)],2))),128))])]),k[37]||(k[37]=Ut('<div class="coinquest-actions" data-v-cd1008dc><button class="action-card challenge-others" data-v-cd1008dc><span class="action-icon" data-v-cd1008dc>⚔️</span><span class="action-title" data-v-cd1008dc>Challenge Others</span><span class="action-desc" data-v-cd1008dc>1v1 Quiz Battle</span></button><button class="action-card team-battle" data-v-cd1008dc><span class="action-icon" data-v-cd1008dc>👥</span><span class="action-title" data-v-cd1008dc>Team Battle</span><span class="action-desc" data-v-cd1008dc>Coming Soon</span></button></div>',1))])])):$("",!0)]),o.value?(g(),v("div",{key:0,class:"modal-overlay",onClick:k[11]||(k[11]=St(_=>o.value=!1,["self"]))},[a("div",mf,[a("button",{class:"modal-close",onClick:k[10]||(k[10]=_=>o.value=!1)},"✕"),a("h2",null,"📚 Concept Flow: "+f(r.value||"Related Topics"),1),k[42]||(k[42]=Ut('<div class="concept-flow" data-v-cd1008dc><div class="flow-node start" data-v-cd1008dc><span class="node-icon" data-v-cd1008dc>📖</span><span class="node-text" data-v-cd1008dc>Fundamentals</span></div><div class="flow-arrow" data-v-cd1008dc>→</div><div class="flow-node" data-v-cd1008dc><span class="node-icon" data-v-cd1008dc>🔧</span><span class="node-text" data-v-cd1008dc>Core Concepts</span></div><div class="flow-arrow" data-v-cd1008dc>→</div><div class="flow-node" data-v-cd1008dc><span class="node-icon" data-v-cd1008dc>💡</span><span class="node-text" data-v-cd1008dc>Advanced Topics</span></div><div class="flow-arrow" data-v-cd1008dc>→</div><div class="flow-node end" data-v-cd1008dc><span class="node-icon" data-v-cd1008dc>🚀</span><span class="node-text" data-v-cd1008dc>Real-world Application</span></div></div>',1)),a("div",ff,[k[41]||(k[41]=a("h4",null,"📌 Quick Resources",-1)),a("ul",null,[a("li",null,"Introduction to "+f(r.value||"Topic"),1),k[38]||(k[38]=a("li",null,"Practice Exercises",-1)),k[39]||(k[39]=a("li",null,"Interview Questions",-1)),k[40]||(k[40]=a("li",null,"Project Ideas",-1))])])])])):$("",!0),l.value?(g(),v("div",hf,[a("span",gf,"+"+f(c.value)+" 💰",1)])):$("",!0)]))}},vf=Wt(yf,[["__scopeId","data-v-cd1008dc"]]),gi="/assets/1775264017792-B6ppRIZ1.png",yi="/assets/1775264871247-CDyqfg_6.png",vi="/assets/1775265121160-BEykj0RJ.png",bf={class:"dashboard"},wf={class:"hero-slides"},Sf={class:"hero-indicators"},xf=["onClick"],kf={key:1,class:"main-content"},Cf={class:"courses-section"},Tf={class:"courses"},Af=["onClick"],Pf={class:"card-badge"},_f={class:"icon"},Ef={class:"card-tags"},If=["onClick"],Rf={class:"talentforge-section"},Lf={class:"testimonials"},Mf={class:"testimonials-grid"},Df={class:"rating"},Bf={class:"testimonial-text"},Of={class:"testimonial-author"},qf={class:"author-avatar"},Ff={class:"author-name"},Nf={class:"author-role"},Uf={key:2,class:"course-content"},Wf={__name:"Dashboard",setup(e){const t=H(null),n=H(0),s=[gi,yi,vi],i=H(!1),o=H(!1),r=H(!1);let l=null;const c=()=>{i.value=window.scrollY>100},p=()=>{const B=document.querySelector(".main-content");B&&B.scrollIntoView({behavior:"smooth"})};ks(()=>{l=setInterval(()=>{n.value=(n.value+1)%s.length},5e3),window.addEventListener("scroll",c)}),Cs(()=>{l&&clearInterval(l),window.removeEventListener("scroll",c)});const d=[{id:"sdet",name:"SDET Mastery",icon:"🔬",description:"Master automation testing with Selenium, Playwright, API testing & CI/CD pipelines.",badge:"🔥 Most Popular",tags:["Industry Ready","Job Oriented","Hands-on"],lessons:120,duration:"6 Months",level:"Beginner → Pro"},{id:"java",name:"Java Development",icon:"☕",description:"Build enterprise-grade applications with Core Java, Spring Boot & Microservices.",badge:"⭐ Top Rated",tags:["Future Ready","Enterprise Level","In Demand"],lessons:95,duration:"5 Months",level:"Beginner → Pro"},{id:"ai",name:"AI Developer",icon:"🤖",description:"Master AI, Machine Learning, LLMs, Prompt Engineering & build intelligent applications.",badge:"🚀 New",tags:["Cutting Edge","High Demand","Future Tech"],lessons:80,duration:"4 Months",level:"Beginner → Pro"}],y=[{avatar:"👨‍💼",name:"Rajesh Kumar",role:"QA Engineer",text:"Medhasphere helped me transition from manual testing to automation within 3 months!",image:gi},{avatar:"👩‍💻",name:"Priya Sharma",role:"Java Developer",text:"The structured learning path and practical exercises made Java concepts crystal clear.",image:yi},{avatar:"👨‍🎓",name:"Arjun Patel",role:"SDET Specialist",text:"Best platform for learning SDET fundamentals. Highly recommended for career growth!",image:vi}],x=B=>{t.value=B},I=()=>{t.value=null},j=we(()=>t.value==="sdet"?Hc:t.value==="java"?iu:t.value==="ai"?vp:t.value==="talentforge"?vf:null);return(B,O)=>(g(),v("div",bf,[a("header",{class:J(["header",{"header-scrolled":i.value,"header-hidden":!t.value&&i.value}])},[a("h1",{onClick:I,class:"logo"},[...O[5]||(O[5]=[rs("📚 ",-1),a("span",{class:"logo-medha"},"Medha",-1),a("span",{class:"logo-sphere"},"sphere",-1)])]),a("button",{class:"mobile-menu-btn",onClick:O[0]||(O[0]=D=>r.value=!r.value)},[a("span",{class:J(["hamburger",{open:r.value}])},null,2)]),a("nav",{class:J(["nav-links",{"mobile-open":r.value}])},[t.value?(g(),v("span",{key:0,class:"nav-item home-btn",onClick:I}," 🏠 Home ")):$("",!0),a("span",{class:J(["nav-item talentforge-nav",{active:t.value==="talentforge"}]),onClick:O[1]||(O[1]=D=>{x("talentforge"),r.value=!1})}," ⚡ TalentForge ",2)],2)],2),t.value?$("",!0):(g(),v("section",{key:0,class:"hero",onMouseenter:O[2]||(O[2]=D=>o.value=!0),onMouseleave:O[3]||(O[3]=D=>o.value=!1)},[a("div",wf,[(g(),v(G,null,te(s,(D,R)=>a("div",{key:R,class:J(["hero-slide",{active:n.value===R}]),style:Ft({backgroundImage:`url(${D})`})},null,6)),64))]),O[7]||(O[7]=a("div",{class:"hero-edge-overlay"},null,-1)),a("div",Sf,[(g(),v(G,null,te(s,(D,R)=>a("span",{key:R,class:J(["indicator",{active:n.value===R}]),onClick:Z=>n.value=R},null,10,xf)),64))]),O[8]||(O[8]=Ut('<div class="hero-tagline-container" data-v-991ab964><h2 class="emerging-tagline" data-v-991ab964><span class="tagline-word" data-v-991ab964>Empowering</span><span class="tagline-word" data-v-991ab964>Minds</span><span class="tagline-divider" data-v-991ab964>·</span><span class="tagline-word" data-v-991ab964>Delivering</span><span class="tagline-word" data-v-991ab964>Solutions</span></h2></div>',1)),a("div",{class:"hero-bottom"},[a("button",{class:"hero-cta",onClick:p},[...O[6]||(O[6]=[a("span",{class:"cta-icon"},"🚀",-1),rs(" Explore Skill Tracks ",-1),a("span",{class:"cta-arrow"},"↓",-1)])])])],32)),t.value?$("",!0):(g(),v("div",kf,[a("section",Cf,[O[11]||(O[11]=a("h2",{class:"section-title"},"Choose Your Learning Path",-1)),a("div",Tf,[(g(),v(G,null,te(d,D=>a("div",{class:"card",key:D.id,onClick:R=>x(D.id)},[O[10]||(O[10]=a("div",{class:"card-background"},null,-1)),a("div",Pf,f(D.badge),1),a("div",_f,f(D.icon),1),a("h3",null,f(D.name),1),a("p",null,f(D.description),1),a("div",Ef,[(g(!0),v(G,null,te(D.tags,R=>(g(),v("span",{class:"tag",key:R},f(R),1))),128))]),a("button",{class:"btn",onClick:St(R=>x(D.id),["stop"])},[...O[9]||(O[9]=[a("span",{class:"btn-text"},"Start Learning",-1),a("span",{class:"btn-arrow"},"→",-1)])],8,If)],8,Af)),64))])]),a("section",Rf,[a("div",{class:"tf-banner",onClick:O[4]||(O[4]=D=>x("talentforge"))},[...O[12]||(O[12]=[Ut('<div class="tf-banner-bg" data-v-991ab964></div><div class="tf-banner-content" data-v-991ab964><div class="tf-banner-left" data-v-991ab964><span class="tf-badge" data-v-991ab964>⚡ Skill Validation &amp; Hiring</span><h2 class="tf-banner-title" data-v-991ab964>TalentForge</h2><p class="tf-banner-tagline" data-v-991ab964>Forge your skills. Prove your talent. Get hired.</p><div class="tf-features" data-v-991ab964><span class="tf-feature" data-v-991ab964>🧠 QuickFire Quizzes</span><span class="tf-feature" data-v-991ab964>🧩 Real Challenges</span><span class="tf-feature" data-v-991ab964>💰 Earn Coins</span><span class="tf-feature" data-v-991ab964>🏆 Get Hired</span></div></div><div class="tf-banner-right" data-v-991ab964><div class="tf-stats-preview" data-v-991ab964><div class="tf-stat-item" data-v-991ab964><span class="tf-stat-value" data-v-991ab964>0</span><span class="tf-stat-label" data-v-991ab964>Active Users</span></div><div class="tf-stat-item" data-v-991ab964><span class="tf-stat-value" data-v-991ab964>0</span><span class="tf-stat-label" data-v-991ab964>Companies Hiring</span></div><div class="tf-stat-item" data-v-991ab964><span class="tf-stat-value" data-v-991ab964>$0</span><span class="tf-stat-label" data-v-991ab964>Rewards Given</span></div></div><button class="tf-enter-btn" data-v-991ab964> Enter TalentForge → </button></div></div>',2)])])]),a("section",Lf,[O[13]||(O[13]=a("h2",{class:"section-title"},"⭐ What Our Learners Say",-1)),a("div",Mf,[(g(),v(G,null,te(y,(D,R)=>a("div",{class:"testimonial-card",key:R},[a("div",Df,[(g(),v(G,null,te(5,Z=>a("span",{key:Z,class:"star"},"★")),64))]),a("p",Bf,'"'+f(D.text)+'"',1),a("div",Of,[a("div",qf,f(D.avatar),1),a("div",null,[a("p",Ff,f(D.name),1),a("p",Nf,f(D.role),1)])])])),64))])]),O[14]||(O[14]=a("footer",{class:"footer"},[a("div",{class:"footer-content"},[a("div",{class:"footer-brand"},[a("h3",null,"📚 Medhasphere"),a("p",null,"Master Testing & Development Skills")]),a("div",{class:"footer-links"},[a("p",null,"© 2025 Medhasphere. All rights reserved.")])])],-1))])),t.value?(g(),v("div",Uf,[(g(),Ps(jo(j.value)))])):$("",!0)]))}},Hf=Wt(Wf,[["__scopeId","data-v-991ab964"]]),jf={__name:"App",setup(e){return(t,n)=>(g(),Ps(Hf))}};ll(jf).mount("#app");
