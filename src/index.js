// import Player from "./scripts/player.js";
// import Robot from "./scripts/robot.js";
import Game from "./scripts/game.js";
import GameView from "./scripts/game_view.js";
import Robot from "./scripts/robot.js";

const canvasGame = document.getElementById("gameCanvas");
const ctxGame = canvasGame.getContext("2d");
canvasGame.width = 500;
canvasGame.height = 700;
let game = new Game();
new GameView(ctxGame, game).start();
let robot= new Robot(130,170)

// let player= new Player()
//

// const backgroundImage = new Image();
// backgroundImage.src = "./img/background.png";
// backgroundImage.onload = () => {
//   ctxGame.drawImage(backgroundImage, 0, 0);
// };

// const robot = new Robot(185, 27, canvasGame);
// robot.draw();

// const player = new Player(225, 640, canvasGame);
// player.draw();
// player.playerListener();

// window.addEventListener("keydown", (event) => {
//   player.update(event);
//   // console.log(player);
// });

let started = false;
let score = 0;
let timer = undefined;
const MONEY_COUNT = 7;
const GAME_DURATION_SEC = 20;
const MONEY_SIZE = 100;

const gameBtn = document.querySelector(".game_button");
const gameTimer = document.querySelector(".timer_button");
const gameScore = document.querySelector(".reward_button");
const popUp = document.querySelector(".pop-up");
const popUpText = document.querySelector(".pop-up-message");
const popUpRefresh = document.querySelector(".pop-up-refresh");
const fieldRect = canvasGame.getBoundingClientRect(); //필드의 전체싸이즈와 포지션 알수있음
const backgroundSound = new Audio("./sound/redlightgreenlight.mp3");

gameBtn.addEventListener("click", () => {
  if (started) {
    stopGame();
  } else {
    game.start();
    startGame();
  }
  started = !started;
});

popUpRefresh.addEventListener("click", () => {
  startGame();
  hidePopUp();
});

function playSound(sound) {
  sound.play();
  sound.loop=true;
}

function stopSound(sound) {
  sound.pause();
}

function startGame() {
  robot.animateRobot(ctxGame)
  initGame();
  showStopbutton();
  showTimerAndScore();
  startGameTimer();
  playSound(backgroundSound);
}

function stopGame() {
  stopGameTimer();
  stopSound(backgroundSound)
  hideGameButton();
  showPopUp("REPLAY?");
}

function finishGame(win) {
  hideGameButton();
  showPopUp(win ? "YOU WIN" : "YOU LOST");
  stopSound(backgroundSound)
}

function showStopbutton() {
  let icon = gameBtn.querySelector(".fas");
  icon.classList.add("fa-stop");
  icon.classList.remove("fa-play");
}

function hideGameButton() {
  gameBtn.style.visibility = "hidden";
}

function showGameButton() {
  gameBtn.style.visibility = "visible";
}

function showTimerAndScore() {
  gameTimer.style.visibility = "visible";
  gameScore.style.visibility = "visible";
}

function startGameTimer() {
  let remainingTimeSec = GAME_DURATION_SEC;
  updateTimerText(remainingTimeSec);
  timer = setInterval(() => {
    //setInterval:시간 간격마다 함수 실행
    if (remainingTimeSec <= 0) {
      clearInterval(timer); //설정된 함수종료
      finishGame();
      return; //아래코드 실행 하면안됨.
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

function hidePopUp() {
  popUp.classList.add("pop-up-hide");
}

function updateTimerText(sec) {
  const minutes = Math.floor(sec / 60);
  const seconds = sec % 60;
  gameTimer.innerText = `${minutes}:${seconds}`;
}

function initGame() {
  //reset timer // show up character in original position
  // ctxGame.clearRect(0, 0, 700, 500);
  // ctxGame.drawImage(backgroundImage, 0, 0);
  showGameButton();
  gameScore.innerText = MONEY_COUNT;
  // addItem("money", MONEY_COUNT, "img/coin.png");
  // player.draw();
  // robot.draw();
}
// function randomNumber(min, max) {
//   return Math.random() * (max - min) + min;
// }

// function addItem(className, count, imgPath) {
//   // ctxGame.clearRect(0, 0, 700, 500);
//   backgroundImage.src = "./img/background.png";
//   backgroundImage.onload = () => {
//     ctxGame.drawImage(backgroundImage, 0, 0);
//   };

//   const x1 = 0;
//   const y1 = 0;
//   const x2 = fieldRect.width - MONEY_SIZE;
//   const y2 = fieldRect.height - MONEY_SIZE;
//   for (let i = 0; i < count; i++) {
//     const item = document.createElement("img");
//     item.setAttribute("class", className);
//     item.setAttribute("src", imgPath);
//     item.style.position = "absolute"; //기본 static이라서 바꾸기.
//     const x = randomNumber(x1, x2); //x1, x2이 사이에 있는 아무숫자
//     const y = Math.max(200, randomNumber(y1, y2));
//     item.style.left = `${x}px`;
//     item.style.top = `${y}px`;
//     item.onload = () => {
//       ctxGame.drawImage(item, x, y, 30, 30);
//     };
//   }
// }


// // function updateScoreBoard(){
// //   gameScore.innerText= MONEY_COUNT- score;
// // }
