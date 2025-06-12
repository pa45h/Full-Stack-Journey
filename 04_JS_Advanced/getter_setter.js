const { use } = require("react");

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(val) {
    this._email = val;
  }

  get password() {
    return this._password.toUpperCase();
  }
  set password(val) {
    this._password = val;
  }
}

const parth = new User("pa45h@js.com", "qwerty#123");
console.log(parth.email);
console.log(parth.password);

// OLD Method:

// function user(email, password) {
//   this.email = email;
//   this.password = password;

//   Object.defineProperty(this, "email", {
//     get: function () {
//       return this._email.toUpperCase();
//     },
//     set: function (val) {
//       this._email = val;
//     }
//   });
// }

// const katariya = new user("katariya87@gmail.com", "asdfgh@123");
// console.log(katariya.email);
// console.log(katariya.password);
