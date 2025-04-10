//  Type Conversion:

let marks = 78;

console.log("\n"+marks);
console.log(typeof marks);

let marksInString = marks.toString();

console.log("\n"+marksInString);
console.log(typeof marksInString);

let marksInNumber = Number(marksInString);
console.log("\n"+marksInNumber);
console.log(typeof marksInNumber);

let a = "Pa45h";
let aInNumber = Number(a);
console.log("\n"+aInNumber);
console.log(typeof aInNumber);

let b = null;
let nullInNumber = Number(b);
console.log("\n"+nullInNumber);
console.log(typeof nullInNumber);

let flag = true;
let flagInNumber = Number(flag);
console.log("\n"+flagInNumber);
console.log(typeof flagInNumber);

let isTrue = 1;
// if "" ==> false
// if "Parth" ==> true
let booleanIsTrue = Boolean(isTrue);
console.log("\n"+booleanIsTrue);
console.log(typeof booleanIsTrue);

let num = 123456789;
let numInString = String(num);
console.log("\n"+numInString);
console.log(typeof numInString);

