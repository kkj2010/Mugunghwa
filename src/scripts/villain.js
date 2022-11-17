class Villain {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.villainLeftImage = new Image();
      this.villainLeftImage.src = "./img/squid1.png";
      this.villainRightImage = new Image();
      this.villainRightImage.src = "./img/squid3.png";
    }
  
    drawLeft(ctx) {
      ctx.drawImage(this.villainLeftImage, this.x, this.y, 45, 55);
    }
  
    drawRight(ctx) {
        ctx.drawImage(this.villainRightImage, this.x, this.y, 45, 55);
      }
  }
  
  export default Villain;
  