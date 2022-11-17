class Robot {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.robotImage = new Image();
    this.robotImage.src = "./img/robotf.png";
    this.robotFront = true;
  }

  draw(ctx) {
    ctx.drawImage(this.robotImage, this.x, this.y, 130, 170);
  }

  start() {
    // setInterval(this.animateRobot.bind(this), 3000);
    let timeOut = 2000;
    this.intervalId = setTimeout(this.animateRobot.bind(this), timeOut);
  }


  stop() {
    clearTimeout(this.intervalId);
  }

  // stop() {
  //   timer=  setTimeout(this.animateRobot.bind(this), 2000);
  //   clearTimeout(timer);
  // }

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
