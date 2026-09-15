import {Player} from '../src/Player.js'
import { Gameboard } from '../src/Gameboard.js';


test('a player has a real type' , () => {
    const player1 = new Player('real');

    expect(player1.type).toBe('real')
});

test('a player has a computer type' , () => {
    const player1 = new Player('computer');

    expect(player1.type).toBe('computer')
});

test(' a player owns a gameboard', () => {
    const player = new Player('real');


    expect(player.gameboard).toBeInstanceOf(Gameboard);

});

test(' each player owns a separate gameboard', () => {
    const realPlayer = new Player('real');
    const computerPlayer= new Player('computer');

    expect(realPlayer.gameboard).not.toBe(computerPlayer.gameboard)
    
});