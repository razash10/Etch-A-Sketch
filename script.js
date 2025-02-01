function onHover(event) {
    event.target.style.backgroundColor = "black";
    event.target.style.opacity = parseFloat(event.target.style.opacity || 0.05) + 0.05;
}

const container = document.createElement("div");
container.className = "flex-container";

for (let i = 0; i < 16; i++) {
    const cell = document.createElement("div");
    cell.addEventListener("mouseover", onHover)
    container.appendChild(cell);
}

document.body.appendChild(container);
