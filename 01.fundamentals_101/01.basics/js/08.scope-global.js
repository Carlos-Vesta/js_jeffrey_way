/**
 * === SCOPE ===
 * 
 * - Determines the accessibility of code.
 * 
 * - GLOBAL SCOPE
 *      - Any global scope variable or function is accessible by all code
 *      within the page (including 3rd party code).
 * - Global Scope is default.
 */

var globalVar = "This is a global variable.";

var globalFunction = function() {
    alert(globalVar); // Vai mostrar o valor original da variável.
    globalVar = "Value has been modified"; // Modifica o valor original da variável.
};


globalFunction(); 

alert(globalVar); // Vai mostrar o novo valor da variável.