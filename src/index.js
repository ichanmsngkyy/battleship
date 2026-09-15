import { renderBoard } from "./dom.js";
import { realPlayer, computerPlayer } from "./Game.js";


const playerContainer = document.querySelector("#player-board");
const computerContainer = document.querySelector("#computer-board");



renderBoard(realPlayer.gameboard, playerContainer, true);
renderBoard(computerPlayer.gameboard, computerContainer, false);