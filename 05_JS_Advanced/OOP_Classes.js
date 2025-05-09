// - Classes
class User {
  constructor(UserName, email, password) {
    this.UserName = UserName;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}qwerty`;
  }

  toUpperUserName() {
    return `${this.UserName.toUpperCase()}`;
  }
}

const u1 = new User("Parth", "pa45h@js.com", 123);
console.log(u1);
console.log(u1.encryptPassword());
console.log(u1.toUpperUserName());

console.log("\n");

// BTS:

function user(UserName, email, password) {
  this.UserName = UserName;
  this.email = email;
  this.password = password;
}

user.prototype.encrypt_Password = function () {
  return `${this.password}qwerty`;
};

user.prototype.toUpper_UserName = function () {
  return `${this.UserName.toUpperCase()}`;
};

const u2 = new user("Katariya", "Ka5a48ya@parth.com", 9876);

console.log(u2);
console.log(u2.encrypt_Password());
console.log(u2.toUpper_UserName());

// Four Pillars of OOP:
// 1) Abstraction
// 2) Encapsulation
// 3) Inheritance
// 4) Polymorphism
