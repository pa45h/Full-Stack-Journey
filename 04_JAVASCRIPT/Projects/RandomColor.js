function Color() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r},${g},${b})`;
}

const myBox = document.getElementsByClassName("box");
Array.from(myBox).forEach((b) => {
  b.style.backgroundColor = Color();
});
