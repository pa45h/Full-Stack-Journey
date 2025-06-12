// Declaration:

console.log("\n");
let obj1 = {
  fName: "Parth",
  age: 21,
  "date of birth": "08-07-2005",
  isStudent: true,
};
console.log(obj1);
console.log(typeof obj1);

console.log("\n");
let person = new Object();
person.id = 101;
person.fName = "Parth";
person.lName = "Katariya";
person.isStudent = false;
console.log(person);
console.log(typeof person);

// Accessing and Modifying:

console.log("\nobj1.fName : " + obj1.fName);
console.log("obj1.age : " + obj1.age);

console.log('\nobj1["date of birth"] : ' + obj1["date of birth"]);
console.log('obj1["isStudent"] : ' + obj1["isStudent"]);

// accessing symbol object:

console.log("\n");
let mySymbol = Symbol("Password");

let obj2 = {
  // mySymbol : "myPass"  // can't
  [mySymbol]: "myKey", // can
};
console.log(obj2);
console.log(typeof mySymbol);

// Object nesting:

console.log("\n");

let objNested = {
  "birth date": {
    date: 8,
    month: "july",
    year: 2005,
  },
};
console.log("objNested : ");
console.log(objNested);
console.log('objNested["birth date"].date : ' + objNested["birth date"].date);
console.log('objNested["birth date"].month : ' + objNested["birth date"].month);
console.log('objNested["birth date"].year : ' + objNested["birth date"].year);
console.log("\n");

// Combining Objects :

let objCombination1 = { obj1, person };
console.log(objCombination1);

console.log("\n");
let objCombination2 = Object.assign({}, obj1, person);
console.log(objCombination2);

console.log("\n");
let objCombination3 = { ...obj1, ...person };
console.log(objCombination3);

// Object Methods :

console.log("\nObject.keys(obj1) : ");
console.log(Object.keys(obj1));

console.log("\nObject.values(obj1) : ");
console.log(Object.values(obj1));

console.log("\nObject.entries(obj1) : ");
console.log(Object.entries(obj1));

console.log('\nobj1.hasOwnProperty("balance") : ');
console.log(obj1.hasOwnProperty("balance"));

// Object De-Structuring :

let { ["date of birth"]: dob } = obj1;
console.log("\ndob : "+dob);

