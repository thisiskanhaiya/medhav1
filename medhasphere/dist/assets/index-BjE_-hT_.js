(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ks(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const ve={},Ft=[],rt=()=>{},Li=()=>!1,On=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Fn=e=>e.startsWith("onUpdate:"),Ae=Object.assign,Ts=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ha=Object.prototype.hasOwnProperty,me=(e,t)=>Ha.call(e,t),ne=Array.isArray,Nt=e=>pn(e)==="[object Map]",Nn=e=>pn(e)==="[object Set]",js=e=>pn(e)==="[object Date]",ie=e=>typeof e=="function",ke=e=>typeof e=="string",lt=e=>typeof e=="symbol",fe=e=>e!==null&&typeof e=="object",Mi=e=>(fe(e)||ie(e))&&ie(e.then)&&ie(e.catch),Di=Object.prototype.toString,pn=e=>Di.call(e),$a=e=>pn(e).slice(8,-1),Bi=e=>pn(e)==="[object Object]",Cs=e=>ke(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Xt=ks(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Un=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ja=/-\w/g,Be=Un(e=>e.replace(Ja,t=>t.slice(1).toUpperCase())),za=/\B([A-Z])/g,Mt=Un(e=>e.replace(za,"-$1").toLowerCase()),Wn=Un(e=>e.charAt(0).toUpperCase()+e.slice(1)),Zn=Un(e=>e?`on${Wn(e)}`:""),ot=(e,t)=>!Object.is(e,t),Sn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},qi=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},jn=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Ga=e=>{const t=ke(e)?Number(e):NaN;return isNaN(t)?e:t};let Hs;const Hn=()=>Hs||(Hs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ht(e){if(ne(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],a=ke(s)?Xa(s):Ht(s);if(a)for(const o in a)t[o]=a[o]}return t}else if(ke(e)||fe(e))return e}const Va=/;(?![^(]*\))/g,Ka=/:([^]+)/,Qa=/\/\*[^]*?\*\//g;function Xa(e){const t={};return e.replace(Qa,"").split(Va).forEach(n=>{if(n){const s=n.split(Ka);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function V(e){let t="";if(ke(e))t=e;else if(ne(e))for(let n=0;n<e.length;n++){const s=V(e[n]);s&&(t+=s+" ")}else if(fe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ya="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Za=ks(Ya);function Oi(e){return!!e||e===""}function eo(e,t){if(e.length!==t.length)return!1;let n=!0;for(let s=0;n&&s<e.length;s++)n=mn(e[s],t[s]);return n}function mn(e,t){if(e===t)return!0;let n=js(e),s=js(t);if(n||s)return n&&s?e.getTime()===t.getTime():!1;if(n=lt(e),s=lt(t),n||s)return e===t;if(n=ne(e),s=ne(t),n||s)return n&&s?eo(e,t):!1;if(n=fe(e),s=fe(t),n||s){if(!n||!s)return!1;const a=Object.keys(e).length,o=Object.keys(t).length;if(a!==o)return!1;for(const r in e){const l=e.hasOwnProperty(r),c=t.hasOwnProperty(r);if(l&&!c||!l&&c||!mn(e[r],t[r]))return!1}}return String(e)===String(t)}function to(e,t){return e.findIndex(n=>mn(n,t))}const Fi=e=>!!(e&&e.__v_isRef===!0),p=e=>ke(e)?e:e==null?"":ne(e)||fe(e)&&(e.toString===Di||!ie(e.toString))?Fi(e)?p(e.value):JSON.stringify(e,Ni,2):String(e),Ni=(e,t)=>Fi(t)?Ni(e,t.value):Nt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,a],o)=>(n[es(s,o)+" =>"]=a,n),{})}:Nn(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>es(n))}:lt(t)?es(t):fe(t)&&!ne(t)&&!Bi(t)?String(t):t,es=(e,t="")=>{var n;return lt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Oe;class no{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Oe,!t&&Oe&&(this.index=(Oe.scopes||(Oe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Oe;try{return Oe=this,t()}finally{Oe=n}}}on(){++this._on===1&&(this.prevScope=Oe,Oe=this)}off(){this._on>0&&--this._on===0&&(Oe=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0}}}function so(){return Oe}let Se;const ts=new WeakSet;class Ui{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Oe&&Oe.active&&Oe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ts.has(this)&&(ts.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ji(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,$s(this),Hi(this);const t=Se,n=Ge;Se=this,Ge=!0;try{return this.fn()}finally{$i(this),Se=t,Ge=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)_s(t);this.deps=this.depsTail=void 0,$s(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ts.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){us(this)&&this.run()}get dirty(){return us(this)}}let Wi=0,Yt,Zt;function ji(e,t=!1){if(e.flags|=8,t){e.next=Zt,Zt=e;return}e.next=Yt,Yt=e}function As(){Wi++}function Ps(){if(--Wi>0)return;if(Zt){let t=Zt;for(Zt=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Yt;){let t=Yt;for(Yt=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function Hi(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function $i(e){let t,n=e.depsTail,s=n;for(;s;){const a=s.prevDep;s.version===-1?(s===n&&(n=a),_s(s),io(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=a}e.deps=t,e.depsTail=n}function us(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ji(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Ji(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===an)||(e.globalVersion=an,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!us(e))))return;e.flags|=2;const t=e.dep,n=Se,s=Ge;Se=e,Ge=!0;try{Hi(e);const a=e.fn(e._value);(t.version===0||ot(a,e._value))&&(e.flags|=128,e._value=a,t.version++)}catch(a){throw t.version++,a}finally{Se=n,Ge=s,$i(e),e.flags&=-3}}function _s(e,t=!1){const{dep:n,prevSub:s,nextSub:a}=e;if(s&&(s.nextSub=a,e.prevSub=void 0),a&&(a.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)_s(o,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function io(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Ge=!0;const zi=[];function ht(){zi.push(Ge),Ge=!1}function gt(){const e=zi.pop();Ge=e===void 0?!0:e}function $s(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=Se;Se=void 0;try{t()}finally{Se=n}}}let an=0;class ao{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Es{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Se||!Ge||Se===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Se)n=this.activeLink=new ao(Se,this),Se.deps?(n.prevDep=Se.depsTail,Se.depsTail.nextDep=n,Se.depsTail=n):Se.deps=Se.depsTail=n,Gi(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=Se.depsTail,n.nextDep=void 0,Se.depsTail.nextDep=n,Se.depsTail=n,Se.deps===n&&(Se.deps=s)}return n}trigger(t){this.version++,an++,this.notify(t)}notify(t){As();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ps()}}}function Gi(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)Gi(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const ps=new WeakMap,Rt=Symbol(""),ms=Symbol(""),on=Symbol("");function Ee(e,t,n){if(Ge&&Se){let s=ps.get(e);s||ps.set(e,s=new Map);let a=s.get(n);a||(s.set(n,a=new Es),a.map=s,a.key=n),a.track()}}function mt(e,t,n,s,a,o){const r=ps.get(e);if(!r){an++;return}const l=c=>{c&&c.trigger()};if(As(),t==="clear")r.forEach(l);else{const c=ne(e),m=c&&Cs(n);if(c&&n==="length"){const d=Number(s);r.forEach((b,k)=>{(k==="length"||k===on||!lt(k)&&k>=d)&&l(b)})}else switch((n!==void 0||r.has(void 0))&&l(r.get(n)),m&&l(r.get(on)),t){case"add":c?m&&l(r.get("length")):(l(r.get(Rt)),Nt(e)&&l(r.get(ms)));break;case"delete":c||(l(r.get(Rt)),Nt(e)&&l(r.get(ms)));break;case"set":Nt(e)&&l(r.get(Rt));break}}Ps()}function qt(e){const t=ue(e);return t===e?t:(Ee(t,"iterate",on),Je(e)?t:t.map(Ke))}function $n(e){return Ee(e=ue(e),"iterate",on),e}function it(e,t){return yt(e)?$t(Lt(e)?Ke(t):t):Ke(t)}const oo={__proto__:null,[Symbol.iterator](){return ns(this,Symbol.iterator,e=>it(this,e))},concat(...e){return qt(this).concat(...e.map(t=>ne(t)?qt(t):t))},entries(){return ns(this,"entries",e=>(e[1]=it(this,e[1]),e))},every(e,t){return ct(this,"every",e,t,void 0,arguments)},filter(e,t){return ct(this,"filter",e,t,n=>n.map(s=>it(this,s)),arguments)},find(e,t){return ct(this,"find",e,t,n=>it(this,n),arguments)},findIndex(e,t){return ct(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return ct(this,"findLast",e,t,n=>it(this,n),arguments)},findLastIndex(e,t){return ct(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return ct(this,"forEach",e,t,void 0,arguments)},includes(...e){return ss(this,"includes",e)},indexOf(...e){return ss(this,"indexOf",e)},join(e){return qt(this).join(e)},lastIndexOf(...e){return ss(this,"lastIndexOf",e)},map(e,t){return ct(this,"map",e,t,void 0,arguments)},pop(){return zt(this,"pop")},push(...e){return zt(this,"push",e)},reduce(e,...t){return Js(this,"reduce",e,t)},reduceRight(e,...t){return Js(this,"reduceRight",e,t)},shift(){return zt(this,"shift")},some(e,t){return ct(this,"some",e,t,void 0,arguments)},splice(...e){return zt(this,"splice",e)},toReversed(){return qt(this).toReversed()},toSorted(e){return qt(this).toSorted(e)},toSpliced(...e){return qt(this).toSpliced(...e)},unshift(...e){return zt(this,"unshift",e)},values(){return ns(this,"values",e=>it(this,e))}};function ns(e,t,n){const s=$n(e),a=s[t]();return s!==e&&!Je(e)&&(a._next=a.next,a.next=()=>{const o=a._next();return o.done||(o.value=n(o.value)),o}),a}const ro=Array.prototype;function ct(e,t,n,s,a,o){const r=$n(e),l=r!==e&&!Je(e),c=r[t];if(c!==ro[t]){const b=c.apply(e,o);return l?Ke(b):b}let m=n;r!==e&&(l?m=function(b,k){return n.call(this,it(e,b),k,e)}:n.length>2&&(m=function(b,k){return n.call(this,b,k,e)}));const d=c.call(r,m,s);return l&&a?a(d):d}function Js(e,t,n,s){const a=$n(e),o=a!==e&&!Je(e);let r=n,l=!1;a!==e&&(o?(l=s.length===0,r=function(m,d,b){return l&&(l=!1,m=it(e,m)),n.call(this,m,it(e,d),b,e)}):n.length>3&&(r=function(m,d,b){return n.call(this,m,d,b,e)}));const c=a[t](r,...s);return l?it(e,c):c}function ss(e,t,n){const s=ue(e);Ee(s,"iterate",on);const a=s[t](...n);return(a===-1||a===!1)&&Ms(n[0])?(n[0]=ue(n[0]),s[t](...n)):a}function zt(e,t,n=[]){ht(),As();const s=ue(e)[t].apply(e,n);return Ps(),gt(),s}const lo=ks("__proto__,__v_isRef,__isVue"),Vi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(lt));function co(e){lt(e)||(e=String(e));const t=ue(this);return Ee(t,"has",e),t.hasOwnProperty(e)}class Ki{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const a=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return o;if(n==="__v_raw")return s===(a?o?wo:Zi:o?Yi:Xi).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const r=ne(t);if(!a){let c;if(r&&(c=oo[n]))return c;if(n==="hasOwnProperty")return co}const l=Reflect.get(t,n,Re(t)?t:s);if((lt(n)?Vi.has(n):lo(n))||(a||Ee(t,"get",n),o))return l;if(Re(l)){const c=r&&Cs(n)?l:l.value;return a&&fe(c)?hs(c):c}return fe(l)?a?hs(l):Rs(l):l}}class Qi extends Ki{constructor(t=!1){super(!1,t)}set(t,n,s,a){let o=t[n];const r=ne(t)&&Cs(n);if(!this._isShallow){const m=yt(o);if(!Je(s)&&!yt(s)&&(o=ue(o),s=ue(s)),!r&&Re(o)&&!Re(s))return m||(o.value=s),!0}const l=r?Number(n)<t.length:me(t,n),c=Reflect.set(t,n,s,Re(t)?t:a);return t===ue(a)&&(l?ot(s,o)&&mt(t,"set",n,s):mt(t,"add",n,s)),c}deleteProperty(t,n){const s=me(t,n);t[n];const a=Reflect.deleteProperty(t,n);return a&&s&&mt(t,"delete",n,void 0),a}has(t,n){const s=Reflect.has(t,n);return(!lt(n)||!Vi.has(n))&&Ee(t,"has",n),s}ownKeys(t){return Ee(t,"iterate",ne(t)?"length":Rt),Reflect.ownKeys(t)}}class uo extends Ki{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const po=new Qi,mo=new uo,fo=new Qi(!0);const fs=e=>e,gn=e=>Reflect.getPrototypeOf(e);function ho(e,t,n){return function(...s){const a=this.__v_raw,o=ue(a),r=Nt(o),l=e==="entries"||e===Symbol.iterator&&r,c=e==="keys"&&r,m=a[e](...s),d=n?fs:t?$t:Ke;return!t&&Ee(o,"iterate",c?ms:Rt),Ae(Object.create(m),{next(){const{value:b,done:k}=m.next();return k?{value:b,done:k}:{value:l?[d(b[0]),d(b[1])]:d(b),done:k}}})}}function yn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function go(e,t){const n={get(a){const o=this.__v_raw,r=ue(o),l=ue(a);e||(ot(a,l)&&Ee(r,"get",a),Ee(r,"get",l));const{has:c}=gn(r),m=t?fs:e?$t:Ke;if(c.call(r,a))return m(o.get(a));if(c.call(r,l))return m(o.get(l));o!==r&&o.get(a)},get size(){const a=this.__v_raw;return!e&&Ee(ue(a),"iterate",Rt),a.size},has(a){const o=this.__v_raw,r=ue(o),l=ue(a);return e||(ot(a,l)&&Ee(r,"has",a),Ee(r,"has",l)),a===l?o.has(a):o.has(a)||o.has(l)},forEach(a,o){const r=this,l=r.__v_raw,c=ue(l),m=t?fs:e?$t:Ke;return!e&&Ee(c,"iterate",Rt),l.forEach((d,b)=>a.call(o,m(d),m(b),r))}};return Ae(n,e?{add:yn("add"),set:yn("set"),delete:yn("delete"),clear:yn("clear")}:{add(a){const o=ue(this),r=gn(o),l=ue(a),c=!t&&!Je(a)&&!yt(a)?l:a;return r.has.call(o,c)||ot(a,c)&&r.has.call(o,a)||ot(l,c)&&r.has.call(o,l)||(o.add(c),mt(o,"add",c,c)),this},set(a,o){!t&&!Je(o)&&!yt(o)&&(o=ue(o));const r=ue(this),{has:l,get:c}=gn(r);let m=l.call(r,a);m||(a=ue(a),m=l.call(r,a));const d=c.call(r,a);return r.set(a,o),m?ot(o,d)&&mt(r,"set",a,o):mt(r,"add",a,o),this},delete(a){const o=ue(this),{has:r,get:l}=gn(o);let c=r.call(o,a);c||(a=ue(a),c=r.call(o,a)),l&&l.call(o,a);const m=o.delete(a);return c&&mt(o,"delete",a,void 0),m},clear(){const a=ue(this),o=a.size!==0,r=a.clear();return o&&mt(a,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(a=>{n[a]=ho(a,e,t)}),n}function Is(e,t){const n=go(e,t);return(s,a,o)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?s:Reflect.get(me(n,a)&&a in s?n:s,a,o)}const yo={get:Is(!1,!1)},vo={get:Is(!1,!0)},bo={get:Is(!0,!1)};const Xi=new WeakMap,Yi=new WeakMap,Zi=new WeakMap,wo=new WeakMap;function So(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xo(e){return e.__v_skip||!Object.isExtensible(e)?0:So($a(e))}function Rs(e){return yt(e)?e:Ls(e,!1,po,yo,Xi)}function ko(e){return Ls(e,!1,fo,vo,Yi)}function hs(e){return Ls(e,!0,mo,bo,Zi)}function Ls(e,t,n,s,a){if(!fe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=xo(e);if(o===0)return e;const r=a.get(e);if(r)return r;const l=new Proxy(e,o===2?s:n);return a.set(e,l),l}function Lt(e){return yt(e)?Lt(e.__v_raw):!!(e&&e.__v_isReactive)}function yt(e){return!!(e&&e.__v_isReadonly)}function Je(e){return!!(e&&e.__v_isShallow)}function Ms(e){return e?!!e.__v_raw:!1}function ue(e){const t=e&&e.__v_raw;return t?ue(t):e}function To(e){return!me(e,"__v_skip")&&Object.isExtensible(e)&&qi(e,"__v_skip",!0),e}const Ke=e=>fe(e)?Rs(e):e,$t=e=>fe(e)?hs(e):e;function Re(e){return e?e.__v_isRef===!0:!1}function U(e){return Co(e,!1)}function Co(e,t){return Re(e)?e:new Ao(e,t)}class Ao{constructor(t,n){this.dep=new Es,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:ue(t),this._value=n?t:Ke(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||Je(t)||yt(t);t=s?t:ue(t),ot(t,n)&&(this._rawValue=t,this._value=s?t:Ke(t),this.dep.trigger())}}function xn(e){return Re(e)?e.value:e}const Po={get:(e,t,n)=>t==="__v_raw"?e:xn(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const a=e[t];return Re(a)&&!Re(n)?(a.value=n,!0):Reflect.set(e,t,n,s)}};function ea(e){return Lt(e)?e:new Proxy(e,Po)}class _o{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Es(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=an-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Se!==this)return ji(this,!0),!0}get value(){const t=this.dep.track();return Ji(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Eo(e,t,n=!1){let s,a;return ie(e)?s=e:(s=e.get,a=e.set),new _o(s,a,n)}const vn={},Pn=new WeakMap;let _t;function Io(e,t=!1,n=_t){if(n){let s=Pn.get(n);s||Pn.set(n,s=[]),s.push(e)}}function Ro(e,t,n=ve){const{immediate:s,deep:a,once:o,scheduler:r,augmentJob:l,call:c}=n,m=j=>a?j:Je(j)||a===!1||a===0?ft(j,1):ft(j);let d,b,k,I,$=!1,O=!1;if(Re(e)?(b=()=>e.value,$=Je(e)):Lt(e)?(b=()=>m(e),$=!0):ne(e)?(O=!0,$=e.some(j=>Lt(j)||Je(j)),b=()=>e.map(j=>{if(Re(j))return j.value;if(Lt(j))return m(j);if(ie(j))return c?c(j,2):j()})):ie(e)?t?b=c?()=>c(e,2):e:b=()=>{if(k){ht();try{k()}finally{gt()}}const j=_t;_t=d;try{return c?c(e,3,[I]):e(I)}finally{_t=j}}:b=rt,t&&a){const j=b,z=a===!0?1/0:a;b=()=>ft(j(),z)}const L=so(),D=()=>{d.stop(),L&&L.active&&Ts(L.effects,d)};if(o&&t){const j=t;t=(...z)=>{j(...z),D()}}let M=O?new Array(e.length).fill(vn):vn;const Z=j=>{if(!(!(d.flags&1)||!d.dirty&&!j))if(t){const z=d.run();if(a||$||(O?z.some((T,he)=>ot(T,M[he])):ot(z,M))){k&&k();const T=_t;_t=d;try{const he=[z,M===vn?void 0:O&&M[0]===vn?[]:M,I];M=z,c?c(t,3,he):t(...he)}finally{_t=T}}}else d.run()};return l&&l(Z),d=new Ui(b),d.scheduler=r?()=>r(Z,!1):Z,I=j=>Io(j,!1,d),k=d.onStop=()=>{const j=Pn.get(d);if(j){if(c)c(j,4);else for(const z of j)z();Pn.delete(d)}},t?s?Z(!0):M=d.run():r?r(Z.bind(null,!0),!0):d.run(),D.pause=d.pause.bind(d),D.resume=d.resume.bind(d),D.stop=D,D}function ft(e,t=1/0,n){if(t<=0||!fe(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Re(e))ft(e.value,t,n);else if(ne(e))for(let s=0;s<e.length;s++)ft(e[s],t,n);else if(Nn(e)||Nt(e))e.forEach(s=>{ft(s,t,n)});else if(Bi(e)){for(const s in e)ft(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&ft(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function fn(e,t,n,s){try{return s?e(...s):e()}catch(a){Jn(a,t,n)}}function Qe(e,t,n,s){if(ie(e)){const a=fn(e,t,n,s);return a&&Mi(a)&&a.catch(o=>{Jn(o,t,n)}),a}if(ne(e)){const a=[];for(let o=0;o<e.length;o++)a.push(Qe(e[o],t,n,s));return a}}function Jn(e,t,n,s=!0){const a=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:r}=t&&t.appContext.config||ve;if(t){let l=t.parent;const c=t.proxy,m=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let b=0;b<d.length;b++)if(d[b](e,c,m)===!1)return}l=l.parent}if(o){ht(),fn(o,null,10,[e,c,m]),gt();return}}Lo(e,n,a,s,r)}function Lo(e,t,n,s=!0,a=!1){if(a)throw e;console.error(e)}const Me=[];let nt=-1;const Ut=[];let wt=null,Ot=0;const ta=Promise.resolve();let _n=null;function na(e){const t=_n||ta;return e?t.then(this?e.bind(this):e):t}function Mo(e){let t=nt+1,n=Me.length;for(;t<n;){const s=t+n>>>1,a=Me[s],o=rn(a);o<e||o===e&&a.flags&2?t=s+1:n=s}return t}function Ds(e){if(!(e.flags&1)){const t=rn(e),n=Me[Me.length-1];!n||!(e.flags&2)&&t>=rn(n)?Me.push(e):Me.splice(Mo(t),0,e),e.flags|=1,sa()}}function sa(){_n||(_n=ta.then(aa))}function Do(e){ne(e)?Ut.push(...e):wt&&e.id===-1?wt.splice(Ot+1,0,e):e.flags&1||(Ut.push(e),e.flags|=1),sa()}function zs(e,t,n=nt+1){for(;n<Me.length;n++){const s=Me[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;Me.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function ia(e){if(Ut.length){const t=[...new Set(Ut)].sort((n,s)=>rn(n)-rn(s));if(Ut.length=0,wt){wt.push(...t);return}for(wt=t,Ot=0;Ot<wt.length;Ot++){const n=wt[Ot];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}wt=null,Ot=0}}const rn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function aa(e){try{for(nt=0;nt<Me.length;nt++){const t=Me[nt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),fn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;nt<Me.length;nt++){const t=Me[nt];t&&(t.flags&=-2)}nt=-1,Me.length=0,ia(),_n=null,(Me.length||Ut.length)&&aa()}}let We=null,oa=null;function En(e){const t=We;return We=e,oa=e&&e.type.__scopeId||null,t}function $e(e,t=We,n){if(!t||e._n)return e;const s=(...a)=>{s._d&&Ln(-1);const o=En(t);let r;try{r=e(...a)}finally{En(o),s._d&&Ln(1)}return r};return s._n=!0,s._c=!0,s._d=!0,s}function Gt(e,t){if(We===null)return e;const n=Yn(We),s=e.dirs||(e.dirs=[]);for(let a=0;a<t.length;a++){let[o,r,l,c=ve]=t[a];o&&(ie(o)&&(o={mounted:o,updated:o}),o.deep&&ft(r),s.push({dir:o,instance:n,value:r,oldValue:void 0,arg:l,modifiers:c}))}return e}function Tt(e,t,n,s){const a=e.dirs,o=t&&t.dirs;for(let r=0;r<a.length;r++){const l=a[r];o&&(l.oldValue=o[r].value);let c=l.dir[s];c&&(ht(),Qe(c,n,8,[e.el,l,e,t]),gt())}}function Bo(e,t){if(Ie){let n=Ie.provides;const s=Ie.parent&&Ie.parent.provides;s===n&&(n=Ie.provides=Object.create(s)),n[e]=t}}function kn(e,t,n=!1){const s=Fa();if(s||Wt){let a=Wt?Wt._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(a&&e in a)return a[e];if(arguments.length>1)return n&&ie(t)?t.call(s&&s.proxy):t}}const qo=Symbol.for("v-scx"),Oo=()=>kn(qo);function is(e,t,n){return ra(e,t,n)}function ra(e,t,n=ve){const{immediate:s,deep:a,flush:o,once:r}=n,l=Ae({},n),c=t&&s||!t&&o!=="post";let m;if(dn){if(o==="sync"){const I=Oo();m=I.__watcherHandles||(I.__watcherHandles=[])}else if(!c){const I=()=>{};return I.stop=rt,I.resume=rt,I.pause=rt,I}}const d=Ie;l.call=(I,$,O)=>Qe(I,d,$,O);let b=!1;o==="post"?l.scheduler=I=>{qe(I,d&&d.suspense)}:o!=="sync"&&(b=!0,l.scheduler=(I,$)=>{$?I():Ds(I)}),l.augmentJob=I=>{t&&(I.flags|=4),b&&(I.flags|=2,d&&(I.id=d.uid,I.i=d))};const k=Ro(e,t,l);return dn&&(m?m.push(k):c&&k()),k}function Fo(e,t,n){const s=this.proxy,a=ke(e)?e.includes(".")?la(s,e):()=>s[e]:e.bind(s,s);let o;ie(t)?o=t:(o=t.handler,n=t);const r=hn(this),l=ra(a,o.bind(s),n);return r(),l}function la(e,t){const n=t.split(".");return()=>{let s=e;for(let a=0;a<n.length&&s;a++)s=s[n[a]];return s}}const No=Symbol("_vte"),ca=e=>e.__isTeleport,st=Symbol("_leaveCb"),Vt=Symbol("_enterCb");function Uo(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Vn(()=>{e.isMounted=!0}),ya(()=>{e.isUnmounting=!0}),e}const He=[Function,Array],da={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:He,onEnter:He,onAfterEnter:He,onEnterCancelled:He,onBeforeLeave:He,onLeave:He,onAfterLeave:He,onLeaveCancelled:He,onBeforeAppear:He,onAppear:He,onAfterAppear:He,onAppearCancelled:He},ua=e=>{const t=e.subTree;return t.component?ua(t.component):t},Wo={name:"BaseTransition",props:da,setup(e,{slots:t}){const n=Fa(),s=Uo();return()=>{const a=t.default&&fa(t.default(),!0);if(!a||!a.length)return;const o=pa(a),r=ue(e),{mode:l}=r;if(s.isLeaving)return as(o);const c=Gs(o);if(!c)return as(o);let m=gs(c,r,s,n,b=>m=b);c.type!==De&&ln(c,m);let d=n.subTree&&Gs(n.subTree);if(d&&d.type!==De&&!Et(d,c)&&ua(n).type!==De){let b=gs(d,r,s,n);if(ln(d,b),l==="out-in"&&c.type!==De)return s.isLeaving=!0,b.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete b.afterLeave,d=void 0},as(o);l==="in-out"&&c.type!==De?b.delayLeave=(k,I,$)=>{const O=ma(s,d);O[String(d.key)]=d,k[st]=()=>{I(),k[st]=void 0,delete m.delayedLeave,d=void 0},m.delayedLeave=()=>{$(),delete m.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return o}}};function pa(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==De){t=n;break}}return t}const jo=Wo;function ma(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function gs(e,t,n,s,a){const{appear:o,mode:r,persisted:l=!1,onBeforeEnter:c,onEnter:m,onAfterEnter:d,onEnterCancelled:b,onBeforeLeave:k,onLeave:I,onAfterLeave:$,onLeaveCancelled:O,onBeforeAppear:L,onAppear:D,onAfterAppear:M,onAppearCancelled:Z}=t,j=String(e.key),z=ma(n,e),T=(X,oe)=>{X&&Qe(X,s,9,oe)},he=(X,oe)=>{const le=oe[1];T(X,oe),ne(X)?X.every(N=>N.length<=1)&&le():X.length<=1&&le()},pe={mode:r,persisted:l,beforeEnter(X){let oe=c;if(!n.isMounted)if(o)oe=L||c;else return;X[st]&&X[st](!0);const le=z[j];le&&Et(e,le)&&le.el[st]&&le.el[st](),T(oe,[X])},enter(X){if(z[j]===e)return;let oe=m,le=d,N=b;if(!n.isMounted)if(o)oe=D||m,le=M||d,N=Z||b;else return;let re=!1;X[Vt]=C=>{re||(re=!0,C?T(N,[X]):T(le,[X]),pe.delayedLeave&&pe.delayedLeave(),X[Vt]=void 0)};const ae=X[Vt].bind(null,!1);oe?he(oe,[X,ae]):ae()},leave(X,oe){const le=String(e.key);if(X[Vt]&&X[Vt](!0),n.isUnmounting)return oe();T(k,[X]);let N=!1;X[st]=ae=>{N||(N=!0,oe(),ae?T(O,[X]):T($,[X]),X[st]=void 0,z[le]===e&&delete z[le])};const re=X[st].bind(null,!1);z[le]=e,I?he(I,[X,re]):re()},clone(X){const oe=gs(X,t,n,s,a);return a&&a(oe),oe}};return pe}function as(e){if(zn(e))return e=kt(e),e.children=null,e}function Gs(e){if(!zn(e))return ca(e.type)&&e.children?pa(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&ie(n.default))return n.default()}}function ln(e,t){e.shapeFlag&6&&e.component?(e.transition=t,ln(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function fa(e,t=!1,n){let s=[],a=0;for(let o=0;o<e.length;o++){let r=e[o];const l=n==null?r.key:String(n)+String(r.key!=null?r.key:o);r.type===J?(r.patchFlag&128&&a++,s=s.concat(fa(r.children,t,l))):(t||r.type!==De)&&s.push(l!=null?kt(r,{key:l}):r)}if(a>1)for(let o=0;o<s.length;o++)s[o].patchFlag=-2;return s}function ha(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Vs(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const In=new WeakMap;function en(e,t,n,s,a=!1){if(ne(e)){e.forEach((O,L)=>en(O,t&&(ne(t)?t[L]:t),n,s,a));return}if(tn(s)&&!a){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&en(e,t,n,s.component.subTree);return}const o=s.shapeFlag&4?Yn(s.component):s.el,r=a?null:o,{i:l,r:c}=e,m=t&&t.r,d=l.refs===ve?l.refs={}:l.refs,b=l.setupState,k=ue(b),I=b===ve?Li:O=>Vs(d,O)?!1:me(k,O),$=(O,L)=>!(L&&Vs(d,L));if(m!=null&&m!==c){if(Ks(t),ke(m))d[m]=null,I(m)&&(b[m]=null);else if(Re(m)){const O=t;$(m,O.k)&&(m.value=null),O.k&&(d[O.k]=null)}}if(ie(c))fn(c,l,12,[r,d]);else{const O=ke(c),L=Re(c);if(O||L){const D=()=>{if(e.f){const M=O?I(c)?b[c]:d[c]:$()||!e.k?c.value:d[e.k];if(a)ne(M)&&Ts(M,o);else if(ne(M))M.includes(o)||M.push(o);else if(O)d[c]=[o],I(c)&&(b[c]=d[c]);else{const Z=[o];$(c,e.k)&&(c.value=Z),e.k&&(d[e.k]=Z)}}else O?(d[c]=r,I(c)&&(b[c]=r)):L&&($(c,e.k)&&(c.value=r),e.k&&(d[e.k]=r))};if(r){const M=()=>{D(),In.delete(e)};M.id=-1,In.set(e,M),qe(M,n)}else Ks(e),D()}}}function Ks(e){const t=In.get(e);t&&(t.flags|=8,In.delete(e))}Hn().requestIdleCallback;Hn().cancelIdleCallback;const tn=e=>!!e.type.__asyncLoader,zn=e=>e.type.__isKeepAlive;function Ho(e,t){ga(e,"a",t)}function $o(e,t){ga(e,"da",t)}function ga(e,t,n=Ie){const s=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Gn(t,s,n),n){let a=n.parent;for(;a&&a.parent;)zn(a.parent.vnode)&&Jo(s,t,n,a),a=a.parent}}function Jo(e,t,n,s){const a=Gn(t,e,s,!0);Kn(()=>{Ts(s[t],a)},n)}function Gn(e,t,n=Ie,s=!1){if(n){const a=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...r)=>{ht();const l=hn(n),c=Qe(t,n,e,r);return l(),gt(),c});return s?a.unshift(o):a.push(o),o}}const vt=e=>(t,n=Ie)=>{(!dn||e==="sp")&&Gn(e,(...s)=>t(...s),n)},zo=vt("bm"),Vn=vt("m"),Go=vt("bu"),Vo=vt("u"),ya=vt("bum"),Kn=vt("um"),Ko=vt("sp"),Qo=vt("rtg"),Xo=vt("rtc");function Yo(e,t=Ie){Gn("ec",e,t)}const Zo="components",va=Symbol.for("v-ndc");function er(e){return ke(e)?tr(Zo,e,!1)||e:e||va}function tr(e,t,n=!0,s=!1){const a=We||Ie;if(a){const o=a.type;{const l=Nr(o,!1);if(l&&(l===t||l===Be(t)||l===Wn(Be(t))))return o}const r=Qs(a[e]||o[e],t)||Qs(a.appContext[e],t);return!r&&s?o:r}}function Qs(e,t){return e&&(e[t]||e[Be(t)]||e[Wn(Be(t))])}function Y(e,t,n,s){let a;const o=n,r=ne(e);if(r||ke(e)){const l=r&&Lt(e);let c=!1,m=!1;l&&(c=!Je(e),m=yt(e),e=$n(e)),a=new Array(e.length);for(let d=0,b=e.length;d<b;d++)a[d]=t(c?m?$t(Ke(e[d])):Ke(e[d]):e[d],d,void 0,o)}else if(typeof e=="number"){a=new Array(e);for(let l=0;l<e;l++)a[l]=t(l+1,l,void 0,o)}else if(fe(e))if(e[Symbol.iterator])a=Array.from(e,(l,c)=>t(l,c,void 0,o));else{const l=Object.keys(e);a=new Array(l.length);for(let c=0,m=l.length;c<m;c++){const d=l[c];a[c]=t(e[d],d,c,o)}}else a=[];return a}const ys=e=>e?Na(e)?Yn(e):ys(e.parent):null,nn=Ae(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ys(e.parent),$root:e=>ys(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>wa(e),$forceUpdate:e=>e.f||(e.f=()=>{Ds(e.update)}),$nextTick:e=>e.n||(e.n=na.bind(e.proxy)),$watch:e=>Fo.bind(e)}),os=(e,t)=>e!==ve&&!e.__isScriptSetup&&me(e,t),nr={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:a,props:o,accessCache:r,type:l,appContext:c}=e;if(t[0]!=="$"){const k=r[t];if(k!==void 0)switch(k){case 1:return s[t];case 2:return a[t];case 4:return n[t];case 3:return o[t]}else{if(os(s,t))return r[t]=1,s[t];if(a!==ve&&me(a,t))return r[t]=2,a[t];if(me(o,t))return r[t]=3,o[t];if(n!==ve&&me(n,t))return r[t]=4,n[t];vs&&(r[t]=0)}}const m=nn[t];let d,b;if(m)return t==="$attrs"&&Ee(e.attrs,"get",""),m(e);if((d=l.__cssModules)&&(d=d[t]))return d;if(n!==ve&&me(n,t))return r[t]=4,n[t];if(b=c.config.globalProperties,me(b,t))return b[t]},set({_:e},t,n){const{data:s,setupState:a,ctx:o}=e;return os(a,t)?(a[t]=n,!0):s!==ve&&me(s,t)?(s[t]=n,!0):me(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:a,props:o,type:r}},l){let c;return!!(n[l]||e!==ve&&l[0]!=="$"&&me(e,l)||os(t,l)||me(o,l)||me(s,l)||me(nn,l)||me(a.config.globalProperties,l)||(c=r.__cssModules)&&c[l])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:me(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Xs(e){return ne(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let vs=!0;function sr(e){const t=wa(e),n=e.proxy,s=e.ctx;vs=!1,t.beforeCreate&&Ys(t.beforeCreate,e,"bc");const{data:a,computed:o,methods:r,watch:l,provide:c,inject:m,created:d,beforeMount:b,mounted:k,beforeUpdate:I,updated:$,activated:O,deactivated:L,beforeDestroy:D,beforeUnmount:M,destroyed:Z,unmounted:j,render:z,renderTracked:T,renderTriggered:he,errorCaptured:pe,serverPrefetch:X,expose:oe,inheritAttrs:le,components:N,directives:re,filters:ae}=t;if(m&&ir(m,s,null),r)for(const G in r){const ce=r[G];ie(ce)&&(s[G]=ce.bind(n))}if(a){const G=a.call(n,n);fe(G)&&(e.data=Rs(G))}if(vs=!0,o)for(const G in o){const ce=o[G],Fe=ie(ce)?ce.bind(n,n):ie(ce.get)?ce.get.bind(n,n):rt,Xe=!ie(ce)&&ie(ce.set)?ce.set.bind(n):rt,Ne=be({get:Fe,set:Xe});Object.defineProperty(s,G,{enumerable:!0,configurable:!0,get:()=>Ne.value,set:_e=>Ne.value=_e})}if(l)for(const G in l)ba(l[G],s,n,G);if(c){const G=ie(c)?c.call(n):c;Reflect.ownKeys(G).forEach(ce=>{Bo(ce,G[ce])})}d&&Ys(d,e,"c");function v(G,ce){ne(ce)?ce.forEach(Fe=>G(Fe.bind(n))):ce&&G(ce.bind(n))}if(v(zo,b),v(Vn,k),v(Go,I),v(Vo,$),v(Ho,O),v($o,L),v(Yo,pe),v(Xo,T),v(Qo,he),v(ya,M),v(Kn,j),v(Ko,X),ne(oe))if(oe.length){const G=e.exposed||(e.exposed={});oe.forEach(ce=>{Object.defineProperty(G,ce,{get:()=>n[ce],set:Fe=>n[ce]=Fe,enumerable:!0})})}else e.exposed||(e.exposed={});z&&e.render===rt&&(e.render=z),le!=null&&(e.inheritAttrs=le),N&&(e.components=N),re&&(e.directives=re),X&&ha(e)}function ir(e,t,n=rt){ne(e)&&(e=bs(e));for(const s in e){const a=e[s];let o;fe(a)?"default"in a?o=kn(a.from||s,a.default,!0):o=kn(a.from||s):o=kn(a),Re(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:r=>o.value=r}):t[s]=o}}function Ys(e,t,n){Qe(ne(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function ba(e,t,n,s){let a=s.includes(".")?la(n,s):()=>n[s];if(ke(e)){const o=t[e];ie(o)&&is(a,o)}else if(ie(e))is(a,e.bind(n));else if(fe(e))if(ne(e))e.forEach(o=>ba(o,t,n,s));else{const o=ie(e.handler)?e.handler.bind(n):t[e.handler];ie(o)&&is(a,o,e)}}function wa(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:a,optionsCache:o,config:{optionMergeStrategies:r}}=e.appContext,l=o.get(t);let c;return l?c=l:!a.length&&!n&&!s?c=t:(c={},a.length&&a.forEach(m=>Rn(c,m,r,!0)),Rn(c,t,r)),fe(t)&&o.set(t,c),c}function Rn(e,t,n,s=!1){const{mixins:a,extends:o}=t;o&&Rn(e,o,n,!0),a&&a.forEach(r=>Rn(e,r,n,!0));for(const r in t)if(!(s&&r==="expose")){const l=ar[r]||n&&n[r];e[r]=l?l(e[r],t[r]):t[r]}return e}const ar={data:Zs,props:ei,emits:ei,methods:Qt,computed:Qt,beforeCreate:Le,created:Le,beforeMount:Le,mounted:Le,beforeUpdate:Le,updated:Le,beforeDestroy:Le,beforeUnmount:Le,destroyed:Le,unmounted:Le,activated:Le,deactivated:Le,errorCaptured:Le,serverPrefetch:Le,components:Qt,directives:Qt,watch:rr,provide:Zs,inject:or};function Zs(e,t){return t?e?function(){return Ae(ie(e)?e.call(this,this):e,ie(t)?t.call(this,this):t)}:t:e}function or(e,t){return Qt(bs(e),bs(t))}function bs(e){if(ne(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Le(e,t){return e?[...new Set([].concat(e,t))]:t}function Qt(e,t){return e?Ae(Object.create(null),e,t):t}function ei(e,t){return e?ne(e)&&ne(t)?[...new Set([...e,...t])]:Ae(Object.create(null),Xs(e),Xs(t??{})):t}function rr(e,t){if(!e)return t;if(!t)return e;const n=Ae(Object.create(null),e);for(const s in t)n[s]=Le(e[s],t[s]);return n}function Sa(){return{app:null,config:{isNativeTag:Li,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let lr=0;function cr(e,t){return function(s,a=null){ie(s)||(s=Ae({},s)),a!=null&&!fe(a)&&(a=null);const o=Sa(),r=new WeakSet,l=[];let c=!1;const m=o.app={_uid:lr++,_component:s,_props:a,_container:null,_context:o,_instance:null,version:jr,get config(){return o.config},set config(d){},use(d,...b){return r.has(d)||(d&&ie(d.install)?(r.add(d),d.install(m,...b)):ie(d)&&(r.add(d),d(m,...b))),m},mixin(d){return o.mixins.includes(d)||o.mixins.push(d),m},component(d,b){return b?(o.components[d]=b,m):o.components[d]},directive(d,b){return b?(o.directives[d]=b,m):o.directives[d]},mount(d,b,k){if(!c){const I=m._ceVNode||xe(s,a);return I.appContext=o,k===!0?k="svg":k===!1&&(k=void 0),e(I,d,k),c=!0,m._container=d,d.__vue_app__=m,Yn(I.component)}},onUnmount(d){l.push(d)},unmount(){c&&(Qe(l,m._instance,16),e(null,m._container),delete m._container.__vue_app__)},provide(d,b){return o.provides[d]=b,m},runWithContext(d){const b=Wt;Wt=m;try{return d()}finally{Wt=b}}};return m}}let Wt=null;const dr=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Be(t)}Modifiers`]||e[`${Mt(t)}Modifiers`];function ur(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||ve;let a=n;const o=t.startsWith("update:"),r=o&&dr(s,t.slice(7));r&&(r.trim&&(a=n.map(d=>ke(d)?d.trim():d)),r.number&&(a=n.map(jn)));let l,c=s[l=Zn(t)]||s[l=Zn(Be(t))];!c&&o&&(c=s[l=Zn(Mt(t))]),c&&Qe(c,e,6,a);const m=s[l+"Once"];if(m){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Qe(m,e,6,a)}}const pr=new WeakMap;function xa(e,t,n=!1){const s=n?pr:t.emitsCache,a=s.get(e);if(a!==void 0)return a;const o=e.emits;let r={},l=!1;if(!ie(e)){const c=m=>{const d=xa(m,t,!0);d&&(l=!0,Ae(r,d))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!o&&!l?(fe(e)&&s.set(e,null),null):(ne(o)?o.forEach(c=>r[c]=null):Ae(r,o),fe(e)&&s.set(e,r),r)}function Qn(e,t){return!e||!On(t)?!1:(t=t.slice(2).replace(/Once$/,""),me(e,t[0].toLowerCase()+t.slice(1))||me(e,Mt(t))||me(e,t))}function ti(e){const{type:t,vnode:n,proxy:s,withProxy:a,propsOptions:[o],slots:r,attrs:l,emit:c,render:m,renderCache:d,props:b,data:k,setupState:I,ctx:$,inheritAttrs:O}=e,L=En(e);let D,M;try{if(n.shapeFlag&4){const j=a||s,z=j;D=at(m.call(z,j,d,b,I,k,$)),M=l}else{const j=t;D=at(j.length>1?j(b,{attrs:l,slots:r,emit:c}):j(b,null)),M=t.props?l:mr(l)}}catch(j){sn.length=0,Jn(j,e,1),D=xe(De)}let Z=D;if(M&&O!==!1){const j=Object.keys(M),{shapeFlag:z}=Z;j.length&&z&7&&(o&&j.some(Fn)&&(M=fr(M,o)),Z=kt(Z,M,!1,!0))}return n.dirs&&(Z=kt(Z,null,!1,!0),Z.dirs=Z.dirs?Z.dirs.concat(n.dirs):n.dirs),n.transition&&ln(Z,n.transition),D=Z,En(L),D}const mr=e=>{let t;for(const n in e)(n==="class"||n==="style"||On(n))&&((t||(t={}))[n]=e[n]);return t},fr=(e,t)=>{const n={};for(const s in e)(!Fn(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function hr(e,t,n){const{props:s,children:a,component:o}=e,{props:r,children:l,patchFlag:c}=t,m=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?ni(s,r,m):!!r;if(c&8){const d=t.dynamicProps;for(let b=0;b<d.length;b++){const k=d[b];if(ka(r,s,k)&&!Qn(m,k))return!0}}}else return(a||l)&&(!l||!l.$stable)?!0:s===r?!1:s?r?ni(s,r,m):!0:!!r;return!1}function ni(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let a=0;a<s.length;a++){const o=s[a];if(ka(t,e,o)&&!Qn(n,o))return!0}return!1}function ka(e,t,n){const s=e[n],a=t[n];return n==="style"&&fe(s)&&fe(a)?!mn(s,a):s!==a}function gr({vnode:e,parent:t,suspense:n},s){for(;t;){const a=t.subTree;if(a.suspense&&a.suspense.activeBranch===e&&(a.suspense.vnode.el=a.el=s,e=a),a===e)(e=t.vnode).el=s,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=s)}const Ta={},Ca=()=>Object.create(Ta),Aa=e=>Object.getPrototypeOf(e)===Ta;function yr(e,t,n,s=!1){const a={},o=Ca();e.propsDefaults=Object.create(null),Pa(e,t,a,o);for(const r in e.propsOptions[0])r in a||(a[r]=void 0);n?e.props=s?a:ko(a):e.type.props?e.props=a:e.props=o,e.attrs=o}function vr(e,t,n,s){const{props:a,attrs:o,vnode:{patchFlag:r}}=e,l=ue(a),[c]=e.propsOptions;let m=!1;if((s||r>0)&&!(r&16)){if(r&8){const d=e.vnode.dynamicProps;for(let b=0;b<d.length;b++){let k=d[b];if(Qn(e.emitsOptions,k))continue;const I=t[k];if(c)if(me(o,k))I!==o[k]&&(o[k]=I,m=!0);else{const $=Be(k);a[$]=ws(c,l,$,I,e,!1)}else I!==o[k]&&(o[k]=I,m=!0)}}}else{Pa(e,t,a,o)&&(m=!0);let d;for(const b in l)(!t||!me(t,b)&&((d=Mt(b))===b||!me(t,d)))&&(c?n&&(n[b]!==void 0||n[d]!==void 0)&&(a[b]=ws(c,l,b,void 0,e,!0)):delete a[b]);if(o!==l)for(const b in o)(!t||!me(t,b))&&(delete o[b],m=!0)}m&&mt(e.attrs,"set","")}function Pa(e,t,n,s){const[a,o]=e.propsOptions;let r=!1,l;if(t)for(let c in t){if(Xt(c))continue;const m=t[c];let d;a&&me(a,d=Be(c))?!o||!o.includes(d)?n[d]=m:(l||(l={}))[d]=m:Qn(e.emitsOptions,c)||(!(c in s)||m!==s[c])&&(s[c]=m,r=!0)}if(o){const c=ue(n),m=l||ve;for(let d=0;d<o.length;d++){const b=o[d];n[b]=ws(a,c,b,m[b],e,!me(m,b))}}return r}function ws(e,t,n,s,a,o){const r=e[n];if(r!=null){const l=me(r,"default");if(l&&s===void 0){const c=r.default;if(r.type!==Function&&!r.skipFactory&&ie(c)){const{propsDefaults:m}=a;if(n in m)s=m[n];else{const d=hn(a);s=m[n]=c.call(null,t),d()}}else s=c;a.ce&&a.ce._setProp(n,s)}r[0]&&(o&&!l?s=!1:r[1]&&(s===""||s===Mt(n))&&(s=!0))}return s}const br=new WeakMap;function _a(e,t,n=!1){const s=n?br:t.propsCache,a=s.get(e);if(a)return a;const o=e.props,r={},l=[];let c=!1;if(!ie(e)){const d=b=>{c=!0;const[k,I]=_a(b,t,!0);Ae(r,k),I&&l.push(...I)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!o&&!c)return fe(e)&&s.set(e,Ft),Ft;if(ne(o))for(let d=0;d<o.length;d++){const b=Be(o[d]);si(b)&&(r[b]=ve)}else if(o)for(const d in o){const b=Be(d);if(si(b)){const k=o[d],I=r[b]=ne(k)||ie(k)?{type:k}:Ae({},k),$=I.type;let O=!1,L=!0;if(ne($))for(let D=0;D<$.length;++D){const M=$[D],Z=ie(M)&&M.name;if(Z==="Boolean"){O=!0;break}else Z==="String"&&(L=!1)}else O=ie($)&&$.name==="Boolean";I[0]=O,I[1]=L,(O||me(I,"default"))&&l.push(b)}}const m=[r,l];return fe(e)&&s.set(e,m),m}function si(e){return e[0]!=="$"&&!Xt(e)}const Bs=e=>e==="_"||e==="_ctx"||e==="$stable",qs=e=>ne(e)?e.map(at):[at(e)],wr=(e,t,n)=>{if(t._n)return t;const s=$e((...a)=>qs(t(...a)),n);return s._c=!1,s},Ea=(e,t,n)=>{const s=e._ctx;for(const a in e){if(Bs(a))continue;const o=e[a];if(ie(o))t[a]=wr(a,o,s);else if(o!=null){const r=qs(o);t[a]=()=>r}}},Ia=(e,t)=>{const n=qs(t);e.slots.default=()=>n},Ra=(e,t,n)=>{for(const s in t)(n||!Bs(s))&&(e[s]=t[s])},Sr=(e,t,n)=>{const s=e.slots=Ca();if(e.vnode.shapeFlag&32){const a=t._;a?(Ra(s,t,n),n&&qi(s,"_",a,!0)):Ea(t,s)}else t&&Ia(e,t)},xr=(e,t,n)=>{const{vnode:s,slots:a}=e;let o=!0,r=ve;if(s.shapeFlag&32){const l=t._;l?n&&l===1?o=!1:Ra(a,t,n):(o=!t.$stable,Ea(t,a)),r=t}else t&&(Ia(e,t),r={default:1});if(o)for(const l in a)!Bs(l)&&r[l]==null&&delete a[l]},qe=Pr;function kr(e){return Tr(e)}function Tr(e,t){const n=Hn();n.__VUE__=!0;const{insert:s,remove:a,patchProp:o,createElement:r,createText:l,createComment:c,setText:m,setElementText:d,parentNode:b,nextSibling:k,setScopeId:I=rt,insertStaticContent:$}=e,O=(u,f,x,E=null,A=null,P=null,F=void 0,q=null,B=!!f.dynamicChildren)=>{if(u===f)return;u&&!Et(u,f)&&(E=R(u),_e(u,A,P,!0),u=null),f.patchFlag===-2&&(B=!1,f.dynamicChildren=null);const{type:_,ref:te,shapeFlag:W}=f;switch(_){case Xn:L(u,f,x,E);break;case De:D(u,f,x,E);break;case Tn:u==null&&M(f,x,E,F);break;case J:N(u,f,x,E,A,P,F,q,B);break;default:W&1?z(u,f,x,E,A,P,F,q,B):W&6?re(u,f,x,E,A,P,F,q,B):(W&64||W&128)&&_.process(u,f,x,E,A,P,F,q,B,Te)}te!=null&&A?en(te,u&&u.ref,P,f||u,!f):te==null&&u&&u.ref!=null&&en(u.ref,null,P,u,!0)},L=(u,f,x,E)=>{if(u==null)s(f.el=l(f.children),x,E);else{const A=f.el=u.el;f.children!==u.children&&m(A,f.children)}},D=(u,f,x,E)=>{u==null?s(f.el=c(f.children||""),x,E):f.el=u.el},M=(u,f,x,E)=>{[u.el,u.anchor]=$(u.children,f,x,E,u.el,u.anchor)},Z=({el:u,anchor:f},x,E)=>{let A;for(;u&&u!==f;)A=k(u),s(u,x,E),u=A;s(f,x,E)},j=({el:u,anchor:f})=>{let x;for(;u&&u!==f;)x=k(u),a(u),u=x;a(f)},z=(u,f,x,E,A,P,F,q,B)=>{if(f.type==="svg"?F="svg":f.type==="math"&&(F="mathml"),u==null)T(f,x,E,A,P,F,q,B);else{const _=u.el&&u.el._isVueCE?u.el:null;try{_&&_._beginPatch(),X(u,f,A,P,F,q,B)}finally{_&&_._endPatch()}}},T=(u,f,x,E,A,P,F,q)=>{let B,_;const{props:te,shapeFlag:W,transition:Q,dirs:se}=u;if(B=u.el=r(u.type,P,te&&te.is,te),W&8?d(B,u.children):W&16&&pe(u.children,B,null,E,A,rs(u,P),F,q),se&&Tt(u,null,E,"created"),he(B,u,u.scopeId,F,E),te){for(const ye in te)ye!=="value"&&!Xt(ye)&&o(B,ye,null,te[ye],P,E);"value"in te&&o(B,"value",null,te.value,P),(_=te.onVnodeBeforeMount)&&tt(_,E,u)}se&&Tt(u,null,E,"beforeMount");const de=Cr(A,Q);de&&Q.beforeEnter(B),s(B,f,x),((_=te&&te.onVnodeMounted)||de||se)&&qe(()=>{try{_&&tt(_,E,u),de&&Q.enter(B),se&&Tt(u,null,E,"mounted")}finally{}},A)},he=(u,f,x,E,A)=>{if(x&&I(u,x),E)for(let P=0;P<E.length;P++)I(u,E[P]);if(A){let P=A.subTree;if(f===P||Ba(P.type)&&(P.ssContent===f||P.ssFallback===f)){const F=A.vnode;he(u,F,F.scopeId,F.slotScopeIds,A.parent)}}},pe=(u,f,x,E,A,P,F,q,B=0)=>{for(let _=B;_<u.length;_++){const te=u[_]=q?pt(u[_]):at(u[_]);O(null,te,f,x,E,A,P,F,q)}},X=(u,f,x,E,A,P,F)=>{const q=f.el=u.el;let{patchFlag:B,dynamicChildren:_,dirs:te}=f;B|=u.patchFlag&16;const W=u.props||ve,Q=f.props||ve;let se;if(x&&Ct(x,!1),(se=Q.onVnodeBeforeUpdate)&&tt(se,x,f,u),te&&Tt(f,u,x,"beforeUpdate"),x&&Ct(x,!0),(W.innerHTML&&Q.innerHTML==null||W.textContent&&Q.textContent==null)&&d(q,""),_?oe(u.dynamicChildren,_,q,x,E,rs(f,A),P):F||ce(u,f,q,null,x,E,rs(f,A),P,!1),B>0){if(B&16)le(q,W,Q,x,A);else if(B&2&&W.class!==Q.class&&o(q,"class",null,Q.class,A),B&4&&o(q,"style",W.style,Q.style,A),B&8){const de=f.dynamicProps;for(let ye=0;ye<de.length;ye++){const we=de[ye],Ce=W[we],Pe=Q[we];(Pe!==Ce||we==="value")&&o(q,we,Ce,Pe,A,x)}}B&1&&u.children!==f.children&&d(q,f.children)}else!F&&_==null&&le(q,W,Q,x,A);((se=Q.onVnodeUpdated)||te)&&qe(()=>{se&&tt(se,x,f,u),te&&Tt(f,u,x,"updated")},E)},oe=(u,f,x,E,A,P,F)=>{for(let q=0;q<f.length;q++){const B=u[q],_=f[q],te=B.el&&(B.type===J||!Et(B,_)||B.shapeFlag&198)?b(B.el):x;O(B,_,te,null,E,A,P,F,!0)}},le=(u,f,x,E,A)=>{if(f!==x){if(f!==ve)for(const P in f)!Xt(P)&&!(P in x)&&o(u,P,f[P],null,A,E);for(const P in x){if(Xt(P))continue;const F=x[P],q=f[P];F!==q&&P!=="value"&&o(u,P,q,F,A,E)}"value"in x&&o(u,"value",f.value,x.value,A)}},N=(u,f,x,E,A,P,F,q,B)=>{const _=f.el=u?u.el:l(""),te=f.anchor=u?u.anchor:l("");let{patchFlag:W,dynamicChildren:Q,slotScopeIds:se}=f;se&&(q=q?q.concat(se):se),u==null?(s(_,x,E),s(te,x,E),pe(f.children||[],x,te,A,P,F,q,B)):W>0&&W&64&&Q&&u.dynamicChildren&&u.dynamicChildren.length===Q.length?(oe(u.dynamicChildren,Q,x,A,P,F,q),(f.key!=null||A&&f===A.subTree)&&La(u,f,!0)):ce(u,f,x,te,A,P,F,q,B)},re=(u,f,x,E,A,P,F,q,B)=>{f.slotScopeIds=q,u==null?f.shapeFlag&512?A.ctx.activate(f,x,E,F,B):ae(f,x,E,A,P,F,B):C(u,f,B)},ae=(u,f,x,E,A,P,F)=>{const q=u.component=Dr(u,E,A);if(zn(u)&&(q.ctx.renderer=Te),Br(q,!1,F),q.asyncDep){if(A&&A.registerDep(q,v,F),!u.el){const B=q.subTree=xe(De);D(null,B,f,x),u.placeholder=B.el}}else v(q,u,f,x,A,P,F)},C=(u,f,x)=>{const E=f.component=u.component;if(hr(u,f,x))if(E.asyncDep&&!E.asyncResolved){G(E,f,x);return}else E.next=f,E.update();else f.el=u.el,E.vnode=f},v=(u,f,x,E,A,P,F)=>{const q=()=>{if(u.isMounted){let{next:W,bu:Q,u:se,parent:de,vnode:ye}=u;{const Ze=Ma(u);if(Ze){W&&(W.el=ye.el,G(u,W,F)),Ze.asyncDep.then(()=>{qe(()=>{u.isUnmounted||_()},A)});return}}let we=W,Ce;Ct(u,!1),W?(W.el=ye.el,G(u,W,F)):W=ye,Q&&Sn(Q),(Ce=W.props&&W.props.onVnodeBeforeUpdate)&&tt(Ce,de,W,ye),Ct(u,!0);const Pe=ti(u),Ye=u.subTree;u.subTree=Pe,O(Ye,Pe,b(Ye.el),R(Ye),u,A,P),W.el=Pe.el,we===null&&gr(u,Pe.el),se&&qe(se,A),(Ce=W.props&&W.props.onVnodeUpdated)&&qe(()=>tt(Ce,de,W,ye),A)}else{let W;const{el:Q,props:se}=f,{bm:de,m:ye,parent:we,root:Ce,type:Pe}=u,Ye=tn(f);Ct(u,!1),de&&Sn(de),!Ye&&(W=se&&se.onVnodeBeforeMount)&&tt(W,we,f),Ct(u,!0);{Ce.ce&&Ce.ce._hasShadowRoot()&&Ce.ce._injectChildStyle(Pe,u.parent?u.parent.type:void 0);const Ze=u.subTree=ti(u);O(null,Ze,x,E,u,A,P),f.el=Ze.el}if(ye&&qe(ye,A),!Ye&&(W=se&&se.onVnodeMounted)){const Ze=f;qe(()=>tt(W,we,Ze),A)}(f.shapeFlag&256||we&&tn(we.vnode)&&we.vnode.shapeFlag&256)&&u.a&&qe(u.a,A),u.isMounted=!0,f=x=E=null}};u.scope.on();const B=u.effect=new Ui(q);u.scope.off();const _=u.update=B.run.bind(B),te=u.job=B.runIfDirty.bind(B);te.i=u,te.id=u.uid,B.scheduler=()=>Ds(te),Ct(u,!0),_()},G=(u,f,x)=>{f.component=u;const E=u.vnode.props;u.vnode=f,u.next=null,vr(u,f.props,E,x),xr(u,f.children,x),ht(),zs(u),gt()},ce=(u,f,x,E,A,P,F,q,B=!1)=>{const _=u&&u.children,te=u?u.shapeFlag:0,W=f.children,{patchFlag:Q,shapeFlag:se}=f;if(Q>0){if(Q&128){Xe(_,W,x,E,A,P,F,q,B);return}else if(Q&256){Fe(_,W,x,E,A,P,F,q,B);return}}se&8?(te&16&&S(_,A,P),W!==_&&d(x,W)):te&16?se&16?Xe(_,W,x,E,A,P,F,q,B):S(_,A,P,!0):(te&8&&d(x,""),se&16&&pe(W,x,E,A,P,F,q,B))},Fe=(u,f,x,E,A,P,F,q,B)=>{u=u||Ft,f=f||Ft;const _=u.length,te=f.length,W=Math.min(_,te);let Q;for(Q=0;Q<W;Q++){const se=f[Q]=B?pt(f[Q]):at(f[Q]);O(u[Q],se,x,null,A,P,F,q,B)}_>te?S(u,A,P,!0,!1,W):pe(f,x,E,A,P,F,q,B,W)},Xe=(u,f,x,E,A,P,F,q,B)=>{let _=0;const te=f.length;let W=u.length-1,Q=te-1;for(;_<=W&&_<=Q;){const se=u[_],de=f[_]=B?pt(f[_]):at(f[_]);if(Et(se,de))O(se,de,x,null,A,P,F,q,B);else break;_++}for(;_<=W&&_<=Q;){const se=u[W],de=f[Q]=B?pt(f[Q]):at(f[Q]);if(Et(se,de))O(se,de,x,null,A,P,F,q,B);else break;W--,Q--}if(_>W){if(_<=Q){const se=Q+1,de=se<te?f[se].el:E;for(;_<=Q;)O(null,f[_]=B?pt(f[_]):at(f[_]),x,de,A,P,F,q,B),_++}}else if(_>Q)for(;_<=W;)_e(u[_],A,P,!0),_++;else{const se=_,de=_,ye=new Map;for(_=de;_<=Q;_++){const Ue=f[_]=B?pt(f[_]):at(f[_]);Ue.key!=null&&ye.set(Ue.key,_)}let we,Ce=0;const Pe=Q-de+1;let Ye=!1,Ze=0;const Jt=new Array(Pe);for(_=0;_<Pe;_++)Jt[_]=0;for(_=se;_<=W;_++){const Ue=u[_];if(Ce>=Pe){_e(Ue,A,P,!0);continue}let et;if(Ue.key!=null)et=ye.get(Ue.key);else for(we=de;we<=Q;we++)if(Jt[we-de]===0&&Et(Ue,f[we])){et=we;break}et===void 0?_e(Ue,A,P,!0):(Jt[et-de]=_+1,et>=Ze?Ze=et:Ye=!0,O(Ue,f[et],x,null,A,P,F,q,B),Ce++)}const Ns=Ye?Ar(Jt):Ft;for(we=Ns.length-1,_=Pe-1;_>=0;_--){const Ue=de+_,et=f[Ue],Us=f[Ue+1],Ws=Ue+1<te?Us.el||Da(Us):E;Jt[_]===0?O(null,et,x,Ws,A,P,F,q,B):Ye&&(we<0||_!==Ns[we]?Ne(et,x,Ws,2):we--)}}},Ne=(u,f,x,E,A=null)=>{const{el:P,type:F,transition:q,children:B,shapeFlag:_}=u;if(_&6){Ne(u.component.subTree,f,x,E);return}if(_&128){u.suspense.move(f,x,E);return}if(_&64){F.move(u,f,x,Te);return}if(F===J){s(P,f,x);for(let W=0;W<B.length;W++)Ne(B[W],f,x,E);s(u.anchor,f,x);return}if(F===Tn){Z(u,f,x);return}if(E!==2&&_&1&&q)if(E===0)q.beforeEnter(P),s(P,f,x),qe(()=>q.enter(P),A);else{const{leave:W,delayLeave:Q,afterLeave:se}=q,de=()=>{u.ctx.isUnmounted?a(P):s(P,f,x)},ye=()=>{P._isLeaving&&P[st](!0),W(P,()=>{de(),se&&se()})};Q?Q(P,de,ye):ye()}else s(P,f,x)},_e=(u,f,x,E=!1,A=!1)=>{const{type:P,props:F,ref:q,children:B,dynamicChildren:_,shapeFlag:te,patchFlag:W,dirs:Q,cacheIndex:se,memo:de}=u;if(W===-2&&(A=!1),q!=null&&(ht(),en(q,null,x,u,!0),gt()),se!=null&&(f.renderCache[se]=void 0),te&256){f.ctx.deactivate(u);return}const ye=te&1&&Q,we=!tn(u);let Ce;if(we&&(Ce=F&&F.onVnodeBeforeUnmount)&&tt(Ce,f,u),te&6)y(u.component,x,E);else{if(te&128){u.suspense.unmount(x,E);return}ye&&Tt(u,null,f,"beforeUnmount"),te&64?u.type.remove(u,f,x,Te,E):_&&!_.hasOnce&&(P!==J||W>0&&W&64)?S(_,f,x,!1,!0):(P===J&&W&384||!A&&te&16)&&S(B,f,x),E&&ee(u)}const Pe=de!=null&&se==null;(we&&(Ce=F&&F.onVnodeUnmounted)||ye||Pe)&&qe(()=>{Ce&&tt(Ce,f,u),ye&&Tt(u,null,f,"unmounted"),Pe&&(u.el=null)},x)},ee=u=>{const{type:f,el:x,anchor:E,transition:A}=u;if(f===J){w(x,E);return}if(f===Tn){j(u);return}const P=()=>{a(x),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(u.shapeFlag&1&&A&&!A.persisted){const{leave:F,delayLeave:q}=A,B=()=>F(x,P);q?q(u.el,P,B):B()}else P()},w=(u,f)=>{let x;for(;u!==f;)x=k(u),a(u),u=x;a(f)},y=(u,f,x)=>{const{bum:E,scope:A,job:P,subTree:F,um:q,m:B,a:_}=u;ii(B),ii(_),E&&Sn(E),A.stop(),P&&(P.flags|=8,_e(F,u,f,x)),q&&qe(q,f),qe(()=>{u.isUnmounted=!0},f)},S=(u,f,x,E=!1,A=!1,P=0)=>{for(let F=P;F<u.length;F++)_e(u[F],f,x,E,A)},R=u=>{if(u.shapeFlag&6)return R(u.component.subTree);if(u.shapeFlag&128)return u.suspense.next();const f=k(u.anchor||u.el),x=f&&f[No];return x?k(x):f};let H=!1;const ge=(u,f,x)=>{let E;u==null?f._vnode&&(_e(f._vnode,null,null,!0),E=f._vnode.component):O(f._vnode||null,u,f,null,null,null,x),f._vnode=u,H||(H=!0,zs(E),ia(),H=!1)},Te={p:O,um:_e,m:Ne,r:ee,mt:ae,mc:pe,pc:ce,pbc:oe,n:R,o:e};return{render:ge,hydrate:void 0,createApp:cr(ge)}}function rs({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Ct({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Cr(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function La(e,t,n=!1){const s=e.children,a=t.children;if(ne(s)&&ne(a))for(let o=0;o<s.length;o++){const r=s[o];let l=a[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=a[o]=pt(a[o]),l.el=r.el),!n&&l.patchFlag!==-2&&La(r,l)),l.type===Xn&&(l.patchFlag===-1&&(l=a[o]=pt(l)),l.el=r.el),l.type===De&&!l.el&&(l.el=r.el)}}function Ar(e){const t=e.slice(),n=[0];let s,a,o,r,l;const c=e.length;for(s=0;s<c;s++){const m=e[s];if(m!==0){if(a=n[n.length-1],e[a]<m){t[s]=a,n.push(s);continue}for(o=0,r=n.length-1;o<r;)l=o+r>>1,e[n[l]]<m?o=l+1:r=l;m<e[n[o]]&&(o>0&&(t[s]=n[o-1]),n[o]=s)}}for(o=n.length,r=n[o-1];o-- >0;)n[o]=r,r=t[r];return n}function Ma(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ma(t)}function ii(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Da(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Da(t.subTree):null}const Ba=e=>e.__isSuspense;function Pr(e,t){t&&t.pendingBranch?ne(e)?t.effects.push(...e):t.effects.push(e):Do(e)}const J=Symbol.for("v-fgt"),Xn=Symbol.for("v-txt"),De=Symbol.for("v-cmt"),Tn=Symbol.for("v-stc"),sn=[];let je=null;function h(e=!1){sn.push(je=e?null:[])}function _r(){sn.pop(),je=sn[sn.length-1]||null}let cn=1;function Ln(e,t=!1){cn+=e,e<0&&je&&t&&(je.hasOnce=!0)}function qa(e){return e.dynamicChildren=cn>0?je||Ft:null,_r(),cn>0&&je&&je.push(e),e}function g(e,t,n,s,a,o){return qa(i(e,t,n,s,a,o,!0))}function Os(e,t,n,s,a){return qa(xe(e,t,n,s,a,!0))}function Mn(e){return e?e.__v_isVNode===!0:!1}function Et(e,t){return e.type===t.type&&e.key===t.key}const Oa=({key:e})=>e??null,Cn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ke(e)||Re(e)||ie(e)?{i:We,r:e,k:t,f:!!n}:e:null);function i(e,t=null,n=null,s=0,a=null,o=e===J?0:1,r=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Oa(t),ref:t&&Cn(t),scopeId:oa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:We};return l?(Fs(c,n),o&128&&e.normalize(c)):n&&(c.shapeFlag|=ke(n)?8:16),cn>0&&!r&&je&&(c.patchFlag>0||o&6)&&c.patchFlag!==32&&je.push(c),c}const xe=Er;function Er(e,t=null,n=null,s=0,a=null,o=!1){if((!e||e===va)&&(e=De),Mn(e)){const l=kt(e,t,!0);return n&&Fs(l,n),cn>0&&!o&&je&&(l.shapeFlag&6?je[je.indexOf(e)]=l:je.push(l)),l.patchFlag=-2,l}if(Ur(e)&&(e=e.__vccOpts),t){t=Ir(t);let{class:l,style:c}=t;l&&!ke(l)&&(t.class=V(l)),fe(c)&&(Ms(c)&&!ne(c)&&(c=Ae({},c)),t.style=Ht(c))}const r=ke(e)?1:Ba(e)?128:ca(e)?64:fe(e)?4:ie(e)?2:0;return i(e,t,n,s,a,r,o,!0)}function Ir(e){return e?Ms(e)||Aa(e)?Ae({},e):e:null}function kt(e,t,n=!1,s=!1){const{props:a,ref:o,patchFlag:r,children:l,transition:c}=e,m=t?Rr(a||{},t):a,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:m,key:m&&Oa(m),ref:t&&t.ref?n&&o?ne(o)?o.concat(Cn(t)):[o,Cn(t)]:Cn(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==J?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&kt(e.ssContent),ssFallback:e.ssFallback&&kt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&s&&ln(d,c.clone(d)),d}function St(e=" ",t=0){return xe(Xn,null,e,t)}function xt(e,t){const n=xe(Tn,null,e);return n.staticCount=t,n}function K(e="",t=!1){return t?(h(),Os(De,null,e)):xe(De,null,e)}function at(e){return e==null||typeof e=="boolean"?xe(De):ne(e)?xe(J,null,e.slice()):Mn(e)?pt(e):xe(Xn,null,String(e))}function pt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:kt(e)}function Fs(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(ne(t))n=16;else if(typeof t=="object")if(s&65){const a=t.default;a&&(a._c&&(a._d=!1),Fs(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!Aa(t)?t._ctx=We:a===3&&We&&(We.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ie(t)?(t={default:t,_ctx:We},n=32):(t=String(t),s&64?(n=16,t=[St(t)]):n=8);e.children=t,e.shapeFlag|=n}function Rr(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const a in s)if(a==="class")t.class!==s.class&&(t.class=V([t.class,s.class]));else if(a==="style")t.style=Ht([t.style,s.style]);else if(On(a)){const o=t[a],r=s[a];r&&o!==r&&!(ne(o)&&o.includes(r))?t[a]=o?[].concat(o,r):r:r==null&&o==null&&!Fn(a)&&(t[a]=r)}else a!==""&&(t[a]=s[a])}return t}function tt(e,t,n,s=null){Qe(e,t,7,[n,s])}const Lr=Sa();let Mr=0;function Dr(e,t,n){const s=e.type,a=(t?t.appContext:e.appContext)||Lr,o={uid:Mr++,vnode:e,type:s,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new no(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_a(s,a),emitsOptions:xa(s,a),emit:null,emitted:null,propsDefaults:ve,inheritAttrs:s.inheritAttrs,ctx:ve,data:ve,props:ve,attrs:ve,slots:ve,refs:ve,setupState:ve,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=ur.bind(null,o),e.ce&&e.ce(o),o}let Ie=null;const Fa=()=>Ie||We;let Dn,Ss;{const e=Hn(),t=(n,s)=>{let a;return(a=e[n])||(a=e[n]=[]),a.push(s),o=>{a.length>1?a.forEach(r=>r(o)):a[0](o)}};Dn=t("__VUE_INSTANCE_SETTERS__",n=>Ie=n),Ss=t("__VUE_SSR_SETTERS__",n=>dn=n)}const hn=e=>{const t=Ie;return Dn(e),e.scope.on(),()=>{e.scope.off(),Dn(t)}},ai=()=>{Ie&&Ie.scope.off(),Dn(null)};function Na(e){return e.vnode.shapeFlag&4}let dn=!1;function Br(e,t=!1,n=!1){t&&Ss(t);const{props:s,children:a}=e.vnode,o=Na(e);yr(e,s,o,t),Sr(e,a,n||t);const r=o?qr(e,t):void 0;return t&&Ss(!1),r}function qr(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,nr);const{setup:s}=n;if(s){ht();const a=e.setupContext=s.length>1?Fr(e):null,o=hn(e),r=fn(s,e,0,[e.props,a]),l=Mi(r);if(gt(),o(),(l||e.sp)&&!tn(e)&&ha(e),l){if(r.then(ai,ai),t)return r.then(c=>{oi(e,c)}).catch(c=>{Jn(c,e,0)});e.asyncDep=r}else oi(e,r)}else Ua(e)}function oi(e,t,n){ie(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:fe(t)&&(e.setupState=ea(t)),Ua(e)}function Ua(e,t,n){const s=e.type;e.render||(e.render=s.render||rt);{const a=hn(e);ht();try{sr(e)}finally{gt(),a()}}}const Or={get(e,t){return Ee(e,"get",""),e[t]}};function Fr(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Or),slots:e.slots,emit:e.emit,expose:t}}function Yn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ea(To(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in nn)return nn[n](e)},has(t,n){return n in t||n in nn}})):e.proxy}function Nr(e,t=!0){return ie(e)?e.displayName||e.name:e.name||t&&e.__name}function Ur(e){return ie(e)&&"__vccOpts"in e}const be=(e,t)=>Eo(e,t,dn);function Wr(e,t,n){try{Ln(-1);const s=arguments.length;return s===2?fe(t)&&!ne(t)?Mn(t)?xe(e,null,[t]):xe(e,t):xe(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Mn(n)&&(n=[n]),xe(e,t,n))}finally{Ln(1)}}const jr="3.5.32";/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xs;const ri=typeof window<"u"&&window.trustedTypes;if(ri)try{xs=ri.createPolicy("vue",{createHTML:e=>e})}catch{}const Wa=xs?e=>xs.createHTML(e):e=>e,Hr="http://www.w3.org/2000/svg",$r="http://www.w3.org/1998/Math/MathML",ut=typeof document<"u"?document:null,li=ut&&ut.createElement("template"),Jr={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const a=t==="svg"?ut.createElementNS(Hr,e):t==="mathml"?ut.createElementNS($r,e):n?ut.createElement(e,{is:n}):ut.createElement(e);return e==="select"&&s&&s.multiple!=null&&a.setAttribute("multiple",s.multiple),a},createText:e=>ut.createTextNode(e),createComment:e=>ut.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ut.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,a,o){const r=n?n.previousSibling:t.lastChild;if(a&&(a===o||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===o||!(a=a.nextSibling)););else{li.innerHTML=Wa(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const l=li.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},bt="transition",Kt="animation",un=Symbol("_vtc"),ja={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},zr=Ae({},da,ja),Gr=e=>(e.displayName="Transition",e.props=zr,e),ze=Gr((e,{slots:t})=>Wr(jo,Vr(e),t)),At=(e,t=[])=>{ne(e)?e.forEach(n=>n(...t)):e&&e(...t)},ci=e=>e?ne(e)?e.some(t=>t.length>1):e.length>1:!1;function Vr(e){const t={};for(const N in e)N in ja||(t[N]=e[N]);if(e.css===!1)return t;const{name:n="v",type:s,duration:a,enterFromClass:o=`${n}-enter-from`,enterActiveClass:r=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=o,appearActiveClass:m=r,appearToClass:d=l,leaveFromClass:b=`${n}-leave-from`,leaveActiveClass:k=`${n}-leave-active`,leaveToClass:I=`${n}-leave-to`}=e,$=Kr(a),O=$&&$[0],L=$&&$[1],{onBeforeEnter:D,onEnter:M,onEnterCancelled:Z,onLeave:j,onLeaveCancelled:z,onBeforeAppear:T=D,onAppear:he=M,onAppearCancelled:pe=Z}=t,X=(N,re,ae,C)=>{N._enterCancelled=C,Pt(N,re?d:l),Pt(N,re?m:r),ae&&ae()},oe=(N,re)=>{N._isLeaving=!1,Pt(N,b),Pt(N,I),Pt(N,k),re&&re()},le=N=>(re,ae)=>{const C=N?he:M,v=()=>X(re,N,ae);At(C,[re,v]),di(()=>{Pt(re,N?c:o),dt(re,N?d:l),ci(C)||ui(re,s,O,v)})};return Ae(t,{onBeforeEnter(N){At(D,[N]),dt(N,o),dt(N,r)},onBeforeAppear(N){At(T,[N]),dt(N,c),dt(N,m)},onEnter:le(!1),onAppear:le(!0),onLeave(N,re){N._isLeaving=!0;const ae=()=>oe(N,re);dt(N,b),N._enterCancelled?(dt(N,k),fi(N)):(fi(N),dt(N,k)),di(()=>{N._isLeaving&&(Pt(N,b),dt(N,I),ci(j)||ui(N,s,L,ae))}),At(j,[N,ae])},onEnterCancelled(N){X(N,!1,void 0,!0),At(Z,[N])},onAppearCancelled(N){X(N,!0,void 0,!0),At(pe,[N])},onLeaveCancelled(N){oe(N),At(z,[N])}})}function Kr(e){if(e==null)return null;if(fe(e))return[ls(e.enter),ls(e.leave)];{const t=ls(e);return[t,t]}}function ls(e){return Ga(e)}function dt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[un]||(e[un]=new Set)).add(t)}function Pt(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[un];n&&(n.delete(t),n.size||(e[un]=void 0))}function di(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Qr=0;function ui(e,t,n,s){const a=e._endId=++Qr,o=()=>{a===e._endId&&s()};if(n!=null)return setTimeout(o,n);const{type:r,timeout:l,propCount:c}=Xr(e,t);if(!r)return s();const m=r+"end";let d=0;const b=()=>{e.removeEventListener(m,k),o()},k=I=>{I.target===e&&++d>=c&&b()};setTimeout(()=>{d<c&&b()},l+1),e.addEventListener(m,k)}function Xr(e,t){const n=window.getComputedStyle(e),s=$=>(n[$]||"").split(", "),a=s(`${bt}Delay`),o=s(`${bt}Duration`),r=pi(a,o),l=s(`${Kt}Delay`),c=s(`${Kt}Duration`),m=pi(l,c);let d=null,b=0,k=0;t===bt?r>0&&(d=bt,b=r,k=o.length):t===Kt?m>0&&(d=Kt,b=m,k=c.length):(b=Math.max(r,m),d=b>0?r>m?bt:Kt:null,k=d?d===bt?o.length:c.length:0);const I=d===bt&&/\b(?:transform|all)(?:,|$)/.test(s(`${bt}Property`).toString());return{type:d,timeout:b,propCount:k,hasTransform:I}}function pi(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>mi(n)+mi(e[s])))}function mi(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function fi(e){return(e?e.ownerDocument:document).body.offsetHeight}function Yr(e,t,n){const s=e[un];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const hi=Symbol("_vod"),Zr=Symbol("_vsh"),el=Symbol(""),tl=/(?:^|;)\s*display\s*:/;function nl(e,t,n){const s=e.style,a=ke(n);let o=!1;if(n&&!a){if(t)if(ke(t))for(const r of t.split(";")){const l=r.slice(0,r.indexOf(":")).trim();n[l]==null&&An(s,l,"")}else for(const r in t)n[r]==null&&An(s,r,"");for(const r in n)r==="display"&&(o=!0),An(s,r,n[r])}else if(a){if(t!==n){const r=s[el];r&&(n+=";"+r),s.cssText=n,o=tl.test(n)}}else t&&e.removeAttribute("style");hi in e&&(e[hi]=o?s.display:"",e[Zr]&&(s.display="none"))}const gi=/\s*!important$/;function An(e,t,n){if(ne(n))n.forEach(s=>An(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=sl(e,t);gi.test(n)?e.setProperty(Mt(s),n.replace(gi,""),"important"):e[s]=n}}const yi=["Webkit","Moz","ms"],cs={};function sl(e,t){const n=cs[t];if(n)return n;let s=Be(t);if(s!=="filter"&&s in e)return cs[t]=s;s=Wn(s);for(let a=0;a<yi.length;a++){const o=yi[a]+s;if(o in e)return cs[t]=o}return t}const vi="http://www.w3.org/1999/xlink";function bi(e,t,n,s,a,o=Za(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(vi,t.slice(6,t.length)):e.setAttributeNS(vi,t,n):n==null||o&&!Oi(n)?e.removeAttribute(t):e.setAttribute(t,o?"":lt(n)?String(n):n)}function wi(e,t,n,s,a){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Wa(n):n);return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const l=o==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let r=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Oi(n):n==null&&l==="string"?(n="",r=!0):l==="number"&&(n=0,r=!0)}try{e[t]=n}catch{}r&&e.removeAttribute(a||t)}function It(e,t,n,s){e.addEventListener(t,n,s)}function il(e,t,n,s){e.removeEventListener(t,n,s)}const Si=Symbol("_vei");function al(e,t,n,s,a=null){const o=e[Si]||(e[Si]={}),r=o[t];if(s&&r)r.value=s;else{const[l,c]=ol(t);if(s){const m=o[t]=cl(s,a);It(e,l,m,c)}else r&&(il(e,l,r,c),o[t]=void 0)}}const xi=/(?:Once|Passive|Capture)$/;function ol(e){let t;if(xi.test(e)){t={};let s;for(;s=e.match(xi);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Mt(e.slice(2)),t]}let ds=0;const rl=Promise.resolve(),ll=()=>ds||(rl.then(()=>ds=0),ds=Date.now());function cl(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Qe(dl(s,n.value),t,5,[s])};return n.value=e,n.attached=ll(),n}function dl(e,t){if(ne(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>a=>!a._stopped&&s&&s(a))}else return t}const ki=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,ul=(e,t,n,s,a,o)=>{const r=a==="svg";t==="class"?Yr(e,s,r):t==="style"?nl(e,n,s):On(t)?Fn(t)||al(e,t,n,s,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):pl(e,t,s,r))?(wi(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&bi(e,t,s,r,o,t!=="value")):e._isVueCE&&(ml(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!ke(s)))?wi(e,Be(t),s,o,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),bi(e,t,s,r))};function pl(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&ki(t)&&ie(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const a=e.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return ki(t)&&ke(n)?!1:t in e}function ml(e,t){const n=e._def.props;if(!n)return!1;const s=Be(t);return Array.isArray(n)?n.some(a=>Be(a)===s):Object.keys(n).some(a=>Be(a)===s)}const Bn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return ne(t)?n=>Sn(t,n):t};function fl(e){e.target.composing=!0}function Ti(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const jt=Symbol("_assign");function Ci(e,t,n){return t&&(e=e.trim()),n&&(e=jn(e)),e}const bn={created(e,{modifiers:{lazy:t,trim:n,number:s}},a){e[jt]=Bn(a);const o=s||a.props&&a.props.type==="number";It(e,t?"change":"input",r=>{r.target.composing||e[jt](Ci(e.value,n,o))}),(n||o)&&It(e,"change",()=>{e.value=Ci(e.value,n,o)}),t||(It(e,"compositionstart",fl),It(e,"compositionend",Ti),It(e,"change",Ti))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:s,trim:a,number:o}},r){if(e[jt]=Bn(r),e.composing)return;const l=(o||e.type==="number")&&!/^0\d/.test(e.value)?jn(e.value):e.value,c=t??"";if(l===c)return;const m=e.getRootNode();(m instanceof Document||m instanceof ShadowRoot)&&m.activeElement===e&&e.type!=="range"&&(s&&t===n||a&&e.value.trim()===c)||(e.value=c)}},hl={deep:!0,created(e,{value:t,modifiers:{number:n}},s){const a=Nn(t);It(e,"change",()=>{const o=Array.prototype.filter.call(e.options,r=>r.selected).map(r=>n?jn(qn(r)):qn(r));e[jt](e.multiple?a?new Set(o):o:o[0]),e._assigning=!0,na(()=>{e._assigning=!1})}),e[jt]=Bn(s)},mounted(e,{value:t}){Ai(e,t)},beforeUpdate(e,t,n){e[jt]=Bn(n)},updated(e,{value:t}){e._assigning||Ai(e,t)}};function Ai(e,t){const n=e.multiple,s=ne(t);if(!(n&&!s&&!Nn(t))){for(let a=0,o=e.options.length;a<o;a++){const r=e.options[a],l=qn(r);if(n)if(s){const c=typeof l;c==="string"||c==="number"?r.selected=t.some(m=>String(m)===String(l)):r.selected=to(t,l)>-1}else r.selected=t.has(l);else if(mn(qn(r),t)){e.selectedIndex!==a&&(e.selectedIndex=a);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function qn(e){return"_value"in e?e._value:e.value}const gl=["ctrl","shift","alt","meta"],yl={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>gl.some(n=>e[`${n}Key`]&&!t.includes(n))},Ve=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),s=t.join(".");return n[s]||(n[s]=(a,...o)=>{for(let r=0;r<t.length;r++){const l=yl[t[r]];if(l&&l(a,t))return}return e(a,...o)})},vl=Ae({patchProp:ul},Jr);let Pi;function bl(){return Pi||(Pi=kr(vl))}const wl=(...e)=>{const t=bl().createApp(...e),{mount:n}=t;return t.mount=s=>{const a=xl(s);if(!a)return;const o=t._component;!ie(o)&&!o.render&&!o.template&&(o.template=a.innerHTML),a.nodeType===1&&(a.textContent="");const r=n(a,!1,Sl(a));return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),r},t};function Sl(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function xl(e){return ke(e)?document.querySelector(e):e}const kl={"Task 1: Introduction to Selenium":{title:"Introduction to Selenium",description:`Selenium is the most widely used open-source test automation framework for web applications. It allows testers and developers to automate browser interactions, simulating real user behavior across different browsers and operating systems.

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
System.out.println("File downloaded: " + downloadedFile);`}]}},Tl={"Task 1: Introduction to Playwright":{title:"Introduction to Playwright",description:`Playwright is a modern end-to-end testing framework developed by Microsoft. It supports multiple browsers, languages, and provides powerful automation capabilities.

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
          path: test-results/`}]}},Cl={"Task 1: Introduction to REST & APIs":{title:"Introduction to REST & APIs",description:`REST (Representational State Transfer) is an architectural style for designing networked applications. RESTful APIs use HTTP requests to perform CRUD operations on resources.

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
}`}]}},Al={title:"Rest Assured Interview Questions",icon:"🔌",questions:[{id:1,question:"What is Rest Assured?",answer:"Rest Assured is an open-source Java library used for testing RESTful web services. It simplifies the process of writing tests for REST APIs by providing a domain-specific language (DSL) for making HTTP requests and validating responses.",difficulty:"Easy"},{id:2,question:"What are the main HTTP methods supported by Rest Assured?",answer:"Rest Assured supports GET, POST, PUT, DELETE, PATCH, HEAD, and OPTIONS HTTP methods. Each method is represented by a corresponding method in the Rest Assured API: get(), post(), put(), delete(), patch(), head(), and options().",difficulty:"Easy"},{id:3,question:"What is the BDD syntax in Rest Assured?",answer:"Rest Assured supports BDD (Behavior Driven Development) syntax using Given-When-Then pattern. 'given()' sets up preconditions like headers/params, 'when()' performs the HTTP action, and 'then()' validates the response. Example: given().header('key','val').when().get('/endpoint').then().statusCode(200).",difficulty:"Easy"},{id:4,question:"How do you validate a JSON response field in Rest Assured?",answer:"Using JSONPath in the then() block: .then().body('fieldName', equalTo('expectedValue')). For nested fields use dot notation: .body('user.name', equalTo('John')). For arrays use: .body('users[0].name', equalTo('John')).",difficulty:"Easy"},{id:5,question:"What is the difference between queryParam() and pathParam()?",answer:"queryParam() appends parameters to the URL as query strings (e.g., /users?id=1), while pathParam() replaces placeholders in the URL path (e.g., /users/{id} becomes /users/1). queryParam is used for filtering/sorting, pathParam for identifying specific resources.",difficulty:"Medium"},{id:6,question:"How do you handle authentication in Rest Assured?",answer:"Rest Assured supports multiple authentication types: Basic Auth using .auth().basic('user','pass'), OAuth2 using .auth().oauth2('token'), Digest Auth using .auth().digest('user','pass'), and API Key by adding it as a header using .header('Authorization', 'Bearer token').",difficulty:"Medium"},{id:7,question:"How do you extract a value from a JSON response?",answer:"Using the extract() method: String value = given().when().get('/endpoint').then().extract().path('fieldName'). Or extract the full response: Response response = given().when().get('/endpoint'); String val = response.jsonPath().getString('fieldName').",difficulty:"Medium"},{id:8,question:"What is RequestSpecification in Rest Assured?",answer:"RequestSpecification is an interface used to define reusable request configurations. You can set base URI, headers, content type, and auth once using RequestSpecBuilder and reuse it across tests. Example: RequestSpecification spec = new RequestSpecBuilder().setBaseUri('http://api.com').build();",difficulty:"Medium"},{id:9,question:"How do you handle SSL certificates in Rest Assured?",answer:"To bypass SSL certificate validation, use: RestAssured.useRelaxedHTTPSValidation() globally, or given().relaxedHTTPSValidation() per request. For custom certificates, use given().keyStore('/path/to/keystore', 'password').",difficulty:"Medium"},{id:10,question:"What is the difference between contentType() and accept() in Rest Assured?",answer:"contentType() sets the Content-Type header telling the server what format the request body is in (e.g., application/json). accept() sets the Accept header telling the server what format you expect in the response. Both can use ContentType enum values like ContentType.JSON.",difficulty:"Medium"},{id:11,question:"How do you send a POST request with a JSON body?",answer:"Use given().contentType(ContentType.JSON).body(jsonString).when().post('/endpoint'). The body can be a String, Map, POJO, or JSONObject. For POJO: given().contentType(ContentType.JSON).body(pojoObject).when().post('/users'). Rest Assured serializes it automatically.",difficulty:"Easy"},{id:12,question:"What is ResponseSpecification in Rest Assured?",answer:"ResponseSpecification defines reusable response validations. Built using ResponseSpecBuilder: ResponseSpecification spec = new ResponseSpecBuilder().expectStatusCode(200).expectContentType(ContentType.JSON).build(). Then use: when().get('/endpoint').then().spec(spec).",difficulty:"Hard"},{id:13,question:"How do you handle multipart file uploads in Rest Assured?",answer:"Use given().multiPart('file', new File('/path/to/file')).when().post('/upload'). For multiple parts: given().multiPart('file', file).multiPart('name', 'value').when().post('/upload'). Set content type to multipart/form-data automatically.",difficulty:"Hard"},{id:14,question:"What is JSONPath and how is it used in Rest Assured?",answer:"JSONPath is a query language for JSON similar to XPath for XML. In Rest Assured: response.jsonPath().getString('name'), .getInt('age'), .getList('items'), .get('users[0].address.city'). Supports wildcards: .getList('users.name') gets all user names.",difficulty:"Medium"},{id:15,question:"How do you perform schema validation in Rest Assured?",answer:"Using matchesJsonSchemaInClasspath() from io.restassured.module.jsv.JsonSchemaValidator: then().body(matchesJsonSchemaInClasspath('schema.json')). The JSON schema file should be in the resources folder. Requires the json-schema-validator dependency.",difficulty:"Hard"},{id:16,question:"How do you handle cookies in Rest Assured?",answer:"To send cookies: given().cookie('cookieName', 'cookieValue'). To get cookies from response: Response response = when().get('/endpoint'); String cookie = response.getCookie('cookieName'). To get all cookies: Map cookies = response.getCookies().",difficulty:"Medium"},{id:17,question:"What is the use of filters in Rest Assured?",answer:"Filters intercept requests and responses for logging, authentication, or modification. Built-in filters: RequestLoggingFilter, ResponseLoggingFilter, AllureRestAssured for reporting. Custom filters implement the Filter interface. Add using: given().filter(new RequestLoggingFilter()).",difficulty:"Hard"},{id:18,question:"How do you perform response time validation?",answer:"Using time() assertion: then().time(lessThan(2000L)) validates response time is less than 2 seconds. Or extract: long time = when().get('/endpoint').timeIn(TimeUnit.MILLISECONDS). Requires Hamcrest matchers for comparison.",difficulty:"Medium"},{id:19,question:"How do you chain API requests in Rest Assured?",answer:"Extract a value from one response and use in the next: String token = given().body(loginBody).post('/login').then().extract().path('token'); then: given().header('Authorization','Bearer '+token).when().get('/profile').then().statusCode(200).",difficulty:"Hard"},{id:20,question:"What is the difference between RestAssured.given() and SerenityRest.given()?",answer:"RestAssured.given() is the standard Rest Assured entry point. SerenityRest.given() is a wrapper provided by Serenity BDD framework that integrates Rest Assured with Serenity reporting, providing richer test reports with request/response details automatically captured.",difficulty:"Hard"}]},Pl={title:"Selenium Interview Questions",icon:"🌐",questions:[{id:1,question:"What is Selenium and what are its components?",answer:"Selenium is an open-source automation testing tool for web applications. Components: Selenium IDE (record/playback browser plugin), Selenium WebDriver (programmatic browser control), Selenium Grid (parallel/distributed test execution), and Selenium RC (deprecated, replaced by WebDriver).",difficulty:"Easy"},{id:2,question:"What are the different types of locators in Selenium?",answer:"Selenium supports 8 locators: ID (fastest, most reliable), Name, ClassName, TagName, LinkText (exact anchor text), PartialLinkText (partial anchor text), CSS Selector (flexible, fast), and XPath (most powerful, can traverse DOM). Best practice: prefer ID > CSS Selector > XPath.",difficulty:"Easy"},{id:3,question:"What is the difference between findElement() and findElements()?",answer:"findElement() returns a single WebElement and throws NoSuchElementException if not found. findElements() returns a List of WebElements and returns an empty list if none found (no exception). Use findElements().size() > 0 to check element existence safely.",difficulty:"Easy"},{id:4,question:"Explain implicit, explicit, and fluent waits.",answer:"Implicit Wait: global wait applied to all findElement calls, waits up to specified time. Explicit Wait: waits for specific condition using WebDriverWait and ExpectedConditions. Fluent Wait: advanced explicit wait with polling interval and exception ignoring. Best practice: avoid mixing implicit and explicit waits.",difficulty:"Medium"},{id:5,question:"What is Page Object Model (POM)?",answer:"POM is a design pattern where each web page has a corresponding class containing WebElements and methods to interact with them. Benefits: reduces code duplication, improves maintainability, separates test logic from page logic. Each page class uses @FindBy annotations or By locators with PageFactory.initElements().",difficulty:"Medium"},{id:6,question:"How do you handle dynamic elements in Selenium?",answer:"Use dynamic XPath with contains(): //div[contains(@id,'dynamic')], starts-with(): //input[starts-with(@name,'user')], or text(): //span[text()='Submit']. Also use explicit waits with ExpectedConditions.visibilityOfElementLocated() to wait for dynamic elements to appear.",difficulty:"Medium"},{id:7,question:"How do you handle dropdowns in Selenium?",answer:"Use the Select class for HTML select elements: Select dropdown = new Select(driver.findElement(By.id('dropdown'))); Methods: selectByVisibleText('option'), selectByValue('val'), selectByIndex(0), getOptions(), getFirstSelectedOption(), deselectAll(). For custom dropdowns, click the element then click the option.",difficulty:"Easy"},{id:8,question:"How do you handle multiple windows/tabs in Selenium?",answer:"Get all window handles: Set handles = driver.getWindowHandles(). Switch to new window: driver.switchTo().window(newHandle). Get current handle: driver.getWindowHandle(). To close current window: driver.close(). To switch back: driver.switchTo().window(originalHandle).",difficulty:"Medium"},{id:9,question:"How do you handle iframes in Selenium?",answer:"Switch to iframe by index: driver.switchTo().frame(0). By name/id: driver.switchTo().frame('frameName'). By WebElement: driver.switchTo().frame(driver.findElement(By.id('frame'))). To return to main page: driver.switchTo().defaultContent(). To go one level up: driver.switchTo().parentFrame().",difficulty:"Medium"},{id:10,question:"What is Actions class and when do you use it?",answer:"Actions class handles complex user interactions: mouseHover using moveToElement(), drag and drop using dragAndDrop(), right-click using contextClick(), double-click using doubleClick(), keyboard actions using keyDown()/keyUp(), and chaining multiple actions using build().perform().",difficulty:"Medium"},{id:11,question:"How do you take a screenshot in Selenium?",answer:"Cast driver to TakesScreenshot: TakesScreenshot ts = (TakesScreenshot)driver. Capture screenshot: File src = ts.getScreenshotAs(OutputType.FILE). Save to file: FileUtils.copyFile(src, new File('path/screenshot.png')). Can also capture specific element: ((TakesScreenshot)element).getScreenshotAs(OutputType.FILE).",difficulty:"Easy"},{id:12,question:"What is JavaScriptExecutor and when do you use it?",answer:"JavaScriptExecutor executes JavaScript in browser context. Use when: normal click doesn't work, scrolling (executeScript('window.scrollBy(0,500)')), highlighting elements, getting element attributes, clicking hidden elements. Cast: JavascriptExecutor js = (JavascriptExecutor)driver; js.executeScript('script', element).",difficulty:"Medium"},{id:13,question:"How do you handle alerts in Selenium?",answer:"Switch to alert: Alert alert = driver.switchTo().alert(). Methods: accept() clicks OK, dismiss() clicks Cancel, getText() gets alert message, sendKeys('text') enters text in prompt. Use try-catch with NoAlertPresentException. For explicit wait: new WebDriverWait(driver,10).until(ExpectedConditions.alertIsPresent()).",difficulty:"Easy"},{id:14,question:"What is Selenium Grid and how does it work?",answer:"Selenium Grid enables parallel test execution across multiple machines and browsers. Hub is the central point that receives test requests. Nodes are machines registered to the hub that execute tests. Tests connect to hub URL, hub routes to matching node. Supports Docker containers for easy setup.",difficulty:"Hard"},{id:15,question:"What is the difference between driver.close() and driver.quit()?",answer:"driver.close() closes only the current browser window but keeps the WebDriver session active. driver.quit() closes all browser windows and terminates the WebDriver session completely, releasing all resources. Always use quit() in tearDown to avoid memory leaks.",difficulty:"Easy"},{id:16,question:"How do you handle StaleElementReferenceException?",answer:"StaleElementReferenceException occurs when a referenced element is no longer attached to DOM (page refresh/navigation). Solutions: re-find element before use, use try-catch to retry, use explicit wait with refreshed() condition: ExpectedConditions.refreshed(ExpectedConditions.elementToBeClickable(locator)).",difficulty:"Hard"},{id:17,question:"How do you scroll in Selenium?",answer:"Scroll by pixels: js.executeScript('window.scrollBy(0,500)'). Scroll to bottom: js.executeScript('window.scrollTo(0,document.body.scrollHeight)'). Scroll to element: js.executeScript('arguments[0].scrollIntoView(true)', element). Using Actions: new Actions(driver).scrollToElement(element).perform() in Selenium 4.",difficulty:"Medium"},{id:18,question:"What are the new features in Selenium 4?",answer:"Selenium 4 features: W3C WebDriver standardization, relative locators (above, below, near, toLeftOf, toRightOf), Chrome DevTools Protocol (CDP) integration, improved Selenium Grid with Docker support, new window/tab opening API (driver.switchTo().newWindow()), and better documentation.",difficulty:"Hard"},{id:19,question:"How do you handle file uploads in Selenium?",answer:"For input type=file: driver.findElement(By.id('upload')).sendKeys('/path/to/file'). For drag-drop upload zones use JavaScript or Actions class. For OS-level file dialogs use Robot class or AutoIT for Windows. In headless mode, sendKeys approach works best without triggering OS dialogs.",difficulty:"Medium"},{id:20,question:"What is the difference between CSS Selector and XPath?",answer:"CSS Selector: faster, simpler syntax, better for styling-based selection, cannot traverse up DOM (no parent selection), e.g., div.className > input. XPath: can traverse up and down DOM, supports text-based selection, more powerful but slower, e.g., //div[@class='name']/parent::div. Prefer CSS Selector for performance.",difficulty:"Medium"}]},_l={title:"Framework Interview Questions",icon:"🏗️",questions:[{id:1,question:"What is TestNG and how is it different from JUnit?",answer:"TestNG is a testing framework inspired by JUnit but with more features: supports grouping tests, parallel execution, data-driven testing with @DataProvider, dependent test methods, flexible test configuration with XML, before/after suite/group hooks, and soft assertions. JUnit is simpler but less feature-rich.",difficulty:"Easy"},{id:2,question:"Explain TestNG annotations in order of execution.",answer:"@BeforeSuite → @BeforeTest → @BeforeGroups → @BeforeClass → @BeforeMethod → @Test → @AfterMethod → @AfterClass → @AfterGroups → @AfterTest → @AfterSuite. BeforeSuite runs once before entire suite. BeforeClass runs once before all test methods in class. BeforeMethod runs before each test method.",difficulty:"Medium"},{id:3,question:"What is Data Driven Testing and how do you implement it in TestNG?",answer:"Data Driven Testing separates test data from test logic. In TestNG, use @DataProvider annotation: @DataProvider(name='loginData') public Object[][] getData() { return new Object[][]{{'user1','pass1'},{'user2','pass2'}}; } Then reference in test: @Test(dataProvider='loginData') public void test(String u, String p){}.",difficulty:"Medium"},{id:4,question:"What is Page Object Model and what are its advantages?",answer:"POM is a design pattern creating a class for each web page containing locators and methods. Advantages: reduces code duplication (DRY principle), easy maintenance (change locator in one place), improves readability, separates page logic from test logic, enables reuse across multiple tests. Use with PageFactory for @FindBy annotations.",difficulty:"Medium"},{id:5,question:"What is the difference between keyword-driven and data-driven frameworks?",answer:"Data-Driven: test logic is fixed, only test data changes (stored in Excel/JSON/CSV). Keywords-Driven: test steps are driven by keywords in external files (e.g., 'click', 'enterText'), business analysts can write tests. Hybrid Framework combines both approaches for maximum flexibility and reusability.",difficulty:"Medium"},{id:6,question:"How do you implement parallel execution in TestNG?",answer:"In testng.xml: <suite name='Suite' parallel='methods' thread-count='4'>. Parallel options: methods (each method in separate thread), tests (each test tag in separate thread), classes (each class in separate thread), instances (each instance in separate thread). Ensure thread-safe WebDriver using ThreadLocal<WebDriver>.",difficulty:"Hard"},{id:7,question:"What is ThreadLocal and why is it used in Selenium frameworks?",answer:"ThreadLocal provides thread-local variables, giving each thread its own independent WebDriver instance. Implementation: private static ThreadLocal<WebDriver> driver = new ThreadLocal<>(). Set: driver.set(new ChromeDriver()). Get: driver.get(). Remove: driver.remove(). Essential for parallel test execution to avoid WebDriver sharing between threads.",difficulty:"Hard"},{id:8,question:"How do you generate Extent Reports?",answer:"Create ExtentReports instance, create ExtentHtmlReporter, attach reporter. In tests: ExtentTest test = extent.createTest('testName'). Log: test.log(Status.PASS,'message') or test.pass/fail/skip(). Add screenshot: test.addScreenCaptureFromPath(path). Call extent.flush() in @AfterSuite. Use ExtentTestNGITestListener for automatic integration.",difficulty:"Medium"},{id:9,question:"What is Maven and how is it used in test automation?",answer:"Maven is a build automation tool managing project dependencies via pom.xml. For automation: add dependencies (Selenium, TestNG, etc.), run tests using mvn test, configure Surefire plugin to run TestNG XML, set properties for parallel execution, generate reports. Maven lifecycle: validate → compile → test → package → install → deploy.",difficulty:"Medium"},{id:10,question:"How do you read test data from Excel in a framework?",answer:"Using Apache POI library: add poi and poi-ooxml dependencies. Read: FileInputStream fis = new FileInputStream('data.xlsx'); Workbook wb = new XSSFWorkbook(fis); Sheet sheet = wb.getSheet('Sheet1'); Row row = sheet.getRow(0); Cell cell = row.getCell(0); String value = cell.getStringCellValue(). Create utility class for reuse.",difficulty:"Medium"},{id:11,question:"What is Singleton design pattern in test frameworks?",answer:"Singleton ensures only one instance of a class exists. Used for WebDriver: private static WebDriver driver; public static WebDriver getInstance() { if(driver == null) { driver = new ChromeDriver(); } return driver; }. Warning: not thread-safe, use ThreadLocal for parallel execution instead.",difficulty:"Hard"},{id:12,question:"How do you implement logging in a test framework?",answer:"Use Log4j2 or SLF4J with Logback. Add dependency, create log4j2.xml config file. In classes: private static final Logger log = LogManager.getLogger(ClassName.class). Use: log.info(), log.debug(), log.error(), log.warn(). Configure appenders for console and file output. Integrate with Extent Reports for test-level logging.",difficulty:"Medium"},{id:13,question:"What is the Factory design pattern in automation?",answer:"Factory pattern creates objects without specifying exact class. Used for cross-browser testing: DriverFactory.getDriver('chrome') returns ChromeDriver, getDriver('firefox') returns FirefoxDriver. Centralizes driver creation, easy to add new browsers, follows Open/Closed principle. Combine with configuration files for browser selection.",difficulty:"Hard"},{id:14,question:"How do you handle test configuration using properties files?",answer:"Create config.properties file with key-value pairs. Read using: Properties props = new Properties(); FileInputStream fis = new FileInputStream('config.properties'); props.load(fis); String url = props.getProperty('baseUrl'). Create ConfigReader utility class as Singleton. Store: URLs, browser type, credentials, timeouts.",difficulty:"Easy"},{id:15,question:"What is CI/CD and how do you integrate tests with Jenkins?",answer:"CI/CD automates building, testing, and deploying. Jenkins integration: create Pipeline/Freestyle job, configure Git repository, add build step 'mvn clean test', configure post-build actions for reports (publish HTML/Allure report), set triggers (GitHub webhook, scheduled), email notifications on failure.",difficulty:"Hard"},{id:16,question:"How do you implement soft assertions in TestNG?",answer:"Soft assertions don't stop test execution on failure. Use: SoftAssert softAssert = new SoftAssert(). Multiple checks: softAssert.assertEquals(actual, expected, 'message'), softAssert.assertTrue(condition). Call softAssert.assertAll() at end to report all failures. Useful for validating multiple fields on a form.",difficulty:"Medium"},{id:17,question:"What is the Builder design pattern in test automation?",answer:"Builder pattern constructs complex objects step by step. Used for test data creation: new User.Builder().setName('John').setEmail('john@email.com').setAge(25).build(). Improves readability, handles optional parameters elegantly. Also used in Rest Assured's RequestSpecBuilder and ResponseSpecBuilder.",difficulty:"Hard"},{id:18,question:"How do you manage test environments in a framework?",answer:"Use environment-specific property files (dev.properties, staging.properties, prod.properties). Pass environment via Maven: mvn test -Denv=staging. Read in framework: String env = System.getProperty('env','dev'). Load corresponding properties file. Store URLs, credentials, feature flags per environment.",difficulty:"Medium"},{id:19,question:"What is Allure Report and how do you integrate it?",answer:"Allure is a flexible reporting framework. Add allure-testng dependency and aspectj agent in pom.xml. Use annotations: @Step for test steps, @Attachment for screenshots, @Description, @Severity, @Story, @Feature. Run: mvn test, then allure serve target/allure-results. Provides rich interactive reports with history trends.",difficulty:"Hard"},{id:20,question:"How do you handle test retries for flaky tests?",answer:"Implement IRetryAnalyzer interface: public boolean retry(ITestResult result) { if(retryCount < maxRetry) { retryCount++; return true; } return false; }. Add to test: @Test(retryAnalyzer=RetryAnalyzer.class). Or use RetryListener implementing IAnnotationTransformer to apply globally to all tests without modifying each annotation.",difficulty:"Hard"}]},El={title:"Basic Testing Interview Questions",icon:"🧪",questions:[{id:1,question:"What is Software Testing and why is it important?",answer:"Software testing is the process of evaluating software to find defects and ensure it meets requirements. Important because: catches bugs before production, ensures quality, reduces maintenance costs, builds user confidence, validates business requirements, and prevents security vulnerabilities. Cost of fixing bugs increases exponentially later in SDLC.",difficulty:"Easy"},{id:2,question:"What is SDLC and what are its phases?",answer:"Software Development Life Cycle phases: Planning (feasibility, resources), Requirements Analysis (gathering requirements), System Design (architecture, DB design), Implementation (coding), Testing (verification & validation), Deployment (release to production), Maintenance (bug fixes, updates). Models: Waterfall, Agile, Spiral, V-Model.",difficulty:"Easy"},{id:3,question:"What is STLC and what are its phases?",answer:"Software Testing Life Cycle phases: Requirement Analysis (review requirements, identify testable requirements), Test Planning (strategy, resources, timeline), Test Case Design (write test cases, test data), Test Environment Setup, Test Execution (run tests, log defects), Test Closure (metrics, lessons learned). Each phase has entry and exit criteria.",difficulty:"Easy"},{id:4,question:"What is the difference between verification and validation?",answer:"Verification: 'Are we building the product right?' - checks if software meets specified requirements without executing code (reviews, inspections, walkthroughs). Validation: 'Are we building the right product?' - checks if software meets user expectations through execution (testing). Verification is static, validation is dynamic.",difficulty:"Easy"},{id:5,question:"Explain different levels of testing.",answer:"Unit Testing: tests individual components/functions. Integration Testing: tests interaction between modules (top-down, bottom-up, sandwich). System Testing: tests complete system against requirements. Acceptance Testing: validates against business requirements (UAT - User Acceptance Testing). Each level has different scope and responsibility.",difficulty:"Easy"},{id:6,question:"What is the difference between black box, white box, and grey box testing?",answer:"Black Box: tester has no knowledge of internal code, tests based on requirements/UI (functional testing). White Box: tester has full knowledge of code, tests internal logic, code paths (unit testing, code coverage). Grey Box: partial knowledge of internals, combination of both approaches. Most QA engineers do black box testing.",difficulty:"Easy"},{id:7,question:"What is the difference between smoke, sanity, and regression testing?",answer:"Smoke Testing: shallow, wide testing of main features after new build to decide if detailed testing should proceed ('build verification test'). Sanity Testing: narrow, focused testing of specific functionality after bug fix or small change. Regression Testing: re-running existing tests to ensure changes haven't broken existing functionality.",difficulty:"Medium"},{id:8,question:"What is boundary value analysis and equivalence partitioning?",answer:"Equivalence Partitioning: divides input data into valid/invalid partitions, test one value per partition. E.g., age 1-120: test one valid (25), one invalid (<1), one invalid (>120). Boundary Value Analysis: tests at boundaries of partitions: minimum, minimum+1, maximum-1, maximum. E.g., age: 0,1,2,119,120,121.",difficulty:"Medium"},{id:9,question:"What is a test case and what should it contain?",answer:"A test case is a set of conditions to validate functionality. Components: Test Case ID, Title/Description, Preconditions, Test Steps (numbered), Test Data, Expected Result, Actual Result, Status (Pass/Fail), Priority, Severity, Created By, Executed By, Date. Good test cases are clear, concise, reusable, and independent.",difficulty:"Easy"},{id:10,question:"What is the difference between priority and severity of a defect?",answer:"Severity: impact of bug on application functionality (Critical/Major/Minor/Trivial) - determined by tester. Priority: urgency of fixing the bug (High/Medium/Low) - determined by business/product owner. High severity low priority: app crashes on rarely used feature. Low severity high priority: spelling error on homepage.",difficulty:"Medium"},{id:11,question:"What is a defect life cycle?",answer:"Defect lifecycle: New (logged by tester) → Assigned (to developer) → Open (developer starts fixing) → Fixed (developer fixes) → Ready for Retest → Retest (tester verifies fix) → Closed (if fixed) or Reopened (if not fixed). Other states: Duplicate, Deferred, Not a Bug, Cannot Reproduce.",difficulty:"Medium"},{id:12,question:"What is exploratory testing?",answer:"Exploratory testing is simultaneous learning, test design, and test execution. Tester explores application without predefined test cases, using domain knowledge and creativity. Benefits: finds defects that scripted tests miss, effective for complex systems, good for usability issues. Documented using session-based testing with charter, notes, and time-boxing.",difficulty:"Medium"},{id:13,question:"What is Agile testing and how does it differ from traditional testing?",answer:"Agile testing is continuous testing throughout sprint cycles. Differences: testing starts from day 1 (not after development), testers collaborate with developers, testing is everyone's responsibility, automated tests are critical, working in 2-week sprints, adapting to changing requirements. Uses ceremonies: sprint planning, daily standups, sprint review, retrospective.",difficulty:"Medium"},{id:14,question:"What is performance testing and what are its types?",answer:"Performance testing validates system behavior under load. Types: Load Testing (normal expected load), Stress Testing (beyond normal capacity to find breaking point), Spike Testing (sudden large load increase), Soak/Endurance Testing (sustained load over long period), Volume Testing (large amount of data), Scalability Testing. Tools: JMeter, Gatling, LoadRunner.",difficulty:"Hard"},{id:15,question:"What is usability testing?",answer:"Usability testing evaluates how easy and intuitive a product is to use. Checks: learnability, efficiency, memorability, error prevention, satisfaction. Methods: moderated (facilitator guides user), unmoderated (remote, self-guided), A/B testing (compare two versions). Metrics: task completion rate, time on task, error rate, satisfaction score.",difficulty:"Medium"},{id:16,question:"What is the difference between test strategy and test plan?",answer:"Test Strategy: high-level document describing overall testing approach for organization/project, covers testing types, tools, standards. Relatively static. Test Plan: detailed project-specific document covering scope, objectives, resources, schedule, risks, test cases. Created per project/release. Strategy is 'what and how', plan is 'who, when, what specifically'.",difficulty:"Medium"},{id:17,question:"What is mutation testing?",answer:"Mutation testing evaluates quality of test cases by introducing small code changes (mutations) like changing operators (+/-), modifying conditions, changing values. If tests catch the mutation (tests fail), mutation is 'killed'. If tests pass with mutation, mutation 'survives' indicating weak tests. Tools: PIT (Java), Stryker (JS). High mutation score = good tests.",difficulty:"Hard"},{id:18,question:"What are the key metrics in software testing?",answer:"Key metrics: Test Coverage (% of requirements covered), Defect Density (defects per KLOC), Defect Detection Efficiency (defects found in testing vs total), Test Execution Rate, Pass/Fail Rate, Defect Removal Efficiency, Mean Time to Detect (MTTD), Mean Time to Repair (MTTR), Automation Coverage percentage.",difficulty:"Hard"},{id:19,question:"What is risk-based testing?",answer:"Risk-based testing prioritizes testing based on probability and impact of failures. Process: identify risks (business, technical, operational), analyze risk probability and impact, prioritize testing based on risk score, allocate testing effort accordingly. High-risk areas get more thorough testing. Ensures critical functionality is tested first with limited time.",difficulty:"Hard"},{id:20,question:"What is shift-left testing?",answer:"Shift-left testing means involving testing activities earlier in the SDLC (moving left on timeline). Activities: reviewing requirements for testability, writing test cases during design phase, developers writing unit tests, TDD (Test Driven Development), BDD (Behavior Driven Development). Benefits: cheaper defect detection, faster feedback, better quality.",difficulty:"Medium"}]},Il={title:"Java Coding Interview Questions",icon:"☕",questions:[{id:1,question:"What are the four pillars of OOP in Java?",answer:"Encapsulation: bundling data and methods, hiding internal state using private fields with getters/setters. Inheritance: child class inherits properties from parent using 'extends'. Polymorphism: one interface, multiple implementations - method overloading (compile-time) and overriding (runtime). Abstraction: hiding complexity using abstract classes and interfaces.",difficulty:"Easy"},{id:2,question:"What is the difference between == and .equals() in Java?",answer:"== compares object references (memory addresses) for objects, compares values for primitives. .equals() compares actual content/values - can be overridden. String s1='hello'; String s2=new String('hello'); s1==s2 is FALSE (different objects), s1.equals(s2) is TRUE (same content). String literals use string pool, so 'hello'=='hello' can be true.",difficulty:"Easy"},{id:3,question:"What is the difference between ArrayList and LinkedList?",answer:"ArrayList: backed by dynamic array, O(1) random access by index, O(n) insertion/deletion in middle, better for frequent reads. LinkedList: doubly linked list, O(n) access by index, O(1) insertion/deletion at ends, implements Deque, better for frequent insertions/deletions. ArrayList uses less memory as no node pointers needed.",difficulty:"Medium"},{id:4,question:"What is the difference between HashMap, LinkedHashMap, and TreeMap?",answer:"HashMap: unordered key-value pairs, O(1) get/put, allows one null key, not synchronized. LinkedHashMap: maintains insertion order, slightly slower than HashMap due to linked list overhead. TreeMap: sorted by keys (natural or Comparator), O(log n) operations, no null keys. Use HashMap for performance, LinkedHashMap for order, TreeMap for sorted data.",difficulty:"Medium"},{id:5,question:"What is the difference between abstract class and interface in Java?",answer:"Abstract class: can have abstract and concrete methods, constructor, instance variables, single inheritance. Interface: all methods abstract by default (Java 8+ allows default/static), no constructor, only public static final variables, multiple implementation. Use abstract class for 'is-a' relationship with shared code, interface for 'can-do' capability contract.",difficulty:"Medium"},{id:6,question:"What is Java 8 Stream API?",answer:"Stream API processes collections in a functional style. Operations: filter() (condition), map() (transform), flatMap() (flatten), sorted(), distinct(), limit(), skip(). Terminal: collect(), forEach(), count(), findFirst(), anyMatch(), reduce(). Example: list.stream().filter(x->x>5).map(x->x*2).collect(Collectors.toList()). Supports parallel processing with parallelStream().",difficulty:"Hard"},{id:7,question:"What are Lambda expressions in Java 8?",answer:"Lambda expressions are anonymous functions implementing functional interfaces. Syntax: (parameters) -> expression or (parameters) -> { statements }. Example: Runnable r = () -> System.out.println('Hello'). Comparator<String> c = (s1,s2) -> s1.compareTo(s2). Eliminates boilerplate of anonymous inner classes. Used extensively with Stream API and functional interfaces.",difficulty:"Medium"},{id:8,question:"What is the difference between checked and unchecked exceptions?",answer:"Checked exceptions: must be handled or declared (throws), checked at compile-time. Examples: IOException, SQLException, ClassNotFoundException. Unchecked exceptions (RuntimeException): not required to be handled, occur at runtime. Examples: NullPointerException, ArrayIndexOutOfBoundsException, IllegalArgumentException. Error: serious problems not for catching (OutOfMemoryError).",difficulty:"Medium"},{id:9,question:"What is multithreading in Java and how do you create threads?",answer:"Multithreading runs multiple threads concurrently. Create thread: 1) Extend Thread class and override run(). 2) Implement Runnable interface and pass to Thread constructor. 3) Implement Callable for return values. 4) Use ExecutorService thread pool. Start with thread.start() (not run()). Synchronize shared resources with synchronized keyword or Lock interface.",difficulty:"Hard"},{id:10,question:"What is the difference between String, StringBuilder, and StringBuffer?",answer:"String: immutable, new object created on every modification, stored in String pool, thread-safe. StringBuilder: mutable, modifies same object, not thread-safe, faster. StringBuffer: mutable, synchronized (thread-safe), slower than StringBuilder. Use String for few modifications, StringBuilder for many modifications in single thread, StringBuffer in multi-threaded environment.",difficulty:"Easy"},{id:11,question:"What is Java Collections Framework hierarchy?",answer:"Iterable → Collection → List (ArrayList, LinkedList, Vector), Set (HashSet, LinkedHashSet, TreeSet), Queue (PriorityQueue, LinkedList, ArrayDeque). Map (separate hierarchy): HashMap, LinkedHashMap, TreeMap, Hashtable, ConcurrentHashMap. Sorted interfaces: SortedSet (TreeSet), SortedMap (TreeMap). Deque: double-ended queue (ArrayDeque, LinkedList).",difficulty:"Hard"},{id:12,question:"What is the Singleton pattern and how do you implement it in Java?",answer:"Singleton ensures one instance per JVM. Thread-safe implementation: private static volatile Singleton instance; private Singleton(){}; public static Singleton getInstance(){ if(instance==null){ synchronized(Singleton.class){ if(instance==null){ instance=new Singleton(); }}} return instance; }. Or use enum: enum Singleton{ INSTANCE; }. Enum is preferred - handles serialization and reflection attacks.",difficulty:"Hard"},{id:13,question:"What is Optional in Java 8?",answer:"Optional is a container that may or may not contain a non-null value, avoiding NullPointerException. Create: Optional.of(value), Optional.ofNullable(value), Optional.empty(). Use: isPresent(), get(), orElse(default), orElseGet(supplier), orElseThrow(), ifPresent(consumer), map(), filter(). Best practice: use as return type, not as parameter or field.",difficulty:"Medium"},{id:14,question:"What is the difference between Comparable and Comparator?",answer:"Comparable (java.lang): natural ordering, implemented by the class itself, single sorting sequence, compareTo() method, e.g., String implements Comparable. Comparator (java.util): external ordering, implemented separately, multiple sorting sequences, compare() method. Use Comparable for default sort, Comparator for custom/multiple sort orders without modifying original class.",difficulty:"Medium"},{id:15,question:"What is garbage collection in Java?",answer:"JVM automatically manages memory by removing unreachable objects. Heap regions: Young Generation (Eden, S0, S1) - minor GC, Old Generation - major GC, Metaspace (Java 8+, replaced PermGen). GC algorithms: Serial, Parallel, CMS, G1 (default Java 9+), ZGC. finalize() deprecated. System.gc() is only a suggestion. Memory leaks can still occur with static references.",difficulty:"Hard"},{id:16,question:"What are functional interfaces in Java 8?",answer:"Functional interface has exactly one abstract method, used with lambda expressions. @FunctionalInterface annotation. Built-in: Function<T,R> (takes T returns R), Predicate<T> (takes T returns boolean), Consumer<T> (takes T returns void), Supplier<T> (no input returns T), BiFunction<T,U,R>, UnaryOperator<T>, BinaryOperator<T>. Used heavily in Stream API.",difficulty:"Medium"},{id:17,question:"What is the difference between final, finally, and finalize?",answer:"final: keyword - final variable (constant), final method (cannot override), final class (cannot extend). finally: block in try-catch-finally that always executes (except System.exit()), used for cleanup like closing resources. finalize(): method called by GC before object is garbage collected (deprecated in Java 9). Use try-with-resources instead of finalize for cleanup.",difficulty:"Easy"},{id:18,question:"What is method overloading vs method overriding?",answer:"Overloading (compile-time polymorphism): same method name, different parameters (type/number/order), same class, resolved at compile time. Overriding (runtime polymorphism): same method name and signature, child class overrides parent class method, @Override annotation, resolved at runtime. Cannot override static, final, or private methods. Overriding enables runtime polymorphism.",difficulty:"Easy"},{id:19,question:"What is Java memory model (Stack vs Heap)?",answer:"Stack: stores primitive variables and object references (not objects), method call frames, thread-specific, LIFO, fixed size, fast access. Heap: stores actual objects and class instances, shared among all threads, managed by GC, dynamic size, slower. String pool is in Heap (Metaspace in older versions). Stack overflow occurs with infinite recursion, OutOfMemoryError with heap overflow.",difficulty:"Hard"},{id:20,question:"What are design patterns commonly used in test automation?",answer:"Creational: Singleton (single WebDriver), Factory (browser selection), Builder (test data). Structural: Page Object (page abstraction), Facade (complex API simplification), Decorator (add behavior). Behavioral: Strategy (different test strategies), Observer (event handling), Template Method (test flow skeleton). Most important for SDET: Singleton, Factory, Builder, Page Object Model.",difficulty:"Hard"}]},Rl={restAssured:Al,selenium:Pl,framework:_l,basicTesting:El,javaCoding:Il},Dt=(e,t)=>{const n=e.__vccOpts||e;for(const[s,a]of t)n[s]=a;return n},Ll={class:"career-page"},Ml={class:"career-card"},Dl={class:"points-grid"},Bl={class:"point-icon"},ql={class:"career-card"},Ol={class:"future-grid"},Fl={class:"future-icon"},Nl={class:"career-card"},Ul={class:"steps-list"},Wl={class:"step-number"},jl={class:"step-content"},Hl={class:"skills-row"},$l={__name:"SdetCareer",setup(e){const t=[{icon:"⚙️",title:"Automation First",desc:"Write robust, maintainable automation code — not just manual test cases."},{icon:"🔗",title:"End-to-End Thinking",desc:"Understand and test across UI, APIs, microservices, and databases."},{icon:"🏗️",title:"Framework Design",desc:"Design scalable test frameworks that teams can build on top of."},{icon:"🛡️",title:"Risk Identification",desc:"Identify critical paths, edge cases, and production risks before release."},{icon:"🤝",title:"Engineering Mindset",desc:"Collaborate with developers, contribute to CI/CD, and treat tests as code."}],n=[{icon:"🔌",title:"API & Microservices Testing",desc:"The shift is clear — UI testing alone is not enough. API and service-level testing is becoming the core skill of modern SDETs."},{icon:"🤖",title:"AI-Assisted Testing",desc:"AI is entering test generation, failure analysis, and intelligent assertions. SDETs who can use AI tools will have a massive productivity advantage."},{icon:"⚡",title:"Speed & Stability Focus",desc:"Flaky tests and slow pipelines are being eliminated. The focus is on fast, deterministic, and intelligent validation."},{icon:"🎭",title:"Playwright & AI Integration",desc:"Playwright's modern architecture and flexible APIs make it highly compatible with AI-assisted workflows — a key reason it is gaining industry momentum."}],s=[{step:"1",title:"Master One Tool First",desc:"Go deep into either Selenium or Playwright. Build real projects, understand the internals, and get confident."},{step:"2",title:"Learn the Other Tool Too",desc:"Once strong in one, pick up the other. Flexibility across both tools makes you valuable in any team."},{step:"3",title:"Build API Automation Skills",desc:"REST Assured, Playwright API, or Axios — API testing is non-negotiable for a modern SDET."},{step:"4",title:"Design a Framework",desc:"Learn Page Object Model, reporting, CI/CD integration, and modular design."},{step:"5",title:"Use AI as a Productivity Tool",desc:"Use GitHub Copilot or ChatGPT to write tests faster, debug smarter, and learn quicker."}],a=[{icon:"🔌",skill:"API Automation"},{icon:"🏗️",skill:"Framework Design"},{icon:"🧠",skill:"Problem Solving"},{icon:"🔍",skill:"System Thinking"},{icon:"🤖",skill:"AI Productivity"},{icon:"🔄",skill:"CI/CD Integration"}];return(o,r)=>(h(),g("div",Ll,[r[3]||(r[3]=xt('<div class="career-hero" data-v-c5ac6478><span class="hero-badge" data-v-c5ac6478>Career Guide</span><h1 data-v-c5ac6478>SDET Career – Present &amp; Future</h1><p data-v-c5ac6478>Understand the role, the industry, and where it&#39;s heading</p></div><div class="career-card" data-v-c5ac6478><div class="card-heading" data-v-c5ac6478><span class="card-icon" data-v-c5ac6478>🧑‍💻</span><h2 data-v-c5ac6478>What is an SDET?</h2></div><p class="card-body" data-v-c5ac6478> A Software Development Engineer in Test (SDET) is not just a tester — they are a software engineer who specialises in quality. An SDET writes automation code, designs test frameworks, validates complex systems, and ensures software is production-ready at scale. They sit at the intersection of development and quality, and are expected to think like a developer while owning the reliability of the product. </p></div>',2)),i("div",Ml,[r[0]||(r[0]=i("div",{class:"card-heading"},[i("span",{class:"card-icon"},"🏭"),i("h2",null,"What the Industry Expects")],-1)),i("div",Dl,[(h(),g(J,null,Y(t,l=>i("div",{key:l.title,class:"point-item"},[i("span",Bl,p(l.icon),1),i("div",null,[i("strong",null,p(l.title),1),i("p",null,p(l.desc),1)])])),64))])]),r[4]||(r[4]=xt('<div class="career-card" data-v-c5ac6478><div class="card-heading" data-v-c5ac6478><span class="card-icon" data-v-c5ac6478>🛠️</span><h2 data-v-c5ac6478>Current Tools &amp; Industry Trends</h2></div><div class="tools-grid" data-v-c5ac6478><div class="tool-card" style="--tc:#10b981;" data-v-c5ac6478><div class="tool-header" data-v-c5ac6478><span class="tool-icon" data-v-c5ac6478>🌐</span><div data-v-c5ac6478><h3 data-v-c5ac6478>Selenium</h3><span class="tool-tag" style="background:#10b98120;color:#10b981;" data-v-c5ac6478>Enterprise Standard</span></div></div><p class="tool-desc" data-v-c5ac6478> Selenium remains the backbone of enterprise automation. It has a massive ecosystem, supports all major languages, and is deeply integrated into legacy and large-scale systems. If you work in a bank, insurance company, or any large organisation, Selenium is very likely in their stack. </p><div class="tool-strengths" data-v-c5ac6478><span class="strength-chip" style="border-color:#10b981;color:#10b981;" data-v-c5ac6478>✓ Widely adopted in enterprise</span><span class="strength-chip" style="border-color:#10b981;color:#10b981;" data-v-c5ac6478>✓ Multi-language support</span><span class="strength-chip" style="border-color:#10b981;color:#10b981;" data-v-c5ac6478>✓ Huge community</span><span class="strength-chip" style="border-color:#10b981;color:#10b981;" data-v-c5ac6478>✓ Strong legacy integration</span></div></div><div class="tool-card" style="--tc:#6c63ff;" data-v-c5ac6478><div class="tool-header" data-v-c5ac6478><span class="tool-icon" data-v-c5ac6478>🎭</span><div data-v-c5ac6478><h3 data-v-c5ac6478>Playwright</h3><span class="tool-tag" style="background:#6c63ff20;color:#6c63ff;" data-v-c5ac6478>Modern &amp; Fast</span></div></div><p class="tool-desc" data-v-c5ac6478> Playwright is the modern choice. Built by Microsoft, it is faster, more reliable, and aligned with how today&#39;s web works. It handles dynamic content, network interception, and multi-browser testing out of the box. Playwright is where the industry is actively moving. </p><div class="tool-strengths" data-v-c5ac6478><span class="strength-chip" style="border-color:#6c63ff;color:#6c63ff;" data-v-c5ac6478>✓ Faster execution</span><span class="strength-chip" style="border-color:#6c63ff;color:#6c63ff;" data-v-c5ac6478>✓ Auto-wait built-in</span><span class="strength-chip" style="border-color:#6c63ff;color:#6c63ff;" data-v-c5ac6478>✓ Network interception</span><span class="strength-chip" style="border-color:#6c63ff;color:#6c63ff;" data-v-c5ac6478>✓ AI-friendly design</span></div></div></div></div>',1)),i("div",ql,[r[1]||(r[1]=i("div",{class:"card-heading"},[i("span",{class:"card-icon"},"🔮"),i("h2",null,"The Future of SDET")],-1)),i("div",Ol,[(h(),g(J,null,Y(n,l=>i("div",{key:l.title,class:"future-item"},[i("span",Fl,p(l.icon),1),i("div",null,[i("strong",null,p(l.title),1),i("p",null,p(l.desc),1)])])),64))])]),i("div",Nl,[r[2]||(r[2]=i("div",{class:"card-heading"},[i("span",{class:"card-icon"},"🎯"),i("h2",null,"What You Should Do")],-1)),i("div",Ul,[(h(),g(J,null,Y(s,l=>i("div",{key:l.step,class:"step-item"},[i("div",Wl,p(l.step),1),i("div",jl,[i("strong",null,p(l.title),1),i("p",null,p(l.desc),1)])])),64))]),i("div",Hl,[(h(),g(J,null,Y(a,l=>i("span",{key:l.skill,class:"skill-chip"},p(l.icon)+" "+p(l.skill),1)),64))])]),r[5]||(r[5]=i("div",{class:"closing-banner"},[i("span",{class:"closing-icon"},"🚀"),i("p",null,"We cover both Selenium, API Automation and Playwright along with Real Time Interview Questions in this platform to help you build a strong foundation and stay future-ready as an SDET.")],-1))]))}},Jl=Dt($l,[["__scopeId","data-v-c5ac6478"]]),zl={class:"sdet-container"},Gl={class:"mobile-header"},Vl={class:"mobile-title"},Kl={class:"sidebar-header"},Ql={class:"sidebar-controls"},Xl={key:0,class:"sidebar-nav"},Yl=["onClick"],Zl={class:"section-icon"},ec={class:"section-info"},tc={class:"section-title"},nc={class:"completion-percentage"},sc={key:0,class:"nav-items"},ic=["onClick"],ac={class:"task-number"},oc={class:"task-name"},rc={class:"category-qa-count"},lc=["onClick"],cc=["checked","onClick"],dc={class:"task-number"},uc={class:"task-name"},pc={key:0,class:"completion-icon"},mc={class:"content"},fc={key:0,class:"task-view"},hc={class:"task-header"},gc={class:"breadcrumb"},yc={class:"qa-meta"},vc={class:"qa-count"},bc={class:"qa-list"},wc=["onClick"],Sc={class:"qa-left"},xc=["checked","onClick"],kc={class:"qa-number"},Tc={class:"qa-question"},Cc={class:"qa-right"},Ac={key:0,class:"qa-answer"},Pc={key:1,class:"task-view"},_c={class:"task-header"},Ec={class:"breadcrumb"},Ic={class:"description-card"},Rc={class:"description-text"},Lc={key:0,class:"key-points-card"},Mc={key:1,class:"exercises-section"},Dc=["onClick"],Bc={class:"exercise-title"},qc={class:"exercise-number"},Oc={key:0,class:"exercise-body"},Fc={class:"scenario"},Nc={key:0,class:"steps-section"},Uc={key:1,class:"code-section"},Wc={class:"code-header"},jc=["onClick"],Hc={class:"code-block"},$c={key:2,class:"navigation-buttons"},Jc=["disabled"],zc=["disabled"],Gc={key:2,class:"welcome-screen"},Vc={class:"career-dropdown"},Kc={key:0,class:"career-dropdown-body"},Qc={class:"welcome-cards"},Xc=["onClick"],Yc={class:"card-icon"},Zc={__name:"SDET",setup(e){function t(w){return Object.values(w)}const n=U(!1),s=Object.values(Rl),a=U(!1),o=U(!1),r=U([]),l=U([]),c=U([]),m=U(null),d=U(null),b=U(""),k=U(null),I=U(null),$=U(new Set),O=U(new Set),L=be(()=>[{id:"selenium",title:"Selenium Automation",icon:"🌐",tasks:t(kl),categories:[]},{id:"api",title:"API Automation",icon:"🔌",tasks:t(Cl),categories:[]},{id:"playwright",title:"Playwright",icon:"🎭",tasks:t(Tl),categories:[]},{id:"interview",title:"Interview Preparation",icon:"📝",tasks:[],categories:s}]),D=be(()=>{const w=L.value.find(y=>y.title===b.value);return w?w.tasks:[]}),M=be(()=>!m.value||!D.value.length?-1:D.value.findIndex(w=>w.title===m.value.title)),Z=be(()=>M.value>0),j=be(()=>M.value<D.value.length-1),z=be(()=>Z.value?D.value[M.value-1]:null),T=be(()=>j.value?D.value[M.value+1]:null),he=w=>{if(w.id==="interview"){const y=w.categories.reduce((R,H)=>R+H.questions.length,0),S=w.categories.reduce((R,H)=>R+H.questions.filter(ge=>O.value.has(`${H.title}-${ge.id}`)).length,0);return y>0?Math.round(S/y*100):0}else{const y=w.tasks.length,S=w.tasks.filter(R=>$.value.has(`${w.id}-${R.title}`)).length;return y>0?Math.round(S/y*100):0}},pe=(w,y)=>$.value.has(`${y}-${w.title}`),X=(w,y)=>O.value.has(`${y}-${w.id}`),oe=(w,y)=>{const S=`${y}-${w.title}`;$.value.has(S)?$.value.delete(S):$.value.add(S)},le=(w,y)=>{const S=`${y}-${w.id}`;O.value.has(S)?O.value.delete(S):O.value.add(S)};function N(){a.value=!a.value}function re(){o.value=!o.value}function ae(){a.value=!1}function C(w){I.value=w,r.value.includes(w)?r.value=r.value.filter(y=>y!==w):r.value=[w]}function v(w){I.value=w,r.value.includes(w)||r.value.push(w)}function G(w,y){m.value=w,d.value=null,b.value=y,l.value=[],ae()}function ce(w,y){d.value=w,m.value=null,b.value=y,c.value=[],ae()}function Fe(){Z.value&&G(z.value,b.value)}function Xe(){j.value&&G(T.value,b.value)}function Ne(w){const y=l.value.indexOf(w);y===-1?l.value.push(w):l.value.splice(y,1)}function _e(w){const y=c.value.indexOf(w);y===-1?c.value.push(w):c.value.splice(y,1)}async function ee(w,y){await navigator.clipboard.writeText(w),k.value=y,setTimeout(()=>k.value=null,2e3)}return(w,y)=>(h(),g("div",zl,[i("div",Gl,[i("button",{class:"hamburger",onClick:N},[i("span",{class:V(["hamburger-icon",{open:a.value}])},[...y[2]||(y[2]=[i("span",null,null,-1),i("span",null,null,-1),i("span",null,null,-1)])],2)]),i("h2",Vl,p(b.value||"SDET"),1)]),a.value?(h(),g("div",{key:0,class:"overlay",onClick:ae})):K("",!0),i("aside",{class:V(["sidebar",{"sidebar-open":a.value,"sidebar-minimized":o.value}])},[i("div",Kl,[o.value?K("",!0):(h(),g("h2",{key:0,onClick:y[0]||(y[0]=S=>m.value=null),style:{cursor:"pointer","user-select":"none"},title:"Go to Welcome Screen"}," 🔬 SDET ")),i("div",Ql,[i("button",{class:"minimize-btn",onClick:re},p(o.value?"➡️":"⬅️"),1),i("button",{class:"close-btn",onClick:ae},"✕")])]),o.value?K("",!0):(h(),g("nav",Xl,[(h(!0),g(J,null,Y(L.value,(S,R)=>(h(),g("div",{key:R,class:"nav-section"},[i("div",{class:V(["nav-section-header",{active:I.value===R}]),onClick:H=>C(R)},[i("span",Zl,p(S.icon),1),i("div",ec,[i("span",tc,p(S.title),1),i("span",nc,p(he(S))+"%",1)]),i("span",{class:V(["chevron",{rotated:r.value.includes(R)}])},"▾",2)],10,Yl),xe(ze,{name:"slide"},{default:$e(()=>[r.value.includes(R)?(h(),g("ul",sc,[S.id==="interview"?(h(!0),g(J,{key:0},Y(S.categories,(H,ge)=>{var Te;return h(),g("li",{key:ge,onClick:Bt=>ce(H,S.title),class:V({active:((Te=d.value)==null?void 0:Te.title)===H.title})},[i("span",ac,p(ge+1),1),i("span",oc,p(H.title),1),i("span",rc,p(H.questions.length)+" Qs",1)],10,ic)}),128)):(h(!0),g(J,{key:1},Y(S.tasks,(H,ge)=>{var Te;return h(),g("li",{key:ge,onClick:Bt=>G(H,S.title),class:V({active:((Te=m.value)==null?void 0:Te.title)===H.title,completed:pe(H,S.id)})},[i("input",{type:"checkbox",checked:pe(H,S.id),onClick:Ve(Bt=>oe(H,S.id),["stop"]),class:"completion-checkbox"},null,8,cc),i("span",dc,p(ge+1),1),i("span",uc,p(H.title),1),pe(H,S.id)?(h(),g("span",pc,"✅")):K("",!0)],10,lc)}),128))])):K("",!0)]),_:2},1024)]))),128))]))],2),i("main",mc,[d.value?(h(),g("div",fc,[i("div",hc,[i("h1",null,p(d.value.icon)+" "+p(d.value.title),1),i("span",gc,"Interview Preparation → "+p(d.value.title),1),i("div",yc,[i("span",vc,p(d.value.questions.length)+" Questions",1),y[3]||(y[3]=i("div",{class:"difficulty-legend"},[i("span",{class:"badge easy"},"Easy"),i("span",{class:"badge medium"},"Medium"),i("span",{class:"badge hard"},"Hard")],-1))])]),i("div",bc,[(h(!0),g(J,null,Y(d.value.questions,(S,R)=>(h(),g("div",{key:S.id,class:V(["qa-card",{completed:X(S,d.value.title)}])},[i("div",{class:"qa-header",onClick:H=>_e(R)},[i("div",Sc,[i("input",{type:"checkbox",checked:X(S,d.value.title),onClick:Ve(H=>le(S,d.value.title),["stop"]),class:"completion-checkbox"},null,8,xc),i("span",kc,p(S.id),1),i("p",Tc,p(S.question),1)]),i("div",Cc,[i("span",{class:V(["badge",S.difficulty.toLowerCase()])},p(S.difficulty),3),i("span",{class:V(["chevron",{rotated:c.value.includes(R)}])},"▾",2)])],8,wc),xe(ze,{name:"slide"},{default:$e(()=>[c.value.includes(R)?(h(),g("div",Ac,[i("p",null,p(S.answer),1)])):K("",!0)]),_:2},1024)],2))),128))])])):m.value?(h(),g("div",Pc,[i("div",_c,[i("h1",null,p(m.value.title),1),i("span",Ec,p(b.value)+" → "+p(m.value.title),1)]),i("div",Ic,[y[4]||(y[4]=i("h2",null,"📘 Overview",-1)),i("pre",Rc,p(m.value.description),1)]),m.value.keyPoints?(h(),g("div",Lc,[y[5]||(y[5]=i("h2",null,"🔑 Key Points",-1)),i("ul",null,[(h(!0),g(J,null,Y(m.value.keyPoints,(S,R)=>(h(),g("li",{key:R},p(S),1))),128))])])):K("",!0),m.value.exercises?(h(),g("div",Mc,[y[8]||(y[8]=i("h2",null,"💻 Exercises",-1)),(h(!0),g(J,null,Y(m.value.exercises,(S,R)=>(h(),g("div",{key:R,class:"exercise-card"},[i("div",{class:"exercise-header",onClick:H=>Ne(R)},[i("div",Bc,[i("span",qc,p(R+1),1),i("h3",null,p(S.title),1)]),i("span",{class:V(["chevron",{rotated:l.value.includes(R)}])},"▾",2)],8,Dc),xe(ze,{name:"slide"},{default:$e(()=>[l.value.includes(R)?(h(),g("div",Oc,[i("p",Fc,p(S.scenario),1),S.steps?(h(),g("div",Nc,[y[6]||(y[6]=i("h4",null,"📋 Steps",-1)),i("ol",null,[(h(!0),g(J,null,Y(S.steps,(H,ge)=>(h(),g("li",{key:ge},p(H),1))),128))])])):K("",!0),S.code?(h(),g("div",Uc,[i("div",Wc,[y[7]||(y[7]=i("span",null,"💻 Code",-1)),i("button",{onClick:H=>ee(S.code,R),class:"copy-btn"},p(k.value===R?"✅ Copied!":"📋 Copy"),9,jc)]),i("pre",Hc,[i("code",null,p(S.code),1)])])):K("",!0)])):K("",!0)]),_:2},1024)]))),128))])):K("",!0),m.value&&D.value.length>1?(h(),g("div",$c,[i("button",{onClick:Fe,disabled:!Z.value,class:"nav-btn prev-btn"},"⬅️ Previous",8,Jc),i("button",{onClick:Xe,disabled:!j.value,class:"nav-btn next-btn"},"Next ➡️",8,zc)])):K("",!0)])):(h(),g("div",Gc,[y[10]||(y[10]=i("div",{class:"welcome-icon"},"🚀",-1)),y[11]||(y[11]=i("h1",null,"Welcome to SDET",-1)),y[12]||(y[12]=i("p",null,"Select a topic from the sidebar to get started",-1)),i("div",Vc,[i("div",{class:"career-dropdown-header",onClick:y[1]||(y[1]=S=>n.value=!n.value)},[y[9]||(y[9]=i("div",{class:"career-header-left"},[i("span",null,"📌"),i("span",null,"SDET Career – Present & Future")],-1)),i("span",{class:V(["chevron",{rotated:n.value}])},"▾",2)]),xe(ze,{name:"slide"},{default:$e(()=>[n.value?(h(),g("div",Kc,[xe(Jl)])):K("",!0)]),_:1})]),i("div",Qc,[(h(!0),g(J,null,Y(L.value,(S,R)=>(h(),g("div",{key:R,class:"welcome-card",onClick:H=>v(R)},[i("span",Yc,p(S.icon),1),i("h3",null,p(S.title),1),i("p",null,p(S.id==="interview"?S.categories.length+" categories":S.tasks.length+" topics"),1)],8,Xc))),128))])]))])]))}},ed=Dt(Zc,[["__scopeId","data-v-e4360504"]]),td={"Task 1: Introduction to Java":{title:"Introduction to Java",description:`Java is one of the most popular, versatile, and powerful programming languages in the world. Created by James Gosling at Sun Microsystems in 1995, Java follows the principle of 'Write Once, Run Anywhere' (WORA).

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
*/`}]}},nd={title:"Core Java Concepts",icon:"☕",questions:[{id:1,question:"What is the difference between JDK, JRE, and JVM?",answer:"JVM (Java Virtual Machine): Executes Java bytecode, provides platform independence. JRE (Java Runtime Environment): JVM + core libraries, needed to run Java programs. JDK (Java Development Kit): JRE + development tools (compiler, debugger), needed to develop Java programs. JDK contains JRE which contains JVM.",difficulty:"Easy"},{id:2,question:"What are the four pillars of OOP?",answer:"Encapsulation: Bundling data and methods, hiding implementation using access modifiers. Inheritance: Child class inherits from parent using 'extends'. Polymorphism: Same interface, different implementations - overloading (compile-time) and overriding (runtime). Abstraction: Hiding complexity using abstract classes/interfaces, showing only essential features.",difficulty:"Easy"},{id:3,question:"What is the difference between == and .equals()?",answer:"== compares references (memory addresses) for objects, actual values for primitives. .equals() compares content/values and can be overridden. For String: 'hello' == 'hello' may be true (string pool), but new String('hello') == new String('hello') is false. Always use .equals() for object content comparison.",difficulty:"Easy"},{id:4,question:"What is the difference between String, StringBuilder, and StringBuffer?",answer:"String: Immutable, new object created on modification, thread-safe due to immutability. StringBuilder: Mutable, single-threaded use, faster. StringBuffer: Mutable, thread-safe (synchronized), slower than StringBuilder. Use String for few modifications, StringBuilder for many modifications, StringBuffer in multi-threaded scenarios.",difficulty:"Easy"},{id:5,question:"Explain method overloading vs method overriding.",answer:"Overloading (Compile-time polymorphism): Same method name, different parameters (number/type/order), in same class. Overriding (Runtime polymorphism): Same method name and signature, in child class, replaces parent implementation. Overloading resolved at compile time, overriding at runtime. @Override annotation helps catch errors.",difficulty:"Easy"},{id:6,question:"What is the difference between abstract class and interface?",answer:"Abstract class: Can have abstract and concrete methods, constructors, instance variables, single inheritance only. Interface: All methods public abstract (before Java 8), Java 8+ allows default/static methods, multiple implementation allowed. Use abstract class for IS-A with shared code, interface for capabilities/contracts.",difficulty:"Medium"},{id:7,question:"What is the difference between final, finally, and finalize?",answer:"final: Keyword - final variable (constant), final method (cannot override), final class (cannot extend). finally: Block in try-catch that always executes for cleanup. finalize(): Method called by GC before object is garbage collected (deprecated in Java 9). Use try-with-resources instead of finalize.",difficulty:"Easy"},{id:8,question:"Explain access modifiers in Java.",answer:"private: Same class only. default (no modifier): Same package only. protected: Same package + subclasses in other packages. public: Accessible everywhere. For fields, prefer private with getters/setters. Classes can only be public or default.",difficulty:"Easy"}]},sd={title:"Collections Framework",icon:"📚",questions:[{id:1,question:"What is the difference between ArrayList and LinkedList?",answer:"ArrayList: Dynamic array, O(1) random access by index, O(n) insertion/deletion in middle, better for frequent reads. LinkedList: Doubly linked list, O(n) access by index, O(1) insertion/deletion at ends, implements Deque, better for frequent modifications. ArrayList uses less memory overall.",difficulty:"Medium"},{id:2,question:"What is the difference between HashMap, LinkedHashMap, and TreeMap?",answer:"HashMap: Unordered, O(1) get/put, allows one null key. LinkedHashMap: Maintains insertion order, slightly slower due to linked list. TreeMap: Sorted by keys (natural/Comparator), O(log n) operations, no null keys. Use HashMap for performance, LinkedHashMap for order, TreeMap for sorted data.",difficulty:"Medium"},{id:3,question:"What is the difference between HashSet and TreeSet?",answer:"HashSet: Unordered, O(1) operations, allows one null, backed by HashMap. TreeSet: Sorted order, O(log n) operations, no nulls allowed, backed by TreeMap. Use HashSet for fast unique checks, TreeSet when you need sorted unique elements.",difficulty:"Medium"},{id:4,question:"How does HashMap work internally?",answer:"HashMap uses array of buckets. Key's hashCode() determines bucket index. Collisions handled by linked list (Java 7) or tree (Java 8+ when >8 entries). On get: hash key → find bucket → traverse list/tree using equals(). Load factor 0.75 triggers resize. Java 8+ converts to red-black tree for O(log n) worst case.",difficulty:"Hard"},{id:5,question:"What is the difference between fail-fast and fail-safe iterators?",answer:"Fail-fast: Throws ConcurrentModificationException if collection modified during iteration (ArrayList, HashMap). Uses modCount internally. Fail-safe: Works on clone, doesn't throw exception (ConcurrentHashMap, CopyOnWriteArrayList). Fail-safe may not reflect latest changes. Use Iterator.remove() for safe removal during iteration.",difficulty:"Hard"},{id:6,question:"When should you override equals() and hashCode()?",answer:"Override both when using objects as Map keys or in Sets. Contract: Equal objects MUST have same hashCode. If only equals() overridden, HashMap won't find objects. Use same fields in both methods. IDE can generate these. Objects.equals() and Objects.hash() help with null handling.",difficulty:"Medium"}]},id={title:"Exception Handling",icon:"⚠️",questions:[{id:1,question:"What is the difference between checked and unchecked exceptions?",answer:"Checked exceptions: Must be caught or declared (throws), checked at compile-time. Examples: IOException, SQLException. Unchecked exceptions (RuntimeException): Don't require handling, occur at runtime. Examples: NullPointerException, ArrayIndexOutOfBoundsException. Error: Serious system problems, shouldn't be caught (OutOfMemoryError).",difficulty:"Easy"},{id:2,question:"What is try-with-resources?",answer:"Java 7+ feature that automatically closes resources implementing AutoCloseable. Syntax: try (Resource r = new Resource()) { }. Resources closed in reverse order of creation. Cleaner than try-finally, handles multiple resources. Suppressed exceptions accessible via getSuppressed().",difficulty:"Medium"},{id:3,question:"Can we have try without catch?",answer:"Yes, with try-finally (for cleanup) or try-with-resources (auto-close). try-finally: finally always executes. try-with-resources: resources auto-closed. Cannot have try alone. Example: try (var reader = new FileReader(file)) { } - no catch needed if exception is declared in method signature.",difficulty:"Easy"},{id:4,question:"What happens if exception is thrown in finally block?",answer:"The finally exception masks the original exception from try/catch block. The original exception is lost unless you handle it explicitly. In Java 7+, use try-with-resources which handles this via suppressed exceptions. Best practice: Avoid throwing exceptions in finally, use try-finally for cleanup only.",difficulty:"Hard"}]},ad={title:"Multithreading & Concurrency",icon:"🔄",questions:[{id:1,question:"What is the difference between Thread and Runnable?",answer:"Thread: Class to extend, can only extend one class (no multiple inheritance), has lifecycle methods. Runnable: Interface to implement, allows extending other classes, separates task from thread. Prefer Runnable for flexibility. Java 5+ prefer ExecutorService over manual thread creation.",difficulty:"Easy"},{id:2,question:"What is the difference between synchronized method and synchronized block?",answer:"Synchronized method: Locks entire method on 'this' object (or class for static). Synchronized block: Locks only specific section on specified object, more granular control. Block preferred for performance - minimize locked code. Both provide mutual exclusion and visibility guarantees.",difficulty:"Medium"},{id:3,question:"What is volatile keyword?",answer:"volatile ensures visibility: reads/writes go directly to main memory, not CPU cache. Prevents caching of variable value. Does NOT provide atomicity - i++ on volatile is still not thread-safe. Use for flags, single writer multiple reader scenarios. For atomicity, use Atomic classes or synchronized.",difficulty:"Medium"},{id:4,question:"What is ThreadLocal?",answer:"ThreadLocal provides thread-local variables - each thread has its own independent copy. Common uses: storing user context, database connections per thread, SimpleDateFormat (not thread-safe). Usage: ThreadLocal<T> tl = new ThreadLocal<>(); tl.set(value); tl.get(); Always call remove() to prevent memory leaks.",difficulty:"Hard"},{id:5,question:"What is the difference between wait() and sleep()?",answer:"wait(): Object method, releases lock, must be in synchronized block, woken by notify()/notifyAll(). sleep(): Thread method, doesn't release lock, pauses current thread for specified time. wait() for inter-thread communication, sleep() for pausing execution. Both throw InterruptedException.",difficulty:"Medium"},{id:6,question:"What is deadlock and how to prevent it?",answer:"Deadlock: Two+ threads waiting for each other's locks forever. Conditions: mutual exclusion, hold and wait, no preemption, circular wait. Prevention: Lock ordering (always acquire locks in same order), lock timeout (tryLock with timeout), avoid nested locks, use higher-level concurrency utilities.",difficulty:"Hard"}]},od={title:"Java 8+ Features",icon:"✨",questions:[{id:1,question:"What is a lambda expression?",answer:"Lambda is an anonymous function implementing a functional interface. Syntax: (params) -> expression or (params) -> { statements }. Examples: () -> 42, x -> x * 2, (a, b) -> a + b. Enables functional programming, used with Stream API, reduces boilerplate vs anonymous classes.",difficulty:"Easy"},{id:2,question:"What is a functional interface?",answer:"Interface with exactly one abstract method, used as lambda target. @FunctionalInterface annotation (optional but recommended). Built-in: Predicate<T> (test), Function<T,R> (apply), Consumer<T> (accept), Supplier<T> (get). Can have default and static methods without affecting functional interface status.",difficulty:"Easy"},{id:3,question:"What is the difference between map() and flatMap()?",answer:"map(): Transforms each element, one-to-one mapping. flatMap(): Transforms and flattens, one-to-many mapping. Use flatMap when mapper returns Stream/Collection. Example: List of Lists → flatMap flattens to single List. map would create Stream of Streams instead.",difficulty:"Medium"},{id:4,question:"What is Optional and why use it?",answer:"Optional<T> is a container that may or may not contain a non-null value. Avoids NullPointerException, makes null handling explicit. Create: Optional.of(val), Optional.ofNullable(val), Optional.empty(). Use: isPresent(), get(), orElse(), orElseGet(), map(), filter(). Don't use for fields or parameters, mainly for return types.",difficulty:"Medium"},{id:5,question:"What is the difference between intermediate and terminal operations in Stream?",answer:"Intermediate: Return Stream, lazy (not executed until terminal), chainable. Examples: filter(), map(), sorted(), distinct(). Terminal: Return non-Stream result, trigger execution of pipeline. Examples: collect(), forEach(), count(), reduce(). Stream can only be consumed once.",difficulty:"Medium"},{id:6,question:"What are default methods in interfaces?",answer:"Java 8 allows method implementations in interfaces using 'default' keyword. Enables adding methods to interfaces without breaking existing implementations. Used for backward compatibility (Collection.stream()). If class implements multiple interfaces with same default method, must override it.",difficulty:"Medium"}]},rd={title:"Spring Boot",icon:"🌱",questions:[{id:1,question:"What is Spring Boot and its advantages?",answer:"Spring Boot is a framework for building production-ready Spring applications quickly. Advantages: Auto-configuration, embedded servers (Tomcat), starter dependencies, no XML config needed, production-ready features (Actuator), rapid development. @SpringBootApplication combines @Configuration, @EnableAutoConfiguration, @ComponentScan.",difficulty:"Easy"},{id:2,question:"What is dependency injection and IoC?",answer:"IoC (Inversion of Control): Framework controls object lifecycle, not the code. DI (Dependency Injection): Dependencies provided to objects rather than created by them. Types: Constructor injection (recommended), setter injection, field injection (@Autowired). Benefits: loose coupling, testability, flexibility.",difficulty:"Easy"},{id:3,question:"What is the difference between @Component, @Service, @Repository, @Controller?",answer:"@Component: Generic stereotype. @Service: Business logic layer, semantic clarity. @Repository: Data access layer, enables exception translation. @Controller/@RestController: Web layer, handles HTTP requests. All are @Component specializations, detected by component scanning. Use appropriate one for each layer.",difficulty:"Easy"},{id:4,question:"What is the difference between @Autowired constructor vs field injection?",answer:"Constructor injection: Dependencies explicit, immutable (final), easier testing, fails fast if dependency missing. Field injection: Less code, but hides dependencies, harder to test, allows null. Constructor injection recommended by Spring team. @Autowired optional on single constructor (Spring 4.3+).",difficulty:"Medium"},{id:5,question:"What are Spring Boot profiles?",answer:"Profiles allow different configurations for different environments (dev, test, prod). Files: application-dev.properties, application-prod.properties. Activate: spring.profiles.active=dev or -Dspring.profiles.active=dev. @Profile annotation on beans. Enables environment-specific behavior without code changes.",difficulty:"Medium"},{id:6,question:"What is Spring Data JPA?",answer:"Spring Data JPA simplifies data access by auto-implementing repository interfaces. Extend JpaRepository<Entity, ID> to get CRUD operations free. Method naming conventions: findByName(), findByAgeGreaterThan(). @Query for custom JPQL/SQL. Reduces boilerplate significantly compared to raw JPA/Hibernate.",difficulty:"Medium"}]},ld={title:"Design Patterns",icon:"🏗️",questions:[{id:1,question:"What is Singleton pattern and how to implement it?",answer:"Singleton ensures one instance per JVM. Thread-safe implementation: private static volatile instance, private constructor, double-checked locking in getInstance(). Or use enum: enum Singleton { INSTANCE }. Enum handles serialization and reflection attacks. Used for configuration, connection pools, logging.",difficulty:"Medium"},{id:2,question:"What is Factory pattern?",answer:"Factory creates objects without exposing instantiation logic. Client uses factory method instead of 'new'. Types: Simple Factory, Factory Method (subclasses decide), Abstract Factory (families of objects). Benefits: loose coupling, single responsibility, easy to add new types. Used in JDBC, Spring BeanFactory.",difficulty:"Medium"},{id:3,question:"What is Builder pattern?",answer:"Builder constructs complex objects step by step. Separates construction from representation. Pattern: static inner Builder class, fluent API with chained methods, build() returns product. Benefits: handles many parameters elegantly, immutable objects possible. Example: StringBuilder, Stream API, Lombok @Builder.",difficulty:"Medium"},{id:4,question:"What is Strategy pattern?",answer:"Strategy defines family of algorithms, encapsulates each, makes them interchangeable. Context holds reference to strategy interface, clients can switch algorithms at runtime. Example: Comparator (different sorting strategies), payment methods, compression algorithms. Follows Open/Closed principle.",difficulty:"Medium"}]},cd={coreJava:nd,collections:sd,exceptions:id,multithreading:ad,java8Features:od,springBoot:rd,designPatterns:ld},dd={class:"sdet-container"},ud={class:"mobile-header"},pd={class:"mobile-title"},md={class:"sidebar-header"},fd={class:"sidebar-controls"},hd={key:0,class:"sidebar-nav"},gd=["onClick"],yd={class:"section-icon"},vd={class:"section-info"},bd={class:"section-title"},wd={class:"completion-percentage"},Sd={key:0,class:"nav-items"},xd=["onClick"],kd={class:"task-number"},Td={class:"task-name"},Cd={class:"category-qa-count"},Ad=["onClick"],Pd=["checked","onClick"],_d={class:"task-number"},Ed={class:"task-name"},Id={key:0,class:"completion-icon"},Rd={class:"content"},Ld={key:0,class:"task-view"},Md={class:"task-header"},Dd={class:"breadcrumb"},Bd={class:"qa-meta"},qd={class:"qa-count"},Od={class:"qa-list"},Fd=["onClick"],Nd={class:"qa-left"},Ud=["checked","onClick"],Wd={class:"qa-number"},jd={class:"qa-question"},Hd={class:"qa-right"},$d={key:0,class:"qa-answer"},Jd={key:1,class:"task-view"},zd={class:"task-header"},Gd={class:"breadcrumb"},Vd={class:"description-card"},Kd={class:"description-text"},Qd={key:0,class:"key-points-card"},Xd={key:1,class:"exercises-section"},Yd=["onClick"],Zd={class:"exercise-title"},eu={class:"exercise-number"},tu={key:0,class:"exercise-body"},nu={class:"scenario"},su={key:0,class:"steps-section"},iu={key:1,class:"code-section"},au={class:"code-header"},ou=["onClick"],ru={class:"code-block"},lu={key:2,class:"navigation-buttons"},cu=["disabled"],du=["disabled"],uu={key:2,class:"welcome-screen"},pu={class:"welcome-cards"},mu=["onClick"],fu={class:"card-icon"},hu={__name:"Java",setup(e){function t(w){return Object.values(w)}const n=Object.values(cd),s=U(!1),a=U(!1),o=U([]),r=U([]),l=U([]),c=U(null),m=U(null),d=U(""),b=U(null),k=U(null),I=U(new Set),$=U(new Set),O=t(td),L=be(()=>[{id:"java-basics",title:"Java Basics",icon:"📚",tasks:O.slice(0,3),categories:[]},{id:"oop",title:"OOP Concepts",icon:"🎯",tasks:O.slice(3,5),categories:[]},{id:"collections",title:"Collections & Exceptions",icon:"📦",tasks:O.slice(5,7),categories:[]},{id:"advanced",title:"Advanced Java",icon:"⚡",tasks:O.slice(7,9),categories:[]},{id:"spring",title:"Spring Boot",icon:"🌱",tasks:O.slice(9,10),categories:[]},{id:"interview",title:"Interview Preparation",icon:"📝",tasks:[],categories:n}]),D=be(()=>{const w=L.value.find(y=>y.title===d.value);return w?w.tasks:[]}),M=be(()=>!c.value||!D.value.length?-1:D.value.findIndex(w=>w.title===c.value.title)),Z=be(()=>M.value>0),j=be(()=>M.value<D.value.length-1),z=be(()=>Z.value?D.value[M.value-1]:null),T=be(()=>j.value?D.value[M.value+1]:null),he=w=>{if(w.id==="interview"){const y=w.categories.reduce((R,H)=>R+H.questions.length,0),S=w.categories.reduce((R,H)=>R+H.questions.filter(ge=>$.value.has(`${H.title}-${ge.id}`)).length,0);return y>0?Math.round(S/y*100):0}else{const y=w.tasks.length,S=w.tasks.filter(R=>I.value.has(`${w.id}-${R.title}`)).length;return y>0?Math.round(S/y*100):0}},pe=(w,y)=>I.value.has(`${y}-${w.title}`),X=(w,y)=>$.value.has(`${y}-${w.id}`),oe=(w,y)=>{const S=`${y}-${w.title}`;I.value.has(S)?I.value.delete(S):I.value.add(S)},le=(w,y)=>{const S=`${y}-${w.id}`;$.value.has(S)?$.value.delete(S):$.value.add(S)};function N(){s.value=!s.value}function re(){a.value=!a.value}function ae(){s.value=!1}function C(w){k.value=w,o.value.includes(w)?o.value=o.value.filter(y=>y!==w):o.value=[w]}function v(w){k.value=w,o.value.includes(w)||o.value.push(w)}function G(w,y){c.value=w,m.value=null,d.value=y,r.value=[],ae()}function ce(w,y){m.value=w,c.value=null,d.value=y,l.value=[],ae()}function Fe(){Z.value&&G(z.value,d.value)}function Xe(){j.value&&G(T.value,d.value)}function Ne(w){const y=r.value.indexOf(w);y===-1?r.value.push(w):r.value.splice(y,1)}function _e(w){const y=l.value.indexOf(w);y===-1?l.value.push(w):l.value.splice(y,1)}async function ee(w,y){await navigator.clipboard.writeText(w),b.value=y,setTimeout(()=>b.value=null,2e3)}return(w,y)=>(h(),g("div",dd,[i("div",ud,[i("button",{class:"hamburger",onClick:N},[i("span",{class:V(["hamburger-icon",{open:s.value}])},[...y[1]||(y[1]=[i("span",null,null,-1),i("span",null,null,-1),i("span",null,null,-1)])],2)]),i("h2",pd,p(d.value||"Java Development"),1)]),s.value?(h(),g("div",{key:0,class:"overlay",onClick:ae})):K("",!0),i("aside",{class:V(["sidebar",{"sidebar-open":s.value,"sidebar-minimized":a.value}])},[i("div",md,[a.value?K("",!0):(h(),g("h2",{key:0,onClick:y[0]||(y[0]=S=>{c.value=null,m.value=null}),style:{cursor:"pointer","user-select":"none"},title:"Go to Welcome Screen"}," ☕ Java ")),i("div",fd,[i("button",{class:"minimize-btn",onClick:re},p(a.value?"➡️":"⬅️"),1),i("button",{class:"close-btn",onClick:ae},"✕")])]),a.value?K("",!0):(h(),g("nav",hd,[(h(!0),g(J,null,Y(L.value,(S,R)=>(h(),g("div",{key:R,class:"nav-section"},[i("div",{class:V(["nav-section-header",{active:k.value===R}]),onClick:H=>C(R)},[i("span",yd,p(S.icon),1),i("div",vd,[i("span",bd,p(S.title),1),i("span",wd,p(he(S))+"%",1)]),i("span",{class:V(["chevron",{rotated:o.value.includes(R)}])},"▾",2)],10,gd),xe(ze,{name:"slide"},{default:$e(()=>[o.value.includes(R)?(h(),g("ul",Sd,[S.id==="interview"?(h(!0),g(J,{key:0},Y(S.categories,(H,ge)=>{var Te;return h(),g("li",{key:ge,onClick:Bt=>ce(H,S.title),class:V({active:((Te=m.value)==null?void 0:Te.title)===H.title})},[i("span",kd,p(ge+1),1),i("span",Td,p(H.title),1),i("span",Cd,p(H.questions.length)+" Qs",1)],10,xd)}),128)):(h(!0),g(J,{key:1},Y(S.tasks,(H,ge)=>{var Te;return h(),g("li",{key:ge,onClick:Bt=>G(H,S.title),class:V({active:((Te=c.value)==null?void 0:Te.title)===H.title,completed:pe(H,S.id)})},[i("input",{type:"checkbox",checked:pe(H,S.id),onClick:Ve(Bt=>oe(H,S.id),["stop"]),class:"completion-checkbox"},null,8,Pd),i("span",_d,p(ge+1),1),i("span",Ed,p(H.title),1),pe(H,S.id)?(h(),g("span",Id,"✅")):K("",!0)],10,Ad)}),128))])):K("",!0)]),_:2},1024)]))),128))]))],2),i("main",Rd,[m.value?(h(),g("div",Ld,[i("div",Md,[i("h1",null,p(m.value.icon)+" "+p(m.value.title),1),i("span",Dd,"Interview Preparation → "+p(m.value.title),1),i("div",Bd,[i("span",qd,p(m.value.questions.length)+" Questions",1),y[2]||(y[2]=i("div",{class:"difficulty-legend"},[i("span",{class:"badge easy"},"Easy"),i("span",{class:"badge medium"},"Medium"),i("span",{class:"badge hard"},"Hard")],-1))])]),i("div",Od,[(h(!0),g(J,null,Y(m.value.questions,(S,R)=>(h(),g("div",{key:S.id,class:V(["qa-card",{completed:X(S,m.value.title)}])},[i("div",{class:"qa-header",onClick:H=>_e(R)},[i("div",Nd,[i("input",{type:"checkbox",checked:X(S,m.value.title),onClick:Ve(H=>le(S,m.value.title),["stop"]),class:"completion-checkbox"},null,8,Ud),i("span",Wd,p(S.id),1),i("p",jd,p(S.question),1)]),i("div",Hd,[i("span",{class:V(["badge",S.difficulty.toLowerCase()])},p(S.difficulty),3),i("span",{class:V(["chevron",{rotated:l.value.includes(R)}])},"▾",2)])],8,Fd),xe(ze,{name:"slide"},{default:$e(()=>[l.value.includes(R)?(h(),g("div",$d,[i("p",null,p(S.answer),1)])):K("",!0)]),_:2},1024)],2))),128))])])):c.value?(h(),g("div",Jd,[i("div",zd,[i("h1",null,p(c.value.title),1),i("span",Gd,p(d.value)+" → "+p(c.value.title),1)]),i("div",Vd,[y[3]||(y[3]=i("h2",null,"📘 Overview",-1)),i("pre",Kd,p(c.value.description),1)]),c.value.keyPoints?(h(),g("div",Qd,[y[4]||(y[4]=i("h2",null,"🔑 Key Points",-1)),i("ul",null,[(h(!0),g(J,null,Y(c.value.keyPoints,(S,R)=>(h(),g("li",{key:R},p(S),1))),128))])])):K("",!0),c.value.exercises?(h(),g("div",Xd,[y[7]||(y[7]=i("h2",null,"💻 Exercises",-1)),(h(!0),g(J,null,Y(c.value.exercises,(S,R)=>(h(),g("div",{key:R,class:"exercise-card"},[i("div",{class:"exercise-header",onClick:H=>Ne(R)},[i("div",Zd,[i("span",eu,p(R+1),1),i("h3",null,p(S.title),1)]),i("span",{class:V(["chevron",{rotated:r.value.includes(R)}])},"▾",2)],8,Yd),xe(ze,{name:"slide"},{default:$e(()=>[r.value.includes(R)?(h(),g("div",tu,[i("p",nu,p(S.scenario),1),S.steps?(h(),g("div",su,[y[5]||(y[5]=i("h4",null,"📋 Steps",-1)),i("ol",null,[(h(!0),g(J,null,Y(S.steps,(H,ge)=>(h(),g("li",{key:ge},p(H),1))),128))])])):K("",!0),S.code?(h(),g("div",iu,[i("div",au,[y[6]||(y[6]=i("span",null,"💻 Code",-1)),i("button",{onClick:H=>ee(S.code,R),class:"copy-btn"},p(b.value===R?"✅ Copied!":"📋 Copy"),9,ou)]),i("pre",ru,[i("code",null,p(S.code),1)])])):K("",!0)])):K("",!0)]),_:2},1024)]))),128))])):K("",!0),c.value&&D.value.length>1?(h(),g("div",lu,[i("button",{onClick:Fe,disabled:!Z.value,class:"nav-btn prev-btn"},"⬅️ Previous",8,cu),i("button",{onClick:Xe,disabled:!j.value,class:"nav-btn next-btn"},"Next ➡️",8,du)])):K("",!0)])):(h(),g("div",uu,[y[8]||(y[8]=i("div",{class:"welcome-icon"},"☕",-1)),y[9]||(y[9]=i("h1",null,"Welcome to Java Development",-1)),y[10]||(y[10]=i("p",null,"Master Java from Fundamentals to Enterprise Applications",-1)),i("div",pu,[(h(!0),g(J,null,Y(L.value,(S,R)=>(h(),g("div",{key:R,class:"welcome-card",onClick:H=>v(R)},[i("span",fu,p(S.icon),1),i("h3",null,p(S.title),1),i("p",null,p(S.id==="interview"?S.categories.length+" categories":S.tasks.length+" topics"),1)],8,mu))),128))])]))])]))}},gu=Dt(hu,[["__scopeId","data-v-bb0b440c"]]),wn={"Task 1: Introduction to AI Development":{title:"Introduction to AI Development",description:`Artificial Intelligence (AI) Development is the process of creating systems that can perform tasks that typically require human intelligence. As an AI Developer, you'll work with machine learning models, neural networks, and modern AI tools.

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
# kubectl apply -f kubernetes/`}]}},yu={title:"Machine Learning Basics",icon:"🤖",questions:[{id:1,question:"What is the difference between supervised and unsupervised learning?",answer:"Supervised learning uses labeled data where the algorithm learns to map inputs to known outputs (e.g., classification, regression). Unsupervised learning works with unlabeled data to find patterns or structure (e.g., clustering, dimensionality reduction). Supervised needs a 'teacher' (labels), unsupervised discovers hidden patterns.",difficulty:"Easy"},{id:2,question:"What is overfitting and how do you prevent it?",answer:"Overfitting occurs when a model learns training data too well, including noise, and performs poorly on new data. Prevention methods: 1) Cross-validation, 2) Regularization (L1/L2), 3) Dropout in neural networks, 4) Early stopping, 5) More training data, 6) Feature selection, 7) Ensemble methods, 8) Data augmentation.",difficulty:"Easy"},{id:3,question:"Explain bias-variance tradeoff.",answer:"Bias is error from oversimplified models (underfitting) - model can't capture patterns. Variance is error from over-complex models (overfitting) - model is too sensitive to training data. The tradeoff: reducing bias increases variance and vice versa. Goal is finding the sweet spot that minimizes total error (bias² + variance + irreducible error).",difficulty:"Medium"},{id:4,question:"What is gradient descent and how does it work?",answer:"Gradient descent is an optimization algorithm to minimize a loss function by iteratively moving in the direction of steepest descent (negative gradient). Steps: 1) Calculate gradient of loss w.r.t. parameters, 2) Update parameters: θ = θ - α * ∇L(θ), where α is learning rate. Variants: Batch GD, Stochastic GD (SGD), Mini-batch GD, Adam, RMSprop.",difficulty:"Medium"},{id:5,question:"What is cross-validation and why is it important?",answer:"Cross-validation is a technique to evaluate model performance by splitting data into multiple folds. K-Fold CV: split data into K parts, train on K-1, test on 1, rotate K times, average results. Importance: provides more reliable performance estimate than single train-test split, helps detect overfitting, makes better use of limited data.",difficulty:"Easy"},{id:6,question:"What is the difference between L1 and L2 regularization?",answer:"L1 (Lasso): adds |weights| to loss, produces sparse solutions (some weights become exactly 0), good for feature selection. L2 (Ridge): adds weights² to loss, shrinks weights but rarely makes them exactly 0, handles correlated features better. L1 gives simpler models, L2 gives smaller weights. Elastic Net combines both.",difficulty:"Medium"},{id:7,question:"Explain precision, recall, and F1 score.",answer:"Precision = TP/(TP+FP): of all predicted positives, how many are actually positive. Recall = TP/(TP+FN): of all actual positives, how many did we predict correctly. F1 = 2*(Precision*Recall)/(Precision+Recall): harmonic mean, balances both. Use precision when FP is costly (spam detection), recall when FN is costly (disease detection).",difficulty:"Easy"},{id:8,question:"What is the vanishing gradient problem?",answer:"In deep networks, gradients can become extremely small as they backpropagate through many layers (especially with sigmoid/tanh activations), causing early layers to learn very slowly or not at all. Solutions: ReLU activation, proper weight initialization (Xavier, He), batch normalization, residual connections (skip connections), LSTM/GRU for RNNs.",difficulty:"Hard"}]},vu={title:"Deep Learning",icon:"🧠",questions:[{id:1,question:"What is a neural network and how does it learn?",answer:"A neural network is a computational model inspired by biological neurons. It consists of layers of interconnected nodes (neurons) that apply weighted sums and activation functions. Learning happens through backpropagation: forward pass computes output, loss is calculated, gradients flow backward, weights are updated via gradient descent to minimize loss.",difficulty:"Easy"},{id:2,question:"Explain the difference between CNN and RNN.",answer:"CNN (Convolutional Neural Network): designed for spatial data (images), uses convolution operations to detect local patterns, has translation invariance, good for image classification/detection. RNN (Recurrent Neural Network): designed for sequential data, has memory through hidden states, processes inputs one at a time while maintaining context, good for text/time series.",difficulty:"Medium"},{id:3,question:"What is the Transformer architecture?",answer:"Transformers use self-attention mechanism to process all inputs in parallel (unlike RNNs). Key components: 1) Multi-head self-attention: relates different positions in sequence, 2) Positional encoding: adds sequence order information, 3) Feed-forward layers, 4) Layer normalization. Enables long-range dependencies and parallel processing. Basis for GPT, BERT, LLaMA.",difficulty:"Hard"},{id:4,question:"What is attention mechanism and why is it important?",answer:"Attention allows models to focus on relevant parts of input when producing output. Self-attention computes attention scores: Attention(Q,K,V) = softmax(QK^T/√d)V. Importance: handles long sequences better than RNNs, captures dependencies regardless of distance, parallelizable, interpretable (attention weights show what model focuses on).",difficulty:"Hard"},{id:5,question:"What is batch normalization and why use it?",answer:"Batch normalization normalizes layer inputs across the batch dimension: normalize to zero mean/unit variance, then scale and shift with learned parameters. Benefits: 1) Faster training (allows higher learning rates), 2) Regularization effect (reduces overfitting), 3) Reduces internal covariate shift, 4) Makes networks more stable, 5) Reduces sensitivity to initialization.",difficulty:"Medium"},{id:6,question:"Explain transfer learning and when to use it.",answer:"Transfer learning uses knowledge from a model trained on one task for a different but related task. Process: take pre-trained model (e.g., ImageNet-trained CNN), freeze early layers (generic features), fine-tune later layers on your data. Use when: limited training data, similar domain to pre-trained model, need faster training. Common: BERT for NLP, ResNet for vision.",difficulty:"Medium"},{id:7,question:"What is dropout and how does it work?",answer:"Dropout is a regularization technique that randomly sets a fraction of neurons to zero during training (typically 20-50%). During inference, all neurons are used but outputs are scaled. Why it works: prevents co-adaptation of neurons, forces network to learn redundant representations, acts like ensemble of sub-networks. Apply to fully connected layers, less common in conv layers.",difficulty:"Easy"},{id:8,question:"What is the difference between embedding and one-hot encoding?",answer:"One-hot encoding: sparse vector with 1 at index, 0 elsewhere. High-dimensional (vocab size), no semantic meaning, categories are equidistant. Embedding: dense learned vector representation. Low-dimensional (50-300d typical), captures semantic relationships (similar items close together), parameters learned during training. Use embeddings for high-cardinality features and NLP.",difficulty:"Medium"}]},bu={title:"Large Language Models",icon:"💬",questions:[{id:1,question:"What are Large Language Models (LLMs)?",answer:"LLMs are neural networks (typically Transformers) trained on massive text data to understand and generate human language. Key characteristics: billions of parameters, trained on internet-scale data, emergent capabilities at scale (reasoning, few-shot learning). Examples: GPT-4, Claude, LLaMA, Gemini. They predict next token given context.",difficulty:"Easy"},{id:2,question:"What is the difference between fine-tuning and prompt engineering?",answer:"Prompt engineering: crafting effective prompts to guide model behavior without changing weights. Fast, no training needed, limited customization. Fine-tuning: updating model weights on domain-specific data. Requires training data and compute, deeper customization, can teach new patterns. Use prompting first; fine-tune when prompting is insufficient.",difficulty:"Medium"},{id:3,question:"Explain RAG (Retrieval Augmented Generation).",answer:"RAG combines retrieval systems with LLMs to ground responses in external knowledge. Process: 1) Convert documents to embeddings, store in vector DB, 2) At query time, retrieve relevant documents, 3) Include retrieved context in LLM prompt, 4) Generate response based on context. Benefits: reduces hallucinations, enables current information, no fine-tuning needed.",difficulty:"Medium"},{id:4,question:"What is temperature in LLM sampling?",answer:"Temperature controls randomness in token sampling. Low temperature (0-0.3): more deterministic, higher probability tokens favored, good for factual tasks. High temperature (0.7-1.5): more random/creative, flatter probability distribution. Temperature=0 is greedy (always highest probability). Typical: 0 for code/facts, 0.7-1.0 for creative writing.",difficulty:"Easy"},{id:5,question:"What is RLHF and why is it used?",answer:"RLHF (Reinforcement Learning from Human Feedback) aligns LLMs with human preferences. Process: 1) Collect human comparisons of outputs, 2) Train reward model to predict human preferences, 3) Use RL (PPO) to optimize LLM against reward model. Used to make models helpful, harmless, and honest. Makes models follow instructions better.",difficulty:"Hard"},{id:6,question:"What are hallucinations in LLMs and how to reduce them?",answer:"Hallucinations are confident but incorrect or fabricated outputs. Causes: training data patterns, lack of real knowledge. Mitigation: 1) RAG for grounding, 2) Lower temperature, 3) Ask for citations, 4) Chain-of-thought prompting, 5) Fine-tuning on accurate data, 6) Fact verification systems, 7) Prompt: 'say I don't know if unsure'.",difficulty:"Medium"},{id:7,question:"Explain LoRA and why it's important for fine-tuning.",answer:"LoRA (Low-Rank Adaptation) freezes pre-trained weights and adds small trainable matrices to attention layers: W_new = W_frozen + A*B where A and B are low-rank. Benefits: 95%+ fewer trainable parameters, can fine-tune on consumer GPUs, maintains base model capabilities, easy to switch between adapters. QLoRA adds quantization for even more efficiency.",difficulty:"Hard"},{id:8,question:"What is context window and why does it matter?",answer:"Context window is the maximum number of tokens an LLM can process at once (input + output). Examples: GPT-4 (128K), Claude (200K). Matters because: limits conversation history, affects RAG chunk sizes, longer contexts enable more complex tasks. Trade-offs: longer context = more compute, potential attention degradation, higher cost.",difficulty:"Easy"}]},wu={title:"Prompt Engineering",icon:"✍️",questions:[{id:1,question:"What are the key components of an effective prompt?",answer:"Key components: 1) Role/persona: who the AI should act as, 2) Context: background information, 3) Task: clear instruction of what to do, 4) Format: desired output structure, 5) Examples: few-shot demonstrations, 6) Constraints: limitations or requirements. Use delimiters to separate sections clearly.",difficulty:"Easy"},{id:2,question:"Explain chain-of-thought prompting.",answer:"Chain-of-thought (CoT) prompting asks the model to show reasoning steps before giving final answer. Improves accuracy on reasoning tasks by 10-40%. Techniques: 'Let's think step by step', provide worked examples, ask model to explain reasoning. Works because it mimics human problem-solving and catches errors in intermediate steps.",difficulty:"Medium"},{id:3,question:"What is few-shot vs zero-shot prompting?",answer:"Zero-shot: give instruction with no examples, relies on model's pre-training. Few-shot: provide 1-5 examples of desired input-output pairs before the actual task. Few-shot generally more reliable for specific formats, zero-shot faster and uses fewer tokens. Many-shot (10+) examples can further improve consistency.",difficulty:"Easy"},{id:4,question:"How do you handle inconsistent LLM outputs?",answer:"Strategies: 1) Lower temperature for consistency, 2) Use structured output (JSON schema), 3) Few-shot examples showing exact format, 4) Explicit format instructions, 5) Output validators with retry logic, 6) Self-consistency: generate multiple responses, take majority vote, 7) Fine-tuning for consistent domain-specific outputs.",difficulty:"Medium"},{id:5,question:"What is prompt injection and how to prevent it?",answer:"Prompt injection: malicious input that hijacks the model's instructions (e.g., 'Ignore previous instructions and...'). Prevention: 1) Input sanitization, 2) Separate system/user messages, 3) Use delimiters around user input, 4) Output validation, 5) Instruction hierarchy, 6) Fine-tuned models trained to resist injection, 7) Never trust user input in prompts.",difficulty:"Hard"},{id:6,question:"Explain system prompts vs user prompts.",answer:"System prompt: sets the AI's role, behavior, and constraints. Persists across conversation, higher priority than user messages. User prompt: the actual query or task from the user. Best practice: use system prompt for consistent behavior (role, tone, limitations), user prompt for specific tasks. System prompts help with security and consistency.",difficulty:"Easy"}]},Su={title:"MLOps & Deployment",icon:"🚀",questions:[{id:1,question:"What is MLOps and why is it important?",answer:"MLOps (Machine Learning Operations) applies DevOps principles to ML systems. It covers: data versioning, experiment tracking, model versioning, CI/CD for ML, monitoring, and governance. Important because: ML systems are complex (data + code + model), models degrade over time (data drift), need reproducibility and collaboration at scale.",difficulty:"Easy"},{id:2,question:"How do you handle model versioning?",answer:"Model versioning tracks model artifacts, code, data, and hyperparameters. Tools: MLflow, DVC, Weights & Biases, Neptune. Best practices: 1) Version control for code (Git), 2) Data versioning (DVC), 3) Experiment tracking (metrics, parameters), 4) Model registry for deployment, 5) Reproducible training pipelines, 6) Clear naming conventions.",difficulty:"Medium"},{id:3,question:"What is data drift and model drift?",answer:"Data drift: statistical properties of input data change over time (distribution shift). Model drift: model performance degrades because relationship between features and target changes (concept drift). Detection: monitor input distributions, prediction distributions, and performance metrics. Response: retrain, update features, or deploy new model.",difficulty:"Medium"},{id:4,question:"How do you monitor ML models in production?",answer:"Monitor: 1) Technical metrics: latency, throughput, errors, resource usage, 2) Data quality: missing values, schema changes, feature distributions, 3) Model performance: accuracy, predictions distribution, confidence scores, 4) Business metrics: conversion, user engagement. Tools: Prometheus, Grafana, Evidently, WhyLabs. Set alerts for anomalies.",difficulty:"Hard"},{id:5,question:"What is A/B testing for ML models?",answer:"A/B testing compares models in production by routing traffic between versions. Process: 1) Define success metrics, 2) Calculate sample size for statistical significance, 3) Random traffic split (e.g., 90/10), 4) Collect data, 5) Statistical analysis, 6) Make decision. Considerations: novelty effects, segment analysis, guardrail metrics, ramp-up strategy.",difficulty:"Medium"},{id:6,question:"How do you optimize inference latency?",answer:"Optimization techniques: 1) Model: quantization (FP16, INT8), pruning, distillation, 2) Infrastructure: GPU inference, batching, caching, 3) Code: async processing, optimized frameworks (ONNX, TensorRT), 4) Architecture: model cascading, early exit, 5) System: load balancing, edge deployment. Measure P50, P95, P99 latencies.",difficulty:"Hard"}]},xu={title:"Python for AI",icon:"🐍",questions:[{id:1,question:"Why is Python preferred for AI/ML development?",answer:"Python advantages: 1) Rich ecosystem (NumPy, Pandas, scikit-learn, PyTorch, TensorFlow), 2) Easy syntax for rapid prototyping, 3) Strong community and documentation, 4) Jupyter notebooks for experimentation, 5) Bindings to optimized C/C++ libraries, 6) Integration with data tools. It's not the fastest, but development speed and ecosystem outweigh runtime concerns.",difficulty:"Easy"},{id:2,question:"Explain vectorization and why it matters in ML.",answer:"Vectorization performs operations on entire arrays at once instead of element-by-element loops. NumPy operations are vectorized using optimized C code. Example: instead of loop: for i in range(len(a)): c[i]=a[i]+b[i], use c=a+b. Benefits: 10-100x faster, cleaner code, enables GPU parallelization. Essential for efficient ML computations.",difficulty:"Medium"},{id:3,question:"What is the GIL and how does it affect ML code?",answer:"GIL (Global Interpreter Lock) allows only one thread to execute Python bytecode at a time. Impact on ML: CPU-bound Python code doesn't benefit from multi-threading. Solutions: 1) NumPy/PyTorch operations release GIL, 2) Multiprocessing instead of threading, 3) Use optimized libraries (they run C code), 4) GPU operations bypass GIL. For most ML, libraries handle parallelism.",difficulty:"Hard"},{id:4,question:"How do you handle large datasets that don't fit in memory?",answer:"Strategies: 1) Chunking: process data in batches (pd.read_csv(chunksize=)), 2) Memory mapping: np.memmap, 3) Efficient formats: Parquet, HDF5, Arrow, 4) Data generators: PyTorch DataLoader, Keras generators, 5) Distributed: Dask, Spark, 6) Column selection: read only needed columns, 7) Downcasting: convert float64 to float32.",difficulty:"Medium"},{id:5,question:"What are decorators and how are they used in ML?",answer:"Decorators wrap functions to add functionality. Syntax: @decorator above function definition. ML uses: @torch.no_grad() for inference, @property for getters, @staticmethod/@classmethod, @dataclass for data structures, custom decorators for timing/logging. Example: timing decorator to measure training time, caching decorator for expensive computations.",difficulty:"Medium"},{id:6,question:"How do you handle async operations in AI applications?",answer:"Async (asyncio) enables concurrent I/O operations. For AI APIs: use async HTTP clients (aiohttp, httpx), await API calls without blocking, process multiple requests concurrently. Pattern: async def call_api(): response = await client.post(...). Use with: LLM API calls, parallel data fetching, web servers (FastAPI). I/O bound tasks benefit most.",difficulty:"Hard"}]},ku={mlBasics:yu,deepLearning:vu,llms:bu,promptEngineering:wu,mlOps:Su,pythonForAI:xu},Tu={class:"sdet-container"},Cu={class:"mobile-header"},Au={class:"mobile-title"},Pu={class:"sidebar-header"},_u={class:"sidebar-controls"},Eu={key:0,class:"sidebar-nav"},Iu=["onClick"],Ru={class:"section-icon"},Lu={class:"section-info"},Mu={class:"section-title"},Du={class:"completion-percentage"},Bu={key:0,class:"nav-items"},qu=["onClick"],Ou={class:"task-number"},Fu={class:"task-name"},Nu={class:"category-qa-count"},Uu=["onClick"],Wu=["checked","onClick"],ju={class:"task-number"},Hu={class:"task-name"},$u={key:0,class:"completion-icon"},Ju={class:"content"},zu={key:0,class:"task-view"},Gu={class:"task-header"},Vu={class:"breadcrumb"},Ku={class:"qa-meta"},Qu={class:"qa-count"},Xu={class:"qa-list"},Yu=["onClick"],Zu={class:"qa-left"},ep=["checked","onClick"],tp={class:"qa-number"},np={class:"qa-question"},sp={class:"qa-right"},ip={key:0,class:"qa-answer"},ap={key:1,class:"task-view"},op={class:"task-header"},rp={class:"breadcrumb"},lp={class:"description-card"},cp={class:"description-text"},dp={key:0,class:"key-points-card"},up={key:1,class:"exercises-section"},pp=["onClick"],mp={class:"exercise-title"},fp={class:"exercise-number"},hp={key:0,class:"exercise-body"},gp={class:"scenario"},yp={key:0,class:"steps-section"},vp={key:1,class:"code-section"},bp={class:"code-header"},wp=["onClick"],Sp={class:"code-block"},xp={key:2,class:"navigation-buttons"},kp=["disabled"],Tp=["disabled"],Cp={key:2,class:"welcome-screen"},Ap={class:"welcome-cards"},Pp=["onClick"],_p={class:"card-icon"},Ep={__name:"AIDeveloper",setup(e){function t(ee){return Object.values(ee)}const n=Object.values(ku),s=U(!1),a=U(!1),o=U([]),r=U([]),l=U([]),c=U(null),m=U(null),d=U(""),b=U(null),k=U(null),I=U(new Set),$=U(new Set),O=be(()=>[{id:"ai-fundamentals",title:"AI Fundamentals",icon:"🧠",tasks:t(wn).slice(0,3),categories:[]},{id:"deep-learning",title:"Deep Learning",icon:"🔬",tasks:t(wn).slice(3,5),categories:[]},{id:"llms",title:"LLMs & Prompt Engineering",icon:"💬",tasks:t(wn).slice(4,7),categories:[]},{id:"ai-applications",title:"AI Applications",icon:"🚀",tasks:t(wn).slice(6,10),categories:[]},{id:"interview",title:"Interview Preparation",icon:"📝",tasks:[],categories:n}]),L=be(()=>{const ee=O.value.find(w=>w.title===d.value);return ee?ee.tasks:[]}),D=be(()=>!c.value||!L.value.length?-1:L.value.findIndex(ee=>ee.title===c.value.title)),M=be(()=>D.value>0),Z=be(()=>D.value<L.value.length-1),j=be(()=>M.value?L.value[D.value-1]:null),z=be(()=>Z.value?L.value[D.value+1]:null),T=ee=>{if(ee.id==="interview"){const w=ee.categories.reduce((S,R)=>S+R.questions.length,0),y=ee.categories.reduce((S,R)=>S+R.questions.filter(H=>$.value.has(`${R.title}-${H.id}`)).length,0);return w>0?Math.round(y/w*100):0}else{const w=ee.tasks.length,y=ee.tasks.filter(S=>I.value.has(`${ee.id}-${S.title}`)).length;return w>0?Math.round(y/w*100):0}},he=(ee,w)=>I.value.has(`${w}-${ee.title}`),pe=(ee,w)=>$.value.has(`${w}-${ee.id}`),X=(ee,w)=>{const y=`${w}-${ee.title}`;I.value.has(y)?I.value.delete(y):I.value.add(y)},oe=(ee,w)=>{const y=`${w}-${ee.id}`;$.value.has(y)?$.value.delete(y):$.value.add(y)};function le(){s.value=!s.value}function N(){a.value=!a.value}function re(){s.value=!1}function ae(ee){k.value=ee,o.value.includes(ee)?o.value=o.value.filter(w=>w!==ee):o.value=[ee]}function C(ee){k.value=ee,o.value.includes(ee)||o.value.push(ee)}function v(ee,w){c.value=ee,m.value=null,d.value=w,r.value=[],re()}function G(ee,w){m.value=ee,c.value=null,d.value=w,l.value=[],re()}function ce(){M.value&&v(j.value,d.value)}function Fe(){Z.value&&v(z.value,d.value)}function Xe(ee){const w=r.value.indexOf(ee);w===-1?r.value.push(ee):r.value.splice(w,1)}function Ne(ee){const w=l.value.indexOf(ee);w===-1?l.value.push(ee):l.value.splice(w,1)}async function _e(ee,w){await navigator.clipboard.writeText(ee),b.value=w,setTimeout(()=>b.value=null,2e3)}return(ee,w)=>(h(),g("div",Tu,[i("div",Cu,[i("button",{class:"hamburger",onClick:le},[i("span",{class:V(["hamburger-icon",{open:s.value}])},[...w[1]||(w[1]=[i("span",null,null,-1),i("span",null,null,-1),i("span",null,null,-1)])],2)]),i("h2",Au,p(d.value||"AI Developer"),1)]),s.value?(h(),g("div",{key:0,class:"overlay",onClick:re})):K("",!0),i("aside",{class:V(["sidebar",{"sidebar-open":s.value,"sidebar-minimized":a.value}])},[i("div",Pu,[a.value?K("",!0):(h(),g("h2",{key:0,onClick:w[0]||(w[0]=y=>{c.value=null,m.value=null}),style:{cursor:"pointer","user-select":"none"},title:"Go to Welcome Screen"}," 🤖 AI Developer ")),i("div",_u,[i("button",{class:"minimize-btn",onClick:N},p(a.value?"➡️":"⬅️"),1),i("button",{class:"close-btn",onClick:re},"✕")])]),a.value?K("",!0):(h(),g("nav",Eu,[(h(!0),g(J,null,Y(O.value,(y,S)=>(h(),g("div",{key:S,class:"nav-section"},[i("div",{class:V(["nav-section-header",{active:k.value===S}]),onClick:R=>ae(S)},[i("span",Ru,p(y.icon),1),i("div",Lu,[i("span",Mu,p(y.title),1),i("span",Du,p(T(y))+"%",1)]),i("span",{class:V(["chevron",{rotated:o.value.includes(S)}])},"▾",2)],10,Iu),xe(ze,{name:"slide"},{default:$e(()=>[o.value.includes(S)?(h(),g("ul",Bu,[y.id==="interview"?(h(!0),g(J,{key:0},Y(y.categories,(R,H)=>{var ge;return h(),g("li",{key:H,onClick:Te=>G(R,y.title),class:V({active:((ge=m.value)==null?void 0:ge.title)===R.title})},[i("span",Ou,p(H+1),1),i("span",Fu,p(R.title),1),i("span",Nu,p(R.questions.length)+" Qs",1)],10,qu)}),128)):(h(!0),g(J,{key:1},Y(y.tasks,(R,H)=>{var ge;return h(),g("li",{key:H,onClick:Te=>v(R,y.title),class:V({active:((ge=c.value)==null?void 0:ge.title)===R.title,completed:he(R,y.id)})},[i("input",{type:"checkbox",checked:he(R,y.id),onClick:Ve(Te=>X(R,y.id),["stop"]),class:"completion-checkbox"},null,8,Wu),i("span",ju,p(H+1),1),i("span",Hu,p(R.title),1),he(R,y.id)?(h(),g("span",$u,"✅")):K("",!0)],10,Uu)}),128))])):K("",!0)]),_:2},1024)]))),128))]))],2),i("main",Ju,[m.value?(h(),g("div",zu,[i("div",Gu,[i("h1",null,p(m.value.icon)+" "+p(m.value.title),1),i("span",Vu,"Interview Preparation → "+p(m.value.title),1),i("div",Ku,[i("span",Qu,p(m.value.questions.length)+" Questions",1),w[2]||(w[2]=i("div",{class:"difficulty-legend"},[i("span",{class:"badge easy"},"Easy"),i("span",{class:"badge medium"},"Medium"),i("span",{class:"badge hard"},"Hard")],-1))])]),i("div",Xu,[(h(!0),g(J,null,Y(m.value.questions,(y,S)=>(h(),g("div",{key:y.id,class:V(["qa-card",{completed:pe(y,m.value.title)}])},[i("div",{class:"qa-header",onClick:R=>Ne(S)},[i("div",Zu,[i("input",{type:"checkbox",checked:pe(y,m.value.title),onClick:Ve(R=>oe(y,m.value.title),["stop"]),class:"completion-checkbox"},null,8,ep),i("span",tp,p(y.id),1),i("p",np,p(y.question),1)]),i("div",sp,[i("span",{class:V(["badge",y.difficulty.toLowerCase()])},p(y.difficulty),3),i("span",{class:V(["chevron",{rotated:l.value.includes(S)}])},"▾",2)])],8,Yu),xe(ze,{name:"slide"},{default:$e(()=>[l.value.includes(S)?(h(),g("div",ip,[i("p",null,p(y.answer),1)])):K("",!0)]),_:2},1024)],2))),128))])])):c.value?(h(),g("div",ap,[i("div",op,[i("h1",null,p(c.value.title),1),i("span",rp,p(d.value)+" → "+p(c.value.title),1)]),i("div",lp,[w[3]||(w[3]=i("h2",null,"📘 Overview",-1)),i("pre",cp,p(c.value.description),1)]),c.value.keyPoints?(h(),g("div",dp,[w[4]||(w[4]=i("h2",null,"🔑 Key Points",-1)),i("ul",null,[(h(!0),g(J,null,Y(c.value.keyPoints,(y,S)=>(h(),g("li",{key:S},p(y),1))),128))])])):K("",!0),c.value.exercises?(h(),g("div",up,[w[7]||(w[7]=i("h2",null,"💻 Exercises",-1)),(h(!0),g(J,null,Y(c.value.exercises,(y,S)=>(h(),g("div",{key:S,class:"exercise-card"},[i("div",{class:"exercise-header",onClick:R=>Xe(S)},[i("div",mp,[i("span",fp,p(S+1),1),i("h3",null,p(y.title),1)]),i("span",{class:V(["chevron",{rotated:r.value.includes(S)}])},"▾",2)],8,pp),xe(ze,{name:"slide"},{default:$e(()=>[r.value.includes(S)?(h(),g("div",hp,[i("p",gp,p(y.scenario),1),y.steps?(h(),g("div",yp,[w[5]||(w[5]=i("h4",null,"📋 Steps",-1)),i("ol",null,[(h(!0),g(J,null,Y(y.steps,(R,H)=>(h(),g("li",{key:H},p(R),1))),128))])])):K("",!0),y.code?(h(),g("div",vp,[i("div",bp,[w[6]||(w[6]=i("span",null,"💻 Code",-1)),i("button",{onClick:R=>_e(y.code,S),class:"copy-btn"},p(b.value===S?"✅ Copied!":"📋 Copy"),9,wp)]),i("pre",Sp,[i("code",null,p(y.code),1)])])):K("",!0)])):K("",!0)]),_:2},1024)]))),128))])):K("",!0),c.value&&L.value.length>1?(h(),g("div",xp,[i("button",{onClick:ce,disabled:!M.value,class:"nav-btn prev-btn"},"⬅️ Previous",8,kp),i("button",{onClick:Fe,disabled:!Z.value,class:"nav-btn next-btn"},"Next ➡️",8,Tp)])):K("",!0)])):(h(),g("div",Cp,[w[8]||(w[8]=i("div",{class:"welcome-icon"},"🤖",-1)),w[9]||(w[9]=i("h1",null,"Welcome to AI Developer",-1)),w[10]||(w[10]=i("p",null,"Master AI, Machine Learning & LLMs",-1)),i("div",Ap,[(h(!0),g(J,null,Y(O.value,(y,S)=>(h(),g("div",{key:S,class:"welcome-card",onClick:R=>C(S)},[i("span",_p,p(y.icon),1),i("h3",null,p(y.title),1),i("p",null,p(y.id==="interview"?y.categories.length+" categories":y.tasks.length+" topics"),1)],8,Pp))),128))])]))])]))}},Ip=Dt(Ep,[["__scopeId","data-v-30a60951"]]),Rp={class:"talentforge-container"},Lp={class:"tf-header"},Mp={class:"tf-header-content"},Dp={class:"tf-header-actions"},Bp={class:"talent-score-widget"},qp={class:"score-card"},Op={class:"score-circle"},Fp={viewBox:"0 0 100 100"},Np={class:"score-value"},Up={class:"score-stats"},Wp={class:"stat-item"},jp={class:"stat-info"},Hp={class:"stat-value"},$p={class:"stat-item"},Jp={class:"stat-info"},zp={class:"stat-value"},Gp={class:"stat-item"},Vp={class:"stat-info"},Kp={class:"stat-value"},Qp={class:"tf-tabs"},Xp={class:"tf-content"},Yp={key:0,class:"quickfire-section"},Zp={class:"quiz-container"},em={class:"quiz-progress"},tm={class:"progress-bar"},nm={class:"progress-text"},sm={class:"quiz-difficulty"},im={class:"quiz-topic"},am={class:"quiz-question"},om={class:"quiz-options"},rm=["onClick","disabled"],lm={class:"option-letter"},cm={class:"option-text"},dm={key:0,class:"option-icon"},um={key:1,class:"option-icon"},pm={key:0,class:"quiz-explanation"},mm={class:"explanation-header"},fm={key:0,class:"result-badge correct"},hm={key:1,class:"result-badge incorrect"},gm={class:"explanation-text"},ym={class:"concept-tags"},vm=["onClick"],bm={class:"quiz-nav"},wm=["disabled"],Sm=["disabled"],xm={key:1,class:"challenges-section"},km={class:"challenge-tabs"},Tm={key:0,class:"challenge-grid"},Cm={class:"card-header"},Am={class:"card-meta"},Pm={class:"meta-item"},_m={class:"meta-item"},Em={class:"card-rewards"},Im={class:"reward-item"},Rm={class:"reward-item"},Lm={key:1,class:"challenge-grid"},Mm={class:"card-header"},Dm={class:"budget-tag"},Bm={class:"skills-required"},qm={class:"skill-tags"},Om={class:"card-meta"},Fm={class:"meta-item"},Nm={class:"meta-item"},Um={key:2,class:"challenge-grid"},Wm={class:"card-header"},jm={class:"company-info"},Hm={class:"company-logo"},$m={class:"company-name"},Jm={class:"task-details"},zm={class:"detail-item"},Gm={class:"detail-item"},Vm={class:"detail-item"},Km={class:"card-meta"},Qm={class:"meta-item deadline"},Xm={key:2,class:"coinquest-section"},Ym={class:"coinquest-grid"},Zm={class:"coins-summary-card"},ef={class:"coins-display"},tf={class:"coins-amount"},nf={class:"coins-breakdown"},sf={class:"breakdown-item"},af={class:"breakdown-item"},of={class:"breakdown-item"},rf={class:"streak-card"},lf={class:"streak-display"},cf={class:"streak-number"},df={class:"streak-progress"},uf={class:"streak-days"},pf={class:"streak-message"},mf={class:"badges-card"},ff={class:"badges-grid"},hf={class:"badge-icon"},gf={class:"badge-name"},yf={key:0,class:"badge-lock"},vf={class:"leaderboard-card"},bf={class:"leaderboard-list"},wf={class:"rank"},Sf={key:0,class:"rank-medal"},xf={class:"user-avatar"},kf={class:"user-name"},Tf={class:"user-score"},Cf={class:"concept-modal"},Af={class:"concept-resources"},Pf={key:1,class:"coin-animation"},_f={class:"coin-float"},Ef={__name:"TalentForge",setup(e){const t=U("quiz"),n=U("hackathons"),s=U(0),a=U(null),o=U(!1),r=U(""),l=U(!1),c=U(0),m=U(2450),d=U(78),b=U(12),k=U(5),I=U(1200),$=U(950),O=U(300),L=be(()=>Math.round(d.value*.4+b.value*2+k.value*3)),D=U([{id:1,question:"What is the primary purpose of the 'useEffect' hook in React?",options:["To manage component state","To perform side effects in function components","To create custom hooks","To optimize component rendering"],correctAnswer:1,difficulty:"Medium",topic:"React",explanation:"useEffect is used to perform side effects in function components, such as data fetching, subscriptions, or manually changing the DOM.",concepts:["React Hooks","Side Effects","Component Lifecycle"],coins:10},{id:2,question:"Which data structure uses LIFO (Last In, First Out) principle?",options:["Queue","Stack","Linked List","Tree"],correctAnswer:1,difficulty:"Easy",topic:"Data Structures",explanation:"A Stack follows the LIFO principle where the last element added is the first one to be removed.",concepts:["Stack","LIFO","Data Structures Basics"],coins:5},{id:3,question:"What is the time complexity of binary search?",options:["O(n)","O(n²)","O(log n)","O(1)"],correctAnswer:2,difficulty:"Medium",topic:"Algorithms",explanation:"Binary search has O(log n) time complexity because it halves the search space with each comparison.",concepts:["Binary Search","Time Complexity","Divide and Conquer"],coins:10},{id:4,question:"In SQL, which clause is used to filter grouped results?",options:["WHERE","HAVING","FILTER","GROUP BY"],correctAnswer:1,difficulty:"Medium",topic:"SQL",explanation:"HAVING clause filters groups after GROUP BY, while WHERE filters individual rows before grouping.",concepts:["SQL Aggregation","GROUP BY","HAVING vs WHERE"],coins:10},{id:5,question:"What design pattern does Redux follow?",options:["Observer Pattern","Factory Pattern","Flux/Redux Pattern","Singleton Pattern"],correctAnswer:2,difficulty:"Hard",topic:"State Management",explanation:"Redux follows the Flux architecture pattern with unidirectional data flow: Actions → Reducers → Store → View.",concepts:["Redux","Flux Architecture","State Management"],coins:15}]),M=be(()=>D.value[s.value]),Z=be(()=>a.value===M.value.correctAnswer);function j(ae){a.value===null&&(a.value=ae,ae===M.value.correctAnswer&&(c.value=M.value.coins,m.value+=M.value.coins,l.value=!0,setTimeout(()=>{l.value=!1},1500)))}function z(ae){return a.value===null?"":ae===M.value.correctAnswer?"correct":ae===a.value?"incorrect":"disabled"}function T(){s.value<D.value.length-1&&(s.value++,a.value=null)}function he(){s.value>0&&(s.value--,a.value=null)}function pe(ae){r.value=ae,o.value=!0}const X=U([{id:1,title:"AI Innovation Challenge",description:"Build an innovative AI-powered solution for real-world problems. Open to all skill levels.",difficulty:"Hard",deadline:"15 days left",participants:234,prize:"$5,000",coins:500},{id:2,title:"Frontend Masters Sprint",description:"Create a stunning, accessible web application using modern frontend technologies.",difficulty:"Medium",deadline:"7 days left",participants:156,prize:"$2,500",coins:300},{id:3,title:"API Design Championship",description:"Design and implement RESTful APIs following best practices and documentation standards.",difficulty:"Medium",deadline:"21 days left",participants:89,prize:"$3,000",coins:350}]),oe=U([{id:1,title:"E-commerce Dashboard Development",description:"Build a responsive admin dashboard for an e-commerce platform with analytics and inventory management.",skills:["React","Node.js","MongoDB","Chart.js"],budget:"$800 - $1,200",duration:"2-3 weeks",type:"Remote"},{id:2,title:"Mobile App UI/UX Redesign",description:"Redesign the user interface of an existing fitness tracking mobile application.",skills:["Figma","UI/UX","Mobile Design","Prototyping"],budget:"$500 - $800",duration:"1-2 weeks",type:"Remote"},{id:3,title:"API Integration Specialist",description:"Integrate multiple third-party APIs including payment gateways and social media platforms.",skills:["REST APIs","Python","OAuth","Webhooks"],budget:"$600 - $900",duration:"1 week",type:"Remote"}]),le=U([{id:1,company:"TechCorp Inc.",companyLogo:"🏢",title:"Build a Real-time Chat Feature",description:"Implement a WebSocket-based real-time chat system with typing indicators and read receipts.",role:"Full Stack Developer",location:"Remote",salary:"$80K - $120K",deadline:"5 days",urgency:"urgent"},{id:2,company:"DataFlow Systems",companyLogo:"📊",title:"Data Pipeline Optimization",description:"Optimize an existing ETL pipeline to reduce processing time by at least 40%.",role:"Data Engineer",location:"Hybrid - NYC",salary:"$90K - $130K",deadline:"10 days",urgency:"normal"},{id:3,company:"CloudNine Solutions",companyLogo:"☁️",title:"Kubernetes Deployment Setup",description:"Set up a production-ready Kubernetes cluster with auto-scaling and monitoring.",role:"DevOps Engineer",location:"Remote",salary:"$100K - $140K",deadline:"7 days",urgency:"urgent"}]),N=U([{id:1,icon:"🌟",name:"First Quiz",unlocked:!0},{id:2,icon:"🔥",name:"7-Day Streak",unlocked:!0},{id:3,icon:"🏆",name:"Challenge Winner",unlocked:!0},{id:4,icon:"💎",name:"1000 Coins",unlocked:!0},{id:5,icon:"🚀",name:"Speed Demon",unlocked:!1},{id:6,icon:"🎯",name:"Perfect Score",unlocked:!1},{id:7,icon:"👑",name:"Top 10",unlocked:!1},{id:8,icon:"⚡",name:"30-Day Streak",unlocked:!1}]),re=U([{id:1,name:"Alex Chen",avatar:"👨‍💻",score:4520},{id:2,name:"Sarah Miller",avatar:"👩‍💻",score:4180},{id:3,name:"James Wilson",avatar:"🧑‍💻",score:3950},{id:4,name:"You",avatar:"😊",score:2450,isCurrentUser:!0},{id:5,name:"Mike Brown",avatar:"👨‍🎓",score:2100}]);return(ae,C)=>(h(),g("div",Rp,[i("header",Lp,[i("div",Mp,[C[12]||(C[12]=i("div",{class:"tf-header-left"},[i("h1",{class:"tf-title"},"⚡ TalentForge"),i("p",{class:"tf-tagline"},"Forge your skills. Prove your talent. Get hired.")],-1)),i("div",Dp,[i("button",{class:"tf-action-btn primary",onClick:C[0]||(C[0]=v=>t.value="quiz")}," 🎯 Start Quiz "),i("button",{class:"tf-action-btn secondary",onClick:C[1]||(C[1]=v=>t.value="challenges")}," 🧩 Explore Challenges "),i("button",{class:"tf-action-btn coins",onClick:C[2]||(C[2]=v=>t.value="coins")}," 💰 "+p(m.value)+" Coins ",1)])])]),i("div",Bp,[i("div",qp,[i("div",Op,[(h(),g("svg",Fp,[C[13]||(C[13]=i("circle",{class:"score-bg",cx:"50",cy:"50",r:"45"},null,-1)),i("circle",{class:"score-progress",cx:"50",cy:"50",r:"45",style:Ht({strokeDashoffset:283-283*L.value/100})},null,4)])),i("div",Np,p(L.value),1)]),C[14]||(C[14]=i("div",{class:"score-label"},"Talent Score",-1))]),i("div",Up,[i("div",Wp,[C[16]||(C[16]=i("span",{class:"stat-icon"},"🎯",-1)),i("div",jp,[i("span",Hp,p(d.value)+"%",1),C[15]||(C[15]=i("span",{class:"stat-label"},"Quiz Accuracy",-1))])]),i("div",$p,[C[18]||(C[18]=i("span",{class:"stat-icon"},"🏆",-1)),i("div",Jp,[i("span",zp,p(b.value),1),C[17]||(C[17]=i("span",{class:"stat-label"},"Challenges Done",-1))])]),i("div",Gp,[C[20]||(C[20]=i("span",{class:"stat-icon"},"🔥",-1)),i("div",Vp,[i("span",Kp,p(k.value)+" days",1),C[19]||(C[19]=i("span",{class:"stat-label"},"Current Streak",-1))])])])]),i("nav",Qp,[i("button",{class:V(["tf-tab",{active:t.value==="quiz"}]),onClick:C[3]||(C[3]=v=>t.value="quiz")}," 🧠 QuickFire ",2),i("button",{class:V(["tf-tab",{active:t.value==="challenges"}]),onClick:C[4]||(C[4]=v=>t.value="challenges")}," 🧩 Challenge Hub ",2),i("button",{class:V(["tf-tab",{active:t.value==="coins"}]),onClick:C[5]||(C[5]=v=>t.value="coins")}," 💰 CoinQuest ",2)]),i("main",Xp,[t.value==="quiz"?(h(),g("div",Yp,[i("div",Zp,[i("div",{class:V(["quiz-card",{answered:a.value!==null}])},[i("div",em,[i("div",tm,[i("div",{class:"progress-fill",style:Ht({width:(s.value+1)/D.value.length*100+"%"})},null,4)]),i("span",nm,p(s.value+1)+" / "+p(D.value.length),1)]),i("div",sm,[i("span",{class:V(["difficulty-badge",M.value.difficulty])},p(M.value.difficulty),3),i("span",im,p(M.value.topic),1)]),i("h2",am,p(M.value.question),1),i("div",om,[(h(!0),g(J,null,Y(M.value.options,(v,G)=>(h(),g("button",{key:G,class:V(["option-btn",z(G)]),onClick:ce=>j(G),disabled:a.value!==null},[i("span",lm,p(["A","B","C","D"][G]),1),i("span",cm,p(v),1),a.value!==null&&G===M.value.correctAnswer?(h(),g("span",dm,"✓")):K("",!0),a.value===G&&G!==M.value.correctAnswer?(h(),g("span",um,"✗")):K("",!0)],10,rm))),128))]),xe(ze,{name:"slide-up"},{default:$e(()=>[a.value!==null?(h(),g("div",pm,[i("div",mm,[Z.value?(h(),g("span",fm,"✓ Correct! +"+p(M.value.coins)+" coins",1)):(h(),g("span",hm,"✗ Incorrect"))]),i("p",gm,p(M.value.explanation),1),i("div",ym,[C[21]||(C[21]=i("span",{class:"concept-label"},"Related Concepts:",-1)),(h(!0),g(J,null,Y(M.value.concepts,v=>(h(),g("button",{key:v,class:"concept-tag",onClick:G=>pe(v)},p(v),9,vm))),128))])])):K("",!0)]),_:1}),i("div",bm,[i("button",{class:"nav-btn prev",onClick:he,disabled:s.value===0}," ← Previous ",8,wm),i("button",{class:"concept-flow-btn",onClick:C[6]||(C[6]=v=>o.value=!0)}," 📚 Jump to Concept Flow "),i("button",{class:"nav-btn next",onClick:T,disabled:a.value===null},p(s.value===D.value.length-1?"Finish":"Next →"),9,Sm)])],2)])])):K("",!0),t.value==="challenges"?(h(),g("div",xm,[i("div",km,[i("button",{class:V(["challenge-tab",{active:n.value==="hackathons"}]),onClick:C[7]||(C[7]=v=>n.value="hackathons")}," 🚀 Hackathons ",2),i("button",{class:V(["challenge-tab",{active:n.value==="projects"}]),onClick:C[8]||(C[8]=v=>n.value="projects")}," 💼 Paid Projects ",2),i("button",{class:V(["challenge-tab",{active:n.value==="hiring"}]),onClick:C[9]||(C[9]=v=>n.value="hiring")}," 🎯 Task-Based Hiring ",2)]),n.value==="hackathons"?(h(),g("div",Tm,[(h(!0),g(J,null,Y(X.value,v=>(h(),g("div",{key:v.id,class:"challenge-card hackathon"},[i("div",Cm,[C[22]||(C[22]=i("span",{class:"card-icon"},"🚀",-1)),i("span",{class:V(["difficulty-tag",v.difficulty])},p(v.difficulty),3)]),i("h3",null,p(v.title),1),i("p",null,p(v.description),1),i("div",Am,[i("span",Pm,"⏰ "+p(v.deadline),1),i("span",_m,"👥 "+p(v.participants)+" joined",1)]),i("div",Em,[i("span",Im,"🏆 "+p(v.prize),1),i("span",Rm,"💰 "+p(v.coins)+" coins",1)]),C[23]||(C[23]=i("button",{class:"register-btn"},"Register Now",-1))]))),128))])):K("",!0),n.value==="projects"?(h(),g("div",Lm,[(h(!0),g(J,null,Y(oe.value,v=>(h(),g("div",{key:v.id,class:"challenge-card project"},[i("div",Mm,[C[24]||(C[24]=i("span",{class:"card-icon"},"💼",-1)),i("span",Dm,p(v.budget),1)]),i("h3",null,p(v.title),1),i("p",null,p(v.description),1),i("div",Bm,[C[25]||(C[25]=i("span",{class:"skills-label"},"Required Skills:",-1)),i("div",qm,[(h(!0),g(J,null,Y(v.skills,G=>(h(),g("span",{key:G,class:"skill-tag"},p(G),1))),128))])]),i("div",Om,[i("span",Fm,"⏰ "+p(v.duration),1),i("span",Nm,"📍 "+p(v.type),1)]),C[26]||(C[26]=i("button",{class:"apply-btn"},"Apply Now",-1))]))),128))])):K("",!0),n.value==="hiring"?(h(),g("div",Um,[(h(!0),g(J,null,Y(le.value,v=>(h(),g("div",{key:v.id,class:"challenge-card hiring"},[i("div",Wm,[i("div",jm,[i("span",Hm,p(v.companyLogo),1),i("span",$m,p(v.company),1)]),i("span",{class:V(["urgency-tag",v.urgency])},p(v.urgency),3)]),i("h3",null,p(v.title),1),i("p",null,p(v.description),1),i("div",Jm,[i("span",zm,"💼 "+p(v.role),1),i("span",Gm,"📍 "+p(v.location),1),i("span",Vm,"💰 "+p(v.salary),1)]),i("div",Km,[i("span",Qm,"⏰ Deadline: "+p(v.deadline),1)]),C[27]||(C[27]=i("button",{class:"solve-btn"},"Solve & Apply",-1))]))),128))])):K("",!0)])):K("",!0),t.value==="coins"?(h(),g("div",Xm,[i("div",Ym,[i("div",Zm,[i("div",ef,[C[28]||(C[28]=i("span",{class:"coins-icon"},"💰",-1)),i("span",tf,p(m.value),1),C[29]||(C[29]=i("span",{class:"coins-label"},"Total Coins",-1))]),i("div",nf,[i("div",sf,[C[30]||(C[30]=i("span",null,"📝 Quizzes",-1)),i("span",null,"+"+p(I.value),1)]),i("div",af,[C[31]||(C[31]=i("span",null,"🏆 Challenges",-1)),i("span",null,"+"+p($.value),1)]),i("div",of,[C[32]||(C[32]=i("span",null,"🔥 Streaks",-1)),i("span",null,"+"+p(O.value),1)])])]),i("div",rf,[C[34]||(C[34]=i("h3",null,"🔥 Current Streak",-1)),i("div",lf,[i("span",cf,p(k.value),1),C[33]||(C[33]=i("span",{class:"streak-unit"},"days",-1))]),i("div",df,[i("div",uf,[(h(),g(J,null,Y(7,v=>i("span",{key:v,class:V(["streak-day",{active:v<=k.value%7||k.value>=7}])},p(["M","T","W","T","F","S","S"][v-1]),3)),64))]),i("p",pf,p(k.value>=7?"🎉 Amazing week!":`${7-k.value%7} days to weekly bonus!`),1)])]),i("div",mf,[C[35]||(C[35]=i("h3",null,"🏅 Achievements",-1)),i("div",ff,[(h(!0),g(J,null,Y(N.value,v=>(h(),g("div",{key:v.id,class:V(["badge-item",{locked:!v.unlocked}])},[i("span",hf,p(v.icon),1),i("span",gf,p(v.name),1),v.unlocked?K("",!0):(h(),g("span",yf,"🔒"))],2))),128))])]),i("div",vf,[C[36]||(C[36]=i("h3",null,"🏆 Leaderboard",-1)),i("div",bf,[(h(!0),g(J,null,Y(re.value,(v,G)=>(h(),g("div",{key:v.id,class:V(["leaderboard-item",{"current-user":v.isCurrentUser}])},[i("span",wf,p(G+1),1),G<3?(h(),g("span",Sf,p(["🥇","🥈","🥉"][G]),1)):K("",!0),i("span",xf,p(v.avatar),1),i("span",kf,p(v.name),1),i("span",Tf,p(v.score)+" pts",1)],2))),128))])]),C[37]||(C[37]=xt('<div class="coinquest-actions" data-v-cd1008dc><button class="action-card challenge-others" data-v-cd1008dc><span class="action-icon" data-v-cd1008dc>⚔️</span><span class="action-title" data-v-cd1008dc>Challenge Others</span><span class="action-desc" data-v-cd1008dc>1v1 Quiz Battle</span></button><button class="action-card team-battle" data-v-cd1008dc><span class="action-icon" data-v-cd1008dc>👥</span><span class="action-title" data-v-cd1008dc>Team Battle</span><span class="action-desc" data-v-cd1008dc>Coming Soon</span></button></div>',1))])])):K("",!0)]),o.value?(h(),g("div",{key:0,class:"modal-overlay",onClick:C[11]||(C[11]=Ve(v=>o.value=!1,["self"]))},[i("div",Cf,[i("button",{class:"modal-close",onClick:C[10]||(C[10]=v=>o.value=!1)},"✕"),i("h2",null,"📚 Concept Flow: "+p(r.value||"Related Topics"),1),C[42]||(C[42]=xt('<div class="concept-flow" data-v-cd1008dc><div class="flow-node start" data-v-cd1008dc><span class="node-icon" data-v-cd1008dc>📖</span><span class="node-text" data-v-cd1008dc>Fundamentals</span></div><div class="flow-arrow" data-v-cd1008dc>→</div><div class="flow-node" data-v-cd1008dc><span class="node-icon" data-v-cd1008dc>🔧</span><span class="node-text" data-v-cd1008dc>Core Concepts</span></div><div class="flow-arrow" data-v-cd1008dc>→</div><div class="flow-node" data-v-cd1008dc><span class="node-icon" data-v-cd1008dc>💡</span><span class="node-text" data-v-cd1008dc>Advanced Topics</span></div><div class="flow-arrow" data-v-cd1008dc>→</div><div class="flow-node end" data-v-cd1008dc><span class="node-icon" data-v-cd1008dc>🚀</span><span class="node-text" data-v-cd1008dc>Real-world Application</span></div></div>',1)),i("div",Af,[C[41]||(C[41]=i("h4",null,"📌 Quick Resources",-1)),i("ul",null,[i("li",null,"Introduction to "+p(r.value||"Topic"),1),C[38]||(C[38]=i("li",null,"Practice Exercises",-1)),C[39]||(C[39]=i("li",null,"Interview Questions",-1)),C[40]||(C[40]=i("li",null,"Project Ideas",-1))])])])])):K("",!0),l.value?(h(),g("div",Pf,[i("span",_f,"+"+p(c.value)+" 💰",1)])):K("",!0)]))}},If=Dt(Ef,[["__scopeId","data-v-cd1008dc"]]),Rf=[{id:"T001",uniqueId:"MED-2024-001",name:"Rahul Sharma",avatar:"👨‍💻",skills:["Java","Selenium","TestNG","API Testing","BDD Cucumber"],experience:"2.5 years as QA Automation Engineer at TCS",category:"SDET",categoryId:"sdet",projectDescription:"Automated 200+ test cases for banking application achieving 95% regression coverage. Reduced manual testing effort by 60%.",status:"available",education:"B.Tech in Computer Science",location:"Bangalore, India"},{id:"T002",uniqueId:"MED-2024-002",name:"Priya Patel",avatar:"👩‍💻",skills:["Python","Playwright","CI/CD","Docker","AWS"],experience:"3 years as SDET at Infosys",category:"SDET",categoryId:"sdet",projectDescription:"Built end-to-end test automation framework for fintech platform using Playwright. Integrated with Jenkins CI/CD pipeline.",status:"deployed",education:"M.Tech in Software Engineering",location:"Hyderabad, India"},{id:"T003",uniqueId:"MED-2024-003",name:"Amit Kumar",avatar:"🧑‍💻",skills:["Java","Spring Boot","Microservices","PostgreSQL","Kafka"],experience:"2 years as Backend Developer at Wipro",category:"Backend",categoryId:"backend",projectDescription:"Developed RESTful APIs for healthcare management system serving 50K+ daily users. Implemented event-driven architecture using Kafka.",status:"available",education:"B.Tech in Information Technology",location:"Pune, India"},{id:"T004",uniqueId:"MED-2024-004",name:"Sneha Reddy",avatar:"👩‍💻",skills:["React","Node.js","MongoDB","AWS","TypeScript"],experience:"2.5 years as Full Stack Developer at Accenture",category:"Full Stack",categoryId:"fullstack",projectDescription:"Built real-time logistics tracking dashboard handling 10K+ concurrent connections. Deployed on AWS with auto-scaling.",status:"available",education:"B.E. in Computer Science",location:"Chennai, India"},{id:"T005",uniqueId:"MED-2024-005",name:"Vikram Singh",avatar:"👨‍💻",skills:["Python","TensorFlow","NLP","FastAPI","Hugging Face"],experience:"1.5 years as ML Engineer at Tech Mahindra",category:"AI/ML",categoryId:"ai",projectDescription:"Implemented sentiment analysis model with 92% accuracy for customer feedback analysis. Deployed as REST API using FastAPI.",status:"available",education:"M.Tech in AI & ML",location:"Noida, India"},{id:"T006",uniqueId:"MED-2024-006",name:"Ananya Gupta",avatar:"👩‍💻",skills:["Vue.js","Python","Django","Redis","PostgreSQL"],experience:"3 years as Full Stack Developer at Cognizant",category:"Full Stack",categoryId:"fullstack",projectDescription:"Architected scalable SaaS HR management platform for 100+ enterprise clients. Implemented caching layer reducing response time by 40%.",status:"deployed",education:"B.Tech in Computer Science",location:"Bangalore, India"},{id:"T007",uniqueId:"MED-2024-007",name:"Karthik Nair",avatar:"👨‍💻",skills:["Cypress","JavaScript","REST API","Jenkins","Git"],experience:"2 years as QA Engineer at HCL Technologies",category:"SDET",categoryId:"sdet",projectDescription:"Implemented CI/CD pipeline with automated regression testing for e-commerce platform. Achieved 80% test automation coverage.",status:"available",education:"B.Tech in Electronics & Communication",location:"Kochi, India"},{id:"T008",uniqueId:"MED-2024-008",name:"Megha Joshi",avatar:"👩‍💻",skills:["Python","Django","PostgreSQL","Docker","Kubernetes"],experience:"2.5 years as Backend Developer at Mindtree",category:"Backend",categoryId:"backend",projectDescription:"Built payment gateway integration processing 1M+ transactions monthly. Implemented microservices architecture with Docker & K8s.",status:"available",education:"M.Sc. in Computer Science",location:"Mumbai, India"},{id:"T009",uniqueId:"MED-2024-009",name:"Arjun Menon",avatar:"🧑‍💻",skills:["PyTorch","Computer Vision","OpenCV","Flask","YOLO"],experience:"2 years as AI Engineer at L&T Infotech",category:"AI/ML",categoryId:"ai",projectDescription:"Developed real-time defect detection system using YOLO achieving 96% accuracy. Reduced manual inspection time by 70%.",status:"deployed",education:"M.Tech in Data Science",location:"Trivandrum, India"},{id:"T010",uniqueId:"MED-2024-010",name:"Divya Krishnan",avatar:"👩‍💻",skills:["Angular","Node.js","MySQL","Azure","GraphQL"],experience:"3 years as Full Stack Developer at Capgemini",category:"Full Stack",categoryId:"fullstack",projectDescription:"Developed enterprise resource planning system for manufacturing sector. Migrated legacy system to modern Angular + Node.js stack.",status:"available",education:"B.E. in Information Technology",location:"Coimbatore, India"},{id:"T011",uniqueId:"MED-2024-011",name:"Rohan Desai",avatar:"👨‍💻",skills:["Java","RestAssured","Postman","JMeter","SQL"],experience:"2 years as API Test Engineer at Mphasis",category:"SDET",categoryId:"sdet",projectDescription:"Automated 150+ API test cases using RestAssured framework. Conducted performance testing using JMeter for 5000+ concurrent users.",status:"available",education:"B.Tech in Computer Science",location:"Ahmedabad, India"},{id:"T012",uniqueId:"MED-2024-012",name:"Neha Agarwal",avatar:"👩‍💻",skills:["Go","gRPC","MongoDB","Redis","Docker"],experience:"2.5 years as Backend Developer at Persistent Systems",category:"Backend",categoryId:"backend",projectDescription:"Built high-performance microservices in Go handling 100K requests/second. Implemented distributed caching with Redis cluster.",status:"available",education:"B.Tech in Computer Engineering",location:"Nagpur, India"}],Lf=[{id:"sdet",title:"SDET / QA Automation",shortName:"SDET",icon:"🔬",count:25},{id:"backend",title:"Backend Developers",shortName:"Backend",icon:"⚙️",count:18},{id:"fullstack",title:"Full Stack Developers",shortName:"Full Stack",icon:"🌐",count:22},{id:"ai",title:"AI / Automation Engineers",shortName:"AI/ML",icon:"🤖",count:12}],_i={talents:Rf,categories:Lf},Mf={class:"tc-section tc-how-it-works"},Df={class:"steps-container"},Bf={class:"step-number"},qf={class:"step-icon"},Of={class:"step-title"},Ff={class:"step-desc"},Nf={key:0,class:"step-connector"},Uf={class:"tc-section tc-highlights"},Wf={class:"highlights-grid"},jf={class:"highlight-icon"},Hf={class:"tc-section tc-categories"},$f={class:"categories-grid"},Jf=["onClick"],zf={class:"category-icon"},Gf={class:"tc-section tc-talent-pool",id:"talent-pool"},Vf={class:"talent-filters"},Kf=["onClick"],Qf={class:"talent-grid"},Xf={class:"talent-header"},Yf={class:"talent-avatar"},Zf={class:"talent-info"},eh={class:"talent-id"},th={class:"talent-skills"},nh={class:"talent-meta"},sh={class:"experience"},ih={key:0,class:"talent-location"},ah={class:"talent-project"},oh={class:"talent-actions"},rh=["onClick"],lh=["onClick","disabled"],ch={class:"tc-section tc-assurance"},dh={class:"assurance-grid"},uh={class:"assurance-icon"},ph={class:"request-modal"},mh={class:"form-group"},fh={class:"form-group"},hh={class:"form-group"},gh=["value"],yh={class:"form-group"},vh={class:"form-group"},bh={class:"profile-modal"},wh={class:"profile-header"},Sh={class:"profile-avatar"},xh={class:"profile-info"},kh={class:"profile-id"},Th={class:"profile-body"},Ch={class:"profile-section"},Ah={class:"profile-skills"},Ph={class:"profile-section"},_h={class:"profile-section"},Eh={class:"profile-actions"},Ih=["disabled"],Rh={__name:"TalentCloud",setup(e){const t=U(!1),n=U(!1),s=U(null),a=U(null),o=U("all"),r=()=>{var T;const z=document.querySelector(".header");z&&((((T=document.querySelector(".talent-cloud"))==null?void 0:T.scrollTop)||window.scrollY)>100?z.classList.add("header-hidden"):z.classList.remove("header-hidden"))};Vn(()=>{const z=document.querySelector(".talent-cloud");z&&z.addEventListener("scroll",r),window.addEventListener("scroll",r)}),Kn(()=>{const z=document.querySelector(".talent-cloud");z&&z.removeEventListener("scroll",r),window.removeEventListener("scroll",r);const T=document.querySelector(".header");T&&T.classList.remove("header-hidden")});const l=U({company:"",email:"",category:"",count:1,requirements:""}),c=[{icon:"📋",title:"Share Requirement",description:"Tell us your project needs and team requirements"},{icon:"🎯",title:"Get Matched Talent",description:"We match you with pre-vetted professionals"},{icon:"🚀",title:"Deploy & Work",description:"Onboard talent and start working immediately"},{icon:"📊",title:"Evaluate Performance",description:"Monitor progress with continuous feedback"},{icon:"✅",title:"Continue / Hire / Replace",description:"Flexible options based on your needs"}],m=[{icon:"🎓",title:"Pre-Trained Talent",description:"All professionals are trained on industry standards"},{icon:"💼",title:"Real Project Experience",description:"Hands-on experience with actual projects"},{icon:"🔄",title:"Flexible Deployment",description:"Scale up or down based on your needs"},{icon:"🔁",title:"Replacement Support",description:"Quick replacement if expectations not met"},{icon:"📈",title:"Continuous Upskilling",description:"Talent stays updated with latest technologies"},{icon:"👨‍🏫",title:"Mentor-Backed Performance",description:"Guided by experienced industry mentors"}],d=_i.categories,b=U(_i.talents),k=[{icon:"✅",title:"Quality-Checked Talent",description:"Every professional goes through rigorous assessment"},{icon:"📊",title:"Performance Monitoring",description:"Continuous tracking and feedback loops"},{icon:"🤝",title:"Reliable Engagement",description:"Transparent and flexible engagement models"},{icon:"👥",title:"Bench Strength",description:"Ready pool of talent for quick deployment"}],I=be(()=>o.value==="all"?b.value:b.value.filter(z=>z.categoryId===o.value));function $(z){a.value=a.value===z?null:z,o.value=z,O()}function O(){var z;(z=document.getElementById("talent-pool"))==null||z.scrollIntoView({behavior:"smooth"})}function L(){t.value=!0}function D(){t.value=!0}function M(z){s.value=z,n.value=!0}function Z(z){n.value=!1,l.value.category=(z==null?void 0:z.categoryId)||"",t.value=!0}function j(){console.log("Request submitted:",l.value),alert("Request submitted successfully! We will contact you soon."),t.value=!1,l.value={company:"",email:"",category:"",count:1,requirements:""}}return(z,T)=>{var he,pe,X,oe,le,N,re,ae,C;return h(),g("div",{class:"talent-cloud",onScroll:r,ref:"talentCloudRef"},[i("section",{class:"tc-hero"},[i("div",{class:"tc-hero-content"},[T[13]||(T[13]=i("span",{class:"tc-badge"},"Talent-as-a-Service",-1)),T[14]||(T[14]=i("h1",{class:"tc-hero-title"},[St("Hire. Evaluate. Scale —"),i("br"),St("Through Our Talent Network")],-1)),T[15]||(T[15]=i("p",{class:"tc-hero-subtitle"}," Access pre-trained, industry-ready talent. Deploy them on real work, evaluate performance, and scale your team with flexibility. ",-1)),i("div",{class:"tc-hero-buttons"},[i("button",{class:"tc-btn primary",onClick:L},[...T[11]||(T[11]=[i("span",{class:"btn-icon"},"🚀",-1),St(" Request Talent ",-1)])]),i("button",{class:"tc-btn secondary",onClick:O},[...T[12]||(T[12]=[i("span",{class:"btn-icon"},"👥",-1),St(" Explore Talent Pool ",-1)])])])]),T[16]||(T[16]=xt('<div class="tc-hero-visual" data-v-2d22a8cc><div class="floating-cards" data-v-2d22a8cc><div class="float-card card-1" data-v-2d22a8cc>👨‍💻</div><div class="float-card card-2" data-v-2d22a8cc>👩‍💻</div><div class="float-card card-3" data-v-2d22a8cc>🧑‍💻</div></div></div>',1))]),i("section",Mf,[T[17]||(T[17]=i("h2",{class:"tc-section-title"},"How It Works",-1)),i("div",Df,[(h(),g(J,null,Y(c,(v,G)=>i("div",{class:"step",key:G},[i("div",Bf,p(G+1),1),i("div",qf,p(v.icon),1),i("h3",Of,p(v.title),1),i("p",Ff,p(v.description),1),G<c.length-1?(h(),g("div",Nf)):K("",!0)])),64))])]),i("section",Uf,[T[18]||(T[18]=i("h2",{class:"tc-section-title"},"Key Highlights",-1)),i("div",Wf,[(h(),g(J,null,Y(m,v=>i("div",{class:"highlight-card",key:v.title},[i("div",jf,p(v.icon),1),i("h3",null,p(v.title),1),i("p",null,p(v.description),1)])),64))])]),i("section",Hf,[T[20]||(T[20]=i("h2",{class:"tc-section-title"},"Talent Categories",-1)),i("div",$f,[(h(!0),g(J,null,Y(xn(d),v=>(h(),g("div",{class:V(["category-card",{active:a.value===v.id}]),key:v.id,onClick:G=>$(v.id)},[i("div",zf,p(v.icon),1),i("h3",null,p(v.title),1),i("p",null,p(v.count)+" professionals",1),T[19]||(T[19]=i("button",{class:"category-cta"},"View Talent",-1))],10,Jf))),128))])]),i("section",Gf,[T[22]||(T[22]=i("h2",{class:"tc-section-title"},"Talent Pool",-1)),T[23]||(T[23]=i("p",{class:"tc-section-subtitle"},"Browse our pre-trained, industry-ready professionals",-1)),i("div",Vf,[i("button",{class:V(["filter-btn",{active:o.value==="all"}]),onClick:T[0]||(T[0]=v=>o.value="all")},"All",2),(h(!0),g(J,null,Y(xn(d),v=>(h(),g("button",{key:v.id,class:V(["filter-btn",{active:o.value===v.id}]),onClick:G=>o.value=v.id},p(v.shortName),11,Kf))),128))]),i("div",Qf,[(h(!0),g(J,null,Y(I.value,v=>(h(),g("div",{class:"talent-card",key:v.id},[i("div",Xf,[i("div",Yf,p(v.avatar),1),i("div",Zf,[i("h3",null,p(v.name),1),i("span",eh,p(v.uniqueId),1)]),i("span",{class:V(["status-badge",v.status])},p(v.status==="available"?"Available":"Deployed"),3)]),i("div",th,[(h(!0),g(J,null,Y(v.skills,G=>(h(),g("span",{class:"skill-tag",key:G},p(G),1))),128))]),i("div",nh,[i("span",sh,p(v.experience),1)]),v.location?(h(),g("div",ih,[i("span",null,"📍 "+p(v.location),1),T[21]||(T[21]=i("span",{class:"divider"},"•",-1)),i("span",null,"🎓 "+p(v.education),1)])):K("",!0),i("p",ah,p(v.projectDescription),1),i("div",oh,[i("button",{class:"action-btn view",onClick:G=>M(v)},"View Profile",8,rh),i("button",{class:"action-btn request",onClick:G=>Z(v),disabled:v.status!=="available"}," Request Talent ",8,lh)])]))),128))])]),i("section",ch,[T[24]||(T[24]=i("h2",{class:"tc-section-title"},"Platform Assurance",-1)),i("div",dh,[(h(),g(J,null,Y(k,v=>i("div",{class:"assurance-item",key:v.title},[i("div",uh,p(v.icon),1),i("h3",null,p(v.title),1),i("p",null,p(v.description),1)])),64))])]),i("section",{class:"tc-section tc-final-cta"},[i("div",{class:"cta-content"},[T[25]||(T[25]=i("h2",null,"Build your team with ready-to-perform talent",-1)),T[26]||(T[26]=i("p",null,"Get started today and access our network of skilled professionals",-1)),i("div",{class:"cta-buttons"},[i("button",{class:"tc-btn primary large",onClick:L}," Request Talent "),i("button",{class:"tc-btn secondary large",onClick:D}," Talk to Us ")])])]),t.value?(h(),g("div",{key:0,class:"modal-overlay",onClick:T[7]||(T[7]=Ve(v=>t.value=!1,["self"]))},[i("div",ph,[i("button",{class:"modal-close",onClick:T[1]||(T[1]=v=>t.value=!1)},"✕"),T[34]||(T[34]=i("h2",null,"Request Talent",-1)),i("form",{onSubmit:Ve(j,["prevent"]),class:"request-form"},[i("div",mh,[T[27]||(T[27]=i("label",null,"Company Name",-1)),Gt(i("input",{type:"text","onUpdate:modelValue":T[2]||(T[2]=v=>l.value.company=v),placeholder:"Enter company name",required:""},null,512),[[bn,l.value.company]])]),i("div",fh,[T[28]||(T[28]=i("label",null,"Email",-1)),Gt(i("input",{type:"email","onUpdate:modelValue":T[3]||(T[3]=v=>l.value.email=v),placeholder:"Enter email",required:""},null,512),[[bn,l.value.email]])]),i("div",hh,[T[30]||(T[30]=i("label",null,"Talent Category",-1)),Gt(i("select",{"onUpdate:modelValue":T[4]||(T[4]=v=>l.value.category=v),required:""},[T[29]||(T[29]=i("option",{value:""},"Select category",-1)),(h(!0),g(J,null,Y(xn(d),v=>(h(),g("option",{key:v.id,value:v.id},p(v.title),9,gh))),128))],512),[[hl,l.value.category]])]),i("div",yh,[T[31]||(T[31]=i("label",null,"Number of Resources",-1)),Gt(i("input",{type:"number","onUpdate:modelValue":T[5]||(T[5]=v=>l.value.count=v),min:"1",placeholder:"1",required:""},null,512),[[bn,l.value.count]])]),i("div",vh,[T[32]||(T[32]=i("label",null,"Requirements",-1)),Gt(i("textarea",{"onUpdate:modelValue":T[6]||(T[6]=v=>l.value.requirements=v),placeholder:"Describe your requirements...",rows:"4"},null,512),[[bn,l.value.requirements]])]),T[33]||(T[33]=i("button",{type:"submit",class:"tc-btn primary full-width"},"Submit Request",-1))],32)])])):K("",!0),n.value?(h(),g("div",{key:1,class:"modal-overlay",onClick:T[10]||(T[10]=Ve(v=>n.value=!1,["self"]))},[i("div",bh,[i("button",{class:"modal-close",onClick:T[8]||(T[8]=v=>n.value=!1)},"✕"),i("div",wh,[i("div",Sh,p((he=s.value)==null?void 0:he.avatar),1),i("div",xh,[i("h2",null,p((pe=s.value)==null?void 0:pe.name),1),i("span",kh,p((X=s.value)==null?void 0:X.uniqueId),1),i("span",{class:V(["status-badge",(oe=s.value)==null?void 0:oe.status])},p(((le=s.value)==null?void 0:le.status)==="available"?"Available":"Deployed"),3)])]),i("div",Th,[i("div",Ch,[T[35]||(T[35]=i("h3",null,"Skills",-1)),i("div",Ah,[(h(!0),g(J,null,Y((N=s.value)==null?void 0:N.skills,v=>(h(),g("span",{class:"skill-tag",key:v},p(v),1))),128))])]),i("div",Ph,[T[36]||(T[36]=i("h3",null,"Experience",-1)),i("p",null,p((re=s.value)==null?void 0:re.experience),1)]),i("div",_h,[T[37]||(T[37]=i("h3",null,"Recent Project",-1)),i("p",null,p((ae=s.value)==null?void 0:ae.projectDescription),1)])]),i("div",Eh,[i("button",{class:"tc-btn primary",onClick:T[9]||(T[9]=v=>Z(s.value)),disabled:((C=s.value)==null?void 0:C.status)!=="available"}," Request This Talent ",8,Ih)])])])):K("",!0)],544)}}},Lh=Dt(Rh,[["__scopeId","data-v-2d22a8cc"]]),Ei="/assets/1775264017792-B6ppRIZ1.png",Ii="/assets/1775264871247-CDyqfg_6.png",Ri="/assets/1775265121160-BEykj0RJ.png",Mh={class:"dashboard"},Dh={class:"hero-slides"},Bh={class:"hero-indicators"},qh=["onClick"],Oh={class:"hero-bottom"},Fh={key:1,class:"main-content"},Nh={class:"courses-section"},Uh={class:"courses"},Wh=["onClick"],jh={class:"card-badge"},Hh={class:"icon"},$h={class:"card-tags"},Jh=["onClick"],zh={class:"talentcloud-section"},Gh={class:"talentforge-section"},Vh={class:"testimonials"},Kh={class:"testimonials-grid"},Qh={class:"rating"},Xh={class:"testimonial-text"},Yh={class:"testimonial-author"},Zh={class:"author-avatar"},eg={class:"author-name"},tg={class:"author-role"},ng={key:2,class:"course-content"},sg={__name:"Dashboard",setup(e){const t=U(null),n=U(0),s=[Ei,Ii,Ri],a=U(!1),o=U(!1),r=U(!1);let l=null;const c=()=>{a.value=window.scrollY>100},m=()=>{const O=document.querySelector(".main-content");O&&O.scrollIntoView({behavior:"smooth"})};Vn(()=>{l=setInterval(()=>{n.value=(n.value+1)%s.length},5e3),window.addEventListener("scroll",c)}),Kn(()=>{l&&clearInterval(l),window.removeEventListener("scroll",c)});const d=[{id:"sdet",name:"SDET Mastery",icon:"🔬",description:"Master automation testing with Selenium, Playwright, API testing & CI/CD pipelines.",badge:"🔥 Most Popular",tags:["Industry Ready","Job Oriented","Hands-on"],lessons:120,duration:"6 Months",level:"Beginner → Pro"},{id:"java",name:"Java Development",icon:"☕",description:"Build enterprise-grade applications with Core Java, Spring Boot & Microservices.",badge:"⭐ Top Rated",tags:["Future Ready","Enterprise Level","In Demand"],lessons:95,duration:"5 Months",level:"Beginner → Pro"},{id:"ai",name:"AI Developer",icon:"🤖",description:"Master AI, Machine Learning, LLMs, Prompt Engineering & build intelligent applications.",badge:"🚀 New",tags:["Cutting Edge","High Demand","Future Tech"],lessons:80,duration:"4 Months",level:"Beginner → Pro"}],b=[{avatar:"👨‍💼",name:"Rajesh Kumar",role:"QA Engineer",text:"Medhasphere helped me transition from manual testing to automation within 3 months!",image:Ei},{avatar:"👩‍💻",name:"Priya Sharma",role:"Java Developer",text:"The structured learning path and practical exercises made Java concepts crystal clear.",image:Ii},{avatar:"👨‍🎓",name:"Arjun Patel",role:"SDET Specialist",text:"Best platform for learning SDET fundamentals. Highly recommended for career growth!",image:Ri}],k=O=>{t.value=O},I=()=>{t.value=null},$=be(()=>t.value==="sdet"?ed:t.value==="java"?gu:t.value==="ai"?Ip:t.value==="talentforge"?If:t.value==="talentcloud"?Lh:null);return(O,L)=>(h(),g("div",Mh,[i("header",{class:V(["header",{"header-scrolled":a.value,"header-hidden":!t.value&&a.value}])},[i("h1",{onClick:I,class:"logo"},[...L[8]||(L[8]=[St("📚 ",-1),i("span",{class:"logo-medha"},"Medha",-1),i("span",{class:"logo-sphere"},"sphere",-1)])]),i("button",{class:"mobile-menu-btn",onClick:L[0]||(L[0]=D=>r.value=!r.value)},[i("span",{class:V(["hamburger",{open:r.value}])},null,2)]),i("nav",{class:V(["nav-links",{"mobile-open":r.value}])},[t.value?(h(),g("span",{key:0,class:"nav-item home-btn",onClick:I}," 🏠 Home ")):K("",!0),i("span",{class:V(["nav-item talentcloud-nav",{active:t.value==="talentcloud"}]),onClick:L[1]||(L[1]=D=>{k("talentcloud"),r.value=!1})}," ☁️ Talent Cloud ",2),i("span",{class:V(["nav-item talentforge-nav",{active:t.value==="talentforge"}]),onClick:L[2]||(L[2]=D=>{k("talentforge"),r.value=!1})}," ⚡ TalentForge ",2)],2)],2),t.value?K("",!0):(h(),g("section",{key:0,class:"hero",onMouseenter:L[4]||(L[4]=D=>o.value=!0),onMouseleave:L[5]||(L[5]=D=>o.value=!1)},[i("div",Dh,[(h(),g(J,null,Y(s,(D,M)=>i("div",{key:M,class:V(["hero-slide",{active:n.value===M}]),style:Ht({backgroundImage:`url(${D})`})},null,6)),64))]),L[11]||(L[11]=i("div",{class:"hero-edge-overlay"},null,-1)),i("div",Bh,[(h(),g(J,null,Y(s,(D,M)=>i("span",{key:M,class:V(["indicator",{active:n.value===M}]),onClick:Z=>n.value=M},null,10,qh)),64))]),L[12]||(L[12]=xt('<div class="hero-tagline-container" data-v-20254335><h2 class="emerging-tagline" data-v-20254335><span class="tagline-word" data-v-20254335>Empowering</span><span class="tagline-word" data-v-20254335>Minds</span><span class="tagline-divider" data-v-20254335>·</span><span class="tagline-word" data-v-20254335>Delivering</span><span class="tagline-word" data-v-20254335>Solutions</span></h2></div>',1)),i("div",Oh,[i("button",{class:"hero-cta",onClick:m},[...L[9]||(L[9]=[i("span",{class:"cta-icon"},"🚀",-1),St(" Explore Skill Tracks ",-1),i("span",{class:"cta-arrow"},"↓",-1)])]),i("button",{class:"hero-cta talent-cloud-cta",onClick:L[3]||(L[3]=D=>k("talentcloud"))},[...L[10]||(L[10]=[i("span",{class:"cta-icon"},"☁️",-1),St(" Explore Talent Cloud ",-1),i("span",{class:"cta-arrow"},"→",-1)])])])],32)),t.value?K("",!0):(h(),g("div",Fh,[i("section",Nh,[L[15]||(L[15]=i("h2",{class:"section-title"},"Choose Your Learning Path",-1)),i("div",Uh,[(h(),g(J,null,Y(d,D=>i("div",{class:"card",key:D.id,onClick:M=>k(D.id)},[L[14]||(L[14]=i("div",{class:"card-background"},null,-1)),i("div",jh,p(D.badge),1),i("div",Hh,p(D.icon),1),i("h3",null,p(D.name),1),i("p",null,p(D.description),1),i("div",$h,[(h(!0),g(J,null,Y(D.tags,M=>(h(),g("span",{class:"tag",key:M},p(M),1))),128))]),i("button",{class:"btn",onClick:Ve(M=>k(D.id),["stop"])},[...L[13]||(L[13]=[i("span",{class:"btn-text"},"Start Learning",-1),i("span",{class:"btn-arrow"},"→",-1)])],8,Jh)],8,Wh)),64))])]),i("section",zh,[i("div",{class:"tc-banner",onClick:L[6]||(L[6]=D=>k("talentcloud"))},[...L[16]||(L[16]=[xt('<div class="tc-banner-bg" data-v-20254335></div><div class="tc-banner-content" data-v-20254335><div class="tc-banner-left" data-v-20254335><span class="tc-badge" data-v-20254335>☁️ Talent-as-a-Service</span><h2 class="tc-banner-title" data-v-20254335>Hire Talent</h2><p class="tc-banner-tagline" data-v-20254335>Access and deploy industry-ready professionals</p><div class="tc-features" data-v-20254335><span class="tc-feature" data-v-20254335>🎯 Pre-Trained Talent</span><span class="tc-feature" data-v-20254335>🚀 Quick Deployment</span><span class="tc-feature" data-v-20254335>📊 Performance Tracking</span></div></div><div class="tc-banner-right" data-v-20254335><button class="tc-enter-btn" data-v-20254335> Explore Talent Cloud → </button></div></div>',2)])])]),i("section",Gh,[i("div",{class:"tf-banner",onClick:L[7]||(L[7]=D=>k("talentforge"))},[...L[17]||(L[17]=[xt('<div class="tf-banner-bg" data-v-20254335></div><div class="tf-banner-content" data-v-20254335><div class="tf-banner-left" data-v-20254335><span class="tf-badge" data-v-20254335>⚡ Skill Validation &amp; Hiring</span><h2 class="tf-banner-title" data-v-20254335>TalentForge</h2><p class="tf-banner-tagline" data-v-20254335>Forge your skills. Prove your talent. Get hired.</p><div class="tf-features" data-v-20254335><span class="tf-feature" data-v-20254335>🧠 QuickFire Quizzes</span><span class="tf-feature" data-v-20254335>🧩 Real Challenges</span><span class="tf-feature" data-v-20254335>💰 Earn Coins</span><span class="tf-feature" data-v-20254335>🏆 Get Hired</span></div></div><div class="tf-banner-right" data-v-20254335><div class="tf-stats-preview" data-v-20254335><div class="tf-stat-item" data-v-20254335><span class="tf-stat-value" data-v-20254335>0</span><span class="tf-stat-label" data-v-20254335>Active Users</span></div><div class="tf-stat-item" data-v-20254335><span class="tf-stat-value" data-v-20254335>0</span><span class="tf-stat-label" data-v-20254335>Companies Hiring</span></div><div class="tf-stat-item" data-v-20254335><span class="tf-stat-value" data-v-20254335>$0</span><span class="tf-stat-label" data-v-20254335>Rewards Given</span></div></div><button class="tf-enter-btn" data-v-20254335> Enter TalentForge → </button></div></div>',2)])])]),i("section",Vh,[L[18]||(L[18]=i("h2",{class:"section-title"},"⭐ What Our Learners Say",-1)),i("div",Kh,[(h(),g(J,null,Y(b,(D,M)=>i("div",{class:"testimonial-card",key:M},[i("div",Qh,[(h(),g(J,null,Y(5,Z=>i("span",{key:Z,class:"star"},"★")),64))]),i("p",Xh,'"'+p(D.text)+'"',1),i("div",Yh,[i("div",Zh,p(D.avatar),1),i("div",null,[i("p",eg,p(D.name),1),i("p",tg,p(D.role),1)])])])),64))])]),L[19]||(L[19]=i("footer",{class:"footer"},[i("div",{class:"footer-content"},[i("div",{class:"footer-brand"},[i("h3",null,"📚 Medhasphere"),i("p",null,"Empowering Minds · Delivering Solutions")]),i("div",{class:"footer-links"},[i("p",null,"© 2025 Medhasphere. All rights reserved.")])])],-1))])),t.value?(h(),g("div",ng,[(h(),Os(er($.value)))])):K("",!0)]))}},ig=Dt(sg,[["__scopeId","data-v-20254335"]]),ag={__name:"App",setup(e){return(t,n)=>(h(),Os(ig))}};wl(ag).mount("#app");
