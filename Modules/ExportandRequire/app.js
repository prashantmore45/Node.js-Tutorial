/* 1.single export method */

const add = require("./math");

console.log(add(5, 10));


/* 2.Multile export method #1 */ 

const {add, mult} = require("./math");

console.log(add(5, 10));
console.log(mult(5, 10));

/* #2 */

const {add, subs, mult, div} = require("./math");

console.log(add(5, 10));
console.log(mult(5, 10));
console.log(subs(5, 10));
console.log(div(5, 10));


/* using object style */

const math = require("./math");

console.log(math.add(5, 10));
console.log(math.mult(5, 10));
console.log(math.subs(5, 10));
console.log(math.div(5, 10));