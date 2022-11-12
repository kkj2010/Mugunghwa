import PopUp from "./scripts/popup.js";
import Player from "./scripts/player.js";

const canvasGame = document.getElementById("gameCanvas");
const ctxGame = canvasGame.getContext("2d");
canvasGame.width = 500;
canvasGame.height = 700;

// const playerImage = new Image();
// playerImage.src = "./img/player.png";

// playerImage.onload = () => {
//   ctxGame.drawImage(playerImage, 200, 600, 100, 100);
// };

const player = new Player(10, 10, canvasGame);
player.draw();
document.addEventListener("keydown", (event) => {
  player.update(event);
});

const fieldRect = canvasGame.getBoundingClientRect(); //필드의 전체싸이즈와 포지션 알수있음

function initGame() {
  console.log(fieldRect);
  addItem("money", 10, "img/coin.png");
}

function addItem(className, count, imgPath) {
  const x1 = 0;
  const y1 = 0;
  const x2 = fieldRect.width;
  const y2 = fieldRect.height;
  for (let i = 0; i < count; i++) {
    const item = document.createElement("img");
    item.setAttribute("class", className);
    item.setAttribute("src", imgPath);
    item.style.position = "absolute";
    const x = randomNumber(x1, x2); //x1, x2이 사이에 있는 아무숫자
    const y = randomNumber(y1, y2);
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
    canvasGame.appendChild(item); //need to search how to add object to canvas
  }
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
