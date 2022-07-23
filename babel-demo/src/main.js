// import { sum } from './foo';
// import { sub } from './bar';
// import { Cat } from './foo'
let a = { ...{ age: 1 } }; //对象展开，会引入'@babel/runtime/helpers/esm/objectSpread2'

// class Dog {}

// class Tom extends Dog {} //extends，会引入'@babel/runtime/helpers/esm/inheritsLoose'

// let b = Object.assign(a, { age: 2 });

// console.log(new Cat())
console.log(a);
// console.log(b);
// console.log(new Tom());

// console.log(sum(1, 2));
// console.log(sub(1, 2));
// console.log([2, 3].includes(23));
// console.log([21, 23].includes(2352));
