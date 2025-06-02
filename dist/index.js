"use strict";var q=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var o=q(function(g,v){
var s=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),a=require('@stdlib/constants-float64-pinf/dist');function c(r,e,t){var i,u;return!s(r)||!s(e)||!s(t)||r===a||e===a||e>r||t>r?NaN:(i=(r-1)*(r*r)*(r*(r+1)-6*e*(r-e)-6*t*(r-t)),i+=6*t*e*(r-e)*(r-t)*(5*r-6),u=t*e*(r-e)*(r-t)*(r-2)*(r-3),i/u)}v.exports=c
});var p=o();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
