import { construct } from "core-js/fn/reflect";

class GameView {
  constructor(ctx, game) {
    this.ctx = ctx;
    this.game = game;
  }

  start() {
    requestAnimationFrame(this.animate.bind(this)); // 60times/sec
  }
  animate() {
    this.game.draw(this.ctx);
  }
}
export default GameView;