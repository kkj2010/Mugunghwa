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
      // const robotImage = new Image();
      // robotImage.src = "./img/robotf.png";
      ctx.drawImage(this.villainLeftImage, this.x, this.y, 45, 55);
   
    }
  
    drawRight(ctx) {
        // const robotImage = new Image();
        // robotImage.src = "./img/robotf.png";
      
        ctx.drawImage(this.villainRightImage, this.x, this.y, 45, 55);
      }
    
    // drawBack(ctx) {
    //   // const robotBackImage = new Image();
    //   // robotBackImage.src = "./img/robotb.png";
  
    //   // robotImage.onload = () => {
    //   //   this.canvasGame
    //   //     .getContext("2d")
    //   ctx.drawImage(this.villainRightImage, this.x, this.y, 130, 170);
    // }
  }
  
  export default Villain;
  