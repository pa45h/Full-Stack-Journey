let now = new Date();
console.log("\n");
console.log("now : "+now);
console.log("now.toISOString() : "+now.toISOString());
console.log("now.toString() : "+now.toString());
console.log("now.toDateString() : "+now.toDateString());
console.log("now.toTimeString() : "+now.toTimeString());
console.log("now.toLocaleString() : "+now.toLocaleString());

console.log("\n");
console.log("now.getFullYear() : "+now.getFullYear());
console.log("now.getMonth()+1 : "+(now.getMonth()+1));
console.log("now.getDate() : "+now.getDate());
console.log("now.getDay() : "+now.getDay());
console.log("now.getHours() : "+now.getHours());
console.log("now.getMinutes() : "+now.getMinutes());
console.log("now.getSeconds() : "+now.getSeconds());
console.log("now.getMilliseconds() : "+now.getMilliseconds());
console.log("now.getTime()(in ms) : "+now.getTime());

console.log("\n");
let myDate = new Date("07-08-2005-12:30:56");
console.log("myDate.toLocaleString() : "+myDate.toLocaleString());

console.log("\n");
myDate.setFullYear("2000");
myDate.setMonth("02");
myDate.setDate("14");
// myDate.setDay("2");
myDate.setHours("2");
myDate.setMinutes("59");
myDate.setSeconds("19");

console.log(myDate.toLocaleString());