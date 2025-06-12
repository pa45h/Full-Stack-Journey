// For :

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log("i=5");
  }
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  console.log(`Outer i=${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner i=${i} and j=${j}`);
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

console.log("\n");
let arr = ["a", "b", "c", "d", "e"];
for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  console.log(`arr[${i}] = ${element}`);
}

// while :

console.log("\n");
let index = 0;

while (index < 10) {
  console.log(index);
  index += 2;
}

//  do.. while :

console.log("\n");
let score = 1;
do {
  console.log(`Score = ${score++}`);
} while (score <= 10);

//  for arrays and objects :

// for-of loop :

console.log("\n");
let array = [1, 2, 3, 4, 5];
for (const val of array) {
  console.log(val);
}

let string = "Parth Katariya";
for (let val of string) {
  console.log(val);
}

// can not iterate object using for-of

// let object = {
//     fname:"Parth",
//     age:21
// };
// for (const [key,val] of object) {
//     console.log(key,' : ',val);
// }

// for-in :

console.log("\n");
let object = {
  fname: "Parth",
  age: 21,
};
for (const key in object) {
  console.log(`${key} : ${object[key]}`);
}

// for-each : (Method of array object)
//  cannnot return any value as function

console.log("\n");
// arr.forEach(function (val){
//     console.log(val);
// });

arr.forEach((val, index, arr) => {
  console.log(`arr[${index}] : ${val}`);
  console.log(`arr : ${arr}`);
});

// Filter() :
// returns values as per function

console.log("\n");
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// using forEach():
// const newNum = [];
// myNum.forEach((val) => {
//   if (val > 4) {
//     newNum.push(val);
//   }
// });
// console.log(newNum);

// Using filter()
let newNum = myNum.filter((num) => num > 4);
console.log(newNum);

// real life use of filter :
console.log("\n");
const books = [
  { title: "book-1", genre: "fiction", publish: 2000, adition: 2010 },
  { title: "book-2", genre: "non-fiction", publish: 2003, adition: 2013 },
  { title: "book-3", genre: "science", publish: 2005, adition: 2015 },
  { title: "book-4", genre: "history", publish: 2008, adition: 2017 },
  { title: "book-5", genre: "fiction", publish: 2000, adition: 2010 },
  { title: "book-6", genre: "non-fiction", publish: 2003, adition: 2013 },
  { title: "book-7", genre: "science", publish: 2005, adition: 2015 },
  { title: "book-8", genre: "history", publish: 2008, adition: 2017 },
];

let userNeed = books.filter((bk) => bk.genre === "history");
console.log(userNeed);

console.log("\n");
userNeed = books.filter((bk) => bk.publish > 2000);
console.log(userNeed);

console.log("\n");
userNeed = books.filter((bk) => bk.publish > 2000 && bk.genre === "history");
console.log(userNeed);

// map() :
// returns an array by applying the function

console.log("\n");
let newNumMap = myNum.map((val) => val + 10);
console.log(newNumMap);

// chaining :
console.log("\n");
let myChain = myNum
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num > 50);
console.log(myChain);

// reduce() :
// returns a value based on the fun using acc and cur

console.log("\n");
const sum = myNum.reduce((acc, cur) => acc + cur, 0);
console.log(sum);

// real life use of reduce :

const shoppingCart = [
  { item: "c", price: 5000 },
  { item: "java", price: 7000 },
  { item: "dsa", price: 3000 },
  { item: "webdev", price: 9000 },
  { item: "sql", price: 2000 },
];
console.log("\n");
const { price: price } = shoppingCart;

const bill = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(bill);
