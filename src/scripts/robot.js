class Robot {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.robotImage = new Image();
    this.robotImage.src = "./img/robotf.png";
    this.robotBackImage = new Image();
    this.robotBackImage.src = "./img/robotb.png";
  }

  draw(ctx) {
    // const robotImage = new Image();
    // robotImage.src = "./img/robotf.png";

    ctx.drawImage(this.robotImage, this.x, this.y, 130, 170);
  }

  drawBack(ctx) {
    // const robotBackImage = new Image();
    // robotBackImage.src = "./img/robotb.png";

    // robotImage.onload = () => {
    //   this.canvasGame
    //     .getContext("2d")
    ctx.drawImage(this.robotBackImage, this.x, this.y, 130, 170);
  }

  animateRobot(ctx) {
    let displayImage = this.robotImage;
    //check current robot image
    if (displayImage.src.match("./img/robotf.png")) {
      displayImage.src = "./img/robotb.png";
      setInterval(() => this.drawBack(ctx), 2000);
    } else {
      displayImage.src = "./img/robotf.png";
      setInterval(() => this.draw(ctx), 4000);
      //  Math.random()*(3000-1000)+100);
    }
  }
}

export default Robot;
