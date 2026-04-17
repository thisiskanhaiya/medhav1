(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ls(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Se={},Gt=[],mt=()=>{},zi=()=>!1,Vn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Kn=e=>e.startsWith("onUpdate:"),_e=Object.assign,Ms=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},co=Object.prototype.hasOwnProperty,he=(e,t)=>co.call(e,t),ne=Array.isArray,zt=e=>Sn(e)==="[object Map]",Zt=e=>Sn(e)==="[object Set]",Zs=e=>Sn(e)==="[object Date]",ce=e=>typeof e=="function",Ce=e=>typeof e=="string",ft=e=>typeof e=="symbol",ve=e=>e!==null&&typeof e=="object",Vi=e=>(ve(e)||ce(e))&&ce(e.then)&&ce(e.catch),Ki=Object.prototype.toString,Sn=e=>Ki.call(e),uo=e=>Sn(e).slice(8,-1),Qi=e=>Sn(e)==="[object Object]",Ds=e=>Ce(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,rn=Ls(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},po=/-\w/g,We=Qn(e=>e.replace(po,t=>t.slice(1).toUpperCase())),mo=/\B([A-Z])/g,jt=Qn(e=>e.replace(mo,"-$1").toLowerCase()),Xn=Qn(e=>e.charAt(0).toUpperCase()+e.slice(1)),rs=Qn(e=>e?`on${Xn(e)}`:""),ut=(e,t)=>!Object.is(e,t),Mn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Xi=(e,t,n,i=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:i,value:n})},Yn=e=>{const t=parseFloat(e);return isNaN(t)?e:t},fo=e=>{const t=Ce(e)?Number(e):NaN;return isNaN(t)?e:t};let ei;const Zn=()=>ei||(ei=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Qt(e){if(ne(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],a=Ce(i)?yo(i):Qt(i);if(a)for(const o in a)t[o]=a[o]}return t}else if(Ce(e)||ve(e))return e}const go=/;(?![^(]*\))/g,ho=/:([^]+)/,vo=/\/\*[^]*?\*\//g;function yo(e){const t={};return e.replace(vo,"").split(go).forEach(n=>{if(n){const i=n.split(ho);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function V(e){let t="";if(Ce(e))t=e;else if(ne(e))for(let n=0;n<e.length;n++){const i=V(e[n]);i&&(t+=i+" ")}else if(ve(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const bo="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wo=Ls(bo);function Yi(e){return!!e||e===""}function So(e,t){if(e.length!==t.length)return!1;let n=!0;for(let i=0;n&&i<e.length;i++)n=_t(e[i],t[i]);return n}function _t(e,t){if(e===t)return!0;let n=Zs(e),i=Zs(t);if(n||i)return n&&i?e.getTime()===t.getTime():!1;if(n=ft(e),i=ft(t),n||i)return e===t;if(n=ne(e),i=ne(t),n||i)return n&&i?So(e,t):!1;if(n=ve(e),i=ve(t),n||i){if(!n||!i)return!1;const a=Object.keys(e).length,o=Object.keys(t).length;if(a!==o)return!1;for(const r in e){const l=e.hasOwnProperty(r),c=t.hasOwnProperty(r);if(l&&!c||!l&&c||!_t(e[r],t[r]))return!1}}return String(e)===String(t)}function Bs(e,t){return e.findIndex(n=>_t(n,t))}const Zi=e=>!!(e&&e.__v_isRef===!0),m=e=>Ce(e)?e:e==null?"":ne(e)||ve(e)&&(e.toString===Ki||!ce(e.toString))?Zi(e)?m(e.value):JSON.stringify(e,ea,2):String(e),ea=(e,t)=>Zi(t)?ea(e,t.value):zt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[i,a],o)=>(n[ls(i,o)+" =>"]=a,n),{})}:Zt(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>ls(n))}:ft(t)?ls(t):ve(t)&&!ne(t)&&!Qi(t)?String(t):t,ls=(e,t="")=>{var n;return ft(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let He;class xo{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=He,!t&&He&&(this.index=(He.scopes||(He.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=He;try{return He=this,t()}finally{He=n}}}on(){++this._on===1&&(this.prevScope=He,He=this)}off(){this._on>0&&--this._on===0&&(He=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0}}}function ko(){return He}let ke;const cs=new WeakSet;class ta{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,He&&He.active&&He.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,cs.has(this)&&(cs.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||sa(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ti(this),ia(this);const t=ke,n=et;ke=this,et=!0;try{return this.fn()}finally{aa(this),ke=t,et=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Fs(t);this.deps=this.depsTail=void 0,ti(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?cs.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ys(this)&&this.run()}get dirty(){return ys(this)}}let na=0,ln,cn;function sa(e,t=!1){if(e.flags|=8,t){e.next=cn,cn=e;return}e.next=ln,ln=e}function qs(){na++}function Os(){if(--na>0)return;if(cn){let t=cn;for(cn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;ln;){let t=ln;for(ln=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){e||(e=i)}t=n}}if(e)throw e}function ia(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function aa(e){let t,n=e.depsTail,i=n;for(;i;){const a=i.prevDep;i.version===-1?(i===n&&(n=a),Fs(i),To(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=a}e.deps=t,e.depsTail=n}function ys(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(oa(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function oa(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===fn)||(e.globalVersion=fn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!ys(e))))return;e.flags|=2;const t=e.dep,n=ke,i=et;ke=e,et=!0;try{ia(e);const a=e.fn(e._value);(t.version===0||ut(a,e._value))&&(e.flags|=128,e._value=a,t.version++)}catch(a){throw t.version++,a}finally{ke=n,et=i,aa(e),e.flags&=-3}}function Fs(e,t=!1){const{dep:n,prevSub:i,nextSub:a}=e;if(i&&(i.nextSub=a,e.prevSub=void 0),a&&(a.prevSub=i,e.nextSub=void 0),n.subs===e&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)Fs(o,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function To(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let et=!0;const ra=[];function xt(){ra.push(et),et=!1}function kt(){const e=ra.pop();et=e===void 0?!0:e}function ti(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ke;ke=void 0;try{t()}finally{ke=n}}}let fn=0;class Co{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ns{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ke||!et||ke===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ke)n=this.activeLink=new Co(ke,this),ke.deps?(n.prevDep=ke.depsTail,ke.depsTail.nextDep=n,ke.depsTail=n):ke.deps=ke.depsTail=n,la(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=ke.depsTail,n.nextDep=void 0,ke.depsTail.nextDep=n,ke.depsTail=n,ke.deps===n&&(ke.deps=i)}return n}trigger(t){this.version++,fn++,this.notify(t)}notify(t){qs();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Os()}}}function la(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)la(i)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const bs=new WeakMap,Nt=Symbol(""),ws=Symbol(""),gn=Symbol("");function Le(e,t,n){if(et&&ke){let i=bs.get(e);i||bs.set(e,i=new Map);let a=i.get(n);a||(i.set(n,a=new Ns),a.map=i,a.key=n),a.track()}}function bt(e,t,n,i,a,o){const r=bs.get(e);if(!r){fn++;return}const l=c=>{c&&c.trigger()};if(qs(),t==="clear")r.forEach(l);else{const c=ne(e),u=c&&Ds(n);if(c&&n==="length"){const d=Number(i);r.forEach((v,C)=>{(C==="length"||C===gn||!ft(C)&&C>=d)&&l(v)})}else switch((n!==void 0||r.has(void 0))&&l(r.get(n)),u&&l(r.get(gn)),t){case"add":c?u&&l(r.get("length")):(l(r.get(Nt)),zt(e)&&l(r.get(ws)));break;case"delete":c||(l(r.get(Nt)),zt(e)&&l(r.get(ws)));break;case"set":zt(e)&&l(r.get(Nt));break}}Os()}function $t(e){const t=ge(e);return t===e?t:(Le(t,"iterate",gn),Ye(e)?t:t.map(tt))}function es(e){return Le(e=ge(e),"iterate",gn),e}function ct(e,t){return Tt(e)?Xt(Ut(e)?tt(t):t):tt(t)}const Ao={__proto__:null,[Symbol.iterator](){return ds(this,Symbol.iterator,e=>ct(this,e))},concat(...e){return $t(this).concat(...e.map(t=>ne(t)?$t(t):t))},entries(){return ds(this,"entries",e=>(e[1]=ct(this,e[1]),e))},every(e,t){return gt(this,"every",e,t,void 0,arguments)},filter(e,t){return gt(this,"filter",e,t,n=>n.map(i=>ct(this,i)),arguments)},find(e,t){return gt(this,"find",e,t,n=>ct(this,n),arguments)},findIndex(e,t){return gt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return gt(this,"findLast",e,t,n=>ct(this,n),arguments)},findLastIndex(e,t){return gt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return gt(this,"forEach",e,t,void 0,arguments)},includes(...e){return us(this,"includes",e)},indexOf(...e){return us(this,"indexOf",e)},join(e){return $t(this).join(e)},lastIndexOf(...e){return us(this,"lastIndexOf",e)},map(e,t){return gt(this,"map",e,t,void 0,arguments)},pop(){return tn(this,"pop")},push(...e){return tn(this,"push",e)},reduce(e,...t){return ni(this,"reduce",e,t)},reduceRight(e,...t){return ni(this,"reduceRight",e,t)},shift(){return tn(this,"shift")},some(e,t){return gt(this,"some",e,t,void 0,arguments)},splice(...e){return tn(this,"splice",e)},toReversed(){return $t(this).toReversed()},toSorted(e){return $t(this).toSorted(e)},toSpliced(...e){return $t(this).toSpliced(...e)},unshift(...e){return tn(this,"unshift",e)},values(){return ds(this,"values",e=>ct(this,e))}};function ds(e,t,n){const i=es(e),a=i[t]();return i!==e&&!Ye(e)&&(a._next=a.next,a.next=()=>{const o=a._next();return o.done||(o.value=n(o.value)),o}),a}const Po=Array.prototype;function gt(e,t,n,i,a,o){const r=es(e),l=r!==e&&!Ye(e),c=r[t];if(c!==Po[t]){const v=c.apply(e,o);return l?tt(v):v}let u=n;r!==e&&(l?u=function(v,C){return n.call(this,ct(e,v),C,e)}:n.length>2&&(u=function(v,C){return n.call(this,v,C,e)}));const d=c.call(r,u,i);return l&&a?a(d):d}function ni(e,t,n,i){const a=es(e),o=a!==e&&!Ye(e);let r=n,l=!1;a!==e&&(o?(l=i.length===0,r=function(u,d,v){return l&&(l=!1,u=ct(e,u)),n.call(this,u,ct(e,d),v,e)}):n.length>3&&(r=function(u,d,v){return n.call(this,u,d,v,e)}));const c=a[t](r,...i);return l?ct(e,c):c}function us(e,t,n){const i=ge(e);Le(i,"iterate",gn);const a=i[t](...n);return(a===-1||a===!1)&&js(n[0])?(n[0]=ge(n[0]),i[t](...n)):a}function tn(e,t,n=[]){xt(),qs();const i=ge(e)[t].apply(e,n);return Os(),kt(),i}const _o=Ls("__proto__,__v_isRef,__isVue"),ca=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ft));function Eo(e){ft(e)||(e=String(e));const t=ge(this);return Le(t,"has",e),t.hasOwnProperty(e)}class da{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,i){if(n==="__v_skip")return t.__v_skip;const a=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return o;if(n==="__v_raw")return i===(a?o?No:fa:o?ma:pa).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const r=ne(t);if(!a){let c;if(r&&(c=Ao[n]))return c;if(n==="hasOwnProperty")return Eo}const l=Reflect.get(t,n,De(t)?t:i);if((ft(n)?ca.has(n):_o(n))||(a||Le(t,"get",n),o))return l;if(De(l)){const c=r&&Ds(n)?l:l.value;return a&&ve(c)?xs(c):c}return ve(l)?a?xs(l):xn(l):l}}class ua extends da{constructor(t=!1){super(!1,t)}set(t,n,i,a){let o=t[n];const r=ne(t)&&Ds(n);if(!this._isShallow){const u=Tt(o);if(!Ye(i)&&!Tt(i)&&(o=ge(o),i=ge(i)),!r&&De(o)&&!De(i))return u||(o.value=i),!0}const l=r?Number(n)<t.length:he(t,n),c=Reflect.set(t,n,i,De(t)?t:a);return t===ge(a)&&(l?ut(i,o)&&bt(t,"set",n,i):bt(t,"add",n,i)),c}deleteProperty(t,n){const i=he(t,n);t[n];const a=Reflect.deleteProperty(t,n);return a&&i&&bt(t,"delete",n,void 0),a}has(t,n){const i=Reflect.has(t,n);return(!ft(n)||!ca.has(n))&&Le(t,"has",n),i}ownKeys(t){return Le(t,"iterate",ne(t)?"length":Nt),Reflect.ownKeys(t)}}class Io extends da{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Ro=new ua,Lo=new Io,Mo=new ua(!0);const Ss=e=>e,Pn=e=>Reflect.getPrototypeOf(e);function Do(e,t,n){return function(...i){const a=this.__v_raw,o=ge(a),r=zt(o),l=e==="entries"||e===Symbol.iterator&&r,c=e==="keys"&&r,u=a[e](...i),d=n?Ss:t?Xt:tt;return!t&&Le(o,"iterate",c?ws:Nt),_e(Object.create(u),{next(){const{value:v,done:C}=u.next();return C?{value:v,done:C}:{value:l?[d(v[0]),d(v[1])]:d(v),done:C}}})}}function _n(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Bo(e,t){const n={get(a){const o=this.__v_raw,r=ge(o),l=ge(a);e||(ut(a,l)&&Le(r,"get",a),Le(r,"get",l));const{has:c}=Pn(r),u=t?Ss:e?Xt:tt;if(c.call(r,a))return u(o.get(a));if(c.call(r,l))return u(o.get(l));o!==r&&o.get(a)},get size(){const a=this.__v_raw;return!e&&Le(ge(a),"iterate",Nt),a.size},has(a){const o=this.__v_raw,r=ge(o),l=ge(a);return e||(ut(a,l)&&Le(r,"has",a),Le(r,"has",l)),a===l?o.has(a):o.has(a)||o.has(l)},forEach(a,o){const r=this,l=r.__v_raw,c=ge(l),u=t?Ss:e?Xt:tt;return!e&&Le(c,"iterate",Nt),l.forEach((d,v)=>a.call(o,u(d),u(v),r))}};return _e(n,e?{add:_n("add"),set:_n("set"),delete:_n("delete"),clear:_n("clear")}:{add(a){const o=ge(this),r=Pn(o),l=ge(a),c=!t&&!Ye(a)&&!Tt(a)?l:a;return r.has.call(o,c)||ut(a,c)&&r.has.call(o,a)||ut(l,c)&&r.has.call(o,l)||(o.add(c),bt(o,"add",c,c)),this},set(a,o){!t&&!Ye(o)&&!Tt(o)&&(o=ge(o));const r=ge(this),{has:l,get:c}=Pn(r);let u=l.call(r,a);u||(a=ge(a),u=l.call(r,a));const d=c.call(r,a);return r.set(a,o),u?ut(o,d)&&bt(r,"set",a,o):bt(r,"add",a,o),this},delete(a){const o=ge(this),{has:r,get:l}=Pn(o);let c=r.call(o,a);c||(a=ge(a),c=r.call(o,a)),l&&l.call(o,a);const u=o.delete(a);return c&&bt(o,"delete",a,void 0),u},clear(){const a=ge(this),o=a.size!==0,r=a.clear();return o&&bt(a,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(a=>{n[a]=Do(a,e,t)}),n}function Us(e,t){const n=Bo(e,t);return(i,a,o)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?i:Reflect.get(he(n,a)&&a in i?n:i,a,o)}const qo={get:Us(!1,!1)},Oo={get:Us(!1,!0)},Fo={get:Us(!0,!1)};const pa=new WeakMap,ma=new WeakMap,fa=new WeakMap,No=new WeakMap;function Uo(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wo(e){return e.__v_skip||!Object.isExtensible(e)?0:Uo(uo(e))}function xn(e){return Tt(e)?e:Ws(e,!1,Ro,qo,pa)}function jo(e){return Ws(e,!1,Mo,Oo,ma)}function xs(e){return Ws(e,!0,Lo,Fo,fa)}function Ws(e,t,n,i,a){if(!ve(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=Wo(e);if(o===0)return e;const r=a.get(e);if(r)return r;const l=new Proxy(e,o===2?i:n);return a.set(e,l),l}function Ut(e){return Tt(e)?Ut(e.__v_raw):!!(e&&e.__v_isReactive)}function Tt(e){return!!(e&&e.__v_isReadonly)}function Ye(e){return!!(e&&e.__v_isShallow)}function js(e){return e?!!e.__v_raw:!1}function ge(e){const t=e&&e.__v_raw;return t?ge(t):e}function Ho(e){return!he(e,"__v_skip")&&Object.isExtensible(e)&&Xi(e,"__v_skip",!0),e}const tt=e=>ve(e)?xn(e):e,Xt=e=>ve(e)?xs(e):e;function De(e){return e?e.__v_isRef===!0:!1}function M(e){return $o(e,!1)}function $o(e,t){return De(e)?e:new Jo(e,t)}class Jo{constructor(t,n){this.dep=new Ns,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:ge(t),this._value=n?t:tt(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,i=this.__v_isShallow||Ye(t)||Tt(t);t=i?t:ge(t),ut(t,n)&&(this._rawValue=t,this._value=i?t:tt(t),this.dep.trigger())}}function Dn(e){return De(e)?e.value:e}const Go={get:(e,t,n)=>t==="__v_raw"?e:Dn(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const a=e[t];return De(a)&&!De(n)?(a.value=n,!0):Reflect.set(e,t,n,i)}};function ga(e){return Ut(e)?e:new Proxy(e,Go)}class zo{constructor(t,n,i){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Ns(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=fn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ke!==this)return sa(this,!0),!0}get value(){const t=this.dep.track();return oa(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Vo(e,t,n=!1){let i,a;return ce(e)?i=e:(i=e.get,a=e.set),new zo(i,a,n)}const En={},Un=new WeakMap;let qt;function Ko(e,t=!1,n=qt){if(n){let i=Un.get(n);i||Un.set(n,i=[]),i.push(e)}}function Qo(e,t,n=Se){const{immediate:i,deep:a,once:o,scheduler:r,augmentJob:l,call:c}=n,u=H=>a?H:Ye(H)||a===!1||a===0?wt(H,1):wt(H);let d,v,C,k,w=!1,P=!1;if(De(e)?(v=()=>e.value,w=Ye(e)):Ut(e)?(v=()=>u(e),w=!0):ne(e)?(P=!0,w=e.some(H=>Ut(H)||Ye(H)),v=()=>e.map(H=>{if(De(H))return H.value;if(Ut(H))return u(H);if(ce(H))return c?c(H,2):H()})):ce(e)?t?v=c?()=>c(e,2):e:v=()=>{if(C){xt();try{C()}finally{kt()}}const H=qt;qt=d;try{return c?c(e,3,[k]):e(k)}finally{qt=H}}:v=mt,t&&a){const H=v,G=a===!0?1/0:a;v=()=>wt(H(),G)}const J=ko(),j=()=>{d.stop(),J&&J.active&&Ms(J.effects,d)};if(o&&t){const H=t;t=(...G)=>{H(...G),j()}}let B=P?new Array(e.length).fill(En):En;const Y=H=>{if(!(!(d.flags&1)||!d.dirty&&!H))if(t){const G=d.run();if(a||w||(P?G.some((T,ee)=>ut(T,B[ee])):ut(G,B))){C&&C();const T=qt;qt=d;try{const ee=[G,B===En?void 0:P&&B[0]===En?[]:B,k];B=G,c?c(t,3,ee):t(...ee)}finally{qt=T}}}else d.run()};return l&&l(Y),d=new ta(v),d.scheduler=r?()=>r(Y,!1):Y,k=H=>Ko(H,!1,d),C=d.onStop=()=>{const H=Un.get(d);if(H){if(c)c(H,4);else for(const G of H)G();Un.delete(d)}},t?i?Y(!0):B=d.run():r?r(Y.bind(null,!0),!0):d.run(),j.pause=d.pause.bind(d),j.resume=d.resume.bind(d),j.stop=j,j}function wt(e,t=1/0,n){if(t<=0||!ve(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,De(e))wt(e.value,t,n);else if(ne(e))for(let i=0;i<e.length;i++)wt(e[i],t,n);else if(Zt(e)||zt(e))e.forEach(i=>{wt(i,t,n)});else if(Qi(e)){for(const i in e)wt(e[i],t,n);for(const i of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,i)&&wt(e[i],t,n)}return e}/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function kn(e,t,n,i){try{return i?e(...i):e()}catch(a){ts(a,t,n)}}function nt(e,t,n,i){if(ce(e)){const a=kn(e,t,n,i);return a&&Vi(a)&&a.catch(o=>{ts(o,t,n)}),a}if(ne(e)){const a=[];for(let o=0;o<e.length;o++)a.push(nt(e[o],t,n,i));return a}}function ts(e,t,n,i=!0){const a=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:r}=t&&t.appContext.config||Se;if(t){let l=t.parent;const c=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let v=0;v<d.length;v++)if(d[v](e,c,u)===!1)return}l=l.parent}if(o){xt(),kn(o,null,10,[e,c,u]),kt();return}}Xo(e,n,a,i,r)}function Xo(e,t,n,i=!0,a=!1){if(a)throw e;console.error(e)}const Oe=[];let rt=-1;const Vt=[];let Pt=null,Jt=0;const ha=Promise.resolve();let Wn=null;function va(e){const t=Wn||ha;return e?t.then(this?e.bind(this):e):t}function Yo(e){let t=rt+1,n=Oe.length;for(;t<n;){const i=t+n>>>1,a=Oe[i],o=hn(a);o<e||o===e&&a.flags&2?t=i+1:n=i}return t}function Hs(e){if(!(e.flags&1)){const t=hn(e),n=Oe[Oe.length-1];!n||!(e.flags&2)&&t>=hn(n)?Oe.push(e):Oe.splice(Yo(t),0,e),e.flags|=1,ya()}}function ya(){Wn||(Wn=ha.then(wa))}function Zo(e){ne(e)?Vt.push(...e):Pt&&e.id===-1?Pt.splice(Jt+1,0,e):e.flags&1||(Vt.push(e),e.flags|=1),ya()}function si(e,t,n=rt+1){for(;n<Oe.length;n++){const i=Oe[n];if(i&&i.flags&2){if(e&&i.id!==e.uid)continue;Oe.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function ba(e){if(Vt.length){const t=[...new Set(Vt)].sort((n,i)=>hn(n)-hn(i));if(Vt.length=0,Pt){Pt.push(...t);return}for(Pt=t,Jt=0;Jt<Pt.length;Jt++){const n=Pt[Jt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Pt=null,Jt=0}}const hn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function wa(e){try{for(rt=0;rt<Oe.length;rt++){const t=Oe[rt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),kn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;rt<Oe.length;rt++){const t=Oe[rt];t&&(t.flags&=-2)}rt=-1,Oe.length=0,ba(),Wn=null,(Oe.length||Vt.length)&&wa()}}let ze=null,Sa=null;function jn(e){const t=ze;return ze=e,Sa=e&&e.type.__scopeId||null,t}function Ne(e,t=ze,n){if(!t||e._n)return e;const i=(...a)=>{i._d&&Jn(-1);const o=jn(t);let r;try{r=e(...a)}finally{jn(o),i._d&&Jn(1)}return r};return i._n=!0,i._c=!0,i._d=!0,i}function Ge(e,t){if(ze===null)return e;const n=os(ze),i=e.dirs||(e.dirs=[]);for(let a=0;a<t.length;a++){let[o,r,l,c=Se]=t[a];o&&(ce(o)&&(o={mounted:o,updated:o}),o.deep&&wt(r),i.push({dir:o,instance:n,value:r,oldValue:void 0,arg:l,modifiers:c}))}return e}function Rt(e,t,n,i){const a=e.dirs,o=t&&t.dirs;for(let r=0;r<a.length;r++){const l=a[r];o&&(l.oldValue=o[r].value);let c=l.dir[i];c&&(xt(),nt(c,n,8,[e.el,l,e,t]),kt())}}function er(e,t){if(Me){let n=Me.provides;const i=Me.parent&&Me.parent.provides;i===n&&(n=Me.provides=Object.create(i)),n[e]=t}}function Bn(e,t,n=!1){const i=eo();if(i||Kt){let a=Kt?Kt._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(a&&e in a)return a[e];if(arguments.length>1)return n&&ce(t)?t.call(i&&i.proxy):t}}const tr=Symbol.for("v-scx"),nr=()=>Bn(tr);function qn(e,t,n){return xa(e,t,n)}function xa(e,t,n=Se){const{immediate:i,deep:a,flush:o,once:r}=n,l=_e({},n),c=t&&i||!t&&o!=="post";let u;if(bn){if(o==="sync"){const k=nr();u=k.__watcherHandles||(k.__watcherHandles=[])}else if(!c){const k=()=>{};return k.stop=mt,k.resume=mt,k.pause=mt,k}}const d=Me;l.call=(k,w,P)=>nt(k,d,w,P);let v=!1;o==="post"?l.scheduler=k=>{qe(k,d&&d.suspense)}:o!=="sync"&&(v=!0,l.scheduler=(k,w)=>{w?k():Hs(k)}),l.augmentJob=k=>{t&&(k.flags|=4),v&&(k.flags|=2,d&&(k.id=d.uid,k.i=d))};const C=Qo(e,t,l);return bn&&(u?u.push(C):c&&C()),C}function sr(e,t,n){const i=this.proxy,a=Ce(e)?e.includes(".")?ka(i,e):()=>i[e]:e.bind(i,i);let o;ce(t)?o=t:(o=t.handler,n=t);const r=An(this),l=xa(a,o.bind(i),n);return r(),l}function ka(e,t){const n=t.split(".");return()=>{let i=e;for(let a=0;a<n.length&&i;a++)i=i[n[a]];return i}}const Lt=new WeakMap,Ta=Symbol("_vte"),Ca=e=>e.__isTeleport,Ot=e=>e&&(e.disabled||e.disabled===""),ir=e=>e&&(e.defer||e.defer===""),ii=e=>typeof SVGElement<"u"&&e instanceof SVGElement,ai=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,ks=(e,t)=>{const n=e&&e.to;return Ce(n)?t?t(n):null:n},ar={name:"Teleport",__isTeleport:!0,process(e,t,n,i,a,o,r,l,c,u){const{mc:d,pc:v,pbc:C,o:{insert:k,querySelector:w,createText:P,createComment:J}}=u,j=Ot(t.props);let{dynamicChildren:B}=t;const Y=(T,ee,oe)=>{T.shapeFlag&16&&d(T.children,ee,oe,a,o,r,l,c)},H=(T=t)=>{const ee=Ot(T.props),oe=T.target=ks(T.props,w),X=Ts(oe,T,P,k);oe&&(r!=="svg"&&ii(oe)?r="svg":r!=="mathml"&&ai(oe)&&(r="mathml"),a&&a.isCE&&(a.ce._teleportTargets||(a.ce._teleportTargets=new Set)).add(oe),ee||(Y(T,oe,X),an(T,!1)))},G=T=>{const ee=()=>{Lt.get(T)===ee&&(Lt.delete(T),Ot(T.props)&&(Y(T,n,T.anchor),an(T,!0)),H(T))};Lt.set(T,ee),qe(ee,o)};if(e==null){const T=t.el=P(""),ee=t.anchor=P("");if(k(T,n,i),k(ee,n,i),ir(t.props)||o&&o.pendingBranch){G(t);return}j&&(Y(t,n,ee),an(t,!0)),H()}else{t.el=e.el;const T=t.anchor=e.anchor,ee=Lt.get(e);if(ee){ee.flags|=8,Lt.delete(e),G(t);return}t.targetStart=e.targetStart;const oe=t.target=e.target,X=t.targetAnchor=e.targetAnchor,ae=Ot(e.props),pe=ae?n:oe,U=ae?T:X;if(r==="svg"||ii(oe)?r="svg":(r==="mathml"||ai(oe))&&(r="mathml"),B?(C(e.dynamicChildren,B,pe,a,o,r,l),Gs(e,t,!0)):c||v(e,t,pe,U,a,o,r,l,!1),j)ae?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):In(t,n,T,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const le=t.target=ks(t.props,w);le&&In(t,le,null,u,0)}else ae&&In(t,oe,X,u,1);an(t,j)}},remove(e,t,n,{um:i,o:{remove:a}},o){const{shapeFlag:r,children:l,anchor:c,targetStart:u,targetAnchor:d,target:v,props:C}=e;let k=o||!Ot(C);const w=Lt.get(e);if(w&&(w.flags|=8,Lt.delete(e),k=!1),v&&(a(u),a(d)),o&&a(c),r&16)for(let P=0;P<l.length;P++){const J=l[P];i(J,t,n,k,!!J.dynamicChildren)}},move:In,hydrate:or};function In(e,t,n,{o:{insert:i},m:a},o=2){o===0&&i(e.targetAnchor,t,n);const{el:r,anchor:l,shapeFlag:c,children:u,props:d}=e,v=o===2;if(v&&i(r,t,n),(!v||Ot(d))&&c&16)for(let C=0;C<u.length;C++)a(u[C],t,n,2);v&&i(l,t,n)}function or(e,t,n,i,a,o,{o:{nextSibling:r,parentNode:l,querySelector:c,insert:u,createText:d}},v){function C(J,j){let B=j;for(;B;){if(B&&B.nodeType===8){if(B.data==="teleport start anchor")t.targetStart=B;else if(B.data==="teleport anchor"){t.targetAnchor=B,J._lpa=t.targetAnchor&&r(t.targetAnchor);break}}B=r(B)}}function k(J,j){j.anchor=v(r(J),j,l(J),n,i,a,o)}const w=t.target=ks(t.props,c),P=Ot(t.props);if(w){const J=w._lpa||w.firstChild;t.shapeFlag&16&&(P?(k(e,t),C(w,J),t.targetAnchor||Ts(w,t,d,u,l(e)===w?e:null)):(t.anchor=r(e),C(w,J),t.targetAnchor||Ts(w,t,d,u),v(J&&r(J),t,w,n,i,a,o))),an(t,P)}else P&&t.shapeFlag&16&&(k(e,t),t.targetStart=e,t.targetAnchor=r(e));return t.anchor&&r(t.anchor)}const Aa=ar;function an(e,t){const n=e.ctx;if(n&&n.ut){let i,a;for(t?(i=e.el,a=e.anchor):(i=e.targetStart,a=e.targetAnchor);i&&i!==a;)i.nodeType===1&&i.setAttribute("data-v-owner",n.uid),i=i.nextSibling;n.ut()}}function Ts(e,t,n,i,a=null){const o=t.targetStart=n(""),r=t.targetAnchor=n("");return o[Ta]=r,e&&(i(o,e,a),i(r,e,a)),r}const lt=Symbol("_leaveCb"),nn=Symbol("_enterCb");function rr(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Tn(()=>{e.isMounted=!0}),Da(()=>{e.isUnmounting=!0}),e}const Xe=[Function,Array],Pa={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Xe,onEnter:Xe,onAfterEnter:Xe,onEnterCancelled:Xe,onBeforeLeave:Xe,onLeave:Xe,onAfterLeave:Xe,onLeaveCancelled:Xe,onBeforeAppear:Xe,onAppear:Xe,onAfterAppear:Xe,onAppearCancelled:Xe},_a=e=>{const t=e.subTree;return t.component?_a(t.component):t},lr={name:"BaseTransition",props:Pa,setup(e,{slots:t}){const n=eo(),i=rr();return()=>{const a=t.default&&Ra(t.default(),!0);if(!a||!a.length)return;const o=Ea(a),r=ge(e),{mode:l}=r;if(i.isLeaving)return ps(o);const c=oi(o);if(!c)return ps(o);let u=Cs(c,r,i,n,v=>u=v);c.type!==Fe&&vn(c,u);let d=n.subTree&&oi(n.subTree);if(d&&d.type!==Fe&&!Ft(d,c)&&_a(n).type!==Fe){let v=Cs(d,r,i,n);if(vn(d,v),l==="out-in"&&c.type!==Fe)return i.isLeaving=!0,v.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete v.afterLeave,d=void 0},ps(o);l==="in-out"&&c.type!==Fe?v.delayLeave=(C,k,w)=>{const P=Ia(i,d);P[String(d.key)]=d,C[lt]=()=>{k(),C[lt]=void 0,delete u.delayedLeave,d=void 0},u.delayedLeave=()=>{w(),delete u.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return o}}};function Ea(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Fe){t=n;break}}return t}const cr=lr;function Ia(e,t){const{leavingVNodes:n}=e;let i=n.get(t.type);return i||(i=Object.create(null),n.set(t.type,i)),i}function Cs(e,t,n,i,a){const{appear:o,mode:r,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:d,onEnterCancelled:v,onBeforeLeave:C,onLeave:k,onAfterLeave:w,onLeaveCancelled:P,onBeforeAppear:J,onAppear:j,onAfterAppear:B,onAppearCancelled:Y}=t,H=String(e.key),G=Ia(n,e),T=(X,ae)=>{X&&nt(X,i,9,ae)},ee=(X,ae)=>{const pe=ae[1];T(X,ae),ne(X)?X.every(U=>U.length<=1)&&pe():X.length<=1&&pe()},oe={mode:r,persisted:l,beforeEnter(X){let ae=c;if(!n.isMounted)if(o)ae=J||c;else return;X[lt]&&X[lt](!0);const pe=G[H];pe&&Ft(e,pe)&&pe.el[lt]&&pe.el[lt](),T(ae,[X])},enter(X){if(G[H]===e)return;let ae=u,pe=d,U=v;if(!n.isMounted)if(o)ae=j||u,pe=B||d,U=Y||v;else return;let le=!1;X[nn]=_=>{le||(le=!0,_?T(U,[X]):T(pe,[X]),oe.delayedLeave&&oe.delayedLeave(),X[nn]=void 0)};const de=X[nn].bind(null,!1);ae?ee(ae,[X,de]):de()},leave(X,ae){const pe=String(e.key);if(X[nn]&&X[nn](!0),n.isUnmounting)return ae();T(C,[X]);let U=!1;X[lt]=de=>{U||(U=!0,ae(),de?T(P,[X]):T(w,[X]),X[lt]=void 0,G[pe]===e&&delete G[pe])};const le=X[lt].bind(null,!1);G[pe]=e,k?ee(k,[X,le]):le()},clone(X){const ae=Cs(X,t,n,i,a);return a&&a(ae),ae}};return oe}function ps(e){if(ns(e))return e=Et(e),e.children=null,e}function oi(e){if(!ns(e))return Ca(e.type)&&e.children?Ea(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&ce(n.default))return n.default()}}function vn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,vn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Ra(e,t=!1,n){let i=[],a=0;for(let o=0;o<e.length;o++){let r=e[o];const l=n==null?r.key:String(n)+String(r.key!=null?r.key:o);r.type===Q?(r.patchFlag&128&&a++,i=i.concat(Ra(r.children,t,l))):(t||r.type!==Fe)&&i.push(l!=null?Et(r,{key:l}):r)}if(a>1)for(let o=0;o<i.length;o++)i[o].patchFlag=-2;return i}function La(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function ri(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const Hn=new WeakMap;function dn(e,t,n,i,a=!1){if(ne(e)){e.forEach((P,J)=>dn(P,t&&(ne(t)?t[J]:t),n,i,a));return}if(un(i)&&!a){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&dn(e,t,n,i.component.subTree);return}const o=i.shapeFlag&4?os(i.component):i.el,r=a?null:o,{i:l,r:c}=e,u=t&&t.r,d=l.refs===Se?l.refs={}:l.refs,v=l.setupState,C=ge(v),k=v===Se?zi:P=>ri(d,P)?!1:he(C,P),w=(P,J)=>!(J&&ri(d,J));if(u!=null&&u!==c){if(li(t),Ce(u))d[u]=null,k(u)&&(v[u]=null);else if(De(u)){const P=t;w(u,P.k)&&(u.value=null),P.k&&(d[P.k]=null)}}if(ce(c))kn(c,l,12,[r,d]);else{const P=Ce(c),J=De(c);if(P||J){const j=()=>{if(e.f){const B=P?k(c)?v[c]:d[c]:w()||!e.k?c.value:d[e.k];if(a)ne(B)&&Ms(B,o);else if(ne(B))B.includes(o)||B.push(o);else if(P)d[c]=[o],k(c)&&(v[c]=d[c]);else{const Y=[o];w(c,e.k)&&(c.value=Y),e.k&&(d[e.k]=Y)}}else P?(d[c]=r,k(c)&&(v[c]=r)):J&&(w(c,e.k)&&(c.value=r),e.k&&(d[e.k]=r))};if(r){const B=()=>{j(),Hn.delete(e)};B.id=-1,Hn.set(e,B),qe(B,n)}else li(e),j()}}}function li(e){const t=Hn.get(e);t&&(t.flags|=8,Hn.delete(e))}Zn().requestIdleCallback;Zn().cancelIdleCallback;const un=e=>!!e.type.__asyncLoader,ns=e=>e.type.__isKeepAlive;function dr(e,t){Ma(e,"a",t)}function ur(e,t){Ma(e,"da",t)}function Ma(e,t,n=Me){const i=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(ss(t,i,n),n){let a=n.parent;for(;a&&a.parent;)ns(a.parent.vnode)&&pr(i,t,n,a),a=a.parent}}function pr(e,t,n,i){const a=ss(t,e,i,!0);Cn(()=>{Ms(i[t],a)},n)}function ss(e,t,n=Me,i=!1){if(n){const a=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...r)=>{xt();const l=An(n),c=nt(t,n,e,r);return l(),kt(),c});return i?a.unshift(o):a.push(o),o}}const Ct=e=>(t,n=Me)=>{(!bn||e==="sp")&&ss(e,(...i)=>t(...i),n)},mr=Ct("bm"),Tn=Ct("m"),fr=Ct("bu"),gr=Ct("u"),Da=Ct("bum"),Cn=Ct("um"),hr=Ct("sp"),vr=Ct("rtg"),yr=Ct("rtc");function br(e,t=Me){ss("ec",e,t)}const wr="components",Ba=Symbol.for("v-ndc");function Sr(e){return Ce(e)?xr(wr,e,!1)||e:e||Ba}function xr(e,t,n=!0,i=!1){const a=ze||Me;if(a){const o=a.type;{const l=ol(o,!1);if(l&&(l===t||l===We(t)||l===Xn(We(t))))return o}const r=ci(a[e]||o[e],t)||ci(a.appContext[e],t);return!r&&i?o:r}}function ci(e,t){return e&&(e[t]||e[We(t)]||e[Xn(We(t))])}function te(e,t,n,i){let a;const o=n,r=ne(e);if(r||Ce(e)){const l=r&&Ut(e);let c=!1,u=!1;l&&(c=!Ye(e),u=Tt(e),e=es(e)),a=new Array(e.length);for(let d=0,v=e.length;d<v;d++)a[d]=t(c?u?Xt(tt(e[d])):tt(e[d]):e[d],d,void 0,o)}else if(typeof e=="number"){a=new Array(e);for(let l=0;l<e;l++)a[l]=t(l+1,l,void 0,o)}else if(ve(e))if(e[Symbol.iterator])a=Array.from(e,(l,c)=>t(l,c,void 0,o));else{const l=Object.keys(e);a=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const d=l[c];a[c]=t(e[d],d,c,o)}}else a=[];return a}const As=e=>e?to(e)?os(e):As(e.parent):null,pn=_e(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>As(e.parent),$root:e=>As(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Oa(e),$forceUpdate:e=>e.f||(e.f=()=>{Hs(e.update)}),$nextTick:e=>e.n||(e.n=va.bind(e.proxy)),$watch:e=>sr.bind(e)}),ms=(e,t)=>e!==Se&&!e.__isScriptSetup&&he(e,t),kr={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:i,data:a,props:o,accessCache:r,type:l,appContext:c}=e;if(t[0]!=="$"){const C=r[t];if(C!==void 0)switch(C){case 1:return i[t];case 2:return a[t];case 4:return n[t];case 3:return o[t]}else{if(ms(i,t))return r[t]=1,i[t];if(a!==Se&&he(a,t))return r[t]=2,a[t];if(he(o,t))return r[t]=3,o[t];if(n!==Se&&he(n,t))return r[t]=4,n[t];Ps&&(r[t]=0)}}const u=pn[t];let d,v;if(u)return t==="$attrs"&&Le(e.attrs,"get",""),u(e);if((d=l.__cssModules)&&(d=d[t]))return d;if(n!==Se&&he(n,t))return r[t]=4,n[t];if(v=c.config.globalProperties,he(v,t))return v[t]},set({_:e},t,n){const{data:i,setupState:a,ctx:o}=e;return ms(a,t)?(a[t]=n,!0):i!==Se&&he(i,t)?(i[t]=n,!0):he(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:a,props:o,type:r}},l){let c;return!!(n[l]||e!==Se&&l[0]!=="$"&&he(e,l)||ms(t,l)||he(o,l)||he(i,l)||he(pn,l)||he(a.config.globalProperties,l)||(c=r.__cssModules)&&c[l])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:he(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function di(e){return ne(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Ps=!0;function Tr(e){const t=Oa(e),n=e.proxy,i=e.ctx;Ps=!1,t.beforeCreate&&ui(t.beforeCreate,e,"bc");const{data:a,computed:o,methods:r,watch:l,provide:c,inject:u,created:d,beforeMount:v,mounted:C,beforeUpdate:k,updated:w,activated:P,deactivated:J,beforeDestroy:j,beforeUnmount:B,destroyed:Y,unmounted:H,render:G,renderTracked:T,renderTriggered:ee,errorCaptured:oe,serverPrefetch:X,expose:ae,inheritAttrs:pe,components:U,directives:le,filters:de}=t;if(u&&Cr(u,i,null),r)for(const F in r){const q=r[F];ce(q)&&(i[F]=q.bind(n))}if(a){const F=a.call(n,n);ve(F)&&(e.data=xn(F))}if(Ps=!0,o)for(const F in o){const q=o[F],ue=ce(q)?q.bind(n,n):ce(q.get)?q.get.bind(n,n):mt,Te=!ce(q)&&ce(q.set)?q.set.bind(n):mt,Ie=ye({get:ue,set:Te});Object.defineProperty(i,F,{enumerable:!0,configurable:!0,get:()=>Ie.value,set:Re=>Ie.value=Re})}if(l)for(const F in l)qa(l[F],i,n,F);if(c){const F=ce(c)?c.call(n):c;Reflect.ownKeys(F).forEach(q=>{er(q,F[q])})}d&&ui(d,e,"c");function b(F,q){ne(q)?q.forEach(ue=>F(ue.bind(n))):q&&F(q.bind(n))}if(b(mr,v),b(Tn,C),b(fr,k),b(gr,w),b(dr,P),b(ur,J),b(br,oe),b(yr,T),b(vr,ee),b(Da,B),b(Cn,H),b(hr,X),ne(ae))if(ae.length){const F=e.exposed||(e.exposed={});ae.forEach(q=>{Object.defineProperty(F,q,{get:()=>n[q],set:ue=>n[q]=ue,enumerable:!0})})}else e.exposed||(e.exposed={});G&&e.render===mt&&(e.render=G),pe!=null&&(e.inheritAttrs=pe),U&&(e.components=U),le&&(e.directives=le),X&&La(e)}function Cr(e,t,n=mt){ne(e)&&(e=_s(e));for(const i in e){const a=e[i];let o;ve(a)?"default"in a?o=Bn(a.from||i,a.default,!0):o=Bn(a.from||i):o=Bn(a),De(o)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:r=>o.value=r}):t[i]=o}}function ui(e,t,n){nt(ne(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,n)}function qa(e,t,n,i){let a=i.includes(".")?ka(n,i):()=>n[i];if(Ce(e)){const o=t[e];ce(o)&&qn(a,o)}else if(ce(e))qn(a,e.bind(n));else if(ve(e))if(ne(e))e.forEach(o=>qa(o,t,n,i));else{const o=ce(e.handler)?e.handler.bind(n):t[e.handler];ce(o)&&qn(a,o,e)}}function Oa(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:a,optionsCache:o,config:{optionMergeStrategies:r}}=e.appContext,l=o.get(t);let c;return l?c=l:!a.length&&!n&&!i?c=t:(c={},a.length&&a.forEach(u=>$n(c,u,r,!0)),$n(c,t,r)),ve(t)&&o.set(t,c),c}function $n(e,t,n,i=!1){const{mixins:a,extends:o}=t;o&&$n(e,o,n,!0),a&&a.forEach(r=>$n(e,r,n,!0));for(const r in t)if(!(i&&r==="expose")){const l=Ar[r]||n&&n[r];e[r]=l?l(e[r],t[r]):t[r]}return e}const Ar={data:pi,props:mi,emits:mi,methods:on,computed:on,beforeCreate:Be,created:Be,beforeMount:Be,mounted:Be,beforeUpdate:Be,updated:Be,beforeDestroy:Be,beforeUnmount:Be,destroyed:Be,unmounted:Be,activated:Be,deactivated:Be,errorCaptured:Be,serverPrefetch:Be,components:on,directives:on,watch:_r,provide:pi,inject:Pr};function pi(e,t){return t?e?function(){return _e(ce(e)?e.call(this,this):e,ce(t)?t.call(this,this):t)}:t:e}function Pr(e,t){return on(_s(e),_s(t))}function _s(e){if(ne(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Be(e,t){return e?[...new Set([].concat(e,t))]:t}function on(e,t){return e?_e(Object.create(null),e,t):t}function mi(e,t){return e?ne(e)&&ne(t)?[...new Set([...e,...t])]:_e(Object.create(null),di(e),di(t??{})):t}function _r(e,t){if(!e)return t;if(!t)return e;const n=_e(Object.create(null),e);for(const i in t)n[i]=Be(e[i],t[i]);return n}function Fa(){return{app:null,config:{isNativeTag:zi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Er=0;function Ir(e,t){return function(i,a=null){ce(i)||(i=_e({},i)),a!=null&&!ve(a)&&(a=null);const o=Fa(),r=new WeakSet,l=[];let c=!1;const u=o.app={_uid:Er++,_component:i,_props:a,_container:null,_context:o,_instance:null,version:cl,get config(){return o.config},set config(d){},use(d,...v){return r.has(d)||(d&&ce(d.install)?(r.add(d),d.install(u,...v)):ce(d)&&(r.add(d),d(u,...v))),u},mixin(d){return o.mixins.includes(d)||o.mixins.push(d),u},component(d,v){return v?(o.components[d]=v,u):o.components[d]},directive(d,v){return v?(o.directives[d]=v,u):o.directives[d]},mount(d,v,C){if(!c){const k=u._ceVNode||fe(i,a);return k.appContext=o,C===!0?C="svg":C===!1&&(C=void 0),e(k,d,C),c=!0,u._container=d,d.__vue_app__=u,os(k.component)}},onUnmount(d){l.push(d)},unmount(){c&&(nt(l,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(d,v){return o.provides[d]=v,u},runWithContext(d){const v=Kt;Kt=u;try{return d()}finally{Kt=v}}};return u}}let Kt=null;const Rr=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${We(t)}Modifiers`]||e[`${jt(t)}Modifiers`];function Lr(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||Se;let a=n;const o=t.startsWith("update:"),r=o&&Rr(i,t.slice(7));r&&(r.trim&&(a=n.map(d=>Ce(d)?d.trim():d)),r.number&&(a=n.map(Yn)));let l,c=i[l=rs(t)]||i[l=rs(We(t))];!c&&o&&(c=i[l=rs(jt(t))]),c&&nt(c,e,6,a);const u=i[l+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,nt(u,e,6,a)}}const Mr=new WeakMap;function Na(e,t,n=!1){const i=n?Mr:t.emitsCache,a=i.get(e);if(a!==void 0)return a;const o=e.emits;let r={},l=!1;if(!ce(e)){const c=u=>{const d=Na(u,t,!0);d&&(l=!0,_e(r,d))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!o&&!l?(ve(e)&&i.set(e,null),null):(ne(o)?o.forEach(c=>r[c]=null):_e(r,o),ve(e)&&i.set(e,r),r)}function is(e,t){return!e||!Vn(t)?!1:(t=t.slice(2).replace(/Once$/,""),he(e,t[0].toLowerCase()+t.slice(1))||he(e,jt(t))||he(e,t))}function fi(e){const{type:t,vnode:n,proxy:i,withProxy:a,propsOptions:[o],slots:r,attrs:l,emit:c,render:u,renderCache:d,props:v,data:C,setupState:k,ctx:w,inheritAttrs:P}=e,J=jn(e);let j,B;try{if(n.shapeFlag&4){const H=a||i,G=H;j=dt(u.call(G,H,d,v,k,C,w)),B=l}else{const H=t;j=dt(H.length>1?H(v,{attrs:l,slots:r,emit:c}):H(v,null)),B=t.props?l:Dr(l)}}catch(H){mn.length=0,ts(H,e,1),j=fe(Fe)}let Y=j;if(B&&P!==!1){const H=Object.keys(B),{shapeFlag:G}=Y;H.length&&G&7&&(o&&H.some(Kn)&&(B=Br(B,o)),Y=Et(Y,B,!1,!0))}return n.dirs&&(Y=Et(Y,null,!1,!0),Y.dirs=Y.dirs?Y.dirs.concat(n.dirs):n.dirs),n.transition&&vn(Y,n.transition),j=Y,jn(J),j}const Dr=e=>{let t;for(const n in e)(n==="class"||n==="style"||Vn(n))&&((t||(t={}))[n]=e[n]);return t},Br=(e,t)=>{const n={};for(const i in e)(!Kn(i)||!(i.slice(9)in t))&&(n[i]=e[i]);return n};function qr(e,t,n){const{props:i,children:a,component:o}=e,{props:r,children:l,patchFlag:c}=t,u=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return i?gi(i,r,u):!!r;if(c&8){const d=t.dynamicProps;for(let v=0;v<d.length;v++){const C=d[v];if(Ua(r,i,C)&&!is(u,C))return!0}}}else return(a||l)&&(!l||!l.$stable)?!0:i===r?!1:i?r?gi(i,r,u):!0:!!r;return!1}function gi(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let a=0;a<i.length;a++){const o=i[a];if(Ua(t,e,o)&&!is(n,o))return!0}return!1}function Ua(e,t,n){const i=e[n],a=t[n];return n==="style"&&ve(i)&&ve(a)?!_t(i,a):i!==a}function Or({vnode:e,parent:t,suspense:n},i){for(;t;){const a=t.subTree;if(a.suspense&&a.suspense.activeBranch===e&&(a.suspense.vnode.el=a.el=i,e=a),a===e)(e=t.vnode).el=i,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=i)}const Wa={},ja=()=>Object.create(Wa),Ha=e=>Object.getPrototypeOf(e)===Wa;function Fr(e,t,n,i=!1){const a={},o=ja();e.propsDefaults=Object.create(null),$a(e,t,a,o);for(const r in e.propsOptions[0])r in a||(a[r]=void 0);n?e.props=i?a:jo(a):e.type.props?e.props=a:e.props=o,e.attrs=o}function Nr(e,t,n,i){const{props:a,attrs:o,vnode:{patchFlag:r}}=e,l=ge(a),[c]=e.propsOptions;let u=!1;if((i||r>0)&&!(r&16)){if(r&8){const d=e.vnode.dynamicProps;for(let v=0;v<d.length;v++){let C=d[v];if(is(e.emitsOptions,C))continue;const k=t[C];if(c)if(he(o,C))k!==o[C]&&(o[C]=k,u=!0);else{const w=We(C);a[w]=Es(c,l,w,k,e,!1)}else k!==o[C]&&(o[C]=k,u=!0)}}}else{$a(e,t,a,o)&&(u=!0);let d;for(const v in l)(!t||!he(t,v)&&((d=jt(v))===v||!he(t,d)))&&(c?n&&(n[v]!==void 0||n[d]!==void 0)&&(a[v]=Es(c,l,v,void 0,e,!0)):delete a[v]);if(o!==l)for(const v in o)(!t||!he(t,v))&&(delete o[v],u=!0)}u&&bt(e.attrs,"set","")}function $a(e,t,n,i){const[a,o]=e.propsOptions;let r=!1,l;if(t)for(let c in t){if(rn(c))continue;const u=t[c];let d;a&&he(a,d=We(c))?!o||!o.includes(d)?n[d]=u:(l||(l={}))[d]=u:is(e.emitsOptions,c)||(!(c in i)||u!==i[c])&&(i[c]=u,r=!0)}if(o){const c=ge(n),u=l||Se;for(let d=0;d<o.length;d++){const v=o[d];n[v]=Es(a,c,v,u[v],e,!he(u,v))}}return r}function Es(e,t,n,i,a,o){const r=e[n];if(r!=null){const l=he(r,"default");if(l&&i===void 0){const c=r.default;if(r.type!==Function&&!r.skipFactory&&ce(c)){const{propsDefaults:u}=a;if(n in u)i=u[n];else{const d=An(a);i=u[n]=c.call(null,t),d()}}else i=c;a.ce&&a.ce._setProp(n,i)}r[0]&&(o&&!l?i=!1:r[1]&&(i===""||i===jt(n))&&(i=!0))}return i}const Ur=new WeakMap;function Ja(e,t,n=!1){const i=n?Ur:t.propsCache,a=i.get(e);if(a)return a;const o=e.props,r={},l=[];let c=!1;if(!ce(e)){const d=v=>{c=!0;const[C,k]=Ja(v,t,!0);_e(r,C),k&&l.push(...k)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!o&&!c)return ve(e)&&i.set(e,Gt),Gt;if(ne(o))for(let d=0;d<o.length;d++){const v=We(o[d]);hi(v)&&(r[v]=Se)}else if(o)for(const d in o){const v=We(d);if(hi(v)){const C=o[d],k=r[v]=ne(C)||ce(C)?{type:C}:_e({},C),w=k.type;let P=!1,J=!0;if(ne(w))for(let j=0;j<w.length;++j){const B=w[j],Y=ce(B)&&B.name;if(Y==="Boolean"){P=!0;break}else Y==="String"&&(J=!1)}else P=ce(w)&&w.name==="Boolean";k[0]=P,k[1]=J,(P||he(k,"default"))&&l.push(v)}}const u=[r,l];return ve(e)&&i.set(e,u),u}function hi(e){return e[0]!=="$"&&!rn(e)}const $s=e=>e==="_"||e==="_ctx"||e==="$stable",Js=e=>ne(e)?e.map(dt):[dt(e)],Wr=(e,t,n)=>{if(t._n)return t;const i=Ne((...a)=>Js(t(...a)),n);return i._c=!1,i},Ga=(e,t,n)=>{const i=e._ctx;for(const a in e){if($s(a))continue;const o=e[a];if(ce(o))t[a]=Wr(a,o,i);else if(o!=null){const r=Js(o);t[a]=()=>r}}},za=(e,t)=>{const n=Js(t);e.slots.default=()=>n},Va=(e,t,n)=>{for(const i in t)(n||!$s(i))&&(e[i]=t[i])},jr=(e,t,n)=>{const i=e.slots=ja();if(e.vnode.shapeFlag&32){const a=t._;a?(Va(i,t,n),n&&Xi(i,"_",a,!0)):Ga(t,i)}else t&&za(e,t)},Hr=(e,t,n)=>{const{vnode:i,slots:a}=e;let o=!0,r=Se;if(i.shapeFlag&32){const l=t._;l?n&&l===1?o=!1:Va(a,t,n):(o=!t.$stable,Ga(t,a)),r=t}else t&&(za(e,t),r={default:1});if(o)for(const l in a)!$s(l)&&r[l]==null&&delete a[l]},qe=Vr;function $r(e){return Jr(e)}function Jr(e,t){const n=Zn();n.__VUE__=!0;const{insert:i,remove:a,patchProp:o,createElement:r,createText:l,createComment:c,setText:u,setElementText:d,parentNode:v,nextSibling:C,setScopeId:k=mt,insertStaticContent:w}=e,P=(p,h,A,L=null,E=null,I=null,W=void 0,N=null,O=!!h.dynamicChildren)=>{if(p===h)return;p&&!Ft(p,h)&&(L=D(p),Re(p,E,I,!0),p=null),h.patchFlag===-2&&(O=!1,h.dynamicChildren=null);const{type:R,ref:ie,shapeFlag:$}=h;switch(R){case as:J(p,h,A,L);break;case Fe:j(p,h,A,L);break;case On:p==null&&B(h,A,L,W);break;case Q:U(p,h,A,L,E,I,W,N,O);break;default:$&1?G(p,h,A,L,E,I,W,N,O):$&6?le(p,h,A,L,E,I,W,N,O):($&64||$&128)&&R.process(p,h,A,L,E,I,W,N,O,Ae)}ie!=null&&E?dn(ie,p&&p.ref,I,h||p,!h):ie==null&&p&&p.ref!=null&&dn(p.ref,null,I,p,!0)},J=(p,h,A,L)=>{if(p==null)i(h.el=l(h.children),A,L);else{const E=h.el=p.el;h.children!==p.children&&u(E,h.children)}},j=(p,h,A,L)=>{p==null?i(h.el=c(h.children||""),A,L):h.el=p.el},B=(p,h,A,L)=>{[p.el,p.anchor]=w(p.children,h,A,L,p.el,p.anchor)},Y=({el:p,anchor:h},A,L)=>{let E;for(;p&&p!==h;)E=C(p),i(p,A,L),p=E;i(h,A,L)},H=({el:p,anchor:h})=>{let A;for(;p&&p!==h;)A=C(p),a(p),p=A;a(h)},G=(p,h,A,L,E,I,W,N,O)=>{if(h.type==="svg"?W="svg":h.type==="math"&&(W="mathml"),p==null)T(h,A,L,E,I,W,N,O);else{const R=p.el&&p.el._isVueCE?p.el:null;try{R&&R._beginPatch(),X(p,h,E,I,W,N,O)}finally{R&&R._endPatch()}}},T=(p,h,A,L,E,I,W,N)=>{let O,R;const{props:ie,shapeFlag:$,transition:Z,dirs:re}=p;if(O=p.el=r(p.type,I,ie&&ie.is,ie),$&8?d(O,p.children):$&16&&oe(p.children,O,null,L,E,fs(p,I),W,N),re&&Rt(p,null,L,"created"),ee(O,p,p.scopeId,W,L),ie){for(const we in ie)we!=="value"&&!rn(we)&&o(O,we,null,ie[we],I,L);"value"in ie&&o(O,"value",null,ie.value,I),(R=ie.onVnodeBeforeMount)&&ot(R,L,p)}re&&Rt(p,null,L,"beforeMount");const me=Gr(E,Z);me&&Z.beforeEnter(O),i(O,h,A),((R=ie&&ie.onVnodeMounted)||me||re)&&qe(()=>{try{R&&ot(R,L,p),me&&Z.enter(O),re&&Rt(p,null,L,"mounted")}finally{}},E)},ee=(p,h,A,L,E)=>{if(A&&k(p,A),L)for(let I=0;I<L.length;I++)k(p,L[I]);if(E){let I=E.subTree;if(h===I||Xa(I.type)&&(I.ssContent===h||I.ssFallback===h)){const W=E.vnode;ee(p,W,W.scopeId,W.slotScopeIds,E.parent)}}},oe=(p,h,A,L,E,I,W,N,O=0)=>{for(let R=O;R<p.length;R++){const ie=p[R]=N?yt(p[R]):dt(p[R]);P(null,ie,h,A,L,E,I,W,N)}},X=(p,h,A,L,E,I,W)=>{const N=h.el=p.el;let{patchFlag:O,dynamicChildren:R,dirs:ie}=h;O|=p.patchFlag&16;const $=p.props||Se,Z=h.props||Se;let re;if(A&&Mt(A,!1),(re=Z.onVnodeBeforeUpdate)&&ot(re,A,h,p),ie&&Rt(h,p,A,"beforeUpdate"),A&&Mt(A,!0),($.innerHTML&&Z.innerHTML==null||$.textContent&&Z.textContent==null)&&d(N,""),R?ae(p.dynamicChildren,R,N,A,L,fs(h,E),I):W||q(p,h,N,null,A,L,fs(h,E),I,!1),O>0){if(O&16)pe(N,$,Z,A,E);else if(O&2&&$.class!==Z.class&&o(N,"class",null,Z.class,E),O&4&&o(N,"style",$.style,Z.style,E),O&8){const me=h.dynamicProps;for(let we=0;we<me.length;we++){const xe=me[we],Pe=$[xe],Ee=Z[xe];(Ee!==Pe||xe==="value")&&o(N,xe,Pe,Ee,E,A)}}O&1&&p.children!==h.children&&d(N,h.children)}else!W&&R==null&&pe(N,$,Z,A,E);((re=Z.onVnodeUpdated)||ie)&&qe(()=>{re&&ot(re,A,h,p),ie&&Rt(h,p,A,"updated")},L)},ae=(p,h,A,L,E,I,W)=>{for(let N=0;N<h.length;N++){const O=p[N],R=h[N],ie=O.el&&(O.type===Q||!Ft(O,R)||O.shapeFlag&198)?v(O.el):A;P(O,R,ie,null,L,E,I,W,!0)}},pe=(p,h,A,L,E)=>{if(h!==A){if(h!==Se)for(const I in h)!rn(I)&&!(I in A)&&o(p,I,h[I],null,E,L);for(const I in A){if(rn(I))continue;const W=A[I],N=h[I];W!==N&&I!=="value"&&o(p,I,N,W,E,L)}"value"in A&&o(p,"value",h.value,A.value,E)}},U=(p,h,A,L,E,I,W,N,O)=>{const R=h.el=p?p.el:l(""),ie=h.anchor=p?p.anchor:l("");let{patchFlag:$,dynamicChildren:Z,slotScopeIds:re}=h;re&&(N=N?N.concat(re):re),p==null?(i(R,A,L),i(ie,A,L),oe(h.children||[],A,ie,E,I,W,N,O)):$>0&&$&64&&Z&&p.dynamicChildren&&p.dynamicChildren.length===Z.length?(ae(p.dynamicChildren,Z,A,E,I,W,N),(h.key!=null||E&&h===E.subTree)&&Gs(p,h,!0)):q(p,h,A,ie,E,I,W,N,O)},le=(p,h,A,L,E,I,W,N,O)=>{h.slotScopeIds=N,p==null?h.shapeFlag&512?E.ctx.activate(h,A,L,W,O):de(h,A,L,E,I,W,O):_(p,h,O)},de=(p,h,A,L,E,I,W)=>{const N=p.component=tl(p,L,E);if(ns(p)&&(N.ctx.renderer=Ae),nl(N,!1,W),N.asyncDep){if(E&&E.registerDep(N,b,W),!p.el){const O=N.subTree=fe(Fe);j(null,O,h,A),p.placeholder=O.el}}else b(N,p,h,A,E,I,W)},_=(p,h,A)=>{const L=h.component=p.component;if(qr(p,h,A))if(L.asyncDep&&!L.asyncResolved){F(L,h,A);return}else L.next=h,L.update();else h.el=p.el,L.vnode=h},b=(p,h,A,L,E,I,W)=>{const N=()=>{if(p.isMounted){let{next:$,bu:Z,u:re,parent:me,vnode:we}=p;{const it=Ka(p);if(it){$&&($.el=we.el,F(p,$,W)),it.asyncDep.then(()=>{qe(()=>{p.isUnmounted||R()},E)});return}}let xe=$,Pe;Mt(p,!1),$?($.el=we.el,F(p,$,W)):$=we,Z&&Mn(Z),(Pe=$.props&&$.props.onVnodeBeforeUpdate)&&ot(Pe,me,$,we),Mt(p,!0);const Ee=fi(p),st=p.subTree;p.subTree=Ee,P(st,Ee,v(st.el),D(st),p,E,I),$.el=Ee.el,xe===null&&Or(p,Ee.el),re&&qe(re,E),(Pe=$.props&&$.props.onVnodeUpdated)&&qe(()=>ot(Pe,me,$,we),E)}else{let $;const{el:Z,props:re}=h,{bm:me,m:we,parent:xe,root:Pe,type:Ee}=p,st=un(h);Mt(p,!1),me&&Mn(me),!st&&($=re&&re.onVnodeBeforeMount)&&ot($,xe,h),Mt(p,!0);{Pe.ce&&Pe.ce._hasShadowRoot()&&Pe.ce._injectChildStyle(Ee,p.parent?p.parent.type:void 0);const it=p.subTree=fi(p);P(null,it,A,L,p,E,I),h.el=it.el}if(we&&qe(we,E),!st&&($=re&&re.onVnodeMounted)){const it=h;qe(()=>ot($,xe,it),E)}(h.shapeFlag&256||xe&&un(xe.vnode)&&xe.vnode.shapeFlag&256)&&p.a&&qe(p.a,E),p.isMounted=!0,h=A=L=null}};p.scope.on();const O=p.effect=new ta(N);p.scope.off();const R=p.update=O.run.bind(O),ie=p.job=O.runIfDirty.bind(O);ie.i=p,ie.id=p.uid,O.scheduler=()=>Hs(ie),Mt(p,!0),R()},F=(p,h,A)=>{h.component=p;const L=p.vnode.props;p.vnode=h,p.next=null,Nr(p,h.props,L,A),Hr(p,h.children,A),xt(),si(p),kt()},q=(p,h,A,L,E,I,W,N,O=!1)=>{const R=p&&p.children,ie=p?p.shapeFlag:0,$=h.children,{patchFlag:Z,shapeFlag:re}=h;if(Z>0){if(Z&128){Te(R,$,A,L,E,I,W,N,O);return}else if(Z&256){ue(R,$,A,L,E,I,W,N,O);return}}re&8?(ie&16&&x(R,E,I),$!==R&&d(A,$)):ie&16?re&16?Te(R,$,A,L,E,I,W,N,O):x(R,E,I,!0):(ie&8&&d(A,""),re&16&&oe($,A,L,E,I,W,N,O))},ue=(p,h,A,L,E,I,W,N,O)=>{p=p||Gt,h=h||Gt;const R=p.length,ie=h.length,$=Math.min(R,ie);let Z;for(Z=0;Z<$;Z++){const re=h[Z]=O?yt(h[Z]):dt(h[Z]);P(p[Z],re,A,null,E,I,W,N,O)}R>ie?x(p,E,I,!0,!1,$):oe(h,A,L,E,I,W,N,O,$)},Te=(p,h,A,L,E,I,W,N,O)=>{let R=0;const ie=h.length;let $=p.length-1,Z=ie-1;for(;R<=$&&R<=Z;){const re=p[R],me=h[R]=O?yt(h[R]):dt(h[R]);if(Ft(re,me))P(re,me,A,null,E,I,W,N,O);else break;R++}for(;R<=$&&R<=Z;){const re=p[$],me=h[Z]=O?yt(h[Z]):dt(h[Z]);if(Ft(re,me))P(re,me,A,null,E,I,W,N,O);else break;$--,Z--}if(R>$){if(R<=Z){const re=Z+1,me=re<ie?h[re].el:L;for(;R<=Z;)P(null,h[R]=O?yt(h[R]):dt(h[R]),A,me,E,I,W,N,O),R++}}else if(R>Z)for(;R<=$;)Re(p[R],E,I,!0),R++;else{const re=R,me=R,we=new Map;for(R=me;R<=Z;R++){const Je=h[R]=O?yt(h[R]):dt(h[R]);Je.key!=null&&we.set(Je.key,R)}let xe,Pe=0;const Ee=Z-me+1;let st=!1,it=0;const en=new Array(Ee);for(R=0;R<Ee;R++)en[R]=0;for(R=re;R<=$;R++){const Je=p[R];if(Pe>=Ee){Re(Je,E,I,!0);continue}let at;if(Je.key!=null)at=we.get(Je.key);else for(xe=me;xe<=Z;xe++)if(en[xe-me]===0&&Ft(Je,h[xe])){at=xe;break}at===void 0?Re(Je,E,I,!0):(en[at-me]=R+1,at>=it?it=at:st=!0,P(Je,h[at],A,null,E,I,W,N,O),Pe++)}const Qs=st?zr(en):Gt;for(xe=Qs.length-1,R=Ee-1;R>=0;R--){const Je=me+R,at=h[Je],Xs=h[Je+1],Ys=Je+1<ie?Xs.el||Qa(Xs):L;en[R]===0?P(null,at,A,Ys,E,I,W,N,O):st&&(xe<0||R!==Qs[xe]?Ie(at,A,Ys,2):xe--)}}},Ie=(p,h,A,L,E=null)=>{const{el:I,type:W,transition:N,children:O,shapeFlag:R}=p;if(R&6){Ie(p.component.subTree,h,A,L);return}if(R&128){p.suspense.move(h,A,L);return}if(R&64){W.move(p,h,A,Ae);return}if(W===Q){i(I,h,A);for(let $=0;$<O.length;$++)Ie(O[$],h,A,L);i(p.anchor,h,A);return}if(W===On){Y(p,h,A);return}if(L!==2&&R&1&&N)if(L===0)N.beforeEnter(I),i(I,h,A),qe(()=>N.enter(I),E);else{const{leave:$,delayLeave:Z,afterLeave:re}=N,me=()=>{p.ctx.isUnmounted?a(I):i(I,h,A)},we=()=>{I._isLeaving&&I[lt](!0),$(I,()=>{me(),re&&re()})};Z?Z(I,me,we):we()}else i(I,h,A)},Re=(p,h,A,L=!1,E=!1)=>{const{type:I,props:W,ref:N,children:O,dynamicChildren:R,shapeFlag:ie,patchFlag:$,dirs:Z,cacheIndex:re,memo:me}=p;if($===-2&&(E=!1),N!=null&&(xt(),dn(N,null,A,p,!0),kt()),re!=null&&(h.renderCache[re]=void 0),ie&256){h.ctx.deactivate(p);return}const we=ie&1&&Z,xe=!un(p);let Pe;if(xe&&(Pe=W&&W.onVnodeBeforeUnmount)&&ot(Pe,h,p),ie&6)y(p.component,A,L);else{if(ie&128){p.suspense.unmount(A,L);return}we&&Rt(p,null,h,"beforeUnmount"),ie&64?p.type.remove(p,h,A,Ae,L):R&&!R.hasOnce&&(I!==Q||$>0&&$&64)?x(R,h,A,!1,!0):(I===Q&&$&384||!E&&ie&16)&&x(O,h,A),L&&se(p)}const Ee=me!=null&&re==null;(xe&&(Pe=W&&W.onVnodeUnmounted)||we||Ee)&&qe(()=>{Pe&&ot(Pe,h,p),we&&Rt(p,null,h,"unmounted"),Ee&&(p.el=null)},A)},se=p=>{const{type:h,el:A,anchor:L,transition:E}=p;if(h===Q){S(A,L);return}if(h===On){H(p);return}const I=()=>{a(A),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(p.shapeFlag&1&&E&&!E.persisted){const{leave:W,delayLeave:N}=E,O=()=>W(A,I);N?N(p.el,I,O):O()}else I()},S=(p,h)=>{let A;for(;p!==h;)A=C(p),a(p),p=A;a(h)},y=(p,h,A)=>{const{bum:L,scope:E,job:I,subTree:W,um:N,m:O,a:R}=p;vi(O),vi(R),L&&Mn(L),E.stop(),I&&(I.flags|=8,Re(W,p,h,A)),N&&qe(N,h),qe(()=>{p.isUnmounted=!0},h)},x=(p,h,A,L=!1,E=!1,I=0)=>{for(let W=I;W<p.length;W++)Re(p[W],h,A,L,E)},D=p=>{if(p.shapeFlag&6)return D(p.component.subTree);if(p.shapeFlag&128)return p.suspense.next();const h=C(p.anchor||p.el),A=h&&h[Ta];return A?C(A):h};let z=!1;const be=(p,h,A)=>{let L;p==null?h._vnode&&(Re(h._vnode,null,null,!0),L=h._vnode.component):P(h._vnode||null,p,h,null,null,null,A),h._vnode=p,z||(z=!0,si(L),ba(),z=!1)},Ae={p:P,um:Re,m:Ie,r:se,mt:de,mc:oe,pc:q,pbc:ae,n:D,o:e};return{render:be,hydrate:void 0,createApp:Ir(be)}}function fs({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Mt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Gr(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Gs(e,t,n=!1){const i=e.children,a=t.children;if(ne(i)&&ne(a))for(let o=0;o<i.length;o++){const r=i[o];let l=a[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=a[o]=yt(a[o]),l.el=r.el),!n&&l.patchFlag!==-2&&Gs(r,l)),l.type===as&&(l.patchFlag===-1&&(l=a[o]=yt(l)),l.el=r.el),l.type===Fe&&!l.el&&(l.el=r.el)}}function zr(e){const t=e.slice(),n=[0];let i,a,o,r,l;const c=e.length;for(i=0;i<c;i++){const u=e[i];if(u!==0){if(a=n[n.length-1],e[a]<u){t[i]=a,n.push(i);continue}for(o=0,r=n.length-1;o<r;)l=o+r>>1,e[n[l]]<u?o=l+1:r=l;u<e[n[o]]&&(o>0&&(t[i]=n[o-1]),n[o]=i)}}for(o=n.length,r=n[o-1];o-- >0;)n[o]=r,r=t[r];return n}function Ka(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ka(t)}function vi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Qa(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Qa(t.subTree):null}const Xa=e=>e.__isSuspense;function Vr(e,t){t&&t.pendingBranch?ne(e)?t.effects.push(...e):t.effects.push(e):Zo(e)}const Q=Symbol.for("v-fgt"),as=Symbol.for("v-txt"),Fe=Symbol.for("v-cmt"),On=Symbol.for("v-stc"),mn=[];let Ve=null;function f(e=!1){mn.push(Ve=e?null:[])}function Kr(){mn.pop(),Ve=mn[mn.length-1]||null}let yn=1;function Jn(e,t=!1){yn+=e,e<0&&Ve&&t&&(Ve.hasOnce=!0)}function Ya(e){return e.dynamicChildren=yn>0?Ve||Gt:null,Kr(),yn>0&&Ve&&Ve.push(e),e}function g(e,t,n,i,a,o){return Ya(s(e,t,n,i,a,o,!0))}function Wt(e,t,n,i,a){return Ya(fe(e,t,n,i,a,!0))}function Gn(e){return e?e.__v_isVNode===!0:!1}function Ft(e,t){return e.type===t.type&&e.key===t.key}const Za=({key:e})=>e??null,Fn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Ce(e)||De(e)||ce(e)?{i:ze,r:e,k:t,f:!!n}:e:null);function s(e,t=null,n=null,i=0,a=null,o=e===Q?0:1,r=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Za(t),ref:t&&Fn(t),scopeId:Sa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:ze};return l?(zs(c,n),o&128&&e.normalize(c)):n&&(c.shapeFlag|=Ce(n)?8:16),yn>0&&!r&&Ve&&(c.patchFlag>0||o&6)&&c.patchFlag!==32&&Ve.push(c),c}const fe=Qr;function Qr(e,t=null,n=null,i=0,a=null,o=!1){if((!e||e===Ba)&&(e=Fe),Gn(e)){const l=Et(e,t,!0);return n&&zs(l,n),yn>0&&!o&&Ve&&(l.shapeFlag&6?Ve[Ve.indexOf(e)]=l:Ve.push(l)),l.patchFlag=-2,l}if(rl(e)&&(e=e.__vccOpts),t){t=Xr(t);let{class:l,style:c}=t;l&&!Ce(l)&&(t.class=V(l)),ve(c)&&(js(c)&&!ne(c)&&(c=_e({},c)),t.style=Qt(c))}const r=Ce(e)?1:Xa(e)?128:Ca(e)?64:ve(e)?4:ce(e)?2:0;return s(e,t,n,i,a,r,o,!0)}function Xr(e){return e?js(e)||Ha(e)?_e({},e):e:null}function Et(e,t,n=!1,i=!1){const{props:a,ref:o,patchFlag:r,children:l,transition:c}=e,u=t?Yr(a||{},t):a,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Za(u),ref:t&&t.ref?n&&o?ne(o)?o.concat(Fn(t)):[o,Fn(t)]:Fn(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Q?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Et(e.ssContent),ssFallback:e.ssFallback&&Et(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&i&&vn(d,c.clone(d)),d}function Ue(e=" ",t=0){return fe(as,null,e,t)}function Ke(e,t){const n=fe(On,null,e);return n.staticCount=t,n}function K(e="",t=!1){return t?(f(),Wt(Fe,null,e)):fe(Fe,null,e)}function dt(e){return e==null||typeof e=="boolean"?fe(Fe):ne(e)?fe(Q,null,e.slice()):Gn(e)?yt(e):fe(as,null,String(e))}function yt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Et(e)}function zs(e,t){let n=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(ne(t))n=16;else if(typeof t=="object")if(i&65){const a=t.default;a&&(a._c&&(a._d=!1),zs(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!Ha(t)?t._ctx=ze:a===3&&ze&&(ze.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ce(t)?(t={default:t,_ctx:ze},n=32):(t=String(t),i&64?(n=16,t=[Ue(t)]):n=8);e.children=t,e.shapeFlag|=n}function Yr(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const a in i)if(a==="class")t.class!==i.class&&(t.class=V([t.class,i.class]));else if(a==="style")t.style=Qt([t.style,i.style]);else if(Vn(a)){const o=t[a],r=i[a];r&&o!==r&&!(ne(o)&&o.includes(r))?t[a]=o?[].concat(o,r):r:r==null&&o==null&&!Kn(a)&&(t[a]=r)}else a!==""&&(t[a]=i[a])}return t}function ot(e,t,n,i=null){nt(e,t,7,[n,i])}const Zr=Fa();let el=0;function tl(e,t,n){const i=e.type,a=(t?t.appContext:e.appContext)||Zr,o={uid:el++,vnode:e,type:i,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new xo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ja(i,a),emitsOptions:Na(i,a),emit:null,emitted:null,propsDefaults:Se,inheritAttrs:i.inheritAttrs,ctx:Se,data:Se,props:Se,attrs:Se,slots:Se,refs:Se,setupState:Se,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=Lr.bind(null,o),e.ce&&e.ce(o),o}let Me=null;const eo=()=>Me||ze;let zn,Is;{const e=Zn(),t=(n,i)=>{let a;return(a=e[n])||(a=e[n]=[]),a.push(i),o=>{a.length>1?a.forEach(r=>r(o)):a[0](o)}};zn=t("__VUE_INSTANCE_SETTERS__",n=>Me=n),Is=t("__VUE_SSR_SETTERS__",n=>bn=n)}const An=e=>{const t=Me;return zn(e),e.scope.on(),()=>{e.scope.off(),zn(t)}},yi=()=>{Me&&Me.scope.off(),zn(null)};function to(e){return e.vnode.shapeFlag&4}let bn=!1;function nl(e,t=!1,n=!1){t&&Is(t);const{props:i,children:a}=e.vnode,o=to(e);Fr(e,i,o,t),jr(e,a,n||t);const r=o?sl(e,t):void 0;return t&&Is(!1),r}function sl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,kr);const{setup:i}=n;if(i){xt();const a=e.setupContext=i.length>1?al(e):null,o=An(e),r=kn(i,e,0,[e.props,a]),l=Vi(r);if(kt(),o(),(l||e.sp)&&!un(e)&&La(e),l){if(r.then(yi,yi),t)return r.then(c=>{bi(e,c)}).catch(c=>{ts(c,e,0)});e.asyncDep=r}else bi(e,r)}else no(e)}function bi(e,t,n){ce(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ve(t)&&(e.setupState=ga(t)),no(e)}function no(e,t,n){const i=e.type;e.render||(e.render=i.render||mt);{const a=An(e);xt();try{Tr(e)}finally{kt(),a()}}}const il={get(e,t){return Le(e,"get",""),e[t]}};function al(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,il),slots:e.slots,emit:e.emit,expose:t}}function os(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ga(Ho(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in pn)return pn[n](e)},has(t,n){return n in t||n in pn}})):e.proxy}function ol(e,t=!0){return ce(e)?e.displayName||e.name:e.name||t&&e.__name}function rl(e){return ce(e)&&"__vccOpts"in e}const ye=(e,t)=>Vo(e,t,bn);function ll(e,t,n){try{Jn(-1);const i=arguments.length;return i===2?ve(t)&&!ne(t)?Gn(t)?fe(e,null,[t]):fe(e,t):fe(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Gn(n)&&(n=[n]),fe(e,t,n))}finally{Jn(1)}}const cl="3.5.32";/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rs;const wi=typeof window<"u"&&window.trustedTypes;if(wi)try{Rs=wi.createPolicy("vue",{createHTML:e=>e})}catch{}const so=Rs?e=>Rs.createHTML(e):e=>e,dl="http://www.w3.org/2000/svg",ul="http://www.w3.org/1998/Math/MathML",vt=typeof document<"u"?document:null,Si=vt&&vt.createElement("template"),pl={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const a=t==="svg"?vt.createElementNS(dl,e):t==="mathml"?vt.createElementNS(ul,e):n?vt.createElement(e,{is:n}):vt.createElement(e);return e==="select"&&i&&i.multiple!=null&&a.setAttribute("multiple",i.multiple),a},createText:e=>vt.createTextNode(e),createComment:e=>vt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>vt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,a,o){const r=n?n.previousSibling:t.lastChild;if(a&&(a===o||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===o||!(a=a.nextSibling)););else{Si.innerHTML=so(i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e);const l=Si.content;if(i==="svg"||i==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},At="transition",sn="animation",wn=Symbol("_vtc"),io={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ml=_e({},Pa,io),fl=e=>(e.displayName="Transition",e.props=ml,e),$e=fl((e,{slots:t})=>ll(cr,gl(e),t)),Dt=(e,t=[])=>{ne(e)?e.forEach(n=>n(...t)):e&&e(...t)},xi=e=>e?ne(e)?e.some(t=>t.length>1):e.length>1:!1;function gl(e){const t={};for(const U in e)U in io||(t[U]=e[U]);if(e.css===!1)return t;const{name:n="v",type:i,duration:a,enterFromClass:o=`${n}-enter-from`,enterActiveClass:r=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=o,appearActiveClass:u=r,appearToClass:d=l,leaveFromClass:v=`${n}-leave-from`,leaveActiveClass:C=`${n}-leave-active`,leaveToClass:k=`${n}-leave-to`}=e,w=hl(a),P=w&&w[0],J=w&&w[1],{onBeforeEnter:j,onEnter:B,onEnterCancelled:Y,onLeave:H,onLeaveCancelled:G,onBeforeAppear:T=j,onAppear:ee=B,onAppearCancelled:oe=Y}=t,X=(U,le,de,_)=>{U._enterCancelled=_,Bt(U,le?d:l),Bt(U,le?u:r),de&&de()},ae=(U,le)=>{U._isLeaving=!1,Bt(U,v),Bt(U,k),Bt(U,C),le&&le()},pe=U=>(le,de)=>{const _=U?ee:B,b=()=>X(le,U,de);Dt(_,[le,b]),ki(()=>{Bt(le,U?c:o),ht(le,U?d:l),xi(_)||Ti(le,i,P,b)})};return _e(t,{onBeforeEnter(U){Dt(j,[U]),ht(U,o),ht(U,r)},onBeforeAppear(U){Dt(T,[U]),ht(U,c),ht(U,u)},onEnter:pe(!1),onAppear:pe(!0),onLeave(U,le){U._isLeaving=!0;const de=()=>ae(U,le);ht(U,v),U._enterCancelled?(ht(U,C),Pi(U)):(Pi(U),ht(U,C)),ki(()=>{U._isLeaving&&(Bt(U,v),ht(U,k),xi(H)||Ti(U,i,J,de))}),Dt(H,[U,de])},onEnterCancelled(U){X(U,!1,void 0,!0),Dt(Y,[U])},onAppearCancelled(U){X(U,!0,void 0,!0),Dt(oe,[U])},onLeaveCancelled(U){ae(U),Dt(G,[U])}})}function hl(e){if(e==null)return null;if(ve(e))return[gs(e.enter),gs(e.leave)];{const t=gs(e);return[t,t]}}function gs(e){return fo(e)}function ht(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[wn]||(e[wn]=new Set)).add(t)}function Bt(e,t){t.split(/\s+/).forEach(i=>i&&e.classList.remove(i));const n=e[wn];n&&(n.delete(t),n.size||(e[wn]=void 0))}function ki(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let vl=0;function Ti(e,t,n,i){const a=e._endId=++vl,o=()=>{a===e._endId&&i()};if(n!=null)return setTimeout(o,n);const{type:r,timeout:l,propCount:c}=yl(e,t);if(!r)return i();const u=r+"end";let d=0;const v=()=>{e.removeEventListener(u,C),o()},C=k=>{k.target===e&&++d>=c&&v()};setTimeout(()=>{d<c&&v()},l+1),e.addEventListener(u,C)}function yl(e,t){const n=window.getComputedStyle(e),i=w=>(n[w]||"").split(", "),a=i(`${At}Delay`),o=i(`${At}Duration`),r=Ci(a,o),l=i(`${sn}Delay`),c=i(`${sn}Duration`),u=Ci(l,c);let d=null,v=0,C=0;t===At?r>0&&(d=At,v=r,C=o.length):t===sn?u>0&&(d=sn,v=u,C=c.length):(v=Math.max(r,u),d=v>0?r>u?At:sn:null,C=d?d===At?o.length:c.length:0);const k=d===At&&/\b(?:transform|all)(?:,|$)/.test(i(`${At}Property`).toString());return{type:d,timeout:v,propCount:C,hasTransform:k}}function Ci(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,i)=>Ai(n)+Ai(e[i])))}function Ai(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Pi(e){return(e?e.ownerDocument:document).body.offsetHeight}function bl(e,t,n){const i=e[wn];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const _i=Symbol("_vod"),wl=Symbol("_vsh"),Sl=Symbol(""),xl=/(?:^|;)\s*display\s*:/;function kl(e,t,n){const i=e.style,a=Ce(n);let o=!1;if(n&&!a){if(t)if(Ce(t))for(const r of t.split(";")){const l=r.slice(0,r.indexOf(":")).trim();n[l]==null&&Nn(i,l,"")}else for(const r in t)n[r]==null&&Nn(i,r,"");for(const r in n)r==="display"&&(o=!0),Nn(i,r,n[r])}else if(a){if(t!==n){const r=i[Sl];r&&(n+=";"+r),i.cssText=n,o=xl.test(n)}}else t&&e.removeAttribute("style");_i in e&&(e[_i]=o?i.display:"",e[wl]&&(i.display="none"))}const Ei=/\s*!important$/;function Nn(e,t,n){if(ne(n))n.forEach(i=>Nn(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=Tl(e,t);Ei.test(n)?e.setProperty(jt(i),n.replace(Ei,""),"important"):e[i]=n}}const Ii=["Webkit","Moz","ms"],hs={};function Tl(e,t){const n=hs[t];if(n)return n;let i=We(t);if(i!=="filter"&&i in e)return hs[t]=i;i=Xn(i);for(let a=0;a<Ii.length;a++){const o=Ii[a]+i;if(o in e)return hs[t]=o}return t}const Ri="http://www.w3.org/1999/xlink";function Li(e,t,n,i,a,o=wo(t)){i&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Ri,t.slice(6,t.length)):e.setAttributeNS(Ri,t,n):n==null||o&&!Yi(n)?e.removeAttribute(t):e.setAttribute(t,o?"":ft(n)?String(n):n)}function Mi(e,t,n,i,a){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?so(n):n);return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const l=o==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let r=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Yi(n):n==null&&l==="string"?(n="",r=!0):l==="number"&&(n=0,r=!0)}try{e[t]=n}catch{}r&&e.removeAttribute(a||t)}function St(e,t,n,i){e.addEventListener(t,n,i)}function Cl(e,t,n,i){e.removeEventListener(t,n,i)}const Di=Symbol("_vei");function Al(e,t,n,i,a=null){const o=e[Di]||(e[Di]={}),r=o[t];if(i&&r)r.value=i;else{const[l,c]=Pl(t);if(i){const u=o[t]=Il(i,a);St(e,l,u,c)}else r&&(Cl(e,l,r,c),o[t]=void 0)}}const Bi=/(?:Once|Passive|Capture)$/;function Pl(e){let t;if(Bi.test(e)){t={};let i;for(;i=e.match(Bi);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):jt(e.slice(2)),t]}let vs=0;const _l=Promise.resolve(),El=()=>vs||(_l.then(()=>vs=0),vs=Date.now());function Il(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;nt(Rl(i,n.value),t,5,[i])};return n.value=e,n.attached=El(),n}function Rl(e,t){if(ne(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(i=>a=>!a._stopped&&i&&i(a))}else return t}const qi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Ll=(e,t,n,i,a,o)=>{const r=a==="svg";t==="class"?bl(e,i,r):t==="style"?kl(e,n,i):Vn(t)?Kn(t)||Al(e,t,n,i,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ml(e,t,i,r))?(Mi(e,t,i),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Li(e,t,i,r,o,t!=="value")):e._isVueCE&&(Dl(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!Ce(i)))?Mi(e,We(t),i,o,t):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),Li(e,t,i,r))};function Ml(e,t,n,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in e&&qi(t)&&ce(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const a=e.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return qi(t)&&Ce(n)?!1:t in e}function Dl(e,t){const n=e._def.props;if(!n)return!1;const i=We(t);return Array.isArray(n)?n.some(a=>We(a)===i):Object.keys(n).some(a=>We(a)===i)}const It=e=>{const t=e.props["onUpdate:modelValue"]||!1;return ne(t)?n=>Mn(t,n):t};function Bl(e){e.target.composing=!0}function Oi(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ze=Symbol("_assign");function Fi(e,t,n){return t&&(e=e.trim()),n&&(e=Yn(e)),e}const pt={created(e,{modifiers:{lazy:t,trim:n,number:i}},a){e[Ze]=It(a);const o=i||a.props&&a.props.type==="number";St(e,t?"change":"input",r=>{r.target.composing||e[Ze](Fi(e.value,n,o))}),(n||o)&&St(e,"change",()=>{e.value=Fi(e.value,n,o)}),t||(St(e,"compositionstart",Bl),St(e,"compositionend",Oi),St(e,"change",Oi))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:i,trim:a,number:o}},r){if(e[Ze]=It(r),e.composing)return;const l=(o||e.type==="number")&&!/^0\d/.test(e.value)?Yn(e.value):e.value,c=t??"";if(l===c)return;const u=e.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===e&&e.type!=="range"&&(i&&t===n||a&&e.value.trim()===c)||(e.value=c)}},Vs={deep:!0,created(e,t,n){e[Ze]=It(n),St(e,"change",()=>{const i=e._modelValue,a=Yt(e),o=e.checked,r=e[Ze];if(ne(i)){const l=Bs(i,a),c=l!==-1;if(o&&!c)r(i.concat(a));else if(!o&&c){const u=[...i];u.splice(l,1),r(u)}}else if(Zt(i)){const l=new Set(i);o?l.add(a):l.delete(a),r(l)}else r(oo(e,o))})},mounted:Ni,beforeUpdate(e,t,n){e[Ze]=It(n),Ni(e,t,n)}};function Ni(e,{value:t,oldValue:n},i){e._modelValue=t;let a;if(ne(t))a=Bs(t,i.props.value)>-1;else if(Zt(t))a=t.has(i.props.value);else{if(t===n)return;a=_t(t,oo(e,!0))}e.checked!==a&&(e.checked=a)}const ql={created(e,{value:t},n){e.checked=_t(t,n.props.value),e[Ze]=It(n),St(e,"change",()=>{e[Ze](Yt(e))})},beforeUpdate(e,{value:t,oldValue:n},i){e[Ze]=It(i),t!==n&&(e.checked=_t(t,i.props.value))}},ao={deep:!0,created(e,{value:t,modifiers:{number:n}},i){const a=Zt(t);St(e,"change",()=>{const o=Array.prototype.filter.call(e.options,r=>r.selected).map(r=>n?Yn(Yt(r)):Yt(r));e[Ze](e.multiple?a?new Set(o):o:o[0]),e._assigning=!0,va(()=>{e._assigning=!1})}),e[Ze]=It(i)},mounted(e,{value:t}){Ui(e,t)},beforeUpdate(e,t,n){e[Ze]=It(n)},updated(e,{value:t}){e._assigning||Ui(e,t)}};function Ui(e,t){const n=e.multiple,i=ne(t);if(!(n&&!i&&!Zt(t))){for(let a=0,o=e.options.length;a<o;a++){const r=e.options[a],l=Yt(r);if(n)if(i){const c=typeof l;c==="string"||c==="number"?r.selected=t.some(u=>String(u)===String(l)):r.selected=Bs(t,l)>-1}else r.selected=t.has(l);else if(_t(Yt(r),t)){e.selectedIndex!==a&&(e.selectedIndex=a);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Yt(e){return"_value"in e?e._value:e.value}function oo(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const ro={created(e,t,n){Rn(e,t,n,null,"created")},mounted(e,t,n){Rn(e,t,n,null,"mounted")},beforeUpdate(e,t,n,i){Rn(e,t,n,i,"beforeUpdate")},updated(e,t,n,i){Rn(e,t,n,i,"updated")}};function Ol(e,t){switch(e){case"SELECT":return ao;case"TEXTAREA":return pt;default:switch(t){case"checkbox":return Vs;case"radio":return ql;default:return pt}}}function Rn(e,t,n,i,a){const r=Ol(e.tagName,n.props&&n.props.type)[a];r&&r(e,t,n,i)}const Fl=["ctrl","shift","alt","meta"],Nl={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Fl.some(n=>e[`${n}Key`]&&!t.includes(n))},je=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),i=t.join(".");return n[i]||(n[i]=(a,...o)=>{for(let r=0;r<t.length;r++){const l=Nl[t[r]];if(l&&l(a,t))return}return e(a,...o)})},Ul=_e({patchProp:Ll},pl);let Wi;function Wl(){return Wi||(Wi=$r(Ul))}const jl=(...e)=>{const t=Wl().createApp(...e),{mount:n}=t;return t.mount=i=>{const a=$l(i);if(!a)return;const o=t._component;!ce(o)&&!o.render&&!o.template&&(o.template=a.innerHTML),a.nodeType===1&&(a.textContent="");const r=n(a,!1,Hl(a));return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),r},t};function Hl(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function $l(e){return Ce(e)?document.querySelector(e):e}const Jl={"Task 1: Introduction to Selenium":{title:"Introduction to Selenium",description:`Selenium is the most widely used open-source test automation framework for web applications. It allows testers and developers to automate browser interactions, simulating real user behavior across different browsers and operating systems.

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
System.out.println("File downloaded: " + downloadedFile);`}]}},Gl={"Task 1: Introduction to Playwright":{title:"Introduction to Playwright",description:`Playwright is a modern end-to-end testing framework developed by Microsoft. It supports multiple browsers, languages, and provides powerful automation capabilities.

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
          path: test-results/`}]}},zl={"Task 1: Introduction to REST & APIs":{title:"Introduction to REST & APIs",description:`REST (Representational State Transfer) is an architectural style for designing networked applications. RESTful APIs use HTTP requests to perform CRUD operations on resources.

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
}`}]}},Vl={title:"Rest Assured Interview Questions",icon:"🔌",questions:[{id:1,question:"What is Rest Assured?",answer:"Rest Assured is an open-source Java library used for testing RESTful web services. It simplifies the process of writing tests for REST APIs by providing a domain-specific language (DSL) for making HTTP requests and validating responses.",difficulty:"Easy"},{id:2,question:"What are the main HTTP methods supported by Rest Assured?",answer:"Rest Assured supports GET, POST, PUT, DELETE, PATCH, HEAD, and OPTIONS HTTP methods. Each method is represented by a corresponding method in the Rest Assured API: get(), post(), put(), delete(), patch(), head(), and options().",difficulty:"Easy"},{id:3,question:"What is the BDD syntax in Rest Assured?",answer:"Rest Assured supports BDD (Behavior Driven Development) syntax using Given-When-Then pattern. 'given()' sets up preconditions like headers/params, 'when()' performs the HTTP action, and 'then()' validates the response. Example: given().header('key','val').when().get('/endpoint').then().statusCode(200).",difficulty:"Easy"},{id:4,question:"How do you validate a JSON response field in Rest Assured?",answer:"Using JSONPath in the then() block: .then().body('fieldName', equalTo('expectedValue')). For nested fields use dot notation: .body('user.name', equalTo('John')). For arrays use: .body('users[0].name', equalTo('John')).",difficulty:"Easy"},{id:5,question:"What is the difference between queryParam() and pathParam()?",answer:"queryParam() appends parameters to the URL as query strings (e.g., /users?id=1), while pathParam() replaces placeholders in the URL path (e.g., /users/{id} becomes /users/1). queryParam is used for filtering/sorting, pathParam for identifying specific resources.",difficulty:"Medium"},{id:6,question:"How do you handle authentication in Rest Assured?",answer:"Rest Assured supports multiple authentication types: Basic Auth using .auth().basic('user','pass'), OAuth2 using .auth().oauth2('token'), Digest Auth using .auth().digest('user','pass'), and API Key by adding it as a header using .header('Authorization', 'Bearer token').",difficulty:"Medium"},{id:7,question:"How do you extract a value from a JSON response?",answer:"Using the extract() method: String value = given().when().get('/endpoint').then().extract().path('fieldName'). Or extract the full response: Response response = given().when().get('/endpoint'); String val = response.jsonPath().getString('fieldName').",difficulty:"Medium"},{id:8,question:"What is RequestSpecification in Rest Assured?",answer:"RequestSpecification is an interface used to define reusable request configurations. You can set base URI, headers, content type, and auth once using RequestSpecBuilder and reuse it across tests. Example: RequestSpecification spec = new RequestSpecBuilder().setBaseUri('http://api.com').build();",difficulty:"Medium"},{id:9,question:"How do you handle SSL certificates in Rest Assured?",answer:"To bypass SSL certificate validation, use: RestAssured.useRelaxedHTTPSValidation() globally, or given().relaxedHTTPSValidation() per request. For custom certificates, use given().keyStore('/path/to/keystore', 'password').",difficulty:"Medium"},{id:10,question:"What is the difference between contentType() and accept() in Rest Assured?",answer:"contentType() sets the Content-Type header telling the server what format the request body is in (e.g., application/json). accept() sets the Accept header telling the server what format you expect in the response. Both can use ContentType enum values like ContentType.JSON.",difficulty:"Medium"},{id:11,question:"How do you send a POST request with a JSON body?",answer:"Use given().contentType(ContentType.JSON).body(jsonString).when().post('/endpoint'). The body can be a String, Map, POJO, or JSONObject. For POJO: given().contentType(ContentType.JSON).body(pojoObject).when().post('/users'). Rest Assured serializes it automatically.",difficulty:"Easy"},{id:12,question:"What is ResponseSpecification in Rest Assured?",answer:"ResponseSpecification defines reusable response validations. Built using ResponseSpecBuilder: ResponseSpecification spec = new ResponseSpecBuilder().expectStatusCode(200).expectContentType(ContentType.JSON).build(). Then use: when().get('/endpoint').then().spec(spec).",difficulty:"Hard"},{id:13,question:"How do you handle multipart file uploads in Rest Assured?",answer:"Use given().multiPart('file', new File('/path/to/file')).when().post('/upload'). For multiple parts: given().multiPart('file', file).multiPart('name', 'value').when().post('/upload'). Set content type to multipart/form-data automatically.",difficulty:"Hard"},{id:14,question:"What is JSONPath and how is it used in Rest Assured?",answer:"JSONPath is a query language for JSON similar to XPath for XML. In Rest Assured: response.jsonPath().getString('name'), .getInt('age'), .getList('items'), .get('users[0].address.city'). Supports wildcards: .getList('users.name') gets all user names.",difficulty:"Medium"},{id:15,question:"How do you perform schema validation in Rest Assured?",answer:"Using matchesJsonSchemaInClasspath() from io.restassured.module.jsv.JsonSchemaValidator: then().body(matchesJsonSchemaInClasspath('schema.json')). The JSON schema file should be in the resources folder. Requires the json-schema-validator dependency.",difficulty:"Hard"},{id:16,question:"How do you handle cookies in Rest Assured?",answer:"To send cookies: given().cookie('cookieName', 'cookieValue'). To get cookies from response: Response response = when().get('/endpoint'); String cookie = response.getCookie('cookieName'). To get all cookies: Map cookies = response.getCookies().",difficulty:"Medium"},{id:17,question:"What is the use of filters in Rest Assured?",answer:"Filters intercept requests and responses for logging, authentication, or modification. Built-in filters: RequestLoggingFilter, ResponseLoggingFilter, AllureRestAssured for reporting. Custom filters implement the Filter interface. Add using: given().filter(new RequestLoggingFilter()).",difficulty:"Hard"},{id:18,question:"How do you perform response time validation?",answer:"Using time() assertion: then().time(lessThan(2000L)) validates response time is less than 2 seconds. Or extract: long time = when().get('/endpoint').timeIn(TimeUnit.MILLISECONDS). Requires Hamcrest matchers for comparison.",difficulty:"Medium"},{id:19,question:"How do you chain API requests in Rest Assured?",answer:"Extract a value from one response and use in the next: String token = given().body(loginBody).post('/login').then().extract().path('token'); then: given().header('Authorization','Bearer '+token).when().get('/profile').then().statusCode(200).",difficulty:"Hard"},{id:20,question:"What is the difference between RestAssured.given() and SerenityRest.given()?",answer:"RestAssured.given() is the standard Rest Assured entry point. SerenityRest.given() is a wrapper provided by Serenity BDD framework that integrates Rest Assured with Serenity reporting, providing richer test reports with request/response details automatically captured.",difficulty:"Hard"}]},Kl={title:"Selenium Interview Questions",icon:"🌐",questions:[{id:1,question:"What is Selenium and what are its components?",answer:"Selenium is an open-source automation testing tool for web applications. Components: Selenium IDE (record/playback browser plugin), Selenium WebDriver (programmatic browser control), Selenium Grid (parallel/distributed test execution), and Selenium RC (deprecated, replaced by WebDriver).",difficulty:"Easy"},{id:2,question:"What are the different types of locators in Selenium?",answer:"Selenium supports 8 locators: ID (fastest, most reliable), Name, ClassName, TagName, LinkText (exact anchor text), PartialLinkText (partial anchor text), CSS Selector (flexible, fast), and XPath (most powerful, can traverse DOM). Best practice: prefer ID > CSS Selector > XPath.",difficulty:"Easy"},{id:3,question:"What is the difference between findElement() and findElements()?",answer:"findElement() returns a single WebElement and throws NoSuchElementException if not found. findElements() returns a List of WebElements and returns an empty list if none found (no exception). Use findElements().size() > 0 to check element existence safely.",difficulty:"Easy"},{id:4,question:"Explain implicit, explicit, and fluent waits.",answer:"Implicit Wait: global wait applied to all findElement calls, waits up to specified time. Explicit Wait: waits for specific condition using WebDriverWait and ExpectedConditions. Fluent Wait: advanced explicit wait with polling interval and exception ignoring. Best practice: avoid mixing implicit and explicit waits.",difficulty:"Medium"},{id:5,question:"What is Page Object Model (POM)?",answer:"POM is a design pattern where each web page has a corresponding class containing WebElements and methods to interact with them. Benefits: reduces code duplication, improves maintainability, separates test logic from page logic. Each page class uses @FindBy annotations or By locators with PageFactory.initElements().",difficulty:"Medium"},{id:6,question:"How do you handle dynamic elements in Selenium?",answer:"Use dynamic XPath with contains(): //div[contains(@id,'dynamic')], starts-with(): //input[starts-with(@name,'user')], or text(): //span[text()='Submit']. Also use explicit waits with ExpectedConditions.visibilityOfElementLocated() to wait for dynamic elements to appear.",difficulty:"Medium"},{id:7,question:"How do you handle dropdowns in Selenium?",answer:"Use the Select class for HTML select elements: Select dropdown = new Select(driver.findElement(By.id('dropdown'))); Methods: selectByVisibleText('option'), selectByValue('val'), selectByIndex(0), getOptions(), getFirstSelectedOption(), deselectAll(). For custom dropdowns, click the element then click the option.",difficulty:"Easy"},{id:8,question:"How do you handle multiple windows/tabs in Selenium?",answer:"Get all window handles: Set handles = driver.getWindowHandles(). Switch to new window: driver.switchTo().window(newHandle). Get current handle: driver.getWindowHandle(). To close current window: driver.close(). To switch back: driver.switchTo().window(originalHandle).",difficulty:"Medium"},{id:9,question:"How do you handle iframes in Selenium?",answer:"Switch to iframe by index: driver.switchTo().frame(0). By name/id: driver.switchTo().frame('frameName'). By WebElement: driver.switchTo().frame(driver.findElement(By.id('frame'))). To return to main page: driver.switchTo().defaultContent(). To go one level up: driver.switchTo().parentFrame().",difficulty:"Medium"},{id:10,question:"What is Actions class and when do you use it?",answer:"Actions class handles complex user interactions: mouseHover using moveToElement(), drag and drop using dragAndDrop(), right-click using contextClick(), double-click using doubleClick(), keyboard actions using keyDown()/keyUp(), and chaining multiple actions using build().perform().",difficulty:"Medium"},{id:11,question:"How do you take a screenshot in Selenium?",answer:"Cast driver to TakesScreenshot: TakesScreenshot ts = (TakesScreenshot)driver. Capture screenshot: File src = ts.getScreenshotAs(OutputType.FILE). Save to file: FileUtils.copyFile(src, new File('path/screenshot.png')). Can also capture specific element: ((TakesScreenshot)element).getScreenshotAs(OutputType.FILE).",difficulty:"Easy"},{id:12,question:"What is JavaScriptExecutor and when do you use it?",answer:"JavaScriptExecutor executes JavaScript in browser context. Use when: normal click doesn't work, scrolling (executeScript('window.scrollBy(0,500)')), highlighting elements, getting element attributes, clicking hidden elements. Cast: JavascriptExecutor js = (JavascriptExecutor)driver; js.executeScript('script', element).",difficulty:"Medium"},{id:13,question:"How do you handle alerts in Selenium?",answer:"Switch to alert: Alert alert = driver.switchTo().alert(). Methods: accept() clicks OK, dismiss() clicks Cancel, getText() gets alert message, sendKeys('text') enters text in prompt. Use try-catch with NoAlertPresentException. For explicit wait: new WebDriverWait(driver,10).until(ExpectedConditions.alertIsPresent()).",difficulty:"Easy"},{id:14,question:"What is Selenium Grid and how does it work?",answer:"Selenium Grid enables parallel test execution across multiple machines and browsers. Hub is the central point that receives test requests. Nodes are machines registered to the hub that execute tests. Tests connect to hub URL, hub routes to matching node. Supports Docker containers for easy setup.",difficulty:"Hard"},{id:15,question:"What is the difference between driver.close() and driver.quit()?",answer:"driver.close() closes only the current browser window but keeps the WebDriver session active. driver.quit() closes all browser windows and terminates the WebDriver session completely, releasing all resources. Always use quit() in tearDown to avoid memory leaks.",difficulty:"Easy"},{id:16,question:"How do you handle StaleElementReferenceException?",answer:"StaleElementReferenceException occurs when a referenced element is no longer attached to DOM (page refresh/navigation). Solutions: re-find element before use, use try-catch to retry, use explicit wait with refreshed() condition: ExpectedConditions.refreshed(ExpectedConditions.elementToBeClickable(locator)).",difficulty:"Hard"},{id:17,question:"How do you scroll in Selenium?",answer:"Scroll by pixels: js.executeScript('window.scrollBy(0,500)'). Scroll to bottom: js.executeScript('window.scrollTo(0,document.body.scrollHeight)'). Scroll to element: js.executeScript('arguments[0].scrollIntoView(true)', element). Using Actions: new Actions(driver).scrollToElement(element).perform() in Selenium 4.",difficulty:"Medium"},{id:18,question:"What are the new features in Selenium 4?",answer:"Selenium 4 features: W3C WebDriver standardization, relative locators (above, below, near, toLeftOf, toRightOf), Chrome DevTools Protocol (CDP) integration, improved Selenium Grid with Docker support, new window/tab opening API (driver.switchTo().newWindow()), and better documentation.",difficulty:"Hard"},{id:19,question:"How do you handle file uploads in Selenium?",answer:"For input type=file: driver.findElement(By.id('upload')).sendKeys('/path/to/file'). For drag-drop upload zones use JavaScript or Actions class. For OS-level file dialogs use Robot class or AutoIT for Windows. In headless mode, sendKeys approach works best without triggering OS dialogs.",difficulty:"Medium"},{id:20,question:"What is the difference between CSS Selector and XPath?",answer:"CSS Selector: faster, simpler syntax, better for styling-based selection, cannot traverse up DOM (no parent selection), e.g., div.className > input. XPath: can traverse up and down DOM, supports text-based selection, more powerful but slower, e.g., //div[@class='name']/parent::div. Prefer CSS Selector for performance.",difficulty:"Medium"}]},Ql={title:"Framework Interview Questions",icon:"🏗️",questions:[{id:1,question:"What is TestNG and how is it different from JUnit?",answer:"TestNG is a testing framework inspired by JUnit but with more features: supports grouping tests, parallel execution, data-driven testing with @DataProvider, dependent test methods, flexible test configuration with XML, before/after suite/group hooks, and soft assertions. JUnit is simpler but less feature-rich.",difficulty:"Easy"},{id:2,question:"Explain TestNG annotations in order of execution.",answer:"@BeforeSuite → @BeforeTest → @BeforeGroups → @BeforeClass → @BeforeMethod → @Test → @AfterMethod → @AfterClass → @AfterGroups → @AfterTest → @AfterSuite. BeforeSuite runs once before entire suite. BeforeClass runs once before all test methods in class. BeforeMethod runs before each test method.",difficulty:"Medium"},{id:3,question:"What is Data Driven Testing and how do you implement it in TestNG?",answer:"Data Driven Testing separates test data from test logic. In TestNG, use @DataProvider annotation: @DataProvider(name='loginData') public Object[][] getData() { return new Object[][]{{'user1','pass1'},{'user2','pass2'}}; } Then reference in test: @Test(dataProvider='loginData') public void test(String u, String p){}.",difficulty:"Medium"},{id:4,question:"What is Page Object Model and what are its advantages?",answer:"POM is a design pattern creating a class for each web page containing locators and methods. Advantages: reduces code duplication (DRY principle), easy maintenance (change locator in one place), improves readability, separates page logic from test logic, enables reuse across multiple tests. Use with PageFactory for @FindBy annotations.",difficulty:"Medium"},{id:5,question:"What is the difference between keyword-driven and data-driven frameworks?",answer:"Data-Driven: test logic is fixed, only test data changes (stored in Excel/JSON/CSV). Keywords-Driven: test steps are driven by keywords in external files (e.g., 'click', 'enterText'), business analysts can write tests. Hybrid Framework combines both approaches for maximum flexibility and reusability.",difficulty:"Medium"},{id:6,question:"How do you implement parallel execution in TestNG?",answer:"In testng.xml: <suite name='Suite' parallel='methods' thread-count='4'>. Parallel options: methods (each method in separate thread), tests (each test tag in separate thread), classes (each class in separate thread), instances (each instance in separate thread). Ensure thread-safe WebDriver using ThreadLocal<WebDriver>.",difficulty:"Hard"},{id:7,question:"What is ThreadLocal and why is it used in Selenium frameworks?",answer:"ThreadLocal provides thread-local variables, giving each thread its own independent WebDriver instance. Implementation: private static ThreadLocal<WebDriver> driver = new ThreadLocal<>(). Set: driver.set(new ChromeDriver()). Get: driver.get(). Remove: driver.remove(). Essential for parallel test execution to avoid WebDriver sharing between threads.",difficulty:"Hard"},{id:8,question:"How do you generate Extent Reports?",answer:"Create ExtentReports instance, create ExtentHtmlReporter, attach reporter. In tests: ExtentTest test = extent.createTest('testName'). Log: test.log(Status.PASS,'message') or test.pass/fail/skip(). Add screenshot: test.addScreenCaptureFromPath(path). Call extent.flush() in @AfterSuite. Use ExtentTestNGITestListener for automatic integration.",difficulty:"Medium"},{id:9,question:"What is Maven and how is it used in test automation?",answer:"Maven is a build automation tool managing project dependencies via pom.xml. For automation: add dependencies (Selenium, TestNG, etc.), run tests using mvn test, configure Surefire plugin to run TestNG XML, set properties for parallel execution, generate reports. Maven lifecycle: validate → compile → test → package → install → deploy.",difficulty:"Medium"},{id:10,question:"How do you read test data from Excel in a framework?",answer:"Using Apache POI library: add poi and poi-ooxml dependencies. Read: FileInputStream fis = new FileInputStream('data.xlsx'); Workbook wb = new XSSFWorkbook(fis); Sheet sheet = wb.getSheet('Sheet1'); Row row = sheet.getRow(0); Cell cell = row.getCell(0); String value = cell.getStringCellValue(). Create utility class for reuse.",difficulty:"Medium"},{id:11,question:"What is Singleton design pattern in test frameworks?",answer:"Singleton ensures only one instance of a class exists. Used for WebDriver: private static WebDriver driver; public static WebDriver getInstance() { if(driver == null) { driver = new ChromeDriver(); } return driver; }. Warning: not thread-safe, use ThreadLocal for parallel execution instead.",difficulty:"Hard"},{id:12,question:"How do you implement logging in a test framework?",answer:"Use Log4j2 or SLF4J with Logback. Add dependency, create log4j2.xml config file. In classes: private static final Logger log = LogManager.getLogger(ClassName.class). Use: log.info(), log.debug(), log.error(), log.warn(). Configure appenders for console and file output. Integrate with Extent Reports for test-level logging.",difficulty:"Medium"},{id:13,question:"What is the Factory design pattern in automation?",answer:"Factory pattern creates objects without specifying exact class. Used for cross-browser testing: DriverFactory.getDriver('chrome') returns ChromeDriver, getDriver('firefox') returns FirefoxDriver. Centralizes driver creation, easy to add new browsers, follows Open/Closed principle. Combine with configuration files for browser selection.",difficulty:"Hard"},{id:14,question:"How do you handle test configuration using properties files?",answer:"Create config.properties file with key-value pairs. Read using: Properties props = new Properties(); FileInputStream fis = new FileInputStream('config.properties'); props.load(fis); String url = props.getProperty('baseUrl'). Create ConfigReader utility class as Singleton. Store: URLs, browser type, credentials, timeouts.",difficulty:"Easy"},{id:15,question:"What is CI/CD and how do you integrate tests with Jenkins?",answer:"CI/CD automates building, testing, and deploying. Jenkins integration: create Pipeline/Freestyle job, configure Git repository, add build step 'mvn clean test', configure post-build actions for reports (publish HTML/Allure report), set triggers (GitHub webhook, scheduled), email notifications on failure.",difficulty:"Hard"},{id:16,question:"How do you implement soft assertions in TestNG?",answer:"Soft assertions don't stop test execution on failure. Use: SoftAssert softAssert = new SoftAssert(). Multiple checks: softAssert.assertEquals(actual, expected, 'message'), softAssert.assertTrue(condition). Call softAssert.assertAll() at end to report all failures. Useful for validating multiple fields on a form.",difficulty:"Medium"},{id:17,question:"What is the Builder design pattern in test automation?",answer:"Builder pattern constructs complex objects step by step. Used for test data creation: new User.Builder().setName('John').setEmail('john@email.com').setAge(25).build(). Improves readability, handles optional parameters elegantly. Also used in Rest Assured's RequestSpecBuilder and ResponseSpecBuilder.",difficulty:"Hard"},{id:18,question:"How do you manage test environments in a framework?",answer:"Use environment-specific property files (dev.properties, staging.properties, prod.properties). Pass environment via Maven: mvn test -Denv=staging. Read in framework: String env = System.getProperty('env','dev'). Load corresponding properties file. Store URLs, credentials, feature flags per environment.",difficulty:"Medium"},{id:19,question:"What is Allure Report and how do you integrate it?",answer:"Allure is a flexible reporting framework. Add allure-testng dependency and aspectj agent in pom.xml. Use annotations: @Step for test steps, @Attachment for screenshots, @Description, @Severity, @Story, @Feature. Run: mvn test, then allure serve target/allure-results. Provides rich interactive reports with history trends.",difficulty:"Hard"},{id:20,question:"How do you handle test retries for flaky tests?",answer:"Implement IRetryAnalyzer interface: public boolean retry(ITestResult result) { if(retryCount < maxRetry) { retryCount++; return true; } return false; }. Add to test: @Test(retryAnalyzer=RetryAnalyzer.class). Or use RetryListener implementing IAnnotationTransformer to apply globally to all tests without modifying each annotation.",difficulty:"Hard"}]},Xl={title:"Basic Testing Interview Questions",icon:"🧪",questions:[{id:1,question:"What is Software Testing and why is it important?",answer:"Software testing is the process of evaluating software to find defects and ensure it meets requirements. Important because: catches bugs before production, ensures quality, reduces maintenance costs, builds user confidence, validates business requirements, and prevents security vulnerabilities. Cost of fixing bugs increases exponentially later in SDLC.",difficulty:"Easy"},{id:2,question:"What is SDLC and what are its phases?",answer:"Software Development Life Cycle phases: Planning (feasibility, resources), Requirements Analysis (gathering requirements), System Design (architecture, DB design), Implementation (coding), Testing (verification & validation), Deployment (release to production), Maintenance (bug fixes, updates). Models: Waterfall, Agile, Spiral, V-Model.",difficulty:"Easy"},{id:3,question:"What is STLC and what are its phases?",answer:"Software Testing Life Cycle phases: Requirement Analysis (review requirements, identify testable requirements), Test Planning (strategy, resources, timeline), Test Case Design (write test cases, test data), Test Environment Setup, Test Execution (run tests, log defects), Test Closure (metrics, lessons learned). Each phase has entry and exit criteria.",difficulty:"Easy"},{id:4,question:"What is the difference between verification and validation?",answer:"Verification: 'Are we building the product right?' - checks if software meets specified requirements without executing code (reviews, inspections, walkthroughs). Validation: 'Are we building the right product?' - checks if software meets user expectations through execution (testing). Verification is static, validation is dynamic.",difficulty:"Easy"},{id:5,question:"Explain different levels of testing.",answer:"Unit Testing: tests individual components/functions. Integration Testing: tests interaction between modules (top-down, bottom-up, sandwich). System Testing: tests complete system against requirements. Acceptance Testing: validates against business requirements (UAT - User Acceptance Testing). Each level has different scope and responsibility.",difficulty:"Easy"},{id:6,question:"What is the difference between black box, white box, and grey box testing?",answer:"Black Box: tester has no knowledge of internal code, tests based on requirements/UI (functional testing). White Box: tester has full knowledge of code, tests internal logic, code paths (unit testing, code coverage). Grey Box: partial knowledge of internals, combination of both approaches. Most QA engineers do black box testing.",difficulty:"Easy"},{id:7,question:"What is the difference between smoke, sanity, and regression testing?",answer:"Smoke Testing: shallow, wide testing of main features after new build to decide if detailed testing should proceed ('build verification test'). Sanity Testing: narrow, focused testing of specific functionality after bug fix or small change. Regression Testing: re-running existing tests to ensure changes haven't broken existing functionality.",difficulty:"Medium"},{id:8,question:"What is boundary value analysis and equivalence partitioning?",answer:"Equivalence Partitioning: divides input data into valid/invalid partitions, test one value per partition. E.g., age 1-120: test one valid (25), one invalid (<1), one invalid (>120). Boundary Value Analysis: tests at boundaries of partitions: minimum, minimum+1, maximum-1, maximum. E.g., age: 0,1,2,119,120,121.",difficulty:"Medium"},{id:9,question:"What is a test case and what should it contain?",answer:"A test case is a set of conditions to validate functionality. Components: Test Case ID, Title/Description, Preconditions, Test Steps (numbered), Test Data, Expected Result, Actual Result, Status (Pass/Fail), Priority, Severity, Created By, Executed By, Date. Good test cases are clear, concise, reusable, and independent.",difficulty:"Easy"},{id:10,question:"What is the difference between priority and severity of a defect?",answer:"Severity: impact of bug on application functionality (Critical/Major/Minor/Trivial) - determined by tester. Priority: urgency of fixing the bug (High/Medium/Low) - determined by business/product owner. High severity low priority: app crashes on rarely used feature. Low severity high priority: spelling error on homepage.",difficulty:"Medium"},{id:11,question:"What is a defect life cycle?",answer:"Defect lifecycle: New (logged by tester) → Assigned (to developer) → Open (developer starts fixing) → Fixed (developer fixes) → Ready for Retest → Retest (tester verifies fix) → Closed (if fixed) or Reopened (if not fixed). Other states: Duplicate, Deferred, Not a Bug, Cannot Reproduce.",difficulty:"Medium"},{id:12,question:"What is exploratory testing?",answer:"Exploratory testing is simultaneous learning, test design, and test execution. Tester explores application without predefined test cases, using domain knowledge and creativity. Benefits: finds defects that scripted tests miss, effective for complex systems, good for usability issues. Documented using session-based testing with charter, notes, and time-boxing.",difficulty:"Medium"},{id:13,question:"What is Agile testing and how does it differ from traditional testing?",answer:"Agile testing is continuous testing throughout sprint cycles. Differences: testing starts from day 1 (not after development), testers collaborate with developers, testing is everyone's responsibility, automated tests are critical, working in 2-week sprints, adapting to changing requirements. Uses ceremonies: sprint planning, daily standups, sprint review, retrospective.",difficulty:"Medium"},{id:14,question:"What is performance testing and what are its types?",answer:"Performance testing validates system behavior under load. Types: Load Testing (normal expected load), Stress Testing (beyond normal capacity to find breaking point), Spike Testing (sudden large load increase), Soak/Endurance Testing (sustained load over long period), Volume Testing (large amount of data), Scalability Testing. Tools: JMeter, Gatling, LoadRunner.",difficulty:"Hard"},{id:15,question:"What is usability testing?",answer:"Usability testing evaluates how easy and intuitive a product is to use. Checks: learnability, efficiency, memorability, error prevention, satisfaction. Methods: moderated (facilitator guides user), unmoderated (remote, self-guided), A/B testing (compare two versions). Metrics: task completion rate, time on task, error rate, satisfaction score.",difficulty:"Medium"},{id:16,question:"What is the difference between test strategy and test plan?",answer:"Test Strategy: high-level document describing overall testing approach for organization/project, covers testing types, tools, standards. Relatively static. Test Plan: detailed project-specific document covering scope, objectives, resources, schedule, risks, test cases. Created per project/release. Strategy is 'what and how', plan is 'who, when, what specifically'.",difficulty:"Medium"},{id:17,question:"What is mutation testing?",answer:"Mutation testing evaluates quality of test cases by introducing small code changes (mutations) like changing operators (+/-), modifying conditions, changing values. If tests catch the mutation (tests fail), mutation is 'killed'. If tests pass with mutation, mutation 'survives' indicating weak tests. Tools: PIT (Java), Stryker (JS). High mutation score = good tests.",difficulty:"Hard"},{id:18,question:"What are the key metrics in software testing?",answer:"Key metrics: Test Coverage (% of requirements covered), Defect Density (defects per KLOC), Defect Detection Efficiency (defects found in testing vs total), Test Execution Rate, Pass/Fail Rate, Defect Removal Efficiency, Mean Time to Detect (MTTD), Mean Time to Repair (MTTR), Automation Coverage percentage.",difficulty:"Hard"},{id:19,question:"What is risk-based testing?",answer:"Risk-based testing prioritizes testing based on probability and impact of failures. Process: identify risks (business, technical, operational), analyze risk probability and impact, prioritize testing based on risk score, allocate testing effort accordingly. High-risk areas get more thorough testing. Ensures critical functionality is tested first with limited time.",difficulty:"Hard"},{id:20,question:"What is shift-left testing?",answer:"Shift-left testing means involving testing activities earlier in the SDLC (moving left on timeline). Activities: reviewing requirements for testability, writing test cases during design phase, developers writing unit tests, TDD (Test Driven Development), BDD (Behavior Driven Development). Benefits: cheaper defect detection, faster feedback, better quality.",difficulty:"Medium"}]},Yl={title:"Java Coding Interview Questions",icon:"☕",questions:[{id:1,question:"What are the four pillars of OOP in Java?",answer:"Encapsulation: bundling data and methods, hiding internal state using private fields with getters/setters. Inheritance: child class inherits properties from parent using 'extends'. Polymorphism: one interface, multiple implementations - method overloading (compile-time) and overriding (runtime). Abstraction: hiding complexity using abstract classes and interfaces.",difficulty:"Easy"},{id:2,question:"What is the difference between == and .equals() in Java?",answer:"== compares object references (memory addresses) for objects, compares values for primitives. .equals() compares actual content/values - can be overridden. String s1='hello'; String s2=new String('hello'); s1==s2 is FALSE (different objects), s1.equals(s2) is TRUE (same content). String literals use string pool, so 'hello'=='hello' can be true.",difficulty:"Easy"},{id:3,question:"What is the difference between ArrayList and LinkedList?",answer:"ArrayList: backed by dynamic array, O(1) random access by index, O(n) insertion/deletion in middle, better for frequent reads. LinkedList: doubly linked list, O(n) access by index, O(1) insertion/deletion at ends, implements Deque, better for frequent insertions/deletions. ArrayList uses less memory as no node pointers needed.",difficulty:"Medium"},{id:4,question:"What is the difference between HashMap, LinkedHashMap, and TreeMap?",answer:"HashMap: unordered key-value pairs, O(1) get/put, allows one null key, not synchronized. LinkedHashMap: maintains insertion order, slightly slower than HashMap due to linked list overhead. TreeMap: sorted by keys (natural or Comparator), O(log n) operations, no null keys. Use HashMap for performance, LinkedHashMap for order, TreeMap for sorted data.",difficulty:"Medium"},{id:5,question:"What is the difference between abstract class and interface in Java?",answer:"Abstract class: can have abstract and concrete methods, constructor, instance variables, single inheritance. Interface: all methods abstract by default (Java 8+ allows default/static), no constructor, only public static final variables, multiple implementation. Use abstract class for 'is-a' relationship with shared code, interface for 'can-do' capability contract.",difficulty:"Medium"},{id:6,question:"What is Java 8 Stream API?",answer:"Stream API processes collections in a functional style. Operations: filter() (condition), map() (transform), flatMap() (flatten), sorted(), distinct(), limit(), skip(). Terminal: collect(), forEach(), count(), findFirst(), anyMatch(), reduce(). Example: list.stream().filter(x->x>5).map(x->x*2).collect(Collectors.toList()). Supports parallel processing with parallelStream().",difficulty:"Hard"},{id:7,question:"What are Lambda expressions in Java 8?",answer:"Lambda expressions are anonymous functions implementing functional interfaces. Syntax: (parameters) -> expression or (parameters) -> { statements }. Example: Runnable r = () -> System.out.println('Hello'). Comparator<String> c = (s1,s2) -> s1.compareTo(s2). Eliminates boilerplate of anonymous inner classes. Used extensively with Stream API and functional interfaces.",difficulty:"Medium"},{id:8,question:"What is the difference between checked and unchecked exceptions?",answer:"Checked exceptions: must be handled or declared (throws), checked at compile-time. Examples: IOException, SQLException, ClassNotFoundException. Unchecked exceptions (RuntimeException): not required to be handled, occur at runtime. Examples: NullPointerException, ArrayIndexOutOfBoundsException, IllegalArgumentException. Error: serious problems not for catching (OutOfMemoryError).",difficulty:"Medium"},{id:9,question:"What is multithreading in Java and how do you create threads?",answer:"Multithreading runs multiple threads concurrently. Create thread: 1) Extend Thread class and override run(). 2) Implement Runnable interface and pass to Thread constructor. 3) Implement Callable for return values. 4) Use ExecutorService thread pool. Start with thread.start() (not run()). Synchronize shared resources with synchronized keyword or Lock interface.",difficulty:"Hard"},{id:10,question:"What is the difference between String, StringBuilder, and StringBuffer?",answer:"String: immutable, new object created on every modification, stored in String pool, thread-safe. StringBuilder: mutable, modifies same object, not thread-safe, faster. StringBuffer: mutable, synchronized (thread-safe), slower than StringBuilder. Use String for few modifications, StringBuilder for many modifications in single thread, StringBuffer in multi-threaded environment.",difficulty:"Easy"},{id:11,question:"What is Java Collections Framework hierarchy?",answer:"Iterable → Collection → List (ArrayList, LinkedList, Vector), Set (HashSet, LinkedHashSet, TreeSet), Queue (PriorityQueue, LinkedList, ArrayDeque). Map (separate hierarchy): HashMap, LinkedHashMap, TreeMap, Hashtable, ConcurrentHashMap. Sorted interfaces: SortedSet (TreeSet), SortedMap (TreeMap). Deque: double-ended queue (ArrayDeque, LinkedList).",difficulty:"Hard"},{id:12,question:"What is the Singleton pattern and how do you implement it in Java?",answer:"Singleton ensures one instance per JVM. Thread-safe implementation: private static volatile Singleton instance; private Singleton(){}; public static Singleton getInstance(){ if(instance==null){ synchronized(Singleton.class){ if(instance==null){ instance=new Singleton(); }}} return instance; }. Or use enum: enum Singleton{ INSTANCE; }. Enum is preferred - handles serialization and reflection attacks.",difficulty:"Hard"},{id:13,question:"What is Optional in Java 8?",answer:"Optional is a container that may or may not contain a non-null value, avoiding NullPointerException. Create: Optional.of(value), Optional.ofNullable(value), Optional.empty(). Use: isPresent(), get(), orElse(default), orElseGet(supplier), orElseThrow(), ifPresent(consumer), map(), filter(). Best practice: use as return type, not as parameter or field.",difficulty:"Medium"},{id:14,question:"What is the difference between Comparable and Comparator?",answer:"Comparable (java.lang): natural ordering, implemented by the class itself, single sorting sequence, compareTo() method, e.g., String implements Comparable. Comparator (java.util): external ordering, implemented separately, multiple sorting sequences, compare() method. Use Comparable for default sort, Comparator for custom/multiple sort orders without modifying original class.",difficulty:"Medium"},{id:15,question:"What is garbage collection in Java?",answer:"JVM automatically manages memory by removing unreachable objects. Heap regions: Young Generation (Eden, S0, S1) - minor GC, Old Generation - major GC, Metaspace (Java 8+, replaced PermGen). GC algorithms: Serial, Parallel, CMS, G1 (default Java 9+), ZGC. finalize() deprecated. System.gc() is only a suggestion. Memory leaks can still occur with static references.",difficulty:"Hard"},{id:16,question:"What are functional interfaces in Java 8?",answer:"Functional interface has exactly one abstract method, used with lambda expressions. @FunctionalInterface annotation. Built-in: Function<T,R> (takes T returns R), Predicate<T> (takes T returns boolean), Consumer<T> (takes T returns void), Supplier<T> (no input returns T), BiFunction<T,U,R>, UnaryOperator<T>, BinaryOperator<T>. Used heavily in Stream API.",difficulty:"Medium"},{id:17,question:"What is the difference between final, finally, and finalize?",answer:"final: keyword - final variable (constant), final method (cannot override), final class (cannot extend). finally: block in try-catch-finally that always executes (except System.exit()), used for cleanup like closing resources. finalize(): method called by GC before object is garbage collected (deprecated in Java 9). Use try-with-resources instead of finalize for cleanup.",difficulty:"Easy"},{id:18,question:"What is method overloading vs method overriding?",answer:"Overloading (compile-time polymorphism): same method name, different parameters (type/number/order), same class, resolved at compile time. Overriding (runtime polymorphism): same method name and signature, child class overrides parent class method, @Override annotation, resolved at runtime. Cannot override static, final, or private methods. Overriding enables runtime polymorphism.",difficulty:"Easy"},{id:19,question:"What is Java memory model (Stack vs Heap)?",answer:"Stack: stores primitive variables and object references (not objects), method call frames, thread-specific, LIFO, fixed size, fast access. Heap: stores actual objects and class instances, shared among all threads, managed by GC, dynamic size, slower. String pool is in Heap (Metaspace in older versions). Stack overflow occurs with infinite recursion, OutOfMemoryError with heap overflow.",difficulty:"Hard"},{id:20,question:"What are design patterns commonly used in test automation?",answer:"Creational: Singleton (single WebDriver), Factory (browser selection), Builder (test data). Structural: Page Object (page abstraction), Facade (complex API simplification), Decorator (add behavior). Behavioral: Strategy (different test strategies), Observer (event handling), Template Method (test flow skeleton). Most important for SDET: Singleton, Factory, Builder, Page Object Model.",difficulty:"Hard"}]},Zl={restAssured:Vl,selenium:Kl,framework:Ql,basicTesting:Xl,javaCoding:Yl},Qe=(e,t)=>{const n=e.__vccOpts||e;for(const[i,a]of t)n[i]=a;return n},ec={class:"career-page"},tc={class:"career-card"},nc={class:"points-grid"},sc={class:"point-icon"},ic={class:"career-card"},ac={class:"future-grid"},oc={class:"future-icon"},rc={class:"career-card"},lc={class:"steps-list"},cc={class:"step-number"},dc={class:"step-content"},uc={class:"skills-row"},pc={__name:"SdetCareer",setup(e){const t=[{icon:"⚙️",title:"Automation First",desc:"Write robust, maintainable automation code — not just manual test cases."},{icon:"🔗",title:"End-to-End Thinking",desc:"Understand and test across UI, APIs, microservices, and databases."},{icon:"🏗️",title:"Framework Design",desc:"Design scalable test frameworks that teams can build on top of."},{icon:"🛡️",title:"Risk Identification",desc:"Identify critical paths, edge cases, and production risks before release."},{icon:"🤝",title:"Engineering Mindset",desc:"Collaborate with developers, contribute to CI/CD, and treat tests as code."}],n=[{icon:"🔌",title:"API & Microservices Testing",desc:"The shift is clear — UI testing alone is not enough. API and service-level testing is becoming the core skill of modern SDETs."},{icon:"🤖",title:"AI-Assisted Testing",desc:"AI is entering test generation, failure analysis, and intelligent assertions. SDETs who can use AI tools will have a massive productivity advantage."},{icon:"⚡",title:"Speed & Stability Focus",desc:"Flaky tests and slow pipelines are being eliminated. The focus is on fast, deterministic, and intelligent validation."},{icon:"🎭",title:"Playwright & AI Integration",desc:"Playwright's modern architecture and flexible APIs make it highly compatible with AI-assisted workflows — a key reason it is gaining industry momentum."}],i=[{step:"1",title:"Master One Tool First",desc:"Go deep into either Selenium or Playwright. Build real projects, understand the internals, and get confident."},{step:"2",title:"Learn the Other Tool Too",desc:"Once strong in one, pick up the other. Flexibility across both tools makes you valuable in any team."},{step:"3",title:"Build API Automation Skills",desc:"REST Assured, Playwright API, or Axios — API testing is non-negotiable for a modern SDET."},{step:"4",title:"Design a Framework",desc:"Learn Page Object Model, reporting, CI/CD integration, and modular design."},{step:"5",title:"Use AI as a Productivity Tool",desc:"Use GitHub Copilot or ChatGPT to write tests faster, debug smarter, and learn quicker."}],a=[{icon:"🔌",skill:"API Automation"},{icon:"🏗️",skill:"Framework Design"},{icon:"🧠",skill:"Problem Solving"},{icon:"🔍",skill:"System Thinking"},{icon:"🤖",skill:"AI Productivity"},{icon:"🔄",skill:"CI/CD Integration"}];return(o,r)=>(f(),g("div",ec,[r[3]||(r[3]=Ke('<div class="career-hero" data-v-c5ac6478><span class="hero-badge" data-v-c5ac6478>Career Guide</span><h1 data-v-c5ac6478>SDET Career – Present &amp; Future</h1><p data-v-c5ac6478>Understand the role, the industry, and where it&#39;s heading</p></div><div class="career-card" data-v-c5ac6478><div class="card-heading" data-v-c5ac6478><span class="card-icon" data-v-c5ac6478>🧑‍💻</span><h2 data-v-c5ac6478>What is an SDET?</h2></div><p class="card-body" data-v-c5ac6478> A Software Development Engineer in Test (SDET) is not just a tester — they are a software engineer who specialises in quality. An SDET writes automation code, designs test frameworks, validates complex systems, and ensures software is production-ready at scale. They sit at the intersection of development and quality, and are expected to think like a developer while owning the reliability of the product. </p></div>',2)),s("div",tc,[r[0]||(r[0]=s("div",{class:"card-heading"},[s("span",{class:"card-icon"},"🏭"),s("h2",null,"What the Industry Expects")],-1)),s("div",nc,[(f(),g(Q,null,te(t,l=>s("div",{key:l.title,class:"point-item"},[s("span",sc,m(l.icon),1),s("div",null,[s("strong",null,m(l.title),1),s("p",null,m(l.desc),1)])])),64))])]),r[4]||(r[4]=Ke('<div class="career-card" data-v-c5ac6478><div class="card-heading" data-v-c5ac6478><span class="card-icon" data-v-c5ac6478>🛠️</span><h2 data-v-c5ac6478>Current Tools &amp; Industry Trends</h2></div><div class="tools-grid" data-v-c5ac6478><div class="tool-card" style="--tc:#10b981;" data-v-c5ac6478><div class="tool-header" data-v-c5ac6478><span class="tool-icon" data-v-c5ac6478>🌐</span><div data-v-c5ac6478><h3 data-v-c5ac6478>Selenium</h3><span class="tool-tag" style="background:#10b98120;color:#10b981;" data-v-c5ac6478>Enterprise Standard</span></div></div><p class="tool-desc" data-v-c5ac6478> Selenium remains the backbone of enterprise automation. It has a massive ecosystem, supports all major languages, and is deeply integrated into legacy and large-scale systems. If you work in a bank, insurance company, or any large organisation, Selenium is very likely in their stack. </p><div class="tool-strengths" data-v-c5ac6478><span class="strength-chip" style="border-color:#10b981;color:#10b981;" data-v-c5ac6478>✓ Widely adopted in enterprise</span><span class="strength-chip" style="border-color:#10b981;color:#10b981;" data-v-c5ac6478>✓ Multi-language support</span><span class="strength-chip" style="border-color:#10b981;color:#10b981;" data-v-c5ac6478>✓ Huge community</span><span class="strength-chip" style="border-color:#10b981;color:#10b981;" data-v-c5ac6478>✓ Strong legacy integration</span></div></div><div class="tool-card" style="--tc:#6c63ff;" data-v-c5ac6478><div class="tool-header" data-v-c5ac6478><span class="tool-icon" data-v-c5ac6478>🎭</span><div data-v-c5ac6478><h3 data-v-c5ac6478>Playwright</h3><span class="tool-tag" style="background:#6c63ff20;color:#6c63ff;" data-v-c5ac6478>Modern &amp; Fast</span></div></div><p class="tool-desc" data-v-c5ac6478> Playwright is the modern choice. Built by Microsoft, it is faster, more reliable, and aligned with how today&#39;s web works. It handles dynamic content, network interception, and multi-browser testing out of the box. Playwright is where the industry is actively moving. </p><div class="tool-strengths" data-v-c5ac6478><span class="strength-chip" style="border-color:#6c63ff;color:#6c63ff;" data-v-c5ac6478>✓ Faster execution</span><span class="strength-chip" style="border-color:#6c63ff;color:#6c63ff;" data-v-c5ac6478>✓ Auto-wait built-in</span><span class="strength-chip" style="border-color:#6c63ff;color:#6c63ff;" data-v-c5ac6478>✓ Network interception</span><span class="strength-chip" style="border-color:#6c63ff;color:#6c63ff;" data-v-c5ac6478>✓ AI-friendly design</span></div></div></div></div>',1)),s("div",ic,[r[1]||(r[1]=s("div",{class:"card-heading"},[s("span",{class:"card-icon"},"🔮"),s("h2",null,"The Future of SDET")],-1)),s("div",ac,[(f(),g(Q,null,te(n,l=>s("div",{key:l.title,class:"future-item"},[s("span",oc,m(l.icon),1),s("div",null,[s("strong",null,m(l.title),1),s("p",null,m(l.desc),1)])])),64))])]),s("div",rc,[r[2]||(r[2]=s("div",{class:"card-heading"},[s("span",{class:"card-icon"},"🎯"),s("h2",null,"What You Should Do")],-1)),s("div",lc,[(f(),g(Q,null,te(i,l=>s("div",{key:l.step,class:"step-item"},[s("div",cc,m(l.step),1),s("div",dc,[s("strong",null,m(l.title),1),s("p",null,m(l.desc),1)])])),64))]),s("div",uc,[(f(),g(Q,null,te(a,l=>s("span",{key:l.skill,class:"skill-chip"},m(l.icon)+" "+m(l.skill),1)),64))])]),r[5]||(r[5]=s("div",{class:"closing-banner"},[s("span",{class:"closing-icon"},"🚀"),s("p",null,"We cover both Selenium, API Automation and Playwright along with Real Time Interview Questions in this platform to help you build a strong foundation and stay future-ready as an SDET.")],-1))]))}},mc=Qe(pc,[["__scopeId","data-v-c5ac6478"]]),fc={class:"sdet-container"},gc={class:"mobile-header"},hc={class:"mobile-title"},vc={class:"sidebar-header"},yc={class:"sidebar-controls"},bc={key:0,class:"sidebar-nav"},wc=["onClick"],Sc={class:"section-icon"},xc={class:"section-info"},kc={class:"section-title"},Tc={class:"completion-percentage"},Cc={key:0,class:"nav-items"},Ac=["onClick"],Pc={class:"task-number"},_c={class:"task-name"},Ec={class:"category-qa-count"},Ic=["onClick"],Rc=["checked","onClick"],Lc={class:"task-number"},Mc={class:"task-name"},Dc={key:0,class:"completion-icon"},Bc={class:"content"},qc={key:0,class:"task-view"},Oc={class:"task-header"},Fc={class:"breadcrumb"},Nc={class:"qa-meta"},Uc={class:"qa-count"},Wc={class:"qa-list"},jc=["onClick"],Hc={class:"qa-left"},$c=["checked","onClick"],Jc={class:"qa-number"},Gc={class:"qa-question"},zc={class:"qa-right"},Vc={key:0,class:"qa-answer"},Kc={key:1,class:"task-view"},Qc={class:"task-header"},Xc={class:"breadcrumb"},Yc={class:"description-card"},Zc={class:"description-text"},ed={key:0,class:"key-points-card"},td={key:1,class:"exercises-section"},nd=["onClick"],sd={class:"exercise-title"},id={class:"exercise-number"},ad={key:0,class:"exercise-body"},od={class:"scenario"},rd={key:0,class:"steps-section"},ld={key:1,class:"code-section"},cd={class:"code-header"},dd=["onClick"],ud={class:"code-block"},pd={key:2,class:"navigation-buttons"},md=["disabled"],fd=["disabled"],gd={key:2,class:"welcome-screen"},hd={class:"career-dropdown"},vd={key:0,class:"career-dropdown-body"},yd={class:"welcome-cards"},bd=["onClick"],wd={class:"card-icon"},Sd={__name:"SDET",setup(e){function t(S){return Object.values(S)}const n=M(!1),i=Object.values(Zl),a=M(!1),o=M(!1),r=M([]),l=M([]),c=M([]),u=M(null),d=M(null),v=M(""),C=M(null),k=M(null),w=M(new Set),P=M(new Set),J=ye(()=>[{id:"selenium",title:"Selenium Automation",icon:"🌐",tasks:t(Jl),categories:[]},{id:"api",title:"API Automation",icon:"🔌",tasks:t(zl),categories:[]},{id:"playwright",title:"Playwright",icon:"🎭",tasks:t(Gl),categories:[]},{id:"interview",title:"Interview Preparation",icon:"📝",tasks:[],categories:i}]),j=ye(()=>{const S=J.value.find(y=>y.title===v.value);return S?S.tasks:[]}),B=ye(()=>!u.value||!j.value.length?-1:j.value.findIndex(S=>S.title===u.value.title)),Y=ye(()=>B.value>0),H=ye(()=>B.value<j.value.length-1),G=ye(()=>Y.value?j.value[B.value-1]:null),T=ye(()=>H.value?j.value[B.value+1]:null),ee=S=>{if(S.id==="interview"){const y=S.categories.reduce((D,z)=>D+z.questions.length,0),x=S.categories.reduce((D,z)=>D+z.questions.filter(be=>P.value.has(`${z.title}-${be.id}`)).length,0);return y>0?Math.round(x/y*100):0}else{const y=S.tasks.length,x=S.tasks.filter(D=>w.value.has(`${S.id}-${D.title}`)).length;return y>0?Math.round(x/y*100):0}},oe=(S,y)=>w.value.has(`${y}-${S.title}`),X=(S,y)=>P.value.has(`${y}-${S.id}`),ae=(S,y)=>{const x=`${y}-${S.title}`;w.value.has(x)?w.value.delete(x):w.value.add(x)},pe=(S,y)=>{const x=`${y}-${S.id}`;P.value.has(x)?P.value.delete(x):P.value.add(x)};function U(){a.value=!a.value}function le(){o.value=!o.value}function de(){a.value=!1}function _(S){k.value=S,r.value.includes(S)?r.value=r.value.filter(y=>y!==S):r.value=[S]}function b(S){k.value=S,r.value.includes(S)||r.value.push(S)}function F(S,y){u.value=S,d.value=null,v.value=y,l.value=[],de()}function q(S,y){d.value=S,u.value=null,v.value=y,c.value=[],de()}function ue(){Y.value&&F(G.value,v.value)}function Te(){H.value&&F(T.value,v.value)}function Ie(S){const y=l.value.indexOf(S);y===-1?l.value.push(S):l.value.splice(y,1)}function Re(S){const y=c.value.indexOf(S);y===-1?c.value.push(S):c.value.splice(y,1)}async function se(S,y){await navigator.clipboard.writeText(S),C.value=y,setTimeout(()=>C.value=null,2e3)}return(S,y)=>(f(),g("div",fc,[s("div",gc,[s("button",{class:"hamburger",onClick:U},[s("span",{class:V(["hamburger-icon",{open:a.value}])},[...y[2]||(y[2]=[s("span",null,null,-1),s("span",null,null,-1),s("span",null,null,-1)])],2)]),s("h2",hc,m(v.value||"SDET"),1)]),a.value?(f(),g("div",{key:0,class:"overlay",onClick:de})):K("",!0),s("aside",{class:V(["sidebar",{"sidebar-open":a.value,"sidebar-minimized":o.value}])},[s("div",vc,[o.value?K("",!0):(f(),g("h2",{key:0,onClick:y[0]||(y[0]=x=>u.value=null),style:{cursor:"pointer","user-select":"none"},title:"Go to Welcome Screen"}," 🔬 SDET ")),s("div",yc,[s("button",{class:"minimize-btn",onClick:le},m(o.value?"➡️":"⬅️"),1),s("button",{class:"close-btn",onClick:de},"✕")])]),o.value?K("",!0):(f(),g("nav",bc,[(f(!0),g(Q,null,te(J.value,(x,D)=>(f(),g("div",{key:D,class:"nav-section"},[s("div",{class:V(["nav-section-header",{active:k.value===D}]),onClick:z=>_(D)},[s("span",Sc,m(x.icon),1),s("div",xc,[s("span",kc,m(x.title),1),s("span",Tc,m(ee(x))+"%",1)]),s("span",{class:V(["chevron",{rotated:r.value.includes(D)}])},"▾",2)],10,wc),fe($e,{name:"slide"},{default:Ne(()=>[r.value.includes(D)?(f(),g("ul",Cc,[x.id==="interview"?(f(!0),g(Q,{key:0},te(x.categories,(z,be)=>{var Ae;return f(),g("li",{key:be,onClick:Ht=>q(z,x.title),class:V({active:((Ae=d.value)==null?void 0:Ae.title)===z.title})},[s("span",Pc,m(be+1),1),s("span",_c,m(z.title),1),s("span",Ec,m(z.questions.length)+" Qs",1)],10,Ac)}),128)):(f(!0),g(Q,{key:1},te(x.tasks,(z,be)=>{var Ae;return f(),g("li",{key:be,onClick:Ht=>F(z,x.title),class:V({active:((Ae=u.value)==null?void 0:Ae.title)===z.title,completed:oe(z,x.id)})},[s("input",{type:"checkbox",checked:oe(z,x.id),onClick:je(Ht=>ae(z,x.id),["stop"]),class:"completion-checkbox"},null,8,Rc),s("span",Lc,m(be+1),1),s("span",Mc,m(z.title),1),oe(z,x.id)?(f(),g("span",Dc,"✅")):K("",!0)],10,Ic)}),128))])):K("",!0)]),_:2},1024)]))),128))]))],2),s("main",Bc,[d.value?(f(),g("div",qc,[s("div",Oc,[s("h1",null,m(d.value.icon)+" "+m(d.value.title),1),s("span",Fc,"Interview Preparation → "+m(d.value.title),1),s("div",Nc,[s("span",Uc,m(d.value.questions.length)+" Questions",1),y[3]||(y[3]=s("div",{class:"difficulty-legend"},[s("span",{class:"badge easy"},"Easy"),s("span",{class:"badge medium"},"Medium"),s("span",{class:"badge hard"},"Hard")],-1))])]),s("div",Wc,[(f(!0),g(Q,null,te(d.value.questions,(x,D)=>(f(),g("div",{key:x.id,class:V(["qa-card",{completed:X(x,d.value.title)}])},[s("div",{class:"qa-header",onClick:z=>Re(D)},[s("div",Hc,[s("input",{type:"checkbox",checked:X(x,d.value.title),onClick:je(z=>pe(x,d.value.title),["stop"]),class:"completion-checkbox"},null,8,$c),s("span",Jc,m(x.id),1),s("p",Gc,m(x.question),1)]),s("div",zc,[s("span",{class:V(["badge",x.difficulty.toLowerCase()])},m(x.difficulty),3),s("span",{class:V(["chevron",{rotated:c.value.includes(D)}])},"▾",2)])],8,jc),fe($e,{name:"slide"},{default:Ne(()=>[c.value.includes(D)?(f(),g("div",Vc,[s("p",null,m(x.answer),1)])):K("",!0)]),_:2},1024)],2))),128))])])):u.value?(f(),g("div",Kc,[s("div",Qc,[s("h1",null,m(u.value.title),1),s("span",Xc,m(v.value)+" → "+m(u.value.title),1)]),s("div",Yc,[y[4]||(y[4]=s("h2",null,"📘 Overview",-1)),s("pre",Zc,m(u.value.description),1)]),u.value.keyPoints?(f(),g("div",ed,[y[5]||(y[5]=s("h2",null,"🔑 Key Points",-1)),s("ul",null,[(f(!0),g(Q,null,te(u.value.keyPoints,(x,D)=>(f(),g("li",{key:D},m(x),1))),128))])])):K("",!0),u.value.exercises?(f(),g("div",td,[y[8]||(y[8]=s("h2",null,"💻 Exercises",-1)),(f(!0),g(Q,null,te(u.value.exercises,(x,D)=>(f(),g("div",{key:D,class:"exercise-card"},[s("div",{class:"exercise-header",onClick:z=>Ie(D)},[s("div",sd,[s("span",id,m(D+1),1),s("h3",null,m(x.title),1)]),s("span",{class:V(["chevron",{rotated:l.value.includes(D)}])},"▾",2)],8,nd),fe($e,{name:"slide"},{default:Ne(()=>[l.value.includes(D)?(f(),g("div",ad,[s("p",od,m(x.scenario),1),x.steps?(f(),g("div",rd,[y[6]||(y[6]=s("h4",null,"📋 Steps",-1)),s("ol",null,[(f(!0),g(Q,null,te(x.steps,(z,be)=>(f(),g("li",{key:be},m(z),1))),128))])])):K("",!0),x.code?(f(),g("div",ld,[s("div",cd,[y[7]||(y[7]=s("span",null,"💻 Code",-1)),s("button",{onClick:z=>se(x.code,D),class:"copy-btn"},m(C.value===D?"✅ Copied!":"📋 Copy"),9,dd)]),s("pre",ud,[s("code",null,m(x.code),1)])])):K("",!0)])):K("",!0)]),_:2},1024)]))),128))])):K("",!0),u.value&&j.value.length>1?(f(),g("div",pd,[s("button",{onClick:ue,disabled:!Y.value,class:"nav-btn prev-btn"},"⬅️ Previous",8,md),s("button",{onClick:Te,disabled:!H.value,class:"nav-btn next-btn"},"Next ➡️",8,fd)])):K("",!0)])):(f(),g("div",gd,[y[10]||(y[10]=s("div",{class:"welcome-icon"},"🚀",-1)),y[11]||(y[11]=s("h1",null,"Welcome to SDET",-1)),y[12]||(y[12]=s("p",null,"Select a topic from the sidebar to get started",-1)),s("div",hd,[s("div",{class:"career-dropdown-header",onClick:y[1]||(y[1]=x=>n.value=!n.value)},[y[9]||(y[9]=s("div",{class:"career-header-left"},[s("span",null,"📌"),s("span",null,"SDET Career – Present & Future")],-1)),s("span",{class:V(["chevron",{rotated:n.value}])},"▾",2)]),fe($e,{name:"slide"},{default:Ne(()=>[n.value?(f(),g("div",vd,[fe(mc)])):K("",!0)]),_:1})]),s("div",yd,[(f(!0),g(Q,null,te(J.value,(x,D)=>(f(),g("div",{key:D,class:"welcome-card",onClick:z=>b(D)},[s("span",wd,m(x.icon),1),s("h3",null,m(x.title),1),s("p",null,m(x.id==="interview"?x.categories.length+" categories":x.tasks.length+" topics"),1)],8,bd))),128))])]))])]))}},xd=Qe(Sd,[["__scopeId","data-v-e4360504"]]),kd={"Task 1: Introduction to Java":{title:"Introduction to Java",description:`Java is one of the most popular, versatile, and powerful programming languages in the world. Created by James Gosling at Sun Microsystems in 1995, Java follows the principle of 'Write Once, Run Anywhere' (WORA).

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
*/`}]}},Td={title:"Core Java Concepts",icon:"☕",questions:[{id:1,question:"What is the difference between JDK, JRE, and JVM?",answer:"JVM (Java Virtual Machine): Executes Java bytecode, provides platform independence. JRE (Java Runtime Environment): JVM + core libraries, needed to run Java programs. JDK (Java Development Kit): JRE + development tools (compiler, debugger), needed to develop Java programs. JDK contains JRE which contains JVM.",difficulty:"Easy"},{id:2,question:"What are the four pillars of OOP?",answer:"Encapsulation: Bundling data and methods, hiding implementation using access modifiers. Inheritance: Child class inherits from parent using 'extends'. Polymorphism: Same interface, different implementations - overloading (compile-time) and overriding (runtime). Abstraction: Hiding complexity using abstract classes/interfaces, showing only essential features.",difficulty:"Easy"},{id:3,question:"What is the difference between == and .equals()?",answer:"== compares references (memory addresses) for objects, actual values for primitives. .equals() compares content/values and can be overridden. For String: 'hello' == 'hello' may be true (string pool), but new String('hello') == new String('hello') is false. Always use .equals() for object content comparison.",difficulty:"Easy"},{id:4,question:"What is the difference between String, StringBuilder, and StringBuffer?",answer:"String: Immutable, new object created on modification, thread-safe due to immutability. StringBuilder: Mutable, single-threaded use, faster. StringBuffer: Mutable, thread-safe (synchronized), slower than StringBuilder. Use String for few modifications, StringBuilder for many modifications, StringBuffer in multi-threaded scenarios.",difficulty:"Easy"},{id:5,question:"Explain method overloading vs method overriding.",answer:"Overloading (Compile-time polymorphism): Same method name, different parameters (number/type/order), in same class. Overriding (Runtime polymorphism): Same method name and signature, in child class, replaces parent implementation. Overloading resolved at compile time, overriding at runtime. @Override annotation helps catch errors.",difficulty:"Easy"},{id:6,question:"What is the difference between abstract class and interface?",answer:"Abstract class: Can have abstract and concrete methods, constructors, instance variables, single inheritance only. Interface: All methods public abstract (before Java 8), Java 8+ allows default/static methods, multiple implementation allowed. Use abstract class for IS-A with shared code, interface for capabilities/contracts.",difficulty:"Medium"},{id:7,question:"What is the difference between final, finally, and finalize?",answer:"final: Keyword - final variable (constant), final method (cannot override), final class (cannot extend). finally: Block in try-catch that always executes for cleanup. finalize(): Method called by GC before object is garbage collected (deprecated in Java 9). Use try-with-resources instead of finalize.",difficulty:"Easy"},{id:8,question:"Explain access modifiers in Java.",answer:"private: Same class only. default (no modifier): Same package only. protected: Same package + subclasses in other packages. public: Accessible everywhere. For fields, prefer private with getters/setters. Classes can only be public or default.",difficulty:"Easy"}]},Cd={title:"Collections Framework",icon:"📚",questions:[{id:1,question:"What is the difference between ArrayList and LinkedList?",answer:"ArrayList: Dynamic array, O(1) random access by index, O(n) insertion/deletion in middle, better for frequent reads. LinkedList: Doubly linked list, O(n) access by index, O(1) insertion/deletion at ends, implements Deque, better for frequent modifications. ArrayList uses less memory overall.",difficulty:"Medium"},{id:2,question:"What is the difference between HashMap, LinkedHashMap, and TreeMap?",answer:"HashMap: Unordered, O(1) get/put, allows one null key. LinkedHashMap: Maintains insertion order, slightly slower due to linked list. TreeMap: Sorted by keys (natural/Comparator), O(log n) operations, no null keys. Use HashMap for performance, LinkedHashMap for order, TreeMap for sorted data.",difficulty:"Medium"},{id:3,question:"What is the difference between HashSet and TreeSet?",answer:"HashSet: Unordered, O(1) operations, allows one null, backed by HashMap. TreeSet: Sorted order, O(log n) operations, no nulls allowed, backed by TreeMap. Use HashSet for fast unique checks, TreeSet when you need sorted unique elements.",difficulty:"Medium"},{id:4,question:"How does HashMap work internally?",answer:"HashMap uses array of buckets. Key's hashCode() determines bucket index. Collisions handled by linked list (Java 7) or tree (Java 8+ when >8 entries). On get: hash key → find bucket → traverse list/tree using equals(). Load factor 0.75 triggers resize. Java 8+ converts to red-black tree for O(log n) worst case.",difficulty:"Hard"},{id:5,question:"What is the difference between fail-fast and fail-safe iterators?",answer:"Fail-fast: Throws ConcurrentModificationException if collection modified during iteration (ArrayList, HashMap). Uses modCount internally. Fail-safe: Works on clone, doesn't throw exception (ConcurrentHashMap, CopyOnWriteArrayList). Fail-safe may not reflect latest changes. Use Iterator.remove() for safe removal during iteration.",difficulty:"Hard"},{id:6,question:"When should you override equals() and hashCode()?",answer:"Override both when using objects as Map keys or in Sets. Contract: Equal objects MUST have same hashCode. If only equals() overridden, HashMap won't find objects. Use same fields in both methods. IDE can generate these. Objects.equals() and Objects.hash() help with null handling.",difficulty:"Medium"}]},Ad={title:"Exception Handling",icon:"⚠️",questions:[{id:1,question:"What is the difference between checked and unchecked exceptions?",answer:"Checked exceptions: Must be caught or declared (throws), checked at compile-time. Examples: IOException, SQLException. Unchecked exceptions (RuntimeException): Don't require handling, occur at runtime. Examples: NullPointerException, ArrayIndexOutOfBoundsException. Error: Serious system problems, shouldn't be caught (OutOfMemoryError).",difficulty:"Easy"},{id:2,question:"What is try-with-resources?",answer:"Java 7+ feature that automatically closes resources implementing AutoCloseable. Syntax: try (Resource r = new Resource()) { }. Resources closed in reverse order of creation. Cleaner than try-finally, handles multiple resources. Suppressed exceptions accessible via getSuppressed().",difficulty:"Medium"},{id:3,question:"Can we have try without catch?",answer:"Yes, with try-finally (for cleanup) or try-with-resources (auto-close). try-finally: finally always executes. try-with-resources: resources auto-closed. Cannot have try alone. Example: try (var reader = new FileReader(file)) { } - no catch needed if exception is declared in method signature.",difficulty:"Easy"},{id:4,question:"What happens if exception is thrown in finally block?",answer:"The finally exception masks the original exception from try/catch block. The original exception is lost unless you handle it explicitly. In Java 7+, use try-with-resources which handles this via suppressed exceptions. Best practice: Avoid throwing exceptions in finally, use try-finally for cleanup only.",difficulty:"Hard"}]},Pd={title:"Multithreading & Concurrency",icon:"🔄",questions:[{id:1,question:"What is the difference between Thread and Runnable?",answer:"Thread: Class to extend, can only extend one class (no multiple inheritance), has lifecycle methods. Runnable: Interface to implement, allows extending other classes, separates task from thread. Prefer Runnable for flexibility. Java 5+ prefer ExecutorService over manual thread creation.",difficulty:"Easy"},{id:2,question:"What is the difference between synchronized method and synchronized block?",answer:"Synchronized method: Locks entire method on 'this' object (or class for static). Synchronized block: Locks only specific section on specified object, more granular control. Block preferred for performance - minimize locked code. Both provide mutual exclusion and visibility guarantees.",difficulty:"Medium"},{id:3,question:"What is volatile keyword?",answer:"volatile ensures visibility: reads/writes go directly to main memory, not CPU cache. Prevents caching of variable value. Does NOT provide atomicity - i++ on volatile is still not thread-safe. Use for flags, single writer multiple reader scenarios. For atomicity, use Atomic classes or synchronized.",difficulty:"Medium"},{id:4,question:"What is ThreadLocal?",answer:"ThreadLocal provides thread-local variables - each thread has its own independent copy. Common uses: storing user context, database connections per thread, SimpleDateFormat (not thread-safe). Usage: ThreadLocal<T> tl = new ThreadLocal<>(); tl.set(value); tl.get(); Always call remove() to prevent memory leaks.",difficulty:"Hard"},{id:5,question:"What is the difference between wait() and sleep()?",answer:"wait(): Object method, releases lock, must be in synchronized block, woken by notify()/notifyAll(). sleep(): Thread method, doesn't release lock, pauses current thread for specified time. wait() for inter-thread communication, sleep() for pausing execution. Both throw InterruptedException.",difficulty:"Medium"},{id:6,question:"What is deadlock and how to prevent it?",answer:"Deadlock: Two+ threads waiting for each other's locks forever. Conditions: mutual exclusion, hold and wait, no preemption, circular wait. Prevention: Lock ordering (always acquire locks in same order), lock timeout (tryLock with timeout), avoid nested locks, use higher-level concurrency utilities.",difficulty:"Hard"}]},_d={title:"Java 8+ Features",icon:"✨",questions:[{id:1,question:"What is a lambda expression?",answer:"Lambda is an anonymous function implementing a functional interface. Syntax: (params) -> expression or (params) -> { statements }. Examples: () -> 42, x -> x * 2, (a, b) -> a + b. Enables functional programming, used with Stream API, reduces boilerplate vs anonymous classes.",difficulty:"Easy"},{id:2,question:"What is a functional interface?",answer:"Interface with exactly one abstract method, used as lambda target. @FunctionalInterface annotation (optional but recommended). Built-in: Predicate<T> (test), Function<T,R> (apply), Consumer<T> (accept), Supplier<T> (get). Can have default and static methods without affecting functional interface status.",difficulty:"Easy"},{id:3,question:"What is the difference between map() and flatMap()?",answer:"map(): Transforms each element, one-to-one mapping. flatMap(): Transforms and flattens, one-to-many mapping. Use flatMap when mapper returns Stream/Collection. Example: List of Lists → flatMap flattens to single List. map would create Stream of Streams instead.",difficulty:"Medium"},{id:4,question:"What is Optional and why use it?",answer:"Optional<T> is a container that may or may not contain a non-null value. Avoids NullPointerException, makes null handling explicit. Create: Optional.of(val), Optional.ofNullable(val), Optional.empty(). Use: isPresent(), get(), orElse(), orElseGet(), map(), filter(). Don't use for fields or parameters, mainly for return types.",difficulty:"Medium"},{id:5,question:"What is the difference between intermediate and terminal operations in Stream?",answer:"Intermediate: Return Stream, lazy (not executed until terminal), chainable. Examples: filter(), map(), sorted(), distinct(). Terminal: Return non-Stream result, trigger execution of pipeline. Examples: collect(), forEach(), count(), reduce(). Stream can only be consumed once.",difficulty:"Medium"},{id:6,question:"What are default methods in interfaces?",answer:"Java 8 allows method implementations in interfaces using 'default' keyword. Enables adding methods to interfaces without breaking existing implementations. Used for backward compatibility (Collection.stream()). If class implements multiple interfaces with same default method, must override it.",difficulty:"Medium"}]},Ed={title:"Spring Boot",icon:"🌱",questions:[{id:1,question:"What is Spring Boot and its advantages?",answer:"Spring Boot is a framework for building production-ready Spring applications quickly. Advantages: Auto-configuration, embedded servers (Tomcat), starter dependencies, no XML config needed, production-ready features (Actuator), rapid development. @SpringBootApplication combines @Configuration, @EnableAutoConfiguration, @ComponentScan.",difficulty:"Easy"},{id:2,question:"What is dependency injection and IoC?",answer:"IoC (Inversion of Control): Framework controls object lifecycle, not the code. DI (Dependency Injection): Dependencies provided to objects rather than created by them. Types: Constructor injection (recommended), setter injection, field injection (@Autowired). Benefits: loose coupling, testability, flexibility.",difficulty:"Easy"},{id:3,question:"What is the difference between @Component, @Service, @Repository, @Controller?",answer:"@Component: Generic stereotype. @Service: Business logic layer, semantic clarity. @Repository: Data access layer, enables exception translation. @Controller/@RestController: Web layer, handles HTTP requests. All are @Component specializations, detected by component scanning. Use appropriate one for each layer.",difficulty:"Easy"},{id:4,question:"What is the difference between @Autowired constructor vs field injection?",answer:"Constructor injection: Dependencies explicit, immutable (final), easier testing, fails fast if dependency missing. Field injection: Less code, but hides dependencies, harder to test, allows null. Constructor injection recommended by Spring team. @Autowired optional on single constructor (Spring 4.3+).",difficulty:"Medium"},{id:5,question:"What are Spring Boot profiles?",answer:"Profiles allow different configurations for different environments (dev, test, prod). Files: application-dev.properties, application-prod.properties. Activate: spring.profiles.active=dev or -Dspring.profiles.active=dev. @Profile annotation on beans. Enables environment-specific behavior without code changes.",difficulty:"Medium"},{id:6,question:"What is Spring Data JPA?",answer:"Spring Data JPA simplifies data access by auto-implementing repository interfaces. Extend JpaRepository<Entity, ID> to get CRUD operations free. Method naming conventions: findByName(), findByAgeGreaterThan(). @Query for custom JPQL/SQL. Reduces boilerplate significantly compared to raw JPA/Hibernate.",difficulty:"Medium"}]},Id={title:"Design Patterns",icon:"🏗️",questions:[{id:1,question:"What is Singleton pattern and how to implement it?",answer:"Singleton ensures one instance per JVM. Thread-safe implementation: private static volatile instance, private constructor, double-checked locking in getInstance(). Or use enum: enum Singleton { INSTANCE }. Enum handles serialization and reflection attacks. Used for configuration, connection pools, logging.",difficulty:"Medium"},{id:2,question:"What is Factory pattern?",answer:"Factory creates objects without exposing instantiation logic. Client uses factory method instead of 'new'. Types: Simple Factory, Factory Method (subclasses decide), Abstract Factory (families of objects). Benefits: loose coupling, single responsibility, easy to add new types. Used in JDBC, Spring BeanFactory.",difficulty:"Medium"},{id:3,question:"What is Builder pattern?",answer:"Builder constructs complex objects step by step. Separates construction from representation. Pattern: static inner Builder class, fluent API with chained methods, build() returns product. Benefits: handles many parameters elegantly, immutable objects possible. Example: StringBuilder, Stream API, Lombok @Builder.",difficulty:"Medium"},{id:4,question:"What is Strategy pattern?",answer:"Strategy defines family of algorithms, encapsulates each, makes them interchangeable. Context holds reference to strategy interface, clients can switch algorithms at runtime. Example: Comparator (different sorting strategies), payment methods, compression algorithms. Follows Open/Closed principle.",difficulty:"Medium"}]},Rd={coreJava:Td,collections:Cd,exceptions:Ad,multithreading:Pd,java8Features:_d,springBoot:Ed,designPatterns:Id},Ld={class:"sdet-container"},Md={class:"mobile-header"},Dd={class:"mobile-title"},Bd={class:"sidebar-header"},qd={class:"sidebar-controls"},Od={key:0,class:"sidebar-nav"},Fd=["onClick"],Nd={class:"section-icon"},Ud={class:"section-info"},Wd={class:"section-title"},jd={class:"completion-percentage"},Hd={key:0,class:"nav-items"},$d=["onClick"],Jd={class:"task-number"},Gd={class:"task-name"},zd={class:"category-qa-count"},Vd=["onClick"],Kd=["checked","onClick"],Qd={class:"task-number"},Xd={class:"task-name"},Yd={key:0,class:"completion-icon"},Zd={class:"content"},eu={key:0,class:"task-view"},tu={class:"task-header"},nu={class:"breadcrumb"},su={class:"qa-meta"},iu={class:"qa-count"},au={class:"qa-list"},ou=["onClick"],ru={class:"qa-left"},lu=["checked","onClick"],cu={class:"qa-number"},du={class:"qa-question"},uu={class:"qa-right"},pu={key:0,class:"qa-answer"},mu={key:1,class:"task-view"},fu={class:"task-header"},gu={class:"breadcrumb"},hu={class:"description-card"},vu={class:"description-text"},yu={key:0,class:"key-points-card"},bu={key:1,class:"exercises-section"},wu=["onClick"],Su={class:"exercise-title"},xu={class:"exercise-number"},ku={key:0,class:"exercise-body"},Tu={class:"scenario"},Cu={key:0,class:"steps-section"},Au={key:1,class:"code-section"},Pu={class:"code-header"},_u=["onClick"],Eu={class:"code-block"},Iu={key:2,class:"navigation-buttons"},Ru=["disabled"],Lu=["disabled"],Mu={key:2,class:"welcome-screen"},Du={class:"welcome-cards"},Bu=["onClick"],qu={class:"card-icon"},Ou={__name:"Java",setup(e){function t(S){return Object.values(S)}const n=Object.values(Rd),i=M(!1),a=M(!1),o=M([]),r=M([]),l=M([]),c=M(null),u=M(null),d=M(""),v=M(null),C=M(null),k=M(new Set),w=M(new Set),P=t(kd),J=ye(()=>[{id:"java-basics",title:"Java Basics",icon:"📚",tasks:P.slice(0,3),categories:[]},{id:"oop",title:"OOP Concepts",icon:"🎯",tasks:P.slice(3,5),categories:[]},{id:"collections",title:"Collections & Exceptions",icon:"📦",tasks:P.slice(5,7),categories:[]},{id:"advanced",title:"Advanced Java",icon:"⚡",tasks:P.slice(7,9),categories:[]},{id:"spring",title:"Spring Boot",icon:"🌱",tasks:P.slice(9,10),categories:[]},{id:"interview",title:"Interview Preparation",icon:"📝",tasks:[],categories:n}]),j=ye(()=>{const S=J.value.find(y=>y.title===d.value);return S?S.tasks:[]}),B=ye(()=>!c.value||!j.value.length?-1:j.value.findIndex(S=>S.title===c.value.title)),Y=ye(()=>B.value>0),H=ye(()=>B.value<j.value.length-1),G=ye(()=>Y.value?j.value[B.value-1]:null),T=ye(()=>H.value?j.value[B.value+1]:null),ee=S=>{if(S.id==="interview"){const y=S.categories.reduce((D,z)=>D+z.questions.length,0),x=S.categories.reduce((D,z)=>D+z.questions.filter(be=>w.value.has(`${z.title}-${be.id}`)).length,0);return y>0?Math.round(x/y*100):0}else{const y=S.tasks.length,x=S.tasks.filter(D=>k.value.has(`${S.id}-${D.title}`)).length;return y>0?Math.round(x/y*100):0}},oe=(S,y)=>k.value.has(`${y}-${S.title}`),X=(S,y)=>w.value.has(`${y}-${S.id}`),ae=(S,y)=>{const x=`${y}-${S.title}`;k.value.has(x)?k.value.delete(x):k.value.add(x)},pe=(S,y)=>{const x=`${y}-${S.id}`;w.value.has(x)?w.value.delete(x):w.value.add(x)};function U(){i.value=!i.value}function le(){a.value=!a.value}function de(){i.value=!1}function _(S){C.value=S,o.value.includes(S)?o.value=o.value.filter(y=>y!==S):o.value=[S]}function b(S){C.value=S,o.value.includes(S)||o.value.push(S)}function F(S,y){c.value=S,u.value=null,d.value=y,r.value=[],de()}function q(S,y){u.value=S,c.value=null,d.value=y,l.value=[],de()}function ue(){Y.value&&F(G.value,d.value)}function Te(){H.value&&F(T.value,d.value)}function Ie(S){const y=r.value.indexOf(S);y===-1?r.value.push(S):r.value.splice(y,1)}function Re(S){const y=l.value.indexOf(S);y===-1?l.value.push(S):l.value.splice(y,1)}async function se(S,y){await navigator.clipboard.writeText(S),v.value=y,setTimeout(()=>v.value=null,2e3)}return(S,y)=>(f(),g("div",Ld,[s("div",Md,[s("button",{class:"hamburger",onClick:U},[s("span",{class:V(["hamburger-icon",{open:i.value}])},[...y[1]||(y[1]=[s("span",null,null,-1),s("span",null,null,-1),s("span",null,null,-1)])],2)]),s("h2",Dd,m(d.value||"Java Development"),1)]),i.value?(f(),g("div",{key:0,class:"overlay",onClick:de})):K("",!0),s("aside",{class:V(["sidebar",{"sidebar-open":i.value,"sidebar-minimized":a.value}])},[s("div",Bd,[a.value?K("",!0):(f(),g("h2",{key:0,onClick:y[0]||(y[0]=x=>{c.value=null,u.value=null}),style:{cursor:"pointer","user-select":"none"},title:"Go to Welcome Screen"}," ☕ Java ")),s("div",qd,[s("button",{class:"minimize-btn",onClick:le},m(a.value?"➡️":"⬅️"),1),s("button",{class:"close-btn",onClick:de},"✕")])]),a.value?K("",!0):(f(),g("nav",Od,[(f(!0),g(Q,null,te(J.value,(x,D)=>(f(),g("div",{key:D,class:"nav-section"},[s("div",{class:V(["nav-section-header",{active:C.value===D}]),onClick:z=>_(D)},[s("span",Nd,m(x.icon),1),s("div",Ud,[s("span",Wd,m(x.title),1),s("span",jd,m(ee(x))+"%",1)]),s("span",{class:V(["chevron",{rotated:o.value.includes(D)}])},"▾",2)],10,Fd),fe($e,{name:"slide"},{default:Ne(()=>[o.value.includes(D)?(f(),g("ul",Hd,[x.id==="interview"?(f(!0),g(Q,{key:0},te(x.categories,(z,be)=>{var Ae;return f(),g("li",{key:be,onClick:Ht=>q(z,x.title),class:V({active:((Ae=u.value)==null?void 0:Ae.title)===z.title})},[s("span",Jd,m(be+1),1),s("span",Gd,m(z.title),1),s("span",zd,m(z.questions.length)+" Qs",1)],10,$d)}),128)):(f(!0),g(Q,{key:1},te(x.tasks,(z,be)=>{var Ae;return f(),g("li",{key:be,onClick:Ht=>F(z,x.title),class:V({active:((Ae=c.value)==null?void 0:Ae.title)===z.title,completed:oe(z,x.id)})},[s("input",{type:"checkbox",checked:oe(z,x.id),onClick:je(Ht=>ae(z,x.id),["stop"]),class:"completion-checkbox"},null,8,Kd),s("span",Qd,m(be+1),1),s("span",Xd,m(z.title),1),oe(z,x.id)?(f(),g("span",Yd,"✅")):K("",!0)],10,Vd)}),128))])):K("",!0)]),_:2},1024)]))),128))]))],2),s("main",Zd,[u.value?(f(),g("div",eu,[s("div",tu,[s("h1",null,m(u.value.icon)+" "+m(u.value.title),1),s("span",nu,"Interview Preparation → "+m(u.value.title),1),s("div",su,[s("span",iu,m(u.value.questions.length)+" Questions",1),y[2]||(y[2]=s("div",{class:"difficulty-legend"},[s("span",{class:"badge easy"},"Easy"),s("span",{class:"badge medium"},"Medium"),s("span",{class:"badge hard"},"Hard")],-1))])]),s("div",au,[(f(!0),g(Q,null,te(u.value.questions,(x,D)=>(f(),g("div",{key:x.id,class:V(["qa-card",{completed:X(x,u.value.title)}])},[s("div",{class:"qa-header",onClick:z=>Re(D)},[s("div",ru,[s("input",{type:"checkbox",checked:X(x,u.value.title),onClick:je(z=>pe(x,u.value.title),["stop"]),class:"completion-checkbox"},null,8,lu),s("span",cu,m(x.id),1),s("p",du,m(x.question),1)]),s("div",uu,[s("span",{class:V(["badge",x.difficulty.toLowerCase()])},m(x.difficulty),3),s("span",{class:V(["chevron",{rotated:l.value.includes(D)}])},"▾",2)])],8,ou),fe($e,{name:"slide"},{default:Ne(()=>[l.value.includes(D)?(f(),g("div",pu,[s("p",null,m(x.answer),1)])):K("",!0)]),_:2},1024)],2))),128))])])):c.value?(f(),g("div",mu,[s("div",fu,[s("h1",null,m(c.value.title),1),s("span",gu,m(d.value)+" → "+m(c.value.title),1)]),s("div",hu,[y[3]||(y[3]=s("h2",null,"📘 Overview",-1)),s("pre",vu,m(c.value.description),1)]),c.value.keyPoints?(f(),g("div",yu,[y[4]||(y[4]=s("h2",null,"🔑 Key Points",-1)),s("ul",null,[(f(!0),g(Q,null,te(c.value.keyPoints,(x,D)=>(f(),g("li",{key:D},m(x),1))),128))])])):K("",!0),c.value.exercises?(f(),g("div",bu,[y[7]||(y[7]=s("h2",null,"💻 Exercises",-1)),(f(!0),g(Q,null,te(c.value.exercises,(x,D)=>(f(),g("div",{key:D,class:"exercise-card"},[s("div",{class:"exercise-header",onClick:z=>Ie(D)},[s("div",Su,[s("span",xu,m(D+1),1),s("h3",null,m(x.title),1)]),s("span",{class:V(["chevron",{rotated:r.value.includes(D)}])},"▾",2)],8,wu),fe($e,{name:"slide"},{default:Ne(()=>[r.value.includes(D)?(f(),g("div",ku,[s("p",Tu,m(x.scenario),1),x.steps?(f(),g("div",Cu,[y[5]||(y[5]=s("h4",null,"📋 Steps",-1)),s("ol",null,[(f(!0),g(Q,null,te(x.steps,(z,be)=>(f(),g("li",{key:be},m(z),1))),128))])])):K("",!0),x.code?(f(),g("div",Au,[s("div",Pu,[y[6]||(y[6]=s("span",null,"💻 Code",-1)),s("button",{onClick:z=>se(x.code,D),class:"copy-btn"},m(v.value===D?"✅ Copied!":"📋 Copy"),9,_u)]),s("pre",Eu,[s("code",null,m(x.code),1)])])):K("",!0)])):K("",!0)]),_:2},1024)]))),128))])):K("",!0),c.value&&j.value.length>1?(f(),g("div",Iu,[s("button",{onClick:ue,disabled:!Y.value,class:"nav-btn prev-btn"},"⬅️ Previous",8,Ru),s("button",{onClick:Te,disabled:!H.value,class:"nav-btn next-btn"},"Next ➡️",8,Lu)])):K("",!0)])):(f(),g("div",Mu,[y[8]||(y[8]=s("div",{class:"welcome-icon"},"☕",-1)),y[9]||(y[9]=s("h1",null,"Welcome to Java Development",-1)),y[10]||(y[10]=s("p",null,"Master Java from Fundamentals to Enterprise Applications",-1)),s("div",Du,[(f(!0),g(Q,null,te(J.value,(x,D)=>(f(),g("div",{key:D,class:"welcome-card",onClick:z=>b(D)},[s("span",qu,m(x.icon),1),s("h3",null,m(x.title),1),s("p",null,m(x.id==="interview"?x.categories.length+" categories":x.tasks.length+" topics"),1)],8,Bu))),128))])]))])]))}},Fu=Qe(Ou,[["__scopeId","data-v-bb0b440c"]]),Ln={"Task 1: Introduction to AI Development":{title:"Introduction to AI Development",description:`Artificial Intelligence (AI) Development is the process of creating systems that can perform tasks that typically require human intelligence. As an AI Developer, you'll work with machine learning models, neural networks, and modern AI tools.

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
# kubectl apply -f kubernetes/`}]}},Nu={title:"Machine Learning Basics",icon:"🤖",questions:[{id:1,question:"What is the difference between supervised and unsupervised learning?",answer:"Supervised learning uses labeled data where the algorithm learns to map inputs to known outputs (e.g., classification, regression). Unsupervised learning works with unlabeled data to find patterns or structure (e.g., clustering, dimensionality reduction). Supervised needs a 'teacher' (labels), unsupervised discovers hidden patterns.",difficulty:"Easy"},{id:2,question:"What is overfitting and how do you prevent it?",answer:"Overfitting occurs when a model learns training data too well, including noise, and performs poorly on new data. Prevention methods: 1) Cross-validation, 2) Regularization (L1/L2), 3) Dropout in neural networks, 4) Early stopping, 5) More training data, 6) Feature selection, 7) Ensemble methods, 8) Data augmentation.",difficulty:"Easy"},{id:3,question:"Explain bias-variance tradeoff.",answer:"Bias is error from oversimplified models (underfitting) - model can't capture patterns. Variance is error from over-complex models (overfitting) - model is too sensitive to training data. The tradeoff: reducing bias increases variance and vice versa. Goal is finding the sweet spot that minimizes total error (bias² + variance + irreducible error).",difficulty:"Medium"},{id:4,question:"What is gradient descent and how does it work?",answer:"Gradient descent is an optimization algorithm to minimize a loss function by iteratively moving in the direction of steepest descent (negative gradient). Steps: 1) Calculate gradient of loss w.r.t. parameters, 2) Update parameters: θ = θ - α * ∇L(θ), where α is learning rate. Variants: Batch GD, Stochastic GD (SGD), Mini-batch GD, Adam, RMSprop.",difficulty:"Medium"},{id:5,question:"What is cross-validation and why is it important?",answer:"Cross-validation is a technique to evaluate model performance by splitting data into multiple folds. K-Fold CV: split data into K parts, train on K-1, test on 1, rotate K times, average results. Importance: provides more reliable performance estimate than single train-test split, helps detect overfitting, makes better use of limited data.",difficulty:"Easy"},{id:6,question:"What is the difference between L1 and L2 regularization?",answer:"L1 (Lasso): adds |weights| to loss, produces sparse solutions (some weights become exactly 0), good for feature selection. L2 (Ridge): adds weights² to loss, shrinks weights but rarely makes them exactly 0, handles correlated features better. L1 gives simpler models, L2 gives smaller weights. Elastic Net combines both.",difficulty:"Medium"},{id:7,question:"Explain precision, recall, and F1 score.",answer:"Precision = TP/(TP+FP): of all predicted positives, how many are actually positive. Recall = TP/(TP+FN): of all actual positives, how many did we predict correctly. F1 = 2*(Precision*Recall)/(Precision+Recall): harmonic mean, balances both. Use precision when FP is costly (spam detection), recall when FN is costly (disease detection).",difficulty:"Easy"},{id:8,question:"What is the vanishing gradient problem?",answer:"In deep networks, gradients can become extremely small as they backpropagate through many layers (especially with sigmoid/tanh activations), causing early layers to learn very slowly or not at all. Solutions: ReLU activation, proper weight initialization (Xavier, He), batch normalization, residual connections (skip connections), LSTM/GRU for RNNs.",difficulty:"Hard"}]},Uu={title:"Deep Learning",icon:"🧠",questions:[{id:1,question:"What is a neural network and how does it learn?",answer:"A neural network is a computational model inspired by biological neurons. It consists of layers of interconnected nodes (neurons) that apply weighted sums and activation functions. Learning happens through backpropagation: forward pass computes output, loss is calculated, gradients flow backward, weights are updated via gradient descent to minimize loss.",difficulty:"Easy"},{id:2,question:"Explain the difference between CNN and RNN.",answer:"CNN (Convolutional Neural Network): designed for spatial data (images), uses convolution operations to detect local patterns, has translation invariance, good for image classification/detection. RNN (Recurrent Neural Network): designed for sequential data, has memory through hidden states, processes inputs one at a time while maintaining context, good for text/time series.",difficulty:"Medium"},{id:3,question:"What is the Transformer architecture?",answer:"Transformers use self-attention mechanism to process all inputs in parallel (unlike RNNs). Key components: 1) Multi-head self-attention: relates different positions in sequence, 2) Positional encoding: adds sequence order information, 3) Feed-forward layers, 4) Layer normalization. Enables long-range dependencies and parallel processing. Basis for GPT, BERT, LLaMA.",difficulty:"Hard"},{id:4,question:"What is attention mechanism and why is it important?",answer:"Attention allows models to focus on relevant parts of input when producing output. Self-attention computes attention scores: Attention(Q,K,V) = softmax(QK^T/√d)V. Importance: handles long sequences better than RNNs, captures dependencies regardless of distance, parallelizable, interpretable (attention weights show what model focuses on).",difficulty:"Hard"},{id:5,question:"What is batch normalization and why use it?",answer:"Batch normalization normalizes layer inputs across the batch dimension: normalize to zero mean/unit variance, then scale and shift with learned parameters. Benefits: 1) Faster training (allows higher learning rates), 2) Regularization effect (reduces overfitting), 3) Reduces internal covariate shift, 4) Makes networks more stable, 5) Reduces sensitivity to initialization.",difficulty:"Medium"},{id:6,question:"Explain transfer learning and when to use it.",answer:"Transfer learning uses knowledge from a model trained on one task for a different but related task. Process: take pre-trained model (e.g., ImageNet-trained CNN), freeze early layers (generic features), fine-tune later layers on your data. Use when: limited training data, similar domain to pre-trained model, need faster training. Common: BERT for NLP, ResNet for vision.",difficulty:"Medium"},{id:7,question:"What is dropout and how does it work?",answer:"Dropout is a regularization technique that randomly sets a fraction of neurons to zero during training (typically 20-50%). During inference, all neurons are used but outputs are scaled. Why it works: prevents co-adaptation of neurons, forces network to learn redundant representations, acts like ensemble of sub-networks. Apply to fully connected layers, less common in conv layers.",difficulty:"Easy"},{id:8,question:"What is the difference between embedding and one-hot encoding?",answer:"One-hot encoding: sparse vector with 1 at index, 0 elsewhere. High-dimensional (vocab size), no semantic meaning, categories are equidistant. Embedding: dense learned vector representation. Low-dimensional (50-300d typical), captures semantic relationships (similar items close together), parameters learned during training. Use embeddings for high-cardinality features and NLP.",difficulty:"Medium"}]},Wu={title:"Large Language Models",icon:"💬",questions:[{id:1,question:"What are Large Language Models (LLMs)?",answer:"LLMs are neural networks (typically Transformers) trained on massive text data to understand and generate human language. Key characteristics: billions of parameters, trained on internet-scale data, emergent capabilities at scale (reasoning, few-shot learning). Examples: GPT-4, Claude, LLaMA, Gemini. They predict next token given context.",difficulty:"Easy"},{id:2,question:"What is the difference between fine-tuning and prompt engineering?",answer:"Prompt engineering: crafting effective prompts to guide model behavior without changing weights. Fast, no training needed, limited customization. Fine-tuning: updating model weights on domain-specific data. Requires training data and compute, deeper customization, can teach new patterns. Use prompting first; fine-tune when prompting is insufficient.",difficulty:"Medium"},{id:3,question:"Explain RAG (Retrieval Augmented Generation).",answer:"RAG combines retrieval systems with LLMs to ground responses in external knowledge. Process: 1) Convert documents to embeddings, store in vector DB, 2) At query time, retrieve relevant documents, 3) Include retrieved context in LLM prompt, 4) Generate response based on context. Benefits: reduces hallucinations, enables current information, no fine-tuning needed.",difficulty:"Medium"},{id:4,question:"What is temperature in LLM sampling?",answer:"Temperature controls randomness in token sampling. Low temperature (0-0.3): more deterministic, higher probability tokens favored, good for factual tasks. High temperature (0.7-1.5): more random/creative, flatter probability distribution. Temperature=0 is greedy (always highest probability). Typical: 0 for code/facts, 0.7-1.0 for creative writing.",difficulty:"Easy"},{id:5,question:"What is RLHF and why is it used?",answer:"RLHF (Reinforcement Learning from Human Feedback) aligns LLMs with human preferences. Process: 1) Collect human comparisons of outputs, 2) Train reward model to predict human preferences, 3) Use RL (PPO) to optimize LLM against reward model. Used to make models helpful, harmless, and honest. Makes models follow instructions better.",difficulty:"Hard"},{id:6,question:"What are hallucinations in LLMs and how to reduce them?",answer:"Hallucinations are confident but incorrect or fabricated outputs. Causes: training data patterns, lack of real knowledge. Mitigation: 1) RAG for grounding, 2) Lower temperature, 3) Ask for citations, 4) Chain-of-thought prompting, 5) Fine-tuning on accurate data, 6) Fact verification systems, 7) Prompt: 'say I don't know if unsure'.",difficulty:"Medium"},{id:7,question:"Explain LoRA and why it's important for fine-tuning.",answer:"LoRA (Low-Rank Adaptation) freezes pre-trained weights and adds small trainable matrices to attention layers: W_new = W_frozen + A*B where A and B are low-rank. Benefits: 95%+ fewer trainable parameters, can fine-tune on consumer GPUs, maintains base model capabilities, easy to switch between adapters. QLoRA adds quantization for even more efficiency.",difficulty:"Hard"},{id:8,question:"What is context window and why does it matter?",answer:"Context window is the maximum number of tokens an LLM can process at once (input + output). Examples: GPT-4 (128K), Claude (200K). Matters because: limits conversation history, affects RAG chunk sizes, longer contexts enable more complex tasks. Trade-offs: longer context = more compute, potential attention degradation, higher cost.",difficulty:"Easy"}]},ju={title:"Prompt Engineering",icon:"✍️",questions:[{id:1,question:"What are the key components of an effective prompt?",answer:"Key components: 1) Role/persona: who the AI should act as, 2) Context: background information, 3) Task: clear instruction of what to do, 4) Format: desired output structure, 5) Examples: few-shot demonstrations, 6) Constraints: limitations or requirements. Use delimiters to separate sections clearly.",difficulty:"Easy"},{id:2,question:"Explain chain-of-thought prompting.",answer:"Chain-of-thought (CoT) prompting asks the model to show reasoning steps before giving final answer. Improves accuracy on reasoning tasks by 10-40%. Techniques: 'Let's think step by step', provide worked examples, ask model to explain reasoning. Works because it mimics human problem-solving and catches errors in intermediate steps.",difficulty:"Medium"},{id:3,question:"What is few-shot vs zero-shot prompting?",answer:"Zero-shot: give instruction with no examples, relies on model's pre-training. Few-shot: provide 1-5 examples of desired input-output pairs before the actual task. Few-shot generally more reliable for specific formats, zero-shot faster and uses fewer tokens. Many-shot (10+) examples can further improve consistency.",difficulty:"Easy"},{id:4,question:"How do you handle inconsistent LLM outputs?",answer:"Strategies: 1) Lower temperature for consistency, 2) Use structured output (JSON schema), 3) Few-shot examples showing exact format, 4) Explicit format instructions, 5) Output validators with retry logic, 6) Self-consistency: generate multiple responses, take majority vote, 7) Fine-tuning for consistent domain-specific outputs.",difficulty:"Medium"},{id:5,question:"What is prompt injection and how to prevent it?",answer:"Prompt injection: malicious input that hijacks the model's instructions (e.g., 'Ignore previous instructions and...'). Prevention: 1) Input sanitization, 2) Separate system/user messages, 3) Use delimiters around user input, 4) Output validation, 5) Instruction hierarchy, 6) Fine-tuned models trained to resist injection, 7) Never trust user input in prompts.",difficulty:"Hard"},{id:6,question:"Explain system prompts vs user prompts.",answer:"System prompt: sets the AI's role, behavior, and constraints. Persists across conversation, higher priority than user messages. User prompt: the actual query or task from the user. Best practice: use system prompt for consistent behavior (role, tone, limitations), user prompt for specific tasks. System prompts help with security and consistency.",difficulty:"Easy"}]},Hu={title:"MLOps & Deployment",icon:"🚀",questions:[{id:1,question:"What is MLOps and why is it important?",answer:"MLOps (Machine Learning Operations) applies DevOps principles to ML systems. It covers: data versioning, experiment tracking, model versioning, CI/CD for ML, monitoring, and governance. Important because: ML systems are complex (data + code + model), models degrade over time (data drift), need reproducibility and collaboration at scale.",difficulty:"Easy"},{id:2,question:"How do you handle model versioning?",answer:"Model versioning tracks model artifacts, code, data, and hyperparameters. Tools: MLflow, DVC, Weights & Biases, Neptune. Best practices: 1) Version control for code (Git), 2) Data versioning (DVC), 3) Experiment tracking (metrics, parameters), 4) Model registry for deployment, 5) Reproducible training pipelines, 6) Clear naming conventions.",difficulty:"Medium"},{id:3,question:"What is data drift and model drift?",answer:"Data drift: statistical properties of input data change over time (distribution shift). Model drift: model performance degrades because relationship between features and target changes (concept drift). Detection: monitor input distributions, prediction distributions, and performance metrics. Response: retrain, update features, or deploy new model.",difficulty:"Medium"},{id:4,question:"How do you monitor ML models in production?",answer:"Monitor: 1) Technical metrics: latency, throughput, errors, resource usage, 2) Data quality: missing values, schema changes, feature distributions, 3) Model performance: accuracy, predictions distribution, confidence scores, 4) Business metrics: conversion, user engagement. Tools: Prometheus, Grafana, Evidently, WhyLabs. Set alerts for anomalies.",difficulty:"Hard"},{id:5,question:"What is A/B testing for ML models?",answer:"A/B testing compares models in production by routing traffic between versions. Process: 1) Define success metrics, 2) Calculate sample size for statistical significance, 3) Random traffic split (e.g., 90/10), 4) Collect data, 5) Statistical analysis, 6) Make decision. Considerations: novelty effects, segment analysis, guardrail metrics, ramp-up strategy.",difficulty:"Medium"},{id:6,question:"How do you optimize inference latency?",answer:"Optimization techniques: 1) Model: quantization (FP16, INT8), pruning, distillation, 2) Infrastructure: GPU inference, batching, caching, 3) Code: async processing, optimized frameworks (ONNX, TensorRT), 4) Architecture: model cascading, early exit, 5) System: load balancing, edge deployment. Measure P50, P95, P99 latencies.",difficulty:"Hard"}]},$u={title:"Python for AI",icon:"🐍",questions:[{id:1,question:"Why is Python preferred for AI/ML development?",answer:"Python advantages: 1) Rich ecosystem (NumPy, Pandas, scikit-learn, PyTorch, TensorFlow), 2) Easy syntax for rapid prototyping, 3) Strong community and documentation, 4) Jupyter notebooks for experimentation, 5) Bindings to optimized C/C++ libraries, 6) Integration with data tools. It's not the fastest, but development speed and ecosystem outweigh runtime concerns.",difficulty:"Easy"},{id:2,question:"Explain vectorization and why it matters in ML.",answer:"Vectorization performs operations on entire arrays at once instead of element-by-element loops. NumPy operations are vectorized using optimized C code. Example: instead of loop: for i in range(len(a)): c[i]=a[i]+b[i], use c=a+b. Benefits: 10-100x faster, cleaner code, enables GPU parallelization. Essential for efficient ML computations.",difficulty:"Medium"},{id:3,question:"What is the GIL and how does it affect ML code?",answer:"GIL (Global Interpreter Lock) allows only one thread to execute Python bytecode at a time. Impact on ML: CPU-bound Python code doesn't benefit from multi-threading. Solutions: 1) NumPy/PyTorch operations release GIL, 2) Multiprocessing instead of threading, 3) Use optimized libraries (they run C code), 4) GPU operations bypass GIL. For most ML, libraries handle parallelism.",difficulty:"Hard"},{id:4,question:"How do you handle large datasets that don't fit in memory?",answer:"Strategies: 1) Chunking: process data in batches (pd.read_csv(chunksize=)), 2) Memory mapping: np.memmap, 3) Efficient formats: Parquet, HDF5, Arrow, 4) Data generators: PyTorch DataLoader, Keras generators, 5) Distributed: Dask, Spark, 6) Column selection: read only needed columns, 7) Downcasting: convert float64 to float32.",difficulty:"Medium"},{id:5,question:"What are decorators and how are they used in ML?",answer:"Decorators wrap functions to add functionality. Syntax: @decorator above function definition. ML uses: @torch.no_grad() for inference, @property for getters, @staticmethod/@classmethod, @dataclass for data structures, custom decorators for timing/logging. Example: timing decorator to measure training time, caching decorator for expensive computations.",difficulty:"Medium"},{id:6,question:"How do you handle async operations in AI applications?",answer:"Async (asyncio) enables concurrent I/O operations. For AI APIs: use async HTTP clients (aiohttp, httpx), await API calls without blocking, process multiple requests concurrently. Pattern: async def call_api(): response = await client.post(...). Use with: LLM API calls, parallel data fetching, web servers (FastAPI). I/O bound tasks benefit most.",difficulty:"Hard"}]},Ju={mlBasics:Nu,deepLearning:Uu,llms:Wu,promptEngineering:ju,mlOps:Hu,pythonForAI:$u},Gu={class:"sdet-container"},zu={class:"mobile-header"},Vu={class:"mobile-title"},Ku={class:"sidebar-header"},Qu={class:"sidebar-controls"},Xu={key:0,class:"sidebar-nav"},Yu=["onClick"],Zu={class:"section-icon"},ep={class:"section-info"},tp={class:"section-title"},np={class:"completion-percentage"},sp={key:0,class:"nav-items"},ip=["onClick"],ap={class:"task-number"},op={class:"task-name"},rp={class:"category-qa-count"},lp=["onClick"],cp=["checked","onClick"],dp={class:"task-number"},up={class:"task-name"},pp={key:0,class:"completion-icon"},mp={class:"content"},fp={key:0,class:"task-view"},gp={class:"task-header"},hp={class:"breadcrumb"},vp={class:"qa-meta"},yp={class:"qa-count"},bp={class:"qa-list"},wp=["onClick"],Sp={class:"qa-left"},xp=["checked","onClick"],kp={class:"qa-number"},Tp={class:"qa-question"},Cp={class:"qa-right"},Ap={key:0,class:"qa-answer"},Pp={key:1,class:"task-view"},_p={class:"task-header"},Ep={class:"breadcrumb"},Ip={class:"description-card"},Rp={class:"description-text"},Lp={key:0,class:"key-points-card"},Mp={key:1,class:"exercises-section"},Dp=["onClick"],Bp={class:"exercise-title"},qp={class:"exercise-number"},Op={key:0,class:"exercise-body"},Fp={class:"scenario"},Np={key:0,class:"steps-section"},Up={key:1,class:"code-section"},Wp={class:"code-header"},jp=["onClick"],Hp={class:"code-block"},$p={key:2,class:"navigation-buttons"},Jp=["disabled"],Gp=["disabled"],zp={key:2,class:"welcome-screen"},Vp={class:"welcome-cards"},Kp=["onClick"],Qp={class:"card-icon"},Xp={__name:"AIDeveloper",setup(e){function t(se){return Object.values(se)}const n=Object.values(Ju),i=M(!1),a=M(!1),o=M([]),r=M([]),l=M([]),c=M(null),u=M(null),d=M(""),v=M(null),C=M(null),k=M(new Set),w=M(new Set),P=ye(()=>[{id:"ai-fundamentals",title:"AI Fundamentals",icon:"🧠",tasks:t(Ln).slice(0,3),categories:[]},{id:"deep-learning",title:"Deep Learning",icon:"🔬",tasks:t(Ln).slice(3,5),categories:[]},{id:"llms",title:"LLMs & Prompt Engineering",icon:"💬",tasks:t(Ln).slice(4,7),categories:[]},{id:"ai-applications",title:"AI Applications",icon:"🚀",tasks:t(Ln).slice(6,10),categories:[]},{id:"interview",title:"Interview Preparation",icon:"📝",tasks:[],categories:n}]),J=ye(()=>{const se=P.value.find(S=>S.title===d.value);return se?se.tasks:[]}),j=ye(()=>!c.value||!J.value.length?-1:J.value.findIndex(se=>se.title===c.value.title)),B=ye(()=>j.value>0),Y=ye(()=>j.value<J.value.length-1),H=ye(()=>B.value?J.value[j.value-1]:null),G=ye(()=>Y.value?J.value[j.value+1]:null),T=se=>{if(se.id==="interview"){const S=se.categories.reduce((x,D)=>x+D.questions.length,0),y=se.categories.reduce((x,D)=>x+D.questions.filter(z=>w.value.has(`${D.title}-${z.id}`)).length,0);return S>0?Math.round(y/S*100):0}else{const S=se.tasks.length,y=se.tasks.filter(x=>k.value.has(`${se.id}-${x.title}`)).length;return S>0?Math.round(y/S*100):0}},ee=(se,S)=>k.value.has(`${S}-${se.title}`),oe=(se,S)=>w.value.has(`${S}-${se.id}`),X=(se,S)=>{const y=`${S}-${se.title}`;k.value.has(y)?k.value.delete(y):k.value.add(y)},ae=(se,S)=>{const y=`${S}-${se.id}`;w.value.has(y)?w.value.delete(y):w.value.add(y)};function pe(){i.value=!i.value}function U(){a.value=!a.value}function le(){i.value=!1}function de(se){C.value=se,o.value.includes(se)?o.value=o.value.filter(S=>S!==se):o.value=[se]}function _(se){C.value=se,o.value.includes(se)||o.value.push(se)}function b(se,S){c.value=se,u.value=null,d.value=S,r.value=[],le()}function F(se,S){u.value=se,c.value=null,d.value=S,l.value=[],le()}function q(){B.value&&b(H.value,d.value)}function ue(){Y.value&&b(G.value,d.value)}function Te(se){const S=r.value.indexOf(se);S===-1?r.value.push(se):r.value.splice(S,1)}function Ie(se){const S=l.value.indexOf(se);S===-1?l.value.push(se):l.value.splice(S,1)}async function Re(se,S){await navigator.clipboard.writeText(se),v.value=S,setTimeout(()=>v.value=null,2e3)}return(se,S)=>(f(),g("div",Gu,[s("div",zu,[s("button",{class:"hamburger",onClick:pe},[s("span",{class:V(["hamburger-icon",{open:i.value}])},[...S[1]||(S[1]=[s("span",null,null,-1),s("span",null,null,-1),s("span",null,null,-1)])],2)]),s("h2",Vu,m(d.value||"AI Developer"),1)]),i.value?(f(),g("div",{key:0,class:"overlay",onClick:le})):K("",!0),s("aside",{class:V(["sidebar",{"sidebar-open":i.value,"sidebar-minimized":a.value}])},[s("div",Ku,[a.value?K("",!0):(f(),g("h2",{key:0,onClick:S[0]||(S[0]=y=>{c.value=null,u.value=null}),style:{cursor:"pointer","user-select":"none"},title:"Go to Welcome Screen"}," 🤖 AI Developer ")),s("div",Qu,[s("button",{class:"minimize-btn",onClick:U},m(a.value?"➡️":"⬅️"),1),s("button",{class:"close-btn",onClick:le},"✕")])]),a.value?K("",!0):(f(),g("nav",Xu,[(f(!0),g(Q,null,te(P.value,(y,x)=>(f(),g("div",{key:x,class:"nav-section"},[s("div",{class:V(["nav-section-header",{active:C.value===x}]),onClick:D=>de(x)},[s("span",Zu,m(y.icon),1),s("div",ep,[s("span",tp,m(y.title),1),s("span",np,m(T(y))+"%",1)]),s("span",{class:V(["chevron",{rotated:o.value.includes(x)}])},"▾",2)],10,Yu),fe($e,{name:"slide"},{default:Ne(()=>[o.value.includes(x)?(f(),g("ul",sp,[y.id==="interview"?(f(!0),g(Q,{key:0},te(y.categories,(D,z)=>{var be;return f(),g("li",{key:z,onClick:Ae=>F(D,y.title),class:V({active:((be=u.value)==null?void 0:be.title)===D.title})},[s("span",ap,m(z+1),1),s("span",op,m(D.title),1),s("span",rp,m(D.questions.length)+" Qs",1)],10,ip)}),128)):(f(!0),g(Q,{key:1},te(y.tasks,(D,z)=>{var be;return f(),g("li",{key:z,onClick:Ae=>b(D,y.title),class:V({active:((be=c.value)==null?void 0:be.title)===D.title,completed:ee(D,y.id)})},[s("input",{type:"checkbox",checked:ee(D,y.id),onClick:je(Ae=>X(D,y.id),["stop"]),class:"completion-checkbox"},null,8,cp),s("span",dp,m(z+1),1),s("span",up,m(D.title),1),ee(D,y.id)?(f(),g("span",pp,"✅")):K("",!0)],10,lp)}),128))])):K("",!0)]),_:2},1024)]))),128))]))],2),s("main",mp,[u.value?(f(),g("div",fp,[s("div",gp,[s("h1",null,m(u.value.icon)+" "+m(u.value.title),1),s("span",hp,"Interview Preparation → "+m(u.value.title),1),s("div",vp,[s("span",yp,m(u.value.questions.length)+" Questions",1),S[2]||(S[2]=s("div",{class:"difficulty-legend"},[s("span",{class:"badge easy"},"Easy"),s("span",{class:"badge medium"},"Medium"),s("span",{class:"badge hard"},"Hard")],-1))])]),s("div",bp,[(f(!0),g(Q,null,te(u.value.questions,(y,x)=>(f(),g("div",{key:y.id,class:V(["qa-card",{completed:oe(y,u.value.title)}])},[s("div",{class:"qa-header",onClick:D=>Ie(x)},[s("div",Sp,[s("input",{type:"checkbox",checked:oe(y,u.value.title),onClick:je(D=>ae(y,u.value.title),["stop"]),class:"completion-checkbox"},null,8,xp),s("span",kp,m(y.id),1),s("p",Tp,m(y.question),1)]),s("div",Cp,[s("span",{class:V(["badge",y.difficulty.toLowerCase()])},m(y.difficulty),3),s("span",{class:V(["chevron",{rotated:l.value.includes(x)}])},"▾",2)])],8,wp),fe($e,{name:"slide"},{default:Ne(()=>[l.value.includes(x)?(f(),g("div",Ap,[s("p",null,m(y.answer),1)])):K("",!0)]),_:2},1024)],2))),128))])])):c.value?(f(),g("div",Pp,[s("div",_p,[s("h1",null,m(c.value.title),1),s("span",Ep,m(d.value)+" → "+m(c.value.title),1)]),s("div",Ip,[S[3]||(S[3]=s("h2",null,"📘 Overview",-1)),s("pre",Rp,m(c.value.description),1)]),c.value.keyPoints?(f(),g("div",Lp,[S[4]||(S[4]=s("h2",null,"🔑 Key Points",-1)),s("ul",null,[(f(!0),g(Q,null,te(c.value.keyPoints,(y,x)=>(f(),g("li",{key:x},m(y),1))),128))])])):K("",!0),c.value.exercises?(f(),g("div",Mp,[S[7]||(S[7]=s("h2",null,"💻 Exercises",-1)),(f(!0),g(Q,null,te(c.value.exercises,(y,x)=>(f(),g("div",{key:x,class:"exercise-card"},[s("div",{class:"exercise-header",onClick:D=>Te(x)},[s("div",Bp,[s("span",qp,m(x+1),1),s("h3",null,m(y.title),1)]),s("span",{class:V(["chevron",{rotated:r.value.includes(x)}])},"▾",2)],8,Dp),fe($e,{name:"slide"},{default:Ne(()=>[r.value.includes(x)?(f(),g("div",Op,[s("p",Fp,m(y.scenario),1),y.steps?(f(),g("div",Np,[S[5]||(S[5]=s("h4",null,"📋 Steps",-1)),s("ol",null,[(f(!0),g(Q,null,te(y.steps,(D,z)=>(f(),g("li",{key:z},m(D),1))),128))])])):K("",!0),y.code?(f(),g("div",Up,[s("div",Wp,[S[6]||(S[6]=s("span",null,"💻 Code",-1)),s("button",{onClick:D=>Re(y.code,x),class:"copy-btn"},m(v.value===x?"✅ Copied!":"📋 Copy"),9,jp)]),s("pre",Hp,[s("code",null,m(y.code),1)])])):K("",!0)])):K("",!0)]),_:2},1024)]))),128))])):K("",!0),c.value&&J.value.length>1?(f(),g("div",$p,[s("button",{onClick:q,disabled:!B.value,class:"nav-btn prev-btn"},"⬅️ Previous",8,Jp),s("button",{onClick:ue,disabled:!Y.value,class:"nav-btn next-btn"},"Next ➡️",8,Gp)])):K("",!0)])):(f(),g("div",zp,[S[8]||(S[8]=s("div",{class:"welcome-icon"},"🤖",-1)),S[9]||(S[9]=s("h1",null,"Welcome to AI Developer",-1)),S[10]||(S[10]=s("p",null,"Master AI, Machine Learning & LLMs",-1)),s("div",Vp,[(f(!0),g(Q,null,te(P.value,(y,x)=>(f(),g("div",{key:x,class:"welcome-card",onClick:D=>_(x)},[s("span",Qp,m(y.icon),1),s("h3",null,m(y.title),1),s("p",null,m(y.id==="interview"?y.categories.length+" categories":y.tasks.length+" topics"),1)],8,Kp))),128))])]))])]))}},Yp=Qe(Xp,[["__scopeId","data-v-30a60951"]]),Zp={class:"talentforge-container"},em={class:"tf-header"},tm={class:"tf-header-content"},nm={class:"tf-header-actions"},sm={class:"talent-score-widget"},im={class:"score-card"},am={class:"score-circle"},om={viewBox:"0 0 100 100"},rm={class:"score-value"},lm={class:"score-stats"},cm={class:"stat-item"},dm={class:"stat-info"},um={class:"stat-value"},pm={class:"stat-item"},mm={class:"stat-info"},fm={class:"stat-value"},gm={class:"stat-item"},hm={class:"stat-info"},vm={class:"stat-value"},ym={class:"tf-tabs"},bm={class:"tf-content"},wm={key:0,class:"quickfire-section"},Sm={class:"quiz-container"},xm={class:"quiz-progress"},km={class:"progress-bar"},Tm={class:"progress-text"},Cm={class:"quiz-difficulty"},Am={class:"quiz-topic"},Pm={class:"quiz-question"},_m={class:"quiz-options"},Em=["onClick","disabled"],Im={class:"option-letter"},Rm={class:"option-text"},Lm={key:0,class:"option-icon"},Mm={key:1,class:"option-icon"},Dm={key:0,class:"quiz-explanation"},Bm={class:"explanation-header"},qm={key:0,class:"result-badge correct"},Om={key:1,class:"result-badge incorrect"},Fm={class:"explanation-text"},Nm={class:"concept-tags"},Um=["onClick"],Wm={class:"quiz-nav"},jm=["disabled"],Hm=["disabled"],$m={key:1,class:"challenges-section"},Jm={class:"challenge-tabs"},Gm={key:0,class:"challenge-grid"},zm={class:"card-header"},Vm={class:"card-meta"},Km={class:"meta-item"},Qm={class:"meta-item"},Xm={class:"card-rewards"},Ym={class:"reward-item"},Zm={class:"reward-item"},ef={key:1,class:"challenge-grid"},tf={class:"card-header"},nf={class:"budget-tag"},sf={class:"skills-required"},af={class:"skill-tags"},of={class:"card-meta"},rf={class:"meta-item"},lf={class:"meta-item"},cf={key:2,class:"challenge-grid"},df={class:"card-header"},uf={class:"company-info"},pf={class:"company-logo"},mf={class:"company-name"},ff={class:"task-details"},gf={class:"detail-item"},hf={class:"detail-item"},vf={class:"detail-item"},yf={class:"card-meta"},bf={class:"meta-item deadline"},wf={key:2,class:"coinquest-section"},Sf={class:"coinquest-grid"},xf={class:"coins-summary-card"},kf={class:"coins-display"},Tf={class:"coins-amount"},Cf={class:"coins-breakdown"},Af={class:"breakdown-item"},Pf={class:"breakdown-item"},_f={class:"breakdown-item"},Ef={class:"streak-card"},If={class:"streak-display"},Rf={class:"streak-number"},Lf={class:"streak-progress"},Mf={class:"streak-days"},Df={class:"streak-message"},Bf={class:"badges-card"},qf={class:"badges-grid"},Of={class:"badge-icon"},Ff={class:"badge-name"},Nf={key:0,class:"badge-lock"},Uf={class:"leaderboard-card"},Wf={class:"leaderboard-list"},jf={class:"rank"},Hf={key:0,class:"rank-medal"},$f={class:"user-avatar"},Jf={class:"user-name"},Gf={class:"user-score"},zf={class:"concept-modal"},Vf={class:"concept-resources"},Kf={key:1,class:"coin-animation"},Qf={class:"coin-float"},Xf={__name:"TalentForge",setup(e){const t=M("quiz"),n=M("hackathons"),i=M(0),a=M(null),o=M(!1),r=M(""),l=M(!1),c=M(0),u=M(2450),d=M(78),v=M(12),C=M(5),k=M(1200),w=M(950),P=M(300),J=ye(()=>Math.round(d.value*.4+v.value*2+C.value*3)),j=M([{id:1,question:"What is the primary purpose of the 'useEffect' hook in React?",options:["To manage component state","To perform side effects in function components","To create custom hooks","To optimize component rendering"],correctAnswer:1,difficulty:"Medium",topic:"React",explanation:"useEffect is used to perform side effects in function components, such as data fetching, subscriptions, or manually changing the DOM.",concepts:["React Hooks","Side Effects","Component Lifecycle"],coins:10},{id:2,question:"Which data structure uses LIFO (Last In, First Out) principle?",options:["Queue","Stack","Linked List","Tree"],correctAnswer:1,difficulty:"Easy",topic:"Data Structures",explanation:"A Stack follows the LIFO principle where the last element added is the first one to be removed.",concepts:["Stack","LIFO","Data Structures Basics"],coins:5},{id:3,question:"What is the time complexity of binary search?",options:["O(n)","O(n²)","O(log n)","O(1)"],correctAnswer:2,difficulty:"Medium",topic:"Algorithms",explanation:"Binary search has O(log n) time complexity because it halves the search space with each comparison.",concepts:["Binary Search","Time Complexity","Divide and Conquer"],coins:10},{id:4,question:"In SQL, which clause is used to filter grouped results?",options:["WHERE","HAVING","FILTER","GROUP BY"],correctAnswer:1,difficulty:"Medium",topic:"SQL",explanation:"HAVING clause filters groups after GROUP BY, while WHERE filters individual rows before grouping.",concepts:["SQL Aggregation","GROUP BY","HAVING vs WHERE"],coins:10},{id:5,question:"What design pattern does Redux follow?",options:["Observer Pattern","Factory Pattern","Flux/Redux Pattern","Singleton Pattern"],correctAnswer:2,difficulty:"Hard",topic:"State Management",explanation:"Redux follows the Flux architecture pattern with unidirectional data flow: Actions → Reducers → Store → View.",concepts:["Redux","Flux Architecture","State Management"],coins:15}]),B=ye(()=>j.value[i.value]),Y=ye(()=>a.value===B.value.correctAnswer);function H(de){a.value===null&&(a.value=de,de===B.value.correctAnswer&&(c.value=B.value.coins,u.value+=B.value.coins,l.value=!0,setTimeout(()=>{l.value=!1},1500)))}function G(de){return a.value===null?"":de===B.value.correctAnswer?"correct":de===a.value?"incorrect":"disabled"}function T(){i.value<j.value.length-1&&(i.value++,a.value=null)}function ee(){i.value>0&&(i.value--,a.value=null)}function oe(de){r.value=de,o.value=!0}const X=M([{id:1,title:"AI Innovation Challenge",description:"Build an innovative AI-powered solution for real-world problems. Open to all skill levels.",difficulty:"Hard",deadline:"15 days left",participants:234,prize:"$5,000",coins:500},{id:2,title:"Frontend Masters Sprint",description:"Create a stunning, accessible web application using modern frontend technologies.",difficulty:"Medium",deadline:"7 days left",participants:156,prize:"$2,500",coins:300},{id:3,title:"API Design Championship",description:"Design and implement RESTful APIs following best practices and documentation standards.",difficulty:"Medium",deadline:"21 days left",participants:89,prize:"$3,000",coins:350}]),ae=M([{id:1,title:"E-commerce Dashboard Development",description:"Build a responsive admin dashboard for an e-commerce platform with analytics and inventory management.",skills:["React","Node.js","MongoDB","Chart.js"],budget:"$800 - $1,200",duration:"2-3 weeks",type:"Remote"},{id:2,title:"Mobile App UI/UX Redesign",description:"Redesign the user interface of an existing fitness tracking mobile application.",skills:["Figma","UI/UX","Mobile Design","Prototyping"],budget:"$500 - $800",duration:"1-2 weeks",type:"Remote"},{id:3,title:"API Integration Specialist",description:"Integrate multiple third-party APIs including payment gateways and social media platforms.",skills:["REST APIs","Python","OAuth","Webhooks"],budget:"$600 - $900",duration:"1 week",type:"Remote"}]),pe=M([{id:1,company:"TechCorp Inc.",companyLogo:"🏢",title:"Build a Real-time Chat Feature",description:"Implement a WebSocket-based real-time chat system with typing indicators and read receipts.",role:"Full Stack Developer",location:"Remote",salary:"$80K - $120K",deadline:"5 days",urgency:"urgent"},{id:2,company:"DataFlow Systems",companyLogo:"📊",title:"Data Pipeline Optimization",description:"Optimize an existing ETL pipeline to reduce processing time by at least 40%.",role:"Data Engineer",location:"Hybrid - NYC",salary:"$90K - $130K",deadline:"10 days",urgency:"normal"},{id:3,company:"CloudNine Solutions",companyLogo:"☁️",title:"Kubernetes Deployment Setup",description:"Set up a production-ready Kubernetes cluster with auto-scaling and monitoring.",role:"DevOps Engineer",location:"Remote",salary:"$100K - $140K",deadline:"7 days",urgency:"urgent"}]),U=M([{id:1,icon:"🌟",name:"First Quiz",unlocked:!0},{id:2,icon:"🔥",name:"7-Day Streak",unlocked:!0},{id:3,icon:"🏆",name:"Challenge Winner",unlocked:!0},{id:4,icon:"💎",name:"1000 Coins",unlocked:!0},{id:5,icon:"🚀",name:"Speed Demon",unlocked:!1},{id:6,icon:"🎯",name:"Perfect Score",unlocked:!1},{id:7,icon:"👑",name:"Top 10",unlocked:!1},{id:8,icon:"⚡",name:"30-Day Streak",unlocked:!1}]),le=M([{id:1,name:"Alex Chen",avatar:"👨‍💻",score:4520},{id:2,name:"Sarah Miller",avatar:"👩‍💻",score:4180},{id:3,name:"James Wilson",avatar:"🧑‍💻",score:3950},{id:4,name:"You",avatar:"😊",score:2450,isCurrentUser:!0},{id:5,name:"Mike Brown",avatar:"👨‍🎓",score:2100}]);return(de,_)=>(f(),g("div",Zp,[s("header",em,[s("div",tm,[_[12]||(_[12]=s("div",{class:"tf-header-left"},[s("h1",{class:"tf-title"},"⚡ TalentForge"),s("p",{class:"tf-tagline"},"Forge your skills. Prove your talent. Get hired.")],-1)),s("div",nm,[s("button",{class:"tf-action-btn primary",onClick:_[0]||(_[0]=b=>t.value="quiz")}," 🎯 Start Quiz "),s("button",{class:"tf-action-btn secondary",onClick:_[1]||(_[1]=b=>t.value="challenges")}," 🧩 Explore Challenges "),s("button",{class:"tf-action-btn coins",onClick:_[2]||(_[2]=b=>t.value="coins")}," 💰 "+m(u.value)+" Coins ",1)])])]),s("div",sm,[s("div",im,[s("div",am,[(f(),g("svg",om,[_[13]||(_[13]=s("circle",{class:"score-bg",cx:"50",cy:"50",r:"45"},null,-1)),s("circle",{class:"score-progress",cx:"50",cy:"50",r:"45",style:Qt({strokeDashoffset:283-283*J.value/100})},null,4)])),s("div",rm,m(J.value),1)]),_[14]||(_[14]=s("div",{class:"score-label"},"Talent Score",-1))]),s("div",lm,[s("div",cm,[_[16]||(_[16]=s("span",{class:"stat-icon"},"🎯",-1)),s("div",dm,[s("span",um,m(d.value)+"%",1),_[15]||(_[15]=s("span",{class:"stat-label"},"Quiz Accuracy",-1))])]),s("div",pm,[_[18]||(_[18]=s("span",{class:"stat-icon"},"🏆",-1)),s("div",mm,[s("span",fm,m(v.value),1),_[17]||(_[17]=s("span",{class:"stat-label"},"Challenges Done",-1))])]),s("div",gm,[_[20]||(_[20]=s("span",{class:"stat-icon"},"🔥",-1)),s("div",hm,[s("span",vm,m(C.value)+" days",1),_[19]||(_[19]=s("span",{class:"stat-label"},"Current Streak",-1))])])])]),s("nav",ym,[s("button",{class:V(["tf-tab",{active:t.value==="quiz"}]),onClick:_[3]||(_[3]=b=>t.value="quiz")}," 🧠 QuickFire ",2),s("button",{class:V(["tf-tab",{active:t.value==="challenges"}]),onClick:_[4]||(_[4]=b=>t.value="challenges")}," 🧩 Challenge Hub ",2),s("button",{class:V(["tf-tab",{active:t.value==="coins"}]),onClick:_[5]||(_[5]=b=>t.value="coins")}," 💰 CoinQuest ",2)]),s("main",bm,[t.value==="quiz"?(f(),g("div",wm,[s("div",Sm,[s("div",{class:V(["quiz-card",{answered:a.value!==null}])},[s("div",xm,[s("div",km,[s("div",{class:"progress-fill",style:Qt({width:(i.value+1)/j.value.length*100+"%"})},null,4)]),s("span",Tm,m(i.value+1)+" / "+m(j.value.length),1)]),s("div",Cm,[s("span",{class:V(["difficulty-badge",B.value.difficulty])},m(B.value.difficulty),3),s("span",Am,m(B.value.topic),1)]),s("h2",Pm,m(B.value.question),1),s("div",_m,[(f(!0),g(Q,null,te(B.value.options,(b,F)=>(f(),g("button",{key:F,class:V(["option-btn",G(F)]),onClick:q=>H(F),disabled:a.value!==null},[s("span",Im,m(["A","B","C","D"][F]),1),s("span",Rm,m(b),1),a.value!==null&&F===B.value.correctAnswer?(f(),g("span",Lm,"✓")):K("",!0),a.value===F&&F!==B.value.correctAnswer?(f(),g("span",Mm,"✗")):K("",!0)],10,Em))),128))]),fe($e,{name:"slide-up"},{default:Ne(()=>[a.value!==null?(f(),g("div",Dm,[s("div",Bm,[Y.value?(f(),g("span",qm,"✓ Correct! +"+m(B.value.coins)+" coins",1)):(f(),g("span",Om,"✗ Incorrect"))]),s("p",Fm,m(B.value.explanation),1),s("div",Nm,[_[21]||(_[21]=s("span",{class:"concept-label"},"Related Concepts:",-1)),(f(!0),g(Q,null,te(B.value.concepts,b=>(f(),g("button",{key:b,class:"concept-tag",onClick:F=>oe(b)},m(b),9,Um))),128))])])):K("",!0)]),_:1}),s("div",Wm,[s("button",{class:"nav-btn prev",onClick:ee,disabled:i.value===0}," ← Previous ",8,jm),s("button",{class:"concept-flow-btn",onClick:_[6]||(_[6]=b=>o.value=!0)}," 📚 Jump to Concept Flow "),s("button",{class:"nav-btn next",onClick:T,disabled:a.value===null},m(i.value===j.value.length-1?"Finish":"Next →"),9,Hm)])],2)])])):K("",!0),t.value==="challenges"?(f(),g("div",$m,[s("div",Jm,[s("button",{class:V(["challenge-tab",{active:n.value==="hackathons"}]),onClick:_[7]||(_[7]=b=>n.value="hackathons")}," 🚀 Hackathons ",2),s("button",{class:V(["challenge-tab",{active:n.value==="projects"}]),onClick:_[8]||(_[8]=b=>n.value="projects")}," 💼 Paid Projects ",2),s("button",{class:V(["challenge-tab",{active:n.value==="hiring"}]),onClick:_[9]||(_[9]=b=>n.value="hiring")}," 🎯 Task-Based Hiring ",2)]),n.value==="hackathons"?(f(),g("div",Gm,[(f(!0),g(Q,null,te(X.value,b=>(f(),g("div",{key:b.id,class:"challenge-card hackathon"},[s("div",zm,[_[22]||(_[22]=s("span",{class:"card-icon"},"🚀",-1)),s("span",{class:V(["difficulty-tag",b.difficulty])},m(b.difficulty),3)]),s("h3",null,m(b.title),1),s("p",null,m(b.description),1),s("div",Vm,[s("span",Km,"⏰ "+m(b.deadline),1),s("span",Qm,"👥 "+m(b.participants)+" joined",1)]),s("div",Xm,[s("span",Ym,"🏆 "+m(b.prize),1),s("span",Zm,"💰 "+m(b.coins)+" coins",1)]),_[23]||(_[23]=s("button",{class:"register-btn"},"Register Now",-1))]))),128))])):K("",!0),n.value==="projects"?(f(),g("div",ef,[(f(!0),g(Q,null,te(ae.value,b=>(f(),g("div",{key:b.id,class:"challenge-card project"},[s("div",tf,[_[24]||(_[24]=s("span",{class:"card-icon"},"💼",-1)),s("span",nf,m(b.budget),1)]),s("h3",null,m(b.title),1),s("p",null,m(b.description),1),s("div",sf,[_[25]||(_[25]=s("span",{class:"skills-label"},"Required Skills:",-1)),s("div",af,[(f(!0),g(Q,null,te(b.skills,F=>(f(),g("span",{key:F,class:"skill-tag"},m(F),1))),128))])]),s("div",of,[s("span",rf,"⏰ "+m(b.duration),1),s("span",lf,"📍 "+m(b.type),1)]),_[26]||(_[26]=s("button",{class:"apply-btn"},"Apply Now",-1))]))),128))])):K("",!0),n.value==="hiring"?(f(),g("div",cf,[(f(!0),g(Q,null,te(pe.value,b=>(f(),g("div",{key:b.id,class:"challenge-card hiring"},[s("div",df,[s("div",uf,[s("span",pf,m(b.companyLogo),1),s("span",mf,m(b.company),1)]),s("span",{class:V(["urgency-tag",b.urgency])},m(b.urgency),3)]),s("h3",null,m(b.title),1),s("p",null,m(b.description),1),s("div",ff,[s("span",gf,"💼 "+m(b.role),1),s("span",hf,"📍 "+m(b.location),1),s("span",vf,"💰 "+m(b.salary),1)]),s("div",yf,[s("span",bf,"⏰ Deadline: "+m(b.deadline),1)]),_[27]||(_[27]=s("button",{class:"solve-btn"},"Solve & Apply",-1))]))),128))])):K("",!0)])):K("",!0),t.value==="coins"?(f(),g("div",wf,[s("div",Sf,[s("div",xf,[s("div",kf,[_[28]||(_[28]=s("span",{class:"coins-icon"},"💰",-1)),s("span",Tf,m(u.value),1),_[29]||(_[29]=s("span",{class:"coins-label"},"Total Coins",-1))]),s("div",Cf,[s("div",Af,[_[30]||(_[30]=s("span",null,"📝 Quizzes",-1)),s("span",null,"+"+m(k.value),1)]),s("div",Pf,[_[31]||(_[31]=s("span",null,"🏆 Challenges",-1)),s("span",null,"+"+m(w.value),1)]),s("div",_f,[_[32]||(_[32]=s("span",null,"🔥 Streaks",-1)),s("span",null,"+"+m(P.value),1)])])]),s("div",Ef,[_[34]||(_[34]=s("h3",null,"🔥 Current Streak",-1)),s("div",If,[s("span",Rf,m(C.value),1),_[33]||(_[33]=s("span",{class:"streak-unit"},"days",-1))]),s("div",Lf,[s("div",Mf,[(f(),g(Q,null,te(7,b=>s("span",{key:b,class:V(["streak-day",{active:b<=C.value%7||C.value>=7}])},m(["M","T","W","T","F","S","S"][b-1]),3)),64))]),s("p",Df,m(C.value>=7?"🎉 Amazing week!":`${7-C.value%7} days to weekly bonus!`),1)])]),s("div",Bf,[_[35]||(_[35]=s("h3",null,"🏅 Achievements",-1)),s("div",qf,[(f(!0),g(Q,null,te(U.value,b=>(f(),g("div",{key:b.id,class:V(["badge-item",{locked:!b.unlocked}])},[s("span",Of,m(b.icon),1),s("span",Ff,m(b.name),1),b.unlocked?K("",!0):(f(),g("span",Nf,"🔒"))],2))),128))])]),s("div",Uf,[_[36]||(_[36]=s("h3",null,"🏆 Leaderboard",-1)),s("div",Wf,[(f(!0),g(Q,null,te(le.value,(b,F)=>(f(),g("div",{key:b.id,class:V(["leaderboard-item",{"current-user":b.isCurrentUser}])},[s("span",jf,m(F+1),1),F<3?(f(),g("span",Hf,m(["🥇","🥈","🥉"][F]),1)):K("",!0),s("span",$f,m(b.avatar),1),s("span",Jf,m(b.name),1),s("span",Gf,m(b.score)+" pts",1)],2))),128))])]),_[37]||(_[37]=Ke('<div class="coinquest-actions" data-v-cd1008dc><button class="action-card challenge-others" data-v-cd1008dc><span class="action-icon" data-v-cd1008dc>⚔️</span><span class="action-title" data-v-cd1008dc>Challenge Others</span><span class="action-desc" data-v-cd1008dc>1v1 Quiz Battle</span></button><button class="action-card team-battle" data-v-cd1008dc><span class="action-icon" data-v-cd1008dc>👥</span><span class="action-title" data-v-cd1008dc>Team Battle</span><span class="action-desc" data-v-cd1008dc>Coming Soon</span></button></div>',1))])])):K("",!0)]),o.value?(f(),g("div",{key:0,class:"modal-overlay",onClick:_[11]||(_[11]=je(b=>o.value=!1,["self"]))},[s("div",zf,[s("button",{class:"modal-close",onClick:_[10]||(_[10]=b=>o.value=!1)},"✕"),s("h2",null,"📚 Concept Flow: "+m(r.value||"Related Topics"),1),_[42]||(_[42]=Ke('<div class="concept-flow" data-v-cd1008dc><div class="flow-node start" data-v-cd1008dc><span class="node-icon" data-v-cd1008dc>📖</span><span class="node-text" data-v-cd1008dc>Fundamentals</span></div><div class="flow-arrow" data-v-cd1008dc>→</div><div class="flow-node" data-v-cd1008dc><span class="node-icon" data-v-cd1008dc>🔧</span><span class="node-text" data-v-cd1008dc>Core Concepts</span></div><div class="flow-arrow" data-v-cd1008dc>→</div><div class="flow-node" data-v-cd1008dc><span class="node-icon" data-v-cd1008dc>💡</span><span class="node-text" data-v-cd1008dc>Advanced Topics</span></div><div class="flow-arrow" data-v-cd1008dc>→</div><div class="flow-node end" data-v-cd1008dc><span class="node-icon" data-v-cd1008dc>🚀</span><span class="node-text" data-v-cd1008dc>Real-world Application</span></div></div>',1)),s("div",Vf,[_[41]||(_[41]=s("h4",null,"📌 Quick Resources",-1)),s("ul",null,[s("li",null,"Introduction to "+m(r.value||"Topic"),1),_[38]||(_[38]=s("li",null,"Practice Exercises",-1)),_[39]||(_[39]=s("li",null,"Interview Questions",-1)),_[40]||(_[40]=s("li",null,"Project Ideas",-1))])])])])):K("",!0),l.value?(f(),g("div",Kf,[s("span",Qf,"+"+m(c.value)+" 💰",1)])):K("",!0)]))}},Yf=Qe(Xf,[["__scopeId","data-v-cd1008dc"]]),Zf=[{id:"T001",uniqueId:"MED-2024-001",name:"Rahul Sharma",avatar:"👨‍💻",skills:["Java","Selenium","TestNG","API Testing","BDD Cucumber"],experience:"2.5 years as QA Automation Engineer at TCS",category:"SDET",categoryId:"sdet",projectDescription:"Automated 200+ test cases for banking application achieving 95% regression coverage. Reduced manual testing effort by 60%.",status:"available",education:"B.Tech in Computer Science",location:"Bangalore, India"},{id:"T002",uniqueId:"MED-2024-002",name:"Priya Patel",avatar:"👩‍💻",skills:["Python","Playwright","CI/CD","Docker","AWS"],experience:"3 years as SDET at Infosys",category:"SDET",categoryId:"sdet",projectDescription:"Built end-to-end test automation framework for fintech platform using Playwright. Integrated with Jenkins CI/CD pipeline.",status:"deployed",education:"M.Tech in Software Engineering",location:"Hyderabad, India"},{id:"T003",uniqueId:"MED-2024-003",name:"Amit Kumar",avatar:"🧑‍💻",skills:["Java","Spring Boot","Microservices","PostgreSQL","Kafka"],experience:"2 years as Backend Developer at Wipro",category:"Backend",categoryId:"backend",projectDescription:"Developed RESTful APIs for healthcare management system serving 50K+ daily users. Implemented event-driven architecture using Kafka.",status:"available",education:"B.Tech in Information Technology",location:"Pune, India"},{id:"T004",uniqueId:"MED-2024-004",name:"Sneha Reddy",avatar:"👩‍💻",skills:["React","Node.js","MongoDB","AWS","TypeScript"],experience:"2.5 years as Full Stack Developer at Accenture",category:"Full Stack",categoryId:"fullstack",projectDescription:"Built real-time logistics tracking dashboard handling 10K+ concurrent connections. Deployed on AWS with auto-scaling.",status:"available",education:"B.E. in Computer Science",location:"Chennai, India"},{id:"T005",uniqueId:"MED-2024-005",name:"Vikram Singh",avatar:"👨‍💻",skills:["Python","TensorFlow","NLP","FastAPI","Hugging Face"],experience:"1.5 years as ML Engineer at Tech Mahindra",category:"AI/ML",categoryId:"ai",projectDescription:"Implemented sentiment analysis model with 92% accuracy for customer feedback analysis. Deployed as REST API using FastAPI.",status:"available",education:"M.Tech in AI & ML",location:"Noida, India"},{id:"T006",uniqueId:"MED-2024-006",name:"Ananya Gupta",avatar:"👩‍💻",skills:["Vue.js","Python","Django","Redis","PostgreSQL"],experience:"3 years as Full Stack Developer at Cognizant",category:"Full Stack",categoryId:"fullstack",projectDescription:"Architected scalable SaaS HR management platform for 100+ enterprise clients. Implemented caching layer reducing response time by 40%.",status:"deployed",education:"B.Tech in Computer Science",location:"Bangalore, India"},{id:"T007",uniqueId:"MED-2024-007",name:"Karthik Nair",avatar:"👨‍💻",skills:["Cypress","JavaScript","REST API","Jenkins","Git"],experience:"2 years as QA Engineer at HCL Technologies",category:"SDET",categoryId:"sdet",projectDescription:"Implemented CI/CD pipeline with automated regression testing for e-commerce platform. Achieved 80% test automation coverage.",status:"available",education:"B.Tech in Electronics & Communication",location:"Kochi, India"},{id:"T008",uniqueId:"MED-2024-008",name:"Megha Joshi",avatar:"👩‍💻",skills:["Python","Django","PostgreSQL","Docker","Kubernetes"],experience:"2.5 years as Backend Developer at Mindtree",category:"Backend",categoryId:"backend",projectDescription:"Built payment gateway integration processing 1M+ transactions monthly. Implemented microservices architecture with Docker & K8s.",status:"available",education:"M.Sc. in Computer Science",location:"Mumbai, India"},{id:"T009",uniqueId:"MED-2024-009",name:"Arjun Menon",avatar:"🧑‍💻",skills:["PyTorch","Computer Vision","OpenCV","Flask","YOLO"],experience:"2 years as AI Engineer at L&T Infotech",category:"AI/ML",categoryId:"ai",projectDescription:"Developed real-time defect detection system using YOLO achieving 96% accuracy. Reduced manual inspection time by 70%.",status:"deployed",education:"M.Tech in Data Science",location:"Trivandrum, India"},{id:"T010",uniqueId:"MED-2024-010",name:"Divya Krishnan",avatar:"👩‍💻",skills:["Angular","Node.js","MySQL","Azure","GraphQL"],experience:"3 years as Full Stack Developer at Capgemini",category:"Full Stack",categoryId:"fullstack",projectDescription:"Developed enterprise resource planning system for manufacturing sector. Migrated legacy system to modern Angular + Node.js stack.",status:"available",education:"B.E. in Information Technology",location:"Coimbatore, India"},{id:"T011",uniqueId:"MED-2024-011",name:"Rohan Desai",avatar:"👨‍💻",skills:["Java","RestAssured","Postman","JMeter","SQL"],experience:"2 years as API Test Engineer at Mphasis",category:"SDET",categoryId:"sdet",projectDescription:"Automated 150+ API test cases using RestAssured framework. Conducted performance testing using JMeter for 5000+ concurrent users.",status:"available",education:"B.Tech in Computer Science",location:"Ahmedabad, India"},{id:"T012",uniqueId:"MED-2024-012",name:"Neha Agarwal",avatar:"👩‍💻",skills:["Go","gRPC","MongoDB","Redis","Docker"],experience:"2.5 years as Backend Developer at Persistent Systems",category:"Backend",categoryId:"backend",projectDescription:"Built high-performance microservices in Go handling 100K requests/second. Implemented distributed caching with Redis cluster.",status:"available",education:"B.Tech in Computer Engineering",location:"Nagpur, India"}],eg=[{id:"sdet",title:"SDET / QA Automation",shortName:"SDET",icon:"🔬",count:25},{id:"backend",title:"Backend Developers",shortName:"Backend",icon:"⚙️",count:18},{id:"fullstack",title:"Full Stack Developers",shortName:"Full Stack",icon:"🌐",count:22},{id:"ai",title:"AI / Automation Engineers",shortName:"AI/ML",icon:"🤖",count:12}],ji={talents:Zf,categories:eg},tg={class:"tc-section tc-how-it-works"},ng={class:"steps-container"},sg={class:"step-number"},ig={class:"step-icon"},ag={class:"step-title"},og={class:"step-desc"},rg={key:0,class:"step-connector"},lg={class:"tc-section tc-highlights"},cg={class:"highlights-grid"},dg={class:"highlight-icon"},ug={class:"tc-section tc-categories"},pg={class:"categories-grid"},mg=["onClick"],fg={class:"category-icon"},gg={class:"tc-section tc-talent-pool",id:"talent-pool"},hg={class:"talent-filters"},vg=["onClick"],yg={class:"talent-grid"},bg={class:"talent-header"},wg={class:"talent-avatar"},Sg={class:"talent-info"},xg={class:"talent-id"},kg={class:"talent-skills"},Tg={class:"talent-meta"},Cg={class:"experience"},Ag={key:0,class:"talent-location"},Pg={class:"talent-project"},_g={class:"talent-actions"},Eg=["onClick"],Ig=["onClick","disabled"],Rg={class:"tc-section tc-assurance"},Lg={class:"assurance-grid"},Mg={class:"assurance-icon"},Dg={class:"request-modal"},Bg={class:"form-group"},qg={class:"form-group"},Og={class:"form-group"},Fg=["value"],Ng={class:"form-group"},Ug={class:"form-group"},Wg={class:"profile-modal"},jg={class:"profile-header"},Hg={class:"profile-avatar"},$g={class:"profile-info"},Jg={class:"profile-id"},Gg={class:"profile-body"},zg={class:"profile-section"},Vg={class:"profile-skills"},Kg={class:"profile-section"},Qg={class:"profile-section"},Xg={class:"profile-actions"},Yg=["disabled"],Zg={__name:"TalentCloud",setup(e){const t=M(!1),n=M(!1),i=M(null),a=M(null),o=M("all"),r=()=>{var T;const G=document.querySelector(".header");G&&((((T=document.querySelector(".talent-cloud"))==null?void 0:T.scrollTop)||window.scrollY)>100?G.classList.add("header-hidden"):G.classList.remove("header-hidden"))};Tn(()=>{const G=document.querySelector(".talent-cloud");G&&G.addEventListener("scroll",r),window.addEventListener("scroll",r)}),Cn(()=>{const G=document.querySelector(".talent-cloud");G&&G.removeEventListener("scroll",r),window.removeEventListener("scroll",r);const T=document.querySelector(".header");T&&T.classList.remove("header-hidden")});const l=M({company:"",email:"",category:"",count:1,requirements:""}),c=[{icon:"📋",title:"Share Requirement",description:"Tell us your project needs and team requirements"},{icon:"🎯",title:"Get Matched Talent",description:"We match you with pre-vetted professionals"},{icon:"🚀",title:"Deploy & Work",description:"Onboard talent and start working immediately"},{icon:"📊",title:"Evaluate Performance",description:"Monitor progress with continuous feedback"},{icon:"✅",title:"Continue / Hire / Replace",description:"Flexible options based on your needs"}],u=[{icon:"🎓",title:"Pre-Trained Talent",description:"All professionals are trained on industry standards"},{icon:"💼",title:"Real Project Experience",description:"Hands-on experience with actual projects"},{icon:"🔄",title:"Flexible Deployment",description:"Scale up or down based on your needs"},{icon:"🔁",title:"Replacement Support",description:"Quick replacement if expectations not met"},{icon:"📈",title:"Continuous Upskilling",description:"Talent stays updated with latest technologies"},{icon:"👨‍🏫",title:"Mentor-Backed Performance",description:"Guided by experienced industry mentors"}],d=ji.categories,v=M(ji.talents),C=[{icon:"✅",title:"Quality-Checked Talent",description:"Every professional goes through rigorous assessment"},{icon:"📊",title:"Performance Monitoring",description:"Continuous tracking and feedback loops"},{icon:"🤝",title:"Reliable Engagement",description:"Transparent and flexible engagement models"},{icon:"👥",title:"Bench Strength",description:"Ready pool of talent for quick deployment"}],k=ye(()=>o.value==="all"?v.value:v.value.filter(G=>G.categoryId===o.value));function w(G){a.value=a.value===G?null:G,o.value=G,P()}function P(){var G;(G=document.getElementById("talent-pool"))==null||G.scrollIntoView({behavior:"smooth"})}function J(){t.value=!0}function j(){t.value=!0}function B(G){i.value=G,n.value=!0}function Y(G){n.value=!1,l.value.category=(G==null?void 0:G.categoryId)||"",t.value=!0}function H(){console.log("Request submitted:",l.value),alert("Request submitted successfully! We will contact you soon."),t.value=!1,l.value={company:"",email:"",category:"",count:1,requirements:""}}return(G,T)=>{var ee,oe,X,ae,pe,U,le,de,_;return f(),g("div",{class:"talent-cloud",onScroll:r,ref:"talentCloudRef"},[s("section",{class:"tc-hero"},[s("div",{class:"tc-hero-content"},[T[13]||(T[13]=s("span",{class:"tc-badge"},"Talent-as-a-Service",-1)),T[14]||(T[14]=s("h1",{class:"tc-hero-title"},[Ue("Hire. Evaluate. Scale —"),s("br"),Ue("Through Our Talent Network")],-1)),T[15]||(T[15]=s("p",{class:"tc-hero-subtitle"}," Access pre-trained, industry-ready talent. Deploy them on real work, evaluate performance, and scale your team with flexibility. ",-1)),s("div",{class:"tc-hero-buttons"},[s("button",{class:"tc-btn primary",onClick:J},[...T[11]||(T[11]=[s("span",{class:"btn-icon"},"🚀",-1),Ue(" Request Talent ",-1)])]),s("button",{class:"tc-btn secondary",onClick:P},[...T[12]||(T[12]=[s("span",{class:"btn-icon"},"👥",-1),Ue(" Explore Talent Pool ",-1)])])])]),T[16]||(T[16]=Ke('<div class="tc-hero-visual" data-v-2d22a8cc><div class="floating-cards" data-v-2d22a8cc><div class="float-card card-1" data-v-2d22a8cc>👨‍💻</div><div class="float-card card-2" data-v-2d22a8cc>👩‍💻</div><div class="float-card card-3" data-v-2d22a8cc>🧑‍💻</div></div></div>',1))]),s("section",tg,[T[17]||(T[17]=s("h2",{class:"tc-section-title"},"How It Works",-1)),s("div",ng,[(f(),g(Q,null,te(c,(b,F)=>s("div",{class:"step",key:F},[s("div",sg,m(F+1),1),s("div",ig,m(b.icon),1),s("h3",ag,m(b.title),1),s("p",og,m(b.description),1),F<c.length-1?(f(),g("div",rg)):K("",!0)])),64))])]),s("section",lg,[T[18]||(T[18]=s("h2",{class:"tc-section-title"},"Key Highlights",-1)),s("div",cg,[(f(),g(Q,null,te(u,b=>s("div",{class:"highlight-card",key:b.title},[s("div",dg,m(b.icon),1),s("h3",null,m(b.title),1),s("p",null,m(b.description),1)])),64))])]),s("section",ug,[T[20]||(T[20]=s("h2",{class:"tc-section-title"},"Talent Categories",-1)),s("div",pg,[(f(!0),g(Q,null,te(Dn(d),b=>(f(),g("div",{class:V(["category-card",{active:a.value===b.id}]),key:b.id,onClick:F=>w(b.id)},[s("div",fg,m(b.icon),1),s("h3",null,m(b.title),1),s("p",null,m(b.count)+" professionals",1),T[19]||(T[19]=s("button",{class:"category-cta"},"View Talent",-1))],10,mg))),128))])]),s("section",gg,[T[22]||(T[22]=s("h2",{class:"tc-section-title"},"Talent Pool",-1)),T[23]||(T[23]=s("p",{class:"tc-section-subtitle"},"Browse our pre-trained, industry-ready professionals",-1)),s("div",hg,[s("button",{class:V(["filter-btn",{active:o.value==="all"}]),onClick:T[0]||(T[0]=b=>o.value="all")},"All",2),(f(!0),g(Q,null,te(Dn(d),b=>(f(),g("button",{key:b.id,class:V(["filter-btn",{active:o.value===b.id}]),onClick:F=>o.value=b.id},m(b.shortName),11,vg))),128))]),s("div",yg,[(f(!0),g(Q,null,te(k.value,b=>(f(),g("div",{class:"talent-card",key:b.id},[s("div",bg,[s("div",wg,m(b.avatar),1),s("div",Sg,[s("h3",null,m(b.name),1),s("span",xg,m(b.uniqueId),1)]),s("span",{class:V(["status-badge",b.status])},m(b.status==="available"?"Available":"Deployed"),3)]),s("div",kg,[(f(!0),g(Q,null,te(b.skills,F=>(f(),g("span",{class:"skill-tag",key:F},m(F),1))),128))]),s("div",Tg,[s("span",Cg,m(b.experience),1)]),b.location?(f(),g("div",Ag,[s("span",null,"📍 "+m(b.location),1),T[21]||(T[21]=s("span",{class:"divider"},"•",-1)),s("span",null,"🎓 "+m(b.education),1)])):K("",!0),s("p",Pg,m(b.projectDescription),1),s("div",_g,[s("button",{class:"action-btn view",onClick:F=>B(b)},"View Profile",8,Eg),s("button",{class:"action-btn request",onClick:F=>Y(b),disabled:b.status!=="available"}," Request Talent ",8,Ig)])]))),128))])]),s("section",Rg,[T[24]||(T[24]=s("h2",{class:"tc-section-title"},"Platform Assurance",-1)),s("div",Lg,[(f(),g(Q,null,te(C,b=>s("div",{class:"assurance-item",key:b.title},[s("div",Mg,m(b.icon),1),s("h3",null,m(b.title),1),s("p",null,m(b.description),1)])),64))])]),s("section",{class:"tc-section tc-final-cta"},[s("div",{class:"cta-content"},[T[25]||(T[25]=s("h2",null,"Build your team with ready-to-perform talent",-1)),T[26]||(T[26]=s("p",null,"Get started today and access our network of skilled professionals",-1)),s("div",{class:"cta-buttons"},[s("button",{class:"tc-btn primary large",onClick:J}," Request Talent "),s("button",{class:"tc-btn secondary large",onClick:j}," Talk to Us ")])])]),t.value?(f(),g("div",{key:0,class:"modal-overlay",onClick:T[7]||(T[7]=je(b=>t.value=!1,["self"]))},[s("div",Dg,[s("button",{class:"modal-close",onClick:T[1]||(T[1]=b=>t.value=!1)},"✕"),T[34]||(T[34]=s("h2",null,"Request Talent",-1)),s("form",{onSubmit:je(H,["prevent"]),class:"request-form"},[s("div",Bg,[T[27]||(T[27]=s("label",null,"Company Name",-1)),Ge(s("input",{type:"text","onUpdate:modelValue":T[2]||(T[2]=b=>l.value.company=b),placeholder:"Enter company name",required:""},null,512),[[pt,l.value.company]])]),s("div",qg,[T[28]||(T[28]=s("label",null,"Email",-1)),Ge(s("input",{type:"email","onUpdate:modelValue":T[3]||(T[3]=b=>l.value.email=b),placeholder:"Enter email",required:""},null,512),[[pt,l.value.email]])]),s("div",Og,[T[30]||(T[30]=s("label",null,"Talent Category",-1)),Ge(s("select",{"onUpdate:modelValue":T[4]||(T[4]=b=>l.value.category=b),required:""},[T[29]||(T[29]=s("option",{value:""},"Select category",-1)),(f(!0),g(Q,null,te(Dn(d),b=>(f(),g("option",{key:b.id,value:b.id},m(b.title),9,Fg))),128))],512),[[ao,l.value.category]])]),s("div",Ng,[T[31]||(T[31]=s("label",null,"Number of Resources",-1)),Ge(s("input",{type:"number","onUpdate:modelValue":T[5]||(T[5]=b=>l.value.count=b),min:"1",placeholder:"1",required:""},null,512),[[pt,l.value.count]])]),s("div",Ug,[T[32]||(T[32]=s("label",null,"Requirements",-1)),Ge(s("textarea",{"onUpdate:modelValue":T[6]||(T[6]=b=>l.value.requirements=b),placeholder:"Describe your requirements...",rows:"4"},null,512),[[pt,l.value.requirements]])]),T[33]||(T[33]=s("button",{type:"submit",class:"tc-btn primary full-width"},"Submit Request",-1))],32)])])):K("",!0),n.value?(f(),g("div",{key:1,class:"modal-overlay",onClick:T[10]||(T[10]=je(b=>n.value=!1,["self"]))},[s("div",Wg,[s("button",{class:"modal-close",onClick:T[8]||(T[8]=b=>n.value=!1)},"✕"),s("div",jg,[s("div",Hg,m((ee=i.value)==null?void 0:ee.avatar),1),s("div",$g,[s("h2",null,m((oe=i.value)==null?void 0:oe.name),1),s("span",Jg,m((X=i.value)==null?void 0:X.uniqueId),1),s("span",{class:V(["status-badge",(ae=i.value)==null?void 0:ae.status])},m(((pe=i.value)==null?void 0:pe.status)==="available"?"Available":"Deployed"),3)])]),s("div",Gg,[s("div",zg,[T[35]||(T[35]=s("h3",null,"Skills",-1)),s("div",Vg,[(f(!0),g(Q,null,te((U=i.value)==null?void 0:U.skills,b=>(f(),g("span",{class:"skill-tag",key:b},m(b),1))),128))])]),s("div",Kg,[T[36]||(T[36]=s("h3",null,"Experience",-1)),s("p",null,m((le=i.value)==null?void 0:le.experience),1)]),s("div",Qg,[T[37]||(T[37]=s("h3",null,"Recent Project",-1)),s("p",null,m((de=i.value)==null?void 0:de.projectDescription),1)])]),s("div",Xg,[s("button",{class:"tc-btn primary",onClick:T[9]||(T[9]=b=>Y(i.value)),disabled:((_=i.value)==null?void 0:_.status)!=="available"}," Request This Talent ",8,Yg)])])])):K("",!0)],544)}}},eh=Qe(Zg,[["__scopeId","data-v-2d22a8cc"]]),th={},nh={class:"about-page"};function sh(e,t){return f(),g("div",nh,[...t[0]||(t[0]=[Ke('<section class="about-hero" data-v-3b532ffe><div class="hero-bg" data-v-3b532ffe></div><div class="hero-content" data-v-3b532ffe><div class="hero-badge" data-v-3b532ffe>🌱 Talent Lifecycle Platform</div><h1 class="hero-title" data-v-3b532ffe>MedhaSphere –<br data-v-3b532ffe><span class="accent" data-v-3b532ffe>Talent Lifecycle</span> Platform</h1><p class="hero-tagline" data-v-3b532ffe>From Learning to Hiring – One Complete Ecosystem</p><p class="hero-desc" data-v-3b532ffe>A platform connecting skilled talent with companies through real proof of work. Not just resumes — validated skills, live projects, and data-driven matching.</p><div class="hero-stats" data-v-3b532ffe><div class="stat" data-v-3b532ffe><div class="stat-num" data-v-3b532ffe>10x<span data-v-3b532ffe>+</span></div><div class="stat-label" data-v-3b532ffe>Faster Hiring</div></div><div class="stat" data-v-3b532ffe><div class="stat-num" data-v-3b532ffe>100<span data-v-3b532ffe>%</span></div><div class="stat-label" data-v-3b532ffe>Proof-Backed Talent</div></div><div class="stat" data-v-3b532ffe><div class="stat-num" data-v-3b532ffe>0<span data-v-3b532ffe> Mis-hires</span></div><div class="stat-label" data-v-3b532ffe>Pre-validated Pipeline</div></div></div></div></section><section class="who-section" id="who" data-v-3b532ffe><div class="section-header" data-v-3b532ffe><div class="section-tag" data-v-3b532ffe>Users</div><h2 class="section-title" data-v-3b532ffe>Who Uses This Platform?</h2><div class="section-divider" data-v-3b532ffe></div><p class="section-sub" data-v-3b532ffe>Two sides of the same ecosystem — learners growing into opportunities, companies finding ready-made talent.</p></div><div class="who-grid" data-v-3b532ffe><div class="who-card" data-v-3b532ffe><div class="who-icon" data-v-3b532ffe>🎓</div><h3 data-v-3b532ffe>Talent — Students &amp; Learners</h3><p data-v-3b532ffe>Individuals who want to learn, prove their skills, and land better opportunities through structured tracks and real-world exposure.</p><div class="who-tags" data-v-3b532ffe><span class="who-tag" data-v-3b532ffe>College Students</span><span class="who-tag" data-v-3b532ffe>Self-learners</span><span class="who-tag" data-v-3b532ffe>Career Switchers</span><span class="who-tag" data-v-3b532ffe>Fresh Graduates</span></div></div><div class="who-card" data-v-3b532ffe><div class="who-icon" data-v-3b532ffe>🏢</div><h3 data-v-3b532ffe>Talent Seekers — Companies &amp; Recruiters</h3><p data-v-3b532ffe>Organizations that need verified, industry-ready candidates without lengthy sourcing cycles — fast, flexible, and reliable.</p><div class="who-tags" data-v-3b532ffe><span class="who-tag" data-v-3b532ffe>Startups</span><span class="who-tag" data-v-3b532ffe>Enterprises</span><span class="who-tag" data-v-3b532ffe>HR Teams</span><span class="who-tag" data-v-3b532ffe>Talent Scouts</span></div></div></div></section><section class="flow-section" id="talent" data-v-3b532ffe><div class="section-header" data-v-3b532ffe><div class="section-tag" data-v-3b532ffe>Talent Journey</div><h2 class="section-title" data-v-3b532ffe>How Talent Grows on MedhaSphere</h2><div class="section-divider" data-v-3b532ffe></div><p class="section-sub" data-v-3b532ffe>A structured path from entry to employment — no shortcuts, just proven skill-building.</p></div><div class="flow-grid" data-v-3b532ffe><div class="flow-step" data-v-3b532ffe><div class="step-icon" data-v-3b532ffe>🚪</div><div class="step-num" data-v-3b532ffe>1</div><h4 data-v-3b532ffe>Join</h4><p data-v-3b532ffe>Via college partner or individually — open to all</p></div><div class="flow-step" data-v-3b532ffe><div class="step-icon" data-v-3b532ffe>📚</div><div class="step-num" data-v-3b532ffe>2</div><h4 data-v-3b532ffe>Learn</h4><p data-v-3b532ffe>Seminars, crash courses, curated resources &amp; mentors</p></div><div class="flow-step" data-v-3b532ffe><div class="step-icon" data-v-3b532ffe>🛠️</div><div class="step-num" data-v-3b532ffe>3</div><h4 data-v-3b532ffe>Prove</h4><p data-v-3b532ffe>Complete Task Tracks to validate skills with real output</p></div><div class="flow-step" data-v-3b532ffe><div class="step-icon" data-v-3b532ffe>🚀</div><div class="step-num" data-v-3b532ffe>4</div><h4 data-v-3b532ffe>Compete</h4><p data-v-3b532ffe>Hackathons, challenges, live industry projects</p></div><div class="flow-step" data-v-3b532ffe><div class="step-icon" data-v-3b532ffe>🏆</div><div class="step-num" data-v-3b532ffe>5</div><h4 data-v-3b532ffe>Succeed</h4><p data-v-3b532ffe>Better jobs, higher pay, multiple opportunities</p></div></div></section><section class="company-section" id="company" data-v-3b532ffe><div class="section-header" data-v-3b532ffe><div class="section-tag" data-v-3b532ffe>Company Journey</div><h2 class="section-title" data-v-3b532ffe>How Companies Hire on MedhaSphere</h2><div class="section-divider" data-v-3b532ffe></div><p class="section-sub" data-v-3b532ffe>Skip the sourcing chaos. Get directly to talent that&#39;s already been validated.</p></div><div class="steps-list" data-v-3b532ffe><div class="step-card" data-v-3b532ffe><div class="step-circle" data-v-3b532ffe>🔑</div><div class="step-content" data-v-3b532ffe><h4 data-v-3b532ffe>Join the Platform</h4><p data-v-3b532ffe>Register your company and set up your hiring profile in minutes.</p></div></div><div class="step-card" data-v-3b532ffe><div class="step-circle" data-v-3b532ffe>📋</div><div class="step-content" data-v-3b532ffe><h4 data-v-3b532ffe>Submit Requirements</h4><p data-v-3b532ffe>Define the role, skills, team size, and timeline you need.</p></div></div><div class="step-card" data-v-3b532ffe><div class="step-circle" data-v-3b532ffe>⚡</div><div class="step-content" data-v-3b532ffe><h4 data-v-3b532ffe>Instant Access</h4><p data-v-3b532ffe>Get matched with pre-validated candidates — no CV screening needed.</p></div></div><div class="step-card" data-v-3b532ffe><div class="step-circle" data-v-3b532ffe>🔄</div><div class="step-content" data-v-3b532ffe><h4 data-v-3b532ffe>Flexible Hiring</h4><p data-v-3b532ffe>Talent-as-a-Service, full-time hiring, or easy replacement options.</p></div></div><div class="step-card" data-v-3b532ffe><div class="step-circle" data-v-3b532ffe>🤝</div><div class="step-content" data-v-3b532ffe><h4 data-v-3b532ffe>Long-Term Partnership</h4><p data-v-3b532ffe>Build a continuous talent pipeline. Grow your team without friction.</p></div></div></div></section><section class="vision-section" id="vision" data-v-3b532ffe><div class="section-header light" data-v-3b532ffe><div class="section-tag light" data-v-3b532ffe>Platform Vision</div><h2 class="section-title light" data-v-3b532ffe>Where MedhaSphere Is Headed</h2><div class="section-divider" data-v-3b532ffe></div><p class="section-sub light" data-v-3b532ffe>We&#39;re building the most intelligent talent ecosystem — from pilot to platform to industry standard.</p></div><div class="vision-grid" data-v-3b532ffe><div class="vision-card" data-v-3b532ffe><div class="vision-icon" data-v-3b532ffe>🤖</div><h4 data-v-3b532ffe>AI-Based Matching</h4><p data-v-3b532ffe>Candidates matched to roles based on verified skills and project history — not keywords.</p><div class="vision-pill" data-v-3b532ffe>🔬 In Development</div></div><div class="vision-card" data-v-3b532ffe><div class="vision-icon" data-v-3b532ffe>⚙️</div><h4 data-v-3b532ffe>Automated Hiring Pipeline</h4><p data-v-3b532ffe>End-to-end automation — from requirement to offer letter, without manual effort.</p><div class="vision-pill" data-v-3b532ffe>📍 Roadmap Q3</div></div><div class="vision-card" data-v-3b532ffe><div class="vision-icon" data-v-3b532ffe>📊</div><h4 data-v-3b532ffe>Lifecycle Management</h4><p data-v-3b532ffe>Track talent from first course to career milestones inside one integrated system.</p><div class="vision-pill" data-v-3b532ffe>🌐 Coming Soon</div></div><div class="vision-card" data-v-3b532ffe><div class="vision-icon" data-v-3b532ffe>🌱</div><h4 data-v-3b532ffe>Pilot → Scale → Ecosystem</h4><p data-v-3b532ffe>Starting focused, growing nationally — and eventually becoming the talent OS for India.</p><div class="vision-pill" data-v-3b532ffe>🚀 Vision 2027</div></div></div></section><section class="why-section" id="why" data-v-3b532ffe><div class="section-header" data-v-3b532ffe><div class="section-tag" data-v-3b532ffe>Differentiators</div><h2 class="section-title" data-v-3b532ffe>Why MedhaSphere?</h2><div class="section-divider" data-v-3b532ffe></div><p class="section-sub" data-v-3b532ffe>We didn&#39;t build another job board. We built a proof-of-work hiring infrastructure.</p></div><div class="why-grid" data-v-3b532ffe><div class="why-card" data-v-3b532ffe><div class="why-icon" data-v-3b532ffe>⚡</div><h4 data-v-3b532ffe>Faster Hiring</h4><p data-v-3b532ffe>Skip sourcing. Go from requirement to shortlist in hours, not weeks.</p></div><div class="why-card" data-v-3b532ffe><div class="why-icon" data-v-3b532ffe>✅</div><h4 data-v-3b532ffe>Skilled Candidates Only</h4><p data-v-3b532ffe>Every candidate has completed structured learning and task validation before they enter the pool.</p></div><div class="why-card" data-v-3b532ffe><div class="why-icon" data-v-3b532ffe>🔍</div><h4 data-v-3b532ffe>Real Proof of Work</h4><p data-v-3b532ffe>Portfolios backed by actual tasks, challenges, and project submissions — not just self-claimed skills.</p></div><div class="why-card" data-v-3b532ffe><div class="why-icon" data-v-3b532ffe>🏭</div><h4 data-v-3b532ffe>Industry-Ready Talent</h4><p data-v-3b532ffe>Our curriculum is built around what companies actually need — no gap between college and the workplace.</p></div></div></section><section class="cta-section" data-v-3b532ffe><div class="cta-content" data-v-3b532ffe><div class="section-tag light" data-v-3b532ffe>Get Started</div><h2 class="cta-title" data-v-3b532ffe>Ready to Join the <span class="accent" data-v-3b532ffe>Ecosystem?</span></h2><p class="cta-desc" data-v-3b532ffe>Whether you&#39;re building your career or building your team — MedhaSphere is your starting point.</p><div class="cta-cards" data-v-3b532ffe><div class="cta-card" data-v-3b532ffe><div class="cta-card-icon" data-v-3b532ffe>🎓</div><h3 data-v-3b532ffe>Join as Talent</h3><p data-v-3b532ffe>Learn, validate, and get hired faster through real proof of work.</p><button class="cta-btn" data-v-3b532ffe>Start Learning →</button></div><div class="cta-card" data-v-3b532ffe><div class="cta-card-icon" data-v-3b532ffe>🏢</div><h3 data-v-3b532ffe>Hire Talent</h3><p data-v-3b532ffe>Access pre-validated candidates without the hiring circus.</p><button class="cta-btn" data-v-3b532ffe>Post Requirements →</button></div></div></div></section><footer class="about-footer" data-v-3b532ffe><div class="footer-content" data-v-3b532ffe><div class="footer-brand" data-v-3b532ffe><h3 data-v-3b532ffe>📚 MedhaSphere</h3><p data-v-3b532ffe>Empowering Minds · Delivering Solutions</p></div><div class="footer-divider" data-v-3b532ffe></div><p class="footer-copy" data-v-3b532ffe>© 2025 <span data-v-3b532ffe>MedhaSphere</span>. All rights reserved. · Talent Lifecycle Platform · Built for the Future of Work.</p></div></footer>',8)])])}const ih=Qe(th,[["render",sh],["__scopeId","data-v-3b532ffe"]]),Ks="medhasphere_auth",Hi={username:"testuser.automation",password:"think123"};function lo(){try{const e=localStorage.getItem(Ks);if(e)return JSON.parse(e)}catch(e){console.error("Error reading auth state:",e)}return{isLoggedIn:!1,user:null}}function ah(){return lo().isLoggedIn}function oh(){return lo().user}async function rh(e,t){if(await new Promise(n=>setTimeout(n,500)),e===Hi.username&&t===Hi.password){const n={username:e,displayName:"Test User",email:"testuser@medhasphere.com",loginTime:new Date().toISOString()};return localStorage.setItem(Ks,JSON.stringify({isLoggedIn:!0,user:n})),{success:!0,message:"Welcome back!",user:n}}return{success:!1,message:"Invalid credentials"}}function lh(){return localStorage.removeItem(Ks),{success:!0,message:"Logged out successfully"}}async function ch(e){return await new Promise(t=>setTimeout(t,500)),{success:!1,message:"Registration will be enabled soon"}}const dh=["sdet","java","ai","talentforge"];function uh(e){return dh.includes(e)}const ph={class:"login-container"},mh={class:"login-card"},fh={class:"form-group"},gh={class:"input-wrapper"},hh={key:0,class:"error-text"},vh={class:"form-group"},yh={class:"input-wrapper"},bh=["type"],wh={key:0,class:"error-text"},Sh={class:"form-options"},xh={class:"remember-me"},kh=["disabled"],Th={key:0,class:"spinner"},Ch={key:1},Ah={__name:"Login",emits:["login-success","go-register"],setup(e,{emit:t}){const n=t,i=M(""),a=M(""),o=M(!1),r=M(!1),l=M(!1),c=xn({username:"",password:""}),u=()=>{c.username="",c.password="";let C=!0;return i.value.trim()||(c.username="Username is required",C=!1),a.value||(c.password="Password is required",C=!1),C},d=async()=>{if(u()){l.value=!0;try{const C=await rh(i.value.trim(),a.value);C.success?n("login-success",{message:C.message,user:C.user}):c.password=C.message}catch{c.password="An error occurred. Please try again."}finally{l.value=!1}}},v=()=>{n("go-register")};return(C,k)=>(f(),g("div",ph,[s("div",mh,[k[12]||(k[12]=Ke('<div class="login-header" data-v-f4ebabdb><div class="login-logo" data-v-f4ebabdb>📚</div><h1 class="login-title" data-v-f4ebabdb><span class="logo-medha" data-v-f4ebabdb>Medha</span><span class="logo-sphere" data-v-f4ebabdb>sphere</span></h1><p class="login-subtitle" data-v-f4ebabdb>Sign in to continue your learning journey</p></div>',1)),s("form",{onSubmit:je(d,["prevent"]),class:"login-form"},[s("div",fh,[k[5]||(k[5]=s("label",{for:"username"},"Username / Email",-1)),s("div",gh,[k[4]||(k[4]=s("span",{class:"input-icon"},"👤",-1)),Ge(s("input",{type:"text",id:"username","onUpdate:modelValue":k[0]||(k[0]=w=>i.value=w),placeholder:"Enter your username",class:V({error:c.username}),autocomplete:"username"},null,2),[[pt,i.value]])]),c.username?(f(),g("span",hh,m(c.username),1)):K("",!0)]),s("div",vh,[k[7]||(k[7]=s("label",{for:"password"},"Password",-1)),s("div",yh,[k[6]||(k[6]=s("span",{class:"input-icon"},"🔒",-1)),Ge(s("input",{type:o.value?"text":"password",id:"password","onUpdate:modelValue":k[1]||(k[1]=w=>a.value=w),placeholder:"Enter your password",class:V({error:c.password}),autocomplete:"current-password"},null,10,bh),[[ro,a.value]]),s("button",{type:"button",class:"toggle-password",onClick:k[2]||(k[2]=w=>o.value=!o.value)},m(o.value?"🙈":"👁️"),1)]),c.password?(f(),g("span",wh,m(c.password),1)):K("",!0)]),s("div",Sh,[s("label",xh,[Ge(s("input",{type:"checkbox","onUpdate:modelValue":k[3]||(k[3]=w=>r.value=w)},null,512),[[Vs,r.value]]),k[8]||(k[8]=s("span",{class:"checkmark"},null,-1)),k[9]||(k[9]=Ue(" Remember me ",-1))]),k[10]||(k[10]=s("a",{href:"#",class:"forgot-link"},"Forgot password?",-1))]),s("button",{type:"submit",class:"login-btn",disabled:l.value},[l.value?(f(),g("span",Th)):(f(),g("span",Ch,"Sign In"))],8,kh),k[11]||(k[11]=s("div",{class:"divider"},[s("span",null,"or")],-1)),s("button",{type:"button",class:"register-btn",onClick:v}," Create New Account ")],32),k[13]||(k[13]=s("div",{class:"login-footer"},[s("p",null,"Protected by MedhaSphere Security")],-1))]),k[14]||(k[14]=Ke('<div class="login-visual" data-v-f4ebabdb><div class="visual-content" data-v-f4ebabdb><h2 data-v-f4ebabdb>Welcome to MedhaSphere</h2><p data-v-f4ebabdb>Empowering Minds · Delivering Solutions</p><div class="features-list" data-v-f4ebabdb><div class="feature-item" data-v-f4ebabdb><span class="feature-icon" data-v-f4ebabdb>🎯</span><span data-v-f4ebabdb>Industry-Ready Skills</span></div><div class="feature-item" data-v-f4ebabdb><span class="feature-icon" data-v-f4ebabdb>💼</span><span data-v-f4ebabdb>Career Opportunities</span></div><div class="feature-item" data-v-f4ebabdb><span class="feature-icon" data-v-f4ebabdb>🏆</span><span data-v-f4ebabdb>Skill Validation</span></div></div></div></div>',1))]))}},Ph=Qe(Ah,[["__scopeId","data-v-f4ebabdb"]]),_h={class:"register-container"},Eh={class:"register-card"},Ih={class:"form-group"},Rh={class:"input-wrapper"},Lh={class:"form-group"},Mh={class:"input-wrapper"},Dh={class:"form-group"},Bh={class:"input-wrapper"},qh={class:"form-group"},Oh={class:"input-wrapper"},Fh=["type"],Nh={class:"form-group"},Uh={class:"terms-label"},Wh=["disabled"],jh={key:0,class:"spinner"},Hh={key:1},$h={key:0,class:"coming-soon-overlay"},Jh={class:"coming-soon-card"},Gh={class:"register-footer"},zh={__name:"Register",emits:["go-login","register-attempt"],setup(e,{emit:t}){const n=t,i=M(""),a=M(""),o=M(""),r=M(""),l=M(!1),c=M(!1),u=M(!1),d=M(!1),v=async()=>{u.value=!0;try{const k=await ch({fullname:i.value,email:a.value,username:o.value,password:r.value});d.value=!0,n("register-attempt",{message:k.message})}catch{d.value=!0}finally{u.value=!1}},C=()=>{n("go-login")};return(k,w)=>(f(),g("div",_h,[s("div",Eh,[s("div",{class:"register-header"},[s("button",{class:"back-btn",onClick:C}," ← Back to Login "),w[7]||(w[7]=Ke('<div class="register-logo" data-v-a16bf4c4>📚</div><h1 class="register-title" data-v-a16bf4c4><span class="logo-medha" data-v-a16bf4c4>Medha</span><span class="logo-sphere" data-v-a16bf4c4>sphere</span></h1><p class="register-subtitle" data-v-a16bf4c4>Create your account</p>',3))]),s("form",{onSubmit:je(v,["prevent"]),class:"register-form"},[s("div",Ih,[w[9]||(w[9]=s("label",{for:"fullname"},"Full Name",-1)),s("div",Rh,[w[8]||(w[8]=s("span",{class:"input-icon"},"👤",-1)),Ge(s("input",{type:"text",id:"fullname","onUpdate:modelValue":w[0]||(w[0]=P=>i.value=P),placeholder:"Enter your full name"},null,512),[[pt,i.value]])])]),s("div",Lh,[w[11]||(w[11]=s("label",{for:"email"},"Email Address",-1)),s("div",Mh,[w[10]||(w[10]=s("span",{class:"input-icon"},"📧",-1)),Ge(s("input",{type:"email",id:"email","onUpdate:modelValue":w[1]||(w[1]=P=>a.value=P),placeholder:"Enter your email"},null,512),[[pt,a.value]])])]),s("div",Dh,[w[13]||(w[13]=s("label",{for:"username"},"Username",-1)),s("div",Bh,[w[12]||(w[12]=s("span",{class:"input-icon"},"🆔",-1)),Ge(s("input",{type:"text",id:"username","onUpdate:modelValue":w[2]||(w[2]=P=>o.value=P),placeholder:"Choose a username"},null,512),[[pt,o.value]])])]),s("div",qh,[w[15]||(w[15]=s("label",{for:"password"},"Password",-1)),s("div",Oh,[w[14]||(w[14]=s("span",{class:"input-icon"},"🔒",-1)),Ge(s("input",{type:l.value?"text":"password",id:"password","onUpdate:modelValue":w[3]||(w[3]=P=>r.value=P),placeholder:"Create a password"},null,8,Fh),[[ro,r.value]]),s("button",{type:"button",class:"toggle-password",onClick:w[4]||(w[4]=P=>l.value=!l.value)},m(l.value?"🙈":"👁️"),1)])]),s("div",Nh,[s("label",Uh,[Ge(s("input",{type:"checkbox","onUpdate:modelValue":w[5]||(w[5]=P=>c.value=P)},null,512),[[Vs,c.value]]),w[16]||(w[16]=s("span",{class:"checkmark"},null,-1)),w[17]||(w[17]=Ue(" I agree to the Terms of Service and Privacy Policy ",-1))])]),s("button",{type:"submit",class:"register-btn",disabled:u.value},[u.value?(f(),g("span",jh)):(f(),g("span",Hh,"Create Account"))],8,Wh)],32),d.value?(f(),g("div",$h,[s("div",Jh,[w[18]||(w[18]=s("div",{class:"coming-soon-icon"},"🚧",-1)),w[19]||(w[19]=s("h3",null,"Coming Soon!",-1)),w[20]||(w[20]=s("p",null,"Registration will be enabled soon. Please check back later or contact support for early access.",-1)),s("button",{class:"dismiss-btn",onClick:w[6]||(w[6]=P=>d.value=!1)},"Got it")])])):K("",!0),s("div",Gh,[s("p",null,[w[21]||(w[21]=Ue("Already have an account? ",-1)),s("a",{href:"#",onClick:je(C,["prevent"])},"Sign In")])])]),w[22]||(w[22]=Ke('<div class="register-visual" data-v-a16bf4c4><div class="visual-content" data-v-a16bf4c4><h2 data-v-a16bf4c4>Join MedhaSphere</h2><p data-v-a16bf4c4>Start your journey to becoming industry-ready</p><div class="benefits-list" data-v-a16bf4c4><div class="benefit-item" data-v-a16bf4c4><span class="benefit-icon" data-v-a16bf4c4>📚</span><div class="benefit-text" data-v-a16bf4c4><h4 data-v-a16bf4c4>Learn</h4><p data-v-a16bf4c4>Access curated courses and resources</p></div></div><div class="benefit-item" data-v-a16bf4c4><span class="benefit-icon" data-v-a16bf4c4>🏆</span><div class="benefit-text" data-v-a16bf4c4><h4 data-v-a16bf4c4>Prove</h4><p data-v-a16bf4c4>Validate your skills with real projects</p></div></div><div class="benefit-item" data-v-a16bf4c4><span class="benefit-icon" data-v-a16bf4c4>💼</span><div class="benefit-text" data-v-a16bf4c4><h4 data-v-a16bf4c4>Grow</h4><p data-v-a16bf4c4>Get hired by top companies</p></div></div></div></div></div>',1))]))}},Vh=Qe(zh,[["__scopeId","data-v-a16bf4c4"]]),Kh={class:"toast-icon"},Qh={class:"toast-message"},Xh={__name:"Toast",props:{message:{type:String,default:""},type:{type:String,default:"info"},duration:{type:Number,default:3e3},show:{type:Boolean,default:!1}},emits:["close"],setup(e,{emit:t}){const n=e,i=t,a=M(!1),o=ye(()=>{const r={success:"✓",error:"✗",warning:"⚠",info:"ℹ"};return r[n.type]||r.info});return qn(()=>n.show,r=>{r&&(a.value=!0,setTimeout(()=>{a.value=!1,i("close")},n.duration))}),(r,l)=>(f(),Wt(Aa,{to:"body"},[fe($e,{name:"toast"},{default:Ne(()=>[a.value?(f(),g("div",{key:0,class:V(["toast",e.type])},[s("span",Kh,m(o.value),1),s("span",Qh,m(e.message),1)],2)):K("",!0)]),_:1})]))}},Yh=Qe(Xh,[["__scopeId","data-v-a3fc1977"]]),Zh={class:"popup-card"},ev={class:"popup-message"},tv={class:"popup-actions"},nv="You're about to unlock premium content! Sign in to enjoy a personalized experience, track your progress, and accelerate your growth journey with us.",sv={__name:"AuthGuardPopup",props:{show:{type:Boolean,default:!1},customMessage:{type:String,default:""}},emits:["close","login","register"],setup(e){return(t,n)=>(f(),Wt(Aa,{to:"body"},[fe($e,{name:"popup"},{default:Ne(()=>[e.show?(f(),g("div",{key:0,class:"popup-overlay",onClick:n[3]||(n[3]=je(i=>t.$emit("close"),["self"]))},[s("div",Zh,[s("button",{class:"popup-close",onClick:n[0]||(n[0]=i=>t.$emit("close"))},"✕"),n[6]||(n[6]=s("div",{class:"popup-icon"},[s("span",{class:"icon-main"},"🚀"),s("span",{class:"icon-sparkle s1"},"✨"),s("span",{class:"icon-sparkle s2"},"⭐"),s("span",{class:"icon-sparkle s3"},"💫")],-1)),n[7]||(n[7]=s("h2",{class:"popup-title"},"You're Exploring Something Amazing!",-1)),s("p",ev,m(e.customMessage||nv),1),n[8]||(n[8]=s("div",{class:"popup-features"},[s("div",{class:"feature"},[s("span",{class:"feature-icon"},"📚"),s("span",null,"Personalized Learning Path")]),s("div",{class:"feature"},[s("span",{class:"feature-icon"},"📊"),s("span",null,"Track Your Progress")]),s("div",{class:"feature"},[s("span",{class:"feature-icon"},"🏆"),s("span",null,"Earn Certificates & Badges")])],-1)),s("div",tv,[s("button",{class:"btn-login",onClick:n[1]||(n[1]=i=>t.$emit("login"))},[...n[4]||(n[4]=[s("span",{class:"btn-icon"},"🔐",-1),Ue(" Login to Continue ",-1)])]),s("button",{class:"btn-register",onClick:n[2]||(n[2]=i=>t.$emit("register"))},[...n[5]||(n[5]=[s("span",{class:"btn-icon"},"✨",-1),Ue(" Create Account ",-1)])])]),n[9]||(n[9]=s("p",{class:"popup-footer"},[Ue(" Join "),s("strong",null,"1000+"),Ue(" learners already on their journey! ")],-1))])])):K("",!0)]),_:1})]))}},iv=Qe(sv,[["__scopeId","data-v-5fdec26f"]]),av={key:1,class:"profile-container"},ov={class:"avatar-text"},rv={key:0,class:"dropdown-menu"},lv={class:"dropdown-header"},cv={class:"user-avatar"},dv={class:"user-info"},uv={class:"user-name"},pv={class:"user-email"},mv={__name:"ProfileDropdown",props:{isLoggedIn:{type:Boolean,default:!1},user:{type:Object,default:null}},emits:["login","logout","profile","settings"],setup(e,{emit:t}){const n=e,i=t,a=M(!1),o=M(null),r=ye(()=>{var w;return(w=n.user)!=null&&w.displayName?n.user.displayName.split(" ").map(P=>P[0]).join("").toUpperCase().slice(0,2):"U"}),l=()=>{a.value=!a.value},c=w=>{o.value&&!o.value.contains(w.target)&&(a.value=!1)},u=()=>{a.value=!1,i("logout")},d=()=>{a.value=!1,i("profile")},v=()=>{a.value=!1},C=()=>{a.value=!1},k=()=>{a.value=!1,i("settings")};return Tn(()=>{document.addEventListener("click",c)}),Cn(()=>{document.removeEventListener("click",c)}),(w,P)=>(f(),g("div",{class:"profile-wrapper",ref_key:"dropdownRef",ref:o},[e.isLoggedIn?(f(),g("div",av,[s("button",{class:V(["profile-btn avatar-btn",{active:a.value}]),onClick:l},[s("span",ov,m(r.value),1),P[2]||(P[2]=s("span",{class:"online-indicator"},null,-1))],2),fe($e,{name:"dropdown"},{default:Ne(()=>{var J,j;return[a.value?(f(),g("div",rv,[s("div",lv,[s("div",cv,m(r.value),1),s("div",dv,[s("p",uv,m(((J=e.user)==null?void 0:J.displayName)||"User"),1),s("p",pv,m(((j=e.user)==null?void 0:j.email)||""),1)])]),P[8]||(P[8]=s("div",{class:"dropdown-divider"},null,-1)),s("div",{class:"dropdown-items"},[s("button",{class:"dropdown-item",onClick:d},[...P[3]||(P[3]=[s("span",{class:"item-icon"},"👤",-1),s("span",null,"My Profile",-1),s("span",{class:"item-badge soon"},"Soon",-1)])]),s("button",{class:"dropdown-item",onClick:v},[...P[4]||(P[4]=[s("span",{class:"item-icon"},"📊",-1),s("span",null,"My Progress",-1),s("span",{class:"item-badge soon"},"Soon",-1)])]),s("button",{class:"dropdown-item",onClick:C},[...P[5]||(P[5]=[s("span",{class:"item-icon"},"🏆",-1),s("span",null,"Certificates",-1),s("span",{class:"item-badge soon"},"Soon",-1)])]),s("button",{class:"dropdown-item",onClick:k},[...P[6]||(P[6]=[s("span",{class:"item-icon"},"⚙️",-1),s("span",null,"Settings",-1),s("span",{class:"item-badge soon"},"Soon",-1)])])]),P[9]||(P[9]=s("div",{class:"dropdown-divider"},null,-1)),s("button",{class:"dropdown-item logout",onClick:u},[...P[7]||(P[7]=[s("span",{class:"item-icon"},"🚪",-1),s("span",null,"Logout",-1)])])])):K("",!0)]}),_:1})])):(f(),g("button",{key:0,class:"profile-btn login-btn",onClick:P[0]||(P[0]=J=>w.$emit("login"))},[...P[1]||(P[1]=[s("span",{class:"btn-icon"},"🔐",-1)])]))],512))}},fv=Qe(mv,[["__scopeId","data-v-7e14ef9d"]]),$i="/assets/1775264017792-B6ppRIZ1.png",Ji="/assets/1775264871247-CDyqfg_6.png",Gi="/assets/1775265121160-BEykj0RJ.png",gv={key:2,class:"dashboard"},hv={class:"hero-slides"},vv={class:"hero-indicators"},yv=["onClick"],bv={class:"hero-bottom"},wv={key:1,class:"main-content"},Sv={class:"courses-section"},xv={class:"courses"},kv=["onClick"],Tv={class:"card-badge"},Cv={class:"icon"},Av={class:"card-tags"},Pv=["onClick"],_v={class:"talentcloud-section"},Ev={class:"talentforge-section"},Iv={class:"testimonials"},Rv={class:"testimonials-grid"},Lv={class:"rating"},Mv={class:"testimonial-text"},Dv={class:"testimonial-author"},Bv={class:"author-avatar"},qv={class:"author-name"},Ov={class:"author-role"},Fv={key:2,class:"course-content"},Nv={__name:"Dashboard",setup(e){const t=M(null),n=M(0),i=[$i,Ji,Gi],a=M(!1),o=M(!1),r=M(!1),l=M(!1),c=M(!1),u=M(!1),d=M(!1),v=M(!1),C=M(null),k=M(null),w=xn({show:!1,message:"",type:"info"}),P=(F,q="info")=>{w.message=F,w.type=q,w.show=!0};let J=null,j=0;const B=()=>{const F=window.scrollY;a.value=F>100,F>j&&F>80?l.value=!0:l.value=!1,j=F},Y=()=>{const F=document.querySelector(".main-content");F&&F.scrollIntoView({behavior:"smooth"})},H=()=>{v.value=ah(),C.value=oh()};Tn(()=>{H(),J=setInterval(()=>{n.value=(n.value+1)%i.length},5e3),window.addEventListener("scroll",B)}),Cn(()=>{J&&clearInterval(J),window.removeEventListener("scroll",B)});const G=[{id:"sdet",name:"SDET Mastery",icon:"🔬",description:"Master automation testing with Selenium, Playwright, API testing & CI/CD pipelines.",badge:"🔥 Most Popular",tags:["Industry Ready","Job Oriented","Hands-on"],lessons:120,duration:"6 Months",level:"Beginner → Pro"},{id:"java",name:"Java Development",icon:"☕",description:"Build enterprise-grade applications with Core Java, Spring Boot & Microservices.",badge:"⭐ Top Rated",tags:["Future Ready","Enterprise Level","In Demand"],lessons:95,duration:"5 Months",level:"Beginner → Pro"},{id:"ai",name:"AI Developer",icon:"🤖",description:"Master AI, Machine Learning, LLMs, Prompt Engineering & build intelligent applications.",badge:"🚀 New",tags:["Cutting Edge","High Demand","Future Tech"],lessons:80,duration:"4 Months",level:"Beginner → Pro"}],T=[{avatar:"👨‍💼",name:"Rajesh Kumar",role:"QA Engineer",text:"Medhasphere helped me transition from manual testing to automation within 3 months!",image:$i},{avatar:"👩‍💻",name:"Priya Sharma",role:"Java Developer",text:"The structured learning path and practical exercises made Java concepts crystal clear.",image:Ji},{avatar:"👨‍🎓",name:"Arjun Patel",role:"SDET Specialist",text:"Best platform for learning SDET fundamentals. Highly recommended for career growth!",image:Gi}],ee=F=>{if(uh(F)&&!v.value){k.value=F,d.value=!0;return}t.value=F},oe=()=>{d.value=!1,c.value=!0},X=()=>{d.value=!1,u.value=!0},ae=()=>{t.value=null},pe=()=>{c.value=!0,u.value=!1},U=()=>{u.value=!0,c.value=!1},le=F=>{v.value=!0,C.value=F.user,c.value=!1,P(F.message,"success"),k.value&&(t.value=k.value,k.value=null)},de=F=>{P(F.message,"warning")},_=()=>{lh(),v.value=!1,C.value=null,t.value=null,P("Logged out successfully","info")},b=ye(()=>t.value==="sdet"?xd:t.value==="java"?Fu:t.value==="ai"?Yp:t.value==="talentforge"?Yf:t.value==="talentcloud"?eh:t.value==="about"?ih:null);return(F,q)=>c.value?(f(),Wt(Ph,{key:0,onLoginSuccess:le,onGoRegister:U})):u.value?(f(),Wt(Vh,{key:1,onGoLogin:pe,onRegisterAttempt:de})):(f(),g("div",gv,[fe(Yh,{show:w.show,message:w.message,type:w.type,onClose:q[0]||(q[0]=ue=>w.show=!1)},null,8,["show","message","type"]),s("header",{class:V(["header",{"header-scrolled":a.value,"header-hidden":l.value}])},[s("h1",{onClick:ae,class:"logo"},[...q[11]||(q[11]=[Ue("📚 ",-1),s("span",{class:"logo-medha"},"Medha",-1),s("span",{class:"logo-sphere"},"sphere",-1)])]),s("button",{class:"mobile-menu-btn",onClick:q[1]||(q[1]=ue=>r.value=!r.value)},[s("span",{class:V(["hamburger",{open:r.value}])},null,2)]),s("nav",{class:V(["nav-links",{"mobile-open":r.value}])},[t.value?(f(),g("span",{key:0,class:"nav-item home-btn",onClick:ae}," 🏠 Home ")):K("",!0),s("span",{class:V(["nav-item talentcloud-nav",{active:t.value==="talentcloud"}]),onClick:q[2]||(q[2]=ue=>{ee("talentcloud"),r.value=!1})}," ☁️ Talent Cloud ",2),s("span",{class:V(["nav-item talentforge-nav",{active:t.value==="talentforge"}]),onClick:q[3]||(q[3]=ue=>{ee("talentforge"),r.value=!1})}," ⚡ TalentForge ",2),s("span",{class:V(["nav-item about-nav",{active:t.value==="about"}]),onClick:q[4]||(q[4]=ue=>{ee("about"),r.value=!1})}," 🌱 About ",2),fe(fv,{isLoggedIn:v.value,user:C.value,onLogin:pe,onLogout:_},null,8,["isLoggedIn","user"])],2)],2),fe(iv,{show:d.value,onClose:q[5]||(q[5]=ue=>d.value=!1),onLogin:oe,onRegister:X},null,8,["show"]),t.value?K("",!0):(f(),g("section",{key:0,class:"hero",onMouseenter:q[7]||(q[7]=ue=>o.value=!0),onMouseleave:q[8]||(q[8]=ue=>o.value=!1)},[s("div",hv,[(f(),g(Q,null,te(i,(ue,Te)=>s("div",{key:Te,class:V(["hero-slide",{active:n.value===Te}]),style:Qt({backgroundImage:`url(${ue})`})},null,6)),64))]),q[14]||(q[14]=s("div",{class:"hero-edge-overlay"},null,-1)),s("div",vv,[(f(),g(Q,null,te(i,(ue,Te)=>s("span",{key:Te,class:V(["indicator",{active:n.value===Te}]),onClick:Ie=>n.value=Te},null,10,yv)),64))]),q[15]||(q[15]=Ke('<div class="hero-tagline-container" data-v-b5f8744e><h2 class="emerging-tagline" data-v-b5f8744e><span class="tagline-word" data-v-b5f8744e>Empowering</span><span class="tagline-word" data-v-b5f8744e>Minds</span><span class="tagline-divider" data-v-b5f8744e>·</span><span class="tagline-word" data-v-b5f8744e>Delivering</span><span class="tagline-word" data-v-b5f8744e>Solutions</span></h2></div>',1)),s("div",bv,[s("button",{class:"hero-cta",onClick:Y},[...q[12]||(q[12]=[s("span",{class:"cta-icon"},"🚀",-1),Ue(" Explore Skill Tracks ",-1),s("span",{class:"cta-arrow"},"↓",-1)])]),s("button",{class:"hero-cta talent-cloud-cta",onClick:q[6]||(q[6]=ue=>ee("talentcloud"))},[...q[13]||(q[13]=[s("span",{class:"cta-icon"},"☁️",-1),Ue(" Explore Talent Cloud ",-1),s("span",{class:"cta-arrow"},"→",-1)])])])],32)),t.value?K("",!0):(f(),g("div",wv,[s("section",Sv,[q[18]||(q[18]=s("h2",{class:"section-title"},"Choose Your Learning Path",-1)),s("div",xv,[(f(),g(Q,null,te(G,ue=>s("div",{class:"card",key:ue.id,onClick:Te=>ee(ue.id)},[q[17]||(q[17]=s("div",{class:"card-background"},null,-1)),s("div",Tv,m(ue.badge),1),s("div",Cv,m(ue.icon),1),s("h3",null,m(ue.name),1),s("p",null,m(ue.description),1),s("div",Av,[(f(!0),g(Q,null,te(ue.tags,Te=>(f(),g("span",{class:"tag",key:Te},m(Te),1))),128))]),s("button",{class:"btn",onClick:je(Te=>ee(ue.id),["stop"])},[...q[16]||(q[16]=[s("span",{class:"btn-text"},"Start Learning",-1),s("span",{class:"btn-arrow"},"→",-1)])],8,Pv)],8,kv)),64))])]),s("section",_v,[s("div",{class:"tc-banner",onClick:q[9]||(q[9]=ue=>ee("talentcloud"))},[...q[19]||(q[19]=[Ke('<div class="tc-banner-bg" data-v-b5f8744e></div><div class="tc-banner-content" data-v-b5f8744e><div class="tc-banner-left" data-v-b5f8744e><span class="tc-badge" data-v-b5f8744e>☁️ Talent-as-a-Service</span><h2 class="tc-banner-title" data-v-b5f8744e>Hire Talent</h2><p class="tc-banner-tagline" data-v-b5f8744e>Access and deploy industry-ready professionals</p><div class="tc-features" data-v-b5f8744e><span class="tc-feature" data-v-b5f8744e>🎯 Pre-Trained Talent</span><span class="tc-feature" data-v-b5f8744e>🚀 Quick Deployment</span><span class="tc-feature" data-v-b5f8744e>📊 Performance Tracking</span></div></div><div class="tc-banner-right" data-v-b5f8744e><button class="tc-enter-btn" data-v-b5f8744e> Explore Talent Cloud → </button></div></div>',2)])])]),s("section",Ev,[s("div",{class:"tf-banner",onClick:q[10]||(q[10]=ue=>ee("talentforge"))},[...q[20]||(q[20]=[Ke('<div class="tf-banner-bg" data-v-b5f8744e></div><div class="tf-banner-content" data-v-b5f8744e><div class="tf-banner-left" data-v-b5f8744e><span class="tf-badge" data-v-b5f8744e>⚡ Skill Validation &amp; Hiring</span><h2 class="tf-banner-title" data-v-b5f8744e>TalentForge</h2><p class="tf-banner-tagline" data-v-b5f8744e>Forge your skills. Prove your talent. Get hired.</p><div class="tf-features" data-v-b5f8744e><span class="tf-feature" data-v-b5f8744e>🧠 QuickFire Quizzes</span><span class="tf-feature" data-v-b5f8744e>🧩 Real Challenges</span><span class="tf-feature" data-v-b5f8744e>💰 Earn Coins</span><span class="tf-feature" data-v-b5f8744e>🏆 Get Hired</span></div></div><div class="tf-banner-right" data-v-b5f8744e><div class="tf-stats-preview" data-v-b5f8744e><div class="tf-stat-item" data-v-b5f8744e><span class="tf-stat-value" data-v-b5f8744e>0</span><span class="tf-stat-label" data-v-b5f8744e>Active Users</span></div><div class="tf-stat-item" data-v-b5f8744e><span class="tf-stat-value" data-v-b5f8744e>0</span><span class="tf-stat-label" data-v-b5f8744e>Companies Hiring</span></div><div class="tf-stat-item" data-v-b5f8744e><span class="tf-stat-value" data-v-b5f8744e>$0</span><span class="tf-stat-label" data-v-b5f8744e>Rewards Given</span></div></div><button class="tf-enter-btn" data-v-b5f8744e> Enter TalentForge → </button></div></div>',2)])])]),s("section",Iv,[q[21]||(q[21]=s("h2",{class:"section-title"},"⭐ What Our Learners Say",-1)),s("div",Rv,[(f(),g(Q,null,te(T,(ue,Te)=>s("div",{class:"testimonial-card",key:Te},[s("div",Lv,[(f(),g(Q,null,te(5,Ie=>s("span",{key:Ie,class:"star"},"★")),64))]),s("p",Mv,'"'+m(ue.text)+'"',1),s("div",Dv,[s("div",Bv,m(ue.avatar),1),s("div",null,[s("p",qv,m(ue.name),1),s("p",Ov,m(ue.role),1)])])])),64))])]),q[22]||(q[22]=s("footer",{class:"footer"},[s("div",{class:"footer-content"},[s("div",{class:"footer-brand"},[s("h3",null,"📚 Medhasphere"),s("p",null,"Empowering Minds · Delivering Solutions")]),s("div",{class:"footer-links"},[s("p",null,"© 2025 Medhasphere. All rights reserved.")])])],-1))])),t.value?(f(),g("div",Fv,[(f(),Wt(Sr(b.value)))])):K("",!0)]))}},Uv=Qe(Nv,[["__scopeId","data-v-b5f8744e"]]),Wv={__name:"App",setup(e){return(t,n)=>(f(),Wt(Uv))}};jl(Wv).mount("#app");
