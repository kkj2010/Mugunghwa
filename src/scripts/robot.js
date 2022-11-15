class Robot {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.robotImage = new Image();
    this.robotImage.src = "./img/robotf.png";
    // this.robotBackImage = new Image();
    // this.robotBackImage.src = "./img/robotb.png";

    this.robotStatus = true;
  }

  draw(ctx) {
    // const robotImage = new Image();
    // robotImage.src = "./img/robotf.png";

    ctx.drawImage(this.robotImage, this.x, this.y, 130, 170);
  }

  start() {
    // setInterval(this.animateRobot.bind(this), 3000);
    let timeOut = 2000;
    setTimeout(this.animateRobot.bind(this), timeOut);
  }

  // drawBack(ctx) {
  //   // const robotBackImage = new Image();
  //   // robotBackImage.src = "./img/robotb.png";

  //   // robotImage.onload = () => {
  //   //   this.canvasGame
  //   //     .getContext("2d")
  //   ctx.drawImage(this.robotBackImage, this.x, this.y, 130, 170);
  // }

  animateRobot() {
    if (this.robotStatus) {
      this.robotImage.src = "./img/robotb.png";

    } else {
      this.robotImage.src = "./img/robotf.png";
    }
    this.robotStatus = !this.robotStatus;
    this.start()
  }

}

export default Robot;
