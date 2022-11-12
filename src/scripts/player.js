const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const UP_ARROW = 38;
const DOWN_ARROW = 40;

class Player {
  constructor(x, y, canvasGame) {
    this.x = x;
    this.y = y;
    this.speed = 4;
    this.maxWidth = canvasGame.width;
    this.maxHeight = canvasGame.height;
    this.canvasGame = canvasGame;
  }

  draw() {
    const playerImage = new Image();
    playerImage.src = "./img/player.png";

    playerImage.onload = () => {
      this.canvasGame
        .getContext("2d")
        .drawImage(playerImage, 200, 600, 100, 100);
    };
  }

  update(e) {
    console.log(e);
    // if (keyIsPressed) {
    //   if (keycode === LEFT_ARROW) {
    //     this.x--;
    //   } else if (keycode == RIGHT_ARROW) {
    //     this.x++;
    //   }if(keycode==UP_ARROW){
    //     this.y--;
    //   }else if(keycode== DOWN_ARROW){
    //    this.y++;
    //   }
    // } if (this.y+(d/2)===height || this.y-(d/2)==0){
    //     x=500;
    //     y=700;
    // }
  }
}

export default Player;
