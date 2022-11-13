const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const UP_ARROW = 38;
const DOWN_ARROW = 40;


class Player {
  constructor(x, y, canvasGame) {
    this.x = x;
    this.y = y;
    this.speed = 0.25;
    this.maxWidth = canvasGame.width;
    this.maxHeight = canvasGame.height;
    this.canvasGame = canvasGame;
    this.keys={}
  }

  draw() {
    const playerImage = new Image();
    playerImage.src = "./img/player.png";

    playerImage.onload = () => {
      this.canvasGame
        .getContext("2d")
        .drawImage(playerImage, this.x, this.y, 100, 100);
    };
  }

  update(e) {
    console.log(e.keyCode)
      if (e.keyCode === LEFT_ARROW) {
        this.x--; 
        this.draw();
      } else if (e.keyCode === RIGHT_ARROW) {
        this.x++; 
        this.draw();
      }if(e.keyCode ===UP_ARROW){
        this.y--;
        this.draw();
      }else if(e.keyCode === DOWN_ARROW){
       this.y++;
       this.draw();
    }
    //  if (this.y+(d/2)===height || this.y-(d/2)==0){
    //     x=500;
    //     y=700;
    // }
  }

  playerListener(){
    window.addEventListener('keydown', (event) => this.keys[event.keyCode]= true)
    window.addEventListener('keyup', ()=> this.keys[event.keyCode]=false)
  }


}

export default Player;
