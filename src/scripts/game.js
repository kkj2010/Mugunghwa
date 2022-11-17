import Player from "./player.js";
import Robot from "./robot.js";
import Coin from "./coin.js";
import Villain from "./villain.js";
import Line from "./line.js";
import PopUp from "./popup.js";

class Game {
  constructor(gameDuration, coinCount) {
    this.coins = [];
    this.gameBtn = document.querySelector(".game_button");
    this.gameTimer = document.querySelector(".timer_button");
    this.gameScore = document.querySelector(".reward_button");
    this.backgroundSound = new Audio("./sound/redlightgreenlight.mp3");
    this.started = false;
    this.score = 0;
    this.timer = undefined;
    this.gameDuration = gameDuration;
    this.coinCount = coinCount;
    this.gameBtn.addEventListener("click", () => {
      if (this.started) {
        this.stopGame();
      } else {
        this.start();
      }
      this.started = !this.started;
    });
    this.popup = new PopUp();
    this.player = new Player(225, 630);
    this.robot = new Robot(190, 17);
    this.robotBack = new Robot(190, 20);
    this.villainLeft = new Villain(120, 142);
    this.villainRight = new Villain(350, 142);
    this.finalline = new Line(0, 195);
    this.backgroundImage = new Image();
    this.backgroundImage.src = "./img/background.png";
  }

  draw(ctx) {
    ctx.clearRect(0, 0, 700, 500);
    ctx.drawImage(this.backgroundImage, 0, 0);
    this.player.draw(ctx);
    this.robot.draw(ctx);
    this.villainRight.drawRight(ctx);
    this.villainLeft.drawLeft(ctx);
    this.finalline.draw(ctx);
    this.coins.forEach((coin) => coin.draw(ctx));
  }

  start() {
    const finishGameEvent = (event) => {
      this.player.update(event);
      if (this.player.update(event) && this.robot.robotFront) {
        this.finishGame(false);
        window.removeEventListener("keydown", finishGameEvent);
      }

      if (this.collisiononFinalLine()) {
        this.finishGame(true);
        window.removeEventListener("keydown", finishGameEvent);
      }
      this.coins.forEach((coin, index) => {
        if (this.collisionCoin(coin)) {
          // delete coin.coinImage;
          this.coins.splice(index, 1);
          this.score++;
          this.updateScoreBoard();
        }
      });
    };

    window.addEventListener("keydown", finishGameEvent);
    this.setupCoins();
    this.robot.start();
    this.initGame();
    this.showStopbutton();
    this.showTimerAndScore();
    this.startGameTimer(finishGameEvent);
    this.playSound(this.backgroundSound);
  }

  stopGame() {
    // this.robot.stop
    this.stopGameTimer();
    this.stopSound(this.backgroundSound);
    this.hideGameButton();
    this.popup.showPopUp("REPLAY?");
  }

  finishGame(win) {
    this.robot.stop();
    this.stopGameTimer();
    this.hideGameButton();
    this.stopSound(this.backgroundSound);
    this.popup.showPopUp(win ? "YOU WIN" : "YOU LOST");
  }

  initGame() {
    // this.showGameButton();
    this.gameScore.innerText = this.coinCount;
  }

  collisiononFinalLine() {
    let crash = false;
    if (this.player.x >= this.player.x + this.finalline.width) {
      crash = true; //no collision
    } else if (this.player.x + this.player.width <= this.finalline.x) {
      crash = true;
    } else if (this.player.y >= this.finalline.y + this.finalline.height) {
      crash = true;
    } else if (this.player.y + this.player.height <= this.finalline.y) {
      crash = true;
    }
    return crash;
  }

  updateScoreBoard() {
    this.gameScore.innerText = this.coinCount - this.score;
  }

  deleteCoin(coin) {
    this.coins.delete();
  }

  collisionCoin(coin) {
    let crash = true;

    if (this.player.x >= coin.x + coin.width) {
      crash = false; //no collision
    } else if (this.player.x + this.player.width <= coin.x) {
      // left
      crash = false;
    } else if (this.player.y >= coin.y + coin.height) {
      //right
      crash = false;
    } else if (this.player.y + this.player.height <= coin.y) {
      crash = false;
    }
    return crash;
  }

  setupCoins() {
    this.coins = [];
    let x = 0;
    let y = 0;
    while (this.coins.length < 9) {
      x = Math.random() * (400 - 0) + 0;
      y = Math.max(250, Math.random() * (500 - 0) + 0);
      var coin = new Coin(x, y);
      var overlapping = false;
      for (let j = 0; j < this.coins.length; j++) {
        var other = this.coins[j];
        var d = Math.sqrt(
          Math.pow(coin.x - other.x, 2) + Math.pow(coin.y - other.y, 2)
        );
        if (d < 100) {
          var overlapping = true;
          break;
        }
      }
      if (!overlapping) {
        this.coins.push(coin);
      }
    }
  }

  playSound(sound) {
    sound.play();
    sound.loop = true;
  }
  stopSound(sound) {
    sound.pause();
  }
  showStopbutton() {
    let icon = this.gameBtn.querySelector(".fas");
    icon.classList.add("fa-stop");
    icon.classList.remove("fa-play");
    this.gameBtn.style.visibility = "visible";
  }
  hideGameButton() {
    this.gameBtn.style.visibility = "hidden";
  }

  showTimerAndScore() {
    this.gameTimer.style.visibility = "visible";
    this.gameScore.style.visibility = "visible";
  }

  startGameTimer(finishGameEvent) {
    let remainingTimeSec = this.gameDuration;
    this.updateTimerText(remainingTimeSec);
    this.timer = setInterval(() => {
      //setInterval:시간 간격마다 함수 실행
      if (remainingTimeSec <= 0) {
        clearInterval(this.timer); //설정된 함수종료
        window.removeEventListener("keydown", finishGameEvent);
        this.finishGame(false);
        return; //아래코드 실행 하면안됨.
      }
      this.updateTimerText(--remainingTimeSec);
    }, 1000);
  }

  stopGameTimer() {
    clearInterval(this.timer);
  }

  updateTimerText(sec) {
    const minutes = Math.floor(sec / 60);
    const seconds = sec % 60;
    this.gameTimer.innerText = `${minutes}:${seconds}`;
  }
}

export default Game;
