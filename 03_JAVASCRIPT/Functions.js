// declaration and types :

function greet() {
  console.log("Hello, World!");
}
greet();

function greetMe(name) {
  console.log(`Hello, ${name}!`);
}
greetMe("Parth");

function add(a, b) {
  return a + b;
}
let addition = add(2, 4);
console.log(addition);

addition = function (a, b, c = 10) {
  return a + b + c;
};
console.log(addition(9, 7));

// arrow function :

// const getExp = (x,y) => {
//    return (x**y);
// }
// console.log(getExp(2,3));

const getExp = (x, y) => x ** y;
console.log(getExp(2, 3));

// for infinite no.s :

const num = function (...n) {
  return n;
};
console.log(num(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// object with function:

const obj = {
  fname: "Parth",
  age: 21,
};

function funObj(anyObj) {
  console.log(`\nName: ${anyObj.fname}\nAge: ${anyObj.age}\n`);
}

funObj(obj);
funObj({ fname: "Katariya", age: 21 });

// array with function :

let arr = [1, 2, 3, 4, 5];
function funArr(arr) {
  console.log(arr);
}
funArr(arr);

// Immidiately Invoked Function Expression [IIFE]:

(function dbc() {
  console.log("\nDB connected.\n");
})();

((Name) => {
  console.log(`Hello, ${Name}!`);
})("Parth");

// recursive function :

const fact = (n) => {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
};
console.log(`\n5! : ${fact(5)}`);
