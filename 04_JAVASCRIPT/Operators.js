// Arithmetic Operations:

console.log(2+3);
console.log(2-3);
console.log(2*3);
console.log(2/3);
console.log(2%3);
console.log(2**3);

let str1 = "Hello";
let str2 = ", Parth!";
let str3 = str1+str2;

console.log("\n"+str3+"\n");

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2\n");

console.log(+true);
console.log(+false);

console.log(+"");

// Assignment Operators:

let n = 10;

console.log("\n"+(n+=2));
console.log((n-=2));
console.log((n*=2));
console.log((n/=2));
console.log((n%=2));
console.log((n**=2));

// Comparison Operators:

console.log("\n"+(2>1));
console.log(2>=1);
console.log(2<1);
console.log(2<=1);
console.log(2==1);
console.log(2!=1);
console.log(2===1);
console.log(2!==1);


console.log("\n"+("2" > 1));
console.log("02" > 1);

console.log(null > 0);      // converts null into 0
console.log(null == 0);     // converts null into NaN
console.log(null >= 0);     // converts null into 0

console.log("\n"+("2" == 2));
console.log("2" === 2);

// Logical Operators:

let a = true, b = false;
console.log("\n"+(a && b));  
console.log(a || b); 
console.log(!a);      

// Bitwise Operators:

let num = 5; // In binary: 0101
console.log("\n"+(num << 1)); // 1010 in binary = 10
console.log(num & 3);  // 0101 & 0011 = 0001 = 1

// The Ternary (Conditional) Operator:

let age = 18;
let status = age >= 18 ? "\nadult" : "\nminor";
console.log(status);