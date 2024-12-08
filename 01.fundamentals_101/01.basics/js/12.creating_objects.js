// ==== OLD WAY ====

// var obj = new Object(); // Create object using object construtor
// var str = new String(); // Create object using object construtor

// var person = new Object();

// person.firstName = "Carlos";
// person.lastName = "Vesta";
// person.getFullName = function() {
//     return person.firstName + " " + person.lastName;
//     // return this.firstName + " " + this.lastName;
// };

// console.log(person.getFullName());
// // alert(person.getFullName());


// ==== NEW WAY ====

var person = {
    firstName : "Carlos",
    lastName : "Vesta",
    getFullName : function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.getFullName());