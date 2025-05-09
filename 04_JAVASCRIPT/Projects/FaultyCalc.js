// faulty calculator:
// promt from the user
// 10% of the time it will perform :
// + --> *
// - --> /
// * --> -
// / --> +

let a = prompt("Enter a : ");
let c = prompt("Enter Operation : ");
let b = prompt("Enter b : ");
let random = Math.random();
let objC = {
  "+": "*",
  "-": "/",
  "*": "-",
  "/": "+",
};

if (random < 0.1) {
  c = objC[c];
}

alert(`${a} ${c} ${b} = ${eval(`${a} ${c} ${b}`)}`);
