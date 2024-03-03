/**
 * Destructuring assignment (구조 분해 할당)
 * 비구조화 할당
 */

const user = {
    name : '문유나',
    age : 29,
    email : 'moonyuna@gmail.com',
    address: '미국'
}

const { name, age ,email , address='한국'} = user;
console.log(`이름은 ${name}이고, 나이는 ${age}, 이메일은 ${email}입니다. 또, 주소는 ${address}입니다.`);

const names = ['문유나' , '문세나', '문한나'];
const [a , b, c, d] = names;
console.log(a,b,c,d);
const [ ,e ] = names;
console.log(e);