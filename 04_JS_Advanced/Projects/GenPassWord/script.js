const passwordDisplay = document.querySelector("[data_password_display]");
const copyBtn = document.querySelector("[data_copyBtn]");
const copyMsg = document.querySelector("[data_copyMsg]");
const lengthDisplay = document.querySelector("[data_length]");
const inputSlider = document.querySelector("[data_length_slider]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const allChecks = document.querySelectorAll("input[type=checkbox]");
const indicator = document.querySelector("[data_indicator]");
const generateBtn = document.querySelector("#generate_button");

let password = "";
let passwordLength = 10;
let checkCount = 1;
const symbols = `~!@#$%^&*()_+-=[]{}:";''"/.,<>\|`;
handleSlider();

function handleSlider() {
  inputSlider.value = passwordLength;
  lengthDisplay.innerText = passwordLength;

  const min = Number(inputSlider.min);
  const max = Number(inputSlider.max);

  inputSlider.style.backgroundSize =
    ((passwordLength - min) * 100 / (max - min)) + "% 100%";
}

function setIndicator(color) {
  indicator.style.backgroundColor = color;
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generateRandomNumbers() {
  return getRandomInteger(0, 9);
}

function generateRandomUppercase() {
  return String.fromCharCode(getRandomInteger(65, 90));
}

function generateRandomLowercase() {
  return String.fromCharCode(getRandomInteger(97, 122));
}

function generateRandomSymbols() {
  const randomIndex = getRandomInteger(0, symbols.length);

  return symbols.charAt(randomIndex);
}

function getPasswordStrength() {
  let hasUpper = false;
  let hasLower = false;
  let hasNumber = false;
  let hasSymbol = false;

  if (uppercaseCheck.checked) hasUpper = true;
  if (lowercaseCheck.checked) hasLower = true;
  if (numbersCheck.checked) hasNumber = true;
  if (symbolsCheck.checked) hasSymbol = true;

  if (hasUpper && hasLower && (hasNumber || hasSymbol) && passwordLength >= 8) {
    setIndicator("#0f0");
  } else if (
    (hasUpper || hasLower) &&
    (hasNumber || hasSymbol) &&
    passwordLength >= 6
  ) {
    setIndicator("#ff0");
  } else {
    setIndicator("#f00");
  }
}

async function copyContent() {
  try {
    await navigator.clipboard.writeText(passwordDisplay.value);
    copyMsg.innerText = "Copied!";
  } catch (e) {
    copyMsg.innerText = "Failed!";
  }

  copyMsg.classList.add("active");
  setTimeout(() => {
      copyMsg.classList.remove("active");
      copyMsg.innerText="";
  }, 2000);
}

function sufflePassword(passwordArr) {
  for (let i = passwordArr.length - 1; i > 0; i--) {
    const j = getRandomInteger(0, i);
    [passwordArr[i], passwordArr[j]] = [passwordArr[j], passwordArr[i]];
  }
  return passwordArr.join("");
}

inputSlider.addEventListener("input", (e) => {
  passwordLength = e.target.value;
  handleSlider();
});

copyBtn.addEventListener("click", () => {
  if (passwordDisplay.value) copyContent();
});

function handleCheckboxChange() {
  checkCount = 0;
  allChecks.forEach((checkbox) => {
    if (checkbox.checked) {
      checkCount++;
    }
  });

  if (passwordLength < checkCount) {
    passwordLength = checkCount;
    handleSlider();
  }
}

allChecks.forEach((checkbox) => {
  checkbox.addEventListener("change", handleCheckboxChange);
});

generateBtn.addEventListener("click", () => {
  if (checkCount <= 0) return;

  if (passwordLength < checkCount) {
    passwordLength = checkCount;
    handleSlider();
  }

  password = "";
  let funcArr = [];

  if (uppercaseCheck.checked) funcArr.push(generateRandomUppercase);

  if (lowercaseCheck.checked) funcArr.push(generateRandomLowercase);

  if (numbersCheck.checked) funcArr.push(generateRandomNumbers);

  if (symbolsCheck.checked) funcArr.push(generateRandomSymbols);

  for (let i = 0; i < funcArr.length; i++) {
    password += funcArr[i]();
  }

  for (let i = 0; i < passwordLength - funcArr.length; i++) {
    let randomIndex = getRandomInteger(0, funcArr.length);

    password += funcArr[randomIndex]();
  }

  password = sufflePassword(Array.from(password));

  passwordDisplay.value = password;

  getPasswordStrength();
});
