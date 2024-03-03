/**
 * String 
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String
 */

// .length 문자열의 길이, 공백도 한개의 문자열
const str = '01234';
console.log(str.length);

// .indexOf 문자열의 포함 사항
const str2 = 'Hello world';
console.log(str2.indexOf('w'));
console.log(str2.indexOf('w') === -1);

// .slice 첫번째 인자에서 시작해서 두번째 인자 앞까지 잘라서 반환
console.log(str2.slice(0,3));

// replace 첫번째 인자의 문자를 찾아서 두번째 문자로 교체
console.log(str2.replace('world', 'yuna'));

// .match 문자열이 정규식과 매치되는 부분을 검색합니다.
const str3 = 'moonyuna@naver.com';
console.log(str3.match(/.+(?=@)/));
console.log(str3.match(/.+(?=@)/)[0]);

// .trim 문자열 내 공백 제거
const str4 = '     ??         ';
console.log(str4);
console.log(str4.trim());