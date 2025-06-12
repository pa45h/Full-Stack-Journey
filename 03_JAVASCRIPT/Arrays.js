// Declaration:

let arr1 = [1, 2, 3, 4];
console.log(arr1);
console.log(typeof arr1);

let arr2 = new Array("a", "b", "c", "d");
console.log(arr2);
console.log(typeof arr2);

// Accessing and modifying:

console.log("arr1[0] : " + arr1[0]);
console.log("arr1[1] : " + arr1[1]);
console.log("arr1[2] : " + arr1[2]);
console.log("arr1[3] : " + arr1[3]);

console.log("arr2[0] : " + arr2[0]);
console.log("arr2[1] : " + arr2[1]);
console.log("arr2[2] : " + arr2[2]);
console.log("arr2[3] : " + arr2[3]);

arr2[2] = true;
console.log(arr2);

arr1[1] = "Parth";
console.log(arr1);
console.log("\n");

// Array Methods:

console.log("arr1.length : " + arr1.length);

arr1.push(5);
console.log("arr1.push(5) : ");
console.log(arr1);

arr1.pop();
console.log("arr1.pop() : ");
console.log(arr1);

arr1.unshift(0);
console.log("arr1.unshift(0) : ");
console.log(arr1);

arr1.shift();
console.log("arr1.shift() : ");
console.log(arr1);

console.log("arr1.includes(99) : " + arr1.includes(99));

console.log("arr1.indexOf('Parth') : " + arr1.indexOf("Parth"));
console.log("arr1.indexOf(99) : " + arr1.indexOf(99));

console.log("arr1.join() : " + arr1.join()); //(converts into string)

console.log("\nBefore slice : " + arr1);
console.log("arr1.slice(1,3) : " + arr1.slice(1, 3));
console.log("After slice : " + arr1);

console.log("\nBefore splice : " + arr1);
console.log("arr1.splice(1,2) : " + arr1.splice(1, 2));
console.log("After splice : " + arr1);

// arr1.push(arr2);
// console.log("\narr1.push(arr2) : ");
// console.log(arr1);

let arr3 = arr1.concat(arr2);
console.log("\narr1.concat(arr2) : ");
console.log(arr3);

let arr4 = [...arr1, ...arr2]; // spread operation
console.log("\n[...arr1, ...arr2] : ");
console.log(arr4);

let arr5 = [1, 2, [3, [4, 5, [6]], 7], 8];
console.log("arr5 : ");
console.log(arr5);
let flatArr5 = arr5.flat(Infinity);
console.log("flatArr5 : ");
console.log(flatArr5);

console.log('\nArray.isArray("Parth") : ' + Array.isArray("Parth"));
console.log('\nArray.from("Parth") : ' + Array.from("Parth"));

let a = 10,
  b = 20,
  c = 30,
  d = 40;
console.log("Array.of(a,b,c,d) : ");
console.log(Array.of(a, b, c, d));

console.log("\nmapArr6 : ");
let arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let mapArr6 = arr6.map((n) => {
  return n * n;
});
console.log(mapArr6);

console.log("\nfilterArr6 : ");
let filterArr6 = arr6.filter((n) => {
  return n % 2 === 0;
});
console.log(filterArr6);

console.log("\nreduceArr6 : ");
let reduceArr6 = arr6.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(reduceArr6);

console.log("\narr7.sort() : ");
let arr7 = [2, 1, 4, 6, 3, 8, 0];
arr7.sort();
console.log(arr7);
