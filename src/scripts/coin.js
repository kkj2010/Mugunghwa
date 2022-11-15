class Coin{
    constructor(x,y){
        // debugger;
        this.x= x;
        this.y= y;
        this.coinImage= new Image();
        this.coinImage.src="./img/coin.png"
    }

    draw(ctx){
        ctx.drawImage(this.coinImage, this.x, this.y, 30, 30);
    }


}

export default Coin;

