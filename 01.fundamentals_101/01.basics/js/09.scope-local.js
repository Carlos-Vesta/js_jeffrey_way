/**
 * LOCAL SCOPE
 * 
 * - Variables and functions are limited to the function they are
 * defined in.
 * 
 * - variables and functions cannot be accessed from outside the function.
 */

var globalVar = "This is a global variable.";

var globalFunction = function() {
    var localVar = "This is a local variable.";
    alert(localVar);
    globalVar = "Value has been modified";
};

globalFunction();

alert(localVar); // Vai retornar um erro (localVar is not defined)
alert(globalVar);