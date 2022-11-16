class Coin {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.coinImage = new Image();
    this.coinImage.src = "./img/coin.png";
    this.height= 30;
    this.weight= 30;
  }

  draw(ctx) {
    ctx.drawImage(this.coinImage, this.x, this.y, 30, 30);
  }
}

export default Coin;
