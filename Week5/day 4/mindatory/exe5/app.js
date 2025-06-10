const _ = require('lodash');
const math = require('./math')

console.log("add:", math.add(2, 3));           
console.log("multiply:", math.multiply(4, 5))

const nums = [1, 2, 3, 4];
console.log("sum using lodash:", _.sum(nums));