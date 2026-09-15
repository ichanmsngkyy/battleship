

export function renderBoard(gameboard, container, showShips, onCellClick){
    container.replaceChildren();

    for (let y = 0; y < 10; y++){
        for (let x = 0; x < 10; x++){   

            const cell = document.createElement("button");

            cell.type =" button";
            cell.classList.add(
                "cell",
                "size-8",
                "border",
                "border-slate-400",
                "bg-slate-100",
                "hover:bg-slate-300"
            )
            cell.dataset.x = x;
            cell.dataset.y = y;
            cell.setAttribute("aria-label", `Attack coordinate ${x}, ${y}`);

            const hasShip = gameboard.ships.some((placement) => 
            placement.coordinates.some(
                ([shipX, shipY]) => shipX === x && shipY === y)
            );

            if (hasShip && showShips){
                cell.classList.remove ("bg-slate-100");
                cell.classList.add ("bg-blue-600")
            }

            if (onCellClick){
                cell.addEventListener("click", () => {
                    const coordinate = [
                        Number(cell.dataset.x),
                        Number(cell.dataset.y)
                    ];

                    onCellClick(coordinate);
                });
            }

            container.appendChild(cell);
        }
    }
}