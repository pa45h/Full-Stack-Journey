// - Prototypes
// all arrays, strings, functions, etc inherites Object, which is called as prototyped inheritance.
// The prototype chain is walked at runtime when accessing a property—if it’s not found on the object itself, JavaScript looks up through successive prototypes until it either finds the property or reaches null.

const newHero = ["hulk", "iron-man"];
// (2) ['hulk', 'iron-man']
//  0: "hulk"
//  1: "iron-man"
//  length:2
//  (dropdown-menu) [[Prototype]]: Array(0)

function multBy10(n) {
    return n*10;
}
multBy10.power=4;

console.log("\n"+multBy10(3));
console.log(multBy10.power);
console.log(multBy10.prototype);    // returns this of the function


function createUser(userName,score) {
    this.userName=userName;
    this.score=score;
}
createUser.prototype.increament = function(){
    thic.score++;
}
createUser.prototype.printMe = function(){
    console.log(`\nScore is ${this.score}`);
}

// const u1 = createUser("u1",12);
// const u2 = createUser("u2",14);
// if not written new keyword it will give error 
// new keyword  
//              -links prototype
//              -calls constructor and bound to newly created object
//              -object is returned

const u1 = new createUser("u1",12);
const u2 = new createUser("u2",14);

u1.printMe();
console.log(u1);
console.log(u2);


let myHeros = ['hulk','ironman'];

let heroPower = {
    hulk:"smash",
    ironman:"fly",

    getHulkPower: function(){
        console.log(`Hulk power is ${this.hulk}`);
    }
};

Object.prototype.parth = function(){
    console.log("Parth is present in every objects");
}

myHeros.parth();
heroPower.parth();
String.parth();

Array.prototype.arrayParth = function(){
    console.log("Parth in Array");
}
myHeros.arrayParth();

// Inheritance :

// old syntax:
const userT = {
    tName:"Parth",
    email:"parth@js.com"
};

const teacher ={
    makeVideo:true,
};

const teachingSupport={
    isAvailable:false,
};

const TASupport = {
    makeAssignments:"JS",
    fullTime:true,
    __proto__:teachingSupport   //inherites teachingSupport
};
teacher.__proto__=userT;

// modern syntax:
Object.setPrototypeOf(teachingSupport, teacher);

let myName = "Parth           ";
console.log("\n");
console.log(myName.length);
console.log(myName.trim().length);
// console.log(myName.trueLength());   // we want trueLength using prototypes

String.prototype.trueLength = function(){
    console.log(`${this.trim().length}`);
}
myName.trueLength();
"Parth Katariya".trueLength();


// - Instances(new, this)
//      this : indicates current context
//      new : create new instance