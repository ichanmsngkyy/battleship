import { Player } from "./Player.js";
import { Ship } from "./Ship.js";


const realPlayer = new Player('real');
const computerPlayer = new Player('computer')

realPlayer.gameboard.placeShip(new Ship(2), [
    [0,0],
    [1,0]
]);

computerPlayer.gameboard.placeShip(new Ship(2), [
    [3,4],
    [4,4]
]);

export {realPlayer, computerPlayer}