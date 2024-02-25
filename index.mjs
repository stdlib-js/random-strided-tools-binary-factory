// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-method-in@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-binary@v0.2.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function u(u){if(!s(u))throw new TypeError(l("1rp3c",u));if(!r(u,"factory"))throw new TypeError(l("1rpFM","factory"));return function(){var s,r;if(arguments.length>0){if(!i(r=arguments[0]))throw new TypeError(l("1rp2V",r));s=u.factory(r)}else r={},s=u;r&&r.prng?(n(f,"seed",null),n(f,"seedLength",null),t(f,"state",d(null),o),n(f,"stateLength",null),n(f,"byteLength",null)):(e(f,"seed",(function(){return f.PRNG.seed})),e(f,"seedLength",(function(){return f.PRNG.seedLength})),t(f,"state",(function(){return f.PRNG.state}),(function(t){f.PRNG.state=t})),e(f,"stateLength",(function(){return f.PRNG.stateLength})),e(f,"byteLength",(function(){return f.PRNG.byteLength})));return n(f,"PRNG",s.PRNG),n(f,"ndarray",(function(t,e,n,r,i,d,o,l,u,f){return m.ndarray([e,i,l],[t],[n,d,u],[r,o,f],s),l})),f;function f(t,e,n,r,i,d,o){return m([e,r,d],[t],[n,i,o],s),d}}}export{u as default};
//# sourceMappingURL=index.mjs.map
