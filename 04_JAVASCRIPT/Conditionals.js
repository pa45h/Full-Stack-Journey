//  If:

const isUserLoggedIn = true;
if (isUserLoggedIn) {
  console.log("\nUser Logged in..");
}

// if()..else

const temperature = 42;
if (temperature > 50) {
  console.log("\nTemperature Greater than 50.");
} else {
  console.log("\nTemperature Smaller than 50.");
}

if (temperature === 42) console.log("\nTemperature = 42"); // implicit scope

// if()..else if().. ladder:

const balance = 600;
if (balance < 500) {
  console.log("\nBalance is less then 500");
} else if (balance < 700) {
  console.log("\nBalance is less then 700");
} else if (balance < 900) {
  console.log("\nBalance is less then 900");
} else {
  console.log("\nBalance is less then 1100");
}

// real life use cases:

const haveDebitCarde = true;

if (isUserLoggedIn && haveDebitCarde) {
  console.log("\nUser can proceed payment");
}

const isUserLoggedInGoogle = false;
const isUserLoggedInEmail = true;

if (isUserLoggedInGoogle || isUserLoggedInEmail) {
  console.log("\nUser Logged in...");
}

//  switch case:

const day = 3;

switch (day) {
  case 1:
    console.log("\nMon!");
    break;
  case 2:
    console.log("\nTue!");
    break;
  case 3:
    console.log("\nWed!");
    break;
  case 4:
    console.log("\nThus!");
    break;
  case 5:
    console.log("\nFri!");
    break;
  case 6:
    console.log("\nSat!");
    break;
  case 7:
    console.log("\nSun!");
    break;
  default:
    console.log("\nNot Valid!");
    break;
}

// falsy values:   false, 0, -0, BigInt 0n, "", null, undefined, NaN
// truthy values:   !falsy, "0", 'false', " ", [], {}, function(){}

const userArr = [];
if (userArr.length === 0) {
  console.log("\nArray is empty!");
}

const userObj = {};
if (Object.keys(userObj).length === 0) {
  console.log("\nObject is empty!");
}

// false == 0   => true
// false == ''  => true
// 0 == ''      => true

// Nullish Coalescing Operator (??): (null, undefined):

let val;
val = 5 ?? 10;
console.log(val);

val = null ?? 10;
console.log(val);

val = 5 ?? undefined;
console.log(val);

// ternery operator:

isUserLoggedIn
  ? console.log("\nUser Logged in..")
  : console.log("\nUser Logged Out..");
