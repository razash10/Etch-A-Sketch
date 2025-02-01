function createGrid(cellsNum) {
    let container = document.createElement("div");
    container.id = "grid";
    container.className = "flex-container";
    createGridCells(cellsNum, container);
    document.getElementById("gridContainer").appendChild(container);
}

function resetGrid() {
    const size = prompt("Enter the number of squares per side for the new grid", 16);
    let sizeNum = parseInt(size);

    if(sizeNum > 100) {
        sizeNum = 100;
    }

    if(sizeNum < 1) {
        sizeNum = 1;
    }

    const length = 400 / sizeNum;
    const cellsNum = sizeNum * sizeNum;
    
    document.getElementById("grid").remove();
    createGrid(cellsNum);

    const cells = document.querySelectorAll(".flex-container div");
    cells.forEach(cell => {
        cell.style.backgroundColor = "black";
        cell.style.opacity = 0.05;
        cell.style.width = `${length}px`;
        cell.style.height = `${length}px`;
    });
}

function onHover(event) {
    event.target.style.backgroundColor = "black";
    event.target.style.opacity = parseFloat(event.target.style.opacity || 0) + 0.05;
}

function createGridCells(size, container) {
    for (let i = 0; i < size; i++) {
        const cell = document.createElement("div");
        cell.addEventListener("mouseover", onHover);
        container.appendChild(cell);
    }
}

createGrid(16)