const pwE1 = document.getElementById("pw");
const copyE1 = document.getElementById("copy");
const lengthE1 = document.getElementById("length");
const upperE1 = document.getElementById("upper");
const lowerE1 = document.getElementById("lower");
const numberE1 = document.getElementById("number");
const symbolsE1 = document.getElementById("symbols");
const generateE1 = document.getElementById("generate");



const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "!@#$%^&*()_+=";

function getUpperCase() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getLowerCase() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getNumber() {
  return number[Math.floor(Math.random() * number.length)];
}

function getSymbols() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generateX() {
  const xs = [];
  if (upperE1.checked){
    xs.push(getUpperCase());
  }

  if (lowerE1.checked){
    xs.push(getLowerCase());
  }

  if (numberE1.checked){
    xs.push(getNumber());
  }

  if (symbolsE1.checked){
    xs.push(getSymbols());
  }

  if (xs.length === 0 ) return "";

  return xs[Math.floor(Math.random() * xs.length)];
}


function generatePassword() {

  const len = lengthE1.value;

  let password = " ";

  if (upperE1.checked){
    password += getUpperCase();
  }

  if (lowerE1.checked){
    password += getLowerCase();
  }

  if (numberE1.checked){
    password += getNumber();
  }

  if (symbolsE1.checked){
    password += getSymbols();
  }

  for (let i = password.length -1; i < len; i++){
    const x = generateX();
    password += x;
  }

  pwE1.innerText = password;
}

generateE1.addEventListener('click', generatePassword);

// Copy to clipboard

copyE1.addEventListener("click", () => {
  const textarea = document.createElement('textarea');
  const password = pwE1.innerText;

  if (!password) {return;}

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert ("Password copied to clipboard!!!");
})
