/**
 * Immutability (불변성)
 * 
 * 원시 데이터 : string, number, boolean, undefined, null ...
 *              생긴게 다르면 다른 데이터
 * 참조형 데이터 : object, array, function ...
 *              기존 메모리를 참조하게 함.
 */

let a = 1;
let b = 4;
console.log(a,b,a === b);
b = a;
console.log(a,b,a === b);
a=7;
console.log(a,b,a === b);
let c =1;
console.log(b,c,b === c);
