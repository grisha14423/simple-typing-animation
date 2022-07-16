const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");

const text = "Text from JS file... Loading...";

let ind = 1;
let speed = 300 / speedEl.value;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, ind);
  ind++;

  if (ind > text.length) ind = 1;
  setTimeout(writeText, speed);
}

speedEl.addEventListener(
  "input",
  (event) => (speed = 300 / event.target.value)
);
