const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const UP_ARROW = 38;
const DOWN_ARROW = 40;

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.keys = {};
    this.playerImage = new Image();
    this.playerImage.src = "./img/player.png";
    this.height= 50;
    this.width= 60;
  }

  draw(ctx) {
    ctx.drawImage(this.playerImage, this.x, this.y, 50, 60);
  }

  update(e) {
    let moved = false;
    if (e.keyCode === LEFT_ARROW) {
      moved = true;
      this.x -= 7;
      if (this.x <= 0) {
        this.x += 7;
      }
    } else if (e.keyCode === RIGHT_ARROW) {
      moved = true;
      this.x += 7;
      if (this.x >= 450) {
        this.x -= 7;
      }
    }
    if (e.keyCode === UP_ARROW) {
      moved = true;
      this.y -= 7;
      if (this.y <= 0) {
        this.y += 7;
      }
    } else if (e.keyCode === DOWN_ARROW) {
      moved = true;
      this.y += 7;
      if (this.y >= 600) {
        this.y -= 7;
      }
    }
    return moved;
  }
}

export default Player;
