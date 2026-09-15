import {Ship} from '../src/Ship.js'
import {Gameboard} from '../src/Gameboard.js'

let gameBoard;

beforeEach(() => {
    gameBoard = new Gameboard();
});

test('a new gameboard is created', () => {

    expect(gameBoard.missedAttacks).toEqual([]);
});

test('a ship has been placed', () => {

    const ship = new Ship(2);

    const coordinates = [
        [0,2],
        [1,2]
    ];

    gameBoard.placeShip(ship, coordinates);

    expect(gameBoard.ships).toContainEqual({
        ship,
        coordinates,
    });
});

test('a ship has been attacked', () => {
    const ship = new Ship(2);

    const coordinates = [
        [0,2],
        [1,2]
    ];

    gameBoard.placeShip(ship, coordinates);
    gameBoard.receiveAttack([0,2]);

    expect(ship.hits).toBe(1);
})

test ('return false when one ship is still afloat', () => {
    const ship1 = new Ship(1);
    const ship2 = new Ship(1);

    const coordinates = [
        [0,1],
        [1,2]
    ]

    gameBoard.placeShip(ship1, [coordinates[0]]);
    gameBoard.placeShip(ship2, [coordinates[1]]);

    gameBoard.receiveAttack([0,1]);

    expect(gameBoard.areAllShipsSunk()).toBe(false);
})

test ('return true when all ships sunked', () => {
    const ship1 = new Ship(1);
    const ship2 = new Ship(1);

    const coordinates = [
        [0,1],
        [1,2]
    ]

    gameBoard.placeShip(ship1, [coordinates[0]]);
    gameBoard.placeShip(ship2, [coordinates[1]]);

    gameBoard.receiveAttack([0,1]);
     gameBoard.receiveAttack([1,2]);

    expect(gameBoard.areAllShipsSunk()).toBe(true);
})

test ('attack missed on empty coordinates', () => {
    const ship = new Ship(1);

    const coordinates = [
        [0,1],
    ]

    gameBoard.placeShip(ship, coordinates);

    gameBoard.receiveAttack([0,2]);
   
    expect(gameBoard.missedAttacks).toContainEqual([0,2]);
})

