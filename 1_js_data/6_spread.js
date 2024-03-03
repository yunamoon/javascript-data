/**
 * Spread (전개 연산자)
 */

const names = ['문유나' , '문세나' , '문한나', '홍길동'];
console.log(names);
console.log(...names);

const toObject =(a,b,...c) => ({  a, b, c });

console.log(toObject(...names));