(self.webpackChunkfigma_react_boilerplate=self.webpackChunkfigma_react_boilerplate||[]).push([[8121],{908:function(t,r,n){var e=n(8136)(n(7009),"DataView");t.exports=e},9676:function(t,r,n){var e=n(5403),o=n(2747),c=n(6037),u=n(4154),i=n(7728);function a(t){var r=-1,n=null==t?0:t.length;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}a.prototype.clear=e,a.prototype.delete=o,a.prototype.get=c,a.prototype.has=u,a.prototype.set=i,t.exports=a},8384:function(t,r,n){var e=n(3894),o=n(8699),c=n(4957),u=n(7184),i=n(7109);function a(t){var r=-1,n=null==t?0:t.length;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}a.prototype.clear=e,a.prototype.delete=o,a.prototype.get=c,a.prototype.has=u,a.prototype.set=i,t.exports=a},5797:function(t,r,n){var e=n(8136)(n(7009),"Map");t.exports=e},8059:function(t,r,n){var e=n(4086),o=n(9255),c=n(9186),u=n(3423),i=n(3739);function a(t){var r=-1,n=null==t?0:t.length;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}a.prototype.clear=e,a.prototype.delete=o,a.prototype.get=c,a.prototype.has=u,a.prototype.set=i,t.exports=a},8319:function(t,r,n){var e=n(8136)(n(7009),"Promise");t.exports=e},3924:function(t,r,n){var e=n(8136)(n(7009),"Set");t.exports=e},2854:function(t,r,n){var e=n(8384),o=n(511),c=n(835),u=n(707),i=n(2255),a=n(5077);function s(t){var r=this.__data__=new e(t);this.size=r.size}s.prototype.clear=o,s.prototype.delete=c,s.prototype.get=u,s.prototype.has=i,s.prototype.set=a,t.exports=s},7197:function(t,r,n){var e=n(7009).Symbol;t.exports=e},6219:function(t,r,n){var e=n(7009).Uint8Array;t.exports=e},7091:function(t,r,n){var e=n(8136)(n(7009),"WeakMap");t.exports=e},4550:function(t){t.exports=function(t,r){for(var n=-1,e=null==t?0:t.length;++n<e&&!1!==r(t[n],n,t););return t}},4903:function(t){t.exports=function(t,r){for(var n=-1,e=null==t?0:t.length,o=0,c=[];++n<e;){var u=t[n];r(u,n,t)&&(c[o++]=u)}return c}},7538:function(t,r,n){var e=n(6478),o=n(4963),c=n(7837),u=n(5174),i=n(6800),a=n(9102),s=Object.prototype.hasOwnProperty;t.exports=function(t,r){var n=c(t),f=!n&&o(t),p=!n&&!f&&u(t),v=!n&&!f&&!p&&a(t),b=n||f||p||v,l=b?e(t.length,String):[],y=l.length;for(var j in t)!r&&!s.call(t,j)||b&&("length"==j||p&&("offset"==j||"parent"==j)||v&&("buffer"==j||"byteLength"==j||"byteOffset"==j)||i(j,y))||l.push(j);return l}},1705:function(t){t.exports=function(t,r){for(var n=-1,e=r.length,o=t.length;++n<e;)t[o+n]=r[n];return t}},8463:function(t,r,n){var e=n(2526),o=n(9231),c=Object.prototype.hasOwnProperty;t.exports=function(t,r,n){var u=t[r];c.call(t,r)&&o(u,n)&&(void 0!==n||r in t)||e(t,r,n)}},7112:function(t,r,n){var e=n(9231);t.exports=function(t,r){for(var n=t.length;n--;)if(e(t[n][0],r))return n;return-1}},1855:function(t,r,n){var e=n(4503),o=n(2742);t.exports=function(t,r){return t&&e(r,o(r),t)}},5076:function(t,r,n){var e=n(4503),o=n(3961);t.exports=function(t,r){return t&&e(r,o(r),t)}},2526:function(t,r,n){var e=n(8528);t.exports=function(t,r,n){"__proto__"==r&&e?e(t,r,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[r]=n}},1905:function(t,r,n){var e=n(2854),o=n(4550),c=n(8463),u=n(1855),i=n(5076),a=n(8181),s=n(291),f=n(2455),p=n(7636),v=n(8248),b=n(5341),l=n(8383),y=n(9243),j=n(3769),x=n(548),h=n(7837),_=n(5174),d=n(103),g=n(8092),O=n(6995),w=n(2742),A=n(3961),m="[object Arguments]",S="[object Function]",z="[object Object]",P={};P[m]=P["[object Array]"]=P["[object ArrayBuffer]"]=P["[object DataView]"]=P["[object Boolean]"]=P["[object Date]"]=P["[object Float32Array]"]=P["[object Float64Array]"]=P["[object Int8Array]"]=P["[object Int16Array]"]=P["[object Int32Array]"]=P["[object Map]"]=P["[object Number]"]=P[z]=P["[object RegExp]"]=P["[object Set]"]=P["[object String]"]=P["[object Symbol]"]=P["[object Uint8Array]"]=P["[object Uint8ClampedArray]"]=P["[object Uint16Array]"]=P["[object Uint32Array]"]=!0,P["[object Error]"]=P[S]=P["[object WeakMap]"]=!1,t.exports=function t(r,n,F,U,I,k){var E,M=1&n,B=2&n,T=4&n;if(F&&(E=I?F(r,U,I,k):F(r)),void 0!==E)return E;if(!g(r))return r;var D=h(r);if(D){if(E=y(r),!M)return s(r,E)}else{var $=l(r),C=$==S||"[object GeneratorFunction]"==$;if(_(r))return a(r,M);if($==z||$==m||C&&!I){if(E=B||C?{}:x(r),!M)return B?p(r,i(E,r)):f(r,u(E,r))}else{if(!P[$])return I?r:{};E=j(r,$,M)}}k||(k=new e);var R=k.get(r);if(R)return R;k.set(r,E),O(r)?r.forEach((function(e){E.add(t(e,n,F,e,r,k))})):d(r)&&r.forEach((function(e,o){E.set(o,t(e,n,F,o,r,k))}));var V=D?void 0:(T?B?b:v:B?A:w)(r);return o(V||r,(function(e,o){V&&(e=r[o=e]),c(E,o,t(e,n,F,o,r,k))})),E}},5763:function(t,r,n){var e=n(8092),o=Object.create,c=function(){function t(){}return function(r){if(!e(r))return{};if(o)return o(r);t.prototype=r;var n=new t;return t.prototype=void 0,n}}();t.exports=c},1986:function(t,r,n){var e=n(1705),o=n(7837);t.exports=function(t,r,n){var c=r(t);return o(t)?c:e(c,n(t))}},9066:function(t,r,n){var e=n(7197),o=n(1587),c=n(3581),u=e?e.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":u&&u in Object(t)?o(t):c(t)}},4906:function(t,r,n){var e=n(9066),o=n(3141);t.exports=function(t){return o(t)&&"[object Arguments]"==e(t)}},3085:function(t,r,n){var e=n(8383),o=n(3141);t.exports=function(t){return o(t)&&"[object Map]"==e(t)}},6703:function(t,r,n){var e=n(4786),o=n(257),c=n(8092),u=n(7907),i=/^\[object .+?Constructor\]$/,a=Function.prototype,s=Object.prototype,f=a.toString,p=s.hasOwnProperty,v=RegExp("^"+f.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!c(t)||o(t))&&(e(t)?v:i).test(u(t))}},8680:function(t,r,n){var e=n(8383),o=n(3141);t.exports=function(t){return o(t)&&"[object Set]"==e(t)}},8150:function(t,r,n){var e=n(9066),o=n(4635),c=n(3141),u={};u["[object Float32Array]"]=u["[object Float64Array]"]=u["[object Int8Array]"]=u["[object Int16Array]"]=u["[object Int32Array]"]=u["[object Uint8Array]"]=u["[object Uint8ClampedArray]"]=u["[object Uint16Array]"]=u["[object Uint32Array]"]=!0,u["[object Arguments]"]=u["[object Array]"]=u["[object ArrayBuffer]"]=u["[object Boolean]"]=u["[object DataView]"]=u["[object Date]"]=u["[object Error]"]=u["[object Function]"]=u["[object Map]"]=u["[object Number]"]=u["[object Object]"]=u["[object RegExp]"]=u["[object Set]"]=u["[object String]"]=u["[object WeakMap]"]=!1,t.exports=function(t){return c(t)&&o(t.length)&&!!u[e(t)]}},3654:function(t,r,n){var e=n(2936),o=n(8836),c=Object.prototype.hasOwnProperty;t.exports=function(t){if(!e(t))return o(t);var r=[];for(var n in Object(t))c.call(t,n)&&"constructor"!=n&&r.push(n);return r}},8664:function(t,r,n){var e=n(8092),o=n(2936),c=n(4221),u=Object.prototype.hasOwnProperty;t.exports=function(t){if(!e(t))return c(t);var r=o(t),n=[];for(var i in t)("constructor"!=i||!r&&u.call(t,i))&&n.push(i);return n}},6478:function(t){t.exports=function(t,r){for(var n=-1,e=Array(t);++n<t;)e[n]=r(n);return e}},6194:function(t){t.exports=function(t){return function(r){return t(r)}}},7010:function(t,r,n){var e=n(6219);t.exports=function(t){var r=new t.constructor(t.byteLength);return new e(r).set(new e(t)),r}},8181:function(t,r,n){t=n.nmd(t);var e=n(7009),o=r&&!r.nodeType&&r,c=o&&t&&!t.nodeType&&t,u=c&&c.exports===o?e.Buffer:void 0,i=u?u.allocUnsafe:void 0;t.exports=function(t,r){if(r)return t.slice();var n=t.length,e=i?i(n):new t.constructor(n);return t.copy(e),e}},1022:function(t,r,n){var e=n(7010);t.exports=function(t,r){var n=r?e(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}},8503:function(t){var r=/\w*$/;t.exports=function(t){var n=new t.constructor(t.source,r.exec(t));return n.lastIndex=t.lastIndex,n}},4720:function(t,r,n){var e=n(7197),o=e?e.prototype:void 0,c=o?o.valueOf:void 0;t.exports=function(t){return c?Object(c.call(t)):{}}},613:function(t,r,n){var e=n(7010);t.exports=function(t,r){var n=r?e(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}},291:function(t){t.exports=function(t,r){var n=-1,e=t.length;for(r||(r=Array(e));++n<e;)r[n]=t[n];return r}},4503:function(t,r,n){var e=n(8463),o=n(2526);t.exports=function(t,r,n,c){var u=!n;n||(n={});for(var i=-1,a=r.length;++i<a;){var s=r[i],f=c?c(n[s],t[s],s,n,t):void 0;void 0===f&&(f=t[s]),u?o(n,s,f):e(n,s,f)}return n}},2455:function(t,r,n){var e=n(4503),o=n(5918);t.exports=function(t,r){return e(t,o(t),r)}},7636:function(t,r,n){var e=n(4503),o=n(8487);t.exports=function(t,r){return e(t,o(t),r)}},5525:function(t,r,n){var e=n(7009)["__core-js_shared__"];t.exports=e},8528:function(t,r,n){var e=n(8136),o=function(){try{var t=e(Object,"defineProperty");return t({},"",{}),t}catch(r){}}();t.exports=o},1032:function(t,r,n){var e="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;t.exports=e},8248:function(t,r,n){var e=n(1986),o=n(5918),c=n(2742);t.exports=function(t){return e(t,c,o)}},5341:function(t,r,n){var e=n(1986),o=n(8487),c=n(3961);t.exports=function(t){return e(t,c,o)}},2799:function(t,r,n){var e=n(5964);t.exports=function(t,r){var n=t.__data__;return e(r)?n["string"==typeof r?"string":"hash"]:n.map}},8136:function(t,r,n){var e=n(6703),o=n(40);t.exports=function(t,r){var n=o(t,r);return e(n)?n:void 0}},1137:function(t,r,n){var e=n(2709)(Object.getPrototypeOf,Object);t.exports=e},1587:function(t,r,n){var e=n(7197),o=Object.prototype,c=o.hasOwnProperty,u=o.toString,i=e?e.toStringTag:void 0;t.exports=function(t){var r=c.call(t,i),n=t[i];try{t[i]=void 0;var e=!0}catch(a){}var o=u.call(t);return e&&(r?t[i]=n:delete t[i]),o}},5918:function(t,r,n){var e=n(4903),o=n(8174),c=Object.prototype.propertyIsEnumerable,u=Object.getOwnPropertySymbols,i=u?function(t){return null==t?[]:(t=Object(t),e(u(t),(function(r){return c.call(t,r)})))}:o;t.exports=i},8487:function(t,r,n){var e=n(1705),o=n(1137),c=n(5918),u=n(8174),i=Object.getOwnPropertySymbols?function(t){for(var r=[];t;)e(r,c(t)),t=o(t);return r}:u;t.exports=i},8383:function(t,r,n){var e=n(908),o=n(5797),c=n(8319),u=n(3924),i=n(7091),a=n(9066),s=n(7907),f="[object Map]",p="[object Promise]",v="[object Set]",b="[object WeakMap]",l="[object DataView]",y=s(e),j=s(o),x=s(c),h=s(u),_=s(i),d=a;(e&&d(new e(new ArrayBuffer(1)))!=l||o&&d(new o)!=f||c&&d(c.resolve())!=p||u&&d(new u)!=v||i&&d(new i)!=b)&&(d=function(t){var r=a(t),n="[object Object]"==r?t.constructor:void 0,e=n?s(n):"";if(e)switch(e){case y:return l;case j:return f;case x:return p;case h:return v;case _:return b}return r}),t.exports=d},40:function(t){t.exports=function(t,r){return null==t?void 0:t[r]}},5403:function(t,r,n){var e=n(9620);t.exports=function(){this.__data__=e?e(null):{},this.size=0}},2747:function(t){t.exports=function(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r}},6037:function(t,r,n){var e=n(9620),o=Object.prototype.hasOwnProperty;t.exports=function(t){var r=this.__data__;if(e){var n=r[t];return"__lodash_hash_undefined__"===n?void 0:n}return o.call(r,t)?r[t]:void 0}},4154:function(t,r,n){var e=n(9620),o=Object.prototype.hasOwnProperty;t.exports=function(t){var r=this.__data__;return e?void 0!==r[t]:o.call(r,t)}},7728:function(t,r,n){var e=n(9620);t.exports=function(t,r){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=e&&void 0===r?"__lodash_hash_undefined__":r,this}},9243:function(t){var r=Object.prototype.hasOwnProperty;t.exports=function(t){var n=t.length,e=new t.constructor(n);return n&&"string"==typeof t[0]&&r.call(t,"index")&&(e.index=t.index,e.input=t.input),e}},3769:function(t,r,n){var e=n(7010),o=n(1022),c=n(8503),u=n(4720),i=n(613);t.exports=function(t,r,n){var a=t.constructor;switch(r){case"[object ArrayBuffer]":return e(t);case"[object Boolean]":case"[object Date]":return new a(+t);case"[object DataView]":return o(t,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return i(t,n);case"[object Map]":case"[object Set]":return new a;case"[object Number]":case"[object String]":return new a(t);case"[object RegExp]":return c(t);case"[object Symbol]":return u(t)}}},548:function(t,r,n){var e=n(5763),o=n(1137),c=n(2936);t.exports=function(t){return"function"!=typeof t.constructor||c(t)?{}:e(o(t))}},6800:function(t){var r=/^(?:0|[1-9]\d*)$/;t.exports=function(t,n){var e=typeof t;return!!(n=null==n?9007199254740991:n)&&("number"==e||"symbol"!=e&&r.test(t))&&t>-1&&t%1==0&&t<n}},5964:function(t){t.exports=function(t){var r=typeof t;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t}},257:function(t,r,n){var e=n(5525),o=function(){var t=/[^.]+$/.exec(e&&e.keys&&e.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();t.exports=function(t){return!!o&&o in t}},2936:function(t){var r=Object.prototype;t.exports=function(t){var n=t&&t.constructor;return t===("function"==typeof n&&n.prototype||r)}},3894:function(t){t.exports=function(){this.__data__=[],this.size=0}},8699:function(t,r,n){var e=n(7112),o=Array.prototype.splice;t.exports=function(t){var r=this.__data__,n=e(r,t);return!(n<0)&&(n==r.length-1?r.pop():o.call(r,n,1),--this.size,!0)}},4957:function(t,r,n){var e=n(7112);t.exports=function(t){var r=this.__data__,n=e(r,t);return n<0?void 0:r[n][1]}},7184:function(t,r,n){var e=n(7112);t.exports=function(t){return e(this.__data__,t)>-1}},7109:function(t,r,n){var e=n(7112);t.exports=function(t,r){var n=this.__data__,o=e(n,t);return o<0?(++this.size,n.push([t,r])):n[o][1]=r,this}},4086:function(t,r,n){var e=n(9676),o=n(8384),c=n(5797);t.exports=function(){this.size=0,this.__data__={hash:new e,map:new(c||o),string:new e}}},9255:function(t,r,n){var e=n(2799);t.exports=function(t){var r=e(this,t).delete(t);return this.size-=r?1:0,r}},9186:function(t,r,n){var e=n(2799);t.exports=function(t){return e(this,t).get(t)}},3423:function(t,r,n){var e=n(2799);t.exports=function(t){return e(this,t).has(t)}},3739:function(t,r,n){var e=n(2799);t.exports=function(t,r){var n=e(this,t),o=n.size;return n.set(t,r),this.size+=n.size==o?0:1,this}},9620:function(t,r,n){var e=n(8136)(Object,"create");t.exports=e},8836:function(t,r,n){var e=n(2709)(Object.keys,Object);t.exports=e},4221:function(t){t.exports=function(t){var r=[];if(null!=t)for(var n in Object(t))r.push(n);return r}},9494:function(t,r,n){t=n.nmd(t);var e=n(1032),o=r&&!r.nodeType&&r,c=o&&t&&!t.nodeType&&t,u=c&&c.exports===o&&e.process,i=function(){try{var t=c&&c.require&&c.require("util").types;return t||u&&u.binding&&u.binding("util")}catch(r){}}();t.exports=i},3581:function(t){var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},2709:function(t){t.exports=function(t,r){return function(n){return t(r(n))}}},7009:function(t,r,n){var e=n(1032),o="object"==typeof self&&self&&self.Object===Object&&self,c=e||o||Function("return this")();t.exports=c},511:function(t,r,n){var e=n(8384);t.exports=function(){this.__data__=new e,this.size=0}},835:function(t){t.exports=function(t){var r=this.__data__,n=r.delete(t);return this.size=r.size,n}},707:function(t){t.exports=function(t){return this.__data__.get(t)}},2255:function(t){t.exports=function(t){return this.__data__.has(t)}},5077:function(t,r,n){var e=n(8384),o=n(5797),c=n(8059);t.exports=function(t,r){var n=this.__data__;if(n instanceof e){var u=n.__data__;if(!o||u.length<199)return u.push([t,r]),this.size=++n.size,this;n=this.__data__=new c(u)}return n.set(t,r),this.size=n.size,this}},7907:function(t){var r=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return r.call(t)}catch(n){}try{return t+""}catch(n){}}return""}},8121:function(t,r,n){var e=n(1905);t.exports=function(t){return e(t,5)}},9231:function(t){t.exports=function(t,r){return t===r||t!==t&&r!==r}},4963:function(t,r,n){var e=n(4906),o=n(3141),c=Object.prototype,u=c.hasOwnProperty,i=c.propertyIsEnumerable,a=e(function(){return arguments}())?e:function(t){return o(t)&&u.call(t,"callee")&&!i.call(t,"callee")};t.exports=a},7837:function(t){var r=Array.isArray;t.exports=r},1473:function(t,r,n){var e=n(4786),o=n(4635);t.exports=function(t){return null!=t&&o(t.length)&&!e(t)}},5174:function(t,r,n){t=n.nmd(t);var e=n(7009),o=n(9488),c=r&&!r.nodeType&&r,u=c&&t&&!t.nodeType&&t,i=u&&u.exports===c?e.Buffer:void 0,a=(i?i.isBuffer:void 0)||o;t.exports=a},4786:function(t,r,n){var e=n(9066),o=n(8092);t.exports=function(t){if(!o(t))return!1;var r=e(t);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r}},4635:function(t){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},103:function(t,r,n){var e=n(3085),o=n(6194),c=n(9494),u=c&&c.isMap,i=u?o(u):e;t.exports=i},8092:function(t){t.exports=function(t){var r=typeof t;return null!=t&&("object"==r||"function"==r)}},3141:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},6995:function(t,r,n){var e=n(8680),o=n(6194),c=n(9494),u=c&&c.isSet,i=u?o(u):e;t.exports=i},9102:function(t,r,n){var e=n(8150),o=n(6194),c=n(9494),u=c&&c.isTypedArray,i=u?o(u):e;t.exports=i},2742:function(t,r,n){var e=n(7538),o=n(3654),c=n(1473);t.exports=function(t){return c(t)?e(t):o(t)}},3961:function(t,r,n){var e=n(7538),o=n(8664),c=n(1473);t.exports=function(t){return c(t)?e(t,!0):o(t)}},8174:function(t){t.exports=function(){return[]}},9488:function(t){t.exports=function(){return!1}}}]);
//# sourceMappingURL=8121.f28b19b2.chunk.js.map