/**
 * OBJECTOS (OBJECTS)
 * 
 * - Tudo em Javascript é um Objecto.
 * - Nós vivemos em um mundo Orientado a Objecto, tudo que existe no mundo
 * é um objecto.
 * 
 * Os Objectos tem duas coisas:
 * - Propriedades;
 * - Métodos;
 * 
 * I - PROPRIEDADES: são pedaços de dados que pertencem a um objecto.
 * Que podem descrever o objecto ou podem conter dados que tem algo a ver com
 * o objecto.
 * 
 * 
 * II - MÉTODOS: são acções que fazem alguma coisa com o objecto ou com
 * os dados do objecto.
 */

/**
 * O método "length", conta o número de caracteres incluindo espaços na string.
 * O comprimento da String
 */
var obj = "This is a string object.";
comprimento = obj.length; // 24

console.log(`O comprimento da string é ${comprimento}`);

// O método "indexOf()", faz a busca da esquerda para a direita.

var index = obj.indexOf("is"); // Encontra o "i" no indice 2 e não inclui o "s"
var index2 = obj.indexOf("is", index + 1); // Encontra o "i" no indice 5 e não inclui o "s"
var index3 = obj.indexOf("this"); // Não encontra o valor porque é "case sensetive" e retorna -1;

console.log(index);
console.log(index2);
console.log(index3);

console.log("####################################")


// O método "lastIndexOf()", faz a busca da direita para a esquerda

var index4 = obj.lastIndexOf("is"); // Encontra o "i" no indice 5 e não inclui o "s"
var index5 = obj.lastIndexOf("is", index4 - 1); // Encontra o "i" no indice 2 e não inclui o "s"
var index6 = obj.indexOf("this"); // Não encontra o valor porque é "case sensetive" e retorna -1;


console.log(index4);
console.log(index5);
console.log(index6);

/**
 * Extrair "SUBSTRING", uma parte da string
 * Vamos usar o método "substr()"
 */

var sub_string = obj.substr(10, 6);
console.log(sub_string);

var substring2 = obj.substring(0, 4); // 0 - start; 4 - End;
console.log(substring2);


// Método "replace()"
var newString = obj.replace("object", "value");
console.log(obj);
console.log(newString);

// Método "Uppercase()"
var upperCase = obj.toLocaleUpperCase();
console.log(upperCase);

// Método "Lowercase()"
var lowerCase = obj.toLocaleLowerCase();
console.log(lowerCase);