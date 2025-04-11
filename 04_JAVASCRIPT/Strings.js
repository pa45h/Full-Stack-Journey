//  Declaring a string:

let str1 = 'Hello World';   // String with single quotes
console.log(str1); 

let str2 = "Hello World";   // String with double quotes    
console.log(str2); 

let str3 = `Hello World`;   // String with backticks (template literals)
console.log(str3); 

let str4 = new String('Hello World'); // String object
console.log(str4); 

// Embedding variables in strings:

let fName = "Parth";
let lName = "Katariya";

let str5 = "\nHello, " + fName + "!"; // Concatenation
console.log(str5);

let str6 = `Hello, ${fName}!`; // Template literals
console.log(str6);  //string interpolation

// String Methods:

console.log(`\nlength : ${fName.length}`);
console.log(`CharAt(3) : ${fName.charAt(3)}`);
console.log(`fName[2] : ${fName[2]}`);
console.log(`includes("art") : ${fName.includes("art")}`);
console.log(`startsWith("Kat") : ${fName.startsWith("Kat")}`);
console.log(`endsWith("h") : ${fName.endsWith("h")}`);
console.log(`indexOf('r') : ${fName.indexOf('r')}`);
console.log(`slice(1,4) : ${fName.slice(1,4)}`);
console.log(`toUpperCase() : ${fName.toUpperCase()}`);
console.log(`toLowerCase() : ${fName.toLowerCase()}`);
console.log(`replace("rt","45") : ${fName.replace("rt","45")}`);
console.log(`replaceAll('a','A') : ${lName.replaceAll('a','A')}`);

let str7 = "                 hello Parth                     ";
console.log(`Before: ${str7}`);
console.log(`After trim() : ${str7.trim()}`);

console.log(`split("a") : ${lName.split("a")}`);

console.log(`split("a") : ${lName.split("a").join("A")}`);
console.log(`repeat(3) : ${lName.repeat(5)}`);
