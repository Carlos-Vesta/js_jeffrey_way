
// We use functions to reuse the code

var doSomething = function(paramOne, paramTwo, fn) {

    paramOne = paramOne + 3;
    paramOne = paramOne + 1;
    paramOne = paramOne * 8; 

    return fn(paramOne, paramTwo);
};


function sum(paramOne, paramTwo) {
    return paramOne + paramTwo;
};


function product(paramOne, paramTwo) {
    return paramOne * paramTwo;
};

// Set One
var foo = doSomething(2, 2, sum);

// Set Two
var bar = doSomething(3, 2, product);


console.log(foo);
console.log(bar);
