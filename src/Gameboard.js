export class Gameboard{
    constructor(){
        this.missedAttacks = [];
        this.ships = [];
        this.attackCoordinates = [];
    }

    placeShip(ship, coordinates){
        this.ships.push({
            ship,
            coordinates,
        })
    }

    receiveAttack(coordinates){

        const alreadyAttacked = this.attackCoordinates.some(
            ([attackedX, attackedY]) =>
                attackedX === coordinates[0] &&
                attackedY === coordinates [1]
        );

        if (alreadyAttacked){
            return;
        }

        this.attackCoordinates.push(coordinates)

        for (const placement of this.ships){
            for(const placedCoordinate of placement.coordinates){
                const sameX = placedCoordinate[0] === coordinates[0];
                const sameY = placedCoordinate[1] === coordinates[1];

                if(sameX && sameY){
                    placement.ship.hit();
                    return;
                }
            }
        }
        this.missedAttacks.push(coordinates)
    }

    areAllShipsSunk(){
        for (const placement of this.ships){
            if(!placement.ship.isSunk()){
                return false
            }
        }
        return true;
    }
}