import rl from "readline-sync";
import { printMenu } from "./services/utilis/prints.js";
import { MannegerGame } from "./services/serviceGame.js";

function startGame() {
  printMenu();
  const choice = rl.question("");
  MannegerGame(choice);
}

startGame();
