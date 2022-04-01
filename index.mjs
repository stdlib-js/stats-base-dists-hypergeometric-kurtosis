// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nonnegative-integer@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";var e=t,n=s;var r=function(t,s,r){var i;return!e(t)||!e(s)||!e(r)||t===n||s===n||s>t||r>t?NaN:(i=t*t*(t-1)*(t*(t+1)-6*s*(t-s)-6*r*(t-r)),(i+=6*r*s*(t-s)*(t-r)*(5*t-6))/(r*s*(t-s)*(t-r)*(t-2)*(t-3)))};export{r as default};
//# sourceMappingURL=index.mjs.map
