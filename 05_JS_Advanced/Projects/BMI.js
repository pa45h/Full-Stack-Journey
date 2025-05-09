const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");
  result.style.textDecoration = "underline";

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `${height} is not valid height`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `${weight} is not valid weight`;
  } else {
    result.innerHTML = `<b>${(weight / ((height * height) / 10000)).toFixed(
      2
    )}</b>`;
  }
});
