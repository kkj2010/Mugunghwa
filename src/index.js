
import Game from "./scripts/game.js";
import GameView from "./scripts/game_view.js";


const canvasGame = document.getElementById("gameCanvas");
const ctxGame = canvasGame.getContext("2d");
canvasGame.width = 500;
canvasGame.height = 700;
let game = new Game(60,9);
new GameView(ctxGame, game).start();


