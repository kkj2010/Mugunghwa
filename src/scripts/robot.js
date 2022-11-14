class Robot {
  constructor(x, y, canvasGame) {
    this.x = x;
    this.y = y;
    this.canvasGame = canvasGame;
  }

  draw() {
    const robotImage = new Image();
    robotImage.src = "./img/robotf.png";

    robotImage.onload = () => {
      this.canvasGame
        .getContext("2d")
        .drawImage(robotImage, this.x, this.y, 130, 170);
    };
  }

  drawBack(){
    const robotBackImage = new Image();
    robotBackImage.src = "./img/robotb.png";

    robotImage.onload = () => {
      this.canvasGame
        .getContext("2d")
        .drawImage(robotImage, this.x, this.y, 130, 170);
    };
  }
}



export default Robot;
