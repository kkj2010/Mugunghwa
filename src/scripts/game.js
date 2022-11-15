import Player from "./player.js";
import Robot from "./robot.js";
import Coin from "./coin.js";
import Villain from "./villain.js";
import Line from "./line.js";

class Game {
  constructor() {
    this.player = new Player(225, 630);
    this.robot = new Robot(190, 20);
    this.robotBack= new Robot(190, 20);
    this.villainLeft = new Villain(120, 150);
    this.villainRight = new Villain(350, 150);
    this.finalline= new Line(0,200)
    this.backgroundImage = new Image();
    this.backgroundImage.src = "./img/background.png";
    
    this.coins = [];
  }

  draw(ctx) {
    ctx.clearRect(0, 0, 700, 500);
    // backgroundImage.onload = () => {
    ctx.drawImage(this.backgroundImage, 0, 0);
    this.player.draw(ctx);
    this.robot.draw(ctx);
    this.villainRight.drawRight(ctx);
    this.villainLeft.drawLeft(ctx);
    this.finalline.draw(ctx);
    // this.coin.draw(ctx);
    this.coins.forEach((coin) => coin.draw(ctx));

    // };
  }

  start() {
    this.setupCoins();
    window.addEventListener("keydown", (event) => {
      this.player.update(event);
    });
    this.robot.start();
  }

  win(){
    
  }

  // setupCoins() {
  //   this.coins = [];
  //   let x = 0;
  //   let y = 0;
  //   for (let i = 0; i < 8; i++) {
  //     x = Math.random() * (400 - 0) + 0;
  //     y = Math.max(250, Math.random() * (500 - 0) + 0);
  //     this.coins.push(new Coin(x, y));
  //   }
  // }

  ///distance between coins

  setupCoins() {
    this.coins = [];
    let x = 0;
    let y = 0;
    while (this.coins.length<10){
    // for (let i = 0; i < 8; i++) {
      x = Math.random() * (400 - 0) + 0;
      y = Math.max(250, Math.random() * (500 - 0) + 0);
      var coin = new Coin(x, y);
      var overlapping = false;
      for (let j = 0; j < this.coins.length; j++) {
        var other = this.coins[j];
        var d = Math.sqrt((Math.pow(coin.x-other.x,2))+(Math.pow(coin.y-other.y,2)));
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



  playSound(){
    this.sing.play()
  }
}

export default Game;
