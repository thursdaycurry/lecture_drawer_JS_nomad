const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); //brush

canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = 2;

function onClick(event) {
    ctx.moveTo(0, 0);
    console.log(event);
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}

canvas.addEventListener("mousemove", onClick);