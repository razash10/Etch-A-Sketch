
const container = document.createElement("div");
container.className = "flex-container";

for (let i = 0; i < 16; i++) {
    const cell = document.createElement("div");
    container.appendChild(cell);
}

document.body.appendChild(container);
