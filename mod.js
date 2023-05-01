// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Math.floor;function a(a){return r(a)===a&&a>=0}var t=Number.POSITIVE_INFINITY;function n(r,n,u){var e;return!a(r)||!a(n)||!a(u)||r===t||n===t||n>r||u>r?NaN:(e=r*r*(r-1)*(r*(r+1)-6*n*(r-n)-6*u*(r-u)),(e+=6*u*n*(r-n)*(r-u)*(5*r-6))/(u*n*(r-n)*(r-u)*(r-2)*(r-3)))}export{n as default};
//# sourceMappingURL=mod.js.map
