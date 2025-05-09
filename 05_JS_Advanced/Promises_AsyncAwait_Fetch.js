// Creation of promises :

const promiseOne = new Promise(function (resolve, reject) {
  // any async task
  // like DB calls, network calls, api fetching, cryptography etc

  setTimeout(() => {
    console.log("Async Op in Promise-1");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("Promise-1 fulfilled");
  console.log("\n");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async Op in Promise-2");
    resolve();
  }, 2000);
}).then(() => {
  console.log("Promise-2 fulrilled");
  console.log("\n");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async Op in Promise-3");
    resolve({ name: "Parth", age: 21 });
  }, 3000);
});

promiseThree.then((user) => {
  console.log(user);
  console.log("\n");
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "parth", password: "qwerty" });
    } else {
      reject("Error: Something went wrong");
    }
  }, 4000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Promise-4 had been resolved or rejected");
    console.log("\n");
  });

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "parthP5", password: "P5qwerty" });
    } else {
      reject("Error: Promise-5 went wrong");
    }
  }, 5000);
});

// consuming promises :

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
    console.log("\n");
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getAllUsers();

// OR

fetch("https://api.github.com/users/pa45h")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
