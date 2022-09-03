const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); //brush

canvas.width = 800;
canvas.height = 800;

ctx.fillRect(200, 200, 50, 200);
ctx.fillRect(400, 200, 50, 200);

// code order matters
ctx.lineWidth = 3; //making line thicker
ctx.strokeRect(300, 300, 50, 100);

ctx.fillRect(200, 200, 200, 30);

ctx.moveTo(200, 200);
ctx.lineTo(300, 100);
ctx.lineTo(450, 200);
ctx.fill()
