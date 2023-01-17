class Robot {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.robotImage = new Image();
    // this.robotImage.src = "./img/robotf.png";
    this.robotImage.src = "./img/robotb.png";
    this.robotFront = false;
  }

  draw(ctx) {
    ctx.drawImage(this.robotImage, this.x, this.y, 130, 170);
  }

  start() {
    let timeOut = Math.max(2000, Math.random() * (4000 - 0) + 0);
    // 2000;
    this.intervalId = setTimeout(this.animateRobot.bind(this), timeOut);
  }

  stop() {
    clearTimeout(this.intervalId);
  }

  animateRobot() {
    if (this.robotFront) {
      this.robotImage.src = "./img/robotb.png";
    } else {
      this.robotImage.src = "./img/robotf.png";
    }
    this.robotFront = !this.robotFront;
    this.start();
  }
}

export default Robot;
