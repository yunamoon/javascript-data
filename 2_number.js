/**
 * Number
 * 
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math
 */

const pi = 3.1415926545;
console.log(pi);

const str = pi.toFixed(2);
console.log(str);
console.log(typeof str);

const integer = parseInt(str);
const float = parseFloat(str);
console.log(integer);
console.log(float);
console.log(typeof integer, typeof float);

console.log('abs : ', Math.abs(-12));
console.log('min : ', Math.min(2,8));
console.log('max : ', Math.max(2,8));
console.log('ceil : ', Math.ceil(3.14));
console.log('floor : ', Math.floor(3.14));
console.log('round : ', Math.round(3.6));
console.log('random : ', Math.random());