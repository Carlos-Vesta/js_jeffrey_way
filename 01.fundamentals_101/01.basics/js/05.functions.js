// Set One
// var foo = 2 + 3; // 5
// foo = foo + 1; // 6
// foo = foo * 8; // 48


// Set Two
// var bar = 3 + 3; // 6
// bar = bar + 1; // 7
// bar = bar * 8; // 56

// console.log(foo, bar)

var foo = doSomething(2); // 48
var bar = doSomething(3); // 56

function doSomething(paramOne) {

    paramOne = paramOne + 3;
    paramOne = paramOne + 1;
    paramOne = paramOne * 8;

    return paramOne;
}

console.log(foo);
console.log(bar);