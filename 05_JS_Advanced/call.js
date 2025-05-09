
// Call
function setUserName(userName) {
    this.userName=userName;
    // complex DB calls
    console.log("\nCalled");
}

function createUser(userName,email,password) {
    setUserName.call(this,userName);

    this.email=email;
    this.password=password;
}
const parth = new createUser("Pa45h","pa45h@js.com","qwerty123");
console.log(parth);
