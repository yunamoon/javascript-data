/**
 * Lodash
 * 
 * https://lodash.com/
 * 
 * JavaScript 유틸리티 라이브러리로, 배열, 객체, 함수 등을 다루는데 유용한 다양한 메서드를 제공.
 * Lodash는 일관된 API와 성능 최적화가 특징이며, 많은 프로젝트에서 사용 중.
 */

import _ from 'lodash';

const userA = [
    {userId : '1' , name: '문유나'},
    {userId : '2' , name: '문세나'}
]

const userB = [
    {userId : '1' , name: '문유나'},
    {userId : '3' , name: '문짱구'}
]

const userC = userA.concat(userB)
console.log('concat :', userC)
// 배열 데아터 1개
console.log('uniqBy :', _.uniqBy(userC, 'userId'))
// 배열 데이터 여러개
const userD = _.unionBy(userA, userB , 'userId')
console.log('unionBy :', userD)

const users = [
    {userId : '1' , name: '문유나'},
    {userId : '2' , name: '문세나'},
    {userId : '3' , name: '문마늘'},
    {userId : '4' , name: '문대파'},
    {userId : '5' , name: '문쪽파'},
    {userId : '6' , name: '문김지'}
]
const foundUser = _.find(users, {name: '문유나'})
const foundUserIndex = _.findIndex(users, {name: '문유나'})
console.log(foundUser)
console.log(foundUserIndex)

_.remove(users, {name : '문감자'})
console.log(users)