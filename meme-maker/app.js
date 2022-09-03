const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); //brush

canvas.width = 800;
canvas.height = 800;

// Path = Layer
// Path1
ctx.rect(50, 50, 100, 100); 
ctx.rect(200, 200, 100, 100); 
ctx.rect(300, 300, 100, 100); 
ctx.fill();

ctx.beginPath();
ctx.rect(400, 400, 100, 100); 
ctx.fillStyle = 'red';
ctx.fill();