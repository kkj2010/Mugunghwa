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
    // this.game.robot.animateRobot(this.ctx);
    requestAnimationFrame(this.animate.bind(this));
  }
}
export default GameView;
