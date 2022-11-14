const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const UP_ARROW = 38;
const DOWN_ARROW = 40;

class Player {
  constructor(x, y, canvasGame) {
    this.x = x;
    this.y = y;
    this.maxWidth = canvasGame.width;
    this.maxHeight = canvasGame.height;
    this.canvasGame = canvasGame;
    this.keys = {};
  }

  draw() {
    const playerImage = new Image();
    playerImage.src = "./img/player.png";
    // if (x && y){
    //   playerImage.onload = () => {
    //     this.canvasGame
    //       .getContext("2d")
    //       .drawImage(playerImage, x, y, 100, 100);
    //   };
    // }else{
    playerImage.onload = () => {
      this.canvasGame
        .getContext("2d")
        .drawImage(playerImage, this.x, this.y, 45, 55);
    }// }}
  }

  update(e) {
    this.canvasGame
    // .save()
    .getContext("2d")
    // .getImageData()
    .clearRect(this.x, this.y, 45,55)
    // .restore();
    // .putImageData()


    if (e.keyCode === LEFT_ARROW) {
      this.x -= 7;
      if (this.x <= 0) {
        this.x += 7;
      }
      this.draw();
    } else if (e.keyCode === RIGHT_ARROW) {
      this.x += 7;
      if (this.x >= 400) {
        this.x -= 7;
      }
      this.draw();
    }
    if (e.keyCode === UP_ARROW) {
      this.y -= 7;
      if (this.y <= 0) {
        this.y += 7;
      }
      this.draw();
    } else if (e.keyCode === DOWN_ARROW) {
      this.y += 7;
      if (this.y >= 600) {
        this.y -= 7;
      }
      this.draw();
    }
  }

  playerListener() {
    window.addEventListener(
      "keydown",
      (event) => (this.keys[event.keyCode] = true)
    );
    window.addEventListener("keyup", () => (this.keys[event.keyCode] = false));
  }
}



export default Player;
