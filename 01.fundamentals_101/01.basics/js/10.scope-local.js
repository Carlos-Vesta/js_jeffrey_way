/**
 * LOCAL SCOPE
 * 
 * - Variables and functions are limited to the function they are
 * defined in.
 * 
 * - variables and functions cannot be accessed from outside the function.
 */

var globalVar = "This is a global variable.";

var globalFunction = function(paramOne) {
    var localVar = "This is a local variable.";

    var localFunction = function() {
        var superLocalVar = "Hello, World!";

        alert(superLocalVar);
        alert(localVar);
        alert(paramOne);
        alert(globalVar);
    };

    localFunction();

};

globalFunction(2);

/**
 * - Tudo que for definido fora da função, não consegue ver ou ter acesso
 * ao que foi definido dentro da função.
 * 
 * - Mas o que foi definido dentro da função, pode ver e ter acesso a todo
 * que estiver fora da função.
 * 
 */