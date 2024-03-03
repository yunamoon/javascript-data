/**
 * Object
 */

const userAge = {
    name : '문유나',
    age : 29,
}

const userEmail = {
    name : '문유나',
    email : 'moonyuna@naver.com'
}

// .assign 출처 객체들의 모든 열거 가능한 자체 속성 (en-US)을 복사해 대상 객체에 붙여넣고 그 후 대상 객체를 반환
const target = Object.assign(userAge, userEmail);
console.log(target);
console.log(userAge);
console.log(target === userAge);

const a = { k : 123};
const b = { k : 123};
console.log(a === b);

const user = {
    name : '문유나',
    age : 29,
    email : 'moonyuna@gmail.com'
}

// .keys 주어진 객체의 속성 이름들을 일반적인 반복문과 동일한 순서로 순회되는 열거할 수 있는 배열로 반환
const keys = Object.keys(user);
console.log(keys);
console.log(user['email']);
const values = keys.map(key=>  user[key]);
console.log(values);