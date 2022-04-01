// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Math.floor;var a=function(a){return r(a)===a&&a>=0},t=Number.POSITIVE_INFINITY,n=a,u=t;var e=function(r,a,t){var e;return!n(r)||!n(a)||!n(t)||r===u||a===u||a>r||t>r?NaN:(e=r*r*(r-1)*(r*(r+1)-6*a*(r-a)-6*t*(r-t)),(e+=6*t*a*(r-a)*(r-t)*(5*r-6))/(t*a*(r-a)*(r-t)*(r-2)*(r-3)))};export{e as default};
//# sourceMappingURL=mod.js.map
