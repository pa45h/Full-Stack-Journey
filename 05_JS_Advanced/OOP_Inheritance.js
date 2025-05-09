class User {
  constructor(userName) {
    this.userName = userName;
  }

  logMe() {
    console.log(`\nUserName = ${this.userName}\n`);
  }

  static createId() {
    // stops that method to be accesed
    return `${Math.floor(Math.random() * 1000 + 1)}`;
  }
}

class Teacher extends User {
  constructor(userName, email, password) {
    super(userName);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`\nNew Course Added by ${this.userName}\n`);
  }
}

const u1 = new Teacher("Parth Katariya", "pa45h.js.com", "qwerty@1234");

u1.addCourse();

const u2 = new User("New User");
// u2.addCourse();     // User dont have access of Teacher
u2.logMe();

console.log(u1 === u2);
console.log(u1 === Teacher);
console.log(u1 instanceof Teacher);
console.log(u1 instanceof User);

// static properties:

const u3 = new User("Parth");
const u4 = new Teacher("Katariya", "poiuyt@dfg.com", 23456);

// console.log(u3.createId());     // cannot acces due to static method
// console.log(u4.createId());
