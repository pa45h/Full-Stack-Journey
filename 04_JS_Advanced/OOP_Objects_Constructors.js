// OOP : Object Oriented Programing

// Object : 
// - collection of properties and methods

// Why OOP ? 

// Parts of OOP : 

// - Object literal
const user = {
    userName: "Parth Katariya",
    loginCount: 10,
    isSignedIn: true,
    getUserDetails: function(){
        console.log("\nGot User Details from DB");
        console.log(`Current Context : ${this}`);
        console.log(this);
        console.log(`User Name : ${this.userName}`);
        console.log(`Log-in Count : ${this.loginCount}`);
        console.log(`Is Signed In : ${this.isSignedIn}`);
    }
};
console.log("\n"+user.userName);
console.log(user.getUserDetails()+"\n");
// have to created multiple objects for multiple users
// can create multiple objects using constructor function


// - Constructor Function

// inbuild constructor ex:
// const promiseOne = new Promise();
// const date = new Date();

// custom constructor:
function userFunc(userName, loginCount, isSignedIn) {
    this.userName=userName;
    this.loginCount=loginCount;
    this.isSignedIn=isSignedIn;
    this.welcome = function(){
        console.log(`Welcome , ${userName}`);
    };

    return this;
}
const userOne = new userFunc("Parth",2,true);
const userTwo = new userFunc("Katariya",5,false);
console.log(userOne);
console.log(userTwo);
