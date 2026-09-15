import {Ship} from "../src/Ship.js"

test('a new ship has the specified length', () => {
    const ship = new Ship(3);

    expect(ship.length).toBe(3)
})


test('a ship got hit', () => {
    const ship = new Ship (1);

    ship.hit();

    expect(ship.hits).toBe(1);
})

test('a fully hit ship sunk', () => {
    const ship = new Ship(1)

    ship.hit();

    expect(ship.isSunk()).toBe(true);
})

test('a partially hit ship is not sunk', () => {
    const ship = new Ship(2)

    ship.hit();

    expect(ship.isSunk()).toBe(false);
})

test('a fully hit large ship  sunk', () => {
    const ship = new Ship(2)

    ship.hit();
    ship.hit();

    expect(ship.isSunk()).toBe(true);
})