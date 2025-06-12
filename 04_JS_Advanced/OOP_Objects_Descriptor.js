console.log(Object.getOwnPropertyDescriptor(Math, "PI"));
// {
//   value: 3.141592653589793,
//   writable: false,           // cannot override
//   enumerable: false,         // cannot iterate over
//   configurable: false        // cannont change any descriptive properties
// }

// console.log(Object.getOwnPropertyDescriptors(Math));
// returns discrptions of all methods and constants in Math

const myObj = {
  username: "Parth",
  age: 21,
  isStudent: true,
};

console.log(Object.getOwnPropertyDescriptors(myObj));

for (let key in myObj) {
  console.log(`${key} : ${myObj[key]}`);
}

Object.defineProperty(myObj, "username", {
  enumerable: false, //stops iterations
  writable: false,
});
Object.defineProperty(myObj, "age", {
  enumerable: false, //stops iterations
  writable: false,
});
Object.defineProperty(myObj, "isStudent", {
  enumerable: false, //stops iterations
  writable: false, //stops reride
  configurable: false, //stops defineProperty();
});

// Object.defineProperty(myObj,'isStudent',{
//     enumerable:true,
//     writable:true,
//     configurable:true
// });

console.log(Object.getOwnPropertyDescriptors(myObj));

for (let key in myObj) {
  console.log(`${key} : ${myObj[key]}`);
}
