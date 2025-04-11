//  Numbers:

const score = 1000;
console.log(`\nscore : ${score}`);

console.log(`Type of score : ${typeof(score)}`);

const balance = new Number(1500.56789);
console.log(`balance : ${balance}`);
console.log(`Type of balance : ${typeof(balance)}`);


const scoreToString = score.toString();
console.log(`\ntoString() : ${scoreToString}`);
console.log(`Type of scoreToString : ${typeof(scoreToString)}`);

console.log(`toFixed(2) : ${balance.toFixed(2)}`);
console.log(`toPrecision(6) : ${balance.toPrecision(6)}`);

const amount = 100000000;
console.log(`\namount : ${amount}`);
console.log(`toLocaleString() : ${amount.toLocaleString()}`);
console.log(`toLocaleString('en-IN') : ${amount.toLocaleString('en-IN')}\n\n`);


//  Maths: 

console.log(`Math.abs(-4) : ${Math.abs(-4)}`);
console.log(`Math.abs(4) : ${Math.abs(4)}`);

console.log(`Math.round(1.4) : ${Math.round(1.4)}`);
console.log(`Math.round(1.5) : ${Math.round(1.5)}`);
console.log(`Math.round(1.6) : ${Math.round(1.6)}`);

console.log(`Math.ceil(3.2) : ${Math.ceil(3.2)}`);
console.log(`Math.floor(3.9) : ${Math.floor(3.9)}`);

console.log(`Math.pow(2,3) : ${Math.pow(2,3)}`);
console.log(`Math.sqrt(16) : ${Math.sqrt(16)}`);

console.log(`Math.PI : ${Math.PI}`);
console.log(`Math.E : ${Math.E}`);

console.log(`Math.random()(0.0-1.0) : ${Math.random()}`);
console.log(`Math.random()*10(0.0-10.0) : ${Math.random()*10}`);
console.log(`(Math.random()*10)+1(1.0-11.0) : ${(Math.random()*10)+1}`);
console.log(`Math.floor((Math.random()*10))+1}(1-11) : ${Math.floor((Math.random()*10))+1}`);

const max = 100, min = 0;

console.log(`Math.floor(Math.random()*(max-min+1)+min) : ${Math.floor(Math.random()*(max-min+1)+min)}`);
