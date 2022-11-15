class Line {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.lineImage = new Image();
    this.lineImage.src = "./img/finishline.png";
  }

  draw(ctx) {
    ctx.drawImage(this.lineImage, this.x, this.y, 700, 20);
  }
}

export default Line;
