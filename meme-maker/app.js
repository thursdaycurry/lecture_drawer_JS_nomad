const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); //brush

canvas.width = 800;
canvas.height = 800;

// Lecture 1.2 - Path
// // Path = Layer
// // Path1
// ctx.rect(50, 50, 100, 100); 
// ctx.rect(200, 200, 100, 100); 
// ctx.rect(300, 300, 100, 100); 
// ctx.fill();

// ctx.beginPath();
// ctx.rect(400, 400, 100, 100); 
// ctx.fillStyle = 'red';
// ctx.fill();


// Lecture 1.3 - moveTo and lineTo
ctx.moveTo(50, 50);
ctx.lineTo(600, 50);
ctx.lineTo(600, 600);
ctx.lineTo(50, 600);
ctx.lineTo(50, 90);
ctx.stroke();