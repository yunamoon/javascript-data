// import _ from '';
import getType from './8_2_export_module.js'
import {getRendom, user as test} from './8_2_export_module.js';
// 와일드 카드
import * as R from './8_2_export_module.js';

console.log(getType('string'));
console.log(getRendom());
console.log(test);
// console.log(R);

