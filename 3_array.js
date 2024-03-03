/**
 * Array
 * 
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array
 */

const numbers = [1, 2, 3];
const names = ['yuna' , 'sena', 'hanna'];

console.log(numbers);
console.log(names);

// .length 아이템의 갯수
console.log(numbers.length);
console.log(names.length);
console.log([1,2,3].length);
console.log([].length);

//.concat
console.log(numbers.concat(names));
console.log(numbers);
console.log(names);

// .forEach 아이템의 수만큼 반복문이 실행
names.forEach(function(element, index, array) {
    console.log(element, index, array);
})

const a = names.forEach((item, index)=> {
    console.log(`${item}-${index}`);
})
console.log(a);

// .map  배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
const b = names.map((item, index) =>{
    return {
        id : index,
        name : item
    }
});
console.log(b);

// .filter 주어진 배열의 일부에 대한 얕은 복사본을 생성하고, 주어진 배열에서 제공된 함수에 의해 구현된 테스트를 통과한 요소로만 필터링
const c = numbers.map(number=> number < 3);
console.log(c);

const d = numbers.filter(number => number <3);
console.log(d);

// .find() 제공된 배열에서 제공된 테스트 함수를 만족하는 첫 번째 요소를 반환, 테스트 함수를 만족하는 값이 없으면 undefined가 반환
const e = names.find(name => /^y/.test(name))
console.log(e);

// .findIndex 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환, 만족하는 요소가 없으면 -1을 반환
const f = names.findIndex(name => /^y/.test(name))
console.log(f);

// .includes 배열의 항목에 특정 값이 포함되어 있는지를 판단하여 적절히 true 또는 false를 반환
const g = numbers.includes(3)
console.log(g);

const h = names.includes('lalala')
console.log(h);

/**
 * 원본 데이터가 수정되는 메소드
 */

const numbers2 =[1,2,3];
const names2 = ['yuna' , 'sena', 'hanna'];

// .psuh() 맨 뒤에 데이터 삽입
numbers2.push(4);
console.log(numbers2);

// .unshift() 맨 앞에 데이터 삽입
numbers2.unshift(0);
console.log(numbers2)

// .reverse 배열의 아이템 순서를 완전히 뒤집어서
numbers2.reverse();
console.log(numbers2);

// .splice 첫번째 인자 인덱스에서 두번째 인자 만큼 삭제
//         특정 자리에 다른 데이터를 삽입하기도 함
numbers2.splice(2,2);
console.log(numbers2);