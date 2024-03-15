const container = document.querySelector("#container");
let gridSize = 16;
let boolRainbow = false;

const gridButton = document.querySelector("#grid-button");
gridButton.addEventListener("click", generateGrid);

const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", reset);

const rainbowButton = document.querySelector("#rainbow-button");
rainbowButton.addEventListener("click", () => {
  boolRainbow = !boolRainbow;
  rainbowButton.innerHTML = boolRainbow ? 'turn off rainbow mode' : 'rainbow mode';
});

function generateGrid() {
  gridSize = askGridSize();
  container.innerHTML = "";
  for (let i = 0; i < gridSize * gridSize; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    container.appendChild(pixel);
    setPixelSize(pixel);
    attachEventListenerToPixel(pixel);
  }
}

function askGridSize() {
  let answer;
  do {
    answer = +prompt("How many pixels on each side? Enter a number between 1 and 100.");
  } while (!(typeof answer === "number" && Number.isInteger(answer) && answer >= 1 && answer <= 100));
  return answer;
}

function setPixelSize(pixel) {
  pixel.style.width = `${960 / gridSize}px`;
  pixel.style.height = `${960 / gridSize}px`;
}

function attachEventListenerToPixel(pixel) {
  pixel.addEventListener("mouseover", () => {
    if (boolRainbow) {
      pixel.style.backgroundColor = randomRGB();
    } else {
      pixel.style.backgroundColor = "black";
    }
  });
}

function reset() {
  document.querySelectorAll(".pixel").forEach(pixel => {
    pixel.style.backgroundColor = "white";
  });
}

function randomRGB() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}