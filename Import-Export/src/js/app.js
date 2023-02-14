// import * as logs from './game.js';
import Game, {GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame} from './game.js';

const game = new Game();
game.start();

console.log(game)