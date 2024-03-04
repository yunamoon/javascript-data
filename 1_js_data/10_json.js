/**
 * JSON(JavaScript Object Notation)
 * 
 * 데이터를 효율적으로 표현하고 전달하기 위한 경량의 데이터 형식
 * JavaScript 객체의 구문을 따르며, 텍스트 형식으로 구조화된 데이터를 나타내며
 * 주로 웹 애플리케이션과 서버 간의 데이터 교환에 사용
 */

import fs from 'fs';

const jsonData = fs.readFileSync('jsonData.json', 'utf-8');

console.log('user', jsonData)

const str = JSON.stringify(jsonData)
console.log('str', str)
console.log(typeof str)

const obj = JSON.parse(jsonData)
console.log('obj', obj)

