import Player from "./scripts/player.js";

const canvasGame = document.getElementById("gameCanvas");
const ctxGame = canvasGame.getContext("2d");
canvasGame.width = 500;
canvasGame.height = 700;

const player = new Player(200, 600, canvasGame);
player.playerListener();
player.draw();
window.addEventListener("keydown", (event) => {
  player.update(event);
  console.log(player);
});

const started = false;
const score = 0;
const timer = undefined;
const MONEY_COUNT = 7;
const GAME_DURATION_SEC = 20;

const gameBtn = document.querySelector(".game_button");
const gameTimer = document.querySelector(".timer_button");
const gameScore = document.querySelector(".reward_button");
const popUp = document.querySelector(".pop-up");
const popUpText = document.querySelector(".pop-up-message");
const popUpRefresh = document.querySelector(".pop-up-refresh");
const fieldRect = canvasGame.getBoundingClientRect(); //필드의 전체싸이즈와 포지션 알수있음

gameBtn.addEventListener("click", () => {
  if (started) {
    stopGame();
  } else {
    startGame();
  }
  started = !started;
});

function startGame() {
  initGame();
  showStopbutton();
  showTimerAndScore();
  startGameTimer();
}

function stopGame() {
  stopGameTimer();
  hideGameButton();
  showPopUp("REPLAY?");
}

function showStopbutton() {
  let icon = gameBtn.querySelector(".fa-play");
  icon.classList.add("fa-stop");
  icon.classList.remove("fa-play");
}

function hideGameButton() {
  gameBtn.style.visibility = "hidden";
}

function showTimerAndScore() {
  gameTimer.style.visibility = "visible";
  gameScore.style.visibility = "visible";
}

function startGameTimer() {
  let remainingTimeSec = GAME_DURATION_SEC;
  updateTimerText(remainingTimeSec);
  timer = setInterval(() => {
    if (remainingTimeSec <= 0) {
      clearInterval(timer);
      return;
    }
    updateTimerText(--remainingTimeSec);
  }, 1000);
}

function stopGameTimer() {
  clearInterval(timer);
}
function showPopUp(text) {
  popUpText.innerText = text;
  popUp.classList.remove("pop-up-hide");
}

function updateTimerText(sec) {
  const minutes = Math.floor(sec / 60);
  const seconds = sec % 60;
  gameTimer.innerText = `${minutes}:${seconds}`;
}

function initGame() {
  console.log(fieldRect);
  gameScore.innerText = MONEY_COUNT;
  addItem("money", MONEY_COUNT, "img/coin.png");
}
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
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

    ctxGame.drawImage(item, x, y,30,30);
  }
}
