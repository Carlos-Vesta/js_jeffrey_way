
// Creating arrays
var names = ["Carlos", "Abdul", "Melvin"];
var names2 = ["Carlota", "David"];

console.log(names, names2);

// Adding new values to the array
names.push("Osvaldo", "Marta", "Gomes");
console.log(names);


// Concatenation of the two arrays
var people = names.concat(names2);
console.log(people);

// Join the two arrays
var joined = people.join(", ");
console.log(joined);

// Reverse the array elements
var reversed = people.reverse();
console.log(reversed);

// Sort the array elements
var sorted = people.sort();
console.log(sorted);