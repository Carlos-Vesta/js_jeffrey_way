
// FOR loop
var names = ["Valdo", "Marla", "Dinis", "Paula", "Marcela"];

for (var i = 0, len = names.length; i < len; i++) {

    console.log(names[i]);
};


console.log("\n ############## [1] ################## \n")


// WHILE loop
while (names.length > 0) {
    var element = names.pop(); // Remove elements from the array

    console.log(element);
};



console.log("\n ############## [2] ################## \n")


// Do WHILE loop
var newNames = ["Valdo", "Marla", "Dinis", "Paula", "Valter"];
var nome = 0;

do {
   console.log(newNames[nome]);
   nome++;

} while (newNames.length > nome);
