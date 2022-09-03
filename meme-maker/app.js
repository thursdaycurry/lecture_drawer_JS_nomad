const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); //brush

canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 2;

const colors = [
    "#ffcccc",
    "#ffaf40",
    "#fffa65",
    "#4b4b4b",
    "#cd84f1",
    "#32ff7e"
]

function onClick(event) {
    ctx.beginPath()
    ctx.moveTo(0, 0);
    const color = colors[Math.floor(Math.random() * colors.length)];
    ctx.strokeStyle = color;
    console.log(event);
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}

canvas.addEventListener("mousemove", onClick);