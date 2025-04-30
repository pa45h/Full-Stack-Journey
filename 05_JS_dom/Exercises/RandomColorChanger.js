function Color() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r},${g},${b})`;
}

const myBox = document.getElementsByClassName("box");
Array.from(myBox).forEach((b) => {
  let color = Color();
  b.style.backgroundColor = color;
  b.setAttribute("id", color);
});

const boxes = document.querySelectorAll(".box");
const body = document.querySelector("body");

boxes.forEach(function (box) {
  box.addEventListener("click", function (e) {
      body.style.backgroundColor = e.target.id;
      let span = document.createElement("span");
      span.innerHTML = e.target.id;
      span.style.margin="1rem";
      body.appendChild(span);
    });
});
