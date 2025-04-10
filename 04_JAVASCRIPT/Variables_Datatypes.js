//++++++++++++++++++++++++++++VARIABLES++++++++++++++++++++++++++++++++
console.log("\nVariables:\n");

console.log("\nvar:");
var count = 1; // does not have block scope

if (true) {
    var count = 2;
    console.log("In Block : " + count);
}
console.log("Out Of Block : " + count);


console.log("\nlet:");
let value = 1; // Block scoped

if (true) {
    let value = 3; // can be re initialized in diff block and changed in same block
    console.log("In Block : " + value);
}
console.log("Out Of Block : " + value);

console.log("\nconst:");
const name = "Parth"; // it is also block scoped
console.log(name);

// name = "Katariya";       // throws error coz const cannot be changed

//++++++++++++++++++++++++++++DataTypes++++++++++++++++++++++++++++++++

console.log("\nDatatypes:\n");

console.log("\n*Primitive Datatypes*");

console.log("\n1.Number:");
let type = 123;
console.log(type);
console.log(typeof type);

console.log("\n2.String:");
type = "Parth Katariya";
console.log(type);
console.log(typeof type);

console.log("\n3.Boolean:");
type = true;
console.log(type);
console.log(typeof type);

console.log("\n4.Null:");
type = null;
console.log(type);
console.log(typeof type);

console.log("\n5.Undefined:");
type = undefined;
console.log(type);
console.log(typeof type);

console.log("\n6.Symbol:");
type = Symbol(123);
console.log(type);
console.log(typeof type);

let type2 = Symbol(123);
console.log("Symbol(123)==Symbol(123) ?");
let bool = (type==type2)?true:false;
console.log(bool);

console.log("\n7.BigInt:");
type = 9876543210121234567899998945879899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999234567898765432456123456789098765432178976554323123456789098765432345678909876543456789;
console.log(type);
console.log(typeof type);


console.log("\n*Non - Primitive Datatypes*");

console.log("\n1.Array:");
type = [1,"Parth",true,null,[1,2]];
console.log(type);
console.log(typeof type);

console.log("\n2.Function:");
type = function(){
    return 1;
}
console.log(type);
console.log(typeof type);

console.log("\n3.Object:");
type = {
    fName : "Parth",
    lName : "Katariya",
    DoB : [8,7,2005],
    isMale : true
};
console.log(type);
console.log(typeof type);
