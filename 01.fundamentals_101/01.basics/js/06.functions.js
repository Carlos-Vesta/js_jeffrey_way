
var foo = doSomething(2, 2); // 96
var bar = doSomething(3, 2); // 112

function doSomething(paramOne, paramTwo) {

    paramOne = paramOne + 3;
    paramOne = paramOne + 1;
    paramOne = paramOne * 8;

    return paramOne * paramTwo;
}

console.log(foo);
console.log(bar);