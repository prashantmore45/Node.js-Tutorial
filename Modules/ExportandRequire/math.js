const add = (a, b) => {
    return a + b; 
};


const subs = (a, b) => {
    return b - a; 
};


const mult = (a, b) => {
    return a * b; 
};


const div = (a, b) => {
    return b / a; 
};


/* 1.Common js export for single function: */

module.exports = add; 

/* 2.For multiple exports: a) modules.exports.property */

module.exports.add = add;
module.exports.mult = mult;

/* b) modules.exports = {} */

module.exports = {add, subs, mult, div};